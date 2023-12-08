"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4550],{10730:(e,n,o)=>{if(o.d(n,{Ac:()=>r,N_:()=>i}),179==o.j)var t=o(31625);var c=o(1502);function r(e){return t.types.model({id:c.ElementId,name:t.types.string,margin:0}).volatile((()=>({selection:void 0,hovered:void 0}))).views((e=>({get root(){return(0,t.getParent)(e)}}))).views((e=>({get jbrowse(){return e.root.jbrowse},get rpcManager(){return e.root.rpcManager},get configuration(){return this.jbrowse.configuration},get adminMode(){return e.root.adminMode},get textSearchManager(){return e.root.textSearchManager}}))).views((e=>({get assemblies(){return e.jbrowse.assemblies}}))).actions((e=>({setSelection(n){e.selection=n},clearSelection(){e.selection=void 0},setHovered(n){e.hovered=n}})))}function i(e){return"id"in e&&"name"in e&&"root"in e}},74761:(e,n,o)=>{o.d(n,{C:()=>i,n:()=>s});var t=o(43800);if(179==o.j)var c=o(31625);var r=o(10730);function i(e){return c.types.model({connectionInstances:c.types.array(e.pluggableMstType("connection","stateModel"))}).views((e=>({get connections(){const{jbrowse:n}=e;return n.connections}}))).actions((n=>({makeConnection(o){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=o.type;if(!r)throw new Error("track configuration has no `type` listed");const i=(0,t.readConfObject)(o,"name");if(!e.getConnectionType(r))throw new Error("unknown connection type ".concat(r));const s=n.connectionInstances.push({...c,name:i,type:r,configuration:o});return n.connectionInstances[s-1]},prepareToBreakConnection(e){const o=n,c=[],r={},i=(0,t.readConfObject)(e,"name"),s=n.connectionInstances.find((e=>e.name===i));if(s){for(const e of s.tracks){const n=o.getReferring(e);o.removeReferring(n,e,c,r)}return[()=>{c.forEach((e=>e())),this.breakConnection(e)},r]}},breakConnection(e){const o=(0,t.readConfObject)(e,"name"),c=n.connectionInstances.find((e=>e.name===o));if(!c)throw new Error("no connection found with name ".concat(o));n.connectionInstances.remove(c)},deleteConnection(e){const{jbrowse:o}=n;return o.deleteConnectionConf(e)},addConnectionConf(e){const{jbrowse:o}=n;return o.addConnectionConf(e)},clearConnections(){n.connectionInstances.clear()}})))}function s(e){return(0,r.N_)(e)&&"connectionInstances"in e}},94550:(e,n,o)=>{o.r(n),o.d(n,{default:()=>k});var t=o(41867),c=o(78882),r=o(18801),i=o(16698),s=o(73290),a=o(23801),l=o(90872),d=o(47192),u=o(3762),g=o(93533),p=o(35421),f=o(80838);const m=(0,u.observer)((function(e){let{connectionType:n,model:o,session:c}=e;const r=n.configEditorComponent||g.wP;return(0,f.jsx)(t.Suspense,{fallback:(0,f.jsx)(p.LoadingEllipses,{}),children:(0,f.jsx)(r,{model:{target:o},session:c})})}));var h=o(49133),C=o(68367),v=o(59231),b=o(84623);const j=(0,u.observer)((function(e){let{connectionTypeChoices:n,connectionType:o,setConnectionType:c}=e;const r=n[0];return(0,t.useEffect)((()=>{o||c(r)}),[o,r,c]),(0,f.jsx)("form",{autoComplete:"off",children:o?(0,f.jsx)(h.Z,{value:o.name,label:"connectionType",helperText:o.description?(0,f.jsxs)(f.Fragment,{children:[o.description,o.url?(0,f.jsx)(C.Z,{href:o.url,rel:"noopener noreferrer",target:"_blank",children:(0,f.jsx)(b.Z,{})}):null]}):null,select:!0,fullWidth:!0,onChange:e=>c(n.find((n=>n.name===e.target.value))),variant:"outlined",children:n.map((e=>(0,f.jsx)(v.Z,{value:e.name,children:e.displayName||e.name},e.name)))}):null})}));var w=o(74761);const x=(0,d.ZL)()((e=>({root:{marginTop:e.spacing(1)},stepper:{backgroundColor:e.palette.background.default},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)}}))),y=["Select a Connection Type","Configure Connection"],k=(0,u.observer)((function(e){let{model:n}=e;const[o,d]=(0,t.useState)(),[u,g]=(0,t.useState)(),[p,h]=(0,t.useState)(0),{classes:C}=x(),v=(0,l.getSession)(n),{pluginManager:b}=(0,l.getEnv)(v),k=(0,t.useMemo)((()=>null===o||void 0===o?void 0:o.configSchema.create({connectionId:u},(0,l.getEnv)(n))),[u,o,n]);return(0,f.jsx)("div",{className:C.root,children:(0,f.jsx)(c.Z,{className:C.stepper,activeStep:p,orientation:"vertical",children:y.map((e=>(0,f.jsxs)(r.Z,{children:[(0,f.jsx)(i.Z,{children:e}),(0,f.jsxs)(s.Z,{children:[0===p?(0,f.jsx)(j,{connectionTypeChoices:b.getConnectionElements(),connectionType:o,setConnectionType:e=>{d(e),e&&g("".concat(e.name,"-").concat(Date.now()))}}):o&&k?(0,f.jsx)(m,{connectionType:o,model:k,session:v}):null,(0,f.jsxs)("div",{className:C.actionsContainer,children:[(0,f.jsx)(a.Z,{disabled:0===p,onClick:()=>h(p-1),className:C.button,children:"Back"}),(0,f.jsx)(a.Z,{disabled:!(0===p&&o||1===p&&k),variant:"contained",color:"primary",onClick:()=>{if(p===y.length-1){if(k&&(0,w.n)(v)){const e=v.addConnectionConf(k);v.makeConnection(e)}else v.notify("No config model to add");(0,l.isSessionModelWithWidgets)(v)&&v.hideWidget(n)}else h(p+1)},className:C.button,"data-testid":"addConnectionNext",children:p===y.length-1?"Connect":"Next"})]})]})]},e)))})})}))}}]);
//# sourceMappingURL=4550.90b70037.chunk.js.map