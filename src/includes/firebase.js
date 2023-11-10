import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCA0qL1zlm7oukEQDL-M4PVmmWckCsubzQ',
  authDomain: 'music-d8cb3.firebaseapp.com',
  projectId: 'music-d8cb3',
  storageBucket: 'music-d8cb3.appspot.com',
  appId: '1:56493650126:web:f1e4dc5a8036dbeaac609f'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const usersCollection = db.collection('users')

export { auth, db, usersCollection, storage }
