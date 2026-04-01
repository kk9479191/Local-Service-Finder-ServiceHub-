from fastapi import APIRouter
from models.worker import Worker
from database import workers
from models.worker import Worker, WorkerSignup
router = APIRouter()

# Signup Worker
@router.post("/signup-worker")
def signup_worker(worker: WorkerSignup):
    workers.insert_one(worker.dict())
    return {"message": "Worker signup successful"}

# Add Worker (already existing)
@router.post("/add-worker")
def add_worker(worker: Worker):
    workers.insert_one(worker.dict())
    return {"message": "Worker added successfully"}


# Get Workers
@router.get("/workers")
def get_workers():
    data = list(workers.find())
    
    for worker in data:
        worker["_id"] = str(worker["_id"])   # 👈 fix here
        

    return data