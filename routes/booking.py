from fastapi import APIRouter
from models.booking import Booking
from database import bookings
from bson import ObjectId

router = APIRouter()


# Book worker
@router.post("/book")
def book_worker(booking: Booking):

    data = booking.dict()
    data["status"] = "Pending"   # 👈 default status

    bookings.insert_one(data)

    return {"message":"Booking successful"}

@router.get("/customer-bookings/{email}")
def get_customer_bookings(email: str):

    data = list(bookings.find({"customer_email": email}))

    for booking in data:
        booking["_id"] = str(booking["_id"])

    return data

# Worker bookings
@router.get("/worker-bookings/{worker_id}")
def get_worker_bookings(worker_id: str):

    data = list(bookings.find({"worker_id": worker_id}))

    for booking in data:
        booking["_id"] = str(booking["_id"])

    return data


# Update booking
@router.put("/update-booking/{id}")
def update_booking(id: str, data: dict):

    bookings.update_one(
        {"_id": ObjectId(id)},
        {"$set": {"status": data["status"]}}
    )

    return {"message":"Updated"}