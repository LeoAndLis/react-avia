import { combineReducers } from 'redux';
import sortReducer from './sortReducer';
import filterReducer from './filterReducer';
import ticketsReducer from './ticketsReducer';

const reducer = combineReducers({
  sortId: sortReducer,
  filters: filterReducer,
  tickets: ticketsReducer,
});

export default reducer;