import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { ConfirmationService } from "@jaspero/ng2-confirmations";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl
} from "@angular/forms";
import { Subscription } from "rxjs";
import { map, tap } from "rxjs/operators";
import * as fromCandidate from "../../../store/candidate";
import * as ui from "../../../store/ui";
import { utility } from "../../../utility/utlity";
import * as confirm from "../../../utility/confirmation-popup/model";

@Component({
  selector: "app-education-details",
  templateUrl: "./education-details.component.html",
  styleUrls: ["./education-details.component.css"]
})
export class EducationDetailsComponent implements OnInit {
  GetEducationDetailsSubscription: Subscription;
  getApplicationProgressSubscription: Subscription;
  getProgressBarSubscription: Subscription;
  getOtpReponseSubscription: Subscription;
  education: fromCandidate.EducationDetails[] = [];
  otpResponse: fromCandidate.OTPReponse = { candidateGuid: "" };
  isEditable = false;
  formGroup: FormGroup;
  isSubmitAttept = false;
  isDisable = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromCandidate.CandidateState>,
    private router: Router,
    private _confirmation: ConfirmationService
  ) {}

  createForm(item: any) {
    return this.fb.group({
      id: [item.id],
      statusId: [item.statusId, Validators.required],
      educationCourseId: [item.educationCourseId, Validators.required],
      board: [item.board, Validators.required],
      educationCourseName: [
        { value: item.educationCourseName, disabled: true }
      ],
      totalMarks: [item.totalMarks, Validators.required],
      obtainMarks: [item.obtainMarks, Validators.required],
      percentage: [item.percentage, Validators.required],
      year: [item.year, Validators.required],
      personalDetailsId: [item.personalDetailsId, Validators.required],
      isSubmitAttepted: [false]
    });
  }
  ngOnInit() {
    this.SubscribeStore();
  }
  updateEducation(item: FormGroup, index: number) {
    if (item.valid) {
      this.store.dispatch(
        new fromCandidate.UpdateEducationDetailsAction(
          Object.assign({}, this.education, item.value),
          this.otpResponse.candidateGuid
        )
      );
    } else {
      item.value.isSubmitAttepted = true;
    }
  }
  finalSaveDetails(){
    this._confirmation
      .create(
        "Are you sure want to finish?",
        "You will be no longer able to edit your details after finish!",
        confirm.settings
      )
      .subscribe((ans: confirm.ResolveEmit) => {
        if (ans.resolved == true) {
          this.store.dispatch(new fromCandidate.SaveFinalDetailsAction(this.otpResponse.candidateGuid));
        } else {
        }
      });
    
  }
  setNextPrTab(tab:string){
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
        }
      });
    this.getOtpReponseSubscription = this.store
      .select(fromCandidate.getOtpReponse)
      .subscribe(resp => {
        utility.logSubscription(null, "education-details.getOtpReponse");
        if (resp !== undefined) {
          this.otpResponse = resp;
        }
      });
    this.GetEducationDetailsSubscription = this.store
      .select(fromCandidate.getCandidateEducationDetails)
      .subscribe((e: fromCandidate.EducationDetails[]) => {
        utility.logSubscription(
          null,
          "course-details.getCandidateEducationDetails"
        );
        if (e !== undefined) {
          this.education = e;
          this.formGroup = this.fb.group({
            list: new FormArray(
              this.education.map(edu => {
                return this.createForm(edu);
              })
            )
          });
          this.store
            .select(fromCandidate.getApplicationProgress)
            .subscribe((item: number) => {
              utility.logSubscription(
                null,
                "personal-details.getApplicationProgress"
              );
              if (item !== undefined) {
                if (fromCandidate.CandidateOp.getProgress(item, 1)) {
                  this.formGroup.disable();
                }
              }
            })
            .unsubscribe();
          this.isSubmitAttept = false;
        }
      });
  }
}
