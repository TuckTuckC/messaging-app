import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD2y2i5VEA5IWJraWhKdevGgvpxGTMW-LE",
    authDomain: "messaging-4849d.firebaseapp.com",
    projectId: "messaging-4849d",
    storageBucket: "messaging-4849d.appspot.com",
    messagingSenderId: "60699150096",
    appId: "1:60699150096:web:eabf79ae97aadd03ae0795",
    measurementId: "G-BL7N5TEY2K"
});

const db = firebaseApp.firestore();

export default db;