import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";

function Header() {

const [search, setSearch] = useState("");
const [location, setLocation] = useState("Lucknow");
const [showModal, setShowModal] = useState(false);

const navigate = useNavigate();

const handleSearch = (e) => {
if (e.key === "Enter") {
navigate(`/workers?search=${search}&location=${location}`);
}
};

return (

<div className="bg-white shadow-md p-4">

<div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

<h1 className="text-2xl font-bold">
ServiceHub
</h1>

{/* Location Dropdown */}
<select
value={location}
onChange={(e)=>setLocation(e.target.value)}
className="border px-3 py-2 rounded-lg"
>

<option>Lucknow</option>
<option>Delhi</option>
<option>Kanpur</option>
<option>Noida</option>

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