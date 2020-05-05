from flask import jsonify
import config as cfg
import os
import json
from flask import Flask
from flask import request
import datetime
import models as models

def add_headers(resp):
    if type(resp) == dict:
        resp['headers'] = {'Access-Control-Allow-Origin', '*'}
    else:
        resp.headers.add('Access-Control-Allow-Origin', '*')