import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: 'AIzaSyAccrN7SMqRVIUkTRgEJ7t8aKwE2gkQB9Y',
   authDomain: 'ecommerce-4f5c6.firebaseapp.com',
   databaseURL: 'https://ecommerce-4f5c6.firebaseio.com',
   projectId: 'ecommerce-4f5c6',
   storageBucket: '',
   messagingSenderId: '626401234010',
   appId: '1:626401234010:web:c111ed8027f04d6a361c63'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;
   // userAuth is the user object returned by auth.SignIn or Signout
   // SignOut returns a null so we can just return
   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();
   console.log(snapShot);
   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
         });
      } catch (error) {
         console.log('error creating user', error.message);
      }
   }
   return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
