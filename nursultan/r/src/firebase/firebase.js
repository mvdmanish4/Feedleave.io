// import firebase from 'firebase'

// const config = { apiKey: 'AIzaSyCPMfH7-aMGkbqQ2JBnLy-wtkSchLEWZco', authDomain: 'test-a8238.firebaseapp.com', databaseURL: 'https://test-a8238.firebaseio.com', projectId: 'test-a8238', storageBucket: 'test-a8238.appspot.com', messagingSenderId: '726588024637'
// }
// const fire = firebase.initializeApp(config)
// export default fire
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const prodConfig = {
  apiKey: 'AIzaSyCPMfH7-aMGkbqQ2JBnLy-wtkSchLEWZco',
  authDomain: 'test-a8238.firebaseapp.com',
  databaseURL: 'https://test-a8238.firebaseio.com',
  projectId: 'test-a8238',
  storageBucket: 'test-a8238.appspot.com',
  messagingSenderId: '726588024637'
}

const devConfig = {
  apiKey: 'AIzaSyCPMfH7-aMGkbqQ2JBnLy-wtkSchLEWZco',
  authDomain: 'test-a8238.firebaseapp.com',
  databaseURL: 'https://test-a8238.firebaseio.com',
  projectId: 'test-a8238',
  storageBucket: '',
  messagingSenderId: '726588024637'
}

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.database()
const auth = firebase.auth()

export {
  db,
  auth
}
