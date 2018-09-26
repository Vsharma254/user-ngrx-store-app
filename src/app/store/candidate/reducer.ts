import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as myModels from "./model";
import * as myActions from "./action";
import * as fromMaster from "../master";
export interface CState extends myModels.CandidateState {}
export let initialCan = {
  id: undefined,
  tokenNo: undefined,
  regNo: undefined,
  rollNo: undefined,
  candidateName: undefined,
  fatherName: undefined,
  motherName: undefined,
  dob: undefined,
  mobileNo: undefined,
  alternateMobileNo: undefined,
  email: undefined,
  gender: undefined,
  nationalityId: undefined,
  residentialDomicileId: undefined,
  academicDomicileId: undefined,
  categoryId: undefined,
  subCategoryId: undefined,
  stateId: undefined,
  districtId: undefined,
  currentAddress: undefined,
  permanentAddress: undefined,
  pincode: undefined,
  adharCardNo: undefined,
  photoImageUrl: undefined,
  signatureImageUrl: undefined,
  addedBy: undefined,
  addedOn: undefined,
  modifiedBy: undefined,
  modifiedOn: undefined,
  isVisible: false
};

const initialState = (function(): myModels.CandidateState {
  const res: myModels.CandidateState = {
    token: myModels.initToken,
    applicationProgress: undefined,
    candidateGuid: undefined,
    candidateName: undefined,
    login: myModels.initlogin,
    otp: undefined,
    forgotDOB: { mobileNo: "" },
    otpReponse: undefined,
    personalDetails: initialCan,
    courseDetails: undefined,
    educationDetails: [],
    selectedColleges: [],
    documents: [],
    paymentDetails: myModels.paymentInit,
    seatSelectionOTP: undefined
  };
  return res;
})();
const seatSelectionInit : myModels.SeatSelectionOTP = {
  isSent:false,
  mobileNo:'',
  oTPValue:0,
  registrationID:''
}

