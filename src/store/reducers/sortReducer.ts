import { SET_SORT } from '../types/types';
import { SortValues } from '../../lib/constants';

type SortActionType = {
  type: string;
  payload: number;
};

const sortReducer = (state: number = SortValues.cheep, { type, payload }: SortActionType): number => {
  switch (type) {
    case SET_SORT:
      return payload;
    default:
      return state;
  }
};

export default sortReducer;
