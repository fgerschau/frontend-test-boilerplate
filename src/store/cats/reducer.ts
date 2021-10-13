import { REQUEST_ACTIONS, STATUS } from '../../constant/action.constants';
import { IAction } from '../action.interfaces';

export interface ICat {
  height: number;
  id: string;
  url: string;
  width: string;
}

export interface CatState {
  list: ICat[];
}

const INITIAL = {
  list: [],
};

export default (state: CatState = INITIAL, action: IAction): CatState => {
  const { status, payload, name } = action;

  if (status === STATUS.SUCCESS) {
    if (name === REQUEST_ACTIONS.GET_CATS) {
      return {
        ...state,
        list: payload,
      };
    }
  }

  return state;
};
