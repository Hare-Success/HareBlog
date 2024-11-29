"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[5529],{933:(e,n,l)=>{l.r(n),l.d(n,{Highlight:()=>t,assets:()=>o,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var s=l(2676),r=l(9313);const i={id:"dockerMysql",title:"Docker\u90e8\u7f72Mysql\u6302\u8f7d",authors:"Hare",tags:["docker"]},c="\u6848\u4f8b: docker\u90e8\u7f72Mysql\u5e76\u5b9e\u73b0\u6302\u8f7d\u76ee\u5f55",d={id:"docker/Docker\u5bb9\u5668/Docker\u6570\u636e\u5377/dockerMysql",title:"Docker\u90e8\u7f72Mysql\u6302\u8f7d",description:"\u73af\u5883\u51c6\u5907",source:"@site/docs/docker/Docker\u5bb9\u5668/Docker\u6570\u636e\u5377/Docker\u90e8\u7f72Mysql\u6302\u8f7d\u76ee\u5f55.md",sourceDirName:"docker/Docker\u5bb9\u5668/Docker\u6570\u636e\u5377",slug:"/docker/Docker\u5bb9\u5668/Docker\u6570\u636e\u5377/dockerMysql",permalink:"/docs/docker/Docker\u5bb9\u5668/Docker\u6570\u636e\u5377/dockerMysql",draft:!1,unlisted:!1,tags:[{inline:!0,label:"docker",permalink:"/docs/tags/docker"}],version:"current",lastUpdatedAt:173288483e4,frontMatter:{id:"dockerMysql",title:"Docker\u90e8\u7f72Mysql\u6302\u8f7d",authors:"Hare",tags:["docker"]},sidebar:"ContainersAndMiddleware",previous:{title:"Docker\u5bb9\u5668\u5377",permalink:"/docs/docker/Docker\u5bb9\u5668/Docker\u6570\u636e\u5377/"},next:{title:"Docker\u90e8\u7f72\u5fae\u670d\u52a1",permalink:"/docs/category/docker\u90e8\u7f72\u5fae\u670d\u52a1"}},o={},t=({children:e,color:n})=>{const l={span:"span",...(0,r.a)()};return(0,s.jsx)(l.span,{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:e})},a=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u5f00\u59cb\u524d\u601d\u8003\u70b9\u95ee\u9898",id:"\u5f00\u59cb\u524d\u601d\u8003\u70b9\u95ee\u9898",level:2},{value:"\u5148\u770b\u770bdocker\u4e0b\u7684mysql\u76f8\u5173\u6587\u4ef6\u90fd\u5728\u54ea\uff1f",id:"\u5148\u770b\u770bdocker\u4e0b\u7684mysql\u76f8\u5173\u6587\u4ef6\u90fd\u5728\u54ea",level:2},{value:"\u6b63\u5f0f\u5f00\u59cb",id:"\u6b63\u5f0f\u5f00\u59cb",level:2},{value:"\u5f00\u59cb\u524d\u521b\u5efa\u4e09\u4e2a\u6587\u4ef6",id:"\u5f00\u59cb\u524d\u521b\u5efa\u4e09\u4e2a\u6587\u4ef6",level:3},{value:"docker pull Mysql\u62c9\u955c\u50cf",id:"docker-pull-mysql\u62c9\u955c\u50cf",level:3},{value:"docker run \u542f\u52a8Mysql\u5bb9\u5668",id:"docker-run-\u542f\u52a8mysql\u5bb9\u5668",level:3},{value:"\u65f6\u533a\u95ee\u9898",id:"\u65f6\u533a\u95ee\u9898",level:2},{value:"Mysql\u68c0\u67e5\u65f6\u533a",id:"mysql\u68c0\u67e5\u65f6\u533a",level:3},{value:"\u67e5\u770bdocker\u7684mysql\u5bb9\u5668\u662f\u5426\u5b58\u5728\u65f6\u533a\u95ee\u9898\u3001",id:"\u67e5\u770bdocker\u7684mysql\u5bb9\u5668\u662f\u5426\u5b58\u5728\u65f6\u533a\u95ee\u9898",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:3},{value:"\u5bb9\u5668\u542f\u52a8\u89e3\u51b3",id:"\u5bb9\u5668\u542f\u52a8\u89e3\u51b3",level:4},{value:"\u5bb9\u5668\u65f6\u533a\u89e3\u51b3",id:"\u5bb9\u5668\u65f6\u533a\u89e3\u51b3",level:4},{value:"\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\u89e3\u51b3",id:"\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\u89e3\u51b3",level:4},{value:"\u5982\u4f55\u5f00\u542fbinlog\u65e5\u5fd7",id:"\u5982\u4f55\u5f00\u542fbinlog\u65e5\u5fd7",level:2},{value:"MySql5.7\u5f00\u542fbinlog",id:"mysql57\u5f00\u542fbinlog",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u6848\u4f8b-docker\u90e8\u7f72mysql\u5e76\u5b9e\u73b0\u6302\u8f7d\u76ee\u5f55",children:"\u6848\u4f8b: docker\u90e8\u7f72Mysql\u5e76\u5b9e\u73b0\u6302\u8f7d\u76ee\u5f55"}),"\n","\n",(0,s.jsx)(n.h2,{id:"\u73af\u5883\u51c6\u5907",children:"\u73af\u5883\u51c6\u5907"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Centos\u7248\u672c7\uff08\u865a\u62df\u673a\uff0c\u4e91\u670d\u52a1\u5668\uff09"}),"\n",(0,s.jsxs)(n.li,{children:["\u5b89\u88c5\u4e86Docker\u7248\u672c26.0.0 ",(0,s.jsx)(n.a,{href:"/docs/docker/dockerInstall",children:"\u5b89\u88c5\u6587\u7ae0"})]}),"\n",(0,s.jsx)(n.li,{children:"Mysql\u955c\u50cf\u7248\u672c5.7.36"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5f00\u59cb\u524d\u601d\u8003\u70b9\u95ee\u9898",children:"\u5f00\u59cb\u524d\u601d\u8003\u70b9\u95ee\u9898"}),"\n",(0,s.jsx)(n.p,{children:"\u770b\u8fc7\u7f51\u4e0a\u6709\u4e9b\u65b9\u6848\uff0c\u80fd\u6210\u529f\u4f46\u6211\u611f\u89c9\u5f88\u4e71\uff01\u81f3\u6b64\u81ea\u5df1\u8bb0\u5f55\u4e0b\uff0c\u540c\u65f6\u5b66\u4e60\u4e86\u6570\u636e\u5377\uff01"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6b63\u5e38Linux\u670d\u52a1\u5668\u5b89\u88c5\u914d\u7f6eMysql\uff0c\u662f\u600e\u4e48\u4e2a\u6d41\u7a0b?"}),"\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528Docker\u90e8\u7f72Mysql\u6211\u4eec\u9700\u8981\u505a\u4ec0\u4e48?","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5982\u4f55\u4f9b\u5916\u754c\u5de5\u5177\u8fde\u63a5?"}),"\n",(0,s.jsx)(n.li,{children:"Mysql\u914d\u7f6e\u6587\u4ef6\u3001\u6570\u636e\u5b58\u653e\u6587\u4ef6\u3001\u65e5\u5fd7\u6587\u4ef6\u662f\u4e0d\u662f\u5f97\u9700\u8981\u6302\u8f7d\u5bbf\u4e3b\u673a?"}),"\n",(0,s.jsx)(n.li,{children:"\u6620\u5c04\u7aef\u53e3\u5982\u4f55\u8bbe\u7f6e?"}),"\n",(0,s.jsx)(n.li,{children:"\u767b\u5f55\u5bc6\u7801\u600e\u4e48\u8bbe\u7f6e?"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u5e26\u7740\u6211\u4eec\u7684\u95ee\u9898\uff0c\u6162\u6162\u4e0d\u6025\u4e0d\u8e81\u7684\u89e3\u51b3\u5b83"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5148\u770b\u770bdocker\u4e0b\u7684mysql\u76f8\u5173\u6587\u4ef6\u90fd\u5728\u54ea",children:"\u5148\u770b\u770bdocker\u4e0b\u7684mysql\u76f8\u5173\u6587\u4ef6\u90fd\u5728\u54ea\uff1f"}),"\n",(0,s.jsx)(n.admonition,{title:"\u6ce8\u610f\u4e86!",type:"warning",children:(0,s.jsxs)(n.p,{children:["\u4f7f\u7528-d\u6a21\u5f0f\u542f\u52a8\uff0c\u5fc5\u987b\u52a0\u4e0a -e MYSQL_ROOT_PASSWORD\u8bbe\u7f6e\u5bc6\u7801 ",(0,s.jsx)(n.strong,{children:"\uff08\u73af\u5883\u53d8\u91cf\uff09"}),"\u3002\nHare\u4e4b\u524d\u4e0d\u77e5\u9053\u6ca1\u52a0-e\uff0c\u600e\u4e48\u542f\u52a8\u90fd\u542f\u52a8\u4e0d\u4e86\uff01\u542f\u52a8\u76f4\u63a5\u6302\u6389\u3002",(0,s.jsx)(n.a,{href:"/docs/docker/Docker%E5%AE%B9%E5%99%A8/dockerBackRun",children:"\u5bb9\u5668\u540e\u53f0-d\u542f\u52a8"})]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"title='\u542f\u52a8mysql\u5bb9\u5668'",children:"docker run --name=some-mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u542f\u52a8\u4e4b\u540e"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"title='\u518d\u6b21\u8fdb\u5165mysql\u5bb9\u5668'",children:"docker ps # \u67e5\u770bMysql\u5bb9\u5668ID\ndocker exec -it \u5bb9\u5668ID bash #\u8fdb\u5165\u5bb9\u5668\u5185\u90e8\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u542f\u52a8\u540e"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"title='\u8fdb\u5165/etc/mysql'",children:"cd /etc/mysql\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u4f1a\u770b\u5230\u5f88\u591a\u4e2a\u6587\u4ef6\uff0c\u4e00\u4e00\u89e3\u91ca\u4e0b"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"conf.d\u76ee\u5f55:"})," \u901a\u5e38\u7528\u4e8e\u5b58\u653e\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u914d\u7f6e\u6587\u4ef6\u3002MySQL\u5728\u542f\u52a8\u65f6\u4f1a\u8bfb\u53d6\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u914d\u7f6e\u6587\u4ef6\u3002\u8fd9\u4f7f\u5f97\u7528\u6237\u53ef\u4ee5\u5c06\u81ea\u5df1\u7684\u914d\u7f6e\u5206\u6563\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\uff0c\u4fbf\u4e8e\u7ba1\u7406"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"my.cnf:"})," \u8fd9\u662f\u4e3b\u914d\u7f6e\u6587\u4ef6\u7684\u7b26\u53f7\u94fe\u63a5\uff08\u6307\u5411/etc/alternatives/my.cnf\uff09\u3002MySQL\u9996\u5148\u67e5\u627e\u8fd9\u4e2a\u6587\u4ef6\u6765\u52a0\u8f7d\u914d\u7f6e\u3002\u8fd9\u4e2a\u6587\u4ef6\u901a\u5e38\u5305\u542b\u4e86\u4e00\u4e9b\u57fa\u672c\u7684\u914d\u7f6e\u8bbe\u7f6e\uff0c\u6216\u8005\u5305\u542b\u4e86\u5305\u62ec\u5176\u4ed6\u914d\u7f6e\u6587\u4ef6\u7684\u6307\u4ee4"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"my.cnf.fallback:"})," \u8fd9\u662f\u4e00\u4e2a\u5907\u4efd\u914d\u7f6e\u6587\u4ef6\uff0c\u7528\u4e8e\u5728\u4e3b\u914d\u7f6e\u6587\u4ef6\uff08my.cnf\uff09\u635f\u574f\u6216\u4e0d\u5b58\u5728\u65f6\u63d0\u4f9b\u56de\u9000\u914d\u7f6e\u3002\u8fd9\u4fdd\u8bc1\u4e86\u5373\u4f7f\u4e3b\u914d\u7f6e\u6587\u4ef6\u51fa\u73b0\u95ee\u9898\uff0cMySQL\u670d\u52a1\u4e5f\u80fd\u4ee5\u67d0\u79cd\u5f62\u5f0f\u8fd0\u884c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"mysql.cnf:"})," \u8fd9\u901a\u5e38\u662f\u4e00\u4e2a\u989d\u5916\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u53ef\u80fd\u5305\u542b\u7279\u5b9a\u4e8eMySQL\u670d\u52a1\u7684\u4e00\u4e9b\u7279\u5b9a\u914d\u7f6e\u3002\u8fd9\u4e2a\u6587\u4ef6\u7684\u5177\u4f53\u7528\u9014\u53ef\u80fd\u4f1a\u6839\u636eMySQL\u7248\u672c\u548c\u7279\u5b9a\u7684\u5b89\u88c5\u65b9\u5f0f\u6709\u6240\u4e0d\u540c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"mysql.conf.d:"})," \u8fd9\u662f\u53e6\u4e00\u4e2a\u76ee\u5f55\uff0c\u7c7b\u4f3c\u4e8econf.d\uff0c\u7528\u4e8e\u5b58\u653eMySQL\u76f8\u5173\u7684\u989d\u5916\u914d\u7f6e\u6587\u4ef6\u3002MySQL\u540c\u6837\u4f1a\u8bfb\u53d6\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u914d\u7f6e\u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{title:"\u9700\u8981\u7684\u6587\u4ef6",type:"note",children:[(0,s.jsxs)(n.p,{children:["\u7f51\u4e0a\u5f88\u591a\u6587\u7ae0\u4e5f\u63d0\u51fa\u6765\u4e86\uff0c",(0,s.jsx)(n.strong,{children:"\u5343\u4e07\u4e0d\u8981\u6302\u8f7dmy.cnf\u5b83\u8fd9\u662f\u4e2a\u8f6f\u8fde\u63a5\u3002\u8d77\u4e0d\u5230\u4f5c\u7528\u7684\uff01"})]}),(0,s.jsx)(t,{color:"#25c2a0",children:"\u800c\u6211\u4eec\u8981\u505a\u7684\u5c31\u662f\u6302\u8f7dconf.d\u8fd9\u4e2a\u76ee\u5f55\uff0c\u8fd9\u4e2a\u76ee\u5f55\u6211\u4eec\u53ef\u4ee5\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\u3002"}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"\u800cmysql\u52a0\u8f7d\u987a\u5e8f"})]}),(0,s.jsx)(n.p,{children:"\u901a\u5e38\u662f\u5148\u8bfb\u53d6my.cnf\uff0c\u7136\u540e\u662fmysql.cnf\uff0c\u63a5\u7740\u662fconf.d\u548cmysql.conf.d\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u3002\u8fd9\u610f\u5473\u7740\u540e\u8bfb\u53d6\u7684\u6587\u4ef6\u4e2d\u7684\u8bbe\u7f6e\u53ef\u4ee5\u8986\u76d6\u5148\u524d\u6587\u4ef6\u4e2d\u7684\u8bbe\u7f6e\u3002"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://hub.docker.com/_/mysql",children:"docker\u5b98\u65b9\u8bf4\u660e\uff0c\u540c\u65f6\u53ef\u67e5\u770b\u5176\u4ed6\u73af\u5883\u53d8\u91cf"})}),(0,s.jsxs)(n.admonition,{title:"\u5b98\u65b9\u539f\u8bdd",type:"warning",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Using a custom MySQL configuration file"})}),(0,s.jsx)(n.p,{children:"The default configuration for MySQL can be found in /etc/mysql/my.cnf, which may !includedir additional directories such as /etc/mysql/conf.d or /etc/mysql/mysql.conf.d. Please inspect the relevant files and directories within the mysql image itself for more details."}),(0,s.jsx)(n.p,{children:"If /my/custom/config-file.cnf is the path and name of your custom configuration file, you can start your mysql container like this (note that only the directory path of the custom config file is used in this command):"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run --name some-mysql -v /my/custom:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag\n"})}),(0,s.jsx)(n.p,{children:"This will start a new container some-mysql where the MySQL instance uses the combined startup settings from /etc/mysql/my.cnf and /etc/mysql/conf.d/config-file.cnf, with settings from the latter taking precedence."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u5927\u610f\u5c31\u662f\u6211\u4eec\u53ef\u4ee5\u521b\u5efa\u81ea\u5b9a\u4e49xxx.cnf\u914d\u7f6e\u6587\u4ef6\uff0c\u6302\u8f7d\u5230/etc/mysql/conf.d\u76ee\u5f55\u3002\u800cMysql\u5b9e\u4f8b\u5728\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u65f6\u5c31\u662fmy.cnf\u548c\u81ea\u5b9a\u4e49\u7684\u7ec4\u5408\u914d\u7f6e\u3002\u800c\u6211\u4eec\u7684\u81ea\u5b9a\u4e49\u7684\u914d\u7f6e\u6587\u4ef6\u4f18\u5148\u4f7f\u7528\uff01\uff01"})})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8bb0\u597d\u4e86\u4e4b\u524d\u542f\u52a8\u7684Mysql\u5bb9\u5668stop\u6389\u5e76rm\uff01\uff01"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6b63\u5f0f\u5f00\u59cb",children:"\u6b63\u5f0f\u5f00\u59cb"}),"\n",(0,s.jsx)(n.h3,{id:"\u5f00\u59cb\u524d\u521b\u5efa\u4e09\u4e2a\u6587\u4ef6",children:"\u5f00\u59cb\u524d\u521b\u5efa\u4e09\u4e2a\u6587\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"Hare\u662f\u5728/usr/local/dockerdata/mysql\u4e0b\uff01"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6302\u8f7d\u7684\u65e5\u5fd7\u6587\u4ef6\u5bbf\u4e3b\u673a\u76ee\u5f55:/usr/local/dockerdata/mysql/log"}),"\n",(0,s.jsx)(n.li,{children:"\u6302\u8f7d\u7684\u6570\u636e\u6587\u4ef6\u5bbf\u4e3b\u673a\u76ee\u5f55:/usr/local/dockerdata/mysql/data"}),"\n",(0,s.jsx)(n.li,{children:"\u6302\u8f7d\u7684\u914d\u7f6e\u6587\u4ef6\u5bbf\u4e3b\u673a\u76ee\u5f55:/usr/local/dockerdata/mysql/conf"}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{title:"\u91cd\u8981",type:"tip",children:[(0,s.jsx)(n.p,{children:"\u5728\u914d\u7f6e\u76ee\u5f55/usr/local/dockerdata/mysql/conf\u4e2d\u81ea\u5b9a\u4e49\u4e00\u4e2acnf\u914d\u7f6e\u6587\u4ef6\uff0c\u5c06\u5176\u6302\u8f7d"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"title='\u7b80\u5355\u914d\u7f6e'",children:'[client]\ndefault-character-set=utf8mb4\n\n\ndefault-character-set=utf8mb4\n\n[mysqld]\ninit_connect="SET collation_connection = utf8mb4_unicode_ci"\ninit_connect="SET NAMES utf8mb4"\ncharacter-set-server=utf8mb4\ncollation-server=utf8mb4_unicode_ci\nskip-character-set-client-handshake\nskip-name-resolve\n'})})]}),"\n",(0,s.jsx)(n.h3,{id:"docker-pull-mysql\u62c9\u955c\u50cf",children:"docker pull Mysql\u62c9\u955c\u50cf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"title='\u62c9\u53d6Mysql\u955c\u50cf'",children:"# \u641c\u7d22mysql\ndocker search mysql:5.7 --limit 2\n# \u62c9\u53d6mysql5.7\u955c\u50cf\ndocker pull mysql:5.7\n"})}),"\n",(0,s.jsx)(n.h3,{id:"docker-run-\u542f\u52a8mysql\u5bb9\u5668",children:"docker run \u542f\u52a8Mysql\u5bb9\u5668"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"title='\u5bb9\u5668\u542f\uff01\uff01'",children:"docker run -p 3306:3306 --name=testmysql -v /usr/local/dockerdata/mysql/log:/var/log/mysql -v /usr/local/dockerdata/mysql/data:/var/lib/mysql -v /usr/local/dockerdata/mysql/conf:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=123456 -d --privileged=true --restart=always mysql:5.7\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u89e3\u91ca\u4e0b:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/docker/Docker%E5%AE%B9%E5%99%A8/dockerRun",children:"\u5bb9\u5668\u76f8\u5173\u547d\u4ee4"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"-p: \u8bbe\u7f6e\u6620\u5c04\u7aef\u53e3\uff0c\u524d\u8005\u5bbf\u4e3b\u673a\u7aef\u53e3\u540e\u8005\u5bb9\u5668\u3002"}),"\n",(0,s.jsx)(n.li,{children:"-name: \u5bb9\u5668\u540d\u79f0"}),"\n",(0,s.jsx)(n.li,{children:"\u7b2c\u4e00\u4e2a -v: \u6302\u8f7d\u65e5\u5fd7"}),"\n",(0,s.jsx)(n.li,{children:"\u7b2c\u4e8c\u4e2a -v: \u6302\u8f7d\u6570\u636e\u6587\u4ef6"}),"\n",(0,s.jsx)(n.li,{children:"\u7b2c\u4e09\u4e2a -v: \u6302\u8f7d\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsx)(n.li,{children:"-e: \u8bbe\u7f6e\u5bc6\u7801"}),"\n",(0,s.jsx)(n.li,{children:"-d: \u540e\u53f0\u542f\u52a8"}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["--restart=always\u547d\u4ee4:\u597d\u591a\u6587\u7ae0\u53ea\u8bf4\u5bb9\u5668\u505c\u6b62\u81ea\u52a8\u91cd\u542f\uff0c\u5173\u952eHare\u624b\u52a8stop\u6ca1\u6709\u91cd\u542f\u4e00\u76f4\u8ba4\u4e3a\u5b89\u88c5docker\u51fa\u95ee\u9898\u3002\u5b9e\u9645\u662f\u5f53\u4f60\u624b\u52a8stop\u5bb9\u5668\u3002\u4f60\u5fc5\u987b\u91cd\u542fsystemctl restart docker\u624d\u53ef\u4ee5\u3002\n",(0,s.jsx)(n.a,{href:"https://docs.docker.com/config/containers/start-containers-automatically/",children:"\u5b98\u65b9\u8bf4\u660e\u5730\u5740"}),"\nAlways restart the container if it stops. If it's manually stopped, it's restarted only when Docker daemon restarts or the container itself is manually restarted. (See the second bullet listed in restart policy details)"]}),"\n"]}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5927\u610f\u5c31\u662f\u5982\u679c\u5bb9\u5668\u505c\u6b62\uff0c\u603b\u662f\u8981\u91cd\u65b0\u542f\u52a8\u3002 \u5982\u679c\u662f\u624b\u52a8\u505c\u6b62\uff0c\u53ea\u6709\u5728 Docker \u5b88\u62a4\u8fdb\u7a0b\u91cd\u542f\u6216\u5bb9\u5668\u672c\u8eab\u624b\u52a8\u91cd\u542f\u65f6\u624d\u4f1a\u91cd\u65b0\u542f\u52a8\u3002"}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u65f6\u533a\u95ee\u9898",children:"\u65f6\u533a\u95ee\u9898"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7docker\u5b89\u88c5MySql\u540e\uff0c\u4f1a\u9047\u5230\u65f6\u533a\u95ee\u9898\u3002\u53ef\u4ee5\u8fdb\u884c\u5982\u4e0b\u68c0\u67e5\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"mysql\u68c0\u67e5\u65f6\u533a",children:"Mysql\u68c0\u67e5\u65f6\u533a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"SHOW VARIABLES LIKE '%time_zone%';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u67e5\u770bdocker\u7684mysql\u5bb9\u5668\u662f\u5426\u5b58\u5728\u65f6\u533a\u95ee\u9898",children:"\u67e5\u770bdocker\u7684mysql\u5bb9\u5668\u662f\u5426\u5b58\u5728\u65f6\u533a\u95ee\u9898\u3001"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u8fdb\u5165\u5bb9\u5668\ndocker exec -it \u5bb9\u5668ID bash\n# \u67e5\u770b\u65f6\u533a\ndate\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,s.jsx)(n.h4,{id:"\u5bb9\u5668\u542f\u52a8\u89e3\u51b3",children:"\u5bb9\u5668\u542f\u52a8\u89e3\u51b3"}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u76f4\u63a5\u5728\u5bb9\u5668\u542f\u52a8\u52a0\u4e0a ",(0,s.jsx)(n.strong,{children:"-e TZ=Asia/Shanghai\u53c2\u6570"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"title='\u89e3\u51b3\u65f6\u533a\u95ee\u9898'",children:"docker run -p 3306:3306 --name=testmysql -v /usr/local/dockerdata/mysql/log:/var/log/mysql -v /usr/local/dockerdata/mysql/data:/var/lib/mysql -v /usr/local/dockerdata/mysql/conf:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=123456 -e TZ=Asia/Shanghai --privileged=true -d --restart=always mysql:5.7\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u5bb9\u5668\u65f6\u533a\u89e3\u51b3",children:"\u5bb9\u5668\u65f6\u533a\u89e3\u51b3"}),"\n",(0,s.jsx)(n.p,{children:"\u82e5\u662fmysql\u5bb9\u5668\u65f6\u533a\u6709\u95ee\u9898\uff0c\u76f4\u63a5\u4fee\u6539\u5bb9\u5668\u7684\u65f6\u533a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"apt-get update\napt-get install tzdata\nln -fs /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\ndpkg-reconfigure -f noninteractive tzdata\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\u89e3\u51b3",children:"\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\u89e3\u51b3"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u5728\u5bbf\u4e3b\u673a\u81ea\u5efa\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u52a0\u4e0a\u65f6\u533a\u8bbe\u7f6e\uff0c\u5728\u542f\u52a8\u65f6\u5373\u53ef\u4e0d\u52a0 -e \u53c2\u6570\n[mysqld]  \ndefault-time-zone='Asia/Shanghai'\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0a\u65b9\u6848\u53ef\u6839\u636e\u81ea\u8eab\u60c5\u51b5\u800c\u5b9a\u54e6\uff01"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5982\u4f55\u5f00\u542fbinlog\u65e5\u5fd7",children:"\u5982\u4f55\u5f00\u542fbinlog\u65e5\u5fd7"}),"\n",(0,s.jsx)(n.p,{children:"\u56e0\u4e3aHareMysql\u662f5.7\u7248\u672c\u7684\uff0c\u9700\u8981\u624b\u52a8\u5f00\u542fbinlog\u3002\u800c\u5982\u679c\u4f60\u662fMysql8.0\u53ca\u4ee5\u4e0a\u662f\u9ed8\u8ba4\u5f00\u542f\u7684\u3002\u5177\u4f53\u53ef\u7528\u4e0b\u9762\u547d\u4ee4\u67e5\u770b\u662f\u5426\u5f00\u542f:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"show variables like 'log_bin';\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"\u5b98\u65b9\u539f\u8bdd",type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#sysvar_sync_binlog",children:"\u5b98\u65b9\u5730\u5740"}),"\nIn earlier MySQL versions, binary logging was disabled by default, and was enabled if you specified the --log-bin option. From MySQL 8.0, binary logging is enabled by default, whether or not you specify the --log-bin option. The exception is if you use mysqld to initialize the data directory manually by invoking it with the --initialize or --initialize-insecure option, when binary logging is disabled by default. It is possible to enable binary logging in this case by specifying the --log-bin option. When binary logging is enabled, the log_bin system variable, which shows the status of binary logging on the server, is set to ON."]})}),"\n",(0,s.jsx)(n.h3,{id:"mysql57\u5f00\u542fbinlog",children:"MySql5.7\u5f00\u542fbinlog"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[mysqld]\nlog-bin=/var/lib/mysql/mysql-bin\nserver-id=1\n\nbinlog_format=MIXED\nexpire_logs_days=30\n"})}),"\n",(0,s.jsxs)(n.admonition,{title:"\u91cd\u8981",type:"warning",children:[(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0a\u6b65\u9aa4\uff0c\u4f7f\u7528\u5de5\u5177\u5373\u53ef\u8fde\u63a5Mysql\u4e86\uff0c\u4f46\u8fd8\u6709\u8981\u6ce8\u610f\u7684\u5730\u65b9\uff01"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8bb0\u5f97\u5bbf\u4e3b\u673a\u5f00\u653e3306\u7aef\u53e3\u3002\u522b\u8fde\u4e0d\u4e0a\u4e00\u5934\u61f5~~"}),"\n",(0,s.jsx)(n.li,{children:"apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 467B942D3A79BD29\n\u82e5\u9047\u5230\u7c7b\u4f3c\u95ee\u9898:"}),"\n"]}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["GPG error: ",(0,s.jsx)(n.a,{href:"http://repo.mysql.com/apt/debian",children:"http://repo.mysql.com/apt/debian"})," buster InRelease: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY 467B942D3A79BD29\n\u8f93\u5165\u4e0a\u8ff0apt-key \u547d\u4ee4 \u6700\u540e\u90a3\u4e2a\u5c31\u662f\u4f60\u62a5\u9519\u663e\u793a\u7684key \u66ff\u6362\u6389\uff01"]}),"\n"]})]}),"\n",(0,s.jsx)(n.p,{children:"\u82e5\u60f3\u90e8\u7f72Mysql-8\u7684\u7248\u672c\uff0cHare \u6d4b\u8bd5\u90e8\u7f72\u4e86 8.0.24 \u7684\u7248\u672c\uff0c\u4e0a\u8ff0\u64cd\u4f5c\u7167\u6284\u5373\u53ef"})]})}function y(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9313:(e,n,l)=>{l.d(n,{Z:()=>d,a:()=>c});var s=l(5271);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);