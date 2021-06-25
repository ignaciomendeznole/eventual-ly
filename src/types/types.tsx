export type BottomTabParams = {
  HomeStack: undefined;
  MyTickets: undefined;
  WishList: undefined;
  ProfileStack: undefined;
};

export type HomeStackParams = {
  HomeScreen: undefined;
  EventDetailsScreen: undefined;
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

export type AuthAction =
  | { type: 'signIn'; payload: { uid: string; displayName: string } }
  | { type: 'loggingIn'; payload: boolean }
  | { type: 'signInError'; payload: { error: boolean; errorMsg: string } }
  | { type: 'hideOnBoarding' }
  | { type: 'LOG_OUT' };

export type AuthState = {
  uid: string;
  userName: string;
  isLoading: boolean;
  error: boolean;
  errorMessage: string;
  isLoggedIn: boolean;
  onBoarding: boolean;
};

export type GoogleConfig = {
  iosClientId: string;
  androidClientId: string;
};

export type Event = {
  id: string;
  name: string;
  date: string;
  location: string;
  generalLocation: string;
  backdropImage: string;
};
