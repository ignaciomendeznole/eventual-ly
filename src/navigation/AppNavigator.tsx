import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { AppStackParams } from '../types/types';
import { AuthStackNavigator } from './AuthStackNavigator';
import { BottomTabNavigator } from './TabNavigator';

const Stack = createStackNavigator<AppStackParams>();

export const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  if (isLoggedIn) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='AuthStack' component={AuthStackNavigator} />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='TabNavigator' component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};
