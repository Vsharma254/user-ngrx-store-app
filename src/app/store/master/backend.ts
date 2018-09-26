import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { delay } from 'rxjs/operators';
import {allMastersListResponse} from './master.stub';
@Injectable()
export class MasterBanckend {
    constructor() { }
    public mock(url: string, method: string, request: HttpRequest<any>): Observable<HttpEvent<any>> {
        if (url.match('/Common/GetMasterData') && method === 'POST') {
            const requestContent = request.body;
            const responseContent = Object.assign({}, allMastersListResponse);
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