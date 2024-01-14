
const BookingRow = ({ booking, handleDelete, handleStatus }) => {
    const { _id, price, date, service, photo, status } = booking;

    return (
        <tr>
            <td>

                <div className="flex items-center gap-3">
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <div className="avatar">
                        <div className="w-24 rounded">
                            <img src={photo} alt="service avatar" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>$ {price}</td>
            <td>{date}</td>
            <th>
                {
                    status === 'confirm' ? <span className="indicator-item badge badge-success">Confirm</span>
                        : <button onClick={() => handleStatus(_id)}>
                            <span className="indicator-item badge badge-error">Pending</span>
                        </button>
                }
            </th>
        </tr>


    );
};

export default BookingRow;