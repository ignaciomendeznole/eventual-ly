import { Dispatch } from 'react';
import { UiActions } from '../../types/types';

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
