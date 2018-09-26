import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpParams,
  HttpRequest,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import * as myModels from "./model";
import * as masterModels from "../master/model";
import { appConfig } from "../../config/config";
import { LocalStorageService } from "../../utility/tokenService";
@Injectable()
export class CandidateService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  SendCandidateOTP(candidate: myModels.Login): Observable<myModels.Token> {
    const url = appConfig.apiUrl + "/candidate/login";
    return this.http.post(url, candidate).pipe(
      map(resp => {
        const response: any = resp || {};
        if (response.status && response.status.code === "ERRORCD") {
          throw {};
        } else {
          this.localStorageService.setUserToken(<myModels.Token>response);
          return <myModels.Token>resp;
        }
      })
    );
  }
  ResendOTP(personalID: myModels.ReSendOTP, guild:string): Observable<myModels.ResendOTPResponse> {
    const url = appConfig.apiUrl + `/candidate/ResenOTP?sessionGuid=${guild}`;
    return this.http.post(url, personalID).pipe(
      map(resp => {
        const response: any = resp || {};
        if (response.status && response.status.code === "ERRORCD") {
          throw {};
        } else {
          return <myModels.ResendOTPResponse>resp;
        }
      })
    );
  }
  SaveFinalCandidate(
    candidate: myModels.CandiateInput,
    guild: string
  ): Observable<number> {
    const url =
      appConfig.apiUrl +
      `/candidate/FinalizeCandidateDetails?sessionGuid=${guild}`;
    return this.http.post(url, candidate).pipe(
      map(resp => {
        const response: any = resp || {};
        if (response.status && response.status.code === "ERRORCD") {
          throw {};
        } else {
          return <number>resp;
        }
      })
    );
  }
  SaveFinalPayment(candidate: myModels.PaymentInput): Observable<number> {
    const url = appConfig.apiUrl + `/Payment/FinalizePaymentDetails`;
    return this.http.post(url, candidate).pipe(
      map(resp => {
        const response: any = resp || {};
        if (response.status && response.status.code === "ERRORCD") {
          throw {};
        } else {
          return <number>resp;
        }
      })
    );
  }
  SaveFinalDocument(candidate: myModels.Document[]): Observable<number> {
    const url = appConfig.apiUrl + `/DocumentUpload/FinalizeDocumentUpload`;
    return this.http.post(url, candidate).pipe(
      map(resp => {
        const response: any = resp || {};
        if (response.status && response.status.code === "ERRORCD") {
          throw {};
        } else {
          return <number>resp;
        }
      })
    );
  }
  SaveFinalColleges(clgs: myModels.SelectedColleges[], guid:string): Observable<myModels.FinalClgSaveResponse> {
    const url = appConfig.apiUrl + `/CandidateSeatSelection/LockSeatSelection?sessionGuid=${guid}`;
    return this.http.post(url, clgs).pipe(
      map(resp => {
        const response: any = resp || {};
        if (response.status && response.status.code === "ERRORCD") {
          throw {};
        } else {
          return <myModels.FinalClgSaveResponse>resp;
        }
      })
    );
  }
  GetPaymentInfo(guid: string): Observable<myModels.PaymentDetails> {
    const url =
      appConfig.apiUrl + `/Payment/PaymentDetails?sessionGuid=${guid}`;
    return this.http.get(url).pipe(
      map(resp => {
        const response: any = resp || {};
        if (response.status && response.status.code === "ERRORCD") {
          throw {};
        } else {
          return <myModels.PaymentDetails>resp;
        }
      })
    );
  }
  VerifyCandidateOTP(candidate: myModels.OTP): Observable<myModels.OTPReponse> {
    const url = appConfig.apiUrl + "/candidate/verifyOTP";
    return this.http.post(url, candidate).pipe(
      map(resp => {
        const response: any = resp || {};
        if (response.status && response.status.code === "ERRORCD") {
          throw {};
        } else {
          const otp = <myModels.OTPReponse>resp;
          this.localStorageService.setLocalStorage(
            appConfig.ukseeguidKey,
            otp.candidateGuid
          );
          return otp;
        }
      })
    );
  }
  ForgotDOB(candidate: myModels.ForgotPasswordRequest): Observable<myModels.ForgotPasswordResponse> {
    const url = appConfig.apiUrl + "/Common/ForgotPassword";
    return this.http.post(url, candidate).pipe(
      map(resp => {
        const response: any = resp || {};
        if (response.status && response.status.code === "ERRORCD") {
          throw {};
        } else {
          const otp = <myModels.ForgotPasswordResponse>resp;       
          return otp;
        }
      })
    );
  }
  VerifySeatOTP(candidate: myModels.SeatOTPInput, guid:string): Observable<number> {
    const url = appConfig.apiUrl + `/CandidateSeatSelection/VerifySeatSelectionOTP?sessionGuid=${guid}`;
    return this.http.post(url, candidate).pipe(
      map(resp => {
        const response: any = resp || {};
        if (response.status && response.status.code === "ERRORCD") {
          throw {};
        } else {
          const otp = <number>resp;       
          return otp;
        }
      })
    );
  }
  GetCandidateAllDetails(
    can: myModels.GetCandidateInput
  ): Observable<myModels.GetCandidateAllResponse> {
    const url =
      appConfig.apiUrl + `/candidate/Details?sessionGuid=${can.candidateGuid}`;
    return this.http.get(url).pipe(
      map(resp => {
        const response: any = resp || {};
        if (response.status && response.status.code === "ERRORCD") {
          throw {};
        } else {
          return <myModels.GetCandidateAllResponse>resp;
        }
      })
    );
  }
  GetSelectedColgList(
    guid: string
  ): Observable<myModels.SelectedColleges[]> {
    const url =
      appConfig.apiUrl + `/CandidateSeatSelection/GetCandidateSeatSelection?sessionGuid=${guid}`;
    return this.http.get(url).pipe(
      map(resp => {
        const response: any = resp || {};
        if (response.status && response.status.code === "ERRORCD") {
          throw {};
        } else {
          return <myModels.SelectedColleges[]>resp;
        }
      })
    );
  }

  UpdateCandidatePersonalDetails(
    can: myModels.CandiateAllDetails,
    guid: String
  ): Observable<myModels.CandiateAllDetails> {
    const url =
      appConfig.apiUrl + `/candidate/UpdatePersonalDetails?sessionGuid=${guid}`;
    return this.http.put(url, can).pipe(
      map(resp => {
        const response: any = resp || {};
        if (response.status && response.status.code === "ERRORCD") {
          throw {};
        } else {
          return <myModels.CandiateAllDetails>resp;
        }
      })
    );
  }
  UpdateCandidateCourseDetails(
    can: myModels.CourseDetails,
    guid: String
  ): Observable<myModels.CourseDetails> {
    const url =
      appConfig.apiUrl + `/candidate/UpdateCourseDetails?sessionGuid=${guid}`;
    return this.http.put(url, can).pipe(
      map(resp => {
        const response: any = resp || {};
        if (response.status && response.status.code === "ERRORCD") {
          throw {};
        } else {
          return <myModels.CourseDetails>resp;
        }
      })
    );
  }
  UpdateCandidateEducationDetails(
    can: myModels.EducationDetails,
    guid: String
  ): Observable<myModels.EducationDetails> {
    const url =
      appConfig.apiUrl +
      `/candidate/UpdateEducationDetails?sessionGuid=${guid}`;
    return this.http.put(url, can).pipe(
      map(resp => {
        const response: any = resp || {};
        if (response.status && response.status.code === "ERRORCD") {
          throw {};
        } else {
          return <myModels.EducationDetails>resp;
        }
      })
    );
  }
  UploadFile(file: any, guid: String, type: string): Observable<string> {
    let url = "";
    if (type === "photo") {
      url = appConfig.apiUrl + `/candidate/UploadPhoto?sessionGuid=${guid}`;
    } else {
      url = appConfig.apiUrl + `/candidate/UploadSign?sessionGuid=${guid}`;
    }
    let formData = new FormData();
    formData.append("upload", file);
    let params = new HttpParams();
    const options = {
      params: params,
      reportProgress: true
    };
    const req = new HttpRequest("POST", url, formData, options);
    return this.http.post(url, formData, options).pipe(
      map(resp => {
        const response: any = resp || {};
        if (response.status && response.status.code === "ERRORCD") {
          throw {};
        } else {
          return <string>resp;
        }
      })
    );
  }
  UploadDocument(
    file: any,
    guid: String,
    type: number
  ): Observable<myModels.Document[]> {
    const url =
      appConfig.apiUrl +
      `/DocumentUpload/InsertDocumentUploads?sessionGuid=${guid}&documentTypeId=${type}`;
    let formData = new FormData();
    formData.append("upload", file);
    let params = new HttpParams();
    const options = {
      params: params,
      reportProgress: true
    };
    const req = new HttpRequest("POST", url, formData, options);
    return this.http.post(url, formData, options).pipe(
      map(resp => {
        const response: any = resp || {};
        if (response.status && response.status.code === "ERRORCD") {
          throw {};
        } else {
          return <myModels.Document[]>resp;
        }
      })
    );
  }
  GetDocuments(guid: String): Observable<myModels.Document[]> {
    const url =
      appConfig.apiUrl +
      `/DocumentUpload/GetDocumentUploads?sessionGuid=${guid}`;
    return this.http.get(url).pipe(
      map(resp => {
        const response: any = resp || {};
        if (response.status && response.status.code === "ERRORCD") {
          throw {};
        } else {
          return <myModels.Document[]>resp;
        }
      })
    );
  }
  DeleteDocuments(
    guid: String,
    docId: number
  ): Observable<myModels.Document[]> {
    const url =
      appConfig.apiUrl +
      `/DocumentUpload/DeleteDocumentUploads?sessionGuid=${guid}&documentUploadId=${docId}`;
    return this.http.delete(url).pipe(
      map(resp => {
        const response: any = resp || {};
        if (response.status && response.status.code === "ERRORCD") {
          throw {};
        } else {
          return <myModels.Document[]>resp;
        }
      })
    );
  }
  SaveSelectedCollege(
    list: myModels.SelectedColleges[], guid:string
  ): Observable<myModels.SelectedColleges[]> {
    const url =
      appConfig.apiUrl + `/CandidateSeatSelection/InsertCandidateSeatSelection?sessionGuid=${guid}`;
    return this.http.post(url, list).pipe(
      map(resp => {
        const response: any = resp || {};
        if (response.status && response.status.code === "ERRORCD") {
          throw {};
        } else {
          return <myModels.SelectedColleges[]>resp;
        }
      })
    );
  }
  GetOTPFromLocalStorage(): myModels.OTPReponse {
    const guild = this.localStorageService.getValueByKey(
      appConfig.ukseeguidKey
    );
    const otpResp: myModels.OTPReponse = { candidateGuid: guild };
    return otpResp;
  }
}
