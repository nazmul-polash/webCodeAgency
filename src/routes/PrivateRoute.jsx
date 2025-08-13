
import React from 'react'
import { Navigate } from 'react-router';
import { userAuth } from '../context/AuthContext';

function PrivateRoute({ children }) {
   const { user } = userAuth();

   return user ? children : <Navigate to="/login"/>;
}

export default PrivateRoute