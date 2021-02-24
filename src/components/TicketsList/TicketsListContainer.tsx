import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TicketsList from './TicketsList';
import { addTicketsAction } from '../../store/actions/actions';
import { FilterType } from '../../store/reducers/filterReducer';
import { TicketData } from '../../services/TicketsService';

import { FilterValues, SortValues } from '../../state/state';

type TicketsListContainerType = {
  sortId: number;
  filters: FilterType;
  tickets: TicketData[];
  isLoaded: boolean;
  loadingError: boolean;
  getTickets: () => void;
};

const filteringTickets = (tickets: TicketData[], filters: FilterType) => {
  const isAllFiltersUnChecked = (): boolean => {
    for ( const id in filters ) {
      if (Object.prototype.hasOwnProperty.call(filters, id)) {
        if ( filters[id].isChecked ) {
          return false;
        }
      }
    }
    return true;
  };

  if ( isAllFiltersUnChecked() ) {
    return [];
  }

  if ( filters[FilterValues.all].isChecked ) {
    return tickets;
  }

  return tickets.filter((ticket) => {
    for ( const id in filters ) {
      if (Object.prototype.hasOwnProperty.call(filters, id)) {
        if ( filters[id].isChecked
          && (ticket.segments[0].stops.length === filters[id].value
            || ticket.segments[1].stops.length === filters[id].value )) {
          return true;
        }
      }
    }
    return false;
  });
};

const sortingTickets = (sortId: number) => (ticketOne: TicketData, ticketTwo: TicketData) => {
  if (sortId === SortValues.cheep) {
    if ( ticketOne.price > ticketTwo.price ) {return 1;}
    if ( ticketOne.price < ticketTwo.price ) {return -1;}
    return 0;
  }

  if (sortId === SortValues.fast) {
    const durationOne = ticketOne.segments[0].duration + ticketOne.segments[1].duration;
    const durationTwo = ticketTwo.segments[0].duration + ticketTwo.segments[1].duration;
    if ( durationOne > durationTwo ) {return 1;}
    if ( durationOne < durationTwo ) {return -1;}
    return 0;
  }
  
  return 0;
};

const TicketsListContainer = ({ tickets, filters, sortId, isLoaded, loadingError, getTickets }: TicketsListContainerType) => {
  
  useEffect(() => {
    getTickets();
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  
  const visibleTicketsNumber = 5;

  console.log(tickets, filters, sortId, isLoaded, loadingError);
  
  const filteredTickets = filteringTickets(tickets, filters);
  console.log(filteredTickets);
  const resultTickets = filteredTickets.sort(sortingTickets(sortId)).slice(visibleTicketsNumber);

  console.log('result tickets', resultTickets);

  return (
    <>
      <TicketsList />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  filters: state.filters,
  isLoaded: state.isLoaded,
  loadingError: state.loadingError,
  sortId: state.sortId,
  tickets: state.tickets,
});

const mapDispatchToProps = (dispatch: any) => ({ getTickets: () => dispatch(addTicketsAction()) });

export default connect(mapStateToProps, mapDispatchToProps)(TicketsListContainer);
