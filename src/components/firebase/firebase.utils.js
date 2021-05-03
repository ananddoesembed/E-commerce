import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDynApv6HgO5OTcwCtK_rNCHLKht_tQdrA",
    authDomain: "crwn-cloth-7cb7f.firebaseapp.com",
    projectId: "crwn-cloth-7cb7f",
    storageBucket: "crwn-cloth-7cb7f.appspot.com",
    messagingSenderId: "824859059483",
    appId: "1:824859059483:web:c7ef874487ff82e9f09fbe",
    measurementId: "G-PT8V3QB3GV"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore();
  export const  userProfileDodcment = async (userAuth,additionalData)=>{
    if(!userAuth){
      return 
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    console.log(!snapShot.exists)
    if(!snapShot.exists){
      const {displayName,email} = userAuth
      const createdAt = new Date()
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log(error)
      }
    }
    return userRef
  }
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle = () => {
    auth.signInWithPopup(provider)}
  export default firebase;