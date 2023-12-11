"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6575],{96575:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j,drawerClasses:()=>D,getDrawerUtilityClass:()=>P});var n=r(31461),o=r(7896),a=r(41867),i=r(66184),s=r(92705),c=r(36817),p=r(14434),d=r(98490),l=r(40234),u=r(17280),h=r(19178),f=r(86153),m=r(80838);const g=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function v(e,t,r){var n;const o=function(e,t,r){const n=t.getBoundingClientRect(),o=r&&r.getBoundingClientRect(),a=(0,f.Z)(t);let i;if(t.fakeTransform)i=t.fakeTransform;else{const e=a.getComputedStyle(t);i=e.getPropertyValue("-webkit-transform")||e.getPropertyValue("transform")}let s=0,c=0;if(i&&"none"!==i&&"string"===typeof i){const e=i.split("(")[1].split(")")[0].split(",");s=parseInt(e[4],10),c=parseInt(e[5],10)}return"left"===e?"translateX(".concat(o?o.right+s-n.left:a.innerWidth+s-n.left,"px)"):"right"===e?"translateX(-".concat(o?n.right-o.left-s:n.left+n.width-s,"px)"):"up"===e?"translateY(".concat(o?o.bottom+c-n.top:a.innerHeight+c-n.top,"px)"):"translateY(-".concat(o?n.top-o.top+n.height-c:n.top+n.height-c,"px)")}(e,t,"function"===typeof(n=r)?n():n);o&&(t.style.webkitTransform=o,t.style.transform=o)}const w=a.forwardRef((function(e,t){const r=(0,u.Z)(),i={enter:r.transitions.easing.easeOut,exit:r.transitions.easing.sharp},s={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:c,appear:w=!0,children:x,container:Z,direction:k="down",easing:y=i,in:E,onEnter:b,onEntered:P,onEntering:D,onExit:C,onExited:R,onExiting:S,style:T,timeout:B=s,TransitionComponent:A=p.ZP}=e,M=(0,n.Z)(e,g),j=a.useRef(null),L=(0,l.Z)(x.ref,j,t),N=e=>t=>{e&&(void 0===t?e(j.current):e(j.current,t))},z=N(((e,t)=>{v(k,e,Z),(0,h.n)(e),b&&b(e,t)})),I=N(((e,t)=>{const n=(0,h.C)({timeout:B,style:T,easing:y},{mode:"enter"});e.style.webkitTransition=r.transitions.create("-webkit-transform",(0,o.Z)({},n)),e.style.transition=r.transitions.create("transform",(0,o.Z)({},n)),e.style.webkitTransform="none",e.style.transform="none",D&&D(e,t)})),O=N(P),_=N(S),H=N((e=>{const t=(0,h.C)({timeout:B,style:T,easing:y},{mode:"exit"});e.style.webkitTransition=r.transitions.create("-webkit-transform",t),e.style.transition=r.transitions.create("transform",t),v(k,e,Z),C&&C(e)})),V=N((e=>{e.style.webkitTransition="",e.style.transition="",R&&R(e)})),Y=a.useCallback((()=>{j.current&&v(k,j.current,Z)}),[k,Z]);return a.useEffect((()=>{if(E||"down"===k||"right"===k)return;const e=(0,d.Z)((()=>{j.current&&v(k,j.current,Z)})),t=(0,f.Z)(j.current);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}}),[k,E,Z]),a.useEffect((()=>{E||Y()}),[E,Y]),(0,m.jsx)(A,(0,o.Z)({nodeRef:j,onEnter:z,onEntered:O,onEntering:I,onExit:H,onExited:V,onExiting:_,addEndListener:e=>{c&&c(j.current,e)},appear:w,in:E,timeout:B},M,{children:(e,t)=>a.cloneElement(x,(0,o.Z)({ref:L,style:(0,o.Z)({visibility:"exited"!==e||E?void 0:"hidden"},T,x.props.style)},t))}))}));var x=r(7229),Z=r(9931),k=r(90293),y=r(75693),E=r(70101),b=r(88498);function P(e){return(0,b.Z)("MuiDrawer",e)}const D=(0,E.Z)("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]),C=["BackdropProps"],R=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],S=(e,t)=>{const{ownerState:r}=e;return[t.root,("permanent"===r.variant||"persistent"===r.variant)&&t.docked,t.modal]},T=(0,y.ZP)(c.Z,{name:"MuiDrawer",slot:"Root",overridesResolver:S})((e=>{let{theme:t}=e;return{zIndex:(t.vars||t).zIndex.drawer}})),B=(0,y.ZP)("div",{shouldForwardProp:y.FO,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:S})({flex:"0 0 auto"}),A=(0,y.ZP)(x.Z,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.paper,t["paperAnchor".concat((0,Z.Z)(r.anchor))],"temporary"!==r.variant&&t["paperAnchorDocked".concat((0,Z.Z)(r.anchor))]]}})((e=>{let{theme:t,ownerState:r}=e;return(0,o.Z)({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},"left"===r.anchor&&{left:0},"top"===r.anchor&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},"right"===r.anchor&&{right:0},"bottom"===r.anchor&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},"left"===r.anchor&&"temporary"!==r.variant&&{borderRight:"1px solid ".concat((t.vars||t).palette.divider)},"top"===r.anchor&&"temporary"!==r.variant&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider)},"right"===r.anchor&&"temporary"!==r.variant&&{borderLeft:"1px solid ".concat((t.vars||t).palette.divider)},"bottom"===r.anchor&&"temporary"!==r.variant&&{borderTop:"1px solid ".concat((t.vars||t).palette.divider)})})),M={left:"right",right:"left",top:"down",bottom:"up"};const j=a.forwardRef((function(e,t){const r=(0,k.Z)({props:e,name:"MuiDrawer"}),c=(0,u.Z)(),p={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},{anchor:d="left",BackdropProps:l,children:h,className:f,elevation:g=16,hideBackdrop:v=!1,ModalProps:{BackdropProps:x}={},onClose:y,open:E=!1,PaperProps:b={},SlideProps:D,TransitionComponent:S=w,transitionDuration:j=p,variant:L="temporary"}=r,N=(0,n.Z)(r.ModalProps,C),z=(0,n.Z)(r,R),I=a.useRef(!1);a.useEffect((()=>{I.current=!0}),[]);const O=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?M[t]:t}(c,d),_=d,H=(0,o.Z)({},r,{anchor:_,elevation:g,open:E,variant:L},z),V=(e=>{const{classes:t,anchor:r,variant:n}=e,o={root:["root"],docked:[("permanent"===n||"persistent"===n)&&"docked"],modal:["modal"],paper:["paper","paperAnchor".concat((0,Z.Z)(r)),"temporary"!==n&&"paperAnchorDocked".concat((0,Z.Z)(r))]};return(0,s.Z)(o,P,t)})(H),Y=(0,m.jsx)(A,(0,o.Z)({elevation:"temporary"===L?g:0,square:!0},b,{className:(0,i.Z)(V.paper,b.className),ownerState:H,children:h}));if("permanent"===L)return(0,m.jsx)(B,(0,o.Z)({className:(0,i.Z)(V.root,V.docked,f),ownerState:H,ref:t},z,{children:Y}));const F=(0,m.jsx)(S,(0,o.Z)({in:E,direction:M[O],timeout:j,appear:I.current},D,{children:Y}));return"persistent"===L?(0,m.jsx)(B,(0,o.Z)({className:(0,i.Z)(V.root,V.docked,f),ownerState:H,ref:t},z,{children:F})):(0,m.jsx)(T,(0,o.Z)({BackdropProps:(0,o.Z)({},l,x,{transitionDuration:j}),className:(0,i.Z)(V.root,V.modal,f),open:E,ownerState:H,onClose:y,hideBackdrop:v,ref:t},z,N,{children:F}))}))}}]);
//# sourceMappingURL=6575.a7d1adb1.chunk.js.map