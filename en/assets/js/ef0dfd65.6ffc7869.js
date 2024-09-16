"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[4077],{2339:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var c=s(2676),r=s(9313);const o={id:"dockerRunNacos",title:"Docker\u90e8\u7f72Nacos",authors:"Hare",tags:["docker","nacos"]},a="Docker\u90e8\u7f72Nacos",t={id:"docker/Docker\u90e8\u7f72\u5fae\u670d\u52a1/dockerRunNacos",title:"Docker\u90e8\u7f72Nacos",description:"\u5173\u4e8eMysql\u7684\u90e8\u7f72: Mysql\u90e8\u7f72",source:"@site/docs/docker/Docker\u90e8\u7f72\u5fae\u670d\u52a1/Docker\u90e8\u7f72Nacos.md",sourceDirName:"docker/Docker\u90e8\u7f72\u5fae\u670d\u52a1",slug:"/docker/Docker\u90e8\u7f72\u5fae\u670d\u52a1/dockerRunNacos",permalink:"/en/docs/docker/Docker\u90e8\u7f72\u5fae\u670d\u52a1/dockerRunNacos",draft:!1,unlisted:!1,tags:[{inline:!0,label:"docker",permalink:"/en/docs/tags/docker"},{inline:!0,label:"nacos",permalink:"/en/docs/tags/nacos"}],version:"current",lastUpdatedAt:1726465162e3,frontMatter:{id:"dockerRunNacos",title:"Docker\u90e8\u7f72Nacos",authors:"Hare",tags:["docker","nacos"]},sidebar:"ContainersAndMiddleware",previous:{title:"Docker\u5236\u4f5cJDK17\u955c\u50cf",permalink:"/en/docs/docker/Docker\u90e8\u7f72\u5fae\u670d\u52a1/dockerBuildJdk"},next:{title:"Redis",permalink:"/en/docs/category/redis"}},l={},d=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u521b\u5efa\u6570\u636e\u5377\u6302\u8f7d\u6587\u4ef6",id:"\u521b\u5efa\u6570\u636e\u5377\u6302\u8f7d\u6587\u4ef6",level:2},{value:"\u542f\u52a8nacos",id:"\u542f\u52a8nacos",level:3},{value:"cp\u914d\u7f6e\u76ee\u5f55",id:"cp\u914d\u7f6e\u76ee\u5f55",level:3},{value:"\u4fee\u6539\u5bbf\u4e3b\u673aconf\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u5bbf\u4e3b\u673aconf\u914d\u7f6e\u6587\u4ef6",level:3},{value:"Mysql\u4e2d\u5173\u4e8enacos\u7684\u811a\u672c",id:"mysql\u4e2d\u5173\u4e8enacos\u7684\u811a\u672c",level:2},{value:"\u542f\u52a8Nacos",id:"\u542f\u52a8nacos-1",level:2},{value:"\u90e8\u5206\u547d\u4ee4\u8be6\u89e3",id:"\u90e8\u5206\u547d\u4ee4\u8be6\u89e3",level:3},{value:"FAQ",id:"faq",level:2}];function i(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"docker\u90e8\u7f72nacos",children:"Docker\u90e8\u7f72Nacos"}),"\n",(0,c.jsxs)(n.admonition,{title:"\u524d\u8a00",type:"note",children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u5173\u4e8eMysql\u7684\u90e8\u7f72:"})," ",(0,c.jsx)(n.a,{href:"/en/docs/docker/Docker%E5%AE%B9%E5%99%A8/Docker%E6%95%B0%E6%8D%AE%E5%8D%B7/dockerMysql",children:"Mysql\u90e8\u7f72"})]}),(0,c.jsx)(n.p,{children:"Hare \u901a\u8fc7Mysql\u6570\u636e\u5e93\u6765\u8fdb\u884c\u542f\u52a8nacos\uff0c\u6240\u4ee5\u542f\u52a8Nacos\u524d\u5fc5\u5b9a\u8981\u5148\u542f\u52a8\u4e00\u4e2aMysql\u5bb9\u5668\uff01\uff01\uff01\uff01\uff01\uff01"})]}),"\n",(0,c.jsx)(n.h2,{id:"\u73af\u5883\u51c6\u5907",children:"\u73af\u5883\u51c6\u5907"}),"\n",(0,c.jsx)(n.p,{children:"\u57fa\u4e8eLinux\u4e91\u670d\u52a1\u5668"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["nacos\u955c\u50cf\u7248\u672c1.4.6","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"# \u5b98\u65b9\u5730\u5740: https://hub.docker.com/r/nacos/nacos-server/tags\ndocker pull nacos/nacos-server:v1.4.6\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["Docker\u7248\u672c26.0.0 ",(0,c.jsx)(n.a,{href:"../../Docker%E5%AE%89%E8%A3%85.mdx",children:"\u5b89\u88c5\u6587\u7ae0"})]}),"\n",(0,c.jsxs)(n.li,{children:["Mysql8 ",(0,c.jsx)(n.a,{href:"/en/docs/docker/Docker%E5%AE%B9%E5%99%A8/Docker%E6%95%B0%E6%8D%AE%E5%8D%B7/dockerMysql",children:"Mysql\u5bb9\u5668"})]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u521b\u5efa\u6570\u636e\u5377\u6302\u8f7d\u6587\u4ef6",children:"\u521b\u5efa\u6570\u636e\u5377\u6302\u8f7d\u6587\u4ef6"}),"\n",(0,c.jsxs)(n.admonition,{title:"\u524d\u8a00",type:"note",children:[(0,c.jsx)(n.p,{children:"\u6211\u7684\u505a\u6cd5\u662f\u5148\u542f\u52a8\u4e00\u4e2anacos\uff0c\u901a\u8fc7docker cp\u547d\u4ee4\u5c06\u914d\u7f6e\u6587\u4ef6cp\u5230\u5bbf\u4e3b\u673a\u76ee\u5f55"}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"mkdir -p /usr/local/dockerdata/{conf,data,logs,bin}\n"})}),(0,c.jsx)(n.p,{children:"\u8fd8\u6709\u4e00\u79cd\u505a\u6cd5\u4e0d\u7528\u5148\u542f\u52a8:\u76f4\u63a5\u521b\u5efa\u5bbf\u4e3b\u673a\u7684\u6302\u8f7d\u76ee\u5f55\u521b\u5efa\u914d\u7f6e\u6587\u4ef6\uff08\u9700\u8981\u81ea\u5df1\u627e\u914d\u7f6e\uff09\u505a\u6cd5\u611f\u89c9\u4e0d\u7a33\u59a5\u3002\u3002\u3002\u3002"})]}),"\n",(0,c.jsx)(n.h3,{id:"\u542f\u52a8nacos",children:"\u542f\u52a8nacos"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker run --name nacos -d nacos/nacos-server:v1.4.6\n"})}),"\n",(0,c.jsx)(n.h3,{id:"cp\u914d\u7f6e\u76ee\u5f55",children:"cp\u914d\u7f6e\u76ee\u5f55"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"# \u8fd9\u91cc\u6211\u5c06bin\u914d\u7f6e\u6587\u4ef6\u4e00\u8d77cp\u4e86\ndocker cp nacos-server:/home/nacos/conf /usr/local/dockerdata/nacos/\ndocker cp nacos-server:/home/nacos/logs /usr/local/dockerdata/nacos/\ndocker cp nacos-server:/home/nacos/bin /usr/local/dockerdata/nacos/\ndocker cp nacos-server:/home/nacos/data /usr/local/dockerdata/nacos/ \n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u4fee\u6539\u5bbf\u4e3b\u673aconf\u914d\u7f6e\u6587\u4ef6",children:"\u4fee\u6539\u5bbf\u4e3b\u673aconf\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u4fee\u6539\u7684\u662fapplication.properties\u6587\u4ef6"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",metastring:"title='\u82e5\u81ea\u5df1\u6709\u9700\u8981\uff0c\u53ef\u6309\u81ea\u9700\u4fee\u6539'",children:'\n\u539f\u914d\u7f6e\nspring.datasource.platform=${SPRING_DATASOURCE_PLATFORM:""}\n\u4fee\u6539\u540e\u914d\u7f6e # "" \u6362\u6210mysql\nspring.datasource.platform=${SPRING_DATASOURCE_PLATFORM:mysql} \n\n#\u8fd9\u5730\u65b9\u5199\u7684 1 \u5c31\u628aurl.1\u6ce8\u91ca\u6389\u5c31\u884c\ndb.num=${MYSQL_DATABASE_NUM:1} \n\n\u539f\u914d\u7f6e\ndb.url.0=jdbc:mysql://${MYSQL_SERVICE_HOST}:${MYSQL_SERVICE_PORT:3306}/${MYSQL_SERVICE_DB_NAME}?${MYSQL_SERVICE_DB_PARAM:characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false}\n\u4fee\u6539\u540e\u914d\u7f6e\ndb.url.0=jdbc:mysql://192.168.1.12:3306/nacos?${MYSQL_SERVICE_DB_PARAM:characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false}\n\u53e6\u4e00\u79cd\u5199\u6cd5\ndb.url.0=jdbc:mysql://${MYSQL_SERVICE_HOST:192.168.1.12}:${MYSQL_SERVICE_PORT:3306}/${MYSQL_SERVICE_DB_NAME:nacos}?${MYSQL_SERVICE_DB_PARAM:characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false}\n#db.url.1=jdbc:mysql://${MYSQL_SERVICE_HOST}:${MYSQL_SERVICE_PORT:3306}/${MYSQL_SERVICE_DB_NAME}?${MYSQL_SERVICE_DB_PARAM:characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false}\n\n\u539f\u914d\u7f6e\ndb.user=${MYSOL SERVICE USER}\ndb.password=${MYSOL SERVICE PASSWORD}\n\u4fee\u6539\u540e\u914d\u7f6e\ndb.user=root\ndb.password=123456\n\u53e6\u4e00\u79cd\u5199\u6cd5\ndb.user=${MYSOL SERVICE USER:root}\ndb.password=${MYSOL SERVICE PASSWORD:123456}\n\n\u6700\u597d\u52a0\u4e0a\uff0c\u5f00\u542f\u767b\u5f55\u3002\u542f\u52a8nacos1.4.6\u7248\u672c\u540e\uff0c\u542f\u52a8\u53c2\u6570\u6ca1\u6709\u52a0 -e NACOS_AUTH_ENABLE=true \u73af\u5883\u53d8\u91cf\u3002\u9ed8\u8ba4\u597d\u50cf\u4e0d\u5b58\u5728\u767b\u5f55\u73af\u8282\n\u6700\u540e\u4e09\u4e2a\u914d\u7f6e\u7684\u503c\u53ef\u4ee5\u81ea\u5b9a\u4e49\nnacos.core.auth.enabled=true\nnacos.core.auth.default.token.secret.key=${NACOS_AUTH_TOKEN:NjZhiougtMhe2EyNGMxNjNkNTgzY2ExNjAwYTZjMmNlZjczMjgyY2ZkZDcxMzBjNzM5ZjlkNmFhM2JlZTM2Mw==}\nnacos.core.auth.server.identity.key=${NACOS_AUTH_IDENTITY_KEY:nacosKey}\nnacos.core.auth.server.identity.value=${NACOS_AUTH_IDENTITY_VALUE:nacosValue}\n'})}),"\n",(0,c.jsxs)(n.admonition,{type:"warning",children:[(0,c.jsx)(n.p,{children:"\u6700\u540e\u4e00\u6bb5\u914d\u7f6enacos.core.auth.default.token.secret.key\u5fc5\u987b\u7ed9\u4e00\u4e2abase64\u7f16\u7801\u7684key(\u600e\u4e48\u751f\u6210\u90fd\u884c)\u3002\u5fc5\u987b\u4fdd\u8bc1>32\u4f4d"}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"1. openssl rand -hex 32 # \u83b7\u53d6\u79d8\u94a5\n2. \u518d\u53bb\u5728\u7ebfBase64 \u7f16\u7801\n"})})]}),"\n",(0,c.jsx)(n.h2,{id:"mysql\u4e2d\u5173\u4e8enacos\u7684\u811a\u672c",children:"Mysql\u4e2d\u5173\u4e8enacos\u7684\u811a\u672c"}),"\n",(0,c.jsxs)(n.p,{children:["\u76f4\u63a5\u8d34\u4e00\u4e2a\u5b98\u65b9\u5730\u5740: ",(0,c.jsx)(n.a,{href:"https://github.com/alibaba/nacos/blob/master/distribution/conf/mysql-schema.sql",children:"Nacos\u5b98\u65b9sql\u811a\u672c"})]}),"\n",(0,c.jsx)("br",{}),"\n",(0,c.jsx)(n.p,{children:"\u6267\u884c\u5b8c\u811a\u672c\u540e,\u9700\u8981\u518d\u624b\u52a8\u6dfb\u52a0\u7528\u6237~\u9ed8\u8ba4\u8d26\u6237\u5bc6\u7801\u5c31\u662f nacos"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"INSERT INTO users (username, password, enabled) VALUES ('nacos', '$2a$10$EuWPZHzz32dJN7jexM34MOeYirDdFAZm2kuWj7VEOJhhZkDrxfvUu', TRUE);\nINSERT INTO roles (username, role) VALUES ('nacos', 'ROLE_ADMIN');\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u542f\u52a8nacos-1",children:"\u542f\u52a8Nacos"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",metastring:"title='\u542f\u52a8nacos'",children:"docker run --name nacos --privileged=true --restart=always -p 8848:8848 -p 9848:9848 -p 9849:9849 -e MODE=standalone -v /usr/local/dockerdata/nacos/bin/bin:/home/nacos/bin -v /usr/local/dockerdata/nacos/logs/logs:/home/nacos/logs -v /usr/local/dockerdata/nacos/conf/conf:/home/nacos/conf -v /usr/local/dockerdata/nacos/data/data:/home/nacos/data -d nacos/nacos-server:v1.4.6\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u90e8\u5206\u547d\u4ee4\u8be6\u89e3",children:"\u90e8\u5206\u547d\u4ee4\u8be6\u89e3"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://nacos.io/zh-cn/docs/v2/quickstart/quick-start-docker.html",children:"Nacos \u5b98\u7f51Docker\u76f8\u5173\u53c2\u6570"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"-e MODE=standalone \u3010\u5355\u673a\u6a21\u5f0f\u3011"}),"\n",(0,c.jsx)(n.li,{children:"--privileged=true \u6743\u9650\u76f8\u5173"}),"\n",(0,c.jsx)(n.li,{children:"--restart=always \u5bb9\u5668\u505c\u6b62\u81ea\u52a8\u91cd\u542f"}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4ee5\u4e0a\u5b8c\u6210\u540e\uff0c\u5373\u53ef\u8bbf\u95ee: ",(0,c.jsx)(n.a,{href:"https://ip:8848/nacos",children:"https://ip:8848/nacos"})]}),"\n",(0,c.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\u767b\u5f55\u65f6\u9047\u5230\u4e00\u76f4\u62a5\u9519\u8d26\u53f7\u5bc6\u7801\u9519\u8bef\n",(0,c.jsx)(n.strong,{children:"\u5982\u679c\u4e0d\u914d\u7f6e\u8fd9\u4e2a\uff0c\u5373\u4f7f\u542f\u52a8\u6210\u529f\uff0csql\u811a\u672c\u4e5f\u6709\u4e86\uff0c\u7528\u6237\u4e5f\u521b\u5efa\u4e86\uff01\u62b1\u6b49 \u8fd8\u662f\u7ed9\u4f60\u62a5\u9519 \u8d26\u6237\u6216\u5bc6\u7801\u9519\u8bef,\u7ed9\u51fa\u4ee5\u4e0b\u62a5\u9519"})]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"caused: The specified key byte array is 0 bits which is not secure enough for any JWT HMAC-SHA algorithm.The JWT JWA Specification(RFC 7518,\nSection 3.2)states that keys used with HMAC-SHA algorithms MUST have a size>=256 bits(the key size must be greater than or equal to the hash output size).Consider \nusing the io.jsonwebtoken.security.Keys #secretKeyFor(SignatureAlgorithm)method to create a key guaranteed to be secure enough for your preferred HMAC-SHA algorithm.\n# See https: //tools.ietf.org/html/rfc7518#section-3.2 for more information.;\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5177\u4f53\u539f\u56e0\u53ef\u80fd\u54ea\u5730\u65b9\u9ed8\u8ba4\u5f00\u4e86\u9274\u6743~~~\u5177\u4f53Nacos\u793e\u533a\u673a\u5668\u4eba\u56de\u7b54:",(0,c.jsx)("br",{})]}),"\n",(0,c.jsxs)(n.admonition,{type:"note",children:[(0,c.jsx)(n.p,{children:"\u6839\u636e\u4f60\u7684\u63cf\u8ff0\u548c\u63d0\u4f9b\u7684\u4fe1\u606f\uff0cNacos\u767b\u5f55\u63d0\u793a\u8d26\u53f7\u5bc6\u7801\u9519\u8bef\uff0c\u5e76\u4e14\u63d0\u5230\u9700\u8981\u914d\u7f6enacos.core.auth.default.token.secret.key\uff0c\u8fd9\u901a\u5e38\u610f\u5473\u7740Nacos\u670d\u52a1\u7aef\u5df2\u7ecf\u542f\u7528\u4e86\u9274\u6743\u673a\u5236\uff0c\u5373\u4f7f\u4f60\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u6ca1\u6709\u76f4\u63a5\u770b\u5230nacos.core.auth.enabled=true\u8fd9\u4e00\u884c\u914d\u7f6e\uff0c\u4e5f\u53ef\u80fd\u662f\u9ed8\u8ba4\u5f00\u542f\u6216\u8005\u901a\u8fc7\u5176\u4ed6\u65b9\u5f0f\uff08\u5982\u9ed8\u8ba4\u914d\u7f6e\u3001\u73af\u5883\u53d8\u91cf\u7b49\uff09\u542f\u7528\u4e86\u9274\u6743\u3002Nacos 1.4.6\u7248\u672c\u9ed8\u8ba4\u9274\u6743\u884c\u4e3a\u53ef\u80fd\u4f1a\u4f9d\u8d56\u4e8e\u7279\u5b9a\u7684\u914d\u7f6e\u6216\u73af\u5883\u53d8\u91cf\u72b6\u6001\u3002\n\u5206\u6790\u539f\u56e0\uff1a\n\u9274\u6743\u9ed8\u8ba4\u5f00\u542f\uff1a\u90e8\u5206\u7248\u672c\u7684Nacos\u53ef\u80fd\u9ed8\u8ba4\u5f00\u542f\u4e86\u9274\u6743\u529f\u80fd\uff0c\u5c24\u5176\u662f\u5f53\u4f60\u4f7f\u7528Docker\u955c\u50cf\u90e8\u7f72\u65f6\uff0c\u73af\u5883\u53d8\u91cf\u7684\u8bbe\u7f6e\u53ef\u80fd\u4f1a\u9690\u5f0f\u5730\u542f\u7528\u9274\u6743\u3002\n\u5bc6\u94a5\u672a\u914d\u7f6e\uff1a\u767b\u5f55\u5931\u8d25\u63d0\u793a\u9700\u8981\u914d\u7f6enacos.core.auth.default.token.secret.key\uff0c\u8868\u660e\u670d\u52a1\u7aef\u9274\u6743\u8fc7\u7a0b\u4e2d\u9700\u8981\u4e00\u4e2a\u6709\u6548\u7684JWT\u5bc6\u94a5\u6765\u9a8c\u8bc1\u5ba2\u6237\u7aef\u8bf7\u6c42\uff0c\u800c\u5f53\u524d\u53ef\u80fd\u4f7f\u7528\u7684\u662f\u9ed8\u8ba4\u6216\u65e0\u6548\u7684\u5bc6\u94a5\u3002\n\u8eab\u4efd\u8ba4\u8bc1\u4fe1\u606f\uff1a\u9664\u4e86\u5bc6\u94a5\u5916\uff0c\u670d\u52a1\u7aef\u8eab\u4efd\u8bc6\u522b\u4fe1\u606f\uff08nacos.core.auth.server.identity.key \u548c nacos.core.auth.server.identity.value\uff09\u4e5f\u9700\u8981\u6b63\u786e\u914d\u7f6e\uff0c\u4ee5\u786e\u4fdd\u96c6\u7fa4\u5185\u90e8\u901a\u4fe1\u5b89\u5168\u3002"}),(0,c.jsx)("br",{}),(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u89e3\u51b3\u6b65\u9aa4\uff1a"})}),(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u6b65\u9aa41\uff1a\u914d\u7f6eJWT\u5bc6\u94a5\n\u76ee\u7684\uff1a\u786e\u4fdd\u9274\u6743\u4f7f\u7528\u7684JWT\u5bc6\u94a5\u6709\u6548\u4e14\u4e0e\u96c6\u7fa4\u4e2d\u6240\u6709\u8282\u70b9\u4e00\u81f4\u3002\n\u64cd\u4f5c\uff1a\u5728Nacos\u7684\u914d\u7f6e\u6587\u4ef6\uff08\u5982application.properties\uff09\u4e2d\u6dfb\u52a0\u6216\u4fee\u6539\u4ee5\u4e0b\u914d\u7f6e\uff1a\nnacos.core.auth.default.token.secret.key=YOUR_BASE64_ENCODED_SECRET_KEY"}),"\n"]}),(0,c.jsx)(n.p,{children:"\u66ff\u6362YOUR_BASE64_ENCODED_SECRET_KEY\u4e3a\u4e00\u4e2a\u81f3\u5c1132\u5b57\u7b26\u957f\u7684Base64\u7f16\u7801\u5b57\u7b26\u4e32\u4f5c\u4e3a\u5bc6\u94a5\u3002"}),(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u6b65\u9aa42\uff1a\u914d\u7f6e\u670d\u52a1\u7aef\u8eab\u4efd\u8bc6\u522b\u4fe1\u606f\uff08\u5982\u6709\u5fc5\u8981\uff09\n\u76ee\u7684\uff1a\u786e\u4fdd\u96c6\u7fa4\u95f4\u901a\u4fe1\u5b89\u5168\u3002\n\u64cd\u4f5c\uff1a\nnacos.core.auth.server.identity.key=YOUR_SERVER_IDENTITY_KEY\nnacos.core.auth.server.identity.value=YOUR_SERVER_IDENTITY_VALUE"}),"\n"]}),(0,c.jsx)(n.p,{children:"\u8bf7\u66ff\u6362YOUR_SERVER_IDENTITY_KEY\u548cYOUR_SERVER_IDENTITY_VALUE\u4e3a\u9002\u5f53\u7684\u503c\u3002"}),(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u6b65\u9aa43\uff1a\u786e\u8ba4\u9274\u6743\u72b6\u6001\u4e0e\u91cd\u542f\u670d\u52a1\n\u76ee\u7684\uff1a\u786e\u8ba4\u9274\u6743\u662f\u5426\u5df2\u5f00\u542f\u53ca\u4f7f\u914d\u7f6e\u751f\u6548\u3002\n\u64cd\u4f5c\uff1a\u5c3d\u7ba1\u901a\u5e38\u4fee\u6539\u9274\u6743\u76f8\u5173\u914d\u7f6e\u4e0d\u9700\u8981\u91cd\u542fNacos\u670d\u52a1\uff0c\u4f46\u9274\u4e8e\u4f60\u662f\u901a\u8fc7Docker\u90e8\u7f72\u7684\uff0c\u53ef\u80fd\u9700\u8981\u91cd\u542fDocker\u5bb9\u5668\u4ee5\u786e\u4fdd\u65b0\u914d\u7f6e\u751f\u6548\u3002\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u91cd\u542f\u5bb9\u5668\uff08\u5047\u8bbe\u4f60\u5df2\u7ecf\u66f4\u65b0\u4e86\u76f8\u5e94\u7684\u73af\u5883\u53d8\u91cf\uff09\uff1a\ndocker restart CONTAINER_NAME_OR_ID"}),"\n"]}),(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u89e3\u91ca\uff1a"}),"\n\u4ee5\u4e0a\u6b65\u9aa4\u4e3b\u8981\u662f\u4e3a\u4e86\u786e\u4fddNacos\u9274\u6743\u673a\u5236\u80fd\u591f\u6b63\u5e38\u5de5\u4f5c\uff0c\u907f\u514d\u56e0\u5bc6\u94a5\u7f3a\u5931\u6216\u4e0d\u5339\u914d\u5bfc\u81f4\u7684\u767b\u5f55\u5931\u8d25\u3002\u914d\u7f6eJWT\u5bc6\u94a5\u662f\u6838\u5fc3\u6b65\u9aa4\uff0c\u56e0\u4e3a\u8fd9\u662f\u9a8c\u8bc1\u7528\u6237\u8eab\u4efd\u7684\u57fa\u7840\u3002\u540c\u65f6\uff0c\u6b63\u786e\u7684\u670d\u52a1\u7aef\u8eab\u4efd\u8bc6\u522b\u4fe1\u606f\u914d\u7f6e\u5bf9\u4e8e\u7ef4\u62a4\u96c6\u7fa4\u5185\u90e8\u5b89\u5168\u901a\u4fe1\u4e5f\u662f\u81f3\u5173\u91cd\u8981\u7684\u3002\u91cd\u542f\u5bb9\u5668\u662f\u4e3a\u4e86\u786e\u4fdd\u6240\u6709\u66f4\u6539\u751f\u6548\uff0c\u7279\u522b\u662f\u5728\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u8fdb\u884c\u914d\u7f6e\u53d8\u66f4\u7684\u60c5\u51b5\u4e0b\u3002"]})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"\u53e8\u53e8\u4e00\u5927\u5806\uff0c\u53cd\u6b63\u5c31\u662f\u751f\u6210\u4e2a\u503c\u7ed9\u5b83\u5c31\u884c\uff01\u4ee5\u4e0b\u914d\u7f6e \u914d\u7f6e\u4e0a\u5c31\u884c\uff01\nnacos.core.auth.enabled=true\nnacos.core.auth.default.token.secret.key=${NACOS_AUTH_TOKEN:NjZhiougtMhe2EyNGMxNjNkNTgzY2ExNjAwYTZjMmNlZjczMjgyY2ZkZDcxMzBjNzM5ZjlkNmFhM2JlZTM2Mw==}\nnacos.core.auth.server.identity.key=${NACOS_AUTH_IDENTITY_KEY:nacosKey}\nnacos.core.auth.server.identity.value=${NACOS_AUTH_IDENTITY_VALUE:nacosValue}\n"})}),"\n",(0,c.jsxs)(n.ol,{start:"2",children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u914d\u7f6e\u6587\u4ef6\u53ef\u4ee5\u4e0d\u52a0nacos.core.auth.enabled=true \u8fd9\u4e2a\u914d\u7f6e"})," ",(0,c.jsx)("br",{}),"\n\u5728 Hare\u4e0b\u8f7d\u4e86\u51e0\u4e2a\u914d\u7f6e\u6587\u4ef6\u540e\uff0c\u53d1\u73b0\u8fd9\u4e2a\u914d\u7f6e\u4e0d\u5b58\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u3002\u4e0d\u52a0\u4e5f\u884c\uff01\n\u4f46\u662f\u5728\u542f\u52a8\u7684\u65f6\u5019 \u9700\u8981\u52a0\u4e0a\u73af\u5883\u53d8\u91cf ",(0,c.jsx)(n.strong,{children:"-e NACOS_AUTH_ENABLE=true"})]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["1.x\u7684\u7248\u672c\u597d\u50cf\u4e0d\u9700\u8981 9848&9849\u4e24\u4e2a\u7aef\u53e3",(0,c.jsx)("br",{}),"\nNacos\u5b98\u7f51\u8bb2\u89e3\u5730\u5740: ",(0,c.jsx)(n.a,{href:"https://nacos.io/docs/v2/upgrading/200-compatibility/",children:"\u5730\u5740"}),(0,c.jsx)("br",{}),"\n",(0,c.jsx)(n.strong,{children:"\u5177\u4f53\u5982\u4e0b\u8bf4\u660e:"})," ",(0,c.jsx)("br",{}),"\nNacos2.0\u7248\u672c\u76f8\u6bd41.X\u65b0\u589e\u4e86gRPC\u7684\u901a\u4fe1\u65b9\u5f0f\uff0c\u56e0\u6b64\u9700\u8981\u589e\u52a02\u4e2a\u7aef\u53e3\u3002\u65b0\u589e\u7aef\u53e3\u662f\u5728\u914d\u7f6e\u7684\u4e3b\u7aef\u53e3(server.port)\u57fa\u7840\u4e0a\uff0c\u8fdb\u884c\u4e00\u5b9a\u504f\u79fb\u91cf\u81ea\u52a8\u751f\u6210\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u7aef\u53e3"}),(0,c.jsx)(n.th,{children:"\u4e0e\u4e3b\u7aef\u53e3\u7684\u504f\u79fb\u91cf"}),(0,c.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"9848"}),(0,c.jsx)(n.td,{children:"1000"}),(0,c.jsx)(n.td,{children:"\u5ba2\u6237\u7aefgRPC\u8bf7\u6c42\u670d\u52a1\u7aef\u7aef\u53e3\uff0c\u7528\u4e8e\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u7aef\u53d1\u8d77\u8fde\u63a5\u548c\u8bf7\u6c42"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"9849"}),(0,c.jsx)(n.td,{children:"1001"}),(0,c.jsx)(n.td,{children:"\u670d\u52a1\u7aefgRPC\u8bf7\u6c42\u670d\u52a1\u7aef\u7aef\u53e3\uff0c\u7528\u4e8e\u670d\u52a1\u95f4\u540c\u6b65\u7b49"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"7848"}),(0,c.jsx)(n.td,{children:"-1000"}),(0,c.jsx)(n.td,{children:"Jraft\u8bf7\u6c42\u670d\u52a1\u7aef\u7aef\u53e3\uff0c\u7528\u4e8e\u5904\u7406\u670d\u52a1\u7aef\u95f4\u7684Raft\u76f8\u5173\u8bf7\u6c42"})]})]})]}),"\n",(0,c.jsx)(n.p,{children:"\u82e5\u7248\u672c\u662f2.0\u7248\u672c\u7684\uff0c\u9700\u8981\u52a0\u4e0a -p 9848:9848 -p 9849:9849 \u4e24\u4e2a\u7aef\u53e3\u53f7"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",metastring:"title='\u542f\u52a8nacos'",children:"docker run --name nacos --privileged=true --restart=always -p 8848:8848 -p 9848:9848 -p 9849:9849 -e MODE=standalone -v /usr/local/dockerdata/nacos/bin/bin:/home/nacos/bin -v /usr/local/dockerdata/nacos/logs/logs:/home/nacos/logs -v /usr/local/dockerdata/nacos/conf/conf:/home/nacos/conf -v /usr/local/dockerdata/nacos/data/data:/home/nacos/data -d nacos/nacos-server:v1.4.6\n"})}),"\n",(0,c.jsx)("br",{}),"\n",(0,c.jsx)(n.p,{children:"\u7ecf\u8fc7\u6d4b\u8bd5Nacos2.1.x\u7684\u7248\u672c\uff0c\u6839\u636e\u6d41\u7a0b\u8d70\u4e0b\u6765\uff0c\u5b8c\u5168\u6ca1\u95ee\u9898\uff01"})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}},9313:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>a});var c=s(5271);const r={},o=c.createContext(r);function a(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);