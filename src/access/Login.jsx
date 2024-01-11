import img from '../assets/images/login/login.svg'
const Login = () => {
    return (
        <div className="hero min-h-screen mt-12">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2">
                    <img src={img} alt="login image" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
                    <form  className="card-body">
                        <h1 className="text-4xl text-center text-[#FF3811] font-semibold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn text-white bg-[#FF3811] hover:bg-[#ff5411f1]" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;