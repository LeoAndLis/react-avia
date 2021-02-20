import { SET_FILTER } from '../types/types';
import { FilterValues } from '../../state/state';

type FilterActionType = {
  type: string;
  payload: string;
};

type FilterDataType = {
  label: string;
  isChecked: boolean;
};

export type FilterType = Record<string, FilterDataType>;

const filterItems: FilterType = {
  [FilterValues.all]: { label: 'Все', isChecked: true },
  [FilterValues['0_transfers']]: { label: 'Без пересадок', isChecked: true },
  [FilterValues['1_transfers']]: { label: '1 пересадка', isChecked: true },
  [FilterValues['2_transfers']]: { label: '2 пересадки', isChecked: true },
  [FilterValues['3_transfers']]: { label: '3 пересадки', isChecked: true },
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

const filterReducer = (state: FilterType = filterItems, action: FilterActionType) => {
  const { type, payload: filterId } = action;
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
      return filters;
  }
};

export default filterReducer;
