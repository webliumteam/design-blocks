import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyB38AxG5lKznD4BD0KyYfuv_9bzL0UfNmA',
  authDomain: 'weblium-test-90a10.firebaseapp.com',
  databaseURL: 'https://weblium-test-90a10.firebaseio.com',
  projectId: 'weblium-test-90a10',
  storageBucket: 'weblium-test-90a10.appspot.com',
  messagingSenderId: '57590192789',
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
