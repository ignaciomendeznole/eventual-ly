import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 5,
  },
  lottieContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  textStyle: {
    fontFamily: 'poppins-bold',
    fontSize: 31,
  },
  googleButtonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#EAEAEA',
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
  },
  googleSignText: {
    marginLeft: 15,
    fontFamily: 'poppins-bold',
    fontSize: 17,
  },
  separator: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  lineStyle: {
    height: 2,
    width: '45%',
    backgroundColor: '#cacaca',
  },
  separatorText: {
    fontFamily: 'poppins-regular',
    fontSize: 17,
    color: '#bdbdbd',
    marginHorizontal: 8,
  },
  formContainer: {
    marginTop: 5,
  },
  inputForm: {
    borderWidth: 3,
    borderColor: '#b6b6b6',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logInButton: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#000',
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
  },
  logInText: {
    fontFamily: 'poppins-bold',
    fontSize: 17,
    color: '#fff',
  },
});

export default styles;
