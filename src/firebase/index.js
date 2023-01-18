// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS27Gl2o4xFlurLLxqwiQC2NH41fWqmFQ",
  authDomain: "ecommerce-mp-3607a.firebaseapp.com",
  projectId: "ecommerce-mp-3607a",
  storageBucket: "ecommerce-mp-3607a.appspot.com",
  messagingSenderId: "718690512201",
  appId: "1:718690512201:web:f3fde7e273f919d490fe98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const createUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Errores: " + errorCode, errorMessage);
      // ..
    });
};

export const loginUser = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Errores: " + errorCode, errorMessage);
    });
};

export const userStatus = async () => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(user);
      // ...
    } else {
      // User is signed out
      // ...
      console.log("Usuario no logeado");
    }
  });
};

export const registerWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const signOutUser = async () => {
  return await signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Sesión cerrada");
    })
    .catch((error) => {
      // An error happened.
      console.log("Error al cerrar sesión: " + error);
    });
};
