"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[2382,3180],{6816:(t,e,n)=>{n.d(e,{d:()=>c});var r=n(66204),o=n(52682),a=n(76734),i=n(26074),s=n(43188);function l(t){return t.substring(2).toLowerCase()}function c(t){const{children:e,disableReactTree:n=!1,mouseEvent:c="onClick",onClickAway:u,touchEvent:d="onTouchEnd"}=t,f=r.useRef(!1),g=r.useRef(null),p=r.useRef(!1),h=r.useRef(!1);r.useEffect((()=>(setTimeout((()=>{p.current=!0}),0),()=>{p.current=!1})),[]);const m=(0,o.Z)(e.ref,g),v=(0,a.Z)((t=>{const e=h.current;h.current=!1;const r=(0,i.Z)(g.current);if(!p.current||!g.current||"clientX"in t&&function(t,e){return e.documentElement.clientWidth<t.clientX||e.documentElement.clientHeight<t.clientY}(t,r))return;if(f.current)return void(f.current=!1);let o;o=t.composedPath?t.composedPath().indexOf(g.current)>-1:!r.documentElement.contains(t.target)||g.current.contains(t.target),o||!n&&e||u(t)})),b=t=>n=>{h.current=!0;const r=e.props[t];r&&r(n)},y={ref:m};return!1!==d&&(y[d]=b(d)),r.useEffect((()=>{if(!1!==d){const t=l(d),e=(0,i.Z)(g.current),n=()=>{f.current=!0};return e.addEventListener(t,v),e.addEventListener("touchmove",n),()=>{e.removeEventListener(t,v),e.removeEventListener("touchmove",n)}}}),[v,d]),!1!==c&&(y[c]=b(c)),r.useEffect((()=>{if(!1!==c){const t=l(c),e=(0,i.Z)(g.current);return e.addEventListener(t,v),()=>{e.removeEventListener(t,v)}}}),[v,c]),(0,s.jsx)(r.Fragment,{children:r.cloneElement(e,y)})}},22277:(t,e,n)=>{var r=n(57739);e.Z=void 0;var o=r(n(53948)),a=n(43188),i=(0,o.default)((0,a.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");e.Z=i},68223:(t,e,n)=>{var r=n(57739);e.Z=void 0;var o=r(n(53948)),a=n(43188),i=(0,o.default)([(0,a.jsx)("path",{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},"0"),(0,a.jsx)("path",{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},"1")],"KeyboardDoubleArrowDown");e.Z=i},92112:(t,e,n)=>{var r=n(57739);e.Z=void 0;var o=r(n(53948)),a=n(43188),i=(0,o.default)([(0,a.jsx)("path",{d:"M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z"},"0"),(0,a.jsx)("path",{d:"m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"},"1")],"KeyboardDoubleArrowUp");e.Z=i},38465:(t,e,n)=>{n.d(e,{Z:()=>b});var r=n(55559),o=n(30984),a=n(66204),i=n(56317),s=n(56325),l=n(58029),c=n(42142),u=n(61125),d=n(57369),f=n(40118),g=n(81469),p=n(43188);const h=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],m=(0,u.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(t,e)=>e.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),v=(0,u.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.badge,e[n.variant],e[`anchorOrigin${(0,f.Z)(n.anchorOrigin.vertical)}${(0,f.Z)(n.anchorOrigin.horizontal)}${(0,f.Z)(n.overlap)}`],"default"!==n.color&&e[`color${(0,f.Z)(n.color)}`],n.invisible&&e.invisible]}})((({theme:t,ownerState:e})=>(0,o.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.enteringScreen})},"default"!==e.color&&{backgroundColor:(t.vars||t).palette[e.color].main,color:(t.vars||t).palette[e.color].contrastText},"dot"===e.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===e.anchorOrigin.vertical&&"right"===e.anchorOrigin.horizontal&&"rectangular"===e.overlap&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.Z.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===e.anchorOrigin.vertical&&"right"===e.anchorOrigin.horizontal&&"rectangular"===e.overlap&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.Z.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===e.anchorOrigin.vertical&&"left"===e.anchorOrigin.horizontal&&"rectangular"===e.overlap&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.Z.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===e.anchorOrigin.vertical&&"left"===e.anchorOrigin.horizontal&&"rectangular"===e.overlap&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.Z.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},"top"===e.anchorOrigin.vertical&&"right"===e.anchorOrigin.horizontal&&"circular"===e.overlap&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${g.Z.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===e.anchorOrigin.vertical&&"right"===e.anchorOrigin.horizontal&&"circular"===e.overlap&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${g.Z.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===e.anchorOrigin.vertical&&"left"===e.anchorOrigin.horizontal&&"circular"===e.overlap&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${g.Z.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===e.anchorOrigin.vertical&&"left"===e.anchorOrigin.horizontal&&"circular"===e.overlap&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${g.Z.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},e.invisible&&{transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.leavingScreen})}))),b=a.forwardRef((function(t,e){var n,a,u,b,y,D;const S=(0,d.Z)({props:t,name:"MuiBadge"}),{anchorOrigin:w={vertical:"top",horizontal:"right"},className:O,component:x,components:P={},componentsProps:M={},children:T,overlap:C="rectangular",color:E="default",invisible:N=!1,max:Z=99,badgeContent:j,slots:R,slotProps:k,showZero:L=!1,variant:X="standard"}=S,Y=(0,r.Z)(S,h),{badgeContent:W,invisible:_,max:B,displayValue:z}=function(t){const{badgeContent:e,invisible:n=!1,max:r=99,showZero:o=!1}=t,a=(0,s.Z)({badgeContent:e,max:r});let i=n;!1!==n||0!==e||o||(i=!0);const{badgeContent:l,max:c=r}=i?a:t;return{badgeContent:l,invisible:i,max:c,displayValue:l&&Number(l)>c?`${c}+`:l}}({max:Z,invisible:N,badgeContent:j,showZero:L}),A=(0,s.Z)({anchorOrigin:w,color:E,overlap:C,variant:X,badgeContent:j}),I=_||null==W&&"dot"!==X,{color:$=E,overlap:U=C,anchorOrigin:H=w,variant:V=X}=I?A:S,G="dot"!==V?z:void 0,F=(0,o.Z)({},S,{badgeContent:W,invisible:I,max:B,displayValue:G,showZero:L,anchorOrigin:H,color:$,overlap:U,variant:V}),K=(t=>{const{color:e,anchorOrigin:n,invisible:r,overlap:o,variant:a,classes:i={}}=t,s={root:["root"],badge:["badge",a,r&&"invisible",`anchorOrigin${(0,f.Z)(n.vertical)}${(0,f.Z)(n.horizontal)}`,`anchorOrigin${(0,f.Z)(n.vertical)}${(0,f.Z)(n.horizontal)}${(0,f.Z)(o)}`,`overlap${(0,f.Z)(o)}`,"default"!==e&&`color${(0,f.Z)(e)}`]};return(0,l.Z)(s,g.I,i)})(F),q=null!=(n=null!=(a=null==R?void 0:R.root)?a:P.Root)?n:m,J=null!=(u=null!=(b=null==R?void 0:R.badge)?b:P.Badge)?u:v,Q=null!=(y=null==k?void 0:k.root)?y:M.root,tt=null!=(D=null==k?void 0:k.badge)?D:M.badge,et=(0,c.y)({elementType:q,externalSlotProps:Q,externalForwardedProps:Y,additionalProps:{ref:e,as:x},ownerState:F,className:(0,i.Z)(null==Q?void 0:Q.className,K.root,O)}),nt=(0,c.y)({elementType:J,externalSlotProps:tt,ownerState:F,className:(0,i.Z)(K.badge,null==tt?void 0:tt.className)});return(0,p.jsxs)(q,(0,o.Z)({},et,{children:[T,(0,p.jsx)(J,(0,o.Z)({},nt,{children:G}))]}))}))},81469:(t,e,n)=>{n.d(e,{I:()=>a,Z:()=>i});var r=n(58109),o=n(95201);function a(t){return(0,o.Z)("MuiBadge",t)}const i=(0,r.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])},96987:(t,e,n)=>{n.d(e,{Z:()=>p});var r=n(55559),o=n(30984),a=n(66204),i=n(56317),s=n(58029),l=n(57369),c=n(61125),u=n(41666),d=n(43188);const f=["className","component","disableGutters","variant"],g=(0,c.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,!n.disableGutters&&e.gutters,e[n.variant]]}})((({theme:t,ownerState:e})=>(0,o.Z)({position:"relative",display:"flex",alignItems:"center"},!e.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}},"dense"===e.variant&&{minHeight:48})),(({theme:t,ownerState:e})=>"regular"===e.variant&&t.mixins.toolbar)),p=a.forwardRef((function(t,e){const n=(0,l.Z)({props:t,name:"MuiToolbar"}),{className:a,component:c="div",disableGutters:p=!1,variant:h="regular"}=n,m=(0,r.Z)(n,f),v=(0,o.Z)({},n,{component:c,disableGutters:p,variant:h}),b=(t=>{const{classes:e,disableGutters:n,variant:r}=t,o={root:["root",!n&&"gutters",r]};return(0,s.Z)(o,u.N,e)})(v);return(0,d.jsx)(g,(0,o.Z)({as:c,className:(0,i.Z)(b.root,a),ref:e,ownerState:v},m))}))},41666:(t,e,n)=>{n.d(e,{N:()=>a,Z:()=>i});var r=n(58109),o=n(95201);function a(t){return(0,o.Z)("MuiToolbar",t)}const i=(0,r.Z)("MuiToolbar",["root","gutters","regular","dense"])},57449:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return u.default}}),e.default=void 0;var r=function(t,e){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=g(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var i=o?Object.getOwnPropertyDescriptor(t,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=t[a]}return r.default=t,n&&n.set(t,r),r}(n(66204)),o=f(n(97641)),a=f(n(42457)),i=f(n(62605)),s=n(55078),l=n(83679),c=n(69545),u=f(n(35491)),d=f(n(35290));function f(t){return t&&t.__esModule?t:{default:t}}function g(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(g=function(t){return t?n:e})(t)}function p(){return p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},p.apply(this,arguments)}function h(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class m extends r.Component{static getDerivedStateFromProps(t,e){let{position:n}=t,{prevPropsPosition:r}=e;return!n||r&&n.x===r.x&&n.y===r.y?null:((0,d.default)("Draggable: getDerivedStateFromProps %j",{position:n,prevPropsPosition:r}),{x:n.x,y:n.y,prevPropsPosition:{...n}})}constructor(t){super(t),h(this,"onDragStart",((t,e)=>{if((0,d.default)("Draggable: onDragStart: %j",e),!1===this.props.onStart(t,(0,l.createDraggableData)(this,e)))return!1;this.setState({dragging:!0,dragged:!0})})),h(this,"onDrag",((t,e)=>{if(!this.state.dragging)return!1;(0,d.default)("Draggable: onDrag: %j",e);const n=(0,l.createDraggableData)(this,e),r={x:n.x,y:n.y,slackX:0,slackY:0};if(this.props.bounds){const{x:t,y:e}=r;r.x+=this.state.slackX,r.y+=this.state.slackY;const[o,a]=(0,l.getBoundPosition)(this,r.x,r.y);r.x=o,r.y=a,r.slackX=this.state.slackX+(t-r.x),r.slackY=this.state.slackY+(e-r.y),n.x=r.x,n.y=r.y,n.deltaX=r.x-this.state.x,n.deltaY=r.y-this.state.y}if(!1===this.props.onDrag(t,n))return!1;this.setState(r)})),h(this,"onDragStop",((t,e)=>{if(!this.state.dragging)return!1;if(!1===this.props.onStop(t,(0,l.createDraggableData)(this,e)))return!1;(0,d.default)("Draggable: onDragStop: %j",e);const n={dragging:!1,slackX:0,slackY:0};if(Boolean(this.props.position)){const{x:t,y:e}=this.props.position;n.x=t,n.y=e}this.setState(n)})),this.state={dragging:!1,dragged:!1,x:t.position?t.position.x:t.defaultPosition.x,y:t.position?t.position.y:t.defaultPosition.y,prevPropsPosition:{...t.position},slackX:0,slackY:0,isElementSVG:!1},!t.position||t.onDrag||t.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){void 0!==window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var t,e;return null!==(t=null===(e=this.props)||void 0===e||null===(e=e.nodeRef)||void 0===e?void 0:e.current)&&void 0!==t?t:a.default.findDOMNode(this)}render(){const{axis:t,bounds:e,children:n,defaultPosition:o,defaultClassName:a,defaultClassNameDragging:c,defaultClassNameDragged:d,position:f,positionOffset:g,scale:h,...m}=this.props;let v={},b=null;const y=!Boolean(f)||this.state.dragging,D=f||o,S={x:(0,l.canDragX)(this)&&y?this.state.x:D.x,y:(0,l.canDragY)(this)&&y?this.state.y:D.y};this.state.isElementSVG?b=(0,s.createSVGTransform)(S,g):v=(0,s.createCSSTransform)(S,g);const w=(0,i.default)(n.props.className||"",a,{[c]:this.state.dragging,[d]:this.state.dragged});return r.createElement(u.default,p({},m,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),r.cloneElement(r.Children.only(n),{className:w,style:{...n.props.style,...v},transform:b}))}}e.default=m,h(m,"displayName","Draggable"),h(m,"propTypes",{...u.default.propTypes,axis:o.default.oneOf(["both","x","y","none"]),bounds:o.default.oneOfType([o.default.shape({left:o.default.number,right:o.default.number,top:o.default.number,bottom:o.default.number}),o.default.string,o.default.oneOf([!1])]),defaultClassName:o.default.string,defaultClassNameDragging:o.default.string,defaultClassNameDragged:o.default.string,defaultPosition:o.default.shape({x:o.default.number,y:o.default.number}),positionOffset:o.default.shape({x:o.default.oneOfType([o.default.number,o.default.string]),y:o.default.oneOfType([o.default.number,o.default.string])}),position:o.default.shape({x:o.default.number,y:o.default.number}),className:c.dontSetMe,style:c.dontSetMe,transform:c.dontSetMe}),h(m,"defaultProps",{...u.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})},35491:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(t,e){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=d(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var i=o?Object.getOwnPropertyDescriptor(t,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=t[a]}return r.default=t,n&&n.set(t,r),r}(n(66204)),o=u(n(97641)),a=u(n(42457)),i=n(55078),s=n(83679),l=n(69545),c=u(n(35290));function u(t){return t&&t.__esModule?t:{default:t}}function d(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(d=function(t){return t?n:e})(t)}function f(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const g={start:"touchstart",move:"touchmove",stop:"touchend"},p={start:"mousedown",move:"mousemove",stop:"mouseup"};let h=p;class m extends r.Component{constructor(){super(...arguments),f(this,"dragging",!1),f(this,"lastX",NaN),f(this,"lastY",NaN),f(this,"touchIdentifier",null),f(this,"mounted",!1),f(this,"handleDragStart",(t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&"number"==typeof t.button&&0!==t.button)return!1;const e=this.findDOMNode();if(!e||!e.ownerDocument||!e.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:n}=e;if(this.props.disabled||!(t.target instanceof n.defaultView.Node)||this.props.handle&&!(0,i.matchesSelectorAndParentsTo)(t.target,this.props.handle,e)||this.props.cancel&&(0,i.matchesSelectorAndParentsTo)(t.target,this.props.cancel,e))return;"touchstart"===t.type&&t.preventDefault();const r=(0,i.getTouchIdentifier)(t);this.touchIdentifier=r;const o=(0,s.getControlPosition)(t,r,this);if(null==o)return;const{x:a,y:l}=o,u=(0,s.createCoreData)(this,a,l);(0,c.default)("DraggableCore: handleDragStart: %j",u),(0,c.default)("calling",this.props.onStart),!1!==this.props.onStart(t,u)&&!1!==this.mounted&&(this.props.enableUserSelectHack&&(0,i.addUserSelectStyles)(n),this.dragging=!0,this.lastX=a,this.lastY=l,(0,i.addEvent)(n,h.move,this.handleDrag),(0,i.addEvent)(n,h.stop,this.handleDragStop))})),f(this,"handleDrag",(t=>{const e=(0,s.getControlPosition)(t,this.touchIdentifier,this);if(null==e)return;let{x:n,y:r}=e;if(Array.isArray(this.props.grid)){let t=n-this.lastX,e=r-this.lastY;if([t,e]=(0,s.snapToGrid)(this.props.grid,t,e),!t&&!e)return;n=this.lastX+t,r=this.lastY+e}const o=(0,s.createCoreData)(this,n,r);if((0,c.default)("DraggableCore: handleDrag: %j",o),!1!==this.props.onDrag(t,o)&&!1!==this.mounted)this.lastX=n,this.lastY=r;else try{this.handleDragStop(new MouseEvent("mouseup"))}catch(t){const e=document.createEvent("MouseEvents");e.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(e)}})),f(this,"handleDragStop",(t=>{if(!this.dragging)return;const e=(0,s.getControlPosition)(t,this.touchIdentifier,this);if(null==e)return;let{x:n,y:r}=e;if(Array.isArray(this.props.grid)){let t=n-this.lastX||0,e=r-this.lastY||0;[t,e]=(0,s.snapToGrid)(this.props.grid,t,e),n=this.lastX+t,r=this.lastY+e}const o=(0,s.createCoreData)(this,n,r);if(!1===this.props.onStop(t,o)||!1===this.mounted)return!1;const a=this.findDOMNode();a&&this.props.enableUserSelectHack&&(0,i.removeUserSelectStyles)(a.ownerDocument),(0,c.default)("DraggableCore: handleDragStop: %j",o),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,a&&((0,c.default)("DraggableCore: Removing handlers"),(0,i.removeEvent)(a.ownerDocument,h.move,this.handleDrag),(0,i.removeEvent)(a.ownerDocument,h.stop,this.handleDragStop))})),f(this,"onMouseDown",(t=>(h=p,this.handleDragStart(t)))),f(this,"onMouseUp",(t=>(h=p,this.handleDragStop(t)))),f(this,"onTouchStart",(t=>(h=g,this.handleDragStart(t)))),f(this,"onTouchEnd",(t=>(h=g,this.handleDragStop(t))))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,i.addEvent)(t,g.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:e}=t;(0,i.removeEvent)(e,p.move,this.handleDrag),(0,i.removeEvent)(e,g.move,this.handleDrag),(0,i.removeEvent)(e,p.stop,this.handleDragStop),(0,i.removeEvent)(e,g.stop,this.handleDragStop),(0,i.removeEvent)(t,g.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,i.removeUserSelectStyles)(e)}}findDOMNode(){var t,e;return null!==(t=this.props)&&void 0!==t&&t.nodeRef?null===(e=this.props)||void 0===e||null===(e=e.nodeRef)||void 0===e?void 0:e.current:a.default.findDOMNode(this)}render(){return r.cloneElement(r.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}e.default=m,f(m,"displayName","DraggableCore"),f(m,"propTypes",{allowAnyClick:o.default.bool,children:o.default.node.isRequired,disabled:o.default.bool,enableUserSelectHack:o.default.bool,offsetParent:function(t,e){if(t[e]&&1!==t[e].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:o.default.arrayOf(o.default.number),handle:o.default.string,cancel:o.default.string,nodeRef:o.default.object,onStart:o.default.func,onDrag:o.default.func,onStop:o.default.func,onMouseDown:o.default.func,scale:o.default.number,className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),f(m,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},88496:(t,e,n)=>{const{default:r,DraggableCore:o}=n(57449);t.exports=r,t.exports.default=r,t.exports.DraggableCore=o},55078:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.addClassName=c,e.addEvent=function(t,e,n,r){if(!t)return;const o={capture:!0,...r};t.addEventListener?t.addEventListener(e,n,o):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n},e.addUserSelectStyles=function(t){if(!t)return;let e=t.getElementById("react-draggable-style-el");e||(e=t.createElement("style"),e.type="text/css",e.id="react-draggable-style-el",e.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",e.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",t.getElementsByTagName("head")[0].appendChild(e)),t.body&&c(t.body,"react-draggable-transparent-selection")},e.createCSSTransform=function(t,e){const n=l(t,e,"px");return{[(0,o.browserPrefixToKey)("transform",o.default)]:n}},e.createSVGTransform=function(t,e){return l(t,e,"")},e.getTouch=function(t,e){return t.targetTouches&&(0,r.findInArray)(t.targetTouches,(t=>e===t.identifier))||t.changedTouches&&(0,r.findInArray)(t.changedTouches,(t=>e===t.identifier))},e.getTouchIdentifier=function(t){return t.targetTouches&&t.targetTouches[0]?t.targetTouches[0].identifier:t.changedTouches&&t.changedTouches[0]?t.changedTouches[0].identifier:void 0},e.getTranslation=l,e.innerHeight=function(t){let e=t.clientHeight;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,r.int)(n.paddingTop),e-=(0,r.int)(n.paddingBottom),e},e.innerWidth=function(t){let e=t.clientWidth;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,r.int)(n.paddingLeft),e-=(0,r.int)(n.paddingRight),e},e.matchesSelector=s,e.matchesSelectorAndParentsTo=function(t,e,n){let r=t;do{if(s(r,e))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1},e.offsetXYFromParent=function(t,e,n){const r=e===e.ownerDocument.body?{left:0,top:0}:e.getBoundingClientRect();return{x:(t.clientX+e.scrollLeft-r.left)/n,y:(t.clientY+e.scrollTop-r.top)/n}},e.outerHeight=function(t){let e=t.clientHeight;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,r.int)(n.borderTopWidth),e+=(0,r.int)(n.borderBottomWidth),e},e.outerWidth=function(t){let e=t.clientWidth;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,r.int)(n.borderLeftWidth),e+=(0,r.int)(n.borderRightWidth),e},e.removeClassName=u,e.removeEvent=function(t,e,n,r){if(!t)return;const o={capture:!0,...r};t.removeEventListener?t.removeEventListener(e,n,o):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null},e.removeUserSelectStyles=function(t){if(t)try{if(t.body&&u(t.body,"react-draggable-transparent-selection"),t.selection)t.selection.empty();else{const e=(t.defaultView||window).getSelection();e&&"Caret"!==e.type&&e.removeAllRanges()}}catch(t){}};var r=n(69545),o=function(t,e){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=a(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&Object.prototype.hasOwnProperty.call(t,i)){var s=o?Object.getOwnPropertyDescriptor(t,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=t[i]}return r.default=t,n&&n.set(t,r),r}(n(29847));function a(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(a=function(t){return t?n:e})(t)}let i="";function s(t,e){return i||(i=(0,r.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(e){return(0,r.isFunction)(t[e])}))),!!(0,r.isFunction)(t[i])&&t[i](e)}function l(t,e,n){let{x:r,y:o}=t,a="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(e){const t="".concat("string"==typeof e.x?e.x:e.x+n),r="".concat("string"==typeof e.y?e.y:e.y+n);a="translate(".concat(t,", ").concat(r,")")+a}return a}function c(t,e){t.classList?t.classList.add(e):t.className.match(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)")))||(t.className+=" ".concat(e))}function u(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)"),"g"),"")}},29847:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.browserPrefixToKey=o,e.browserPrefixToStyle=function(t,e){return e?"-".concat(e.toLowerCase(),"-").concat(t):t},e.default=void 0,e.getPrefix=r;const n=["Moz","Webkit","O","ms"];function r(){var t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window)return"";const r=null===(t=window.document)||void 0===t||null===(t=t.documentElement)||void 0===t?void 0:t.style;if(!r)return"";if(e in r)return"";for(let t=0;t<n.length;t++)if(o(e,n[t])in r)return n[t];return""}function o(t,e){return e?"".concat(e).concat(function(t){let e="",n=!0;for(let r=0;r<t.length;r++)n?(e+=t[r].toUpperCase(),n=!1):"-"===t[r]?n=!0:e+=t[r];return e}(t)):t}e.default=r()},35290:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){}},83679:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.canDragX=function(t){return"both"===t.props.axis||"x"===t.props.axis},e.canDragY=function(t){return"both"===t.props.axis||"y"===t.props.axis},e.createCoreData=function(t,e,n){const o=!(0,r.isNum)(t.lastX),i=a(t);return o?{node:i,deltaX:0,deltaY:0,lastX:e,lastY:n,x:e,y:n}:{node:i,deltaX:e-t.lastX,deltaY:n-t.lastY,lastX:t.lastX,lastY:t.lastY,x:e,y:n}},e.createDraggableData=function(t,e){const n=t.props.scale;return{node:e.node,x:t.state.x+e.deltaX/n,y:t.state.y+e.deltaY/n,deltaX:e.deltaX/n,deltaY:e.deltaY/n,lastX:t.state.x,lastY:t.state.y}},e.getBoundPosition=function(t,e,n){if(!t.props.bounds)return[e,n];let{bounds:i}=t.props;i="string"==typeof i?i:function(t){return{left:t.left,top:t.top,right:t.right,bottom:t.bottom}}(i);const s=a(t);if("string"==typeof i){const{ownerDocument:t}=s,e=t.defaultView;let n;if(n="parent"===i?s.parentNode:t.querySelector(i),!(n instanceof e.HTMLElement))throw new Error('Bounds selector "'+i+'" could not find an element.');const a=n,l=e.getComputedStyle(s),c=e.getComputedStyle(a);i={left:-s.offsetLeft+(0,r.int)(c.paddingLeft)+(0,r.int)(l.marginLeft),top:-s.offsetTop+(0,r.int)(c.paddingTop)+(0,r.int)(l.marginTop),right:(0,o.innerWidth)(a)-(0,o.outerWidth)(s)-s.offsetLeft+(0,r.int)(c.paddingRight)-(0,r.int)(l.marginRight),bottom:(0,o.innerHeight)(a)-(0,o.outerHeight)(s)-s.offsetTop+(0,r.int)(c.paddingBottom)-(0,r.int)(l.marginBottom)}}return(0,r.isNum)(i.right)&&(e=Math.min(e,i.right)),(0,r.isNum)(i.bottom)&&(n=Math.min(n,i.bottom)),(0,r.isNum)(i.left)&&(e=Math.max(e,i.left)),(0,r.isNum)(i.top)&&(n=Math.max(n,i.top)),[e,n]},e.getControlPosition=function(t,e,n){const r="number"==typeof e?(0,o.getTouch)(t,e):null;if("number"==typeof e&&!r)return null;const i=a(n),s=n.props.offsetParent||i.offsetParent||i.ownerDocument.body;return(0,o.offsetXYFromParent)(r||t,s,n.props.scale)},e.snapToGrid=function(t,e,n){return[Math.round(e/t[0])*t[0],Math.round(n/t[1])*t[1]]};var r=n(69545),o=n(55078);function a(t){const e=t.findDOMNode();if(!e)throw new Error("<DraggableCore>: Unmounted during event!");return e}},69545:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.dontSetMe=function(t,e,n){if(t[e])return new Error("Invalid prop ".concat(e," passed to ").concat(n," - do not set this, set it on the child."))},e.findInArray=function(t,e){for(let n=0,r=t.length;n<r;n++)if(e.apply(e,[t[n],n,t]))return t[n]},e.int=function(t){return parseInt(t,10)},e.isFunction=function(t){return"function"==typeof t||"[object Function]"===Object.prototype.toString.call(t)},e.isNum=function(t){return"number"==typeof t&&!isNaN(t)}},62605:(t,e,n)=>{function r(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}function o(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(o&&(o+=" "),o+=e);return o}n.r(e),n.d(e,{clsx:()=>o,default:()=>a});const a=o}}]);
//# sourceMappingURL=2382.b7c72bda.chunk.js.map