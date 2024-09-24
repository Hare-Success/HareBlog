"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[5657],{1845:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=n(2676),a=n(9313),o=n(7660),l=n(7389);const i={id:"dockerBottom",title:"\u8ba4\u8bc6Docker",authors:"Hare",tags:["docker"]},u="\u7b80\u5355\u8ba4\u8bc6Docker",c={id:"docker/dockerBottom",title:"\u8ba4\u8bc6Docker",description:"docker \u5fc5\u987b\u4f9d\u8d56\u4e8eLinux\u5185\u6838\u7684\u7cfb\u7edf\uff01\u60f3\u4f7f\u7528docker\u5fc5\u987b\u6709\u4e00\u4e2aLinux\u73af\u5883\uff01",source:"@site/docs/docker/\u8ba4\u8bc6Docker.md",sourceDirName:"docker",slug:"/docker/dockerBottom",permalink:"/docs/docker/dockerBottom",draft:!1,unlisted:!1,tags:[{inline:!0,label:"docker",permalink:"/docs/tags/docker"}],version:"current",lastUpdatedAt:1727167544e3,frontMatter:{id:"dockerBottom",title:"\u8ba4\u8bc6Docker",authors:"Hare",tags:["docker"]},sidebar:"ContainersAndMiddleware",previous:{title:"Docker",permalink:"/docs/category/docker"},next:{title:"Docker\u5b89\u88c5",permalink:"/docs/docker/dockerInstall"}},s={},d=[{value:"Docker\u4e09\u5144\u5f1f",id:"docker\u4e09\u5144\u5f1f",level:2},{value:"Docker\u80fd\u5e72\u4ec0\u4e48",id:"wantDocker",level:2},{value:"Docker\u67b6\u6784",id:"dockerArchitecture",level:2}];function h(e){const r={admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:i}=r;return i||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"\u7b80\u5355\u8ba4\u8bc6docker",children:(0,t.jsx)(r.strong,{children:"\u7b80\u5355\u8ba4\u8bc6Docker"})}),"\n",(0,t.jsx)(r.admonition,{title:"\u8c28\u8bb0\u4e8e\u5fc3",type:"note",children:(0,t.jsx)(r.p,{children:"docker \u5fc5\u987b\u4f9d\u8d56\u4e8eLinux\u5185\u6838\u7684\u7cfb\u7edf\uff01\u60f3\u4f7f\u7528docker\u5fc5\u987b\u6709\u4e00\u4e2aLinux\u73af\u5883\uff01"})}),"\n",(0,t.jsx)(r.h2,{id:"docker\u4e09\u5144\u5f1f",children:"Docker\u4e09\u5144\u5f1f"}),"\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(l.Z,{value:"images",label:"\u955c\u50cf",default:!0,children:(0,t.jsx)(r.p,{children:"\u62ffJava\u7c7b\u5bf9\u6807\u955c\u50cf\uff0c\u662f\u4e0d\u662f\u6e05\u695a\u4e86 \ud83d\udc91"})}),(0,t.jsx)(l.Z,{value:"container",label:"\u5bb9\u5668",children:(0,t.jsx)(r.p,{children:"\u5bb9\u5668\u5bf9\u6807Java\u7c7bnew\u51fa\u6765\u7684\u5b9e\u4f8b\uff0c\u955c\u50cf run\u51fa\u6765\u7684\u5bb9\u5668\u3002"})}),(0,t.jsx)(l.Z,{value:"repository",label:"\u4ed3\u5e93",children:(0,t.jsx)(r.p,{children:"\u5b58\u653e\u955c\u50cf\u7684\u4ed3\u5e93"})})]}),"\n",(0,t.jsx)(r.h2,{id:"wantDocker",children:"Docker\u80fd\u5e72\u4ec0\u4e48"}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsx)(r.p,{children:"\u96c6\u6210\u9879\u76ee\u73af\u5883\uff0c\u90e8\u7f72\u7701\u65f6\u7701\u529b\uff01\u65e0\u89c6\u56e0\u73af\u5883\u95ee\u9898\u5bfc\u81f4\u90e8\u7f72\u9891\u7e41\u9519\u8bef\u3002\n\u7b80\u5355\u79fb\u690d\uff0c\u65e0\u89c6\u64cd\u4f5c\u7cfb\u7edf\u9650\u5236\uff0c\u6548\u7387\u6709\u6548\u63d0\u9ad8"})}),"\n",(0,t.jsx)(r.h2,{id:"dockerArchitecture",children:"Docker\u67b6\u6784"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Docker\u67b6\u6784\u56fe",src:n(3318).Z+"",width:"1233",height:"651"})}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"\u4e86\u89e3\u67b6\u6784\u524d\uff0c\u8bb2\u89e3\u4ec0\u4e48\u662f Daemon"}),(0,t.jsx)(r.p,{children:"Daemon\u5b88\u62a4\u8fdb\u7a0b:\n\u60f3\u8c61\u4e00\u4e0b\uff0c\u4f60\u7684\u7535\u8111\u662f\u4e00\u5bb6\u996d\u5e97\uff0c\u800cDaemon\u5c31\u662f\u90a3\u4e9b\u5de5\u4f5c\u7684\u53a8\u5e08\u548c\u670d\u52a1\u5458\u3002\u4ed6\u4eec\u5728\u4f60\u4e0d\u7528\u9910\u5385\u7684\u65f6\u5019\u4e5f\u5728\u5de5\u4f5c\uff0c\u51c6\u5907\u7740\u4e0b\u4e00\u9910\u7684\u98df\u6750\uff0c\u786e\u4fdd\u9910\u5385\u7684\u8bbe\u65bd\u8bbe\u5907\u6b63\u5e38\u8fd0\u884c\uff0c\u6216\u8005\u6e05\u7406\u9910\u5177\u548c\u684c\u9762\u3002\u5c3d\u7ba1\u4f60\u53ef\u80fd\u6ca1\u6709\u76f4\u63a5\u770b\u5230\u4ed6\u4eec\uff0c\u4f46\u4ed6\u4eec\u7684\u5de5\u4f5c\u5374\u662f\u786e\u4fdd\u6574\u4e2a\u9910\u5385\u80fd\u591f\u987a\u5229\u8fd0\u884c\u7684\u91cd\u8981\u4e00\u73af\u3002"}),(0,t.jsx)(r.p,{children:"\u540c\u6837\u5730\uff0c\u5b88\u62a4\u8fdb\u7a0b\u5728\u8ba1\u7b97\u673a\u7cfb\u7edf\u4e2d\u5c31\u50cf\u8fd9\u4e9b\u9ed8\u9ed8\u5de5\u4f5c\u7684\u201c\u5458\u5de5\u201d\uff0c\u5b83\u4eec\u53ef\u80fd\u8d1f\u8d23\u7ba1\u7406\u7f51\u7edc\u8fde\u63a5\u3001\u6267\u884c\u81ea\u52a8\u5907\u4efd\u3001\u63d0\u4f9b\u7f51\u9875\u670d\u52a1\uff0c\u6216\u8005\u6267\u884c\u5176\u4ed6\u81ea\u52a8\u5316\u4efb\u52a1\u3002\u5b83\u4eec\u59cb\u7ec8\u5728\u540e\u53f0\u8fd0\u884c\uff0c\u4e0d\u9700\u8981\u7528\u6237\u4ea4\u4e92\uff0c\u4f46\u5374\u662f\u7cfb\u7edf\u6b63\u5e38\u8fd0\u884c\u6240\u5fc5\u9700\u7684\u91cd\u8981\u90e8\u5206\u3002\n\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u81ea\u52a8\u542f\u52a8\uff0c\u5e76\u4e00\u76f4\u8fd0\u884c\uff0c\u76f4\u5230\u7cfb\u7edf\u5173\u95ed\u6216\u624b\u52a8\u505c\u6b62\u3002"})]}),"\n",(0,t.jsx)(r.p,{children:"\u63a5\u4e0b\u6765\u6211\u4eec\u7b80\u5355\u4e32\u4e00\u4e0b\u6d41\u7a0b:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"\u5ba2\u6237\u7aef\u53ef\u4ee5build\u6784\u5efa\u3001pull\u62c9\u53d6\u3001run\u5bb9\u5668\uff01"}),"\n",(0,t.jsx)(r.li,{children:"\u5ba2\u6237\u7aef\u7684\u64cd\u4f5c\u901a\u77e5\u5230\u4e86Daemon\u5b88\u62a4\u8fdb\u7a0b\uff0c\u8fdb\u884c\u6267\u884c\uff01"}),"\n",(0,t.jsx)(r.li,{children:"\u82e5\u672c\u5730\u6ca1\u6709\u53efrun\u7684\u955c\u50cf\uff0c\u5c31\u8981\u5148\u53bb\u8fdc\u7a0b\u4ed3\u5e93pull\u62c9\u53d6/build\u6784\u5efa\u955c\u50cf\uff0c\u672c\u5730\u6709\u53ef\u76f4\u63a5run\uff01"}),"\n"]})]})}function f(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},7389:(e,r,n)=>{n.d(r,{Z:()=>l});n(5271);var t=n(5341);const a={tabItem:"tabItem_S1wv"};var o=n(2676);function l(e){var r=e.children,n=e.hidden,l=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,l),hidden:n,children:r})}},7660:(e,r,n)=>{n.d(r,{Z:()=>y});var t=n(5271),a=n(5341),o=n(5925),l=n(3225),i=n(3680),u=n(9779),c=n(8105),s=n(8379);function d(e){var r,n;return null!=(r=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function h(e){var r=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=r?r:function(e){return d(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r=(0,c.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function f(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function p(e){var r=e.queryString,n=void 0!==r&&r,a=e.groupId,o=(0,l.k6)(),i=function(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:a});return[(0,u._X)(i),(0,t.useCallback)((function(e){if(i){var r=new URLSearchParams(o.location.search);r.set(i,e),o.replace(Object.assign({},o.location,{search:r.toString()}))}}),[i,o])]}function v(e){var r,n,a,o,l=e.defaultValue,u=e.queryString,c=void 0!==u&&u,d=e.groupId,v=h(e),m=(0,t.useState)((function(){return function(e){var r,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(r=t.find((function(e){return e.default})))?r:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:v})})),b=m[0],k=m[1],g=p({queryString:c,groupId:d}),x=g[0],j=g[1],y=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,s.Nk)(r),a=n[0],o=n[1],[a,(0,t.useCallback)((function(e){r&&o.set(e)}),[r,o])]),w=y[0],D=y[1],I=function(){var e=null!=x?x:w;return f({value:e,tabValues:v})?e:null}();return(0,i.Z)((function(){I&&k(I)}),[I]),{selectedValue:b,selectValue:(0,t.useCallback)((function(e){if(!f({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);k(e),j(e),D(e)}),[j,D,v]),tabValues:v}}var m=n(1640);const b={tabList:"tabList_Bom4",tabItem:"tabItem_vnng"};var k=n(2676);function g(e){var r=e.className,n=e.block,t=e.selectedValue,l=e.selectValue,i=e.tabValues,u=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,s=function(e){var r=e.currentTarget,n=u.indexOf(r),a=i[n].value;a!==t&&(c(r),l(a))},d=function(e){var r,n=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":var t,a=u.indexOf(e.currentTarget)+1;n=null!=(t=u[a])?t:u[0];break;case"ArrowLeft":var o,l=u.indexOf(e.currentTarget)-1;n=null!=(o=u[l])?o:u[u.length-1]}null==(r=n)||r.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:i.map((function(e){var r=e.value,n=e.label,o=e.attributes;return(0,k.jsx)("li",Object.assign({role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:function(e){return u.push(e)},onKeyDown:d,onClick:s},o,{className:(0,a.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===r}),children:null!=n?n:r}),r)}))})}function x(e){var r=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var l=o.find((function(e){return e.props.value===a}));return l?(0,t.cloneElement)(l,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:o.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})}))})}function j(e){var r=v(e);return(0,k.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,k.jsx)(g,Object.assign({},r,e)),(0,k.jsx)(x,Object.assign({},r,e))]})}function y(e){var r=(0,m.Z)();return(0,k.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(r))}},3318:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/docker-architecture-9e263875703c804cd2ea34bd18618fd7.webp"},9313:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>l});var t=n(5271);const a={},o=t.createContext(a);function l(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);