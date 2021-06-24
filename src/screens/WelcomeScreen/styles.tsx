import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  introText: {
    fontFamily: 'poppins-bold',
    fontSize: 30,
  },
  textContainer: {
    justifyContent: 'center',
    marginTop: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 70,
    backgroundColor: '#000',
    paddingVertical: 10,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,

    elevation: 10,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'poppins-regular',
    fontSize: 24,
  },
});

export default styles;
