import React from 'react';
import classNames from 'classnames';
import classes from './Ticket.module.scss';

const Ticket = (props: any) => {
  const { ticket } = props;
  const {
    price,
    carrierImg,
    segments: [
      {
        titleFrom,
        dateFrom,
        stopsFrom,
        stopsStringFrom,
        durationFormattedFrom,
      },
      {
        titleTo,
        dateTo,
        stopsTo,
        stopsStringTo,
        durationFormattedTo,
      },
    ] } = ticket;
  return (
    <article className={classes.ticket}>
      <header className={classNames(classes['ticket-header'], classes.ticket__header)}>
        <span className={classes['ticket-header__price']}>{price} Р</span>
        <img className={classes['ticket-header__img']} src={carrierImg} alt="S7 Airlines" />
      </header>
      <section className={classes['ticket-description']}>
        <div className={classes['ticket-description__column']}>
          <h3 className={classes['ticket-description__title']}>{titleFrom}</h3>
          <span className={classes['ticket-description__info']}>{dateFrom}</span>
        </div>
        <div className={classes['ticket-description__column']}>
          <h3 className={classes['ticket-description__title']}>В ПУТИ</h3>
          <span className={classes['ticket-description__info']}>{durationFormattedFrom}</span>
        </div>
        <div className={classes['ticket-description__column']}>
          <h3 className={classes['ticket-description__title']}>{stopsFrom.length} ПЕРЕСАДКИ</h3>
          <span className={classes['ticket-description__info']}>{stopsStringFrom}</span>
        </div>
      </section>
      <section className={classes['ticket-description']}>
        <div className={classes['ticket-description__column']}>
          <h3 className={classes['ticket-description__title']}>{titleTo}</h3>
          <span className={classes['ticket-description__info']}>{dateTo}</span>
        </div>
        <div className={classes['ticket-description__column']}>
          <h3 className={classes['ticket-description__title']}>В ПУТИ</h3>
          <span className={classes['ticket-description__info']}>{durationFormattedTo}</span>
        </div>
        <div className={classes['ticket-description__column']}>
          <h3 className={classes['ticket-description__title']}>{stopsTo.length} ПЕРЕСАДКИ</h3>
          <span className={classes['ticket-description__info']}>{stopsStringTo}</span>
        </div>
      </section>
    </article>
  );
};

export default Ticket;
