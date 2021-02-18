import { SET_SORT } from '../types/types';
import { SORT_MAP } from '../../state/state';

const reducer = (state: any = { sortId: SORT_MAP.fast }, action: any) => {
  const { payload } = action;
  switch (action.type) {
    case SET_SORT:
      return payload;
    default:
      return state;
  }
};

export default reducer;