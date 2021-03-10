(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{280:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(319)),o={id:"suspense-compatibility",title:"Suspense Combatibility",slug:"/migration-and-compatibility/suspense-compatibility/"},s={unversionedId:"migration-and-compatibility/suspense-compatibility",id:"migration-and-compatibility/suspense-compatibility",isDocsHomePage:!1,title:"Suspense Combatibility",description:"What about Suspense?",source:"@site/docs/current/migration-and-compatibility/suspense-compatibility.md",slug:"/migration-and-compatibility/suspense-compatibility/",permalink:"/docs/next/migration-and-compatibility/suspense-compatibility/",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/current/migration-and-compatibility/suspense-compatibility.md",version:"current",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1615415253,sidebar:"docs",previous:{title:"Upgrading to Relay Hooks",permalink:"/docs/next/migration-and-compatibility/"},next:{title:"Relay Hooks and Legacy Container APIs",permalink:"/docs/next/migration-and-compatibility/relay-hooks-and-legacy-container-apis/"}},l=[{value:"What about Suspense?",id:"what-about-suspense",children:[]},{value:"Is Suspense for Data Fetching ready yet?",id:"is-suspense-for-data-fetching-ready-yet",children:[]},{value:"What does it mean for me if I start using Relay Hooks in React 17?",id:"what-does-it-mean-for-me-if-i-start-using-relay-hooks-in-react-17",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-about-suspense"},"What about Suspense?"),Object(i.b)("p",null,"Relay Hooks uses React Suspense for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../guided-tour/rendering/loading-states/"}),"specifying loading states"),", so you might be wondering: Why is that the case if Suspense for Data Fetching is still not supported? Does this mean that Suspense for Data Fetching is officially supported now in React 17?"),Object(i.b)("h2",{id:"is-suspense-for-data-fetching-ready-yet"},"Is Suspense for Data Fetching ready yet?"),Object(i.b)("p",null,"The short answer is: ",Object(i.b)("strong",{parentName:"p"},"NO"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Support, general guidance, and requirements for usage of Suspense for Data Fetching are still not ready"),", and the React team is still defining what this guidance will be for upcoming React releases."),Object(i.b)("p",null,"With that said, even though there are still things to figure out before Suspense for Data Fetching can be broadly implemented and adopted, we released Relay Hooks on React 17 for a few reasons:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Relay was a very early adopter of Suspense, and collaborated with React on the research of Suspense for Data Fetching. It was one of the first testing grounds for using Suspense in production, and helped inform some of its design decisions. As such, there are still parts of our Suspense ",Object(i.b)("em",{parentName:"li"},"implementation")," that reflect those early learnings (which aren't yet fully documented) and which aren't quite where we want them to be. Although we know there are still likely changes to be made in the implementation, and that there will be some limitations when Suspense is used in React 17, we know Relay Hooks are on the right trajectory for upcoming releases of React, and those changes can be streamlined and allow us to release Relay Hooks a bit earlier."),Object(i.b)("li",{parentName:"ul"},"The Relay Hooks APIs represent the APIs we want to deliver long-term for Relay and which we believe are an improvement over our previous APIs. Even though their underlying implementation is still changing and will likely change more as the Suspense for Data Fetching guidance is documented and finalized by the React team, the Relay Hooks APIs themselves are stable. They have been widely adopted internally at Facebook, and have been in use in production for over a year, so we are confident that they work. We want to allow the community to start adopting them, and be able to get external feedback from the community as well.")),Object(i.b)("h2",{id:"what-does-it-mean-for-me-if-i-start-using-relay-hooks-in-react-17"},"What does it mean for me if I start using Relay Hooks in React 17?"),Object(i.b)("p",null,"What this means for users adopting Relay Hooks is:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"There will be some limitations when using Suspense in React 17, which we've documented in ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../../guided-tour/refetching/refetching-queries-with-different-data/#if-you-need-to-avoid-suspense"}),"our docs"),". Specifically, the current release includes a subset of features that work with both synchronous rendering and concurrent rendering. In order to fully support Suspense for Data Fetching, we also need features such as concurrently rendering suspended trees, and transitioning to new trees when data is refetched. The APIs we've currently released will allow us to support concurrent rendering with the same APIs in future versions of React."),Object(i.b)("li",{parentName:"ul"},"When a future version of React is released that fully supports concurrent rendering and Suspense for Data Fetching, Relay will also make a new major release alongside the React release. That release will likely include breaking changes that we will document for the upgrade.")))}u.isMDXComponent=!0},319:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(o,".").concat(h)]||p[h]||d[h]||i;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);