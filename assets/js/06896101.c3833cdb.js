"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[3185],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?o.createElement(h,l(l({ref:t},u),{},{components:r})):o.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4337:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={},l="Deploy with Docker",i={unversionedId:"overview/deploy-with-docker",id:"overview/deploy-with-docker",title:"Deploy with Docker",description:"Deploying Routr with Docker is the easiest way to get started. This guide will walk you through the process of deploying Routr with Docker.",source:"@site/docs/overview/deploy-with-docker.md",sourceDirName:"overview",slug:"/overview/deploy-with-docker",permalink:"/docs/next/overview/deploy-with-docker",draft:!1,editUrl:"https://github.com/fonoster/routr-website/edit/main/docs/overview/deploy-with-docker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/docs/next/overview/concepts"},next:{title:"Community",permalink:"/docs/next/community"}},s={},c=[{value:"Deploying Routr",id:"deploying-routr",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deploy-with-docker"},"Deploy with Docker"),(0,n.kt)("p",null,"Deploying Routr with Docker is the easiest way to get started. This guide will walk you through the process of deploying Routr with Docker."),(0,n.kt)("p",null,"You will need Docker and Docker Compose installed on your machine as a prerequisite. If you don't have them installed, you can follow the instructions ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"here.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Connect Mode is the most common way to deploy Routr. It is our implementation of the SIPConnect standard. The Connect Mode describes SIP routing regarding Agents, Peers, Trunks, Numbers, and ACL. More on this later.")),(0,n.kt)("h2",{id:"deploying-routr"},"Deploying Routr"),(0,n.kt)("p",null,'First, create a directory named "routr". Navigate into the new folder, and then copy the content below:'),(0,n.kt)("p",null,"Filename: docker-compose.yml"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\n\nservices:\n  routr:\n    image: fonoster/routr-one:latest\n    environment:\n      EXTERNAL_ADDRS: ${DOCKER_HOST_ADDRESS}\n    ports:\n      - 51908:51908\n      - 5060:5060/udp\n    volumes:\n      - shared:/var/lib/postgresql/data\n\nvolumes:\n  shared:\n')),(0,n.kt)("p",null,"Then, start the server with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Be sure to replace with your IP address\nDOCKER_HOST_ADDRESS=192.168.1.3 docker-compose up\n")),(0,n.kt)("p",null,"Wait a few seconds for the container to initialize. Afterward, you can verify the status of the container using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps -a --format 'table {{.ID}}\\t{{.Image}}\\t{{.Status}}'\n")),(0,n.kt)("p",null,"You should see something like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"CONTAINER ID  IMAGE                                     STATUS\n6c63fd573768  fonoster/routr-one:latest                 Up About a minute\n")),(0,n.kt)("p",null,'If the status of your service is "Up," you are ready to go.'),(0,n.kt)("p",null,"Finally, install the command-line tool and start building your SIP Network."),(0,n.kt)("p",null,"You can install the tool with npm as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --location=global @routr/ctl\n")),(0,n.kt)("p",null,"Here is an example of creating an SIP Domain:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"rctl domains create --insecure\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The --insecure flag is required as we did not set up the TLS settings.")),(0,n.kt)("p",null,"For additional examples, refer to the command-line ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@routr/ctl"},"documentation"),"."))}d.isMDXComponent=!0}}]);