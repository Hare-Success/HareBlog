---
id: VueSlot
title: Vue插槽
authors: Hare
tags: [vue]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vue插槽

:::note
不得不佩服这写农名工脑子~~~都是农名工一个犁地用人工（this me ），一个犁地用机器<br/>
插槽: 定义公共组件时，可能涉及很多模块中使用到这个公共组件，每个模块想提供的内容不一样。比如A模块想在公共组件加上属于自己的标签内容，B组件也想加一个属于自己的标签内容。<br/>
so 在公共组件中定义插槽，保证有自己的东西同时其他地方想diy可以通过slot来实现<br/>
个人理解直接实现->diy。
:::

## 插槽实现

:::warning
按照官方介绍，目前已经放弃老的写法，所以这篇按照官方所给出的新的方式进行尝试。<br/>
**[官网地址](https://v2.cn.vuejs.org/v2/guide/components-slots.html)**

**重要标签"slot",重要指令"v-slot"**
:::

### 插槽简单实现
ComponentA组件（父组件），ComponentB组件（子组件）那么在父组件中使用子组件定义的插槽可以使用以下方式:<br/>

<Tabs>
  <TabItem value="子组件" label="子组件" default>
    ~~~js
    <template>
        <div class="SoltComponent">
            <h2>我是子组件</h2>
            <span>这就是我的子组件</span>

            <!-- 直接在子组件定义slot标签  -->
            <slot></slot>
        </div>
    </template>
    <script>
        export default {
        name: 'SoltComponent',
        data() {
            return {
        }｝
    </script>
    ~~~
  </TabItem>
  <TabItem value="父组件" label="父组件">
    ~~~js
        <!-- 父组件使用子组件的时候，直接在子组件标签中加入你想加入的内容    -->
        <SoltComponent><button>这是我第二个插槽</button></SoltComponent>
    ~~~
  </TabItem>
</Tabs>

:::warning
子组件slot标签中会有一些原内容，在父组件定义后会覆盖掉子组件中的内容
:::

### 具名插槽
见名知意当子组件定义了很多插槽，就要取名字。保证父组件使用时不再那么迷茫~~~~

<Tabs>
  <TabItem value="子组件" label="子组件" default>
    ~~~js
    <template>
      <div class="SoltComponent">
          <h2>我是子组件</h2>
          <span>这就是我的子组件</span>
          <slot name="left"></slot>
          <slot name="center"></slot>
          <slot name="right"></slot>
      </div>
    </template>
    ~~~
  </TabItem>
  <TabItem value="父组件" label="父组件">
    ~~~js
        <!-- 父组件使用子组件的时候，需要添加template标签 并带上v-slot  -->
        <SoltComponent>
            <template v-slot:left>
                <button>这是left子组件的slot</button>
            </template>
        </SoltComponent>
        <SoltComponent>
          <template v-slot:right>
            <button>这是right子组件的slot</button>
          </template>
        </SoltComponent>
    ~~~
  </TabItem>
</Tabs>

:::warning
v-slot指令必须要在template标签中，同时v-slot也是有语法糖的"#"。比如#left，#right，#center                                         
:::

### 作用域插槽
简单理解就是在父组件中使用子组件插槽，并获取子组件中的变量值。请看以下例子:

<Tabs>
  <TabItem value="子组件" label="子组件" default>
    ~~~js
        <template>
          <div class="SlotScopeComponent">
              <!--  这个属性名称自定义 -->
              <slot :data="arrayParam">
                  <ul>
                    <li v-for="item in arrayParam" :key="item">{{item}}</li>
                  </ul>
              </slot>
          </div>
    </template>

    <script>
    export default {
      name: 'SlotScopeComponent',
      data() {
        return {
          arrayParam:['帅哥','美女','鸭子']
        };
      }
    };
    </script>
    ~~~
  </TabItem>
  <TabItem value="父组件" label="父组件">
    ~~~js
        <SlotScopeComponent>
          <!--父组件使用时接收，直接点就可以了。-->
          <template #default="param">
            <span v-for="item in param.data" :key="item">{{item}}</span>
          </template>
        </SlotScopeComponent>
    ~~~
  </TabItem>
</Tabs>

