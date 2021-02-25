import { ADD_TICKETS } from '../types/types';
import { TicketType } from '../../lib/types';

type TicketsActionType = {
  type: string;
  payload: TicketType[];
};

const ticketsReducer = (state: TicketType[] = [], action: TicketsActionType): TicketType[] | [] => {
  const { type, payload: tickets } = action;
  switch (type) {
    case ADD_TICKETS:
      return [ ...state, ...tickets ];
    default:
      return state;
  }
};

export default ticketsReducer;
