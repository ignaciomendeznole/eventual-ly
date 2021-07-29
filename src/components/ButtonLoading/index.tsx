import React from 'react';
import { ActivityIndicator } from 'react-native';

interface LoadingBtnProps {
  color?: string;
}

export const LoadingBtn: React.FC<LoadingBtnProps> = ({ color }) => {
  return <ActivityIndicator color={color} />;
};
