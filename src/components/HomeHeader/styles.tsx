import { StyleSheet } from 'react-native';
import fonts from '../../constants/fonts';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginTop: 7,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'white',
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
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  currentLocationText: {
    marginLeft: 10,
    fontFamily: fonts.poppinsRegular,
    color: colors.GRAYTEXT,
    fontSize: 16,
  },
  liveLocationContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  liveLocationText: {
    alignSelf: 'center',
    fontFamily: fonts.poppinsBold,
    fontSize: 16,
    paddingTop: 3,
    marginLeft: 4,
  },
  imageContainer: {
    borderRadius: 50,
    borderWidth: 5,
    borderColor: colors.WHITE,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 53,
    width: 53,
    borderRadius: 50,
  },
  loadingSpinner: {
    marginLeft: 20,
  },
});

export default styles;
