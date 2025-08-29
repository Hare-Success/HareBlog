---
id: AlmaLinux
title: Centos的替代AlmaLinux
authors: Hare
tags: [linux]
---

# AlmaLinux


## AlmaLinux介绍

[官方介绍](https://wiki.almalinux.org/)
~~~
AlmaLinux （打开新窗口）是一个开源且永久免费的企业级 Linux 发行版，由社区管理和驱动，专注于长期稳定性和强大的生产级平台。AlmaLinux OS 与 RHEL® 二进制兼容。AlmaLinux OS 基金会是一家 501(c)(6) 非营利组织，旨在管理该项目的所有权和治理。该基金会拥有 400 多名个人会员、100 多家镜像赞助商以及 25 多家企业赞助商。

这个Linux的发行版 相对也是稳定的，好多个人包括有的企业也都在用。

Centos停止维护后，就开始找替代品  这个目前看是个不错的选择。

在AlmaLinux中包管理器使用dnf，也可以使用yum(内部指向的还是dnf)
~~~

## Vmware安装AlmaLinux

1. ISO镜像下载
   * 阿里镜像站下载地址: https://mirrors.aliyun.com/almalinux/
   * AlmaLinux 官方下载: https://almalinux.org/get-almalinux/

2. 傻瓜式安装，具体不会的可以参考以下文章:
   * 官方权威: https://wiki.almalinux.org/documentation/installation-guide.html#installation

   
Vmware 安装就不多讲了，**注意:** 再选则版本的时候，选择其他:
![AlmaLinux](/img/problem/almalinux.png)

## AlmaLinux 安装后

其实界面整的挺好看，Hare刚打开后眼前一亮的感觉~
![AlmaLinux首页](/img/problem/almalinux首页.png)

### 替换软件源
换成国内的会快一点
~~~shell
  sed -e 's|^mirrorlist=|#mirrorlist=|g' \
      -e 's|^# baseurl=https://repo.almalinux.org|baseurl=https://mirrors.aliyun.com|g' \
      -i.bak \
      /etc/yum.repos.d/almalinux*.repo
~~~

## AlmaLinux安装Docker
基本命令都可以使用，【yum】同样可以，但虽然是yum其内部还是指向的 【dnf】

:::warning
使用 【dnf】时，安装stable repository镜像仓库时的命令 需要换成:
dnf config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
:::

[安装Docker](../docker/Docker安装.mdx)
