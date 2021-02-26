import React from 'react';
import { connect } from 'react-redux';
import { setVisibleTicketsCount } from '../../store/actions/actions';
import { ADD_VISIBLE_TICKETS_COUNT } from '../../lib/constants';
import { StateType, TicketType, FilterType } from '../../lib/types';
import { isAllFiltersUnchecked } from '../../lib/functions';

import classes from './AddVisibleTickets.module.scss';

type AddVisibleTicketsProps = {
  filters: FilterType;
  tickets: TicketType[];
  visibleTicketsCount: number;
  addVisibleTickets: (value: number) => void;
};

const AddVisibleTickets = ({ tickets, visibleTicketsCount, filters, addVisibleTickets }: AddVisibleTicketsProps) => {
  console.log(isAllFiltersUnchecked(filters));
  if (tickets.length <= visibleTicketsCount || isAllFiltersUnchecked(filters)) {
    return null;
  }
  
  return (
    <button className={classes['show-more']} type="button" onClick={() => addVisibleTickets(ADD_VISIBLE_TICKETS_COUNT)}>
      Показать ещё {ADD_VISIBLE_TICKETS_COUNT} билетов!
    </button>
  );
};

const mapStateTopProps = (state: StateType) => ({
  tickets: state.tickets,
  filters: state.filters,
  visibleTicketsCount: state.visibleTicketsCount,
});

const mapDispatchToProps = (dispatch: any) => ({
  addVisibleTickets: (value: number) => dispatch(setVisibleTicketsCount(value)),
});

export default connect(mapStateTopProps, mapDispatchToProps)(AddVisibleTickets);
