
import { useState } from "react";
import SubmittedTableData from "./SubmittedTableData";
import { useEffect } from "react";


const SubmittedAssignment = () => {
    const [userData, setUserData] = useState();
    const url = 'http://localhost:5000/submittedassignments';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [url])

    const pendingAssignments = userData?.filter((assignment) => assignment.status === 'Pending');



    return (
        <div className="overflow-x-auto my-6">
            <table className="table">
                <thead>
                    <tr className="text-lg">
                        <th>Title</th>
                        <th>Examinee name</th>
                        <th>Full Marks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pendingAssignments?.map(tableData => <SubmittedTableData key={tableData._id} tableData={tableData}></SubmittedTableData>)

                    }
                </tbody>
            </table>
        </div>
    );
};

export default SubmittedAssignment;