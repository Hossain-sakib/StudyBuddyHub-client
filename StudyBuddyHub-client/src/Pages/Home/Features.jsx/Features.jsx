import Marquee from "react-fast-marquee";

const Features = () => {
    return (
        <div>
            <h1 className="text-center text-4xl font-bold">Our Features</h1>
            <Marquee className=" py-16">
                <div className="container mx-auto flex flex-wrap items-center justify-between">

                    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-3xl text-primary mb-4">📚 Assignment Creation</div>
                            <p className="text-gray-600">
                                Easily create assignments with titles, descriptions, marks, due dates,
                                and difficulty levels.
                            </p>
                        </div>
                    </div>


                    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-3xl text-primary mb-4">🤝 Collaborative Learning</div>
                            <p className="text-gray-600">
                                Collaborate with friends on assignments, fostering teamwork and mutual support.
                            </p>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-3xl text-primary mb-4">📝 Assignment Grading</div>
                            <p className="text-gray-600">
                                Grade your friend's assignments, provide feedback, and track assignment statuses.
                            </p>
                        </div>
                    </div>


                </div>
            </Marquee>
        </div>
    );
};

export default Features;