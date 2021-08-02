import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { HomeHeader } from '../../components/HomeHeader';
import { SearchBar } from '../../components/SearchBar';
import { EventCard } from '../../components/EventCard';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';
import { useEventsSearch } from '../../hooks/useEventsSearch';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../constants/colors';
import { Props } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import { fetchMyEvents } from '../../store/actions/eventActions';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';
import { LoadingScreen } from '../LoadingScreen/index';

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { width } = Dimensions.get('window');
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const dispatch = useDispatch();
  const { events, isLoadingEvents } = useSelector(
    (state: AppState) => state.eventsReducer
  );

  const { eventsFiltered } = useEventsSearch(keyword, events);

  const { currentLocation } = useCurrentLocation();

  useEffect(() => {
    dispatch(fetchMyEvents());
  }, []);

  const wait = (timeout: number) => {
    return new Promise((resolve: any) => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  if (isLoadingEvents) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.GREENPALETTE}
          />
        }
      >
        <HomeHeader currentLocation={currentLocation!} />

        <SearchBar setKeyword={setKeyword} />
        <View style={styles.subtitleContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.subtitle}> Your Events </Text>
          </View>

          <TouchableOpacity
            style={styles.plusIcon}
            activeOpacity={0.6}
            onPress={() => navigation.navigate('NewEventScreen')}
          >
            <AntDesign name='pluscircle' size={30} color={colors.REDPALETTE} />
          </TouchableOpacity>
        </View>

        {events.length !== 0 ? (
          <Carousel
            data={eventsFiltered}
            renderItem={({ item }) => (
              <EventCard event={item} navigation={navigation} />
            )}
            sliderWidth={width}
            itemWidth={285}
            layout={'default'}
            layoutCardOffset={100}
          />
        ) : (
          <View
            style={{
              marginVertical: '30%',
              marginHorizontal: '20%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={styles.textStyle}>You have no events created.</Text>
            <Text style={styles.textStyle}>
              Press the '+' button to create an event!
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
