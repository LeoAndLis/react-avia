import React from 'react';
import classNames from 'classnames';
import classes from './SortList.module.scss';

const SortList = () => (
  <section className={classes.sort}>
    <ul className={classes['sort-list']}>
      <li className={classes['sort-list__item']}>
        <button
          className={classNames(classes['sort-list__button'], classes['sort-list__button--active'])}
          type="button"
        >
          Самый дешёвый
        </button>
      </li>
      <li className={classes['sort-list__item']}>
        <button className={classes['sort-list__button']} type="button">
          Самый быстрый
        </button>
      </li>
    </ul>
  </section>
);

export default SortList;
