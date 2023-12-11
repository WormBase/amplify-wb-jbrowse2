"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6039],{49595:(e,o,n)=>{n.d(o,{Z:()=>v});var t=n(31461),r=n(7896),i=n(41867),a=n(66184),s=n(92705),c=n(15543),l=n(9931),d=n(90293),u=n(24295),p=n(75693),m=n(80838);const f=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],h=(0,p.ZP)(c.Z,{name:"MuiFab",slot:"Root",shouldForwardProp:e=>(0,p.FO)(e)||"classes"===e,overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.variant],o["size".concat((0,l.Z)(n.size))],"inherit"===n.color&&o.colorInherit,o[(0,l.Z)(n.size)],o[n.color]]}})((e=>{let{theme:o,ownerState:n}=e;var t,i;return(0,r.Z)({},o.typography.button,{minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(o.vars||o).zIndex.fab,boxShadow:(o.vars||o).shadows[6],"&:active":{boxShadow:(o.vars||o).shadows[12]},color:o.vars?o.vars.palette.text.primary:null==(t=(i=o.palette).getContrastText)?void 0:t.call(i,o.palette.grey[300]),backgroundColor:(o.vars||o).palette.grey[300],"&:hover":{backgroundColor:(o.vars||o).palette.grey.A100,"@media (hover: none)":{backgroundColor:(o.vars||o).palette.grey[300]},textDecoration:"none"},["&.".concat(u.Z.focusVisible)]:{boxShadow:(o.vars||o).shadows[6]}},"small"===n.size&&{width:40,height:40},"medium"===n.size&&{width:48,height:48},"extended"===n.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===n.variant&&"small"===n.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===n.variant&&"medium"===n.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===n.color&&{color:"inherit"})}),(e=>{let{theme:o,ownerState:n}=e;return(0,r.Z)({},"inherit"!==n.color&&"default"!==n.color&&null!=(o.vars||o).palette[n.color]&&{color:(o.vars||o).palette[n.color].contrastText,backgroundColor:(o.vars||o).palette[n.color].main,"&:hover":{backgroundColor:(o.vars||o).palette[n.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[n.color].main}}})}),(e=>{let{theme:o}=e;return{["&.".concat(u.Z.disabled)]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}}})),v=i.forwardRef((function(e,o){const n=(0,d.Z)({props:e,name:"MuiFab"}),{children:i,className:c,color:p="default",component:v="button",disabled:b=!1,disableFocusRipple:g=!1,focusVisibleClassName:Z,size:w="large",variant:x="circular"}=n,y=(0,t.Z)(n,f),E=(0,r.Z)({},n,{color:p,component:v,disabled:b,disableFocusRipple:g,size:w,variant:x}),C=(e=>{const{color:o,variant:n,classes:t,size:i}=e,a={root:["root",n,"size".concat((0,l.Z)(i)),"inherit"===o?"colorInherit":o]},c=(0,s.Z)(a,u.N,t);return(0,r.Z)({},t,c)})(E);return(0,m.jsx)(h,(0,r.Z)({className:(0,a.Z)(C.root,c),component:v,disabled:b,focusRipple:!g,focusVisibleClassName:(0,a.Z)(C.focusVisible,Z),ownerState:E,ref:o},y,{classes:C,children:i}))}))},24295:(e,o,n)=>{n.d(o,{N:()=>i,Z:()=>a});var t=n(70101),r=n(88498);function i(e){return(0,r.Z)("MuiFab",e)}const a=(0,t.Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"])},56039:(e,o,n)=>{n.r(o),n.d(o,{default:()=>P,getSpeedDialUtilityClass:()=>C,speedDialClasses:()=>S});var t=n(31461),r=n(7896),i=n(41867),a=(n(47617),n(66184)),s=n(92705),c=n(75693),l=n(90293),d=n(17280),u=n(14434),p=n(19178),m=n(40234),f=n(80838);const h=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],v={entering:{transform:"none"},entered:{transform:"none"}},b=i.forwardRef((function(e,o){const n=(0,d.Z)(),a={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:s,appear:c=!0,children:l,easing:b,in:g,onEnter:Z,onEntered:w,onEntering:x,onExit:y,onExited:E,onExiting:C,style:S,timeout:D=a,TransitionComponent:R=u.ZP}=e,k=(0,t.Z)(e,h),z=i.useRef(null),F=(0,m.Z)(z,l.ref,o),T=e=>o=>{if(e){const n=z.current;void 0===o?e(n):e(n,o)}},M=T(x),P=T(((e,o)=>{(0,p.n)(e);const t=(0,p.C)({style:S,timeout:D,easing:b},{mode:"enter"});e.style.webkitTransition=n.transitions.create("transform",t),e.style.transition=n.transitions.create("transform",t),Z&&Z(e,o)})),L=T(w),N=T(C),I=T((e=>{const o=(0,p.C)({style:S,timeout:D,easing:b},{mode:"exit"});e.style.webkitTransition=n.transitions.create("transform",o),e.style.transition=n.transitions.create("transform",o),y&&y(e)})),j=T(E);return(0,f.jsx)(R,(0,r.Z)({appear:c,in:g,nodeRef:z,onEnter:P,onEntered:L,onEntering:M,onExit:I,onExited:j,onExiting:N,addEndListener:e=>{s&&s(z.current,e)},timeout:D},k,{children:(e,o)=>i.cloneElement(l,(0,r.Z)({style:(0,r.Z)({transform:"scale(0)",visibility:"exited"!==e||g?void 0:"hidden"},v[e],S,l.props.style),ref:F},o))}))}));var g=n(49595),Z=n(9931),w=n(43448),x=n(61291),y=n(70101),E=n(88498);function C(e){return(0,E.Z)("MuiSpeedDial",e)}const S=(0,y.Z)("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]),D=["ref"],R=["ariaLabel","FabProps","children","className","direction","hidden","icon","onBlur","onClose","onFocus","onKeyDown","onMouseEnter","onMouseLeave","onOpen","open","openIcon","TransitionComponent","transitionDuration","TransitionProps"],k=["ref"];function z(e){return"up"===e||"down"===e?"vertical":"right"===e||"left"===e?"horizontal":void 0}const F=(0,c.ZP)("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o["direction".concat((0,Z.Z)(n.direction))]]}})((e=>{let{theme:o,ownerState:n}=e;return(0,r.Z)({zIndex:(o.vars||o).zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none"},"up"===n.direction&&{flexDirection:"column-reverse",["& .".concat(S.actions)]:{flexDirection:"column-reverse",marginBottom:-32,paddingBottom:48}},"down"===n.direction&&{flexDirection:"column",["& .".concat(S.actions)]:{flexDirection:"column",marginTop:-32,paddingTop:48}},"left"===n.direction&&{flexDirection:"row-reverse",["& .".concat(S.actions)]:{flexDirection:"row-reverse",marginRight:-32,paddingRight:48}},"right"===n.direction&&{flexDirection:"row",["& .".concat(S.actions)]:{flexDirection:"row",marginLeft:-32,paddingLeft:48}})})),T=(0,c.ZP)(g.Z,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:(e,o)=>o.fab})((()=>({pointerEvents:"auto"}))),M=(0,c.ZP)("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.actions,!n.open&&o.actionsClosed]}})((e=>{let{ownerState:o}=e;return(0,r.Z)({display:"flex",pointerEvents:"auto"},!o.open&&{transition:"top 0s linear 0.2s",pointerEvents:"none"})})),P=i.forwardRef((function(e,o){const n=(0,l.Z)({props:e,name:"MuiSpeedDial"}),c=(0,d.Z)(),u={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},{ariaLabel:p,FabProps:{ref:h}={},children:v,className:g,direction:y="up",hidden:E=!1,icon:S,onBlur:P,onClose:L,onFocus:N,onKeyDown:I,onMouseEnter:j,onMouseLeave:V,onOpen:B,open:A,TransitionComponent:K=b,transitionDuration:O=u,TransitionProps:W}=n,_=(0,t.Z)(n.FabProps,D),H=(0,t.Z)(n,R),[U,q]=(0,x.Z)({controlled:A,default:!1,name:"SpeedDial",state:"open"}),G=(0,r.Z)({},n,{open:U,direction:y}),J=(e=>{const{classes:o,open:n,direction:t}=e,r={root:["root","direction".concat((0,Z.Z)(t))],fab:["fab"],actions:["actions",!n&&"actionsClosed"]};return(0,s.Z)(r,C,o)})(G),Q=i.useRef();i.useEffect((()=>()=>{clearTimeout(Q.current)}),[]);const X=i.useRef(0),Y=i.useRef(),$=i.useRef([]);$.current=[$.current[0]];const ee=i.useCallback((e=>{$.current[0]=e}),[]),oe=(0,m.Z)(h,ee),ne=(e,o)=>n=>{$.current[e+1]=n,o&&o(n)};i.useEffect((()=>{U||(X.current=0,Y.current=void 0)}),[U]);const te=e=>{"mouseleave"===e.type&&V&&V(e),"blur"===e.type&&P&&P(e),clearTimeout(Q.current),"blur"===e.type?Q.current=setTimeout((()=>{q(!1),L&&L(e,"blur")})):(q(!1),L&&L(e,"mouseLeave"))},re=e=>{"mouseenter"===e.type&&j&&j(e),"focus"===e.type&&N&&N(e),clearTimeout(Q.current),U||(Q.current=setTimeout((()=>{if(q(!0),B){B(e,{focus:"focus",mouseenter:"mouseEnter"}[e.type])}})))},ie=p.replace(/^[^a-z]+|[^\w:.-]+/gi,""),ae=i.Children.toArray(v).filter((e=>i.isValidElement(e))),se=ae.map(((e,o)=>{const n=e.props,{FabProps:{ref:a}={},tooltipPlacement:s}=n,c=(0,t.Z)(n.FabProps,k),l=s||("vertical"===z(y)?"left":"top");return i.cloneElement(e,{FabProps:(0,r.Z)({},c,{ref:ne(o,a)}),delay:30*(U?o:ae.length-o),open:U,tooltipPlacement:l,id:"".concat(ie,"-action-").concat(o)})}));return(0,f.jsxs)(F,(0,r.Z)({className:(0,a.Z)(J.root,g),ref:o,role:"presentation",onKeyDown:e=>{I&&I(e);const o=e.key.replace("Arrow","").toLowerCase(),{current:n=o}=Y;if("Escape"===e.key)return q(!1),$.current[0].focus(),void(L&&L(e,"escapeKeyDown"));if(z(o)===z(n)&&void 0!==z(o)){e.preventDefault();const a=o===n?1:-1,s=(t=X.current+a,r=0,i=$.current.length-1,t<r?r:t>i?i:t);$.current[s].focus(),X.current=s,Y.current=n}var t,r,i},onBlur:te,onFocus:re,onMouseEnter:re,onMouseLeave:te,ownerState:G},H,{children:[(0,f.jsx)(K,(0,r.Z)({in:!E,timeout:O,unmountOnExit:!0},W,{children:(0,f.jsx)(T,(0,r.Z)({color:"primary","aria-label":p,"aria-haspopup":"true","aria-expanded":U,"aria-controls":"".concat(ie,"-actions")},_,{onClick:e=>{_.onClick&&_.onClick(e),clearTimeout(Q.current),U?(q(!1),L&&L(e,"toggle")):(q(!0),B&&B(e,"toggle"))},className:(0,a.Z)(J.fab,_.className),ref:oe,ownerState:G,children:i.isValidElement(S)&&(0,w.Z)(S,["SpeedDialIcon"])?i.cloneElement(S,{open:U}):S}))})),(0,f.jsx)(M,{id:"".concat(ie,"-actions"),role:"menu","aria-orientation":z(y),className:(0,a.Z)(J.actions,!U&&J.actionsClosed),ownerState:G,children:se})]}))}))}}]);
//# sourceMappingURL=6039.0cd41e5a.chunk.js.map