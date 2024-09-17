---
id: NodeVersionMan
title: Node版本管理NVM
authors: Hare
tags: [node]
---

# Node版本管理

:::note[前言]
有的时候项目多起来后，不定哪个项目抽什么风！使用的node版本不是一个，可能低可能高。我们不能来回卸载下载~~
这时候Node版本管理工具显得尤为重要，这篇文章我们使用NVM来进行管理

:::

## windows版nvm
[NVM-GitHub](https://github.com/coreybutler/nvm-windows)<br/>
[下载地址](https://nvm.uihtm.com/)<br/>
下载 setup.exe的，会自动配置nvm的环境变量!!!<br/>
下载好之后，傻瓜式安装~~~

### 检查是否安装成功
~~~bash
 # 执行nvm -v
 C:\Users\Administrator>nvm -v
 1.1.12
 
 # 执行nvm
 C:\Users\Administrator>nvm

  Running version 1.1.12.

Usage:

  nvm arch                     : Show if node is running in 32 or 64 bit mode.
  nvm current                  : Display active version.
  nvm debug                    : Check the NVM4W process for known problems (troubleshooter).
  nvm install <version> [arch] : The version can be a specific version, "latest" for the latest current version, or "lts" for the
                                 most recent LTS version. Optionally specify whether to install the 32 or 64 bit version (defaults
                                 to system arch). Set [arch] to "all" to install 32 AND 64 bit versions.
                                 Add --insecure to the end of this command to bypass SSL validation of the remote download server.
  nvm list [available]         : List the node.js installations. Type "available" at the end to see what can be installed. Aliased as ls.
  nvm on                       : Enable node.js version management.
  nvm off                      : Disable node.js version management.
  nvm proxy [url]              : Set a proxy to use for downloads. Leave [url] blank to see the current proxy.
                                 Set [url] to "none" to remove the proxy.
  nvm node_mirror [url]        : Set the node mirror. Defaults to https://nodejs.org/dist/. Leave [url] blank to use default url.
  nvm npm_mirror [url]         : Set the npm mirror. Defaults to https://github.com/npm/cli/archive/. Leave [url] blank to default url.
  nvm uninstall <version>      : The version must be a specific version.
  nvm use [version] [arch]     : Switch to use the specified version. Optionally use "latest", "lts", or "newest".
                                 "newest" is the latest installed version. Optionally specify 32/64bit architecture.
                                 nvm use <arch> will continue using the selected version, but switch to 32/64 bit mode.
  nvm root [path]              : Set the directory where nvm should store different versions of node.js.
                                 If <path> is not set, the current root will be displayed.
  nvm [--]version              : Displays the current running version of nvm for Windows. Aliased as v.
~~~

### nvm配置
进入安装目录，找setting.txt文件，将以下两句加入文件中
~~~bash 
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
~~~
整个setting.txt 文件内容
~~~bash 
# nvm的安装路径
root: D:\nvm
# nodejs的路径
path: D:\nodejs
# 下载镜像
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
~~~

### nvm常用命令

#### `nvm ls`
显示可下载版本的部分列表
#### `nvm use version`
使用node指定具体版本，例如: nvm use 20.1.5
#### `nvm install version`
安装node，例如: nvm install 20.1.5
#### `nvm uninstall version`
删除已安装node

### 下载node后一系列配置
:::note
防止nvm切换node版本之后全局安装的包无法使用,需要进行一些配置！可以做到切换版本后，全局依然可用
:::

#### 切换npm镜像源
~~~bash
npm config set registry https://registry.npmmirror.com/

# 查看
npm config get registry 
~~~

#### 新建node_cache&node_global
为了防止nvm切换node版本之后全局安装的包无法使用,我们直接在nvm目录下创建"node_cache"和"node_global"文件夹。<br/>

执行以下命令，注意了路径是**nvm的路径**，**这两个文件是在nvm的安装目录里面创建的~**
~~~bash 
npm config set prefix "D:\nvm\node_global"
npm config set cache "D:\nvm\node_cache"

# 查看
npm config get prefix
npm config get cache
~~~

#### 设置环境变量
* **系统变量新增 NODE_PATH**
    * ~~~bash
        NODE_PATH的值是 D:\nvm\node_global\node_modules
        没有node_modules，自己新建一个
      ~~~
* **用户变量新增**
    * ~~~bash
       D:\nvm\node_global
       D:\nvm\node_cache
      ~~~~

:::warning
注意上述路径都是nvm里面的。这俩文件也是在nvm的安装目录里卖弄新建的 "D:\nvm\node_global"-"D:\nvm\node_cache"
:::