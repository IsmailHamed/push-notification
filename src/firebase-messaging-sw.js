<!-- The core Firebase JS SDK is always required and must be listed first -->
importScripts("https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js")

importScripts("https://www.gstatic.com/firebasejs/7.15.0/firebase-analytics.js")
importScripts("https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js")

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
