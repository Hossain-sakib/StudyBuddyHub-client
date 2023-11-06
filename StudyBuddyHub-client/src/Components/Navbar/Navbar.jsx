import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
    const { signout, user } = useContext(AuthContext);
    return (
        <div className="w-full navbar bg-base-200">
            <div className="flex-none lg:hidden">
                <label
                    htmlFor="my-drawer-3"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-6 h-6 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </label>
            </div>

            <div className="flex-1 text-xl font-bold text-primary">
                <Link to='/'>
                    <img className="w-16 h-16 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl" src="https://i.ibb.co/WBjtN1N/study-buddy.png" alt="" /></Link></div>
            <div className="flex-none hidden lg:block">
                <div className="flex items-center gap-2">
                    {/* Navbar menu content here */}
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                        }
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                        }
                    >
                        Services
                    </NavLink>
                </div>
            </div>
            <div>
                {user?.email ? (
                    <div className="dropdown dropdown-end ">
                        <label tabIndex={0} className="cursor-pointer">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} alt={user.displayName} />
                                </div>
                            </div>
                        </label>
                        <div
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <NavLink
                                to="/user"
                                className="px-4 py-2 hover:bg-base-300 rounded-lg"
                            >
                                Profile
                            </NavLink>
                            <NavLink
                                to="/user/orders"
                                className="px-4 py-2 hover:bg-base-300 rounded-lg"
                            >
                                Orders
                            </NavLink>

                            <div
                                onClick={signout}
                                className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg"
                            >
                                Logout
                            </div>
                        </div>
                    </div>
                ) : (
                    <NavLink
                        to="/signin"
                        className={({ isActive }) =>
                            isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                        }
                    >
                        Login
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Navbar;