import TicketsService from '../../services/TicketsService';
import {
  ADD_TICKETS,
  ADD_VISIBLE_TICKETS,
  SET_FILTER,
  SET_SORT,
  SET_IS_LOADED,
  SET_IS_LOADING_ERROR } from '../types/types';

export const setVisibleTicketsCount = (payload: number) => ({ type: ADD_VISIBLE_TICKETS, payload });

export const setFilterAction = (payload: string) => ({ type: SET_FILTER, payload });

export const setSortAction = (payload: number) => ({ type: SET_SORT, payload });

export const setIsLoaded = (payload: boolean) => ({ type: SET_IS_LOADED, payload });

export const setIsLoadingError = () => ({ type: SET_IS_LOADING_ERROR });

const ticketsService = new TicketsService();

export const addTicketsAction = () => (dispatch: any) => {
  ticketsService
    .getTickets()
    .then(({ tickets, stop }) => {
      dispatch({ type: ADD_TICKETS, payload: tickets });
      console.log('add tickets action', stop, tickets.length );
      dispatch(setIsLoaded(stop));
    })
    .catch(() => dispatch(setIsLoadingError));
};
