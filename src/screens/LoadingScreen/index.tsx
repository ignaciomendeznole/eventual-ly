import React from 'react';
import styles from './styles';
import { View } from 'react-native';
import { AnimatedLoading } from '../../components/LoadingAnimated';

export const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <AnimatedLoading />
    </View>
  );
};
