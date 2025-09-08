---
id: JmeterSSL
title: 绕过SSL
authors: Hare
tags: [自动化,Jmeter]
---

# 绕过SSL

## 具体场景

自己测试学习，在网上找的HTTPS的网站（具体网站就不发出来了）。不知道关于其他HTTPS是否可以用同样的方法，但我觉得应该大差不差

:::warning
此方法不适用生产哈，自己测试玩玩就行
:::

### 版本问题

版本这个Hare没有测试，但确定的是每个JDK版本内部不一样，SSL服务器也不一样所使用的协议，加密也都不一样。

自己捣鼓捣鼓试试版本呢~~~~~

Hare的版本:
* JDK8
* Jmeter最新
* win11


## 绕过步骤

1. **在cmd或者PowerShell执行命令**

~~~
openssl s_client -connect 目标域名:端口号 -servername 目标域名       
查看相关数据，查看使用的协议比如是TLSV1.2, 查看cipherSuites中的加密比如是:ECDHE-ECDSA-AES256-GCM-SHA384
~~~

2. **打开Jmeter的jmeter.bat**
~~~java
rem   JVM_ARGS    - (Optional) Java options used when starting JMeter, e.g. -Dprop=val
rem                 Defaults to '-Duser.language="en" -Duser.region="EN"'
在以上位置下面 加上这句 set JVM_ARGS=%JVM_ARGS% -Dhttps.protocols=TLSv1,TLSv1.1,TLSv1.2 -Djdk.tls.client.protocols=TLSv1,TLSv1.1,TLSv1.2 -Djdk.tls.client.cipherSuites=ECDHE-ECDSA-AES256-GCM-SHA384
~~~


3. **打开Jmeter的配置文件user.properties**
~~~
将server.rmi.ssl.disable=false 这段取消注释，改写为true
~~~

4. **打开jmeter.properties**
~~~
将server.rmi.ssl.disable=false 这段取消注释
~~~

5. **获取网站证书保存为.der模式**

6. **在jdk安装目录的bin模式下**

~~~
命令行执行: keytool.exe -import -alias singlewindow.store -file D:\singlewindow.der -keystore D:\singlewindow.keystore
D:\singlewindow.der 是测试网站的  
D:\singlewindow.keystore 自己生成的
生成后导入jmeter
~~~

## 小结
以上做完应该就可以测试HTTPS的接口，具体流程是不是通用可靠 有待验证



