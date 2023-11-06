import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="menu p-4 w-80 min-h-full bg-base-200">
            <div className="flex flex-col gap-2">
                {/* Navbar menu content here */}
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'btn btn-primary ' : 'btn btn-ghost'
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? 'btn btn-primary ' : 'btn btn-ghost'
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? 'btn btn-primary ' : 'btn btn-ghost'
                    }
                >
                    Contact
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;