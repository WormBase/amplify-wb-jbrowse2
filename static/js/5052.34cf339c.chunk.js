"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5052],{66159:(e,n,o)=>{o.d(n,{Z:()=>x});var r=o(55559),t=o(30984),i=o(66204),a=o(56317),s=o(58029),l=o(40118),c=o(61125),u=o(57369),d=o(71948),p=o(81597),b=o(80013),m=o(29110),y=o(4860),Z=o(73330);const h={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=({theme:e,ownerState:n})=>{const o=(e=>h[e]||e)(n.color),r=(0,y.DW)(e,`palette.${o}`,!1)||n.color,t=(0,y.DW)(e,`palette.${o}Channel`);return"vars"in e&&t?`rgba(${t} / 0.4)`:(0,Z.Fq)(r,.4)};var v=o(43188);const f=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k=(0,c.ZP)(b.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,n[`underline${(0,l.Z)(o.underline)}`],"button"===o.component&&n.button]}})((({theme:e,ownerState:n})=>(0,t.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,t.Z)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:w({theme:e,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${m.Z.focusVisible}`]:{outline:"auto"}}))),x=i.forwardRef((function(e,n){const o=(0,u.Z)({props:e,name:"MuiLink"}),{className:c,color:b="primary",component:y="a",onBlur:Z,onFocus:w,TypographyClasses:x,underline:g="always",variant:C="inherit",sx:S}=o,D=(0,r.Z)(o,f),{isFocusVisibleRef:A,onBlur:F,onFocus:V,ref:$}=(0,d.Z)(),[L,M]=i.useState(!1),R=(0,p.Z)(n,$),T=(0,t.Z)({},o,{color:b,component:y,focusVisible:L,underline:g,variant:C}),j=(e=>{const{classes:n,component:o,focusVisible:r,underline:t}=e,i={root:["root",`underline${(0,l.Z)(t)}`,"button"===o&&"button",r&&"focusVisible"]};return(0,s.Z)(i,m.w,n)})(T);return(0,v.jsx)(k,(0,t.Z)({color:b,className:(0,a.Z)(j.root,c),classes:x,component:y,onBlur:e=>{F(e),!1===A.current&&M(!1),Z&&Z(e)},onFocus:e=>{V(e),!0===A.current&&M(!0),w&&w(e)},ref:R,ownerState:T,variant:C,sx:[...Object.keys(h).includes(b)?[]:[{color:b}],...Array.isArray(S)?S:[S]]},D))}))},65052:(e,n,o)=>{o.r(n),o.d(n,{default:()=>r.Z,getLinkUtilityClass:()=>t.w,linkClasses:()=>t.Z});var r=o(66159),t=o(29110)},29110:(e,n,o)=>{o.d(n,{Z:()=>a,w:()=>i});var r=o(58109),t=o(95201);function i(e){return(0,t.ZP)("MuiLink",e)}const a=(0,r.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"])}}]);
//# sourceMappingURL=5052.34cf339c.chunk.js.map