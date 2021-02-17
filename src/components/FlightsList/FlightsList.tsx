import React from 'react';
import classes from './FlightsList.module.scss';
import Flight from '../Flight/Flight';

const FlightsList = () => (
  <ul className={classes['flights-list']}>
    <li className={classes['flights-list__item']}>
      <Flight />
    </li>
    <li className={classes['flights-list__item']}>
      <Flight />
    </li>
  </ul>
);

export default FlightsList;
