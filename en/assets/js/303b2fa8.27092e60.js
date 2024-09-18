"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[89],{5576:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=r(2676),d=r(9313);const o={id:"dockerRunRedis",title:"Docker\u90e8\u7f72Redis",authors:"Hare",tags:["docker","redis"]},i="Docker\u90e8\u7f72Redis",c={id:"docker/Docker\u90e8\u7f72\u5fae\u670d\u52a1/dockerRunRedis",title:"Docker\u90e8\u7f72Redis",description:"redis.conf \u914d\u7f6e\u6587\u4ef6\u4e0b\u8f7d\u5730\u5740: \u5b98\u7f51\u5730\u5740",source:"@site/docs/docker/Docker\u90e8\u7f72\u5fae\u670d\u52a1/Docker\u90e8\u7f72Redis.md",sourceDirName:"docker/Docker\u90e8\u7f72\u5fae\u670d\u52a1",slug:"/docker/Docker\u90e8\u7f72\u5fae\u670d\u52a1/dockerRunRedis",permalink:"/en/docs/docker/Docker\u90e8\u7f72\u5fae\u670d\u52a1/dockerRunRedis",draft:!1,unlisted:!1,tags:[{inline:!0,label:"docker",permalink:"/en/docs/tags/docker"},{inline:!0,label:"redis",permalink:"/en/docs/tags/redis"}],version:"current",lastUpdatedAt:1726668067e3,frontMatter:{id:"dockerRunRedis",title:"Docker\u90e8\u7f72Redis",authors:"Hare",tags:["docker","redis"]},sidebar:"ContainersAndMiddleware",previous:{title:"Docker\u90e8\u7f72Nacos",permalink:"/en/docs/docker/Docker\u90e8\u7f72\u5fae\u670d\u52a1/dockerRunNacos"},next:{title:"Redis",permalink:"/en/docs/category/redis"}},t={},a=[{value:"\u521b\u5efa\u6302\u8f7d\u6587\u4ef6",id:"\u521b\u5efa\u6302\u8f7d\u6587\u4ef6",level:2},{value:"\u914d\u7f6e redis.conf \u6587\u4ef6",id:"\u914d\u7f6e-redisconf-\u6587\u4ef6",level:2},{value:"\u542f\u52a8redis",id:"\u542f\u52a8redis",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"docker\u90e8\u7f72redis",children:"Docker\u90e8\u7f72Redis"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"redis.conf \u914d\u7f6e\u6587\u4ef6\u4e0b\u8f7d\u5730\u5740:"})," ",(0,s.jsx)(n.a,{href:"https://redis.io/docs/latest/operate/oss_and_stack/management/config/",children:"\u5b98\u7f51\u5730\u5740"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u521b\u5efa\u6302\u8f7d\u6587\u4ef6",children:"\u521b\u5efa\u6302\u8f7d\u6587\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5bbf\u4e3b\u673a\u4e2d\u521b\u5efa\u4ee5\u4e0b\u4e24\u4e2a\u76ee\u5f55\u6587\u4ef6:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"/usr/local/dockerdata/redis/data"}),"\n",(0,s.jsx)(n.li,{children:"/usr/local/dockerdata/redis/conf"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5c06\u914d\u7f6e\u6587\u4ef6\u4e0b\u8f7d\u5230 conf \u76ee\u5f55\u4e2d"}),"\n",(0,s.jsx)(n.h2,{id:"\u914d\u7f6e-redisconf-\u6587\u4ef6",children:"\u914d\u7f6e redis.conf \u6587\u4ef6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u627e\u5230\u8fd9\u53e5\uff0c\u6ce8\u91ca\u6389\uff01\u56e0\u4e3a\u4f60\u8981\u8fdc\u7a0b\u8fde\u63a5redis\nbind 127.0.0.1\n\n# By default Redis does not run as a daemon. Use 'yes' if you need it.\n# \u9ed8\u8ba4\u60c5\u51b5\u4e0bRedis\u4e0d\u4f5c\u4e3a\u5b88\u62a4\u8fdb\u7a0b\u8fd0\u884c\n# \u6240\u4ee5\u4fee\u6539\u4e3a No\ndaemonize no\n\n# \u5f00\u542f\u6301\u4e45\u5316\nappendonly yes \n\n# When protected mode is on and if:\n#\n# 1) The server is not binding explicitly to a set of addresses using the\n#    \"bind\" directive.\n# 2) No password is configured.\n#\n# The server only accepts connections from clients connecting from the\n# IPv4 and IPv6 loopback addresses 127.0.0.1 and ::1, and from Unix domain\n# sockets.\n\u4fdd\u62a4\u6a21\u5f0f\u8bf4\u660e:\n1. bind 127.0.0.1 \u6ca1\u6709\u6307\u5b9a + \u6ca1\u6709requirepass password\u5bc6\u7801 +  protected-mode yes \u80fd\u8bbf\u95ee\u4f46\u662f\u53ea\u80fd\u672c\u673a\n2. bind 127.0.0.1 \u6307\u5b9a or \u6307\u5b9arequirepass password\u5bc6\u7801 + protected-mode yes \u4fdd\u62a4\u6a21\u5f0f\u5931\u53bb\u4f5c\u7528\uff0c\u9760\u7684\u662f\u4f60\u8bbe\u7f6e\u7684\u5bc6\u7801\u6216\u8005bind \u7ed1\u5b9a\u673a\u5668\nprotected-mode yes\nrequirepass 123456\n\n3. protected-mode no \u53ef\u76f4\u63a5\u8bbf\u95ee\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u542f\u52a8redis",children:"\u542f\u52a8redis"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run --name redis --privileged=true --restart=always -p 6379:6379 -v /usr/local/dockerdata/redis/data:/data -v /usr/local/dockerdata/redis/conf/redis.conf:/etc/redis/redis.conf -d redis:6.0.8 redis-server /etc/redis/redis.conf\n"})})]})}function u(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},9313:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var s=r(5271);const d={},o=s.createContext(d);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);