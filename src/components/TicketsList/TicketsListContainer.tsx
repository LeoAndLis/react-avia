import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'antd';
import TicketsList from './TicketsList';
import { addTicketsAction } from '../../store/actions/actions';

import { StateType } from '../../lib/types';
import { filteringTickets, formatTickets, sortingTickets } from '../../lib/functions';

interface TicketsListContainerType extends StateType {
  getTickets: () => void;
}

const TicketsListContainer = ({ tickets, filters, sortId, isLoaded, loadingError, visibleTicketsCount, getTickets }: TicketsListContainerType) => {

  useEffect(() => {
    getTickets();
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  useEffect(() => {
    console.log('use effect', isLoaded);
    if ( !isLoaded ) {
      getTickets();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ tickets ]);

  console.log(isLoaded, loadingError);

  const resultTickets =
    filteringTickets(tickets, filters)
      .sort(sortingTickets(sortId))
      .slice(0, visibleTicketsCount);

  if (resultTickets.length === 0) {
    return <Alert type="info" message="Рейсов, подходящих под заданные фильтры, не найдено" />;
  }

  return (
    <>
      <TicketsList ticketsList={formatTickets(resultTickets)} />
    </>
  );
};

const mapStateToProps = (state: StateType) => ({
  filters: state.filters,
  isLoaded: state.isLoaded,
  loadingError: state.loadingError,
  sortId: state.sortId,
  tickets: state.tickets,
  visibleTicketsCount: state.visibleTicketsCount,
});

const mapDispatchToProps = (dispatch: any) => ({ getTickets: () => dispatch(addTicketsAction()) });

export default connect(mapStateToProps, mapDispatchToProps)(TicketsListContainer);
