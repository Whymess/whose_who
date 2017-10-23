import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD4rhZinMNtiwXviW7I6k7omd4hulEZCw0",
    authDomain: "whosewho-fc040.firebaseapp.com",
    databaseURL: "https://whosewho-fc040.firebaseio.com",
    projectId: "whosewho-fc040",
    storageBucket: "whosewho-fc040.appspot.com",
    messagingSenderId: "835367819397"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const storage = firebase.storage();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
