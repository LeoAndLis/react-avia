import { createSelector } from 'reselect';
import { filteringTickets, sortingTickets } from '../../lib/functions';
import { StateType,  TicketType, FilterType } from '../../lib/types';

const getCurrentFilters = (state: StateType) => state.filters;
const getCurrentTickets = (state: StateType) => state.tickets;
const getCurrentSortId = (state: StateType) => state.sortId;

export const getFilteredTickets = createSelector(
  [getCurrentTickets, getCurrentFilters],
  (tickets: TicketType[], filters: FilterType) => { console.log('filter'); return filteringTickets(tickets, filters);});

export const getSortedTickets = createSelector(
  [getFilteredTickets, getCurrentSortId],
  (tickets: TicketType[], sortId: number) => { console.log('sort', tickets.length); return tickets.sort(sortingTickets(sortId));});
