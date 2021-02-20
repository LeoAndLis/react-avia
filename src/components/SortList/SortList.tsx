import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import classes from './SortList.module.scss';
import { SortValues } from '../../state/state';
import { setSortAction } from '../../store/actions/actions';

const SortList = (props: any) => {
  const { sortId, setSort } = props;
  console.log('sort list', sortId);
  return (
    <section className={classes.sort}>
      <ul className={classes['sort-list']}>
        <li className={classes['sort-list__item']}>
          <button
            onClick={() => setSort(0)}
            className={classNames(
              classes['sort-list__button'],
              sortId === SortValues.cheep ? classes['sort-list__button--active'] : '',
            )}
            type="button"
          >
            Самый дешёвый
          </button>
        </li>
        <li className={classes['sort-list__item']}>
          <button
          onClick={() => setSort(1)}
            className={classNames(
              classes['sort-list__button'],
              sortId === SortValues.fast ? classes['sort-list__button--active'] : '',
            )}
            type="button"
          >
            Самый быстрый
          </button>
        </li>
      </ul>
    </section>
  );
};

const mapStateToProps = (state: any) => ({ sortId: state.sortId });

const mapDispatchToProps = (dispatch: any) => ({ setSort: (value: number) => dispatch(setSortAction(value)) });

export default connect(mapStateToProps, mapDispatchToProps)(SortList);
