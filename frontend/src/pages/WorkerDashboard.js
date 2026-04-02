import { useEffect, useState } from "react";
import axios from "axios";

const WorkerDashboard = () => {

const [bookings, setBookings] = useState([]);

const workerId = localStorage.getItem("workerId");

useEffect(()=>{

fetchBookings();

},[])

const fetchBookings = () => {

axios.get(
`https://servicehub-backend-tz6u.onrender.com/worker-bookings/${workerId}`
)
.then(res=>setBookings(res.data))
.catch(err=>console.log(err))

}

const updateStatus = async(id,status)=>{

try{

await axios.put(
`https://servicehub-backend-tz6u.onrender.com/update-booking/${id}`,
{status}
)

fetchBookings();

}catch(error){

console.log(error);

}

}

return(

<div className="p-6">

<h2 className="text-2xl font-bold mb-4">
Worker Bookings
</h2>

{bookings.length === 0 ? (

<p>No Bookings Yet</p>

) : (

bookings.map(b=> (

<div key={b._id}
className="border p-4 mb-3 rounded shadow">

<p>Customer: {b.customer_name}</p>
<p>Service: {b.service}</p>
<p>Status: {b.status}</p>

{(b.status === "Pending" || b.status === "pending") && (

<div className="mt-2">

<button
onClick={()=>updateStatus(b._id,"Accepted")}
className="bg-green-600 text-white px-3 py-1 mr-2 rounded"
>
Accept
</button>

<button
onClick={()=>updateStatus(b._id,"Rejected")}
className="bg-red-600 text-white px-3 py-1 rounded"
>
Reject
</button>

</div>

)}

</div>

))

)}

</div>

)

}

export default WorkerDashboard;