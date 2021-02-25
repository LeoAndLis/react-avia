import { format, addMinutes } from 'date-fns';
import { FilterValues, SortValues, IMG_PATH } from './constants';
import { FilterType, FormattedTicketType, TicketType } from './types';

export const filteringTickets = (tickets: TicketType[], filters: FilterType) => {
  const isAllFiltersUnChecked = (): boolean => {
    for (const id in filters) {
      if (Object.prototype.hasOwnProperty.call(filters, id)) {
        if (filters[id].isChecked) {
          return false;
        }
      }
    }
    return true;
  };

  if (isAllFiltersUnChecked()) {
    return [];
  }

  if (filters[FilterValues.all].isChecked) {
    return tickets;
  }

  return tickets.filter((ticket) => {
    for (const id in filters) {
      if (Object.prototype.hasOwnProperty.call(filters, id)) {
        if (
          filters[id].isChecked &&
          (ticket.segments[0].stops.length === filters[id].value ||
            ticket.segments[1].stops.length === filters[id].value)
        ) {
          return true;
        }
      }
    }
    return false;
  });
};

export const sortingTickets = (sortId: number) => (ticketOne: TicketType, ticketTwo: TicketType) => {
  if (sortId === SortValues.cheep) {
    if (ticketOne.price > ticketTwo.price) {
      return 1;
    }
    if (ticketOne.price < ticketTwo.price) {
      return -1;
    }
    return 0;
  }

  if (sortId === SortValues.fast) {
    const durationOne = ticketOne.segments[0].duration + ticketOne.segments[1].duration;
    const durationTwo = ticketTwo.segments[0].duration + ticketTwo.segments[1].duration;
    if (durationOne > durationTwo) {
      return 1;
    }
    if (durationOne < durationTwo) {
      return -1;
    }
    return 0;
  }

  return 0;
};

const formatStopsTitle = (stops: string[]) => {
  const lastNum = stops.length % 10;
  if (lastNum === 0) {
    return 'НЕТ ПЕРЕСАДОК';
  }
  if (lastNum === 1) {
    return '1 ПЕРЕСАДКА';
  }
  if (lastNum > 1 && lastNum < 5) {
    return `${lastNum} ПЕРЕСАДКИ`;
  }
  return `${lastNum} ПЕРЕСАДОК`;
};

export const formatTickets = (tickets: TicketType[]): FormattedTicketType[] =>
  tickets.map((ticket) => {
    const { price, carrier, segments: thereAndBackAgain } = ticket;
    const [there, back] = thereAndBackAgain;
    const {
      origin: originThere,
      destination: destinationThere,
      date: dateThere,
      stops: stopsThere,
      duration: durationThere,
    } = there;
    const {
      origin: originBack,
      destination: destinationBack,
      date: dateBack,
      stops: stopsBack,
      duration: durationBack,
    } = back;

    const id = `${price}${carrier}${dateThere}${dateBack}${durationThere}${durationBack}`;
    const carrierImg = IMG_PATH.replace('{IMG_NAME}', carrier);

    const titleThere = `${originThere} - ${destinationThere}`;
    const stopsStringThere = stopsThere.join(', ');
    let helperDate = addMinutes(new Date(dateThere), durationThere);
    const departureThere = `${format(new Date(dateThere), 'HH:mm')} - ${format(new Date(helperDate), 'HH:mm')}`;
    const durationFormattedThere = `${Math.floor(durationThere / 60)}ч ${durationThere % 60}м`;
    const stopsTitleThere = formatStopsTitle(stopsThere);

    const titleBack = `${originBack} - ${destinationBack}`;
    const stopsStringBack = stopsBack.join(', ');
    helperDate = addMinutes(new Date(dateBack), durationBack);
    const departureBack = `${format(new Date(dateBack), 'HH:mm')} - ${format(new Date(helperDate), 'HH:mm')}`;
    const durationFormattedBack = `${Math.floor(durationBack / 60)}ч ${durationBack % 60}м`;
    const stopsTitleBack = formatStopsTitle(stopsBack);

    return {
      id,
      price: price.toLocaleString('ru-RU'),
      carrierImg,
      segments: [
        {
          title: titleThere,
          departure: departureThere,
          stopsTitle: stopsTitleThere,
          stops: stopsStringThere,
          duration: durationFormattedThere,
        },
        {
          title: titleBack,
          departure: departureBack,
          stopsTitle: stopsTitleBack,
          stops: stopsStringBack,
          duration: durationFormattedBack,
        },
      ],
    };
  });
