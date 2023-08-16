"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[433],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(u,".").concat(d)]||c[d]||s[d]||o;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9940:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},l="Numbers",i={unversionedId:"configuration/numbers",id:"version-1.x.x/configuration/numbers",title:"Numbers",description:"Numbers represent virtual numbers used to route calls from/to the PSTN through Gateways.",source:"@site/versioned_docs/version-1.x.x/configuration/numbers.md",sourceDirName:"configuration",slug:"/configuration/numbers",permalink:"/docs/configuration/numbers",draft:!1,editUrl:"https://github.com/fonoster/routr-website/edit/main/versioned_docs/version-1.x.x/configuration/numbers.md",tags:[],version:"1.x.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"General",permalink:"/docs/configuration/general"},next:{title:"Peers",permalink:"/docs/configuration/peers"}},u={},p=[{value:"Number Resource",id:"number-resource",level:2},{value:"Example",id:"example",level:2}],m={toc:p},c="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"numbers"},"Numbers"),(0,a.kt)("p",null,"Numbers represent virtual numbers used to route calls from/to the PSTN through Gateways."),(0,a.kt)("p",null,"The Numbers configuration can be provided using the file ",(0,a.kt)("inlineCode",{parentName:"p"},"config/numbers.yml")," located at the root of your Routr installation."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If using Redis this configuration gets stored in the database.")),(0,a.kt)("h2",{id:"number-resource"},"Number Resource"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"apiVersion"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates the version of the resource (Not yet implemented)"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kind"),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the type of resource"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"metadata.ref"),(0,a.kt)("td",{parentName:"tr",align:null},"Reference to this resource"),(0,a.kt)("td",{parentName:"tr",align:null},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"metadata.gwRef"),(0,a.kt)("td",{parentName:"tr",align:null},"Reference to parent Gateway"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"metadata.geoInfo.city"),(0,a.kt)("td",{parentName:"tr",align:null},"City of the Number"),(0,a.kt)("td",{parentName:"tr",align:null},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"metadata.geoInfo.country"),(0,a.kt)("td",{parentName:"tr",align:null},"Country of the Number"),(0,a.kt)("td",{parentName:"tr",align:null},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"metadata.geoInfo.countryISOCode"),(0,a.kt)("td",{parentName:"tr",align:null},"The Country ISO code for the Number (i.e., US)"),(0,a.kt)("td",{parentName:"tr",align:null},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"spec.location.telUrl"),(0,a.kt)("td",{parentName:"tr",align:null},"Number URI available in the location server"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"spec.location.aorLink"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of record of SIP device for call routing"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- apiVersion: v1beta1\n  kind: Number\n  metadata:\n    ref: Number0001\n    gwRef: GW0001\n    geoInfo:\n      city: Columbus, GA\n      country: USA\n      countryISOCode: US\n  spec:\n    location:\n      telUrl: 'tel:17066041487'\n      aorLink: 'sip:john@sip.local'\n")))}s.isMDXComponent=!0}}]);