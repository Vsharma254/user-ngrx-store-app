import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { delay } from 'rxjs/operators';
import {sendOTPReponse, getCandidateDetails, oTPVerifyResponse} from './candidate.stub';
@Injectable()
export class CandidateBanckend {
    constructor() { }
    public mock(url: string, method: string, request: HttpRequest<any>): Observable<HttpEvent<any>> {
        if (url.match('/candidate/login') && method === 'POST') {
            const requestContent = request.body;
            const responseContent = Object.assign({}, sendOTPReponse);
            return new Observable(resp => {
                resp.next(new HttpResponse({
                    status: 200,
                    body: Object.assign({}, responseContent)
                }));
                resp.complete();
            });
        }        
        if (url.match('/candidate/verifyOTP') && method === 'POST') {
            const requestContent = request.body;
            const responseContent = Object.assign({}, oTPVerifyResponse);
            return new Observable(resp => {
                resp.next(new HttpResponse({
                    status: 200,
                    body: Object.assign({}, responseContent)
                }));
                resp.complete();
            });
        }
        if (url.match('/candidate/Details') && method === 'GET') {
            const requestContent = request.body;
            const responseContent = Object.assign({}, getCandidateDetails);
            return new Observable(resp => {
                resp.next(new HttpResponse({
                    status: 200,
                    body: Object.assign({}, responseContent)
                }));
                resp.complete();
            });
        }
        return null;
    }
}