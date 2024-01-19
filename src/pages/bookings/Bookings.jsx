import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate()

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-doctor-accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data =>{
                if(!data.error){
                    setBookings(data)
                }
                else{
                    // log out then navigate
                    navigate ('/');
                }
            })
    }, [url, navigate]);

    const handleDelete = id => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`,{
                    method:'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your file has been deleted.",
                          icon: "success"
                        });
                        
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
            }
          });

    }
    // update <---> patch
    const handleStatus = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0) {
            const remaining = bookings.filter(booking => booking._id !== id);
            const updated = bookings.find(booking => booking._id === id);
            updated.status = 'confirm';
            const newBooking = [updated, ...remaining];
            setBookings(newBooking);
            }
        })
    }

    return (
        <div className="m-6 md:m-16">
            <h2 className="text-4xl font-semibold text-[#FF3811] text-center">My Bookings: {bookings.length}</h2>

            <div className="overflow-x-auto text-black mt-7">
                <table className="table">
                    {/* head */}
                    <thead className="text-black text-xl">
                        <tr>
                          
                            <th>Service</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th> Status</th>
                        </tr>
                    </thead>
                    <tbody>
                     {
                        bookings.map(booking => <BookingRow
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                        handleStatus={handleStatus}
                        ></BookingRow>)
                     }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;