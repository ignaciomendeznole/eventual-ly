import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { PredictionsType } from '../../types/types';
import styles from './styles';

interface Props {
  prediction: PredictionsType;
  onSelectPrediction: any;
}

export const LocationPrediction: React.FC<Props> = ({
  prediction,
  onSelectPrediction,
}) => {
  return (
    <TouchableOpacity
      style={styles.predictionContainer}
      onPress={onSelectPrediction}
    >
      <Text style={styles.predictionText}>{prediction.description}</Text>
    </TouchableOpacity>
  );
};
