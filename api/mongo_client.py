import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv(dotenv_path="./.env.local")

MONGO_URL = os.environ.get("MONGO_URL", "mongo")
MONGO_USERNAME = os.environ.get("MONGO_USERNAME", "root")
MONGO_PASSWORD = os.environ.get("MONGO_PASSWORD", "")
MONGO_PORT =  os.environ.get("MONGO_PORT", 27017)

mongo_client = MongoClient(
    host=MONGO_URL,
    username=MONGO_USERNAME,
    password=MONGO_PASSWORD,
    port=MONGO_PORT
)

def insert_test_document():
    """Insert sample document to the test_collection in the test db"""
    db = mongo_client.students_record
    students_table= db.students_table
    res = students_table.insert_one({"FirstName": "Selam", "LastName": "Meshesha", "Email": "Smeshesha@gmail.com"})
    print(res)

