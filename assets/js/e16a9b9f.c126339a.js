"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[586],{905:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var s=n(2676),c=n(9313);const o={id:"dockerImages",title:"Docker\u955c\u50cf",authors:"Hare",tags:["docker"]},i="Docker\u955c\u50cf\u76f8\u5173\u5b66\u4e60",d={id:"docker/dockerImages",title:"Docker\u955c\u50cf",description:"\u955c\u50cf\u662f\u4ec0\u4e48?",source:"@site/docs/docker/Docker\u955c\u50cf.md",sourceDirName:"docker",slug:"/docker/dockerImages",permalink:"/docs/docker/dockerImages",draft:!1,unlisted:!1,tags:[{inline:!0,label:"docker",permalink:"/docs/tags/docker"}],version:"current",frontMatter:{id:"dockerImages",title:"Docker\u955c\u50cf",authors:"Hare",tags:["docker"]},sidebar:"ContainersAndMiddleware",previous:{title:"Docker\u5b89\u88c5",permalink:"/docs/docker/dockerInstall"},next:{title:"Docker\u5bb9\u5668\u547d\u4ee4",permalink:"/docs/docker/Docker\u5bb9\u5668/dockerRun"}},t={},a=[{value:"<strong>\u955c\u50cf\u662f\u4ec0\u4e48?</strong>",id:"\u955c\u50cf\u662f\u4ec0\u4e48",level:2},{value:"\u955c\u50cf\u547d\u4ee4",id:"\u955c\u50cf\u547d\u4ee4",level:2},{value:"<code>docker images</code>",id:"dockerImages",level:3},{value:"<code>docker search</code>",id:"search",level:3},{value:"<code>docker rmi</code>",id:"rmiImages",level:3},{value:"<code>docker pull</code>",id:"imagesPull",level:3}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"docker\u955c\u50cf\u76f8\u5173\u5b66\u4e60",children:(0,s.jsx)(r.strong,{children:"Docker\u955c\u50cf\u76f8\u5173\u5b66\u4e60"})}),"\n",(0,s.jsx)(r.h2,{id:"\u955c\u50cf\u662f\u4ec0\u4e48",children:(0,s.jsx)(r.strong,{children:"\u955c\u50cf\u662f\u4ec0\u4e48?"})}),"\n",(0,s.jsxs)(r.p,{children:["\u5148\u6765\u770b\u770b ",(0,s.jsx)(r.strong,{children:"\u505c\u6b62\u4e2d\u56fd\u670d\u52a1\u7684docker"})," \u600e\u4e48\u8bf4\u7684: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsx)(r.p,{children:"An image is a read-only template with instructions for creating a Docker container. Often, an image is based on another image, with some additional customization. For example, you may build an image which is based on the ubuntu image, but installs the Apache web server and your application, as well as the configuration details needed to make your application run."})}),"\n",(0,s.jsx)(r.p,{children:"\u5df4\u5566\u5566\u4e00\u5927\u5806\uff0c\u4e2a\u4eba\u7406\u89e3\u4ec0\u4e48\u610f\u601d\u5462:"}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.p,{children:['\u955c\u50cf\u5c31\u662f "java\u7c7b"\uff0c\u4f60\u5728\u7c7b\u91cc\u9762\u53ef\u4ee5\u5b9a\u4e49\u65b9\u6cd5\u3001\u5c5e\u6027\u3002\u540c\u6837\u4f60\u53ef\u4ee5\u5728pull\u4e0b\u6765\u7684\u955c\u50cf\u4e2d\u5b89\u88c5\u4f60\u6240\u9700\u8981\u7684\u4e1c\u897f\u3002\njava\u7c7b\u53ef\u4ee5 new \u5bf9\u8c61\u3002docker images \u5c31\u53ef\u4ee5\u751f\u6210\u4e00\u4e2a\u5bb9\u5668\uff01\ud83d\udca8',(0,s.jsx)(r.a,{href:"/docs/docker/dockerBottom",children:"\u5bb9\u5668\u76f8\u5173\u94fe\u63a5"})]})}),"\n",(0,s.jsx)(r.h2,{id:"\u955c\u50cf\u547d\u4ee4",children:"\u955c\u50cf\u547d\u4ee4"}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u67e5\u8be2\u955c\u50cf\u5217\u8868\u8868\u5934\u542b\u4e49\u4ecb\u7ecd:"})," ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"REPOSITORY:"})," \u955c\u50cf\u540d\u79f0 ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"TAG:"})," \u7248\u672c\u53f7 ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"IMAGES ID:"})," \u955c\u50cfID ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"CREATED:"})," \u521b\u5efa\u65f6\u95f4 ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"SIZE:"})," \u955c\u50cf\u5927\u5c0f"]}),"\n"]})}),"\n",(0,s.jsx)(r.h3,{id:"dockerImages",children:(0,s.jsx)(r.code,{children:"docker images"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",metastring:"title='\u67e5\u8be2\u672c\u5730\u955c\u50cf\u5217\u8868'",children:"docker images\ndocker images -q # \u53ea\u663e\u793a\u955c\u50cfID\n"})}),"\n",(0,s.jsx)(r.h3,{id:"search",children:(0,s.jsx)(r.code,{children:"docker search"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",metastring:"title='\u641c\u7d22\u955c\u50cf'",children:"docker search redis\ndocker search redis:8 # \u6307\u5b9a\u7248\u672c\u53f7\ndocker search redis --limit 2 # \u9650\u5236\u67e5\u8be2\u6761\u6570\n"})}),"\n",(0,s.jsx)(r.h3,{id:"rmiImages",children:(0,s.jsx)(r.code,{children:"docker rmi"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",metastring:"title='\u5220\u9664\u955c\u50cf'",children:"docker rmi \u955c\u50cf\u540d\u79f0 # \u6839\u636e\u540d\u79f0\u5220\u9664\ndocker rmi \u955c\u50cfID # \u6839\u636e\u955c\u50cfID\n\ud83d\udeab docker rmi -f $(docker images -qa) # \u5220\u9664\u5168\u90e8\u955c\u50cf\n"})}),"\n",(0,s.jsx)(r.h3,{id:"imagesPull",children:(0,s.jsx)(r.code,{children:"docker pull"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",metastring:"title='\u62c9\u53d6\u955c\u50cf'",children:"docker pull \u955c\u50cf\u540d\u79f0 # \u9ed8\u8ba4\u4e0d\u6307\u5b9a\u7248\u672c\u53f7\uff0c\u62c9\u53d6\u6700\u65b0\u7684\ndocker pull \u955c\u50cf\u540d\u79f0:\u7248\u672c\u53f7\n"})})]})}function h(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},9313:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>i});var s=n(5271);const c={},o=s.createContext(c);function i(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);