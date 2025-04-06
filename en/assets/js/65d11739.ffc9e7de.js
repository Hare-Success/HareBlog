"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[8252],{1108:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>t});var s=r(2676),o=r(9313);const i={id:"dockerRunSpringCloud",title:"Docker\u90e8\u7f72\u5fae\u670d\u52a1",authors:"Hare",tags:["docker","springCloud"]},c="Docker\u90e8\u7f72\u5fae\u670d\u52a1(\u5355\u673a\u7248)",d={id:"docker/Docker\u90e8\u7f72\u5fae\u670d\u52a1/dockerRunSpringCloud",title:"Docker\u90e8\u7f72\u5fae\u670d\u52a1",description:"\u4ee5\u7e41\u7410\u7684\u65b9\u5f0f\u5c1d\u8bd5\u90e8\u7f72\u5fae\u670d\u52a1\u9879\u76ee\uff0c\u57fa\u672c\u6b65\u9aa4Hare\u89c9\u5f97\u90fd\u662f\u4e00\u6837\u7684\uff01\u4f1a\u4e00\u4e2a\u5c31\u80fd\u4f1a\u5176\u4ed6~~~",source:"@site/docs/docker/Docker\u90e8\u7f72\u5fae\u670d\u52a1/Docker\u90e8\u7f72\u5fae\u670d\u52a1\u9879\u76ee.md",sourceDirName:"docker/Docker\u90e8\u7f72\u5fae\u670d\u52a1",slug:"/docker/Docker\u90e8\u7f72\u5fae\u670d\u52a1/dockerRunSpringCloud",permalink:"/en/docs/docker/Docker\u90e8\u7f72\u5fae\u670d\u52a1/dockerRunSpringCloud",draft:!1,unlisted:!1,tags:[{inline:!0,label:"docker",permalink:"/en/docs/tags/docker"},{inline:!0,label:"springCloud",permalink:"/en/docs/tags/spring-cloud"}],version:"current",lastUpdatedAt:172700085e4,frontMatter:{id:"dockerRunSpringCloud",title:"Docker\u90e8\u7f72\u5fae\u670d\u52a1",authors:"Hare",tags:["docker","springCloud"]},sidebar:"ContainersAndMiddleware",previous:{title:"Docker\u90e8\u7f72Redis",permalink:"/en/docs/docker/Docker\u90e8\u7f72\u5fae\u670d\u52a1/dockerRunRedis"},next:{title:"DockerCompose\u90e8\u7f72\u5fae\u670d\u52a1",permalink:"/en/docs/docker/Docker\u90e8\u7f72\u5fae\u670d\u52a1/dockerComposeRunSpringCloud"}},l={},t=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u90e8\u7f72\u670d\u52a1",id:"\u90e8\u7f72\u670d\u52a1",level:2},{value:"\u90e8\u7f72\u5fae\u670d\u52a1",id:"\u90e8\u7f72\u5fae\u670d\u52a1",level:3},{value:"FAQ",id:"faq",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"docker\u90e8\u7f72\u5fae\u670d\u52a1\u5355\u673a\u7248",children:"Docker\u90e8\u7f72\u5fae\u670d\u52a1(\u5355\u673a\u7248)"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"\u4ee5\u7e41\u7410\u7684\u65b9\u5f0f\u5c1d\u8bd5\u90e8\u7f72\u5fae\u670d\u52a1\u9879\u76ee\uff0c\u57fa\u672c\u6b65\u9aa4Hare\u89c9\u5f97\u90fd\u662f\u4e00\u6837\u7684\uff01\u4f1a\u4e00\u4e2a\u5c31\u80fd\u4f1a\u5176\u4ed6~~~\n\u672c\u6b21\u90e8\u7f72\u4e3b\u8981\u9488\u5bf9\u4e09\u4e2a\u670d\u52a1\u5176\u4e2d\u5305\u62ec\u4f7f\u7528\u4e86Nacos,Redis,OpenFegin\u670d\u52a1\u95f4\u8c03\u7528\uff01"})}),"\n",(0,s.jsx)(n.h2,{id:"\u73af\u5883\u51c6\u5907",children:"\u73af\u5883\u51c6\u5907"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e00\u4e2a\u5fae\u670d\u52a1\u9879\u76ee \u4e09\u4e2a\u670d\u52a1 A,B,C(B,C\u5b58\u5728fegin\u8c03\u7528)"}),"\n",(0,s.jsx)(n.li,{children:"Nacos1.4.6"}),"\n",(0,s.jsx)(n.li,{children:"Redis6.0.8"}),"\n",(0,s.jsx)(n.li,{children:"Mysql8.0.27"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"\u5bb9\u5668\u542f\u52a8\u987a\u5e8f",type:"warning",children:(0,s.jsx)(n.p,{children:"\u542f\u52a8\u524d\uff0c\u8003\u8651\u4e0b\u6bcf\u4e2a\u5bb9\u5668\u7684\u542f\u52a8\u987a\u5e8f\uff01\nMysql->Nacos/Redis->A,B,C\u670d\u52a1\uff0c\u670d\u52a1\u6392\u5728\u6700\u540e\uff01"})}),"\n",(0,s.jsx)(n.h2,{id:"\u90e8\u7f72\u670d\u52a1",children:"\u90e8\u7f72\u670d\u52a1"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/docker/Docker%E5%AE%B9%E5%99%A8/Docker%E6%95%B0%E6%8D%AE%E5%8D%B7/dockerMysql",children:"\u90e8\u7f72Mysql"}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.a,{href:"/en/docs/docker/Docker%E9%83%A8%E7%BD%B2%E5%BE%AE%E6%9C%8D%E5%8A%A1/dockerRunRedis",children:"\u90e8\u7f72Redis"}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.a,{href:"/en/docs/docker/Docker%E9%83%A8%E7%BD%B2%E5%BE%AE%E6%9C%8D%E5%8A%A1/dockerRunNacos",children:"\u90e8\u7f72Nacos"})]}),"\n",(0,s.jsx)(n.h3,{id:"\u90e8\u7f72\u5fae\u670d\u52a1",children:"\u90e8\u7f72\u5fae\u670d\u52a1"}),"\n",(0,s.jsxs)(n.admonition,{title:"\u603b\u4f53\u601d\u8def",type:"note",children:[(0,s.jsxs)(n.p,{children:["\u672c\u5730\u6253\u597dJar\u5305\uff0c\u4e0a\u4f20\u670d\u52a1\u5668\u81ea\u521b\u5efa\u7684\u4e00\u4e2a\u76ee\u5f55\u91cc\uff0c\u5728\u8be5\u76ee\u5f55\u91cc\u540c\u65f6\u521b\u5efaDockerfile\u6587\u4ef6\u3002\u7136\u540edocker build \u6784\u5efaimages\uff0c\u6700\u540edocker run \u542f\u52a8~~~",(0,s.jsx)("br",{})]}),(0,s.jsx)(n.p,{children:"\u53ea\u62ff\u4e00\u4e2a\u670d\u52a1\u8bf4\u4e8b\uff0c\u5176\u4f59\u4fe9\u90fd\u662f\u7167\u732b\u753b\u864e cv\u7684\u4e8b\u3002"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u521b\u5efajar&Dockerfile\u5b58\u653e\u76ee\u5f55: /usr/local/myBroad"}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"title='\u6784\u5efa\u670d\u52a1\u955c\u50cf'",children:"docker build -t broad:1.1 .\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"title='\u542f\u52a8\u5bb9\u5668'",children:"docker images\ndocker run --name broadA -p 7780:7780 -d broad:1.1\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"title='\u67e5\u770b\u65e5\u5fd7'",children:"docker ps\ndocker logs \u5bb9\u5668ID \n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e0a\u8ff0\u542f\u52a8\u670d\u52a1\u65f6\uff0cHare\u662f\u6ca1\u6709\u7ed9\u670d\u52a1\u65e5\u5fd7\u6302\u8f7d\u6570\u636e\u5377\uff0c\u5927\u4f6c\u4eec\u5982\u6709\u9700\u8981 \u81ea\u884c\u521b\u5efa\u6302\u8f7d\u76ee\u5f55\u6302\u8f7d\u3002"}),"\n",(0,s.jsx)(n.li,{children:"fegin\u8c03\u7528\u914d\u7f6e\u7684url\u7684ip\u5730\u5740\uff0c\u5f97\u662f\u63d0\u4f9b\u8005\u670d\u52a1\u7684ip\u4e5f\u5c31\u662f\u5bb9\u5668\u7684\u5185\u7f51ip\uff08172\u5f00\u5934\u7684\uff09\u3002"}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u672c\u5730nacos\u914d\u7f6e\u7684\u5730\u5740\u5199\u7684\u662f\u5bb9\u5668\u5185\u7f51ip\uff08172\u5f00\u5934\uff09\uff0c\u542f\u52a8\u670d\u52a1\u540e\u90a3Nacos\u6ce8\u518c\u7684\u5730\u5740\u662f\u5bb9\u5668\u5185\u7f51IP\uff08172\u5f00\u5934\uff09"}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"Docker\u4e2d\u7f51\u7edc\u90e8\u5206\u9ed8\u8ba4\u4f7f\u7528\u7684\u5c31\u662fbridge\u6a21\u5f0f\uff0c\u4e5f\u5c31\u662f\u6bcf\u4e2a\u5bb9\u5668\u90fd\u6709\u4e00\u4e2a\u5c5e\u4e8e\u81ea\u5df1\u7684IP\u3002\u5373\u6ce8\u518c\u5230nacos\u7684\u5730\u5740\u5c31\u662f\u6bcf\u4e2a\u670d\u52a1\u81ea\u5df1\u7684\u5185\u7f51ip\n\u5355\u673a\u60c5\u51b5\u4e0b\uff0c\u53ea\u8981\u662f\u4f7f\u7528\u7684\u5c31\u662f\u9ed8\u8ba4\u7684bridge\u7f51\u7edc\u6a21\u5f0f~~\u5bb9\u5668\u4e4b\u95f4\u662f\u76f8\u901a\u7684\u3002"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"title='\u67e5\u770b\u5bb9\u5668IP'",children:"docker ps\ndocker inspect \u5bb9\u5668ID\n"})})]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u672c\u5730nacos\u914d\u7f6e\u7684\u5730\u5740\u5199\u7684\u662f\u5bbf\u4e3b\u673a\u7684\u5185\u7f51ip"}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["\u8fd9\u4e2a\u80fd\u884c\u5417\uff1f\u7b54\u6848\u662f\u80fd\u884c~\u4f46\u662f\u6709\u4e00\u70b9\u9700\u8981\u975e\u5e38\u6ce8\u610f",(0,s.jsx)("br",{}),"\n\u7f51\u7edc\u6a21\u5f0f \u8981\u6362\u6210 Host\u6a21\u5f0f\uff0c\u6240\u6709\u5bb9\u5668\u90fd\u8981\u5728\u542f\u52a8\u7684\u65f6\u5019\u6362\u6210host\u6a21\u5f0f\u3002"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run --name myname --network host\n"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u6ce8\u610f\u4e86\uff0c\u4f7f\u7528Host\u6a21\u5f0f\u65f6 -p 8080:8080 \u7aef\u53e3\u6620\u5c04\u5c31\u6ca1\u5fc5\u8981\u4e86"})})]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"bridge\u6a21\u5f0f\u4e2d\uff0c\u5bb9\u5668IP\u662f\u4f1a\u6539\u53d8\u7684\u95ee\u9898\uff01\uff01\uff01"}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["docker\u63d0\u4f9b\u4e86\u53e6\u4e00\u79cd\u65b9\u5f0f\uff0c\u4f7f\u7528 ",(0,s.jsxs)(n.strong,{children:["\u5bb9\u5668\u670d\u52a1\u540d",":port"]}),"\u65b9\u5f0f\u3002",(0,s.jsx)("br",{}),"\n\u8fd9\u79cd\u65b9\u5f0f\u6a21\u5f0f\u9700\u8981\u81ea\u5df1\u521b\u5efa\u4e00\u4e2a\u7f51\u7edc\uff0c\u9ed8\u8ba4\u8fd8\u662fbridge~\u4f46\u81ea\u5df1\u521b\u5efa\u7684\u5c31\u662f\u53ef\u4ee5",(0,s.jsxs)(n.strong,{children:["\u5bb9\u5668\u670d\u52a1\u540d",":port"]}),"\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f",(0,s.jsx)("br",{}),"\n\u8fd9\u6837\u5c31\u89e3\u51b3\uff0c\u5bb9\u5668ip\u4f1a\u53d8\u52a8\u95ee\u9898"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"title='\u521b\u5efa\u81ea\u5df1\u7684\u7f51\u7edc'",children:"docker network create myNet\ndocker network ls #\u67e5\u770b\n\n#\u542f\u52a8\u65f6\u6307\u5b9a\u7f51\u7edc\ndocker run --name myname --network myNet\n"})}),(0,s.jsxs)(n.p,{children:["\u8fd9\u6837\u5728\u670d\u52a1\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u5373\u53ef\u4f7f\u7528 ",(0,s.jsxs)(n.strong,{children:["\u5bb9\u5668\u540d",":port"]}),"\u7684\u65b9\u5f0f\u3002"]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},9313:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>c});var s=r(5271);const o={},i=s.createContext(o);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);