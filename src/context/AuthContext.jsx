
import { createContext, useContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
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


   const value = {user, signupWithEmail}
   return (
      <AuthContext.Provider value={value}>
         {!loading && children}
      </AuthContext.Provider>
   )
}

export default AuthProvider;