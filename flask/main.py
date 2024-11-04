# ref https://blog.tkav.dev/create-an-api-using-flask-mongodb-and-docker

import os
import json
from flask import Flask, request
from flask_pymongo import PyMongo
from bson import json_util, ObjectId
from flask_cors import CORS

MONGODB_URI = "mongodb://mongodb:27017/example"

app = Flask(__name__)
app.config["MONGO_URI"] = MONGODB_URI
mongo = PyMongo(app)
CORS(app)

def parse_json(data):
    return json.loads(json_util.dumps(data))

@app.route('/')
def flask_app():
    return 'おめでとう成功だ!'

@app.route('/items', methods=['GET'])
def get_all_items():
    items = list(mongo.db.items.find())
    return parse_json(items), 200

@app.route('/items', methods=['POST'])
def create_item():
    item = request.get_json()
    inserted_item = mongo.db.items.insert_one(item)
    return parse_json(inserted_item.inserted_id), 201

@app.route('/items/<item_id>', methods=['GET'])
def get_item(item_id):
    item = mongo.db.items.find_one_or_404({'_id': ObjectId(item_id)})
    return parse_json(item), 200

if __name__=="__main__":
    app.run(host='0.0.0.0',port=5005,debug=True)