## .env.local
```js
REACT_APP_FIREBASE_API_KEY=AIzaSy2aDB8JViowv03qFixWEHa7uplgBuWJZt3T1csEd
REACT_APP_FIREBASE_AUTH_DOMAIN=app-.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=app-5835045245254
REACT_APP_FIREBASE_STORAGE_BUCKET=app-58350455345344554.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=962539345345345806500
REACT_APP_FIREBASE_APP_ID=1:962539324806500:web:202346c46bf732423471f234186c685db1
```

## firebaseConfig.js
```js
import firebase from "firebase";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
```
