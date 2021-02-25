import { ADD_VISIBLE_TICKETS } from '../types/types';
import { ADD_VISIBLE_TICKETS_COUNT } from '../../lib/constants';

type AddVisibleTicketsActionType = {
  type: string;
  payload: number;
};

const addVisibleTicketsReducer = (state: number = ADD_VISIBLE_TICKETS_COUNT, { type, payload }: AddVisibleTicketsActionType): number => {
  const currValue: number = state;
  switch (type) {
    case ADD_VISIBLE_TICKETS:
      return currValue + payload;
    default:
      return state;
  }
};

export default addVisibleTicketsReducer;
