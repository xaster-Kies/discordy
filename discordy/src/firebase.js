const firebaseConfig = {
    apiKey: "AIzaSyAnM2CTCq5DSABcQbD93gkSVYTDdGZImeM",
    authDomain: "discordy-79262.firebaseapp.com",
    projectId: "discordy-79262",
    storageBucket: "discordy-79262.appspot.com",
    messagingSenderId: "232230508235",
    appId: "1:232230508235:web:b1860dd2545f47b0aaed4e",
    measurementId: "G-ESKYHTRWGL"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;