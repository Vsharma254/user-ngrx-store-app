import { Action } from '@ngrx/store';
import * as myModels from './model';
export const actionType = {
    GET_DETAILS: '[Details] Get details',
    GET_DETAILS_SUCCESS: '[Details] Get details success',
    GET_DETAILS_FAIL: '[Details] Get details fail'
}

export class GetDetailsAction implements Action {
  readonly type = actionType.GET_DETAILS;
  constructor(public payload: string){
  }
}
export class GetDetailsSuccessAction implements Action {
  readonly type = actionType.GET_DETAILS_SUCCESS;
  constructor(public payload: myModels.IPersonalDetails){
  }
}
export class GetDetailsFailAction implements Action {
  readonly type = actionType.GET_DETAILS_FAIL;
  constructor(public payload: string){
  }
}
export type Actions = GetDetailsAction;