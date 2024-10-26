---
id: dockerComposeRunSpringCloud
title: DockerCompose部署微服务
authors: Hare
tags: [docker,springCloud,dockerCompose]
---

# DockerCompose部署服务(低级)

:::note

上篇文章 [Docker部署微服务](../Docker部署微服务/Docker部署微服务项目.md) 这种方式非常麻烦，项目一个个package在上传服务器在创建Dockerfile
最后docker build构建镜像，一个个docker run启动。那我们这篇文章简化一部分内容【不用在一个个启动，而通过一个docker-compose配置自启所有容器】

高手请跳过，循循渐进的文章。高手们直接跳过吧
:::

## 简易介绍DockerCompose

* 目前Hare个人能了概的: 类似‘自动化脚本’，一个个下来编排镜像控制网络。达到一个命令启所有容器效果。
* [官方解释](https://docs.docker.com/compose/)
  * Docker Compose is a tool for defining and running multi-container applications. It is the key to unlocking a streamlined and efficient development and deployment experience.<br/>

    Compose simplifies the control of your entire application stack, making it easy to manage services, networks, and volumes in a single, comprehensible YAML configuration file. Then, with a single command, you create and start all the services from your configuration file.<br/>

    Compose works in all environments; production, staging, development, testing, as well as CI workflows. It also has commands for managing the whole lifecycle of your application:<br/>

    * Start, stop, and rebuild services
    * View the status of running services
    * Stream the log output of running services
    * Run a one-off command on a service

## DockerCompose安装(Linux)
[官网地址，以官方命令为主](https://docs.docker.com/compose/install/)

1. ~~~bash
   # 下载
   curl -SL https://github.com/docker/compose/releases/download/v2.29.6/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
   ~~~
2. ~~~bash
   #赋予权限
   chmod +x /usr/local/bin/docker-compose
   ~~~
3. ~~~bash
   #检查
   docker-compose version
   ~~~
## DockerCompose配置文件

[自己看官网哈](https://docs.docker.com/reference/compose-file/)


## 开始部署

### 准备工作
* Nacos1.4.6 镜像
* Mysql8.0.27 镜像
* 两个服务(A提供者和B消费者-Feign) 镜像
  * 将服务package后，上传服务器。在一个目录中创建Dockerfile。以下是Dockerfile内容
  * ~~~bash
      FROM openjdk:8u141-slim
      VOLUME /tmp
      ADD A.jar app.jar
      ENTRYPOINT ["java","-jar","/app.jar"]
    ~~~

### 创建docker-compose.yml配置文件

~~~bash title='docker-compose.yml 配置内容'
name: broad_docker
 services:
  A:
   image: broad_fegin:0.1
   container_name: broad_fegin_compose
   ports:
    - "7780:7780"
   networks:
    - docker_net
   depends_on:
    - mysql
    - nacos

  B:
   image: broad_children:0.1
   container_name: broad_fegin_children_compose
   ports:
    - "7790:7790"
   networks:
    - docker_net
   depends_on:
    - mysql
    - nacos

  mysql:
   image: mysql:8.0.27
   environment:
     MYSQL_ROOT_PASSWORD: '123456'
   container_name: broad_mysql
   command:
    --default-authentication-plugin=mysql_native_password
   ports:
    - "3306:3306"
   volumes:
    - ./mysql/init/:/docker-entrypoint-initdb.d/
    - /usr/local/dockerdata/mysql_8/log:/var/log/mysql
    - /usr/local/dockerdata/mysql_8/data:/var/lib/mysql
    - /usr/local/dockerdata/mysql_8/conf:/etc/mysql/conf.d
   networks:
    - docker_net

  nacos:
   image: nacos/nacos-server:v1.4.6
   environment:
    - MODE=standalone
   container_name: broad_nacos
   ports:
    - "8848:8848"
   volumes:
    - /usr/local/dockerdata/nacos/bin:/home/nacos/bin
    - /usr/local/dockerdata/nacos/logs:/home/nacos/logs
    - /usr/local/dockerdata/nacos/conf:/home/nacos/conf
    - /usr/local/dockerdata/nacos/data:/home/nacos/data
   networks:
    - docker_net
   depends_on:
    - mysql

 networks:
    docker_net:
~~~

```
转化命令后: docker run --name nacos  -p 8848:8848  --network docker_net -e MODE=standalone -v /usr/local/dockerdata/nacos/bin/bin:/home/nacos/bin -v /usr/local/dockerdata/nacos/logs/logs:/home/nacos/logs -v /usr/local/dockerdata/nacos/conf/conf:/home/nacos/conf -v /usr/local/dockerdata/nacos/data/data:/home/nacos/data -d nacos/nacos-server:v1.4.6
是不是一目了然!!!!这块大家看看官网配置文件，或者网上搜！很多的 一眼就能看明白~~~
最终使用: docker-compose up -d 启动就好了
```




### 一些问题解决思路

1. nacos 需要初始化sql，那这些sql就要在mysql服务中配置上
~~~bash
# sql文件在init目录下，绑定在mysql的找个文件目录下初始化/docker-entrypoint-initdb.d/
./mysql/init/:/docker-entrypoint-initdb.d/
~~~

2. 碰到 No DataSource set问题
这个问题就是因为mysql没有初始化nacos的数据表，或者就是nacos里配置的mysql连接不对导致，大家可以着重看看这两点
**Hare碰到这问题解决方案: 哪哪都配置的没问题，最后看到数据库user表有两个root用户，一个是开放所有，一个是localhost！删除掉localhost的就可以了**

3. 服务的bootstrap.yml配置文件，配置的nacos地址是: nacos（dockercompose.yml中服务名称）:8848。一直注册不上去！
这个就找服务的配置文件问题吧，如果nacos正常启动 正常访问。大概率就是服务配置的nacos配置不是正确的

4. depends_on 配置并不能保证启动顺序，自己研究研究吧！Hare没有研究


:::note
一个简单的使用docker-compose部署就ok了，其中一些配置什么按自己需要自己加就可以了

**请关注后续: Maven构建镜像+docker-compose+GitHub-Action自动构建部署微服务项目**
:::