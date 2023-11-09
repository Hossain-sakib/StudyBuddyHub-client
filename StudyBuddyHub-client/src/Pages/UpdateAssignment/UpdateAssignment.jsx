import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { MdAssignmentAdd } from "react-icons/md";
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const UpdateAssignment = () => {




    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);


    const handleDifficultyChange = (selectedOption) => {
        setSelectedDifficulty(selectedOption);
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const difficultyOptions = [
        { value: 'easy', label: 'Easy' },
        { value: 'medium', label: 'Medium' },
        { value: 'hard', label: 'Hard' },
    ];


    const navigate = useNavigate();
    const { user } = useContext(AuthContext);



    const handleUpdateAssignment = e => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const thumbnailURL = form.url.value;
        const marks = form.marks.value;
        const description = form.description.value;
        const difficultyLevel = selectedDifficulty ? selectedDifficulty.value : null;
        const dueDate = selectedDate;
        const email = user.email;
        const updatedAssignment = { title, thumbnailURL, marks, description, difficultyLevel, dueDate, email };



        fetch(`https://study-buddy-hub-server.vercel.app/assignments/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Assignment Updated Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    navigate("/allassignments");

                }
            })



    }



    const handleDeleteAssignment = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this assignment!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://study-buddy-hub-server.vercel.app/assignments/${_id}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: user.email }),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your assignment has been deleted.',
                                'success'
                            )
                            navigate("/allassignments");
                        }
                    })
            }
        })

    }




    const assignment = useLoaderData();
    const { thumbnailURL, title, description, _id, difficultyLevel, marks, dueDate } = assignment || {};
    return (
        <div className='my-4'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col">
                    <div>
                        <h1 className='text-3xl text-center pt-4 font-bold flex items-center gap-6'> Update Your Assignment! <MdAssignmentAdd></MdAssignmentAdd></h1>
                    </div>
                    <div className="card w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleUpdateAssignment} className="card-body">
                            <div className=" flex flex-col md:flex-row gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Assignment Title</span>
                                    </label>
                                    <input defaultValue={title} type="text" name='title' placeholder="Title of your assignment" className="input input-bordered  h-12" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Thumbnail URL</span>
                                    </label>
                                    <input defaultValue={thumbnailURL} type="text" name='url' placeholder="Thumbnail link" className="  input input-bordered h-12" required />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Marks</span>
                                    </label>
                                    <input defaultValue={marks} type="text" name='marks' placeholder="Marks of the assignment" className="input input-bordered  h-12" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea
                                        defaultValue={description}
                                        placeholder="About your assignment"
                                        name='description'
                                        className="textarea textarea-bordered  h-12"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">Difficulty Level</span>
                                    </label>
                                    <Select className='h-12'
                                        defaultValue={difficultyLevel}
                                        value={selectedDifficulty}
                                        onChange={handleDifficultyChange}
                                        options={difficultyOptions}
                                        isSearchable={false}
                                        required
                                    />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">Due Date</span>
                                    </label>
                                    <DatePicker
                                        defaultValue={dueDate}
                                        selected={selectedDate}
                                        onChange={handleDateChange}
                                        minDate={new Date()}
                                        className="input input-bordered "
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-outline btn-primary overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">Update Assignment</button>
                            </div>
                        </form>
                        <div className="card-body -mt-6">
                            <div className="form-control">
                                <button onClick={() => handleDeleteAssignment(_id)} type="submit" className="btn btn-primary overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">Delete Assignment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateAssignment;