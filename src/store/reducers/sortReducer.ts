import { SET_SORT } from '../types/types';
import { SORT_MAP } from '../../state/state';

type SortActionType = {
  type: string;
  payload: number;
};

const sortReducer = (state: number = SORT_MAP.fast, action: SortActionType): number => {
  switch (action.type) {
    case SET_SORT:
      return action.payload;
    default:
      return state;
  }
};

export default sortReducer;
