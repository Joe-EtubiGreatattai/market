// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDdpxB2HqjWxufh6aVpRFxxFCFVN1b5K5E',
  authDomain: 'tejomag-1866f.firebaseapp.com',
  databaseURL: 'https://tejomag-1866f.firebaseio.com',
  projectId: 'tejomag-1866f',
  storageBucket: 'tejomag-1866f.appspot.com',
  messagingSenderId: '119259371504',
  appId: '1:119259371504:android:ca0e31ae0eb9cee123ef35',
  measurementId: 'G-measurement-id',
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth };
