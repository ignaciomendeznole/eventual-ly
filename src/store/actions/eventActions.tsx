import { Dispatch } from 'react';
import {
  Event,
  EventsAction,
  EventsOwnerShipResponse,
  NewEventResponse,
  UiActions,
} from '../../types/types';
import { AppState } from '../reducers';
import axiosClient from '../../../config/axiosClient';

/**
 * Loads the events the user has created.
 * @returns Redux Action used for fetching current user's events.
 */
export const fetchMyEvents = () => {
  return async (dispatch: Dispatch<EventsAction>, getState: () => AppState) => {
    dispatch({
      type: 'GET_EVENTS',
      payload: true,
    });
    const { uid } = getState().authReducer;
    try {
      const response = await axiosClient.post<EventsOwnerShipResponse>(
        '/events/fetch-own-events/',
        { userId: uid }
      );
      setTimeout(() => {
        dispatch({
          type: 'GET_EVENTS_SUCCESS',
          payload: {
            events: response.data.events,
            isLoading: false,
          },
        });
      }, 4000);
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'GET_EVENTS_ERROR',
        payload: true,
      });
    }
  };
};

/**
 * Creates a new event, using the current logged user as the event creator.
 * @param event Event information to be stored in MongoDB
 * @returns Redux Action for adding the event into the events store state.
 */
export const createNewEvent = (event: Event) => {
  return async (dispatch: Dispatch<EventsAction | UiActions>) => {
    dispatch({
      type: 'ADD_EVENT',
      payload: {
        isLoading: false,
        success: true,
      },
    });
    try {
      const response = await axiosClient.post<NewEventResponse>(
        '/events/create-event/',
        { event: event }
      );
      dispatch({
        type: 'ADD_EVENT_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'ADD_EVENT_ERROR',
        payload: true,
      });
    }
  };
};

/**
 * Adds an event to the wishlist.
 * @param event Event to be added to the wishlist
 * @returns Redux Action to add an event to the user's Wishlist
 */
export const addToWishList = (event: Event) => {
  return async (dispatch: Dispatch<EventsAction>) => {
    dispatch({
      type: 'ADD_TO_WISHLIST',
      payload: event,
    });
  };
};

/**
 * Removes an event from the user wishlist.
 * @param event Event to be removed from the wishlist.
 * @returns Redux Action used for removing an event from the wishlist.
 */
export const removeFromWishList = (event: Event) => {
  return async (dispatch: Dispatch<EventsAction>) => {
    dispatch({
      type: 'REMOVE_FROM_WISHLIST',
      payload: event,
    });
  };
};
