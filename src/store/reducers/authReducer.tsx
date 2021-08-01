import { AuthAction, AuthState } from '../../types/types';

const initialState: AuthState = {
  uid: '',
  userName: '',
  isLoadingAuth: false,
  error: false,
  errorMessage: '',
  isLoggedIn: false,
  onBoarding: false,
};

export const authReducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        uid: action.payload.uid,
        userName: action.payload.displayName,
        isLoggedIn: true,
        onBoarding: true,
        error: false,
        errorMessage: '',
        isLoadingAuth: false,
      };
    case 'ERROR_SIGN_IN':
      return {
        ...state,
        uid: '',
        userName: '',
        error: action.payload.error,
        errorMessage: action.payload.errorMsg,
        isLoadingAuth: false,
        isLoggedIn: false,
      };
    case 'SIGN_IN_LOADING':
      return {
        ...state,
        isLoadingAuth: action.payload,
        error: false,
        errorMessage: '',
      };
    case 'HIDE_ONBOARDING':
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
        error: false,
        errorMessage: '',
        isLoadingAuth: false,
      };
    default:
      return state;
  }
};
