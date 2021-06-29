import React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { HomeHeader } from '../../components/HomeHeader';
import { SearchBar } from '../../components/SearchBar';
import { EventCard } from '../../components/EventCard';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';
import { events } from '../../constants/EventsDummy';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({ navigation }: Props) => {
  const { width } = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <ScrollView>
        <HomeHeader />
        <SearchBar />
        <Text style={styles.subtitle}> Your Events </Text>
        <Carousel
          data={events}
          renderItem={({ item }) => (
            <EventCard event={item} navigation={navigation} />
          )}
          sliderWidth={width}
          itemWidth={285}
          layout={'default'}
          layoutCardOffset={100}
        />
      </ScrollView>
    </View>
  );
};
