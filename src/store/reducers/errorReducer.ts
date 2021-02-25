import { SET_IS_LOADING_ERROR } from '../types/types';

type ErrorActionType = {
  type: string;
};

const errorReducer = (state: boolean = false, action: ErrorActionType) => {
  const { type } = action;
  switch (type) {
    case SET_IS_LOADING_ERROR:
      return true;
    default:
      return state;
  }
};

export default errorReducer;
