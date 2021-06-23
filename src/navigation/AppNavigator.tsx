import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { AppStackParams } from '../types/types';
import { AuthStackNavigator } from './AuthStackNavigator';
import { BottomTabNavigator } from './TabNavigator';

const Stack = createStackNavigator<AppStackParams>();

export const AppNavigator = () => {
  //Replace with Redux state

  const { isLoggedIn, onBoarding } = useSelector(
    (state: any) => state.authReducer
  );
  console.log(isLoggedIn);

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
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name='TabNavigator' component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};
