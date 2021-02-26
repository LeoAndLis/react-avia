import { SET_IS_LOADED } from '../types/types';

type LoadingActionType = {
  type: string;
  payload: boolean;
};

const loadingReducer = (state: boolean = false, { type, payload }: LoadingActionType) => {
  switch (type) {
    case SET_IS_LOADED:
      return payload;
    default:
      return state;
  }
};

export default loadingReducer;
