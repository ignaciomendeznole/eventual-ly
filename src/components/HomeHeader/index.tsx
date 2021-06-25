import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.currentLocationText}>Current Location</Text>
          <View style={styles.liveLocationContainer}>
            {/* Icono de ubicación */}
            <Ionicons name='location' size={20} color={colors.REDPALETTE} />

            {/* Texto de ubicación */}
            <Text style={styles.liveLocationText}>Córdoba, Argentina</Text>
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
