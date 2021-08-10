import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import styles from './styles';

export const ProfileScreen: React.FC = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(signOut());
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={logOut}>
        <Text style={styles.signOut}> Sign Out </Text>
      </TouchableOpacity>
    </View>
  );
};
