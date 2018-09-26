import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import {
  catchError,
  map,
  mergeMap,
  switchMap,
  withLatestFrom
} from "rxjs/operators";
import { Actions, Effect, EffectsModule } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { CandidateService } from "./service";
import * as myReducer from "./reducer";
import * as myModel from "./model";
import * as myActions from "./action";
import * as fromMaster from "../master";
import { HttpClient } from "@angular/common/http";
import { LocalStorageService } from "../../utility/tokenService";
import { appConfig } from "../../config/config";
@Injectable()
export class CandidateEffect {
  @Effect()
  getCandiateAllDetails$: Observable<Action> = this.action$
    .ofType(myActions.actionType.GET_CANDIDATE)
    .pipe(
      switchMap((action: myActions.GetCandidateAction) => {
        const input: myModel.GetCandidateInput = action.payload;
        return this.candidateService.GetCandidateAllDetails(input).pipe(
          map(resp => {
            return new myActions.GetCandidateSuccessAction(resp);
          }),
          catchError((err, caught) => {
            return of(new myActions.GetCandidateFailAction(err));
          })
        );
      })
    );
  // @Effect()
  // addMoreRowInCollege$: Observable<Action> = this.action$
  //   .ofType(myActions.actionType.Add_MORE_COLLEGE)
  //   .pipe(
  //     switchMap((action: myActions.GetSelectedCollegeAction) => {
  //       const input: string = action.payload;
  //       return this.candidateService.GetSelectedColgList(input).pipe(
  //         map(resp => {
  //           return new myActions.GetSelectedCollegeSuccessAction(resp);
  //         }),
  //         catchError((err, caught) => {
  //           return of(new myActions.GetSelectedCollegeFailAction(err));
  //         })
  //       );
  //     })
  //   );
  @Effect()
  getSelectColg$: Observable<Action> = this.action$
    .ofType(myActions.actionType.GET_SELECTED_COLLEGE)
    .pipe(
      switchMap((action: myActions.GetSelectedCollegeAction) => {
        const input: string = action.payload;
        return this.candidateService.GetSelectedColgList(input).pipe(
          map(resp => {
            return new myActions.GetSelectedCollegeSuccessAction(resp);
          }),
          catchError((err, caught) => {
            return of(new myActions.GetSelectedCollegeFailAction(err));
          })
        );
      })
    );

  // @Effect()
  // setInitalSelectedCollege$: Observable<Action> = this.action$.
  //     ofType(myActions.actionType.SET_COLLEGE_LIST)
  //     .pipe(withLatestFrom(this.mStore.select(fromMaster.getMatserCollegeList)),
  //         map(([action, colleges]) => {
  //             const actions = <myActions.SetCollegeListAction>action;
  //             const cousr: myModel.CourseDetails = actions.payload;
  //             const reps: myModel.SelectedColleges[] = [{
  //                 collegeList: colleges, branchId: 0
  //                 , branchList: [], collegeId: 0, courseId: cousr.courseAppliedId,
  //                 personalDetailsId: cousr.personalDetailsId, priorityOrder: 0
  //             }];
  //             return new myActions.SetCollegeListSuccessAction(reps);
  //         })
  //         , catchError((err, caught) => {
  //             return of(new myActions.SendCandidateOTPFailAction(err));
  //         }));

  @Effect()
  setOTP$: Observable<Action> = this.action$
    .ofType(myActions.actionType.SET_CANDIDATE_OTP)
    .pipe(
      switchMap((action: myActions.SetCandidateOTPAction) => {
        let input: myModel.OTPReponse = action.payload;
        if (input === undefined) {
          input = this.candidateService.GetOTPFromLocalStorage();
        }
        return of(new myActions.SetCandidateOTPSuccessAction(input));
      }),
      catchError((err, caught) => {
        return of(new myActions.SetCandidateOTPSuccessAction(err));
      })
    );

  @Effect()
  sendOTP$: Observable<Action> = this.action$
    .ofType(myActions.actionType.SEND_CANDIDATE_OTP)
    .pipe(
      switchMap((action: myActions.SendCandidateOTPAction) => {
        const input: myModel.Login = action.payload;
        return this.candidateService.SendCandidateOTP(input).pipe(
          map(resp => {
            return new myActions.SendCandidateOTPSuccessAction(resp, input);
          }),
          catchError((err, caught) => {
            return of(new myActions.SendCandidateOTPFailAction(err));
          })
        );
      })
    );

