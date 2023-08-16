"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[8654],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=u(r),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(h,l(l({ref:e},p),{},{components:r})):n.createElement(h,l({ref:e},p))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1543:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},l="Installation",i={unversionedId:"introduction/installation",id:"version-1.x.x/introduction/installation",title:"Installation",description:"Instant Server Installation with Snaps",source:"@site/versioned_docs/version-1.x.x/introduction/installation.md",sourceDirName:"introduction",slug:"/introduction/installation",permalink:"/docs/introduction/installation",draft:!1,editUrl:"https://github.com/fonoster/routr-website/edit/main/versioned_docs/version-1.x.x/introduction/installation.md",tags:[],version:"1.x.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/introduction/overview"},next:{title:"Comparison",permalink:"/docs/introduction/comparison"}},s={},u=[{value:"Instant Server Installation with Snaps",id:"instant-server-installation-with-snaps",level:2},{value:"DigitalOcean droplet",id:"digitalocean-droplet",level:2},{value:"Docker",id:"docker",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Google Cloud Shell",id:"google-cloud-shell",level:2},{value:"Custom",id:"custom",level:2}],p={toc:u},c="wrapper";function d(t){let{components:e,...r}=t;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"instant-server-installation-with-snaps"},"Instant Server Installation with Snaps"),(0,a.kt)("p",null,"Install Routr in seconds on Linux (Ubuntu and others) with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo snap install routr-server\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://snapcraft.io/routr-server"},(0,a.kt)("img",{parentName:"a",src:"https://snapcraft.io/static/images/badges/en/snap-store-black.svg",alt:"Get it from the Snap Store"}))),(0,a.kt)("p",null,"Routr Snap is recommended for Linux deployments"),(0,a.kt)("p",null,"Installing snaps is very quick. By running that command you have your full Routr server up and running. Snaps are secure. They are isolated with all of their dependencies. Snaps also auto-update when we release new versions."),(0,a.kt)("h2",{id:"digitalocean-droplet"},"DigitalOcean droplet"),(0,a.kt)("p",null,"Build and Deploy to a DigitalOcean droplet"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/fonoster/routr/tree/master/.digitalocean/README.md"},(0,a.kt)("img",{parentName:"a",src:"https://user-images.githubusercontent.com/51996/58146107-50512580-7c1a-11e9-8ec9-e032ba387c2a.png",alt:"do-btn-blue"}))),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://routr.io/docs/guides/running-with-docker-or-compose/"},"Deploy with docker compose")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/fonoster/routr/"},(0,a.kt)("img",{parentName:"a",src:"https://d207aa93qlcgug.cloudfront.net/1.95.5.qa/img/nav/docker-logo-loggedout.png",alt:"Docker logo"}))),(0,a.kt)("p",null,"OR Use the automated build image of our ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/fonoster/routr/"},"most recent release")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker pull fonoster/routr:latest\n")),(0,a.kt)("p",null,"OR select a specific release (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fonoster/routr/releases"},"details of releases available"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker pull fonoster/routr:vX.X.X\n")),(0,a.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("p",null,"Deploy to Kubernetes in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fonoster/routr/tree/master/.k8s/README.md"},"few easy steps")),(0,a.kt)("h2",{id:"google-cloud-shell"},"Google Cloud Shell"),(0,a.kt)("p",null,"Routr one-click interactive tutorial will get you familiar with Routr server and the command-line interface."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/fonoster/routr-walkthrough-tutorial&tutorial=tutorial.md"},(0,a.kt)("img",{parentName:"a",src:"https://gstatic.com/cloudssh/images/open-btn.svg",alt:"Open in Cloud Shell"}))),(0,a.kt)("h2",{id:"custom"},"Custom"),(0,a.kt)("p",null,"There are no special requirements to install and run the server. Just follow this easy steps:"),(0,a.kt)("p",null,"\u278a"," Download the server for your platform"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Platform"),(0,a.kt)("th",{parentName:"tr",align:null},"Download"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Linux"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/fonoster/routr/releases/download/1.2.7/routr-1.2.7_linux-x64_bin.tar.gz"},"tar.gz"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"macOS"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/fonoster/routr/releases/download/1.2.7/routr-1.2.7_osx-x64_bin.tar.gz"},"tar.gz"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Windows"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/fonoster/routr/releases/download/1.2.7/routr-1.2.7_windows-x64_bin.tar.gz"},"tar.gz"),", ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/fonoster/routr/releases/download/1.2.7/routr-1.2.7_windows-x64_bin.zip"},"zip"))))),(0,a.kt)("p",null,"\u278b"," Then extract it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tar xvfz routr-*.tar.gz\ncd routr-*\n")),(0,a.kt)("p",null,"\u278c"," Run the server using the ",(0,a.kt)("inlineCode",{parentName:"p"},"routr")," command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./routr\n")))}d.isMDXComponent=!0}}]);