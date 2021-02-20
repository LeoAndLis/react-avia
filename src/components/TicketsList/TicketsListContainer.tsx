import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TicketsList from './TicketsList';
import { TicketType } from '../../store/reducers/ticketsReducer';
import TicketsService from '../../services/TicketsService';

type TicketsLitsPropType = {
  tickets: TicketType[];
};

const ticketsService = new TicketsService();

const TicketsListContainer = ({ tickets }: TicketsLitsPropType) => {
  
  useEffect(() => { ticketsService.getTickets().then((result) => console.log(result)); }, []);
  
  console.log('tickets list container', tickets);
  
  return (
    <>
      <TicketsList />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  tickets: state.tickets,
  ticketsFetching: state.ticketsFetching,
  ticketsFetchingError: state.ticketsFetchingError,
});

export default connect(mapStateToProps)(TicketsListContainer);
