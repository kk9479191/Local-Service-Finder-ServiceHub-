import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Map from "../components/Map";

function Workers() {

  const [workers, setWorkers] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const search = query.get("search");
  const service = query.get("service");
  const selectedLocation = query.get("location");   // 👈 NEW

  useEffect(() => {
    axios.get("https://servicehub-backend-tz6u.onrender.com/workers")
      .then(res => {
        setWorkers(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  // Filter Workers
  const filteredWorkers = workers.filter(worker => {

    return (

      (!service || worker.service === service) &&

      (!selectedLocation || worker.location === selectedLocation) &&   // 👈 NEW

      (!search ||
        worker.name?.toLowerCase().includes(search.toLowerCase()) ||
        worker.service?.toLowerCase().includes(search.toLowerCase()) ||
        worker.location?.toLowerCase().includes(search.toLowerCase())
      )

    );

  });

  // Booking Function
const bookWorker = async (worker) => {

const user = localStorage.getItem("user");

if(!user){
alert("Please login first");
return;
}

const phone = prompt("Enter Phone");
const location = prompt("Enter Location");

try{

await axios.post(
"https://servicehub-backend-tz6u.onrender.com/book",
{
worker_id: worker._id,
worker_name: worker.name,
service: worker.service,
customer_name: user,
customer_email: user,   // 👈 add this
phone,
location,
status:"Pending"
}
);

alert("Booking Successful")

}catch(error){

console.log(error);
alert("Booking Failed")

}

};

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Workers List
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {filteredWorkers.map((worker, index) => (
          <div 
            key={index} 
            className="shadow-lg p-6 rounded-lg hover:shadow-xl transition"
          >
            <h2 className="text-xl font-bold">{worker.name}</h2>
            <p className="text-gray-500">{worker.service}</p>
            <p className="text-gray-500">{worker.location}</p>
            <p className="text-gray-500">{worker.phone}</p>

            <Map location={worker.location} />

            <div className="flex gap-2 mt-4">

              <a 
                href={`tel:${worker.phone}`}
                className="bg-green-600 text-white px-3 py-2 rounded w-full text-center"
              >
                Call
              </a>

              <button 
                onClick={() => bookWorker(worker)}
                className="bg-blue-600 text-white px-3 py-2 rounded w-full"
              >
                Book
              </button>

            </div>

            <button 
              onClick={() => navigate("/worker", { state: worker })}
              className="bg-gray-700 text-white px-3 py-2 rounded w-full mt-2"
            >
              View Profile
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Workers;