(self.webpackChunk=self.webpackChunk||[]).push([[29655],{3905:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),d=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,y=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return t?n.createElement(y,o(o({ref:r},s),{},{components:t})):n.createElement(y,o({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},60818:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>d,toc:()=>s,default:()=>c});var n=t(22122),a=t(19756),i=(t(67294),t(3905)),o=["components"],l={id:"query-renderer",title:"QueryRenderer",original_id:"query-renderer"},p=void 0,d={unversionedId:"query-renderer",id:"version-v9.1.0/query-renderer",isDocsHomePage:!1,title:"QueryRenderer",description:"A QueryRenderer is a React Component at the root of a Relay component tree. It takes a query, fetches the given query, and uses the render prop to render the resulting data.",source:"@site/versioned_docs/version-v9.1.0/Modern-QueryRenderer.md",sourceDirName:".",slug:"/query-renderer",permalink:"/docs/v9.1.0/query-renderer",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v9.1.0/Modern-QueryRenderer.md",version:"v9.1.0",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1626959985,formattedLastUpdatedAt:"7/22/2021",frontMatter:{id:"query-renderer",title:"QueryRenderer",original_id:"query-renderer"},sidebar:"version-v9.1.0/docs",previous:{title:"Network Layer",permalink:"/docs/v9.1.0/network-layer"},next:{title:"Fragment Container",permalink:"/docs/v9.1.0/fragment-container"}},s=[{value:"Props",id:"props",children:[]},{value:"Example",id:"example",children:[]}],u={toc:s};function c(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryRenderer")," is a React Component at the root of a Relay component tree. It takes a query, fetches the given query, and uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"render")," prop to render the resulting data."),(0,i.kt)("p",null,"As React components, ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryRenderer"),"s can be rendered anywhere that a React component can be rendered, i.e. not just at the top level but ",(0,i.kt)("em",{parentName:"p"},"within")," other components or containers; for example, to lazily fetch additional data for a popover."),(0,i.kt)("p",null,"However, a ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryRenderer")," will not start loading its data until it is mounted, so nested ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryRenderer")," components can lead to request waterfalls if used unnecessarily."),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"environment"),": The ",(0,i.kt)("a",{parentName:"li",href:"./relay-environment"},"Relay Environment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query"),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"graphql")," tagged query. ",(0,i.kt)("strong",{parentName:"li"},"Note:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"relay-compiler")," enforces the query to be named as ",(0,i.kt)("inlineCode",{parentName:"li"},"<FileName>Query"),". Optional, if not provided, an empty ",(0,i.kt)("inlineCode",{parentName:"li"},"props")," object is passed to the ",(0,i.kt)("inlineCode",{parentName:"li"},"render")," callback."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cacheConfig?"),": Optional object containing a set of cache configuration options, i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"force: true")," requires the fetch to be issued regardless of the state of any configured response cache."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fetchPolicy?"),": Optional prop to indicate if data already present in the store should be used to render immediately and updated from the network afterwards using the ",(0,i.kt)("inlineCode",{parentName:"li"},"store-and-network")," key. Using the ",(0,i.kt)("inlineCode",{parentName:"li"},"network-only")," key, which is the default behavior, ignores data already present in the store and waits for the network results to come back."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"variables"),": Object containing set of variables to pass to the GraphQL query, i.e. a mapping from variable name to value. ",(0,i.kt)("strong",{parentName:"li"},"Note:")," If a new set of variables is passed, the ",(0,i.kt)("inlineCode",{parentName:"li"},"QueryRenderer")," will re-fetch the query."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"render"),": Function of type ",(0,i.kt)("inlineCode",{parentName:"li"},"({error, props, retry}) => React.Node"),". The output of this function will be rendered by the ",(0,i.kt)("inlineCode",{parentName:"li"},"QueryRenderer"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"props"),": Object containing data obtained from the query; the shape of this object will match the shape of the query. If this object is not defined, it means that the data is still being fetched."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error"),": Error will be defined if an error has occurred while fetching the query."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retry"),": Reload the data. It is null if ",(0,i.kt)("inlineCode",{parentName:"li"},"query")," was not provided.")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Example.js\nimport React from 'react';\nimport { QueryRenderer, graphql } from 'react-relay';\n\nconst renderQuery = ({error, props}) => {\n  if (error) {\n    return <div>{error.message}</div>;\n  } else if (props) {\n    return <div>{props.page.name} is great!</div>;\n  }\n  return <div>Loading</div>;\n}\n\nconst Example = (props) => {\n  return (\n    <QueryRenderer\n      environment={environment}\n      query={graphql`\n        query ExampleQuery($pageID: ID!) {\n          page(id: $pageID) {\n            name\n          }\n        }\n      `}\n      variables={{\n        pageID: '110798995619330',\n      }}\n      render={renderQuery}\n    />\n  );\n}\n")))}c.isMDXComponent=!0}}]);