---
id: redisSortedSet
title: SortedSet数据结构
description: 你将了解到redis的SortedSet数据结构操作
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## ZSET认识
:::note
A Redis sorted set is a collection of unique strings (members) ordered by an associated score. When more than one string has the same score, the strings are ordered lexicographically. Some use cases for sorted sets include:<br/>

* Leaderboards. For example, you can use sorted sets to easily maintain ordered lists of the highest scores in a massive online game.
* Rate limiters. In particular, you can use a sorted set to build a sliding-window rate limiter to prevent excessive API requests.
:::
* 
## ZADD 添加元素

ZADD key [NX | XX] [GT | LT] [CH] [INCR] score member [score member
...]

* XX：仅更新已存在的元素。不添加新元素。
* NX：仅添加新元素。不更新已经存在的元素。
* LT：仅当新分数小于当前分数时才更新现有元素。此标志不会阻止添加新元素。
* GT：仅当新分数大于当前分数时才更新现有元素。此标志不会阻止添加新元素。
* CH：将返回值从新添加的元素数修改为已更改的元素总数（CH 是“已更改”的缩写）。已更改的元素包括新添加的元素和已更新分数的现有元素。因此，命令行中指定的分数与过去相同的元素不计算在内。注意：通常的返回值ZADD仅计算新添加的元素数。
* INCR : 指定此选项时，ZADD其作用类似于ZINCRBY。在此模式下，只能指定一个分数元素对。

<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> ZADD zset:001 60 v1 70 v2 80 v3
    (integer) 1
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForZSet().add("zset1","v1",70);
    ~~~
  </TabItem>
</Tabs>

## ZRANGE 查看元素
从小到大查看元素

<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> ZRANGE zset:001 0 -1
   1) "v1"
   2) "v2"
   3) "v3"
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForZSet().range("zset1",0,-1);
    ~~~
  </TabItem>
</Tabs>

## ZREVRANGE 查看元素
从大到小查看元素

<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> ZREVRANGE zset:001 0 -1
   1) "v3"
   2) "v2"
   3) "v1"
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForZSet().reverseRange("zset1",0,-1);
    ~~~
  </TabItem>
</Tabs>


## ZCARD 获取元素数量

<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    127.0.0.1:6379> ZCARD zset:001
    (integer) 3
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
                redisTemplate.opsForZSet().zCard("zset1");
    ~~~
  </TabItem>
</Tabs>

## ZSCORE 获取元素分数

<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
    localhost:6379> ZSCORE zset1 v1
    "60"
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForZSet().score("zset1","v1");
    ~~~
  </TabItem>
</Tabs>

## ZREM 删除元素

<Tabs>
  <TabItem value="Redis Command" label="Redis Command" default>
   ~~~bash
   localhost:6379> ZREM zset1 v1
    (integer) 1
   ~~~
  </TabItem>
  <TabItem value="Java" label="Java">
    ~~~java
        redisTemplate.opsForZSet().remove("zset1","v1");
    ~~~
  </TabItem>
</Tabs>

