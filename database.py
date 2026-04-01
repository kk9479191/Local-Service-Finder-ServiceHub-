from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")

db = client["local_service"]

users = db["users"]
workers = db["workers"]
bookings = db["bookings"]