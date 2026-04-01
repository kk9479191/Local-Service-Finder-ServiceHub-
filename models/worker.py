from pydantic import BaseModel

class WorkerSignup(BaseModel):
    name: str
    email: str
    password: str


class Worker(BaseModel):
    name: str
    service: str
    location: str
    phone: str