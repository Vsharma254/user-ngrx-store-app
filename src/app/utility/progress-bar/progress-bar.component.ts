import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { map, tap } from "rxjs/operators";
import * as fromUI from "../../store/ui";
import { utility } from "../../utility/utlity";
import { MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR } from "@angular/material";

@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.css"]
})
export class ProgressBarComponent implements OnInit {
  getProgressBarSubscription: Subscription;
  pbar: fromUI.ProgreeBar = fromUI.setInit;
  @Input("showProgress") showProgress: boolean = false;
  constructor(private store: Store<fromUI.UIState>) {}

  ngOnInit() {
    this.SubscribeStore();
  }
  showProgressbar() {
    // let retval=false
    // if(this.pbar.mainProgress || pbar.masterProgressBar | showProgress){
    // }
    // return ;
  }
  SubscribeStore() {
    this.getProgressBarSubscription = this.store
      .select(fromUI.getProgressBar)
      .subscribe(resp => {
        utility.logSubscription(null, "progress-bar.component.getProgressBar");
        if (resp !== undefined) {
          this.pbar = resp;
        }
      });
  }
}
