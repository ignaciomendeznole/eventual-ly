import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { EventDetails } from '../screens/EventDetails';
import { HomeScreen } from '../screens/HomeScreen';
import { HomeStackParams } from '../types/types';

const Stack = createStackNavigator<HomeStackParams>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='HomeScreen'
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='EventDetailsScreen' component={EventDetails} />
    </Stack.Navigator>
  );
};
