from flask import Blueprint
import config as cfg
import os
import json
import pymongo
from flask import Flask
from flask import request
import datetime
from flask_cors import CORS
from bson import ObjectId
import models as models

users_api = Blueprint('users_api', __name__)

client = cfg.client
db = client['dashboard']
userCollection = db['users']





#====================================USERS========================================
@users_api.route('/users', methods=['POST'])
def create_user():
    req_data = request.get_json()
    if req_data['username'] == None:
        return ('ERR1', 400)
    if req_data['password'] == None:
        return ('ERR2', 400)

    userCollection.insert(req_data)
    #req_data['_id'] = str(req_data['_id'])
    return (json.dumps(req_data, default = datetime_to_string), 201)


@users_api.route('/users')
def get_user():
    documents = userCollection.find()
    response = []
    for document in documents:
        document['_id'] = str(document['_id'])
        response.append(document)
    return json.dumps(response, default = datetime_to_string)


@users_api.route('/users/status', methods=['GET'])
def get_status():
    token_bearer = request.headers.get('Authorization')
    token = token_bearer[9:len(token_bearer)-1]
    print(token)
    decoded_token = models.decode_auth_token(token)
    print('decoded_jwt (user_id): ' + decoded_token)
    return ('OK', 200)


@users_api.route('/users/isAdmin', methods=['GET'])
def is_admin():
    token_bearer = request.headers.get('Authorization')
    # Ceci est ignoble
    token = token_bearer[9:len(token_bearer)-1]
    # Mais ca fonctionne
    user_id = models.decode_auth_token(token)
    print('user_id: ' + user_id)
    user = userCollection.find_one({"_id":ObjectId(user_id)})
    if user == None:
        return (False, 200)
    else: 
        return (True, 200)







def datetime_to_string(o):
    if isinstance(o, datetime.datetime):
        return o.__str__()