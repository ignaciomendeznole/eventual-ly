import React, { useState } from 'react';
import LottieImage from '../../../assets/Login/Lottie';
import GoogleIcon from '../../../assets/Login/Google';
import { AntDesign } from '@expo/vector-icons';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from '../../store/actions/authActions';
import { Credentials, Props } from '../../types/types';
import { AppState } from '../../store/reducers';

export const LoginScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { error, isLoading } = useSelector(
    (state: AppState) => state.authReducer
  );
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: '',
  });
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const handleChangeText = (name: string, value: string) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = () => {
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
              <View
                style={{
                  ...styles.inputForm,
                  borderColor: error ? '#eb7171' : '#b6b6b6',
                }}
              >
                <TextInput
                  placeholder='Please enter your email'
                  keyboardType='email-address'
                  autoCapitalize='none'
                  onChangeText={(text) => handleChangeText('email', text)}
                  style={styles.textInput}
                />
              </View>
              <View
                style={{
                  ...styles.inputForm,
                  borderColor: error ? '#eb7171' : '#b6b6b6',
                }}
              >
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
              <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Don't have an account? </Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('SignUpScreen')}
                >
                  <Text style={styles.signUpBtn}>Sign Up</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.logInButton}
                activeOpacity={0.8}
                onPress={handleLogin}
              >
                {isLoading ? (
                  <ActivityIndicator />
                ) : (
                  <Text style={styles.logInText}>Sign In</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
