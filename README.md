🚀 ServiceHub – Local Service Finder

ServiceHub is a Full Stack Local Service Finder Web Application inspired by platforms like Urban Company. The platform helps users easily find and book trusted local service providers such as electricians, plumbers, cleaners, painters, AC repair technicians, and carpenters based on their selected location.

The application provides a seamless user experience with location-based filtering, service search, worker profiles, booking system, and worker dashboards. Users can explore available services, view worker details, and book services directly, while workers can manage bookings through their dedicated dashboard.

This project demonstrates full-stack development skills, including frontend UI development, backend API creation, database integration, authentication system, and deployment using modern technologies.

ServiceHub is designed to solve real-world problems by connecting customers with nearby service providers efficiently and quickly.

🌐 Live Demo

**Frontend:**
https://servicehub-blue.vercel.app

**Backend:**
https://servicehub-backend-tz6u.onrender.com

✨ Features

👤 User Features

* Search services
* Location-based filtering
* View worker profiles
* Call worker directly
* Book services
* View booking status
* Login & Signup popup
* Service filtering

👷 Worker Features

* Worker login
* Worker dashboard
* View assigned bookings
* Booking management
* Accept / Reject booking (Upcoming)

🔧 Services Available

* ⚡ Electrician
* 🚰 Plumber
* 🧹 Cleaning
* ❄ AC Repair
* 🎨 Painter
* 🪚 Carpenter

 Location Filtering

Users can select location:

* Lucknow
* Kanpur
* Delhi
* Noida

Workers are filtered automatically based on selected location.

🗺 Google Maps Integration

* Google Maps API used
* Worker location shown on map
* Location-based service UI

🛠 Tech Stack

Frontend

* React.js
* Tailwind CSS
* Axios
* React Router

Backend

* FastAPI
* Python

Database

* MongoDB Atlas

Deployment

* Frontend → Vercel
* Backend → Render
* Database → MongoDB Atlas

 APIs Used

* Google Maps API
* FastAPI REST API
* Axios API Calls

🔗 API Endpoints

Worker APIs

* GET /workers → Get all workers
* POST /add-worker → Add worker

Booking APIs

* POST /book → Book worker
* GET /worker-bookings/{worker_id} → Worker bookings
* PUT /update-booking/{id} → Update booking

User APIs

* POST /signup-user
* POST /signup-worker
* POST /login-user
* POST /login-worker

📂 Project Structure

ServiceHub

frontend/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── LoginModal.js
│   │   ├── Map.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Workers.js
│   │   ├── WorkerProfile.js
│   │   ├── AddWorker.js
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── Bookings.js
│   │   ├── WorkerDashboard.js

backend/
├── routes/
│   ├── worker.py
│   ├── booking.py
│   ├── user.py

├── models/
│   ├── worker.py
│   ├── booking.py
│   ├── user.py

├── main.py
├── database.py

⚙️ Installation

Clone Repository

git clone https://github.com/kk9479191/Local-Service-Finder-ServiceHub-.git

Backend Setup

cd backend
pip install -r requirements.txt
uvicorn main:app --reload

Backend runs on:
http://127.0.0.1:8000

Frontend Setup

cd frontend
npm install
npm start

Frontend runs on:
http://localhost:3000

🔑 Features Implemented

* Service Categories UI
* Worker Listing
* Add Worker
* Booking System
* Booking Status Page
* Login / Signup Modal
* Worker Dashboard
* Location Filter
* Search Filter
* Google Maps Integration
* Live Deployment

🚀 Upcoming Features

* Worker Accept Booking
* Notifications
* JWT Authentication
* Payment Integration
* Ratings & Reviews
* Admin Panel

👨‍💻 Author

Karan Kumar Genaram

B.Tech CSE (Cloud Computing + AI)

Shri Ramswaroop Memorial University

GitHub
https://github.com/kk9479191

⭐ Support

If you like this project:

* Star the repository
* Fork the repository
* Share with others
