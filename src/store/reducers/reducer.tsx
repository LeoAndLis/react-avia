import { combineReducers } from 'redux';
import addVisibleTicketsReducer from './addVisibleTicketsReducer';
import filterReducer from './filterReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import sortReducer from './sortReducer';
import ticketsReducer from './ticketsReducer';

const reducer = combineReducers({
  visibleTicketsCount: addVisibleTicketsReducer,
  filters: filterReducer,
  isLoaded: loadingReducer,
  loadingError: errorReducer,
  sortId: sortReducer,
  tickets: ticketsReducer,
});

export default reducer;