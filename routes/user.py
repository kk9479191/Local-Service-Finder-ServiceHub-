from fastapi import APIRouter
from pydantic import BaseModel
from database import users

router = APIRouter()


class User(BaseModel):
    name: str
    email: str
    password: str


class LoginUser(BaseModel):
    email: str
    password: str


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