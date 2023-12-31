import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {


    // const dark = () => {
    //     return document.querySelector("html").attributes['data-theme'].value = "dark"
    // }
    // const light = () => {
    //     return document.querySelector("html").attributes['data-theme'].value = "light"
    // }

    // const toggleTheme = e => {
    //     if (e.target.checked) {
    //         return dark();
    //     }
    //     return light();
    // }


    const { signout, user } = useContext(AuthContext);
    return (
        <div className="w-full navbar bg-base-200">
            <div className="flex-none lg:hidden overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">
                <label
                    htmlFor="my-drawer-3"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-6 h-6 stroke-current "
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
                <div className="flex items-center gap-4 mr-4">
                    {/* Navbar menu content here */}
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'btn btn-primary btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl' : 'btn btn-ghost btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/allassignments"
                        className={({ isActive }) =>
                            isActive ? 'btn btn-primary btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl' : 'btn btn-ghost btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl'
                        }
                    >
                        All Assignments
                    </NavLink>
                    <NavLink
                        to="/submittedassignment"
                        className={({ isActive }) =>
                            isActive ? 'btn btn-primary btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl' : 'btn btn-ghost btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl'
                        }
                    >
                        Submitted Assignment
                    </NavLink>
                    <NavLink
                        to="/myassignments"
                        className={({ isActive }) =>
                            isActive ? 'btn btn-primary btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl' : 'btn btn-ghost btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl'
                        }
                    >
                        My Assignments
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? 'btn btn-primary btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl' : 'btn btn-ghost btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl'
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? 'btn btn-primary btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl' : 'btn btn-ghost btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl'
                        }
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
            <div>
                {user?.email ? (
                    <div className="dropdown dropdown-end ">
                        <label tabIndex={0} className="cursor-pointer">
                            <div className="avatar">
                                <div className="w-10 rounded-full overflow-hidden transition-all hover:scale-105  hover:shadow-2xl ">
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
                                {user?.displayName}
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
                {/* <div className="flex px-4 py-2 ">
                                <input type="checkbox" className="toggle toggle-md border-2 " onChange={toggleTheme} />
                            </div> */}
            </div>
        </div>
    );
};

export default Navbar;