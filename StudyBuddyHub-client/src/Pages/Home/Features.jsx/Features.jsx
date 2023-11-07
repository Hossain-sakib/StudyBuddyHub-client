import Marquee from "react-fast-marquee";

const Features = () => {
    return (
        <div className="bg-base-200">
            <h1 className="pt-10 text-center text-4xl font-bold">Our Features</h1>
            <Marquee >
                <div className="container mx-auto flex flex-wrap items-center justify-between mb-12">
                    <div className="w-1/3 p-4">
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">📚 Assignment Creation</h2>
                                <p>Easily create assignments with titles, descriptions, marks, due dates,
                                    and difficulty levels.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 p-4">
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">🤝 Collaborative Learning</h2>
                                <p>Collaborate with friends on assignments, fostering teamwork and mutual support.</p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="w-1/3 p-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-3xl text-primary mb-4">📝 Assignment Grading</div>
                            <p className="text-gray-600">
                                Grade your friend's assignments, provide feedback, and track assignment statuses.
                            </p>
                        </div>
                    </div> */}
                    <div className="w-1/3 p-4">
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">📝 Assignment Grading</h2>
                                <p>Grade your friend's assignments, provide feedback, and track assignment statuses.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </Marquee >
        </div >
    );
};

export default Features;