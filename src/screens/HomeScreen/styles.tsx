import { Platform, StyleSheet } from 'react-native';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 60 : 20,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 15,
  },
  subtitle: {
    fontSize: 25,
    fontFamily: fonts.poppinsBold,
  },
  plusIcon: {
    marginLeft: 140,
  },
  titleContainer: {
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: fonts.poppinsBold,
    fontSize: 15,
  },
});

export default styles;
