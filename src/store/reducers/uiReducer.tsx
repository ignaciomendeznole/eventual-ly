import { UiActions, UiState } from '../../types/types';

const initialState: UiState = {
  isLoading: false,
  error: false,
  errorMessage: '',
};

export const uiReducer = (
  state: UiState = initialState,
  action: UiActions
): UiState => {
  switch (action.type) {
    case 'UI_LOADING':
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case 'UI_ERROR':
      return {
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
        errorMessage: action.payload.errorMessage,
      };
    case 'UI_FINISH_LOADING':
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    default:
      return state;
  }
};
