import React from 'react';
import { connect } from 'react-redux';
import { setFilterAction } from '../../store/actions/actions';
import { FilterType, StateType } from '../../lib/types';

import classes from './Filters.module.scss';

type FiltersPropsType = {
  filters: FilterType;
  toggleFilter: (value: string) => void;
};

const Filters = ({ filters, toggleFilter }: FiltersPropsType) => {
  const filterItems = [];
  for (const filterId in filters) {
    if (Object.prototype.hasOwnProperty.call(filters, filterId)) {
      filterItems.push(
        <li key={filterId} className={classes['filter-list__item']}>
          <label className={classes['filter-list__label']}>
            <input
              className={classes['filter-list__checkbox']}
              type="checkbox"
              checked={filters[filterId].isChecked}
              onChange={() => toggleFilter(filterId)}
            />
            <span className={classes['filter-list__checkmark']} />
            <span>{filters[filterId].label}</span>
          </label>
        </li>);
    }
  }
  return (
    <section className={classes.filter}>
      <h2 className={classes.filter__header}>Количество пересадок</h2>
      <ul className={classes['filter-list']}>
        { filterItems }
      </ul>
    </section>
  );
};

const mapStateToProps = (state: StateType) => ({ filters: state.filters });

const mapDispatchToProps = (dispatch: any) => ({ toggleFilter: (value: string) => dispatch(setFilterAction(value)) });

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
