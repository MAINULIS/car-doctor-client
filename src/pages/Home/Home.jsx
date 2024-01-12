import About from "./About";
import Banner from "./Banner";
import ServiceInfo from "./ServiceInfo";
import Services from "./services";

const Home = () => {
    return (
        <div className="m-5 md:m-10 ">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ServiceInfo></ServiceInfo>
        </div>
    );
};

export default Home;