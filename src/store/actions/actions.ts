import TicketsService from '../../services/TicketsService';
import {
  ADD_TICKETS,
  SET_FILTER,
  SET_SORT,
  SET_IS_LOADED,
  SET_IS_LOADING_ERROR } from '../types/types';

export const setFilterAction = (payload: string) => ({ type: SET_FILTER, payload });

export const setSortAction = (payload: number) => ({ type: SET_SORT, payload });

export const setIsLoading = (payload: boolean) => ({ type: SET_IS_LOADED, payload });

export const setIsLoadingError = () => ({ type: SET_IS_LOADING_ERROR });

export const addTicketsAction = () => (dispatch: any) => {
  const ticketsService = new TicketsService();
  ticketsService
    .getTickets()
    .then(({ tickets, stop }) => {
      dispatch({ type: ADD_TICKETS, payload: tickets });
      dispatch(setIsLoading(stop));
    })
    .catch(() => dispatch(setIsLoadingError));
};
