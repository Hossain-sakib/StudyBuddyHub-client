import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="menu p-4 w-64 min-h-full bg-base-200">
            <div className="flex flex-col gap-2">
                {/* Navbar menu content here */}
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'btn btn-primary btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl' : 'btn btn-outline btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl'
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/allassignments"
                    className={({ isActive }) =>
                        isActive ? 'btn btn-primary btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl' : 'btn btn-outline btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl'
                    }
                >
                    All Assignments
                </NavLink>
                <NavLink
                    to="/myassignments"
                    className={({ isActive }) =>
                        isActive ? 'btn btn-primary btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl' : 'btn btn-outline btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl'
                    }
                >
                    My Assignments
                </NavLink>
                <NavLink
                    to="/submittedassignment"
                    className={({ isActive }) =>
                        isActive ? 'btn btn-primary btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl' : 'btn btn-outline btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl'
                    }
                >
                    Submitted Assignment
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? 'btn btn-primary btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl' : 'btn btn-outline btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl'
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? 'btn btn-primary btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl' : 'btn btn-outline btn-sm overflow-hidden transition-all hover:scale-105  hover:shadow-2xl'
                    }
                >
                    Contact
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;