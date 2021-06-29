import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/actions/authActions';

export const ProfileScreen = () => {
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(logOut());
  };
  return (
    <View>
      <Text style={{ marginTop: 300, alignSelf: 'center', fontSize: 30 }}>
        Profile Screen
      </Text>
      <Button title='Log Out' onPress={signOut} />
    </View>
  );
};
