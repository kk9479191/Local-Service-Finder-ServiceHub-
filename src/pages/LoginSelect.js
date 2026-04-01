import React from "react";
import { useNavigate } from "react-router-dom";

function LoginSelect() {

const navigate = useNavigate();

return (

<div className="flex justify-center items-center h-screen">

<div className="shadow-lg p-10 rounded-lg text-center w-80">

<h1 className="text-2xl font-bold mb-6">
Login / Signup
</h1>

<div className="space-y-3">

<button
onClick={()=>navigate("/login-customer")}
className="bg-blue-600 text-white px-6 py-2 rounded w-full"
>
Login as Customer
</button>

<button
onClick={()=>navigate("/signup-customer")}
className="bg-blue-400 text-white px-6 py-2 rounded w-full"
>
Signup as Customer
</button>

<button
onClick={()=>navigate("/login-worker")}
className="bg-green-600 text-white px-6 py-2 rounded w-full"
>
Login as Worker
</button>

<button
onClick={()=>navigate("/signup-worker")}
className="bg-green-400 text-white px-6 py-2 rounded w-full"
>
Signup as Worker
</button>

</div>

</div>

</div>

);

}

export default LoginSelect;