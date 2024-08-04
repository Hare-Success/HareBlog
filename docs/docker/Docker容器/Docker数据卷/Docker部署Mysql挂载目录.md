---
id: dockerMysql
title: Docker部署Mysql挂载
authors: Hare
tags: [docker]
---

# 案例: docker部署Mysql并实现挂载目录

export const Highlight = ({children, color}) => (
<span
style={{
backgroundColor: color,
borderRadius: '2px',
color: '#fff',
padding: '0.2rem',
}}>
{children}
</span>
);

## 环境准备
+ Centos版本7（虚拟机，云服务器）
+ 安装了Docker版本26.0.0 [安装文章](../../Docker安装.mdx)
+ Mysql镜像版本5.7.36

## 开始前思考点问题
看过网上有些方案，能成功但我感觉很乱！至此自己记录下，同时学习了数据卷！

+ 正常Linux服务器安装配置Mysql，是怎么个流程?
+ 使用Docker部署Mysql我们需要做什么?
  + 如何供外界工具连接?
  + Mysql配置文件、数据存放文件、日志文件是不是得需要挂载宿主机?
  + 映射端口如何设置?
  + 登录密码怎么设置?

**带着我们的问题，慢慢不急不躁的解决它**

## 先看看docker下的mysql相关文件都在哪？

:::warning[注意了!]
使用-d模式启动，必须加上 -e MYSQL_ROOT_PASSWORD设置密码 **（环境变量）**。
Hare之前不知道没加-e，怎么启动都启动不了！启动直接挂掉。[容器后台-d启动](../Docker后台启动.md)
:::

```bash title='启动mysql容器'
docker run --name=some-mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7
```
> 启动之后

```bash title='再次进入mysql容器'
docker ps # 查看Mysql容器ID
docker exec -it 容器ID bash #进入容器内部
```
> 启动后

```bash title='进入/etc/mysql'
cd /etc/mysql
```
**会看到很多个文件，一一解释下**

+ **conf.d目录:** 通常用于存放用户自定义的配置文件。MySQL在启动时会读取这个目录下的所有配置文件。这使得用户可以将自己的配置分散在多个文件中，便于管理
+ **my.cnf:** 这是主配置文件的符号链接（指向/etc/alternatives/my.cnf）。MySQL首先查找这个文件来加载配置。这个文件通常包含了一些基本的配置设置，或者包含了包括其他配置文件的指令
+ **my.cnf.fallback:** 这是一个备份配置文件，用于在主配置文件（my.cnf）损坏或不存在时提供回退配置。这保证了即使主配置文件出现问题，MySQL服务也能以某种形式运行。
+ **mysql.cnf:** 这通常是一个额外的配置文件，可能包含特定于MySQL服务的一些特定配置。这个文件的具体用途可能会根据MySQL版本和特定的安装方式有所不同。
+ **mysql.conf.d:** 这是另一个目录，类似于conf.d，用于存放MySQL相关的额外配置文件。MySQL同样会读取这个目录下的所有配置文件。



:::note[需要的文件]
网上很多文章也提出来了，**千万不要挂载my.cnf它这是个软连接。起不到作用的！**

<Highlight color="#25c2a0">而我们要做的就是挂载conf.d这个目录，这个目录我们可以自定义配置文件。</Highlight>

<br/>**而mysql加载顺序**


通常是先读取my.cnf，然后是mysql.cnf，接着是conf.d和mysql.conf.d目录下的文件。这意味着后读取的文件中的设置可以覆盖先前文件中的设置。

[docker官方说明，同时可查看其他环境变量](https://hub.docker.com/_/mysql)

:::warning[官方原话]
**Using a custom MySQL configuration file**


The default configuration for MySQL can be found in /etc/mysql/my.cnf, which may !includedir additional directories such as /etc/mysql/conf.d or /etc/mysql/mysql.conf.d. Please inspect the relevant files and directories within the mysql image itself for more details.

If /my/custom/config-file.cnf is the path and name of your custom configuration file, you can start your mysql container like this (note that only the directory path of the custom config file is used in this command):

```bash
docker run --name some-mysql -v /my/custom:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag
```

This will start a new container some-mysql where the MySQL instance uses the combined startup settings from /etc/mysql/my.cnf and /etc/mysql/conf.d/config-file.cnf, with settings from the latter taking precedence.

**大意就是我们可以创建自定义xxx.cnf配置文件，挂载到/etc/mysql/conf.d目录。而Mysql实例在使用配置文件时就是my.cnf和自定义的组合配置。而我们的自定义的配置文件优先使用！！**
:::

**记好了之前启动的Mysql容器stop掉并rm！！**

## 正式开始

### 开始前创建三个文件
Hare是在/usr/local/dockerdata/mysql下！

+ 挂载的日志文件宿主机目录:/usr/local/dockerdata/mysql/log
+ 挂载的数据文件宿主机目录:/usr/local/dockerdata/mysql/data
+ 挂载的配置文件宿主机目录:/usr/local/dockerdata/mysql/conf

:::tip[重要]
在配置目录/usr/local/dockerdata/mysql/conf中自定义一个cnf配置文件，将其挂载
```bash title='简单配置'
[client]
default-character-set=utf8mb4

[mysql]
default-character-set=utf8mb4

[mysqld]
init_connect="SET collation_connection = utf8mb4_unicode_ci"
init_connect="SET NAMES utf8mb4"
character-set-server=utf8mb4
collation-server=utf8mb4_unicode_ci
skip-character-set-client-handshake
skip-name-resolve
```
:::

### docker pull Mysql拉镜像

```bash title='拉取Mysql镜像'
# 搜索mysql
docker search mysql:5.7 --limit 2
# 拉取mysql5.7镜像
docker pull mysql:5.7
```
### docker run 启动Mysql容器

```bash title='容器启！！'
docker run -p 3306:3306 --name=testmysql -v /usr/local/dockerdata/mysql/log:/var/log/mysql -v /usr/local/dockerdata/mysql/data:/var/lib/mysql -v /usr/local/dockerdata/mysql/conf:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7
```
**解释下:**

[容器相关命令](../Docker容器命令.md)

+ -p: 设置映射端口，前者宿主机端口后者容器。
+ -name: 容器名称
+ 第一个 -v: 挂载日志
+ 第二个 -v: 挂载数据文件
+ 第三个 -v: 挂载配置文件
+ -e: 设置密码
+ -d: 后台启动

:::warning[注意点]
通过以上步骤，使用工具即可连接Mysql了，但还有要注意的地方！

+ 记得宿主机开放3306端口。别连不上一头懵~~
:::
