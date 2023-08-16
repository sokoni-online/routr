"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[9917],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(n),d=a,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i="createNumber",p={unversionedId:"api/numbers/create",id:"version-1.x.x/api/numbers/create",title:"createNumber",description:"Creates a new Number. The Gateway must exist before creating the Number.",source:"@site/versioned_docs/version-1.x.x/api/numbers/create.md",sourceDirName:"api/numbers",slug:"/api/numbers/create",permalink:"/docs/api/numbers/create",draft:!1,editUrl:"https://github.com/fonoster/routr-website/edit/main/versioned_docs/version-1.x.x/api/numbers/create.md",tags:[],version:"1.x.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"listEndpoints",permalink:"/docs/api/location/list"},next:{title:"deleteNumber",permalink:"/docs/api/numbers/delete"}},s={},l=[],u={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"createnumber"},"createNumber"),(0,a.kt)("p",null,"Creates a new Number. The Gateway must exist before creating the Number.\nOtherwise, this method responds with a ",(0,a.kt)("inlineCode",{parentName:"p"},"UNFULFILLED_DEPENDENCY_RESPONSE"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/numbers")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",null,"This method does not receive any parameters."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Request body")),(0,a.kt)("p",null,"A file containing a ",(0,a.kt)("a",{parentName:"p",href:"/configuration/numbers"},"Number")," resource in ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," format."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Response")),(0,a.kt)("p",null,"If successful this method creates a Number."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sample Call")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'POST /api/{apiversion}/numbers\n{\n    "apiVersion": "v1beta1",\n    "kind": "Number",\n    "metadata": {\n        "gwRef": "gweef506",\n        "geoInfo": {\n            "city": "City, State",\n            "country": "Country",\n            "countryISOCode": "US"\n        }\n    },\n    "spec": {\n        "location": {\n            "telUrl": "tel:0000000000",\n            "aorLink": "sip:1001@sip.local"\n        }\n    }\n}\n\nHTTP/1.1 201 Created\n{\n    "status": "201",\n    "message": "Created",\n    "data": "dd50baa4"\n}\n')))}m.isMDXComponent=!0}}]);