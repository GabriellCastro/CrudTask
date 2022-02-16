import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// A configuração do Firebase do seu app da Web
let firebaseConfig = {
  apiKey: "AIzaSyDZMbwD3TVF3Vdbkx-zbQZj71U1vzRPAY0",
  authDomain: "task-7aac0.firebaseapp.com",
  projectId: "task-7aac0",
  storageBucket: "task-7aac0.appspot.com",
  messagingSenderId: "30425358227",
  appId: "1:30425358227:web:8c47a941132634835d9266"
};

// Inicializar o Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;
