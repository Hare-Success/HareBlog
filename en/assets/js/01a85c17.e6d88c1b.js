"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[13],{2193:(e,a,t)=>{t.d(a,{Z:()=>k});var r=t(353),s=t(5271),i=t(5341),n=t(2814),l=t(7038),c=t(8096),o=t(9617),d=t(3225),m=t(6269);function u(e){var a=(0,d.TH)().pathname;return(0,s.useMemo)((function(){return e.filter((function(e){return function(e,a){return!(e.unlisted&&!(0,m.Mg)(e.permalink,a))}(e,a)}))}),[e,a])}const g={sidebar:"sidebar_PYJR",sidebarItemTitle:"sidebarItemTitle_scl3",sidebarItemList:"sidebarItemList_hkNp",sidebarItem:"sidebarItem_mLu7",sidebarItemLink:"sidebarItemLink_Mv3h",sidebarItemLinkActive:"sidebarItemLinkActive_d4VQ"};var b=t(2676);function h(e){var a=e.sidebar,t=u(a.items);return(0,b.jsx)("aside",{className:"col col--3",children:(0,b.jsxs)("nav",{className:(0,i.Z)(g.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,b.jsx)("div",{className:(0,i.Z)(g.sidebarItemTitle,"margin-bottom--md"),children:a.title}),(0,b.jsx)("ul",{className:(0,i.Z)(g.sidebarItemList,"clean-list"),children:t.map((function(e){return(0,b.jsx)("li",{className:g.sidebarItem,children:(0,b.jsx)(c.Z,{isNavLink:!0,to:e.permalink,className:g.sidebarItemLink,activeClassName:g.sidebarItemLinkActive,children:e.title})},e.permalink)}))})]})})}var v=t(154);function j(e){var a=u(e.sidebar.items);return(0,b.jsx)("ul",{className:"menu__list",children:a.map((function(e){return(0,b.jsx)("li",{className:"menu__list-item",children:(0,b.jsx)(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)}))})}function p(e){return(0,b.jsx)(v.Zo,{component:j,props:e})}function f(e){var a=e.sidebar,t=(0,l.i)();return null!=a&&a.items.length?"mobile"===t?(0,b.jsx)(p,{sidebar:a}):(0,b.jsx)(h,{sidebar:a}):null}var x=["sidebar","toc","children"];function k(e){var a=e.sidebar,t=e.toc,s=e.children,l=(0,r.Z)(e,x),c=a&&a.items.length>0;return(0,b.jsx)(n.Z,Object.assign({},l,{children:(0,b.jsx)("div",{className:"container margin-vert--lg",children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)(f,{sidebar:a}),(0,b.jsx)("main",{className:(0,i.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),children:s}),t&&(0,b.jsx)("div",{className:"col col--2",children:t})]})})}))}},7061:(e,a,t)=>{t.r(a),t.d(a,{default:()=>v});t(5271);var r=t(5341),s=t(9617),i=function(){return(0,s.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};var n=t(2870),l=t(7202),c=t(2193),o=t(5061),d=t(487);const m={tag:"tag_W5qI"};var u=t(2676);function g(e){var a=e.letterEntry;return(0,u.jsxs)("article",{children:[(0,u.jsx)(d.Z,{as:"h2",id:a.letter,children:a.letter}),(0,u.jsx)("ul",{className:"padding--none",children:a.tags.map((function(e){return(0,u.jsx)("li",{className:m.tag,children:(0,u.jsx)(o.Z,Object.assign({},e))},e.permalink)}))}),(0,u.jsx)("hr",{})]})}function b(e){var a=function(e){var a={};return Object.values(e).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e.label);null!=a[t]||(a[t]=[]),a[t].push(e)})),Object.entries(a).sort((function(e,a){var t=e[0],r=a[0];return t.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,a){return e.label.localeCompare(a.label)}))}}))}(e.tags);return(0,u.jsx)("section",{className:"margin-vert--lg",children:a.map((function(e){return(0,u.jsx)(g,{letterEntry:e},e.letter)}))})}var h=t(7535);function v(e){var a=e.tags,t=e.sidebar,s=i();return(0,u.jsxs)(n.FG,{className:(0,r.Z)(l.k.wrapper.blogPages,l.k.page.blogTagsListPage),children:[(0,u.jsx)(n.d,{title:s}),(0,u.jsx)(h.Z,{tag:"blog_tags_list"}),(0,u.jsxs)(c.Z,{sidebar:t,children:[(0,u.jsx)(d.Z,{as:"h1",children:s}),(0,u.jsx)(b,{tags:a})]})]})}},5061:(e,a,t)=>{t.d(a,{Z:()=>l});t(5271);var r=t(5341),s=t(8096);const i={tag:"tag_T5Sf",tagRegular:"tagRegular_CxIL",tagWithCount:"tagWithCount_RmiX"};var n=t(2676);function l(e){var a=e.permalink,t=e.label,l=e.count,c=e.description;return(0,n.jsxs)(s.Z,{href:a,title:c,className:(0,r.Z)(i.tag,l?i.tagWithCount:i.tagRegular),children:[t,l&&(0,n.jsx)("span",{children:l})]})}}}]);