import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";

function Header() {

const [search, setSearch] = useState("");
const [location, setLocation] = useState("Lucknow");
const [showModal, setShowModal] = useState(false);

const navigate = useNavigate();

const handleLocationChange = (e) => {
localStorage.setItem("location", e.target.value);
};

return (

<div className="bg-white shadow-md p-4">

<div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

<h1 className="text-2xl font-bold">
ServiceHub
</h1>

{/* Location Dropdown */}
<select 
onChange={handleLocationChange}
className="border rounded px-2 py-1"
>
<option value="Lucknow">Lucknow</option>
<option value="Kanpur">Kanpur</option>
<option value="Delhi">Delhi</option>
<option value="Noida">Noida</option>
</select>

{/* Search */}
<input
type="text"
placeholder="Search services..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
onKeyDown={handleSearch}
className="border px-4 py-2 rounded-lg w-1/3"
/>

<div className="flex gap-4 text-xl">

<button onClick={()=>setShowModal(true)}>
👤
</button>

<button onClick={()=>navigate("/bookings")}>
📋
</button>

</div>

</div>

{showModal && <LoginModal setShowModal={setShowModal} />}

</div>

);

}

export default Header;