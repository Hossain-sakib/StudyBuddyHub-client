import { useContext, useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";


const SignIn = () => {
    const [signInError, setSignInError] = useState('');
    const [success, setSuccess] = useState('');

    const { signIn, googleSignIn } = useContext(AuthContext);

    
    const location = useLocation();
    const navigate = useNavigate();
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(result => {
                setSuccess("User logged in successfully.");
                const signedInUser = result.user;
                console.log(signedInUser);
                const user = { email };
                console.log(user);
                axios.post('https://study-buddy-hub-server.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            navigate(location?.state ? location.state : '/');
                        }
                    })

            })
            .catch(error => {
                console.error(error);
                setSignInError(error.message);

            })

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate("/");
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <img src="https://i.ibb.co/bHhPJtW/registration.jpg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl text-center pt-4 font-bold">Sign In Now!</h1>
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-outline btn-primary overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">Sign In</button>
                            </div>
                        </form>
                        {
                            signInError && <p className="text-sm text-center text-red-600 p-4">{signInError}</p>
                        }
                        {
                            success && <p className="text-sm text-center text-green-600">{success}</p>
                        }
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
                            <button onClick={handleGoogleSignIn}
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