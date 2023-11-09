import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SubmittedTableData = ({ tableData }) => {
    const { title, name, marks, pdf } = tableData;

    const handleGiveMark = () => {
        document.getElementById('my_modal_4').showModal()
    }

    const navigate = useNavigate();





    const handleGivenMark = e => {
        e.preventDefault()
        const form = e.target;
        const status = 'Completed';
        const givenMark = form.mark.value;
        const feedback = form.feedback.value;
        const submittedAssignment = {
            marks, status, givenMark, feedback
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
                        text: 'Mark Given Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    navigate("/submittedassignments");
                }
            })




    }

    return (
        <tr className="hover">
            <td>
                {title}
            </td>
            <td>
                {name}
            </td>
            <td>
                {marks}
            </td>
            <td>
                <button onClick={handleGiveMark} className="btn btn-outline btn-primary overflow-hidden transition-all hover:scale-105  hover:shadow-2xl btn-xs">Give Mark</button>
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box flex flex-col justify-center space-y-6">
                        <h3 className="font-bold text-center text-lg">Give Marks To Your Friend's Assignment</h3>
                        <button className="btn btn-outline btn-primary overflow-hidden transition-all hover:scale-105  hover:shadow-2xl btn-sm">Preview</button>

                        <form onSubmit={handleGivenMark} className="flex flex-col justify-center gap-6">
                            <input type="text" placeholder="Feedback" name="feedback" id="" className="border-2 py-6 border-black text-center" />
                            <div className="flex justify-center gap-6">
                                <input type="text" placeholder="mark" name="mark" id="" className="w-24 border-2 border-black text-center" />
                                <button type="submit" className="w-24 btn btn-primary overflow-hidden transition-all hover:scale-105  hover:shadow-2xl btn-xs">Give Mark</button>
                            </div>
                        </form>
                        <form method="dialog" className="flex justify-center">
                            <button className="w-24 btn btn-outline btn-primary overflow-hidden transition-all hover:scale-105  hover:shadow-2xl btn-xs">Close</button>
                        </form>
                    </div>
                </dialog>
            </td>
        </tr>
    );
};

export default SubmittedTableData;