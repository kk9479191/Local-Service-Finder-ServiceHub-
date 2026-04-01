from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.worker import router as worker_router
from routes.booking import router as booking_router
from routes.user import router as user_router


# app create karo pehle
app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# router include karo
app.include_router(worker_router)
app.include_router(booking_router)
app.include_router(user_router)

@app.get("/")
def home():
    return {"message": "Local Service Finder API Running"}