import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import TableData from "./TableData";

const MyAssignments = () => {
    const { user } = useContext(AuthContext);

    const [userData, setUserData] = useState();
    const url = `https://study-buddy-hub-server.vercel.app/submittedassignments?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [url])
    return (

        <div className="overflow-x-auto my-6">
            <table className="table">
                <thead>
                    <tr className="text-lg">
                        <th>Title</th>
                        <th>Status</th>
                        <th>Marks</th>
                        <th>Obtained</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData?.map(tableData=><TableData key={tableData._id} tableData={tableData}></TableData>)
                        
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAssignments;