import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as myModels from './model';
import * as candiateModels from '../candidate/model';
import { appConfig } from '../../config/config';
import { LocalStorageService } from '../../utility/tokenService';
@Injectable()
export class MasterService {
    constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

    GetAllMasterList(candidate: candiateModels.MasterDataInput): Observable<myModels.AllMasterList> {
        const url = appConfig.apiUrl + '/Common/GetMasterData';
        return this.http.post(url, candidate).pipe(map(resp => {
            const response: any = (resp || {});
            if (response.status && response.status.code === 'ERRORCD') {
                throw {};
            } else {
                return <myModels.AllMasterList>resp;
            }
        }));
        
    }
    GetCategoryListById(residnetialId: number): Observable<myModels.Category[]> {
        const url = appConfig.apiUrl + '/Common/GetCategory?ResidentialDomicileId='+residnetialId;
        return this.http.get(url).pipe(map(resp => {
            const response: any = (resp || {});
            if (response.status && response.status.code === 'ERRORCD') {
                throw {};
            } else {
                return <myModels.Category[]>resp;
            }
        }));
}
GetSubCategoryListById(categpryId: number): Observable<myModels.SubCategory[]> {
    const url = appConfig.apiUrl + '/Common/GetSubCategory?CategoryId='+categpryId;
    return this.http.get(url).pipe(map(resp => {
        const response: any = (resp || {});
        if (response.status && response.status.code === 'ERRORCD') {
            throw {};
        } else {
            return <myModels.SubCategory[]>resp;
        }
    }));
}
GetBranchListById(qualifyingExId: number): Observable<myModels.Branch[]> {
    const url = appConfig.apiUrl + '/Common/GetQualifyingBranch?QualifyingExamId='+qualifyingExId;
    return this.http.get(url).pipe(map(resp => {
        const response: any = (resp || {});
        if (response.status && response.status.code === 'ERRORCD') {
            throw {};
        } else {
            return <myModels.Branch[]>resp;
        }
    }));
}
filterBranchByID(collegeId: number, courseId: number): Observable<myModels.Branch[]> {
    const url = appConfig.apiUrl + `/CandidateSeatSelection/GetBranchByCollegeCourseId?CollegeId=${collegeId}&CourseId=${courseId}`;;
    return this.http.get(url).pipe(map(resp => {
        const response: any = (resp || {});
        if (response.status && response.status.code === 'ERRORCD') {
            throw {};
        } else {
            const otp = <myModels.Branch[]>resp;
            return otp;
        }
    }));
}
filterCollegeByID(collegeId: number, courseId: number): Observable<myModels.Collage[]> {
    const url = appConfig.apiUrl + `/Common/GetCollegeByTypeId?CollegeTypeId=${collegeId}&CourseId=${courseId}`;;
    return this.http.get(url).pipe(map(resp => {
        const response: any = (resp || {});
        if (response.status && response.status.code === 'ERRORCD') {
            throw {};
        } else {
            const otp = <myModels.Collage[]>resp;
            return otp;
        }
    }));
}
}