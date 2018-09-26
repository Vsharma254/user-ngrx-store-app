import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as myModels from './model';
@Injectable()
export class DetailsService {
    constructor( private http: HttpClient){}    

GetDetails(candidateId: string):Observable<myModels.IPersonalDetails>{
const url = 'http://localhost:123/api/details/';
return this.http.get(url).pipe(map(resp =>{
    return <myModels.IPersonalDetails>resp;
}));
}
}