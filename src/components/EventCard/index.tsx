import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Event } from '../../types/types';
import styles from './styles';
import { assistants } from '../../constants/AssistantsDummy';

interface EventCardProps {
  event: Event;
}

export const EventCard = ({ event }: EventCardProps) => {
  const { name, location, generalLocation, date, backdropImage } = event;
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: backdropImage,
          }}
          style={styles.imageBackground}
          imageStyle={styles.image}
        >
          <View>
            {/* Text Views */}
            <View style={styles.dateContainer}>
              {/* Date View */}
              <Text style={styles.textStyle}>{date.split(' ')[0]}</Text>
              <Text style={styles.textStyle}>{date.split(' ')[1]}</Text>
            </View>
            <View style={styles.locationContainer}>
              {/* Location Specific */}
              <Text style={styles.textStyle}>{name}</Text>
              <Text style={styles.textStyle}>{location}</Text>
            </View>
            <View style={styles.regionContainer}>
              {/* State and Country */}
              <Ionicons name='location' size={20} color={'white'} />
              <Text style={{ ...styles.textStyle, marginLeft: 10 }}>
                {generalLocation}
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
