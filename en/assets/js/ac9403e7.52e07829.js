"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[7404],{7941:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>v,frontMatter:()=>t,metadata:()=>c,toc:()=>u});var l=a(2676),r=a(9313),s=a(7660),i=a(7389);const t={id:"redisString",title:"String\u6570\u636e\u7ed3\u6784",description:"\u4f60\u5c06\u4e86\u89e3\u5230redis\u7684String\u6570\u636e\u7ed3\u6784\u64cd\u4f5c"},d="String\u6570\u636e\u7c7b\u578b",c={id:"redis/\u57fa\u7840\u547d\u4ee4/redisString",title:"String\u6570\u636e\u7ed3\u6784",description:"\u4f60\u5c06\u4e86\u89e3\u5230redis\u7684String\u6570\u636e\u7ed3\u6784\u64cd\u4f5c",source:"@site/docs/redis/\u57fa\u7840\u547d\u4ee4/RedisString.md",sourceDirName:"redis/\u57fa\u7840\u547d\u4ee4",slug:"/redis/\u57fa\u7840\u547d\u4ee4/redisString",permalink:"/en/docs/redis/\u57fa\u7840\u547d\u4ee4/redisString",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1741444438e3,frontMatter:{id:"redisString",title:"String\u6570\u636e\u7ed3\u6784",description:"\u4f60\u5c06\u4e86\u89e3\u5230redis\u7684String\u6570\u636e\u7ed3\u6784\u64cd\u4f5c"},sidebar:"ContainersAndMiddleware",previous:{title:"Redis",permalink:"/en/docs/category/redis-1"},next:{title:"List\u6570\u636e\u7ed3\u6784",permalink:"/en/docs/redis/\u57fa\u7840\u547d\u4ee4/redisList"}},o={},u=[{value:"String\u8ba4\u8bc6",id:"string\u8ba4\u8bc6",level:2},{value:"String\u76f8\u5173\u547d\u4ee4",id:"string\u76f8\u5173\u547d\u4ee4",level:2},{value:"SET \u547d\u4ee4",id:"set-\u547d\u4ee4",level:3},{value:"<code>SET KEY VALUE</code>",id:"set-key-value",level:4},{value:"<code>SET KEY VALUE NX</code>",id:"set-key-value-nx",level:4},{value:"<code>SET KEY VALUE XX</code>",id:"set-key-value-xx",level:4},{value:"<code>SET KEY VALUE GET</code>",id:"set-key-value-get",level:4},{value:"<code>SET KEY VALUE EX</code>",id:"set-key-value-ex",level:4},{value:"\u6279\u5904\u7406\u64cd\u4f5c",id:"\u6279\u5904\u7406\u64cd\u4f5c",level:3},{value:"<code>MSET</code>",id:"mset",level:4},{value:"<code>MSETNX \u540c nx</code>",id:"msetnx-\u540c-nx",level:4},{value:"<code>MGET \u6279\u5904\u7406\u83b7\u53d6</code>",id:"mget-\u6279\u5904\u7406\u83b7\u53d6",level:4},{value:"\u8303\u56f4\u5904\u7406",id:"\u8303\u56f4\u5904\u7406",level:3},{value:"<code>SETRANGE</code>",id:"setrange",level:4},{value:"<code>GETRANGE</code>",id:"getrange",level:4},{value:"\u8ba1\u6570\u5668\u76f8\u5173",id:"\u8ba1\u6570\u5668\u76f8\u5173",level:3},{value:"<code>INCR</code>",id:"incr",level:4},{value:"<code>INCRBY</code>",id:"incrby",level:4},{value:"<code>DECR</code>",id:"decr",level:4},{value:"<code>DECRBY</code>",id:"decrby",level:4}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"string\u6570\u636e\u7c7b\u578b",children:"String\u6570\u636e\u7c7b\u578b"}),"\n",(0,l.jsx)(n.h2,{id:"string\u8ba4\u8bc6",children:"String\u8ba4\u8bc6"}),"\n",(0,l.jsxs)(n.admonition,{title:"\u603b\u7ed3\u5b98\u65b9",type:"note",children:[(0,l.jsxs)(n.p,{children:["Redis strings store sequences of bytes, including text, serialized objects, and binary arrays. As such, strings are the simplest type of value you can associate with a Redis key. They're often used for caching\nRedis\u7684String\u6570\u636e\u7c7b\u578b\u53ef\u4ee5\u5b58\u50a8\u5b57\u8282\u5e8f\u5217\uff0c\u6587\u672c\uff0c\u5e8f\u5217\u5316\u5bf9\u8c61\uff0c\u4e8c\u8fdb\u5236\u6570\u7ec4\u7b49\u3002",(0,l.jsx)("br",{})]}),(0,l.jsxs)(n.p,{children:["Values can be strings (including binary data) of every kind\uff0cA value can't be bigger than 512 MB.",(0,l.jsx)("br",{}),"\n\u503c\u53ef\u4ee5\u662f\u4efb\u4f55\u5b57\u7b26\u4e32\uff0c\u6570\u503c\u5927\u5c0f\u4e0d\u80fd\u5927\u4e8e512M"]})]}),"\n",(0,l.jsx)(n.h2,{id:"string\u76f8\u5173\u547d\u4ee4",children:"String\u76f8\u5173\u547d\u4ee4"}),"\n",(0,l.jsx)(n.h3,{id:"set-\u547d\u4ee4",children:"SET \u547d\u4ee4"}),"\n",(0,l.jsxs)(n.admonition,{title:"set \u683c\u5f0f",type:"tip",children:[(0,l.jsx)(n.p,{children:"SET key value [NX | XX] [GET] [EX seconds | PX milliseconds | EXAT unix-time-seconds | PXAT unix-time-milliseconds | KEEPTTL]"}),(0,l.jsx)(n.p,{children:"Options"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"1. NX -- \u4ec5\u8bbe\u7f6e\u5c1a\u672a\u5b58\u5728\u7684key\u3002\n2. XX -- \u8bbe\u7f6e\u5df2\u5b58\u5728\u7684key\uff0c\u76f8\u5f53\u4e8e\u66ff\u6362\u4e86\u539f\u5148\u7684\u503c\u3002\n3. GET -- \u8fd4\u56de\u65e7\u503c\uff0c\u65b0\u503c\u66ff\u6362\u65e7\u503c\u3002\n4. EX -- \u8bbe\u7f6e\u6307\u5b9a\u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u4ee5\u79d2\uff08\u6b63\u6574\u6570\uff09\u4e3a\u5355\u4f4d\u3002\n5. PX -- \u8bbe\u7f6e\u6307\u5b9a\u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\uff08\u6b63\u6574\u6570\uff09\u3002\n6. KEEPTTL -- \u4fdd\u7559\u4e0ekey\u76f8\u5173\u7684\u5b58\u6d3b\u65f6\u95f4\u3002\n"})})]}),"\n",(0,l.jsx)(n.h4,{id:"set-key-value",children:(0,l.jsx)(n.code,{children:"SET KEY VALUE"})}),"\n",(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(i.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:" 127.0.0.1:6379> set k1:1 v1\n OK\n"})})}),(0,l.jsx)(i.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'    redisTemplate.opsForValue().set("k1:1","v1");\n'})})})]}),"\n",(0,l.jsx)(n.h4,{id:"set-key-value-nx",children:(0,l.jsx)(n.code,{children:"SET KEY VALUE NX"})}),"\n",(0,l.jsx)(n.p,{children:"nx: \u4ec5\u8bbe\u7f6e\u4e0d\u5b58\u5728\u7684key"}),"\n",(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(i.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:" # k1:1 \u8fd9\u4e2akey\u5df2\u7ecf\u5b58\u5728\n 127.0.0.1:6379> set k1:1 v2 nx\n (nil)\n"})})}),(0,l.jsx)(i.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'    // \u8fd4\u56defalse\n    redisTemplate.opsForValue().setIfAbsent("k1:1", "v2")\n'})})})]}),"\n",(0,l.jsx)(n.h4,{id:"set-key-value-xx",children:(0,l.jsx)(n.code,{children:"SET KEY VALUE XX"})}),"\n",(0,l.jsx)(n.p,{children:"xx: \u8bbe\u7f6e\u5df2\u5b58\u5728\u7684key\uff0c\u76f8\u5f53\u4e8e\u66ff\u6362\u4e86\u539f\u5148\u7684\u503c"}),"\n",(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(i.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:' # k1:1 \u8fd9\u4e2akey\u5df2\u7ecf\u5b58\u5728,\u66ff\u6362\u65b0\u503c\u3002\n 127.0.0.1:6379> set k1:1 vvvw xx\n OK\n 127.0.0.1:6379> get k1:1\n "vvvw"\n'})})}),(0,l.jsx)(i.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'    // \u8fd4\u56detrue\uff0c\u65b0\u503c\u66ff\u6362\u65e7\u503c\n    redisTemplate.opsForValue().setIfPresent("k1:1", "v200"\n'})})})]}),"\n",(0,l.jsx)(n.h4,{id:"set-key-value-get",children:(0,l.jsx)(n.code,{children:"SET KEY VALUE GET"})}),"\n",(0,l.jsx)(n.p,{children:"get: \u8fd4\u56de\u65e7\u7684\u503c\uff0c\u8bbe\u7f6e\u65b0\u7684\u503c"}),"\n",(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(i.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'# k1:1 \u8fd9\u4e2akey\u5df2\u7ecf\u5b58\u5728,\u66ff\u6362\u65b0\u503c\u3002\n127.0.0.1:6379> set k1:1 123 get\nv200\n127.0.0.1:6379> get k1:1\n"123"\n'})})}),(0,l.jsx)(i.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'// \u8fd4\u56de\u65e7\u503c\uff0c\u65b0\u503c\u66ff\u6362\u65e7\u503c\nredisTemplate.opsForValue().getAndSet("k1:1", "v200456")\n'})})})]}),"\n",(0,l.jsx)(n.h4,{id:"set-key-value-ex",children:(0,l.jsx)(n.code,{children:"SET KEY VALUE EX"})}),"\n",(0,l.jsx)(n.p,{children:"EX: \u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2"}),"\n",(0,l.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"warning",children:(0,l.jsxs)(n.p,{children:["\u5f53\u6211\u4eec\u8bbe\u7f6eex\u540e\uff0c\u91cd\u65b0 set key value\uff0c\u6b64\u65f6\u8fc7\u671f\u65f6\u95f4\u5219\u662f\u6c38\u4e45",(0,l.jsx)("br",{}),"\n\u5f53\u7b2c\u4e8c\u6b21set\u7684\u65f6\u5019\uff0c\u6700\u540e\u52a0\u4e00\u4e2a\u547d\u4ee4keepttl: set key value keepttl"]})}),"\n",(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(i.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    # \u8bbe\u7f6ek2:2 \u4e3a10\u79d2\n    127.0.0.1:6379> set k2:2 v3 ex 10\n    OK\n    # \u8fd8\u52696\u79d2\n    127.0.0.1:6379> ttl k2:2\n    (integer) 6\n"})})}),(0,l.jsx)(i.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'redisTemplate.opsForValue().set("k2:2","v2",10, TimeUnit.SECONDS);\n'})})})]}),"\n",(0,l.jsx)(n.h3,{id:"\u6279\u5904\u7406\u64cd\u4f5c",children:"\u6279\u5904\u7406\u64cd\u4f5c"}),"\n",(0,l.jsx)(n.h4,{id:"mset",children:(0,l.jsx)(n.code,{children:"MSET"})}),"\n",(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(i.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:" 127.0.0.1:6379> mset k1 v1 k2 v2\n OK\n"})})}),(0,l.jsx)(i.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'    Map<String,String> mset = new HashMap<>();\n    mset.put("kq","vq");\n    mset.put("kq1","vq1");\n    redisTemplate.opsForValue().multiSet(mset);\n'})})})]}),"\n",(0,l.jsx)(n.h4,{id:"msetnx-\u540c-nx",children:(0,l.jsx)(n.code,{children:"MSETNX \u540c nx"})}),"\n",(0,l.jsx)(n.p,{children:"\u82e5\u662f\u6709\u7684key\u539f\u5148\u5b58\u5728\uff0c\u6709\u7684key\u672c\u8eab\u4e0d\u5b58\u5728 \u4f7f\u7528MSETNX\u4e0d\u4f1a\u6210\u529f"}),"\n",(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(i.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:" 127.0.0.1:6379> msetnx k1 v1 k2 v2\n OK\n"})})}),(0,l.jsx)(i.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'    Map<String,String> mset = new HashMap<>();\n    mset.put("kq","vq");\n    mset.put("kq1","vq1");\n    redisTemplate.opsForValue().multiSetIfAbsent(mset);\n'})})})]}),"\n",(0,l.jsx)(n.h4,{id:"mget-\u6279\u5904\u7406\u83b7\u53d6",children:(0,l.jsx)(n.code,{children:"MGET \u6279\u5904\u7406\u83b7\u53d6"})}),"\n",(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(i.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:" 127.0.0.1:6379> msetnx k1 v1 k2 v2\n OK\n"})})}),(0,l.jsx)(i.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'    Map<String,String> mset = new HashMap<>();\n    mset.put("kq","vq");\n    mset.put("kq1","vq1");\n    redisTemplate.opsForValue().multiSetIfAbsent(mset);\n'})})})]}),"\n",(0,l.jsx)(n.h3,{id:"\u8303\u56f4\u5904\u7406",children:"\u8303\u56f4\u5904\u7406"}),"\n",(0,l.jsx)(n.h4,{id:"setrange",children:(0,l.jsx)(n.code,{children:"SETRANGE"})}),"\n",(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(i.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:' 127.0.0.1:6379> set k1 v1\n OK\n 127.0.0.1:6379> setrange k1 2 hello\n (integer) 7\n 127.0.0.1:6379> get k1\n "v1hello"\n'})})}),(0,l.jsx)(i.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'   // \u6309\u7167\u504f\u79fb\u91cf \u4fee\u6539\n   redisTemplate.opsForValue().set("k2","kk",2);\n'})})})]}),"\n",(0,l.jsx)(n.h4,{id:"getrange",children:(0,l.jsx)(n.code,{children:"GETRANGE"})}),"\n",(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(i.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:' # 0 ~ -1 \u67e5\u51fa\u6765\u5168\u90e8\n 127.0.0.1:6379> getrange k1 0 -1\n "v1kkelo"\n'})})}),(0,l.jsx)(i.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'   redisTemplate.opsForValue().get("k1",0,3);\n'})})})]}),"\n",(0,l.jsx)(n.h3,{id:"\u8ba1\u6570\u5668\u76f8\u5173",children:"\u8ba1\u6570\u5668\u76f8\u5173"}),"\n",(0,l.jsxs)(n.admonition,{title:"\u603b\u7ed3\u5b98\u65b9",type:"note",children:[(0,l.jsx)(n.p,{children:"Even if strings are the basic values of Redis, there are interesting operations you can perform with them. For instance, one is atomic increment:\n\u5373\u4f7f\u5b57\u7b26\u4e32\u662f Redis \u7684\u57fa\u672c\u503c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5bf9\u5b83\u4eec\u6267\u884c\u4e00\u4e9b\u6709\u8da3\u7684\u64cd\u4f5c\u3002 \u4f8b\u5982\uff0c\u539f\u5b50\u589e\u91cf\u5c31\u662f\u5176\u4e2d\u4e4b\u4e00\uff1a"}),(0,l.jsx)(n.p,{children:'What does it mean that INCR is atomic? That even multiple clients issuing INCR against the same key will never enter into a race condition. For instance, it will never happen that client 1 reads "10", client 2 reads "10" at the same time, both increment to 11, and set the new value to 11. The final value will always be 12 and the read-increment-set operation is performed while all the other clients are not executing a command at the same time.\nINCR \u539f\u5b50\u6027\u662f\u4ec0\u4e48\u610f\u601d\uff1f \u4e5f\u5c31\u662f\u8bf4\uff0c\u5373\u4f7f\u591a\u4e2a\u5ba2\u6237\u7aef\u5bf9\u540c\u4e00\u952e\u503c\u53d1\u51fa INCR\uff0c\u4e5f\u4e0d\u4f1a\u51fa\u73b0\u7ade\u8d5b\u6761\u4ef6\u3002 \u4f8b\u5982\uff0c\u5ba2\u6237\u7aef 1 \u8bfb\u53d6 "10"\uff0c\u5ba2\u6237\u7aef 2 \u540c\u65f6\u8bfb\u53d6 "10"\uff0c\u7136\u540e\u90fd\u9012\u589e\u5230 11\uff0c\u5e76\u5c06\u65b0\u503c\u8bbe\u7f6e\u4e3a 11\u3002 \u6700\u7ec8\u503c\u5c06\u59cb\u7ec8\u662f 12\uff0c\u800c\u4e14\u5728\u6267\u884c\u8bfb\u53d6-\u9012\u589e-\u8bbe\u7f6e\u64cd\u4f5c\u65f6\uff0c\u6240\u6709\u5176\u4ed6\u5ba2\u6237\u7aef\u4e0d\u4f1a\u540c\u65f6\u6267\u884c\u547d\u4ee4\u3002'}),(0,l.jsx)(n.p,{children:"\u6240\u4ee5\u8bf4\u4ee5\u4e0b\u64cd\u4f5c\u5c31\u662f\u539f\u5b50\u6027\u64cd\u4f5c\uff0c\u4e5f\u8bf4\u660e\u5b83\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3010\u6ce8\u610f\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u4ee3\u7801\u7b49\u5c42\u9762\u4fdd\u8bc1\u7ebf\u7a0b\u5b89\u5168\u3011"})]}),"\n",(0,l.jsx)(n.h4,{id:"incr",children:(0,l.jsx)(n.code,{children:"INCR"})}),"\n",(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(i.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:" # \u6bcf\u6b21\u9012\u589e1\n 127.0.0.1:6379> set k1 10\n OK\n 127.0.0.1:6379> incr k1\n (integer) 11\n 127.0.0.1:6379> incr k1\n (integer) 12\n"})})}),(0,l.jsx)(i.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'    redisTemplate.opsForValue().set("ll",10);\n    redisTemplate.opsForValue().increment("ll");\n'})})})]}),"\n",(0,l.jsx)(n.h4,{id:"incrby",children:(0,l.jsx)(n.code,{children:"INCRBY"})}),"\n",(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(i.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:" # \u8303\u56f4\u9012\u589e\n127.0.0.1:6379> incr k1\n (integer) 14\n 127.0.0.1:6379> incrby k1 10\n (integer) 24\n"})})}),(0,l.jsx)(i.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'    redisTemplate.opsForValue().set("ll",10);\n    redisTemplate.opsForValue().increment("ll"\uff0c10);\n'})})})]}),"\n",(0,l.jsx)(n.h4,{id:"decr",children:(0,l.jsx)(n.code,{children:"DECR"})}),"\n",(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(i.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:" # \u6bcf\u6b21\u9012\u51cf1\n 127.0.0.1:6379> decr k1\n (integer) 23\n"})})}),(0,l.jsx)(i.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'    redisTemplate.opsForValue().set("ll",10);\n    redisTemplate.opsForValue().decrement("ll");    \n'})})})]}),"\n",(0,l.jsx)(n.h4,{id:"decrby",children:(0,l.jsx)(n.code,{children:"DECRBY"})}),"\n",(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(i.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:" # \u8303\u56f4\u9012\u51cf\n 127.0.0.1:6379> decrby k1 10\n (integer) 13\n"})})}),(0,l.jsx)(i.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'    redisTemplate.opsForValue().set("ll",10);\n    redisTemplate.opsForValue().decrement("ll",5);    \n'})})})]})]})}function v(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},7389:(e,n,a)=>{a.d(n,{Z:()=>i});a(5271);var l=a(5341);const r={tabItem:"tabItem_S1wv"};var s=a(2676);function i(e){var n=e.children,a=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:a,children:n})}},7660:(e,n,a)=>{a.d(n,{Z:()=>E});var l=a(5271),r=a(5341),s=a(5925),i=a(3225),t=a(3680),d=a(9779),c=a(8105),o=a(8379);function u(e){var n,a;return null!=(n=null==(a=l.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,l.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}function h(e){var n=e.values,a=e.children;return(0,l.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(a);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function v(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,a=void 0!==n&&n,r=e.groupId,s=(0,i.k6)(),t=function(e){var n=e.queryString,a=void 0!==n&&n,l=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=l?l:null}({queryString:a,groupId:r});return[(0,d._X)(t),(0,l.useCallback)((function(e){if(t){var n=new URLSearchParams(s.location.search);n.set(t,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[t,s])]}function x(e){var n,a,r,s,i=e.defaultValue,d=e.queryString,c=void 0!==d&&d,u=e.groupId,x=h(e),j=(0,l.useState)((function(){return function(e){var n,a=e.defaultValue,l=e.tabValues;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!v({value:a,tabValues:l}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+l.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(n=l.find((function(e){return e.default})))?n:l[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:x})})),p=j[0],g=j[1],b=m({queryString:c,groupId:u}),f=b[0],k=b[1],E=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,o.Nk)(n),r=a[0],s=a[1],[r,(0,l.useCallback)((function(e){n&&s.set(e)}),[n,s])]),y=E[0],T=E[1],S=function(){var e=null!=f?f:y;return v({value:e,tabValues:x})?e:null}();return(0,t.Z)((function(){S&&g(S)}),[S]),{selectedValue:p,selectValue:(0,l.useCallback)((function(e){if(!v({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),T(e)}),[k,T,x]),tabValues:x}}var j=a(1640);const p={tabList:"tabList_Bom4",tabItem:"tabItem_vnng"};var g=a(2676);function b(e){var n=e.className,a=e.block,l=e.selectedValue,i=e.selectValue,t=e.tabValues,d=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,o=function(e){var n=e.currentTarget,a=d.indexOf(n),r=t[a].value;r!==l&&(c(n),i(r))},u=function(e){var n,a=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":var l,r=d.indexOf(e.currentTarget)+1;a=null!=(l=d[r])?l:d[0];break;case"ArrowLeft":var s,i=d.indexOf(e.currentTarget)-1;a=null!=(s=d[i])?s:d[d.length-1]}null==(n=a)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:t.map((function(e){var n=e.value,a=e.label,s=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:function(e){return d.push(e)},onKeyDown:u,onClick:o},s,{className:(0,r.Z)("tabs__item",p.tabItem,null==s?void 0:s.className,{"tabs__item--active":l===n}),children:null!=a?a:n}),n)}))})}function f(e){var n=e.lazy,a=e.children,r=e.selectedValue,s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===r}));return i?(0,l.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function k(e){var n=x(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",p.tabList),children:[(0,g.jsx)(b,Object.assign({},n,e)),(0,g.jsx)(f,Object.assign({},n,e))]})}function E(e){var n=(0,j.Z)();return(0,g.jsx)(k,Object.assign({},e,{children:u(e.children)}),String(n))}},9313:(e,n,a)=>{a.d(n,{Z:()=>t,a:()=>i});var l=a(5271);const r={},s=l.createContext(r);function i(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);