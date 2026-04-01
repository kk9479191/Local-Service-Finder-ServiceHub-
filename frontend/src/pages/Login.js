import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const role = location.state?.role;

  const handleLogin = () => {

    let url = "";

    if(role === "worker"){
      url = "https://servicehub-backend-tz6u.onrender.com/login-worker";
    }else{
      url = "https://servicehub-backend-tz6u.onrender.com/login-user";
    }

    axios.post(url, {
      email,
      password
    })
    .then(res => {

      if(res.data.message === "Login successful"){

        localStorage.setItem("workerId", res.data.id);
        localStorage.setItem("user", email);

        if(role === "worker"){
          navigate("/worker-dashboard");
        }else{
          navigate("/");
        }

      } else {
        alert("Invalid Credentials")
      }

    })
    .catch(err => console.log(err));

  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-lg p-8 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 w-full rounded"
        >
          Login
        </button>
      </div>
    </div>
  );

};

export default Login;