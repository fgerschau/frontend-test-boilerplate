import { AnyAction } from 'redux';
import { STATUS } from '../constant/action.constants';


export interface IAction extends AnyAction {
  name?: string;
  status?: STATUS;
  type: string;
  payload?: any;
  params?: any;
  exception?: any;
}