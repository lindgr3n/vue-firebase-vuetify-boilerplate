import firebase from "firebase";
import "firebase/firestore";

const apiKey = process.env.VUE_APP_FIREBASE_KEY;
const authDomain = `${process.env.VUE_APP_FIREBASE_PROJECTID}.firebaseapp.com`;
const databaseURL = `https://${
  process.env.VUE_APP_FIREBASE_PROJECTID
}.firebaseio.com`;
const projectId = process.env.VUE_APP_FIREBASE_PROJECTID;
const storageBucket = `${process.env.VUE_APP_FIREBASE_PROJECTID}.appspot.com`;
const messagingSenderId = process.env.VUE_APP_FIREBASE_MESSAGESENDERID;

const config = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
};

firebase.initializeApp(config);

// To remove firebase warning when trying to add record
// Using Cloud Firestore
const firestore = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);

export default firebase;

export function onAuthenticationChanged() {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(
      user => {
        console.log("Authentication changed: ", user);
        resolve(user);
        return;
      },
      error => {
        console.error("Authentication error: ", error);
        reject(error);
      }
    );
  });
}

export function getUser() {
  return firebase.auth().currentUser;
}

export function signupUser({ email, password }) {
  return new Promise((resolve, reject) => {
    const createdUser = firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    createdUser
      .then(user => {
        console.log("Created user: ", user);
        resolve(user);
        return;
      })
      .catch(error => {
        console.error("Failed to create user: ", error);
        reject(error);
      });
  });
}

export function signInUser({ email, password }) {
  return new Promise((resolve, reject) => {
    const authenticatedUser = firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    authenticatedUser
      .then(user => {
        console.log("Login successfull! ", user);

        resolve(user);
        return;
      })
      .catch(error => {
        console.error("Fail to login user: ", error);

        reject(error);
      });
  });
}

const userModel = ({ user }) => {
  console.log("found email", user.email);
  return {
    firstname: "",
    lastname: "",
    email: user.email
  };
};

export function addUser(user) {
  return new Promise((resolve, reject) => {
    // Using Cloud Firestore
    firebase
      .firestore()
      .collection("users")
      .add(userModel(user))
      .then(ref => {
        console.log("Added user", ref);
      })
      .catch(error => {
        reject(error);
      });

    // Example using Realtimedatabase
    // firebase
    //   .database()
    //   .ref("users")
    //   .child(user.user.uid)
    //   .set(userModel(user))
    //   .then(data => {
    //     resolve(data);
    //     return;
    //   })
    //   .catch(error => {
    //     reject(error);
    //   });
  });
}

export function signOutUser() {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        resolve(true);
        return;
      })
      .catch(error => {
        reject(error);
      });
  });
}
