"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[6427,4334,428,8835,1757,9265,590,9259],{6816:(e,r,t)=>{t.d(r,{d:()=>l});var n=t(66204),a=t(52682),s=t(76734),o=t(26074),i=t(43188);function c(e){return e.substring(2).toLowerCase()}function l(e){const{children:r,disableReactTree:t=!1,mouseEvent:l="onClick",onClickAway:u,touchEvent:d="onTouchEnd"}=e,v=n.useRef(!1),m=n.useRef(null),h=n.useRef(!1),f=n.useRef(!1);n.useEffect((()=>(setTimeout((()=>{h.current=!0}),0),()=>{h.current=!1})),[]);const g=(0,a.Z)(r.ref,m),p=(0,s.Z)((e=>{const r=f.current;f.current=!1;const n=(0,o.Z)(m.current);if(!h.current||!m.current||"clientX"in e&&function(e,r){return r.documentElement.clientWidth<e.clientX||r.documentElement.clientHeight<e.clientY}(e,n))return;if(v.current)return void(v.current=!1);let a;a=e.composedPath?e.composedPath().indexOf(m.current)>-1:!n.documentElement.contains(e.target)||m.current.contains(e.target),a||!t&&r||u(e)})),Z=e=>t=>{f.current=!0;const n=r.props[e];n&&n(t)},b={ref:g};return!1!==d&&(b[d]=Z(d)),n.useEffect((()=>{if(!1!==d){const e=c(d),r=(0,o.Z)(m.current),t=()=>{v.current=!0};return r.addEventListener(e,p),r.addEventListener("touchmove",t),()=>{r.removeEventListener(e,p),r.removeEventListener("touchmove",t)}}}),[p,d]),!1!==l&&(b[l]=Z(l)),n.useEffect((()=>{if(!1!==l){const e=c(l),r=(0,o.Z)(m.current);return r.addEventListener(e,p),()=>{r.removeEventListener(e,p)}}}),[p,l]),(0,i.jsx)(n.Fragment,{children:n.cloneElement(r,b)})}},10126:(e,r,t)=>{t.d(r,{Z:()=>E});var n=t(55559),a=t(30984),s=t(66204),o=t(56317),i=t(58029),c=t(71580),l=t(40118),u=t(57369),d=t(61125),v=t(22489),m=t(43188);const h=["className","color","disableShrink","size","style","thickness","value","variant"];let f,g,p,Z,b=e=>e;const k=(0,c.F4)(f||(f=b`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),w=(0,c.F4)(g||(g=b`
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
`)),S=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,l.Z)(t.color)}`]]}})((({ownerState:e,theme:r})=>(0,a.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,c.iv)(p||(p=b`
      animation: ${0} 1.4s linear infinite;
    `),k))),x=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),y=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,l.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((({ownerState:e,theme:r})=>(0,a.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,c.iv)(Z||(Z=b`
      animation: ${0} 1.4s ease-in-out infinite;
    `),w))),E=s.forwardRef((function(e,r){const t=(0,u.Z)({props:e,name:"MuiCircularProgress"}),{className:s,color:c="primary",disableShrink:d=!1,size:f=40,style:g,thickness:p=3.6,value:Z=0,variant:b="indeterminate"}=t,k=(0,n.Z)(t,h),w=(0,a.Z)({},t,{color:c,disableShrink:d,size:f,thickness:p,value:Z,variant:b}),E=(e=>{const{classes:r,variant:t,color:n,disableShrink:a}=e,s={root:["root",t,`color${(0,l.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,l.Z)(t)}`,a&&"circleDisableShrink"]};return(0,i.Z)(s,v.C,r)})(w),P={},C={},R={};if("determinate"===b){const e=2*Math.PI*((44-p)/2);P.strokeDasharray=e.toFixed(3),R["aria-valuenow"]=Math.round(Z),P.strokeDashoffset=`${((100-Z)/100*e).toFixed(3)}px`,C.transform="rotate(-90deg)"}return(0,m.jsx)(S,(0,a.Z)({className:(0,o.Z)(E.root,s),style:(0,a.Z)({width:f,height:f},C,g),ownerState:w,ref:r,role:"progressbar"},R,k,{children:(0,m.jsx)(x,{className:E.svg,ownerState:w,viewBox:"22 22 44 44",children:(0,m.jsx)(y,{className:E.circle,style:P,ownerState:w,cx:44,cy:44,r:(44-p)/2,fill:"none",strokeWidth:p})})}))}))},22489:(e,r,t)=>{t.d(r,{C:()=>s,Z:()=>o});var n=t(58109),a=t(95201);function s(e){return(0,a.ZP)("MuiCircularProgress",e)}const o=(0,n.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},96987:(e,r,t)=>{t.d(r,{Z:()=>h});var n=t(55559),a=t(30984),s=t(66204),o=t(56317),i=t(58029),c=t(57369),l=t(61125),u=t(41666),d=t(43188);const v=["className","component","disableGutters","variant"],m=(0,l.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,!t.disableGutters&&r.gutters,r[t.variant]]}})((({theme:e,ownerState:r})=>(0,a.Z)({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}},"dense"===r.variant&&{minHeight:48})),(({theme:e,ownerState:r})=>"regular"===r.variant&&e.mixins.toolbar)),h=s.forwardRef((function(e,r){const t=(0,c.Z)({props:e,name:"MuiToolbar"}),{className:s,component:l="div",disableGutters:h=!1,variant:f="regular"}=t,g=(0,n.Z)(t,v),p=(0,a.Z)({},t,{component:l,disableGutters:h,variant:f}),Z=(e=>{const{classes:r,disableGutters:t,variant:n}=e,a={root:["root",!t&&"gutters",n]};return(0,i.Z)(a,u.N,r)})(p);return(0,d.jsx)(m,(0,a.Z)({as:l,className:(0,o.Z)(Z.root,s),ref:r,ownerState:p},g))}))},41666:(e,r,t)=>{t.d(r,{N:()=>s,Z:()=>o});var n=t(58109),a=t(95201);function s(e){return(0,a.ZP)("MuiToolbar",e)}const o=(0,n.Z)("MuiToolbar",["root","gutters","regular","dense"])}}]);
//# sourceMappingURL=6427.2231db56.chunk.js.map