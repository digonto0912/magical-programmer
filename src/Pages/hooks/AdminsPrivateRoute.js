import React from 'react';
import UseAuth from "./UseAuth";
import { Navigate, Outlet } from 'react-router-dom';

const AdminsPrivateRoute = ({children}) => {
    const {email} = UseAuth();
    console.log(email);
    
    return (email === "fardulislamdigonto799@gmail.com") ? children : <Navigate to="/" /> ;

};

export default AdminsPrivateRoute;