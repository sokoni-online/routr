"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[2885],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4120:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={},l="Peers",o={unversionedId:"configuration/peers",id:"version-1.x.x/configuration/peers",title:"Peers",description:"Like Agents, Peers represent SIP endpoints such as Media Servers.",source:"@site/versioned_docs/version-1.x.x/configuration/peers.md",sourceDirName:"configuration",slug:"/configuration/peers",permalink:"/docs/configuration/peers",draft:!1,editUrl:"https://github.com/fonoster/routr-website/edit/main/versioned_docs/version-1.x.x/configuration/peers.md",tags:[],version:"1.x.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Numbers",permalink:"/docs/configuration/numbers"},next:{title:"Users",permalink:"/docs/configuration/users"}},s={},p=[{value:"Peer Resource",id:"peer-resource",level:2},{value:"Example",id:"example",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"peers"},"Peers"),(0,a.kt)("p",null,"Like Agents, Peers represent SIP endpoints such as Media Servers."),(0,a.kt)("p",null,"Unlike Agents, Peers aren't bound by a Domain."),(0,a.kt)("p",null,"The Peers configuration can be provided using the file ",(0,a.kt)("inlineCode",{parentName:"p"},"config/peers.yml")," located at the root of your Routr installation."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If using Redis this configuration gets stored in the database.")),(0,a.kt)("h2",{id:"peer-resource"},"Peer Resource"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"apiVersion"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates the version of the resource (Not yet implemented)"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kind"),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the type of resource"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"metadata.name"),(0,a.kt)("td",{parentName:"tr",align:null},"Friendly name for the SIP device"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"spec.credentials.username"),(0,a.kt)("td",{parentName:"tr",align:null},"Peer's credential username"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"spec.credentials.secret"),(0,a.kt)("td",{parentName:"tr",align:null},"Peer's credential secret"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"spec.device"),(0,a.kt)("td",{parentName:"tr",align:null},"When set it is used by the location service"),(0,a.kt)("td",{parentName:"tr",align:null},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"spec.contactAddr"),(0,a.kt)("td",{parentName:"tr",align:null},"When set advertises this as the contactURI"),(0,a.kt)("td",{parentName:"tr",align:null},"No")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- apiVersion: v1beta1\n  kind: Peer\n  metadata:\n    name: Asterisk (Media Server)\n  spec:\n    credentials:\n      username: ast\n      secret: 'astsecret'\n    device: astserver      # If is not define the IP address will be used\n    contactAddr: '192.168.1.2:6060'\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This peer can be reached using the AOR: ",(0,a.kt)("inlineCode",{parentName:"p"},"ast@astserver"),".")))}d.isMDXComponent=!0}}]);