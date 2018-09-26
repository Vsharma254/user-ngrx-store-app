import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { LocalStorageService } from "./tokenService";
import { Store } from '@ngrx/store';
import { Subscription, config } from 'rxjs';
import { Router } from "@angular/router";
import * as ui from '../store/ui';
import * as fromRoot from '../store/root';
import * as fromCandidate from '../store/candidate';
import { NotificationsService } from 'angular2-notifications';
@Injectable()
export class RouteAuthGuard implements CanActivate {
  constructor(private token: LocalStorageService, 
    private myRoute: Router,
    private notificationSer: NotificationsService,
     private rootStore: Store<fromRoot.State>) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.token.getUser();
    const isNotExpired = this.token.checkExpirationStorage();
    if (token !== undefined && token !== null && token !== "") {
      if (isNotExpired) {
        return true;
      } else {
        this.notificationSer.create(
            "Session Expired!",
            "Your session has been expired, please login!!",
            "info",
            ui.notificInit
          );
        this.token.clearUKSEEData();
        this.rootStore.dispatch(new fromCandidate.ClearCandidateAction(''));
        this.myRoute.navigate(["uksee/candidatelogin"]);
        return false;
      }
    } else {
      this.token.clearUKSEEData();
      this.rootStore.dispatch(new fromCandidate.ClearCandidateAction(''));
      this.myRoute.navigate(["uksee/candidatelogin"]);      
      return false;
    }
  }
}
