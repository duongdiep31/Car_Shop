import firebase from "firebase/app"
import "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyCZ5y3zM_05iO1ov-rJFEryPV36hmjkbNg",
    authDomain: "assigment-c2775.firebaseapp.com",
    projectId: "assigment-c2775",
    storageBucket: "assigment-c2775.appspot.com",
    messagingSenderId: "297033526899",
    appId: "1:297033526899:web:4f160a349fcac5ce9e8406",
    measurementId: "G-SFJ78EEV80"
};
firebase.initializeApp(firebaseConfig)
const storage = firebase.storage();
export { firebase, storage as default }