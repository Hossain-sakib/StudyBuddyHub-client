import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200">

            <nav>
                <h1 className="text-xl font-bold mb-2">Social link</h1>
                <a className="text-xl" href="https://facebook.com/studybuddyhub"><BiLogoFacebook></BiLogoFacebook></a>
                <a className="text-xl " href="https://twitter.com/studybuddyhub"><BiLogoTwitter></BiLogoTwitter></a>
                <a className="text-xl " href="https://instagram.com/studybuddyhub"><BiLogoInstagram></BiLogoInstagram></a>
            </nav>
            <nav>
                <h1 className="text-xl font-bold mb-2">Navigations</h1>
                <div className="flex items-center gap-2">
                    <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
                        <div className="bg-white w-2 h-2 rounded-full"></div>
                    </div>
                    <p className="cursor-pointer hover:underline font-medium">FAQs</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
                        <div className="bg-white w-2 h-2 rounded-full"></div>
                    </div>
                    <p className="cursor-pointer hover:underline font-medium">
                        Privacy Policy
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
                        <div className="bg-white w-2 h-2 rounded-full"></div>
                    </div>
                    <p className="cursor-pointer hover:underline font-medium">
                        Terms & Conditions
                    </p>
                </div>
            </nav>
            <nav>
                <h1 className="text-xl font-bold mb-2">Company</h1>
                <div className="flex items-center gap-2">
                    <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
                        <div className="bg-white w-2 h-2 rounded-full"></div>
                    </div>
                    <p className="cursor-pointer hover:underline font-medium">About</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
                        <div className="bg-white w-2 h-2 rounded-full"></div>
                    </div>
                    <p className="cursor-pointer hover:underline font-medium">Team</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
                        <div className="bg-white w-2 h-2 rounded-full"></div>
                    </div>
                    <p className="cursor-pointer hover:underline font-medium">
                        Contact
                    </p>
                </div>
            </nav>
            <nav>
                <h1 className="text-xl font-bold mb-2">Contact Information</h1>
                <p className="font-medium">Bscic Road,Kanchpur,Narayangonj.</p>
                <p className="font-medium">+8801955-703819</p>
                <p className="font-medium">StudyBuddyHub@gmail.com.com</p>
            </nav>
            <aside className="flex flex-col items-center justify-center">
                <img className="w-24" src="https://i.ibb.co/WBjtN1N/study-buddy.png" alt="" />
                <p >
                    Copyright © 2023 Study Buddy Hub Co.
                </p>
            </aside>

        </footer>








    );
};

export default Footer;