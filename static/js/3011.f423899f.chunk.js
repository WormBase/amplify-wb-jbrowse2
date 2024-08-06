"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[3011],{63011:(e,t,o)=>{o.d(t,{A:()=>f});var n=o(6614),r=o(83673),i=o(7552),s=(o(19487),o(93878)),a=o(70799),d=o(51148),l=o(4785),u=o(98459),p=o(943),c=o(51132),h=o(77259),g=o(43045),A=o(46263),m=o(69500);const b=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],y=(0,d.Ay)(p.A,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${A.A.region}`]:t.region},t.root,!o.square&&t.rounded,!o.disableGutters&&t.gutters]}})((({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${A.A.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${A.A.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}}),(({theme:e})=>({variants:[{props:e=>!e.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:e=>!e.disableGutters,style:{[`&.${A.A.expanded}`]:{margin:"16px 0"}}}]}))),f=i.forwardRef((function(e,t){const o=(0,l.b)({props:e,name:"MuiAccordion"}),{children:d,className:p,defaultExpanded:f=!1,disabled:x=!1,disableGutters:w=!1,expanded:v,onChange:R,square:E=!1,slots:C={},slotProps:S={},TransitionComponent:T,TransitionProps:$}=o,z=(0,r.A)(o,b),[M,j]=(0,h.A)({controlled:v,default:f,name:"Accordion",state:"expanded"}),k=i.useCallback((e=>{j(!M),R&&R(e,!M)}),[M,R,j]),[N,...q]=i.Children.toArray(d),G=i.useMemo((()=>({expanded:M,disabled:x,disableGutters:w,toggle:k})),[M,x,w,k]),P=(0,n.A)({},o,{square:E,disabled:x,disableGutters:w,expanded:M}),B=(e=>{const{classes:t,square:o,expanded:n,disabled:r,disableGutters:i}=e,s={root:["root",!o&&"rounded",n&&"expanded",r&&"disabled",!i&&"gutters"],region:["region"]};return(0,a.A)(s,A.d,t)})(P),D=(0,n.A)({transition:T},C),I=(0,n.A)({transition:$},S),[L,H]=(0,g.A)("transition",{elementType:u.A,externalForwardedProps:{slots:D,slotProps:I},ownerState:P});return(0,m.jsxs)(y,(0,n.A)({className:(0,s.A)(B.root,p),ref:t,ownerState:P,square:E},z,{children:[(0,m.jsx)(c.A.Provider,{value:G,children:N}),(0,m.jsx)(L,(0,n.A)({in:M,timeout:"auto"},H,{children:(0,m.jsx)("div",{"aria-labelledby":N.props.id,id:N.props["aria-controls"],role:"region",className:B.region,children:q})}))]}))}))},51132:(e,t,o)=>{o.d(t,{A:()=>n});const n=o(7552).createContext({})},46263:(e,t,o)=>{o.d(t,{A:()=>s,d:()=>i});var n=o(33761),r=o(85693);function i(e){return(0,r.Ay)("MuiAccordion",e)}const s=(0,n.A)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"])},98459:(e,t,o)=>{o.d(t,{A:()=>R});var n=o(83673),r=o(6614),i=o(7552),s=o(93878),a=o(16157),d=o(85659),l=o(70799),u=o(51148),p=o(4785),c=o(94479),h=o(46302),g=o(48231),A=o(51584),m=o(72367),b=o(69500);const y=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],f=(0,u.Ay)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.orientation],"entered"===o.state&&t.entered,"exited"===o.state&&!o.in&&"0px"===o.collapsedSize&&t.hidden]}})((({theme:e,ownerState:t})=>(0,r.A)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===t.state&&(0,r.A)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"}))),x=(0,u.Ay)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})((({ownerState:e})=>(0,r.A)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),w=(0,u.Ay)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})((({ownerState:e})=>(0,r.A)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),v=i.forwardRef((function(e,t){const o=(0,p.b)({props:e,name:"MuiCollapse"}),{addEndListener:u,children:v,className:R,collapsedSize:E="0px",component:C,easing:S,in:T,onEnter:$,onEntered:z,onEntering:M,onExit:j,onExited:k,onExiting:N,orientation:q="vertical",style:G,timeout:P=c.p0.standard,TransitionComponent:B=a.Ay}=o,D=(0,n.A)(o,y),I=(0,r.A)({},o,{orientation:q,collapsedSize:E}),L=(e=>{const{orientation:t,classes:o}=e,n={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return(0,l.A)(n,m.E,o)})(I),H=(0,g.A)(),W=(0,d.A)(),_=i.useRef(null),F=i.useRef(),J="number"==typeof E?`${E}px`:E,K="horizontal"===q,O=K?"width":"height",Q=i.useRef(null),U=(0,A.A)(t,Q),V=e=>t=>{if(e){const o=Q.current;void 0===t?e(o):e(o,t)}},X=()=>_.current?_.current[K?"clientWidth":"clientHeight"]:0,Y=V(((e,t)=>{_.current&&K&&(_.current.style.position="absolute"),e.style[O]=J,$&&$(e,t)})),Z=V(((e,t)=>{const o=X();_.current&&K&&(_.current.style.position="");const{duration:n,easing:r}=(0,h.c)({style:G,timeout:P,easing:S},{mode:"enter"});if("auto"===P){const t=H.transitions.getAutoHeightDuration(o);e.style.transitionDuration=`${t}ms`,F.current=t}else e.style.transitionDuration="string"==typeof n?n:`${n}ms`;e.style[O]=`${o}px`,e.style.transitionTimingFunction=r,M&&M(e,t)})),ee=V(((e,t)=>{e.style[O]="auto",z&&z(e,t)})),te=V((e=>{e.style[O]=`${X()}px`,j&&j(e)})),oe=V(k),ne=V((e=>{const t=X(),{duration:o,easing:n}=(0,h.c)({style:G,timeout:P,easing:S},{mode:"exit"});if("auto"===P){const o=H.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${o}ms`,F.current=o}else e.style.transitionDuration="string"==typeof o?o:`${o}ms`;e.style[O]=J,e.style.transitionTimingFunction=n,N&&N(e)}));return(0,b.jsx)(B,(0,r.A)({in:T,onEnter:Y,onEntered:ee,onEntering:Z,onExit:te,onExited:oe,onExiting:ne,addEndListener:e=>{"auto"===P&&W.start(F.current||0,e),u&&u(Q.current,e)},nodeRef:Q,timeout:"auto"===P?null:P},D,{children:(e,t)=>(0,b.jsx)(f,(0,r.A)({as:C,className:(0,s.A)(L.root,R,{entered:L.entered,exited:!T&&"0px"===J&&L.hidden}[e]),style:(0,r.A)({[K?"minWidth":"minHeight"]:J},G),ref:U},t,{ownerState:(0,r.A)({},I,{state:e}),children:(0,b.jsx)(x,{ownerState:(0,r.A)({},I,{state:e}),className:L.wrapper,ref:_,children:(0,b.jsx)(w,{ownerState:(0,r.A)({},I,{state:e}),className:L.wrapperInner,children:v})})}))}))}));v.muiSupportAuto=!0;const R=v},72367:(e,t,o)=>{o.d(t,{A:()=>s,E:()=>i});var n=o(33761),r=o(85693);function i(e){return(0,r.Ay)("MuiCollapse",e)}const s=(0,n.A)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"])}}]);
//# sourceMappingURL=3011.f423899f.chunk.js.map