---
id: dockerBuildJdk
title: Docker制作JDK17镜像
authors: Hare
tags: [docker]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Docker制作JDK17镜像

~~~
项目中使用的是JDK8，不过JDK都已经上20了！赶紧玩玩高版本，说不定以后用得上
~~~

## 准备上传工作

### 下载JDK17

<Tabs>
  <TabItem value="JDK17.0.11" label="JDK17.0.11" default>
    https://pan.baidu.com/s/1XgYHps5ISrDXum33zuCCYg?pwd=1475
  </TabItem>
  <TabItem value="JDK17.0.10" label="JDK17.0.10">
   https://pan.baidu.com/s/1pHP2QulSthS7PhKnNeQsyA?pwd=1475
  </TabItem>
</Tabs>

### 上传JDK并创建Dockerfile
~~~warning[注意]
Dockerfile文件和JDK安装包要在同一目录下！！！
~~~

**文件路径: /usr/buildJdkImage [自己创建，并非 非得用我的路径]**
1. 上传JDK17至以上路径
2. ~~~bash
    touch Dockerfile 或 vim Dockerfile
   ~~~

## 编写Dockerfile

~~~bash title=‘Dockerfile文件’
#基础镜像
FROM centos:7

ENV MYPATH /usr/local

WORKDIR $MYPATH

#安装vim编辑器
RUN yum -y install vim
#安装ifconfig命令
RUN yum -y install net-tools

# 字体库安装
RUN yum -y install fontconfig
RUN mkdir -p /usr/share/fonts/
COPY ./font/simsun.ttc /usr/share/fonts/
COPY ./font/msyh.ttc /usr/share/fonts/
COPY ./font/msyhbd.ttc /usr/share/fonts/
COPY ./font/msyhl.ttc /usr/share/fonts/
RUN  chmod 755 /usr/share/fonts/*
RUN fc-cache -fv

# JDK17安装
ADD jdk-17_linux-x64_bin.tar.gz /usr/local/java
# 设置JAVA_HOME环境变量
ENV JAVA_HOME=/usr/local/java/jdk-17.0.12/
# 将JDK的bin目录添加到PATH环境变量中
ENV CLASSPATH=.:$JAVA_HOME/lib/jrt-fs.jar:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
ENV PATH=$PATH:$JAVA_HOME/bin

#校准容器时间
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/timezone

#切换容器字体编码
RUN localedef -c -f UTF-8 -i zh_CN zh_CN.utf8
RUN echo 'LANG="zh_CN.UTF-8"' > /etc/locale.conf
ENV LANG zh_CN.UTF-8
ENV LC_ALL zh_CN.UTF-8

~~~

## build镜像

~~~bash title='docker build'
#看清楚最后面有一个点................
docker build -t image名称:标签tag .
[docker build -t centos_jdk17:17.0.11 .]
~~~
