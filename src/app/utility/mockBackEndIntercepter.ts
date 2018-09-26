import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs/observable";
import { CandidateBanckend } from "../store/candidate/backend";
import { MasterBanckend } from "../store/master/backend";
import { LocalStorageService } from "./tokenService";
import { environment } from "../../environments/environment";

@Injectable()
export class MockBackendIntercepter implements HttpInterceptor {
  // getTokenSubscription: Subscription;
  constructor(
    private candidateBackend: CandidateBanckend,
    private masterBanckend: MasterBanckend,
    private lokenService: LocalStorageService
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.lokenService.getUserToken();
    if (token !== undefined && token !== "") {
        req = req.clone({setHeaders:{Authorization: `Bearer ${token}`}});
    }
    if (environment.isAPIBased) {
      return (
        this.candidateBackend.mock(req.url, req.method, req) ||
        this.masterBanckend.mock(req.url, req.method, req)
      ); //  if more then
    } else {
      return next.handle(req);
    }
  }
  //     subscribeStore(){
  //     this.getTokenSubscription = this.store
  //     .select(fromCandidate.getToken)
  //     .subscribe(resp => {
  //       utility.logSubscription(null, "candidate-login.component.getToken");
  //       if (resp !== undefined && resp.mobileNo !== undefined) {
  //         this.mobileNo = `+91-XXXXXX${(resp.mobileNo.length>9?resp.mobileNo.substr(6):'0000')}`;
  //       }
  //     });
  // }
}
