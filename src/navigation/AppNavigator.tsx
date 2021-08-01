import React, { useEffect, useState } from 'react';
import firebase from '../database/firebase';
import { useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { AppStackParams } from '../types/types';
import { AuthStackNavigator } from './AuthStackNavigator';
import { BottomTabNavigator } from './TabNavigator';
import { logInSuccess, logInError } from '../store/actions/authActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState } from '../store/reducers';

const Stack = createStackNavigator<AppStackParams>();

export const AppNavigator = () => {
  const dispatch = useDispatch();

  const [onBoarding, setOnBoarding] = useState<boolean>(false);

  const { isLoggedIn } = useSelector((state: AppState) => state.authReducer);

  useEffect(() => {
    firebase.firebase.auth().onAuthStateChanged(async (user: any) => {
      if (user) {
        dispatch(logInSuccess(user.uid, user.displayName));
      } else {
        dispatch(logInError('Could not fetch user'));
      }
    });
  }, []);

  useEffect(() => {
    getWelcomeScreen();
  }, []);

  const getWelcomeScreen = async () => {
    try {
      const data = await AsyncStorage.getItem('welcomeScreen');
      if (data) {
        setOnBoarding(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
