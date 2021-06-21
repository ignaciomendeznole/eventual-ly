import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { BottomTabParams } from '../types/types';
import { HomeStackNavigator } from './HomeStackNavigator';
import { MyTickets } from '../screens/MyTickets';
import { StyleSheet, View, Text, Animated } from 'react-native';
import HomeIcon from '../components/TabBarIcons/HomeIcon';
import { ProfileStackNavigator } from './ProfileStackNavigator';
import { SavedEventsNavigator } from './SavedEventsNavigator';
import EventsIcon from '../components/TabBarIcons/EventsIcon';
import { useRef } from 'react';
import { Dimensions } from 'react-native';

const TabNavigator = createBottomTabNavigator<BottomTabParams>();

export const BottomTabNavigator = () => {
  const getWidth = () => {
    const width = Dimensions.get('screen').width;
    return width / 4;
  };
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <TabNavigator.Navigator
      tabBarOptions={{
        style: {
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
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: -7,
              useNativeDriver: true,
            }).start();
          },
        })}
      />
      <TabNavigator.Screen
        name='MyTickets'
        component={MyTickets}
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
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true,
            }).start();
          },
        })}
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
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true,
            }).start();
          },
        })}
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
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true,
            }).start();
          },
        })}
      />
    </TabNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  selectedTabIndicator: {
    borderRadius: 50,
    backgroundColor: 'white',
    height: 5,
    width: 5,
    marginTop: 10,
  },
});
