import React, { useEffect, useState } from 'react';
import LottieImage from '../../../assets/Login/Lottie';
import GoogleIcon from '../../../assets/Login/Google';
import * as GoogleSignin from 'expo-google-sign-in';
import { AntDesign } from '@expo/vector-icons';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from '../../store/actions/authActions';

export type Credentials = {
  email: string;
  password: string;
};

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: any) => state.authReducer);
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: '',
  });
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const handleChangeText = (name: string, value: string) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = () => {
    // dispatch(startLoginEmailPassword(credentials.email, credentials.password));
    dispatch(startLoginEmailPassword(credentials.email, credentials.password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
      >
        <View style={styles.container}>
          <View>
            <View style={styles.lottieContainer}>
              <LottieImage />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>
                Don't ever miss out on anything (again).
              </Text>
            </View>
            <TouchableOpacity
              style={styles.googleButtonContainer}
              activeOpacity={0.8}
              onPress={handleGoogleLogin}
            >
              <GoogleIcon />
              <Text style={styles.googleSignText}>Sign in with Google</Text>
            </TouchableOpacity>
            <View style={styles.separator}>
              <View style={styles.lineStyle} />
              <Text style={styles.separatorText}>Or</Text>
              <View style={styles.lineStyle} />
            </View>

            <View style={styles.formContainer}>
              <View style={styles.inputForm}>
                <TextInput
                  placeholder='Please enter your email'
                  autoCapitalize='none'
                  onChangeText={(text) => handleChangeText('email', text)}
                  style={styles.textInput}
                />
              </View>
              <View style={styles.inputForm}>
                <TextInput
                  placeholder='Please enter your password'
                  secureTextEntry={passwordVisible ? false : true}
                  autoCapitalize='none'
                  onChangeText={(text) => handleChangeText('password', text)}
                  style={styles.textInput}
                />
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                >
                  <AntDesign
                    name={passwordVisible ? 'eye' : 'eyeo'}
                    size={24}
                    color='black'
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.logInButton}
                activeOpacity={0.8}
                onPress={handleLogin}
              >
                <Text style={styles.logInText}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