export function reducer(state = initialState, action: myActions.Actions) {
  switch (action.type) {    
    case myActions.actionType.SEND_CANDIDATE_OTP_CANCEL: {      
      const login = myModels.initlogin;
      const token = myModels.initToken;
      return Object.assign({}, state, { login, token });
    }
    case myActions.actionType.SEND_CANDIDATE_OTP_SUCCESS: {
      const acn = <myActions.SendCandidateOTPSuccessAction>action;
      const login: myModels.Login = <myModels.Login>acn.login;
      const token: myModels.Token = <myModels.Token>acn.payload;
      return Object.assign({}, state, { login, token });
    }
    case myActions.actionType.VERIFY_OTP_SUCCESS: {
      const otpReponse: myModels.OTPReponse = <myModels.OTPReponse>(
        action.payload
      );
      return Object.assign({}, state, { otpReponse });
    }
    case myActions.actionType.FORGOT_DOB_SUCCESS: {
      const forgotDOB: myModels.ForgotPasswordResponse = <
        myModels.ForgotPasswordResponse
      >action.payload;
      return Object.assign({}, state, { forgotDOB });
    }

    case myActions.actionType.GET_CANDIDATE_SUCCESS: {
      const candiateAllDetails: myModels.GetCandidateAllResponse = <
        myModels.GetCandidateAllResponse
      >action.payload;
      return Object.assign({}, state, candiateAllDetails);
    }
    case myActions.actionType.Add_MORE_COLLEGE: {
      const clg: myModels.SelectedColleges = <myModels.SelectedColleges>(
        action.payload
      );
      const selectedColleges = state.selectedColleges.map(itm => {
        return itm;
      });
      selectedColleges.push(Object.assign({}, clg));
      return Object.assign({}, state, { selectedColleges });
    }
    case myActions.actionType.REMOVE_COLLEGE: {
      const clg: myModels.SelectedColleges = <myModels.SelectedColleges>(
        action.payload
      );
      let found = false;
      const selectedColleges = state.selectedColleges.filter(itm => {
        if (itm.priorityOrder === clg.priorityOrder) {
          found = true;
          return false;
        } else {
          if (found) {
            itm.priorityOrder = itm.priorityOrder - 1;
          }
          return true;
        }
      });
      return Object.assign({}, state, { selectedColleges });
    }
    case myActions.actionType.SET_COLLEGE_PRIORITY_SUCCESS: {
      const act = <myActions.SetCollegePrioritySuccessAction>action;
      const clgs = <myModels.SelectedColleges[]>act.payload;
      const selectedColleges = clgs.map(item => {
        return item;
      });
      return Object.assign({}, state, { selectedColleges });
    }

    case myActions.actionType.UPLOAD_FILE_SUCCESS: {
      const myaction: myActions.UploadFileSuccessAction = <
        myActions.UploadFileSuccessAction
      >action;
      let personalDetails;
      if (myaction.uploadType === "photo") {
        const photoImageUrl: string = <string>action.payload;
        personalDetails = Object.assign({}, state.personalDetails, {
          photoImageUrl
        });
      } else {
        const signatureImageUrl: string = <string>action.payload;
        personalDetails = Object.assign({}, state.personalDetails, {
          signatureImageUrl
        });
      }
      return Object.assign({}, state, { personalDetails });
    }

    case myActions.actionType.GET_PAYMENT_SUCCESS: {
      const paymentDetails: myModels.PaymentDetails = <myModels.PaymentDetails>(
        action.payload
      );
      return Object.assign({}, state, { paymentDetails });
    }
    case myActions.actionType.UPLOAD_DOCUMENT_SUCCESS: {
      const documents: myModels.Document[] = <myModels.Document[]>(
        action.payload
      );
      return Object.assign({}, state, { documents });
    }
    case myActions.actionType.UPDATE_PERSONAL_DETAILS_SUCCESS: {
      const personalDetails: myModels.CandiateAllDetails = <
        myModels.CandiateAllDetails
      >action.payload;
      return Object.assign({}, state, { personalDetails });
    }
    case myActions.actionType.SET_CANDIDATE_OTP_SUCCESS: {
      const otpReponse1: myModels.OTPReponse = <myModels.OTPReponse>(
        action.payload
      );
      return Object.assign({}, state, {
        otpReponse: { candidateGuid: otpReponse1.candidateGuid }
      });
    }
    case myActions.actionType.GET_DOCUMENT_SUCCESS: {
      const documents: myModels.Document[] = <myModels.Document[]>(
        action.payload
      );
      return Object.assign({}, state, { documents });
    }
    case myActions.actionType.DELETE_DOCUMENT_SUCCESS: {
      const documents: myModels.Document[] = <myModels.Document[]>(
        action.payload
      );
      return Object.assign({}, state, { documents });
    }
    case myActions.actionType.CLEAR_CANDIDATE: {
      return Object.assign({}, state, initialState);
    }
    case myActions.actionType.GET_SELECTED_COLLEGE_SUCCESS: {
      const selectedColleges: myModels.SelectedColleges[] = <
        myModels.SelectedColleges[]
      >action.payload;
      return Object.assign({}, state, { selectedColleges });
    }
    case myActions.actionType.SAVE_SELECTED_COLLEGE_SUCCESS: {
      const selectedColleges: myModels.SelectedColleges[] = <
        myModels.SelectedColleges[]
      >action.payload;
      return Object.assign({}, state, { selectedColleges });
    }
    case  myActions.actionType.RESEND_SEATOTP_SUCCESS: {
      const resp: myModels.ResendOTPResponse = <
      myModels.ResendOTPResponse
    >action.payload;
    const seatSelectionOTP: myModels.SeatSelectionOTP = Object.assign(
      {},
      state.seatSelectionOTP,
      { isSent: resp.mobileNo !== undefined ? true : false, mobileNo:resp.mobileNo }
    );
    return Object.assign({}, state, { seatSelectionOTP });
    }
    
    case myActions.actionType.FINAL_SAVE_CLG_SELECTION_SUCCESS: {
      const acti: myActions.FinalSaveCollegeSuccessAction = <
        myActions.FinalSaveCollegeSuccessAction
      >action;
      const resp: myModels.FinalClgSaveResponse = <
        myModels.FinalClgSaveResponse
      >acti.payload;
      const selectedColleges: myModels.SelectedColleges[] = <
        myModels.SelectedColleges[]
      >resp.candidateSeatSelectionList;
      const seatSelectionOTP: myModels.SeatSelectionOTP = Object.assign(
        {},
        state.seatSelectionOTP,
        { isSent: resp.mobileNo !== undefined ? true : false, mobileNo:resp.mobileNo }
      );
      return Object.assign({}, state, { selectedColleges, seatSelectionOTP });
    }
    case myActions.actionType.CANCEL_VERIFY_SEATOTP:{
      const seatSelectionOTP = seatSelectionInit;
      return Object.assign({}, state, { seatSelectionOTP });
    }
    case myActions.actionType.VERIFY_SEATOTP_SUCCESS:{
      const seatSelectionOTP = seatSelectionInit;
      const applicationProgress: number = <number>action.payload;
      return Object.assign({}, state, { applicationProgress, seatSelectionOTP });
    }
    case myActions.actionType.FINAL_SAVE_DETAILS_SUCCESS:
    case myActions.actionType.FINAL_SAVE_PATMENT_SUCCESS:
    case myActions.actionType.FINAL_SAVE_DOCUMENT_SUCCESS: {
      const applicationProgress: number = <number>action.payload;
      return Object.assign({}, state, { applicationProgress });
    }
    default: {
      return state;
    }
  }
}
export const getCandidateState = createFeatureSelector<myModels.CandidateState>(
  "candidate"
);

