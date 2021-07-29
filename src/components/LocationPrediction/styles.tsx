import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  predictionContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.GRAY,
    marginHorizontal: 15,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  predictionText: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 13,
  },
});

export default styles;
