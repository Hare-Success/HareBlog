"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[8679],{919:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>a});var l=n(2676),s=n(9313);const r={id:"solution-of-bootloader-lock",slug:"/solution-of-bootloader-lock",title:"\u89e3Bootloader\u9501",date:new Date("2021-12-09T00:00:00.000Z"),authors:"kuizuo",tags:["android","bootloader","\u5237\u673a"],keywords:["android","bootloader","\u5237\u673a"]},i=void 0,t={id:"skill/reverse/android/\u5237\u673a/solution-of-bootloader-lock",title:"\u89e3Bootloader\u9501",description:"\u6700\u8fd1\u51c6\u5907\u91cd\u5b66\u5b89\u5353\u9006\u5411\u4e0e\u5f00\u53d1\uff0c\u81ea\u7136\u5de5\u5177\u662f\u80af\u5b9a\u5c11\u4e0d\u4e86\uff0c\u6700\u4e3a\u91cd\u8981\u7684\u4fbf\u662f\u624b\u673a\u3002\u4e4b\u524d\u7684\u624b\u673a\u662f Pixel\uff0c\u4f46\u662f\u624b\u673a\u6027\u80fd\u4e0d\u592a\u597d\uff0c\u4f7f\u7528\u8d77\u6765\u4e00\u5361\u4e00\u5361\u7684\uff08\u7a0b\u5e8f\u5b89\u88c5\u7684\u6709\u70b9\u591a\uff09\u3002\u4e8e\u662f\u5c31\u51c6\u5907\u6362\u53f0 Pixel 4XL \u6b27\u7248\u7684\u6765\u4f5c\u4e3a\u65b0\u8bbe\u5907\u3002",source:"@site/docs/skill/reverse/android/\u5237\u673a/\u89e3Bootloader\u9501.md",sourceDirName:"skill/reverse/android/\u5237\u673a",slug:"/solution-of-bootloader-lock",permalink:"/docs/solution-of-bootloader-lock",draft:!1,unlisted:!1,tags:[{inline:!0,label:"android",permalink:"/docs/tags/android"},{inline:!0,label:"bootloader",permalink:"/docs/tags/bootloader"},{inline:!0,label:"\u5237\u673a",permalink:"/docs/tags/\u5237\u673a"}],version:"current",frontMatter:{id:"solution-of-bootloader-lock",slug:"/solution-of-bootloader-lock",title:"\u89e3Bootloader\u9501",date:"2021-12-09T00:00:00.000Z",authors:"kuizuo",tags:["android","bootloader","\u5237\u673a"],keywords:["android","bootloader","\u5237\u673a"]},sidebar:"skill",previous:{title:"\u6293\u5305",permalink:"/docs/intercepting-requests"},next:{title:"JS\u4ee3\u7801\u6df7\u6dc6\u4e0e\u8fd8\u539f",permalink:"/docs/js-code-obfuscation-and-reverse"}},d={},a=[{value:"\u5f00\u59cb\u89e3\u9501",id:"\u5f00\u59cb\u89e3\u9501",level:2},{value:"\u4e0b\u8f7d\u5de5\u5177\u5305",id:"\u4e0b\u8f7d\u5de5\u5177\u5305",level:3},{value:"OEM \u89e3\u9501",id:"oem-\u89e3\u9501",level:3},{value:"\u66f4\u65b0\u9a71\u52a8",id:"\u66f4\u65b0\u9a71\u52a8",level:3},{value:"Bootloader \u89e3\u9501",id:"bootloader-\u89e3\u9501",level:3},{value:"\u89e3\u9664 WiFi \u7f51\u7edc\u53d7\u9650",id:"\u89e3\u9664-wifi-\u7f51\u7edc\u53d7\u9650",level:2}];function c(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.p,{children:"\u6700\u8fd1\u51c6\u5907\u91cd\u5b66\u5b89\u5353\u9006\u5411\u4e0e\u5f00\u53d1\uff0c\u81ea\u7136\u5de5\u5177\u662f\u80af\u5b9a\u5c11\u4e0d\u4e86\uff0c\u6700\u4e3a\u91cd\u8981\u7684\u4fbf\u662f\u624b\u673a\u3002\u4e4b\u524d\u7684\u624b\u673a\u662f Pixel\uff0c\u4f46\u662f\u624b\u673a\u6027\u80fd\u4e0d\u592a\u597d\uff0c\u4f7f\u7528\u8d77\u6765\u4e00\u5361\u4e00\u5361\u7684\uff08\u7a0b\u5e8f\u5b89\u88c5\u7684\u6709\u70b9\u591a\uff09\u3002\u4e8e\u662f\u5c31\u51c6\u5907\u6362\u53f0 Pixel 4XL \u6b27\u7248\u7684\u6765\u4f5c\u4e3a\u65b0\u8bbe\u5907\u3002"}),"\n",(0,l.jsx)(o.p,{children:"\u4e8e\u662f\u4fbf\u8bb0\u5f55\u4e0b\u624b\u673a\u7684\u914d\u7f6e\u9006\u5411\u73af\u5883\u7684\u8fc7\u7a0b\uff0c\u800c\u8fd9\u7bc7\u5c31\u662f\u5237\u673a\u6700\u4e3b\u8981\u7684\u4e00\u6b65\uff0c\u89e3 bl \u9501\uff0c\u4e0d\u7136\u5c31\u6ca1\u6709\u540e\u7eed\u5237\u9762\u5177\uff0croot \u7b49\u7b49\u64cd\u4f5c\u4e86\u3002"}),"\n",(0,l.jsxs)(o.p,{children:["\u76f8\u5173\u6587\u7ae0 ",(0,l.jsx)(o.a,{href:"https://sspai.com/post/57922",children:"\u5c0f\u80e1\u5b50\u7684\u5e72\u8d27\u94fa\u2014\u2014Pixel 4 XL \u89e3\u9501 Bootloader - \u5c11\u6570\u6d3e (sspai.com)"})]}),"\n",(0,l.jsx)(o.h2,{id:"\u5f00\u59cb\u89e3\u9501",children:"\u5f00\u59cb\u89e3\u9501"}),"\n",(0,l.jsx)(o.admonition,{type:"danger",children:(0,l.jsx)(o.mdxAdmonitionTitle,{children:(0,l.jsx)(o.strong,{children:"\u524d\u6587\u63d0\u793a\uff1a\u89e3\u9501\u540e\uff0c\u624b\u673a\u4e0a\u6240\u6709\u6570\u636e\u5c06\u88ab\u6e05\u9664\u91cd\u7f6e\uff0c\u8bf7\u5907\u4efd\u91cd\u8981\u6570\u636e!"})})}),"\n",(0,l.jsx)(o.h3,{id:"\u4e0b\u8f7d\u5de5\u5177\u5305",children:"\u4e0b\u8f7d\u5de5\u5177\u5305"}),"\n",(0,l.jsx)(o.p,{children:(0,l.jsx)(o.strong,{children:"\u9700\u8981\u79d1\u5b66\u4e0a\u7f51\u624d\u80fd\u4e0b\u8f7d"})}),"\n",(0,l.jsx)(o.p,{children:"1\u3001platform-tools.zip: \uff08\u89e3\u538b\u5230\u4e00\u4e2a\u6587\u4ef6\u5939\u4e0b\uff09"}),"\n",(0,l.jsx)(o.p,{children:(0,l.jsx)(o.a,{href:"https://developer.android.com/studio/releases/platform-tools.html",children:"https://developer.android.com/studio/releases/platform-tools.html"})}),"\n",(0,l.jsx)(o.p,{children:"2\u3001USB \u9a71\u52a8.zip:\uff08\u653e\u540c\u6587\u4ef6\u5939\u4e0d\u9700\u8981\u89e3\u538b\uff09"}),"\n",(0,l.jsx)(o.p,{children:(0,l.jsx)(o.a,{href:"https://developer.android.com/studio/run/oem-usb.html#InstallingDriver",children:"https://developer.android.com/studio/run/oem-usb.html#InstallingDriver"})}),"\n",(0,l.jsx)(o.h3,{id:"oem-\u89e3\u9501",children:"OEM \u89e3\u9501"}),"\n",(0,l.jsxs)(o.p,{children:["1\u3001",(0,l.jsx)(o.strong,{children:"\u8bbe\u7f6e"}),"\u2014",(0,l.jsx)(o.strong,{children:"\u5173\u4e8e\u624b\u673a"}),"\u2014",(0,l.jsx)(o.strong,{children:"\u7248\u672c\u53f7"}),"\u8fde\u6309\u4e03\u4e0b"]}),"\n",(0,l.jsxs)(o.p,{children:["2\u3001\u8fd4\u56de\u4e0a\u4e00\u7ea7\uff08",(0,l.jsx)(o.strong,{children:"\u8bbe\u7f6e"}),"\uff09\u2014",(0,l.jsx)(o.strong,{children:"\u7cfb\u7edf"}),"\u2014",(0,l.jsx)(o.strong,{children:"\u9ad8\u7ea7"}),"\u2014",(0,l.jsx)(o.strong,{children:"\u5f00\u53d1\u8005\u9009\u9879"}),"\u2014\u6253\u5f00\u201c",(0,l.jsx)(o.strong,{children:"OEM \u89e3\u9501"}),"\u201d\uff0c\u540e\u7eed\u6309\u63d0\u793a\u64cd\u4f5c"]}),"\n",(0,l.jsxs)(o.p,{children:["3\u3001",(0,l.jsx)(o.strong,{children:"\u5f00\u53d1\u8005\u9009\u9879"}),"\u2014\u6253\u5f00\u201c",(0,l.jsx)(o.strong,{children:"USB \u8c03\u8bd5"}),"\u201d\uff08\u5907\u7528\uff09"]}),"\n",(0,l.jsx)(o.h3,{id:"\u66f4\u65b0\u9a71\u52a8",children:"\u66f4\u65b0\u9a71\u52a8"}),"\n",(0,l.jsxs)(o.p,{children:["1\u3001\u7535\u8111\u5f00\u59cb\u83dc\u5355\u65c1\u8fb9\u641c\u7d22\u201c",(0,l.jsx)(o.strong,{children:"\u8bbe\u5907\u7ba1\u7406\u5668"}),"\u201d\u5e76\u6253\u5f00"]}),"\n",(0,l.jsx)(o.p,{children:"2\u3001\u901a\u8fc7 USB \u7ebf\u5c06\u624b\u673a\u8fde\u63a5\u5230\u7535\u8111"}),"\n",(0,l.jsx)(o.p,{children:"3\u3001\u627e\u5230\u65b0\u51fa\u73b0\u7684\u8bbe\u5907\u5c31\u662f\u4f60\u7684\u624b\u673a\uff0c\u53f3\u51fb\u66f4\u65b0\u9a71\u52a8\u2014\u81ea\u52a8\u641c\u7d22\u66f4\u65b0\u9a71\u52a8\u6216\u8005\u624b\u52a8\u5728\u684c\u9762\u641c\u7d22\u521a\u624d\u4e0b\u8f7d\u7684\u9a71\u52a8\u5e76\u5b89\u88c5"}),"\n",(0,l.jsx)(o.p,{children:(0,l.jsx)(o.img,{src:"https://img.kuizuo.cn/f49f1e5afc077dafab5d74a72965f8ba.png",alt:"img"})}),"\n",(0,l.jsx)(o.p,{children:"\u5982\u4e0b\u56fe\u63d0\u793a\u5219\u8bf4\u660e\u5b89\u88c5\u6210\uff0c\u63a5\u7740\u5c31\u8981\u5f00\u59cb\u89e3\u9501\u4e86"}),"\n",(0,l.jsx)(o.p,{children:(0,l.jsx)(o.img,{src:"https://img.kuizuo.cn/image-20211209133458792.png",alt:"image-20211209133458792"})}),"\n",(0,l.jsx)(o.h3,{id:"bootloader-\u89e3\u9501",children:"Bootloader \u89e3\u9501"}),"\n",(0,l.jsxs)(o.p,{children:["1\u3001",(0,l.jsx)(o.strong,{children:"\u5173\u673a"}),"\u540e\uff0c\u540c\u65f6\u6309\u4f4f",(0,l.jsx)(o.strong,{children:"\u7535\u6e90\u952e"}),"\u548c",(0,l.jsx)(o.strong,{children:"\u97f3\u91cf\u51cf\u952e"}),"\uff0c\u8fdb\u5165 Bootloader \u754c\u9762\u3002"]}),"\n",(0,l.jsx)(o.p,{children:(0,l.jsx)(o.img,{src:"https://img.kuizuo.cn/image-20211209135203559.png",alt:"image-20211209135203559"})}),"\n",(0,l.jsxs)(o.p,{children:["\u53ef\u4ee5\u770b\u5230",(0,l.jsx)(o.strong,{children:"Device-State: locked"})," \u8868\u660e\u4e3a\u52a0\u9501\u72b6\u6001"]}),"\n",(0,l.jsx)(o.p,{children:"2\u3001\u901a\u8fc7 USB \u7ebf\u5c06\u624b\u673a\u8fde\u63a5\u5230\u7535\u8111\u3002"}),"\n",(0,l.jsx)(o.p,{children:"3\u3001\u6253\u5f00\u684c\u9762 platform-tools \u6587\u4ef6\u5939\uff0c\u5728\u5f53\u524d\u6587\u4ef6\u5939\u4e0b\u6253\u5f00 CMD \u7a97\u53e3\uff08\u4e0d\u53ef\u6253\u5f00 PowerShell\uff0c\u4e0d\u7136\u547d\u4ee4\u4e0d\u53ef\u7528\uff09"}),"\n",(0,l.jsx)(o.p,{children:"4\u3001\u952e\u5165\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5 fastboot \u8fde\u63a5\uff1a"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-bash",children:"fastboot devices\n"})}),"\n",(0,l.jsx)(o.p,{children:"\u56de\u8f66\u540e\u5e94\u8be5\u663e\u793a\u4f60\u7684\u8bbe\u5907\u5e8f\u5217\u53f7\uff0c\u5982\u679c\u4e0d\u662f\uff0c\u4f60\u9700\u8981\u786e\u4fdd\u4f60\u7684\u9a71\u52a8\u7a0b\u5e8f\u5df2\u6b63\u786e\u5b89\u88c5\u3002"}),"\n",(0,l.jsx)(o.p,{children:"5\u3001\u786e\u8ba4 fastboot \u8fde\u63a5\u6ca1\u95ee\u9898\uff0c\u5373\u53ef\u8fd0\u884c\u89e3\u9501 bootloader \u547d\u4ee4\uff1a"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-bash",children:"fastboot flashing unlock\n"})}),"\n",(0,l.jsx)(o.p,{children:"\u4f60\u73b0\u5728\u5e94\u8be5\u5728\u624b\u673a\u4e0a\u770b\u5230\u4e00\u4e2a\u64cd\u4f5c\u754c\u9762\uff0c\u8981\u6c42\u4f60\u786e\u8ba4\u6b64\u64cd\u4f5c\u3002\u4f7f\u7528\u97f3\u91cf\u952e\u9009\u62e9\uff08\u6309\u4e00\u4e0b\u97f3\u91cf\u952e\u4e0b\u5373\u53ef\uff09\uff0c\u4f7f\u7528\u7535\u6e90\u952e\u786e\u8ba4\uff08\u9009\u62e9 Unlock the bootloader \u5e76\u786e\u8ba4\uff09\u3002\u786e\u8ba4\u8be5\u8fc7\u7a0b\u5b8c\u6210\uff0c\u7136\u540e\u952e\u5165\u6b64\u547d\u4ee4\uff1a"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-bash",children:"fastboot reboot\n"})}),"\n",(0,l.jsx)(o.p,{children:"\u624b\u673a\u91cd\u542f\uff0c\u5b8c\u6210\u89e3\u9501\u3002\u6b64\u65f6\u624b\u673a\u754c\u9762\u5c31\u4f1a\u663e\u793a Google \u89e3\u9501\u7684\u63d0\u793a\u52a8\u753b\u3002"}),"\n",(0,l.jsx)(o.p,{children:(0,l.jsx)(o.strong,{children:"\u89e3\u9501\u540e\uff0c\u624b\u673a\u4e0a\u6240\u6709\u6570\u636e\u88ab\u6e05\u9664\u91cd\u7f6e\uff0c\u5982\u9700\u6267\u884c\u540e\u7eed\u5de5\u4f5c\uff0c\u987b\u91cd\u65b0\u5f00\u542f\u5f00\u53d1\u8005\u9009\u9879\u3001USB \u8c03\u8bd5"})}),"\n",(0,l.jsx)(o.h2,{id:"\u89e3\u9664-wifi-\u7f51\u7edc\u53d7\u9650",children:"\u89e3\u9664 WiFi \u7f51\u7edc\u53d7\u9650"}),"\n",(0,l.jsx)(o.p,{children:"\u7531\u4e8e\u56fd\u5185\u7f51\u7edc\u8bbf\u95ee\u8c37\u6b4c\u670d\u52a1\u5668\u4f1a\u88ab\u5899\uff0c\u5bfc\u81f4 wifi \u7f51\u7edc\u53d7\u9650\u3002\u901a\u8fc7\u4e0b\u9762\u64cd\u4f5c\u53ef\u4ee5\u89e3\u9664 WiFi \u7f51\u7edc\u53d7\u9650"}),"\n",(0,l.jsx)(o.p,{children:"1\u3001\u624b\u673a\u5f00\u673a\u72b6\u6001\u4e0b\uff0c\u901a\u8fc7 USB \u7ebf\u5c06\u624b\u673a\u8fde\u63a5\u5230\u7535\u8111\u3002"}),"\n",(0,l.jsx)(o.p,{children:"2\u3001\u6253\u5f00\u684c\u9762 platform-tools \u6587\u4ef6\u5939\uff0c\u6253\u5f00 CMD \u7a97\u53e3"}),"\n",(0,l.jsx)(o.p,{children:"3\u3001\u8f93\u5165\u547d\u4ee4"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{children:"adb shell settings put global captive_portal_https_url https://www.google.cn/generate_204\n"})}),"\n",(0,l.jsx)(o.p,{children:"4\u3001\u6253\u5f00\u98de\u884c\u6a21\u5f0f\u518d\u5173\u95ed\uff0c\u67e5\u770b\u662f\u5426\u5df2\u89e3\u9664\u53d7\u9650\u3002"})]})}function h(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,l.jsx)(o,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},9313:(e,o,n)=>{n.d(o,{Z:()=>t,a:()=>i});var l=n(5271);const s={},r=l.createContext(s);function i(e){const o=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:o},e.children)}}}]);