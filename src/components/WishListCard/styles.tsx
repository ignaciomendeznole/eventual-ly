import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 5,
    backgroundColor: colors.WHITE,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 25,
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  cardContainer: {
    flexDirection: 'row',
  },
  cardLayout: {
    width: 120,
    height: 130,
    backgroundColor: 'yellow',
    borderRadius: 20,
    marginRight: 15,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  eventInfoContainer: {
    justifyContent: 'center',
  },
  eventNameText: {
    fontFamily: fonts.poppinsBold,
    fontSize: 15,
  },
  eventDateText: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
    opacity: 0.4,
  },
  priceText: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 13,
    marginLeft: 5,
    color: colors.WHITE,
  },
  priceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.GREENPALETTE,
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
    flexDirection: 'row',
  },
  rightAlignedContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  trashContainer: {
    marginLeft: 30,
  },
});

export default styles;
