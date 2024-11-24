"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[1979],{3893:(e,r,c)=>{c.r(r),c.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>n,metadata:()=>s,toc:()=>t});var o=c(2676),d=c(9313);const n={id:"dockerRun",title:"Docker\u5bb9\u5668\u547d\u4ee4",authors:"Hare",tags:["docker"]},l="Docker\u542f\u52a8\u5bb9\u5668",s={id:"docker/Docker\u5bb9\u5668/dockerRun",title:"Docker\u5bb9\u5668\u547d\u4ee4",description:"Docker\u542f\u52a8\u547d\u4ee4",source:"@site/docs/docker/Docker\u5bb9\u5668/Docker\u5bb9\u5668\u547d\u4ee4.md",sourceDirName:"docker/Docker\u5bb9\u5668",slug:"/docker/Docker\u5bb9\u5668/dockerRun",permalink:"/docs/docker/Docker\u5bb9\u5668/dockerRun",draft:!1,unlisted:!1,tags:[{inline:!0,label:"docker",permalink:"/docs/tags/docker"}],version:"current",lastUpdatedAt:1732440602e3,frontMatter:{id:"dockerRun",title:"Docker\u5bb9\u5668\u547d\u4ee4",authors:"Hare",tags:["docker"]},sidebar:"ContainersAndMiddleware",previous:{title:"Docker\u7f51\u7edc",permalink:"/docs/docker/dockerNetwork"},next:{title:"Docker\u540e\u53f0\u542f\u52a8\u5bb9\u5668",permalink:"/docs/docker/Docker\u5bb9\u5668/dockerBackRun"}},i={},t=[{value:"Docker\u542f\u52a8\u547d\u4ee4",id:"dockerRuns",level:2},{value:"<code>docker run</code>",id:"docker-run",level:3},{value:"Docker\u5bb9\u5668\u9000\u51fa\u547d\u4ee4",id:"exitDocker",level:2},{value:"<code>exit</code>",id:"exit",level:3},{value:"<code>ctrl+p+q</code>",id:"ctrlpq",level:3},{value:"Docker\u67e5\u770b\u8fd0\u884c\u5bb9\u5668\u547d\u4ee4",id:"psDocker",level:2},{value:"<code>docker ps</code>",id:"docker-ps",level:3},{value:"\u542f\u52a8\u5df2\u505c\u6b62\u5bb9\u5668",id:"runStopDocker",level:2},{value:"<code>docker start</code>",id:"docker-start",level:3},{value:"\u91cd\u542f\u5bb9\u5668",id:"restartDocker",level:2},{value:"<code>docker restart</code>",id:"docker-restart",level:3},{value:"\u505c\u6b62\u5bb9\u5668",id:"killStopDocker",level:2},{value:"<code>docker stop</code>",id:"docker-stop",level:3},{value:"\u5220\u9664\u505c\u6b62\u7684\u5bb9\u5668",id:"removeDocker",level:2},{value:"<code>docker rm</code>",id:"docker-rm",level:3},{value:"\u5f3a\u5236\u5220\u9664\u8fd0\u884c\u5bb9\u5668",id:"removeKillDocker",level:2},{value:"<code>docker rm -f</code>",id:"docker-rm--f",level:3},{value:"\u63d0\u4ea4\u65b0\u7684\u955c\u50cf",id:"newImagesDocker",level:2},{value:"<code>docker commit</code>",id:"docker-commit",level:3}];function a(e){const r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,d.a)(),...e.components},{Details:c}=r;return c||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"docker\u542f\u52a8\u5bb9\u5668",children:"Docker\u542f\u52a8\u5bb9\u5668"}),"\n",(0,o.jsx)(r.h2,{id:"dockerRuns",children:"Docker\u542f\u52a8\u547d\u4ee4"}),"\n",(0,o.jsx)(r.h3,{id:"docker-run",children:(0,o.jsx)(r.code,{children:"docker run"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",metastring:"title='\u4ea4\u4e92\u5f0f\u542f\u52a8\u547d\u4ee4'",children:"# \u5728\u9700\u8981docker\u4ea4\u4e92\u5f0f\u542f\u52a8\u5bb9\u5668\u65f6: \u8981\u52a0 -it \u540c\u65f6\u540e\u9762\u8ddf\u4e00\u4e2a\u4ea4\u4e92shell->bash\n# bash\u53ef\u4ee5\u4e3a /bin/bash  \u4e5f\u53ef\u4ee5\u4e0d\u5199docker\u4f1a\u81ea\u52a8\u52a0\ndocker run -it --name=\u81ea\u5b9a\u4e49\u5bb9\u5668\u540d\u79f0 \u955c\u50cf\u540d\u79f0 bash\n"})}),"\n",(0,o.jsxs)(c,{children:[(0,o.jsx)("summary",{children:"\u4ec0\u4e48\u662f\u4ea4\u4e92\u5f0f\u542f\u52a8"}),(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"\xa0\xa0\xa0\xa0\u89c1\u540d\u77e5\u4e49\uff0c\u6211\u4eec\u9700\u8981\u4e0e\u8fd9\u4e2a\u5bb9\u5668\u8fdb\u884c\u201c\u4e92\u52a8\u201d\u3002\u6bd4\u5982\u8bf4:\u6211\u4eec\u5728\u865a\u62df\u673a\u88c5\u4e86Linux\u7cfb\u7edf\uff0c\u90a3\u4e48\u6211\u4eec\u5f97\u9700\u8981\u64cd\u4f5c\u8fd9\u4e2a\u7cfb\u7edf\u5427\uff01\n\u6240\u4ee5\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u7ec8\u7aef\uff08shell\u7ec8\u7aef\uff09\u3002\u5728\u6bd4\u5982\u6211\u4eec\u5728windows\u4e2dcmd\u7ec8\u7aef\u8fdb\u884c\u547d\u4ee4\u4ea4\u4e92\u3002\n\u4e5f\u5c31\u662f\u8bf4\u5f53\u6211\u4eec\u542f\u52a8\u4e86\u4e00\u4e2acentos\u5bb9\u5668\uff0c\u6211\u4eec\u9700\u8981\u4ea4\u4e92\u5f0f\u542f\u52a8\u56e0\u4e3a\u8981\u548c\u8fd9\u4e2acentos\u5bb9\u5668\u8fdb\u884c\u7ec8\u7aef\u4ea4\u4e92\u3002"}),"\n"]})]}),"\n",(0,o.jsx)(r.h2,{id:"exitDocker",children:"Docker\u5bb9\u5668\u9000\u51fa\u547d\u4ee4"}),"\n",(0,o.jsx)(r.h3,{id:"exit",children:(0,o.jsx)(r.code,{children:"exit"})}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"\u9000\u51fa\u540e\uff0c\u5bb9\u5668\u505c\u6b62\u76f4\u63a5\u6302\u6389"}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"ctrlpq",children:(0,o.jsx)(r.code,{children:"ctrl+p+q"})}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"\u9000\u51fa\u540e\uff0c\u5bb9\u5668\u4e0d\u4f1a\u505c\u6b62\u4f9d\u7136\u575a\u633a"}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"psDocker",children:"Docker\u67e5\u770b\u8fd0\u884c\u5bb9\u5668\u547d\u4ee4"}),"\n",(0,o.jsx)(r.h3,{id:"docker-ps",children:(0,o.jsx)(r.code,{children:"docker ps"})}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["\u67e5\u8be2\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\uff0c",(0,o.jsx)(r.strong,{children:"\u82e5\u60f3\u67e5\u8be2\u5305\u542b\u505c\u6b62\u7684\u5bb9\u5668\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4:"})]}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"docker ps -a\ndocker ps -n 2 # \u63a7\u5236\u6761\u6570\n"})}),"\n",(0,o.jsx)(r.h2,{id:"runStopDocker",children:"\u542f\u52a8\u5df2\u505c\u6b62\u5bb9\u5668"}),"\n",(0,o.jsx)(r.h3,{id:"docker-start",children:(0,o.jsx)(r.code,{children:"docker start"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"docker start \u5bb9\u5668ID/\u540d\u79f0\n"})}),"\n",(0,o.jsx)(r.h2,{id:"restartDocker",children:"\u91cd\u542f\u5bb9\u5668"}),"\n",(0,o.jsx)(r.h3,{id:"docker-restart",children:(0,o.jsx)(r.code,{children:"docker restart"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"docker restart \u5bb9\u5668ID/\u540d\u79f0\n"})}),"\n",(0,o.jsx)(r.h2,{id:"killStopDocker",children:"\u505c\u6b62\u5bb9\u5668"}),"\n",(0,o.jsx)(r.h3,{id:"docker-stop",children:(0,o.jsx)(r.code,{children:"docker stop"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"docker stop \u5bb9\u5668ID/\u540d\u79f0\n# \u5f3a\u5236\u505c\u6b62\ndocker kill \u5bb9\u5668ID/\u540d\u79f0\n"})}),"\n",(0,o.jsx)(r.h2,{id:"removeDocker",children:"\u5220\u9664\u505c\u6b62\u7684\u5bb9\u5668"}),"\n",(0,o.jsx)(r.h3,{id:"docker-rm",children:(0,o.jsx)(r.code,{children:"docker rm"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"docker rm \u5bb9\u5668ID/\u540d\u79f0\n"})}),"\n",(0,o.jsx)(r.h2,{id:"removeKillDocker",children:"\u5f3a\u5236\u5220\u9664\u8fd0\u884c\u5bb9\u5668"}),"\n",(0,o.jsx)(r.h3,{id:"docker-rm--f",children:(0,o.jsx)(r.code,{children:"docker rm -f"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"docker rm -f \u5bb9\u5668ID/\u540d\u79f0\n"})}),"\n",(0,o.jsx)(r.h2,{id:"newImagesDocker",children:"\u63d0\u4ea4\u65b0\u7684\u955c\u50cf"}),"\n",(0,o.jsx)(r.h3,{id:"docker-commit",children:(0,o.jsx)(r.code,{children:"docker commit"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:'docker commit -m="\u63d0\u4ea4\u4fe1\u606f" -a="\u4f5c\u8005" \u5bb9\u5668ID \u955c\u50cf\u540d\u79f0:tag\n'})})]})}function k(e={}){const{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},9313:(e,r,c)=>{c.d(r,{Z:()=>s,a:()=>l});var o=c(5271);const d={},n=o.createContext(d);function l(e){const r=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);