from flask import Blueprint
import config as cfg
import os
import json
import pymongo
from flask import Flask
from flask import request
import datetime
from datetime import date
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
    article_to_save = request.get_json()
    print(article_to_save)
    # if article_to_save['image'] != None:
    # utils.toByteArray(article_to_save['image'])
    ## TO DO: Verification article conforme
    
    today = date.today().strftime("%d/%m/%Y")
    article_to_save['date'] = today
    saved_article_id = articleCollection.insert(article_to_save)


    # shaping the data to send back to the Front-End
    saved_article = article_to_save
    saved_article['_id'] = str(saved_article_id)
    print(saved_article)
    return (json.dumps(saved_article, default = datetime_to_string), 201)


@articles_api.route('/articles/<id>', methods=['PUT'])
def update_article(id):
    article = request.get_json()
    ## TO DO: Verification article conforme
    if articleCollection.find_one({"_id":ObjectId(id)}) == None:
        return ('Article not found', 404)
    
    updated_article_id = articleCollection.update({"_id":ObjectId(id)},{'$set':{'title':article['title'], 'category':article['category'], 'description':article['description'], 'content':article['content'], 'image':article['image'] }})  
    # shaping the data to send back to the Front-End
    updated_article = article
    updated_article['_id'] = str(id)
    return (json.dumps(updated_article, default = datetime_to_string), 201)



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





