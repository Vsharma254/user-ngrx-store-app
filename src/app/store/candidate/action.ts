import { Action } from '@ngrx/store';
import * as myModels from './model';
export const actionType = {
  SEND_CANDIDATE_OTP: '[Candidate] Send Candidate OTP',
  SEND_CANDIDATE_OTP_SUCCESS: '[Candidate] Send Candidate OTP success',
  SEND_CANDIDATE_OTP_FAIL: '[Candidate] Send Candidate OTP fail',

  SEND_CANDIDATE_OTP_CANCEL: '[Candidate] Send Candidate OTP cancel',

  GET_CANDIDATE_OTP: '[Candidate] Get Candidate OTP',
  GET_CANDIDATE_OTP_SUCCESS: '[Candidate] Get Candidate OTP success',
  GET_CANDIDATE_OTP_FAIL: '[Candidate] Get Candidate OTP fail',

  SET_CANDIDATE_OTP: '[Candidate] Set Candidate OTP',
  SET_CANDIDATE_OTP_SUCCESS: '[Candidate] Set Candidate OTP success',
  SET_CANDIDATE_OTP_FAIL: '[Candidate] Set Candidate OTP fail',

  CLEAR_CANDIDATE_OTP_AND_LOCALSTORAGE: '[Candidate] Clear Candidate OTP and local storoage',
  CLEAR_CANDIDATE_OTP_AND_LOCALSTORAGE_SUCCESS: '[Candidate] Clear Candidate OTP and local storoage success',
  CLEAR_CANDIDATE_OTP_AND_LOCALSTORAGE_FAIL: '[Candidate] Clear Candidate OTP and local storoage fail',

  GET_CANDIDATE: '[Candidate] Get Candidate',
  GET_CANDIDATE_SUCCESS: '[Candidate] Get Candidate success',
  GET_CANDIDATE_FAIL: '[Candidate] Get Candidate fail',

  VERIFY_OTP: '[Candidate] Verify Candidate OTP',
  VERIFY_OTP_SUCCESS: '[Candidate] Verify Candidate OTP success',
  VERIFY_OTP_FAIL: '[Candidate] Verify Candidate OTP fail',

  SET_COLLEGE_LIST: '[Candidate] Set College List',
  SET_COLLEGE_LIST_SUCCESS: '[Candidate] Set College List success',
  SET_COLLEGE_LIST_FAIL: '[Candidate] Set College List fail',

  Add_MORE_COLLEGE: '[Candidate] Add more college',
  Add_MORE_COLLEGE_SUCCESS: '[Candidate] Add more college success',
  Add_MORE_COLLEGE_FAIL: '[Candidate] Add more college fail',

  UPDATE_PERSONAL_DETAILS: '[Candidate] Update Perosnal Details',
  UPDATE_PERSONAL_DETAILS_SUCCESS: '[Candidate] Update Perosnal Details success',
  UPDATE_PERSONAL_DETAILS_FAIL: '[Candidate] Update Perosnal Details fail',

  UPDATE_COURSE_DETAILS: '[Candidate] Update Course Details',
  UPDATE_COURSE_DETAILS_SUCCESS: '[Candidate] Update Course Details success',
  UPDATE_COURSE_DETAILS_FAIL: '[Candidate] Update Course Details fail',

  UPDATE_EDUCATION_DETAILS: '[Candidate] Update Education Details',
  UPDATE_EDUCATION_DETAILS_SUCCESS: '[Candidate] Update Education Details success',
  UPDATE_EDUCATION_DETAILS_FAIL: '[Candidate] Update Education Details fail',

  UPLOAD_FILE: '[Candidate] Upload File',
  UPLOAD_FILE_SUCCESS: '[Candidate] Upload File success',
  UPLOAD_FILE_FAIL: '[Candidate] Upload File fail',

  GET_DOCUMENT: '[Candidate] Get Document',
  GET_DOCUMENT_SUCCESS: '[Candidate] Get Document success',
  GET_DOCUMENT_FAIL: '[Candidate] Get Document fail',

  UPLOAD_DOCUMENT: '[Candidate] Upload Document',
  UPLOAD_DOCUMENT_SUCCESS: '[Candidate] Upload Document success',
  UPLOAD_DOCUMENT_FAIL: '[Candidate] Upload Document fail',

  DELETE_DOCUMENT: '[Candidate] Delete Document',
  DELETE_DOCUMENT_SUCCESS: '[Candidate] Delete Document success',
  DELETE_DOCUMENT_FAIL: '[Candidate] Delete Document fail',

  CLEAR_CANDIDATE: '[Candidate] Clear Candidate',
  CLEAR_CANDIDATE_SUCCESS: '[Candidate] Clear Candidate success',
  CLEAR_CANDIDATE_FAIL: '[Candidate] Clear Candidate fail',

  
  GET_SELECTED_COLLEGE: '[Candidate] Get selected College',
  GET_SELECTED_COLLEGE_SUCCESS: '[Candidate] Get selected success',
  GET_SELECTED_COLLEGE_FAIL: '[Candidate] Get selected fail',

  REMOVE_COLLEGE: '[Candidate] Remove College',
  REMOVE_COLLEGE_SUCCESS: '[Candidate] Remove College success',
  REMOVE_COLLEGE_FAIL: '[Candidate] Remove College fail',

  SAVE_SELECTED_COLLEGE: '[Candidate] Save selected College',
  SAVE_SELECTED_COLLEGE_SUCCESS: '[Candidate] Save selected success',
  SAVE_SELECTED_COLLEGE_FAIL: '[Candidate] Save selected fail',

  FINAL_SAVE_DETAILS: '[Candidate] Final Save Details',
  FINAL_SAVE_DETAILS_SUCCESS: '[Candidate] Final Save Details success',
  FINAL_SAVE_DETAILS_FAIL: '[Candidate] Final Save Details fail',
  
  GET_PAYMENT: '[Candidate] Get Payment',
  GET_PAYMENT_SUCCESS: '[Candidate] Get Payment success',
  GET_PAYMENT_FAIL: '[Candidate] Get Payment fail',

  FINAL_SAVE_PATMENT: '[Candidate] Final Save Payments',
  FINAL_SAVE_PATMENT_SUCCESS: '[Candidate] Final Save Payments success',
  FINAL_SAVE_PATMENT_FAIL: '[Candidate] Final Save Payments fail',

  
  FINAL_SAVE_DOCUMENT: '[Candidate] Final Save Documents',
  FINAL_SAVE_DOCUMENT_SUCCESS: '[Candidate] Final Save Documents success',
  FINAL_SAVE_DOCUMENT_FAIL: '[Candidate] Final Save Documents fail',

  
  FINAL_SAVE_CLG_SELECTION: '[Candidate] Final Save College Selction',
  FINAL_SAVE_CLG_SELECTION_SUCCESS: '[Candidate] Final Save College Selction success',
  FINAL_SAVE_CLG_SELECTION_FAIL: '[Candidate] Final Save College Selction fail',

  SET_COLLEGE_PRIORITY: '[Candidate] Set College Priority',
  SET_COLLEGE_PRIORITY_SUCCESS: '[Candidate] Set College Priority success',
  SET_COLLEGE_PRIORITY_FAIL: '[Candidate] Set College Priority fail',

  FORGOT_DOB: '[Candidate] Set Forgot DOB',
  FORGOT_DOB_SUCCESS: '[Candidate] Set Forgot DOB success',
  FORGOT_DOB_FAIL: '[Candidate] Set Forgot DOB fail',
  
  
  RESEND_SEATOTP: '[Candidate] Resend sEAT otp',
  RESEND_SEATOTP_SUCCESS: '[Candidate] Resend sEAT otp success',
  RESEND_SEATOTP_FAIL: '[Candidate] Resend sEAT otp fail',
  
  
  VERIFY_SEATOTP: '[Candidate] Set sEAT otp',
  VERIFY_SEATOTP_SUCCESS: '[Candidate] Set sEAT otp success',
  VERIFY_SEATOTP_FAIL: '[Candidate] Set sEAT otp fail',
  
  CANCEL_VERIFY_SEATOTP: '[Candidate] Cancel verify otp',

}
export class ResendSeatOTPAction implements Action {
  readonly type = actionType.RESEND_SEATOTP
  constructor(public payload:myModels.ReSendOTP, public guid: string ) {
  }
  }

