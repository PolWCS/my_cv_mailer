import firebase from 'firebase';
import 'firebase/storage';

require('dotenv').config();

const app = firebase.initializeApp({
  projectId: process.env.REACT_APP_PROJECTID,
  appId: process.env.REACT_APP_APPID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  locationId: process.env.REACT_APP_LOCATIONID,
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
});

export default app;