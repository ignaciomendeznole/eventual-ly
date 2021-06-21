import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParams } from '../types/types';
import { LoginScreen } from '../screens/Login';
import { SignUpScreen } from '../screens/SignUp';

const Stack = createStackNavigator<AuthStackParams>();

export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
    </Stack.Navigator>
  );
};
