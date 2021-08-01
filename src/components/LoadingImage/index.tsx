import React from 'react';
import LottieView from 'lottie-react-native';
import styles from './styles';

export const LoadingImage = () => {
  return (
    <LottieView
      source={require('../../../assets/loading-image.json')}
      autoPlay
      loop
      style={styles.loading}
    />
  );
};
