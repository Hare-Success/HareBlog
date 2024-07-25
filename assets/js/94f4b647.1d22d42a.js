"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[1236],{5797:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>u,toc:()=>m});var s=t(2676),i=t(9313);const r={id:"three-sum",slug:"/algorithm/three-sum",title:"\u4e09\u6570\u4e4b\u548c",authors:"kuizuo",tags:["algorithm"],keywords:["algorithm"]},o=void 0,u={id:"skill/algorithm/three-sum",title:"\u4e09\u6570\u4e4b\u548c",description:"\u6392\u5e8f+\u53cc\u6307\u9488",source:"@site/docs/skill/algorithm/2.\u4e09\u6570\u4e4b\u548c.md",sourceDirName:"skill/algorithm",slug:"/algorithm/three-sum",permalink:"/docs/algorithm/three-sum",draft:!1,unlisted:!1,tags:[{inline:!0,label:"algorithm",permalink:"/docs/tags/algorithm"}],version:"current",sidebarPosition:2,frontMatter:{id:"three-sum",slug:"/algorithm/three-sum",title:"\u4e09\u6570\u4e4b\u548c",authors:"kuizuo",tags:["algorithm"],keywords:["algorithm"]},sidebar:"skill",previous:{title:"\u4e24\u6570\u4e4b\u548c",permalink:"/docs/algorithm/two-sum"},next:{title:"\u6ed1\u52a8\u7a97\u53e3",permalink:"/docs/algorithm/sliding-window"}},l={},m=[{value:"\u6392\u5e8f+\u53cc\u6307\u9488",id:"\u6392\u5e8f\u53cc\u6307\u9488",level:2}];function a(n){const e={code:"code",h2:"h2",pre:"pre",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u6392\u5e8f\u53cc\u6307\u9488",children:"\u6392\u5e8f+\u53cc\u6307\u9488"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar threeSum = function (nums) {\n  nums.sort((a, b) => a - b)\n\n  const ans = []\n  const n = nums.length\n\n  for (let i = 0; i < n - 2; i++) {\n    // \u5f53\u524d\u5143\u7d20\u4e0d\u7b49\u4e8e\u4e0a\u4e00\u4e2a\u5143\u7d20\n    if (i > 0 && nums[i] == nums[i - 1]) continue\n\n    // \u4f18\u5316\n    if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break\n    if (nums[i] + nums[n - 1] + nums[n - 2] < 0) continue\n\n    let j = i + 1\n    let k = n - 1\n\n    while (j < k) {\n      const sum = nums[i] + nums[j] + nums[k]\n\n      if (sum > 0) {\n        k--\n      } else if (sum < 0) {\n        j++\n      } else {\n        ans.push([nums[i], nums[j], nums[k]])\n\n        j++\n        while (j < k && nums[j] === nums[j - 1]) {\n          j++\n        }\n\n        k--\n        while (j < k && nums[k] === nums[k + 1]) {\n          k--\n        }\n      }\n    }\n  }\n\n  return ans\n}\n"})})]})}function c(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},9313:(n,e,t)=>{t.d(e,{Z:()=>u,a:()=>o});var s=t(5271);const i={},r=s.createContext(i);function o(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function u(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);