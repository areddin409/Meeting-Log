import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDjTy8MH8xAnV2vXIefQ5WNPlhWHLrgBsw',
  authDomain: 'react-spas-4a08d.firebaseapp.com',
  databaseURL: 'https://react-spas-4a08d.firebaseio.com',
  projectId: 'react-spas-4a08d',
  storageBucket: 'react-spas-4a08d.appspot.com',
  messagingSenderId: '784897261784',
  appId: '1:784897261784:web:17342bb68544c530ab97ad',
  measurementId: 'G-GZW4QSJHEY'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
