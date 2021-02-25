import { SET_SORT } from '../types/types';
import { SortValues } from '../../lib/constants';

type SortActionType = {
  type: string;
  payload: number;
};

const sortReducer = (state: number = SortValues.cheep, action: SortActionType): number => {
  switch (action.type) {
    case SET_SORT:
      return action.payload;
    default:
      return state;
  }
};

export default sortReducer;
