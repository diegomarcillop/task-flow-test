import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC7K_bopkS5ivIHZJCVXGr8bPKZ6tm931k',
  projectId: 'task-flow-d59d6',
  //storageBucket: 'TU_STORAGE_BUCKET',
  appId: '1:722045220730:web:3ee87cc53ae3e432e448c3'
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
export { db }
