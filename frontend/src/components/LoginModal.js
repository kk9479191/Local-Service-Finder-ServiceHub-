import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginModal = ({ setShowModal }) => {

const navigate = useNavigate();
const [role, setRole] = useState("");
const [mode, setMode] = useState("");

return (

<div className="fixed inset-0 z-[9999] flex items-center justify-center">

{/* Background */}
<div 
className="absolute inset-0 bg-black/50"
onClick={()=>setShowModal(false)}
></div>

{/* Modal */}
<div className="relative bg-white p-8 rounded-lg w-80 z-[10000]">

<button
onClick={()=>setShowModal(false)}
className="absolute top-2 right-3 text-xl"
>
✖
</button>

<h2 className="text-xl font-bold mb-4">
Login / Signup
</h2>

<div className="space-y-3">

{/* Customer Login */}
<button 
onClick={()=>{
navigate("/login", { state: { role: "customer" } })
}}
className="bg-blue-600 text-white px-4 py-2 rounded w-full"
>
Login as Customer
</button>

{/* Customer Signup */}
<button 
onClick={()=>{
navigate("/signup", { state: { role: "customer" } })
}}
className="bg-blue-400 text-white px-4 py-2 rounded w-full"
>
Signup as Customer
</button>

{/* Worker Login */}
<button 
onClick={()=>{
navigate("/login", { state: { role: "worker" } })
}}
className="bg-green-600 text-white px-4 py-2 rounded w-full"
>
Login as Worker
</button>

{/* Worker Signup */}
<button 
onClick={()=>{
navigate("/signup", { state: { role: "worker" } })
}}
className="bg-green-400 text-white px-4 py-2 rounded w-full"
>
Signup as Worker
</button>

</div>

</div>

</div>

);

};

export default LoginModal;