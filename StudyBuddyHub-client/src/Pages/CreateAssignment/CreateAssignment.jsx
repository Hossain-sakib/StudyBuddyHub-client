import { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdAssignmentAdd } from "react-icons/md";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const difficultyOptions = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
];



const CreateAssignment = () => {
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);


    const handleDifficultyChange = (selectedOption) => {
        setSelectedDifficulty(selectedOption);
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    const navigate = useNavigate();

    const {user} = useContext(AuthContext);



    const handleCreateAssignment = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const thumbnailURL = form.url.value;
        const marks = form.marks.value;
        const description = form.description.value;
        const difficultyLevel = selectedDifficulty ? selectedDifficulty.value : null;
        const dueDate = selectedDate;
        const email = user.email;
        const newAssignment = { title, thumbnailURL, marks, description, difficultyLevel, dueDate ,email};




        fetch('http://localhost:5000/assignments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Assignment Created Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    navigate("/allassignments");
                }
            })




    }


    return (
        <div className='my-4'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col">
                    <div>
                        <h1 className='text-3xl text-center pt-4 font-bold flex items-center gap-6'> Create Assignment Now! <MdAssignmentAdd></MdAssignmentAdd></h1>
                    </div>
                    <div className="card w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleCreateAssignment} className="card-body">
                            <div className=" flex flex-col md:flex-row gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Assignment Title</span>
                                    </label>
                                    <input type="text" name='title' placeholder="Title of your assignment" className="input input-bordered  h-12" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Thumbnail URL</span>
                                    </label>
                                    <input type="text" name='url' placeholder="Thumbnail link" className="  input input-bordered h-12" required />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Marks</span>
                                    </label>
                                    <input type="text" name='marks' placeholder="Marks of the assignment" className="input input-bordered  h-12" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea
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
                                        selected={selectedDate}
                                        onChange={handleDateChange}
                                        minDate={new Date()}
                                        className="input input-bordered "
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-outline btn-primary overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">Create Assignment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignment;