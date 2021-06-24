import * as Google from 'expo-google-app-auth';

export const startLoginEmailPassword = (email: string, password: string) => {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(logInSuccess(123, 'Ignacio'));
    }, 3500);
  };
};

export const startGoogleLogin = () => {
  return async (dispatch: any) => {
    dispatch(loggingIn());
    try {
      const response = await Google.logInAsync({
        iosClientId:
          '694943136654-ekh0ri3fglu4se0jnrus2b6920m0tno8.apps.googleusercontent.com/',
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

export const logInSuccess = (uid: any, displayName: any) => ({
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
    errorMsg: 'No se ha podido realizar el login',
  },
});

export const disableOnBoarding = () => ({
  type: 'hideOnBoarding',
});

export const logOut = () => ({
  type: 'LOG_OUT',
});