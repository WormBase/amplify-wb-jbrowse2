"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[772,8422],{71127:function(n,r,t){t.d(r,{d:function(){return s}});var o=t(30969),e=t(14006),a=t(34604),i=t(4422),c=t(37574);function l(n){return n.substring(2).toLowerCase()}function s(n){var r=n.children,t=n.disableReactTree,s=void 0!==t&&t,u=n.mouseEvent,d=void 0===u?"onClick":u,v=n.onClickAway,g=n.touchEvent,f=void 0===g?"onTouchEnd":g,m=o.useRef(!1),h=o.useRef(null),p=o.useRef(!1),b=o.useRef(!1);o.useEffect((function(){return setTimeout((function(){p.current=!0}),0),function(){p.current=!1}}),[]);var Z=(0,e.Z)(r.ref,h),O=(0,a.Z)((function(n){var r=b.current;b.current=!1;var t=(0,i.Z)(h.current);!p.current||!h.current||"clientX"in n&&function(n,r){return r.documentElement.clientWidth<n.clientX||r.documentElement.clientHeight<n.clientY}(n,t)||(m.current?m.current=!1:(n.composedPath?n.composedPath().indexOf(h.current)>-1:!t.documentElement.contains(n.target)||h.current.contains(n.target))||!s&&r||v(n))})),x=function(n){return function(t){b.current=!0;var o=r.props[n];o&&o(t)}},y={ref:Z};return!1!==f&&(y[f]=x(f)),o.useEffect((function(){if(!1!==f){var n=l(f),r=(0,i.Z)(h.current),t=function(){m.current=!0};return r.addEventListener(n,O),r.addEventListener("touchmove",t),function(){r.removeEventListener(n,O),r.removeEventListener("touchmove",t)}}}),[O,f]),!1!==d&&(y[d]=x(d)),o.useEffect((function(){if(!1!==d){var n=l(d),r=(0,i.Z)(h.current);return r.addEventListener(n,O),function(){r.removeEventListener(n,O)}}}),[O,d]),(0,c.jsx)(o.Fragment,{children:o.cloneElement(r,y)})}},10814:function(n,r,t){var o=t(71600);r.Z=void 0;var e=o(t(48035)),a=t(37574),i=(0,e.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");r.Z=i},89364:function(n,r,t){var o=t(71600);r.Z=void 0;var e=o(t(48035)),a=t(37574),i=(0,e.default)((0,a.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"GetApp");r.Z=i},32207:function(n,r,t){var o=t(71600);r.Z=void 0;var e=o(t(48035)),a=t(37574),i=(0,e.default)((0,a.jsx)("path",{d:"M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"}),"Publish");r.Z=i},72488:function(n,r,t){t.d(r,{Z:function(){return Z}});var o=t(56666),e=t(31461),a=t(7896),i=t(30969),c=t(87023),l=t(15460),s=t(26540);var u=t(77997),d=t(45971),v=t(17363),g=t(24099),f=t(16989),m=t(37574),h=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],p=(0,d.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:function(n,r){return r.root}})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),b=(0,d.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:function(n,r){var t=n.ownerState;return[r.badge,r[t.variant],r["anchorOrigin".concat((0,g.Z)(t.anchorOrigin.vertical)).concat((0,g.Z)(t.anchorOrigin.horizontal)).concat((0,g.Z)(t.overlap))],"default"!==t.color&&r["color".concat((0,g.Z)(t.color))],t.invisible&&r.invisible]}})((function(n){var r=n.theme,t=n.ownerState;return(0,a.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.enteringScreen})},"default"!==t.color&&{backgroundColor:(r.vars||r).palette[t.color].main,color:(r.vars||r).palette[t.color].contrastText},"dot"===t.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&(0,o.Z)({top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&(0,o.Z)({bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&(0,o.Z)({top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&(0,o.Z)({bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(-50%, 50%)"}),"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&(0,o.Z)({top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&(0,o.Z)({bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&(0,o.Z)({top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&(0,o.Z)({bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(-50%, 50%)"}),t.invisible&&{transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.leavingScreen})})})),Z=i.forwardRef((function(n,r){var t,o,i,d,Z,O,x=(0,v.Z)({props:n,name:"MuiBadge"}),y=x.anchorOrigin,w=void 0===y?{vertical:"top",horizontal:"right"}:y,R=x.className,C=x.component,S=x.components,z=void 0===S?{}:S,M=x.componentsProps,T=void 0===M?{}:M,L=x.children,k=x.overlap,B=void 0===k?"rectangular":k,E=x.color,P=void 0===E?"default":E,N=x.invisible,V=void 0!==N&&N,j=x.max,H=void 0===j?99:j,W=x.badgeContent,D=x.slots,F=x.slotProps,A=x.showZero,I=void 0!==A&&A,G=x.variant,_=void 0===G?"standard":G,X=(0,e.Z)(x,h),q=function(n){var r=n.badgeContent,t=n.invisible,o=void 0!==t&&t,e=n.max,a=void 0===e?99:e,i=n.showZero,c=void 0!==i&&i,s=(0,l.Z)({badgeContent:r,max:a}),u=o;!1!==o||0!==r||c||(u=!0);var d=u?s:n,v=d.badgeContent,g=d.max,f=void 0===g?a:g;return{badgeContent:v,invisible:u,max:f,displayValue:v&&Number(v)>f?"".concat(f,"+"):v}}({max:H,invisible:V,badgeContent:W,showZero:I}),Y=q.badgeContent,J=q.invisible,K=q.max,Q=q.displayValue,U=(0,l.Z)({anchorOrigin:w,color:P,overlap:B,variant:_,badgeContent:W}),$=J||null==Y&&"dot"!==_,nn=$?U:x,rn=nn.color,tn=void 0===rn?P:rn,on=nn.overlap,en=void 0===on?B:on,an=nn.anchorOrigin,cn=void 0===an?w:an,ln=nn.variant,sn=void 0===ln?_:ln,un="dot"!==sn?Q:void 0,dn=(0,a.Z)({},x,{badgeContent:Y,invisible:$,max:K,displayValue:un,showZero:I,anchorOrigin:cn,color:tn,overlap:en,variant:sn}),vn=function(n){var r=n.color,t=n.anchorOrigin,o=n.invisible,e=n.overlap,a=n.variant,i=n.classes,c=void 0===i?{}:i,l={root:["root"],badge:["badge",a,o&&"invisible","anchorOrigin".concat((0,g.Z)(t.vertical)).concat((0,g.Z)(t.horizontal)),"anchorOrigin".concat((0,g.Z)(t.vertical)).concat((0,g.Z)(t.horizontal)).concat((0,g.Z)(e)),"overlap".concat((0,g.Z)(e)),"default"!==r&&"color".concat((0,g.Z)(r))]};return(0,s.Z)(l,f.I,c)}(dn),gn=null!=(t=null!=(o=null==D?void 0:D.root)?o:z.Root)?t:p,fn=null!=(i=null!=(d=null==D?void 0:D.badge)?d:z.Badge)?i:b,mn=null!=(Z=null==F?void 0:F.root)?Z:T.root,hn=null!=(O=null==F?void 0:F.badge)?O:T.badge,pn=(0,u.y)({elementType:gn,externalSlotProps:mn,externalForwardedProps:X,additionalProps:{ref:r,as:C},ownerState:dn,className:(0,c.Z)(null==mn?void 0:mn.className,vn.root,R)}),bn=(0,u.y)({elementType:fn,externalSlotProps:hn,ownerState:dn,className:(0,c.Z)(vn.badge,null==hn?void 0:hn.className)});return(0,m.jsxs)(gn,(0,a.Z)({},pn,{children:[L,(0,m.jsx)(fn,(0,a.Z)({},bn,{children:un}))]}))}))},16989:function(n,r,t){t.d(r,{I:function(){return a}});var o=t(62746),e=t(2975);function a(n){return(0,e.Z)("MuiBadge",n)}var i=(0,o.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]);r.Z=i},622:function(n,r,t){t.d(r,{Z:function(){return C}});var o=t(68079),e=t(96234),a=t(56666),i=t(31461),c=t(7896),l=t(30969),s=t(87023),u=t(26540),d=t(24099),v=t(45971),g=t(17363),f=t(65139),m=t(87352),h=t(33359),p=t(11808),b=t(43565),Z=t(74262),O={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},x=function(n){var r=n.theme,t=n.ownerState,o=function(n){return O[n]||n}(t.color),e=(0,b.DW)(r,"palette.".concat(o),!1)||t.color,a=(0,b.DW)(r,"palette.".concat(o,"Channel"));return"vars"in r&&a?"rgba(".concat(a," / 0.4)"):(0,Z.Fq)(e,.4)},y=t(37574),w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],R=(0,v.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(n,r){var t=n.ownerState;return[r.root,r["underline".concat((0,d.Z)(t.underline))],"button"===t.component&&r.button]}})((function(n){var r=n.theme,t=n.ownerState;return(0,c.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,c.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:x({theme:r,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&(0,a.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(p.Z.focusVisible),{outline:"auto"}))})),C=l.forwardRef((function(n,r){var t=(0,g.Z)({props:n,name:"MuiLink"}),a=t.className,v=t.color,h=void 0===v?"primary":v,b=t.component,Z=void 0===b?"a":b,x=t.onBlur,C=t.onFocus,S=t.TypographyClasses,z=t.underline,M=void 0===z?"always":z,T=t.variant,L=void 0===T?"inherit":T,k=t.sx,B=(0,i.Z)(t,w),E=(0,f.Z)(),P=E.isFocusVisibleRef,N=E.onBlur,V=E.onFocus,j=E.ref,H=l.useState(!1),W=(0,e.Z)(H,2),D=W[0],F=W[1],A=(0,m.Z)(r,j),I=(0,c.Z)({},t,{color:h,component:Z,focusVisible:D,underline:M,variant:L}),G=function(n){var r=n.classes,t=n.component,o=n.focusVisible,e=n.underline,a={root:["root","underline".concat((0,d.Z)(e)),"button"===t&&"button",o&&"focusVisible"]};return(0,u.Z)(a,p.w,r)}(I);return(0,y.jsx)(R,(0,c.Z)({color:h,className:(0,s.Z)(G.root,a),classes:S,component:Z,onBlur:function(n){N(n),!1===P.current&&F(!1),x&&x(n)},onFocus:function(n){V(n),!0===P.current&&F(!0),C&&C(n)},ref:A,ownerState:I,variant:L,sx:[].concat((0,o.Z)(Object.keys(O).includes(h)?[]:[{color:h}]),(0,o.Z)(Array.isArray(k)?k:[k]))},B))}))},11808:function(n,r,t){t.d(r,{w:function(){return a}});var o=t(62746),e=t(2975);function a(n){return(0,e.Z)("MuiLink",n)}var i=(0,o.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);r.Z=i},56277:function(n,r,t){var o=t(56666),e=t(31461),a=t(7896),i=t(30969),c=t(87023),l=t(26540),s=t(17363),u=t(45971),d=t(6856),v=t(37574),g=["className","component","disableGutters","variant"],f=(0,u.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(n,r){var t=n.ownerState;return[r.root,!t.disableGutters&&r.gutters,r[t.variant]]}})((function(n){var r=n.theme,t=n.ownerState;return(0,a.Z)({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&(0,o.Z)({paddingLeft:r.spacing(2),paddingRight:r.spacing(2)},r.breakpoints.up("sm"),{paddingLeft:r.spacing(3),paddingRight:r.spacing(3)}),"dense"===t.variant&&{minHeight:48})}),(function(n){var r=n.theme;return"regular"===n.ownerState.variant&&r.mixins.toolbar})),m=i.forwardRef((function(n,r){var t=(0,s.Z)({props:n,name:"MuiToolbar"}),o=t.className,i=t.component,u=void 0===i?"div":i,m=t.disableGutters,h=void 0!==m&&m,p=t.variant,b=void 0===p?"regular":p,Z=(0,e.Z)(t,g),O=(0,a.Z)({},t,{component:u,disableGutters:h,variant:b}),x=function(n){var r=n.classes,t={root:["root",!n.disableGutters&&"gutters",n.variant]};return(0,l.Z)(t,d.N,r)}(O);return(0,v.jsx)(f,(0,a.Z)({as:u,className:(0,c.Z)(x.root,o),ref:r,ownerState:O},Z))}));r.Z=m},6856:function(n,r,t){t.d(r,{N:function(){return a}});var o=t(62746),e=t(2975);function a(n){return(0,e.Z)("MuiToolbar",n)}var i=(0,o.Z)("MuiToolbar",["root","gutters","regular","dense"]);r.Z=i}}]);
//# sourceMappingURL=772.18713172.chunk.js.map