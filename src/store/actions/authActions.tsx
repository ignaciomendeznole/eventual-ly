import * as Google from 'expo-google-app-auth';
import { Dispatch } from 'react';
import firebase from '../../database/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthAction, UserSignupResponse } from '../../types/types';
import clients from '../../../config.json';
import axiosClient from '../../../config/axiosClient';

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

export const removeError = () => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: 'REMOVE_ERROR',
    });
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
