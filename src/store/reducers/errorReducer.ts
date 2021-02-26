import { SET_IS_LOADING_ERROR } from '../types/types';
import { ErrorType } from '../../lib/types';

type ErrorActionType = {
  type: string;
  payload: ErrorType;
};

const defaultErrorState: ErrorType = {
  happened: false,
  errorMsg: '',
};

const errorReducer = (state: ErrorType = defaultErrorState, { type, payload }: ErrorActionType) => {
  switch (type) {
    case SET_IS_LOADING_ERROR:
      return payload;
    default:
      return state;
  }
};

export default errorReducer;
