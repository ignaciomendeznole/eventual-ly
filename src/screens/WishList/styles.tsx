import { Platform, StyleSheet } from 'react-native';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 70 : 30,
  },
  titleContainer: {
    paddingHorizontal: 15,
  },
  companyTitle: {
    fontFamily: fonts.poppinsBold,
    fontSize: 30,
    opacity: 0.3,
  },
  screenTitle: {
    fontFamily: fonts.poppinsBold,
    fontSize: 36,
  },
  emptyWishList: {
    fontSize: 25,
    fontFamily: fonts.poppinsBold,
  },
  emptyWishListContainer: {
    marginTop: 30,
    marginHorizontal: 15,
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
