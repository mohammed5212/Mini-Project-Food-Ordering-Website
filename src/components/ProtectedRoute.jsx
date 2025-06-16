


// import {children } from 'react';
import {useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute =({children,allowedRoles}) => {
    const {isAuthenticated,userType} = useSelector ((state) => state.auth);
    if ( ! isAuthenticated) {
        return <Navigate to = "/login" replace />
    }
    if (! allowedRoles.includes(userType)) {
        return <Navigate to = "/login" replace/>
    }
    return children;
}
export default ProtectedRoute ;
