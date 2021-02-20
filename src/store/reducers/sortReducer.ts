import { SET_SORT } from '../types/types';
import { SortValues } from '../../state/state';

type SortActionType = {
  type: string;
  payload: number;
};

const sortReducer = (state: number = SortValues.fast, action: SortActionType): number => {
  switch (action.type) {
    case SET_SORT:
      return action.payload;
    default:
      return state;
  }
};

export default sortReducer;
