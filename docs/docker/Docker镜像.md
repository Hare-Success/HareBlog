---
id: dockerImages
title: Docker镜像
authors: Hare
tags: [docker]
---

# **Docker镜像相关学习**

## **镜像是什么?**
先来看看 **停止中国服务的docker** 怎么说的: <br/>
:::info
An image is a read-only template with instructions for creating a Docker container. Often, an image is based on another image, with some additional customization. For example, you may build an image which is based on the ubuntu image, but installs the Apache web server and your application, as well as the configuration details needed to make your application run.
:::
巴啦啦一大堆，个人理解什么意思呢:
:::note
镜像就是 "java类"，你在类里面可以定义方法、属性。同样你可以在pull下来的镜像中安装你所需要的东西。
java类可以 new 对象。docker images 就可以生成一个容器！💨[容器相关链接](Docker原理.md)
:::

## 镜像命令

:::note
**查询镜像列表表头含义介绍:** <br/>
**REPOSITORY:** 镜像名称 <br/>
**TAG:** 版本号 <br/>
**IMAGES ID:** 镜像ID <br/>
**CREATED:** 创建时间 <br/>
**SIZE:** 镜像大小
:::

### `docker images` {#dockerImages}
```bash title='查询本地镜像列表'
docker images
docker images -q # 只显示镜像ID
```

### `docker search` {#search}
```bash title='搜索镜像'
docker search redis
docker search redis:8 # 指定版本号
docker search redis --limit 2 # 限制查询条数
```

### `docker rmi` {#rmiImages}
```bash title='删除镜像'
docker rmi 镜像名称 # 根据名称删除
docker rmi 镜像ID # 根据镜像ID
🚫 docker rmi -f ${docker images -qa} # 删除全部镜像
```

### `docker pull` {#imagesPull}
```bash title='拉取镜像'
docker pull 镜像名称 # 默认不指定版本号，拉取最新的
docker pull 镜像名称:版本号
```
