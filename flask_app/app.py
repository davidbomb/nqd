import os
import json
import pymongo
from flask import Flask
from flask import request
import datetime
import config as cfg
from flask_cors import CORS
from bson import ObjectId
import models as models
from usersApi import users_api
from articlesApi import articles_api


app = Flask(__name__)
CORS(app)

client = cfg.client
db = client['dashboard']

collectionNfc = db['nfc']
collectionQuividiAge = db['quividiAge']
collectionQuividiGender = db['quividiGender']
collectionQuividiMood = db['quividiMood']
collectionQuividiEntrance = db['quividiEntrance']




app.register_blueprint(users_api)
app.register_blueprint(articles_api)

userCollection = db['users']
articleCollection = db['articles']


@app.route('/accueil')
def welcome():
    return "<h1>Welcome to the Website !</h1>"

#====================================LOGIN========================================
@app.route('/login', methods=['POST'])
def try_login_user():
    user = request.get_json()
    print(user)
    userdb = userCollection.find_one({"username":user['username']})
    if userdb == None:
        return ('You are not registrated, create an account before', 404)
    userdb['_id'] = str(userdb['_id'])
    print(userdb)
    ## FAIRE LE HASHAGE DES MDP !!!
    if user['password'] == userdb['password']:
        # GENERATE JWT
        jwt = models.encode_auth_token(userdb['_id'])
        print("jwt : " + str(jwt))
        decoded_jwt = models.decode_auth_token(jwt)
        print(decoded_jwt)
        return (json.dumps(str(jwt), default = datetime_to_string), 201)
    
    else :
        # Wrong password
        return (json.dumps(user, default = datetime_to_string), 400)

    
    return (json.dumps(userdb, default = datetime_to_string), 201)








#====================================NFC========================================
@app.route('/nfc', methods=['POST'])
def insert_nfc():
    req_data = request.get_json()
    if req_data['bottle'] not in ['blanc', 'rouge', 'rose']:
        return ('', 400)
    req_data['date'] =  datetime.datetime.utcnow()
    collectionNfc.insert(req_data)
    req_data['_id'] = str(req_data['_id'])
    return (json.dumps(req_data, default = datetime_to_string), 201)


@app.route('/nfc')
def get_nfc():
    documents = collectionNfc.find()
    response = []
    for document in documents:
        document['_id'] = str(document['_id'])
        response.append(document)
    return json.dumps(response, default = datetime_to_string)

@app.route('/nfc/stats')
def get_nfc_stat():
    labels = ['blanc', 'rouge', 'rose']
    response = dict((s,collectionNfc.find({'bottle':s}).count()) for s in labels)
    return json.dumps(response)

#=================================QuividiAge====================================

@app.route('/quividiAge', methods=['POST'])
def insert_quividi_age():
    req_data = request.get_json()
    if not isinstance(req_data['age'], int):
        return ('', 400)
    req_data['date'] =  datetime.datetime.utcnow()
    collectionQuividiAge.insert(req_data)
    req_data['_id'] = str(req_data['_id'])
    return (json.dumps(req_data, default = datetime_to_string), 201)

@app.route('/quividiAge')
def get_quividi_age():
    documents = collectionQuividiAge.find()
    response = []
    for document in documents:
        document['_id'] = str(document['_id'])
        response.append(document)
    return json.dumps(response, default = datetime_to_string)

@app.route('/quividiAge/stats')
def get_quividi_age_stat():
    labels = [k for k in range(100)]
    response = dict((s,collectionQuividiAge.find({'age':s}).count()) for s in labels)
    return json.dumps(response)

#=================================QuividiAge====================================

@app.route('/quividiGender', methods=['POST'])
def insert_quividi_gender():
    req_data = request.get_json()
    if req_data['gender'] not in ['Unknown', 'Male', 'Female']:
        return ('', 400)
    req_data['date'] =  datetime.datetime.utcnow()
    collectionQuividiGender.insert(req_data)
    req_data['_id'] = str(req_data['_id'])
    return (json.dumps(req_data, default = datetime_to_string), 201)

@app.route('/quividiGender')
def get_quividi_gender():
    documents = collectionQuividiGender.find()
    response = []
    for document in documents:
        document['_id'] = str(document['_id'])
        response.append(document)
    return json.dumps(response, default = datetime_to_string)

@app.route('/quividiGender/stats')
def get_quividi_gender_stat():
    labels = ['Unknown', 'Male', 'Female']
    response = dict((s,collectionQuividiGender.find({'gender':s}).count()) for s in labels)
    return json.dumps(response)

#=================================QuividiMood===================================

@app.route('/quividiMood', methods=['POST'])
def insert_quividi_mood():
    req_data = request.get_json()
    if req_data['mood'] not in ['Unhappy', 'Neutral', 'Happy']:
        return ('', 400)
    req_data['date'] =  datetime.datetime.utcnow()
    collectionQuividiMood.insert(req_data)
    req_data['_id'] = str(req_data['_id'])
    return (json.dumps(req_data, default = datetime_to_string), 201)

@app.route('/quividiMood')
def get_quividi_mood():
    documents = collectionQuividiMood.find()
    response = []
    for document in documents:
        document['_id'] = str(document['_id'])
        response.append(document)
    return json.dumps(response, default = datetime_to_string)

@app.route('/quividiMood/stats')
def get_quividi_mood_stat():
    labels = ['Unhappy', 'Neutral', 'Happy']
    response = dict((s,collectionQuividiMood.find({'mood':s}).count()) for s in labels)
    return json.dumps(response)

#=================================QuividiEntrance===================================

@app.route('/quividiEntrance', methods=['POST'])
def insert_quividi_entrance():
    req_data = request.get_json()
    if req_data['event'] not in ['far', 'close']:
        return ('', 400)
    req_data['date'] =  datetime.datetime.utcnow()
    collectionQuividiEntrance.insert(req_data)
    req_data['_id'] = str(req_data['_id'])
    return (json.dumps(req_data, default = datetime_to_string), 201)

@app.route('/quividiEntrance')
def get_quividi_entrance():
    documents = collectionQuividiEntrance.find()
    response = []
    for document in documents:
        document['_id'] = str(document['_id'])
        response.append(document)
    return json.dumps(response, default = datetime_to_string)

@app.route('/quividiEntrance/stats')
def get_quividi_entrance_stat():
    labels = ['far', 'close']
    response = dict((s,collectionQuividiEntrance.find({'event':s}).count()) for s in labels)
    return json.dumps(response)


#===================================Utils=======================================
def datetime_to_string(o):
    if isinstance(o, datetime.datetime):
        return o.__str__()

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
