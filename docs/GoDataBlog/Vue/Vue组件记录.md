---
id: VueComponent
title: Vue组件
authors: Hare
tags: [vue]
---

# vue组件

## 组件注册
vue组件的引用原则: 先注册后使用

### 全局注册
ComponentA组件（父组件），ComponentB组件（子组件）那么在父组件中使用全局子组件可以使用以下方式:<br/>

使用脚手架创建的项目中有一个main.js，在其里面注册组件就是全局注册。
~~~js
// main.js
import ComponentB from './xxx/ComponentB.vue'
Vue.component(ComponentB,"ComponentB")
~~~
:::note
被全局注册的组件，可以在全局任何一个组件内使用。
:::


### 局部注册
ComponentA组件（父组件），ComponentB组件（子组件）那么在父组件中注册子组件可以使用以下方式:
~~~js

<template>
    <div>
        <ComponentB/>
    </div>
</template>

// 在ComponentA组件中注册ComponentB组件
import ComponentB from '@/xxx/ComponentB.vue'
export default {
    name: 'HomeView',
    components: {
        ComponentB
    }
}
~~~
:::note
被局部注册的组件，只能在当前注册的范围内使用。<br/>
官方提到:
全局注册往往是不够理想的。比如，如果你使用一个像 webpack 这样的构建系统，全局注册所有的组件意味着即便你已经不再使用一个组件了，它仍然会被包含在你最终的构建结果中。<br/>
这造成了用户下载的 JavaScript 的无谓的增加。
:::


## 组件通信

### 父传子props
ComponentA组件（父组件），ComponentB组件（子组件）那么在父组件传值子组件可以使用props:

子组件代码
~~~js
export default {
    name: 'ComponentB',
    data() {
        return {
            number: 0
        };
    },
    // 在子组件定义props属性,定义所需参数
    props: {
        nameProps: []
    },
}
~~~

父组件代码
~~~js

<template>
    <div>
        <ComponentB :nameProps="nameProps"/>
    </div>
</template>

export default {
    name: 'ComponentA',
    data() {
        return {
            nameProps: ['java', 'py', 'vue']
        }
    },
}
~~~

### 子传父$emit事件
ComponentA组件（父组件），ComponentB组件（子组件）那么在父组件接收子组件可以使用$emit事件:

子组件代码
~~~js

<template>
    <div>
        <button @click="btnParam">子传父按钮</button>
    </div>
</template>

export default {
    name: 'ComponentB',
    data() {
        return {
            number: 0
        };
    },
    // 在子组件定义props属性,定义所需参数
    props: {
        nameProps: []
    },
    methods:{
        btnParam(){
            this.$emit("btnParam","这是我传递的数据");
        }
    }
}
~~~

父组件代码
~~~js

<template>
    <div>
        <ComponentB @btnParam="btnParent"/>
    </div>
</template>

export default {
    name: 'ComponentA',
    data() {
        return {
            nameProps: ['java', 'py', 'vue']
        }
    },
    methods:{
        btnParent(param){
            console.log("子组件传参数据:",param);
        }
    }
}
~~~

## 获取组件

### 获取子组件
使用$children来获取子组件，若是多个子组件返回的就是Array，可以获取子组件方法，变量等。

### 获取父组件
使用$parent来获取父组件，可以获取父组件的方法，变量等。

## $refs 获取组件

~~~js

<template>
    <div>
        <ComponentB ref="refChildren"/>
    </div>
</template>


export default{
    name:"ComponentA",
    data(){
        return{
            
        }
    },
    methods:{
        btnMethods(){
            this.$refs.refChildren.方法()
            this.$refs.refChildren.变量
        }
    }
}
~~~
