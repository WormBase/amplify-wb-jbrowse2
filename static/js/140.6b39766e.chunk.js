"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[140],{95492:(e,n,t)=>{if(t.d(n,{Ac:()=>c,N_:()=>a}),179==t.j)var o=t(88196);var r=t(80985);function c(e){return o.types.model({id:r.ElementId,name:o.types.string,margin:0}).volatile((()=>({selection:void 0,hovered:void 0}))).views((e=>({get root(){return(0,o.getParent)(e)}}))).views((e=>({get jbrowse(){return e.root.jbrowse},get rpcManager(){return e.root.rpcManager},get configuration(){return this.jbrowse.configuration},get adminMode(){return e.root.adminMode},get textSearchManager(){return e.root.textSearchManager}}))).views((e=>({get assemblies(){return e.jbrowse.assemblies}}))).actions((e=>({setSelection(n){e.selection=n},clearSelection(){e.selection=void 0},setHovered(n){e.hovered=n}})))}function a(e){return"id"in e&&"name"in e&&"root"in e}},31483:(e,n,t)=>{t.d(n,{C:()=>a,n:()=>i});var o=t(36349);if(179==t.j)var r=t(88196);var c=t(95492);function a(e){return r.types.model({connectionInstances:r.types.array(e.pluggableMstType("connection","stateModel"))}).views((e=>({get connections(){const{jbrowse:n}=e;return n.connections}}))).actions((n=>({makeConnection(t,r={}){const c=t.type;if(!c)throw new Error("track configuration has no `type` listed");const a=(0,o.readConfObject)(t,"name");if(!e.getConnectionType(c))throw new Error(`unknown connection type ${c}`);const i=n.connectionInstances.push({...r,name:a,type:c,configuration:t});return n.connectionInstances[i-1]},prepareToBreakConnection(e){const t=n,r=[],c={},a=(0,o.readConfObject)(e,"name"),i=n.connectionInstances.find((e=>e.name===a));if(i){for(const e of i.tracks){const n=t.getReferring(e);t.removeReferring(n,e,r,c)}return[()=>{r.forEach((e=>e())),this.breakConnection(e)},c]}},breakConnection(e){const t=(0,o.readConfObject)(e,"name"),r=n.connectionInstances.find((e=>e.name===t));if(!r)throw new Error(`no connection found with name ${t}`);n.connectionInstances.remove(r)},deleteConnection(e){const{jbrowse:t}=n;return t.deleteConnectionConf(e)},addConnectionConf(e){const{jbrowse:t}=n;return t.addConnectionConf(e)},clearConnections(){n.connectionInstances.clear()}})))}function i(e){return(0,c.N_)(e)&&"connectionInstances"in e}},60140:(e,n,t)=>{t.r(n),t.d(n,{default:()=>k});var o=t(66204),r=t(59602),c=t(63315),a=t(65404),i=t(64864),s=t(7146),l=t(31211),m=t(38684),u=t(80846),d=t(43710),g=t(43902);const p=(0,u.observer)((function({connectionType:e,model:n,session:t}){const r=e.configEditorComponent||d.wP;return o.createElement(o.Suspense,{fallback:o.createElement(g.LoadingEllipses,null)},o.createElement(r,{model:{target:n},session:t}))}));var f=t(46338),C=t(49140),b=t(78781),v=t(92454);const h=(0,u.observer)((function({connectionTypeChoices:e,connectionType:n,setConnectionType:t}){const r=e[0];return(0,o.useEffect)((()=>{n||t(r)}),[n,r,t]),o.createElement("form",{autoComplete:"off"},n?o.createElement(f.Z,{value:n.name,label:"connectionType",helperText:n.description?o.createElement(o.Fragment,null,n.description,n.url?o.createElement(C.Z,{href:n.url,rel:"noopener noreferrer",target:"_blank"},o.createElement(v.Z,null)):null):null,select:!0,fullWidth:!0,onChange:n=>t(e.find((e=>e.name===n.target.value))),variant:"outlined"},e.map((e=>o.createElement(b.Z,{key:e.name,value:e.name},e.displayName||e.name)))):null)}));var E=t(31483);const w=(0,m.ZL)()((e=>({root:{marginTop:e.spacing(1)},stepper:{backgroundColor:e.palette.background.default},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)}}))),y=["Select a Connection Type","Configure Connection"],k=(0,u.observer)((function({model:e}){const[n,t]=(0,o.useState)(),[m,u]=(0,o.useState)(),[d,g]=(0,o.useState)(0),{classes:f}=w(),C=(0,l.getSession)(e),{pluginManager:b}=(0,l.getEnv)(C),v=(0,o.useMemo)((()=>n?.configSchema.create({connectionId:m},(0,l.getEnv)(e))),[m,n,e]);return o.createElement("div",{className:f.root},o.createElement(r.Z,{className:f.stepper,activeStep:d,orientation:"vertical"},y.map((r=>o.createElement(c.Z,{key:r},o.createElement(a.Z,null,r),o.createElement(i.Z,null,0===d?o.createElement(h,{connectionTypeChoices:b.getConnectionElements(),connectionType:n,setConnectionType:e=>{t(e),e&&u(`${e.name}-${Date.now()}`)}}):n&&v?o.createElement(p,{connectionType:n,model:v,session:C}):null,o.createElement("div",{className:f.actionsContainer},o.createElement(s.Z,{disabled:0===d,onClick:()=>g(d-1),className:f.button},"Back"),o.createElement(s.Z,{disabled:!(0===d&&n||1===d&&v),variant:"contained",color:"primary",onClick:()=>{if(d===y.length-1){if(v&&(0,E.n)(C)){const e=C.addConnectionConf(v);C.makeConnection(e)}else C.notify("No config model to add");(0,l.isSessionModelWithWidgets)(C)&&C.hideWidget(e)}else g(d+1)},className:f.button,"data-testid":"addConnectionNext"},d===y.length-1?"Connect":"Next"))))))))}))}}]);
//# sourceMappingURL=140.6b39766e.chunk.js.map