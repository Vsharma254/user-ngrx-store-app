import { Action } from '@ngrx/store';
import * as myModels from './model';
import * as candidateModels from '../candidate/model';
export const actionType = {
  GET_All_MASTER: '[Maaster] Get Master all',
  GET_All_MASTER_SUCCESS: '[Master] Get Master all success',
  GET_All_MASTER_FAIL: '[Master] Get Master all fail',

  GET_CATEGORY_BYID: '[Master] Get Category by ID',
  GET_CATEGORY_BYID_SUCCESS: '[Candidate] Get Category by ID success',
  GET_CATEGORY_BYID_FAIL: '[Candidate] Get Category by ID fail',

  GET_SUBCATEGORY_BYID: '[Master] Get Sub Category by ID',
  GET_SUBCATEGORY_BYID_SUCCESS: '[Candidate] Get Sub Category by ID success',
  GET_SUBCATEGORY_BYID_FAIL: '[Candidate] Get Sub Category by ID fail',

  GET_BRANCH_BYID: '[Master] Get branch by ID',
  GET_BRANCH_BYID_SUCCESS: '[Master] Get branch by ID success',
  GET_BRANCH_BYID_FAIL: '[Master] Get branch by ID fail',
  
  FILTER_CLG_BYCLGTYPE_ID: '[Candidate] Filter College by college type ID',
  FILTER_CLG_BYCLGTYPE_ID_SUCCESS: '[Candidate] Filter College by college type ID success',
  FILTER_CLG_BYCLGTYPE_ID_FAIL: '[Candidate] Filter College by college type ID fail',

  FILTER_BRANCH_BYCLG_ID: '[Candidate] Filter branch by college ID',
  FILTER_BRANCH_BYCLG_ID_SUCCESS: '[Candidate] Filter branch by college ID success',
  FILTER_BRANCH_BYCLG_ID_FAIL: '[Candidate] Filter branch by college ID fail',
}

export class FilterClgByClgTypIdAction implements Action {
  readonly type = actionType.FILTER_CLG_BYCLGTYPE_ID
  constructor(public payload: number, public courseId: number) {
  }
}

export class FilterClgByClgTypIdSuccessAction implements Action {
  readonly type = actionType.FILTER_CLG_BYCLGTYPE_ID_SUCCESS;
  constructor(public payload: myModels.Collage[]) {
  }
}
export class FilterClgByClgTypIdFailAction implements Action {
  readonly type = actionType.FILTER_CLG_BYCLGTYPE_ID_FAIL;
  constructor(public payload: any) {
  }
}

export class FilterBranchByClgIdAction implements Action {
  readonly type = actionType.FILTER_BRANCH_BYCLG_ID;
  constructor(public payload: number, public courseId: number) {
  }
}

export class FilterBranchByClgIdSuccessAction implements Action {
  readonly type = actionType.FILTER_BRANCH_BYCLG_ID_SUCCESS;
  constructor(public payload: myModels.Branch[]) {
  }
}
export class FilterBranchByClgIdFailAction implements Action {
  readonly type = actionType.FILTER_BRANCH_BYCLG_ID_FAIL;
  constructor(public payload: any) {
  }
}

export class GetBranchByIdAction implements Action {
  readonly type = actionType.GET_BRANCH_BYID;
  constructor(public payload: number) {
  }
}
export class GetBranchByIdSuccessAction implements Action {
  readonly type = actionType.GET_BRANCH_BYID_SUCCESS;
  constructor(public payload: myModels.Branch[]) {
  }
}
export class GetBranchByIdFailAction implements Action {
  readonly type = actionType.GET_BRANCH_BYID_FAIL;
  constructor(public payload: any) {
  }
}

export class GetAllMasterAction implements Action {
  readonly type = actionType.GET_All_MASTER;
  constructor(public payload: candidateModels.MasterDataInput) {
  }
}
export class GetAllMasterSuccessAction implements Action {
  readonly type = actionType.GET_All_MASTER_SUCCESS;
  constructor(public payload: myModels.AllMasterList) {
  }
}
export class GetAllMasterFailAction implements Action {
  readonly type = actionType.GET_All_MASTER_FAIL;
  constructor(public payload: any) {
  }
}

export class GetCategoryByIDAction implements Action {
  readonly type = actionType.GET_CATEGORY_BYID;
  constructor(public payload: number) {
  }
}
export class GetCategoryByIDSuccessAction implements Action {
  readonly type = actionType.GET_CATEGORY_BYID_SUCCESS;
  constructor(public payload: myModels.Category[]) {
  }
}
export class GetCategoryByIDFailAction implements Action {
  readonly type = actionType.GET_CATEGORY_BYID_FAIL;
  constructor(public payload: any) {
  }
}
export class GetSubCategoryByIDAction implements Action {
  readonly type = actionType.GET_SUBCATEGORY_BYID;
  constructor(public payload: number) {
  }
}
export class GetSubCategoryByIDSuccessAction implements Action {
  readonly type = actionType.GET_SUBCATEGORY_BYID_SUCCESS;
  constructor(public payload: myModels.SubCategory[]) {
  }
}
export class GetSubCategoryByIDFailAction implements Action {
  readonly type = actionType.GET_SUBCATEGORY_BYID_FAIL;
  constructor(public payload: any) {
  }
}

export type Actions =
  GetAllMasterAction
  | GetAllMasterSuccessAction
  | GetAllMasterFailAction
  | GetCategoryByIDAction
  | GetCategoryByIDSuccessAction
  | GetCategoryByIDFailAction
  | GetSubCategoryByIDAction
  | GetSubCategoryByIDSuccessAction
  | GetSubCategoryByIDFailAction;