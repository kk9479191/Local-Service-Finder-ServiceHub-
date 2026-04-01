import React, { useState } from "react";
import axios from "axios";

function AddWorker() {

  const [formData, setFormData] = useState({
    name: "",
    service: "",
    location: "",
    phone: "",
    experience: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://127.0.0.1:8000/add-worker", formData)
      .then(() => {
        alert("Worker Added Successfully");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="max-w-lg mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6 text-center">
        Add Worker
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="service"
          placeholder="Service (Electrician etc.)"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="experience"
          placeholder="Experience"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Add Worker
        </button>

      </form>

    </div>
  );
}

export default AddWorker;