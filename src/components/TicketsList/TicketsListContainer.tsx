import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert, Progress } from 'antd';
import TicketsList from './TicketsList';
import { addTicketsAction } from '../../store/actions/actions';
import { getFilteredTickets } from './TicketsSelectors';

import { StateType } from '../../lib/types';
import { formatTickets } from '../../lib/functions';

import 'antd/dist/antd.css';
import classes from './TicketsList.module.scss';

interface TicketsListContainerType extends StateType {
  addTickets: () => void;
}

const TicketsListContainer = ({ tickets, isLoaded, loadingError, visibleTicketsCount, addTickets }: TicketsListContainerType) => {

  useEffect(() => {
    addTickets();
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  useEffect(() => {
    if ( !isLoaded ) {
      addTickets();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ tickets, loadingError ]);

  const errorMessage = loadingError.happened && !isLoaded ? 
    <Alert closable className={classes['alert-message']} type="error" message="Ошибка" description={loadingError.errorMsg} />
    : null;

  const progressBar = !isLoaded ?
    <Progress  percent={Math.floor(tickets.length / 100)} status="active" showInfo={false} />
    : null;

  const resultTickets = tickets.slice(0, visibleTicketsCount);

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
  tickets: getFilteredTickets(state),
  visibleTicketsCount: state.visibleTicketsCount,
});

const mapDispatchToProps = (dispatch: any) => ({ addTickets: () => dispatch(addTicketsAction()) });

export default connect(mapStateToProps, mapDispatchToProps)(TicketsListContainer);
