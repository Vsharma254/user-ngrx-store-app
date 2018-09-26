import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as myModels from './model';
import * as myActions from './actions';
export interface State extends myModels.DetailsState {

}
const initialState = (function (): myModels.DetailsState {
    const res: myModels.DetailsState = { candidateName: undefined };
    return res;
})();

export function reducer(state = initialState, action:myActions.Actions){
switch (action.type)  
{
    case myActions.actionType.GET_DETAILS:{

    }
    default:{
        return state;
    }
}
}
export const getDetailsState = createFeatureSelector<myModels.DetailsState>('details');

export const getDetails = createSelector(
    getDetailsState, 
    (state: myModels.DetailsState) : string=>  state.candidateName 
);


