import { Dispatch } from 'react';
import { Event, EventsAction } from '../../types/types';
import { AppState } from '../reducers';

// export const fetchAllEvents = () => {
//   return async (dispatch: Dispatch<EventsAction>, getState: () => AppState) => {
//     dispatch({
//       type: 'GET_EVENTS',
//       payload: true,
//     });
//     const { uid } = getState().authReducer;
//     try {
//       const response = await firebase.db.collection('users').add();
//     } catch (error) {}
//   };
// };

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
