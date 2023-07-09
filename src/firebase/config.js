import firebase from 'firebase'
import 'firebase/auth';
import 'firebase/firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6AzYu4wj_BGtGl9FJP-rBkBXfhaOFGVw",
    authDomain: "netflix-clone-2d511.firebaseapp.com",
    projectId: "netflix-clone-2d511",
    storageBucket: "netflix-clone-2d511.appspot.com",
    messagingSenderId: "254405265358",
    appId: "1:254405265358:web:73e94243904c5c78de4d9f",
    measurementId: "G-07BV09QCRW"
  };
  export default firebase.initializeApp(firebaseConfig)