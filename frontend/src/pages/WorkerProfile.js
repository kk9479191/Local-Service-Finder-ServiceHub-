import React from "react";
import { useLocation } from "react-router-dom";
import Map from "../components/Map";
import axios from "axios";

function WorkerProfile() {

const location = useLocation();
const worker = location.state;

const handleBooking = async () => {

const user = localStorage.getItem("user");

try{

await axios.post("http://localhost:8000/book", {

worker_id: worker._id,   // 👈 important
customer_name: user,
service: worker.service,
date: new Date().toLocaleDateString(),
status: "pending"

});

alert("Booking Successful");

}catch(error){

console.log(error);

}

};

if (!worker) {
return <h1>No Worker Found</h1>;
}

return (

<div className="max-w-4xl mx-auto p-6">

<h1 className="text-3xl font-bold mb-6">
{worker.name}
</h1>

<div className="shadow-lg p-6 rounded-lg">

<p className="text-lg mb-2">
<strong>Service:</strong> {worker.service}
</p>

<p className="text-lg mb-2">
<strong>Location:</strong> {worker.location}
</p>

<p className="text-lg mb-2">
<strong>Phone:</strong> {worker.phone}
</p>

<p className="text-lg mb-2">
<strong>Experience:</strong> {worker.experience}
</p>

<Map location={worker.location} />

<a 
href={`tel:${worker.phone}`}
className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded"
>
Call Now
</a>

{/* Book Button */}

<button
onClick={handleBooking}
className="ml-3 mt-4 bg-blue-600 text-white px-4 py-2 rounded"
>
Book Now
</button>

</div>

</div>

);
}

export default WorkerProfile;