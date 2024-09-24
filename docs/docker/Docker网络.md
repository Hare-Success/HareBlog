---
id: dockerNetwork
title: Docker网络
authors: Hare
tags: [docker]
---

# Docker网络认识

## Bridge(桥接模式)
[官网bridge地址](https://docs.docker.com/engine/network/drivers/bridge/)

Docker中若没有指定~默认的就是bridge模式 **[查看: docker inspect 容器id | tail -n 20]** 

### 相关原理图
:::note
使用ifconfig/ip addr可看到宿主机有一个docker0的网桥。安装启动docker后这个docker0就会出现。<br/>
而这个docker0充当一个接口的作用。俗称网桥。我们看如下图:
:::

![Docker-Bridge模式](/img/docker/bridge.png)

化繁入简解释下: docker0是一个接口一个网桥，而每个容器都有属于自己的网络eth0。每个容器对一个网桥docker0上的一个接口veth(一一对应)。
最后网桥连接宿主机！**最终达到目的，容器与宿主机互通，容器与容器互通(在一个docker中)**<br/>
<br/>
bridge模式中，每个容器启动后都会有一个属于容器内部的一个ip(172....开头)。

:::warning[官方警告]

~~~
The default bridge network is considered a legacy detail of Docker and is not recommended for production use. <br/>
Configuring it is a manual operation, and it has technical shortcomings.

💨总的说默认的bridge模式存在缺陷，不建议在生产使用~ 需要我们自定义一个网络(默认bridge桥接即可)
~~~

~~~
All containers without a --network specified, are attached to the default bridge network. This can be a risk, as unrelated stacks/services/containers are then able to communicate.
Using a user-defined network provides a scoped network in which only containers attached to that network are able to communicate.

💨所有未指定--网络的容器都会连接到默认桥接网络。 这可能会带来风险，因为不相关的堆栈/服务/容器都可以进行通信
~~~

~~~
Containers on the default bridge network can only access each other by IP addresses, unless you use the --link option, which is considered legacy. On a user-defined bridge network, containers can resolve each other by name or alias.
Imagine an application with a web front-end and a database back-end. If you call your containers web and db, the web container can connect to the db container at db, no matter which Docker host the application stack is running on.
If you run the same application stack on the default bridge network, you need to manually create links between the containers (using the legacy --link flag). These links need to be created in both directions, so you can see this gets complex with more than two containers which need to communicate. Alternatively, you can manipulate the /etc/hosts files within the containers, but this creates problems that are difficult to debug.

💨大体就是说 默认的bridge桥接模式，只能以ip+port(但是bridge模式下，容器的内网ip是会变换的)💨
当你使用ip+port定义，一旦更换了ip就傻眼了~而自定义的网络(桥接)可以使用: 容器服务名:port的方式！！！！！
~~~
:::

So，我们还是创建一个属于自己的网络吧(默认桥接bridge)~
### 创建自定义网络
~~~bash 
docker network create my-network

# 查看
docker network ls

#启动容器时指定网络
docker run --network my-network 
~~~
:::note
上述已经说过，使用自定义的网络时。可直接使用 **容器名:port**
~~~yaml title='例如naocs的注册中心地址'
  cloud:
    nacos:
      discovery:
        #容器名:port
        server-addr: my-nacos:8848
~~~
:::

### FAQ
1. 容器已经在运行，如何指定现有自定义网络?
~~~bash
# docker network connect 网络名称 容器名
docker network connect my-network my-mysql
~~~
2. 若只是想容器间通信，无需暴露端口(-p )。保证接入同一网络(桥接)

:::note[官方]
If you want to make a container accessible to other containers, it isn't necessary to publish the container's ports. You can enable inter-container communication by connecting the containers to the same network, usually a bridge network.
:::

3. 官方说明，暴露端口(-p )比较危险，不仅docker主机能访问，外部也可连接。

:::note[官方]
Publishing container ports is insecure by default. Meaning, when you publish a container's ports it becomes available not only to the Docker host, but to the outside world as well.
If you include the localhost IP address (127.0.0.1, or ::1) with the publish flag, only the Docker host and its containers can access the published container port.
:::
**若只想主机与其容器访问:**

~~~bash
# -p 时加入ip地址。将主机127.0.0.0上的8080映射到容器80
docker run -p 127.0.0.0:8080:80 nginx
~~~

## Host模式

:::note[上官方]
If you use the host network mode for a container, that container's network stack isn't isolated from the Docker host (the container shares the host's networking namespace), and the container doesn't get its own IP-address allocated. For instance, if you run a container which binds to port 80 and you use host networking, the container's application is available on port 80 on the host's IP address.
:::
什么意思呢，化繁入简解释: Host(主机模式)没有网桥中间连接一层的说法了，容器用的就是主机的网络。

### 相关原理图

![Docker-Host模式](/img/docker/host.png)

容器共享了主机的网络，也就是说 启动nacos容器 之前bridge桥接模式需要暴露 -p 8848:8848 端口供外界连接。
而一旦使用了Host模式如下启动:

:::note[继续官方]
Given that the container does not have its own IP-address when using host mode networking, port-mapping doesn't take effect, and the -p, --publish, -P, and --publish-all option are ignored, producing a warning instead:
:::warning
WARNING: Published ports are discarded when using host network mode
:::

~~~bash
docker run --name nacos --network host -d nacos:1.1
~~~
**不用在写 -p,而若访问直接 主机ip:8848 即可**
