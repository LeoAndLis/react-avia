import { combineReducers } from 'redux';
import sortReducer from './sortReducer';
import filterReducer from './filterReducer';

const reducer = combineReducers({
  sortId: sortReducer,
  filters: filterReducer,
});

export default reducer;