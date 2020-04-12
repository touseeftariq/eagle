import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBvxUIJF3ep2lHk_ByVqPSOJDb_PiJBJwc",
    authDomain: "touseef-eagle.firebaseapp.com",
    databaseURL: "https://touseef-eagle.firebaseio.com",
    projectId: "touseef-eagle",
    storageBucket: "touseef-eagle.appspot.com",
    messagingSenderId: "141348854918",
    appId: "1:141348854918:web:b95aae2ea1dd018d748507"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;