import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import MapView, { PROVIDER_GOOGLE, MarkerAnimated } from 'react-native-maps';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Event, HomeStackParams } from '../../types/types';
import styles from './styles';
import colors from '../../constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToWishList,
  removeFromWishList,
} from '../../store/actions/eventActions';
import { AppState } from '../../store/reducers';

interface Props
  extends StackScreenProps<HomeStackParams, 'EventDetailsScreen'> {}

export const EventDetails = ({ route }: Props) => {
  const { wishList } = useSelector((state: AppState) => state.eventsReducer);
  const [liked, setLiked] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { event } = route.params;
  const addEventToWishList = () => {
    dispatch(addToWishList(event));
  };

  const checkIfLiked = () => {
    if (wishList.includes(event)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  };

  const removeEventFromWishList = () => {
    dispatch(removeFromWishList(event));
  };
  useEffect(() => {
    checkIfLiked();
  }, [wishList]);

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
      <View style={{ position: 'absolute', top: 60, left: 20 }}>
        <TouchableOpacity>
          <AntDesign name='arrowleft' size={32} color='white' />
        </TouchableOpacity>
      </View>
      <View style={{ position: 'absolute', top: 60, right: 20 }}>
        {!liked ? (
          <TouchableOpacity onPress={addEventToWishList}>
            <AntDesign name='hearto' size={32} color='white' />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={removeEventFromWishList}>
            <AntDesign name='heart' size={32} color='white' />
          </TouchableOpacity>
        )}
      </View>

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
