import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="text-center mt-10">
                <p className='text-[#FF3811]'>Service</p>
                <h2 className="text-black text-5xl font-bold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don&apos;t look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service = {service}
                    ></ServiceCard>)
                }
            </div>
            <div className="text-center mt-12">
            <Link>
            <button className="btn btn-outline text-[#FF3811] hover:bg-[#FF3811]">More Services</button>
            </Link>
            </div>
        </div>
    );
};

export default Services;