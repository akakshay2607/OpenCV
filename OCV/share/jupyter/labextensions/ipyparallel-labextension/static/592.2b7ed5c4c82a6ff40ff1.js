(self.webpackChunkipyparallel_labextension=self.webpackChunkipyparallel_labextension||[]).push([[592],{592:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>B});var s=n(398),i=n(424),r=n(914),a=n(345),o=n(16),l=n(897),c=n(723),u=n(840),d=n(433),p=n(118),g=n(238),h=n(918),m=n(526),C=n(520),v=n(694),f=n(358),y=n(271);class b extends y.Component{constructor(e){let t;super(e),t=e.initialModel,this.state={model:t}}componentDidUpdate(){let e=Object.assign({},this.state.model);this.props.stateEscapeHatch(e)}onScaleChanged(e){this.setState({model:Object.assign(Object.assign({},this.state.model),{n:parseInt(e.target.value||null,null)})})}onProfileChanged(e){this.setState({model:Object.assign(Object.assign({},this.state.model),{profile:e.target.value})})}onClusterIdChanged(e){this.setState({model:Object.assign(Object.assign({},this.state.model),{cluster_id:e.target.value})})}render(){const e=this.state.model;return y.createElement("div",null,y.createElement("div",{className:"ipp-DialogSection"},y.createElement("div",{className:"ipp-DialogSection-item"},y.createElement("span",{className:"ipp-DialogSection-label"},"Profile"),y.createElement("input",{className:"ipp-DialogInput",value:e.profile,type:"string",placeholder:"default",onChange:e=>{this.onProfileChanged(e)}})),y.createElement("div",{className:"ipp-DialogSection-item"},y.createElement("span",{className:"ipp-DialogSection-label"},"Cluster ID"),y.createElement("input",{className:"ipp-DialogInput",value:e.cluster_id,type:"string",placeholder:"auto",onChange:e=>{this.onClusterIdChanged(e)}})),y.createElement("div",{className:"ipp-DialogSection-item"},y.createElement("span",{className:"ipp-DialogSection-label"},"Engines"),y.createElement("input",{className:"ipp-DialogInput",value:e.n,type:"number",step:"1",placeholder:"auto",onChange:e=>{this.onScaleChanged(e)}}))))}}var w,_=n(456);!function(e){e.injectClientCode="ipyparallel:inject-client-code",e.newCluster="ipyparallel:new-cluster",e.startCluster="ipyparallel:start-cluster",e.stopCluster="ipyparallel:stop-cluster",e.scaleCluster="ipyparallel:scale-cluster",e.toggleAutoStartClient="ipyparallel:toggle-auto-start-client"}(w||(w={}));const I="ipyparallel/clusters";class E extends d.Widget{constructor(e){super(),this._dragData=null,this._clusters=[],this._activeClusterChanged=new u.Signal(this),this._serverErrorShown=!1,this._isReady=!0,this.addClass("ipp-ClusterManager"),this._serverSettings=g.ServerConnection.makeSettings(),this._injectClientCodeForCluster=e.injectClientCodeForCluster,this._getClientCodeForCluster=e.getClientCodeForCluster,this._registry=e.registry,this._setActiveById=e=>{const t=this._clusters.find((t=>t.id===e));if(!t)return;const n=this._activeCluster;n&&n.id===t.id||(this._activeCluster=t,this._activeClusterChanged.emit({name:"cluster",oldValue:n,newValue:t}),this.update())};const t=this.layout=new d.PanelLayout;this._clusterListing=new d.Widget,this._clusterListing.addClass("ipp-ClusterListing");const n=new p.Toolbar,s=new d.Widget;s.node.textContent="CLUSTERS",s.addClass("ipp-ClusterManager-label"),n.addItem("label",s),n.addItem("refresh",new p.ToolbarButton({icon:c.refreshIcon,onClick:async()=>this._updateClusterList(),tooltip:"Refresh Cluster List"})),n.addItem(w.newCluster,new p.CommandToolbarButton({commands:this._registry,id:w.newCluster})),t.addWidget(n),t.addWidget(this._clusterListing),this._updateClusterList(),this._poll=new f.Poll({factory:async()=>{await this._updateClusterList()},frequency:{interval:5e3,backoff:!0,max:6e4},standby:"when-hidden"})}get activeCluster(){return this._activeCluster}setActiveCluster(e){this._setActiveById(e)}get activeClusterChanged(){return this._activeClusterChanged}get isReady(){return this._isReady}get clusters(){return this._clusters}async refresh(){await this._updateClusterList()}async create(){const e=await function(e){let t=Object.assign({},e);return(0,p.showDialog)({title:"New Cluster",body:y.createElement(b,{initialModel:e,stateEscapeHatch:e=>{t=e}}),buttons:[p.Dialog.cancelButton(),p.Dialog.okButton({label:"CREATE"})]}).then((e=>e.button.accept?t:null))}({});if(e)return await this._newCluster(e)}async start(e){if(!this._clusters.find((t=>t.id===e)))throw Error(`Cannot find cluster ${e}`);await this._startById(e)}async stop(e){if(!this._clusters.find((t=>t.id===e)))throw Error(`Cannot find cluster ${e}`);await this._stopById(e)}async scale(e){if(!this._clusters.find((t=>t.id===e)))throw Error(`Cannot find cluster ${e}`);return await this._scaleById(e)}dispose(){this.isDisposed||(this._poll.dispose(),super.dispose())}onUpdateRequest(e){this.isVisible&&_.render(y.createElement(L,{clusters:this._clusters,activeClusterId:this._activeCluster&&this._activeCluster.id||"",scaleById:e=>this._scaleById(e),startById:e=>this._startById(e),stopById:e=>this._stopById(e),setActiveById:this._setActiveById,injectClientCodeForCluster:this._injectClientCodeForCluster}),this._clusterListing.node)}onAfterShow(e){this.update()}onAfterAttach(e){super.onAfterAttach(e);let t=this._clusterListing.node;t.addEventListener("p-dragenter",this),t.addEventListener("p-dragleave",this),t.addEventListener("p-dragover",this),t.addEventListener("mousedown",this)}onBeforeDetach(e){let t=this._clusterListing.node;t.removeEventListener("p-dragenter",this),t.removeEventListener("p-dragleave",this),t.removeEventListener("p-dragover",this),t.removeEventListener("mousedown",this),document.removeEventListener("mouseup",this,!0),document.removeEventListener("mousemove",this,!0)}handleEvent(e){switch(e.type){case"mousedown":this._evtMouseDown(e);break;case"mouseup":this._evtMouseUp(e);break;case"mousemove":this._evtMouseMove(e)}}_evtMouseDown(e){const{button:t,shiftKey:n}=e;if(0!==t&&2!==t)return;if(n&&2===t)return;const s=this._findCluster(e);-1!==s&&(this._dragData={pressX:e.clientX,pressY:e.clientY,index:s},document.addEventListener("mouseup",this,!0),document.addEventListener("mousemove",this,!0),e.preventDefault())}_evtMouseUp(e){0===e.button&&this._drag||(document.removeEventListener("mousemove",this,!0),document.removeEventListener("mouseup",this,!0)),e.preventDefault(),e.stopPropagation()}_evtMouseMove(e){let t=this._dragData;if(!t)return;let n=Math.abs(e.clientX-t.pressX),s=Math.abs(e.clientY-t.pressY);(n>=5||s>=5)&&(e.preventDefault(),e.stopPropagation(),this._startDrag(t.index,e.clientX,e.clientY))}async _startDrag(e,t,n){const s=this._clusters[e],i=this._clusterListing.node.querySelector(`li.ipp-ClusterListingItem[data-cluster-id="${s.id}"]`),r=j.createDragImage(i);this._drag=new v.Drag({mimeData:new m.MimeData,dragImage:r,supportedActions:"copy",proposedAction:"copy",source:this});const a=this._getClientCodeForCluster(s);this._drag.mimeData.setData("text/plain",a);const o=[{cell_type:"code",source:a,outputs:[],execution_count:null,metadata:{}}];return this._drag.mimeData.setData("application/vnd.jupyter.cells",o),document.removeEventListener("mousemove",this,!0),document.removeEventListener("mouseup",this,!0),this._drag.start(t,n).then((e=>{this.isDisposed||(this._drag=null,this._dragData=null)}))}async _newCluster(e){this._isReady=!1,this._registry.notifyCommandChanged(w.newCluster);const t=await g.ServerConnection.makeRequest(`${this._serverSettings.baseUrl}${I}`,{method:"POST",body:JSON.stringify(e)},this._serverSettings);if(200!==t.status){const e=await t.json();throw(0,p.showErrorMessage)("Cluster Create Error",e),this._isReady=!0,this._registry.notifyCommandChanged(w.newCluster),e}const n=await t.json();return await this._updateClusterList(),this._isReady=!0,this._registry.notifyCommandChanged(w.newCluster),n}async _updateClusterList(){const e=await g.ServerConnection.makeRequest(`${this._serverSettings.baseUrl}${I}`,{},this._serverSettings);if(200!==e.status){const e=new Error("Failed to list clusters: might the server extension not be installed/enabled?");throw this._serverErrorShown||((0,p.showErrorMessage)("IPP Extension Server Error",e),this._serverErrorShown=!0),e}const t=await e.json();if(this._clusters=t,!this._clusters.find((e=>e.id===(this._activeCluster&&this._activeCluster.id)))){const e=this._clusters[0]&&this._clusters[0].id||"";this._setActiveById(e)}this.update()}async _startById(e){const t=await g.ServerConnection.makeRequest(`${this._serverSettings.baseUrl}${I}/${e}`,{method:"POST"},this._serverSettings);if(t.status>299){const e=await t.json();throw(0,p.showErrorMessage)("Failed to start cluster",e),e}await this._updateClusterList()}async _stopById(e){const t=await g.ServerConnection.makeRequest(`${this._serverSettings.baseUrl}${I}/${e}`,{method:"DELETE"},this._serverSettings);if(204!==t.status){const e=await t.json();throw(0,p.showErrorMessage)("Failed to close cluster",e),e}await this._updateClusterList()}async _scaleById(e){const t=this._clusters.find((t=>t.id===e));if(!t)throw Error(`Failed to find cluster ${e} to scale`);(0,p.showErrorMessage)("Scale not implemented","");const n=t;if(m.JSONExt.deepEqual(n,t))return Promise.resolve(t);const s=await g.ServerConnection.makeRequest(`${this._serverSettings.baseUrl}${I}/${e}`,{method:"PATCH",body:JSON.stringify(n)},this._serverSettings);if(200!==s.status){const e=await s.json();throw(0,p.showErrorMessage)("Failed to scale cluster",e),e}const i=await s.json();return await this._updateClusterList(),i}_findCluster(e){const t=Array.from(this.node.querySelectorAll("li.ipp-ClusterListingItem"));return h.ArrayExt.findFirstIndex(t,(t=>C.ElementExt.hitTest(t,e.clientX,e.clientY)))}}function L(e){let t=e.clusters.map((t=>y.createElement(x,{isActive:t.id===e.activeClusterId,key:t.id,cluster:t,scale:()=>e.scaleById(t.id),start:()=>e.startById(t.id),stop:()=>e.stopById(t.id),setActive:()=>e.setActiveById(t.id),injectClientCode:()=>e.injectClientCodeForCluster(t)})));return y.createElement("div",null,y.createElement("ul",{className:"ipp-ClusterListing-list"},t))}function x(e){const{cluster:t,isActive:n,setActive:s,scale:i,start:r,stop:a,injectClientCode:o}=e;let l="ipp-ClusterListingItem";l=n?`${l} jp-mod-active`:l;let c="Stopped";t.controller&&(c=t.controller.state.state,"after"==c&&(c="Stopped"));let u="Stopped"===c?"DELETE":"STOP";return y.createElement("li",{className:l,"data-cluster-id":t.id,onClick:e=>{s(),e.stopPropagation()}},y.createElement("div",{className:"ipp-ClusterListingItem-title"},t.id),y.createElement("div",{className:"ipp-ClusterListingItem-stats"},"State: ",c),y.createElement("div",{className:"ipp-ClusterListingItem-stats"},"Number of engines: ",t.engines.n||t.cluster.n||"auto"),y.createElement("div",{className:"ipp-ClusterListingItem-button-panel"},y.createElement("button",{className:"ipp-ClusterListingItem-button ipp-ClusterListingItem-code ipp-CodeIcon jp-mod-styled",onClick:e=>{o(),e.stopPropagation()},title:`Inject client code for ${t.id}`}),y.createElement("button",{className:"ipp-ClusterListingItem-button ipp-ClusterListingItem-start jp-mod-styled "+("Stopped"==c?"":"ipp-hidden"),onClick:async e=>(e.stopPropagation(),r()),title:`Start ${t.id}`},"START"),y.createElement("button",{className:"ipp-ClusterListingItem-button ipp-ClusterListingItem-scale jp-mod-styled ipp-hidden",onClick:async e=>(e.stopPropagation(),i()),title:`Rescale ${t.id}`},"SCALE"),y.createElement("button",{className:"ipp-ClusterListingItem-button ipp-ClusterListingItem-stop jp-mod-styled "+("Stopped"===c&&""===t.cluster.cluster_id?"ipp-hidden":""),onClick:async e=>(e.stopPropagation(),a()),title:u},u)))}var j;!function(e){e.createDragImage=function(e){const t=e.cloneNode(!0);return t.classList.add("ipp-ClusterListingItem-drag"),t}}(j||(j={}));class S extends d.Widget{constructor(e){super(),this.addClass("ipp-Sidebar");let t=this.layout=new d.PanelLayout;const n=e.clientCodeInjector,s=e.clientCodeGetter;this._clusters=new E({registry:e.registry,injectClientCodeForCluster:n,getClientCodeForCluster:s}),t.addWidget(this._clusters)}get clusterManager(){return this._clusters}}var k=n(379),M=n.n(k),D=n(861);M()(D.Z,{insert:"head",singleton:!1}),D.Z.locals;const N="ipyparallel-labextension:plugin",A="IPython Parallel",B={activate:async function(e,t,n,i,r,a){const o="ipp-cluster-launcher",l=!!a,d="tree"==s.PageConfig.getOption("retroPage"),p=s=>{const i=P.getCurrentEditor(e,n,t);i&&P.injectClientCode(s,i)},g=new S({clientCodeInjector:p,clientCodeGetter:P.getClientCode,registry:e.commands});if(g.id=o,g.title.icon=new c.LabIcon({name:"ipyparallel:logo",svgstr:'<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns="http://www.w3.org/2000/svg"\n   version="1.1"\n   viewBox="0 0 20 20"\n   height="20"\n   width="20">\n   \x3c!-- text: IP in Source Code Pro --\x3e\n    <g\n       aria-label="IP">\n      <path\n         class="jp-icon3 jp-icon-selectable"\n         fill="#616161"\n         d="m 1.619125,15.248 v -1.136 h 2.608 V 5.8720001 h -2.608 v -1.12 h 6.56 v 1.12 h -2.608 V 14.112 h 2.608 v 1.136 z" />\n      <path\n         class="jp-icon3 jp-icon-selectable"\n         fill="#616161"\n         d="M 11.324875,15.248 V 4.7520001 h 3.168 q 1.168,0 2.032,0.288 0.88,0.288 1.36,0.976 0.496,0.672 0.496,1.824 0,1.104 -0.496,1.824 -0.48,0.7199999 -1.36,1.0719999 -0.88,0.352 -2.032,0.352 h -1.84 v 4.16 z m 1.328,-5.248 h 1.68 q 1.376,0 2.032,-0.5119999 0.672,-0.528 0.672,-1.648 0,-1.136 -0.672,-1.568 -0.672,-0.448 -2.032,-0.448 h -1.68 z" />\n  </g>\n</svg>\n'}),l)a.add(g,"left",{rank:200}),g.title.caption=A;else if(d){const t=e.shell.currentWidget;t.addWidget(g),t.tabBar.addTab(g.title),g.title.label=A}g.clusterManager.activeClusterChanged.connect((async()=>{const e=g.clusterManager.activeCluster;return r.save(o,{cluster:e?e.id:""})}));const h=async e=>{if(!e)return;const t=g.clusterManager.activeCluster;return t&&await P.shouldUseKernel(e.kernel)?P.createClientForKernel(t,e.kernel):void 0},m=[n,t],C=async e=>{if(e.session&&e.session.kernel&&"restarting"===e.session.kernel.status)return h(e.session)},v=(e,t)=>{t.sessionContext.statusChanged.connect(C)},f=()=>{m.forEach((e=>{e.forEach((async e=>{const t=e.sessionContext.session;if(t&&await P.shouldUseKernel(t.kernel))return h(t)}))}))};Promise.all([i.load(N),r.fetch(o)]).then((async e=>{const t=e[0];if(!t)return void console.warn("Unable to retrieve ipp-labextension settings");const n=e[1],s=n?n.cluster:"",i=()=>{u.Signal.clearData(v),u.Signal.clearData(C),u.Signal.clearData(f)};i(),t.changed.connect(i),s&&(await g.clusterManager.refresh(),g.clusterManager.setActiveCluster(s))})),e.commands.addCommand(w.injectClientCode,{label:"Inject IPython Client Connection Code",execute:()=>{const t=P.clusterFromClick(e,g.clusterManager);t&&p(t)}}),e.commands.addCommand(w.newCluster,{label:e=>e.isPalette?"Create New Cluster":"NEW",execute:()=>g.clusterManager.create(),iconClass:e=>e.isPalette?"":"jp-AddIcon jp-Icon jp-Icon-16",isEnabled:()=>g.clusterManager.isReady,caption:()=>g.clusterManager.isReady?"Start New Cluster":"Cluster starting..."}),e.commands.addCommand(w.startCluster,{label:"Start Cluster",execute:()=>{const t=P.clusterFromClick(e,g.clusterManager);if(t)return g.clusterManager.start(t.id)}}),e.commands.addCommand(w.stopCluster,{label:"Shutdown Cluster",execute:()=>{const t=P.clusterFromClick(e,g.clusterManager);if(t)return g.clusterManager.stop(t.id)}}),e.commands.addCommand(w.scaleCluster,{label:"Scale Cluster…",execute:()=>{const t=P.clusterFromClick(e,g.clusterManager);if(t)return g.clusterManager.scale(t.id)}}),e.contextMenu.addItem({command:w.injectClientCode,selector:".ipp-ClusterListingItem",rank:10}),e.contextMenu.addItem({command:w.stopCluster,selector:".ipp-ClusterListingItem",rank:3}),e.contextMenu.addItem({command:w.scaleCluster,selector:".ipp-ClusterListingItem",rank:2}),e.contextMenu.addItem({command:w.startCluster,selector:".ipp-ClusterListing-list",rank:1})},id:N,requires:[r.IConsoleTracker,l.INotebookTracker,a.ISettingRegistry,o.IStateDB],optional:[i.ILabShell],autoStart:!0};var P;!function(e){function t(e){return`import ipyparallel as ipp\n\ncluster = ipp.Cluster.from_file("${e.cluster_file}")\nrc = cluster.connect_client_sync()\nrc`}e.id=0,e.shouldUseKernel=async function(e){if(!e)return!1;const t=await e.spec;return!!t&&-1!==t.language.toLowerCase().indexOf("python")},e.createClientForKernel=async function(e,n){const s={store_history:!1,code:t(e)};return new Promise(((e,t)=>{n.requestExecute(s).onIOPub=t=>{"display_data"===t.header.msg_type&&e(void 0)}}))},e.injectClientCode=function(e,n){const s=n.getCursorPosition(),i=n.getOffsetAt(s),r=t(e);n.model.value.insert(i,r)},e.getClientCode=t,e.getCurrentKernel=function(e,t,n){var s,i,r,a;let o,l=e.currentWidget;return l&&t.has(l)?o=null===(s=l.sessionContext.session)||void 0===s?void 0:s.kernel:l&&n.has(l)?o=null===(i=l.sessionContext.session)||void 0===i?void 0:i.kernel:t.currentWidget?o=null===(r=t.currentWidget.sessionContext.session)||void 0===r?void 0:r.kernel:n.currentWidget&&(o=null===(a=n.currentWidget.sessionContext.session)||void 0===a?void 0:a.kernel),o},e.getCurrentEditor=function(e,t,n){let s,i=e.shell.currentWidget;if(i&&t.has(i)){l.NotebookActions.insertAbove(i.content);const e=i.content.activeCell;s=e&&e.editor}else if(i&&n.has(i)){const e=i.console.promptCell;s=e&&e.editor}else if(t.currentWidget){const e=t.currentWidget;l.NotebookActions.insertAbove(e.content);const n=e.content.activeCell;s=n&&n.editor}else if(n.currentWidget){const e=n.currentWidget.console.promptCell;s=e&&e.editor}return s},e.clusterFromClick=function(e,t){const n=e.contextMenuHitTest((e=>!!e.dataset.clusterId));if(!n)return;const s=n.dataset.clusterId;return t.clusters.find((e=>e.id===s))}}(P||(P={}))},861:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var s=n(645),i=n.n(s),r=n(667),a=n.n(r),o=n(825),l=n.n(o),c=n(618),u=n.n(c),d=i()((function(e){return e[1]})),p=a()(l()),g=a()(u());d.push([e.id,':root {\n  --ipp-launch-button-height: 24px;\n}\n\n/**\n * Rules related to the overall sidebar panel.\n */\n\n.ipp-Sidebar {\n  background: var(--jp-layout-color1);\n  color: var(--jp-ui-font-color1);\n  font-size: var(--jp-ui-font-size1);\n  overflow: auto;\n}\n\n/**\n * Rules related to the cluster manager.\n */\n\n.ipp-ClusterManager .jp-Toolbar {\n  align-items: center;\n}\n\n.ipp-ClusterManager .jp-Toolbar .ipp-ClusterManager-label {\n  flex: 0 0 auto;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-size: var(--jp-ui-font-size0);\n  padding: 8px 8px 8px 12px;\n  margin: 0px;\n}\n\n.ipp-ClusterManager button.jp-Button > span {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.ipp-ClusterListing ul.ipp-ClusterListing-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.ipp-ClusterListingItem {\n  display: inline-block;\n  list-style-type: none;\n  padding: 8px;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: grab;\n}\n\n.ipp-ClusterListingItem-drag {\n  opacity: 0.7;\n  color: var(--jp-ui-font-color1);\n  cursor: grabbing;\n  max-width: 260px;\n  transform: translateX(-50%) translateY(-50%);\n}\n\n.ipp-ClusterListingItem-title {\n  margin: 0px;\n  font-size: var(--jp-ui-font-size2);\n}\n\n.ipp-ClusterListingItem-link a {\n  text-decoration: none;\n  color: var(--jp-content-link-color);\n}\n\n.ipp-ClusterListingItem-link a:hover {\n  text-decoration: underline;\n}\n\n.ipp-ClusterListingItem-link a:visited {\n  color: var(--jp-content-link-color);\n}\n\n.ipp-ClusterListingItem:hover {\n  background: var(--jp-layout-color2);\n}\n\n.ipp-ClusterListingItem.jp-mod-active {\n  color: white;\n  background: var(--jp-brand-color0);\n}\n\n.ipp-ClusterListingItem.jp-mod-active a,\n.ipp-ClusterListingItem.jp-mod-active a:visited {\n  color: white;\n}\n\n.ipp-ClusterListingItem button.jp-mod-styled {\n  background-color: transparent;\n}\n\n.ipp-ClusterListingItem button.jp-mod-styled:hover {\n  background-color: var(--jp-layout-color3);\n}\n\n.ipp-ClusterListingItem.jp-mod-active button.jp-mod-styled:hover {\n  background-color: var(--jp-brand-color1);\n}\n\n.ipp-ClusterListingItem-button-panel {\n  display: flex;\n  align-content: center;\n}\n\nbutton.ipp-ClusterListingItem-stop {\n  color: var(--jp-warn-color1);\n  font-weight: 600;\n}\n\nbutton.ipp-ClusterListingItem-scale {\n  color: var(--jp-accent-color1);\n  font-weight: 600;\n}\n\nbutton.ipp-ClusterListingItem-start {\n  color: var(--jp-accent-color1);\n  font-weight: 600;\n}\n\nbutton.ipp-hidden {\n  display: none;\n}\n\n.ipp-ClusterListingItem button.ipp-ClusterListingItem-code.jp-mod-styled {\n  margin: 0 4px 0 4px;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n/**\n * Rules for the scaling dialog.\n */\n\n.ipp-DialogHeader {\n  font-size: var(--jp-ui-font-size2);\n}\n\n.ipp-DialogSection {\n  margin-left: 24px;\n}\n\n.ipp-DialogSection-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin: 12px 0 12px 0;\n}\n\n.ipp-DialogHeader input[type="checkbox"] {\n  position: relative;\n  top: 4px;\n  left: 4px;\n  margin: 0 0 0 8px;\n}\n\n.ipp-DialogSection input[type="number"] {\n  width: 72px;\n}\n\n.ipp-DialogSection-label.ipp-mod-disabled {\n  color: var(--jp-ui-font-color3);\n}\n\n.ipp-DialogSection input[type="number"]:disabled {\n  color: var(--jp-ui-font-color3);\n}\n\n/**\n * Rules for the logos.\n */\n\n.ipp-SearchIcon {\n  background-image: var(--jp-icon-search);\n}\n\n[data-jp-theme-light="true"] .ipp-CodeIcon {\n  background-image: url('+p+');\n}\n\n[data-jp-theme-light="false"] .ipp-CodeIcon {\n  background-image: url('+g+");\n}\n\n.ipp-ClusterListingItem.jp-mod-active .ipp-CodeIcon {\n  background-image: url("+g+");\n}\n",""]);const h=d},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,s){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(s)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var o=0;o<e.length;o++){var l=[].concat(e[o]);s&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},379:(e,t,n)=>{"use strict";var s,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function a(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function o(e,t){for(var n={},s=[],i=0;i<e.length;i++){var o=e[i],l=t.base?o[0]+t.base:o[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var d=a(u),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(r[d].references++,r[d].updater(p)):r.push({identifier:u,updater:m(p,t),references:1}),s.push(u)}return s}function l(e){var t=document.createElement("style"),s=e.attributes||{};if(void 0===s.nonce){var r=n.nc;r&&(s.nonce=r)}if(Object.keys(s).forEach((function(e){t.setAttribute(e,s[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function d(e,t,n,s){var i=n?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function p(e,t,n){var s=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}var g=null,h=0;function m(e,t){var n,s,i;if(t.singleton){var r=h++;n=g||(g=l(t)),s=d.bind(null,n,r,!1),i=d.bind(null,n,r,!0)}else n=l(t),s=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s));var n=o(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var s=0;s<n.length;s++){var i=a(n[s]);r[i].references--}for(var l=o(e,t),c=0;c<n.length;c++){var u=a(n[c]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}n=l}}}},618:e=>{e.exports="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23E0E0E0' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'/%3E%3Cpath d='M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z'/%3E%3C/svg%3E"},825:e=>{e.exports="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23616161' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'/%3E%3Cpath d='M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z'/%3E%3C/svg%3E"}}]);