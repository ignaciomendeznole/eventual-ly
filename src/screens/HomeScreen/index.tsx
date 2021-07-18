import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { HomeHeader } from '../../components/HomeHeader';
import { SearchBar } from '../../components/SearchBar';
import { EventCard } from '../../components/EventCard';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';
import { events } from '../../constants/EventsDummy';
import { StackScreenProps } from '@react-navigation/stack';
import { useEventsSearch } from '../../hooks/useEventsSearch';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../constants/colors';
import { Props } from '../../types/types';

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { width } = Dimensions.get('window');
  const [keyword, setKeyword] = useState<string>('');
  const { eventsFiltered } = useEventsSearch(keyword, events);
  return (
    <View style={styles.container}>
      <ScrollView>
        <HomeHeader />
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
      </ScrollView>
    </View>
  );
};
