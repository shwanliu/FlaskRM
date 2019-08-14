# -*- coding: utf-8 -*-
from flask import Flask, render_template, request
import os,shutil
import json 
import collections
import time
from flask_cors import *

import argparse
import sys
from datetime import datetime
import datetime
import random
import io

# 特征入库操作 数据库
from flaskext.mysql import MySQL
mysql = MySQL()
app = Flask(__name__)
CORS(app, resources=r'/*')
headers = {
    'Cache-Control' : 'no-cache, no-store, must-revalidate',
    'Pragma' : 'no-cache' ,
    'Expires': '0' ,
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
}
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'root'
app.config['MYSQL_DATABASE_DB'] = 'member'
app.config['MYSQL_DATABASE_HOST'] = '127.0.0.1'
app.config['MYSQL_DATABASE_PORT'] = 32768
mysql.init_app(app)

connect = mysql.connect()
cursor = connect.cursor()

# /  
@app.route("/")
def homePage():
    success = 0
    json_result = collections.OrderedDict()
    cursor.execute("select * from memberDate ")
    data = cursor.fetchall()
    json_result["success"] = success
    # print(data)
    return json.dumps(json_result)


@app.route("/searchDate", methods=['POST'])
def getDate():
    success = 0
    connect = mysql.connect()
    json_result = collections.OrderedDict()
    data = request.get_json()      # 获取 JOSN 数据
    account= request.json['account']     #  以字典形式获取参数
    print(account)

    if account is None:
        status = "badrRequest"
        json_result["success"] = success
        json_result["status "] = status
        return json.dumps(json_result) 
    try:
        cursor.execute("select * from memberDate where account=%s",account)
        res = cursor.fetchall()
        # connect.close()
        json_result["success"] = success
        print(res)
        result=[]
        for i in range(len(res)):
            result.append({'account':res[i][1],'date':res[i][2].strftime('%Y-%m-%d')})
        json_result["data"] = result
    except Exception as e:
        print("catch error : ",str(e))
        status = "Failed"
        success = 1
        json_result["success"] = success
    connect.close()
    return json.dumps(json_result)

if __name__ == '__main__':
    app.run(host='0.0.0.0',port = 5000, threaded=True)

