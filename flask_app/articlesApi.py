from flask import Blueprint
import config as cfg
import os
import json
import pymongo
from flask import Flask
from flask import request
import datetime
from bson import ObjectId
import models as models
from flask_cors import CORS
import utils


articles_api = Blueprint('articles_api', __name__)
CORS(articles_api)

client = cfg.client
db = client['dashboard']
articleCollection = db['articles']



#====================================ARTICLES========================================

@articles_api.route('/articles', methods=['GET'])
def get_all_articles():
    articles = articleCollection.find()
    response = []
    for article in articles:
        article['_id'] = str(article['_id'])
        response.append(article)
    return json.dumps(response, default = datetime_to_string)



@articles_api.route('/articles/<id>', methods=['GET'])
def get_article(id):
    article = articleCollection.find_one({"_id":ObjectId(id)})
    response = []
    if article == None:
        return ('Article not found', 404)
    else:
        article['_id'] = str(article['_id'])
        response.append(article)
        return json.dumps(response, default = datetime_to_string)



@articles_api.route('/articles', methods=['POST'])
def save_article():
    req_data = request.get_json()
    ## TO DO: Verification article conforme

    articleCollection.insert(req_data)
    #req_data['_id'] = str(req_data['_id'])
    return (json.dumps(req_data, default = datetime_to_string), 201)


@articles_api.route('/articles', methods=['PUT'])
def update_article():
    article = request.get_json()
    ## TO DO: Verification article conforme
    if articleCollection.find_one({"_id":ObjectId(article['_id'])}) == None:
        return ('Article not found', 404)
    
    articleCollection.update({"_id":ObjectId(article['_id'])},{'$set':{'title':article['title'], 'category':article['category'], 'description':article['description'], 'content':article['content'] }})  
    return (json.dumps(article, default = datetime_to_string), 201)



@articles_api.route('/articles/<id>', methods=['DELETE'])
def delete_article(id):
    deleted_article = articleCollection.remove({"_id":ObjectId(id)})     
    response = []
    if deleted_article['n'] == 0:       # n is the number of deleted articles returned by the request
        return ('Article not found', 404)
    else:
        response.append(deleted_article)
        return json.dumps(response, default = datetime_to_string)







def datetime_to_string(o):
    if isinstance(o, datetime.datetime):
        return o.__str__()





