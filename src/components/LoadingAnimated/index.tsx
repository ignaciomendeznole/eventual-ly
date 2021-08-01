import React from 'react';
import LottieView from 'lottie-react-native';
import styles from './styles';

export const AnimatedLoading: React.FC = () => (
  <LottieView
    source={require('../../../assets/loading-animation.json')}
    autoPlay
    loop
    autoSize
    style={styles.loading}
  />
);
