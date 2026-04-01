import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Signup() {

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const navigate = useNavigate();
const [role, setRole] = useState("");

const handleSignup = async () => {
  try {

    if(role === "customer"){
      await axios.post(
        "http://localhost:8000/signup-user",
        { name, email, password }
      );
    } 
    else {
      await axios.post(
        "http://localhost:8000/signup-worker",
        { name, email, password }
      );
    }

    alert("Signup successful");

    navigate("/login", { state: { role } });   // 👈 redirect

  } catch (error) {
    console.log(error);
  }
};

return(

<div className="max-w-md mx-auto mt-20 shadow-lg p-6 rounded">

<h2 className="text-2xl font-bold mb-4">Signup</h2>

<input
type="text"
placeholder="Name"
className="w-full border p-2 mb-3"
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Email"
className="w-full border p-2 mb-3"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
className="w-full border p-2 mb-3"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
onClick={handleSignup}
className="bg-blue-600 text-white px-4 py-2 w-full"
>
Signup
</button>

</div>

)
}

export default Signup;