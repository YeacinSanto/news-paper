import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/LoadingSpin';
import LoadingSpin from '../Pages/LoadingSpin';

const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    
    const location = useLocation();
    

    if(loading){
        return LoadingSpin
    }
    
    if(user && user?.email){
         return children;
    }
    return <Navigate state={location.pathname} to="auth/login"></Navigate>
};

export default PrivateRouter;