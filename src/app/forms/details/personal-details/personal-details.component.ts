import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import {
  HttpClient,
  HttpParams,
  HttpRequest,
  HttpEvent
} from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ConfirmationService } from "@jaspero/ng2-confirmations";
import { NotificationsService } from "angular2-notifications";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { map, tap } from "rxjs/operators";
import * as fromUI from "../../../store/ui";
import * as fromCandidate from "../../../store/candidate";
import * as fromMaster from "../../../store/master";
import * as ui from "../../../store/ui";
import { utility } from "../../../utility/utlity";
import * as confirm from "../../../utility/confirmation-popup/model";
import * as config from "../../../config/config";
import { ConfirmComponent } from "../../../utility/confirm/confirm.component";

@Component({
  selector: "app-personal-details",
  templateUrl: "./personal-details.component.html",
  styleUrls: ["./personal-details.component.css"]
})
export class PersonalDetailsComponent implements OnInit {
  GetCandidateSubscription: Subscription;
  getMatserCategoryListSubscription: Subscription;
  getMatserSubCategoryListSubscription: Subscription;
  getMatserStateListSubscription: Subscription;
  getMatserNationalityListSubscription: Subscription;
  getMatserResidentialDomecileListSubscription: Subscription;
  getOtpReponseSubscription: Subscription;
  getApplicationProgressSubscription: Subscription;
  getProgressBarSubscription: Subscription;
  candidate: fromCandidate.CandiateAllDetails;
  categoryList: fromMaster.Category[] = [];
  subCategoryList: fromMaster.SubCategory[] = [];
  stateList: fromMaster.State[] = [];
  nationanlityList: fromMaster.State[] = [];
  resiDomecileList: fromMaster.ResidentialDomecile[] = [];
  showPhotoUpload = false;
  showSignatureUpload = false;
  personDeFormG: FormGroup;
  otpResponse: fromCandidate.OTPReponse = { candidateGuid: "" };
  imageUrl: SafeUrl;
  signatureURL: SafeUrl;
  isSubmitAttept = false;
  isEditable: boolean = true;
  isDisable = false;
  isPageLoad = false;
  @ViewChild("photofile") photofile: any;
  @ViewChild("signaturefile") signaturefile: any;
  dialogRef: MatDialogRef<ConfirmComponent>;
  constructor(
    private fb: FormBuilder,
    private store: Store<fromCandidate.CandidateState>,
    private router: Router,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    public dialog: MatDialog,
    private _confirmation: ConfirmationService,
    private notificationSer: NotificationsService
  ) {
    this.createForm();
  }
  createForm() {
    this.personDeFormG = this.fb.group({
      tokenNo: [{ value: "" }, Validators.required],
      regNo: ["", Validators.required],
      candidateName: ["", Validators.required],
      motherName: ["", Validators.required],
      gender: ["", Validators.required],
      categoryId: ["", Validators.required],
      mobileNo: [0, [Validators.required, Validators.min(10)]],
      email: ["", Validators.required],
      currentAddress: ["", Validators.required],
      stateId: [""],
      dated: ["-", Validators.required],
      rollNo: ["", Validators.required],
      fatherName: ["", Validators.required],
      dob: ["", Validators.required],
      residentialDomicileId: ["", Validators.required],
      subCategoryId: ["", Validators.required],
      alternateMobileNo: [0, [Validators.required,  Validators.max(10)]],
      pincode: [0, [Validators.required, Validators.min(5)]],
      signatureImageUrl: ["", Validators.required],
      photoImageUrl: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.SubscribeStore();
  }
  onPhotoFileChange(event: any) {
    let extension = ["jpeg"];
    let ext: string = event.srcElement.files[0].name.split(".").pop();
    let allowUpload = false;
    allowUpload = extension.indexOf(ext) >= 0 ? true : false;
    if (allowUpload) {
      var fileSize = event.srcElement.files[0].size / 1024;
      allowUpload = false;
      let isMax = false;
      if (fileSize > 50) {
        isMax = true;
      } else if (fileSize < 20) {
        isMax = false;
      } else {
        allowUpload = true;
      }
      if (allowUpload) {
        this.store.dispatch(
          new fromCandidate.UploadFileAction(
            event.srcElement.files[0],
            "photo",
            this.otpResponse.candidateGuid
          )
        );
        this.photofile.nativeElement.value = "";
        this.showPhotoUpload = !this.showPhotoUpload;
      } else {
        this.photofile.nativeElement.value = "";
        this.notificationSer.create(
          isMax ? "File size exceeds" : "File size!!",
          isMax
            ? "File size exceeds, maximum size allow 200Kb"
            : "Minimum size allow 20Kb",
          "warn",
          fromUI.notificInit
        );
      }
    } else {
      this.photofile.nativeElement.value = "";
      this.notificationSer.create(
        "Wrong file selected",
        "Can only upload .jpeg files!!",
        "warn",
        fromUI.notificInit
      );
    }
  }
  onSignatureFileChange(event: any) {
    let extension = ["jpeg"];
    let ext: string = event.srcElement.files[0].name.split(".").pop();
    let allowUpload = false;
    allowUpload = extension.indexOf(ext) >= 0 ? true : false;
    if (allowUpload) {
      var fileSize = event.srcElement.files[0].size / 1024;
      allowUpload = false;
      let isMax = false;
      if (fileSize > 100) {
        isMax = true;
      } else if (fileSize < 50) {
        isMax = false;
      } else {
        allowUpload = true;
      }
      if (allowUpload) {
        this.store.dispatch(
          new fromCandidate.UploadFileAction(
            event.srcElement.files[0],
            "signature",
            this.otpResponse.candidateGuid
          )
        );
        this.signaturefile.nativeElement.value = "";
        this.showSignatureUpload = !this.showSignatureUpload;
      } else {
        this.notificationSer.create(
          isMax ? "File size exceeds" : "File size!!",
          isMax
            ? "File size exceeds, maximum size allow 200Kb"
            : "Minimum size allow 20Kb",
          "warn",
          fromUI.notificInit
        );
      }
    } else {
      this.notificationSer.create(
        "Wrong file selected",
        "Can only upload .jpeg files!!",
        "warn",
        fromUI.notificInit
      );
    }
  }
  changePhotoShow() {
    this.showPhotoUpload = !this.showPhotoUpload;
  }
  changeSignatureShow() {
    this.showSignatureUpload = !this.showSignatureUpload;
  }
  onResidentialChange() {
    this.store.dispatch(
      new fromMaster.GetCategoryByIDAction(
        this.personDeFormG.value.residentialDomicileId
      )
    );
    this.personDeFormG.controls["categoryId"].reset("");
  }
  onCategoryChange() {
    this.store.dispatch(
      new fromMaster.GetSubCategoryByIDAction(
        this.personDeFormG.value.categoryId
      )
    );
    this.personDeFormG.controls["subCategoryId"].reset("");
  }
  updatePDetails() {
    if (this.personDeFormG.valid) {
      const updateCan: fromCandidate.CandiateAllDetails = Object.assign(
        {},
        this.candidate,
        this.personDeFormG.getRawValue()
      );
      this.store.dispatch(
        new fromCandidate.UpdatePersonalDetailsAction(
          updateCan,
          this.otpResponse.candidateGuid
        )
      );
    } else {
      this.isSubmitAttept = true;
    }
  }
  finalSaveDetails() {
    this._confirmation
      .create(
        "Are you sure you want to finish?",
        "You will be no longer able to edit your details after finish!",
        confirm.settings
      )
      .subscribe((ans: confirm.ResolveEmit) => {
        if (ans.resolved == true) {
          this.store.dispatch(
            new fromCandidate.SaveFinalDetailsAction(
              this.otpResponse.candidateGuid
            )
          );
        } else {
        }
      });
  }
  setNextPrTab(tab: string) {
    this.store.dispatch(new ui.ShowTabAction(tab));
  }
  SubscribeStore() {
    this.getProgressBarSubscription = this.store
      .select(ui.getProgressBar)
      .subscribe(resp => {
        utility.logSubscription(null, "choose-clg.getProgressBar");
        if (resp !== undefined) {
          this.isDisable = resp.mainProgress || resp.masterProgressBar;
        }
      });
    this.getApplicationProgressSubscription = this.store
      .select(fromCandidate.getApplicationProgress)
      .subscribe((item: number) => {
        utility.logSubscription(
          null,
          "personal-details.getApplicationProgress"
        );
        if (item !== undefined) {
          this.isEditable = fromCandidate.CandidateOp.getProgress(item, 1);
          if (this.isEditable) {
            this.personDeFormG.disable();
          }
        }
      });
    this.getOtpReponseSubscription = this.store
      .select(fromCandidate.getOtpReponse)
      .subscribe(resp => {
        utility.logSubscription(null, "personal-details.getOtpReponse");
        if (resp !== undefined) {
          this.otpResponse = resp;
        }
      });
    this.GetCandidateSubscription = this.store
      .select(fromCandidate.getCandidateAllDetails)
      .subscribe((cand: fromCandidate.CandiateAllDetails) => {
        utility.logSubscription(
          null,
          "personal-details.getCandidateAllDetails"
        );
        if (cand !== undefined) {
          this.candidate = Object.assign({}, cand);
          this.personDeFormG.patchValue(this.candidate);
          this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(
            this.candidate.photoImageUrl
          );
          this.signatureURL = this.sanitizer.bypassSecurityTrustUrl(
            this.candidate.signatureImageUrl
          );          
        }
      });
    this.getMatserCategoryListSubscription = this.store
      .select(fromMaster.getMatserCategoryList)
      .subscribe((item: fromMaster.Category[]) => {
        utility.logSubscription(null, "personal-details.getMatserCategoryList");
        if (item !== undefined) {
          this.categoryList = item;
        }
      });
    this.getMatserSubCategoryListSubscription = this.store
      .select(fromMaster.getMatserSubCategoryList)
      .subscribe((item: fromMaster.SubCategory[]) => {
        utility.logSubscription(
          null,
          "personal-details.getMatserSubCategoryList"
        );
        if (item !== undefined) {
          this.subCategoryList = item;
        }
      });
    this.getMatserStateListSubscription = this.store
      .select(fromMaster.getMatserStateList)
      .subscribe((item: fromMaster.State[]) => {
        utility.logSubscription(null, "personal-details.getMatserStateList");
        if (item !== undefined) {
          this.stateList = item;
        }
      });
    this.getMatserNationalityListSubscription = this.store
      .select(fromMaster.getMatserNationalityList)
      .subscribe((item: fromMaster.Nationality[]) => {
        utility.logSubscription(
          null,
          "personal-details.getMatserNationalityList"
        );
        if (item !== undefined) {
          this.nationanlityList = item;
        }
      });
    this.getMatserResidentialDomecileListSubscription = this.store
      .select(fromMaster.getMatserResidentialDomecileList)
      .subscribe((item: fromMaster.ResidentialDomecile[]) => {
        utility.logSubscription(
          null,
          "personal-details.getMatserResidentialDomecileList"
        );
        if (item !== undefined) {
          this.resiDomecileList = item;
        }
      });
  }
}
