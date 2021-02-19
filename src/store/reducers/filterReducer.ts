import { SET_FILTER } from '../types/types';
import { FILTERS_MAP } from '../../state/state';

type FilterActionType = {
  type: string;
  payload: number;
};

type FilterDataType = {
  label: string;
  isChecked: boolean;
};

const filterItems: Record<number, FilterDataType> = {
  [FILTERS_MAP.all]: { label: 'Все', isChecked: true },
  [FILTERS_MAP['0_transfers']]: { label: 'Без пересадок', isChecked: true },
  [FILTERS_MAP['1_transfers']]: { label: '1 пересадка', isChecked: true },
  [FILTERS_MAP['2_transfers']]: { label: '2 пересадки', isChecked: true },
  [FILTERS_MAP['3_transfers']]: { label: '3 пересадки', isChecked: true },
};

const isAllFiltersChecked = (filters: Record<number, FilterDataType>): boolean => {
  for ( const id in filters ) {
    if (Object.prototype.hasOwnProperty.call(filters, id) && +id !== FILTERS_MAP.all) {
      if ( !filters[id].isChecked ) {
        return false;
      }
    }
  }
  return true;
};

const filterReducer = (state: Record<number, FilterDataType> = filterItems, action: FilterActionType) => {
  const { type, payload: filterId } = action;
  const filters = { ...state };
  switch (type) {
    case SET_FILTER:
      filters[filterId].isChecked = !filters[filterId].isChecked;

      switch (+filterId) {
        case FILTERS_MAP.all:
          for (const id in filters) {
            if (Object.prototype.hasOwnProperty.call(filters, id) && +id !== FILTERS_MAP.all) {
              filters[id].isChecked = filters[FILTERS_MAP.all].isChecked;
            }
          }
          return filters;

        default:
          console.log('filters NOT all', filterId);
          if (!filters[filterId].isChecked) {
            filters[FILTERS_MAP.all].isChecked = false;
          } else if (isAllFiltersChecked(filters)) {
            filters[FILTERS_MAP.all].isChecked = true;
          }
          return filters;
      }

    default:
      return filters;
  }
};

export default filterReducer;
