import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../assets/images/login/login.svg'
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import SocialLogin from './socialLogin';
const Login = () => {
    const { signIn, resetPassword } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
  

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const emailRef = useRef();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUse = result.user;
               console.log(loggedUse);
            
                setSuccess('User has been successfully logged in.');
                setError('');
                form.reset();
                navigate(from, {replace:true})
            }) 
            .catch(error => {
                setError(error.message);
                setSuccess('');
            })
    }

    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert("Please provide your email address to reset password.")
            return;
        }
        resetPassword(email)
            .then(() => {
                alert('please check your email box.')
                setSuccess('')
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className="hero min-h-screen mt-12">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2">
                    <img src={img} alt="login image" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-4xl text-center text-[#FF3811] font-semibold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Email</span>
                            </label>
                            <input type="email" placeholder="email" ref={emailRef} name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl ">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <p className='text-zinc-600 font-semibold'><small>Forget password? Please <button onClick={handleResetPassword} className='text-blue-600 underline'>Reset Password</button> </small> </p>
                            </label>
                        </div>
                        <div>
                            <p className='text-success'>{success}</p>
                            <p className='text-error'>{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn text-white bg-[#FF3811] hover:bg-[#ff5411f1]" type="submit" value="Login" />
                        </div>
                    </form>
                    <div>
                        <h5 className='text-center text-xl font-semibold'>Or Sign In with</h5>
                        <SocialLogin></SocialLogin>
                    </div>
                    <p className='my-6 text-center'>Don&apos;t Have An Account? Please <Link to="/register" className="text-[#FF3811] underline">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;