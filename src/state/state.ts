export type StateType = {
  sortId: number;
  filters: Record<string, boolean>;
  ticketsList: any;
};

export const SORT_MAP = {
  'cheep': 0,
  'fast': 1,
};

export const FILTERS_MAP = {
  'all': 0,
  '0_transfers': 1,
  '1_transfers': 2,
  '2_transfers': 3,
  '3_transfers': 4,
};