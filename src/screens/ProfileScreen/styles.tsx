import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: colors.REDPALETTE,
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    width: '40%',
    marginTop: 300,
  },
  signOut: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 15,
    color: colors.WHITE,
  },
});

export default styles;
