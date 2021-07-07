import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 5,
  },
  lottieContainer: {
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
  },
  textContainer: {
    paddingHorizontal: 0,
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'poppins-bold',
    fontSize: 25,
  },
  formContainer: {
    marginTop: 15,
  },
  inputForm: {
    borderWidth: 3,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logInButton: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
    backgroundColor: colors.GREENPALETTE,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  logInText: {
    fontFamily: fonts.poppinsBold,
    fontSize: 17,
    color: colors.WHITE,
  },
  textInput: {
    marginLeft: 10,
    fontFamily: fonts.poppinsRegular,
  },
  signUpContainer: {
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    fontSize: 15,
    fontFamily: fonts.poppinsRegular,
  },
  signUpBtn: {
    fontSize: 15,
    color: colors.REDPALETTE,
    fontFamily: fonts.poppinsBold,
  },
  subtitle: {
    opacity: 0.28,
    fontFamily: fonts.poppinsBold,
    fontSize: 15,
  },
});

export default styles;
