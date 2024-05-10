import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBjHbRo00Bs2jSS9PY8viFaP8Bdg67aBmM",
  authDomain: "job-posting-app-311e2.firebaseapp.com",
  projectId: "job-posting-app-311e2",
  storageBucket: "job-posting-app-311e2.appspot.com",
  messagingSenderId: "548439325471",
  appId: "1:548439325471:web:bfe3462d34135996700e2a"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp