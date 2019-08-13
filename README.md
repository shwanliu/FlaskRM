### 1.开发工具：我使用的是VSCode，十分好用 强烈推荐！

### 2.数据库的调试：
我用的docker部署
* 首先要安装你docker

* 然后安装mysql，并且启动你的mysql
* 按照这个操作https://www.cnblogs.com/areyouready/p/8948552.html，还有基本的mysql操作就可以了，建立表输入数据等

* 建议使用 MySQLWorkbench 来管理你的数据库



### 2.前端使用的ReactJS，轻松开发，和后端分离,官网(https://reactjs.org/),使用的前端框架是CoreUI https://github.com/shwanliu/coreui-free-react-admin-template，可以参考这个进行开发
* 环境安装：部署的时候需要安装npm、nodejs才能支持使用，参考 https://www.cnblogs.com/dj3839/p/6617584.html

* 在frontEnd目录下执行npm start，就可以启动前端界面了
* 同时这个可以打包成exe、dmg变成安装包
* 所有界面组件在src/view下，containers里面是界面布局，view下是许多小组件，page下是一些登陆或者404NotFound的错误界面提醒，
* 可以看React教程 https://www.runoob.com/react/react-tutorial.html ，js语法比较简单，很快能上手

### 3.后台使用python编写，使用的是Falsk包，可以看app_flask.py中的import的包都有哪一些进行安装就好了需要安装一些依赖，本次时间有限，实现的是一个轻量级服务器，目前实现的是数据库查找操作，可以参看POST的操作添加其他的操作（有能力的话建议使用golang十分轻便快捷，可实现高并发高吞吐量，但是目前好像不需要）

### 4.数据库需要一些配置，包括数据库的地址还有端口、username和密码等，这些在app_flask.py中可以看到相关的配置

### 注意：前端需要访问的地址配置在 config.js里面！！！