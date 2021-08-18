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
  Platform,
} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { HomeStackParams } from '../../types/types';
import styles from './styles';
import colors from '../../constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToWishList,
  removeFromWishList,
} from '../../store/actions/eventActions';
import { AppState } from '../../store/reducers';
import { dateParser, hourParser } from '../../helper/dateParser';
import { openNativeMaps } from '../../helper/openMaps';

interface Props
  extends StackScreenProps<HomeStackParams, 'EventDetailsScreen'> {}

export const EventDetails: React.FC<Props> = ({ route, navigation }) => {
  const { wishList } = useSelector((state: AppState) => state.eventsReducer);
  const [liked, setLiked] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { event } = route.params;
  const addEventToWishList = () => {
    dispatch(addToWishList(event));
  };

  let mockDescription =
    'Lorem ipsum dolor sit amet consectetur, adipiscing elit luctus leo, lacinia erat venenatis elementum. Varius cubilia ridiculus orci fames tempus ornare potenti maecenas litora, ultrices dignissim vitae himenaeos tempor mattis viverra aenean, pulvinar rhoncus massa fringilla leo facilisi est vivamus. Feugiat viverra pretium magna vulputate nibh malesuada arcu accumsan, netus sociosqu quisque aenean fermentum euismod facilisi risus pulvinar, placerat class purus tristique commodo hendrerit vitae.';

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
  const moveBack = () => {
    navigation.goBack();
  };
  useEffect(() => {
    checkIfLiked();
  }, [wishList]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <ImageBackground
        source={{
          uri: event.backdropImage
            ? event.backdropImage
            : 'https://franchetti.com/wp-content/uploads/2017/05/technology-to-enhance-meetings-and-presentations.jpg',
        }}
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
            <Text style={styles.timeText}>
              {dateParser(event.date).split('GMT')[0].split(' ')[0]}{' '}
              {dateParser(event.date).split('GMT')[0].split(' ')[1]}{' '}
              {dateParser(event.date).split('GMT')[0].split(' ')[2]}
              {Platform.OS === 'ios' ? ', ' : ''}
              {Platform.OS === 'android'
                ? dateParser(event.date)
                    .split('GMT')[0]
                    .split(' ')[3]
                    .replace('-', '')
                : dateParser(event.date).split('GMT')[0].split(' ')[3]}
            </Text>
          </View>
          <View style={styles.dayContainer}>
            <Ionicons name='time' size={24} color={colors.REDPALETTE} />
            <Text style={styles.timeText}>
              {hourParser(dateParser(event.date).split('GMT')[0].split(' ')[4])}
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={{ position: 'absolute', top: 60, left: 20 }}>
        <TouchableOpacity onPress={moveBack} activeOpacity={0.7}>
          <AntDesign name='arrowleft' size={32} color='white' />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 60,
          right: 20,
        }}
      >
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

      <ScrollView style={{ marginBottom: 100.5 }}>
        <View style={styles.marginContainer}>
          {/* Event Details */}
          <Text style={styles.title}>Event Description</Text>
          <Text style={styles.description}>
            {event.description
              ? event.description.substring(0, 150) + '...'
              : mockDescription.substring(0, 150) + '...'}
          </Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.readMore}>Read More</Text>
          </TouchableOpacity>
          <MapView
            provider={PROVIDER_GOOGLE}
            region={{
              latitude: event.location?.geometry.location.lat!,
              longitude: event.location?.geometry.location.lng!,
              latitudeDelta: 0.003,
              longitudeDelta: 0.003,
            }}
            style={styles.mapView}
            mapType='standard'
            onPress={() =>
              openNativeMaps(
                event.location?.geometry.location.lat!,
                event.location?.geometry.location.lng!
              )
            }
          >
            <MarkerAnimated
              coordinate={{
                latitude: event.location?.geometry.location.lat!,
                longitude: event.location?.geometry.location.lng!,
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
              Buy Ticket for U$D{event.price}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
