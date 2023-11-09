
import { useState } from "react";
import AssignmentsCard from "./AssignmentsCard";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const Assignments = () => {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        fetch('https://study-buddy-hub-server.vercel.app/assignments')
            .then((response) => response.json())
            .then((data) => setAssignments(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);



    return (
        <div>
            <div className="flex flex-col items-center justify-center  bg-base-200  py-8 px-4 space-y-8" >
                <h1 className="text-center font-bold  text-4xl ">
                    Explore Assignments...
                </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                    {Array.isArray(assignments.slice(0, 6)) && assignments.slice(0, 6).map(assignment => (
                        <AssignmentsCard key={assignment._id} assignment={assignment}></AssignmentsCard>
                    ))}
                </div>
                <div className="flex items-center justify-center">
                    <Link to='/allassignments'>
                        <button className="btn btn-primary overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">See All Assignments</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Assignments;