"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7005,4334],{6816:(r,e,t)=>{t.d(e,{d:()=>c});var n=t(66204),o=t(52682),a=t(76734),i=t(26074),s=t(43188);function l(r){return r.substring(2).toLowerCase()}function c(r){const{children:e,disableReactTree:t=!1,mouseEvent:c="onClick",onClickAway:u,touchEvent:d="onTouchEnd"}=r,v=n.useRef(!1),h=n.useRef(null),p=n.useRef(!1),g=n.useRef(!1);n.useEffect((()=>(setTimeout((()=>{p.current=!0}),0),()=>{p.current=!1})),[]);const m=(0,o.Z)(e.ref,h),f=(0,a.Z)((r=>{const e=g.current;g.current=!1;const n=(0,i.Z)(h.current);if(!p.current||!h.current||"clientX"in r&&function(r,e){return e.documentElement.clientWidth<r.clientX||e.documentElement.clientHeight<r.clientY}(r,n))return;if(v.current)return void(v.current=!1);let o;o=r.composedPath?r.composedPath().indexOf(h.current)>-1:!n.documentElement.contains(r.target)||h.current.contains(r.target),o||!t&&e||u(r)})),b=r=>t=>{g.current=!0;const n=e.props[r];n&&n(t)},Z={ref:m};return!1!==d&&(Z[d]=b(d)),n.useEffect((()=>{if(!1!==d){const r=l(d),e=(0,i.Z)(h.current),t=()=>{v.current=!0};return e.addEventListener(r,f),e.addEventListener("touchmove",t),()=>{e.removeEventListener(r,f),e.removeEventListener("touchmove",t)}}}),[f,d]),!1!==c&&(Z[c]=b(c)),n.useEffect((()=>{if(!1!==c){const r=l(c),e=(0,i.Z)(h.current);return e.addEventListener(r,f),()=>{e.removeEventListener(r,f)}}}),[f,c]),(0,s.jsx)(n.Fragment,{children:n.cloneElement(e,Z)})}},15971:(r,e,t)=>{var n=t(57739);e.Z=void 0;var o=n(t(53948)),a=t(43188),i=(0,o.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=i},8459:(r,e,t)=>{var n=t(57739);e.Z=void 0;var o=n(t(53948)),a=t(43188),i=(0,o.default)((0,a.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"GetApp");e.Z=i},9051:(r,e,t)=>{var n=t(57739);e.Z=void 0;var o=n(t(53948)),a=t(43188),i=(0,o.default)((0,a.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");e.Z=i},49084:(r,e,t)=>{var n=t(57739);e.Z=void 0;var o=n(t(53948)),a=t(43188),i=(0,o.default)((0,a.jsx)("path",{d:"M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"}),"Publish");e.Z=i},1700:(r,e,t)=>{var n=t(57739);e.Z=void 0;var o=n(t(53948)),a=t(43188),i=(0,o.default)((0,a.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");e.Z=i},26523:(r,e,t)=>{var n=t(57739);e.Z=void 0;var o=n(t(53948)),a=t(43188),i=(0,o.default)((0,a.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");e.Z=i},38465:(r,e,t)=>{t.d(e,{Z:()=>b});var n=t(30984),o=t(55559),a=t(66204),i=t(56317),s=t(56325),l=t(58029),c=t(42142),u=t(61125),d=t(57369),v=t(40118),h=t(81469),p=t(43188);const g=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],m=(0,u.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(r,e)=>e.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),f=(0,u.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.badge,e[t.variant],e[`anchorOrigin${(0,v.Z)(t.anchorOrigin.vertical)}${(0,v.Z)(t.anchorOrigin.horizontal)}${(0,v.Z)(t.overlap)}`],"default"!==t.color&&e[`color${(0,v.Z)(t.color)}`],t.invisible&&e.invisible]}})((({theme:r})=>{var e;return{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.enteringScreen}),variants:[...Object.keys((null!=(e=r.vars)?e:r).palette).filter((e=>{var t,n;return(null!=(t=r.vars)?t:r).palette[e].main&&(null!=(n=r.vars)?n:r).palette[e].contrastText})).map((e=>({props:{color:e},style:{backgroundColor:(r.vars||r).palette[e].main,color:(r.vars||r).palette[e].contrastText}}))),{props:{variant:"dot"},style:{borderRadius:4,height:8,minWidth:8,padding:0}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.leavingScreen})}}]}})),b=a.forwardRef((function(r,e){var t,a,u,b,Z,x;const y=(0,d.Z)({props:r,name:"MuiBadge"}),{anchorOrigin:w={vertical:"top",horizontal:"right"},className:S,component:O,components:k={},componentsProps:C={},children:R,overlap:M="rectangular",color:$="default",invisible:z=!1,max:P=99,badgeContent:T,slots:L,slotProps:N,showZero:j=!1,variant:B="standard"}=y,D=(0,o.Z)(y,g),{badgeContent:E,invisible:F,max:H,displayValue:V}=function(r){const{badgeContent:e,invisible:t=!1,max:n=99,showZero:o=!1}=r,a=(0,s.Z)({badgeContent:e,max:n});let i=t;!1!==t||0!==e||o||(i=!0);const{badgeContent:l,max:c=n}=i?a:r;return{badgeContent:l,invisible:i,max:c,displayValue:l&&Number(l)>c?`${c}+`:l}}({max:P,invisible:z,badgeContent:T,showZero:j}),W=(0,s.Z)({anchorOrigin:w,color:$,overlap:M,variant:B,badgeContent:T}),I=F||null==E&&"dot"!==B,{color:A=$,overlap:G=M,anchorOrigin:_=w,variant:X=B}=I?W:y,q="dot"!==X?V:void 0,Y=(0,n.Z)({},y,{badgeContent:E,invisible:I,max:H,displayValue:q,showZero:j,anchorOrigin:_,color:A,overlap:G,variant:X}),J=(r=>{const{color:e,anchorOrigin:t,invisible:n,overlap:o,variant:a,classes:i={}}=r,s={root:["root"],badge:["badge",a,n&&"invisible",`anchorOrigin${(0,v.Z)(t.vertical)}${(0,v.Z)(t.horizontal)}`,`anchorOrigin${(0,v.Z)(t.vertical)}${(0,v.Z)(t.horizontal)}${(0,v.Z)(o)}`,`overlap${(0,v.Z)(o)}`,"default"!==e&&`color${(0,v.Z)(e)}`]};return(0,l.Z)(s,h.I,i)})(Y),K=null!=(t=null!=(a=null==L?void 0:L.root)?a:k.Root)?t:m,Q=null!=(u=null!=(b=null==L?void 0:L.badge)?b:k.Badge)?u:f,U=null!=(Z=null==N?void 0:N.root)?Z:C.root,rr=null!=(x=null==N?void 0:N.badge)?x:C.badge,er=(0,c.y)({elementType:K,externalSlotProps:U,externalForwardedProps:D,additionalProps:{ref:e,as:O},ownerState:Y,className:(0,i.Z)(null==U?void 0:U.className,J.root,S)}),tr=(0,c.y)({elementType:Q,externalSlotProps:rr,ownerState:Y,className:(0,i.Z)(J.badge,null==rr?void 0:rr.className)});return(0,p.jsxs)(K,(0,n.Z)({},er,{children:[R,(0,p.jsx)(Q,(0,n.Z)({},tr,{children:q}))]}))}))},81469:(r,e,t)=>{t.d(e,{I:()=>a,Z:()=>i});var n=t(58109),o=t(95201);function a(r){return(0,o.Z)("MuiBadge",r)}const i=(0,n.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])},10126:(r,e,t)=>{t.d(e,{Z:()=>k});var n=t(55559),o=t(30984),a=t(66204),i=t(56317),s=t(58029),l=t(71580),c=t(40118),u=t(57369),d=t(61125),v=t(22489),h=t(43188);const p=["className","color","disableShrink","size","style","thickness","value","variant"];let g,m,f,b,Z=r=>r;const x=(0,l.F4)(g||(g=Z`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),y=(0,l.F4)(m||(m=Z`
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
`)),w=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[t.variant],e[`color${(0,c.Z)(t.color)}`]]}})((({ownerState:r,theme:e})=>(0,o.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:e.transitions.create("transform")},"inherit"!==r.color&&{color:(e.vars||e).palette[r.color].main})),(({ownerState:r})=>"indeterminate"===r.variant&&(0,l.iv)(f||(f=Z`
      animation: ${0} 1.4s linear infinite;
    `),x))),S=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),O=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.circle,e[`circle${(0,c.Z)(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})((({ownerState:r,theme:e})=>(0,o.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:e.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:r})=>"indeterminate"===r.variant&&!r.disableShrink&&(0,l.iv)(b||(b=Z`
      animation: ${0} 1.4s ease-in-out infinite;
    `),y))),k=a.forwardRef((function(r,e){const t=(0,u.Z)({props:r,name:"MuiCircularProgress"}),{className:a,color:l="primary",disableShrink:d=!1,size:g=40,style:m,thickness:f=3.6,value:b=0,variant:Z="indeterminate"}=t,x=(0,n.Z)(t,p),y=(0,o.Z)({},t,{color:l,disableShrink:d,size:g,thickness:f,value:b,variant:Z}),k=(r=>{const{classes:e,variant:t,color:n,disableShrink:o}=r,a={root:["root",t,`color${(0,c.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(t)}`,o&&"circleDisableShrink"]};return(0,s.Z)(a,v.C,e)})(y),C={},R={},M={};if("determinate"===Z){const r=2*Math.PI*((44-f)/2);C.strokeDasharray=r.toFixed(3),M["aria-valuenow"]=Math.round(b),C.strokeDashoffset=`${((100-b)/100*r).toFixed(3)}px`,R.transform="rotate(-90deg)"}return(0,h.jsx)(w,(0,o.Z)({className:(0,i.Z)(k.root,a),style:(0,o.Z)({width:g,height:g},R,m),ownerState:y,ref:e,role:"progressbar"},M,x,{children:(0,h.jsx)(S,{className:k.svg,ownerState:y,viewBox:"22 22 44 44",children:(0,h.jsx)(O,{className:k.circle,style:C,ownerState:y,cx:44,cy:44,r:(44-f)/2,fill:"none",strokeWidth:f})})}))}))},22489:(r,e,t)=>{t.d(e,{C:()=>a,Z:()=>i});var n=t(58109),o=t(95201);function a(r){return(0,o.Z)("MuiCircularProgress",r)}const i=(0,n.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},66159:(r,e,t)=>{t.d(e,{Z:()=>w});var n=t(55559),o=t(30984),a=t(66204),i=t(56317),s=t(58029),l=t(40118),c=t(61125),u=t(57369),d=t(71948),v=t(81597),h=t(80013),p=t(29110),g=t(4860),m=t(73330);const f={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=({theme:r,ownerState:e})=>{const t=(r=>f[r]||r)(e.color),n=(0,g.DW)(r,`palette.${t}`,!1)||e.color,o=(0,g.DW)(r,`palette.${t}Channel`);return"vars"in r&&o?`rgba(${o} / 0.4)`:(0,m.Fq)(n,.4)};var Z=t(43188);const x=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],y=(0,c.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[`underline${(0,l.Z)(t.underline)}`],"button"===t.component&&e.button]}})((({theme:r,ownerState:e})=>(0,o.Z)({},"none"===e.underline&&{textDecoration:"none"},"hover"===e.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===e.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==e.color&&{textDecorationColor:b({theme:r,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===e.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${p.Z.focusVisible}`]:{outline:"auto"}}))),w=a.forwardRef((function(r,e){const t=(0,u.Z)({props:r,name:"MuiLink"}),{className:c,color:h="primary",component:g="a",onBlur:m,onFocus:b,TypographyClasses:w,underline:S="always",variant:O="inherit",sx:k}=t,C=(0,n.Z)(t,x),{isFocusVisibleRef:R,onBlur:M,onFocus:$,ref:z}=(0,d.Z)(),[P,T]=a.useState(!1),L=(0,v.Z)(e,z),N=(0,o.Z)({},t,{color:h,component:g,focusVisible:P,underline:S,variant:O}),j=(r=>{const{classes:e,component:t,focusVisible:n,underline:o}=r,a={root:["root",`underline${(0,l.Z)(o)}`,"button"===t&&"button",n&&"focusVisible"]};return(0,s.Z)(a,p.w,e)})(N);return(0,Z.jsx)(y,(0,o.Z)({color:h,className:(0,i.Z)(j.root,c),classes:w,component:g,onBlur:r=>{M(r),!1===R.current&&T(!1),m&&m(r)},onFocus:r=>{$(r),!0===R.current&&T(!0),b&&b(r)},ref:L,ownerState:N,variant:O,sx:[...Object.keys(f).includes(h)?[]:[{color:h}],...Array.isArray(k)?k:[k]]},C))}))},29110:(r,e,t)=>{t.d(e,{Z:()=>i,w:()=>a});var n=t(58109),o=t(95201);function a(r){return(0,o.Z)("MuiLink",r)}const i=(0,n.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"])},96987:(r,e,t)=>{t.d(e,{Z:()=>p});var n=t(55559),o=t(30984),a=t(66204),i=t(56317),s=t(58029),l=t(57369),c=t(61125),u=t(41666),d=t(43188);const v=["className","component","disableGutters","variant"],h=(0,c.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,!t.disableGutters&&e.gutters,e[t.variant]]}})((({theme:r,ownerState:e})=>(0,o.Z)({position:"relative",display:"flex",alignItems:"center"},!e.disableGutters&&{paddingLeft:r.spacing(2),paddingRight:r.spacing(2),[r.breakpoints.up("sm")]:{paddingLeft:r.spacing(3),paddingRight:r.spacing(3)}},"dense"===e.variant&&{minHeight:48})),(({theme:r,ownerState:e})=>"regular"===e.variant&&r.mixins.toolbar)),p=a.forwardRef((function(r,e){const t=(0,l.Z)({props:r,name:"MuiToolbar"}),{className:a,component:c="div",disableGutters:p=!1,variant:g="regular"}=t,m=(0,n.Z)(t,v),f=(0,o.Z)({},t,{component:c,disableGutters:p,variant:g}),b=(r=>{const{classes:e,disableGutters:t,variant:n}=r,o={root:["root",!t&&"gutters",n]};return(0,s.Z)(o,u.N,e)})(f);return(0,d.jsx)(h,(0,o.Z)({as:c,className:(0,i.Z)(b.root,a),ref:e,ownerState:f},m))}))},41666:(r,e,t)=>{t.d(e,{N:()=>a,Z:()=>i});var n=t(58109),o=t(95201);function a(r){return(0,o.Z)("MuiToolbar",r)}const i=(0,n.Z)("MuiToolbar",["root","gutters","regular","dense"])}}]);
//# sourceMappingURL=7005.adf1d490.chunk.js.map