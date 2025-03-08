"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[5829],{2209:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=t(2676),r=t(9313);const i={id:"dockerNetwork",title:"Docker\u7f51\u7edc",authors:"Hare",tags:["docker"]},s="Docker\u7f51\u7edc\u8ba4\u8bc6",c={id:"docker/dockerNetwork",title:"Docker\u7f51\u7edc",description:"Bridge(\u6865\u63a5\u6a21\u5f0f)",source:"@site/docs/docker/Docker\u7f51\u7edc.md",sourceDirName:"docker",slug:"/docker/dockerNetwork",permalink:"/en/docs/docker/dockerNetwork",draft:!1,unlisted:!1,tags:[{inline:!0,label:"docker",permalink:"/en/docs/tags/docker"}],version:"current",lastUpdatedAt:1741444438e3,frontMatter:{id:"dockerNetwork",title:"Docker\u7f51\u7edc",authors:"Hare",tags:["docker"]},sidebar:"ContainersAndMiddleware",previous:{title:"Docker\u955c\u50cf",permalink:"/en/docs/docker/dockerImages"},next:{title:"Docker\u5bb9\u5668\u547d\u4ee4",permalink:"/en/docs/docker/Docker\u5bb9\u5668/dockerRun"}},a={},d=[{value:"Bridge(\u6865\u63a5\u6a21\u5f0f)",id:"bridge\u6865\u63a5\u6a21\u5f0f",level:2},{value:"\u76f8\u5173\u539f\u7406\u56fe",id:"\u76f8\u5173\u539f\u7406\u56fe",level:3},{value:"\u521b\u5efa\u81ea\u5b9a\u4e49\u7f51\u7edc",id:"\u521b\u5efa\u81ea\u5b9a\u4e49\u7f51\u7edc",level:3},{value:"FAQ",id:"faq",level:3},{value:"Host\u6a21\u5f0f",id:"host\u6a21\u5f0f",level:2},{value:"\u76f8\u5173\u539f\u7406\u56fe",id:"\u76f8\u5173\u539f\u7406\u56fe-1",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"docker\u7f51\u7edc\u8ba4\u8bc6",children:"Docker\u7f51\u7edc\u8ba4\u8bc6"}),"\n",(0,o.jsx)(n.h2,{id:"bridge\u6865\u63a5\u6a21\u5f0f",children:"Bridge(\u6865\u63a5\u6a21\u5f0f)"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.docker.com/engine/network/drivers/bridge/",children:"\u5b98\u7f51bridge\u5730\u5740"})}),"\n",(0,o.jsxs)(n.p,{children:["Docker\u4e2d\u82e5\u6ca1\u6709\u6307\u5b9a~\u9ed8\u8ba4\u7684\u5c31\u662fbridge\u6a21\u5f0f ",(0,o.jsx)(n.strong,{children:"[\u67e5\u770b: docker inspect \u5bb9\u5668id | tail -n 20]"})]}),"\n",(0,o.jsx)(n.h3,{id:"\u76f8\u5173\u539f\u7406\u56fe",children:"\u76f8\u5173\u539f\u7406\u56fe"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["\u4f7f\u7528ifconfig/ip addr\u53ef\u770b\u5230\u5bbf\u4e3b\u673a\u6709\u4e00\u4e2adocker0\u7684\u7f51\u6865\u3002\u5b89\u88c5\u542f\u52a8docker\u540e\u8fd9\u4e2adocker0\u5c31\u4f1a\u51fa\u73b0\u3002",(0,o.jsx)("br",{}),"\n\u800c\u8fd9\u4e2adocker0\u5145\u5f53\u4e00\u4e2a\u63a5\u53e3\u7684\u4f5c\u7528\u3002\u4fd7\u79f0\u7f51\u6865\u3002\u6211\u4eec\u770b\u5982\u4e0b\u56fe:"]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Docker-Bridge\u6a21\u5f0f",src:t(4717).Z+"",width:"1306",height:"649"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5316\u7e41\u5165\u7b80\u89e3\u91ca\u4e0b: docker0\u662f\u4e00\u4e2a\u63a5\u53e3\u4e00\u4e2a\u7f51\u6865\uff0c\u800c\u6bcf\u4e2a\u5bb9\u5668\u90fd\u6709\u5c5e\u4e8e\u81ea\u5df1\u7684\u7f51\u7edceth0\u3002\u6bcf\u4e2a\u5bb9\u5668\u5bf9\u4e00\u4e2a\u7f51\u6865docker0\u4e0a\u7684\u4e00\u4e2a\u63a5\u53e3veth(\u4e00\u4e00\u5bf9\u5e94)\u3002\n\u6700\u540e\u7f51\u6865\u8fde\u63a5\u5bbf\u4e3b\u673a\uff01",(0,o.jsx)(n.strong,{children:"\u6700\u7ec8\u8fbe\u5230\u76ee\u7684\uff0c\u5bb9\u5668\u4e0e\u5bbf\u4e3b\u673a\u4e92\u901a\uff0c\u5bb9\u5668\u4e0e\u5bb9\u5668\u4e92\u901a(\u5728\u4e00\u4e2adocker\u4e2d)\u3002"}),(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.p,{children:"bridge\u6a21\u5f0f\u4e2d\uff0c\u6bcf\u4e2a\u5bb9\u5668\u542f\u52a8\u540e\u90fd\u4f1a\u6709\u4e00\u4e2a\u5c5e\u4e8e\u5bb9\u5668\u5185\u90e8\u7684\u4e00\u4e2aip(172....\u5f00\u5934)\u3002"}),"\n",(0,o.jsxs)(n.admonition,{title:"\u5b98\u65b9\u8b66\u544a",type:"warning",children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"The default bridge network is considered a legacy detail of Docker and is not recommended for production use. <br/>\nConfiguring it is a manual operation, and it has technical shortcomings.\n\n\ud83d\udca8\u603b\u7684\u8bf4\u9ed8\u8ba4\u7684bridge\u6a21\u5f0f\u5b58\u5728\u7f3a\u9677\uff0c\u4e0d\u5efa\u8bae\u5728\u751f\u4ea7\u4f7f\u7528~ \u9700\u8981\u6211\u4eec\u81ea\u5b9a\u4e49\u4e00\u4e2a\u7f51\u7edc(\u9ed8\u8ba4bridge\u6865\u63a5\u5373\u53ef)\n"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"All containers without a --network specified, are attached to the default bridge network. This can be a risk, as unrelated stacks/services/containers are then able to communicate.\nUsing a user-defined network provides a scoped network in which only containers attached to that network are able to communicate.\n\n\ud83d\udca8\u6240\u6709\u672a\u6307\u5b9a--\u7f51\u7edc\u7684\u5bb9\u5668\u90fd\u4f1a\u8fde\u63a5\u5230\u9ed8\u8ba4\u6865\u63a5\u7f51\u7edc\u3002 \u8fd9\u53ef\u80fd\u4f1a\u5e26\u6765\u98ce\u9669\uff0c\u56e0\u4e3a\u4e0d\u76f8\u5173\u7684\u5806\u6808/\u670d\u52a1/\u5bb9\u5668\u90fd\u53ef\u4ee5\u8fdb\u884c\u901a\u4fe1\n"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Containers on the default bridge network can only access each other by IP addresses, unless you use the --link option, which is considered legacy. On a user-defined bridge network, containers can resolve each other by name or alias.\nImagine an application with a web front-end and a database back-end. If you call your containers web and db, the web container can connect to the db container at db, no matter which Docker host the application stack is running on.\nIf you run the same application stack on the default bridge network, you need to manually create links between the containers (using the legacy --link flag). These links need to be created in both directions, so you can see this gets complex with more than two containers which need to communicate. Alternatively, you can manipulate the /etc/hosts files within the containers, but this creates problems that are difficult to debug.\n\n\ud83d\udca8\u5927\u4f53\u5c31\u662f\u8bf4 \u9ed8\u8ba4\u7684bridge\u6865\u63a5\u6a21\u5f0f\uff0c\u53ea\u80fd\u4ee5ip+port(\u4f46\u662fbridge\u6a21\u5f0f\u4e0b\uff0c\u5bb9\u5668\u7684\u5185\u7f51ip\u662f\u4f1a\u53d8\u6362\u7684)\ud83d\udca8\n\u5f53\u4f60\u4f7f\u7528ip+port\u5b9a\u4e49\uff0c\u4e00\u65e6\u66f4\u6362\u4e86ip\u5c31\u50bb\u773c\u4e86~\u800c\u81ea\u5b9a\u4e49\u7684\u7f51\u7edc(\u6865\u63a5)\u53ef\u4ee5\u4f7f\u7528: \u5bb9\u5668\u670d\u52a1\u540d:port\u7684\u65b9\u5f0f\uff01\uff01\uff01\uff01\uff01\n"})})]}),"\n",(0,o.jsx)(n.p,{children:"So\uff0c\u6211\u4eec\u8fd8\u662f\u521b\u5efa\u4e00\u4e2a\u5c5e\u4e8e\u81ea\u5df1\u7684\u7f51\u7edc\u5427(\u9ed8\u8ba4\u6865\u63a5bridge)~"}),"\n",(0,o.jsx)(n.h3,{id:"\u521b\u5efa\u81ea\u5b9a\u4e49\u7f51\u7edc",children:"\u521b\u5efa\u81ea\u5b9a\u4e49\u7f51\u7edc"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker network create my-network\n\n# \u67e5\u770b\ndocker network ls\n\n#\u542f\u52a8\u5bb9\u5668\u65f6\u6307\u5b9a\u7f51\u7edc\ndocker run --network my-network \n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsxs)(n.p,{children:["\u4e0a\u8ff0\u5df2\u7ecf\u8bf4\u8fc7\uff0c\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u7f51\u7edc\u65f6\u3002\u53ef\u76f4\u63a5\u4f7f\u7528 ",(0,o.jsxs)(n.strong,{children:["\u5bb9\u5668\u540d",":port"]})]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:"title='\u4f8b\u5982naocs\u7684\u6ce8\u518c\u4e2d\u5fc3\u5730\u5740'",children:"  cloud:\n    nacos:\n      discovery:\n        #\u5bb9\u5668\u540d:port\n        server-addr: my-nacos:8848\n"})})]}),"\n",(0,o.jsx)(n.h3,{id:"faq",children:"FAQ"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u5bb9\u5668\u5df2\u7ecf\u5728\u8fd0\u884c\uff0c\u5982\u4f55\u6307\u5b9a\u73b0\u6709\u81ea\u5b9a\u4e49\u7f51\u7edc?"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# docker network connect \u7f51\u7edc\u540d\u79f0 \u5bb9\u5668\u540d\ndocker network connect my-network my-mysql\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"\u82e5\u53ea\u662f\u60f3\u5bb9\u5668\u95f4\u901a\u4fe1\uff0c\u65e0\u9700\u66b4\u9732\u7aef\u53e3(-p )\u3002\u4fdd\u8bc1\u63a5\u5165\u540c\u4e00\u7f51\u7edc(\u6865\u63a5)"}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"\u5b98\u65b9",type:"note",children:(0,o.jsx)(n.p,{children:"If you want to make a container accessible to other containers, it isn't necessary to publish the container's ports. You can enable inter-container communication by connecting the containers to the same network, usually a bridge network."})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"\u5b98\u65b9\u8bf4\u660e\uff0c\u66b4\u9732\u7aef\u53e3(-p )\u6bd4\u8f83\u5371\u9669\uff0c\u4e0d\u4ec5docker\u4e3b\u673a\u80fd\u8bbf\u95ee\uff0c\u5916\u90e8\u4e5f\u53ef\u8fde\u63a5\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"\u5b98\u65b9",type:"note",children:(0,o.jsx)(n.p,{children:"Publishing container ports is insecure by default. Meaning, when you publish a container's ports it becomes available not only to the Docker host, but to the outside world as well.\nIf you include the localhost IP address (127.0.0.1, or ::1) with the publish flag, only the Docker host and its containers can access the published container port."})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"\u82e5\u53ea\u60f3\u4e3b\u673a\u4e0e\u5176\u5bb9\u5668\u8bbf\u95ee:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# -p \u65f6\u52a0\u5165ip\u5730\u5740\u3002\u5c06\u4e3b\u673a127.0.0.0\u4e0a\u76848080\u6620\u5c04\u5230\u5bb9\u566880\ndocker run -p 127.0.0.0:8080:80 nginx\n"})}),"\n",(0,o.jsx)(n.h2,{id:"host\u6a21\u5f0f",children:"Host\u6a21\u5f0f"}),"\n",(0,o.jsx)(n.admonition,{title:"\u4e0a\u5b98\u65b9",type:"note",children:(0,o.jsx)(n.p,{children:"If you use the host network mode for a container, that container's network stack isn't isolated from the Docker host (the container shares the host's networking namespace), and the container doesn't get its own IP-address allocated. For instance, if you run a container which binds to port 80 and you use host networking, the container's application is available on port 80 on the host's IP address."})}),"\n",(0,o.jsx)(n.p,{children:"\u4ec0\u4e48\u610f\u601d\u5462\uff0c\u5316\u7e41\u5165\u7b80\u89e3\u91ca: Host(\u4e3b\u673a\u6a21\u5f0f)\u6ca1\u6709\u7f51\u6865\u4e2d\u95f4\u8fde\u63a5\u4e00\u5c42\u7684\u8bf4\u6cd5\u4e86\uff0c\u5bb9\u5668\u7528\u7684\u5c31\u662f\u4e3b\u673a\u7684\u7f51\u7edc\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"\u76f8\u5173\u539f\u7406\u56fe-1",children:"\u76f8\u5173\u539f\u7406\u56fe"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Docker-Host\u6a21\u5f0f",src:t(5763).Z+"",width:"1598",height:"787"})}),"\n",(0,o.jsx)(n.p,{children:"\u5bb9\u5668\u5171\u4eab\u4e86\u4e3b\u673a\u7684\u7f51\u7edc\uff0c\u4e5f\u5c31\u662f\u8bf4 \u542f\u52a8nacos\u5bb9\u5668 \u4e4b\u524dbridge\u6865\u63a5\u6a21\u5f0f\u9700\u8981\u66b4\u9732 -p 8848:8848 \u7aef\u53e3\u4f9b\u5916\u754c\u8fde\u63a5\u3002\n\u800c\u4e00\u65e6\u4f7f\u7528\u4e86Host\u6a21\u5f0f\u5982\u4e0b\u542f\u52a8:"}),"\n",(0,o.jsxs)(n.admonition,{title:"\u7ee7\u7eed\u5b98\u65b9",type:"note",children:[(0,o.jsx)(n.p,{children:"Given that the container does not have its own IP-address when using host mode networking, port-mapping doesn't take effect, and the -p, --publish, -P, and --publish-all option are ignored, producing a warning instead:"}),(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"WARNING: Published ports are discarded when using host network mode"})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run --name nacos --network host -d nacos:1.1\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"\u4e0d\u7528\u5728\u5199 -p,\u800c\u82e5\u8bbf\u95ee\u76f4\u63a5 \u4e3b\u673aip:8848 \u5373\u53ef"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},4717:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/bridge-3ae7c370f459b3ac5e1166ecec6db745.png"},5763:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/host-6b426270a1d999a882c6342b0d531e55.png"},9313:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var o=t(5271);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);