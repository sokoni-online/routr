"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[7979],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<s;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4772:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const s={},o="Concepts",i={unversionedId:"overview/concepts",id:"overview/concepts",title:"Concepts",description:"Routr's approach to SIP is different from other SIP servers. For example, Routr aims to be cloud-native first. It is designed to run in a containerized environment, like Docker or Kubernetes, and features a microservices architecture.",source:"@site/docs/overview/concepts.md",sourceDirName:"overview",slug:"/overview/concepts",permalink:"/docs/2.0.0/overview/concepts",draft:!1,editUrl:"https://github.com/fonoster/routr-website/edit/main/docs/overview/concepts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/2.0.0/overview/architecture"},next:{title:"Deploy with Docker",permalink:"/docs/2.0.0/overview/deploy-with-docker"}},l={},d=[{value:"EdgePort",id:"edgeport",level:2},{value:"Location service",id:"location-service",level:2},{value:"Middlewares",id:"middlewares",level:2},{value:"Processors",id:"processors",level:2},{value:"Alterations",id:"alterations",level:2},{value:"Registry service",id:"registry-service",level:2},{value:"Requester",id:"requester",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"concepts"},"Concepts"),(0,a.kt)("p",null,"Routr's approach to SIP is different from other SIP servers. For example, Routr aims to be cloud-native first. It is designed to run in a containerized environment, like Docker or Kubernetes, and features a microservices architecture."),(0,a.kt)("p",null,"The following concepts are essential to understand when working with Routr, but remember that we will cover them in more detail in later sections."),(0,a.kt)("h2",{id:"edgeport"},"EdgePort"),(0,a.kt)("p",null,"The EdgePort component sits at the network's edge and is part of the CORE specification. It is responsible for receiving and forwarding SIP Messages."),(0,a.kt)("p",null,"The EdgePort service takes SIP Messages and converts them into protobuf messages. In addition to the SIP Message, we add all the metadata required for routing, including the IP of the entry point of the request, which allows us to calculate the correct path for the message statelessly."),(0,a.kt)("p",null,"Another essential aspect of EdgePort is that it cooperates to ensure messages follow the correct path. That means you don't need a specialized load balance in front of Routr."),(0,a.kt)("p",null,"Below is a diagram that demonstrates the collaboration between EdgePort and the Message Dispatcher"),(0,a.kt)("img",{src:"/img/edgeport.png",alt:"EdgePort diagram",width:"500"}),(0,a.kt)("p",null,"One important consideration when deploying a network is the protocol for Transport. We recommend always using a connection-oriented transport such as ",(0,a.kt)("inlineCode",{parentName:"p"},"TCP"),",",(0,a.kt)("inlineCode",{parentName:"p"},"TLS"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WS"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"WSS"),"."),(0,a.kt)("p",null,"Downstream Processors and Middleware all use the same gRPC interface. Because they all share the same structure, we can create processing services in any programming language while maintaining the same core functionality."),(0,a.kt)("p",null,"A minimal EdgePort configuration looks as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Example EdgePort configuration\nkind: EdgePort\napiVersion: v2beta1\nref: edgeport-01\nmetadata:\n  region: default\nspec:\n  processor:\n    addr: dispatcher:51901\n  methods:\n    - REGISTER\n    - INVITE\n    - ACK\n    - BYE\n    - CANCEL\n  transport:\n    - protocol: udp\n      port: 5060\n")),(0,a.kt)("h1",{id:"message-dispatcher"},"Message Dispatcher"),(0,a.kt)("p",null,"The Message Dispatcher, or Dispatcher for short, is a service between the EdgePort and the Processor. It is responsible for routing SIP Messages to the correct Processor."),(0,a.kt)("p",null,"The Dispatcher is a stateless service that uses a simple algorithm to determine the correct processing service. The component takes the SIP Messages and applies a matching function to choose the proper Processor. "),(0,a.kt)("p",null,"The matching function is a Javascript function that takes the SIP Message and returns a boolean value. The Dispatcher will forward the message to the first Processor that matches the SIP Message."),(0,a.kt)("p",null,"You can configure the Dispatcher using a YAML or JSON file that has the following structure:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ref")),(0,a.kt)("td",{parentName:"tr",align:null},"Reference to the Dispatcher"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"spec.bindAddr")),(0,a.kt)("td",{parentName:"tr",align:null},"Ipv4 interface to accept requests on"),(0,a.kt)("td",{parentName:"tr",align:null},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"spec.processors")),(0,a.kt)("td",{parentName:"tr",align:null},"List of Processors"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"spec.processors[*].ref")),(0,a.kt)("td",{parentName:"tr",align:null},"Reference to the Processor"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"spec.processors[*].matchFunc")),(0,a.kt)("td",{parentName:"tr",align:null},"Matching function"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"spec.processors[*].addr")),(0,a.kt)("td",{parentName:"tr",align:null},"Address of the Processor"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"spec.processors[*].methods")),(0,a.kt)("td",{parentName:"tr",align:null},"List of SIP Methods supported by the Processor"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"spec.middlewares")),(0,a.kt)("td",{parentName:"tr",align:null},"List of Middlewares"),(0,a.kt)("td",{parentName:"tr",align:null},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"spec.middlewares[*].ref")),(0,a.kt)("td",{parentName:"tr",align:null},"Reference to the Middleware"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"spec.middlewares[*].addr")),(0,a.kt)("td",{parentName:"tr",align:null},"Address of the Middleware"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"spec.middlewares[*].postProcessor")),(0,a.kt)("td",{parentName:"tr",align:null},"Weather to process the SIP Message after the Processor"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,a.kt)("p",null,"An important consideration when creating a matching function is that it will serve the first Processor that matches the SIP Message. The order of the Processors and the matching function are matters to ensure the correct routing. "),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"matchFunc")," is a javascript function that takes a SIP Message and returns a boolean value. It leverages the JSON representation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"SIPMessage")," protobuf. The following examples show typical matching functions:"),(0,a.kt)("p",null,"Match all SIP Messages."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"req => true\n")),(0,a.kt)("p",null,"Match SIP Messages with a specific method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'req => req.method === "MESSAGE"\n')),(0,a.kt)("p",null,"Match SIP Messages with a specific method and a specific header."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'req => req.method === "MESSAGE" && req.message.from.address.uri.user === "alice"\n')),(0,a.kt)("p",null,"Match SIP Messages with a specific ",(0,a.kt)("inlineCode",{parentName:"p"},"User-Agent")," header."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'req => req.message.extensions.find(e => e.name === "User-Agent" && e.value.includes("Zoiper"))\n')),(0,a.kt)("p",null,"This example features a Dispatcher that matches MESSAGE requests to the IM Processor and all others to the Connect Processor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: MessageDispatcher\napiVersion: v2beta1\nref: message-dispatcher\nspec:\n  bindAddr: 0.0.0.0:51901\n  processors:\n    - ref: im-processor\n      addr: im:51904\n      matchFunc: req => req.method === "MESSAGE"\n      methods:\n        - MESSAGE\n    - ref: connect-processor\n      addr: connect:51904\n      matchFunc: req => true\n      methods: \n        - REGISTER\n        - INVITE\n        - ACK \n        - BYE\n        - CANCEL\n')),(0,a.kt)("h2",{id:"location-service"},"Location service"),(0,a.kt)("p",null,"In Routr, the Location Service serves two primary purposes. The first purpose is to locate the route to an endpoint in the location table. The second is to load balance requests."),(0,a.kt)("p",null,"Routr's load balancing is done at the Location Service level and occurs in the context of Peers. To better explain this, let's take a closer look at some applications where this is useful."),(0,a.kt)("p",null,"For example, you can create a Peer configuration and share the same credentials if you have multiple Asterisk servers. By doing this, Routr will send a request to the instance of Asterisk according to the load-balancing algorithm you have selected."),(0,a.kt)("p",null,"Two balancing algorithms are available. The first is ",(0,a.kt)("inlineCode",{parentName:"p"},"round-robin"),", and the second is ",(0,a.kt)("inlineCode",{parentName:"p"},"least-sessions"),"."),(0,a.kt)("p",null,"Now, let's consider a situation where you want to deploy the server and send all PSTN traffic to a conference room in Asterisk. For such a scenario, you must configure a Peer to represent your feature server and a Number to route calls from the PSTN."),(0,a.kt)("p",null,"To do this, create a Peer configuration for your Asterisk server similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v2beta1\nkind: Peer\nref: peer-01\nmetadata:\n  name: Asterisk (Media Server)\nspec:\n  aor: backend:conference\n  username: asterisk\n  credentialsRef: credentials-01\n  loadBalancing:\n    withSessionAffinity: true\n    algorithm: least-sessions\n")),(0,a.kt)("p",null,"Notice that the load balancing section sets the ",(0,a.kt)("inlineCode",{parentName:"p"},"withSessionAffinity")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". We need session affinity to ensure that all calls related to the conference arrive on the same Asterisk server. "),(0,a.kt)("p",null,"Every Asterisk server that registers using the ",(0,a.kt)("inlineCode",{parentName:"p"},"asterisk")," username will join the same group under the ",(0,a.kt)("inlineCode",{parentName:"p"},"backend:conference")," Address of Record (AOR)."),(0,a.kt)("h2",{id:"middlewares"},"Middlewares"),(0,a.kt)("p",null,"Middleware resembles Processors because they both use the same protobuf contract but serve different purposes. While Processors hold feature logic, Middlewares addresses cross-cutting concerns like authentication, authorization, rate limiting, etc."),(0,a.kt)("p",null,"Some use cases for Middlewares include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Authentication and Authorization"),(0,a.kt)("li",{parentName:"ul"},"Rate limiting"),(0,a.kt)("li",{parentName:"ul"},"Circuit breaking"),(0,a.kt)("li",{parentName:"ul"},"Logging, Metrics, and Tracing"),(0,a.kt)("li",{parentName:"ul"},"Request and response validation"),(0,a.kt)("li",{parentName:"ul"},"Data transformation and normalization"),(0,a.kt)("li",{parentName:"ul"},"CDRs generation")),(0,a.kt)("p",null,"Processors and Middlewares differ in that you execute Middlewares in a chain, making their execution order crucial. Additionally, you can include multiple Middlewares in your deployment but only one Processor."),(0,a.kt)("h2",{id:"processors"},"Processors"),(0,a.kt)("p",null,"Processors are a way to extend the functionality of Routr, and implementors can add custom logic to the system. Processors are implemented as a gRPC service and use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/overview/concepts#alterations"},"Alterations API")," to modify SIP messages."),(0,a.kt)("p",null,'The simplest possible Processor is the "Echo Processor," which returns the SIP Message to the EdgePort. The following example shows how to create an Echo Processor using Node.js.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const Processor = require("@routr/processor").default;\nconst { MessageRequest, Response } = require("@routr/processor");\n\nnew Processor({ bindAddr: "0.0.0.0:51904", name: "echo" }).listen(\n  (req: MessageRequest, res: Response) => {\n    logger.verbose("got new request: ")\n    logger.verbose(JSON.stringify(req, null, " "))\n    res.sendOk()\n  }\n)\n')),(0,a.kt)("h2",{id:"alterations"},"Alterations"),(0,a.kt)("p",null,"Alterations let you modify SIP messages. We implement Alterations as Javascript functions that a Processor or Middleware executes."),(0,a.kt)("p",null,"The methods for Alterations adhere to a functional programming style. In this approach, one function's output becomes the following function's input. Here's an example of how to use the Alterations API to change a SIP message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const { Alterations } = require('@routr/processor')\nconst { pipe } = require(\"fp-ts/function\");\n\nfunction messageProcessing(req: MessageRequest, route: Route): MessageRequest {\n  const requestOut = pipe(\n    reqIn,\n    //example of an Alteration method with two arities\n    Alterations.addSelfVia(route),\n    Alterations.addSelfRecordRoute(route),\n    Alterations.addRouteToPeerEdgePort(route),\n    Alterations.addRouteToNextHop(route),\n    //example of an Alteration method with one arity\n    Alterations.addXEdgePortRef,\n    Alterations.decreaseMaxForwards\n  )\n\n  return requestOut\n}\n")),(0,a.kt)("p",null,"If you need to create a new Alteration, we suggest you follow a similar approach to the one used by the Alterations API. That is, create a function that takes a SIP message as input and returns a SIP message as output."),(0,a.kt)("h2",{id:"registry-service"},"Registry service"),(0,a.kt)("p",null,"The Registry component sends outbound registration to trunking services. You need this component when you set the sendRegister option of your Trunks to true. To send requests to the EdgePort, the Registry service depends on the Requester service."),(0,a.kt)("p",null,"Available configurations include the following:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"requesterAddr"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of service to send requests"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"apiAddr"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of API service"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"registerInterval"),(0,a.kt)("td",{parentName:"tr",align:null},"Interval to send registration requests"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cache"),(0,a.kt)("td",{parentName:"tr",align:null},"Cache configuration"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"methods"),(0,a.kt)("td",{parentName:"tr",align:null},"Acceptable SIP Methods (reserved for future use)"),(0,a.kt)("td",{parentName:"tr",align:null},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"edgePorts"),(0,a.kt)("td",{parentName:"tr",align:null},"List of EdgePorts for outbound registrations"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"edgePorts.address"),(0,a.kt)("td",{parentName:"tr",align:null},"Address of EdgePort"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"edgePorts.region"),(0,a.kt)("td",{parentName:"tr",align:null},"Region of EdgePort (reserved for future use)"),(0,a.kt)("td",{parentName:"tr",align:null},"No")))),(0,a.kt)("p",null,"Here is an example of a Trunk configuration that requires registration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Registry\napiVersion: v2beta1\nspec:\n  requesterAddr: requester:51909\n  apiAddr: apiserver:51907\n  registerInterval: 20\n  cache:\n    provider: memory\n  methods:\n    - INVITE\n    - MESSAGE\n  edgePorts:\n    - address: sip01.edgeport.net:5060\n      region: us-east1\n    - address: sip02.edgeport.net:6060\n")),(0,a.kt)("h2",{id:"requester"},"Requester"),(0,a.kt)("p",null,"The Requester is a service that takes a gRPC request, converts it into a SIP message, and forwards it to its destination. It is a dependency of the Registry service."))}u.isMDXComponent=!0}}]);