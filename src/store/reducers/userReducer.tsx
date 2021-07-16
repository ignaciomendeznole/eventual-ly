import { UserActions, UserState } from '../../types/types';

const initialState: UserState = {
  givenName: '',
  familyName: '',
  currentLocation: '',
  profilePicture: '',
};

export const userReducer = (
  state: UserState = initialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case 'SET_CURRENT_LOCATION':
      return {
        ...state,
        currentLocation: action.payload,
      };
    case 'SET_GIVEN_NAME':
      return {
        ...state,
        givenName: action.payload,
      };
    default:
      return state;
  }
};
