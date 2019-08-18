import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcJ6NNgkA1NRbao7yzY9jm3Dec4MxBdAk",
  authDomain: "revents-249923.firebaseapp.com",
  databaseURL: "https://revents-249923.firebaseio.com",
  projectId: "revents-249923",
  storageBucket: "",
  messagingSenderId: "1071670780261",
  appId: "1:1071670780261:web:4bdfa17d6036d100"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
