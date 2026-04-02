from pydantic import BaseModel

class Booking(BaseModel):
    worker_id: str
    worker_name: str
    service: str
    customer_name: str
    phone: str
    location: str
    status: str