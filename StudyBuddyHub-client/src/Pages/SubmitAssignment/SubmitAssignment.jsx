import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const SubmitAssignment = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const assignmentData = useLoaderData();
    const {  title, marks } = assignmentData || {};

    const handleSubmitAssignment = e => {
        e.preventDefault()
        const form = e.target;
        const pdf = form.pdf.value;
        const note = form.note.value;
        const email = user.email;
        const submittedAssignment = {
            pdf, note, email,title,marks
        }
        console.log(submittedAssignment);

        fetch('http://localhost:5000/submittedassignments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submittedAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Assignment Submitted Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    navigate("/allassignments");
                }
            })




    }
    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Submit Your assignment Here!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmitAssignment} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Pdf. Link</span>
                            </label>
                            <input type="text" name="pdf" placeholder="Pdf.link" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Write A Short Note</span>
                            </label>
                            <input type="text" name="note" placeholder="Short note" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SubmitAssignment;