import React, { useEffect, useState } from "react";
import axios from "axios";

function Bookings(){

const [bookings, setBookings] = useState([]);

useEffect(()=>{

axios.get("http://127.0.0.1:8000/bookings")
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
<p>User: {booking.user_name}</p>
<p>Phone: {booking.phone}</p>
<p>Location: {booking.location}</p>

<p className="text-yellow-600 font-bold">
Status: Pending
</p>

</div>
))}

</div>

</div>

)

}

export default Bookings;