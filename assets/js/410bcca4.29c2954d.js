(self.webpackChunk=self.webpackChunk||[]).push([[44903],{3905:(e,t,r)=>{"use strict";r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){return function(t){var r=p(t.components);return n.createElement(e,i({},t,{components:r}))}},p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},36742:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var n=r(79973),a=r(67294),i=r(73727),s=r(52263),o=r(13919),l=r(10412),c=(0,a.createContext)({collectLink:function(){}}),u=r(44996),p=r(18780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const m=function(e){var t,r,m=e.isNavLink,h=e.to,f=e.href,g=e.activeClassName,v=e.isActive,w=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,b=void 0===y||y,x=(0,n.Z)(e,d),k=(0,s.default)().siteConfig,q=k.trailingSlash,O=k.baseUrl,E=(0,u.useBaseUrlUtils)().withBaseUrl,j=(0,a.useContext)(c),N=h||f,P=(0,o.Z)(N),R=null==N?void 0:N.replace("pathname://",""),C=void 0!==R?(r=R,b&&function(e){return e.startsWith("/")}(r)?E(r):r):void 0;C&&P&&(C=(0,p.applyTrailingSlash)(C,{trailingSlash:q,baseUrl:O}));var S=(0,a.useRef)(!1),L=m?i.OL:i.rU,U=l.default.canUseIntersectionObserver,A=(0,a.useRef)();(0,a.useEffect)((function(){return!U&&P&&null!=C&&window.docusaurus.prefetch(C),function(){U&&A.current&&A.current.disconnect()}}),[A,C,U,P]);var T=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,_=!C||!P||T;return C&&P&&!T&&!w&&j.collectLink(C),_?a.createElement("a",Object.assign({href:C},N&&!P&&{target:"_blank",rel:"noopener noreferrer"},x)):a.createElement(L,Object.assign({},x,{onMouseEnter:function(){S.current||null==C||(window.docusaurus.preload(C),S.current=!0)},innerRef:function(e){var t,r;U&&e&&P&&(t=e,r=function(){null!=C&&window.docusaurus.prefetch(C)},A.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(A.current.unobserve(t),A.current.disconnect(),r())}))})),A.current.observe(t))},to:C||""},m&&{isActive:v,activeClassName:g}))}},13919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>a})},44996:(e,t,r)=>{"use strict";r.r(t),r.d(t,{useBaseUrlUtils:()=>i,default:()=>s});var n=r(52263),a=r(13919);function i(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,s=i.forcePrependBaseUrl,o=void 0!==s&&s,l=i.absolute,c=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(o)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+u:u}(i,r,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var a,i=e.split(/[#?]/)[0],s="/"===i||i===n?i:(a=i,r?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,s)}},18780:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var i=r(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},29964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},68629:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(36742),a=r(44256),i=r(67294);function s(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var l=function(){var e=i.useState(!1),t=e[0],r=e[1],n=function(e){r(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:s},"Filing a task"))},u=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},p=function(){return i.createElement(o,null,i.createElement(c,null),i.createElement(l,null),i.createElement(u,null))},d=function(){return i.createElement(o,null,i.createElement(l,null),i.createElement(u,null))};const m=function(){return(0,a.fbContent)({internal:i.createElement(p,null),external:i.createElement(d,null)})}},89003:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>u,toc:()=>p,default:()=>m});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),s=r(68629),o=(r(44256),["components"]),l={id:"prerequisites",title:"Prerequisites",slug:"/getting-started/prerequisites/",description:"Prerequisites for setting up Relay",keywords:["prerequisites"]},c=void 0,u={unversionedId:"getting-started/prerequisites",id:"version-v13.0.0/getting-started/prerequisites",isDocsHomePage:!1,title:"Prerequisites",description:"Prerequisites for setting up Relay",source:"@site/versioned_docs/version-v13.0.0/getting-started/prerequisites.md",sourceDirName:"getting-started",slug:"/getting-started/prerequisites/",permalink:"/docs/getting-started/prerequisites/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/getting-started/prerequisites.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1649439302,formattedLastUpdatedAt:"4/8/2022",frontMatter:{id:"prerequisites",title:"Prerequisites",slug:"/getting-started/prerequisites/",description:"Prerequisites for setting up Relay",keywords:["prerequisites"]},sidebar:"version-v13.0.0/docs",previous:{title:"Introduction to Relay",permalink:"/docs/"},next:{title:"Installation and Setup",permalink:"/docs/getting-started/installation-and-setup/"}},p=[{value:"JavaScript",id:"javascript",children:[],level:2},{value:"React",id:"react",children:[],level:2},{value:"GraphQL",id:"graphql",children:[{value:"A GraphQL Schema",id:"a-graphql-schema",children:[],level:3},{value:"A GraphQL Server",id:"a-graphql-server",children:[],level:3}],level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Before getting started with Relay, bear in mind that we assume that the following infrastructure has already been set up, as well as some level of familiarity with the topics below."),(0,i.mdx)("h2",{id:"javascript"},"JavaScript"),(0,i.mdx)("p",null,"Relay is a framework built in JavaScript, so we assume familiarity with the JavaScript language."),(0,i.mdx)("h2",{id:"react"},"React"),(0,i.mdx)("p",null,"Relay is a framework for data management with the primary supported binding for React applications, so we assume that you are already familiar with ",(0,i.mdx)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),"."),(0,i.mdx)("h2",{id:"graphql"},"GraphQL"),(0,i.mdx)("p",null,"We also assume basic understanding of ",(0,i.mdx)("a",{parentName:"p",href:"http://graphql.org/learn/"},"GraphQL"),". In order to start using Relay, you will also need:"),(0,i.mdx)("h3",{id:"a-graphql-schema"},"A GraphQL Schema"),(0,i.mdx)("p",null,"A description of your data model with an associated set of resolve methods that know how to fetch any data your application could ever need."),(0,i.mdx)("p",null,"GraphQL is designed to support a wide range of data access patterns. In order to understand the structure of an application's data, Relay requires that you follow certain conventions when defining your schema. These are documented in the ",(0,i.mdx)("a",{parentName:"p",href:"../../guides/graphql-server-specification"},"GraphQL Server Specification"),"."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"https://github.com/graphql/graphql-js"},"graphql-js"))," on ",(0,i.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/graphql"},"npm")),(0,i.mdx)("p",{parentName:"li"},"General-purpose tools for building a GraphQL schema using JavaScript")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"https://github.com/graphql/graphql-relay-js"},"graphql-relay-js"))," on ",(0,i.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/graphql-relay"},"npm")),(0,i.mdx)("p",{parentName:"li"},"JavaScript helpers for defining connections between data, and mutations, in a way that smoothly integrates with Relay."))),(0,i.mdx)("h3",{id:"a-graphql-server"},"A GraphQL Server"),(0,i.mdx)("p",null,"Any server can be taught to load a schema and speak GraphQL. Our ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/relayjs/relay-examples"},"examples")," use Express."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("a",{parentName:"strong",href:"https://github.com/graphql/express-graphql"},"express-graphql"))," on ",(0,i.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/express-graphql"},"npm"))),(0,i.mdx)(s.Z,{mdxType:"DocsRating"}))}m.isMDXComponent=!0}}]);