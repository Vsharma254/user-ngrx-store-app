import {
  ActionReducerMap,
  ActionReducer,
  MetaReducer,
  Action
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { LocalStorageService } from "../../utility/tokenService";
import * as fromAction from "./action";
export interface State {
  name: string;
}
class Interept {
  exposeMe: any;
  constructor(public tk: LocalStorageService) {
    this.exposeMe = tk;
  }
}
const initialState = "From Root";
export function reducer(state = initialState, action: Action): string {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
export const reducers: ActionReducerMap<State> = {
  name: reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    const a = new Interept(new LocalStorageService());
    const isNotExpired = a.exposeMe.checkExpirationStorage();
    if (isNotExpired) {
    }
    // else {
    //   this.notificationSer.create(
    //       "Session Expired!",
    //       "Your session has been expired, please login!!",
    //       "info",
    //       ui.notificInit
    //     );
    console.log("state", state);
    console.log("action", action);
    const newstate = reducer(state, action);
    console.log("new state", newstate);
    return newstate;
  };
}
// export function clearState(reducer: ActionReducer<State>): ActionReducer<State> {
//   return function(state: State, action: Action): State {
//     if (action.type === '[Root] Get Clear state') {
//       state = undefined;
//     }
//     return reducer(undefined, action);
//   };
// }

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];
