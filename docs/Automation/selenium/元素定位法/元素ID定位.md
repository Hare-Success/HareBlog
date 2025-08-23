---
id: ByElementId
title: 元素ID定位
authors: Hare
tags: [自动化]
---

# 元素ID定位

## 元素ID定位

[先附上Selenium的定位器相关介绍地址](https://www.selenium.dev/zh-cn/documentation/webdriver/elements/locators/)

我们可以使用网页中元素的 ID 属性来定位它。**一般来说**，ID 属性对于网页中的元素来说应该是唯一的。我们将使用它来识别。

这个方法比较简单，找到前端元素的ID属性值就可以。

### 如何定位

在使用Selenium中会使用到WebDriver，里面有两个方法: 
* **findElement** 方法返回一个元素, 如果没有找到,会抛出一个异 NoElementFindException()
* **findElements** 方法返回多个元素, 如果没有找到,会返回空数组, 不会抛出异常

## 代码展示
只要找到合适的元素ID，就可以进行一些操作。
~~~java
public class ByElementId {
    public static void main(String[] args) throws Exception {
        getBaiDuElementById("edge");
    }

    public static void getBaiDuElementById(String type) {
        WebDriver driver = null;
        try {
            driver = new EdgeDriver();
            if (type.equals("edge")) {
                driver.manage().window().maximize();
                driver.get("https://www.baidu.com");
                driver.manage().timeouts().implicitlyWait(8, TimeUnit.SECONDS);
                driver.findElement(By.id("chat-textarea")).sendKeys("selenium");
                driver.findElement(By.id("chat-submit-button")).click();
            } else {
                driver = new ChromeDriver();
                driver.manage().window().maximize();
                driver.get("https://www.baidu.com");
                driver.manage().timeouts().implicitlyWait(8, TimeUnit.SECONDS);
                driver.findElement(By.id("chat-textarea")).sendKeys("selenium");
                driver.findElement(By.id("chat-submit-button")).click();
            }
        } catch (Exception e) {
            driver.quit();
            throw new RuntimeException(e);
        } finally {
            driver.quit();
        }
    }
}
~~~