import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewAssignment = () => {
    const assignment = useLoaderData();
    const { thumbnailURL, title, description, _id, difficultyLevel, marks } = assignment || {};



    const handleTakeAssignment = () => {
        fetch('http://localhost:5000/myassignment', {
            method: "POST",
            headers: {
                "content-type": 'application/json',
            },
            body: JSON.stringify(assignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.insertedId);
                if (data.insertedId) {
                    Swal.fire("Successful!", "Assignment Taken Successfully.", 'success')
                }

            })
    }




    return (
        <div className="hero min-h-screen bg-base-200 my-6">
            <div className="hero-content flex-col lg:flex-row-reverse border-2 border-black">
                <img src={thumbnailURL} alt={title} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <div className="badge badge-secondary badge-outline">{difficultyLevel}</div>
                    <h1 className="text-xl font-bold">Marks: {marks}</h1>
                    <p className="py-6">{description}</p>
                    <button onClick={handleTakeAssignment} className="btn btn-primary overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">Take Assignment</button>
                </div>
            </div>
        </div>
    );
};

export default ViewAssignment;
