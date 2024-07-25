"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[4301],{3601:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var t=i(2676),s=i(9313);const o={id:"vite-plugin",slug:"/vite-plugin",title:"Vite\u76f8\u5173\u63d2\u4ef6",date:new Date("2022-04-10T00:00:00.000Z"),authors:"kuizuo",tags:["vue","vite"],toc_max_heading_level:2},r=void 0,l={id:"tools/vite-plugin",title:"Vite\u76f8\u5173\u63d2\u4ef6",description:"\u8bb0\u5f55\u4e0b\u65e5\u5e38\u4f7f\u7528 Vite \u7684\u4e00\u4e9b\u76f8\u5173\u63d2\u4ef6\u3002",source:"@site/docs/tools/Vite\u76f8\u5173\u63d2\u4ef6.md",sourceDirName:"tools",slug:"/vite-plugin",permalink:"/en/docs/vite-plugin",draft:!1,unlisted:!1,tags:[{inline:!0,label:"vue",permalink:"/en/docs/tags/vue"},{inline:!0,label:"vite",permalink:"/en/docs/tags/vite"}],version:"current",frontMatter:{id:"vite-plugin",slug:"/vite-plugin",title:"Vite\u76f8\u5173\u63d2\u4ef6",date:"2022-04-10T00:00:00.000Z",authors:"kuizuo",tags:["vue","vite"],toc_max_heading_level:2},sidebar:"tools",previous:{title:"IDEA\u57fa\u672c\u914d\u7f6e",permalink:"/en/docs/idea-config"},next:{title:"Jetbrains\u7cfb\u5217\u4ea7\u54c1\u6fc0\u6d3b\u65b9\u6cd5",permalink:"/en/docs/jetbrains-product-activation-method"}},c={},u=[{value:"unplugin-auto-import",id:"unplugin-auto-import",level:2},{value:"\u54cd\u5e94\u5f0f\u8bed\u6cd5\u7cd6",id:"\u54cd\u5e94\u5f0f\u8bed\u6cd5\u7cd6",level:3},{value:"unplugin-vue-components",id:"unplugin-vue-components",level:2},{value:"unplugin-vue-define-options/vite",id:"unplugin-vue-define-optionsvite",level:2},{value:"vite-plugin-mock",id:"vite-plugin-mock",level:2},{value:"vite-plugin-pages",id:"vite-plugin-pages",level:2},{value:"vite-plugin-vue-layouts",id:"vite-plugin-vue-layouts",level:2},{value:"vite-plugin-purge-icons",id:"vite-plugin-purge-icons",level:2},{value:"vite-plugin-windicss",id:"vite-plugin-windicss",level:2},{value:"vite-plugin-node",id:"vite-plugin-node",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u8bb0\u5f55\u4e0b\u65e5\u5e38\u4f7f\u7528 Vite \u7684\u4e00\u4e9b\u76f8\u5173\u63d2\u4ef6\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"unplugin-auto-import",children:(0,t.jsx)(n.a,{href:"https://github.com/antfu/unplugin-auto-import",children:"unplugin-auto-import"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["\u81ea\u52a8\u5bfc\u5165 vue3 \u76f8\u5173\u65b9\u6cd5\uff0c\u652f\u6301",(0,t.jsx)(n.code,{children:"vue"}),", ",(0,t.jsx)(n.code,{children:"vue-router"}),", ",(0,t.jsx)(n.code,{children:"vue-i18n"}),", ",(0,t.jsx)(n.code,{children:"@vueuse/head"}),", ",(0,t.jsx)(n.code,{children:"@vueuse/core"}),"\u7b49\u81ea\u52a8\u5f15\u5165"]})}),"\n",(0,t.jsx)(n.p,{children:"\u6548\u679c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// \u5f15\u5165\u524d\nimport { ref, computed } from 'vue'\nconst count = ref(0)\nconst doubled = computed(() => count.value * 2)\n\n//\u5f15\u5165\u540e\nconst count = ref(0)\nconst doubled = computed(() => count.value * 2)\n\n// \u5f15\u5165\u524d\nimport { useState } from 'react'\nexport function Counter() {\n  const [count, setCount] = useState(0)\n  return <div>{count}</div>\n}\n\n//\u5f15\u5165\u540e\nexport function Counter() {\n  const [count, setCount] = useState(0)\n  return <div>{count}</div>\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5b89\u88c5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm i -D unplugin-auto-import\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/antfu/unplugin-auto-import#configuration",children:"\u5b8c\u6574\u914d\u7f6e"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="vite.config.js"',children:"import { defineConfig } from 'vite'\nimport AutoImport from 'unplugin-auto-import/vite'\n\nexport default defineConfig({\n  plugins: [\n    AutoImport({\n      imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/head', '@vueuse/core'],\n      dts: 'src/auto-import.d.ts',\n      // \u53ef\u4ee5\u9009\u62e9auto-import.d.ts\u751f\u6210\u7684\u4f4d\u7f6e\uff08\u9ed8\u8ba4\u6839\u76ee\u5f55\uff09\uff0c\u5efa\u8bae\u8bbe\u7f6e\u4e3a'src/auto-import.d.ts'\n    }),\n  ],\n})\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u539f\u7406: \u81ea\u52a8\u751f\u6210 auto-imports.d.ts \u6587\u4ef6\u7528\u4e8e\u4ee3\u7801\u63d0\u793a\uff0c\u5982\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="auto-imports.d.ts"',children:"// Generated by 'unplugin-auto-import'\n// We suggest you to commit this file into source control\ndeclare global {\n  const ref: (typeof import('vue'))['ref']\n  const reactive: (typeof import('vue'))['reactive']\n  const computed: (typeof import('vue'))['computed']\n  const createApp: (typeof import('vue'))['createApp']\n  const watch: (typeof import('vue'))['watch']\n  const customRef: (typeof import('vue'))['customRef']\n  const defineAsyncComponent: (typeof import('vue'))['defineAsyncComponent']\n}\nexport {}\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"\u6ce8\u610f\uff1a\u7531\u4e8e\u6ca1\u6709\u5c40\u90e8\u5bfc\u5165\uff0c\u5728\u4ee3\u7801\u8df3\u8f6c\u67e5\u770b\u65f6\uff0c\u5c31\u4f1a\u8df3\u8f6c\u5230 auto-imports.d.ts \u6587\u4ef6\uff0c\u7136\u540e\u518d\u8df3\u8f6c\u5230\u539f\u5b9a\u4e49\u4f4d\u7f6e\u3002",type:"warning"}),"\n",(0,t.jsx)(n.h3,{id:"\u54cd\u5e94\u5f0f\u8bed\u6cd5\u7cd6",children:"\u54cd\u5e94\u5f0f\u8bed\u6cd5\u7cd6"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://vuejs.org/guide/extras/reactivity-transform.html",children:"Reactivity Transform | Vue.js (vuejs.org)"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528$ref \u5728\u4f7f\u7528\u65f6\uff0c\u65e0\u9700.value\u3002\u6f14\u793a\u5982\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import { $ref, $$ } from 'vue/macros' // $ref\u662fvue/macros\u5305\u4e0b\u7684\n\n// bind ref as a variable\nlet count = $ref(0)\n\n// assignments are reactive\ncount++\n\n// get the actual ref\nconsole.log($$(count)) // { value: 1 }\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u53ef\u4ee5\u7528",(0,t.jsx)(n.code,{children:"$()"}),"\u6765\u89e3\u6784\u54cd\u5e94\u5f0f\u5bf9\u8c61\uff0c\u8fd9\u6837\u5c31\u4e0d\u7528\u5199",(0,t.jsx)(n.code,{children:".value"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u53ef\u4ee5\u7528",(0,t.jsx)(n.code,{children:"$$()"}),"\u6765\u83b7\u53d6\u539f\u6709\u7684\u54cd\u5e94\u5f0f\u5bf9\u8c61"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 vite.config.ts \u6587\u4ef6\u91cc\uff0c\u52a0\u4e0a",(0,t.jsx)(n.code,{children:"reactivityTransform: true"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="vite.config.js"',children:"plugins: [\n  vue({\n    reactivityTransform: true,\n  }),\n]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528 unplugin-auto-import \u4e2d\u7684\u5bfc\u5165",(0,t.jsx)(n.code,{children:"vue/macros"}),"\u65e0\u9700 import \u5bfc\u5165\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="vite.config.js"',children:"AutoImport({\n  imports: ['vue/macros'],\n  dts: true,\n})\n"})}),"\n",(0,t.jsx)(n.h2,{id:"unplugin-vue-components",children:(0,t.jsx)(n.a,{href:"https://github.com/antfu/unplugin-vue-components",children:"unplugin-vue-components"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u81ea\u52a8\u5bfc\u5165 UI \u5e93\uff0c\u6309\u9700\u5bfc\u5165\u3002\u5f88\u591a\u7ec4\u4ef6\u5e93\u90fd\u63a8\u8350\u8fd9\u79cd\u65b9\u5f0f\u5bfc\u5165\u4f8b\u5982 Element Plus \u3001Ant Design Vue"})}),"\n",(0,t.jsx)(n.p,{children:"\u5b89\u88c5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install unplugin-vue-components -D\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="vite.config.js"',children:"import { defineConfig } from 'vite'\nimport Components from 'unplugin-vue-components/vite'\nimport {\n  ElementPlusResolver,\n  AntDesignVueResolver,\n  VantResolver,\n  HeadlessUiResolver,\n  ElementUiResolver\n} from 'unplugin-vue-components/resolvers'\n\nexport default defineConfig({\n  plugins: [\n    Components({\n      // ui\u5e93\u89e3\u6790\u5668\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\n      resolvers: [\n        ElementPlusResolver(),\n        AntDesignVueResolver(),\n        VantResolver(),\n        HeadlessUiResolver(),\n        ElementUiResolver()\n      ]\n    })\n  ]\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u63d2\u4ef6\u4f1a\u751f\u6210\u4e00\u4e2a ui \u5e93\u7ec4\u4ef6\u4ee5\u53ca\u6307\u4ee4\u8def\u5f84 components.d.ts \u6587\u4ef6\uff0c\u5982\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="components.d.ts"',children:"// generated by unplugin-vue-components\n// We suggest you to commit this file into source control\n// Read more: https://github.com/vuejs/vue-next/pull/3399\n\ndeclare module 'vue' {\n  export interface GlobalComponents {\n    ElAside: (typeof import('element-plus/es'))['ElAside']\n    ElButton: (typeof import('element-plus/es'))['ElButton']\n    ElContainer: (typeof import('element-plus/es'))['ElContainer']\n    ElHeader: (typeof import('element-plus/es'))['ElHeader']\n    ElIcon: (typeof import('element-plus/es'))['ElIcon']\n    ElMain: (typeof import('element-plus/es'))['ElMain']\n  }\n}\n\nexport {}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u53ea\u8981\u4f60\u7528\u8fc7\u7684\u7ec4\u4ef6\u90fd\u4f1a\u81ea\u52a8\u5bfc\u5165\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u5bfc\u5165\u81ea\u5df1\u7684\u7ec4\u4ef6\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="vite.config.js"',children:"import { defineConfig } from 'vite'\nimport Components from 'unplugin-vue-components/vite'\n\nexport default defineConfig({\n  plugins: [\n    Components({\n      // \u6307\u5b9a\u7ec4\u4ef6\u4f4d\u7f6e\uff0c\u9ed8\u8ba4\u662fsrc/components\n      dirs: ['src/components'],\n      extensions: ['vue'],\n      // \u914d\u7f6e\u6587\u4ef6\u751f\u6210\u4f4d\u7f6e\n      dts: 'src/components.d.ts',\n    }),\n  ],\n})\n"})}),"\n",(0,t.jsx)(n.h2,{id:"unplugin-vue-define-optionsvite",children:(0,t.jsx)(n.a,{href:"https://github.com/sxzz/unplugin-vue-define-options",children:"unplugin-vue-define-options/vite"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"script setup \u8bed\u6cd5\u7cd6\u901a\u8fc7 defineOptions \u5b9a\u4e49\u7ec4\u4ef6 name\u3001inheritAttrs\u3001props\u3001emits"})}),"\n",(0,t.jsx)(n.p,{children:"\u5b89\u88c5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm i unplugin-vue-define-options\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="vite.config.js"',children:"import { defineConfig } from 'vite'\nimport DefineOptions from 'unplugin-vue-define-options/vite'\nimport vue from '@vitejs/plugin-vue'\n\nexport default defineConfig({\n  plugins: [vue(), DefineOptions()],\n})\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728",(0,t.jsx)(n.code,{children:"tsconfig.json"}),"\u8bbe\u7f6e types\uff0c\u5982\u4e0b\u6240\u793a:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "types": ["unplugin-vue-define-options"]\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0d\u7136\u5728 ts \u9879\u76ee\u4e2d\u4f1a\u63d0\u793a ",(0,t.jsx)(n.strong,{children:"\u627e\u4e0d\u5230\u540d\u79f0\u201cdefineOptions\u201d"}),"\uff0c\u5177\u4f53\u4f7f\u7528\u5982\u4e0b"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vue",children:"<script setup lang=\"ts\">\nimport { useSlots } from 'vue'\ndefineOptions({\n  name: 'Foo',\n  inheritAttrs: false,\n  props: {\n    msg: { type: String, default: 'bar' },\n  },\n  emits: ['change', 'update'],\n})\nconst slots = useSlots()\n<\/script>\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8f93\u51fa"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vue",children:"<script lang=\"ts\">\nexport default {\n  name: 'Foo',\n  inheritAttrs: false,\n  props: {\n    msg: { type: String, default: 'bar' },\n  },\n  emits: ['change', 'update'],\n}\n<\/script>\n\n<script setup>\nconst slots = useSlots()\n<\/script>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u53ea\u662f\u60f3",(0,t.jsx)(n.strong,{children:"\u5355\u7eaf\u7684\u8bbe\u7f6e\u7ec4\u4ef6\u540d"}),"\u7684\u8bdd\uff0c\u8fd9\u4e2a\u63d2\u4ef6 ",(0,t.jsx)(n.a,{href:"https://github.com/vbenjs/vite-plugin-vue-setup-extend",children:"vite-plugin-vue-setup-extend"})," \u53ef\u80fd\u66f4\u9002\u5408\uff0c\u53ea\u9700\u8981\u5728 script \u4e2d\u6dfb\u52a0\u4e00\u4e2a name \u5c5e\u6027\u5373\u53ef\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vue",children:'<template>\n  <div>hello world {{ a }}</div>\n</template>\n\n<script lang="ts" setup name="App">\nconst a = 1\n<\/script>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"vite-plugin-mock",children:(0,t.jsx)(n.a,{href:"https://github.com/vbenjs/vite-plugin-mock",children:"vite-plugin-mock"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u63d0\u4f9b\u672c\u5730\u548c\u751f\u4ea7\u6a21\u62df\u670d\u52a1\u3002"})}),"\n",(0,t.jsx)(n.p,{children:"\u5b89\u88c5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm i mockjs vite-plugin-mock\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="vite.config.js"',children:"import { UserConfigExport, ConfigEnv } from 'vite'\n\nimport { viteMockServe } from 'vite-plugin-mock'\nimport vue from '@vitejs/plugin-vue'\n\nexport default ({ command }: ConfigEnv): UserConfigExport => {\n  return {\n    plugins: [\n      vue(),\n      viteMockServe({\n        // default\n        mockPath: 'mock',\n        localEnabled: command === 'serve',\n      }),\n    ],\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"vite-plugin-pages",children:(0,t.jsx)(n.a,{href:"https://github.com/hannoeru/vite-plugin-pages",children:"vite-plugin-pages"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u57fa\u4e8e\u6587\u4ef6\u7cfb\u7edf\u7684\u52a8\u6001\u8def\u7531\u3002"})}),"\n",(0,t.jsx)(n.p,{children:"\u5b89\u88c5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install -D vite-plugin-pages\nnpm install vue-router\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="vite.config.js"',children:"import Pages from 'vite-plugin-pages'\n\nexport default {\n  plugins: [\n    Pages({\n      dirs: 'src/views',\n    }),\n  ],\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f20\u7edf\u7684 routes \u5199\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// 1. \u5b9a\u4e49\u8def\u7531\u7ec4\u4ef6.\nconst Home = { template: '<div>Home</div>' }\nconst About = { template: '<div>About</div>' }\n\n// 2. \u5b9a\u4e49\u4e00\u4e9b\u8def\u7531\nconst routes = [\n  { path: '/', component: Home },\n  { path: '/about', component: About },\n]\n\n// 3. \u521b\u5efa\u8def\u7531\u5b9e\u4f8b\u5e76\u4f20\u9012 `routes` \u914d\u7f6e\nconst router = VueRouter.createRouter({\n  routes,\n})\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u800c\u8be5\u63d2\u4ef6\u5219\u662f\u5bfc\u5165\u6574\u4e2a pages\uff08views\uff09\u4e0b\u7684 vue \u6587\u4ef6\u4f5c\u4e3a\u8def\u7531\uff0c\u4e5f\u6709\u4e00\u5957\u81ea\u5b9a\u4e49\u7684\u8def\u7531\u89c4\u5219\uff0c\u7c7b\u4f3c nuxt.js"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-main.js",children:"import { createRouter } from 'vue-router'\nimport routes from '~pages'\n\nconst router = createRouter({\n  // ...\n  routes,\n})\n"})}),"\n",(0,t.jsx)(n.h2,{id:"vite-plugin-vue-layouts",children:(0,t.jsx)(n.a,{href:"https://github.com/JohnCampionJr/vite-plugin-vue-layouts",children:"vite-plugin-vue-layouts"})}),"\n",(0,t.jsxs)(n.p,{children:["\u914d\u5408",(0,t.jsx)(n.code,{children:"vite-plugin-pages"}),"\u4f7f\u7528,\u53ef\u4ee5\u5728\u751f\u6210\u9875\u9762\u8def\u7531\u7684\u57fa\u7840\u4e0a\u5b9e\u73b0\u52a8\u6001\u5e03\u5c40\u529f\u80fd."]}),"\n",(0,t.jsx)(n.p,{children:"\u5b89\u88c5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install -D vite-plugin-vue-layouts\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import Vue from '@vitejs/plugin-vue'\nimport Pages from 'vite-plugin-pages'\nimport Layouts from 'vite-plugin-vue-layouts'\n\nexport default {\n  plugins: [Vue(), Pages(), Layouts()],\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5bf9\u5e94\u7684\u9875\u9762\u5355\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5e03\u5c40\u914d\u7f6e\uff0c\u5728\u8def\u7531\u65f6\u5373\u53ef\u6309\u914d\u7f6e\u5207\u6362\u5e03\u5c40\uff0c\u5c06\u9875\u9762\u5d4c\u5165\u5bf9\u5e94\u7684\u5e03\u5c40\u6587\u4ef6\u4e4b\u4e2d."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vue",children:'<route lang="yaml">\nmeta:\n  layout: users\n</route>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"vite-plugin-purge-icons",children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/vite-plugin-purge-icons",children:"vite-plugin-purge-icons"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["\u65b9\u4fbf\u7684\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://icon-sets.iconify.design/",children:"Iconify"})," \u56fe\u6807\u3002"]})}),"\n",(0,t.jsx)(n.p,{children:"\u5b89\u88c5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:" pnpm add @iconify/iconify\n pnpm add vite-plugin-purge-icons @iconify/json -D\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="vite.config.js"',children:"import PurgeIcons from 'vite-plugin-purge-icons'\n\nexport default {\n  plugins: [\n    PurgeIcons({\n      /* PurgeIcons Options */\n    }),\n  ],\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 main.js \u4e2d\u5bfc\u5165 ",(0,t.jsx)(n.code,{children:"@purge-icons/generated"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="main.js" {3,4}',children:"import { createApp } from 'vue'\nimport App from './App.vue'\n\nimport '@iconify/iconify'\nimport '@purge-icons/generated'\n\ncreateApp(App).mount('#app')\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 html \u6587\u4ef6\u4e2d\u6307\u660e class \u4e3a iconify\uff0cdata-icon \u4e3a iconify \u5bf9\u5e94\u7684\u56fe\u6807\uff08\u76f4\u63a5\u590d\u5236\u5b98\u7f51\u7684\u56fe\u6807\uff09"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<span class="iconify" data-icon="system-uicons:browser-alt" data-inline="false" />\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u4e5f\u53ef\u4ee5\u81ea\u884c\u5c01\u88c5\u4e00\u4e2a Icon \u7ec4\u4ef6\uff0c\u50cf\u4e0b\u9762\u8fd9\u6837\u4f7f\u7528\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<Icon icon="ion:settings-outline" :size="30" />\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u6216\u8005\u4f7f\u7528 vue3 \u7248\u7684 ",(0,t.jsx)(n.a,{href:"https://docs.iconify.design/icon-components/vue/index.html",children:"Iconify for Vue"})," \u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"vite-plugin-windicss",children:(0,t.jsx)(n.a,{href:"https://github.com/windicss/vite-plugin-windicss",children:"vite-plugin-windicss"})}),"\n",(0,t.jsx)(n.p,{children:"\u5b89\u88c5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm i -D vite-plugin-windicss windicss\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="vite.config.js"',children:"import WindiCSS from 'vite-plugin-windicss'\n\nexport default {\n  plugins: [WindiCSS()],\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e4b\u6240\u4ee5\u4f7f\u7528 Windi CSS\uff0c\u4e3b\u8981\u662f",(0,t.jsx)(n.a,{href:"https://cn.windicss.org/features/attributify.html",children:"\u5c5e\u6027\u5316\u6a21\u5f0f"}),"\u592a\u9999\u4e86\uff08\u9884\u8ba1\u4f1a\u6210\u4e3a\u4e00\u4e2a\u8d8b\u52bf\uff09\uff0c\u5c5e\u6027\u5316\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u53ef\u9009\u7684\uff0c\u53ef\u4ee5\u5728\u4f60\u7684 windi \u914d\u7f6e\u4e2d\u5f00\u542f\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="windi.config.ts"',children:"import { defineConfig } from 'windicss/helpers'\n\nexport default defineConfig({\n  attributify: true,\n})\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5e76\u6839\u636e\u9700\u8981\u8fd9\u6837\u4f7f\u7528\u5b83\u4eec\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<button\n  bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"\n  text="sm white"\n  font="mono light"\n  p="y-2 x-4"\n  border="2 rounded blue-200"\n>\n  Button\n</button>\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'(variant[:-]{1})*key? = "((variant:)*value)*"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"vite-plugin-node",children:(0,t.jsx)(n.a,{href:"https://github.com/axe-me/vite-plugin-node",children:"vite-plugin-node"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u5141\u8bb8\u60a8\u4f7f\u7528 vite \u4f5c\u4e3a\u8282\u70b9\u5f00\u53d1\u670d\u52a1\u5668\u3002\u200e"})}),"\n",(0,t.jsx)(n.p,{children:"\u6682\u65f6\u6ca1\u6709\u5b9e\u9645\u6d4b\u8bd5\u8fc7\uff0c\u53ea\u662f\u89c9\u5f97\u6709\u70b9\u610f\u601d\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f53\u9a8c\u8fc7\u4e00\u6bb5\u65f6\u95f4\u7684 Vite \u5f00\u53d1\uff0c\u5f00\u53d1\u4f53\u9a8c\u8fd8\u662f\u5f88\u6ee1\u610f\u7684\uff0c\u8fd9\u5176\u4e2d\u80af\u5b9a\u4e0e\u4e0a\u9762\u7684\u63d2\u4ef6\u6709\u7740\u5bc6\u5207\u8054\u7cfb\u3002\u8fd9\u6b21\u53bb\u7ffb\u770b\u4e86\u4e00\u4e9b\u9879\u76ee\uff0c\u4e86\u89e3\u5176\u4e2d\u63d2\u4ef6\u7684\u4f7f\u7528\u3002\u8fd9\u91cc\u53ea\u662f\u6c47\u603b\u4e86\u4e9b\u5e38\u7528\u7684\uff0c\u8fd8\u6709\u66f4\u591a\u76f8\u5173\u63d2\u4ef6\u53ef\u4ee5\u53bb",(0,t.jsx)(n.a,{href:"https://github.com/vitejs/awesome-vite#plugins",children:"awesome-vite"}),"\u4e0a\u67e5\u770b\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u53c2\u8003\u6587\u7ae0:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://juejin.cn/post/7012446423367024676",children:"\u5c24\u5927\u63a8\u8350\u7684\u795e\u5668 unplugin-vue-components,\u89e3\u653e\u53cc\u624b!\u4ee5\u540e\u518d\u4e5f\u4e0d\u7528\u5446\u5446\u7684\u624b\u52a8\u5f15\u5165(\u7ec4\u4ef6,ui(Element-ui)\u5e93,vue hooks \u7b49) - \u6398\u91d1 (juejin.cn)"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://juejin.cn/post/6996176490148659231",children:"vite2 \u5e38\u7528\u63d2\u4ef6\u7bc7\uff08\u4e09\uff09- \u8fdb\u9636\u63d2\u4ef6 - \u6398\u91d1 (juejin.cn)"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://juejin.cn/post/6998059092497399845",children:"Vite \u4e4b\u9ad8\u6548\u63d2\u4ef6\u63a8\u8350 \ud83c\udf49 - \u6398\u91d1 (juejin.cn)"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/vitejs/awesome-vite#plugins",children:"vitejs/awesome-vite: \u26a1\ufe0f A curated list of awesome things related to Vite.js (github.com)"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},9313:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var t=i(5271);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);