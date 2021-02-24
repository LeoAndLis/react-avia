import { SET_IS_LOADED } from '../types/types';

type LoadingType = {
  type: string;
  payload: boolean;
};

const loadingReducer = (state: boolean = true, action: LoadingType) => {
  const { type, payload } = action;
  switch (type) {
    case SET_IS_LOADED:
      return payload;
    default:
      return state;
  }
};

export default loadingReducer;
