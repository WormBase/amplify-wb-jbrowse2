"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[8900],{58900:(e,a,s)=>{s.r(a),s.d(a,{default:()=>b});var c=s(41867),t=s(47409),n=s(51590),r=s(49133),o=s(45489),l=s(96614),i=s(83171),h=s(27768),d=s(23801),u=s(35421),x=s(31625),g=s(47192),p=s(3762),k=s(90872),j=s(80838);const C=(0,g.ZL)()({dialogContent:{width:"40em"}}),b=(0,p.observer)((function(e){let{model:a,handleClose:s}=e;const{classes:g}=C(),[p,b]=(0,c.useState)(""),[S,Z]=(0,c.useState)(!0),[m,w]=(0,c.useState)(!0),[v,y]=(0,c.useState)(!0);let f;try{new RegExp(p)}catch(q){f=q}return(0,j.jsxs)(u.Dialog,{maxWidth:"xl",open:!0,onClose:s,title:"Sequence search",children:[(0,j.jsxs)(t.Z,{className:g.dialogContent,children:[(0,j.jsx)(n.Z,{children:"Supply a sequence to search for. A track will be created with the resulting matches once submitted. You can also supply regex style expressions e.g. AACT(C|T)."}),(0,j.jsx)(r.Z,{value:p,onChange:e=>b(e.target.value),helperText:"Sequence search pattern"}),(0,j.jsxs)(o.Z,{children:[(0,j.jsx)(l.Z,{control:(0,j.jsx)(i.Z,{checked:S,onChange:e=>Z(e.target.checked)}),label:"Search forward strand"}),(0,j.jsx)(l.Z,{control:(0,j.jsx)(i.Z,{checked:m,onChange:e=>w(e.target.checked)}),label:"Search reverse strand"}),(0,j.jsx)(l.Z,{control:(0,j.jsx)(i.Z,{checked:v,onChange:e=>y(e.target.checked)}),label:"Case insensitive"})]}),f?(0,j.jsx)(n.Z,{color:"error",children:"".concat(f)}):null]}),(0,j.jsxs)(h.Z,{children:[(0,j.jsx)(d.Z,{onClick:()=>{if(p){const s="sequence_search_".concat(+Date.now()),c=(0,k.getSession)(a),{assemblyManager:t}=c,n=a.assemblyNames[0];var e;if((0,k.isSessionWithAddTracks)(c))c.addTrackConf({trackId:s,name:"Sequence search ".concat(p),assemblyNames:[n],type:"FeatureTrack",adapter:{type:"SequenceSearchAdapter",search:p,searchForward:S,searchReverse:m,caseInsensitive:v,sequenceAdapter:(0,x.getSnapshot)(null===(e=t.get(n))||void 0===e?void 0:e.configuration.sequence.adapter)}}),a.showTrack(s)}s()},variant:"contained",color:"primary",children:"Submit"}),(0,j.jsx)(d.Z,{onClick:()=>s(),variant:"contained",color:"secondary",children:"Close"})]})]})}))}}]);
//# sourceMappingURL=8900.1ea23571.chunk.js.map