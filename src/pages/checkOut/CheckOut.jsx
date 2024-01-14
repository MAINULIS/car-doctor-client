import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
    const service = useLoaderData();
    const { _id, title,img, price} = service;

    const {user} = useContext(AuthContext);


    const handleCheckOut = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        
        const customerInfo = {
            customerName: name ,
            email,
            date,
            photo: img,
            service: title,
            serviceId:_id,
            price: price,
            
        }
        console.log(customerInfo);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(customerInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId ){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Booking is placed successfully',
                    background:'gray',
                    icon: 'success',
                    confirmButtonText: 'Keep Rocking'
                  })
                form.reset();
            }
        })
    }
    return (
        <div className="m-10">
            <h3 className="text-4xl font-semibold text-center mb-12 text-black">This is checkOut of<span className="text-[#FF3811] font-bold">{title}</span></h3>
            <div className="card shrink-0 w-full bg-gray-100 md:p-7 lg:p-10 ">
                <form onSubmit={handleCheckOut} className="card-body ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        
                        <input type="text" placeholder="Full Name" name="name" defaultValue={user?.DisplayName} className="input input-bordered  bg-white" required />
                    </div>
                    <div className="form-control">
                        <input type="date" name='date' className="input input-bordered bg-white" required />

                    </div>
                    <div className="form-control">
                        <input type="email" placeholder="Your Email" defaultValue={user?.email} name='email' className="input input-bordered bg-white" required />
                    </div>
                    <div className="form-control">
                        <input type="" defaultValue={'$'+price} name="price" readOnly className="input input-bordered bg-white" required />
                    </div>

                    </div>

                    <div className="form-control mt-6">
                        <input className="btn text-white btn-block bg-[#FF3811] hover:bg-[#ff5411f1]" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;