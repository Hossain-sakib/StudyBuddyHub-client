import { useLoaderData } from "react-router-dom";

const ViewAssignment = () => {
    const assignment = useLoaderData();
    const { thumbnailURL, title, description, _id, difficultyLevel, marks } = assignment || {};
    console.log(assignment);
    return (
        <div className="hero min-h-screen bg-base-200 my-6">
            <div className="hero-content flex-col lg:flex-row-reverse border-2 border-black">
                <img src={thumbnailURL} alt={title} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <div className="badge badge-secondary badge-outline">{difficultyLevel}</div>
                    <h1 className="text-xl font-bold">Marks: {marks}</h1>
                    <p className="py-6">{description}</p>
                    <button className="btn btn-primary overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">Take Assignment</button>
                </div>
            </div>
        </div>
    );
};

export default ViewAssignment;
