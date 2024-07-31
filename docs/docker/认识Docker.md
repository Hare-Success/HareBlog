---
id: dockerBottom
title: 认识Docker
authors: Hare
tags: [docker]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# **简单认识Docker**

## Docker三兄弟

<Tabs>
  <TabItem value="images" label="镜像" default>
    拿Java类对标镜像，是不是清楚了 💑
  </TabItem>
  <TabItem value="container" label="容器">
    容器对标Java类new出来的实例，镜像 run出来的容器。
  </TabItem>
  <TabItem value="repository" label="仓库">
    存放镜像的仓库
  </TabItem>
</Tabs>

## Docker架构 {#dockerArchitecture}
![Docker架构图](/img/docker/docker-architecture.webp)

<details>
<summary>了解架构前，讲解什么是 Daemon</summary>

Daemon守护进程: 
想象一下，你的电脑是一家饭店，而Daemon就是那些工作的厨师和服务员。他们在你不用餐厅的时候也在工作，准备着下一餐的食材，确保餐厅的设施设备正常运行，或者清理餐具和桌面。尽管你可能没有直接看到他们，但他们的工作却是确保整个餐厅能够顺利运行的重要一环。

同样地，守护进程在计算机系统中就像这些默默工作的“员工”，它们可能负责管理网络连接、执行自动备份、提供网页服务，或者执行其他自动化任务。它们始终在后台运行，不需要用户交互，但却是系统正常运行所必需的重要部分。
在系统启动时自动启动，并一直运行，直到系统关闭或手动停止。
</details>

接下来我们简单串一下流程:

+ 客户端可以build构建、pull拉取、run容器！
+ 客户端的操作通知到了Daemon守护进程，进行执行！
+ 若本地没有可run的镜像，就要先去远程仓库pull拉取/build构建镜像，本地有可直接run！

## Docker能干什么 {#}
