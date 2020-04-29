import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDfyao9utp0rJ8jvpkCJRpqfyvxSD5tV_Y",
    authDomain: "react-shop-db-be856.firebaseapp.com",
    databaseURL: "https://react-shop-db-be856.firebaseio.com",
    projectId: "react-shop-db-be856",
    storageBucket: "react-shop-db-be856.appspot.com",
    messagingSenderId: "44830034859",
    appId: "1:44830034859:web:eac024b4b19f0479d120ee",
    measurementId: "G-W8QSZHCX79"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    // If the userAuth is null return nothing
    if (!userAuth) return;

    // Else

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // To get data simply use snapshot
    const snapShot = await userRef.get();

    if (!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error) {
            console.log('error creating user data', error.message);
        }
    }

    return userRef;
  };

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
      const collectionRef = firestore.collection(collectionKey);

      const batch = firestore.batch();
      objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
      });

      return await batch.commit();
  }


  export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
        const transformedCollection = collectionsSnapshot.docs.map(docSnapshot => {
            const { title, items } = docSnapshot.data();

            return {
                routeName: encodeURI(title.toLowerCase()),
                id: docSnapshot.id,
                title,
                items
            }
        });

        return transformedCollection.reduce((accumulator, collection) => {
            accumulator[collection.title.toLowerCase()] = collection;
            return accumulator;
        }, {});
    };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  // Signin with selected account on Google
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
