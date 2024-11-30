---
id: redisString
title: String数据结构
description: 你将了解到redis的String数据结构操作
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# String数据类型

## String认识

:::note[总结官方]
Redis strings store sequences of bytes, including text, serialized objects, and binary arrays. As such, strings are the simplest type of value you can associate with a Redis key. They're often used for caching
Redis的String数据类型可以存储字节序列，文本，序列化对象，二进制数组等。<br/>

Values can be strings (including binary data) of every kind，A value can't be bigger than 512 MB.<br/>
值可以是任何字符串，数值大小不能大于512M
:::

## String相关命令

### SET 命令

:::tip[set 格式]
SET key value [NX | XX] [GET] [EX seconds | PX milliseconds | EXAT unix-time-seconds | PXAT unix-time-milliseconds | KEEPTTL]

Options
~~~
1. NX -- 仅设置尚未存在的key。
2. XX -- 设置已存在的key，相当于替换了原先的值。
3. GET -- 返回旧值，新值替换旧值。
4. EX -- 设置指定的过期时间，以秒（正整数）为单位。
5. PX -- 设置指定的过期时间，单位为毫秒（正整数）。
6. KEEPTTL -- 保留与key相关的存活时间。
~~~
:::

#### `SET KEY VALUE`
<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> set k1:1 v1
    OK
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForValue().set("k1:1","v1");
    ~~~
  </TabItem>
</Tabs>

#### `SET KEY VALUE NX`
nx: 仅设置不存在的key

<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    # k1:1 这个key已经存在
    127.0.0.1:6379> set k1:1 v2 nx
    (nil)
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        // 返回false
        redisTemplate.opsForValue().setIfAbsent("k1:1", "v2")
    ~~~
  </TabItem>
</Tabs>

