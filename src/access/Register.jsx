import { Link } from 'react-router-dom';
import img from '../assets/images/login/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
       

        if(!/(?=.*[!@#$%&*])/.test(password)){
            setError('Use at least a special character(!,@,$,%,& or *) in your password.');
            return;
        }
        else if(password.length < 6){
            setError('Password should be at least 6 character.');
            return ;
        }

        createUser(email, password)
        .then(result => {
            const newUser = result.user;
            console.log(newUser);
            setSuccess(`${name}, Your Account has been successfully created.`);
            setError('');
            form.reset();

        })
        .catch(error => {
            console.log(error.message);
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
                <form onSubmit={handleRegister} className="card-body">
                    <h1 className="text-4xl text-center text-[#FF3811] font-semibold">Sign Up</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        
                    </div>
                    <div>
                        <p className='text-success '>{success}</p>
                        <p className='text-error'>{error}</p>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn text-white bg-[#FF3811] hover:bg-[#ff5411f1]" type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className='my-5 text-center'>Already Have An Account? Please <Link to="/login" className="text-[#FF3811] underline">Login</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Register;