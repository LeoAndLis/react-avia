export type StateType = {
  sortId: number;
  filters: Record<number, boolean>;
  ticketsList: any;
};

export enum SortValues {
  'cheep' = 0,
  'fast',
}

export enum FilterValues {
  'all' = '0',
  '0_transfers' = '1',
  '1_transfers' = '2',
  '2_transfers' = '3',
  '3_transfers' = '4',
}