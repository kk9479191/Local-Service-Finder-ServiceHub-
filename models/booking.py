from pydantic import BaseModel

class Booking(BaseModel):
    worker_id: str
    customer_name: str
    service: str
    date: str
    status: str = "pending"