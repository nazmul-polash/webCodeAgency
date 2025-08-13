
import { createContext, useContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";


const AuthContext = createContext()


export const userAuth = () => {
   return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(false);
   
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


   const value = {user, signupWithEmail,loginWithEmail, googleLogin}
   return (
      <AuthContext.Provider value={value}>
         {!loading && children}
      </AuthContext.Provider>
   )
}

export default AuthProvider;