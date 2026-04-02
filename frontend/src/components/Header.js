import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {

const navigate = useNavigate();

const [search, setSearch] = useState("");
const [location, setLocation] = useState(
localStorage.getItem("location") || "Lucknow"
);

const handleSearch = (e) => {
if(e.key === "Enter"){
navigate(`/workers?search=${search}&location=${location}`)
}
};

const handleLocationChange = (e) => {
setLocation(e.target.value);
localStorage.setItem("location", e.target.value);
};

return (

<div className="flex justify-between items-center p-4 shadow-md">

{/* Logo */}

<h1 
className="text-2xl font-bold cursor-pointer"
onClick={()=>navigate("/")}
>
ServiceHub
</h1>


{/* Location + Search */}

<div className="flex gap-4 items-center">

<select 
value={location}
onChange={handleLocationChange}
className="border px-2 py-1 rounded"
>
<option value="Lucknow">Lucknow</option>
<option value="Kanpur">Kanpur</option>
<option value="Delhi">Delhi</option>
<option value="Noida">Noida</option>
</select>

<input
type="text"
placeholder="Search services..."
className="border px-3 py-1 rounded w-80"
value={search}
onChange={(e)=>setSearch(e.target.value)}
onKeyDown={handleSearch}
/>

</div>


{/* Icons */}

<div className="flex gap-4">

<button onClick={()=>navigate("/login")}>
👤
</button>

<button onClick={()=>navigate("/bookings")}>
📋
</button>

</div>

</div>

);

}

export default Header;