export class ResendSeatOTPSuccessAction implements Action {
  readonly type = actionType.RESEND_SEATOTP_SUCCESS;
  constructor(public payload: myModels.ResendOTPResponse) {
  }
}
export class ResendSeatOTPFailAction implements Action {
  readonly type = actionType.RESEND_SEATOTP_FAIL;
  constructor(public payload: any) {
  }
}
export class SendCandidateOTPCancelAction implements Action {
  readonly type = actionType.SEND_CANDIDATE_OTP_CANCEL
  constructor(public payload:  string ) {
  }
}

export class CancelVerifySeatOTPAction implements Action {
  readonly type = actionType.CANCEL_VERIFY_SEATOTP
  constructor(public payload:  string ) {
  }
}

export class VerifySeatOTPAction implements Action {
  readonly type = actionType.VERIFY_SEATOTP
  constructor(public payload: myModels.SeatOTPInput, public guid: string ) {
  }
  }

export class VerifySeatOTPSuccessAction implements Action {
  readonly type = actionType.VERIFY_SEATOTP_SUCCESS;
  constructor(public payload: number) {
  }
}
export class VerifySeatOTPFailAction implements Action {
  readonly type = actionType.VERIFY_SEATOTP_FAIL;
  constructor(public payload: any) {
  }
}

