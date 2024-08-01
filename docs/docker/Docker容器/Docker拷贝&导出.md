---
id: dockerCopyAndExport
title: Docker拷贝文件&导出导入容器
authors: Hare
tags: [docker]
---

## 容器拷贝文件到主机 {#copyDocker}

### `docker cp`
```bash
docker cp 容器ID:容器内路径 目的主机路径
```

## 导出容器 {#exportDocker}

### `docker export`
```bash
docker export 容器ID > xxx.tar
```

## 导入容器 {#importDocker}

### `docker import`
生成新的镜像，启动容器后里面之前创建的文件还是存在的！
```bash
# 通过管道符 导入容器生成新的镜像
cat xxx.tar | docker import - 用户名/镜像名称:版本号
```
