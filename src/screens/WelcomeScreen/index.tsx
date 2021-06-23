import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import LottieImage from '../../../assets/WelcomeScreen/LottieImage';
import { disableOnBoarding } from '../../store/actions/authActions';
import styles from './styles';

export const WelcomeScreen = () => {
  const dispatch = useDispatch();
  const hideOnBoarding = () => {
    dispatch(disableOnBoarding());
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.introText}>
          Find new events nearby and be part of the story
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <LottieImage />
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={hideOnBoarding}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};