export class ForgotDOBAction implements Action {
  readonly type = actionType.FORGOT_DOB
  constructor(public payload: myModels.ForgotPasswordRequest) {
  }
}
export class ForgotDOBSuccessAction implements Action {
  readonly type = actionType.FORGOT_DOB_SUCCESS;
  constructor(public payload: myModels.ForgotPasswordResponse) {
  }
}
export class ForgotDOBFailAction implements Action {
  readonly type = actionType.FORGOT_DOB_FAIL;
  constructor(public payload: any) {
  }
}
export class GetPaymentAction implements Action {
  readonly type = actionType.GET_PAYMENT
  constructor(public payload: string) {
  }
}
export class GetPaymentSuccessAction implements Action {
  readonly type = actionType.GET_PAYMENT_SUCCESS;
  constructor(public payload: myModels.PaymentDetails) {
  }
}
export class GetPaymentFailAction implements Action {
  readonly type = actionType.GET_PAYMENT_FAIL;
  constructor(public payload: any) {
  }
}

export class FinalDocumentSaveAction implements Action {
  readonly type = actionType.FINAL_SAVE_DOCUMENT
  constructor(public payload: string) {
  }
}
export class FinalDocumentSaveSuccessAction implements Action {
  readonly type = actionType.FINAL_SAVE_DOCUMENT_SUCCESS;
  constructor(public payload: number) {
  }
}
export class FinalDocumentSaveFailAction implements Action {
  readonly type = actionType.FINAL_SAVE_DOCUMENT_FAIL;
  constructor(public payload: any) {
  }
}
export class FinalSaveCollegeSaveAction implements Action {
  readonly type = actionType.FINAL_SAVE_CLG_SELECTION
  constructor(public payload: string, public guid:string) {
  }
}
export class FinalSaveCollegeSuccessAction implements Action {
  readonly type = actionType.FINAL_SAVE_CLG_SELECTION_SUCCESS;
  constructor(public payload: myModels.FinalClgSaveResponse) {
  }
}
export class FinalSaveCollegeFailAction implements Action {
  readonly type = actionType.FINAL_SAVE_CLG_SELECTION_FAIL;
  constructor(public payload: any) {
  }
}


