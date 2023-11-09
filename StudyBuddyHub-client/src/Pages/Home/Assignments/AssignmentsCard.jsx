import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const AssignmentsCard = ({ assignment }) => {
    const { thumbnailURL, title, description,_id } = assignment || {};
    return (

        <div className="bg-base-100 shadow-xl image-full overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">
            <figure className="flex justify-center items-center border-2 border-black">
                <img className="w-96 h-96" src={thumbnailURL} alt={title} />
            </figure>
            <div className="card-body h-72 items-center space-y-8">
                <h2 className="card-title text-center">{title}</h2>
                <p className="text-center">{description}</p>
                <div className="flex gap-6">
                    <Link to={`/view/${_id}`}>
                        <button className="btn btn-outline btn-sm w-24 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">View</button>
                    </Link>
                    <Link to={`/update/${_id}`}>
                        <button className="btn btn-primary btn-sm w-24 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">Update</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

AssignmentsCard.propTypes = {
    assignment: PropTypes.object
}

export default AssignmentsCard;