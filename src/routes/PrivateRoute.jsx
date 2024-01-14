import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <div className='text-center'><span className="loading loading-spinner text-[#FF3811] loading-lg"></span></div>
    }
    if(user?.email){
        return children
    }
    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;