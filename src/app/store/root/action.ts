import { Action } from '@ngrx/store';
export const actionType = {
  DO_CLEAR_STATE: '[Root] Get Clear state'
}

export class ClearStateAction implements Action {
  readonly type = actionType.DO_CLEAR_STATE;
  constructor(public payload: string) {
  }
}