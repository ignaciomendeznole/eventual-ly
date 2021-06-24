import { AuthAction, AuthState } from '../../types/types';

const initialState: AuthState = {
  uid: '',
  userName: '',
  isLoading: false,
  error: false,
  errorMessage: '',
  isLoggedIn: false,
  onBoarding: false,
};

export const authReducer = (
  state: AuthState = initialState,
  action: AuthAction
) => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        uid: action.payload.uid,
        userName: action.payload.displayName,
        isLoggedIn: true,
        onBoarding: true,
      };
    case 'signInError':
      return {
        ...state,
        uid: null,
        userName: null,
        error: action.payload.error,
        errorMessage: action.payload.errorMsg,
        isLoading: false,
      };
    case 'loggingIn':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'hideOnBoarding':
      return {
        ...state,
        onBoarding: false,
      };
    case 'LOG_OUT':
      return {
        ...state,
        uid: '',
        userName: '',
        isLoggedIn: false,
        onBoarding: false,
      };
    default:
      return state;
  }
};
