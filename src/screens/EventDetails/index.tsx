import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import MapView, { PROVIDER_GOOGLE, MarkerAnimated } from 'react-native-maps';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HomeStackParams } from '../../types/types';
import styles from './styles';
import colors from '../../constants/colors';

interface Props
  extends StackScreenProps<HomeStackParams, 'EventDetailsScreen'> {}

export const EventDetails = ({ route }: Props) => {
  const { event } = route.params;
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <ImageBackground
        source={{ uri: event.backdropImage }}
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        <View style={styles.imageTextContainer}>
          {/* Event Name */}
          <Text style={styles.imageText}>{event.name}</Text>
        </View>
        <View style={styles.timeInfoContainer}>
          {/* Date and Time Info */}
          <View style={styles.dayContainer}>
            <Ionicons name='calendar' size={24} color={colors.REDPALETTE} />
            <Text style={styles.timeText}>{event.date}, 2023</Text>
          </View>
          <View style={styles.dayContainer}>
            <Ionicons name='time' size={24} color={colors.REDPALETTE} />
            <Text style={styles.timeText}>10am - 13pm</Text>
          </View>
        </View>
      </ImageBackground>
      <ScrollView>
        <View style={styles.marginContainer}>
          {/* Event Details */}
          <Text style={styles.title}>Event Description</Text>
          <Text style={styles.description}>
            {event.description.substring(0, 150) + '...'}
          </Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.readMore}>Read More</Text>
          </TouchableOpacity>
          <MapView
            provider={PROVIDER_GOOGLE}
            region={{
              latitude: event.latitude,
              longitude: event.longitude,
              latitudeDelta: 0.003,
              longitudeDelta: 0.003,
            }}
            style={styles.mapView}
            mapType='standard'
          >
            <MarkerAnimated
              coordinate={{
                latitude: event.latitude,
                longitude: event.longitude,
              }}
              title={event.name}
            />
          </MapView>
          <TouchableOpacity
            style={styles.purchaseButton}
            activeOpacity={0.8}
            // onPress={handlePurchase}
          >
            <Text style={styles.purchaseText}>
              Buy Ticket for {event.price}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
