import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = () => {
    const {loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner text-[#FF3811] loading-lg"></span>
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;