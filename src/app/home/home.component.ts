import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../utility/tokenService';
import { DataService } from '../core/services/data.service';
import * as ui from '../store/ui';
import { Store } from '@ngrx/store';
import { Subscription, config } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NotificationsService } from 'angular2-notifications';
import { utility } from '../utility/utlity';
import * as fromRoot from '../store/root';
import * as fromCandidate from '../store/candidate';
@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    getUINotificationSubscription: Subscription;
    getOTPResponseSubscription: Subscription;
    GetCandidateSubscription: Subscription;
    message: string;
    showUser = false;
    candidate:fromCandidate.CandiateAllDetails;
    flipUserD = false;
    constructor(private token: LocalStorageService,
        private router: Router,
        private notificationSer: NotificationsService,
        private store: Store<ui.UIState>,
        private rootStore: Store<fromRoot.State>,
    ) {
        router.events.subscribe((val) => {
            // see also 
        });
    }
   
    flipUser(){
        this.flipUserD =!this.flipUserD;
    }
    logoutUser() {
        this.flipUserD =!this.flipUserD;
        this.token.clearUKSEEData();
        this.rootStore.dispatch(new fromCandidate.ClearCandidateAction(''));
        const token = this.token.getUserToken();
        if (utility.isUnDefinedNullEmpty(token)) {
            this.showUser = false;
        }
        this.router.navigate(["uksee/candidatelogin"]);
    }
    ngOnInit() {
        const token = this.token.getUser();
        if (utility.isDefinedNotNullEmpty(token)) {
            this.showUser = true;
            this.store.dispatch(new fromCandidate.SetCandidateOTPAction(undefined));
            this.router.navigate(['/uksee/details/all']);
        } else{
            this.router.navigate(['/uksee/candidatelogin']);
        }
        this.getUINotificationSubscription = this.store.select(ui.getNotification)
            .subscribe((res: ui.NotificationUI) => {
                this.notificationSer.create(res.title, res.content, res.type, res);
            });
        this.getOTPResponseSubscription = this.store.select(fromCandidate.getOtpReponse)
            .subscribe((res: fromCandidate.OTPReponse) => {
                if (res !== undefined && res.candidateGuid !== '') {
                    this.showUser = true;
                }else{
                    this.showUser = false;
                }
            });
        this.GetCandidateSubscription = this.store.select(fromCandidate.getCandidateAllDetails)
            .subscribe((cand: fromCandidate.CandiateAllDetails) => {
              utility.logSubscription(null, "personal-details.getCandidateAllDetails");
              if (cand !== undefined) {
                this.candidate = cand;      
              }
            });
    }
}