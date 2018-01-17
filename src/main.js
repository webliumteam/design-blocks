import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyB6bf3E9m2h_mSggOPnzZOwCin-rsb0G6Q',
  authDomain: 'nebaiduzhi-3e7fa.firebaseapp.com',
  databaseURL: 'https://nebaiduzhi-3e7fa.firebaseio.com',
  projectId: 'nebaiduzhi-3e7fa',
  storageBucket: 'nebaiduzhi-3e7fa.appspot.com',
  messagingSenderId: '201685568896',
}

const app = firebase.initializeApp(config)

const provider = new firebase.auth.FacebookAuthProvider()
const userCountRef = firebase.database().ref().child('count')

const firebasLogin = () => firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    if (!result.additionalUserInfo.isNewUser) return

    const {profile} = result.additionalUserInfo
    const {uid} = result.user
    firebase.database().ref(`users/${uid}`).set(profile)
    userCountRef.transaction(value => (value || 0) + 1)
  })
  .catch(error => console.log(error))

export {
  firebasLogin,
  userCountRef,
}
