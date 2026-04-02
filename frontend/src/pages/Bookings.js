import React, { useEffect, useState } from "react";
import axios from "axios";

function Bookings(){

const [bookings, setBookings] = useState([]);

const user = localStorage.getItem("user");

useEffect(()=>{

axios.get(
`https://servicehub-backend-tz6u.onrender.com/customer-bookings/${user}`
)
.then(res=>{
setBookings(res.data);
})
.catch(err=>console.log(err));

},[]);

return(

<div className="max-w-6xl mx-auto p-6">

<h1 className="text-3xl font-bold mb-6">
Booking Status
</h1>

<div className="grid md:grid-cols-2 gap-6">

{bookings.map((booking,index)=>(

<div key={index} className="shadow p-4 rounded">

<h2 className="font-bold">
{booking.worker_name}
</h2>

<p>Service: {booking.service}</p>
<p>Phone: {booking.phone}</p>
<p>Location: {booking.location}</p>

<p className="text-yellow-600 font-bold">
Status: {booking.status}
</p>

</div>

))}

</div>

</div>

)

}

export default Bookings;