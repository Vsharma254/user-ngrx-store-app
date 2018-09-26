import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as fromCandidate from '../../store/candidate';
import * as fromMaster from '../../store/master';
import { utility } from '../../utility/utlity';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  GetCandidateSubscription: Subscription;
  candidate: fromCandidate.CandiateAllDetails = fromCandidate.initialCan;
  constructor(private store: Store<fromCandidate.CandidateState>) { }

  ngOnInit() {
    this.Subscriber();
  }
Subscriber(){
  this.GetCandidateSubscription = this.store.select(fromCandidate.getCandidateAllDetails)
  .subscribe((cand: fromCandidate.CandiateAllDetails) => {
    utility.logSubscription(null, "report.getCandidateAllDetails");
    if (cand !== undefined) {
      this.candidate = Object.assign({}, cand);
    }
  });
}
}
