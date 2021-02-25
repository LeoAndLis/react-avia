export type FilterDataType = {
  label: string;
  isChecked: boolean;
  value: number;
};

export type FilterType = Record<string, FilterDataType>;

type TicketSegmentType = {
  date: string;
  destination: string;
  duration: number;
  origin: string;
  stops: string[];
};

export type TicketType = {
  carrier: string;
  price: number;
  segments: TicketSegmentType[];
};

type FormattedTicketSegmentType = {
  title: string;
  departure: string;
  stopsTitle: string;
  stops: string;
  duration: string;
};

export type FormattedTicketType = {
  id: string;
  price: string;
  carrierImg: string;
  segments: FormattedTicketSegmentType[];
};

export type SortActionType = {
  type: string;
  payload: number;
};

export type StateType = {
  filters: FilterType;
  isLoaded: boolean;
  loadingError: boolean;
  sortId: number;
  tickets: TicketType[];
};
