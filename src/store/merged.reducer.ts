import { combineReducers } from 'redux';
import { IAction } from './action.interfaces';
import cats from './cats/reducer';

const appState = combineReducers({
    cats
});

const reducers = (state: any, action: IAction) => {


  return appState(state, action);
};

export default reducers;
