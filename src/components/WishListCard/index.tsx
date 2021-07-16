import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Event } from '../../types/types';
import styles from './styles';

interface WishListProps {
  event: Event;
  onPress: () => void;
  removeEventFromWishList: (event: Event) => void;
}

export const WishListComponent = ({
  event,
  onPress,
  removeEventFromWishList,
}: WishListProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.card}>
      <View style={styles.cardContainer}>
        <View style={styles.cardLayout}>
          {/* Event Image */}
          <Image
            source={{ uri: event.backdropImage }}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.eventInfoContainer}>
          {/* Event Information */}
          <View>
            {/* Event Name and Event Date */}
            <Text style={styles.eventNameText}>{event.name}</Text>
            <Text style={styles.eventDateText}>August 23rd, 2023</Text>
          </View>
          <View style={styles.rightAlignedContainer}>
            <View style={styles.priceContainer}>
              <Ionicons name='pricetag' size={15} color={'white'} />
              <Text style={styles.priceText}>{event.price}</Text>
            </View>
            <View style={styles.trashContainer}>
              <TouchableOpacity onPress={() => removeEventFromWishList(event)}>
                <FontAwesome5 name='trash' size={24} color='black' />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
