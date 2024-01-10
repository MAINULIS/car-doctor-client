import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen mt-5">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                <img src={parts} className="w-1/2 border-8 border-white rounded-lg shadow-2xl absolute right-24 top-1/2" />
                </div>
                <div className='lg:w-1/2 mt-12'>
                    <p className='text-[#FF3811]'>About Us</p>
                    <h1 className="text-5xl text-black font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn mt-2 bg-[#FF3811] text-white hover:bg-[#ff1174]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;