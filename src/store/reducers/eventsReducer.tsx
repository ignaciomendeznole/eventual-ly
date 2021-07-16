import { Event, EventsAction, EventState } from '../../types/types';

const initialState: EventState = {
  isLoading: false,
  error: false,
  events: [],
  wishList: [],
};

export const eventsReducer = (
  state: EventState = initialState,
  action: EventsAction
): EventState => {
  switch (action.type) {
    case 'ADD_EVENT':
      return {
        ...state,
        isLoading: true,
      };
    case 'ADD_EVENT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        events: [...state.events, action.payload],
      };
    case 'ADD_EVENT_ERROR':
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case 'GET_EVENTS':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_EVENTS_SUCCESS':
      return {
        ...state,
        events: action.payload,
        isLoading: false,
      };
    case 'GET_EVENTS_ERROR':
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case 'ADD_TO_WISHLIST':
      return {
        ...state,
        wishList: [...state.wishList, action.payload],
      };
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishList: state.wishList.filter(
          (event: Event) => event.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};