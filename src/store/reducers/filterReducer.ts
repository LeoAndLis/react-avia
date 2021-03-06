import { SET_FILTER } from '../types/types';
import { FilterValues } from '../../lib/constants';
import { FilterType } from '../../lib/types';

type FilterActionType = {
  type: string;
  payload: string;
};

const filterDefaultItems: FilterType = {
  [FilterValues.all]: { label: 'Все', isChecked: true, value: -1 },
  [FilterValues['0_transfers']]: { label: 'Без пересадок', isChecked: true, value: 0 },
  [FilterValues['1_transfers']]: { label: '1 пересадка', isChecked: true, value: 1 },
  [FilterValues['2_transfers']]: { label: '2 пересадки', isChecked: true, value: 2 },
  [FilterValues['3_transfers']]: { label: '3 пересадки', isChecked: true, value: 3 },
};

const isAllFiltersChecked = (filters: FilterType): boolean => {
  for ( const id in filters ) {
    if (Object.prototype.hasOwnProperty.call(filters, id) && id !== FilterValues.all) {
      if ( !filters[id].isChecked ) {
        return false;
      }
    }
  }
  return true;
};

const filterReducer = (state: FilterType = filterDefaultItems, { type, payload: filterId }: FilterActionType): FilterType => {
  const filters = { ...state };
  switch (type) {
    case SET_FILTER:
      filters[filterId].isChecked = !filters[filterId].isChecked;

      switch (filterId) {
        case FilterValues.all:
          for (const id in filters) {
            if (Object.prototype.hasOwnProperty.call(filters, id) && id !== FilterValues.all) {
              filters[id].isChecked = filters[FilterValues.all].isChecked;
            }
          }
          return filters;

        default:
          if (!filters[filterId].isChecked) {
            filters[FilterValues.all].isChecked = false;
          } else if (isAllFiltersChecked(filters)) {
            filters[FilterValues.all].isChecked = true;
          }
          return filters;
      }

    default:
      return state;
  }
};

export default filterReducer;
