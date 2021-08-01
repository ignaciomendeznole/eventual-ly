import React from 'react';
import LottieView from 'lottie-react-native';
import styles from './styles';

export const LoadingIndicator: React.FC = () => {
  return (
    <LottieView
      source={require('../../../assets/loading-location.json')}
      style={styles.loading}
      autoPlay
      loop
    />
  );
};
