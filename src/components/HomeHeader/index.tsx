import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { Result } from '../../types/GooglePlaces';
import { GeocodingResponse } from '../../types/geocoding';

interface Props {
  currentLocation: GeocodingResponse;
}

export const HomeHeader: React.FC<Props> = ({ currentLocation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.currentLocationText}>Current Location</Text>
          <View style={styles.liveLocationContainer}>
            {/* Icono de ubicación */}
            <Ionicons name='location' size={20} color={colors.REDPALETTE} />

            {/* Texto de ubicación */}

            {currentLocation && (
              <Text style={styles.liveLocationText}>
                {currentLocation.results[0].address_components[2].long_name},{' '}
                {currentLocation.results[0].address_components[5].long_name}
              </Text>
            )}
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.75}>
          <View style={styles.imageContainer}>
            {/* Imagen de perfil del usuario */}
            <Image
              source={{
                uri: 'https://www.pngfind.com/pngs/m/4-48198_business-man-business-man-face-png-transparent-png.png',
              }}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
