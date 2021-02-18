import React from 'react';
import classes from './TicketsList.module.scss';
import Ticket from '../Ticket/Ticket';

const TicketsList = () => (
  <ul className={classes['tickets-list']}>
    <li className={classes['tickets-list__item']}>
      <Ticket />
    </li>
    <li className={classes['tickets-list__item']}>
      <Ticket />
    </li>
  </ul>
);

export default TicketsList;
