import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    const userName=useSelector((state)=>state.global.userName);
    const location = useLocation();

    

    if (userName !== undefined){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;