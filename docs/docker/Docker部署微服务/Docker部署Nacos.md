---
id: dockerRunNacos
title: Docker部署Nacos
authors: Hare
tags: [docker,nacos]
---

# Docker部署Nacos

:::note[前言] 
**关于Mysql的部署:** [Mysql部署](../Docker容器/Docker数据卷/Docker部署Mysql挂载目录.md)

Hare 通过Mysql数据库来进行启动nacos，所以启动Nacos前必定要先启动一个Mysql容器！！！！！！
:::

## 环境准备

基于Linux云服务器

* nacos镜像版本1.4.6 
    * ~~~bash
      # 官方地址: https://hub.docker.com/r/nacos/nacos-server/tags
      docker pull nacos/nacos-server:v1.4.6
      ~~~
* Docker版本26.0.0 [安装文章](../../Docker安装.mdx)
* Mysql8 [Mysql容器](../Docker容器/Docker数据卷/Docker部署Mysql挂载目录.md)


## 创建数据卷挂载文件

:::note[前言]
我的做法是先启动一个nacos，通过docker cp命令将配置文件cp到宿主机目录
~~~bash
mkdir -p /usr/local/dockerdata/{conf,data,logs,bin}
~~~
还有一种做法不用先启动:直接创建宿主机的挂载目录创建配置文件（需要自己找配置）做法感觉不稳妥。。。。
:::

### 启动nacos
~~~bash
docker run --name nacos -d nacos/nacos-server:v1.4.6
~~~ 

### cp配置目录

~~~bash
# 这里我将bin配置文件一起cp了
docker cp nacos-server:/home/nacos/conf /usr/local/dockerdata/nacos/
docker cp nacos-server:/home/nacos/logs /usr/local/dockerdata/nacos/
docker cp nacos-server:/home/nacos/bin /usr/local/dockerdata/nacos/
docker cp nacos-server:/home/nacos/data /usr/local/dockerdata/nacos/ 
~~~

### 修改宿主机conf配置文件

**修改的是application.properties文件**

~~~bash title='若自己有需要，可按自需修改'

原配置
spring.datasource.platform=${SPRING_DATASOURCE_PLATFORM:""}
修改后配置 # "" 换成mysql
spring.datasource.platform=${SPRING_DATASOURCE_PLATFORM:mysql} 

#这地方写的 1 就把url.1注释掉就行
db.num=${MYSQL_DATABASE_NUM:1} 

原配置
db.url.0=jdbc:mysql://${MYSQL_SERVICE_HOST}:${MYSQL_SERVICE_PORT:3306}/${MYSQL_SERVICE_DB_NAME}?${MYSQL_SERVICE_DB_PARAM:characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false}
修改后配置
db.url.0=jdbc:mysql://192.168.1.12:3306/nacos?${MYSQL_SERVICE_DB_PARAM:characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false}
另一种写法
db.url.0=jdbc:mysql://${MYSQL_SERVICE_HOST:192.168.1.12}:${MYSQL_SERVICE_PORT:3306}/${MYSQL_SERVICE_DB_NAME:nacos}?${MYSQL_SERVICE_DB_PARAM:characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false}
#db.url.1=jdbc:mysql://${MYSQL_SERVICE_HOST}:${MYSQL_SERVICE_PORT:3306}/${MYSQL_SERVICE_DB_NAME}?${MYSQL_SERVICE_DB_PARAM:characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false}

原配置
db.user=${MYSOL SERVICE USER}
db.password=${MYSOL SERVICE PASSWORD}
修改后配置
db.user=root
db.password=123456
另一种写法
db.user=${MYSOL SERVICE USER:root}
db.password=${MYSOL SERVICE PASSWORD:123456}

nacos.core.auth.default.token.secret.key=${NACOS_AUTH_TOKEN:NjZhiougtMhe2EyNGMxNjNkNTgzY2ExNjAwYTZjMmNlZjczMjgyY2ZkZDcxMzBjNzM5ZjlkNmFhM2JlZTM2Mw==}
~~~

:::warning
最后一个配置nacos.core.auth.default.token.secret.key必须给一个base64编码的key(怎么生成都行)。必须保证>32位
~~~bash
1. openssl rand -hex 32 # 获取秘钥
2. 再去在线Base64 编码
~~~

**如果不配置这个，即使启动成功，sql脚本也有了，用户也创建了！抱歉 还是给你报错 账户或密码错误,给出以下报错**
```
caused: The specified key byte array is 0 bits which is not secure enough for any JWT HMAC-SHA algorithm.The JWT JWA Specification(RFC 7518,
Section 3.2)states that keys used with HMAC-SHA algorithms MUST have a size>=256 bits(the key size must be greater than or equal to the hash output size).Consider 
using the io.jsonwebtoken.security.Keys #secretKeyFor(SignatureAlgorithm)method to create a key guaranteed to be secure enough for your preferred HMAC-SHA algorithm.
# See https: //tools.ietf.org/html/rfc7518#section-3.2 for more information.;
```
具体原因可能哪地方默认开了鉴权~~~具体Nacos社区机器人回答:<br/>

