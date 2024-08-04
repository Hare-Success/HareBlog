---
id: dockerVolum
title: Docker容器卷
authors: Hare
tags: [docker]
---

# Docker容器卷

:::tip[注意啦！！]
开始前先说一个点: 挂载容器卷时在挂在命令后加上 --privileged=true
主要解决权限问题，即使不加或许也没问题，但加上更没问题！
:::

## 数据卷是做什么的
> 两个字【备份】！将容器内重要数据挂载到宿主机的目录中。即使容器 Game Over但一些重要的数据备份在了宿主机的上。
> 
> **注意了数据卷 13的是，宿主机写容器能读到，容器写宿主机能读到，即使stop容器。在宿主机写然后start容器。容器能读到！**

## 数据源简单使用

```bash title='案列ubuntu相关命令'
docker run -it --privileged=true -v (宿主机目录) /tmp/docker_data:(容器内部目录)/tmp/docker_data --name=myub ubuntu bash
```
:::tip[注意啦]
* 宿主机目录和容器目录，如果原先没有docker会自动创建！
* 以上数据卷挂载默认方式rw方式（宿主机and容器都能读写）完整命令在容器目录后加:rw
```bash title='完整命令'
docker run -it --privileged=true -v (宿主机目录) /tmp/docker_data:(容器内部目录)/tmp/docker_data:rw --name=myub ubuntu bash
```
* **若只想容器只读不写，将rw换为ro（read only）即可**
:::