export class FinalPaymentAction implements Action {
  readonly type = actionType.FINAL_SAVE_PATMENT
  constructor(public payload: string) {
  }
}
export class FinalPaymentSuccessAction implements Action {
  readonly type = actionType.FINAL_SAVE_PATMENT_SUCCESS;
  constructor(public payload: number) {
  }
}
export class FinalPaymentFailAction implements Action {
  readonly type = actionType.FINAL_SAVE_PATMENT_FAIL;
  constructor(public payload: any) {
  }
}
export class SaveFinalDetailsAction implements Action {
  readonly type = actionType.FINAL_SAVE_DETAILS
  constructor(public payload: string) {
  }
}
export class SaveFinalDetailsSuccessAction implements Action {
  readonly type = actionType.FINAL_SAVE_DETAILS_SUCCESS;
  constructor(public payload: number) {
  }
}
export class SaveFinalDetailsFailAction implements Action {
  readonly type = actionType.FINAL_SAVE_DETAILS_FAIL;
  constructor(public payload: any) {
  }
}
export class GetSelectedCollegeAction implements Action {
  readonly type = actionType.GET_SELECTED_COLLEGE
  constructor(public payload: string) {
  }
}
export class GetSelectedCollegeSuccessAction implements Action {
  readonly type = actionType.GET_SELECTED_COLLEGE_SUCCESS;
  constructor(public payload: myModels.SelectedColleges[]) {
  }
}
export class GetSelectedCollegeFailAction implements Action {
  readonly type = actionType.GET_SELECTED_COLLEGE_FAIL;
  constructor(public payload: any) {
  }
}
export class SaveSelectedCollegeAction implements Action {
  readonly type = actionType.SAVE_SELECTED_COLLEGE
  constructor(public payload: myModels.SelectedColleges[],public guid:string) {
  }
}
export class SaveSelectedCollegeSuccessAction implements Action {
  readonly type = actionType.SAVE_SELECTED_COLLEGE_SUCCESS;
  constructor(public payload: myModels.SelectedColleges[]) {
  }
}
export class SaveSelectedCollegeFailAction implements Action {
  readonly type = actionType.SAVE_SELECTED_COLLEGE_FAIL;
  constructor(public payload: any) {
  }
}
export class ClearCandidateAction implements Action {
  readonly type = actionType.CLEAR_CANDIDATE
  constructor(public payload: string) {
  }
}
export class DeleteDocumentAction implements Action {
  readonly type = actionType.DELETE_DOCUMENT
  constructor(public payload: number, public guid: string) {
  }
}
export class DeleteDocumentSuccessAction implements Action {
  readonly type = actionType.DELETE_DOCUMENT_SUCCESS;
  constructor(public payload: myModels.Document[]) {
  }
}
export class DeleteDocumentFailAction implements Action {
  readonly type = actionType.DELETE_DOCUMENT_FAIL;
  constructor(public payload: any) {
  }
}

export class GetDocumentAction implements Action {
  readonly type = actionType.GET_DOCUMENT
  constructor(public payload: string) {
  }
}
export class GetDocumentSuccessAction implements Action {
  readonly type = actionType.GET_DOCUMENT_SUCCESS;
  constructor(public payload: myModels.Document[]) {
  }
}
export class GetDocumentFailAction implements Action {
  readonly type = actionType.GET_DOCUMENT_FAIL;
  constructor(public payload: any) {
  }
}
export class UploadDocumentAction implements Action {
  readonly type = actionType.UPLOAD_DOCUMENT
  constructor(public payload: any, public uploadType: number, public guid: string) {
  }
}
export class UploadDocumentSuccessAction implements Action {
  readonly type = actionType.UPLOAD_DOCUMENT_SUCCESS;
  constructor(public payload: myModels.Document[]) {
  }
}
export class UploadDocumentFailAction implements Action {
  readonly type = actionType.UPLOAD_DOCUMENT_FAIL;
  constructor(public payload: any) {
  }
}

export class UploadFileAction implements Action {
  readonly type = actionType.UPLOAD_FILE
  constructor(public payload: any, public uploadType: string, public guid: string) {
  }
}
export class UploadFileSuccessAction implements Action {
  readonly type = actionType.UPLOAD_FILE_SUCCESS;
  constructor(public payload: string, public uploadType: string) {
  }
}
export class UploadFileFailAction implements Action {
  readonly type = actionType.UPLOAD_FILE_FAIL;
  constructor(public payload: any) {
  }
}

