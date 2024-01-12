import { FcCalendar } from "react-icons/fc";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const ServiceInfo = () => {
    return (
        <footer className="footer mt-16 rounded-lg p-10 bg-black text-white">
            <nav className="flex gap-4 items-center">
                <FcCalendar className="w-8 h-8" />
                <div>
                    <header className=" footer-title">We are open monday-friday</header>
                    <p className="text-2xl font-semibold">7:00 am - 9:00 pm</p>
                </div>
            </nav>
            <nav className="flex gap-4 items-center">
                <FaPhoneVolume className="text-[#FF3811] w-8 h-8"></FaPhoneVolume>
                <div>
                    <header className="footer-title">Have a question?</header>
                    <p className="text-2xl font-semibold">+2546 251 2658</p>
                </div>
            </nav>
            <nav className="flex gap-4 items-center">
                <FaLocationDot className="w-8 h-8 text-[#FF3811] "></FaLocationDot>
                <div>
                    <header className="footer-title">Need a repair? our address</header>
                    <p className="text-2xl font-semibold">Liza Street, New York</p>
                </div>
            </nav>
        </footer>

    );
};

export default ServiceInfo;