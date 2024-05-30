import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth"
import firebaseApp from "./firebase.config"

const auth = getAuth(firebaseApp)
auth.language = "it"
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const twitterProvider = new TwitterAuthProvider()

const extractAllInfoFromOAuthLogin = (provider, user) => {
  
  if(provider == "google"){

  } else if(provider == "github"){

  } else if(provider == "twitter"){

  }
}

export const handleGoogleLogin = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      const user = result.user
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      const email = error.customData.email
      const credential = GoogleAuthProvider.credentialFromError(error)
    })
}

export const handleGithubLogin = () => {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result)
      const token = credential.accessToken

      // The signed-in user info.
      const user = result.user
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.customData.email
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error)
      // ...
    })
}

export const handleTwitterLogin = () => {
  //Important - Before you add Twitter you will need to have API Key, API Secret and will have to add URL Callback in Twitter App setting.
  // https://firebase.google.com/docs/auth/web/twitter-login
  signInWithPopup(auth, twitterProvider)
    .then((result) => {
      const credential = TwitterAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      const secret = credential.secret
      const user = result.user
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      const email = error.customData.email
      const credential = TwitterAuthProvider.credentialFromError(error)
    })
}

export const handleEmailandPasswordSignUp = async (email, password) => {
  try {
    // create a new user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)

    // Pull out user's data from the userCredential property
    const user = userCredential.user
    const data = {emailId: email, password: password}
    fetch("http://localhost:3000/User/SignUp", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data) })
      .then((data) => data.json())
      .then((result) => {
        console.log("Result:", result)
        if (result.acknowledged) {
          alert("User Sign Up Successfully")
        } else {
          alert("Sign Up Failed. Try again later.")
        }
      })
  } catch (err) {
    // Handle errors here
    const errorMessage = err.message
    const errorCode = err.code
  }
}

export const handleEmailandPasswordLogin = async (email, password, callback) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return true
    })
    .catch((err) => {
      console.log(err.code)
      console.log(err.message)
    })
}

export const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    })
}
