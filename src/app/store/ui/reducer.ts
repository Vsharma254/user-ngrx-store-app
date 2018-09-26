import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as myModels from "./model";
import * as myActions from "./actions";
import * as fromCandiate from "../candidate";
import * as fromMAster from "../master";
export interface UState extends myModels.UIState {}
const initialState = (function(): myModels.UIState {
  const res: myModels.UIState = {
    notification: myModels.notificInit,
    progressBar: myModels.setInit,
    detailsTab: "pdetails"
  };
  return res;
})();
const msgArray = {
  forgotSuccessMsg: "Date of birth has been sent on your registered mobile number!!",
  detailsFinalSaveMsg: "All personal details has been saved succeffully",
  otpSentSuccessfullMsg: "OTP has been sent successfully at your registered mobile number!!",
  resendotpSeatSuccessfullMsg: "OTP has been sent successfully for Seat selection at your registered mobile number!!",
  collegeFinalSaveMsg: "OTP has been sent successfully for Seat selection at your registered mobile number!!",
  collegeSaveMsg: "All Selected Colleges has been saved successfully!",
  documentFinalSaveMsg: "All document has been saved succeffully",
  paymentFinalSaveMsg: "Payment has been saved succeffully"
};

export function reducer(
  state = initialState,
  action: myActions.Actions | fromCandiate.Actions
) {
  switch (action.type) {
    case fromCandiate.actionType.SEND_CANDIDATE_OTP_FAIL:
    case fromCandiate.actionType.GET_CANDIDATE_OTP_FAIL:
    case fromCandiate.actionType.SET_CANDIDATE_OTP_FAIL:
    case fromCandiate.actionType.CLEAR_CANDIDATE_OTP_AND_LOCALSTORAGE_FAIL:
    case fromCandiate.actionType.GET_CANDIDATE_FAIL:
    case fromCandiate.actionType.VERIFY_OTP_FAIL:
    case fromCandiate.actionType.SET_COLLEGE_LIST_FAIL:
    case fromCandiate.actionType.Add_MORE_COLLEGE_FAIL:
    case fromCandiate.actionType.UPDATE_PERSONAL_DETAILS_FAIL:
    case fromCandiate.actionType.UPDATE_COURSE_DETAILS_FAIL:
    case fromCandiate.actionType.UPDATE_EDUCATION_DETAILS_FAIL:
    case fromCandiate.actionType.UPLOAD_FILE_FAIL:
    case fromCandiate.actionType.GET_DOCUMENT_FAIL:
    case fromCandiate.actionType.UPLOAD_DOCUMENT_FAIL:
    case fromCandiate.actionType.DELETE_DOCUMENT_FAIL:
    case fromCandiate.actionType.CLEAR_CANDIDATE_FAIL:
    case fromCandiate.actionType.GET_SELECTED_COLLEGE_FAIL:
    case fromCandiate.actionType.REMOVE_COLLEGE_FAIL:
    case fromCandiate.actionType.SAVE_SELECTED_COLLEGE_FAIL:
    case fromCandiate.actionType.FINAL_SAVE_DETAILS_FAIL:
    case fromCandiate.actionType.GET_PAYMENT_FAIL:
    case fromCandiate.actionType.FINAL_SAVE_PATMENT_FAIL:
    case fromCandiate.actionType.FINAL_SAVE_DOCUMENT_FAIL:
    case fromCandiate.actionType.FINAL_SAVE_CLG_SELECTION_FAIL:
    case fromCandiate.actionType.SET_COLLEGE_PRIORITY_FAIL:
    case fromMAster.actionType.GET_All_MASTER_FAIL:
    case fromMAster.actionType.GET_CATEGORY_BYID_FAIL:
    case fromMAster.actionType.GET_SUBCATEGORY_BYID_FAIL:
    case fromMAster.actionType.GET_BRANCH_BYID_FAIL:
    case fromMAster.actionType.FILTER_BRANCH_BYCLG_ID_FAIL:
    case fromMAster.actionType.FILTER_CLG_BYCLGTYPE_ID_FAIL:    
    case fromCandiate.actionType.SEND_CANDIDATE_OTP_FAIL:
    case fromCandiate.actionType.RESEND_SEATOTP_FAIL:
    case fromCandiate.actionType.FORGOT_DOB_FAIL: {
      const progressBar = Object.assign({}, state.progressBar, {
        masterProgressBar: false,
        mainProgress: false,
        changePriorityPBar :false
      });
      const err = <myModels.ErrorMgs>action.payload.error;
      const notification = Object.assign({}, state.notification, {
        type: "error",
        title: "Error!!",
        content: err.errorMsg
      });
      return Object.assign({}, state, { progressBar, notification });
    }
    case fromCandiate.actionType.SEND_CANDIDATE_OTP_SUCCESS:{
      const notification = Object.assign({}, state.notification, {
        type: "success",
        title: "OTP Sent!!",
        content: msgArray.resendotpSeatSuccessfullMsg
      });
        const progressBar = Object.assign({}, state.progressBar, {
          mainProgress: false
        });
        return Object.assign({}, state, { progressBar, notification });
    }
    case fromCandiate.actionType.SEND_CANDIDATE_OTP:
    case fromCandiate.actionType.SEND_CANDIDATE_OTP:
    case fromCandiate.actionType.VERIFY_OTP:
    case fromCandiate.actionType.GET_CANDIDATE: {
      const progressBar = Object.assign({}, state.progressBar, {
        mainProgress: true
      });
      return Object.assign({}, state, { progressBar });
    }
    case fromCandiate.actionType.SEND_CANDIDATE_OTP_SUCCESS:
    { const notification = Object.assign({}, state.notification, {
        type: "success",
        title: "OTP Sent!!",
        content: msgArray.otpSentSuccessfullMsg
      });
        const progressBar = Object.assign({}, state.progressBar, {
          mainProgress: false
        });
        return Object.assign({}, state, { progressBar, notification });
      }
    case fromCandiate.actionType.VERIFY_OTP_SUCCESS:
    case fromCandiate.actionType.GET_CANDIDATE_SUCCESS: {
      const progressBar = Object.assign({}, state.progressBar, {
        mainProgress: false
      });
      return Object.assign({}, state, { progressBar });
    }
    case fromCandiate.actionType.SET_COLLEGE_PRIORITY: {
      const progressBar = Object.assign({}, state.progressBar, {
        changePriorityPBar: true
      });
      return Object.assign({}, state, { progressBar });
    }
    case fromCandiate.actionType.SET_COLLEGE_PRIORITY_SUCCESS: {
      const progressBar = Object.assign({}, state.progressBar, {
        changePriorityPBar: false
      });
      return Object.assign({}, state, { progressBar });
    }
    case fromMAster.actionType.GET_All_MASTER: {
      const progressBar = Object.assign({}, state.progressBar, {
        masterProgressBar: true
      });
      return Object.assign({}, state, { progressBar });
    }
    case fromMAster.actionType.GET_All_MASTER_SUCCESS: {
      const progressBar = Object.assign({}, state.progressBar, {
        masterProgressBar: false
      });
      return Object.assign({}, state, { progressBar });
    }
    case myActions.actionType.SHOW_TAB: {
      const detailsTab = action.payload;
      return Object.assign({}, state, { detailsTab });
    }
    case myActions.actionType.SHOW_SUCCESS_NOTIFICATION: {
    }
    case myActions.actionType.SHOW_ERROR_NOTIFICATION: {
    }
    case fromCandiate.actionType.FORGOT_DOB_SUCCESS:{
      const progressBar = Object.assign({}, state.progressBar, {
        mainProgress: false
      });
      const notification = Object.assign({}, state.notification, {
        type: "success",
        title: "DOB Sent!!",
        content: msgArray.forgotSuccessMsg
      });
      return Object.assign({}, state, { notification, progressBar });
    }
    case fromCandiate.actionType.FINAL_SAVE_DETAILS_SUCCESS: {
      const progressBar = Object.assign({}, state.progressBar, {
        mainProgress: false
      });
      const notification = Object.assign({}, state.notification, {
        type: "success",
        title: "Saved!!",
        content: msgArray.detailsFinalSaveMsg
      });
      return Object.assign({}, state, { notification, progressBar });
    }
    case fromCandiate.actionType.FINAL_SAVE_PATMENT_SUCCESS: {
      // const notification = Object.assign({}, state.notification, {
      //   type: "success",
      //   title: "Saved!!",
      //   content: msgArray.paymentFinalSaveMsg
      // });
      return Object.assign({}, state);
    }
    case fromCandiate.actionType.FINAL_SAVE_DOCUMENT:{
      const progressBar = Object.assign({}, state.progressBar, {
        mainProgress: true
      });
      return Object.assign({}, state, {  progressBar });
    }
    case fromCandiate.actionType.FINAL_SAVE_DOCUMENT_SUCCESS: {
      const progressBar = Object.assign({}, state.progressBar, {
        mainProgress: false
      });
      const notification = Object.assign({}, state.notification, {
        type: "success",
        title: "Saved!!",
        content: msgArray.documentFinalSaveMsg
      });
      return Object.assign({}, state, { notification, progressBar });
    }
    case fromCandiate.actionType.SAVE_SELECTED_COLLEGE: {
      const progressBar = Object.assign({}, state.progressBar, {
        mainProgress: true
      });
      return Object.assign({}, state, {  progressBar });
    }
    case fromCandiate.actionType.SAVE_SELECTED_COLLEGE_SUCCESS: {
      const progressBar = Object.assign({}, state.progressBar, {
        mainProgress: false
      });
      const notification = Object.assign({}, state.notification, {
        type: "success",
        title: "Saved!!",
        content: msgArray.collegeSaveMsg
      });
      return Object.assign({}, state, { notification, progressBar });
    }
    case fromCandiate.actionType.FINAL_SAVE_CLG_SELECTION: {
      const progressBar = Object.assign({}, state.progressBar, {
        mainProgress: true
      });
      return Object.assign({}, state, {  progressBar });
    }
    case fromCandiate.actionType.FINAL_SAVE_CLG_SELECTION_SUCCESS: {
      const progressBar = Object.assign({}, state.progressBar, {
        mainProgress: false
      });
      const notification = Object.assign({}, state.notification, {
        type: "success",
        title: "OTP Sent!!",
        content: msgArray.collegeFinalSaveMsg
      });
      return Object.assign({}, state, { notification, progressBar });
    }
    case fromCandiate.actionType.UPLOAD_DOCUMENT_SUCCESS: {
      const notification = Object.assign({}, state.notification, {
        type: "success",
        title: "Upload Successfull",
        content: "Document uploaded successfull"
      });
      return Object.assign({}, state, { notification });
    }
    case fromCandiate.actionType.DELETE_DOCUMENT: {
      const progressBar = Object.assign({}, state.progressBar, {
        mainProgress: true
      });
      return Object.assign({}, state, {  progressBar });
    }
    case fromCandiate.actionType.DELETE_DOCUMENT_SUCCESS: {
      const progressBar = Object.assign({}, state.progressBar, {
        mainProgress: false
      });
      const notification = Object.assign({}, state.notification, {
        type: "success",
        title: "Delete Successfull",
        content: "Document deleted successfull"
      });
      return Object.assign({}, state, { notification, progressBar });
    }
    case fromCandiate.actionType.UPLOAD_FILE_SUCCESS: {
      const myaction: fromCandiate.UploadFileSuccessAction = <
        fromCandiate.UploadFileSuccessAction
      >action;
      let notification;
      if (myaction.uploadType === "photo") {
        notification = Object.assign({}, state.notification, {
          type: "success",
          title: "Uploaded Successfull",
          content: "Photo uploaded successfull"
        });
      } else {
        notification = Object.assign({}, state.notification, {
          type: "success",
          title: "Uploaded Successfull",
          content: "Signature uploaded successfull"
        });
      }
      return Object.assign({}, state, { notification });
    }

    case fromCandiate.actionType.UPDATE_EDUCATION_DETAILS_SUCCESS: {
      const progressBar = Object.assign({}, state.progressBar, {
        mainProgress: false
      });
      const notification = Object.assign({}, state.notification, {
        type: "success",
        title: "Update Successfull",
        content: "Education details updated successfull"
      });
      return Object.assign({}, state, { notification, progressBar });
    }
    case fromCandiate.actionType.UPDATE_COURSE_DETAILS_SUCCESS: {
      const progressBar = Object.assign({}, state.progressBar, {
        mainProgress: false
      });
      const notification = Object.assign({}, state.notification, {
        type: "success",
        title: "Update Successfull",
        content: "Course details updated successfull!!"
      });
      return Object.assign({}, state, { notification, progressBar });
    }
    case fromCandiate.actionType.UPDATE_EDUCATION_DETAILS:
    case fromCandiate.actionType.UPDATE_COURSE_DETAILS:
    case fromCandiate.actionType.FINAL_SAVE_DETAILS:
    case fromCandiate.actionType.UPDATE_PERSONAL_DETAILS: {
      const progressBar = Object.assign({}, state.progressBar, {
        mainProgress: true
      });
      return Object.assign({}, state, { progressBar });
    }
    case fromCandiate.actionType.UPDATE_PERSONAL_DETAILS_SUCCESS: {
      const notification = Object.assign({}, state.notification, {
        type: "success",
        title: "Update Successfull",
        content: "Personal details updated successfull!!"
      });
      const progressBar = Object.assign({}, state.progressBar, {
        mainProgress: false
      });
      return Object.assign({}, state, { notification, progressBar });
    }

    default: {
      return state;
    }
  }
}
export const getUIState = createFeatureSelector<myModels.UIState>("ui");

export const getNotification = createSelector(
  getUIState,
  (state: myModels.UIState): myModels.NotificationUI => state.notification
);
export const getProgressBar = createSelector(
  getUIState,
  (state: myModels.UIState): myModels.ProgreeBar => state.progressBar
);
export const getTabShowBar = createSelector(
  getUIState,
  (state: myModels.UIState): string => state.detailsTab
);
