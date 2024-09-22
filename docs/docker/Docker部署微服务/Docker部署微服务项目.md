---
id: dockerRunSpringCloud
title: Docker部署微服务
authors: Hare
tags: [docker,springCloud]
---

# Docker部署微服务(单机版)

:::note
以繁琐的方式尝试部署微服务项目，基本步骤Hare觉得都是一样的！会一个就能会其他~~~
本次部署主要针对三个服务其中包括使用了Nacos,Redis,OpenFegin服务间调用！
:::

## 环境准备
* 一个微服务项目 三个服务 A,B,C(B,C存在fegin调用)
* Nacos1.4.6
* Redis6.0.8
* Mysql8.0.27

:::warning[容器启动顺序]
启动前，考虑下每个容器的启动顺序！
Mysql->Nacos/Redis->A,B,C服务，服务排在最后！
:::

## 部署服务

[部署Mysql](../Docker容器/Docker数据卷/Docker部署Mysql挂载目录.md)<br/>
[部署Redis](./Docker部署Redis.md)<br/>
[部署Nacos](./Docker部署Nacos.md)

### 部署微服务
:::note[总体思路]
本地打好Jar包，上传服务器自创建的一个目录里，在该目录里同时创建Dockerfile文件。然后docker build 构建images，最后docker run 启动~~~<br/>

只拿一个服务说事，其余俩都是照猫画虎 cv的事。
:::

* 创建jar&Dockerfile存放目录: /usr/local/myBroad
* ~~~bash title='构建服务镜像'
  docker build -t broad:1.1 .
  ~~~
* ~~~bash title='启动容器'
  docker images
  docker run --name broadA -p 7780:7780 -d broad:1.1
  ~~~
* ~~~bash title='查看日志'
  docker ps
  docker logs 容器ID 
  ~~~
  
:::warning
1. 上述启动服务时，Hare是没有给服务日志挂载数据卷，大佬们如有需要 自行创建挂载目录挂载。
2. fegin调用配置的url的ip地址，得是提供者服务的ip也就是容器的内网ip（172开头的）。
:::

## FAQ
1. 本地nacos配置的地址写的是容器内网ip（172开头），启动服务后那Nacos注册的地址是容器内网IP（172开头）
:::note
Docker中网络部分默认使用的就是bridge模式，也就是每个容器都有一个属于自己的IP。即注册到nacos的地址就是每个服务自己的内网ip
单机情况下，只要是使用的就是默认的bridge网络模式~~容器之间是相通的。
~~~bash title='查看容器IP'
docker ps
docker inspect 容器ID
~~~
:::

2. 本地nacos配置的地址写的是宿主机的内网ip
:::note
这个能行吗？答案是能行~但是有一点需要非常注意<br/>
网络模式 要换成 Host模式，所有容器都要在启动的时候换成host模式。
~~~bash 
docker run --name myname --network host
~~~
**注意了，使用Host模式时 -p 8080:8080 端口映射就没必要了**
:::

3. bridge模式中，容器IP是会改变的问题！！！
:::note
docker提供了另一种方式，使用 **容器服务名:port**方式。<br/>
这种方式模式需要自己创建一个网络，默认还是bridge~但自己创建的就是可以**容器服务名:port**使用这种方式<br/>
这样就解决，容器ip会变动问题
~~~bash title='创建自己的网络'
docker network create myNet
docker network ls #查看

#启动时指定网络
docker run --name myname --network myNet
~~~
这样在服务配置文件中，即可使用 **容器名:port**的方式。
:::