import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookings from "./pages/Bookings";
import Workers from "./pages/Workers";
import AddWorker from "./pages/AddWorker";
import WorkerProfile from "./pages/WorkerProfile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import WorkerDashboard from "./pages/WorkerDashboard";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/add-worker" element={<AddWorker />} />
        <Route path="/worker" element={<WorkerProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/worker-dashboard" element={<WorkerDashboard />} />
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;