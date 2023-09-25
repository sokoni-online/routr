"use strict";(self.webpackChunkroutr_docs=self.webpackChunkroutr_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"2.0.0","banner":null,"badge":true,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Overview","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/docs/2.0.0/overview/introduction","docId":"overview/introduction"},{"type":"link","label":"Architecture","href":"/docs/2.0.0/overview/architecture","docId":"overview/architecture"},{"type":"link","label":"Concepts","href":"/docs/2.0.0/overview/concepts","docId":"overview/concepts"},{"type":"link","label":"Deploy with Docker","href":"/docs/2.0.0/overview/deploy-with-docker","docId":"overview/deploy-with-docker"}]},{"type":"category","label":"Development","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/docs/2.0.0/development/introduction","docId":"development/introduction"},{"type":"link","label":"Quick Start","href":"/docs/2.0.0/development/quick-start","docId":"development/quick-start"},{"type":"link","label":"Development with Gitpod","href":"/docs/2.0.0/development/development-mode-with-gitpod","docId":"development/development-mode-with-gitpod"},{"type":"category","label":"Components","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/docs/2.0.0/development/components/overview","docId":"development/components/overview"},{"type":"link","label":"EdgePort","href":"/docs/2.0.0/development/components/edgeport","docId":"development/components/edgeport"}]},{"type":"category","label":"Alterations API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/docs/2.0.0/development/alterations/overview","docId":"development/alterations/overview"},{"type":"link","label":"Alteration Methods","href":"/docs/2.0.0/development/alterations/methods","docId":"development/alterations/methods"}]}]},{"type":"category","label":"Connect Mode","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/docs/2.0.0/connect/introduction","docId":"connect/introduction"},{"type":"link","label":"Concepts","href":"/docs/2.0.0/connect/concepts","docId":"connect/concepts"},{"type":"category","label":"Quick Start","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Docker installation","href":"/docs/2.0.0/connect/quick-start/docker","docId":"connect/quick-start/docker"},{"type":"link","label":"Installing in Kubernetes","href":"/docs/2.0.0/connect/quick-start/kubernetes","docId":"connect/quick-start/kubernetes"}]},{"type":"category","label":"Command-Line Tool","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/docs/2.0.0/connect/command-line/overview","docId":"connect/command-line/overview"},{"type":"link","label":"CTL","href":"/docs/2.0.0/connect/command-line/ctl","docId":"connect/command-line/ctl"}]},{"type":"category","label":"Node.js SDK","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/docs/2.0.0/connect/nodesdk/overview","docId":"connect/nodesdk/overview"},{"type":"link","label":"SDK","href":"/docs/2.0.0/connect/nodesdk/sdk","docId":"connect/nodesdk/sdk"}]},{"type":"link","label":"Home or Office Setup","href":"/docs/2.0.0/connect/home-or-office-setup","docId":"connect/home-or-office-setup"},{"type":"link","label":"WebRTC Support","href":"/docs/2.0.0/connect/webrtc-support","docId":"connect/webrtc-support"},{"type":"link","label":"Securing the Server","href":"/docs/2.0.0/connect/securing-the-server","docId":"connect/securing-the-server"},{"type":"link","label":"Sending Call Events to NATs","href":"/docs/2.0.0/connect/sending-call-events-to-nats","docId":"connect/sending-call-events-to-nats"}]},{"type":"link","label":"Community","href":"/docs/2.0.0/community","docId":"community"},{"type":"link","label":"Contributing","href":"/docs/2.0.0/contributing","docId":"contributing"},{"type":"link","label":"FAQs","href":"/docs/2.0.0/faqs","docId":"faqs"},{"type":"link","label":"Changelog","href":"/docs/2.0.0/changelog","docId":"changelog"}]},"docs":{"changelog":{"id":"changelog","title":"Changelog","description":"Coming soon.","sidebar":"tutorialSidebar"},"community":{"id":"community","title":"Community","description":"We are developing Routr in the open. These are the channels we use for communication and contribution:","sidebar":"tutorialSidebar"},"connect/command-line/ctl":{"id":"connect/command-line/ctl","title":"CTL","description":"Command-Line for Routr server.","sidebar":"tutorialSidebar"},"connect/command-line/overview":{"id":"connect/command-line/overview","title":"Overview","description":"The command-line tool contains all commands you will need to manage your Routr Connect server.","sidebar":"tutorialSidebar"},"connect/concepts":{"id":"connect/concepts","title":"Concepts","description":"The Connect Mode is Routr\'s implementation of the SIPConnect standard. Routr introduces the Connect Processor and five routing types as part of the implementation.","sidebar":"tutorialSidebar"},"connect/home-or-office-setup":{"id":"connect/home-or-office-setup","title":"Home or Office Setup","description":"Coming soon.","sidebar":"tutorialSidebar"},"connect/introduction":{"id":"connect/introduction","title":"Introduction","description":"The Connect Mode, sometimes called Routr Connect, is our implementation of the SIPConnect standard. The Connect Mode describes SIP routing in terms of Agents, Peers, Trunks, Numbers, Credentials, and ACL. It is the most common way to deploy Routr.","sidebar":"tutorialSidebar"},"connect/nodesdk/overview":{"id":"connect/nodesdk/overview","title":"Overview","description":"Node.js SDK is a library that you can use to manage your Routr Connect server. It is available as an npm package that allows you to create, read, update, and delete (CRUD) resources in your server.","sidebar":"tutorialSidebar"},"connect/nodesdk/sdk":{"id":"connect/nodesdk/sdk","title":"SDK","description":"* Installation","sidebar":"tutorialSidebar"},"connect/quick-start/docker":{"id":"connect/quick-start/docker","title":"Docker installation","description":"First, create a directory named \\"routr\\". Navigate into the new folder, and then copy the content below:","sidebar":"tutorialSidebar"},"connect/quick-start/kubernetes":{"id":"connect/quick-start/kubernetes","title":"Installing in Kubernetes","description":"Routr can be installed in Kubernetes using Helm. The following instructions assume that you have a Kubernetes cluster up and running.","sidebar":"tutorialSidebar"},"connect/securing-the-server":{"id":"connect/securing-the-server","title":"Securing the Server","description":"Coming soon.","sidebar":"tutorialSidebar"},"connect/sending-call-events-to-nats":{"id":"connect/sending-call-events-to-nats","title":"Sending Call Events to NATs","description":"Routr ships with a NATs publisher that can be used to send call events to a NATs server. Call events are a function of the EdgePort. To enable the NATs publisher, you will need to update your EdgePort service to set the environment variable NATSPUBLISHERENABLED to true as well as the environment variable NATSPUBLISHERURL to the URL of your NATs server. For example:","sidebar":"tutorialSidebar"},"connect/webrtc-support":{"id":"connect/webrtc-support","title":"WebRTC Support","description":"The Connect Processor supports interoperability with WebRTC clients. This means that you can use any SIP client that also supports WebRTC to make and receive calls, such as with the JavaScript libraries SIP.js and JsSIP for example. However, because WebRTC mandates the use of specific codecs, transport protocols, and a certain version of RTP that might differ from those used by legacy SIP clients, you will need to make additional configuration changes to your server.","sidebar":"tutorialSidebar"},"contributing":{"id":"contributing","title":"Contributing","description":"Coming soon.","sidebar":"tutorialSidebar"},"development/alterations/methods":{"id":"development/alterations/methods","title":"Alteration Methods","description":"Coming soon.","sidebar":"tutorialSidebar"},"development/alterations/overview":{"id":"development/alterations/overview","title":"Overview","description":"Coming soon.","sidebar":"tutorialSidebar"},"development/building-a-chat-application":{"id":"development/building-a-chat-application","title":"Building a Chat Application","description":"Comin soon."},"development/building-a-middleware":{"id":"development/building-a-middleware","title":"Building a Middleware","description":"Comin soon."},"development/building-a-processor":{"id":"development/building-a-processor","title":"Building a Processor","description":"Comin soon."},"development/building-a-scaip-processor":{"id":"development/building-a-scaip-processor","title":"Building a SCAIP Processor","description":"Comin soon."},"development/components/edgeport":{"id":"development/components/edgeport","title":"EdgePort","description":"The EdgePort component accepts SIP Messages, parses them into protobuf, and sends them to the Message Dispatcher, or Dispatcher for short. After a SIP Message is processed, the EdgePort will forward the SIP Message to the next hop.","sidebar":"tutorialSidebar"},"development/components/location":{"id":"development/components/location","title":"Location Service","description":"Comin soon."},"development/components/overview":{"id":"development/components/overview","title":"Overview","description":"This is the components sub-section of the development section. Here you will find information about the different components that make up the platform. Each component will have its own page with information about how to run it, how to configure it, and how to use it.","sidebar":"tutorialSidebar"},"development/components/pgdata":{"id":"development/components/pgdata","title":"PostgreSQL Data","description":"Comin soon."},"development/components/registry":{"id":"development/components/registry","title":"Registry","description":"Comin soon."},"development/components/requester":{"id":"development/components/requester","title":"Requester","description":"Comin soon."},"development/components/rtprelay":{"id":"development/components/rtprelay","title":"RTP Relay","description":"Comin soon."},"development/components/simpleauth":{"id":"development/components/simpleauth","title":"Simple Auth Service","description":"Comin soon."},"development/components/simpledata":{"id":"development/components/simpledata","title":"Simple Data Service","description":"Comin soon."},"development/development-mode-with-gitpod":{"id":"development/development-mode-with-gitpod","title":"Development with Gitpod","description":"Development mode with Gitpod is a great way to get familiar with Routr. Gitpod is a cloud-based IDE that allows you to develop and test your code in a browser. Gitpod is free for open-source projects and offers a free trial for private repositories.","sidebar":"tutorialSidebar"},"development/extending-the-apiserver":{"id":"development/extending-the-apiserver","title":"Extending the APIServer","description":"Coming soon."},"development/extending-the-ctl":{"id":"development/extending-the-ctl","title":"Extending the CTL","description":"Coming soon."},"development/introduction":{"id":"development/introduction","title":"Introduction","description":"Developers and implementors looking to customize Routr for their specific use cases should refer to this section. Here, you\'ll learn about the core components, their interactions, and the steps to create custom Processors and Middleware.","sidebar":"tutorialSidebar"},"development/metrics-events-logs-and-traces":{"id":"development/metrics-events-logs-and-traces","title":"Everything about MELT","description":"Comin soon."},"development/orchestration-with-docker":{"id":"development/orchestration-with-docker","title":"Orchestration with Docker","description":"Coming soon."},"development/orchestration-with-kubernetes":{"id":"development/orchestration-with-kubernetes","title":"Orchestration with Kubernetes","description":"Coming soon."},"development/quick-start":{"id":"development/quick-start","title":"Quick Start","description":"Before starting the development, you need to install the following tools:","sidebar":"tutorialSidebar"},"development/testing-with-seet":{"id":"development/testing-with-seet","title":"Testing with SEET","description":"Coming soon."},"faqs":{"id":"faqs","title":"FAQs","description":"What is Routr?","sidebar":"tutorialSidebar"},"overview/architecture":{"id":"overview/architecture","title":"Architecture","description":"Routr\'s architecture diagram","sidebar":"tutorialSidebar"},"overview/concepts":{"id":"overview/concepts","title":"Concepts","description":"Routr\'s approach to SIP is different from other SIP servers. For example, Routr aims to be cloud-native first. It is designed to run in a containerized environment, like Docker or Kubernetes, and features a microservices architecture.","sidebar":"tutorialSidebar"},"overview/deploy-with-docker":{"id":"overview/deploy-with-docker","title":"Deploy with Docker","description":"Deploying Routr with Docker is the easiest way to get started. This guide will walk you through the process of deploying Routr with Docker.","sidebar":"tutorialSidebar"},"overview/introduction":{"id":"overview/introduction","title":"introduction","description":"Community banner","sidebar":"tutorialSidebar"},"tutorials/deploying-to-civo-with-helm":{"id":"tutorials/deploying-to-civo-with-helm","title":"Deploying to Civo with Helm","description":"Coming soon."},"tutorials/ephemeral-agents-in-the-browser":{"id":"tutorials/ephemeral-agents-in-the-browser","title":"Ephemeral Agents in the Browser","description":"Coming soon."},"tutorials/intercom-system-with-routr-and-kubernetes":{"id":"tutorials/intercom-system-with-routr-and-kubernetes","title":"Intercom System with Routr and Kubernetes","description":"Coming soon."},"tutorials/load-balancing-asterisk-with-routr":{"id":"tutorials/load-balancing-asterisk-with-routr","title":"Load-balancing Asterisk with Routr","description":"Coming soon."}}}')}}]);