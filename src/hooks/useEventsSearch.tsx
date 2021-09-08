import { useEffect, useState } from 'react';
import { Event } from '../types/types';

/**
 * Custom Hook used for event search.
 * @param keyWord used for searching via the event name
 * @param events current user's events
 * @returns Events that match the search criteria
 */
export const useEventsSearch = (keyWord: string, events: Event[]) => {
  const [eventsFiltered, setEventsFiltered] = useState<Event[]>(events);

  /**
   * Filters the events that match the search criteria everytime the keyword changes.
   */
  const searchEvents = () => {
    if (keyWord.length === 0 || events.length === 0) {
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
  }, [keyWord, events]);

  return {
    eventsFiltered,
  };
};
