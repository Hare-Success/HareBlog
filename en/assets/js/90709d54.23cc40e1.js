"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[5899],{1226:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=r(2676),a=r(9313),l=r(7660),i=r(7389);const s={id:"algorithmsBubbleSort",title:"\u5192\u6ce1\u6392\u5e8f",authors:"Hare",tags:["\u6570\u636e\u7ed3\u6784","\u7b97\u6cd5","\u57fa\u7840\uff0c\u6392\u5e8f"]},u="\u5192\u6ce1\u6392\u5e8f",o={id:"DataStructuresAlgorithms/\u7b97\u6cd5/\u5341\u5927\u6392\u5e8f/algorithmsBubbleSort",title:"\u5192\u6ce1\u6392\u5e8f",description:"\u5192\u6ce1\u6392\u5e8f\u601d\u60f3",source:"@site/docs/DataStructuresAlgorithms/\u7b97\u6cd5/\u5341\u5927\u6392\u5e8f/Alforithms\u5192\u6ce1\u6392\u5e8f.md",sourceDirName:"DataStructuresAlgorithms/\u7b97\u6cd5/\u5341\u5927\u6392\u5e8f",slug:"/DataStructuresAlgorithms/\u7b97\u6cd5/\u5341\u5927\u6392\u5e8f/algorithmsBubbleSort",permalink:"/en/docs/DataStructuresAlgorithms/\u7b97\u6cd5/\u5341\u5927\u6392\u5e8f/algorithmsBubbleSort",draft:!1,unlisted:!1,tags:[{inline:!0,label:"\u6570\u636e\u7ed3\u6784",permalink:"/en/docs/tags/\u6570\u636e\u7ed3\u6784"},{inline:!0,label:"\u7b97\u6cd5",permalink:"/en/docs/tags/\u7b97\u6cd5"},{inline:!0,label:"\u57fa\u7840\uff0c\u6392\u5e8f",permalink:"/en/docs/tags/\u57fa\u7840\uff0c\u6392\u5e8f"}],version:"current",lastUpdatedAt:1740810883e3,frontMatter:{id:"algorithmsBubbleSort",title:"\u5192\u6ce1\u6392\u5e8f",authors:"Hare",tags:["\u6570\u636e\u7ed3\u6784","\u7b97\u6cd5","\u57fa\u7840\uff0c\u6392\u5e8f"]},sidebar:"DataStructuresAlgorithms",previous:{title:"\u5341\u5927\u6392\u5e8f",permalink:"/en/docs/category/\u5341\u5927\u6392\u5e8f"},next:{title:"\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/en/docs/category/\u8bbe\u8ba1\u6a21\u5f0f"}},c={},d=[{value:"\u5192\u6ce1\u6392\u5e8f\u601d\u60f3",id:"\u5192\u6ce1\u6392\u5e8f\u601d\u60f3",level:2},{value:"\u5192\u6ce1\u6392\u5e8f\u52a8\u6001\u56fe",id:"\u5192\u6ce1\u6392\u5e8f\u52a8\u6001\u56fe",level:3},{value:"\u5192\u6ce1\u6392\u5e8f\u63a8\u7406",id:"\u5192\u6ce1\u6392\u5e8f\u63a8\u7406",level:3},{value:"\u89c4\u5f8b\u603b\u7ed3",id:"\u89c4\u5f8b\u603b\u7ed3",level:3},{value:"\u5177\u4f53\u4ee3\u7801\u5b9e\u73b0",id:"\u5177\u4f53\u4ee3\u7801\u5b9e\u73b0",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"\u65f6\u95f4\u590d\u6742\u5ea6",id:"\u65f6\u95f4\u590d\u6742\u5ea6",level:3},{value:"\u6700\u574f\u60c5\u51b5",id:"\u6700\u574f\u60c5\u51b5",level:4},{value:"\u6700\u4f18\u60c5\u51b5",id:"\u6700\u4f18\u60c5\u51b5",level:4},{value:"\u7a7a\u95f4\u590d\u6742\u5ea6",id:"\u7a7a\u95f4\u590d\u6742\u5ea6",level:3},{value:"\u7a33\u5b9a\u6027",id:"\u7a33\u5b9a\u6027",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u5192\u6ce1\u6392\u5e8f",children:"\u5192\u6ce1\u6392\u5e8f"}),"\n",(0,t.jsx)(n.h2,{id:"\u5192\u6ce1\u6392\u5e8f\u601d\u60f3",children:"\u5192\u6ce1\u6392\u5e8f\u601d\u60f3"}),"\n",(0,t.jsx)(n.h3,{id:"\u5192\u6ce1\u6392\u5e8f\u52a8\u6001\u56fe",children:"\u5192\u6ce1\u6392\u5e8f\u52a8\u6001\u56fe"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"\u5192\u6ce1\u6392\u5e8f\u52a8\u6001\u56fe",src:r(4668).Z+"",width:"826",height:"257"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5192\u6ce1\u6392\u5e8f\u63a8\u7406",children:"\u5192\u6ce1\u6392\u5e8f\u63a8\u7406"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"\u5192\u6ce1\u6392\u5e8f\u63a8\u7406\u56fe",src:r(753).Z+"",width:"991",height:"984"})}),"\n",(0,t.jsx)(n.h3,{id:"\u89c4\u5f8b\u603b\u7ed3",children:"\u89c4\u5f8b\u603b\u7ed3"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u8d9f\u6570(\u8f6e\u6570)\n\u7531\u4e0a\u56fe\u53ef\u77e5\u6211\u4eec\u7684\u6570\u7ec4\u6709\u4e94\u4e2a\u5143\u7d20\uff0c\u90a3\u4e00\u5171\u7684\u8d9f\u6570\u4e5f\u5c31\u662f 5-1=4 \u4e00\u5171\u662f\u56db\u8d9f\u3002",(0,t.jsx)("br",{}),"\n\u90a3\u6211\u4eec\u5143\u7d20\u6709n\u4e2a\uff0c\u90a3\u8eba\u6570\u5c31\u662f n-1\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u4ea4\u6362\u6b21\u6570",(0,t.jsx)("br",{}),"\n\u7b2c\u4e00\u8f6e\uff1a\u5143\u7d20\u4e2a\u65705-1=\u56db\u6b21",(0,t.jsx)("br",{}),"\n\u7b2c\u4e8c\u8f6e\uff1a\u5143\u7d20\u4e2a\u65705-2=\u4e09\u6b21",(0,t.jsx)("br",{}),"\n\u7b2c\u4e09\u8f6e\uff1a\u5143\u7d20\u4e2a\u65705-3=\u4e8c\u6b21",(0,t.jsx)("br",{}),"\n\u7b2c\u56db\u8f6e: \u5143\u7d20\u4e2a\u65705-4=\u4e00\u6b21\n",(0,t.jsx)(n.strong,{children:"\u4ea4\u6362\u6b21\u6570=4+3+2+1 = 10 = (n - 1) + (n - 2) + ... + 2 + 1 = n * (n - 1) / 2"}),(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5177\u4f53\u4ee3\u7801\u5b9e\u73b0",children:"\u5177\u4f53\u4ee3\u7801\u5b9e\u73b0"}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(i.Z,{value:"Java",label:"Java",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"    public static int bubbleSort(int[] param) {\n    int length = param.length;\n    int temp = 0;\n    for (int i = 0; i < length-1; i++) {\n        for (int j = 0; j < length - 1 -i; j++) {\n            if (param[j] > param[j+1]) {\n                temp = param[j];\n                param[j] = param[j+1];\n                param[j+1] = temp;\n            }\n        }\n    }\n}\n"})})}),(0,t.jsx)(i.Z,{value:"Java\u6700\u4f18",label:"Java\u6700\u4f18\u60c5\u51b5",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public static int bubbleSort(int[] num) {\n    int length = param.length;\n    int temp = 0;\n    for (int i = 0; i < length-1; i++) {\n        boolean flg = false;\n        for (int j = 0; j < length - 1 -i; j++) {\n            if (param[j] > param[j+1]) {\n                temp = param[j];\n                param[j] = param[j+1];\n                param[j+1] = temp;\n                flg = true;\n            }\n        }\n        if(!flg){\n          //\u90a3\u5c31\u662f\u4ee3\u8868\u5143\u7d20\u5df2\u7ecf\u662f\u6392\u597d\u7684\u5e76\u6ca1\u6709\u8fdb\u884c\u4ea4\u6362\n          return;\n        }\n    }\n// \u4ee5\u4e0a\u4ee3\u7801\u4e2d\u52a0\u5165boolean\u63a7\u5236\uff0c\u5f53\u7b2c\u4e00\u6b21\u5c31\u6ca1\u6709\u5143\u7d20\u8fdb\u884c\u4ea4\u6362\uff0c\u90a3\u5c31\u662f\u8bf4\u660e\u5143\u7d20\u672c\u8eab\u5c31\u662f\u6709\u5e8f\u7684\u3002**\u90a3\u5bf9\u4e8e\u65f6\u95f4\u590d\u6742\u5ea6\u5c31\u662f\u7ebf\u6027\u9636:O(n)**\n\uff5d\n"})})}),(0,t.jsx)(i.Z,{value:"Python",label:"Python",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://pan.baidu.com/s/1pHP2QulSthS7PhKnNeQsyA?pwd=1475",children:"https://pan.baidu.com/s/1pHP2QulSthS7PhKnNeQsyA?pwd=1475"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,t.jsx)(n.h3,{id:"\u65f6\u95f4\u590d\u6742\u5ea6",children:"\u65f6\u95f4\u590d\u6742\u5ea6"}),"\n",(0,t.jsx)(n.h4,{id:"\u6700\u574f\u60c5\u51b5",children:"\u6700\u574f\u60c5\u51b5"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5047\u5982\u662f\u5df2\u7ecf\u662f\u5347\u5e8f\u6392\u597d\u7684\uff0c\u73b0\u5c06\u964d\u5e8f\u6392\u5217\u3002",(0,t.jsxs)(n.strong,{children:["\u90a3\u5bf9\u4e8e\u65f6\u95f4\u590d\u6742\u5ea6\u5c31\u662f\u5e73\u65b9\u9636",":O","(n^2)"]}),(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"\u6700\u4f18\u60c5\u51b5",children:"\u6700\u4f18\u60c5\u51b5"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u52a0\u5165boolean\u63a7\u5236\uff0c\u5f53\u7b2c\u4e00\u6b21\u5c31\u6ca1\u6709\u5143\u7d20\u8fdb\u884c\u4ea4\u6362\uff0c\u90a3\u5c31\u662f\u8bf4\u660e\u5143\u7d20\u672c\u8eab\u5c31\u662f\u6709\u5e8f\u7684\u3002",(0,t.jsxs)(n.strong,{children:["\u90a3\u5bf9\u4e8e\u65f6\u95f4\u590d\u6742\u5ea6\u5c31\u662f\u7ebf\u6027\u9636",":O","(n)"]})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u7a7a\u95f4\u590d\u6742\u5ea6",children:"\u7a7a\u95f4\u590d\u6742\u5ea6"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["\u7a7a\u95f4\u590d\u6742\u5ea6\u5c31\u662f",":O","(1)"]})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u7a33\u5b9a\u6027",children:"\u7a33\u5b9a\u6027"}),"\n",(0,t.jsx)(n.p,{children:"\u5192\u6ce1\u6392\u5e8f\u5c5e\u4e8e\u7a33\u5b9a\u7684\u6392\u5e8f"})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},7389:(e,n,r)=>{r.d(n,{Z:()=>i});r(5271);var t=r(5341);const a={tabItem:"tabItem_S1wv"};var l=r(2676);function i(e){var n=e.children,r=e.hidden,i=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:r,children:n})}},7660:(e,n,r)=>{r.d(n,{Z:()=>S});var t=r(5271),a=r(5341),l=r(5925),i=r(3225),s=r(3680),u=r(9779),o=r(8105),c=r(8379);function d(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function b(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,l=(0,i.k6)(),s=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,u._X)(s),(0,t.useCallback)((function(e){if(s){var n=new URLSearchParams(l.location.search);n.set(s,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[s,l])]}function v(e){var n,r,a,l,i=e.defaultValue,u=e.queryString,o=void 0!==u&&u,d=e.groupId,v=h(e),f=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:v})})),m=f[0],g=f[1],j=b({queryString:o,groupId:d}),x=j[0],y=j[1],S=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,c.Nk)(n),a=r[0],l=r[1],[a,(0,t.useCallback)((function(e){n&&l.set(e)}),[n,l])]),k=S[0],w=S[1],V=function(){var e=null!=x?x:k;return p({value:e,tabValues:v})?e:null}();return(0,s.Z)((function(){V&&g(V)}),[V]),{selectedValue:m,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),w(e)}),[y,w,v]),tabValues:v}}var f=r(1640);const m={tabList:"tabList_Bom4",tabItem:"tabItem_vnng"};var g=r(2676);function j(e){var n=e.className,r=e.block,t=e.selectedValue,i=e.selectValue,s=e.tabValues,u=[],o=(0,l.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,r=u.indexOf(n),a=s[r].value;a!==t&&(o(n),i(a))},d=function(e){var n,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,a=u.indexOf(e.currentTarget)+1;r=null!=(t=u[a])?t:u[0];break;case"ArrowLeft":var l,i=u.indexOf(e.currentTarget)-1;r=null!=(l=u[i])?l:u[u.length-1]}null==(n=r)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:s.map((function(e){var n=e.value,r=e.label,l=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return u.push(e)},onKeyDown:d,onClick:c},l,{className:(0,a.Z)("tabs__item",m.tabItem,null==l?void 0:l.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function x(e){var n=e.lazy,r=e.children,a=e.selectedValue,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var i=l.find((function(e){return e.props.value===a}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=v(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(j,Object.assign({},n,e)),(0,g.jsx)(x,Object.assign({},n,e))]})}function S(e){var n=(0,f.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},4668:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/\u5192\u6ce1\u6392\u5e8f-9b053bb1c7bf889037b38345190b913f.gif"},753:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/\u5192\u6ce1\u6392\u5e8f-c6951d3d3d1a004f119bda9c33295857.jpg"},9313:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>i});var t=r(5271);const a={},l=t.createContext(a);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);