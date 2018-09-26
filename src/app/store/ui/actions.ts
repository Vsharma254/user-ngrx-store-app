import { Action } from '@ngrx/store';
import * as myModels from './model';
export const actionType = {
    SHOW_SUCCESS_NOTIFICATION: '[UI] Show Success notification',
    SHOW_SUCCESS_NOTIFICATION_SUCCESS: '[UI] Show Success notification succes',
    SHOW_SUCCESS_NOTIFICATION_FAIL: '[UI] Show Success notification fail',
    SHOW_ERROR_NOTIFICATION: '[UI] Show Error notification',
    SHOW_ERROR_NOTIFICATION_SUCCESS: '[UI] Show Error notification success',
    SHOW_ERROR_NOTIFICATION_FAIL: '[UI] Show Error notification fail',
    SHOW_TAB: '[UI] Show First Tab'
}
export class ShowTabAction implements Action {
  readonly type = actionType.SHOW_TAB;
  constructor(public payload: string){
  }
}

export class ShowSuccessNotificationAction implements Action {
  readonly type = actionType.SHOW_SUCCESS_NOTIFICATION;
  constructor(public payload: myModels.NotificationUI){
  }
}
export class ShowSuccessNotificationSuceessAction implements Action {
  readonly type = actionType.SHOW_SUCCESS_NOTIFICATION_FAIL;
  constructor(public payload: myModels.NotificationUI){
  }
}
export class ShowSuccessNotificationFailAction implements Action {
  readonly type = actionType.SHOW_SUCCESS_NOTIFICATION_FAIL;
  constructor(public payload: myModels.NotificationUI){
  }
}
export class ShowErrorNotificationAction implements Action {
  readonly type = actionType.SHOW_ERROR_NOTIFICATION;
  constructor(public payload: myModels.NotificationUI){
  }
}
export class ShowErrorNotificationSuccessAction implements Action {
  readonly type = actionType.SHOW_ERROR_NOTIFICATION_SUCCESS;
  constructor(public payload: myModels.NotificationUI){
  }
}
export class ShowErrorNotificationFailAction implements Action {
  readonly type = actionType.SHOW_ERROR_NOTIFICATION_FAIL;
  constructor(public payload: myModels.NotificationUI){
  }
}
export type Actions = ShowSuccessNotificationAction
|ShowErrorNotificationAction
| ShowErrorNotificationSuccessAction
| ShowErrorNotificationFailAction
| ShowErrorNotificationSuccessAction
| ShowErrorNotificationFailAction;