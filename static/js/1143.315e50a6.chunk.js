"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[1143],{52028:(e,t,a)=>{a.d(t,{Z:()=>k});var o=a(55559),r=a(30984),i=a(66204),s=a(56317),c=a(58029),l=a(73330),n=a(40118),d=a(68892),h=a(57369),p=a(61125),m=a(10868),u=a(43188);const g=["className","color","edge","size","sx"],w=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.edge&&t[`edge${(0,n.Z)(a.edge)}`],t[`size${(0,n.Z)(a.size)}`]]}})((({ownerState:e})=>(0,r.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===e.edge&&{marginLeft:-8},"end"===e.edge&&{marginRight:-8},"small"===e.size&&{width:40,height:24,padding:7,[`& .${m.Z.thumb}`]:{width:16,height:16},[`& .${m.Z.switchBase}`]:{padding:4,[`&.${m.Z.checked}`]:{transform:"translateX(16px)"}}}))),v=(0,p.ZP)(d.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.switchBase,{[`& .${m.Z.input}`]:t.input},"default"!==a.color&&t[`color${(0,n.Z)(a.color)}`]]}})((({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${"light"===e.palette.mode?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${m.Z.checked}`]:{transform:"translateX(20px)"},[`&.${m.Z.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${m.Z.checked} + .${m.Z.track}`]:{opacity:.5},[`&.${m.Z.disabled} + .${m.Z.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:""+("light"===e.palette.mode?.12:.2)},[`& .${m.Z.input}`]:{left:"-100%",width:"300%"}})),(({theme:e,ownerState:t})=>(0,r.Z)({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${m.Z.checked}`]:{color:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${m.Z.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t.color}DisabledColor`]:`${"light"===e.palette.mode?(0,l.$n)(e.palette[t.color].main,.62):(0,l._j)(e.palette[t.color].main,.55)}`}},[`&.${m.Z.checked} + .${m.Z.track}`]:{backgroundColor:(e.vars||e).palette[t.color].main}}))),b=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})((({theme:e})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${"light"===e.palette.mode?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:""+("light"===e.palette.mode?.38:.3)}))),Z=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})((({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),k=i.forwardRef((function(e,t){const a=(0,h.Z)({props:e,name:"MuiSwitch"}),{className:i,color:l="primary",edge:d=!1,size:p="medium",sx:k}=a,$=(0,o.Z)(a,g),S=(0,r.Z)({},a,{color:l,edge:d,size:p}),f=(e=>{const{classes:t,edge:a,size:o,color:i,checked:s,disabled:l}=e,d={root:["root",a&&`edge${(0,n.Z)(a)}`,`size${(0,n.Z)(o)}`],switchBase:["switchBase",`color${(0,n.Z)(i)}`,s&&"checked",l&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},h=(0,c.Z)(d,m.H,t);return(0,r.Z)({},t,h)})(S),x=(0,u.jsx)(Z,{className:f.thumb,ownerState:S});return(0,u.jsxs)(w,{className:(0,s.Z)(f.root,i),sx:k,ownerState:S,children:[(0,u.jsx)(v,(0,r.Z)({type:"checkbox",icon:x,checkedIcon:x,ref:t,ownerState:S},$,{classes:(0,r.Z)({},f,{root:f.switchBase})})),(0,u.jsx)(b,{className:f.track,ownerState:S})]})}))},31143:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o.Z,getSwitchUtilityClass:()=>r.H,switchClasses:()=>r.Z});var o=a(52028),r=a(10868)},10868:(e,t,a)=>{a.d(t,{H:()=>i,Z:()=>s});var o=a(58109),r=a(95201);function i(e){return(0,r.ZP)("MuiSwitch",e)}const s=(0,o.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"])}}]);
//# sourceMappingURL=1143.315e50a6.chunk.js.map