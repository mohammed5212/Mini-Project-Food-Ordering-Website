import { Children } from 'react';
import {useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute =({Children,allowedRoles}) => {
    const {isAuthenticated,userType} = useSelector ((state) => state.auth);
    if ( ! isAuthenticated) {
        return <Navigate to = "/login" replace />
    }
    if (! allowedRoles.includes(userType)) {
        return <Navigate to = "/login" replace/>
    }
    return Children;
}
export default ProtectedRoute ;
