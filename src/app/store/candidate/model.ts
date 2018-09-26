import * as fromMasterModel from "../master/model";
import { FormsModule } from "@angular/forms";
export interface ICandidate {
  candidateGuid: string;
  candidateName: string;
  login: Login;
  otp: OTP;
  forgotDOB:ForgotPasswordResponse,
  token:Token,
  otpReponse: OTPReponse;
  personalDetails: CandiateAllDetails;
  courseDetails: CourseDetails;
  educationDetails: EducationDetails[];
  selectedColleges: SelectedColleges[];
  documents: Document[];
  paymentDetails: PaymentDetails;
  seatSelectionOTP:SeatSelectionOTP;
}

export interface Login {
  registrationId: string;
  dob: string;
}
export interface SelectedColleges {
  collegeId: number;
  courseId: number;
  branchName: string;
  collegeName: string;
  branchId: number;
  personalDetailsId: number;
  priorityOrder: number;
}
export interface PaymentInput {
  regNo: string;
  personalDetailId: string;
}
export interface CandiateInput {
  personalDetails: CandiateAllDetails;
  courseDetails: CourseDetails;
  educationDetails: EducationDetails[];
  applicationProgress: number;
}
export interface CandiateAllDetails {
  id: string;
  tokenNo: string;
  regNo: string;
  rollNo: number;
  candidateName: string;
  fatherName: string;
  motherName: string;
  dob: Date;
  mobileNo: number;
  alternateMobileNo: number;
  email: string;
  gender: string;
  nationalityId: number;
  residentialDomicileId: number;
  academicDomicileId: number;
  categoryId: number;
  subCategoryId: number;
  stateId: number;
  districtId: number;
  currentAddress: string;
  permanentAddress: string;
  pincode: number;
  adharCardNo: number;
  photoImageUrl: string;
  signatureImageUrl: string;
  addedBy: number;
  addedOn: Date;
  modifiedBy?: number;
  modifiedOn?: Date;
  isVisible: boolean;
}
export interface CourseDetails {
  id: number;
  courseApplied?:string,
  personalDetailsId: number;
  courseAppliedId: number;
  qualifyingBranchId: number;
  academicDomicileId: number;
  qualifyingPassingYear: number;
  admissionThroughId: number;
  collegeName: string;
  tfw: string;
  ukseeTotalMarks: number;
  ukseeObtainedMarks: number;
  qualifyingExamId: number;
  ukseeOverALlRank: number;
  ukseeCategoryRank: number;
  ukseeExempted: boolean;
  qualifiedExamId: number;
  qualifiedExamMarks: number;
  qualifiedExamYear: number;
  gateScore: number;
  air: number;
  ukseeAttended: boolean;
  addedBy: number;
  addedOn: Date;
  modifiedBy?: number;
  modifiedOn?: Date;
  isVisible: boolean;
}
export const courseInitalization: CourseDetails = {
  academicDomicileId: 0,
  addedBy: 0,
  addedOn: null,
  admissionThroughId: 0,
  air: 0,
  collegeName: "",
  courseAppliedId: 0,
  gateScore: 0,
  id: 0,
  isVisible: false,
  modifiedBy: 0,
  modifiedOn: null,
  personalDetailsId: 0,
  qualifiedExamId: 0,
  qualifiedExamMarks: 0,
  qualifiedExamYear: 0,
  qualifyingBranchId: 0,
  qualifyingExamId: 0,
  qualifyingPassingYear: 0,
  tfw: "",
  ukseeAttended: false,
  ukseeCategoryRank: 0,
  ukseeExempted: false,
  ukseeObtainedMarks: 0,
  ukseeOverALlRank: 0,
  ukseeTotalMarks: 0
};
export interface EducationDetails {
  id: number;
  statusId: number;
  educationCourseId: number;
  educationCourseName: string;
  board: string;
  totalMarks: number;
  obtainMarks: number;
  percentage: number;
  year: number;
  personalDetailsId: number;
  addedBy: number;
  addedOn: Date;
  modifiedBy?: number;
  modifiedOn?: Date;
  isVisible: boolean;
}
export interface GetCandidateAllResponse {
  personalDetails: CandiateAllDetails;
  courseDetails: CourseDetails;
  educationDetails: EducationDetails[];
}
export interface Token {
  token: string;
  mobileNo: string;
}
export const initToken: Token = {mobileNo:undefined, token:undefined };
export const initlogin: Login = {registrationId:undefined, dob:undefined  };

export interface ReSendOTP{
  PersonalDetailsId : number;
}
export interface ForgotPasswordRequest {
  regNo: string;
}
export interface ForgotPasswordResponse {
  mobileNo: string;
}
export interface FinalClgSaveResponse {
  candidateSeatSelectionList: SelectedColleges[];
  mobileNo:string
}
export interface ResendOTPResponse {
  mobileNo: string;
}
export interface OTP {
  oTPValue: string;
  registrationID: string;
}
export interface SeatOTPInput {
  oTPValue: string;
  registrationID: string;
}
export interface SeatSelectionOTP {
  mobileNo:string;
  oTPValue: number;
  registrationID: string;
  isSent:boolean
}
export interface OTPReponse {
  candidateGuid: string;
}
export interface MasterDataInput {
  sessionGuid: string;
  registrationID: string;
}
export interface GetCandidateInput {
  candidateGuid: string;
  registrationId: string;
}
export interface Document {
  id: number;
  registrationId: string;
  documentTypeId: number;
  documentTypeName: string;
  documentUploadName: string;
  personalDetailId: number;
  documentUploadURL: string;
}
export interface CandidateStatus {
  done: boolean;
  inproccess: boolean;
}
export interface CandidateState extends ICandidate {
  applicationProgress: number;
}
export interface PaymentDetails {
  candidateName: string;
  email: string;
  mobileNo: string;
  categoryName: string;
  ammount: string;
  status: boolean;
}
export const paymentInit: PaymentDetails = {
  ammount: "",
  candidateName: "",
  categoryName: "",
  email: "",
  mobileNo: "",
  status: true
};
export class CandidateOp {
  static getProgress(progreess: number, progressFor: number) {
    if (progreess >= progressFor) {
      return true;
    } else {
      return false;
    }
  }
}
