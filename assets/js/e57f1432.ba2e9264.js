"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[7019],{3234:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>t});var d=i(2676),l=i(9313);const r={id:"objection-note",slug:"/objection-note",title:"objection\u7b14\u8bb0",date:new Date("2021-02-10T00:00:00.000Z"),authors:"kuizuo",tags:["frida","app","hook"],keywords:["frida","app","hook"]},s=void 0,o={id:"skill/reverse/android/frida/objection-note",title:"objection\u7b14\u8bb0",description:"objection",source:"@site/docs/skill/reverse/android/frida/objection\u7b14\u8bb0.md",sourceDirName:"skill/reverse/android/frida",slug:"/objection-note",permalink:"/docs/objection-note",draft:!1,unlisted:!1,tags:[{inline:!0,label:"frida",permalink:"/docs/tags/frida"},{inline:!0,label:"app",permalink:"/docs/tags/app"},{inline:!0,label:"hook",permalink:"/docs/tags/hook"}],version:"current",frontMatter:{id:"objection-note",slug:"/objection-note",title:"objection\u7b14\u8bb0",date:"2021-02-10T00:00:00.000Z",authors:"kuizuo",tags:["frida","app","hook"],keywords:["frida","app","hook"]},sidebar:"skill",previous:{title:"Frida\u7b14\u8bb0",permalink:"/docs/frida-note"},next:{title:"\u5237\u5165Magisk",permalink:"/docs/brush-magisk"}},c={},t=[{value:"objection",id:"objection",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u9009\u9879",id:"\u9009\u9879",level:4},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:3},{value:"hook \u547d\u4ee4",id:"hook-\u547d\u4ee4",level:4},{value:"\u67e5\u770b hook \u5217\u8868",id:"\u67e5\u770b-hook-\u5217\u8868",level:4},{value:"\u53d6\u6d88 hook",id:"\u53d6\u6d88-hook",level:4},{value:"\u5173\u95ed ssl \u6548\u9a8c",id:"\u5173\u95ed-ssl-\u6548\u9a8c",level:4},{value:"\u5173\u95ed root \u68c0\u6d4b",id:"\u5173\u95ed-root-\u68c0\u6d4b",level:4},{value:"\u754c\u9762\u8df3\u8f6c",id:"\u754c\u9762\u8df3\u8f6c",level:3},{value:"\u67e5\u770b\u5f53\u524d app \u7684 activity",id:"\u67e5\u770b\u5f53\u524d-app-\u7684-activity",level:4},{value:"\u5c1d\u8bd5\u8df3\u8f6c\u5230\u5bf9\u5e94\u7684 activity",id:"\u5c1d\u8bd5\u8df3\u8f6c\u5230\u5bf9\u5e94\u7684-activity",level:4},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",level:3},{value:"\u52a0\u8f7d\u63d2\u4ef6",id:"\u52a0\u8f7d\u63d2\u4ef6",level:4},{value:"Wallbreaker",id:"wallbreaker",level:4},{value:"\u4f7f\u7528",id:"\u4f7f\u7528-1",level:5},{value:"FRIDA-DEXDump",id:"frida-dexdump",level:4}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"objection",children:"objection"}),"\n",(0,d.jsxs)(n.p,{children:["Frida \u53ea\u662f\u63d0\u4f9b\u4e86\u5404\u79cd API \u4f9b\u6211\u4eec\u8c03\u7528\uff0c\u5728\u6b64\u57fa\u7840\u4e4b\u4e0a\u53ef\u4ee5\u5b9e\u73b0\u5177\u4f53\u7684\u529f\u80fd\uff0c\u6bd4\u5982\u7981\u7528\u8bc1\u4e66\u7ed1\u5b9a\u4e4b\u7c7b\u7684\u811a\u672c\uff0c\u5c31\u662f\u4f7f\u7528 Frida \u7684\u5404\u79cd API \u6765\u7ec4\u5408\u7f16\u5199\u800c\u6210\u3002\u4e8e\u662f\u6709\u5927\u4f6c\u5c06\u5404\u79cd\u5e38\u89c1\u3001\u5e38\u7528\u7684\u529f\u80fd\u6574\u5408\u8fdb\u4e00\u4e2a\u5de5\u5177\uff0c\u4f9b\u6211\u4eec\u76f4\u63a5\u5728\u547d\u4ee4\u884c\u4e2d\u4f7f\u7528\uff0c\u8fd9\u4e2a\u5de5\u5177\u4fbf\u662f",(0,d.jsx)(n.a,{href:"https://github.com/sensepost/objection",children:"objection"}),"\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"objection \u529f\u80fd\u5f3a\u5927\uff0c\u547d\u4ee4\u4f17\u591a\uff0c\u800c\u4e14\u4e0d\u7528\u5199\u4e00\u884c\u4ee3\u7801\uff0c\u4fbf\u53ef\u5b9e\u73b0\u8bf8\u5982\u5185\u5b58\u641c\u7d22\u3001\u7c7b\u548c\u6a21\u5757\u641c\u7d22\u3001\u65b9\u6cd5 hook \u6253\u5370\u53c2\u6570\u8fd4\u56de\u503c\u8c03\u7528\u6808\u7b49\u5e38\u7528\u529f\u80fd\uff0c\u662f\u4e00\u4e2a\u975e\u5e38\u65b9\u4fbf\u7684\u9006\u5411\u5fc5\u5907\u3001\u5185\u5b58\u6f2b\u6e38\u795e\u5668\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"pip install objection\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"objection -g <\u5305\u540d> explore\nobjection -N -h <\u624b\u673aip\u5730\u5740> -p <\u7aef\u53e3> -g <\u5305\u540d> explore # \u6307\u5b9aip\u4e0e\u7aef\u53e3\u8fde\u63a5\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u9009\u9879",children:"\u9009\u9879"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u9009\u9879"}),(0,d.jsx)(n.th,{children:"\u529f\u80fd"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"-s, --startup-command \u201chook \u547d\u4ee4\u201d"}),(0,d.jsx)(n.td,{children:"\u542f\u52a8\u524d\u6ce8\u5165"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"-c, \u2013file-commands FILENAME"}),(0,d.jsx)(n.td,{children:"\u901a\u8fc7\u6587\u4ef6\u547d\u4ee4\u6765\u8fd0\u884c"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"--dump-args"}),(0,d.jsx)(n.td,{children:"\u6253\u5370\u53c2\u6570"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"--dump-return"}),(0,d.jsx)(n.td,{children:"\u6253\u5370\u8fd4\u56de\u503c"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"--dump-backtrace"}),(0,d.jsx)(n.td,{children:"\u6253\u5370\u5806\u6808\u4fe1\u606f"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["objection log \u6587\u4ef6\u4f4d\u7f6e: ",(0,d.jsx)(n.code,{children:"C:\\Users\\zeyu\\.objection\\objection.log"})]}),"\n",(0,d.jsx)(n.h3,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u547d\u4ee4"}),(0,d.jsx)(n.th,{children:"\u529f\u80fd"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"frida"}),(0,d.jsx)(n.td,{children:"\u663e\u793a frida \u7248\u672c\u4fe1\u606f"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"env"}),(0,d.jsx)(n.td,{children:"\u663e\u793a app \u76f8\u5173\u73af\u5883\u53d8\u91cf"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"help \u547d\u4ee4"}),(0,d.jsx)(n.td,{children:"\u67e5\u770b\u547d\u4ee4\u5e2e\u52a9"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"hook-\u547d\u4ee4",children:"hook \u547d\u4ee4"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u547d\u4ee4"}),(0,d.jsx)(n.th,{children:"\u529f\u80fd"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"android hooking list classes"})}),(0,d.jsx)(n.td,{children:"\u5217\u51fa\u6240\u6709\u5df2\u52a0\u8f7d\u7684\u7c7b"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"android hooking search classes <pattern>"})}),(0,d.jsx)(n.td,{children:"\u641c\u7d22\u7279\u5b9a\u5173\u952e\u5b57\u7684\u7c7b"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"android hooking list class_methods <\u8def\u5f84.\u7c7b\u540d>"})}),(0,d.jsx)(n.td,{children:"\u5217\u51fa\u7c7b\u4e0b\u6240\u6709\u65b9\u6cd5"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"android hooking watch class <\u8def\u5f84.\u7c7b\u540d>"})}),(0,d.jsx)(n.td,{children:"hook \u7c7b\u7684\u6240\u6709\u65b9\u6cd5(\u4e0d\u5305\u62ec\u6784\u9020\u65b9\u6cd5)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"android hooking watch class_method <\u8def\u5f84.\u7c7b\u540d.\u65b9\u6cd5\u540d>"})}),(0,d.jsx)(n.td,{children:"hook \u7c7b\u7684\u65b9\u6cd5(\u6240\u6709\u91cd\u8f7d\u65b9\u6cd5)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:'android hooking watch class_method <\u8def\u5f84.\u7c7b\u540d.\u65b9\u6cd5\u540d> "<\u53c2\u6570\u7c7b\u578b>"'})}),(0,d.jsx)(n.td,{children:"hook \u5355\u4e2a\u91cd\u8f7d\u65b9\u6cd5\uff0c\u9700\u6307\u5b9a\u53c2\u6570\u7c7b\u578b"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"\u67e5\u770b-hook-\u5217\u8868",children:"\u67e5\u770b hook \u5217\u8868"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"jobs list\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u53d6\u6d88-hook",children:"\u53d6\u6d88 hook"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"jobs kill <jobId>\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u5173\u95ed-ssl-\u6548\u9a8c",children:"\u5173\u95ed ssl \u6548\u9a8c"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"android sslpinning disable\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u5173\u95ed-root-\u68c0\u6d4b",children:"\u5173\u95ed root \u68c0\u6d4b"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"android root disable\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u754c\u9762\u8df3\u8f6c",children:"\u754c\u9762\u8df3\u8f6c"}),"\n",(0,d.jsx)(n.h4,{id:"\u67e5\u770b\u5f53\u524d-app-\u7684-activity",children:"\u67e5\u770b\u5f53\u524d app \u7684 activity"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"android hooking list activities\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u5c1d\u8bd5\u8df3\u8f6c\u5230\u5bf9\u5e94\u7684-activity",children:"\u5c1d\u8bd5\u8df3\u8f6c\u5230\u5bf9\u5e94\u7684 activity"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"android intent launch_activity <activityName>\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u63d2\u4ef6",children:"\u63d2\u4ef6"}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsxs)(n.mdxAdmonitionTitle,{children:["\u6ce8: \u5728 Window \u4e0b\u63d2\u4ef6\u8def\u5f84\u9700\u8981\u4f7f\u7528\u4e24\u4e2a//\u6216\u4f7f\u7528\\\uff0c\u4e0d\u7136\u4f1a\u62a5 Missing ",(0,d.jsx)(n.code,{children:"__init__.py"}),"\u9519\u8bef"]})}),"\n",(0,d.jsx)(n.h4,{id:"\u52a0\u8f7d\u63d2\u4ef6",children:"\u52a0\u8f7d\u63d2\u4ef6"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"objection -g com.app.name explore -P <\u63d2\u4ef6\u8def\u5f84>\n"})}),"\n",(0,d.jsx)(n.p,{children:"or"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"objection -g com.app.name explore\nplugin load <\u63d2\u4ef6\u8def\u5f84>\n"})}),"\n",(0,d.jsx)(n.h4,{id:"wallbreaker",children:(0,d.jsx)(n.a,{href:"https://github.com/hluwa/Wallbreaker",children:"Wallbreaker"})}),"\n",(0,d.jsx)(n.p,{children:"\u4ece\u5185\u5b58\u4e2d\u641c\u7d22\u5bf9\u8c61\u6216\u7c7b\uff0c\u5e76\u6f02\u4eae\u5730\u53ef\u89c6\u5316\u76ee\u6807\u7684\u771f\u5b9e\u7ed3\u6784\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"objection -g com.app.name explore -P F:\\\\Frida\\\\objection-plugin\\\\Wallbreaker\\\\wallbreaker\n// or\nplugin load F:\\\\Frida\\\\objection-plugin\\\\Wallbreaker\\\\wallbreaker\n"})}),"\n",(0,d.jsx)(n.h5,{id:"\u4f7f\u7528-1",children:"\u4f7f\u7528"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"plugin wallbreaker classsearch <pattern>  # \u641c\u7d22\u7c7b\nplugin wallbreaker objectsearch <classname> # \u641c\u7d22\u7c7b\u7684\u5b9e\u4f8b\u5bf9\u8c61\nplugin wallbreaker classdump <classname> [--fullname] # \u8f93\u51fa\u7c7b\u7ed3\u6784\uff0c \u6253\u5370\u6570\u636e\u4e2d\u7c7b\u7684\u5b8c\u6574\u5305\u540d\nplugin wallbreaker objectdump <object-handle> [--fullname] # \u8f93\u51fa\u6307\u5b9a\u5bf9\u8c61\u7684\u6bcf\u4e2a\u5b57\u6bb5\u503c\n\n"})}),"\n",(0,d.jsx)(n.h4,{id:"frida-dexdump",children:(0,d.jsx)(n.a,{href:"https://github.com/hluwa/FRIDA-DEXDump",children:"FRIDA-DEXDump"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8fdb\u5165 objection\uff0c\u52a0\u8f7d\u63d2\u4ef6 ",(0,d.jsx)(n.code,{children:"plugin load <\u63d2\u4ef6\u8def\u5f84> [\u6307\u5b9a\u63d2\u4ef6\u540d\u5b57]"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"plugin load F:\\\\Frida\\\\objection-plugin\\\\FRIDA-DEXDump\\\\frida_dexdump\n\n# \u52a0\u8f7d\u5b8c\u63d2\u4ef6\u540e\u5c31\u53ef\u4ee5\u4f7f\u7528\u63d2\u4ef6\u547d\u4ee4\u4e86\n\nplugin dexdump dump\nplugin dexdump search\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},9313:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>s});var d=i(5271);const l={},r=d.createContext(l);function s(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);