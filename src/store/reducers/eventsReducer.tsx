import { Event, EventsAction, EventState } from '../../types/types';

const initialState: EventState = {
  isLoading: false,
  error: false,
  events: [],
  wishList: [],
  success: false,
};

export const eventsReducer = (
  state: EventState = initialState,
  action: EventsAction
): EventState => {
  switch (action.type) {
    case 'ADD_EVENT':
      return {
        ...state,
        isLoading: action.payload.isLoading,
        success: action.payload.isLoading,
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
        error: action.payload,
      };
    case 'GET_EVENTS':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'GET_EVENTS_SUCCESS':
      return {
        ...state,
        events: action.payload.events,
        isLoading: action.payload.isLoading,
      };
    case 'GET_EVENTS_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
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
          (event: Event) => event.name !== action.payload.name
        ),
      };
    default:
      return state;
  }
};
