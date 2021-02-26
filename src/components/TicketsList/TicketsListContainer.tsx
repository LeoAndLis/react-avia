import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert, Progress } from 'antd';
import TicketsList from './TicketsList';
import { addTicketsAction } from '../../store/actions/actions';

import { StateType } from '../../lib/types';
import { filteringTickets, formatTickets, sortingTickets } from '../../lib/functions';

import 'antd/dist/antd.css';
import classes from './TicketsList.module.scss';

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
    if ( !isLoaded ) {
      getTickets();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ tickets, loadingError ]);

  const errorMessage = loadingError.happened ? 
    <Alert closable className={classes['alert-message']} type="error" message="Ошибка" description={loadingError.errorMsg} />
    : null;

  const progressBar = !isLoaded ?
    <Progress  percent={Math.floor(tickets.length / 100)} status="active" showInfo={false} />
    : null;

  const resultTickets =
    filteringTickets(tickets, filters)
      .sort(sortingTickets(sortId))
      .slice(0, visibleTicketsCount);

  if (resultTickets.length === 0) {
    return <Alert className={classes['alert-message']} type="info" message="Информация" description="Рейсов, подходящих под заданные фильтры, не найдено" />;
  }

  return (
    <>
      {progressBar}
      {errorMessage}
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