#### `SET KEY VALUE XX`
xx: 设置已存在的key，相当于替换了原先的值
<Tabs>
    <TabItem value="Redis Command" label="Redis Command" default>
       ~~~bash
        # k1:1 这个key已经存在,替换新值。
        127.0.0.1:6379> set k1:1 vvvw xx
        OK
        127.0.0.1:6379> get k1:1
        "vvvw"
       ~~~
    </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        // 返回true，新值替换旧值
        redisTemplate.opsForValue().setIfPresent("k1:1", "v200"
    ~~~
  </TabItem>
</Tabs>

#### `SET KEY VALUE GET`
get: 返回旧的值，设置新的值
<Tabs>
    <TabItem value="Redis Command" label="Redis Command" default>
    ~~~bash
    # k1:1 这个key已经存在,替换新值。
    127.0.0.1:6379> set k1:1 123 get
    v200
    127.0.0.1:6379> get k1:1
    "123"
    ~~~
    </TabItem>
    <TabItem value="Java" label="Java">
    ~~~java
    // 返回旧值，新值替换旧值
    redisTemplate.opsForValue().getAndSet("k1:1", "v200456")
    ~~~
    </TabItem>
</Tabs>

#### `SET KEY VALUE EX`
EX: 设置过期时间，单位秒
:::warning[注意]
当我们设置ex后，重新 set key value，此时过期时间则是永久<br/>
当第二次set的时候，最后加一个命令keepttl: set key value keepttl
:::

<Tabs>
    <TabItem value="Redis Command" label="Redis Command" default>
    ~~~bash
        # 设置k2:2 为10秒
        127.0.0.1:6379> set k2:2 v3 ex 10
        OK
        # 还剩6秒
        127.0.0.1:6379> ttl k2:2
        (integer) 6
    ~~~
    </TabItem>
    <TabItem value="Java" label="Java">
    ~~~java
    redisTemplate.opsForValue().set("k2:2","v2",10, TimeUnit.SECONDS);
    ~~~
    </TabItem>
</Tabs>


### 批处理操作

#### `MSET`
<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> mset k1 v1 k2 v2
    OK
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        Map<String,String> mset = new HashMap<>();
        mset.put("kq","vq");
        mset.put("kq1","vq1");
        redisTemplate.opsForValue().multiSet(mset);
    ~~~
  </TabItem>
</Tabs>

#### `MSETNX 同 nx`
<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> msetnx k1 v1 k2 v2
    OK
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        Map<String,String> mset = new HashMap<>();
        mset.put("kq","vq");
        mset.put("kq1","vq1");
        redisTemplate.opsForValue().multiSetIfAbsent(mset);
    ~~~
  </TabItem>
</Tabs>

#### `MGET 批处理获取`
<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> msetnx k1 v1 k2 v2
    OK
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        Map<String,String> mset = new HashMap<>();
        mset.put("kq","vq");
        mset.put("kq1","vq1");
        redisTemplate.opsForValue().multiSetIfAbsent(mset);
    ~~~
  </TabItem>
</Tabs>

### 范围处理

#### `SETRANGE`

<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> set k1 v1
    OK
    127.0.0.1:6379> setrange k1 2 hello
    (integer) 7
    127.0.0.1:6379> get k1
    "v1hello"
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
       // 按照偏移量 修改
       redisTemplate.opsForValue().set("k2","kk",2);
    ~~~
  </TabItem>
</Tabs>

#### `GETRANGE`

<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    # 0 ~ -1 查出来全部
    127.0.0.1:6379> getrange k1 0 -1
    "v1kkelo"
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
       redisTemplate.opsForValue().get("k1",0,3);
    ~~~
  </TabItem>
</Tabs>

### 计数器相关

:::note[总结官方]
Even if strings are the basic values of Redis, there are interesting operations you can perform with them. For instance, one is atomic increment:
即使字符串是 Redis 的基本值，你也可以对它们执行一些有趣的操作。 例如，原子增量就是其中之一：

What does it mean that INCR is atomic? That even multiple clients issuing INCR against the same key will never enter into a race condition. For instance, it will never happen that client 1 reads "10", client 2 reads "10" at the same time, both increment to 11, and set the new value to 11. The final value will always be 12 and the read-increment-set operation is performed while all the other clients are not executing a command at the same time.
INCR 原子性是什么意思？ 也就是说，即使多个客户端对同一键值发出 INCR，也不会出现竞赛条件。 例如，客户端 1 读取 "10"，客户端 2 同时读取 "10"，然后都递增到 11，并将新值设置为 11。 最终值将始终是 12，而且在执行读取-递增-设置操作时，所有其他客户端不会同时执行命令。

所以说以下操作就是原子性操作，也说明它是线程安全的【注意使用的时候，代码等层面保证线程安全】
:::

#### `INCR`

<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    # 每次递增1
    127.0.0.1:6379> set k1 10
    OK
    127.0.0.1:6379> incr k1
    (integer) 11
    127.0.0.1:6379> incr k1
    (integer) 12
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForValue().set("ll",10);
        redisTemplate.opsForValue().increment("ll");
    ~~~
  </TabItem>
</Tabs>

#### `INCRBY`

<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    # 范围递增
   127.0.0.1:6379> incr k1
    (integer) 14
    127.0.0.1:6379> incrby k1 10
    (integer) 24
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForValue().set("ll",10);
        redisTemplate.opsForValue().increment("ll"，10);
    ~~~
  </TabItem>
</Tabs>


#### `DECR`

<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    # 每次递减1
    127.0.0.1:6379> decr k1
    (integer) 23
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForValue().set("ll",10);
        redisTemplate.opsForValue().decrement("ll");    
    ~~~
  </TabItem>
</Tabs>

#### `DECRBY`

<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    # 范围递减
    127.0.0.1:6379> decrby k1 10
    (integer) 13
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForValue().set("ll",10);
        redisTemplate.opsForValue().decrement("ll",5);    
    ~~~
  </TabItem>
</Tabs>
