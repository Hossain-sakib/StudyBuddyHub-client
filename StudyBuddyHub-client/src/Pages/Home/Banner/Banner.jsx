
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <div className="py-6 space-y-8 bg-base-200 mt-6">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="flex-1 p-6 space-y-8">
                    <h1 className="text-4xl font-bold">Empower Your Learning Journey</h1>
                    <p className="text-sm">
                        Welcome to Study Buddy Hub - Your Gateway to Collaborative Learning,
                        where you can connect, study, and achieve your academic goals with your
                        friends. Join us and take your learning to the next level!
                    </p>
                    <div className="flex justify-start">
                        <Link to='/createassignment'> <button className="btn btn-primary rounded-full overflow-hidden transition-all hover:scale-105  hover:shadow-2xl "><AiOutlinePlus></AiOutlinePlus>Create Assignment</button></Link>
                    </div>
                </div>
                <div className="flex-1 p-6">
                    <img src="https://i.ibb.co/x6W9FBs/banner-image-1.jpg" alt="" />
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between">
                <div className="flex-1 p-6 space-y-8">
                    <h1 className="text-4xl font-bold">Unleash the Power of Group Study</h1>
                    <p className="text-sm">
                        Study Buddy Hub: Where Learning Meets Teamwork! Connect with your
                        friends, create assignments, and master your subjects together. Join
                        us, and let's ace those exams!
                    </p>
                    <div className=" flex justify-end">
                        <button className="btn btn-primary flex justify-end rounded-full overflow-hidden transition-all hover:scale-105  hover:shadow-2xl"><AiOutlinePlus></AiOutlinePlus>Take An Assignment</button>
                    </div>
                </div>
                <div className="flex-1 p-6">
                    <img src="https://i.ibb.co/BtQY37V/banner-2.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;