import { NavLink } from "react-router-dom";


const SignUp = () => {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <img src="https://i.ibb.co/bHhPJtW/registration.jpg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl text-center pt-4 font-bold">Sign Up Now!</h1>
                        <form className="card-body">
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
                                <button className="btn btn-outline btn-primary">Sign Up</button>
                            </div>
                        </form>
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