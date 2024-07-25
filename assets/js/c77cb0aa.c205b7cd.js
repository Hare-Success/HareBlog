"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[1971],{4291:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=s(2676),o=s(9313);const l={id:"use-require.context-to-auto-import-modules",slug:"/use-require.context-to-auto-import-modules",title:"\u4f7f\u7528 require.context \u5b9e\u73b0\u6a21\u5757\u81ea\u52a8\u5bfc\u5165",date:new Date("2021-09-12T00:00:00.000Z"),authors:"kuizuo",tags:["node","webpack"],keywords:["node","webpack"]},r=void 0,i={id:"skill/node/use-require.context-to-auto-import-modules",title:"\u4f7f\u7528 require.context \u5b9e\u73b0\u6a21\u5757\u81ea\u52a8\u5bfc\u5165",description:"\u524d\u8a00",source:"@site/docs/skill/node/\u4f7f\u7528 require.context \u5b9e\u73b0\u6a21\u5757\u81ea\u52a8\u5bfc\u5165.md",sourceDirName:"skill/node",slug:"/use-require.context-to-auto-import-modules",permalink:"/docs/use-require.context-to-auto-import-modules",draft:!1,unlisted:!1,tags:[{inline:!0,label:"node",permalink:"/docs/tags/node"},{inline:!0,label:"webpack",permalink:"/docs/tags/webpack"}],version:"current",frontMatter:{id:"use-require.context-to-auto-import-modules",slug:"/use-require.context-to-auto-import-modules",title:"\u4f7f\u7528 require.context \u5b9e\u73b0\u6a21\u5757\u81ea\u52a8\u5bfc\u5165",date:"2021-09-12T00:00:00.000Z",authors:"kuizuo",tags:["node","webpack"],keywords:["node","webpack"]},sidebar:"skill",previous:{title:"npm\u955c\u50cf\u914d\u7f6e",permalink:"/docs/npm-mirror-config"},next:{title:"\u7f16\u7a0b\u8bed\u8a00",permalink:"/docs/category/\u7f16\u7a0b\u8bed\u8a00"}},c={},d=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u5199\u8d44\u6e90\u5bfc\u822a\u7684\u65f6\u5019\uff0c\u6211\u5728\u5c06\u8d44\u6e90\u5206\u7c7b\u4e3a\u4e00\u4e2a\u6587\u4ef6\u7684\u65f6\u5019\uff0c\u53d1\u73b0\u5982\u679c\u6211\u6bcf\u5b9a\u4e49\u4e00\u4e2a\u5206\u7c7b\uff0c\u90a3\u6211\u5c31\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\uff0c\u7136\u540e\u53c8\u8981\u901a\u8fc7",(0,t.jsx)(n.code,{children:"import form"}),"\u5bfc\u5165\uff0c\u5c31\u5f88\u70e6\u8e81\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20210912080353288.png",alt:"image-20210912080353288"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7a81\u7136\u60f3\u5230\u8c8c\u4f3c vue-element-admin \u4e2d\u7684\u8def\u7531\u597d\u50cf\u4e5f\u662f\u8fd9\u6837\u7684\uff0c\u800c store \u8c8c\u4f3c\u5b9a\u4e49\u5b8c\u5c31\u65e0\u9700\u518d\u6b21\u5bfc\u5165\uff0c\u4e8e\u662f\u5c31\u5f00\u59cb\u7814\u7a76\u4ee3\u7801\uff0c\u679c\u4e0d\u5176\u7136\uff0c\u53d1\u73b0\u4e86",(0,t.jsx)(n.code,{children:"require.context"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20210912080429237.png",alt:"image-20210912080429237"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://webpack.docschina.org/guides/dependency-management/",children:"\u4f9d\u8d56\u7ba1\u7406 | webpack \u4e2d\u6587\u6587\u6863 (docschina.org)"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5b9e\u73b0",children:"\u5b9e\u73b0"}),"\n",(0,t.jsx)(n.p,{children:"require.context\uff1a\u662f\u4e00\u4e2a webpack \u63d0\u4f9b\u7684 api,\u901a\u8fc7\u6267\u884c require.context \u51fd\u6570\u904d\u5386\u83b7\u53d6\u5230\u6307\u5b9a\u6587\u4ef6\u5939\uff08\u53ca\u5176\u4e0b\u5b50\u6587\u4ef6\u5939\uff09\u5185\u7684\u6307\u5b9a\u6587\u4ef6\uff0c\u7136\u540e\u81ea\u52a8\u5bfc\u5165\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u8bed\u6cd5\uff1a",(0,t.jsx)(n.code,{children:"require.context(directory, useSubdirectories = false, regExp = /^.//)"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"directory \u6307\u5b9a\u6587\u4ef6"}),"\n",(0,t.jsx)(n.li,{children:"useSubdirectories \u662f\u5426\u904d\u5386\u76ee\u5f55\u7684\u5b50\u76ee\u5f55"}),"\n",(0,t.jsx)(n.li,{children:"regExp \u5339\u914d\u6587\u4ef6\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5373\u6587\u4ef6\u7c7b\u578b"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u800c\u4e0a\u56fe\u4ee3\u7801\u4e2d\u5bf9\u5e94\u7684\u4ee3\u7801\u4e5f\u660e\u786e\u8868\u8fbe\u8981\u6307\u5b9a",(0,t.jsx)(n.code,{children:"./modules"}),"\u76ee\u5f55\u4e0b\u7684\uff0c\u6240\u6709 js \u6587\u4ef6"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const modulesFiles = require.context('./modules', true, /\\.js$/)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8f93\u51fa\u4e00\u4e0b\u770b\u770b modulesFiles \u5230\u5e95\u662f\u4ec0\u4e48(console.dir \u8f93\u51fa)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20210912081146031.png",alt:"image-20210912081146031"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\uff0c\u4f46\u8be5\u51fd\u6570\u5305\u542b\u4e09\u4e2a\u5c5e\u6027 resolve()\u3001keys()\u3001id"}),"\n",(0,t.jsxs)(n.p,{children:["\u5176\u4e2d",(0,t.jsx)(n.code,{children:"modulesFiles.keys()"}),"\u5219\u662f\u6307\u5b9a\u76ee\u5f55\u4e0b\u6587\u4ef6\u540d\u6570\u7ec4"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\xa0['./app.js', './permission.js','./settings.js', './tagsView.js', './user.js']\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u63a5\u7740\u770b\u4e0b vue-element-admin \u4e2d\u7684\u4e0b\u4e00\u884c\u4ee3\u7801"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const modules = modulesFiles.keys().reduce((modules, modulePath) => {\n  // set './app.js' => 'app'\n  const moduleName = modulePath.replace(/^\\.\\/(.*)\\.\\w+$/, '$1')\n  const value = modulesFiles(modulePath)\n  modules[moduleName] = value.default\n  return modules\n}, {})\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u8fb9\u5148\u8f93\u51fa\u4e00\u4e0b modules\uff0c\u770b\u4e0b\u7ed3\u679c\u662f\u4ec0\u4e48"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20210912081553729.png",alt:"image-20210912081553729"})}),"\n",(0,t.jsx)(n.p,{children:"\u6ca1\u9519\uff0c\u6b63\u5bf9\u5e94\u7740 modules \u4e0b\u7684\u6240\u6709\u6587\u4ef6\uff0c\u4ee5\u53ca\u6240\u5bfc\u51fa\u7684\u5bf9\u8c61"}),"\n",(0,t.jsxs)(n.p,{children:["\u5176\u4e2d\u5728\u5faa\u73af\u4f53\u4e2d\u8fd8\u8c03\u7528\u4e86",(0,t.jsx)(n.code,{children:"const value = modulesFiles(modulePath)"}),"\uff0c\u5176\u4e2d value \u662f Module \u5bf9\u8c61\uff0c\u6709\u4e2a\u5c5e\u6027",(0,t.jsx)(n.code,{children:"default"}),"\uff0c\u901a\u8fc7",(0,t.jsx)(n.code,{children:"value.default"}),"\u4fbf\u53ef\u83b7\u53d6\u5230\u5bf9\u5e94\u6a21\u5757\u6240\u5bfc\u51fa\u7684\u5185\u5bb9\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5c31\u6b64\u4fbf\u53ef\u4ee5\u5b9e\u73b0\u81ea\u52a8\u5bfc\u5165\u6a21\u5757\u3002\u4e0d\u8fc7\u7531\u4e8e\u5bfc\u51fa\u7684\u662f store \u5bf9\u8c61\uff0c\u6240\u5c01\u88c5\u7684\u4ee3\u7801\u4e5f\u6709\u70b9\u8fc7\u4e8e\u590d\u6742\uff0c\u8fd9\u8fb9\u6211\u8d34\u4e0b\u6211\u662f\u5982\u4f55\u81ea\u52a8\u5bfc\u5165\u6570\u7ec4\u5bf9\u8c61\u7684"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const modulesFiles = require.context('./modules', true, /\\.ts$/)\n\nlet allData: any[] = []\n\nmodulesFiles.keys().forEach((modulePath) => {\n  const value = modulesFiles(modulePath)\n  let data = value.default\n\n  if (!data) return\n  allData.push(...value.default)\n})\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.cnblogs.com/garfieldzhong/p/12585280.html",children:"\u524d\u7aef\u4f18\u5316\u4e4b -- \u4f7f\u7528 require.context \u8ba9\u9879\u76ee\u5b9e\u73b0\u8def\u7531\u81ea\u52a8\u5bfc\u5165 - \u6c90\u6d74\u70b9\u9633\u5149 - \u535a\u5ba2\u56ed (cnblogs.com)"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},9313:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>r});var t=s(5271);const o={},l=t.createContext(o);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);