(self.webpackChunk=self.webpackChunk||[]).push([[34235],{3905:(e,n,t)=>{"use strict";t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>c});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){return function(n){var t=m(n.components);return r.createElement(e,i({},n,{components:t}))}},m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=m(t),u=a,g=c["".concat(o,".").concat(u)]||c[u]||p[u]||i;return t?r.createElement(g,s(s({ref:n},l),{},{components:t})):r.createElement(g,s({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},68629:(e,n,t)=>{"use strict";t.d(n,{Z:()=>m});var r=t(44256),a=t(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),n)}var s=function(){var e=a.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},l=function(){return a.createElement(o,null,a.createElement(d,null),a.createElement(s,null))},c=function(){return a.createElement(o,null,a.createElement(s,null))};const m=function(){return(0,r.fbContent)({internal:a.createElement(l,null),external:a.createElement(c,null)})}},21938:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>m,toc:()=>u,default:()=>y});var r=t(74034),a=t(79973),i=(t(67294),t(3905)),o=t(68629),s=t(44256),d=["components"],l={id:"rendering-connections",title:"Rendering Connections",slug:"/guided-tour/list-data/rendering-connections/",description:"Relay guide to rendering connections",keywords:["pagination","usePaginationFragment","connection"]},c=void 0,m={unversionedId:"guided-tour/list-data/rendering-connections",id:"version-v13.0.0/guided-tour/list-data/rendering-connections",isDocsHomePage:!1,title:"Rendering Connections",description:"Relay guide to rendering connections",source:"@site/versioned_docs/version-v13.0.0/guided-tour/list-data/rendering-connections.md",sourceDirName:"guided-tour/list-data",slug:"/guided-tour/list-data/rendering-connections/",permalink:"/docs/guided-tour/list-data/rendering-connections/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/guided-tour/list-data/rendering-connections.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1644431133,formattedLastUpdatedAt:"2/9/2022",frontMatter:{id:"rendering-connections",title:"Rendering Connections",slug:"/guided-tour/list-data/rendering-connections/",description:"Relay guide to rendering connections",keywords:["pagination","usePaginationFragment","connection"]},sidebar:"version-v13.0.0/docs",previous:{title:"Connections",permalink:"/docs/guided-tour/list-data/connections/"},next:{title:"Pagination",permalink:"/docs/guided-tour/list-data/pagination/"}},u=[],p=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",n)}},g=p("FbRenderingConnectionsUsingSuspenseList"),f=p("FbSuspenseListAlternative"),h={toc:u};function y(e){var n=e.components,t=(0,a.Z)(e,d);return(0,i.mdx)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"In Relay, in order to display a list of data that is backed by a GraphQL connection, first you need to declare a fragment that queries for a connection:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"const {graphql} = require('RelayModern');\n\nconst userFragment = graphql`\n  fragment UserFragment on User {\n    name\n    friends(after: $cursor, first: $count)\n      @connection(key: \"UserFragment_friends\") {\n      edges {\n        node {\n          ...FriendComponent\n        }\n      }\n    }\n  }\n`;\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"In the example above, we're querying for the ",(0,i.mdx)("inlineCode",{parentName:"li"},"friends")," field, which is a connection; in other words, it adheres to the connection spec. Specifically, we can query the ",(0,i.mdx)("inlineCode",{parentName:"li"},"edges")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"node"),"s in the connection; the ",(0,i.mdx)("inlineCode",{parentName:"li"},"edges")," usually contain information about the relationship between the entities, while the ",(0,i.mdx)("inlineCode",{parentName:"li"},"node"),"s are the actual entities at the other end of the relationship; in this case, the ",(0,i.mdx)("inlineCode",{parentName:"li"},"node"),"s are objects of type ",(0,i.mdx)("inlineCode",{parentName:"li"},"User")," representing the user's friends."),(0,i.mdx)("li",{parentName:"ul"},"In order to indicate to Relay that we want to perform pagination over this connection, we need to mark the field with the ",(0,i.mdx)("inlineCode",{parentName:"li"},"@connection")," directive. We must also provide a ",(0,i.mdx)("em",{parentName:"li"},"static")," unique identifier for this connection, known as the ",(0,i.mdx)("inlineCode",{parentName:"li"},"key"),". We recommend the following naming convention for the connection key: ",(0,i.mdx)("inlineCode",{parentName:"li"},"<fragment_name>_<field_name>"),"."),(0,i.mdx)("li",{parentName:"ul"},"We will go into more detail later as to why it is necessary to mark the field as a ",(0,i.mdx)("inlineCode",{parentName:"li"},"@connection")," and give it a unique ",(0,i.mdx)("inlineCode",{parentName:"li"},"key")," in our ",(0,i.mdx)("a",{parentName:"li",href:"../updating-connections/"},"Updating Connections")," section.")),(0,i.mdx)("p",null,"In order to render this fragment which queries for a connection, we can use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment")," Hook:"),(0,i.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(g,{mdxType:"FbRenderingConnectionsUsingSuspenseList"})),(0,i.mdx)(s.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {FriendsListPaginationQuery} from 'FriendsListPaginationQuery.graphql';\nimport type {FriendsListComponent_user$key} from 'FriendsList_user.graphql';\n\nconst React = require('React');\nconst {Suspense} = require('React');\n\nconst {graphql, usePaginationFragment} = require('react-relay');\n\ntype Props = {\n  user: FriendsListComponent_user$key,\n};\n\nfunction FriendsListComponent(props: Props) {\n  const {data} = usePaginationFragment<FriendsListPaginationQuery, _>(\n    graphql`\n      fragment FriendsListComponent_user on User\n      @refetchable(queryName: \"FriendsListPaginationQuery\") {\n        name\n        friends(first: $count, after: $cursor)\n        @connection(key: \"FriendsList_user_friends\") {\n          edges {\n            node {\n              ...FriendComponent\n            }\n          }\n        }\n      }\n    `,\n    props.user,\n  );\n\n\n  return (\n    <>\n      {data.name != null ? <h1>Friends of {data.name}:</h1> : null}\n\n      <div>\n        {/* Extract each friend from the resulting data */}\n        {(data.friends?.edges ?? []).map(edge => {\n          const node = edge.node;\n          return (\n            <Suspense fallback={<Glimmer />}>\n              <FriendComponent user={node} />\n            </Suspense>\n          );\n        })}\n      </div>\n    </>\n  );\n}\n\nmodule.exports = FriendsListComponent;\n")),(0,i.mdx)(f,{mdxType:"FbSuspenseListAlternative"}),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"usePaginationFragment")," behaves the same way as a ",(0,i.mdx)("inlineCode",{parentName:"li"},"useFragment")," (see the ",(0,i.mdx)("a",{parentName:"li",href:"../../rendering/fragments/"},"Fragments")," section), so our list of friends is available under ",(0,i.mdx)("inlineCode",{parentName:"li"},"data.friends.edges.node"),", as declared by the fragment. However, it also has a few additions:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"It expects a fragment that is a connection field annotated with the ",(0,i.mdx)("inlineCode",{parentName:"li"},"@connection")," directive"),(0,i.mdx)("li",{parentName:"ul"},"It expects a fragment that is annotated with the ",(0,i.mdx)("inlineCode",{parentName:"li"},"@refetchable")," directive. Note that  ",(0,i.mdx)("inlineCode",{parentName:"li"},"@refetchable"),' directive can only be added to fragments that are "refetchable", that is, on fragments that are on ',(0,i.mdx)("inlineCode",{parentName:"li"},"Viewer"),", on ",(0,i.mdx)("inlineCode",{parentName:"li"},"Query"),", on any type that implements ",(0,i.mdx)("inlineCode",{parentName:"li"},"Node")," (i.e. a type that has an ",(0,i.mdx)("inlineCode",{parentName:"li"},"id")," field), or on a ",(0,i.mdx)("inlineCode",{parentName:"li"},"@fetchable")," type. ",(0,i.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"}," For more info on ",(0,i.mdx)("inlineCode",{parentName:"li"},"@fetchable")," types, see ",(0,i.mdx)("a",{parentName:"li",href:"https://fb.workplace.com/groups/graphql.fyi/permalink/1539541276187011/"},"this post"),". ")))),(0,i.mdx)("li",{parentName:"ul"},"It takes two Flow type parameters: the type of the generated query (in our case  ",(0,i.mdx)("inlineCode",{parentName:"li"},"FriendsListPaginationQuery"),"), and a second type which can always be inferred, so you only need to pass underscore (",(0,i.mdx)("inlineCode",{parentName:"li"},"_"),")."))),(0,i.mdx)(o.Z,{mdxType:"DocsRating"}))}y.isMDXComponent=!0}}]);