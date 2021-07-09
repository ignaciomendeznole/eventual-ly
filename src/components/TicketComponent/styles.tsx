import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 5,
    backgroundColor: colors.WHITE,
    marginTop: 10,
  },
  imagePoster: {
    width: '100%',
    height: 250,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  posterText: {
    fontFamily: fonts.poppinsBold,
    fontSize: 17,
    color: colors.WHITE,
    marginBottom: 15,
  },
  image: {
    borderRadius: 15,
  },
  locationText: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 15,
    marginLeft: 5,
  },
  text: {
    fontSize: 15,
    fontFamily: fonts.poppinsRegular,
    marginLeft: 7,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  extraInformationContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  lines: {
    backgroundColor: 'black',
    opacity: 0.28,
    height: 2,
    width: 20,
    marginHorizontal: 4,
    flexDirection: 'row',
  },
  qrContainer: {
    marginHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    borderRadius: 15,
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  ticketHeaderContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});

export default styles;
