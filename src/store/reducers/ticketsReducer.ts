import { ADD_TICKETS } from '../types/types';

type TicketSegmentType = {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
};

export type TicketType = {
  price: number;
  carrier: string;
  segments: TicketSegmentType[];
};

const ticketsReducer = (state: TicketType[] = [], action: any) => {
  const { type, payload: tickets } = action;
  switch (type) {
    case ADD_TICKETS:
      return { ...state, ...tickets };
    default:
      return state;
  }
};

export default ticketsReducer;
