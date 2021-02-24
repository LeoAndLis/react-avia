import React from 'react';
import classes from './TicketsList.module.scss';
import Ticket from '../Ticket/Ticket';

const TicketsList = (props: any) => {

  const { ticketsList } = props;
  const tickets = ticketsList.map((ticket: any) => (
    <li key={ticket.id} className={classes['tickets-list__item']}>
      <Ticket ticket={ticket}/>
    </li>));

  return (
    <ul className={classes['tickets-list']}>
      {tickets}
    </ul>
  );
};

export default TicketsList;
