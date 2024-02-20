"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[6440],{98402:(e,o,n)=>{n.d(o,{Z:()=>b});var t=n(55559),r=n(30984),i=n(66204),a=n(56317),s=n(58029),l=n(42870),c=n(40118),d=n(57369),u=n(93112),p=n(61125),m=n(43188);const f=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],h=(0,p.ZP)(l.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>(0,p.FO)(e)||"classes"===e,overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.variant],o[`size${(0,c.Z)(n.size)}`],"inherit"===n.color&&o.colorInherit,o[(0,c.Z)(n.size)],o[n.color]]}})((({theme:e,ownerState:o})=>{var n,t;return(0,r.Z)({},e.typography.button,{minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(e.vars||e).zIndex.fab,boxShadow:(e.vars||e).shadows[6],"&:active":{boxShadow:(e.vars||e).shadows[12]},color:e.vars?e.vars.palette.text.primary:null==(n=(t=e.palette).getContrastText)?void 0:n.call(t,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],"&:hover":{backgroundColor:(e.vars||e).palette.grey.A100,"@media (hover: none)":{backgroundColor:(e.vars||e).palette.grey[300]},textDecoration:"none"},[`&.${u.Z.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]}},"small"===o.size&&{width:40,height:40},"medium"===o.size&&{width:48,height:48},"extended"===o.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===o.variant&&"small"===o.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===o.variant&&"medium"===o.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===o.color&&{color:"inherit"})}),(({theme:e,ownerState:o})=>(0,r.Z)({},"inherit"!==o.color&&"default"!==o.color&&null!=(e.vars||e).palette[o.color]&&{color:(e.vars||e).palette[o.color].contrastText,backgroundColor:(e.vars||e).palette[o.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[o.color].main}}})),(({theme:e})=>({[`&.${u.Z.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}}))),b=i.forwardRef((function(e,o){const n=(0,d.Z)({props:e,name:"MuiFab"}),{children:i,className:l,color:p="default",component:b="button",disabled:v=!1,disableFocusRipple:g=!1,focusVisibleClassName:Z,size:w="large",variant:x="circular"}=n,y=(0,t.Z)(n,f),E=(0,r.Z)({},n,{color:p,component:b,disabled:v,disableFocusRipple:g,size:w,variant:x}),C=(e=>{const{color:o,variant:n,classes:t,size:i}=e,a={root:["root",n,`size${(0,c.Z)(i)}`,"inherit"===o?"colorInherit":o]},l=(0,s.Z)(a,u.N,t);return(0,r.Z)({},t,l)})(E);return(0,m.jsx)(h,(0,r.Z)({className:(0,a.Z)(C.root,l),component:b,disabled:v,focusRipple:!g,focusVisibleClassName:(0,a.Z)(C.focusVisible,Z),ownerState:E,ref:o},y,{classes:C,children:i}))}))},93112:(e,o,n)=>{n.d(o,{N:()=>i,Z:()=>a});var t=n(58109),r=n(95201);function i(e){return(0,r.ZP)("MuiFab",e)}const a=(0,t.Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"])},96440:(e,o,n)=>{n.r(o),n.d(o,{default:()=>L,getSpeedDialUtilityClass:()=>S,speedDialClasses:()=>D});var t=n(55559),r=n(30984),i=n(66204),a=(n(5356),n(56317)),s=n(58029),l=n(38653),c=n(61125),d=n(57369),u=n(92368),p=n(44628),m=n(79143),f=n(81597),h=n(43188);const b=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],v={entering:{transform:"none"},entered:{transform:"none"}},g=i.forwardRef((function(e,o){const n=(0,u.Z)(),a={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:s,appear:l=!0,children:c,easing:d,in:g,onEnter:Z,onEntered:w,onEntering:x,onExit:y,onExited:E,onExiting:C,style:S,timeout:D=a,TransitionComponent:R=p.ZP}=e,k=(0,t.Z)(e,b),z=i.useRef(null),T=(0,f.Z)(z,c.ref,o),F=e=>o=>{if(e){const n=z.current;void 0===o?e(n):e(n,o)}},P=F(x),M=F(((e,o)=>{(0,m.n)(e);const t=(0,m.C)({style:S,timeout:D,easing:d},{mode:"enter"});e.style.webkitTransition=n.transitions.create("transform",t),e.style.transition=n.transitions.create("transform",t),Z&&Z(e,o)})),L=F(w),N=F(C),$=F((e=>{const o=(0,m.C)({style:S,timeout:D,easing:d},{mode:"exit"});e.style.webkitTransition=n.transitions.create("transform",o),e.style.transition=n.transitions.create("transform",o),y&&y(e)})),I=F(E);return(0,h.jsx)(R,(0,r.Z)({appear:l,in:g,nodeRef:z,onEnter:M,onEntered:L,onEntering:P,onExit:$,onExited:I,onExiting:N,addEndListener:e=>{s&&s(z.current,e)},timeout:D},k,{children:(e,o)=>i.cloneElement(c,(0,r.Z)({style:(0,r.Z)({transform:"scale(0)",visibility:"exited"!==e||g?void 0:"hidden"},v[e],S,c.props.style),ref:T},o))}))}));var Z=n(98402),w=n(40118),x=n(6842),y=n(24842),E=n(58109),C=n(95201);function S(e){return(0,C.ZP)("MuiSpeedDial",e)}const D=(0,E.Z)("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]),R=["ref"],k=["ariaLabel","FabProps","children","className","direction","hidden","icon","onBlur","onClose","onFocus","onKeyDown","onMouseEnter","onMouseLeave","onOpen","open","openIcon","TransitionComponent","transitionDuration","TransitionProps"],z=["ref"];function T(e){return"up"===e||"down"===e?"vertical":"right"===e||"left"===e?"horizontal":void 0}const F=(0,c.ZP)("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[`direction${(0,w.Z)(n.direction)}`]]}})((({theme:e,ownerState:o})=>(0,r.Z)({zIndex:(e.vars||e).zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none"},"up"===o.direction&&{flexDirection:"column-reverse",[`& .${D.actions}`]:{flexDirection:"column-reverse",marginBottom:-32,paddingBottom:48}},"down"===o.direction&&{flexDirection:"column",[`& .${D.actions}`]:{flexDirection:"column",marginTop:-32,paddingTop:48}},"left"===o.direction&&{flexDirection:"row-reverse",[`& .${D.actions}`]:{flexDirection:"row-reverse",marginRight:-32,paddingRight:48}},"right"===o.direction&&{flexDirection:"row",[`& .${D.actions}`]:{flexDirection:"row",marginLeft:-32,paddingLeft:48}}))),P=(0,c.ZP)(Z.Z,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:(e,o)=>o.fab})((()=>({pointerEvents:"auto"}))),M=(0,c.ZP)("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.actions,!n.open&&o.actionsClosed]}})((({ownerState:e})=>(0,r.Z)({display:"flex",pointerEvents:"auto"},!e.open&&{transition:"top 0s linear 0.2s",pointerEvents:"none"}))),L=i.forwardRef((function(e,o){const n=(0,d.Z)({props:e,name:"MuiSpeedDial"}),c=(0,u.Z)(),p={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},{ariaLabel:m,FabProps:{ref:b}={},children:v,className:Z,direction:E="up",hidden:C=!1,icon:D,onBlur:L,onClose:N,onFocus:$,onKeyDown:I,onMouseEnter:j,onMouseLeave:V,onOpen:B,open:A,TransitionComponent:K=g,transitionDuration:O=p,TransitionProps:W}=n,_=(0,t.Z)(n.FabProps,R),H=(0,t.Z)(n,k),[U,q]=(0,y.Z)({controlled:A,default:!1,name:"SpeedDial",state:"open"}),G=(0,r.Z)({},n,{open:U,direction:E}),J=(e=>{const{classes:o,open:n,direction:t}=e,r={root:["root",`direction${(0,w.Z)(t)}`],fab:["fab"],actions:["actions",!n&&"actionsClosed"]};return(0,s.Z)(r,S,o)})(G),Q=i.useRef();i.useEffect((()=>()=>{clearTimeout(Q.current)}),[]);const X=i.useRef(0),Y=i.useRef(),ee=i.useRef([]);ee.current=[ee.current[0]];const oe=i.useCallback((e=>{ee.current[0]=e}),[]),ne=(0,f.Z)(b,oe),te=(e,o)=>n=>{ee.current[e+1]=n,o&&o(n)};i.useEffect((()=>{U||(X.current=0,Y.current=void 0)}),[U]);const re=e=>{"mouseleave"===e.type&&V&&V(e),"blur"===e.type&&L&&L(e),clearTimeout(Q.current),"blur"===e.type?Q.current=setTimeout((()=>{q(!1),N&&N(e,"blur")})):(q(!1),N&&N(e,"mouseLeave"))},ie=e=>{"mouseenter"===e.type&&j&&j(e),"focus"===e.type&&$&&$(e),clearTimeout(Q.current),U||(Q.current=setTimeout((()=>{q(!0),B&&B(e,{focus:"focus",mouseenter:"mouseEnter"}[e.type])})))},ae=m.replace(/^[^a-z]+|[^\w:.-]+/gi,""),se=i.Children.toArray(v).filter((e=>i.isValidElement(e))),le=se.map(((e,o)=>{const n=e.props,{FabProps:{ref:a}={},tooltipPlacement:s}=n,l=(0,t.Z)(n.FabProps,z),c=s||("vertical"===T(E)?"left":"top");return i.cloneElement(e,{FabProps:(0,r.Z)({},l,{ref:te(o,a)}),delay:30*(U?o:se.length-o),open:U,tooltipPlacement:c,id:`${ae}-action-${o}`})}));return(0,h.jsxs)(F,(0,r.Z)({className:(0,a.Z)(J.root,Z),ref:o,role:"presentation",onKeyDown:e=>{I&&I(e);const o=e.key.replace("Arrow","").toLowerCase(),{current:n=o}=Y;if("Escape"===e.key)return q(!1),ee.current[0].focus(),void(N&&N(e,"escapeKeyDown"));if(T(o)===T(n)&&void 0!==T(o)){e.preventDefault();const t=o===n?1:-1,r=(0,l.Z)(X.current+t,0,ee.current.length-1);ee.current[r].focus(),X.current=r,Y.current=n}},onBlur:re,onFocus:ie,onMouseEnter:ie,onMouseLeave:re,ownerState:G},H,{children:[(0,h.jsx)(K,(0,r.Z)({in:!C,timeout:O,unmountOnExit:!0},W,{children:(0,h.jsx)(P,(0,r.Z)({color:"primary","aria-label":m,"aria-haspopup":"true","aria-expanded":U,"aria-controls":`${ae}-actions`},_,{onClick:e=>{_.onClick&&_.onClick(e),clearTimeout(Q.current),U?(q(!1),N&&N(e,"toggle")):(q(!0),B&&B(e,"toggle"))},className:(0,a.Z)(J.fab,_.className),ref:ne,ownerState:G,children:i.isValidElement(D)&&(0,x.Z)(D,["SpeedDialIcon"])?i.cloneElement(D,{open:U}):D}))})),(0,h.jsx)(M,{id:`${ae}-actions`,role:"menu","aria-orientation":T(E),className:(0,a.Z)(J.actions,!U&&J.actionsClosed),ownerState:G,children:le})]}))}))}}]);
//# sourceMappingURL=6440.9d6ad2ce.chunk.js.map