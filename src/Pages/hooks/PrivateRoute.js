import React from 'react';
import UseAuth from "./UseAuth";
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const {email} = UseAuth();
    console.log(email);
    
    return email ? <Outlet /> : <Navigate to="/login" /> ;

};

export default PrivateRoute;