// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref, update } from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCKGpz6xUMxDT9qCArLFbTqGAr482N7OPM',
  authDomain: 'filmoteka-bd182.firebaseapp.com',
  databaseURL: 'https://filmoteka-bd182-default-rtdb.firebaseio.com',
  projectId: 'filmoteka-bd182',
  storageBucket: 'filmoteka-bd182.appspot.com',
  messagingSenderId: '406390548914',
  appId: '1:406390548914:web:612eec5ff8765f1f715cab',
};

// Initialize Firebase
// const signUp = document.querySelector();
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

// sighUp.addEventListener('click', e => {
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   const username = document.getElementById('username').value;

//   createUserWithEmailAndPassword(auth, email, password)
//     .then(userCredential => {
//       // Signed in
//       const user = userCredential.user;

//       set(ref(database, 'users/' + user.uid), {
//         username: username,
//         email: email,
//       });

//       alert('user created!');
//       // ...
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;

//       alert(errorMessage);
//       // ..
//     });
// });

login.addEventListener('click', e => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;

      const dt = new Date();
      update(ref(database, 'users/' + user.uid), {
        last_login: dt,
      });

      alert('User loged in!');
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
});

const user = auth.currentUser;
onAuthStateChanged(auth, user => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    //bla bla bla
    // ...
  } else {
    // User is signed out
    // ...
    //bla bla bla
  }
});

logout.addEventListener('click', e => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      alert('user loged out');
    })
    .catch(error => {
      // An error happened.
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
});

// -- Auth with googleeeeee -- //

import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
} from 'firebase/auth';

const provider = new GoogleAuthProvider(app);
const googleBtn = document.querySelector('.google');

googleBtn.addEventListener('click', e => {
  //   signInWithRedirect(auth, provider);

  //   getRedirectResult(auth)
  //     .then(result => {
  //       // This gives you a Google Access Token. You can use it to access Google APIs.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;

  //       // The signed-in user info.
  //       const user = result.user;

  //       // name = displayName
  //       // email = email
  //       // photo = photoURL

  //       alert(user.displayName);
  //     })
  //     .catch(error => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...

  //       alert(errorMessage);
  //     });

  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      // name = displayName
      // email = email
      // photo = photoURL

      alert(user.displayName);
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      alert(errorMessage);
    });
});
