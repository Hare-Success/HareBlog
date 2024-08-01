---
id: dockerBackRun
title: Docker后台启动容器
authors: Hare
tags: [docker]
---

# Docker后台运行容器

**Docker有两种方式可以启动容器:**
+ [交互式启动](Docker容器命令.md)
+ 后台运行容器

## 后台运行命令 {#backDocker}

### `docker run `

```bash
docker run -d --name=自定义镜像名称 镜像名称
```
:::danger[注意了！！]
```bash
docker run -d --name=myubuntu ubuntu
```
**以上执行完后，其实启动了但会立马退出（也就是启动失败）。通过docker ps -a 可以看到启动记录。**

> 因为Docker容器生命周期与主线程挂钩，主线程停止容器就停止了。也就是说不是所有容器都可以使用-d模式！
> 
> 具体什么容器不能-d模式，比如交互式应用程序、图形界面应用程序等等。
:::

## 重新进入容器 {#goDocker}
通过 **ctrl+p+q**退出的容器，再次进入:
```bash
# 这是交互式的
# 比如 docker exec -it redis bash 进入redis的交互。
docker exec -it 镜像ID bash 
# 后台运行模式，执行过后还是后台运行。比如说使用exec -d,执行一个脚本
# docker exec -d 镜像ID bash /path/xx/test.sh
# 那么这个脚本就会在后台运行，
docker exec -d 镜像ID 
```
:::tip[attach命令]

**这个也是重新进入的命令**
```bash
docker attach 镜像ID
```
> **那么attach和exec区别就是:**
> + exec启动的一个新进程，即使exit退出后。容器不会停止
> + attach相反，exit后容器直接嘎
> 
> **一般-d模式下，通过exec再次进入**
:::

## 查看容器运行日志 {#logDocker}

### `docker logs`
```bash
docker logs 容器ID
```
**那么我们部署的微服务等项目这些日志该怎么处理，或者说怎么查看呢？**

## 查看容器内运行的进程 {#threadDocker}

### `docker top`
```bash
docker top 容器ID
```

## 查看容器内部细节 {#inspectDocker}

### `docker inspect`
```bash
docker inspect 容器ID
```
