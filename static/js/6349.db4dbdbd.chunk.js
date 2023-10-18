"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6349,8422],{36271:function(r,n,t){t.r(n);var e=t(33028),o=(t(30969),t(59071)),a=t(72807),i=t(59767),l=t(90550),c=t(53276),s=t(35269),u=t(9077),d=t(81073),g=t(37574),v=(0,c.ZL)()({content:{minWidth:600}}),f=(0,l.observer)((function(r){for(var n=r.trackWarnings,t=r.handleClose,l=v().classes,c=[],f=0;f<n.length;f++)for(var h=n[f],m=(0,u.getConf)(h,"name"),p=0;p<h.displays[0].warnings.length;p++){var b=h.displays[0].warnings[p];c.push((0,e.Z)((0,e.Z)({name:m},b),{},{id:f+"_"+p}))}var Z=[{field:"name"},{field:"message",width:(0,d.measureGridWidth)(c.map((function(r){return r.message})))},{field:"effect",width:(0,d.measureGridWidth)(c.map((function(r){return r.effect})))}];return(0,g.jsx)(i.Dialog,{open:!0,onClose:t,maxWidth:"xl",title:"Dotplot rendered with warnings",children:(0,g.jsxs)(o.Z,{className:l.content,children:[(0,g.jsx)(a.Z,{children:"Found warnings while rendering the dotplot. This is often due to out-of-bound features that may indicate the wrong assemblies are being used. Check that the query and target are configured correctly, and that the right assemblies are being compared."}),(0,g.jsx)("div",{style:{height:600,width:"100%",overflow:"auto"},children:(0,g.jsx)(s._$,{rows:c,columns:Z,disableRowSelectionOnClick:!0,rowHeight:25,disableColumnMenu:!0})})]})})}));n.default=f},71127:function(r,n,t){t.d(n,{d:function(){return s}});var e=t(30969),o=t(14006),a=t(34604),i=t(4422),l=t(37574);function c(r){return r.substring(2).toLowerCase()}function s(r){var n=r.children,t=r.disableReactTree,s=void 0!==t&&t,u=r.mouseEvent,d=void 0===u?"onClick":u,g=r.onClickAway,v=r.touchEvent,f=void 0===v?"onTouchEnd":v,h=e.useRef(!1),m=e.useRef(null),p=e.useRef(!1),b=e.useRef(!1);e.useEffect((function(){return setTimeout((function(){p.current=!0}),0),function(){p.current=!1}}),[]);var Z=(0,o.Z)(n.ref,m),O=(0,a.Z)((function(r){var n=b.current;b.current=!1;var t=(0,i.Z)(m.current);!p.current||!m.current||"clientX"in r&&function(r,n){return n.documentElement.clientWidth<r.clientX||n.documentElement.clientHeight<r.clientY}(r,t)||(h.current?h.current=!1:(r.composedPath?r.composedPath().indexOf(m.current)>-1:!t.documentElement.contains(r.target)||m.current.contains(r.target))||!s&&n||g(r))})),w=function(r){return function(t){b.current=!0;var e=n.props[r];e&&e(t)}},x={ref:Z};return!1!==f&&(x[f]=w(f)),e.useEffect((function(){if(!1!==f){var r=c(f),n=(0,i.Z)(m.current),t=function(){h.current=!0};return n.addEventListener(r,O),n.addEventListener("touchmove",t),function(){n.removeEventListener(r,O),n.removeEventListener("touchmove",t)}}}),[O,f]),!1!==d&&(x[d]=w(d)),e.useEffect((function(){if(!1!==d){var r=c(d),n=(0,i.Z)(m.current);return n.addEventListener(r,O),function(){n.removeEventListener(r,O)}}}),[O,d]),(0,l.jsx)(e.Fragment,{children:e.cloneElement(n,x)})}},72488:function(r,n,t){t.d(n,{Z:function(){return Z}});var e=t(56666),o=t(31461),a=t(7896),i=t(30969),l=t(87023),c=t(15460),s=t(26540);var u=t(77997),d=t(45971),g=t(17363),v=t(24099),f=t(16989),h=t(37574),m=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],p=(0,d.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:function(r,n){return n.root}})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),b=(0,d.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:function(r,n){var t=r.ownerState;return[n.badge,n[t.variant],n["anchorOrigin".concat((0,v.Z)(t.anchorOrigin.vertical)).concat((0,v.Z)(t.anchorOrigin.horizontal)).concat((0,v.Z)(t.overlap))],"default"!==t.color&&n["color".concat((0,v.Z)(t.color))],t.invisible&&n.invisible]}})((function(r){var n=r.theme,t=r.ownerState;return(0,a.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:n.typography.fontFamily,fontWeight:n.typography.fontWeightMedium,fontSize:n.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:n.transitions.create("transform",{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.enteringScreen})},"default"!==t.color&&{backgroundColor:(n.vars||n).palette[t.color].main,color:(n.vars||n).palette[t.color].contrastText},"dot"===t.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&(0,e.Z)({top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&(0,e.Z)({bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&(0,e.Z)({top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&(0,e.Z)({bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(-50%, 50%)"}),"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&(0,e.Z)({top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&(0,e.Z)({bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&(0,e.Z)({top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&(0,e.Z)({bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(-50%, 50%)"}),t.invisible&&{transition:n.transitions.create("transform",{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.leavingScreen})})})),Z=i.forwardRef((function(r,n){var t,e,i,d,Z,O,w=(0,g.Z)({props:r,name:"MuiBadge"}),x=w.anchorOrigin,R=void 0===x?{vertical:"top",horizontal:"right"}:x,C=w.className,y=w.component,S=w.components,T=void 0===S?{}:S,E=w.componentsProps,L=void 0===E?{}:E,z=w.children,P=w.overlap,B=void 0===P?"rectangular":P,N=w.color,j=void 0===N?"default":N,k=w.invisible,W=void 0!==k&&k,M=w.max,G=void 0===M?99:M,I=w.badgeContent,_=w.slots,F=w.slotProps,H=w.showZero,D=void 0!==H&&H,V=w.variant,A=void 0===V?"standard":V,X=(0,o.Z)(w,m),q=function(r){var n=r.badgeContent,t=r.invisible,e=void 0!==t&&t,o=r.max,a=void 0===o?99:o,i=r.showZero,l=void 0!==i&&i,s=(0,c.Z)({badgeContent:n,max:a}),u=e;!1!==e||0!==n||l||(u=!0);var d=u?s:r,g=d.badgeContent,v=d.max,f=void 0===v?a:v;return{badgeContent:g,invisible:u,max:f,displayValue:g&&Number(g)>f?"".concat(f,"+"):g}}({max:G,invisible:W,badgeContent:I,showZero:D}),Y=q.badgeContent,$=q.invisible,J=q.max,K=q.displayValue,Q=(0,c.Z)({anchorOrigin:R,color:j,overlap:B,variant:A,badgeContent:I}),U=$||null==Y&&"dot"!==A,rr=U?Q:w,nr=rr.color,tr=void 0===nr?j:nr,er=rr.overlap,or=void 0===er?B:er,ar=rr.anchorOrigin,ir=void 0===ar?R:ar,lr=rr.variant,cr=void 0===lr?A:lr,sr="dot"!==cr?K:void 0,ur=(0,a.Z)({},w,{badgeContent:Y,invisible:U,max:J,displayValue:sr,showZero:D,anchorOrigin:ir,color:tr,overlap:or,variant:cr}),dr=function(r){var n=r.color,t=r.anchorOrigin,e=r.invisible,o=r.overlap,a=r.variant,i=r.classes,l=void 0===i?{}:i,c={root:["root"],badge:["badge",a,e&&"invisible","anchorOrigin".concat((0,v.Z)(t.vertical)).concat((0,v.Z)(t.horizontal)),"anchorOrigin".concat((0,v.Z)(t.vertical)).concat((0,v.Z)(t.horizontal)).concat((0,v.Z)(o)),"overlap".concat((0,v.Z)(o)),"default"!==n&&"color".concat((0,v.Z)(n))]};return(0,s.Z)(c,f.I,l)}(ur),gr=null!=(t=null!=(e=null==_?void 0:_.root)?e:T.Root)?t:p,vr=null!=(i=null!=(d=null==_?void 0:_.badge)?d:T.Badge)?i:b,fr=null!=(Z=null==F?void 0:F.root)?Z:L.root,hr=null!=(O=null==F?void 0:F.badge)?O:L.badge,mr=(0,u.y)({elementType:gr,externalSlotProps:fr,externalForwardedProps:X,additionalProps:{ref:n,as:y},ownerState:ur,className:(0,l.Z)(null==fr?void 0:fr.className,dr.root,C)}),pr=(0,u.y)({elementType:vr,externalSlotProps:hr,ownerState:ur,className:(0,l.Z)(dr.badge,null==hr?void 0:hr.className)});return(0,h.jsxs)(gr,(0,a.Z)({},mr,{children:[z,(0,h.jsx)(vr,(0,a.Z)({},pr,{children:sr}))]}))}))},16989:function(r,n,t){t.d(n,{I:function(){return a}});var e=t(62746),o=t(2975);function a(r){return(0,o.Z)("MuiBadge",r)}var i=(0,e.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]);n.Z=i},56277:function(r,n,t){var e=t(56666),o=t(31461),a=t(7896),i=t(30969),l=t(87023),c=t(26540),s=t(17363),u=t(45971),d=t(6856),g=t(37574),v=["className","component","disableGutters","variant"],f=(0,u.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(r,n){var t=r.ownerState;return[n.root,!t.disableGutters&&n.gutters,n[t.variant]]}})((function(r){var n=r.theme,t=r.ownerState;return(0,a.Z)({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&(0,e.Z)({paddingLeft:n.spacing(2),paddingRight:n.spacing(2)},n.breakpoints.up("sm"),{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}),"dense"===t.variant&&{minHeight:48})}),(function(r){var n=r.theme;return"regular"===r.ownerState.variant&&n.mixins.toolbar})),h=i.forwardRef((function(r,n){var t=(0,s.Z)({props:r,name:"MuiToolbar"}),e=t.className,i=t.component,u=void 0===i?"div":i,h=t.disableGutters,m=void 0!==h&&h,p=t.variant,b=void 0===p?"regular":p,Z=(0,o.Z)(t,v),O=(0,a.Z)({},t,{component:u,disableGutters:m,variant:b}),w=function(r){var n=r.classes,t={root:["root",!r.disableGutters&&"gutters",r.variant]};return(0,c.Z)(t,d.N,n)}(O);return(0,g.jsx)(f,(0,a.Z)({as:u,className:(0,l.Z)(w.root,e),ref:n,ownerState:O},Z))}));n.Z=h},6856:function(r,n,t){t.d(n,{N:function(){return a}});var e=t(62746),o=t(2975);function a(r){return(0,o.Z)("MuiToolbar",r)}var i=(0,e.Z)("MuiToolbar",["root","gutters","regular","dense"]);n.Z=i}}]);
//# sourceMappingURL=6349.db4dbdbd.chunk.js.map