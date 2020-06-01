import * as firebase from 'firebase'

firebase.initializeApp(firebaseConfig)

var firebaseConfig = {
    apiKey: "AIzaSyDAk7jexzVPpj56o92VBbRmoYIn61XzOKk",
    authDomain: "photoapp-5e2b4.firebaseapp.com",
    databaseURL: "https://photoapp-5e2b4.firebaseio.com",
    projectId: "photoapp-5e2b4",
    storageBucket: "photoapp-5e2b4.appspot.com",
    messagingSenderId: "1020700212922",
    appId: "1:1020700212922:web:6e3d6e487187f013304c83",
    measurementId: "G-RN81VZV49X"
  };

  const database = firebase.database()

  export {database}