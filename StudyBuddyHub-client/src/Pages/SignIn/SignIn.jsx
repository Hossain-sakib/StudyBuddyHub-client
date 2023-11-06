import { AiFillGoogleCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const SignIn = () => {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <img src="https://i.ibb.co/bHhPJtW/registration.jpg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl text-center pt-4 font-bold">Sign In Now!</h1>
                        <form className="card-body">
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
                                <button className="btn btn-outline btn-primary">Sign In</button>
                            </div>
                        </form>
                        <p className="text-center text-sm">
                            Do not have an account ?{' '}
                            <NavLink
                                to="/signup"
                                className="text-primary font-bold hover:underline cursor-pointer "
                            >
                                Sign Up
                            </NavLink>
                        </p>
                        <div className="divider ">Or, Continue With</div>
                        <div className="flex justify-center pb-4">
                            <button
                                type="button"
                                className="btn btn-outline btn-circle btn-primary cursor-pointer "
                            >
                                <AiFillGoogleCircle className="w-8 h-8" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;