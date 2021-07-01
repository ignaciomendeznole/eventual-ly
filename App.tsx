import 'react-native-gesture-handler';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/store/index';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);
  const fetchFonts = () => {
    return Font.loadAsync({
      'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
      'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    });
  };
  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => setFontsLoaded(false)}
      />
    );
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' />
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </NavigationContainer>
  );
}