export class UpdateCourseDetailsAction implements Action {
  readonly type = actionType.UPDATE_COURSE_DETAILS
  constructor(public payload: myModels.CourseDetails, public guid: string) {
  }
}
export class UpdateCourseDetailsSuccessAction implements Action {
  readonly type = actionType.UPDATE_COURSE_DETAILS_SUCCESS;
  constructor(public payload: myModels.CourseDetails) {
  }
}
export class UpdateCourseDetailsFailAction implements Action {
  readonly type = actionType.UPDATE_COURSE_DETAILS_FAIL;
  constructor(public payload: any) {
  }
}

export class UpdateEducationDetailsAction implements Action {
  readonly type = actionType.UPDATE_EDUCATION_DETAILS
  constructor(public payload: myModels.EducationDetails, public guid: string) {
  }
}
export class UpdateEducationDetailsSuccessAction implements Action {
  readonly type = actionType.UPDATE_EDUCATION_DETAILS_SUCCESS;
  constructor(public payload: myModels.EducationDetails) {
  }
}
export class UpdateEducationDetailsFailAction implements Action {
  readonly type = actionType.UPDATE_EDUCATION_DETAILS_FAIL;
  constructor(public payload: any) {
  }
}

export class UpdatePersonalDetailsAction implements Action {
  readonly type = actionType.UPDATE_PERSONAL_DETAILS;
  constructor(public payload: myModels.CandiateAllDetails, public guid: string) {
  }
}
export class UpdatePersonalDetailsSuccessAction implements Action {
  readonly type = actionType.UPDATE_PERSONAL_DETAILS_SUCCESS;
  constructor(public payload: myModels.CandiateAllDetails) {
  }
}
export class UpdatePersonalDetailsFailAction implements Action {
  readonly type = actionType.UPDATE_PERSONAL_DETAILS_FAIL;
  constructor(public payload: any) {
  }
}

export class AddMoreCollegeAction implements Action {
  readonly type = actionType.Add_MORE_COLLEGE;
  constructor(public payload: myModels.SelectedColleges) {
  }
}

export class AddMoreCollegeSuccessAction implements Action {
  readonly type = actionType.Add_MORE_COLLEGE_SUCCESS;
  constructor(public payload: myModels.SelectedColleges[]) {
  }
}
export class AddMoreCollegeFailAction implements Action {
  readonly type = actionType.Add_MORE_COLLEGE_FAIL;
  constructor(public payload: any) {
  }
}
export class SetCollegeListAction implements Action {
  readonly type = actionType.SET_COLLEGE_LIST;
  constructor(public payload: myModels.CourseDetails) {
  }
}
export class SetCollegeListSuccessAction implements Action {
  readonly type = actionType.SET_COLLEGE_LIST_SUCCESS;
  constructor(public payload: myModels.SelectedColleges[]) {
  }
}
export class SetCollegeListFailAction implements Action {
  readonly type = actionType.SET_COLLEGE_LIST_FAIL;
  constructor(public payload: any) {
  }
}
export class SetCollegePriorityAction implements Action {
  readonly type = actionType.SET_COLLEGE_PRIORITY;
  constructor(public payload: number, public upDown: number) {
  }
}
export class SetCollegePrioritySuccessAction implements Action {
  readonly type = actionType.SET_COLLEGE_PRIORITY_SUCCESS;
  constructor(public payload: myModels.SelectedColleges[]) {
  }
}
export class SetCollegePriorityFailAction implements Action {
  readonly type = actionType.SET_COLLEGE_PRIORITY_FAIL;
  constructor(public payload: any) {
  }
}


export class RemoveCollegeAction implements Action {
  readonly type = actionType.REMOVE_COLLEGE;
  constructor(public payload: myModels.SelectedColleges) {
  }
}
export class RemoveCollegeSuccessAction implements Action {
  readonly type = actionType.REMOVE_COLLEGE_SUCCESS;
  constructor(public payload: myModels.SelectedColleges[]) {
  }
}
export class RemoveCollegeFailAction implements Action {
  readonly type = actionType.REMOVE_COLLEGE_FAIL;
  constructor(public payload: any) {
  }
}


