import React from 'react';
import firebase from '../database/firebase';
import { useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { AppStackParams } from '../types/types';
import { AuthStackNavigator } from './AuthStackNavigator';
import { BottomTabNavigator } from './TabNavigator';
import { useEffect } from 'react';
import { logInSuccess } from '../store/actions/authActions';

const Stack = createStackNavigator<AppStackParams>();

export const AppNavigator = () => {
  const dispatch = useDispatch();

  const { isLoggedIn, onBoarding } = useSelector(
    (state: any) => state.authReducer
  );

  useEffect(() => {
    firebase.firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        dispatch(logInSuccess(user.uid, user.displayName));
      }
    });
  }, []);

  if (!isLoggedIn) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='AuthStack' component={AuthStackNavigator} />
      </Stack.Navigator>
    );
  }

  if (onBoarding) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='OnBoarding' component={WelcomeScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='TabNavigator' component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};
