const firebase=require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyCaHzUUUYWnHO_T0kHNchbjuYtS278Es54",
    authDomain: "tripitinerary-ab436.firebaseapp.com",
    projectId: "tripitinerary-ab436",
    storageBucket: "tripitinerary-ab436.appspot.com",
    messagingSenderId: "1085398432176",
    appId: "1:1085398432176:web:f94414e1d9c19ae4cbbe75",
    measurementId: "G-252VPQ0HLF"
  }; 

firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
const User=db.collection("Users");
module.exports=User;