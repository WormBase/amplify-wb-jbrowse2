"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2088,8177],{58542:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n.BaseCard});var n=r(44047)},20875:(e,t,r)=>{r.d(t,{d:()=>c});var n=r(41867),o=r(32407),s=r(95809),a=r(89293),i=r(80838);function u(e){return e.substring(2).toLowerCase()}function c(e){const{children:t,disableReactTree:r=!1,mouseEvent:c="onClick",onClickAway:l,touchEvent:d="onTouchEnd"}=e,f=n.useRef(!1),m=n.useRef(null),v=n.useRef(!1),p=n.useRef(!1);n.useEffect((()=>(setTimeout((()=>{v.current=!0}),0),()=>{v.current=!1})),[]);const g=(0,o.Z)(t.ref,m),b=(0,s.Z)((e=>{const t=p.current;p.current=!1;const n=(0,a.Z)(m.current);if(!v.current||!m.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,n))return;if(f.current)return void(f.current=!1);let o;o=e.composedPath?e.composedPath().indexOf(m.current)>-1:!n.documentElement.contains(e.target)||m.current.contains(e.target),o||!r&&t||l(e)})),h=e=>r=>{p.current=!0;const n=t.props[e];n&&n(r)},Z={ref:g};return!1!==d&&(Z[d]=h(d)),n.useEffect((()=>{if(!1!==d){const e=u(d),t=(0,a.Z)(m.current),r=()=>{f.current=!0};return t.addEventListener(e,b),t.addEventListener("touchmove",r),()=>{t.removeEventListener(e,b),t.removeEventListener("touchmove",r)}}}),[b,d]),!1!==c&&(Z[c]=h(c)),n.useEffect((()=>{if(!1!==c){const e=u(c),t=(0,a.Z)(m.current);return t.addEventListener(e,b),()=>{t.removeEventListener(e,b)}}}),[b,c]),(0,i.jsx)(n.Fragment,{children:n.cloneElement(t,Z)})}},69625:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(31461),o=r(7896),s=r(41867),a=r(66184),i=r(92705),u=r(90293),c=r(75693),l=r(59968),d=r(80838);const f=["className","component","disableGutters","variant"],m=(0,c.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disableGutters&&t.gutters,t[r.variant]]}})((e=>{let{theme:t,ownerState:r}=e;return(0,o.Z)({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}},"dense"===r.variant&&{minHeight:48})}),(e=>{let{theme:t,ownerState:r}=e;return"regular"===r.variant&&t.mixins.toolbar})),v=s.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiToolbar"}),{className:s,component:c="div",disableGutters:v=!1,variant:p="regular"}=r,g=(0,n.Z)(r,f),b=(0,o.Z)({},r,{component:c,disableGutters:v,variant:p}),h=(e=>{const{classes:t,disableGutters:r,variant:n}=e,o={root:["root",!r&&"gutters",n]};return(0,i.Z)(o,l.N,t)})(b);return(0,d.jsx)(m,(0,o.Z)({as:c,className:(0,a.Z)(h.root,s),ref:t,ownerState:b},g))}))},59968:(e,t,r)=>{r.d(t,{N:()=>s,Z:()=>a});var n=r(70101),o=r(88498);function s(e){return(0,o.Z)("MuiToolbar",e)}const a=(0,n.Z)("MuiToolbar",["root","gutters","regular","dense"])}}]);
//# sourceMappingURL=2088.746f8899.chunk.js.map