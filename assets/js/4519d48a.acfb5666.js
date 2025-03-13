"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[1613],{1214:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>t,metadata:()=>o,toc:()=>u});var l=s(2676),i=s(9313),a=s(7660),r=s(7389);const t={id:"redisList",title:"List\u6570\u636e\u7ed3\u6784",description:"\u4f60\u5c06\u4e86\u89e3\u5230redis\u7684List\u6570\u636e\u7ed3\u6784\u64cd\u4f5c"},d="List\u6570\u636e\u7c7b\u578b",o={id:"redis/\u57fa\u7840\u547d\u4ee4/redisList",title:"List\u6570\u636e\u7ed3\u6784",description:"\u4f60\u5c06\u4e86\u89e3\u5230redis\u7684List\u6570\u636e\u7ed3\u6784\u64cd\u4f5c",source:"@site/docs/redis/\u57fa\u7840\u547d\u4ee4/RedisList.md",sourceDirName:"redis/\u57fa\u7840\u547d\u4ee4",slug:"/redis/\u57fa\u7840\u547d\u4ee4/redisList",permalink:"/docs/redis/\u57fa\u7840\u547d\u4ee4/redisList",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1741863263e3,frontMatter:{id:"redisList",title:"List\u6570\u636e\u7ed3\u6784",description:"\u4f60\u5c06\u4e86\u89e3\u5230redis\u7684List\u6570\u636e\u7ed3\u6784\u64cd\u4f5c"},sidebar:"ContainersAndMiddleware",previous:{title:"String\u6570\u636e\u7ed3\u6784",permalink:"/docs/redis/\u57fa\u7840\u547d\u4ee4/redisString"},next:{title:"Hash\u6570\u636e\u7ed3\u6784",permalink:"/docs/redis/\u57fa\u7840\u547d\u4ee4/redisHash"}},c={},u=[{value:"List\u8ba4\u8bc6",id:"list\u8ba4\u8bc6",level:2},{value:"\u6dfb\u52a0\u5143\u7d20",id:"\u6dfb\u52a0\u5143\u7d20",level:2},{value:"PUSH\u547d\u4ee4",id:"push\u547d\u4ee4",level:3},{value:"<code>LPUSH \u4ece\u5de6\u5f80\u53f3\u63d2\u5165</code>",id:"lpush-\u4ece\u5de6\u5f80\u53f3\u63d2\u5165",level:4},{value:"<code>RPUSH \u4ece\u53f3\u5f80\u5de6\u63d2\u5165</code>",id:"rpush-\u4ece\u53f3\u5f80\u5de6\u63d2\u5165",level:4},{value:"<code>LINSERT \u63d2\u5165\u6307\u5b9a\u4f4d\u7f6e</code>",id:"linsert-\u63d2\u5165\u6307\u5b9a\u4f4d\u7f6e",level:4},{value:"<code>LRANGE \u67e5\u8be2</code>",id:"lrange-\u67e5\u8be2",level:3},{value:"\u5220\u9664\u64cd\u4f5c",id:"\u5220\u9664\u64cd\u4f5c",level:3},{value:"<code>RPOP \u53f3\u5220\u9664</code>",id:"rpop-\u53f3\u5220\u9664",level:4},{value:"<code>LPOP \u5de6\u5220\u9664</code>",id:"lpop-\u5de6\u5220\u9664",level:4},{value:"<code>LLEN \u5143\u7d20\u4e2a\u6570</code>",id:"llen-\u5143\u7d20\u4e2a\u6570",level:3},{value:"<code>LINDEX \u6839\u636e\u4e0b\u6807\u67e5\u8be2\u5143\u7d20</code>",id:"lindex-\u6839\u636e\u4e0b\u6807\u67e5\u8be2\u5143\u7d20",level:3},{value:"<code>RPOPLPUSH6.2.0\u7248\u672c\u5df2\u5e9f\u5f03</code>",id:"rpoplpush620\u7248\u672c\u5df2\u5e9f\u5f03",level:3},{value:"<code>LMOVE6.2.0\u65b0\u51fa\u547d\u4ee4</code>",id:"lmove620\u65b0\u51fa\u547d\u4ee4",level:3},{value:"\u963b\u585e\u76f8\u5173",id:"\u963b\u585e\u76f8\u5173",level:3},{value:"<code>BLPOP</code>",id:"blpop",level:4},{value:"<code>BLMOVE</code>",id:"blmove",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"list\u6570\u636e\u7c7b\u578b",children:"List\u6570\u636e\u7c7b\u578b"}),"\n",(0,l.jsx)(n.h2,{id:"list\u8ba4\u8bc6",children:"List\u8ba4\u8bc6"}),"\n",(0,l.jsxs)(n.admonition,{title:"\u603b\u7ed3\u5b98\u65b9",type:"note",children:[(0,l.jsx)(n.p,{children:"Redis lists are linked lists of string values. Redis lists are frequently used to:"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Implement stacks and queues."}),"\n",(0,l.jsx)(n.li,{children:"Build queue management for background worker systems.\nList\u7684\u6570\u636e\u7c7b\u578b\u662f\u4e00\u4e2a\u53cc\u7aef\u94fe\u8868\u5b9e\u73b0\u65b9\u5f0f\uff0c\u5176\u4e2dLPUSH\u4ece\u5934\u6dfb\u52a0\u5143\u7d20\uff0cRPUSH\u4ece\u5c3e\u6dfb\u52a0\u5143\u7d20\u3002\u5373\u53ef\u4ee5\u7528List\u5b9e\u73b0\u961f\u5217\u7684\u4f7f\u7528\u3002"}),"\n"]}),(0,l.jsxs)(n.p,{children:["Redis lists are implemented via Linked Lists. This means that even if you have millions of elements inside a list, the operation of adding a new element in the head or in the tail of the list is performed in constant time. The speed of adding a new element with the LPUSH command to the head of a list with ten elements is the same as adding an element to the head of list with 10 million elements.\n\u5b98\u65b9\u8bf4\u660e\u4e86\uff0c\u752d\u7ba1\u4f60\u662f100w\u3001100\u8fd8\u662f1000w,\u4f7f\u7528LPUSH\u548cRPUSH\u901f\u5ea6\u76f8\u540c\uff08\u8fd9\u4e0d\u5c31\u662f\u94fe\u8868\u561b\uff09\uff0c\u60f3\u60f3\u770b\u94fe\u8868\u7684\u7279\u6027",(0,l.jsx)(n.a,{href:"/docs/DataStructuresAlgorithms/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E7%BA%BF%E6%80%A7%E7%BB%93%E6%9E%84/linearStructure",children:"\u7ebf\u6027\u8868"}),(0,l.jsx)("br",{})]}),(0,l.jsx)(n.p,{children:"Lists are useful for a number of tasks, two very representative use cases are the following:"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Remember the latest updates posted by users into a social network."}),"\n",(0,l.jsxs)(n.li,{children:["Communication between processes, using a consumer-producer pattern where the producer pushes items into a list, and a consumer (usually a worker) consumes those items and executes actions. Redis has special list commands to make this use case both more reliable and efficient.",(0,l.jsx)("br",{}),"\nList\u5e38\u89c1\u7684\u4f7f\u7528\u573a\u666f:"]}),"\n",(0,l.jsx)(n.li,{children:"\u8bb0\u4f4f\u7528\u6237\u5728\u793e\u4ea4\u7f51\u7edc\u4e2d\u53d1\u5e03\u7684\u6700\u65b0\u66f4\u65b0"}),"\n",(0,l.jsx)(n.li,{children:"\u8fdb\u7a0b\u4e4b\u95f4\u7684\u901a\u4fe1\uff0c\u4f7f\u7528\u6d88\u8d39\u8005-\u751f\u4ea7\u8005\u6a21\u5f0f\uff0c\u5176\u4e2d\u751f\u4ea7\u8005\u5c06\u9879\u76ee\u63a8\u9001\u5230\u5217\u8868\u4e2d\uff0c\u6d88\u8d39\u8005\uff08\u901a\u5e38\u662f Worker\uff09\u6d88\u8d39\u8fd9\u4e9b\u9879\u76ee\u5e76\u6267\u884c\u64cd\u4f5c\u3002 Redis \u63d0\u4f9b\u4e86\u7279\u6b8a\u7684\u5217\u8868\u547d\u4ee4\uff0c\u4f7f\u8fd9\u79cd\u7528\u4f8b\u66f4\u53ef\u9760\u3001\u66f4\u9ad8\u6548\u3002"}),"\n"]}),(0,l.jsx)("br",{}),(0,l.jsxs)(n.p,{children:["\u540c\u65f6\u5b98\u65b9\u7ed9\u51fa\u4f8b\u5b50:",(0,l.jsx)("br",{}),"\nThe popular Twitter social network takes the latest tweets posted by users into Redis lists.\nTo describe a common use case step by step, imagine your home page shows the latest photos published in a photo sharing social network and you want to speedup access."]}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Every time a user posts a new photo, we add its ID into a list with LPUSH."}),"\n",(0,l.jsx)(n.li,{children:"When users visit the home page, we use LRANGE 0 9 in order to get the latest 10 posted items."}),"\n"]}),(0,l.jsx)("br",{}),(0,l.jsx)(n.p,{children:"\u6d41\u884c\u7684 Twitter \u793e\u4ea4\u7f51\u7edc\u4f1a\u5c06\u7528\u6237\u53d1\u5e03\u7684\u6700\u65b0\u63a8\u6587\u653e\u5165 Redis \u5217\u8868\u4e2d\u3002 \u4e3a\u4e86\u9010\u6b65\u63cf\u8ff0\u4e00\u4e2a\u5e38\u89c1\u7684\u7528\u4f8b\uff0c\u60f3\u8c61\u4e00\u4e0b\u4f60\u7684\u4e3b\u9875\u4f1a\u663e\u793a\u7167\u7247\u5206\u4eab\u793e\u4ea4\u7f51\u7edc\u4e2d\u53d1\u5e03\u7684\u6700\u65b0\u7167\u7247\uff0c\u800c\u4f60\u5e0c\u671b\u52a0\u5feb\u8bbf\u95ee\u901f\u5ea6\u3002 \u6bcf\u5f53\u7528\u6237\u53d1\u5e03\u4e00\u5f20\u65b0\u7167\u7247\uff0c\u6211\u4eec\u5c31\u7528 LPUSH \u5c06\u5176 ID \u6dfb\u52a0\u5230\u4e00\u4e2a\u5217\u8868\u4e2d\u3002 \u5f53\u7528\u6237\u8bbf\u95ee\u4e3b\u9875\u65f6\uff0c\u6211\u4eec\u4f7f\u7528 LRANGE 0 9 \u6765\u83b7\u53d6\u6700\u65b0\u53d1\u5e03\u7684 10 \u5f20\u7167\u7247\u3002"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u6dfb\u52a0\u5143\u7d20",children:"\u6dfb\u52a0\u5143\u7d20"}),"\n",(0,l.jsx)(n.h3,{id:"push\u547d\u4ee4",children:"PUSH\u547d\u4ee4"}),"\n",(0,l.jsx)(n.h4,{id:"lpush-\u4ece\u5de6\u5f80\u53f3\u63d2\u5165",children:(0,l.jsx)(n.code,{children:"LPUSH \u4ece\u5de6\u5f80\u53f3\u63d2\u5165"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"LPUSH\u547d\u4ee4\u4ece\u5934\u5f00\u59cb\u4f9d\u6b21\u6dfb\u52a0\u5143\u7d20\uff0c\u5148\u8fdb\u7684\u6392\u5728\u540e\u9762\uff0c\u540e\u8fdb\u7684\u6392\u5728\u524d\u9762\u3002\n"})}),"\n",(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(r.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:' 127.0.0.1:6379> lpush list:user java vue python\n (integer) 3\n # \u83b7\u53d6\u5143\u7d20\n 127.0.0.1:6379> lrange list:user 0 -1\n 1) "python"\n 2) "vue"\n 3) "java"\n'})})}),(0,l.jsx)(r.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'\n    // \u7b2c\u4e00\u79cd\u65b9\u5f0f\n    List<String> list = new ArrayList<>();\n    list.add("\u6c34\u676f");\n    list.add("\u4fdd\u6e29\u676f");\n    list.add("\u4e0d\u9508\u94a2\u676f");\n    for (int i = 0; i < list.size(); i++) {\n        redisTemplate.opsForList().leftPush("list:product",list.get(i));\n    }   \n    // \u7b2c\u4e8c\u79cd\u65b9\u5f0f\n    redisTemplate.opsForList().leftPushAll("list:model","\u5e72\u996d","\u4e0b\u5730","\u9504\u79be\u65e5");\n    // \u7b2c\u4e09\u79cd\n    List<String> listF = new ArrayList<>();\n    listF.add("\u6c34\u676f1");\n    listF.add("\u4fdd\u6e29\u676f2");\n    listF.add("\u4e0d\u9508\u94a2\u676f");\n    redisTemplate.opsForList().leftPushAll("list:feature",listF);\n\n'})})})]}),"\n",(0,l.jsx)(n.h4,{id:"rpush-\u4ece\u53f3\u5f80\u5de6\u63d2\u5165",children:(0,l.jsx)(n.code,{children:"RPUSH \u4ece\u53f3\u5f80\u5de6\u63d2\u5165"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"RPUSH\u547d\u4ee4\u4ece\u5c3e\u5f00\u59cb\u4f9d\u6b21\u6dfb\u52a0\u5143\u7d20\uff0c\u5148\u8fdb\u7684\u6392\u5728\u524d\u9762\uff0c\u540e\u8fdb\u7684\u6392\u5728\u540e\u9762\u3002\n"})}),"\n",(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(r.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:' 127.0.0.1:6379> rpush list:push money mone mon mo m\n (integer) 5\n 127.0.0.1:6379> lrange list:push 0 -1\n 1) "money"\n 2) "mone"\n 3) "mon"\n 4) "mo"\n 5) "m"\n 127.0.0.1:6379>\n'})})}),(0,l.jsx)(r.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'\n    // \u7b2c\u4e00\u79cd\u65b9\u5f0f\n    List<String> list = new ArrayList<>();\n    list.add("\u6c34\u676f");\n    list.add("\u4fdd\u6e29\u676f");\n    list.add("\u4e0d\u9508\u94a2\u676f");\n    for (int i = 0; i < list.size(); i++) {\n        redisTemplate.opsForList().rightPush("list:product",list.get(i));\n    }   \n    // \u7b2c\u4e8c\u79cd\u65b9\u5f0f\n    redisTemplate.opsForList().rightPushAll("list:model","\u5e72\u996d","\u4e0b\u5730","\u9504\u79be\u65e5");\n    // \u7b2c\u4e09\u79cd\n    List<String> listF = new ArrayList<>();\n    listF.add("\u6c34\u676f1");\n    listF.add("\u4fdd\u6e29\u676f2");\n    listF.add("\u4e0d\u9508\u94a2\u676f");\n    redisTemplate.opsForList().rightPushAll("list:feature",listF);\n\n'})})})]}),"\n",(0,l.jsx)(n.h4,{id:"linsert-\u63d2\u5165\u6307\u5b9a\u4f4d\u7f6e",children:(0,l.jsx)(n.code,{children:"LINSERT \u63d2\u5165\u6307\u5b9a\u4f4d\u7f6e"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"LINSERT key <BEFORE | AFTER> pivot element\nLINSERT\u547d\u4ee4\u5c31\u662f\u5728\u54ea\u4e2a\u5143\u7d20\u524d\u6216\u8005\u540e\u6dfb\u52a0\u4e00\u4e2a\u65b0\u5143\u7d20\n"})}),"\n",(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(r.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:' # \u52a0 before \u5728mon\u524d\u9762\u52a0font\n 127.0.0.1:6379> linsert list:push before mon font\n (integer) 5\n 127.0.0.1:6379> lrange list:push 0 -1\n 1) "money"\n 2) "mone"\n 3) "font"\n 4) "mon"\n 5) "mo"\n'})})}),(0,l.jsx)(r.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'redisTemplate.opsForList().leftPush("list:push","font","code");\n'})})})]}),"\n",(0,l.jsx)(n.h3,{id:"lrange-\u67e5\u8be2",children:(0,l.jsx)(n.code,{children:"LRANGE \u67e5\u8be2"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"LRANGE key start stop\nLRANGE\u547d\u4ee4 \u67e5\u8be2\u6570\u636e\u4f7f\u7528\uff0c\u67e5\u8be2\u5168\u90e8\u5219 LRANGE key 0 -1\n"})}),"\n",(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(r.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:' # \u67e5\u8be20-3\u6570\u636e\uff0c\u4e5f\u5c31\u662f4\u4e2a\n 127.0.0.1:6379> lrange list:push 0 3\n 1) "money"\n 2) "mone"\n 3) "font"\n 4) "mon"\n'})})}),(0,l.jsx)(r.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'redisTemplate.opsForList().range("list:model", 0, -1)\n'})})})]}),"\n",(0,l.jsx)(n.h3,{id:"\u5220\u9664\u64cd\u4f5c",children:"\u5220\u9664\u64cd\u4f5c"}),"\n",(0,l.jsx)(n.h4,{id:"rpop-\u53f3\u5220\u9664",children:(0,l.jsx)(n.code,{children:"RPOP \u53f3\u5220\u9664"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"RPOP key [count]\n"})}),"\n",(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(r.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:' 127.0.0.1:6379> rpop list:push\n "mo"\n'})})}),(0,l.jsx)(r.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'redisTemplate.opsForList().rightPop("list:mode");\n'})})})]}),"\n",(0,l.jsx)(n.h4,{id:"lpop-\u5de6\u5220\u9664",children:(0,l.jsx)(n.code,{children:"LPOP \u5de6\u5220\u9664"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"LPOP key [count]\n"})}),"\n",(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(r.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:' 127.0.0.1:6379> LPOP list:push\n "mo"\n'})})}),(0,l.jsx)(r.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'redisTemplate.opsForList().leftPop("list:mode");\n'})})})]}),"\n",(0,l.jsx)(n.h3,{id:"llen-\u5143\u7d20\u4e2a\u6570",children:(0,l.jsx)(n.code,{children:"LLEN \u5143\u7d20\u4e2a\u6570"})}),"\n",(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(r.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:" 127.0.0.1:6379> LLEN list:push\n 5\n"})})}),(0,l.jsx)(r.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'redisTemplate.opsForList().size("list:model")\n'})})})]}),"\n",(0,l.jsx)(n.h3,{id:"lindex-\u6839\u636e\u4e0b\u6807\u67e5\u8be2\u5143\u7d20",children:(0,l.jsx)(n.code,{children:"LINDEX \u6839\u636e\u4e0b\u6807\u67e5\u8be2\u5143\u7d20"})}),"\n",(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(r.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:' 127.0.0.1:6379> lindex list:push 2\n "font"\n'})})}),(0,l.jsx)(r.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'redisTemplate.opsForList().index("list:model", 2)\n'})})})]}),"\n",(0,l.jsx)(n.h3,{id:"rpoplpush620\u7248\u672c\u5df2\u5e9f\u5f03",children:(0,l.jsx)(n.code,{children:"RPOPLPUSH6.2.0\u7248\u672c\u5df2\u5e9f\u5f03"})}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["\u64cd\u4f5c\u4e24\u4e2alist\uff0c\u4ecelist\u5217\u8868\u53f3\u8fb9\u51fa\uff0c\u5e76\u5728list1\u5de6\u8fb9\u5165\uff01",(0,l.jsx)("br",{}),"\n\u6574\u4f53\u662f\u4e00\u4e2a\u539f\u5b50\u64cd\u4f5c"]})}),"\n",(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(r.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:' 127.0.0.1:6379> RPOPLPUSH list list1\n "v1"\n'})})}),(0,l.jsx)(r.Z,{value:"Java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"redisTemplate.opsForList().rightPopAndLeftPush(list,list1);\n"})})})]}),"\n",(0,l.jsx)(n.h3,{id:"lmove620\u65b0\u51fa\u547d\u4ee4",children:(0,l.jsx)(n.code,{children:"LMOVE6.2.0\u65b0\u51fa\u547d\u4ee4"})}),"\n",(0,l.jsxs)(n.admonition,{type:"note",children:[(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"LMOVE source destination <LEFT | RIGHT> <LEFT | RIGHT>\n"})}),(0,l.jsx)(n.p,{children:"\u6b64\u547d\u4ee4\u662f\u65b0\u7248\u672c\u4e2d\u4ee3\u66ffRPOPLPUSH\u7684\uff0c\u5177\u6709\u548c\u5b83\u76f8\u540c\u7684\u6548\u679c\u3002\u5e76\u4fdd\u8bc1\u539f\u5b50\u6027\uff01"})]}),"\n",(0,l.jsx)(n.h3,{id:"\u963b\u585e\u76f8\u5173",children:"\u963b\u585e\u76f8\u5173"}),"\n",(0,l.jsx)(n.h4,{id:"blpop",children:(0,l.jsx)(n.code,{children:"BLPOP"})}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["BLPOP \u662f\u4e00\u79cd\u963b\u585e\u5217\u8868\u5f39\u51fa\u3002\u5b83\u662f LPOP \u7684\u963b\u585e\u7248\u672c\uff0c\u56e0\u4e3a\u5f53\u6ca1\u6709\u5143\u7d20\u4ece\u4efb\u4f55\u7ed9\u5b9a\u5217\u8868\u4e2d\u5f39\u51fa\u65f6\uff0c\u5b83\u4f1a\u963b\u585e\u8fde\u63a5\u3002\u4ece\u7b2c\u4e00\u4e2a\u975e\u7a7a\u5217\u8868\u7684\u5934\u90e8\u5f39\u51fa\u4e00\u4e2a\u5143\u7d20\u3002",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.strong,{children:"BRPOP\u540c\u7406"})]})}),"\n",(0,l.jsx)(a.Z,{children:(0,l.jsx)(r.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:' # \u4ecekey\u662flist\u4e2d\u5f39\u51fa\u5143\u7d20\uff0c\u5e76\u963b\u585e5\u79d2\u3002\u82e5key\u4e0d\u5b58\u5728\u5143\u7d20\uff0c\u4e94\u79d2\u540e\u8fd4\u56denull\n 127.0.0.1:6379> BLPOP list 5\n "list"\n "v1"\n'})})})}),"\n",(0,l.jsx)(n.h4,{id:"blmove",children:(0,l.jsx)(n.code,{children:"BLMOVE"})}),"\n",(0,l.jsxs)(n.admonition,{type:"note",children:[(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"BLMOVE source destination <LEFT | RIGHT> <LEFT | RIGHT> timeout\n"})}),(0,l.jsxs)(n.p,{children:["BLMOVE\u662fLMOVE\u963b\u585e\u7248\u672c\uff0c\u5728\u6709\u5143\u7d20\u65f6\u4e0eLMOVE\u76f8\u5f53\uff0c\u5f53\u6ca1\u6709\u5143\u7d20\u65f6\u4f1a\u963b\u585e\u76f4\u5230\u6709\u5143\u7d20\uff08timeout\u82e5\u8bbe\u7f6e\u4e3a0\uff0c\u5219\u65e0\u9650\u963b\u585e\uff09",(0,l.jsx)("br",{}),"\nBRPOPLPUSH\u5728\u9ad8\u7248\u672c\u4e2d\u5df2\u7ecf\u5e9f\u5f03\uff0c\u7531BLMOVE\u66ff\u4ee3",(0,l.jsx)("br",{})]}),(0,l.jsx)(n.p,{children:"BLMPOP\u540c\u7406"})]}),"\n",(0,l.jsx)(a.Z,{children:(0,l.jsx)(r.Z,{value:"Redis Command",label:"Redis Command",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:' # \u4ecekey\u662flist\u4e2d\u5f39\u51fa\u5143\u7d20\uff0c\u5e76\u963b\u585e5\u79d2\u3002\u82e5key\u4e0d\u5b58\u5728\u5143\u7d20\uff0c\u4e94\u79d2\u540e\u8fd4\u56denull\n 127.0.0.1:6379> BLMOVE list list1 LEFT RIGHT 10\n "list"\n "v1"\n'})})})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},7389:(e,n,s)=>{s.d(n,{Z:()=>r});s(5271);var l=s(5341);const i={tabItem:"tabItem_S1wv"};var a=s(2676);function r(e){var n=e.children,s=e.hidden,r=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,l.Z)(i.tabItem,r),hidden:s,children:n})}},7660:(e,n,s)=>{s.d(n,{Z:()=>P});var l=s(5271),i=s(5341),a=s(5925),r=s(3225),t=s(3680),d=s(9779),o=s(8105),c=s(8379);function u(e){var n,s;return null!=(n=null==(s=l.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,l.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:s.filter(Boolean))?n:[]}function h(e){var n=e.values,s=e.children;return(0,l.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(s);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,s])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,s=void 0!==n&&n,i=e.groupId,a=(0,r.k6)(),t=function(e){var n=e.queryString,s=void 0!==n&&n,l=e.groupId;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=l?l:null}({queryString:s,groupId:i});return[(0,d._X)(t),(0,l.useCallback)((function(e){if(t){var n=new URLSearchParams(a.location.search);n.set(t,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}}),[t,a])]}function j(e){var n,s,i,a,r=e.defaultValue,d=e.queryString,o=void 0!==d&&d,u=e.groupId,j=h(e),x=(0,l.useState)((function(){return function(e){var n,s=e.defaultValue,l=e.tabValues;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!m({value:s,tabValues:l}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+s+'" but none of its children has the corresponding value. Available values are: '+l.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return s}var i=null!=(n=l.find((function(e){return e.default})))?n:l[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:r,tabValues:j})})),v=x[0],f=x[1],b=p({queryString:o,groupId:u}),g=b[0],L=b[1],P=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),s=(0,c.Nk)(n),i=s[0],a=s[1],[i,(0,l.useCallback)((function(e){n&&a.set(e)}),[n,a])]),R=P[0],y=P[1],E=function(){var e=null!=g?g:R;return m({value:e,tabValues:j})?e:null}();return(0,t.Z)((function(){E&&f(E)}),[E]),{selectedValue:v,selectValue:(0,l.useCallback)((function(e){if(!m({value:e,tabValues:j}))throw new Error("Can't select invalid tab value="+e);f(e),L(e),y(e)}),[L,y,j]),tabValues:j}}var x=s(1640);const v={tabList:"tabList_Bom4",tabItem:"tabItem_vnng"};var f=s(2676);function b(e){var n=e.className,s=e.block,l=e.selectedValue,r=e.selectValue,t=e.tabValues,d=[],o=(0,a.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,s=d.indexOf(n),i=t[s].value;i!==l&&(o(n),r(i))},u=function(e){var n,s=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var l,i=d.indexOf(e.currentTarget)+1;s=null!=(l=d[i])?l:d[0];break;case"ArrowLeft":var a,r=d.indexOf(e.currentTarget)-1;s=null!=(a=d[r])?a:d[d.length-1]}null==(n=s)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},n),children:t.map((function(e){var n=e.value,s=e.label,a=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:function(e){return d.push(e)},onKeyDown:u,onClick:c},a,{className:(0,i.Z)("tabs__item",v.tabItem,null==a?void 0:a.className,{"tabs__item--active":l===n}),children:null!=s?s:n}),n)}))})}function g(e){var n=e.lazy,s=e.children,i=e.selectedValue,a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){var r=a.find((function(e){return e.props.value===i}));return r?(0,l.cloneElement)(r,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==i})}))})}function L(e){var n=j(e);return(0,f.jsxs)("div",{className:(0,i.Z)("tabs-container",v.tabList),children:[(0,f.jsx)(b,Object.assign({},n,e)),(0,f.jsx)(g,Object.assign({},n,e))]})}function P(e){var n=(0,x.Z)();return(0,f.jsx)(L,Object.assign({},e,{children:u(e.children)}),String(n))}},9313:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>r});var l=s(5271);const i={},a=l.createContext(i);function r(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);