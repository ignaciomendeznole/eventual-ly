import * as Google from 'expo-google-app-auth';
import { Dispatch } from 'react';
import firebase from '../../database/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthAction, SignUpInformation } from '../../types/types';

export const startLoginEmailPassword = (email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: 'SIGN_IN_LOADING',
      payload: true,
    });
    try {
      const response = await firebase.firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      dispatch({
        type: 'SIGN_IN',
        payload: {
          uid: response.user?.uid!,
          displayName: response.user?.displayName!,
        },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'ERROR_SIGN_IN',
        payload: {
          error: true,
          errorMsg: error,
        },
      });
    }
  };
};

export const hideWelcomeScreen = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      await AsyncStorage.setItem('welcomeScreen', 'true');
      dispatch({
        type: 'HIDE_ONBOARDING',
      });
    } catch (error) {
      console.log('could not set async storage variable');
    }
  };
};

export const signUpAction = (email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: 'SIGN_IN_LOADING',
      payload: true,
    });
    try {
      const response = await firebase.firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      dispatch({
        type: 'SIGN_IN',
        payload: {
          uid: response.user?.uid!,
          displayName: response.user?.displayName!,
        },
      });
    } catch (error) {
      dispatch({
        type: 'ERROR_SIGN_IN',
        payload: {
          error: true,
          errorMsg: error,
        },
      });
    }
  };
};

export const startGoogleLogin = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: 'SIGN_IN_LOADING',
      payload: true,
    });
    try {
      const response = await Google.logInAsync({
        iosClientId:
          '694943136654-ekh0ri3fglu4se0jnrus2b6920m0tno8.apps.googleusercontent.com/',
        androidClientId:
          '694943136654-6hqfkd8onffp4mbmisjr4emgb019r5i4.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
      if (response.type === 'success') {
        dispatch({
          type: 'SIGN_IN',
          payload: {
            uid: response.accessToken!,
            displayName: response.user.givenName!,
          },
        });
      } else {
        return { cancelled: true };
      }
    } catch (error) {
      dispatch({
        type: 'ERROR_SIGN_IN',
        payload: {
          error: true,
          errorMsg: error,
        },
      });
    }
  };
};

export const signOut = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      await firebase.firebase.auth().signOut();
      dispatch({
        type: 'LOG_OUT',
      });
    } catch (error) {
      console.log(error);
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

export const logInError = (error: any) => ({
  type: 'signInError',
  payload: {
    error: true,
    errorMsg: error.message,
  },
});
