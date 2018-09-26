import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { Actions, Effect, EffectsModule } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { MasterService } from "./service";
import * as myReducer from "./reducer";
import * as myModel from "./model";
import * as candidateModel from "../candidate/model";
import * as myActions from "./action";
import { HttpClient } from "@angular/common/http";
import { LocalStorageService } from "../../utility/tokenService";
import { appConfig } from "../../config/config";
@Injectable()
export class MasterEffect {
  @Effect()
  getAllMasterList$: Observable<Action> = this.action$
    .ofType(myActions.actionType.GET_All_MASTER)
    .pipe(
      switchMap((action: myActions.GetAllMasterAction) => {
        const input: candidateModel.MasterDataInput = action.payload;
        return this.service.GetAllMasterList(input).pipe(
          map(resp => {
            return new myActions.GetAllMasterSuccessAction(resp);
          }),
          catchError((err, caught) => {
            return of(new myActions.GetAllMasterFailAction(err));
          })
        );
      })
    );
  @Effect()
  getCategoryById$: Observable<Action> = this.action$
    .ofType(myActions.actionType.GET_CATEGORY_BYID)
    .pipe(
      switchMap((action: myActions.GetCategoryByIDAction) => {
        const input: number = action.payload;
        return this.service.GetCategoryListById(input).pipe(
          map(resp => {
            return new myActions.GetCategoryByIDSuccessAction(resp);
          }),
          catchError((err, caught) => {
            return of(new myActions.GetCategoryByIDFailAction(err));
          })
        );
      })
    );
  @Effect()
  getSubCategoryById$: Observable<Action> = this.action$
    .ofType(myActions.actionType.GET_SUBCATEGORY_BYID)
    .pipe(
      switchMap((action: myActions.GetSubCategoryByIDAction) => {
        const input: number = action.payload;
        return this.service.GetSubCategoryListById(input).pipe(
          map(resp => {
            return new myActions.GetSubCategoryByIDSuccessAction(resp);
          }),
          catchError((err, caught) => {
            return of(new myActions.GetSubCategoryByIDFailAction(err));
          })
        );
      })
    );

  @Effect()
  getBranchById$: Observable<Action> = this.action$
    .ofType(myActions.actionType.GET_BRANCH_BYID)
    .pipe(
      switchMap((action: myActions.GetBranchByIdAction) => {
        const input: number = action.payload;
        return this.service.GetBranchListById(input).pipe(
          map(resp => {
            return new myActions.GetBranchByIdSuccessAction(resp);
          }),
          catchError((err, caught) => {
            return of(new myActions.GetBranchByIdFailAction(err));
          })
        );
      })
    );
  @Effect()
  filterBrnachByClgId$: Observable<Action> = this.action$
    .ofType(myActions.actionType.FILTER_BRANCH_BYCLG_ID)
    .pipe(
      switchMap((action: myActions.FilterBranchByClgIdAction) => {
        const input: number = action.payload;
        const courId: number = action.courseId;
        return this.service.filterBranchByID(input, courId).pipe(
          map(resp => {
            return new myActions.FilterBranchByClgIdSuccessAction(resp);
          }),
          catchError((err, caught) => {
            return of(new myActions.FilterBranchByClgIdFailAction(err));
          })
        );
      })
    );
    @Effect()
  filterCollegeByClgTypId$: Observable<Action> = this.action$
    .ofType(myActions.actionType.FILTER_CLG_BYCLGTYPE_ID)
    .pipe(
      switchMap((action: myActions.FilterClgByClgTypIdAction) => {
        const input: number = action.payload;
        const courId: number = action.courseId;
        return this.service.filterCollegeByID(input, courId).pipe(
          map(resp => {
            return new myActions.FilterClgByClgTypIdSuccessAction(resp);
          }),
          catchError((err, caught) => {
            return of(new myActions.FilterClgByClgTypIdFailAction(err));
          })
        );
      })
    );
  constructor(
    private action$: Actions,
    private service: MasterService,
    private store: Store<myReducer.MState>,
    private localStorageSer: LocalStorageService
  ) {}
}
