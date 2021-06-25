import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    marginBottom: 15,
    marginTop: 10,
  },
  imageBackground: {
    height: 300,
    opacity: 0.9,
    width: 270,
    paddingHorizontal: 15,
    paddingVertical: 24,
  },
  image: {
    borderRadius: 15,
  },
  textStyle: {
    fontSize: 22,
    color: colors.WHITE,
    fontFamily: fonts.poppinsBold,
  },
  dateContainer: {
    marginBottom: 15,
  },
  locationContainer: {
    marginBottom: 35,
  },
  regionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  assistantsTextContainer: {
    alignItems: 'center',
  },
  assistantsText: {
    fontSize: 18,
    fontFamily: fonts.poppinsBold,
    marginLeft: 15,
    marginRight: 25,
  },
  assistantsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: -5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  moreAssistants: {
    backgroundColor: colors.BLACK,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  moreAssistantsText: {
    color: colors.WHITE,
    fontFamily: fonts.poppinsRegular,
    fontSize: 10,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  bottomCardContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  profileImages: {
    height: 30,
    width: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.WHITE,
  },
});

export default styles;
