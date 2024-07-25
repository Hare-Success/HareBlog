"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[2532],{973:(e,c,s)=>{s.r(c),s.d(c,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var n=s(2676),r=s(9313);const t={id:"fix-docker-config-that-cannot-start-up",slug:"/fix-docker-config-that-cannot-start-up",title:"\u4fee\u6539\u65e0\u6cd5\u542f\u52a8\u7684Docker\u5bb9\u5668\u914d\u7f6e\u6587\u4ef6",date:new Date("2021-08-17T00:00:00.000Z"),authors:"kuizuo",tags:["docker","elasticsearch"],keywords:["docker","elasticsearch"]},a=void 0,i={id:"skill/docker/fix-docker-config-that-cannot-start-up",title:"\u4fee\u6539\u65e0\u6cd5\u542f\u52a8\u7684Docker\u5bb9\u5668\u914d\u7f6e\u6587\u4ef6",description:"\u524d\u56e0",source:"@site/docs/skill/docker/\u4fee\u6539\u65e0\u6cd5\u542f\u52a8\u7684Docker\u5bb9\u5668\u914d\u7f6e\u6587\u4ef6.md",sourceDirName:"skill/docker",slug:"/fix-docker-config-that-cannot-start-up",permalink:"/en/docs/fix-docker-config-that-cannot-start-up",draft:!1,unlisted:!1,tags:[{inline:!0,label:"docker",permalink:"/en/docs/tags/docker"},{inline:!0,label:"elasticsearch",permalink:"/en/docs/tags/elasticsearch"}],version:"current",frontMatter:{id:"fix-docker-config-that-cannot-start-up",slug:"/fix-docker-config-that-cannot-start-up",title:"\u4fee\u6539\u65e0\u6cd5\u542f\u52a8\u7684Docker\u5bb9\u5668\u914d\u7f6e\u6587\u4ef6",date:"2021-08-17T00:00:00.000Z",authors:"kuizuo",tags:["docker","elasticsearch"],keywords:["docker","elasticsearch"]},sidebar:"skill",previous:{title:"Docker\u90e8\u7f72Node\u9879\u76ee",permalink:"/en/docs/docker-deploy-node-project"},next:{title:"\u6570\u636e\u5e93",permalink:"/en/docs/category/\u6570\u636e\u5e93"}},o={},l=[{value:"\u524d\u56e0",id:"\u524d\u56e0",level:2},{value:"\u89e3\u51b3\u529e\u6cd5",id:"\u89e3\u51b3\u529e\u6cd5",level:3},{value:"\u540e\u679c",id:"\u540e\u679c",level:2}];function d(e){const c={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.h2,{id:"\u524d\u56e0",children:"\u524d\u56e0"}),"\n",(0,n.jsx)(c.p,{children:"\u4e8b\u60c5\u662f\u8fd9\u6837\u7684"}),"\n",(0,n.jsx)(c.p,{children:"\u6211\u60f3\u7ed9\u6211\u7684 elasticsearch \u6269\u5145\u4e00\u4e0b\u5185\u5b58\uff0c\u9ed8\u8ba4\u914d\u7f6e\u7684\u5185\u5b58\u592a\u5c11\u4e86\uff0c\u673a\u5668 32g\uff0c\u8fde 16g \u90fd\u6ca1\u5360\u7528\u4e0a\uff0c\u6709\u597d\u51e0\u6b21\u7684\u65f6\u5019\u540c\u65f6\u5e76\u53d1\u51e0\u5343\u6761\u670d\u52a1\u5c31\u6302\u4e86\u3002\u3002\u3002"}),"\n",(0,n.jsxs)(c.p,{children:["\u4e8e\u662f\uff0c\u8fdb\u5165 elasticsearch \u5bb9\u5668\uff0c\u627e\u5230",(0,n.jsx)(c.code,{children:"elasticsearch.yml"}),"\uff08\u6ce8\u610f\u8fd9\u4e2a\u6587\u4ef6\uff09"]}),"\n",(0,n.jsx)(c.p,{children:(0,n.jsx)(c.img,{src:"https://img.kuizuo.cn/image-20210817142200704.png",alt:"image-20210817142200704"})}),"\n",(0,n.jsx)(c.p,{children:"\u6dfb\u52a0\u4e86\u4e0b\u5217\u4e24\u4e2a\u53c2\u6570"}),"\n",(0,n.jsx)(c.p,{children:"-Xms16g -Xmx16g"}),"\n",(0,n.jsxs)(c.p,{children:["\u7136\u540e\u91cd\u542f\u5bb9\u5668\uff0c\u5c31\u53d1\u73b0\u5bb9\u5668\u600e\u4e48\u4e5f\u542f\u52a8\u4e0d\u4e86\uff0c\u7136\u540e\u548b\u4e00\u770b\uff0c\u914d\u7f6e\u6587\u4ef6\u641e\u9519\u4e86\uff0c\u8bbe\u7f6e\u5185\u5b58\u7684\u5e94\u8be5\u662f",(0,n.jsx)(c.code,{children:"jvm.options"}),"\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6"]}),"\n",(0,n.jsx)(c.h3,{id:"\u89e3\u51b3\u529e\u6cd5",children:"\u89e3\u51b3\u529e\u6cd5"}),"\n",(0,n.jsxs)(c.p,{children:["\u6240\u4ee5\u76ee\u6807\u5f88\u660e\u786e\uff0c\u53ea\u9700\u8981\u66f4\u6539\u56de\u539f\u6765\u914d\u7f6e\u6587\u4ef6\u5373\u53ef\u6b63\u5e38\u542f\u52a8\u3002\u4f46\u5bb9\u5668\u53ea\u8981\u4e00\u91cd\u542f\u5c31\u4f1a\u7acb\u9a6c\u6302\u6389\uff0c\u90fd\u542f\u52a8\u4e0d\u4e86\uff0c\u53c8\u600e\u4e48\u901a\u8fc7",(0,n.jsx)(c.code,{children:"docker exec -it elasticsearch /bin/bash"}),"\u8fdb\u5165\u5bb9\u5668\uff0c\u7136\u540e\u901a\u8fc7 vim \u4fee\u6539\u914d\u7f6e\u5462\u3002"]}),"\n",(0,n.jsxs)(c.p,{children:["\u6211\u5f53\u65f6\u7684\u60f3\u6cd5\u662f\u8fd9\u6837\u7684\uff0c\u5bb9\u5668\u4e00\u542f\u52a8\u80af\u5b9a\u4e0d\u4f1a\u7acb\u9a6c\u6302\u6389\uff0c\u81f3\u5c11\u4f1a\u6709\u4e2a\u51e0\u79d2\uff0c\u6211\u80fd\u4e0d\u80fd\u901a\u8fc7\u4e00\u7cfb\u5217\u7684\u547d\u4ee4\u8fdb\u5165\u5bb9\u5668\u7136\u540e\u7acb\u9a6c\u4fee\u6539\u6587\u4ef6\uff0c\u60f3\u6cd5\u662f\u633a\u597d\uff0c\u53ef\u5f53 vim \u7f16\u8f91\u6587\u4ef6\u7684\uff0c\u6211\u53c8\u6539\u600e\u4e48\u901a\u8fc7\u8fdb\u5165\u7f16\u8f91\uff0c\u4fdd\u5b58\u9000\u51fa\u7f16\u8f91\u3002\u4e8e\u662f\u5c31\u679c\u65ad\u653e\u5f03\uff0c\u7ffb\u770b\u81ea\u5df1\u4e4b\u524d\u5199\u8fc7\u7684 Docker \u7b14\u8bb0 \uff0c\u53d1\u73b0\u3002\u6709\u4e00\u4e2a\u547d\u4ee4",(0,n.jsx)(c.code,{children:"docker cp \u5bb9\u5668id:\u5bb9\u5668\u5185\u8def\u5f84 \u5bbf\u4e3b\u673a\u8def\u5f84"}),"\u4ece\u5bb9\u5668\u5185\u62f7\u8d1d\u6587\u4ef6\u5230\u5bbf\u4e3b\u673a\u4e0a\uff0c\u4e8e\u662f\u627e\u5230 elasticsearch \u7684\u914d\u7f6e\u6587\u4ef6\u8def\u5f84",(0,n.jsx)(c.code,{children:"/usr/share/elasticsearch/config"}),"\uff0c\u6211\u7684\u5bb9\u5668\u540d\u5b57"]}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"docker cp elasticsearch:/usr/share/elasticsearch/config/elasticsearch.yml .\nvi elasticsearch.yml\n# \u7f16\u8f91\u6587\u4ef6\ndocker cp elasticsearch.yml :/usr/share/elasticsearch/config/elasticsearch.yml\ndocker start elasticsearch\n"})}),"\n",(0,n.jsx)(c.p,{children:"\u7136\u540e\u91cd\u542f elasticsearch \u5bb9\u5668\u5373\u53ef\u6b63\u5e38\u8fd0\u884c"}),"\n",(0,n.jsx)(c.h2,{id:"\u540e\u679c",children:"\u540e\u679c"}),"\n",(0,n.jsx)(c.p,{children:"\u56de\u5230\u6700\u5f00\u59cb\u7684\u76ee\u7684\uff0c\u90a3\u4e48\u8981\u5982\u4f55\u66f4\u6539 elasticsearch \u5185\u5b58\u5462"}),"\n",(0,n.jsxs)(c.p,{children:["\u5982\u679c\u8981\u65b0\u5efa\u4e00\u4e2a\u5bb9\u5668\u7684\u8bdd \u9644\u5e26\u8fd9\u4e2a\u53c2\u6570\u5373\u53ef",(0,n.jsx)(c.code,{children:'-e ES_JAVA_OPTS="-Xms64m -Xmx512m"'})]}),"\n",(0,n.jsxs)(c.p,{children:["\u5982\u679c\u5df2\u7ecf\u65b0\u5efa\u8fc7\u5bb9\u5668\u7684\u8bdd\uff0c\u627e\u5230",(0,n.jsx)(c.strong,{children:"jvm.options"}),"\u8fd9\u4e2a\u6587\u4ef6"]}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-bash",children:"[root@localhost /]# find /var/lib/docker/ -name jvm.options\n/var/lib/docker/overlay2/1f06b1e87d0fd473cc910d8689add0638f1ac36676d92f92dc03b17e65bf7dae/diff/usr/share/elasticsearch/config/jvm.options\n/var/lib/docker/overlay2/d20c175dffdc80467dbce39d4a5bc6dc9f7ff239564a8ee1ac8c4bcfdd9a461e/merged/usr/share/elasticsearch/config/jvm.options\n"})}),"\n",(0,n.jsx)(c.p,{children:(0,n.jsx)(c.img,{src:"https://img.kuizuo.cn/image-20210817145633786.png",alt:"image-20210817145633786"})}),"\n",(0,n.jsx)(c.p,{children:"\u5982\u56fe\uff0c\u8bbe\u7f6e\u5bf9\u5e94\u7684\u5185\u5b58\u5927\u5c0f\u5373\u53ef\uff0c\u91cd\u542f elasticsearch \u5bb9\u5668\u5373\u53ef"})]})}function h(e={}){const{wrapper:c}={...(0,r.a)(),...e.components};return c?(0,n.jsx)(c,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},9313:(e,c,s)=>{s.d(c,{Z:()=>i,a:()=>a});var n=s(5271);const r={},t=n.createContext(r);function a(e){const c=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function i(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(t.Provider,{value:c},e.children)}}}]);