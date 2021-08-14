import { Platform, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
  },
  titleContainer: {
    paddingHorizontal: 15,
    marginHorizontal: 15,
  },
  companyTitle: {
    fontFamily: fonts.poppinsBold,
    fontSize: 25,
    opacity: 0.3,
  },
  screenTitle: {
    fontFamily: fonts.poppinsBold,
    fontSize: 36,
  },
  screenDescription: {
    fontFamily: fonts.poppinsBold,
    fontSize: 15,
    opacity: 0.3,
    marginTop: 5,
  },
  formContainer: {
    marginTop: 20,
    justifyContent: 'center',
  },
  textInput: {
    fontFamily: fonts.poppinsRegular,
    height: 50,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#b6b6b6',
    backgroundColor: colors.GRAY,
  },
  uploadPhotoButton: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 18,
    backgroundColor: colors.GREENPALETTE,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonText: {
    fontFamily: fonts.poppinsBold,
    fontSize: 15,
    color: colors.WHITE,
  },
  topInputFieldsContainer: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  eventNameInput: {
    width: 180,
    marginRight: 10,
  },
  eventDateInput: {
    width: 150,
    marginRight: 20,

    alignItems: Platform.OS === 'android' ? 'center' : 'stretch',

    justifyContent: 'center',
  },
  locationInputContainer: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  predictionsContainer: {
    marginTop: 15,
    borderRadius: 15,
  },
  predictionSeparator: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    opacity: 0.3,
    borderRadius: 15,
  },
  imageContainer: {
    alignItems: 'center',
    marginHorizontal: 15,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 170,
    borderRadius: 15,
  },
  selectedLocationContainer: {
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: colors.GRAY,
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  locationText: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 15,
  },
  locationIndicator: {
    fontFamily: fonts.poppinsBold,
    fontSize: 15,
  },
  priceInputContainer: {
    fontFamily: fonts.poppinsRegular,
    height: 50,
    marginHorizontal: 25,
    paddingHorizontal: 20,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#b6b6b6',
    backgroundColor: colors.GRAY,
  },
  plusIcon: {
    position: 'absolute',
    right: 50,
    top: -120,
  },
  chooseDateText: {
    color: colors.GREENPALETTE,
    fontFamily: fonts.poppinsBold,
    fontSize: 15,
    marginTop: 7,
  },
});

export default styles;
