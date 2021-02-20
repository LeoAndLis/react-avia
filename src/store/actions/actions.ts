import { TicketData } from '../../services/TicketsService';
import { ADD_TICKET, SET_FILTER, SET_SORT } from '../types/types';

export const setFilterAction = (payload: string) => ({ type: SET_FILTER, payload });

export const setSortAction = (payload: number) => ({ type: SET_SORT, payload });

export const addFlightAction = (payload: TicketData) => ({ type: ADD_TICKET, payload });