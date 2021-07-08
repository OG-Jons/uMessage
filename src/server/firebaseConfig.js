import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';


const firebaseConfig = {
  apiKey: 'AIzaSyBUWkuLQFz_hbJxQS6LsMf2o6BD417-FUM',
  authDomain: 'umessage-55d40.firebaseapp.com',
  projectId: 'umessage-55d40',
  storageBucket: 'umessage-55d40.appspot.com',
  messagingSenderId: '696598137954',
  appId: '1:696598137954:web:1a104f3b9001d59804953b',
  measurementId: 'G-Z2YMF1CXZ8'
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const analytics = firebase.analytics();


export { firebase, auth, db, analytics };