export class ClearCandidateOTPAndLocalStorageAction implements Action {
  readonly type = actionType.CLEAR_CANDIDATE_OTP_AND_LOCALSTORAGE;
  constructor(public payload: myModels.OTPReponse) {
  }
}
export class ClearCandidateOTPAndLocalStorageSuccessAction implements Action {
  readonly type = actionType.CLEAR_CANDIDATE_OTP_AND_LOCALSTORAGE_SUCCESS;
  constructor(public payload: myModels.OTPReponse) {
  }
}
export class ClearCandidateOTPAndLocalStorageFailAction implements Action {
  readonly type = actionType.CLEAR_CANDIDATE_OTP_AND_LOCALSTORAGE_FAIL;
  constructor(public payload: any) {
  }
}

export class SetCandidateOTPAction implements Action {
  readonly type = actionType.SET_CANDIDATE_OTP;
  constructor(public payload: myModels.OTPReponse) {
  }
}
export class SetCandidateOTPSuccessAction implements Action {
  readonly type = actionType.SET_CANDIDATE_OTP_SUCCESS;
  constructor(public payload: myModels.OTPReponse) {
  }
}
export class SetCandidateOTPFailAction implements Action {
  readonly type = actionType.SET_CANDIDATE_OTP_FAIL;
  constructor(public payload: any) {
  }
}


export class GetCandidateOTPAction implements Action {
  readonly type = actionType.GET_CANDIDATE_OTP;
  constructor(public payload: myModels.Login) {
  }
}
export class GetCandidateOTPSuccessAction implements Action {
  readonly type = actionType.GET_CANDIDATE_OTP_SUCCESS;
  constructor(public payload: myModels.Login) {
  }
}
export class GetCandidateOTPFailAction implements Action {
  readonly type = actionType.GET_CANDIDATE_OTP_FAIL;
  constructor(public payload: any) {
  }
}

export class SendCandidateOTPAction implements Action {
  readonly type = actionType.SEND_CANDIDATE_OTP;
  constructor(public payload: myModels.Login) {
  }
}
export class SendCandidateOTPSuccessAction implements Action {
  readonly type = actionType.SEND_CANDIDATE_OTP_SUCCESS;
  constructor(public payload: myModels.Token, public login:myModels.Login) {
  }
}
export class SendCandidateOTPFailAction implements Action {
  readonly type = actionType.SEND_CANDIDATE_OTP_FAIL;
  constructor(public payload: any) {
  }
}

export class GetCandidateAction implements Action {
  readonly type = actionType.GET_CANDIDATE;
  constructor(public payload: myModels.GetCandidateInput) {
  }
}
export class GetCandidateSuccessAction implements Action {
  readonly type = actionType.GET_CANDIDATE_SUCCESS;
  constructor(public payload: myModels.GetCandidateAllResponse) {
  }
}
export class GetCandidateFailAction implements Action {
  readonly type = actionType.GET_CANDIDATE_FAIL;
  constructor(public payload: string) {
  }
}
export class VerifyOTPAction implements Action {
  readonly type = actionType.VERIFY_OTP;
  constructor(public payload: myModels.OTP) {
  }
}
export class VerifyOTPSuccessAction implements Action {
  readonly type = actionType.VERIFY_OTP_SUCCESS;
  constructor(public payload: myModels.OTPReponse) {
  }
}
export class VerifyOTPFailAction implements Action {
  readonly type = actionType.VERIFY_OTP_FAIL;
  constructor(public payload: any) {
  }
}
export type Actions =
  SendCandidateOTPAction
  | SendCandidateOTPSuccessAction
  | SendCandidateOTPFailAction
  | GetCandidateAction
  | GetCandidateSuccessAction
  | GetCandidateFailAction
  | VerifyOTPAction
  | VerifyOTPSuccessAction
  | VerifyOTPFailAction
  | ClearCandidateOTPAndLocalStorageAction
  | ClearCandidateOTPAndLocalStorageSuccessAction
  | ClearCandidateOTPAndLocalStorageFailAction
  | SetCandidateOTPAction
  | SetCandidateOTPSuccessAction
  | SetCandidateOTPFailAction
  | GetCandidateOTPAction
  | GetCandidateOTPSuccessAction
  | GetCandidateOTPFailAction
  | SetCollegeListAction
  | SetCollegeListSuccessAction
  | SetCollegeListFailAction
  | AddMoreCollegeAction;