import { StyleSheet } from 'react-native';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    marginHorizontal: 15,
  },
  textInput: {
    marginLeft: 20,
    fontFamily: fonts.poppinsRegular,
  },
});

export default styles;
