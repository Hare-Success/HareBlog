"use strict";(self.webpackChunkHareBlog=self.webpackChunkHareBlog||[]).push([[6103],{1751:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});t(5271);var o=t(5341),a=t(2870),i=t(7202),s=t(2367),r=t(2193),c=t(7770),l=t(9617),d=t(4625),u=t(2676);function g(e){var n=e.nextItem,t=e.prevItem;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.Z,Object.assign({},t,{subLabel:(0,u.jsx)(l.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})})),n&&(0,u.jsx)(d.Z,Object.assign({},n,{subLabel:(0,u.jsx)(l.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0}))]})}function p(){var e,n=(0,s.C)(),t=n.assets,o=n.metadata,i=o.title,r=o.description,c=o.date,l=o.tags,d=o.authors,g=o.frontMatter,p=g.keywords,m=null!=(e=t.image)?e:g.image;return(0,u.jsxs)(a.d,{title:i,description:r,keywords:p,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:c}),d.some((function(e){return e.url}))&&(0,u.jsx)("meta",{property:"article:author",content:d.map((function(e){return e.url})).filter(Boolean).join(",")}),l.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:l.map((function(e){return e.label})).join(",")})]})}var m=t(8671),h=t(238);function b(){var e=(0,h.i)();return(0,u.jsx)(m.Z,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var f=t(9738),x=t(2425);function j(e){var n=e.sidebar,t=e.children,o=(0,s.C)(),a=o.metadata,i=o.toc,l=a.nextItem,d=a.prevItem,p=a.frontMatter,m=a.unlisted,h=p.hide_table_of_contents,b=p.toc_min_heading_level,j=p.toc_max_heading_level;return(0,u.jsxs)(r.Z,{sidebar:n,toc:!h&&i.length>0?(0,u.jsx)(f.Z,{toc:i,minHeadingLevel:b,maxHeadingLevel:j}):void 0,children:[m&&(0,u.jsx)(x.Z,{}),(0,u.jsx)(c.Z,{children:t}),(l||d)&&(0,u.jsx)(g,{nextItem:l,prevItem:d})]})}function v(e){var n=e.content;return(0,u.jsx)(s.n,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(a.FG,{className:(0,o.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage),children:[(0,u.jsx)(p,{}),(0,u.jsx)(b,{}),(0,u.jsx)(j,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},2425:(e,n,t)=>{t.d(n,{Z:()=>p});t(5271);var o=t(5341),a=t(9617),i=t(8671),s=t(2676);function r(){return(0,s.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,s.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,s.jsx)(i.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(7202),u=t(1190);function g(e){var n=e.className;return(0,s.jsx)(u.Z,{type:"caution",title:(0,s.jsx)(r,{}),className:(0,o.Z)(n,d.k.common.unlistedBanner),children:(0,s.jsx)(c,{})})}function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{}),(0,s.jsx)(g,Object.assign({},e))]})}},238:(e,n,t)=>{t.d(n,{C:()=>d,i:()=>u});var o=t(5318),a=t(2815),i=t(6642);var s=t(2367),r=function(e){return new Date(e).toISOString()};function c(e){var n=e.map(g);return{author:1===n.length?n[0]:n}}function l(e,n,t){return e?{image:(o={imageUrl:n(e,{absolute:!0}),caption:"title image for the blog post: "+t},a=o.imageUrl,i=o.caption,{"@type":"ImageObject","@id":a,url:a,contentUrl:a,caption:i})}:{};var o,a,i}function d(e){var n=(0,a.Z)().siteConfig,t=(0,o.Cg)().withBaseUrl,i=e.metadata,s=i.blogDescription,d=i.blogTitle,u=i.permalink,g=""+n.url+u;return{"@context":"https://schema.org","@type":"Blog","@id":g,mainEntityOfPage:g,headline:d,description:s,blogPost:e.items.map((function(e){return function(e,n,t){var o,a,i=e.assets,s=e.frontMatter,d=e.metadata,u=d.date,g=d.title,p=d.description,m=d.lastUpdatedAt,h=null!=(o=i.image)?o:s.image,b=null!=(a=s.keywords)?a:[],f=""+n.url+d.permalink,x=m?r(m):void 0;return Object.assign({"@type":"BlogPosting","@id":f,mainEntityOfPage:f,url:f,headline:g,name:g,description:p,datePublished:u},x?{dateModified:x}:{},c(d.authors),l(h,t,g),b?{keywords:b}:{})}(e.content,n,t)}))}}function u(){var e,n,t=function(){var e,n=(0,i.Z)(),t=null==n||null==(e=n.data)?void 0:e.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),d=(0,s.C)(),u=d.assets,g=d.metadata,p=(0,a.Z)().siteConfig,m=(0,o.Cg)().withBaseUrl,h=g.date,b=g.title,f=g.description,x=g.frontMatter,j=g.lastUpdatedAt,v=null!=(e=u.image)?e:x.image,k=null!=(n=x.keywords)?n:[],B=j?r(j):void 0,y=""+p.url+g.permalink;return Object.assign({"@context":"https://schema.org","@type":"BlogPosting","@id":y,mainEntityOfPage:y,url:y,headline:b,name:b,description:f,datePublished:h},B?{dateModified:B}:{},c(g.authors),l(v,m,b),k?{keywords:k}:{},{isPartOf:{"@type":"Blog","@id":""+p.url+t.blogBasePath,name:t.blogTitle}})}function g(e){return Object.assign({"@type":"Person"},e.name?{name:e.name}:{},e.title?{description:e.title}:{},e.url?{url:e.url}:{},e.email?{email:e.email}:{},e.imageURL?{image:e.imageURL}:{})}},4859:(e,n,t)=>{t.d(n,{Z:()=>E});var o=t(353),a=t(1640),i=t(2303),s=t(3709),r=t(7202),c=t(4194),l=t(5271);const d={codeBlockContainer:"codeBlockContainer_APcc"};var u=t(2676),g=["as"];function p(e){var n=e.as,t=(0,o.Z)(e,g),a=(0,s.p)(),l=(0,c.QC)(a);return(0,u.jsx)(n,Object.assign({},t,{style:l,className:(0,i.cn)(t.className,d.codeBlockContainer,r.k.common.codeBlock)}))}const m={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function h(e){var n=e.children,t=e.className;return(0,u.jsx)(p,{as:"pre",tabIndex:0,className:(0,i.cn)(m.codeBlockStandalone,"thin-scrollbar",t),children:(0,u.jsx)("code",{className:m.codeBlockLines,children:n})})}var b=t(3127),f=t(8026),x=t(78),j=t(1058),v=t(9617),k=t(528),B=t(2220),y=t(7931);const N={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function C(e){var n=e.code,t=e.className,o=(0,l.useState)(!1),a=o[0],s=o[1],r=(0,l.useRef)(void 0),c=(0,l.useCallback)((function(){(0,y.Z)(n),s(!0),r.current=window.setTimeout((function(){s(!1)}),1e3)}),[n]);return(0,l.useEffect)((function(){return function(){return window.clearTimeout(r.current)}}),[]),(0,u.jsx)("button",{type:"button","aria-label":a?(0,v.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,v.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,v.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.cn)("clean-btn",t,N.copyButton,a&&N.copyButtonCopied),onClick:c,children:(0,u.jsxs)("span",{className:N.copyButtonIcons,"aria-hidden":"true",children:[(0,u.jsx)(k.Z,{className:N.copyButtonIcon}),(0,u.jsx)(B.Z,{className:N.copyButtonSuccessIcon})]})})}const _={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function w(e){var n,t=e.line,o=e.classNames,a=e.showLineNumbers,s=e.getLineProps,r=e.getTokenProps;1===t.length&&"\n"===(null==(n=t[0])?void 0:n.content)&&(t[0].content="");var c=s({line:t,className:(0,i.cn)(o,a&&_.codeLine)}),l=t.map((function(e,n){return(0,u.jsx)("span",Object.assign({},r({token:e,key:n})),n)}));return(0,u.jsxs)("span",Object.assign({},c,{children:[a?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{className:_.codeLineNumber}),(0,u.jsx)("span",{className:_.codeLineContent,children:l})]}):l,(0,u.jsx)("br",{})]}))}var Z=t(9848);const L={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function P(e){var n=e.className,t=e.onClick,o=e.isEnabled,a=(0,v.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,u.jsx)("button",{type:"button",onClick:t,className:(0,i.cn)("clean-btn",n,o&&L.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,u.jsx)(Z.Z,{className:L.wordWrapButtonIcon,"aria-hidden":"true"})})}var I=t(2429);function O(e){var n,t=e.children,o=e.className,a=void 0===o?"":o,r=e.metastring,l=e.title,d=e.showLineNumbers,g=e.language,h=(0,f.L)().prism,v=h.defaultLanguage,k=h.magicComments,B=function(e){return null==e?void 0:e.toLowerCase()}(null!=(n=null!=g?g:(0,c.Vo)(a))?n:v),y=(0,s.p)(),N=(0,x.F)(),_=(0,c.bc)(r)||l,Z=function(e){var n,t,o=(0,b.Z)(/icon=(["'])(.*?)\1/,{quote:1,icon:2}),a=null!=(n=null==e||null==(t=e.match(o))||null==(t=t.groups)?void 0:t.icon)?n:"";return a?(0,u.jsx)(j.JO,{icon:a,width:"16"}):null}(r),L=(0,c.nZ)(t,{metastring:r,language:B,magicComments:k}),O=L.lineClassNames,T=L.code,E=null!=d?d:(0,c.nt)(r);return(0,u.jsxs)(p,{as:"div",className:(0,i.cn)(a,B&&!a.includes("language-"+B)&&"language-"+B),children:[_&&(0,u.jsxs)("div",{className:m.codeBlockTitle,children:[Z,_,(0,u.jsx)("span",{style:{flex:1,textAlign:"right"},children:B})]}),(0,u.jsxs)("div",{className:m.codeBlockContent,children:[(0,u.jsx)(I.y$,{theme:y,code:T,language:null!=B?B:"text",children:function(e){var n=e.className,t=e.style,o=e.tokens,a=e.getLineProps,s=e.getTokenProps;return(0,u.jsx)("pre",{ref:N.codeBlockRef,className:(0,i.cn)(n,m.codeBlock,"thin-scrollbar"),style:t,children:(0,u.jsx)("code",{className:(0,i.cn)(m.codeBlockLines,E&&m.codeBlockLinesWithNumbering),children:o.map((function(e,n){return(0,u.jsx)(w,{line:e,getLineProps:a,getTokenProps:s,classNames:O[n],showLineNumbers:E},n)}))})})}}),(0,u.jsxs)("div",{className:m.buttonGroup,children:[(N.isEnabled||N.isCodeScrollable)&&(0,u.jsx)(P,{className:m.codeButton,onClick:function(){return N.toggle()},isEnabled:N.isEnabled}),(0,u.jsx)(C,{className:m.codeButton,code:T})]})]})]})}var T=["children"];function E(e){var n=e.children,t=(0,o.Z)(e,T),i=(0,a.Z)(),s=function(e){return l.Children.toArray(e).some((function(e){return(0,l.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(n),r="string"==typeof s?O:h;return(0,u.jsx)(r,Object.assign({},t,{children:s}),String(i))}},7507:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(8096),a=(t(5271),t(1058)),i=t(2676);function s(e){var n=e.href;if(!n)return(0,i.jsx)(o.Z,Object.assign({},e));var t={"github.com":"simple-icons:github","twitter.com":"logos:twitter"},s=Object.keys(t).find((function(e){return new RegExp("^https?://"+e).test(n)})),r=s?t[s]:null;return r?(0,i.jsxs)("span",{style:{display:"inline-flex",gap:"0.25rem"},children:[r&&(0,i.jsx)(a.JO,{className:"a-icon",style:{alignSelf:"center"},icon:r,width:16,height:16}),(0,i.jsx)(o.Z,Object.assign({},e))]}):(0,i.jsx)(o.Z,Object.assign({},e))}},4625:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(8096),a=t(2303),i=t(2676);function s(e){var n=e.permalink,t=e.title,s=e.subLabel,r=e.isNext;return(0,i.jsxs)(o.Z,{className:(0,a.cn)("pagination-nav__link border-2 border-link hover:bg-[#a1d8f71b]",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[s&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,i.jsx)("div",{className:"pagination-nav__label",children:t})]})}},9738:(e,n,t)=>{t.d(n,{Z:()=>b});var o=t(353),a=t(5052),i=t(1085),s=t(5271),r=function(){var e=(0,s.useState)(0),n=e[0],t=e[1],o=(0,s.useRef)(null),r=(0,a.v)({container:o}).scrollYProgress;return(0,s.useLayoutEffect)((function(){o.current=document.getElementById("__blog-post-container")}),[]),(0,i.W)(r,"change",(function(e){t(e)})),{readPercent:(0,s.useMemo)((function(){return Math.round(100*n)}),[n])}},c=t(2303),l=t(8610),d=t(6578);const u={tableOfContents:"tableOfContents_jeP5",docItemContainer:"docItemContainer_hgFs",hr:"hr_UhE0",percent:"percent_H6RK"};var g=t(2676),p=["className"],m="table-of-contents__link toc-highlight",h="table-of-contents__link--active";function b(e){var n=e.className,t=(0,o.Z)(e,p),a=r().readPercent;return(0,g.jsxs)(d.E.div,{className:(0,c.cn)(u.tableOfContents,"thin-scrollbar",n),initial:{opacity:1e-4,x:100},animate:{opacity:1,x:0},transition:{type:"spring",stiffness:400,damping:20,duration:3},children:[(0,g.jsx)(l.Z,Object.assign({},t,{className:"table-of-contents pl-0",linkClassName:m,linkActiveClassName:h})),(0,g.jsx)("hr",{className:u.hr}),(0,g.jsxs)("span",{className:u.percent,children:[a+"%"," "]})]})}},8074:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(8096),a=t(2303);t(5271);const i={tag:"tag_d0Lz",tagRegular:"tagRegular_bmnp",tagWithCount:"tagWithCount_vddX"};var s=t(2676);function r(e){var n=e.permalink,t=e.label,r=e.count,c=e.className;return(0,s.jsxs)(o.Z,{href:n,className:(0,a.cn)(i.tag,r?i.tagWithCount:i.tagRegular,c),children:[t,r&&(0,s.jsx)("span",{children:r})]})}}}]);