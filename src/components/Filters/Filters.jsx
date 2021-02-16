import React from 'react';
import classes from './Filters.module.scss';

const Filters = () => (
  <section className={classes.filter}>
    <h2 className={classes.filter__header}>Количество пересадок</h2>
    <ul className={classes['filter-list']}>
      <li className={classes['filter-list__item']}>
        <label className={classes['filter-list__label']}>
          <input className={classes['filter-list__checkbox']} type="checkbox" />
          <span className={classes['filter-list__checkmark']} />
          <span>Все</span>
        </label>
      </li>
      <li className={classes['filter-list__item']}>
        <label className={classes['filter-list__label']}>
          <input className={classes['filter-list__checkbox']} type="checkbox" />
          <span className={classes['filter-list__checkmark']} />
          <span>Без пересадок</span>
        </label>
      </li>
      <li className={classes['filter-list__item']}>
        <label className={classes['filter-list__label']}>
          <input className={classes['filter-list__checkbox']} type="checkbox" />
          <span className={classes['filter-list__checkmark']} />
          <span>1 пересадка</span>
        </label>
      </li>
      <li className={classes['filter-list__item']}>
        <label className={classes['filter-list__label']}>
          <input className={classes['filter-list__checkbox']} type="checkbox" />
          <span className={classes['filter-list__checkmark']} />
          <span>2 пересадки</span>
        </label>
      </li>
      <li className={classes['filter-list__item']}>
        <label className={classes['filter-list__label']}>
          <input className={classes['filter-list__checkbox']} type="checkbox" />
          <span className={classes['filter-list__checkmark']} />
          <span>3 пересадки</span>
        </label>
      </li>
    </ul>
  </section>
);

export default Filters;
