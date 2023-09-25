"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[75],{10075:function(e,t,r){r.r(t),r.d(t,{default:function(){return j},drawerClasses:function(){return D},getDrawerUtilityClass:function(){return P}});var n=r(31461),o=r(7896),i=r(30969),a=r(87023),s=r(26540),c=r(30558),d=r(64022),p=r(12357),l=r(87352),u=r(94702),f=r(522),h=r(87406),v=r(37574),m=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function g(e,t,r){var n,o=function(e,t,r){var n,o=t.getBoundingClientRect(),i=r&&r.getBoundingClientRect(),a=(0,h.Z)(t);if(t.fakeTransform)n=t.fakeTransform;else{var s=a.getComputedStyle(t);n=s.getPropertyValue("-webkit-transform")||s.getPropertyValue("transform")}var c=0,d=0;if(n&&"none"!==n&&"string"===typeof n){var p=n.split("(")[1].split(")")[0].split(",");c=parseInt(p[4],10),d=parseInt(p[5],10)}return"left"===e?"translateX(".concat(i?i.right+c-o.left:a.innerWidth+c-o.left,"px)"):"right"===e?"translateX(-".concat(i?o.right-i.left-c:o.left+o.width-c,"px)"):"up"===e?"translateY(".concat(i?i.bottom+d-o.top:a.innerHeight+d-o.top,"px)"):"translateY(-".concat(i?o.top-i.top+o.height-d:o.top+o.height-d,"px)")}(e,t,"function"===typeof(n=r)?n():n);o&&(t.style.webkitTransform=o,t.style.transform=o)}var w=i.forwardRef((function(e,t){var r=(0,u.Z)(),a={enter:r.transitions.easing.easeOut,exit:r.transitions.easing.sharp},s={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},c=e.addEndListener,w=e.appear,x=void 0===w||w,Z=e.children,k=e.container,y=e.direction,E=void 0===y?"down":y,b=e.easing,P=void 0===b?a:b,D=e.in,C=e.onEnter,R=e.onEntered,S=e.onEntering,T=e.onExit,B=e.onExited,A=e.onExiting,M=e.style,j=e.timeout,L=void 0===j?s:j,N=e.TransitionComponent,z=void 0===N?d.ZP:N,I=(0,n.Z)(e,m),O=i.useRef(null),_=(0,l.Z)(Z.ref,O,t),H=function(e){return function(t){e&&(void 0===t?e(O.current):e(O.current,t))}},V=H((function(e,t){g(E,e,k),(0,f.n)(e),C&&C(e,t)})),Y=H((function(e,t){var n=(0,f.C)({timeout:L,style:M,easing:P},{mode:"enter"});e.style.webkitTransition=r.transitions.create("-webkit-transform",(0,o.Z)({},n)),e.style.transition=r.transitions.create("transform",(0,o.Z)({},n)),e.style.webkitTransform="none",e.style.transform="none",S&&S(e,t)})),F=H(R),W=H(A),X=H((function(e){var t=(0,f.C)({timeout:L,style:M,easing:P},{mode:"exit"});e.style.webkitTransition=r.transitions.create("-webkit-transform",t),e.style.transition=r.transitions.create("transform",t),g(E,e,k),T&&T(e)})),q=H((function(e){e.style.webkitTransition="",e.style.transition="",B&&B(e)})),U=i.useCallback((function(){O.current&&g(E,O.current,k)}),[E,k]);return i.useEffect((function(){if(!D&&"down"!==E&&"right"!==E){var e=(0,p.Z)((function(){O.current&&g(E,O.current,k)})),t=(0,h.Z)(O.current);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}}),[E,D,k]),i.useEffect((function(){D||U()}),[D,U]),(0,v.jsx)(z,(0,o.Z)({nodeRef:O,onEnter:V,onEntered:F,onEntering:Y,onExit:X,onExited:q,onExiting:W,addEndListener:function(e){c&&c(O.current,e)},appear:x,in:D,timeout:L},I,{children:function(e,t){return i.cloneElement(Z,(0,o.Z)({ref:_,style:(0,o.Z)({visibility:"exited"!==e||D?void 0:"hidden"},M,Z.props.style)},t))}}))})),x=r(46672),Z=r(24099),k=r(17363),y=r(45971),E=r(62746),b=r(2975);function P(e){return(0,b.Z)("MuiDrawer",e)}var D=(0,E.Z)("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]),C=["BackdropProps"],R=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],S=function(e,t){var r=e.ownerState;return[t.root,("permanent"===r.variant||"persistent"===r.variant)&&t.docked,t.modal]},T=(0,y.ZP)(c.Z,{name:"MuiDrawer",slot:"Root",overridesResolver:S})((function(e){var t=e.theme;return{zIndex:(t.vars||t).zIndex.drawer}})),B=(0,y.ZP)("div",{shouldForwardProp:y.FO,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:S})({flex:"0 0 auto"}),A=(0,y.ZP)(x.Z,{name:"MuiDrawer",slot:"Paper",overridesResolver:function(e,t){var r=e.ownerState;return[t.paper,t["paperAnchor".concat((0,Z.Z)(r.anchor))],"temporary"!==r.variant&&t["paperAnchorDocked".concat((0,Z.Z)(r.anchor))]]}})((function(e){var t=e.theme,r=e.ownerState;return(0,o.Z)({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},"left"===r.anchor&&{left:0},"top"===r.anchor&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},"right"===r.anchor&&{right:0},"bottom"===r.anchor&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},"left"===r.anchor&&"temporary"!==r.variant&&{borderRight:"1px solid ".concat((t.vars||t).palette.divider)},"top"===r.anchor&&"temporary"!==r.variant&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider)},"right"===r.anchor&&"temporary"!==r.variant&&{borderLeft:"1px solid ".concat((t.vars||t).palette.divider)},"bottom"===r.anchor&&"temporary"!==r.variant&&{borderTop:"1px solid ".concat((t.vars||t).palette.divider)})})),M={left:"right",right:"left",top:"down",bottom:"up"};var j=i.forwardRef((function(e,t){var r=(0,k.Z)({props:e,name:"MuiDrawer"}),c=(0,u.Z)(),d={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},p=r.anchor,l=void 0===p?"left":p,f=r.BackdropProps,h=r.children,m=r.className,g=r.elevation,x=void 0===g?16:g,y=r.hideBackdrop,E=void 0!==y&&y,b=r.ModalProps,D=(void 0===b?{}:b).BackdropProps,S=r.onClose,j=r.open,L=void 0!==j&&j,N=r.PaperProps,z=void 0===N?{}:N,I=r.SlideProps,O=r.TransitionComponent,_=void 0===O?w:O,H=r.transitionDuration,V=void 0===H?d:H,Y=r.variant,F=void 0===Y?"temporary":Y,W=(0,n.Z)(r.ModalProps,C),X=(0,n.Z)(r,R),q=i.useRef(!1);i.useEffect((function(){q.current=!0}),[]);var U=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?M[t]:t}(c,l),G=l,J=(0,o.Z)({},r,{anchor:G,elevation:x,open:L,variant:F},X),K=function(e){var t=e.classes,r=e.anchor,n=e.variant,o={root:["root"],docked:[("permanent"===n||"persistent"===n)&&"docked"],modal:["modal"],paper:["paper","paperAnchor".concat((0,Z.Z)(r)),"temporary"!==n&&"paperAnchorDocked".concat((0,Z.Z)(r))]};return(0,s.Z)(o,P,t)}(J),Q=(0,v.jsx)(A,(0,o.Z)({elevation:"temporary"===F?x:0,square:!0},z,{className:(0,a.Z)(K.paper,z.className),ownerState:J,children:h}));if("permanent"===F)return(0,v.jsx)(B,(0,o.Z)({className:(0,a.Z)(K.root,K.docked,m),ownerState:J,ref:t},X,{children:Q}));var $=(0,v.jsx)(_,(0,o.Z)({in:L,direction:M[U],timeout:V,appear:q.current},I,{children:Q}));return"persistent"===F?(0,v.jsx)(B,(0,o.Z)({className:(0,a.Z)(K.root,K.docked,m),ownerState:J,ref:t},X,{children:$})):(0,v.jsx)(T,(0,o.Z)({BackdropProps:(0,o.Z)({},f,D,{transitionDuration:V}),className:(0,a.Z)(K.root,K.modal,m),open:L,ownerState:J,onClose:S,hideBackdrop:E,ref:t},X,W,{children:$}))}))}}]);
//# sourceMappingURL=75.84182dc0.chunk.js.map