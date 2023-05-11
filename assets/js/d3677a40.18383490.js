"use strict";(self.webpackChunkdocs_template=self.webpackChunkdocs_template||[]).push([[153],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(2564),r=(n(9496),n(9613));const o={sidebar_position:1},i="Styling",l={unversionedId:"our-template/advanced-customization/styling",id:"our-template/advanced-customization/styling",title:"Styling",description:"Using Tailwind CSS",source:"@site/docs/our-template/advanced-customization/styling.mdx",sourceDirName:"our-template/advanced-customization",slug:"/our-template/advanced-customization/styling",permalink:"/docs-template/our-template/advanced-customization/styling",draft:!1,editUrl:"https://github.com/usherlabs/docs-template/tree/develop/docs/our-template/advanced-customization/styling.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"our-template",previous:{title:"Colors (Advanced)",permalink:"/docs-template/our-template/advanced-customization/colors-advanced"},next:{title:"Layout",permalink:"/docs-template/our-template/advanced-customization/layout"}},s={},u=[{value:"Using Tailwind CSS",id:"using-tailwind-css",level:2},{value:"Using CSS Modules",id:"using-css-modules",level:2},{value:"Modifying CSS Variables",id:"modifying-css-variables",level:2},{value:"Infima",id:"infima",level:3},{value:"Other Variables",id:"other-variables",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"styling"},"Styling"),(0,r.kt)("h2",{id:"using-tailwind-css"},"Using Tailwind CSS"),(0,r.kt)("p",null,"Tailwind CSS is a utility-first CSS framework that makes it easy to build custom designs quickly. Here's an example of an HTML code using Tailwind CSS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<button\n    onClick={() => alert("Clicked!")}\n    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow"\n>\n    Click me\n</button>\n')),(0,r.kt)("button",{onClick:()=>alert("Clicked!"),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow"},"Click me"),(0,r.kt)("p",null,"This code creates a button with a blue background, white text, and a drop shadow. When you hover over the button, the background color will darken."),(0,r.kt)("h2",{id:"using-css-modules"},"Using CSS Modules"),(0,r.kt)("p",null,"CSS Modules are a way to locally scope CSS by automatically creating unique class names. To use CSS Modules in a Docusaurus project, create a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"styles.module.css"))," file in your component folder. Here's an example component folder structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Component folder structure"',title:'"Component',folder:!0,'structure"':!0},"MyComponent/\n  \u251c\u2500\u2500 index.tsx\n  \u2514\u2500\u2500 styles.module.css\n")),(0,r.kt)("h2",{id:"modifying-css-variables"},"Modifying CSS Variables"),(0,r.kt)("h3",{id:"infima"},"Infima"),(0,r.kt)("p",null,"Docusaurus uses ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://infima.dev/"},"Infima"))," as its default CSS framework. Infima is a responsive and modular CSS framework built specifically for documentation websites. To customize the styling of your Docusaurus site, you can override Infima's CSS variables."),(0,r.kt)("h3",{id:"other-variables"},"Other Variables"),(0,r.kt)("p",null,"In addition to Infima's CSS variables, we have included custom variables in our template to facilitate further customization. You can find these variables in the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"src/styles"))," folder."))}p.isMDXComponent=!0}}]);