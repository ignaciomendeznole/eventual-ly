import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ProfileScreen } from '../screens/ProfileScreen';
import { ProfileStackParams } from '../types/types';

const Stack = createStackNavigator<ProfileStackParams>();

export const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  );
};
