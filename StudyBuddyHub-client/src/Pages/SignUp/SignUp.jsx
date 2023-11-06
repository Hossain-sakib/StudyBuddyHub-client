import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const SignUp = () => {
    const [signUpError, setSignUpError] = useState('');
    const [success, setSuccess] = useState('');


    const { signUp } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setSignUpError('Password should be at least 6 characters.');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setSignUpError('Required at least one uppercase character.');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setSignUpError('Required at least one lowercase character.');
            return;
        }
        else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
            setSignUpError('Required at least one special character.')
        }

        else if (!/[0-9]/.test(password)) {
            setSignUpError('Required at least one numerical character.');
            return;
        }

        setSignUpError('');
        setSuccess('');


        signUp(email, password, name, photo)
            .then(result => {
                {
                    navigate(location?.state ? location.state : '/');
                    setSuccess("User created successfully.")

                }
            })
            .catch(error => console.log(error))

    }
    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <img src="https://i.ibb.co/bHhPJtW/registration.jpg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl text-center pt-4 font-bold">Sign Up Now!</h1>
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-outline btn-primary">Sign Up</button>
                            </div>
                        </form>
                        {
                            signUpError && <p className="text-xs text-center text-red-600 p-4">{signUpError}</p>
                        }
                        {
                            success && <p className="text-xs text-center text-green-600">{success}</p>
                        }
                        <p className="text-center text-sm pb-4">
                            Already have an account ?{' '}
                            <NavLink
                                to="/signin"
                                className="text-primary font-bold hover:underline cursor-pointer "
                            >
                                Sign In
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignUp;