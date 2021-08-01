import { StackScreenProps } from '@react-navigation/stack';
import { LocationObject } from 'expo-location';
import { AddressComponent, Geometry, Location, Result } from './GooglePlaces';

export type BottomTabParams = {
  HomeStack: undefined;
  MyTickets: undefined;
  WishList: undefined;
  ProfileStack: undefined;
};

export type HomeStackParams = {
  HomeScreen: undefined;
  EventDetailsScreen: { event: Event };
  NewEventScreen: undefined;
};

export type MyTicketsStackParams = {
  MyTickets: undefined;
};

export type AuthStackParams = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
};

export type AppStackParams = {
  TabNavigator: undefined;
  AuthStack: undefined;
  OnBoarding: undefined;
  SplashScreen: undefined;
};

export type ProfileStackParams = {
  Profile: undefined;
  Settings: undefined;
};

export type WishListStackParams = {
  WishList: undefined;
  EventDetails: { event: Event };
};

export type SignInSuccess = {
  readonly type: 'SIGN_IN';
  payload: { uid: string; displayName: string };
};

export type LoadingSignIn = {
  readonly type: 'SIGN_IN_LOADING';
  payload: boolean;
};

export type SignInError = {
  readonly type: 'ERROR_SIGN_IN';
  payload: { error: boolean; errorMsg: string };
};

export type LogOut = {
  readonly type: 'LOG_OUT';
};

export type HideOnBoarding = {
  readonly type: 'HIDE_ONBOARDING';
};

export type AuthAction =
  | SignInSuccess
  | LoadingSignIn
  | SignInError
  | LogOut
  | HideOnBoarding;

export type AuthState = {
  uid: string;
  userName: string;
  isLoadingAuth: boolean;
  error: boolean;
  errorMessage: string;
  isLoggedIn: boolean;
  onBoarding: boolean;
};

export type UserState = {
  givenName: string;
  familyName: string;
  profilePicture: string;
  currentLocation: Result | null;
  error: boolean;
  errorMsg: string;
  isLoading: boolean;
};

export type GoogleConfig = {
  iosClientId: string;
  androidClientId: string;
};

// export type Event = {
//   description: string;
//   name: string;
//   date: string;
//   location: Result | null;
//   backdropImage: string;
//   price: string;
//   creator: string;
// };

// export type EventType = {
//   name: string;
//   description: string;
//   date: string;
//   location: Result | null;
//   backdropImage: string;
//   price: string;
//   creator: string;
// };

export type SignUpInformation = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type Credentials = {
  email: string;
  password: string;
};

export type LoadingUserStore = {
  readonly type: 'LOADING_USER_INFO';
  payload: { isLoading: boolean };
};

export type UpdateUserName = {
  readonly type: 'SET_GIVEN_NAME';
  payload: string;
};

export type UpdateFamilyName = {
  readonly type: 'SET_FAMILY_NAME';
  payload: string;
};

export type UpdateUserLocation = {
  readonly type: 'SET_CURRENT_LOCATION';
  payload: { currentLocation: Result; isLoading: false };
};

export type UserActionsError = {
  readonly type: 'USER_ACTIONS_ERROR';
  payload: { error: boolean; errorMsg?: string; isLoading: false };
};

export type UserActions =
  | UpdateUserName
  | UpdateFamilyName
  | UpdateUserLocation
  | LoadingUserStore
  | UserActionsError;

export type Ticket = {
  id: string;
  name: string;
  backdropImage: string;
  location: string;
  date: string;
  priceTag: string;
  ticketLink: string;
};

export interface Props extends StackScreenProps<any, any> {}

export type EventsAction =
  | AddEventAction
  | GetEventsAction
  | AddEventSuccess
  | AddEventError
  | GetEventsError
  | GetEventsSuccess
  | AddEventToWishList
  | RemoveEventFromWishList;

export type AddEventAction = {
  readonly type: 'ADD_EVENT';
  payload: { success: boolean; isLoading: boolean };
};

export type AddEventSuccess = {
  readonly type: 'ADD_EVENT_SUCCESS';
  payload: Event;
};

export type AddEventError = {
  readonly type: 'ADD_EVENT_ERROR';
  payload: boolean;
};

export type GetEventsAction = {
  readonly type: 'GET_EVENTS';
  payload: boolean;
};

export type GetEventsSuccess = {
  readonly type: 'GET_EVENTS_SUCCESS';
  payload: { isLoading: boolean; events: Event[] };
};
export type GetEventsError = {
  readonly type: 'GET_EVENTS_ERROR';
  payload: boolean;
};

export type AddEventToWishList = {
  readonly type: 'ADD_TO_WISHLIST';
  payload: Event;
};

export type RemoveEventFromWishList = {
  readonly type: 'REMOVE_FROM_WISHLIST';
  payload: Event;
};

export type EventState = {
  isLoadingEvents: boolean;
  events: Event[];
  error: boolean;
  wishList: Event[];
  success: boolean;
};

export type CreateEventProps = {
  description: string;
  name: string;
  date: string;
  location: Result | null;
  backdropImage: string;
  price: string;
};

export type ImagePickerResponse = {
  cancelled: boolean;
  height: number;
  type: string;
  uri: string;
  width: number;
};

export type PredictionsType = {
  description: string;
  place_id: string;
  reference: string;
  matched_substrings: any[];
  tructured_formatting: Object;
  terms: Object[];
  types: string[];
};

export type Coords = {
  latitude: number;
  longitude: number;
};

// Generated by https://quicktype.io

export interface UserSignupResponse {
  user: User;
}

export interface User {
  _id: string;
  firstName: string;
  familyName: string;
  email: string;
  __v: number;
}

// Generated by https://quicktype.io

export interface EventsOwnerShipResponse {
  events: Event[];
}

// Generated by https://quicktype.io

export interface Event {
  createdOn?: string;
  _id?: string;
  name: string;
  date: string;
  description: string;
  location: Result | null;
  price: number;
  owner: string;
  backdropImage?: string;
  __v?: number;
}

// Generated by https://quicktype.io

export interface NewEventResponse {
  createdOn: string;
  _id: string;
  name: string;
  location: Result | null;
  date: string;
  price: number;
  owner: string;
  description: string;
}

export type UiState = {
  isLoading?: boolean;
  error?: boolean;
  errorMessage?: string;
};

export type LoadingUiAction = {
  readonly type: 'UI_LOADING';
  payload: { isLoading: boolean };
};

export type FinishLoadingUiAction = {
  readonly type: 'UI_FINISH_LOADING';
  payload: { isLoading: boolean };
};

export type ErrorUiAction = {
  readonly type: 'UI_ERROR';
  payload: { isLoading: boolean; error: boolean; errorMessage?: string };
};

export type UiActions = LoadingUiAction | ErrorUiAction | FinishLoadingUiAction;
