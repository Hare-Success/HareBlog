---
id: algorithmsSelectSort
title: 选择排序
authors: Hare
tags: [数据结构,算法,基础，排序]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 选择排序

## 选择排序思想

:::note
在选择排序中我们通常假设一个数组中下标为0的元素为最小或者最大值。例如:<br/>
数组一共n元素则: {a1,....ai-1,i,ai+1,......,n}
1. 元素a1我们假设他就是最小的，则a1与｛ai-1,i,ai+1,.....n｝中所有值比较，将真正的最小值找到（进行交换）
2. 数组第一个最小值已经找到，以此类推我们假设数组下标为1的元素为最小值，依次与后面的值比较~
3. 以此类推，直到排序完成
:::

### 选择排序动态图
![选择排序动态图](../../../../static/img/dataStructures/十大排序/选择排序.gif)

## 具体代码实现

<Tabs>
  <TabItem value="Java" label="Java" default>
    ~~~java
    public static void selectSort(int[] nums) {
        int temp = 0;
        for (int i = 0; i < nums.length - 1; i++) {
            int min = i;
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[min] > nums[j]) {
                    min = j;
                }
            }
            if (min != i) {
                temp = nums[i];
                nums[i] = nums[min];
                nums[min] = temp;
            }
        }
        System.out.println(Arrays.toString(nums));
    }
    ~~~
  </TabItem>
</Tabs>

## 时间复杂度
> **时间复杂度就是平方阶:O(n^2)**
## 空间复杂度
> **空间复杂度就是:O(1)**

## 稳定性
选择排序属于不稳定的排序

::: warning
对于冒泡排序来说，选择排序的交换次数要比冒泡的少。所以性能方面也要比冒泡优越一点。
:::
