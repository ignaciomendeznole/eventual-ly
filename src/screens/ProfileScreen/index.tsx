import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

export const ProfileScreen: React.FC = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(signOut());
  };
  return (
    <View>
      <Text style={{ marginTop: 300, alignSelf: 'center', fontSize: 30 }}>
        Profile Screen
      </Text>
      <Button title='Log Out' onPress={logOut} />
    </View>
  );
};
