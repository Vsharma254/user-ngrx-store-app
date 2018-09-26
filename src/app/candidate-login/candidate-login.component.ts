import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Subscription, Observable, interval, timer } from "rxjs";
import { map, tap, take } from "rxjs/operators";
import { NgbDatepickerConfig } from "@ng-bootstrap/ng-bootstrap";
import * as fromCandidate from "../store/candidate";
import * as fromUI from "../store/ui";

import { utility } from "../utility/utlity";

@Component({
  selector: "app-candidate-login",
  templateUrl: "./candidate-login.component.html",
  styleUrls: ["./candidate-login.component.css"],
  providers: [NgbDatepickerConfig]
})
export class CandidateLoginComponent implements OnInit, OnDestroy {
  otp: fromCandidate.OTP = { oTPValue: "", registrationID: "" };
  selectedDate: NgbDateStruct;
  GetCandidateOTPSuccessSubscription: Subscription;
  getProgressBarSubscription: Subscription;
  getforgotDOBSubscription: Subscription;
  getTokenSubscription: Subscription;
  getCandidateLoginSubscription: Subscription;
  forgotDOBResp: fromCandidate.ForgotPasswordResponse = {mobileNo:''};
  verifiedID = "";
  otpreponse = "";
  showOtpSection = false;
  loginFormG: FormGroup;
  otpFormG: FormGroup;
  forgotFormG: FormGroup;
  isAttemtLogin = false;
  isAttemtotp = false;
  isAttempForgot = false;
  isDisable = false;
  mobileNo = "";
  countdonwShow = "5:00";
  isShowForgot = false;
  constructor(
    private fb: FormBuilder,
    private store: Store<fromCandidate.CandidateState>,
    private router: Router,
    config: NgbDatepickerConfig
  ) {
    this.createForm();
    config.minDate = { year: 1900, month: 1, day: 1 };
    
  }
  createForm() {
    this.loginFormG = this.fb.group({
      registrationId: ["", Validators.required],
      dob: ["", Validators.required] // <--- the FormControl called "name"
    });
    this.otpFormG = this.fb.group({
      oTPValue: ["", Validators.required]
    });
    this.forgotFormG = this.fb.group({
      regNo: ["", Validators.required]
    });
  }
  sendOTP() {
    if (this.loginFormG.valid) {
      const logini: fromCandidate.Login = {
        dob: `${this.loginFormG.value.dob.day}-${
          this.loginFormG.value.dob.month
        }-${this.loginFormG.value.dob.year}`,
        registrationId: this.loginFormG.value.registrationId
      };
      this.store.dispatch(new fromCandidate.SendCandidateOTPAction(logini));
    } else {
      this.isAttemtLogin = true;
    }
  }
  verifyOTP() {
    if (this.otpFormG.valid) {
      this.otp.registrationID = this.loginFormG.value.registrationId;
      this.otp.oTPValue = this.otpFormG.value.oTPValue;
      this.store.dispatch(new fromCandidate.VerifyOTPAction(this.otp));
    } else {
      this.isAttemtotp = true;
    }
  }
  ngOnInit() {
    this.SubscribeStore();
  }
  unsubscribeStore() {
    this.getProgressBarSubscription.unsubscribe();
    this.getCandidateLoginSubscription.unsubscribe();
    this.GetCandidateOTPSuccessSubscription.unsubscribe();
    this.getforgotDOBSubscription.unsubscribe();
  }
  ShowForgot() {
    this.isShowForgot = !this.isShowForgot;
    this.forgotDOBResp = { mobileNo: "" };
  }
  forgotDOB() {
    if (this.forgotFormG.valid) {
      this.isAttempForgot = true;
      const request: fromCandidate.ForgotPasswordRequest = {
        regNo: this.forgotFormG.value.regNo
      };
      this.store.dispatch(new fromCandidate.ForgotDOBAction(request));
    } else {
      this.isAttempForgot = true;
    }
  } 

