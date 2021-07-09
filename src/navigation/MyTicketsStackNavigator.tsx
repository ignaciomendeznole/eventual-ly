import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MyTickets } from '../screens/MyTickets';
import { MyTicketsStackParams } from '../types/types';

const Stack = createStackNavigator<MyTicketsStackParams>();

export const MyTicketStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerTitle: 'My Tickets' }}>
    <Stack.Screen name='MyTickets' component={MyTickets} />
  </Stack.Navigator>
);
