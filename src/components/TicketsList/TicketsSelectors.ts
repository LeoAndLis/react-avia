import { createSelector } from 'reselect';
import { filteringTickets, sortingTickets } from '../../lib/functions';
import { StateType } from '../../lib/types';

const getCurrentFilters = (state: StateType) => state.filters;
const getCurrentTickets = (state: StateType) => state.tickets;
const getCurrentSortId = (state: StateType) => state.sortId;

export const getSortedTickets = createSelector(
  [getCurrentTickets, getCurrentSortId],
  (tickets, sortId) => tickets.sort(sortingTickets(sortId)));
  
export const getFilteredTickets = createSelector(
  [getSortedTickets, getCurrentFilters],
  (tickets, filters) => filteringTickets(tickets, filters));
