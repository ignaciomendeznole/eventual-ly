import { Dispatch } from 'react';
import { UiActions } from '../../types/types';

/**
 * Loading state in the app
 * @returns Redux Action that sets loading state in the app
 */
export const loadingAction = () => {
  return (dispatch: Dispatch<UiActions>) => {
    dispatch({
      type: 'UI_LOADING',
      payload: {
        isLoading: true,
      },
    });
  };
};

/**
 * Triggers an error in the app state.
 * @param errorMessage Error to be displayed in the screen
 * @returns Redux Action used for setting an error message in the store
 */
export const errorAction = (errorMessage: string) => {
  return (dispatch: Dispatch<UiActions>) => {
    dispatch({
      type: 'UI_ERROR',
      payload: {
        error: true,
        isLoading: false,
        errorMessage,
      },
    });
  };
};

/**
 * Sets the App Loading state to false.
 * @returns Redux Action that sets the App Loading state to false.
 */
export const finishLoadingAction = () => {
  return (dispatch: Dispatch<UiActions>) => {
    dispatch({
      type: 'UI_FINISH_LOADING',
      payload: {
        isLoading: false,
      },
    });
  };
};
