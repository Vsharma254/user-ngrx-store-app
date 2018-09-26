import {
  Component,
  OnInit,
  ViewChild,
  AfterViewChecked,
  ElementRef
} from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { map, tap } from "rxjs/operators";
import * as fromCandidate from "../../store/candidate";
import { NotificationsService } from "angular2-notifications";
import * as fromMaster from "../../store/master";
import { utility } from "../../utility/utlity";
import * as matser from "../../store/master";
import * as candidateModel from "../../store/candidate/model";
import * as ui from "../../store/ui";
import { ConfirmationService } from "@jaspero/ng2-confirmations";
import * as confirm from "../../utility/confirmation-popup/model";
import * as config from "../../config/config";
import { ConfirmComponent } from "../../utility/confirm/confirm.component";

@Component({
  selector: "app-uploaddoc",
  templateUrl: "./uploaddoc.component.html",
  styleUrls: ["./uploaddoc.component.css"]
})
export class UploaddocComponent implements OnInit {
  getDocumentsSubscription: Subscription;
  getApplicationProgressSubscription: Subscription;
  getOtpReponseSubscription: Subscription;
  getProgressBarSubscription: Subscription;
  getDocumentTypeListSubscription: Subscription;
  documents: fromCandidate.Document[] = [];
  documentsTypeList: fromMaster.DocumentTypesList[] = [];
  docFormG: FormGroup;
  isSubmitAttept = false;
  pbar = false;
  otpResponse: fromCandidate.OTPReponse = { candidateGuid: "" };
  isEditable = false;
  @ViewChild("fileinput") file: ElementRef;
  constructor(
    private fb: FormBuilder,
    private store: Store<fromCandidate.CandidateState>,
    private notificationSer: NotificationsService,
    private _confirmation: ConfirmationService,
    private sanitizer: DomSanitizer
  ) {
    this.createForm();
  }
  createForm() {
    this.docFormG = this.fb.group({
      docTypeId: [
        { value: "", disabled: this.isEditable },
        Validators.required
      ],
      doc: [{ value: "", disabled: this.isEditable }, Validators.required]
    });
  }
  ngOnInit() {
    this.SubscribeStore();
  }
  onFileChange(event:any){
    let extension = ["jpeg"];
    let ext: string = event.srcElement.files[0].name.split(".").pop();
    let allowUpload = false;
    allowUpload = extension.indexOf(ext) >= 0 ? true : false;
    if (allowUpload) {
      var fileSize = event.srcElement.files[0].size / 1024;
      allowUpload = false;
      let isMax = false;
      if (fileSize > 400) {
        isMax = true;
      } else if (fileSize < 100) {
        isMax = false;
      } else {
        allowUpload = true;
      }
      if (allowUpload) {      
      } else {
        this.file.nativeElement.value = "";
        this.docFormG.controls['doc'].reset('');
                this.notificationSer.create(
          isMax ? "File size exceeds" : "File size!!",
          isMax
            ? "File size exceeds, maximum size allow 200Kb"
            : "Minimum size allow 20Kb",
          "warn",
          ui.notificInit
        );
      }
    } else {
      this.file.nativeElement.value = "";
      this.docFormG.controls['doc'].reset('');
      this.notificationSer.create(
        "Wrong file selected",
        "Can only upload .jpeg, files!!",
        "warn",
        ui.notificInit
      );
    }
  }
  uploadDoc() {
    let extension = ["jpeg"];
    if(this.file.nativeElement.files[0]!== undefined){
    let ext: string = this.file.nativeElement.files[0].name.split(".").pop();
    let allowUpload = false;
    allowUpload = extension.indexOf(ext) >= 0 ? true : false;
    if (allowUpload) {
      var fileSize = this.file.nativeElement.files[0].size / 1024;
      allowUpload = false;
      let isMax = false;
      if (fileSize > 200) {
        isMax = true;
      } else if (fileSize < 20) {
        isMax = false;
      } else {
        allowUpload = true;
      }
      if (allowUpload) {
        if (this.docFormG.valid) {
          let files = this.file.nativeElement.files[0];
          this.store.dispatch(
            new fromCandidate.UploadDocumentAction(
              files,
              this.docFormG.value.docTypeId,
              this.otpResponse.candidateGuid
            )
          );
        } else {
          this.isSubmitAttept = true;
        }
      } else {
        this.docFormG.controls['doc'].reset('');
        this.notificationSer.create(
          isMax ? "File size exceeds" : "File size!!",
          isMax
            ? "File size exceeds, maximum size allow 200Kb"
            : "Minimum size allow 20Kb",
          "warn",
          ui.notificInit
        );
      }
    } else {
      this.docFormG.controls['doc'].reset('');
      this.notificationSer.create(
        "Wrong file selected",
        "Can only upload .jpeg files!!",
        "warn",
        ui.notificInit
      );
    }
  } else {
    this.isSubmitAttept = true;
  }
  }
  CancleUpload() {
    this.createForm();
    this.isSubmitAttept = false;
  }
  deleteDocument(doc: fromCandidate.Document) {
    this._confirmation
      .create("Are you sure want to delete document?", "", confirm.settings)
      .subscribe((ans: confirm.ResolveEmit) => {
        if (ans.resolved == true) {
          this.store.dispatch(
            new fromCandidate.DeleteDocumentAction(
              doc.id,
              this.otpResponse.candidateGuid
            )
          );
        } else {
        }
      });
  }
  creatUrl(byte:any){    
  var iframe = "<iframe width='100%' height='100%' src='" + byte + "'></iframe>"
  let x = window.open();
  x.document.open();
  x.document.write(iframe);
  x.document.close();
  // window.open(byte, "_blank");
  }
  finalSaveDoc() {
    let hav10th = false;
    let hav12th = false;
    this.documents.map(d => {
      if (d.documentTypeId === 1) {
        hav10th = true;
      }
      if (d.documentTypeId === 2) {
        hav12th = true;
      }
    });
    if (hav10th && hav12th) {
      this._confirmation
        .create(
          "Are you sure want to finish?",
          "You will be no longer able to edit your documents after finish!",
          confirm.settings
        )
        .subscribe((ans: confirm.ResolveEmit) => {
          if (ans.resolved == true) {
            this.store.dispatch(new fromCandidate.FinalDocumentSaveAction(""));
          } else {
          }
        });
    } else {
      this.notificationSer.create(
        "Document Upload Require",
        "Please upload atleast 10th marksheet and cirtificate document before finish!!",
        "warn",
        ui.notificInit
      );
    }
  }
  SubscribeStore() {
    this.getProgressBarSubscription = this.store
    .select(ui.getProgressBar)
    .subscribe(resp => {
      utility.logSubscription(null, "progress-bar.component.getProgressBar");
      if (resp !== undefined) {
        this.pbar = resp.mainProgress;
      }
    });
    this.getApplicationProgressSubscription = this.store
      .select(fromCandidate.getApplicationProgress)
      .subscribe((item: number) => {
        utility.logSubscription(null, "uploaddoc.getApplicationProgress");
        if (item !== undefined) {
          this.isEditable = fromCandidate.CandidateOp.getProgress(item, 3);
          if (this.isEditable) {
            this.docFormG.disable();
          }
        }
      });
    this.getOtpReponseSubscription = this.store
      .select(fromCandidate.getOtpReponse)
      .subscribe(resp => {
        utility.logSubscription(null, "course-details.getOtpReponse");
        if (resp !== undefined) {
          this.otpResponse = resp;
          this.store.dispatch(
            new fromCandidate.GetDocumentAction(this.otpResponse.candidateGuid)
          );
        }
      });
    this.getDocumentsSubscription = this.store
      .select(fromCandidate.getDocumentsWithType)
      .subscribe(resp => {
        utility.logSubscription(null, "personal-details.getDocumentsWithType");
        if (resp !== undefined) {
          this.documents = resp;
          this.CancleUpload();
        }
      });
    this.getDocumentTypeListSubscription = this.store
      .select(fromCandidate.getFilterDocumentTypeByDoc)
      .subscribe(resp => {
        utility.logSubscription(
          null,
          "personal-details.getFilterDocumentTypeByDoc"
        );
        if (resp !== undefined) {
          this.documentsTypeList = resp;
        }
      });
  }
}
