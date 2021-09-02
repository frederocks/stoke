import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyApwdB8r6wJBurx0yaPhkmVfHoSJW0AP1Y",
    authDomain: "stoke-app-1.firebaseapp.com",
    databaseURL: "https://stoke-app-1-default-rtdb.firebaseio.com",
    projectId: "stoke-app-1",
    storageBucket: "stoke-app-1.appspot.com",
    messagingSenderId: "1087145667202",
    appId: "1:1087145667202:web:be4665a4398e15ee7b629b",
    measurementId: "G-KSDLE1HTXW"
  };

  firebase.initializeApp(config);
  export default firebase;