import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use


const firebaseConfig = {
  apiKey: "AIzaSyCp_A_QjAytT5Qkrr-0ey2KHN1e7OjPRtA",
  authDomain: "flick-flare.firebaseapp.com",
  projectId: "flick-flare",
  storageBucket: "flick-flare.appspot.com",
  messagingSenderId: "276359757975",
  appId: "1:276359757975:web:df178fb6203f91eed1a9d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth