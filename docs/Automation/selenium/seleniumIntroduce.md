---
id: seleniumIntroduce
title: selenium相关介绍
authors: Hare
tags: [自动化]
---

# Selenium相关介绍
了解点前端，了解点后端Java，学起来会简单很多。

## 环境版本

:::warning
Hare 使用的是Java来集成Selenium的，其中相关版本
1. Java: JDK17
2. idea: 2024
3. Maven: 3.9.9
4. SpringBoot: 3.4.9
5. Selenium: 4.8.2
6. 浏览器/驱动都是最新的
:::

## Selenium环境搭建
**均在本地搭建(win)** 

### 准备工作

1. 获取Maven: [maven仓库地址](http://mvnrepository.com/) 搜索Selenium 选择适合的版本即可

~~~java
        <dependency>
            <groupId>org.seleniumhq.selenium</groupId>
            <artifactId>selenium-java</artifactId>
            <version>4.8.2</version>
        </dependency>
~~~

2. Driver驱动下载配置
   * ChromeDriver: [下载地址](https://googlechromelabs.github.io/chrome-for-testing/)
   * EdgeDriver: [下载地址](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver?form=MA13LH)
   * GeckoDriver: [下载地址](https://github.com/mozilla/geckodriver/releases)

### 配置工作
Java环境自行搭建呢~不在过多讲述

1. 将所下载的Driver驱动解压后，在环境变量中配置比如:
~~~
ChromeDriver在系统变量新建: KEY = CHROME_DRIVER,VALUE = D:\Automation\chromedriver-win64
在Path变量中添加: %CHROME_DRIVER%即可。

本机验证: win中搜索框输入CMD 打开命令行输入: chromedriver -version 显示版本号 即代表成功！
~~~
其余浏览器一致，配置后重启计算机即可。

## 什么是WebDriver


## 初始化后相关流程


## 查找元素方法
