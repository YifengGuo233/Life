 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCqgktDPCBiOLMauTrHZXUu-Z7wSomaV3E",
    authDomain: "lifeisshort-275bf.firebaseapp.com",
    databaseURL: "https://lifeisshort-275bf.firebaseio.com",
    projectId: "lifeisshort-275bf",
    storageBucket: "lifeisshort-275bf.appspot.com",
    messagingSenderId: "894172310680",
    appId: "1:894172310680:web:8733c85562041ca992b4ed",
    measurementId: "G-5T1EELFDEF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();