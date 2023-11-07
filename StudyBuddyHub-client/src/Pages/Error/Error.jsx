import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center hero min-h-screen bg-base-200">
            <img src="https://i.ibb.co/NS7rHFb/err-1.jpg" alt="" />
            <h1 className="text-2xl underline text-black overflow-hidden transition-all hover:scale-105  hover:shadow-2xl ">Go back to <Link to="/">Homepage</Link></h1>
        </div>
    );
};

export default Error;