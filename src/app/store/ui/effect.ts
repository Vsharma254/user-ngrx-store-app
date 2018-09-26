import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import  * as myReducer from './reducer'
import  * as myActions from './actions';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UIEffect {   
    // @Effect()
    // detailsGet$: Observable<Action> = this.action$.ofType(myActions.actionType.SHOW_SUCCESS_NOTIFICATION).lift(
    // switchMap((action: myActions.ShowSuccessNotificationAction)=>{
    //     return of(new myActions.ShowSuccessNotificationSuceessAction(resp));
    //         }))
    // }));  
    constructor(private action$: Actions, 
     private store: Store<myReducer.UState> ){
    }
}