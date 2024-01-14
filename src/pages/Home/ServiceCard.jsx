import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id,title, img, price} = service;
    return (
        <div className="card w-96 text-black  shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="image" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title text-2xl font-semibold">{title}</h2>
                <div className="inline-flex">
                    <p className="text-[#FF3811] text-xl font-semibold pt-1">Price: ${price}</p>
                    <Link to={`/checkOut/${_id}`} className="btn btn-outline text-orange-600">❯</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;