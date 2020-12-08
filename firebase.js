import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDrO9aQYeQoOI0M7jdqeaExNjjp_gaj3rw",
    authDomain: "whatsapp-8723c.firebaseapp.com",
    databaseURL: "https://whatsapp-8723c.firebaseio.com",
    projectId: "whatsapp-8723c",
    storageBucket: "whatsapp-8723c.appspot.com",
    messagingSenderId: "847532852983",
    appId: "1:847532852983:web:bae21586d27486fa9a35f2",
    measurementId: "G-EBKVBB698E"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db };
export { auth, provider };