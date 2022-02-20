import React from 'react';
import Auth from "./Auth";
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { userInfo } = Auth();
    const userEmail = userInfo.email;
    return userEmail ? children : <Navigate to="/login" />;
};

export default PrivateRoute;