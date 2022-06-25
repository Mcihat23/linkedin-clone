import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBv6EvkKGnakpRNciHPkUBKJZ-xMFGSznU",
  authDomain: "linkedin-clone-2862f.firebaseapp.com",
  projectId: "linkedin-clone-2862f",
  storageBucket: "linkedin-clone-2862f.appspot.com",
  messagingSenderId: "79168149511",
  appId: "1:79168149511:web:cb4c13484bf87cfea472a2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
