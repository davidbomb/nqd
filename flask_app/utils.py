from flask import jsonify
import config as cfg
import os
import json
import io
from flask import Flask
from flask import request
import datetime
import models as models
from PIL import Image
from bson import Binary


def add_headers(resp):
    if type(resp) == dict:
        resp['headers'] = {'Access-Control-Allow-Origin', '*'}
    else:
        resp.headers.add('Access-Control-Allow-Origin', '*')

def toByteArray(img):
    # img = Image.open('test.jpg')
    imgByteArr = io.BytesIO()
    img.save(imgByteArr, format='PNG')
    print(imgByteArr.getvalue())
    return imgByteArr.getvalue()