"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[4013],{2193:(e,a,t)=>{t.d(a,{Z:()=>k});var r=t(353),s=t(5271),i=t(5341),n=t(3791),l=t(7038),c=t(8096),o=t(9617),d=t(3225),m=t(6269);function u(e){var a=(0,d.TH)().pathname;return(0,s.useMemo)((function(){return e.filter((function(e){return function(e,a){return!(e.unlisted&&!(0,m.Mg)(e.permalink,a))}(e,a)}))}),[e,a])}const g={sidebar:"sidebar_PYJR",sidebarItemTitle:"sidebarItemTitle_scl3",sidebarItemList:"sidebarItemList_hkNp",sidebarItem:"sidebarItem_mLu7",sidebarItemLink:"sidebarItemLink_Mv3h",sidebarItemLinkActive:"sidebarItemLinkActive_d4VQ"};var b=t(2676);function h(e){var a=e.sidebar,t=u(a.items);return(0,b.jsx)("aside",{className:"col col--3",children:(0,b.jsxs)("nav",{className:(0,i.Z)(g.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,b.jsx)("div",{className:(0,i.Z)(g.sidebarItemTitle,"margin-bottom--md"),children:a.title}),(0,b.jsx)("ul",{className:(0,i.Z)(g.sidebarItemList,"clean-list"),children:t.map((function(e){return(0,b.jsx)("li",{className:g.sidebarItem,children:(0,b.jsx)(c.Z,{isNavLink:!0,to:e.permalink,className:g.sidebarItemLink,activeClassName:g.sidebarItemLinkActive,children:e.title})},e.permalink)}))})]})})}var v=t(154);function j(e){var a=u(e.sidebar.items);return(0,b.jsx)("ul",{className:"menu__list",children:a.map((function(e){return(0,b.jsx)("li",{className:"menu__list-item",children:(0,b.jsx)(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)}))})}function p(e){return(0,b.jsx)(v.Zo,{component:j,props:e})}function f(e){var a=e.sidebar,t=(0,l.i)();return null!=a&&a.items.length?"mobile"===t?(0,b.jsx)(p,{sidebar:a}):(0,b.jsx)(h,{sidebar:a}):null}var x=["sidebar","toc","children"];function k(e){var a=e.sidebar,t=e.toc,s=e.children,l=(0,r.Z)(e,x),c=a&&a.items.length>0;return(0,b.jsx)(n.Z,Object.assign({},l,{children:(0,b.jsx)("div",{className:"container margin-vert--lg",children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)(f,{sidebar:a}),(0,b.jsx)("main",{className:(0,i.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),children:s}),t&&(0,b.jsx)("div",{className:"col col--2",children:t})]})})}))}},4854:(e,a,t)=>{t.r(a),t.d(a,{default:()=>u});t(5271);var r=t(5341),s=t(8317),i=t(8825),n=t(7202),l=t(2193),c=t(6861),o=t(7535),d=t(487),m=t(2676);function u(e){var a=e.tags,t=e.sidebar,u=(0,s.M)();return(0,m.jsxs)(i.FG,{className:(0,r.Z)(n.k.wrapper.blogPages,n.k.page.blogTagsListPage),children:[(0,m.jsx)(i.d,{title:u}),(0,m.jsx)(o.Z,{tag:"blog_tags_list"}),(0,m.jsxs)(l.Z,{sidebar:t,children:[(0,m.jsx)(d.Z,{as:"h1",children:u}),(0,m.jsx)(c.Z,{tags:a})]})]})}},5061:(e,a,t)=>{t.d(a,{Z:()=>l});t(5271);var r=t(5341),s=t(8096);const i={tag:"tag_T5Sf",tagRegular:"tagRegular_CxIL",tagWithCount:"tagWithCount_RmiX"};var n=t(2676);function l(e){var a=e.permalink,t=e.label,l=e.count,c=e.description;return(0,n.jsxs)(s.Z,{href:a,title:c,className:(0,r.Z)(i.tag,l?i.tagWithCount:i.tagRegular),children:[t,l&&(0,n.jsx)("span",{children:l})]})}},6861:(e,a,t)=>{t.d(a,{Z:()=>o});t(5271);var r=t(8317),s=t(5061),i=t(487);const n={tag:"tag_W5qI"};var l=t(2676);function c(e){var a=e.letterEntry;return(0,l.jsxs)("article",{children:[(0,l.jsx)(i.Z,{as:"h2",id:a.letter,children:a.letter}),(0,l.jsx)("ul",{className:"padding--none",children:a.tags.map((function(e){return(0,l.jsx)("li",{className:n.tag,children:(0,l.jsx)(s.Z,Object.assign({},e))},e.permalink)}))}),(0,l.jsx)("hr",{})]})}function o(e){var a=e.tags,t=(0,r.P)(a);return(0,l.jsx)("section",{className:"margin-vert--lg",children:t.map((function(e){return(0,l.jsx)(c,{letterEntry:e},e.letter)}))})}},8317:(e,a,t)=>{t.d(a,{M:()=>s,P:()=>i});var r=t(9617),s=function(){return(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function i(e){var a={};return Object.values(e).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e.label);null!=a[t]||(a[t]=[]),a[t].push(e)})),Object.entries(a).sort((function(e,a){var t=e[0],r=a[0];return t.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,a){return e.label.localeCompare(a.label)}))}}))}}}]);