  @Effect()
  finalSaveCadndiate$: Observable<Action> = this.action$
    .ofType(myActions.actionType.FINAL_SAVE_DETAILS)
    .pipe(
      withLatestFrom(
        this.mStore.select(myReducer.getCandidateAllDetails),
        this.mStore.select(myReducer.getCandidateCourseDetails),
        this.mStore.select(myReducer.getCandidateEducationDetails)
      ),
      switchMap(([action, can, cour, educ]) => {
        const actions = <myActions.SaveFinalDetailsAction>action;
        const input: myModel.CandiateInput = {
          personalDetails: can,
          educationDetails: educ,
          courseDetails: cour,
          applicationProgress: 0
        };
        return this.candidateService
          .SaveFinalCandidate(input, actions.payload)
          .pipe(
            map(resp => {
              return new myActions.SaveFinalDetailsSuccessAction(resp);
            }),
            catchError((err, caught) => {
              return of(new myActions.SaveFinalDetailsFailAction(err));
            })
          );
      })
    );
  @Effect()
  finalSavePayment$: Observable<Action> = this.action$
    .ofType(myActions.actionType.FINAL_SAVE_PATMENT)
    .pipe(
      withLatestFrom(this.mStore.select(myReducer.getCandidateAllDetails)),
      switchMap(([action, can]) => {
        const actions = <myActions.SaveFinalDetailsAction>action;
        const input: myModel.PaymentInput = {
          personalDetailId: can.id,
          regNo: can.regNo
        };
        return this.candidateService.SaveFinalPayment(input).pipe(
          map(resp => {
            return new myActions.FinalPaymentSuccessAction(resp);
          }),
          catchError((err, caught) => {
            return of(new myActions.FinalPaymentFailAction(err));
          })
        );
      })
    );

  @Effect()
  setPrority$: Observable<Action> = this.action$
    .ofType(myActions.actionType.SET_COLLEGE_PRIORITY)
    .pipe(
      withLatestFrom(this.mStore.select(myReducer.getSelectedColleges)),
      switchMap(([action, clgs]) => {
        const actions = <myActions.SetCollegePriorityAction>action;
        const act = <myActions.SetCollegePriorityAction>action;
        const priorty: number = act.payload;
        const upDown: number = act.upDown;
        let found = false;
        let selectedColleges = clgs.sort(
          (a1, a2) => a1.priorityOrder - a2.priorityOrder
        );
        selectedColleges = selectedColleges.map(itm => {
          if (upDown > 0) {
            if (itm.priorityOrder == priorty - 1) {
              itm.priorityOrder = itm.priorityOrder + 1;
            } else if (itm.priorityOrder == priorty) {
              itm.priorityOrder = itm.priorityOrder - 1;
            }
          } else {
            if (itm.priorityOrder == priorty + 1) {
              itm.priorityOrder = itm.priorityOrder - 1;
            } else if (itm.priorityOrder == priorty) {
              itm.priorityOrder = itm.priorityOrder + 1;
            }
          }
          return itm;
        });
        selectedColleges = selectedColleges.sort(
          (a1, a2) => a1.priorityOrder - a2.priorityOrder
        );
        return of(
          new myActions.SetCollegePrioritySuccessAction(selectedColleges)
        );
      })
    );
  @Effect()
  finalSaveDocument$: Observable<Action> = this.action$
    .ofType(myActions.actionType.FINAL_SAVE_DOCUMENT)
    .pipe(
      withLatestFrom(this.mStore.select(myReducer.getDocuments)),
      switchMap(([action, docs]) => {
        const actions = <myActions.FinalPaymentAction>action;
        const input: myModel.Document[] = docs;
        return this.candidateService.SaveFinalDocument(input).pipe(
          map(resp => {
            return new myActions.FinalDocumentSaveSuccessAction(resp);
          }),
          catchError((err, caught) => {
            return of(new myActions.FinalDocumentSaveFailAction(err));
          })
        );
      })
    );
    @Effect()
  finalSaveColleges$: Observable<Action> = this.action$
    .ofType(myActions.actionType.FINAL_SAVE_CLG_SELECTION)
    .pipe(
      withLatestFrom(this.mStore.select(myReducer.getSelectedColleges)),
      switchMap(([action, clgs]) => {
        const actions = <myActions.FinalSaveCollegeSaveAction>action;
        const input: myModel.SelectedColleges[] = clgs;
        return this.candidateService.SaveFinalColleges(input, actions.guid).pipe(
          map(resp => {
            return new myActions.FinalSaveCollegeSuccessAction(resp);
          }),
          catchError((err, caught) => {
            return of(new myActions.FinalSaveCollegeFailAction(err));
          })
        );
      })
    );
    
