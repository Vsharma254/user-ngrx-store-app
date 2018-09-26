import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked
} from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription, config } from "rxjs";
import { map, tap } from "rxjs/operators";
import * as fromCandidate from "../store/candidate";
import { utility } from "../utility/utlity";
import * as matser from "../store/master";
import * as candidateModel from "../store/candidate/model";
import { LocalStorageService } from "../utility/tokenService";
import { appConfig } from "../config/config";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"]
})
export class FormsComponent implements OnInit, AfterViewChecked {
  getApplicationProgressSubscription: Subscription;
  isEditDone: fromCandidate.CandidateStatus = {
    done: false,
    inproccess: false
  };
  isPaymentDone: fromCandidate.CandidateStatus = {
    done: false,
    inproccess: false
  };
  isDocDone: fromCandidate.CandidateStatus = { done: false, inproccess: false };
  isSelectclgDone: fromCandidate.CandidateStatus = {
    done: false,
    inproccess: false
  };
  isReportDone: fromCandidate.CandidateStatus = {
    done: false,
    inproccess: false
  };
  progressS = 0;
  width = 0;
  @ViewChild("progressStatus") progressStatus: ElementRef;
  constructor(
    private store: Store<fromCandidate.CandidateState>,
    private router: Router,
    private toekServ: LocalStorageService
  ) {}
  ngAfterViewChecked() {
    window.onscroll = function() {
      myFunction();
    };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }
  ngOnInit() {
    const guidId = this.toekServ.getValueByKey(appConfig.ukseeguidKey);
    if (!utility.isUnDefinedNullEmpty(guidId)) {
      const payload: fromCandidate.GetCandidateInput = {
        candidateGuid: guidId,
        registrationId: ""
      };
      this.store.dispatch(new fromCandidate.GetCandidateAction(payload));
      const payloadMaster: candidateModel.MasterDataInput = {
        sessionGuid: guidId,
        registrationID: ""
      };
      this.store.dispatch(new matser.GetAllMasterAction(payloadMaster));
    }
    this.getApplicationProgressSubscription = this.store
      .select(fromCandidate.getApplicationProgress)
      .subscribe((item: number) => {
        utility.logSubscription(null, "form.getApplicationProgress");
        if (item !== undefined) {
          this.progressS = item;
          this.isEditDone.done = fromCandidate.CandidateOp.getProgress(item, 0); // edit done
          this.isEditDone.inproccess = item > 0;

          this.isPaymentDone.done = fromCandidate.CandidateOp.getProgress(
            item,
            1
          ); // progr done
          this.isPaymentDone.inproccess = item > 1;

          this.isDocDone.done = fromCandidate.CandidateOp.getProgress(item, 2); // edit done
          this.isDocDone.inproccess = item > 2;

          this.isSelectclgDone.done = fromCandidate.CandidateOp.getProgress(
            item,
            3
          ); // edit done
          this.isSelectclgDone.inproccess = item > 3;

          this.isReportDone.done = fromCandidate.CandidateOp.getProgress(
            item,
            4
          ); // edit done
          this.isReportDone.inproccess = item > 4;

          if (this.progressS == 0) {
            this.progressStatus.nativeElement.width = this.width = 12;
          } else if (this.progressS == 1) {
            this.progressStatus.nativeElement.width = this.width = 12;
          } else {
            this.progressStatus.nativeElement.width = this.width =
              this.progressS * 10 + (this.progressS - 1) * 10 + 2 > 90
                ? 100
                : this.progressS * 10 + (this.progressS - 1) * 10 + 2;
          }
          switch (this.progressS) {
            case 0: {
              this.router.navigate(["/uksee/details/all"]);
              break;
            }
            case 1: {
              this.router.navigate(["/uksee/details/payment"]);
              break;
            }
            case 2: {
              this.router.navigate(["/uksee/details/uploaddoc"]);
              break;
            }
            case 3: {
              this.router.navigate(["/uksee/details/choosecollege"]);
              break;
            }
            case 4: {
              this.router.navigate(["/uksee/details/report"]);
              break;
            }
          }
        }
      });
  }
}
