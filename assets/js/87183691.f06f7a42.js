"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[6565],{4446:(e,c,r)=>{r.r(c),r.d(c,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>i});var s=r(2676),n=r(9313);const t={id:"dockerInstall",title:"Docker\u5b89\u88c5",authors:"Hare",tags:["docker"]},d="\u5b89\u88c5Docker",l={id:"docker/dockerInstall",title:"Docker\u5b89\u88c5",description:"\u5b98\u7f51\u5730\u5740",source:"@site/docs/docker/Docker\u5b89\u88c5.mdx",sourceDirName:"docker",slug:"/docker/dockerInstall",permalink:"/docs/docker/dockerInstall",draft:!1,unlisted:!1,tags:[{inline:!0,label:"docker",permalink:"/docs/tags/docker"}],version:"current",lastUpdatedAt:172285592e4,frontMatter:{id:"dockerInstall",title:"Docker\u5b89\u88c5",authors:"Hare",tags:["docker"]},sidebar:"ContainersAndMiddleware",previous:{title:"\u8ba4\u8bc6Docker",permalink:"/docs/docker/dockerBottom"},next:{title:"Docker\u955c\u50cf",permalink:"/docs/docker/dockerImages"}},o={},i=[{value:"\u786e\u5b9aCentos\u7248\u672c",id:"versionCentos",level:2},{value:"\u5378\u8f7d\u65e7\u7248\u672c",id:"removeDocker",level:2},{value:"\u5b89\u88c5Yum\u7684gcc",id:"installGcc",level:2},{value:"\u5b89\u88c5Docker\u8f6f\u4ef6\u5305",id:"installJar",level:2},{value:"<code>yum-utils</code>",id:"yumUtils",level:3},{value:"<code>yum-config-manager</code>",id:"yumManager",level:3},{value:"\u66f4\u65b0Yum\u8f6f\u4ef6\u5305\u7d22\u5f15",id:"updateYum",level:2},{value:"\u5b89\u88c5Docker\u5f15\u64ce",id:"dockerCli",level:2},{value:"\u5b89\u88c5\u5b8c\u6210\u542f\u52a8Docker",id:"installResult",level:2},{value:"\u955c\u50cf\u52a0\u901f\u914d\u7f6e",id:"imagesAccelerate",level:2},{value:"Docker\u670d\u52a1\u547d\u4ee4",id:"docker\u670d\u52a1\u547d\u4ee4",level:2},{value:"<code>systemctl start docker</code>",id:"systemctl-start-docker",level:3},{value:"<code>systemctl status docker</code>",id:"systemctl-status-docker",level:3},{value:"<code>systemctl stop docker</code>",id:"systemctl-stop-docker",level:3},{value:"<code>systemctl restart docker</code>",id:"systemctl-restart-docker",level:3},{value:"<code>systemctl enable docker</code>",id:"systemctl-enable-docker",level:3},{value:"<code>service docker start</code>",id:"service-docker-start",level:3},{value:"<code>service docker stop</code>",id:"service-docker-stop",level:3},{value:"<code>service docker restart</code>",id:"service-docker-restart",level:3}];function a(e){const c={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.h1,{id:"\u5b89\u88c5docker",children:"\u5b89\u88c5Docker"}),"\n",(0,s.jsx)(c.p,{children:(0,s.jsx)(c.strong,{children:(0,s.jsx)(c.a,{href:"docs.docker.com/engine/install/centos/",children:"\u5b98\u7f51\u5730\u5740"})})}),"\n",(0,s.jsx)(c.h2,{id:"versionCentos",children:"\u786e\u5b9aCentos\u7248\u672c"}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-bash",metastring:"title='\u67e5\u770bcentos\u7248\u672c'",children:"cat /etc/redhat-release # \u9700\u8981Centos 7\u53ca\u4ee5\u4e0a\u7684\u7248\u672c\n"})}),"\n",(0,s.jsx)(c.h2,{id:"removeDocker",children:"\u5378\u8f7d\u65e7\u7248\u672c"}),"\n",(0,s.jsx)(c.admonition,{type:"warning",children:(0,s.jsx)(c.p,{children:"\u5982\u679c\u4e4b\u524d\u5b89\u88c5\u8fc7\uff0c\u9700\u8981\u5378\u8f7d\u518d\u6b21\u5b89\u88c5\uff01\u7b2c\u4e00\u6b21\u53ef\u76f4\u63a5\u8df3\u8fc7\n\ud83d\udeab\ud83d\udeab \u751f\u4ea7\u73af\u5883\uff0c\u53ef\u5f97\u6ce8\u610f\u6602\uff01\u53ef\u522b\u72af\u6d51\u76f4\u63a5\u5378\u8f7d\u4e86\uff0c\u4f60\u5c31\u5e9f\u5e9f\u7684\u4e86\uff01"})}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-bash",metastring:"title='\u5378\u8f7d\u547d\u4ee4'",children:"sudo yum remove docker \\\n                docker-client \\\n                docker-client-latest \\\n                docker-common \\\n                docker-latest \\\n                docker-latest-logrotate \\\n                docker-logrotate \\\n                docker-engine\n"})}),"\n",(0,s.jsx)(c.h2,{id:"installGcc",children:"\u5b89\u88c5Yum\u7684gcc"}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-bash",metastring:"title='\u5b89\u88c5gcc'",children:"sudo yum -y install gcc # \u5b89\u88c5gcc\nsudo  yum -y install gcc-c++ # \u5b89\u88c5gcc+\n"})}),"\n",(0,s.jsx)(c.h2,{id:"installJar",children:"\u5b89\u88c5Docker\u8f6f\u4ef6\u5305"}),"\n",(0,s.jsx)(c.h3,{id:"yumUtils",children:(0,s.jsx)(c.code,{children:"yum-utils"})}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-bash",metastring:"title='\u5b89\u88c5yum-utils'",children:"sudo yum install -y yum-utils\n"})}),"\n",(0,s.jsx)(c.h3,{id:"yumManager",children:(0,s.jsx)(c.code,{children:"yum-config-manager"})}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-bash",metastring:"title='\u5b89\u88c5stable repository\u955c\u50cf\u4ed3\u5e93'",children:"# \u7406\u8bba\u4e0a\u76f4\u63a5 cv \u5b98\u7f51\u5373\u53ef\uff0c\u4f46\u4ed6\u7684\u4ed3\u5e93\u5730\u5740\u6211\u4eec\u56fd\u5185\u8bbf\u95ee\u5f88\u6162\u3002\u6240\u4ee5\u4e0d\u5efa\u8bae\u7528\u5b98\u65b9\u7684\uff01\nsudo yum-config-manager \\\n   --add-repo \\\n   https://download.docker.com/linux/centos/docker-ce.repo\n\n# \u66ff\u6362\u4ed3\u5e93\u4e3a\u56fd\u5185\u5730\u5740:\u963f\u91cc\nsudo yum-config-manager \\\n   --add-repo \\\n   http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n"})}),"\n",(0,s.jsx)(c.h2,{id:"updateYum",children:"\u66f4\u65b0Yum\u8f6f\u4ef6\u5305\u7d22\u5f15"}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-bash",metastring:"title='\u53ef\u4ee5\u901f\u5ea6\u5feb\u4e00\u70b9'",children:"yum makecache fast\n"})}),"\n",(0,s.jsx)(c.h2,{id:"dockerCli",children:"\u5b89\u88c5Docker\u5f15\u64ce"}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-bash",children:"sudo yum -y install docker-ce docker-ce-cli containerd.io\n"})}),"\n",(0,s.jsx)(c.h2,{id:"installResult",children:"\u5b89\u88c5\u5b8c\u6210\u542f\u52a8Docker"}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-bash",metastring:"title='\u6d4b\u8bd5\u662f\u5426\u5b89\u88c5\u6210\u529f'",children:"systemctl start docker  # \u542f\u52a8docker\nsystemctl status docker # \u67e5\u770bdocker\u72b6\u6001\uff0c\u82e5\u51fa\u73b0running\u5b57\u6837\u5c31\u662f\u5b50\u5f39\u5df2\u7ecf\u98de\u8d77\u6765\uff01 \u554a\u545c\uff01\n"})}),"\n",(0,s.jsx)(c.h2,{id:"imagesAccelerate",children:"\u955c\u50cf\u52a0\u901f\u914d\u7f6e"}),"\n",(0,s.jsxs)(c.ul,{children:["\n",(0,s.jsx)(c.li,{children:"\u6ce8\u518c\u963f\u91cc\u4e91"}),"\n",(0,s.jsx)(c.li,{children:"search \u5bb9\u5668\u955c\u50cf\u670d\u52a1"}),"\n",(0,s.jsx)(c.li,{children:"\u5de6\u4fa7\u4fa7\u8fb9\u680f\u9009\u62e9\u955c\u50cf\u52a0\u901f\uff0c\u590d\u5236\u5730\u5740"}),"\n",(0,s.jsx)(c.li,{children:"\u9009\u62e9\u5bf9\u5e94\u7cfb\u7edf\uff0c\u6839\u636e\u963f\u91cc\u4e91\u63d0\u4f9b\u547d\u4ee4 \u65e0\u8111cv\u6267\u884c"}),"\n"]}),"\n",(0,s.jsx)(c.h2,{id:"docker\u670d\u52a1\u547d\u4ee4",children:"Docker\u670d\u52a1\u547d\u4ee4"}),"\n",(0,s.jsx)(c.h3,{id:"systemctl-start-docker",children:(0,s.jsx)(c.code,{children:"systemctl start docker"})}),"\n",(0,s.jsx)(c.p,{children:"\u542f\u52a8docker\u670d\u52a1"}),"\n",(0,s.jsx)(c.h3,{id:"systemctl-status-docker",children:(0,s.jsx)(c.code,{children:"systemctl status docker"})}),"\n",(0,s.jsx)(c.p,{children:"\u67e5\u770bdocker\u72b6\u6001\u4fe1\u606f"}),"\n",(0,s.jsx)(c.h3,{id:"systemctl-stop-docker",children:(0,s.jsx)(c.code,{children:"systemctl stop docker"})}),"\n",(0,s.jsx)(c.p,{children:"\u505c\u6b62docker\u670d\u52a1"}),"\n",(0,s.jsx)(c.h3,{id:"systemctl-restart-docker",children:(0,s.jsx)(c.code,{children:"systemctl restart docker"})}),"\n",(0,s.jsx)(c.p,{children:"\u91cd\u542fdocker\u670d\u52a1"}),"\n",(0,s.jsx)(c.h3,{id:"systemctl-enable-docker",children:(0,s.jsx)(c.code,{children:"systemctl enable docker"})}),"\n",(0,s.jsx)(c.p,{children:"\u5f00\u673a\u542f\u52a8docker\u670d\u52a1"}),"\n",(0,s.jsx)(c.admonition,{title:"\u65e7\u65b9\u5f0f",type:"note",children:(0,s.jsx)(c.p,{children:"\u6bd4\u8f83\u65e7\u7684\u7684\u65b9\u5f0f\uff0c\u82e5systemctl\u4e0d\u7ba1\u7528\u53ef\u4ee5\u8bd5\u8bd5  service"})}),"\n",(0,s.jsx)(c.h3,{id:"service-docker-start",children:(0,s.jsx)(c.code,{children:"service docker start"})}),"\n",(0,s.jsx)(c.h3,{id:"service-docker-stop",children:(0,s.jsx)(c.code,{children:"service docker stop"})}),"\n",(0,s.jsx)(c.h3,{id:"service-docker-restart",children:(0,s.jsx)(c.code,{children:"service docker restart"})})]})}function h(e={}){const{wrapper:c}={...(0,n.a)(),...e.components};return c?(0,s.jsx)(c,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},9313:(e,c,r)=>{r.d(c,{Z:()=>l,a:()=>d});var s=r(5271);const n={},t=s.createContext(n);function d(e){const c=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function l(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(t.Provider,{value:c},e.children)}}}]);