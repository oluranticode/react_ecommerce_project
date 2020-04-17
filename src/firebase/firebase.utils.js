import firebase from 'firebase/app';
// when are importing the firebase utility library from the firebase/app
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAP0tUwKNvvLk680yaDx0hJ5CJpS4jpbxk",
    authDomain: "shop-db-b3e83.firebaseapp.com",
    databaseURL: "https://shop-db-b3e83.firebaseio.com",
    projectId: "shop-db-b3e83",
    storageBucket: "shop-db-b3e83.appspot.com",
    messagingSenderId: "612443380572",
    appId: "1:612443380572:web:2878efd28650f6a4fdff99",
    measurementId: "G-6XSXSPPVQT"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get(); 

    console.log(snapShot);

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // now to set google authentication utility
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({  prompt: 'select_account' });
  export const signInwithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;