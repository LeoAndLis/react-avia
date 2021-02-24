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
    for (const id in filters) {
      if (Object.prototype.hasOwnProperty.call(filters, id)) {
        if (filters[id].isChecked) {
          return false;
        }
      }
    }
    return true;
  };

  if (isAllFiltersUnChecked()) {
    return [];
  }

  if (filters[FilterValues.all].isChecked) {
    return tickets;
  }

  return tickets.filter((ticket) => {
    for (const id in filters) {
      if (Object.prototype.hasOwnProperty.call(filters, id)) {
        if (filters[id].isChecked
          && (ticket.segments[0].stops.length === filters[id].value
            || ticket.segments[1].stops.length === filters[id].value)) {
          return true;
        }
      }
    }
    return false;
  });
};

const sortingTickets = (sortId: number) => (ticketOne: TicketData, ticketTwo: TicketData) => {
  if (sortId === SortValues.cheep) {
    if (ticketOne.price > ticketTwo.price) {
      return 1;
    }
    if (ticketOne.price < ticketTwo.price) {
      return -1;
    }
    return 0;
  }

  if (sortId === SortValues.fast) {
    const durationOne = ticketOne.segments[0].duration + ticketOne.segments[1].duration;
    const durationTwo = ticketTwo.segments[0].duration + ticketTwo.segments[1].duration;
    if (durationOne > durationTwo) {
      return 1;
    }
    if (durationOne < durationTwo) {
      return -1;
    }
    return 0;
  }

  return 0;
};

const formatTickets = (tickets: TicketData[]) => tickets.map((ticket) => {
  const { price, carrier } = ticket;
  const {
    origin: originFrom,
    destination: destinationFrom,
    date: dateFrom,
    stops: stopsFrom,
    duration: durationFrom,
  } = ticket.segments[0];
  const {
    origin: originTo,
    destination: destinationTo,
    date: dateTo,
    stops: stopsTo,
    duration: durationTo,
  } = ticket.segments[1];

  const id = `${price}${carrier}${dateFrom}${dateTo}${durationFrom}${durationTo}`;
  const carrierImg = `//pics.avs.io/99/36/${carrier}.png`;
  const titleFrom = `${originFrom} - ${destinationFrom}`;
  const stopsStringFrom = stopsFrom.join(',');
  const durationFormattedFrom = `${Math.floor(durationFrom / 60)}:${durationFrom % 60}`;

  const titleTo = `${originTo} - ${destinationTo}`;
  const stopsStringTo = stopsTo.join(',');
  const durationFormattedTo = `${Math.floor(durationTo / 60)}:${durationTo % 60}`;

  const segmentFrom = { titleFrom, dateFrom, stopsFrom, stopsStringFrom, durationFormattedFrom };

  const segmentTo = { titleTo, dateTo, stopsTo, stopsStringTo, durationFormattedTo };

  return { id, price, carrier, carrierImg, segments: [segmentFrom, segmentTo] };
});

const TicketsListContainer = ({ tickets, filters, sortId, isLoaded, loadingError, getTickets }: TicketsListContainerType) => {

  useEffect(() => {
    getTickets();
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  const visibleTicketsNumber = 5;

  console.log(isLoaded, loadingError);

  const filteredTickets = filteringTickets(tickets, filters);

  const resultTickets = filteredTickets.sort(sortingTickets(sortId)).slice(0, visibleTicketsNumber);

  console.log('result tickets', resultTickets);

  return (
    <>
      <TicketsList ticketsList={formatTickets(resultTickets)} />
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
