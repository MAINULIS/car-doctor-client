import About from "./About";
import Banner from "./Banner";

const Home = () => {
    return (
        <div className="m-5 md:m-10 ">
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;