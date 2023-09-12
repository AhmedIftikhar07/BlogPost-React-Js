// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore ,collection} from "firebase/firestore";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "blogpost-27634.firebaseapp.com",
  projectId: "blogpost-27634",
  storageBucket: "blogpost-27634.appspot.com",
  messagingSenderId: "684828251865",
  appId: "1:684828251865:web:904f684adff5fb1cc890c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const BlogsRef = collection(db , "Blogs")
export const CommentsRef = collection(db , "Comments")
export const UserCollection = collection(db , "Users")
export const storage = getStorage();
export const database = getAuth(app)
export default app;



export const userToJson = localStorage.getItem('user');
export const userr = JSON.parse(userToJson);
