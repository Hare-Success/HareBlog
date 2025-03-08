---
id: redisHash
title: Hash数据结构
description: 你将了解到redis的Hash数据结构操作
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 添加元素

### HSET
HSET可以set多个kv数据，但redis的版本需要Redis4.0及以上

<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> HSET student:001 name l4
    (integer) 1
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForHash().put("student:002","name","z3");
    ~~~
  </TabItem>
</Tabs>

### HMSET 添加多个
<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> HMSET student:002 id 12 name w5 age 17
    ok
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        Map<String,String> map = new HashMap();
        map.put("id","14");
        map.put("name","l8");
        redisTemplate.opsForHash().putAll("student:004",map);
    ~~~
  </TabItem>
</Tabs>

## 获取数据

### HGET

<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> HGET student:002 id 12 
    12
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        Map<String,String> map = new HashMap();
        map.put("id","14");
        map.put("name","l8");
        redisTemplate.opsForHash().get("student:002","id");
    ~~~
  </TabItem>
</Tabs>

### HMGET

<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> HMSET student:002 id 12 name w5 age 17
    ok
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        Map<String,String> map = new HashMap();
        map.put("id","14");
        map.put("name","l8");
        redisTemplate.opsForHash().putAll("student:004",map);
    ~~~
  </TabItem>
</Tabs>

## HDEL
删除key

<Tabs>
<TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> HDEL student:002 id
    (integer) 1
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForHash().delete("student:002","name");
    ~~~
  </TabItem>
</Tabs>

## HGETALL
获取key的所有value

<Tabs>
<TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> HGETALL student:001
   ~~~
  </TabItem>
</Tabs>


## HLEN key数量

<Tabs>
<TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> HLEN student:002
    (integer) 2
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForHash().size("student:002")
    ~~~
  </TabItem>
</Tabs>

## HEXISTS 是否包含某key

<Tabs>
<TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> HEXTISIS student:002 id 
    (integer) 1
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForHash().hasKey("student:002", "id")
    ~~~
  </TabItem>
</Tabs>

## HKEYS
获取所有键值对的key

<Tabs>
<TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    localhost:6379> HKEYS student:002
    1) "name"
    2) "id"
    3) "age"
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForHash().keys("student:002")
    ~~~
  </TabItem>
</Tabs>


## HVALS
获取所有键值对的value

<Tabs>
<TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    localhost:6379> HVALS student:002
    1) "3"
    2) "12"
    3) "15"
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForHash().values("student:002")
    ~~~
  </TabItem>
</Tabs>

