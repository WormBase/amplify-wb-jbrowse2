"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[3912],{13912:(e,a,r)=>{r.r(a),r.d(a,{default:()=>b});var t=r(66204),n=r(29520),s=r(80013),o=r(10126),i=r(46338),l=r(62301),c=r(7146),d=r(43902),m=r(38684),u=r(36349),g=r(5930),f=r(31211),y=r(1828);const{featurizeSA:h,getClip:p,getLength:w,getLengthSansClipping:v,getTag:S}=y.MismatchParser,k=(0,m.ZL)()({root:{width:300}});function b({track:e,feature:a,handleClose:r}){const{classes:m}=k(),[y,b]=(0,t.useState)("0"),[C,Z]=(0,t.useState)(),[$,x]=(0,t.useState)(),N=+y;return(0,t.useEffect)((()=>{(async()=>{Z(void 0);try{if(2048&a.get("flags")){const r=(S(a,"SA")||"").split(";")[0],[t,n]=r.split(","),{rpcManager:s}=(0,f.getSession)(e),o=(0,u.getConf)(e,"adapter"),i=(0,g.getRpcSessionId)(e),l=(await s.call(i,"CoreGetFeatures",{adapterConfig:o,sessionId:i,regions:[{refName:t,start:+n-1,end:+n}]})).find((e=>!(e.get("name")!==a.get("name")||2048&e.get("flags")||256&e.get("flags"))));if(!l)throw new Error("primary feature not found");x(l)}else x(a)}catch(e){console.error(e),Z(e)}})()}),[a,e]),t.createElement(d.Dialog,{open:!0,onClose:r,title:"Set window size"},t.createElement(n.Z,null,C?t.createElement(s.Z,{color:"error"},`${C}`):$?t.createElement("div",{className:m.root},256&$.get("flags")?t.createElement(s.Z,{style:{color:"orange"}},"Note: You selected a secondary alignment (which generally does not have SA tags or SEQ fields) so do a full reconstruction of the alignment"):null,t.createElement(s.Z,null,"Show an extra window size around each part of the split alignment. Using a larger value can allow you to see more genomic context."),t.createElement(i.Z,{value:N,onChange:e=>b(e.target.value),label:"Set window size"})):t.createElement("div",null,t.createElement(s.Z,null,"To accurately perform comparison we are fetching the primary alignment. Loading primary feature..."),t.createElement(o.Z,null))),t.createElement(l.Z,null,t.createElement(c.Z,{variant:"contained",color:"secondary",onClick:r},"Cancel"),t.createElement(c.Z,{disabled:!$,variant:"contained",color:"primary",onClick:function(){try{if(!$)return;const a=$,t=(0,f.getSession)(e),n=(0,f.getContainingView)(e),s=a.get("CIGAR"),o=a.get("flags"),i=a.get("strand"),l=S(a,"SA")||"",c=a.get("name"),d=p(s,1),m=`${c}_assembly_${Date.now()}`,[g]=(0,u.getConf)(e,"assemblyNames"),y=[g,m],k=`track-${Date.now()}`,b=`${c}_vs_${g}`,{assemblyManager:C}=t,Z=C.get(g);if(!Z)throw new Error("assembly not found");const x=h(l,a.id(),i,c,!0),P=a.toJSON();P.clipPos=d,P.strand=1,P.mate={refName:c,start:d,end:d+v(s)};const R=w(2048&o?x[0].CIGAR:s),D=[P,...x];D.forEach(((e,a)=>{e.refName=Z?.getCanonicalRefName(e.refName)||e.refName,e.syntenyId=a,e.mate.syntenyId=a,e.mate.uniqueId=`${e.uniqueId}_mate`})),D.sort(((e,a)=>e.clipPos-a.clipPos));const E=a.get("seq"),M=[...D,...D.map((e=>e.mate))],q=2*N,I=D.reduce(((e,a)=>e+a.end-a.start+q),0),L=`${c}_${Date.now()}`,T=(0,u.getConf)(Z,"sequence"),A=(0,f.gatherOverlaps)(D.map((e=>({...e,start:Math.max(0,e.start-N),end:e.end+N,assemblyName:g}))));t.addTemporaryAssembly?.({name:`${m}`,sequence:{type:"ReferenceSequenceTrack",name:"Read sequence",trackId:L,assemblyNames:[m],adapter:{type:"FromConfigSequenceAdapter",noAssemblyManager:!0,features:[{start:0,end:R,seq:E||"",refName:c,uniqueId:`${Math.random()}`}]}}}),t.addView("LinearSyntenyView",{type:"LinearSyntenyView",views:[{type:"LinearGenomeView",hideHeader:!0,offsetPx:0,bpPerPx:I/n.width,displayedRegions:A,tracks:[{id:`${Math.random()}`,type:"ReferenceSequenceTrack",assemblyNames:[g],configuration:T.trackId,displays:[{id:`${Math.random()}`,type:"LinearReferenceSequenceDisplay",showReverse:!0,showTranslation:!1,height:35,configuration:`${L}-LinearReferenceSequenceDisplay`}]}]},{type:"LinearGenomeView",hideHeader:!0,offsetPx:0,bpPerPx:R/n.width,displayedRegions:[{assemblyName:m,start:0,end:R,refName:c}],tracks:[{id:`${Math.random()}`,type:"ReferenceSequenceTrack",configuration:L,displays:[{id:`${Math.random()}`,type:"LinearReferenceSequenceDisplay",showReverse:!0,showTranslation:!1,height:35,configuration:`${L}-LinearReferenceSequenceDisplay`}]}]}],viewTrackConfigs:[{type:"SyntenyTrack",assemblyNames:y,adapter:{type:"FromConfigAdapter",features:M},trackId:k,name:b}],tracks:[{configuration:k,type:"SyntenyTrack",displays:[{type:"LinearSyntenyDisplay",configuration:`${k}-LinearSyntenyDisplay`}]}],displayName:`${c} vs ${g}`}),r()}catch(e){console.error(e),Z(e)}}},"Submit")))}},10126:(e,a,r)=>{r.d(a,{Z:()=>$});var t=r(55559),n=r(30984),s=r(66204),o=r(56317),i=r(58029),l=r(71580),c=r(40118),d=r(57369),m=r(61125),u=r(22489),g=r(43188);const f=["className","color","disableShrink","size","style","thickness","value","variant"];let y,h,p,w,v=e=>e;const S=(0,l.F4)(y||(y=v`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),k=(0,l.F4)(h||(h=v`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),b=(0,m.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,a[r.variant],a[`color${(0,c.Z)(r.color)}`]]}})((({ownerState:e,theme:a})=>(0,n.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:a.transitions.create("transform")},"inherit"!==e.color&&{color:(a.vars||a).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(p||(p=v`
      animation: ${0} 1.4s linear infinite;
    `),S))),C=(0,m.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,a)=>a.svg})({display:"block"}),Z=(0,m.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.circle,a[`circle${(0,c.Z)(r.variant)}`],r.disableShrink&&a.circleDisableShrink]}})((({ownerState:e,theme:a})=>(0,n.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:a.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(w||(w=v`
      animation: ${0} 1.4s ease-in-out infinite;
    `),k))),$=s.forwardRef((function(e,a){const r=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:s,color:l="primary",disableShrink:m=!1,size:y=40,style:h,thickness:p=3.6,value:w=0,variant:v="indeterminate"}=r,S=(0,t.Z)(r,f),k=(0,n.Z)({},r,{color:l,disableShrink:m,size:y,thickness:p,value:w,variant:v}),$=(e=>{const{classes:a,variant:r,color:t,disableShrink:n}=e,s={root:["root",r,`color${(0,c.Z)(t)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(r)}`,n&&"circleDisableShrink"]};return(0,i.Z)(s,u.C,a)})(k),x={},N={},P={};if("determinate"===v){const e=2*Math.PI*((44-p)/2);x.strokeDasharray=e.toFixed(3),P["aria-valuenow"]=Math.round(w),x.strokeDashoffset=`${((100-w)/100*e).toFixed(3)}px`,N.transform="rotate(-90deg)"}return(0,g.jsx)(b,(0,n.Z)({className:(0,o.Z)($.root,s),style:(0,n.Z)({width:y,height:y},N,h),ownerState:k,ref:a,role:"progressbar"},P,S,{children:(0,g.jsx)(C,{className:$.svg,ownerState:k,viewBox:"22 22 44 44",children:(0,g.jsx)(Z,{className:$.circle,style:x,ownerState:k,cx:44,cy:44,r:(44-p)/2,fill:"none",strokeWidth:p})})}))}))},22489:(e,a,r)=>{r.d(a,{C:()=>s,Z:()=>o});var t=r(58109),n=r(95201);function s(e){return(0,n.ZP)("MuiCircularProgress",e)}const o=(0,t.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])}}]);
//# sourceMappingURL=3912.fd3ef055.chunk.js.map