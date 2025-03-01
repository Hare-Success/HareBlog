---
id: singLeton
title: 单例模式
authors: Hare
tags: [设计模式]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 设计模式之单例模式




## 饿汉式

:::note 
&emsp;&emsp;饿汉式是天然的线程安全机制的单例模式，在类加载阶段就已经完成了实例化，内部JVM控制线程安全。所以并不存在多个线程同时初始化静态变量的情况！<br/>
浅浅分析下:
类加载过程: 加载 ---> 链接 ----> 初始化<br/>
而链接部分又分为: 验证 ---> 准备 ---> 解析
在准备阶段jvm会为类变量分配内存并赋值默认值（这块会赋值null），在最后的初始化阶段就会赋值实际的值。
:::

<Tabs>
  <TabItem value="饿汉式" label="饿汉式" default>
    ~~~java
        public class Singleton {
            // static修饰属于类变量，在这一块类加载的时候就已经实例化成功
            private static Singleton singleton = new Singleton();
            // 私有无参构造，不让随便实例化
            private Singleton(){
            }
            // 提供一个全局的访问点
            public static Singleton getSingleton(){
                return singleton;
            }
        }
    ~~~
  </TabItem>
</Tabs>

:::warning
饿汉式既然在类加载就分配内存了。so线程安全，写法又简单。但是它每次分配完没人用岂不是脱裤子放屁多此一举<br/>
所以有好处就有不好的一面: 浪费资源
:::

## 懒汉式
这种方式就是 Lazy Loading，对于饿汉式来说就是再类加载的时候没有在分配内存了，而是使用了在进行初始化实例。

<Tabs>
  <TabItem value="懒汉式" label="懒汉式" default>
    ~~~java
        public class Singleton {
            // static修饰属于类变量，不在进行实例化 默认赋值null
            private static Singleton singleton = null;
            // 私有无参构造，不让随便实例化
            private Singleton(){
            }
            // 提供一个全局的访问点,先判断等不等null
            public static Singleton getSingleton(){
                if(singleton == null){
                    singleton = new Singleton();
                }
                return singleton;
            }
        }
    ~~~
  </TabItem>
</Tabs>

:::warning
此方式线程安全吗？肯定不安全！好处呢？那不用提前分配内存了。
:::

### 懒汉式优化(线程安全)
这种方式就是 Lazy Loading，并线程安全。

<Tabs>
  <TabItem value="懒汉式线程安全" label="懒汉式线程安全" default>
    ~~~java
        public class Singleton {
            // static修饰属于类变量，不在进行实例化 默认赋值null
            private static Singleton singleton = null;
            // 私有无参构造，不让随便实例化
            private Singleton(){
            }
            // 提供一个全局的访问点,加上synchronized同步锁住资源。
            public static synchronized Singleton getSingleton(){
                if(singleton == null){
                    singleton = new Singleton();
                }
                return singleton;
            }
        }
    ~~~
  </TabItem>
</Tabs>

:::warning
此方式线程安全吗？肯定安全啊！但是修饰符synchronized(悲观锁),同步锁住资源所以效率上降低好多！<br/>
而且大家想一想，也就第一次进来加个锁同步下就好，而现在每次进来就是同步（不必要的同步）<br/>
根据《阿里巴巴开发手册》锁的粒度越小越好，所以synchronized可以加在代码块中。
:::

## 单例模式优化模式

### 双检锁/双重校验锁
对于以上方式又进行一次优化，保证 Lazy Loading效果，并线程安全。

<Tabs>
  <TabItem value="双重校验锁" label="双重校验锁" default>
    ~~~java
        public static class SingletonLazyThreadSafe{
            // 使用 volatile 关键字防止指令重排并达到可见性
            private volatile static SingletonLazyThreadSafe singletonLazyThreadSafe;
            // 私有构造
            private SingletonLazyThreadSafe(){

            }
            // 全局访问点
            public static SingletonLazyThreadSafe getSingleton(){
                // 第一次判断，避免每次进入同步块
                if(singletonLazyThreadSafe == null) {
                    synchronized (SingletonLazyThreadSafe.class) {
                        // 第二次判断，防止多线程
                        if (singletonLazyThreadSafe == null) {
                            singletonLazyThreadSafe = new SingletonLazyThreadSafe();
                        }
                    }
                }
                return singletonLazyThreadSafe;
            }
        }
    ~~~
  </TabItem>
