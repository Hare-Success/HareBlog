---
id: algorithmsBubbleSort
title: 冒泡排序
authors: Hare
tags: [数据结构,算法,基础，排序]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 冒泡排序

## 冒泡排序思想


### 冒泡排序动态图
![冒泡排序动态图](../../../../static/img/dataStructures/十大排序/冒泡排序.gif)

### 冒泡排序推理
![冒泡排序推理图](../../../../static/img/dataStructures/十大排序/冒泡排序.jpg)

### 规律总结
* 趟数(轮数)
  由上图可知我们的数组有五个元素，那一共的趟数也就是 5-1=4 一共是四趟。<br/>
  那我们元素有n个，那躺数就是 n-1。
* 交换次数<br/>
  第一轮：元素个数5-1=四次<br/>
  第二轮：元素个数5-2=三次<br/>
  第三轮：元素个数5-3=二次<br/>
  第四轮: 元素个数5-4=一次
**交换次数=4+3+2+1 = 10 = (n - 1) + (n - 2) + ... + 2 + 1 = n * (n - 1) / 2**<br/>

## 具体代码实现

<Tabs>
  <TabItem value="Java" label="Java" default>
    ~~~java
        public static int bubbleSort(int[] param) {
        int length = param.length;
        int temp = 0;
        for (int i = 0; i < length-1; i++) {
            for (int j = 0; j < length - 1 -i; j++) {
                if (param[j] > param[j+1]) {
                    temp = param[j];
                    param[j] = param[j+1];
                    param[j+1] = temp;
                }
            }
        }
    }
    ~~~
  </TabItem>

  <TabItem value="Java最优" label="Java最优情况">
    ~~~java
    public static int bubbleSort(int[] num) {
        int length = param.length;
        int temp = 0;
        for (int i = 0; i < length-1; i++) {
            boolean flg = false;
            for (int j = 0; j < length - 1 -i; j++) {
                if (param[j] > param[j+1]) {
                    temp = param[j];
                    param[j] = param[j+1];
                    param[j+1] = temp;
                    flg = true;
                }
            }
            if(!flg){
              //那就是代表元素已经是排好的并没有进行交换
              return;
            }
        }
  // 以上代码中加入boolean控制，当第一次就没有元素进行交换，那就是说明元素本身就是有序的。**那对于时间复杂度就是线性阶:O(n)**
｝
    ~~~
  </TabItem>


  <TabItem value="Python" label="Python">
   https://pan.baidu.com/s/1pHP2QulSthS7PhKnNeQsyA?pwd=1475
  </TabItem>
</Tabs>

## 总结

### 时间复杂度

#### 最坏情况
> 假如是已经是升序排好的，现将降序排列。**那对于时间复杂度就是平方阶:O(n^2)**<br/>
#### 最优情况
> 加入boolean控制，当第一次就没有元素进行交换，那就是说明元素本身就是有序的。**那对于时间复杂度就是线性阶:O(n)**

### 空间复杂度
> **空间复杂度就是:O(1)**

### 稳定性
冒泡排序属于稳定的排序
