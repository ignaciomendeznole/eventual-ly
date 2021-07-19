import { Dispatch } from 'react';
import { CreateEventProps, Event, EventsAction } from '../../types/types';
import firebase from '../../database/firebase';
import { AppState } from '../reducers';

// export const fetchAllEvents = () => {
//   return async (dispatch: Dispatch<EventsAction>, getState: () => AppState) => {
//     dispatch({
//       type: 'GET_EVENTS',
//       payload: true,
//     });
//     const { uid } = getState().authReducer;
//     try {
//       const response = await firebase.db.collection(`${uid}/events`)
//     } catch (error) {}
//   };
// };

export const createNewEvent = (event: Event) => {
  return async (dispatch: Dispatch<EventsAction>, getState: () => AppState) => {
    const { uid } = getState().authReducer;
    dispatch({
      type: 'ADD_EVENT',
      payload: {
        isLoading: false,
        success: true,
      },
    });
    try {
      const docRef = await firebase.db
        .collection(`${uid}/events/event`)
        .add(event);
      const snapshot = await docRef.get();
      const newEvent = snapshot.data() as Event;
      dispatch({
        type: 'ADD_EVENT_SUCCESS',
        payload: newEvent,
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
