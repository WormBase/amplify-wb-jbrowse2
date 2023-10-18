"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[9742],{12533:function(n,t,e){var a,i,r,o,s,h,l,d,u=e(71171),c=e(31461),f=e(7896),m=e(96902),v=e(37032),p=e(80553),g=e(73674),w=e(14714),b=e(16644),k=e(2252),C=e(53068),Z=e(60305),y=e(29938),S=["animation","className","component","height","style","variant","width"],R=(0,p.F4)(s||(s=a||(a=(0,u.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),x=(0,p.F4)(h||(h=i||(i=(0,u.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),B=(0,k.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t[e.variant],!1!==e.animation&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})((function(n){var t=n.theme,e=n.ownerState,a=(0,w.Wy)(t.shape.borderRadius)||"px",i=(0,w.YL)(t.shape.borderRadius);return(0,f.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,b.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(a,"/").concat(Math.round(i/.6*10)/10).concat(a),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,p.iv)(l||(l=r||(r=(0,u.Z)(["\n      animation: "," 2s ease-in-out 0.5s infinite;\n    "]))),R)}),(function(n){var t=n.ownerState,e=n.theme;return"wave"===t.animation&&(0,p.iv)(d||(d=o||(o=(0,u.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 2s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),x,(e.vars||e).palette.action.hover)})),M=m.forwardRef((function(n,t){var e=(0,C.Z)({props:n,name:"MuiSkeleton"}),a=e.animation,i=void 0===a?"pulse":a,r=e.className,o=e.component,s=void 0===o?"span":o,h=e.height,l=e.style,d=e.variant,u=void 0===d?"text":d,m=e.width,p=(0,c.Z)(e,S),w=(0,f.Z)({},e,{animation:i,component:s,variant:u,hasChildren:Boolean(p.children)}),b=function(n){var t=n.classes,e=n.variant,a=n.animation,i=n.hasChildren,r=n.width,o=n.height,s={root:["root",e,a,i&&"withChildren",i&&!r&&"fitContent",i&&!o&&"heightAuto"]};return(0,g.Z)(s,Z.B,t)}(w);return(0,y.jsx)(B,(0,f.Z)({as:s,ref:t,className:(0,v.Z)(b.root,r),ownerState:w},p,{style:(0,f.Z)({width:m,height:h},l)}))}));t.Z=M},49742:function(n,t,e){e.r(t),e.d(t,{default:function(){return a.Z},getSkeletonUtilityClass:function(){return i.B},skeletonClasses:function(){return i.Z}});var a=e(12533),i=e(60305)},60305:function(n,t,e){e.d(t,{B:function(){return r}});var a=e(74732),i=e(61235);function r(n){return(0,i.Z)("MuiSkeleton",n)}var o=(0,a.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);t.Z=o}}]);
//# sourceMappingURL=9742.29788ede.chunk.js.map