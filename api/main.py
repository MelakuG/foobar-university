# save this as app.py
import os
import requests
from flask import Flask, Response, json, request,jsonify
from dotenv import load_dotenv
from flask_cors import CORS, cross_origin
from bson.objectid import ObjectId
from mongo_client import  mongo_client

load_dotenv(dotenv_path="./.env.local")
DEBUG = bool(os.environ.get("DEBUG", True))


app = Flask(__name__)
CORS(app)

students_record = mongo_client.students_record
students_collection = students_record.students

def response_message(message):
    return Response(response= json.dumps(message),
                    status=200, mimetype="application/json")

@app.route("/new-student")
def new_student():
    word = request.args.get("query")
    headers = {
        "Accept-Version": "v1",
        "Authorization": "Client-ID ",
    }
    params = {
        "query": word
    }
    response = requests.get(headers=headers, params=params)
    data = response.json()
    return data

@app.route("/students", methods=["GET", "POST"])
@cross_origin(origin='localhost', header=['Content-Type','Authorization'])
def students():
    if request.method == "GET":
        #read students from the database
        # students = students_collection.find({})
        # return json.dumps([stud for stud in students])
        try:
            students = list(students_collection.find())
            for student in students:
                student["_id"] = str(student["_id"])
            # return Response(response= json.dumps(students), 
            #                 status=200, mimetype="application/json")
            response_message(students)
        except Exception as ex:
            print(ex)
            # return Response( response= json.dumps({"message":f"cannot read students ---->{ex}"}), 
            #                 status=500, mimetype="application/json")
            response_message({"message":f"cannot read students ---->{ex}"})
    if request.method == "POST":
        #save student in the database
        # student = request.get_json()
        # student["_id"] = student.get("id")
        # result = students_collection.insert_one(student)
        # inserted_id = result.inserted_id
        # return json.dumps({"inserted_id":inserted_id})
        try:
            student = request.get_json()
            result = students_collection.insert_one(student)
            # return Response(response= json.dumps({"message":"User created",
            #                                        "id":f"{result.inserted_id}"}),
            #                                         status=200, mimetype="application/json")
            return response_message({"message":"User created","id":f"{result.inserted_id}"})
        except Exception as ex:
            print(ex)
            # return Response( response= json.dumps({"message":f"cannot add students ---->{ex}"}),
            #                  status=500, mimetype="application/json")
            response_message({"message":f"cannot add students ---->{ex}"})

@app.route("/students/<student_id>", methods=["DELETE", "PATCH"])
def student(student_id):
    if request.method == "DELETE":
        try:
            result = students_collection.delete_one({"_id": ObjectId(student_id)})
            print(result)
            if not result:
                return {"error": "student wasn't found. Please try again"}, 500
            if result and not result.deleted_count:
                return {"error":"student not found"}, 404
            # return Response( response= json.dumps({"message":"student was deleted"}), 
            #                 status=500, mimetype="application/json")
            response_message({"message":"student was deleted"})
        except Exception as ex:
            print(ex)
            # return Response( response= json.dumps({"message":f"cannot delete student---->{ex}"}), 
            #                 status=500, mimetype="application/json")
            response_message({"message":f"cannot delete student---->{ex}"})
    if request.method == "PATCH":
        try:
            result = students_collection.update_one(
                {"_id":ObjectId(student_id)},
                {"$set":{"FirstName":request.form["FirstName"]}}
                )
            # ,
            #     {"$set": {"LastName":request.form["LastName"]}},
            #     {"$set": {"Email":request.form["Email"]}},
            if result.modified_count == 1:
                # return Response( response= json.dumps(
                #  {"message":"student was updated"}), 
                #  status=200,
                #  mimetype="application/json")
                response_message({"message":"student was updated"})
            # return Response( response= json.dumps(
            #     {"message":"noting was needed to be updated"}), 
            #     status=200,
            #     mimetype="application/json") 
            response_message({"message":"noting was needed to be updated"})         
        except Exception as ex:
            print(ex)
            # return Response( response= json.dumps({"message":f"cannot update student ----> {ex}"}), 
            #                 status=500, mimetype="application/json")
            response_message({"message":f"cannot update student ----> {ex}"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5050")