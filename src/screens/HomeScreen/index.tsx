import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { HomeHeader } from '../../components/HomeHeader';
import { SearchBar } from '../../components/SearchBar';
import { EventCard } from '../../components/EventCard';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';
import { events } from '../../constants/EventsDummy';

export const HomeScreen = () => {
  const { width } = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <HomeHeader />
      <SearchBar />
      <Text style={styles.subtitle}> Your Events </Text>
      <Carousel
        data={events}
        renderItem={({ item }) => <EventCard event={item} />}
        sliderWidth={width}
        itemWidth={285}
        layout={'default'}
        layoutCardOffset={100}
      />
    </View>
  );
};
