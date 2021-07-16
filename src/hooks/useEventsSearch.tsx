import { useEffect, useState } from 'react';
import { Event } from '../types/types';

export const useEventsSearch = (keyWord: string, events: Event[]) => {
  const [eventsFiltered, setEventsFiltered] = useState<Event[]>(events);

  const searchEvents = () => {
    if (keyWord.length === 0) {
      setEventsFiltered(events);
      return;
    } else {
      setEventsFiltered(
        events.filter((event: Event) => {
          return event.name.includes(keyWord);
        })
      );
    }
  };
  useEffect(() => {
    searchEvents();
  }, [keyWord]);
  return {
    eventsFiltered,
  };
};
