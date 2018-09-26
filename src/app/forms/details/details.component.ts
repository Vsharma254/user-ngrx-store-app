import { Component, OnInit, ViewChild, AfterViewChecked } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { map, tap } from "rxjs/operators";
import * as fromCandidate from "../../store/candidate";
import { utility } from "../../utility/utlity";
import * as matser from "../../store/master";
import * as root from "../../store/root";
import * as ui from "../../store/ui";
import * as candidateModel from "../../store/candidate/model";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  getApplicationProgressSubscription: Subscription;
  getTabShowSubscription: Subscription;
  iseditable = false;
  tabName = "pdetails";
  constructor(private store: Store<root.State>, private router: Router) {}
  ngOnInit() {
    this.store.dispatch(new ui.ShowTabAction("pdetails"));
        this.getApplicationProgressSubscription = this.store
      .select(fromCandidate.getApplicationProgress)
      .subscribe((item: number) => {
        utility.logSubscription(null, "form.getApplicationProgress");
        if (item !== undefined) {
          this.iseditable = fromCandidate.CandidateOp.getProgress(item, 1);
        }
      });
    this.getTabShowSubscription = this.store
      .select(ui.getTabShowBar)
      .subscribe((item: string) => {
        utility.logSubscription(null, "details.getTabShowBar");
        if (item !== undefined) {
          this.tabName = item;
        }
      });
  }
  setSelectedTab(tab: string) {
    this.store.dispatch(new ui.ShowTabAction(tab));
  }
  getTab(tab: string) {
    return tab === this.tabName;
  }
}
