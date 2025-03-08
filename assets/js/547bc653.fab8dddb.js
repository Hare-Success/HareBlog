"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[2812],{8101:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>s});var o=n(2676),t=n(9313);const c={id:"dockerVolum",title:"Docker\u5bb9\u5668\u5377",authors:"Hare",tags:["docker"]},i="Docker\u5bb9\u5668\u5377",d={id:"docker/Docker\u5bb9\u5668/Docker\u6570\u636e\u5377/dockerVolum",title:"Docker\u5bb9\u5668\u5377",description:"\u5f00\u59cb\u524d\u5148\u8bf4\u4e00\u4e2a\u70b9: \u6302\u8f7d\u5bb9\u5668\u5377\u65f6\u5728\u6302\u5728\u547d\u4ee4\u540e\u52a0\u4e0a --privileged=true",source:"@site/docs/docker/Docker\u5bb9\u5668/Docker\u6570\u636e\u5377/Docker\u6570\u636e\u5377.md",sourceDirName:"docker/Docker\u5bb9\u5668/Docker\u6570\u636e\u5377",slug:"/docker/Docker\u5bb9\u5668/Docker\u6570\u636e\u5377/",permalink:"/docs/docker/Docker\u5bb9\u5668/Docker\u6570\u636e\u5377/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"docker",permalink:"/docs/tags/docker"}],version:"current",lastUpdatedAt:174142439e4,frontMatter:{id:"dockerVolum",title:"Docker\u5bb9\u5668\u5377",authors:"Hare",tags:["docker"]},sidebar:"ContainersAndMiddleware",previous:{title:"Docker\u62f7\u8d1d\u6587\u4ef6&\u5bfc\u51fa\u5bfc\u5165\u5bb9\u5668",permalink:"/docs/docker/Docker\u5bb9\u5668/dockerCopyAndExport"},next:{title:"Docker\u90e8\u7f72Mysql\u6302\u8f7d",permalink:"/docs/docker/Docker\u5bb9\u5668/Docker\u6570\u636e\u5377/dockerMysql"}},l={},s=[{value:"\u6570\u636e\u5377\u662f\u505a\u4ec0\u4e48\u7684",id:"\u6570\u636e\u5377\u662f\u505a\u4ec0\u4e48\u7684",level:2},{value:"\u6570\u636e\u6e90\u7b80\u5355\u4f7f\u7528",id:"\u6570\u636e\u6e90\u7b80\u5355\u4f7f\u7528",level:2},{value:"\u6570\u636e\u5377\u7ee7\u627f",id:"\u6570\u636e\u5377\u7ee7\u627f",level:2}];function a(e){const r={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"docker\u5bb9\u5668\u5377",children:"Docker\u5bb9\u5668\u5377"}),"\n",(0,o.jsx)(r.admonition,{title:"\u6ce8\u610f\u5566\uff01\uff01",type:"tip",children:(0,o.jsx)(r.p,{children:"\u5f00\u59cb\u524d\u5148\u8bf4\u4e00\u4e2a\u70b9: \u6302\u8f7d\u5bb9\u5668\u5377\u65f6\u5728\u6302\u5728\u547d\u4ee4\u540e\u52a0\u4e0a --privileged=true\n\u4e3b\u8981\u89e3\u51b3\u6743\u9650\u95ee\u9898\uff0c\u5373\u4f7f\u4e0d\u52a0\u6216\u8bb8\u4e5f\u6ca1\u95ee\u9898\uff0c\u4f46\u52a0\u4e0a\u66f4\u6ca1\u95ee\u9898\uff01"})}),"\n",(0,o.jsx)(r.h2,{id:"\u6570\u636e\u5377\u662f\u505a\u4ec0\u4e48\u7684",children:"\u6570\u636e\u5377\u662f\u505a\u4ec0\u4e48\u7684"}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"\u4e24\u4e2a\u5b57\u3010\u5907\u4efd\u3011\uff01\u5c06\u5bb9\u5668\u5185\u91cd\u8981\u6570\u636e\u6302\u8f7d\u5230\u5bbf\u4e3b\u673a\u7684\u76ee\u5f55\u4e2d\u3002\u5373\u4f7f\u5bb9\u5668 Game Over\u4f46\u4e00\u4e9b\u91cd\u8981\u7684\u6570\u636e\u5907\u4efd\u5728\u4e86\u5bbf\u4e3b\u673a\u7684\u4e0a\u3002"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"\u6ce8\u610f\u4e86\u6570\u636e\u5377 13\u7684\u662f\uff0c\u5bbf\u4e3b\u673a\u5199\u5bb9\u5668\u80fd\u8bfb\u5230\uff0c\u5bb9\u5668\u5199\u5bbf\u4e3b\u673a\u80fd\u8bfb\u5230\uff0c\u5373\u4f7fstop\u5bb9\u5668\u3002\u5728\u5bbf\u4e3b\u673a\u5199\u7136\u540estart\u5bb9\u5668\u3002\u5bb9\u5668\u80fd\u8bfb\u5230\uff01"})}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"\u6570\u636e\u6e90\u7b80\u5355\u4f7f\u7528",children:"\u6570\u636e\u6e90\u7b80\u5355\u4f7f\u7528"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",metastring:"title='\u6848\u5217ubuntu\u76f8\u5173\u547d\u4ee4'",children:"docker run -it --privileged=true -v (\u5bbf\u4e3b\u673a\u76ee\u5f55) /tmp/docker_data:(\u5bb9\u5668\u5185\u90e8\u76ee\u5f55)/tmp/docker_data --name=myub ubuntu bash\n"})}),"\n",(0,o.jsxs)(r.admonition,{title:"\u6ce8\u610f\u5566",type:"tip",children:[(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"\u5bbf\u4e3b\u673a\u76ee\u5f55\u548c\u5bb9\u5668\u76ee\u5f55\uff0c\u5982\u679c\u539f\u5148\u6ca1\u6709docker\u4f1a\u81ea\u52a8\u521b\u5efa\uff01"}),"\n",(0,o.jsxs)(r.li,{children:["\u4ee5\u4e0a\u6570\u636e\u5377\u6302\u8f7d\u9ed8\u8ba4\u65b9\u5f0frw\u65b9\u5f0f\uff08\u5bbf\u4e3b\u673aand\u5bb9\u5668\u90fd\u80fd\u8bfb\u5199\uff09\u5b8c\u6574\u547d\u4ee4\u5728\u5bb9\u5668\u76ee\u5f55\u540e\u52a0",":rw"]}),"\n"]}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",metastring:"title='\u5b8c\u6574\u547d\u4ee4'",children:"docker run -it --privileged=true -v (\u5bbf\u4e3b\u673a\u76ee\u5f55) /tmp/docker_data:(\u5bb9\u5668\u5185\u90e8\u76ee\u5f55)/tmp/docker_data:rw --name=myub ubuntu bash\n"})}),(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.strong,{children:"\u82e5\u53ea\u60f3\u5bb9\u5668\u53ea\u8bfb\u4e0d\u5199\uff0c\u5c06rw\u6362\u4e3aro\uff08read only\uff09\u5373\u53ef"})}),"\n"]})]}),"\n",(0,o.jsx)(r.h2,{id:"\u6570\u636e\u5377\u7ee7\u627f",children:"\u6570\u636e\u5377\u7ee7\u627f"}),"\n",(0,o.jsx)(r.p,{children:"\u7c7b\u4f3cJava\u7ee7\u627f\u7c7b\uff0c\u800c\u6570\u636e\u5377\u7ee7\u627f\u8bf7\u770b\u4ee5\u4e0b\u547d\u4ee4:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"# \u4f7f\u7528 --volumes- from \u7236\u5bb9\u5668\ndocker run -it --privileged=true --volumes- from u1 --name u2 ubuntu \n"})}),"\n",(0,o.jsx)(r.p,{children:"\u7ee7\u627f\u6240\u4ea7\u751f\u7684\u6548\u679c\u5982\u4e0b:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"\u5bbf\u4e3b\u673a\u5199\u4fe9\u5bb9\u5668\u90fd\u80fd\u8bfb\u5230\u3002"}),"\n",(0,o.jsx)(r.li,{children:"\u4e00\u4e2a\u5bb9\u5668u1\u5199\uff0c\u5bbf\u4e3b\u673a\u548cu2\u5bb9\u5668\u80fd\u8bfb\u3002\u53cd\u4e4bu2\u5bb9\u5668\u5199\u540c\u6837\u6548\u679c\u3002"}),"\n",(0,o.jsx)(r.li,{children:"\u4e00\u4e2a\u5bb9\u5668\u6302\uff0c\u4e0d\u6328\u7740\u53e6\u4e00\u4e2a\u5bb9\u5668\u5565\u4e8b\uff0c\u53e6\u4e00\u4e2a\u8be5\u5403\u5403\u8be5\u559d\u559d\u3002"}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},9313:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>i});var o=n(5271);const t={},c=o.createContext(t);function i(e){const r=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(c.Provider,{value:r},e.children)}}}]);