  resendOTP(){
    this.sendOTP();
  }
  cancelOTP(){
    this.store.dispatch(new fromCandidate.SendCandidateOTPCancelAction(''));
  }

  SubscribeStore() {
    this.getTokenSubscription = this.store
      .select(fromCandidate.getToken)
      .subscribe(resp => {
        utility.logSubscription(null, "candidate-login.component.getToken");
        if (resp !== undefined && resp.mobileNo !== undefined) {
          this.mobileNo = `+91-XXXXXX${
            resp.mobileNo.length > 9 ? resp.mobileNo.substr(6) : "0000"
          }`;
        }
      });
    this.getProgressBarSubscription = this.store
      .select(fromUI.getProgressBar)
      .subscribe(resp => {
        utility.logSubscription(null, "progress-bar.component.getProgressBar");
        if (resp !== undefined) {
          this.isDisable = resp.mainProgress;
        }
      });
    this.getCandidateLoginSubscription = this.store
      .select(fromCandidate.getCandidateLogin)
      .subscribe((cand: fromCandidate.Login) => {
        utility.logSubscription(null, "candidate-login.getCandidateLogin");
        if (cand !== undefined) {
          this.verifiedID = cand.registrationId;
          this.showOtpSection = !utility.isUnDefinedNullEmpty(this.verifiedID);
          if (this.showOtpSection) {
            // let counter = 300; // change accordingly
            // let tick = 1000;
            // timer(0, tick).pipe(
            //   map(() => {
            //     --counter;
            //     this.countdonwShow = `${(counter / 60).toFixed(2)}`;
            //   })
            // );
            // let ob = interval(500).subscribe(res => {
            //   const time = 500 - res;
            //   this.countdonwShow = `${(time / 60).toFixed(2)}`;
            //   if (res === 500) {
            //     this.verifiedID = "";
            //     this.showOtpSection = false;
            //     ob.unsubscribe();
            //   }
            // });
            // let addMins = 5 * 60 * 1000;
            //   let countDownDate = new Date().getTime() + addMins;
            // let intval = setInterval(function() {
            //   console.log("Timeer");
            //   let now = new Date().getTime();
            //   // Find the distance between now an the count down date
            //   let distance = countDownDate - now;
            //   var minutes = Math.floor(
            //     (distance % (1000 * 60 * 60)) / (1000 * 60)
            //   );
            //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            //   this.countdonwShow = `${minutes}:${seconds}`;
            //   // If the count down is finished, write some text
            //   if (distance < 0) {
            //     clearInterval(intval);
            //     this.verifiedID = "";
            //     this.showOtpSection = false;
            //   }
            // }, 1000);
          }
        }
      });

    this.GetCandidateOTPSuccessSubscription = this.store
      .select(fromCandidate.getOtpReponse)
      .subscribe((otp: fromCandidate.OTPReponse) => {
        utility.logSubscription(null, "candidate-login.getOtpReponse");
        if (otp !== undefined) {
          this.otpreponse = otp.candidateGuid;
          if (
            !utility.isUnDefinedNullEmpty(this.verifiedID) &&
            !utility.isUnDefinedNullEmpty(this.otpreponse)
          ) {
            this.router.navigate(["/uksee/details/all"]);
          }
        }
      });

    this.getforgotDOBSubscription = this.store
      .select(fromCandidate.getforgotDOB)
      .subscribe((otp: fromCandidate.ForgotPasswordResponse) => {
        utility.logSubscription(null, "candidate-login.getforgotDOB");
        if (
          otp !== undefined &&
          otp.mobileNo !== "" &&
          otp.mobileNo !== undefined &&
          otp.mobileNo !== null
        ) {
          this.forgotDOBResp.mobileNo = `+91-XXXXXX${
            otp.mobileNo.length > 9 ? otp.mobileNo.substr(6) : "0000"
          }`;
          this.isShowForgot = false;
        }
      });
  }
  ngOnDestroy() {
    this.unsubscribeStore();
  }
}
