import React, { useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { BottomTabParams } from '../types/types';
import HomeIcon from '../../assets/TabBar/HomeIcon';
import EventsIcon from '../../assets/TabBar/EventsIcon';
import { HomeStackNavigator } from './HomeStackNavigator';
import { StyleSheet, View, Animated, Platform } from 'react-native';
import { ProfileStackNavigator } from './ProfileStackNavigator';
import { SavedEventsNavigator } from './SavedEventsNavigator';
import { MyTicketStackNavigator } from './MyTicketsStackNavigator';

const TabNavigator = createBottomTabNavigator<BottomTabParams>();

export const BottomTabNavigator = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  return (
    <TabNavigator.Navigator
      tabBarOptions={{
        style:
          Platform.OS === 'ios' ? styles.iosBottomTab : styles.androidBottomTab,
        showLabel: false,
      }}
      initialRouteName='HomeStack'
      lazy={true}
    >
      <TabNavigator.Screen
        name='HomeStack'
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <HomeIcon />
              {focused && (
                <Animated.View
                  style={{
                    ...styles.selectedTabIndicator,
                    transform: [{ translateX: 0 }],
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <TabNavigator.Screen
        name='MyTickets'
        component={MyTicketStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <EventsIcon />
              {focused && (
                <Animated.View
                  style={{
                    ...styles.selectedTabIndicator,
                    transform: [{ translateX: 0 }],
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <TabNavigator.Screen
        name='WishList'
        component={SavedEventsNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons name='heart-sharp' size={28} color='white' />
              {focused && (
                <Animated.View
                  style={{
                    ...styles.selectedTabIndicator,
                    transform: [{ translateX: 0 }],
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <TabNavigator.Screen
        name='ProfileStack'
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <FontAwesome5 name='user-alt' size={22.58} color='white' />
              {focused && (
                <Animated.View
                  style={{
                    ...styles.selectedTabIndicator,
                    transform: [{ translateX: tabOffsetValue }],
                  }}
                />
              )}
            </View>
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    alignItems: 'center',
  },
  iosBottomTab: {
    position: 'absolute',
    bottom: 30,
    marginHorizontal: 26,
    borderRadius: 20,
    backgroundColor: 'black',
    shadowColor: '#000',

    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.46,

    elevation: 9,
  },
  androidBottomTab: {
    position: 'absolute',
    bottom: 10,
    marginHorizontal: 26,
    borderRadius: 20,
    backgroundColor: 'black',
    shadowColor: '#000',

    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.46,

    height: 80,

    elevation: 9,
  },
  selectedTabIndicator: {
    borderRadius: 50,
    backgroundColor: 'white',
    height: 5,
    width: 5,
    marginTop: 10,
  },
});
