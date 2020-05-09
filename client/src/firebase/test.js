import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

// Getting selected user value from firestore
firestore.collection('users').doc('iQDYm1TelA2NsTW5Slll').collection('cartItems').doc('Lp08SfSXBQVjyf3UZQVU')
firestore.doc('users/iQDYm1TelA2NsTW5Slll/cartItems/Lp08SfSXBQVjyf3UZQVU')
firestore.collection('/users/iQDYm1TelA2NsTW5Slll/cartItems')