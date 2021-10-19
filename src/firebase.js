import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDYiwUrrR2nPwegBNJBfSTYZKqLunJGCNQ",
  authDomain: "nahuel-ecommerce.firebaseapp.com",
  projectId: "nahuel-ecommerce",
  storageBucket: "nahuel-ecommerce.appspot.com",
  messagingSenderId: "98107000410",
  appId: "1:98107000410:web:bf2e55afa717866bb6ba63"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;