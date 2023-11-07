
const AssignmentsCard = ({ assignment }) => {
    const { thumbnailURL, title, description } = assignment || {};
    return (

        <div className=" bg-base-100 shadow-xl image-full overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">
            <figure>
                <img src={thumbnailURL} alt={title} />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title text-center">{title}</h2>
                <p className="text-center">{description}</p>
                <div className="flex gap-6">
                    <button className="btn btn-outline btn-sm w-24 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">View</button>
                    <button className="btn btn-primary btn-sm w-24 overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">Update</button>
                </div>
            </div>
        </div>

    );
};

export default AssignmentsCard;