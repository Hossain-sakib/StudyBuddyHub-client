import { useState } from "react";
import AssignmentsCard from "../Home/Assignments/AssignmentsCard";
import { useEffect } from "react";

const AllAssignments = () => {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        fetch('https://study-buddy-hub-server.vercel.app/assignments')
            .then((response) => response.json())
            .then((data) => setAssignments(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    return (
        <div className="flex flex-col items-center justify-center  bg-base-200 my-6  py-8 px-4 space-y-8" >
            <h1 className="text-center font-bold  text-4xl ">
                Explore All Assignments...
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {Array.isArray(assignments) && assignments.map(assignment => (
                    <AssignmentsCard key={assignment._id} assignment={assignment}></AssignmentsCard>
                ))}
            </div>
        </div>
    );
};

export default AllAssignments;