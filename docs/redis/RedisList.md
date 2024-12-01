---
id: redisList
title: List数据结构
description: 你将了解到redis的List数据结构操作
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# List数据类型

## List认识

:::note[总结官方]
Redis lists are linked lists of string values. Redis lists are frequently used to:
* Implement stacks and queues.
* Build queue management for background worker systems.
List的数据类型是一个双端链表实现方式，其中LPUSH从头添加元素，RPUSH从尾添加元素。即可以用List实现队列的使用。

Redis lists are implemented via Linked Lists. This means that even if you have millions of elements inside a list, the operation of adding a new element in the head or in the tail of the list is performed in constant time. The speed of adding a new element with the LPUSH command to the head of a list with ten elements is the same as adding an element to the head of list with 10 million elements.
官方说明了，甭管你是100w、100还是1000w,使用LPUSH和RPUSH速度相同（这不就是链表嘛），想想看链表的特性[线性表](../DataStructuresAlgorithms/数据结构/线性结构/线性表.md)<br/>

Lists are useful for a number of tasks, two very representative use cases are the following:
* Remember the latest updates posted by users into a social network.
* Communication between processes, using a consumer-producer pattern where the producer pushes items into a list, and a consumer (usually a worker) consumes those items and executes actions. Redis has special list commands to make this use case both more reliable and efficient.<br/>
List常见的使用场景: 
* 记住用户在社交网络中发布的最新更新
* 进程之间的通信，使用消费者-生产者模式，其中生产者将项目推送到列表中，消费者（通常是 Worker）消费这些项目并执行操作。 Redis 提供了特殊的列表命令，使这种用例更可靠、更高效。
<br/>
同时官方给出例子:<br/>
The popular Twitter social network takes the latest tweets posted by users into Redis lists.
To describe a common use case step by step, imagine your home page shows the latest photos published in a photo sharing social network and you want to speedup access.
* Every time a user posts a new photo, we add its ID into a list with LPUSH.
* When users visit the home page, we use LRANGE 0 9 in order to get the latest 10 posted items.
<br/>
流行的 Twitter 社交网络会将用户发布的最新推文放入 Redis 列表中。 为了逐步描述一个常见的用例，想象一下你的主页会显示照片分享社交网络中发布的最新照片，而你希望加快访问速度。 每当用户发布一张新照片，我们就用 LPUSH 将其 ID 添加到一个列表中。 当用户访问主页时，我们使用 LRANGE 0 9 来获取最新发布的 10 张照片。
:::

## 添加元素

### PUSH命令

#### `LPUSH 从左往右插入`
~~~
LPUSH命令从头开始依次添加元素，先进的排在后面，后进的排在前面。留个谜底想想这是哪种数据结构的特性?
~~~
<Tabs>

  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> lpush list:user java vue python
    (integer) 3
    # 获取元素
    127.0.0.1:6379> lrange list:user 0 -1
    1) "python"
    2) "vue"
    3) "java"
   ~~~
  </TabItem>

  <TabItem value="Java" label="Java">
    ~~~java

        // 第一种方式
        List<String> list = new ArrayList<>();
        list.add("水杯");
        list.add("保温杯");
        list.add("不锈钢杯");
        for (int i = 0; i < list.size(); i++) {
            redisTemplate.opsForList().leftPush("list:product",list.get(i));
        }   
        // 第二种方式
        redisTemplate.opsForList().leftPushAll("list:model","干饭","下地","锄禾日");
        // 第三种
        List<String> listF = new ArrayList<>();
        listF.add("水杯1");
        listF.add("保温杯2");
        listF.add("不锈钢杯");
        redisTemplate.opsForList().leftPushAll("list:feature",listF);

    ~~~
  </TabItem>

</Tabs>

#### `RPUSH 从右往左插入`

~~~
RPUSH命令从尾开始依次添加元素，先进的排在前面，后进的排在后面。留个谜底想想这是哪种数据结构的特性?
~~~

<Tabs>

  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> rpush list:push money mone mon mo m
    (integer) 5
    127.0.0.1:6379> lrange list:push 0 -1
    1) "money"
    2) "mone"
    3) "mon"
    4) "mo"
    5) "m"
    127.0.0.1:6379>
   ~~~
  </TabItem>

  <TabItem value="Java" label="Java">
    ~~~java

        // 第一种方式
        List<String> list = new ArrayList<>();
        list.add("水杯");
        list.add("保温杯");
        list.add("不锈钢杯");
        for (int i = 0; i < list.size(); i++) {
            redisTemplate.opsForList().rightPush("list:product",list.get(i));
        }   
        // 第二种方式
        redisTemplate.opsForList().rightPushAll("list:model","干饭","下地","锄禾日");
        // 第三种
        List<String> listF = new ArrayList<>();
        listF.add("水杯1");
        listF.add("保温杯2");
        listF.add("不锈钢杯");
        redisTemplate.opsForList().rightPushAll("list:feature",listF);

    ~~~
  </TabItem>

</Tabs>

#### `LINSERT 插入指定位置`
~~~
LINSERT key <BEFORE | AFTER> pivot element
LINSERT命令就是在哪个元素前或者后添加一个新元素
~~~

<Tabs>

  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    # 加 before 在mon前面加font
    127.0.0.1:6379> linsert list:push before mon font
    (integer) 5
    127.0.0.1:6379> lrange list:push 0 -1
    1) "money"
    2) "mone"
    3) "font"
    4) "mon"
    5) "mo"
   ~~~
  </TabItem>

  <TabItem value="Java" label="Java">
    ~~~java
    redisTemplate.opsForList().leftPush("list:push","font","code");
    ~~~
  </TabItem>

</Tabs>

### `LRANGE 查询`
~~~
LRANGE key start stop
LRANGE命令 查询数据使用，查询全部则 LRANGE key 0 -1
~~~

<Tabs>

  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    # 查询0-3数据，也就是4个
    127.0.0.1:6379> lrange list:push 0 3
    1) "money"
    2) "mone"
    3) "font"
    4) "mon"
   ~~~
  </TabItem>

  <TabItem value="Java" label="Java">
    ~~~java
    redisTemplate.opsForList().range("list:model", 0, -1)
    ~~~
  </TabItem>

</Tabs>


### 删除操作

#### `RPOP 右删除`
~~~
RPOP key [count]
~~~
<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> rpop list:push
    "mo"
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
    redisTemplate.opsForList().rightPop("list:mode");
    ~~~
  </TabItem>
</Tabs>

#### `LPOP 左删除`
~~~
LPOP key [count]
~~~
<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> LPOP list:push
    "mo"
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
    redisTemplate.opsForList().leftPop("list:mode");
    ~~~
  </TabItem>
</Tabs>


### `LLEN 元素个数`
<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> LLEN list:push
    5
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
    redisTemplate.opsForList().size("list:model")
    ~~~
  </TabItem>
</Tabs>

### `LINDEX 根据下标查询元素`
<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> lindex list:push 2
    "font"
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
    redisTemplate.opsForList().index("list:model", 2)
    ~~~
  </TabItem>
</Tabs>
