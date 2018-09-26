import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { map, tap } from "rxjs/operators";
import * as fromCandidate from "../../../store/candidate";
import * as fromMaster from "../../../store/master";
import * as ui from "../../../store/ui";
import { utility } from "../../../utility/utlity";

@Component({
  selector: "app-course-details",
  templateUrl: "./course-details.component.html",
  styleUrls: ["./course-details.component.css"]
})
export class CourseDetailsComponent implements OnInit {
  GetCourseSubscription: Subscription;
  getApplicationProgressSubscription:Subscription;
  getMatserAcadmicDomecileListSubscription: Subscription;
  getMatserQualifyingListSubscription: Subscription;
  getMatserBranchListSubscription: Subscription;
  getMatserCourseAppliedListSubscription: Subscription;
  getMatserQualifiedListSubscription: Subscription;
  getOtpReponseSubscription: Subscription;
  getProgressBarSubscription: Subscription;

  courseFormG: FormGroup;
  isSubmitAttept = false;
  otpResponse: fromCandidate.OTPReponse = { candidateGuid: "" };
  acadmicDomecileList: fromMaster.AcademicDomecile[] = [];
  course = fromCandidate.courseInitalization;
  qualifyingExamList: fromMaster.QualifyingExam[] = [];
  branchList: fromMaster.Branch[] = [];
  courseAppliedList: fromMaster.CourseApplied[] = [];
  admiTrhghList: fromMaster.CourseApplied[] = [];
  isEditable = false;
  isDisable = false;
  constructor(
    private fb: FormBuilder,
    private store: Store<fromCandidate.CandidateState>,
    private cStore: Store<fromCandidate.CandidateState>,
    private router: Router
  ) {
    this.createForm();
  }
  createForm() {
    this.courseFormG = this.fb.group({
      qualifyingExamId: ["", Validators.required],
      personalDetailsId: [0, Validators.required],
      academicDomicileId: [0, Validators.required],
      collegeName: ["", Validators.required],
      courseAppliedId: [{value:0, disabled: true}, Validators.required],
      qualifyingPassingYear: ["", Validators.required],      
      admissionThroughId: [0, Validators.required],
      qualifyingBranchId: [0, Validators.required],
      qualifiedExamYear: [0, [Validators.required, Validators.max(2018), Validators.min(2000)]],
      tfw: ["", Validators.required],
      ukseeTotalMarks: ["", Validators.required],
      ukseeObtainedMarks: ["", Validators.required],
      ukseeOverALlRank: ["", Validators.required],
      ukseeCategoryRank: ["", Validators.required],
      qualifiedExamMarks: [0, [Validators.required,Validators.max(100), Validators.min(0)]],
      gateScore: ["", Validators.required],
      air: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.SubscribeStore();
 }
  onQualifyingExChange() {    
    this.cStore.dispatch(
      new fromMaster.GetBranchByIdAction(this.courseFormG.value.qualifyingExamId)
    );
    this.courseFormG.controls['qualifyingBranchId'].reset('');
  }
  updateCourse() {
    if (this.courseFormG.valid) {
      const updateCourse: fromCandidate.CourseDetails = Object.assign(
        {},
        this.courseFormG.getRawValue()
      );
      this.store.dispatch(
        new fromCandidate.UpdateCourseDetailsAction(
          updateCourse,
          this.otpResponse.candidateGuid
        )
      );
    } else {
      this.isSubmitAttept = true;
    }
  }
  setNextPrTab(tab:string){
    this.store.dispatch(new ui.ShowTabAction(tab));
  }
  finalSaveDetails(){
    this.store.dispatch(new fromCandidate.SaveFinalDetailsAction(this.otpResponse.candidateGuid));
  }
  onadmissionThroughChange(){
    const formValue =  <fromCandidate.CourseDetails>this.courseFormG.getRawValue();
    this.isSubmitAttept = false;
    if(formValue.admissionThroughId == 3){
      this.courseFormG.controls['air'].clearValidators();
      this.courseFormG.controls['air'].disable();
      this.courseFormG.controls['air'].reset("");

      this.courseFormG.controls['gateScore'].clearValidators();
      this.courseFormG.controls['gateScore'].disable();
      this.courseFormG.controls['gateScore'].reset("");

      this.courseFormG.controls['qualifiedExamMarks'].clearValidators();
      this.courseFormG.controls['qualifiedExamMarks'].disable();
      this.courseFormG.controls['qualifiedExamMarks'].reset("");

      this.courseFormG.controls['qualifiedExamYear'].clearValidators();
      this.courseFormG.controls['qualifiedExamYear'].disable();
      this.courseFormG.controls['qualifiedExamYear'].reset("");
    }  else{
      this.courseFormG.controls['air'].setValidators([Validators.required])
      this.courseFormG.controls['air'].enable();
      this.courseFormG.controls['air'].reset("");

      this.courseFormG.controls['gateScore'].setValidators([Validators.required])
      this.courseFormG.controls['gateScore'].enable();
      this.courseFormG.controls['gateScore'].reset("");

      this.courseFormG.controls['qualifiedExamMarks'].setValidators([Validators.required,Validators.max(100), Validators.min(0) ])
      this.courseFormG.controls['qualifiedExamMarks'].enable();
      this.courseFormG.controls['qualifiedExamMarks'].reset("");

      this.courseFormG.controls['qualifiedExamYear'].setValidators([Validators.required])
      this.courseFormG.controls['qualifiedExamYear'].enable();
      this.courseFormG.controls['qualifiedExamYear'].reset("");
    }    
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
            this.courseFormG.disable();
          }
        }
      });
    this.getOtpReponseSubscription = this.store
      .select(fromCandidate.getOtpReponse)
      .subscribe(resp => {
        utility.logSubscription(null, "course-details.getOtpReponse");
        if (resp !== undefined) {
          this.otpResponse = resp;          
        }
      });
    this.GetCourseSubscription = this.store
      .select(fromCandidate.getCandidateCourseDetails)
      .subscribe((c: fromCandidate.CourseDetails) => {
        utility.logSubscription(
          null,
          "course-details.getCandidateCourseDetails"
        );
        if (c !== undefined) {
          this.course = Object.assign({}, c);
          this.courseFormG.patchValue(this.course);
          const formValue =  <fromCandidate.CourseDetails>this.courseFormG.value;
          if(formValue.admissionThroughId == 3){
            this.courseFormG.controls['admissionThroughId'].disable();
            this.courseFormG.controls['air'].clearValidators();
            this.courseFormG.controls['air'].disable();
            this.courseFormG.controls['air'].reset("");

            this.courseFormG.controls['gateScore'].clearValidators();
            this.courseFormG.controls['gateScore'].disable();
            this.courseFormG.controls['gateScore'].reset("");

            this.courseFormG.controls['qualifiedExamMarks'].clearValidators();
            this.courseFormG.controls['qualifiedExamMarks'].disable();
            this.courseFormG.controls['qualifiedExamMarks'].reset("");

            this.courseFormG.controls['qualifiedExamYear'].clearValidators();
            this.courseFormG.controls['qualifiedExamYear'].disable();
            this.courseFormG.controls['qualifiedExamYear'].reset("");
          }          
        }
      });
    this.getMatserAcadmicDomecileListSubscription = this.store
      .select(fromMaster.getMatserAcadmicDomecileList)
      .subscribe((item: fromMaster.AcademicDomecile[]) => {
        utility.logSubscription(
          null,
          "course-details.getMatserAcadmicDomecileList"
        );
        if (item !== undefined) {
          this.acadmicDomecileList = item;
        }
      });
    this.getMatserQualifyingListSubscription = this.cStore
      .select(fromMaster.getMatserQualifyingList)
      .subscribe((item: fromMaster.QualifyingExam[]) => {
        if (item !== undefined) {
          this.qualifyingExamList = item;
        }
      });
    this.getMatserBranchListSubscription = this.cStore
      .select(fromMaster.getMatserBranchList)
      .subscribe((item: fromMaster.Branch[]) => {
        if (item !== undefined) {
          this.branchList = item;
        }
      });
    this.getMatserCourseAppliedListSubscription = this.cStore
      .select(fromMaster.getMatserCourseAppliedList)
      .subscribe((item: fromMaster.Branch[]) => {
        if (item !== undefined) {
          this.courseAppliedList = item;
        }
      });
    this.getMatserQualifiedListSubscription = this.cStore
      .select(fromMaster.getMatserQualifiedList)
      .subscribe((item: fromMaster.Branch[]) => {
        if (item !== undefined) {
          this.admiTrhghList = item;
        }
      });
  }
}
