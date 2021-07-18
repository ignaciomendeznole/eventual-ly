import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  TextInput,
  StatusBar,
} from 'react-native';
import styles from './styles';
import SignUpLottie from '../../../assets/SignUpScreen/SignUpLottie';
import { Props, SignUpInformation } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { signUpAction } from '../../store/actions/authActions';
import { AppState } from '../../store/reducers';

export const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state: AppState) => state.authReducer);

  const [signUpInfo, setSignUpInfo] = useState<SignUpInformation>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChangeText = (name: string, value: string) => {
    setSignUpInfo({ ...signUpInfo, [name]: value });
  };

  const signUp = () => {
    dispatch(signUpAction(signUpInfo.email, signUpInfo.password));
    console.log(errorMessage);
  };

  return (
    <ScrollView>
      <StatusBar barStyle='light-content' />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
      >
        <View style={styles.container}>
          <View>
            <View style={styles.lottieContainer}>
              <SignUpLottie />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>Join the Eventual.ly team!</Text>
              <Text style={styles.subtitle}>
                Please enter your personal information
              </Text>
            </View>

            <View style={styles.formContainer}>
              <View
                style={{
                  ...styles.inputForm,
                  borderColor: errorMessage ? '#eb7171' : '#b6b6b6',
                }}
              >
                <TextInput
                  placeholder='First Name'
                  style={styles.textInput}
                  onChangeText={(text: string) =>
                    handleChangeText('firstName', text)
                  }
                />
              </View>
              <View
                style={{
                  ...styles.inputForm,
                  borderColor: errorMessage ? '#eb7171' : '#b6b6b6',
                }}
              >
                <TextInput
                  placeholder='Last Name'
                  style={styles.textInput}
                  onChangeText={(text: string) =>
                    handleChangeText('lastName', text)
                  }
                />
              </View>
              <View
                style={{
                  ...styles.inputForm,
                  borderColor: errorMessage ? '#eb7171' : '#b6b6b6',
                }}
              >
                <TextInput
                  placeholder='E-mail address'
                  keyboardType='email-address'
                  autoCapitalize='none'
                  onChangeText={(text: string) =>
                    handleChangeText('email', text)
                  }
                  style={styles.textInput}
                />
              </View>
              <View
                style={{
                  ...styles.inputForm,
                  borderColor: errorMessage ? '#eb7171' : '#b6b6b6',
                }}
              >
                <TextInput
                  placeholder='Password'
                  autoCapitalize='none'
                  secureTextEntry={true}
                  style={styles.textInput}
                  onChangeText={(text: string) =>
                    handleChangeText('password', text)
                  }
                />
              </View>

              <TouchableOpacity
                style={styles.logInButton}
                activeOpacity={0.8}
                onPress={signUp}
              >
                <Text style={styles.logInText}>Sign Up</Text>
              </TouchableOpacity>
              <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Already have an account? </Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('LoginScreen')}
                >
                  <Text style={styles.signUpBtn}>Sign In</Text>
                </TouchableOpacity>
              </View>
              {errorMessage ? (
                <Text style={{ alignSelf: 'center', color: 'red' }}>
                  {errorMessage}
                </Text>
              ) : null}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
