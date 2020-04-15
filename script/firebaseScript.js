// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA1unUPPxmMSwJGQ1khDiDLtxAXYElqm54",
    authDomain: "fossboy.firebaseapp.com",
    databaseURL: "https://fossboy.firebaseio.com",
    projectId: "fossboy",
    storageBucket: "fossboy.appspot.com",
    messagingSenderId: "450895180598",
    appId: "1:450895180598:web:a83726d23d7bce4845b997",
    measurementId: "G-6XXEJJYEBK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Get a reference to the database service
var database = firebase.database();

function writeUserData(userId, data) {
    firebase.database().ref('users/' + userId).set({
      feedback: data
    });
  }
