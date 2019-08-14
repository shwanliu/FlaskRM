### 1. 开发工具：我使用的是VSCode，十分好用 强烈推荐！，配置好git等

### 2. 数据库的调试：
我用的docker部署
* 首先要安装你docker

* 然后安装mysql，并且启动你的mysql
* 按照这个操作https://www.cnblogs.com/areyouready/p/8948552.html，还有基本的mysql操作就可以了，建立表输入数据等

* 建议使用 MySQLWorkbench 来管理你的数据库，进行表的操作比较方便



### 2. 前端使用的ReactJS，轻松开发，和后端分离,官网 [https://reactjs.org/]使用的前端框架是CoreUI:[https://github.com/shwanliu/coreui-free-react-admin-template]
* 环境安装：部署的时候需要安装npm、nodejs才能支持使用，参考 https://www.cnblogs.com/dj3839/p/6617584.html

* 在frontEnd目录下执行npm start，就可以启动前端界面了,本地开发调试建议这样使用
* 同时这个可以打包成exe、dmg变成安装包，支持跨平台的
* 所有界面组件在src/view下，containers里面是界面布局，view下是许多小组件，page下是一些登陆或者404NotFound的错误界面提醒，
* 可以看React教程 https://www.runoob.com/react/react-tutorial.html ，js语法比较简单，很快能上手

### 3. 后台使用python编写，使用的是Falsk包，可以看app_flask.py中的import的包都有哪一些进行安装就好了需要安装一些依赖，本次时间有限，实现的是一个轻量级服务器，目前实现的是数据库的操作，可以参看POST的操作添加其他的操作（有能力以及时间的话建议使用golang十分轻便快捷，可实现高并发高吞吐量，但是目前好像不需要，这一些都是来自我师傅的教导[https://github.com/wanglianglin]）

### 4.数据库需要一些配置，包括数据库的地址还有端口、username和密码等，这些在app_flask.py中可以看到相关的配置

### 5. 关于前端部署
* 首先到frontEnd目录下，执行npm run build进行打包生成一个build文件，这个文件再传到我们的服务器上面，我们需要编写一个该web界面的配置如下：

    *   server {  
        listen      3000; \
        server_name  localhost;  \
        location / {  \
            root  "/usr/local/reactProjects/build"; \
            index index.html;
            #try_files   $uri /build/index.html; \
        }

        error_page   500 502 503 504  /50x.html; \
        location = /50x.html {  \
            root   html;  
        } \
        }

* 然后在你的nginx.conf进行配置，配置后restart你的nignix就好了！，记得你的端口要开放

* 遇到的一个问题：就是在你的package.json的配置需要用到 "homepage":".",这个配置，不然router的时候显示不了界面

### 6. 关于后端的部署
* 使用的是flask搭建的，这个使用python写的很容易理解，每一个路由对应这一个函数，我们看代码就可以看出来了，就不多解释了
* flask数据库的连接以及使用都可以查资料查找到的、还有对于http请求的处理包括http1.0新增的请求方式put delete等，都不多说！
* 建议使用虚拟环境下执行后端服务，本次开发我就建立了一个虚拟环境 \ 
    1. 进入虚拟环境：source /py3env/bin/activate ,这里的py3env就是我们创建的一个虚拟环境了
    2. 执行python3 app_flask.py，启动你的后端
    3. 推出虚拟环境：deactivate就可以推出当前的虚拟环境了

* 或者执行 uwsgi --http :5000 --wsgi-file app_flask.py --callable app，这边x.x.x.x是你的服务器内网ip哦,使用uwsgi。待补充

### 注意：前端需要访问的地址配置在 config.js里面！！！