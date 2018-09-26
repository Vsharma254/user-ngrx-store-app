import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { DetailsService } from './service';
import  * as myReducer from './reducer'
import  * as myActions from './actions';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DetailsEffect {   
    @Effect()
    detailsGet$: Observable<Action> = this.action$.ofType(myActions.actionType.GET_DETAILS).lift(
    switchMap((action: myActions.GetDetailsAction)=>{
            return this.detailService.GetDetails(action.payload).pipe(map(resp=>{
                return of(new myActions.GetDetailsSuccessAction(resp));
            }))
    }));  
    constructor(private action$: Actions, 
    private detailService: DetailsService,
     private store: Store<myReducer.State> ){
    }
}