
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCxjTf2WDJtGYrtcIhOi0jWkWbLUqvxOXc",
  authDomain: "tiktok-jornadadev-73cfd.firebaseapp.com",
  projectId: "tiktok-jornadadev-73cfd",
  storageBucket: "tiktok-jornadadev-73cfd.appspot.com",
  messagingSenderId: "791994336966",
  appId: "1:791994336966:web:0218ea5b96aed829d2b9c7"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;