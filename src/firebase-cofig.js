import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import 'dotenv';

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId:  process.env.projectId,
    storageBucket:  process.env.storageBucket,
    messagingSenderId:  process.env.messagingSenderId,
    appId:  process.env.appId,
    measurementId: process.env.measurementId
  };
  const app=initializeApp(firebaseConfig)
  export const auth = getAuth(app);