// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDTAeTMQa1sas8Uixn2x291Cu3gZ9i07WM',
  authDomain: 'movie-list-app-3a1e8.firebaseapp.com',
  projectId: 'movie-list-app-3a1e8',
  storageBucket: 'movie-list-app-3a1e8.appspot.com',
  messagingSenderId: '652350244976',
  appId: '1:652350244976:web:369575e7bee91841778cb5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
