---
id: dockerRunRedis
title: Docker部署Redis
authors: Hare
tags: [docker,redis]
---

# Docker部署Redis
**redis.conf 配置文件下载地址:** [官网地址](https://redis.io/docs/latest/operate/oss_and_stack/management/config/)

## 创建挂载文件

在宿主机中创建以下两个目录文件:

* /usr/local/dockerdata/redis/data
* /usr/local/dockerdata/redis/conf

将配置文件下载到 conf 目录中

## 配置 redis.conf 文件
~~~bash
# 找到这句，注释掉！因为你要远程连接redis
bind 127.0.0.1

# By default Redis does not run as a daemon. Use 'yes' if you need it.
# 默认情况下Redis不作为守护进程运行
# 所以修改为 No
daemonize no

# 开启持久化
appendonly yes 

# When protected mode is on and if:
#
# 1) The server is not binding explicitly to a set of addresses using the
#    "bind" directive.
# 2) No password is configured.
#
# The server only accepts connections from clients connecting from the
# IPv4 and IPv6 loopback addresses 127.0.0.1 and ::1, and from Unix domain
# sockets.
保护模式说明:
1. bind 127.0.0.1 没有指定 + 没有requirepass password密码 +  protected-mode yes 能访问但是只能本机
2. bind 127.0.0.1 指定 or 指定requirepass password密码 + protected-mode yes 保护模式失去作用，靠的是你设置的密码或者bind 绑定机器
protected-mode yes
requirepass 123456

3. protected-mode no 可直接访问
~~~ 

## 启动redis
~~~bash
docker run --name redis --privileged=true --restart=always -p 6379:6379 -v /usr/local/dockerdata/redis/data:/data -v /usr/local/dockerdata/redis/conf/redis.conf:/etc/redis/redis.conf -d redis:6.0.8 redis-server /etc/redis/redis.conf
~~~

