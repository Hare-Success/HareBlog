---
id: Handle
title: 句柄
authors: Hare
tags: [自动化,selenium]
---

# 句柄

## 什么是句柄(WindowsID)？

句柄就是WindowsID，就是浏览器打开每个标签页或者窗口的唯一值用于区分不同页面或窗口。关闭某个页面，对应的句柄(windowsId)就销毁了。
并不妨碍其他页面。

## 如何获取

~~~
在Selenium中有两种方法:

1.getWindowHandle() 获取当前页面句柄
2.getWindowHandles() 获取所有页面句柄，返回一个Set集合
~~~

## 如何切换指定句柄

~~~
使用driver.switchTo().window(String handle);方法，其中参数就是getWindowHandle获取到的句柄值
~~~

例子: 

~~~java
WebDriver driver = new ChromeDriver()

driver.manage().window().maximize();
driver.get("https://www.baidu.com");
driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);

// 获取当前句柄
String windowHandle = driver.getWindowHandle();
driver.findElement(By.linkText("新闻")).click();
// 获取所有句柄
Set<String> windowHandles = driver.getWindowHandles();
System.out.println("获取所有句柄:" + JSON.toJSONString(windowHandles));
windowHandles.stream().forEach(item -> {
      if (!item.equals(windowHandle)) {
               driver.close();
               driver.switchTo().window(item);
          }
      });
~~~

