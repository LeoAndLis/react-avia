import React from 'react';
import { connect } from 'react-redux';
import { setVisibleTicketsCount } from '../../store/actions/actions';
import { ADD_VISIBLE_TICKETS_COUNT } from '../../lib/constants';
import { StateType, TicketType } from '../../lib/types';

import classes from './AddVisibleTickets.module.scss';

type AddVisibleTicketsProps = {
  tickets: TicketType[];
  visibleTicketsCount: number;
  addVisibleTickets: (value: number) => void;
};

const AddVisibleTickets = ({ tickets, visibleTicketsCount, addVisibleTickets }: AddVisibleTicketsProps) => {
  if (tickets.length <= visibleTicketsCount) {
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
  visibleTicketsCount: state.visibleTicketsCount,
});

const mapDispatchToProps = (dispatch: any) => ({
  addVisibleTickets: (value: number) => dispatch(setVisibleTicketsCount(value)),
});

export default connect(mapStateTopProps, mapDispatchToProps)(AddVisibleTickets);
