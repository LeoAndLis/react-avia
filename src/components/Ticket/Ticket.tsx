import React from 'react';
import classNames from 'classnames';
import companyLogo from '../../images/s7_airlines.svg';
import classes from './Ticket.module.scss';

const Ticket = () => (
  <article className={classes.ticket}>
    <header className={classNames(classes['ticket-header'], classes.ticket__header)}>
      <span className={classes['ticket-header__price']}>13 400 Р</span>
      <img className={classes['ticket-header__img']} src={companyLogo} alt="S7 Airlines" />
    </header>
    <section className={classes['ticket-description']}>
      <div className={classes['ticket-description__column']}>
        <h3 className={classes['ticket-description__title']}>MOW - HKT</h3>
        <span className={classes['ticket-description__info']}>10:45 - 08:00</span>
      </div>
      <div className={classes['ticket-description__column']}>
        <h3 className={classes['ticket-description__title']}>В ПУТИ</h3>
        <span className={classes['ticket-description__info']}>21ч 15м</span>
      </div>
      <div className={classes['ticket-description__column']}>
        <h3 className={classes['ticket-description__title']}>2 ПЕРЕСАДКИ</h3>
        <span className={classes['ticket-description__info']}>HGK, JNB</span>
      </div>
    </section>
    <section className={classes['ticket-description']}>
      <div className={classes['ticket-description__column']}>
        <h3 className={classes['ticket-description__title']}>MOW - HKT</h3>
        <span className={classes['ticket-description__info']}>11:20 - 00:50</span>
      </div>
      <div className={classes['ticket-description__column']}>
        <h3 className={classes['ticket-description__title']}>В ПУТИ</h3>
        <span className={classes['ticket-description__info']}>13ч 30м</span>
      </div>
      <div className={classes['ticket-description__column']}>
        <h3 className={classes['ticket-description__title']}>2 ПЕРЕСАДКИ</h3>
        <span className={classes['ticket-description__info']}>HGK</span>
      </div>
    </section>
  </article>
);

export default Ticket;
