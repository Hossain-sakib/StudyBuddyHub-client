import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import Footer from "../Components/Footer/Footer";


const Main = () => {
    return (



        <div className="w-full max-w-7xl mx-auto">
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-3"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <Sidebar></Sidebar>

                </div>
            </div>


        </div>
    );
};

export default Main;