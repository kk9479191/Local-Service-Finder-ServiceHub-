from fastapi import APIRouter
from pydantic import BaseModel
from database import users, workers

router = APIRouter()


class User(BaseModel):
    name: str
    email: str
    password: str


class LoginUser(BaseModel):
    email: str
    password: str


# ---------------- USER ----------------

@router.post("/signup-user")
def signup_user(user: User):
    users.insert_one(user.dict())
    return {"message": "User signup successful"}


@router.post("/login-user")
def login_user(data: dict):

    user = users.find_one({
        "email": data["email"],
        "password": data["password"]
    })

    if user:
        return {"message": "Login successful"}

    return {"message": "Invalid credentials"}


# ---------------- WORKER ----------------

@router.post("/signup-worker")
def signup_worker(worker: User):
    result = workers.insert_one(worker.dict())
    return {
        "message": "Worker signup successful",
        "id": str(result.inserted_id)
    }


@router.post("/login-worker")
def login_worker(data: dict):

    worker = workers.find_one({
        "email": data["email"],
        "password": data["password"]
    })

    if worker:
        return {
            "message": "Login successful",
            "id": str(worker["_id"])
        }

    return {"message": "Invalid credentials"}