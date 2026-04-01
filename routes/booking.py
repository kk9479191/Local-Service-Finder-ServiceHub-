from fastapi import APIRouter
from models.booking import Booking
from database import bookings
from bson import ObjectId   # 👈 important

router = APIRouter()


# Book worker
@router.post("/book")
def book_worker(booking: Booking):

    bookings.insert_one(booking.dict())

    return {"message":"Booking successful"}


# Worker bookings
@router.get("/worker-bookings/{worker_id}")
def get_worker_bookings(worker_id: str):

    data = list(bookings.find({"worker_id": worker_id}))

    for booking in data:
        booking["_id"] = str(booking["_id"])

    return data   # 👈 ye missing tha


# Update booking
@router.put("/update-booking/{id}")
def update_booking(id: str, data: dict):

    bookings.update_one(
        {"_id": ObjectId(id)},
        {"$set": {"status": data["status"]}}
    )

    return {"message":"Updated"}