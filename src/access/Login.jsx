import { Link } from 'react-router-dom';
import img from '../assets/images/login/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const Login = () => {
 const {signIn} = useContext(AuthContext);

 const [success, setSuccess] = useState('');
 const [error, setError] = useState('');

    const handleLogin = event =>{
        event.preventDefault();
       const form = event.target;
       const email = form.email.value;
       const password = form.password.value;

       signIn(email, password)
       .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess('User has been successfully logged in.');
        setError('');
        form.reset();
       })
       .catch(error => {
        setError(error.message);
        setSuccess('');
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
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl ">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <p className='text-zinc-600 font-semibold'><small>Forget password? Please <button className='text-blue-600 underline'>Reset Password</button> </small> </p>
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
                    <p className='my-5 text-center'>Don&apos;t Have An Account? Please <Link to="/register" className="text-[#FF3811] underline">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;