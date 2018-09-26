import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { map, tap } from "rxjs/operators";
import { utility } from "../../utility/utlity";
import * as fromCandidate from "../../store/candidate";
import { ConfirmationService } from "@jaspero/ng2-confirmations";
import * as confirm from "../../utility/confirmation-popup/model";
@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"]
})
export class PaymentComponent implements OnInit {
  getPaymentDetailsSubscription: Subscription;
  getApplicationProgressSubscription: Subscription;
  getOtpReponseSubscription: Subscription;
  otpResponse: fromCandidate.OTPReponse = { candidateGuid: "" };
  payment: fromCandidate.PaymentDetails = fromCandidate.paymentInit;
  isEditable = false;
  isFinish
  constructor(
    private store: Store<fromCandidate.CandidateState>,
    private _confirmation: ConfirmationService
  ) {}

  ngOnInit() {
    this.SubscribeStore();
  }
  finalSaveDetails() {
    this._confirmation
      .create(
        "Are you sure want to finish?",
        "Please sure with payment details before finish!",
        confirm.settings
      )
      .subscribe((ans: confirm.ResolveEmit) => {
        if (ans.resolved == true) {
          this.store.dispatch(new fromCandidate.FinalPaymentAction(""));
        } else {
        }
      });
  }
  SubscribeStore() {
    this.getOtpReponseSubscription = this.store
      .select(fromCandidate.getOtpReponse)
      .subscribe(resp => {
        utility.logSubscription(null, "payment.getOtpReponse");
        if (resp !== undefined) {
          this.otpResponse = resp;
          this.store.dispatch(
            new fromCandidate.GetPaymentAction(this.otpResponse.candidateGuid)
          );
        }
      });
    this.getPaymentDetailsSubscription = this.store
      .select(fromCandidate.getPaymentDetails)
      .subscribe((item: fromCandidate.PaymentDetails) => {
        utility.logSubscription(null, "payment.getPaymentDetails");
        if (item !== undefined) {
          this.payment = item;
        }
      });
    this.getApplicationProgressSubscription = this.store
      .select(fromCandidate.getApplicationProgress)
      .subscribe((item: number) => {
        utility.logSubscription(null, "payment.getApplicationProgress");
        if (item !== undefined) {
          this.isEditable = fromCandidate.CandidateOp.getProgress(item, 2);
          if (this.isEditable) {
          }
        }
      });
  }
}