export const getCandidate = createSelector(
  getCandidateState,
  (state: myModels.CandidateState): myModels.CandidateState => state
);
export const getToken = createSelector(
  getCandidateState,
  (state: myModels.CandidateState): myModels.Token => state.token
);

export const getCandidateLogin = createSelector(
  getCandidateState,
  (state: myModels.CandidateState): myModels.Login => state.login
);
export const getOtpReponse = createSelector(
  getCandidateState,
  (state: myModels.CandidateState): myModels.OTPReponse => state.otpReponse
);
export const getCandidateAllDetails = createSelector(
  getCandidateState,
  (state: myModels.CandidateState): myModels.CandiateAllDetails =>
    state.personalDetails
);
export const getCandidateCourseDetails = createSelector(
  getCandidateState,
  (state: myModels.CandidateState): myModels.CourseDetails =>
    state.courseDetails
);
export const getCandidateEducationDetails = createSelector(
  getCandidateState,
  (state: myModels.CandidateState): myModels.EducationDetails[] =>
    state.educationDetails
);
export const getSelectedColleges = createSelector(
  getCandidateState,
  (state: myModels.CandidateState): myModels.SelectedColleges[] =>
    state.selectedColleges
);
export const getApplicationProgress = createSelector(
  getCandidateState,
  (state: myModels.CandidateState): number => state.applicationProgress
);
export const getPaymentDetails = createSelector(
  getCandidateState,
  (state: myModels.CandidateState): myModels.PaymentDetails =>
    state.paymentDetails
);
export const getseatSelectionOTP = createSelector(
  getCandidateState,
  (state: myModels.CandidateState): myModels.SeatSelectionOTP =>
    state.seatSelectionOTP
);

export const getDocuments = createSelector(
  getCandidateState,
  (state: myModels.CandidateState): myModels.Document[] => state.documents
);
export const getforgotDOB = createSelector(
  getCandidateState,
  (state: myModels.CandidateState): myModels.ForgotPasswordResponse =>
    state.forgotDOB
);

export const getDocumentsWithType = createSelector(
  getDocuments,
  fromMaster.getMatserDocumentTypeList,
  (
    docs: myModels.Document[],
    docTypes: fromMaster.DocumentTypesList[]
  ): myModels.Document[] => {
    return docs.map(d => {
      const dtype = docTypes.find(dt => {
        return dt.id === d.documentTypeId;
      });
      if (dtype !== undefined) {
        return Object.assign({}, d, { documentTypeName: dtype.name });
      } else {
        return d;
      }
    });
  }
);
export const getFilterDocumentTypeByDoc = createSelector(
  getDocuments,
  fromMaster.getMatserDocumentTypeList,
  (
    docs: myModels.Document[],
    docTypes: fromMaster.DocumentTypesList[]
  ): fromMaster.DocumentTypesList[] => {
    return docTypes.filter(d => {
      const doc = docs.find(dt => {
        return dt.documentTypeId === d.id;
      });
      if (doc !== undefined) {
        return false;
      } else {
        return true;
      }
    });
  }
);
