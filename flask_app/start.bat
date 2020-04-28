

py -m pip install flask
py -m pip install  pymongo
set FLASK_APP=app.py
set FLASK_DEBUG=1
py -m pip install -U flask-cors


echo "virtual environnement setted"

flask run

exit