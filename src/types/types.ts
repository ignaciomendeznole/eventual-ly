import { StackScreenProps } from '@react-navigation/stack';

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
  isLoading: boolean;
  error: boolean;
  errorMessage: string;
  isLoggedIn: boolean;
  onBoarding: boolean;
};

export type UserState = {
  givenName: string;
  familyName: string;
  profilePicture: string;
  currentLocation: string;
};

export type GoogleConfig = {
  iosClientId: string;
  androidClientId: string;
};

export type Event = {
  description: string;
  name: string;
  date: string;
  location: string;
  generalLocation: string;
  backdropImage: string;
  latitude: number;
  longitude: number;
  price: string;
  creator: string;
};

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
  payload: string;
};

export type UserActions =
  | UpdateUserName
  | UpdateFamilyName
  | UpdateUserLocation;

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
  payload: Event[];
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
  isLoading: boolean;
  events: Event[];
  error: boolean;
  wishList: Event[];
  success: boolean;
};

export type CreateEventProps = {
  description: string;
  name: string;
  date: string;
  location: string;
  generalLocation: string;
  backdropImage: string;
  latitude: number;
  longitude: number;
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
