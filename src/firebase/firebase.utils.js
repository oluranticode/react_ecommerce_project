import firebase from 'firebase/app';
// when are importing the firebase utility library from the firebase/app
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyABVanckDctzRB-OncrStsaXfryXi3QvTo",
    authDomain: "oludb-c7735.firebaseapp.com",
    databaseURL: "https://oludb-c7735.firebaseio.com",
    projectId: "oludb-c7735",
    storageBucket: "oludb-c7735.appspot.com",
    messagingSenderId: "31728363680",
    appId: "1:31728363680:web:b87538ba4517b2a5a6c1c5",
    measurementId: "G-ZZ1KG6324W"
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