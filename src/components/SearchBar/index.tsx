import React from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Feather name='search' size={24} color='#c6c6c6' />
      <TextInput placeholder='Search for Events' style={styles.textInput} />
    </View>
  );
};
