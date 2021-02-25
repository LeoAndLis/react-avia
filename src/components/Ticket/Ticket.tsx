import React from 'react';
import classNames from 'classnames';
import { FormattedTicketType } from '../../lib/types';

import classes from './Ticket.module.scss';

type TicketPropsType = {
  ticket: FormattedTicketType;
};

const Ticket = ({ ticket }: TicketPropsType) => {
  const {
    price,
    carrierImg,
    segments: [
      {
        title: titleThere,
        departure: departureThere,
        stopsTitle: stopsTitleThere,
        stops: stopsStringThere,
        duration: durationFormattedThere,
      },
      {
        title: titleBack,
        departure: departureBack,
        stopsTitle: stopsTitleBack,
        stops: stopsStringBack,
        duration: durationFormattedBack,
      },
    ],
  } = ticket;
  return (
    <article className={classes.ticket}>
      <header className={classNames(classes['ticket-header'], classes.ticket__header)}>
        <span className={classes['ticket-header__price']}>{price} Р</span>
        <img className={classes['ticket-header__img']} src={carrierImg} alt="S7 Airlines" />
      </header>
      <section className={classes['ticket-description']}>
        <div className={classes['ticket-description__column']}>
          <h3 className={classes['ticket-description__title']}>{titleThere}</h3>
          <span className={classes['ticket-description__info']}>{departureThere}</span>
        </div>
        <div className={classes['ticket-description__column']}>
          <h3 className={classes['ticket-description__title']}>В ПУТИ</h3>
          <span className={classes['ticket-description__info']}>{durationFormattedThere}</span>
        </div>
        <div className={classes['ticket-description__column']}>
          <h3 className={classes['ticket-description__title']}>{stopsTitleThere}</h3>
          <span className={classes['ticket-description__info']}>{stopsStringThere}</span>
        </div>
      </section>
      <section className={classes['ticket-description']}>
        <div className={classes['ticket-description__column']}>
          <h3 className={classes['ticket-description__title']}>{titleBack}</h3>
          <span className={classes['ticket-description__info']}>{departureBack}</span>
        </div>
        <div className={classes['ticket-description__column']}>
          <h3 className={classes['ticket-description__title']}>В ПУТИ</h3>
          <span className={classes['ticket-description__info']}>{durationFormattedBack}</span>
        </div>
        <div className={classes['ticket-description__column']}>
          <h3 className={classes['ticket-description__title']}>{stopsTitleBack}</h3>
          <span className={classes['ticket-description__info']}>{stopsStringBack}</span>
        </div>
      </section>
    </article>
  );
};

export default Ticket;
