import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCTWKj0Fr4X1u0HjlGEvnpgLZaSwSTIEaI',
  authDomain: 'store-db-59565.firebaseapp.com',
  databaseURL: 'https://store-db-59565.firebaseio.com',
  projectId: 'store-db-59565',
  storageBucket: '',
  messagingSenderId: '243439787375',
  appId: '1:243439787375:web:acba7839367727a6'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
