import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';


const SubmittedTableData = ({ tableData }) => {
    const { title, name, marks, _id, pdf } = tableData;

    const handleGiveMark = () => {
        document.getElementById('my_modal_4').showModal();
    }

    const handlePreview = () => {
        document.getElementById('my_modal_1').showModal();
    }

    const navigate = useNavigate();

    const handleGivenMark = (e) => {
        e.preventDefault();
        const form = e.target;
        const status = 'Completed';
        const givenMark = form.mark.value;
        const feedback = form.feedback.value;
        const markAssignment = {
            status,
            givenMark,
            feedback,
        };

        console.log(markAssignment);

        fetch(`https://study-buddy-hub-server.vercel.app/submittedassignments/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(markAssignment),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Mark Given Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                    });
                    navigate('/submittedassignment');
                }
            });
    };

    return (
        <tr className="hover">
            <td>{title}</td>
            <td>{name}</td>
            <td>{marks}</td>
            <td>
                <button
                    onClick={handleGiveMark}
                    className="btn btn-outline btn-primary overflow-hidden transition-all hover:scale-105  hover:shadow-2xl btn-xs"
                >
                    Give Mark
                </button>
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box flex flex-col justify-center space-y-6">
                        <h3 className="font-bold text-center text-lg">Give Marks To Your Friend's Assignment</h3>
                        <button
                            onClick={handlePreview}
                            className="btn btn-outline btn-primary overflow-hidden transition-all hover:scale-105  hover:shadow-2xl btn-sm"
                        >
                            Preview
                        </button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <iframe
                                    src={pdf}
                                    title="Preview"
                                    width="100%"
                                    height="500px"
                                />
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </dialog>

                        <form
                            onSubmit={handleGivenMark}
                            className="flex flex-col justify-center gap-6"
                        >
                            <input
                                type="text"
                                placeholder="Feedback"
                                name="feedback"
                                id=""
                                className="border-2 py-6 border-black text-center"
                            />
                            <div className="flex justify-center gap-6">
                                <input
                                    type="text"
                                    placeholder="mark"
                                    name="mark"
                                    id=""
                                    className="w-24 border-2 border-black text-center"
                                />
                                <div>
                                    <button
                                        type="submit"
                                        className="w-24 btn btn-primary overflow-hidden transition-all hover:scale-105  hover:shadow-2xl btn-xs"
                                    >
                                        Give Mark
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div>
                            <form method="dialog" className="flex justify-center">
                                <button
                                    className="w-24 btn btn-outline btn-primary overflow-hidden transition-all hover:scale-105  hover:shadow-2xl btn-xs"
                                >
                                    Close
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </td>
        </tr>
    );
};

SubmittedTableData.propTypes = {
    tableData: PropTypes.object
}

export default SubmittedTableData;
