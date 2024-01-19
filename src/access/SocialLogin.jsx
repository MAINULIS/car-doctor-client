import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {signInWithGoogle, signInWithGithub} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleLoginWithGoogle = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUse = result.user;
           console.log(loggedUse);
            setSuccess('You have successfully signed in');
            setError('');
            navigate(from, {replace:true})
        })
        .catch(error => {
            setError(error.message);
        })
    }
    
    const handleLoginWithGithub = () =>{
        signInWithGithub()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('You have successfully signed in');
            setError('');
            navigate(from, {replace:true})
        })
        .catch(error => {
            setError(error.message);
        })
    }

    return (
        <div >
            <div className="text-center mt-3">
                <p className="text-success">{success}</p>
                <p className="text-error">{error}</p>
            </div>
            <div className="mt-5 flex gap-5 justify-center items-center">
            <button onClick={handleLoginWithGoogle} className="btn btn-circle btn-outline bg-slate-200  font-bold"><FcGoogle className="w-7 h-7" /></button>
            <button onClick={handleLoginWithGithub} className="btn btn-circle btn-outline bg-slate-200 text-gray-800 font-bold"> <FaGithub  className="w-7 h-7"/></button>
            </div>
        </div>
    );
};

export default SocialLogin;