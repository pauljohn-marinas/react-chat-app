import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0TfGPcXk6RzeDDwGJvrVvE5cEmAT10DU",
  authDomain: "chat-app-a6172.firebaseapp.com",
  databaseURL: "https://chat-app-a6172.firebaseio.com",
  projectId: "chat-app-a6172",
  storageBucket: "chat-app-a6172.appspot.com",
  messagingSenderId: "141374616515",
  appId: "1:141374616515:web:19c051ae767315d47ec376",
  measurementId: "G-PJ9Z26E71Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
export default db;
