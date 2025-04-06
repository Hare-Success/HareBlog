"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[1160],{7324:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>u,metadata:()=>o,toc:()=>i});var n=r(2676),a=r(9313);r(7660),r(7389);const u={id:"factoryPattern",title:"\u5de5\u5382\u6a21\u5f0f",authors:"Hare",tags:["\u8bbe\u8ba1\u6a21\u5f0f"]},l="\u5de5\u5382\u6a21\u5f0f",o={id:"DataStructuresAlgorithms/\u8bbe\u8ba1\u6a21\u5f0f/\u521b\u5efa\u578b\u6a21\u5f0f/factoryPattern",title:"\u5de5\u5382\u6a21\u5f0f",description:"\u5de5\u5382\u6a21\u5f0f\u5c5e\u4e8e23\u4e2d\u8bbe\u8ba1\u6a21\u5f0f\u4e2d\u7684\u521b\u5efa\u578b\u6a21\u5f0f\uff0c\u5b83\u63d0\u4f9b\u4e00\u79cd\u521b\u5efa\u5bf9\u8c61\u7684\u8fc7\u7a0b\u4e0e\u4f7f\u7528\u76f8\u5206\u79bb\u7684\u65b9\u5f0f\u3002",source:"@site/docs/DataStructuresAlgorithms/\u8bbe\u8ba1\u6a21\u5f0f/\u521b\u5efa\u578b\u6a21\u5f0f/Factory\u5de5\u5382\u6a21\u5f0f.md",sourceDirName:"DataStructuresAlgorithms/\u8bbe\u8ba1\u6a21\u5f0f/\u521b\u5efa\u578b\u6a21\u5f0f",slug:"/DataStructuresAlgorithms/\u8bbe\u8ba1\u6a21\u5f0f/\u521b\u5efa\u578b\u6a21\u5f0f/factoryPattern",permalink:"/en/docs/DataStructuresAlgorithms/\u8bbe\u8ba1\u6a21\u5f0f/\u521b\u5efa\u578b\u6a21\u5f0f/factoryPattern",draft:!1,unlisted:!1,tags:[{inline:!0,label:"\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/en/docs/tags/\u8bbe\u8ba1\u6a21\u5f0f"}],version:"current",lastUpdatedAt:1743935444e3,frontMatter:{id:"factoryPattern",title:"\u5de5\u5382\u6a21\u5f0f",authors:"Hare",tags:["\u8bbe\u8ba1\u6a21\u5f0f"]}},s={},i=[{value:"\u7b80\u5355\u5de5\u5382",id:"\u7b80\u5355\u5de5\u5382",level:2}];function c(e){const t={h1:"h1",h2:"h2",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u5de5\u5382\u6a21\u5f0f",children:"\u5de5\u5382\u6a21\u5f0f"}),"\n",(0,n.jsxs)(t.p,{children:["\u5de5\u5382\u6a21\u5f0f\u5c5e\u4e8e23\u4e2d\u8bbe\u8ba1\u6a21\u5f0f\u4e2d\u7684\u521b\u5efa\u578b\u6a21\u5f0f\uff0c\u5b83\u63d0\u4f9b\u4e00\u79cd\u521b\u5efa\u5bf9\u8c61\u7684\u8fc7\u7a0b\u4e0e\u4f7f\u7528\u76f8\u5206\u79bb\u7684\u65b9\u5f0f\u3002",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(t.p,{children:["\u521b\u4e1a\u5f00\u59cb\u4e86~~~",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(t.p,{children:["\u624b\u673a\u9c7c\u9f99\u6df7\u6742\u7684\u5e74\u4ee3\uff0c\u5c0f\u660e\u627e\u5230\u4e86\u5546\u673a\uff01\u6295\u8d44\u4e86\u5236\u9020\u624b\u673a\u884c\u4e1a\uff0c\u5df2\u77e5\u76ee\u524d\u7684\u54c1\u724c\u5305\u62ec\u534e\u4e3a\uff0c\u5c0f\u7c73\uff0c\u82f9\u679c",(0,n.jsx)("br",{}),"\n\u5c0f\u660e\u521b\u529e\u516c\u53f8\uff0c\u5f00\u53d1\u4e86\u4e00\u4e2a\u81ea\u5df1\u516c\u53f8\u7684\u5b98\u7f51\u5e76\u4e14\u5b98\u7f51\u9996\u9875\u5199\u7740:\u6211\u53f8\u5236\u9020\u534e\u4e3a\uff0c\u5c0f\u7c73\uff0c\u82f9\u679c\u624b\u673a\uff01"]}),"\n",(0,n.jsx)(t.p,{children:"\u5c0f\u9ed1\u5b50\u627e\u5c0f\u660e"}),"\n",(0,n.jsx)(t.h2,{id:"\u7b80\u5355\u5de5\u5382",children:"\u7b80\u5355\u5de5\u5382"}),"\n",(0,n.jsx)(t.p,{children:"\u7b80\u5355\u5de5\u5382\u53c8\u53ef\u79f0\u4e3a\u9759\u6001\u65b9\u6cd5\u5de5\u5382\uff0c\u4e25\u683c\u4e0a\u5e76\u4e0d\u5c5e\u4e8e23\u79cd\u8bbe\u8ba1\u6a21\u5f0f\u3002\u7406\u89e3\u597d\u7b80\u5355\u5de5\u5382\u6709\u52a9\u4e8e\u4e0b\u9762\u66f4\u6df1\u5c42\u7684\u5de5\u5382\uff01"})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},7389:(e,t,r)=>{r.d(t,{Z:()=>l});r(5271);var n=r(5341);const a={tabItem:"tabItem_S1wv"};var u=r(2676);function l(e){var t=e.children,r=e.hidden,l=e.className;return(0,u.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,l),hidden:r,children:t})}},7660:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(5271),a=r(5341),u=r(5925),l=r(3225),o=r(3680),s=r(9779),i=r(8105),c=r(8379);function d(e){var t,r;return null!=(t=null==(r=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}function f(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(r);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function v(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId,u=(0,l.k6)(),o=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((function(e){if(o){var t=new URLSearchParams(u.location.search);t.set(o,e),u.replace(Object.assign({},u.location,{search:t.toString()}))}}),[o,u])]}function p(e){var t,r,a,u,l=e.defaultValue,s=e.queryString,i=void 0!==s&&s,d=e.groupId,p=f(e),b=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!v({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:p})})),m=b[0],g=b[1],y=h({queryString:i,groupId:d}),x=y[0],j=y[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,c.Nk)(t),a=r[0],u=r[1],[a,(0,n.useCallback)((function(e){t&&u.set(e)}),[t,u])]),V=w[0],k=w[1],I=function(){var e=null!=x?x:V;return v({value:e,tabValues:p})?e:null}();return(0,o.Z)((function(){I&&g(I)}),[I]),{selectedValue:m,selectValue:(0,n.useCallback)((function(e){if(!v({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),j(e),k(e)}),[j,k,p]),tabValues:p}}var b=r(1640);const m={tabList:"tabList_Bom4",tabItem:"tabItem_vnng"};var g=r(2676);function y(e){var t=e.className,r=e.block,n=e.selectedValue,l=e.selectValue,o=e.tabValues,s=[],i=(0,u.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,r=s.indexOf(t),a=o[r].value;a!==n&&(i(t),l(a))},d=function(e){var t,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,a=s.indexOf(e.currentTarget)+1;r=null!=(n=s[a])?n:s[0];break;case"ArrowLeft":var u,l=s.indexOf(e.currentTarget)-1;r=null!=(u=s[l])?u:s[s.length-1]}null==(t=r)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:o.map((function(e){var t=e.value,r=e.label,u=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:function(e){return s.push(e)},onKeyDown:d,onClick:c},u,{className:(0,a.Z)("tabs__item",m.tabItem,null==u?void 0:u.className,{"tabs__item--active":n===t}),children:null!=r?r:t}),t)}))})}function x(e){var t=e.lazy,r=e.children,a=e.selectedValue,u=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var l=u.find((function(e){return e.props.value===a}));return l?(0,n.cloneElement)(l,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:u.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function j(e){var t=p(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(y,Object.assign({},t,e)),(0,g.jsx)(x,Object.assign({},t,e))]})}function w(e){var t=(0,b.Z)();return(0,g.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(t))}},9313:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>l});var n=r(5271);const a={},u=n.createContext(a);function l(e){const t=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(u.Provider,{value:t},e.children)}}}]);