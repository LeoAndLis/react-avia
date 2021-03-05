import { createSelector } from 'reselect';
import { filteringTickets, sortingTickets } from '../../lib/functions';
import { StateType,  TicketType, FilterType } from '../../lib/types';

const getCurrentFilters = (state: StateType) => state.filters;
const getCurrentTickets = (state: StateType) => state.tickets;
const getCurrentSortId = (state: StateType) => state.sortId;

export const getSortedTickets = createSelector(
  [getCurrentTickets, getCurrentSortId],
  (tickets: TicketType[], sortId: number) => tickets.sort(sortingTickets(sortId)));
  
export const getFilteredTickets = createSelector(
  [getSortedTickets, getCurrentFilters],
  (tickets: TicketType[], filters: FilterType) => filteringTickets(tickets, filters));
