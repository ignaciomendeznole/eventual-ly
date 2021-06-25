import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  introText: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 30,
  },
  textContainer: {
    justifyContent: 'center',
    marginTop: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 70,
    backgroundColor: colors.BLACK,
    paddingVertical: 10,
    borderRadius: 10,

    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,

    elevation: 10,
  },
  buttonText: {
    color: colors.WHITE,
    fontFamily: fonts.poppinsRegular,
    fontSize: 24,
  },
});

export default styles;
