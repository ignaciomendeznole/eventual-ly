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
      }, 6000);
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'GET_EVENTS_ERROR',
        payload: true,
      });
    }
  };
};

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

export const addToWishList = (event: Event) => {
  return async (dispatch: Dispatch<EventsAction>) => {
    dispatch({
      type: 'ADD_TO_WISHLIST',
      payload: event,
    });
  };
};

export const removeFromWishList = (event: Event) => {
  return async (dispatch: Dispatch<EventsAction>) => {
    dispatch({
      type: 'REMOVE_FROM_WISHLIST',
      payload: event,
    });
  };
};
