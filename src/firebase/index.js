import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp ({
  apiKey: "AIzaSyAM2Z7PZhKqU2Km1rnI8Nxb2XU_52PIuHU",
  authDomain: "livhealthify-a26b9.firebaseapp.com",
  databaseURL:"gs://livhealthify-a26b9.appspot.com",
  projectId: "livhealthify-a26b9",
  storageBucket: "livhealthify-a26b9.appspot.com",
  messagingSenderId: "703301225412",
  appId: "1:703301225412:web:9c35d84b3b70cf50487291"
});

// Firebase storage reference
const storage = getStorage(app);

export { storage };