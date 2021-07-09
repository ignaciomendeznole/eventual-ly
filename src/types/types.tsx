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
  EventDetails: undefined;
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
  id: string;
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
