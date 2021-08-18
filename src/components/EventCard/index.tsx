import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Event } from '../../types/types';
import styles from './styles';
import { assistants } from '../../constants/AssistantsDummy';
import { dateParser, hourParser } from '../../helper/dateParser';
import colors from '../../constants/colors';

interface EventCardProps {
  event: Event;
  navigation: any;
}

export const EventCard: React.FC<EventCardProps> = ({ event, navigation }) => {
  const { name, location, date, backdropImage } = event;
  let genericImage =
    'https://franchetti.com/wp-content/uploads/2017/05/technology-to-enhance-meetings-and-presentations.jpg';
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('EventDetailsScreen', { event })}
    >
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: backdropImage ? backdropImage : genericImage,
          }}
          style={styles.imageBackground}
          imageStyle={styles.image}
        >
          <View>
            {/* Text Views */}
            <View style={styles.dateContainer}>
              {/* Date View */}
              <Text style={styles.textStyle}>
                {dateParser(date).split('GMT')[0].split(' ')[0]}{' '}
                {dateParser(date).split('GMT')[0].split(' ')[1]}{' '}
                {dateParser(date).split('GMT')[0].split(' ')[2]}
                {Platform.OS === 'ios' ? ', ' : ' '}
                {Platform.OS === 'android'
                  ? dateParser(date)
                      .split('GMT')[0]
                      .split(' ')[3]
                      .replace('-', '')
                  : dateParser(date).split('GMT')[0].split(' ')[3]}{' '}
              </Text>
              <Text style={styles.textStyle}>
                {hourParser(dateParser(date).split('GMT')[0].split(' ')[4])}
              </Text>
              {/* <Text style={styles.textStyle}>{date.split(' ')[1]}</Text> */}
            </View>
            <View style={styles.locationContainer}>
              {/* Location Specific */}
              <Text style={styles.textStyle}>{name}</Text>
              <Text style={styles.textStyle}>
                {location?.address_components[1].long_name},{' '}
                {location?.address_components[4].long_name}
              </Text>
            </View>
            <View style={styles.regionContainer}>
              {/* State and Country */}
              <Ionicons name='location' size={20} color={colors.GREENPALETTE} />
              <Text
                style={{
                  ...styles.textStyle,
                  marginLeft: 10,
                }}
              >
                {location?.address_components[0].short_name}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.bottomCardContainer}>
          <View style={styles.assistantsTextContainer}>
            {/* Number of assistants */}
            <Text style={styles.assistantsText}>21 Assistants</Text>
          </View>
          <View style={styles.assistantsContainer}>
            {/* Person Icons */}
            {assistants.map((assistant) => (
              <View key={assistant.id} style={{ marginHorizontal: -5 }}>
                <Image
                  source={{ uri: assistant.image }}
                  style={styles.profileImages}
                />
              </View>
            ))}
            <View style={styles.moreAssistants}>
              <Text style={styles.moreAssistantsText}>18+</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
