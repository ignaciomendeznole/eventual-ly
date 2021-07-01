import * as Google from 'expo-google-app-auth';
import firebase from '../../database/firebase';

export const startLoginEmailPassword = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      const response = await firebase.firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      dispatch(logInSuccess(response.user!.uid, response.user!.displayName!));
    } catch (error) {
      console.log(error);
      dispatch(logInError(error));
    }
  };
};

export const startGoogleLogin = () => {
  return async (dispatch: any) => {
    dispatch(loggingIn());
    try {
      const response = await Google.logInAsync({
        iosClientId:
          '694943136654-ekh0ri3fglu4se0jnrus2b6920m0tno8.apps.googleusercontent.com/',
        androidClientId:
          '694943136654-6hqfkd8onffp4mbmisjr4emgb019r5i4.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
      if (response.type === 'success') {
        dispatch(logInSuccess(response.accessToken, response.user.givenName));
      } else {
        return { cancelled: true };
      }
    } catch (error) {
      dispatch(logInError(error));
    }
  };
};

export const logInSuccess = (
  uid: string | null,
  displayName: string | undefined
) => ({
  type: 'signIn',
  payload: {
    uid,
    displayName,
  },
});

export const loggingIn = () => ({
  type: 'loggingIn',
  payload: true,
});

export const logInError = (error: any) => ({
  type: 'signInError',
  payload: {
    error: error,
    errorMsg: 'Invalid login, please try again',
  },
});

export const disableOnBoarding = () => ({
  type: 'hideOnBoarding',
});

export const logOut = () => ({
  type: 'LOG_OUT',
});
