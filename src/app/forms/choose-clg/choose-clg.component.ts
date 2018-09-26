import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConfirmationService } from "@jaspero/ng2-confirmations";
import * as confirm from "../../utility/confirmation-popup/model";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { map, tap } from "rxjs/operators";
import { NotificationsService } from "angular2-notifications";
import * as fromCandidate from "../../store/candidate";
import * as fromMaster from "../../store/master";
import * as fromUI from "../../store/ui";
import { utility } from "../../utility/utlity";
import { VIEWPORT_RULER_PROVIDER } from "@angular/cdk/overlay";

@Component({
  selector: "app-choose-clg",
  templateUrl: "./choose-clg.component.html",
  styleUrls: ["./choose-clg.component.css"]
})
export class ChooseClgComponent implements OnInit {
  getProgressBarSubscription: Subscription;
  getSelectedCollegesSubscription: Subscription;
  GetCourseSubscription: Subscription;
  getApplicationProgressSubscription: Subscription;
  getCollegesSubscription: Subscription;
  getbranchSubscription: Subscription;
  getCollegeTypeSubscription: Subscription;
  getOtpReponseSubscription: Subscription;
  getCandidateSubscription: Subscription;
  getseatSelectionOTPSubscription: Subscription;
  seatOtp: fromCandidate.SeatSelectionOTP = {
    isSent: false,
    registrationID: "",
    oTPValue: 0,
    mobileNo: ""
  };
  isInProccess = false;
  mobileNo = "";
  priPStatus = false;
  courseFormG: FormGroup;
  OtpFormG: FormGroup;
  isSubmitAttept = false;
  isOtpSubmitAttept = false;
  GetCandidateSubscription: Subscription;
  selectedCollegeList: fromCandidate.SelectedColleges[] = [];
  colleges: fromMaster.Collage[] = [];
  collegeType: fromMaster.CollageType[] = [];
  brnaches: fromMaster.Branch[] = [];
  candidateAll: fromCandidate.CandiateAllDetails;
  course: fromCandidate.CourseDetails = fromCandidate.courseInitalization;
  selectedCollge: fromCandidate.SelectedColleges = {
    branchId: 0,
    collegeId: 0,
    courseId: this.course.courseAppliedId,
    personalDetailsId: this.course.personalDetailsId,
    priorityOrder: 1,
    branchName: "",
    collegeName: ""
  };
  isEditable = false;
  otpResponse: fromCandidate.OTPReponse;
  constructor(
    private fb: FormBuilder,
    private store: Store<fromCandidate.CandidateState>,
    private notificationSer: NotificationsService,
    private _confirmation: ConfirmationService
  ) {
    this.createForm();
  }
  createForm() {
    this.courseFormG = this.fb.group({
      collegeId: [0, [Validators.required, Validators.min(1)]],
      branchId: [0, [Validators.required, Validators.min(1)]],
      collegeTypeId: [0, [Validators.required, Validators.min(1)]]
    });
    this.OtpFormG = this.fb.group({
      otpValue: [null, [Validators.required, Validators.min(4)]]
    });
  }
  ngOnInit() {
    this.SubscribeStore();
  }
  collegeTypeChange(e: number) {
    this.store.dispatch(
      new fromMaster.FilterClgByClgTypIdAction(
        this.courseFormG.value.collegeTypeId,
        this.course.courseAppliedId
      )
    );
  }
  collegeChange(e: number) {
    this.store.dispatch(
      new fromMaster.FilterBranchByClgIdAction(
        this.courseFormG.value.collegeId,
        this.course.courseAppliedId
      )
    );
  }
  addMoreRow() {
    if (this.courseFormG.valid) {
      let allowAdd = true;
      this.selectedCollegeList.map(clg => {
        if (
          clg.branchId == this.courseFormG.value.branchId &&
          clg.collegeId == this.courseFormG.value.collegeId
        ) {
          allowAdd = false;
        }
      });
      if (allowAdd) {
        if (this.selectedCollegeList.length > 0) {
          const m = this.selectedCollegeList.reduce(
            (prev, current) =>
              prev.priorityOrder > current.priorityOrder ? prev : current
          );
          this.selectedCollge.priorityOrder =
            m !== undefined ? m.priorityOrder + 1 : 1;
        } else {
          this.selectedCollge.priorityOrder = 1;
        }
        this.selectedCollge.personalDetailsId = this.course.personalDetailsId;
        this.selectedCollge.courseId = this.course.courseAppliedId;
        this.selectedCollge.collegeId = this.courseFormG.value.collegeId;
        this.selectedCollge.branchId = this.courseFormG.value.branchId;
        this.selectedCollge.collegeName = this.colleges.find(i => {
          return i.id == this.selectedCollge.collegeId;
        }).name;
        this.selectedCollge.branchName = this.brnaches.find(
          i => i.id == this.selectedCollge.branchId
        ).name;
        this.store.dispatch(
          new fromCandidate.AddMoreCollegeAction(
            Object.assign({}, this.selectedCollge)
          )
        );
      } else {
        this.notificationSer.create(
          "Already Added",
          "College along with branch is already added in list.",
          "warn",
          fromUI.notificInit
        );
      }
    } else {
      this.isSubmitAttept = true;
    }
  }
  removeCollege(clg: fromCandidate.SelectedColleges) {
    this.store.dispatch(new fromCandidate.RemoveCollegeAction(clg));
  }
  setPriority(clg: fromCandidate.SelectedColleges, upDown: number) {
    this.store.dispatch(
      new fromCandidate.SetCollegePriorityAction(clg.priorityOrder, upDown)
    );
  }
  verifyOPT() {
    if (this.OtpFormG.valid) {
      this.isOtpSubmitAttept = false;
      const otp = {
        oTPValue: this.OtpFormG.value.otpValue,
        registrationID: this.candidateAll.regNo
      };
      this.store.dispatch(
        new fromCandidate.VerifySeatOTPAction(
          otp,
          this.otpResponse.candidateGuid
        )
      );
    } else {
      this.isOtpSubmitAttept = true;
    }
  }
  resendOPT() {
    this.store.dispatch(
      new fromCandidate.FinalSaveCollegeSaveAction(
        "",
        this.otpResponse.candidateGuid
      )
    );
  }
  saveAllCollege() {
    if (this.selectedCollegeList.length > 0) {
      this.store.dispatch(
        new fromCandidate.SaveSelectedCollegeAction(
          this.selectedCollegeList,
          this.otpResponse.candidateGuid
        )
      );
    } else {
      this.notificationSer.create(
        "Select College",
        "Please select atleast one college!!",
        "warn",
        fromUI.notificInit
      );
    }
  }
  CancelOTP() {
    this.isEditable = false;
    this.store.dispatch(
      new fromCandidate.CancelVerifySeatOTPAction(""      )
    );     
  }
  finalSave() {
    this._confirmation
      .create(
        "Are you sure want to finish?",
        "You will recieve OTP to confirm your seat selection!!",
        confirm.settings
      )
      .subscribe((ans: confirm.ResolveEmit) => {
        if (ans.resolved == true) {
          this.store.dispatch(
            new fromCandidate.FinalSaveCollegeSaveAction(
              "",
              this.otpResponse.candidateGuid
            )
          );
        } else {
        }
      });
  }
  SubscribeStore() {
    this.getProgressBarSubscription = this.store
      .select(fromUI.getProgressBar)
      .subscribe(resp => {
        utility.logSubscription(null, "choose-clg.getProgressBar");
        if (resp !== undefined) {
          this.priPStatus = resp.mainProgress || resp.changePriorityPBar;          
        }
      });

    this.getOtpReponseSubscription = this.store
      .select(fromCandidate.getOtpReponse)
      .subscribe(resp => {
        utility.logSubscription(null, "choose-clg.getOtpReponse");
        if (resp !== undefined) {
          this.otpResponse = resp;
          this.store.dispatch(
            new fromCandidate.GetSelectedCollegeAction(
              this.otpResponse.candidateGuid
            )
          );
        }
      });
    this.getApplicationProgressSubscription = this.store
      .select(fromCandidate.getApplicationProgress)
      .subscribe((item: number) => {
        utility.logSubscription(null, "choose-clg.getApplicationProgress");
        if (item !== undefined) {
          this.isEditable = fromCandidate.CandidateOp.getProgress(item, 4);
          if (this.isEditable) {
            this.courseFormG.disable();
          }
        }
      });
    this.GetCourseSubscription = this.store
      .select(fromCandidate.getCandidateCourseDetails)
      .subscribe((c: fromCandidate.CourseDetails) => {
        utility.logSubscription(null, "choose-clg.getCandidateCourseDetails");
        if (c !== undefined) {
          this.course = c;
        }
      });
    this.getSelectedCollegesSubscription = this.store
      .select(fromCandidate.getSelectedColleges)
      .subscribe((item: fromCandidate.SelectedColleges[]) => {
        utility.logSubscription(null, "choose-clg.getSelectedColleges");
        if (item !== undefined) {
          this.selectedCollegeList = item;
        }
      });
    this.getCollegesSubscription = this.store
      .select(fromMaster.getMatserCollegeList)
      .subscribe((item: fromMaster.Collage[]) => {
        utility.logSubscription(null, "choose-clg.getMatserCollegeList");
        if (item !== undefined) {
          this.colleges = item;
          this.courseFormG.controls["collegeId"].reset("0");
          this.courseFormG.controls["branchId"].reset("0");
        }
      });
      

    this.getCandidateSubscription = this.store
    .select(fromCandidate.getCandidateAllDetails)
    .subscribe((item:fromCandidate.CandiateAllDetails) => {
      utility.logSubscription(null, "choose-clg.getCandidateAllDetails");
      if (item !== undefined) {
        this.candidateAll = item;        
      }
    });
    this.getbranchSubscription = this.store
      .select(fromMaster.getMatserCourseBranchList)
      .subscribe((item: fromMaster.Branch[]) => {
        utility.logSubscription(null, "choose-clg.getMatserCourseBranchList");
        if (item !== undefined) {
          this.brnaches = item;
          this.courseFormG.controls["branchId"].reset("0");
        }
      });
    this.getCollegeTypeSubscription = this.store
      .select(fromMaster.getMatsercollegeTypeList)
      .subscribe((item: fromMaster.Branch[]) => {
        utility.logSubscription(null, "choose-clg.getMatsercollegeTypeList");
        if (item !== undefined) {
          this.collegeType = item;
        }
      });
    this.getseatSelectionOTPSubscription = this.store
      .select(fromCandidate.getseatSelectionOTP)
      .subscribe((item: fromCandidate.SeatSelectionOTP) => {
        utility.logSubscription(null, "choose-clg.getseatSelectionOTP");
        if (item !== undefined) {
          this.seatOtp = item;          
          if (
            item !== undefined &&
            item.mobileNo !== "" &&
            item.mobileNo !== undefined &&
            item.mobileNo !== null
          ) {
            this.seatOtp.mobileNo = `+91-XXXXXX${
              item.mobileNo.length > 9 ? item.mobileNo.substr(6) : "0000"
            }`;
          }
        }
      });
  }
}
