import firebase from 'firebase'

const config = {
    apiKey: 'AIzaSyCPMfH7-aMGkbqQ2JBnLy-wtkSchLEWZco',
    authDomain: 'test-a8238.firebaseapp.com',
    databaseURL: 'https://test-a8238.firebaseio.com',
    projectId: 'test-a8238',
    storageBucket: 'test-a8238.appspot.com',
    messagingSenderId: '726588024637'
}
const fire = firebase.initializeApp(config)
export default fire