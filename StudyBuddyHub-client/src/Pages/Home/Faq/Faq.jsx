import { RiQuestionFill, RiQuestionAnswerFill } from "react-icons/ri";


const Faq = () => {
    const faqData = [
        {
            question: ' How do I create a new assignment?',
            answer: ' To create a new assignment, log in to your account, navigate to the "Create Assignment" page, and fill in the required details such as title, description, marks, difficulty level, and due date. Click the "Create" button to add the assignment.'
        },
        {
            question: ' Can I delete assignments created by others?',
            answer: ' No, you can only delete assignments that you have created. If you wish to remove an assignment created by someone else, you can contact the assignment creator to discuss it.'
        },
        {
            question: ' How do I submit an assignment?',
            answer: ' To submit an assignment, find the assignment you want to complete, click on the "Take Assignment" button, and provide the required information, including a PDF link and any additional notes. Click "Submit" to send your assignment.'
        },
        {
            question: ' What happens after I grade an assignment?',
            answer: ' When you grade an assignment, its status will change to "completed." The examinee will receive their marks and any feedback you provided.'
        },
        {
            question: ' How can I change my profile picture?',
            answer: ' To change your profile picture, go to your profile settings, and upload a new image. Make sure the image meets the required specifications.'
        },
    ];
    return (
        <div className="pb-6">
            <div className="container mx-auto">
                <h2 className="flex justify-center text-center text-4xl font-bold mb-8 gap-6">Frequently Asked Questions</h2>
                <div className="grid gap-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="shadow-lg overflow-hidden transition-all hover:scale-105  hover:shadow-2xl">
                            <div className="collapse bg-base-200">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title text-xl font-medium">
                                    <RiQuestionFill className="w-8"></RiQuestionFill> {item.question}
                                </div>
                                <div className=" collapse-content">
                                    <RiQuestionAnswerFill className="w-8"></RiQuestionAnswerFill>{item.answer}
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;