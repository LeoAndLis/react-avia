import React from 'react';
import classNames from 'classnames';
import companyLogo from '../../images/s7_airlines.svg';
import classes from './Flight.module.scss';

const Flight = () => (
  <article className={classes.flight}>
    <header className={classNames(classes['flight-header'], classes.flight__header)}>
      <span className={classes['flight-header__price']}>13 400 Р</span>
      <img className={classes['flight-header__img']} src={companyLogo} alt="S7 Airlines" />
    </header>
    <section className={classes['flight-description']}>
      <div className={classes['flight-description__column']}>
        <h3 className={classes['flight-description__title']}>MOW - HKT</h3>
        <span className={classes['flight-description__info']}>10:45 - 08:00</span>
      </div>
      <div className={classes['flight-description__column']}>
        <h3 className={classes['flight-description__title']}>В ПУТИ</h3>
        <span className={classes['flight-description__info']}>21ч 15м</span>
      </div>
      <div className={classes['flight-description__column']}>
        <h3 className={classes['flight-description__title']}>2 ПЕРЕСАДКИ</h3>
        <span className={classes['flight-description__info']}>HGK, JNB</span>
      </div>
    </section>
    <section className={classes['flight-description']}>
      <div className={classes['flight-description__column']}>
        <h3 className={classes['flight-description__title']}>MOW - HKT</h3>
        <span className={classes['flight-description__info']}>11:20 - 00:50</span>
      </div>
      <div className={classes['flight-description__column']}>
        <h3 className={classes['flight-description__title']}>В ПУТИ</h3>
        <span className={classes['flight-description__info']}>13ч 30м</span>
      </div>
      <div className={classes['flight-description__column']}>
        <h3 className={classes['flight-description__title']}>2 ПЕРЕСАДКИ</h3>
        <span className={classes['flight-description__info']}>HGK</span>
      </div>
    </section>
  </article>
);

export default Flight;