  @Effect()
  getPaymentInfo$: Observable<Action> = this.action$
    .ofType(myActions.actionType.GET_PAYMENT)
    .pipe(
      switchMap((action: myActions.GetPaymentAction) => {
        const input: string = action.payload;
        return this.candidateService.GetPaymentInfo(input).pipe(
          map(resp => {
            return new myActions.GetPaymentSuccessAction(resp);
          }),
          catchError((err, caught) => {
            return of(new myActions.GetPaymentFailAction(err));
          })
        );
      })
    );
  @Effect()
  verifyOTP$: Observable<Action> = this.action$
    .ofType(myActions.actionType.VERIFY_OTP)
    .pipe(
      switchMap((action: myActions.VerifyOTPAction) => {
        const input: myModel.OTP = action.payload;
        return this.candidateService.VerifyCandidateOTP(input).pipe(
          map(resp => {
            return new myActions.VerifyOTPSuccessAction(resp);
          }),
          catchError((err, caught) => {
            return of(new myActions.VerifyOTPFailAction(err));
          })
        );
      })
    );
    @Effect()
    forgotDOB$: Observable<Action> = this.action$
      .ofType(myActions.actionType.FORGOT_DOB)
      .pipe(
        switchMap((action: myActions.ForgotDOBAction) => {
          const input: myModel.ForgotPasswordRequest = action.payload;
          return this.candidateService.ForgotDOB(input).pipe(
            map(resp => {
              return new myActions.ForgotDOBSuccessAction(resp);
            }),
            catchError((err, caught) => {
              return of(new myActions.ForgotDOBFailAction(err));
            })
          );
        })
      );
      @Effect()
    verifySeatOTP$: Observable<Action> = this.action$
      .ofType(myActions.actionType.VERIFY_SEATOTP)
      .pipe(
        switchMap((action: myActions.VerifySeatOTPAction) => {
          const input: myModel.SeatOTPInput = action.payload;
          return this.candidateService.VerifySeatOTP(input, action.guid).pipe(
            map(resp => {
              return new myActions.VerifySeatOTPSuccessAction(resp);
            }),
            catchError((err, caught) => {
              return of(new myActions.ForgotDOBFailAction(err));
            })
          );
        })
      );
      @Effect()
      resendSeatOTP$: Observable<Action> = this.action$
        .ofType(myActions.actionType.RESEND_SEATOTP)
        .pipe(
          switchMap((action: myActions.ResendSeatOTPAction) => {
            const input: myModel.ReSendOTP = action.payload;
            return this.candidateService.ResendOTP(input, action.guid).pipe(
              map(resp => {
                return new myActions.ResendSeatOTPSuccessAction(resp);
              }),
              catchError((err, caught) => {
                return of(new myActions.SendCandidateOTPFailAction(err));
              })
            );
          })
        );
  @Effect()
  updateCandidate$: Observable<Action> = this.action$
    .ofType(myActions.actionType.UPDATE_PERSONAL_DETAILS)
    .pipe(
      switchMap((action: myActions.UpdatePersonalDetailsAction) => {
        const input: myModel.CandiateAllDetails = action.payload;
        return this.candidateService
          .UpdateCandidatePersonalDetails(input, action.guid)
          .pipe(
            map(resp => {
              return new myActions.UpdatePersonalDetailsSuccessAction(resp);
            }),
            catchError((err, caught) => {
              return of(new myActions.SendCandidateOTPFailAction(err));
            })
          );
      })
    );
  @Effect()
  updateCourse$: Observable<Action> = this.action$
    .ofType(myActions.actionType.UPDATE_COURSE_DETAILS)
    .pipe(
      switchMap((action: myActions.UpdateCourseDetailsAction) => {
        const input: myModel.CourseDetails = action.payload;
        return this.candidateService
          .UpdateCandidateCourseDetails(input, action.guid)
          .pipe(
            map(resp => {
              return new myActions.UpdateCourseDetailsSuccessAction(resp);
            }),
            catchError((err, caught) => {
              return of(new myActions.UpdateCourseDetailsFailAction(err));
            })
          );
      })
    );
  @Effect()
  updateEducation$: Observable<Action> = this.action$
    .ofType(myActions.actionType.UPDATE_EDUCATION_DETAILS)
    .pipe(
      switchMap((action: myActions.UpdateEducationDetailsAction) => {
        const input: myModel.EducationDetails = action.payload;
        return this.candidateService
          .UpdateCandidateEducationDetails(input, action.guid)
          .pipe(
            map(resp => {
              return new myActions.UpdateEducationDetailsSuccessAction(resp);
            }),
            catchError((err, caught) => {
              return of(new myActions.UpdateEducationDetailsFailAction(err));
            })
          );
      })
    );
  @Effect()
  uploadFile$: Observable<Action> = this.action$
    .ofType(myActions.actionType.UPLOAD_FILE)
    .pipe(
      switchMap((action: myActions.UploadFileAction) => {
        const input: any = action.payload;
        const type: string = action.uploadType;
        const guid: string = action.guid;
        return this.candidateService.UploadFile(input, action.guid, type).pipe(
          map(resp => {
            return new myActions.UploadFileSuccessAction(resp, type);
          }),
          catchError((err, caught) => {
            return of(new myActions.UploadFileFailAction(err));
          })
        );
      })
    );
  @Effect()
  getDocuments$: Observable<Action> = this.action$
    .ofType(myActions.actionType.GET_DOCUMENT)
    .pipe(
      switchMap((action: myActions.GetDocumentAction) => {
        const input: string = action.payload;
        return this.candidateService.GetDocuments(input).pipe(
          map(resp => {
            return new myActions.GetDocumentSuccessAction(resp);
          }),
          catchError((err, caught) => {
            return of(new myActions.GetDocumentFailAction(err));
          })
        );
      })
    );
  @Effect()
  uploadDocuments$: Observable<Action> = this.action$
    .ofType(myActions.actionType.UPLOAD_DOCUMENT)
    .pipe(
      switchMap((action: myActions.UploadDocumentAction) => {
        const input: any = action.payload;
        const type: number = action.uploadType;
        const guid: string = action.guid;
        return this.candidateService
          .UploadDocument(input, action.guid, type)
          .pipe(
            map(resp => {
              return new myActions.UploadDocumentSuccessAction(resp);
            }),
            catchError((err, caught) => {
              return of(new myActions.UploadDocumentFailAction(err));
            })
          );
      })
    );
  @Effect()
  deleteDocuments$: Observable<Action> = this.action$
    .ofType(myActions.actionType.DELETE_DOCUMENT)
    .pipe(
      switchMap((action: myActions.DeleteDocumentAction) => {
        const docid: number = action.payload;
        return this.candidateService.DeleteDocuments(action.guid, docid).pipe(
          map(resp => {
            return new myActions.DeleteDocumentSuccessAction(resp);
          }),
          catchError((err, caught) => {
            return of(new myActions.DeleteDocumentFailAction(err));
          })
        );
      })
    );
  @Effect()
  saveSelectedCollges$: Observable<Action> = this.action$
    .ofType(myActions.actionType.SAVE_SELECTED_COLLEGE)
    .pipe(
      switchMap((action: myActions.SaveSelectedCollegeAction) => {
        const clgs: myModel.SelectedColleges[] = action.payload;
        const guid:string = action.guid;
        return this.candidateService.SaveSelectedCollege(clgs, guid).pipe(
          map(resp => {
            return new myActions.SaveSelectedCollegeSuccessAction(resp);
          }),
          catchError((err, caught) => {
            return of(new myActions.SaveSelectedCollegeFailAction(err));
          })
        );
      })
    );

  constructor(
    private action$: Actions,
    private candidateService: CandidateService,
    private store: Store<myReducer.CState>,
    private localStorageSer: LocalStorageService,
    private mStore: Store<fromMaster.MState>
  ) {}
}
