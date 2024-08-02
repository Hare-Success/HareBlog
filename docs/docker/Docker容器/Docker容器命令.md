---
id: dockerRun
title: Docker容器命令
authors: Hare
tags: [docker]
---

# Docker启动容器

## Docker启动命令 {#dockerRuns}

### `docker run` 

```bash title='交互式启动命令'
# 在需要docker交互式启动容器时: 要加 -it 同时后面跟一个交互shell->bash
# bash可以为 /bin/bash  也可以不写docker会自动加
docker run -it --name=自定义容器名称 镜像名称 bash
```
<details>
<summary>什么是交互式启动</summary>
> &nbsp;&nbsp;&nbsp;&nbsp;见名知义，我们需要与这个容器进行“互动”。比如说:我们在虚拟机装了Linux系统，那么我们得需要操作这个系统吧！
所以我们需要一个终端（shell终端）。在比如我们在windows中cmd终端进行命令交互。
也就是说当我们启动了一个centos容器，我们需要交互式启动因为要和这个centos容器进行终端交互。
</details>

## Docker容器退出命令 {#exitDocker}

### `exit` 
> 退出后，容器停止直接挂掉

### `ctrl+p+q` 
> 退出后，容器不会停止依然坚挺

## Docker查看运行容器命令 {#psDocker}

### `docker ps` 
> 查询正在运行的容器，**若想查询包含停止的容器执行以下命令:**

```bash
docker ps -a
docker ps -n 2 # 控制条数
```
## 启动已停止容器 {#runStopDocker}

### `docker start`

```bash
docker start 容器ID/名称
```
## 重启容器 {#restartDocker}

### `docker restart`

```bash
docker restart 容器ID/名称
```


## 停止容器 {#killStopDocker}

### `docker stop`

```bash
docker stop 容器ID/名称
# 强制停止
docker kill 容器ID/名称
```

## 删除停止的容器 {#removeDocker}

### `docker rm`

```bash
docker rm 容器ID/名称
```

## 强制删除运行容器 {#removeKillDocker}

### `docker rm -f` 

```bash
docker rm -f 容器ID/名称
```

## 提交新的镜像 {#newImagesDocker}

### `docker commit`
```bash
docker commit -m="提交信息" -a="作者" 容器ID 镜像名称:tag
```
