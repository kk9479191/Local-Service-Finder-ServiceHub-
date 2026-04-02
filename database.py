from pymongo import MongoClient

client = MongoClient("mongodb+srv://Karan:Karan1234@cluster0.49db8fz.mongodb.net/servicehub?retryWrites=true&w=majority")

db = client["servicehub"]

workers = db["workers"]
bookings = db["bookings"]
users = db["users"]