import { Platform, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  imageText: {
    fontFamily: fonts.poppinsBold,
    fontSize: 30,
    color: colors.WHITE,
  },
  imageTextContainer: {
    marginBottom: 50,
  },
  timeInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginBottom: 30,
  },
  dayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  timeText: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
    color: colors.WHITE,
    marginLeft: 10,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontFamily: fonts.poppinsBold,
    fontSize: 18,
  },
  description: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 13,
    marginTop: 10,
  },
  readMore: {
    color: colors.GREENPALETTE,
    fontFamily: fonts.poppinsRegular,
    fontSize: 15,
    marginTop: 7,
  },
  mapView: {
    height: 170,
    width: '100%',
    borderRadius: 40,
    marginTop: 15,
    borderWidth: 1,
    borderColor: colors.WHITE,
  },
  purchaseButton: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: colors.GREENPALETTE,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom: Platform.OS === 'android' ? 20 : 0,
  },
  purchaseText: {
    fontFamily: fonts.poppinsBold,
    fontSize: 17,
    color: colors.WHITE,
  },
});

export default styles;
