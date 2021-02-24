import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import sortReducer from './sortReducer';
import ticketsReducer from './ticketsReducer';

const reducer = combineReducers({
  filters: filterReducer,
  isLoaded: loadingReducer,
  loadingError: errorReducer,
  sortId: sortReducer,
  tickets: ticketsReducer,
});

export default reducer;