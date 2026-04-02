🚀 ServiceHub — Local Service Finder
ServiceHub is a Full Stack Local Service Finder Web App similar to Urban Company, allowing users to find and book local service providers based on location and service type.

🌐 Live Demo

Frontend
👉 https://servicehub-blue.vercel.app

Backend
👉 https://servicehub-backend-tz6u.onrender.com

✨ Features
👤 User Features
Location based worker search
Service filtering
Search functionality
Worker profile view
Call worker directly
Book services
View booking status
Login & Signup popup

👷 Worker Features
Worker login
Worker dashboard
Booking management
View assigned bookings
Accept / Reject bookings (Upcoming)

🔍 Services Available
⚡ Electrician
🚰 Plumber
🧹 Cleaning
❄ AC Repair
🎨 Painter
🪚 Carpenter

📍 Location Based Filtering
Users can select location:
Lucknow
Kanpur
Delhi
Noida

Workers will be filtered automatically.

🗺 Google Maps Integration
Google Maps API used for worker location
Map shown on worker profile page
Location based UI experience

🛠 Tech Stack
Frontend
React.js
Tailwind CSS
Axios
React Router

Backend
FastAPI
Python

Database
MongoDB Atlas

APIs Used
Google Maps API
REST API (FastAPI)
Axios API Calls

🔌 API Endpoints
Workers API
GET /workers
Fetch all workers
POST /add-worker
Add new worker

Booking API
POST /book
Book worker
GET /worker-bookings/{worker_id}
Get worker bookings
PUT /update-booking/{id}
Update booking status

User API
POST /signup-user
POST /signup-worker
POST /login-user
POST /login-worker

📂 Project Structure
ServiceHub

frontend/
│
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
│
backend/
│
├── routes/
│   ├── worker.py
│   ├── booking.py
│   ├── user.py
│
├── models/
│   ├── worker.py
│   ├── booking.py
│   ├── user.py
│
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
Service Categories UI
Worker Listing
Add Worker
Booking System
Booking Status Page
Login / Signup Modal
Worker Dashboard
Location Filter
Search Filter
Google Maps Integration
Live Deployment

🚀 Upcoming Features
Worker Accept Booking
Notifications
JWT Authentication
Payment Integration
Ratings & Reviews
Admin Panel

👨‍💻 Author

Karan Kumar Genaram
B.Tech CSE (Cloud Computing + AI)
Shri Ramswaroop Memorial University

GitHub
https://github.com/kk9479191

⭐ Support

If you like this project:

⭐ Star the repository
🍴 Fork the repository