:::note
根据你的描述和提供的信息，Nacos登录提示账号密码错误，并且提到需要配置nacos.core.auth.default.token.secret.key，这通常意味着Nacos服务端已经启用了鉴权机制，即使你在配置文件中没有直接看到nacos.core.auth.enabled=true这一行配置，也可能是默认开启或者通过其他方式（如默认配置、环境变量等）启用了鉴权。Nacos 1.4.6版本默认鉴权行为可能会依赖于特定的配置或环境变量状态。
分析原因：
鉴权默认开启：部分版本的Nacos可能默认开启了鉴权功能，尤其是当你使用Docker镜像部署时，环境变量的设置可能会隐式地启用鉴权。
密钥未配置：登录失败提示需要配置nacos.core.auth.default.token.secret.key，表明服务端鉴权过程中需要一个有效的JWT密钥来验证客户端请求，而当前可能使用的是默认或无效的密钥。
身份认证信息：除了密钥外，服务端身份识别信息（nacos.core.auth.server.identity.key 和 nacos.core.auth.server.identity.value）也需要正确配置，以确保集群内部通信安全。
<br/>
**解决步骤：**
* 步骤1：配置JWT密钥
目的：确保鉴权使用的JWT密钥有效且与集群中所有节点一致。
操作：在Nacos的配置文件（如application.properties）中添加或修改以下配置：
nacos.core.auth.default.token.secret.key=YOUR_BASE64_ENCODED_SECRET_KEY

替换YOUR_BASE64_ENCODED_SECRET_KEY为一个至少32字符长的Base64编码字符串作为密钥。
* 步骤2：配置服务端身份识别信息（如有必要）
目的：确保集群间通信安全。
操作：
nacos.core.auth.server.identity.key=YOUR_SERVER_IDENTITY_KEY
nacos.core.auth.server.identity.value=YOUR_SERVER_IDENTITY_VALUE

请替换YOUR_SERVER_IDENTITY_KEY和YOUR_SERVER_IDENTITY_VALUE为适当的值。
* 步骤3：确认鉴权状态与重启服务
目的：确认鉴权是否已开启及使配置生效。
操作：尽管通常修改鉴权相关配置不需要重启Nacos服务，但鉴于你是通过Docker部署的，可能需要重启Docker容器以确保新配置生效。可以通过以下命令重启容器（假设你已经更新了相应的环境变量）：
docker restart CONTAINER_NAME_OR_ID

**解释：**
以上步骤主要是为了确保Nacos鉴权机制能够正常工作，避免因密钥缺失或不匹配导致的登录失败。配置JWT密钥是核心步骤，因为这是验证用户身份的基础。同时，正确的服务端身份识别信息配置对于维护集群内部安全通信也是至关重要的。重启容器是为了确保所有更改生效，特别是在使用环境变量进行配置变更的情况下。
:::

叨叨一大堆，反正就是生成个值给它就行！ 最后 记得先停止上述启动过的容器，上述两步作用就是想 cp 下配置文件



## Mysql中关于nacos的脚本

直接贴一个官方地址: [Nacos官方sql脚本](https://github.com/alibaba/nacos/blob/master/distribution/conf/mysql-schema.sql)
<br/>
执行完脚本后,需要再手动添加用户~默认账户密码就是 nacos
~~~sql
INSERT INTO users (username, password, enabled) VALUES ('nacos', '$2a$10$EuWPZHzz32dJN7jexM34MOeYirDdFAZm2kuWj7VEOJhhZkDrxfvUu', TRUE);
INSERT INTO roles (username, role) VALUES ('nacos', 'ROLE_ADMIN');
~~~


## 启动Nacos

~~~bash title='启动nacos'
docker run --name nacos --privileged=true --restart=always -p 8848:8848 -p 9848:9848 -p 9849:9849 -e MODE=standalone -v /usr/local/dockerdata/nacos/bin/bin:/home/nacos/bin -v /usr/local/dockerdata/nacos/logs/logs:/home/nacos/logs -v /usr/local/dockerdata/nacos/conf/conf:/home/nacos/conf -v /usr/local/dockerdata/nacos/data/data:/home/nacos/data -d nacos/nacos-server:v1.4.6
~~~ 

### 部分命令详解
[Nacos 官网Docker相关参数](https://nacos.io/zh-cn/docs/v2/quickstart/quick-start-docker.html)

* -e MODE=standalone 【单机模式】
* --privileged=true 权限相关
* --restart=always 容器停止自动重启

以上完成后，即可访问: https://ip:8848/nacos

