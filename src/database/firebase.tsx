import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAaum0dB3L4FCHcXO_j0ZFUglxniYyBKUs',
  authDomain: 'eventually-78c1f.firebaseapp.com',
  projectId: 'eventually-78c1f',
  storageBucket: 'eventually-78c1f.appspot.com',
  messagingSenderId: '810835122074',
  appId: '1:810835122074:web:daefe1f7b9d64aee714c23',
  measurementId: 'G-CE84G18LJW',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default {
  firebase,
  db,
};
