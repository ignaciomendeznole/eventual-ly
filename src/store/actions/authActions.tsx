import * as Google from 'expo-google-app-auth';
import { Dispatch } from 'react';
import firebase from '../../database/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthAction, UserSignupResponse } from '../../types/types';
import clients from '../../../config.json';
import axiosClient from '../../../config/axiosClient';

/**
 * Checks user's credentials for App Login and sets the app state with credentials.
 * @param email Used for user authentication
 * @param password Used for user authentication
 * @returns Redux Action handler for User Authentication Sign In
 */
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
          errorMsg: 'Could not sign in',
        },
      });
    }
  };
};

/**
 * Method for error cleanup
 * @returns Redux Action for error cleanup
 */
export const removeError = () => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: 'REMOVE_ERROR',
    });
  };
};

/**
 * Hides the landing screen after first time the user logs in.
 * @returns Redux Action for hiding Landing Screen
 */
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

/**
 * Creates an account for the user with the specified email and password.
 * @param email User email
 * @param password User password
 * @param firstName User first name
 * @param familyName User last name
 * @returns Redux action used for creating an account
 */
export const signUpAction = (
  email: string,
  password: string,
  firstName: string,
  familyName: string
) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: 'SIGN_IN_LOADING',
      payload: true,
    });
    try {
      const response = await firebase.firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const mongoInsert = await axiosClient.post<UserSignupResponse>(
        '/users/create-user',
        {
          email: email,
          userId: response.user?.uid,
          firstName: firstName,
          familyName: familyName,
        }
      );
      dispatch({
        type: 'SIGN_IN',
        payload: {
          uid: response.user?.uid!,
          displayName: mongoInsert.data.user.firstName,
        },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'ERROR_SIGN_IN',
        payload: {
          error: true,
          errorMsg: 'Could not sign user up',
        },
      });
    }
  };
};

/**
 * Logs the user in using Google's built-in Authentication.
 * @returns Redux Action used for setting user's credentials in Redux Store
 */
export const startGoogleLogin = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: 'SIGN_IN_LOADING',
      payload: true,
    });
    try {
      const response = await Google.logInAsync({
        iosClientId: clients.android_ios_keys.ios,
        androidClientId: clients.android_ios_keys.android,
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
        dispatch({
          type: 'ERROR_SIGN_IN',
          payload: {
            error: false,
            errorMsg: 'Cancelled login',
          },
        });
      }
    } catch (error) {
      dispatch({
        type: 'ERROR_SIGN_IN',
        payload: {
          error: true,
          errorMsg: 'Could not sign user in with Google',
        },
      });
    }
  };
};

/**
 * Signs the user out, removing the auth token from firebase.
 * @returns Redux Action for removing user's credentials from the store.
 */
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

export const logInSuccess = (uid: string, displayName: string | undefined) => ({
  type: 'SIGN_IN',
  payload: {
    uid,
    displayName,
  },
});

export const logInError = (error: any) => ({
  type: 'ERROR_SIGN_IN',
  payload: {
    error: true,
    errorMsg: error.message,
  },
});
