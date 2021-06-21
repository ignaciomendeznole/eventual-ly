import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { EventDetails } from '../screens/EventDetails';
import { WishList } from '../screens/WishList';
import { WishListStackParams } from '../types/types';

const Stack = createStackNavigator<WishListStackParams>();

export const SavedEventsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='WishList' component={WishList} />
      <Stack.Screen name='EventDetails' component={EventDetails} />
    </Stack.Navigator>
  );
};
