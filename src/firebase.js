import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDWMboMyL2WY5EaRRpRMALCtDug5VT7D8A",
    authDomain: "react-blog-app-d2acf.firebaseapp.com",
    projectId: "react-blog-app-d2acf",
    storageBucket: "react-blog-app-d2acf.appspot.com",
    messagingSenderId: "561952848178",
    appId: "1:561952848178:web:27f008fef3de35edaa3f2b"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };