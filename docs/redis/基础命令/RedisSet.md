---
id: redisSet
title: Set数据结构
description: 你将了解到redis的Set数据结构操作
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## SADD 添加元素
有去重效果，value无重复

<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> SADD student:001 1 2 3 4 5 1 3 4
    (integer) 5
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForSet().add("student:001","name","age","name","id");
    ~~~
  </TabItem>
</Tabs>

## SMEMBERS 查看key

根据key获取value值
<Tabs>
<TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> SMEMBERS student:001 
    1) "1"
    2) "2"
    3) "3"
    4) "4"
    5) "5"
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForSet().members("student:001");
    ~~~
  </TabItem>
</Tabs>

## SISMEMBER 是否存在value
查询是否存在value值

<Tabs>
<TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> SISMEMBER student:001 1
    (integer) 1
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForSet().isMember("student:001","name");
    ~~~
  </TabItem>
</Tabs>

## SREM 删除
<Tabs>
<TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> SREM student:001 1
    (integer) 1
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForSet().remove("student:001","name");
    ~~~
  </TabItem>
</Tabs>

## SCARD 获取元素个数

<Tabs>
<TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> SCARD student:001
    (integer) 5
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForSet().size("student:001");
    ~~~
  </TabItem>
</Tabs>

## SPOP 随机删除

<Tabs>
<TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> SPOP student:001 1
    (1) 2
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForSet().pop("student:001",2);
    ~~~
  </TabItem>
</Tabs>

