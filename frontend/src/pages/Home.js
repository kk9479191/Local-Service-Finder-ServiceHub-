import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Home() {

const navigate = useNavigate();

const goToWorkers = (service) => {

const location = localStorage.getItem("location") || "Lucknow";

navigate(`/workers?service=${service}&location=${location}`);

};

return (

<div>

<Header />

<div className="max-w-7xl mx-auto p-6">

{/* Main Layout */}

<div className="grid md:grid-cols-2 gap-8">

{/* Left Side */}

<div>

<h1 className="text-4xl font-bold mb-6">
Home services at your doorstep
</h1>

{/* Services */}

<div className="grid grid-cols-3 gap-4">

<div 
onClick={()=>goToWorkers("Electrician")}
className="bg-white shadow p-4 rounded-lg text-center hover:shadow-lg cursor-pointer"
>
⚡ Electrician
</div>

<div 
onClick={()=>goToWorkers("Plumber")}
className="bg-white shadow p-4 rounded-lg text-center hover:shadow-lg cursor-pointer"
>
🚰 Plumber
</div>

<div 
onClick={()=>goToWorkers("Cleaning")}
className="bg-white shadow p-4 rounded-lg text-center hover:shadow-lg cursor-pointer"
>
🧹 Cleaning
</div>

<div 
onClick={()=>goToWorkers("AC Repair")}
className="bg-white shadow p-4 rounded-lg text-center hover:shadow-lg cursor-pointer"
>
❄ AC Repair
</div>

<div 
onClick={()=>goToWorkers("Painter")}
className="bg-white shadow p-4 rounded-lg text-center hover:shadow-lg cursor-pointer"
>
🎨 Painter
</div>

<div 
onClick={()=>goToWorkers("Carpenter")}
className="bg-white shadow p-4 rounded-lg text-center hover:shadow-lg cursor-pointer"
>
🪚 Carpenter
</div>

</div>

</div>


{/* Right Side Images */}

<div className="grid grid-cols-2 gap-4">

<img 
src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600"
className="rounded-lg h-40 w-full object-cover"
/>

<img 
src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600"
className="rounded-lg h-40 w-full object-cover"
/>

<img 
src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600"
className="rounded-lg h-40 w-full object-cover col-span-2"
/>

</div>

</div>

</div>

</div>

);

}

export default Home;