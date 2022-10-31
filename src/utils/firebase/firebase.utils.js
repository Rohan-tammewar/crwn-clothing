//Since there is multiple app in firestore
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBAtbBl2TMGXpVYmGqAYiJ7jRzaiM_0szQ',
  authDomain: 'crwn-clothing-db-2c053.firebaseapp.com',
  projectId: 'crwn-clothing-db-2c053',
  storageBucket: 'crwn-clothing-db-2c053.appspot.com',
  messagingSenderId: '612383027812',
  appId: '1:612383027812:web:6cefba5ec3fcb35943a571',
}

const firebaseApp = initializeApp(firebaseConfig)
const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
})
// Initialize Firebase
export const db = getFirestore()

export const auth = getAuth()

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapShot = await getDocs(q)
  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const { items, title } = docSnapShot.data()
    acc[title.toLowerCase()] = items
    return acc
  }, {})

  return categoryMap
}

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

// Creating the user document in firestore after authentication
export const createUserDocumentFromAuth = async function (
  user,
  additionalinformaion = {},
) {
  //Getting th document reference of the paticular user document instance
  const userDocRef = doc(db, 'users', user.uid) //this function creates a document if it is not there

  //To check if the user actually exists in db we take a snapshot which gives an object and on that object we call method exists to check if user exist
  const userSnapshot = await getDoc(userDocRef)

  // creating user if does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = user
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalinformaion,
      })
    } catch (error) {
      console.error(
        `Could not create users document for ${displayName} Reason: ${error.message}`,
      )
    }
  }
  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => {
  return await signOut(auth)
}

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback)