</Tabs>

:::note
为什么需要两次判断"==null"？为什么需要加volatile？
1. 第一次判断"==null"避免每次进入同步锁降低效率，ThreadA和ThreadB可同时进。
2. 第二次判断"==null"因为ThreadA先进来后，ThreadB同步等待。当ThreadA出来后，ThreadB又进去了若没有这次判断ThreadB有创建一次对象（单例被破坏）
3. 加volatile关键字就是要禁止指令重排，ingletonLazyThreadSafe = new SingletonLazyThreadSafe();这段代码实际在字节码中会有三部分:
    1. 分配内存
    2. 初始化对象
    3. 对象引用赋值给ingletonLazyThreadSafe<br/>

若发生了指令重排 先执行了步骤三，在执行步骤2。那拿到的就是一个未完全初始化的对象！同时volatile保证变量修改对其他线程立即可见。
:::

### 静态内部类
保证 Lazy Loading效果，并线程安全。

<Tabs>
  <TabItem value="静态内部类" label="静态内部类" default>
    ~~~java
       class SingletonStaticClass{

            public static class SingClass{
                 public static final SingletonStaticClass str = new SingletonStaticClass();
            }

            private SingletonStaticClass(){}

            public static final SingletonStaticClass getInstance(){
                return SingClass.str;
            }
        }
    ~~~
  </TabItem>
</Tabs>

:::note
静态内部类方式同样达到Lazy Loading效果，并线程安全。<br/>
1. Lazy Loading:
Java遵循"先用，在加载"，什么情况下加载类？创建实例new、访问静态变量方法等，所以静态内部类SingClass只有在getInstance方法被调用的时候才会加载。<br/>
2. 线程安全:
上面讲过一点，静态内部类中static修饰的SingletonStaticClass，当被加载的时候jvm会保证其线程安全性。<br/>

为何有final修饰呢？<br/>
八股文提到被final修饰的类不能被继承，修饰的方法不能被重写，修饰的变量不能被修改！
final修饰SingletonStaticClass后它就是一个**常量**，一旦赋值就不能被更改了。单例模式下确保不会被重新赋值，保证单例唯一。
:::

### 枚举类模式(最佳选择)

<Tabs>
  <TabItem value="枚举类模式" label="枚举类模式" default>
    ~~~java
      enum SingletonEnum{
       SINGLETON;
       private int count;
       public void icrement(){
           count++;
       }
   }
    ~~~
  </TabItem>
</Tabs>

:::note
先说下结论，枚举类模式的单例模式是线程安全的，并且支持懒加载Lazy Loading，防止反射和序列化攻击。<br/>

1. 线程安全:
使用**javap -p SingletonEnum.class**可查看编译后的类文件，由下面代码可知，定义enum枚举类后，里面的属性会用static final修饰<br/>
那我们提过很多次，类变量在类加载的时候jvm保证了其线程安全！
~~~java
final class com.hare.harelearn.DesignPattern.SingletonEnum extends java.lang.Enum<com.hare.harelearn.DesignPattern.SingletonEnum> {
  public static final com.hare.harelearn.DesignPattern.SingletonEnum SINGLETON;
~~~
:::

## 总结

:::note[单例模式总结]
保证一个类仅有一个实例，并提供一个全局的访问点~~<br/>
通常实现方式: 饿汉式、懒汉式、DCL（双重检索）、静态内部来、枚举<br/>

怎么保证仅有一个实例:
1. private修饰，保证私有构造
2. private static 修饰变量，保证全局唯一
3. public static提供全局访问点
:::
