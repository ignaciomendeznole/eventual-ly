import { Dispatch } from 'react';
import {
  CreateEventProps,
  Event,
  EventsAction,
  EventsOwnerShipResponse,
  NewEventResponse,
} from '../../types/types';
import firebase from '../../database/firebase';
import { AppState } from '../reducers';
import axiosClient from '../../../config/axiosClient';
import axios from 'axios';

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
      dispatch({
        type: 'GET_EVENTS_SUCCESS',
        payload: {
          events: response.data.events,
          isLoading: false,
        },
      });
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
  return async (dispatch: Dispatch<EventsAction>) => {
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
      console.log(response.data);
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
