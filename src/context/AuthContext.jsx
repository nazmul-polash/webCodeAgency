
import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


const AuthContext = createContext()


export const userAuth = () => {
   return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const auth = getAuth(app);

   // sign up new user using email and password 
   const signupWithEmail = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   }

   // login with email password 
   const loginWithEmail = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
   }

   // google login 
   const googleLogin = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
   }

   // usser management 
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currenctUser) => {
         setUser(currenctUser);
         setLoading(false)
      });
      return unsubscribe;
   }, [auth])

   // log out 
   const logOut = () => {
      return signOut(auth);
   }

   const value = { user, signupWithEmail, loginWithEmail, googleLogin, logOut }

   return (
      <AuthContext.Provider value={value}>
         {!loading && children}
      </AuthContext.Provider>
   )
}

export default AuthProvider;