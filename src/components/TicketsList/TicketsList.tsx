import React from 'react';
import Ticket from '../Ticket/Ticket';
import { FormattedTicketType } from '../../lib/types';

import classes from './TicketsList.module.scss';

type TicketsListPropsType = {
  ticketsList: FormattedTicketType[];
};

const TicketsList = ({ ticketsList }: TicketsListPropsType) => {
  const tickets = ticketsList.map((ticket: FormattedTicketType) => (
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
