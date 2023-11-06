import Banner from "./Banner/Banner";
import Faq from "./Faq/Faq";
import Features from "./Features.jsx/Features";


const Home = () => {
    return (
        <div className="space-y-6">
            <Banner></Banner>
            <Features></Features>
            <Faq></Faq>
        </div>
    );
};

export default Home;