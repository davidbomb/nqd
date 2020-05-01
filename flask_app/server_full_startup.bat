cd "batch"
start start_mongo.bat
call init_env.bat
cd "batch"
call install_lib.bat
cd ".."
flask run
