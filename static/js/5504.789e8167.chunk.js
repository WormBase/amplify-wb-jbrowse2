"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[5504],{23038:function(n,r,o){var e=o(71600);r.Z=void 0;var t=e(o(48035)),a=o(37574),i=(0,t.default)((0,a.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");r.Z=i},50501:function(n,r,o){var e=o(7896),t=o(31461),a=o(30969),i=o(87023),c=o(26540),s=o(45971),l=o(17363),d=o(34096),u=o(37574),p=["className"],v=(0,s.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(n,r){return r.root}})((function(n){return{padding:n.theme.spacing(1,2,2)}})),m=a.forwardRef((function(n,r){var o=(0,l.Z)({props:n,name:"MuiAccordionDetails"}),a=o.className,s=(0,t.Z)(o,p),m=o,g=function(n){var r=n.classes;return(0,c.Z)({root:["root"]},d.s,r)}(m);return(0,u.jsx)(v,(0,e.Z)({className:(0,i.Z)(g.root,a),ref:r,ownerState:m},s))}));r.Z=m},34096:function(n,r,o){o.d(r,{s:function(){return a}});var e=o(62746),t=o(2975);function a(n){return(0,t.Z)("MuiAccordionDetails",n)}var i=(0,e.Z)("MuiAccordionDetails",["root"]);r.Z=i},80928:function(n,r,o){o.d(r,{Z:function(){return O}});var e=o(56666),t=o(31461),a=o(7896),i=o(30969),c=o(87023),s=o(26540),l=o(45971),d=o(17363),u=o(6596),p=o(56325),v=o(62746),m=o(2975);function g(n){return(0,m.Z)("MuiAccordionSummary",n)}var f=(0,v.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),h=o(37574),Z=["children","className","expandIcon","focusVisibleClassName","onClick"],b=(0,l.ZP)(u.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(n,r){return r.root}})((function(n){var r,o=n.theme,t=n.ownerState,i={duration:o.transitions.duration.shortest};return(0,a.Z)((r={display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],i)},(0,e.Z)(r,"&.".concat(f.focusVisible),{backgroundColor:(o.vars||o).palette.action.focus}),(0,e.Z)(r,"&.".concat(f.disabled),{opacity:(o.vars||o).palette.action.disabledOpacity}),(0,e.Z)(r,"&:hover:not(.".concat(f.disabled,")"),{cursor:"pointer"}),r),!t.disableGutters&&(0,e.Z)({},"&.".concat(f.expanded),{minHeight:64}))})),x=(0,l.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(n,r){return r.content}})((function(n){var r=n.theme,o=n.ownerState;return(0,a.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!o.disableGutters&&(0,e.Z)({transition:r.transitions.create(["margin"],{duration:r.transitions.duration.shortest})},"&.".concat(f.expanded),{margin:"20px 0"}))})),y=(0,l.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(n,r){return r.expandIconWrapper}})((function(n){var r=n.theme;return(0,e.Z)({display:"flex",color:(r.vars||r).palette.action.active,transform:"rotate(0deg)",transition:r.transitions.create("transform",{duration:r.transitions.duration.shortest})},"&.".concat(f.expanded),{transform:"rotate(180deg)"})})),O=i.forwardRef((function(n,r){var o=(0,d.Z)({props:n,name:"MuiAccordionSummary"}),e=o.children,l=o.className,u=o.expandIcon,v=o.focusVisibleClassName,m=o.onClick,f=(0,t.Z)(o,Z),O=i.useContext(p.Z),w=O.disabled,C=void 0!==w&&w,R=O.disableGutters,S=O.expanded,M=O.toggle,N=(0,a.Z)({},o,{expanded:S,disabled:C,disableGutters:R}),k=function(n){var r=n.classes,o=n.expanded,e=n.disabled,t=n.disableGutters,a={root:["root",o&&"expanded",e&&"disabled",!t&&"gutters"],focusVisible:["focusVisible"],content:["content",o&&"expanded",!t&&"contentGutters"],expandIconWrapper:["expandIconWrapper",o&&"expanded"]};return(0,s.Z)(a,g,r)}(N);return(0,h.jsxs)(b,(0,a.Z)({focusRipple:!1,disableRipple:!0,disabled:C,component:"div","aria-expanded":S,className:(0,c.Z)(k.root,l),focusVisibleClassName:(0,c.Z)(k.focusVisible,v),onClick:function(n){M&&M(n),m&&m(n)},ref:r,ownerState:N},f,{children:[(0,h.jsx)(x,{className:k.content,ownerState:N,children:e}),u&&(0,h.jsx)(y,{className:k.expandIconWrapper,ownerState:N,children:u})]}))}))},72488:function(n,r,o){o.d(r,{Z:function(){return b}});var e=o(56666),t=o(31461),a=o(7896),i=o(30969),c=o(87023),s=o(15460),l=o(26540);var d=o(77997),u=o(45971),p=o(17363),v=o(24099),m=o(16989),g=o(37574),f=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],h=(0,u.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:function(n,r){return r.root}})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),Z=(0,u.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:function(n,r){var o=n.ownerState;return[r.badge,r[o.variant],r["anchorOrigin".concat((0,v.Z)(o.anchorOrigin.vertical)).concat((0,v.Z)(o.anchorOrigin.horizontal)).concat((0,v.Z)(o.overlap))],"default"!==o.color&&r["color".concat((0,v.Z)(o.color))],o.invisible&&r.invisible]}})((function(n){var r=n.theme,o=n.ownerState;return(0,a.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.enteringScreen})},"default"!==o.color&&{backgroundColor:(r.vars||r).palette[o.color].main,color:(r.vars||r).palette[o.color].contrastText},"dot"===o.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===o.anchorOrigin.vertical&&"right"===o.anchorOrigin.horizontal&&"rectangular"===o.overlap&&(0,e.Z)({top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(m.Z.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===o.anchorOrigin.vertical&&"right"===o.anchorOrigin.horizontal&&"rectangular"===o.overlap&&(0,e.Z)({bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(m.Z.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===o.anchorOrigin.vertical&&"left"===o.anchorOrigin.horizontal&&"rectangular"===o.overlap&&(0,e.Z)({top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(m.Z.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===o.anchorOrigin.vertical&&"left"===o.anchorOrigin.horizontal&&"rectangular"===o.overlap&&(0,e.Z)({bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(m.Z.invisible),{transform:"scale(0) translate(-50%, 50%)"}),"top"===o.anchorOrigin.vertical&&"right"===o.anchorOrigin.horizontal&&"circular"===o.overlap&&(0,e.Z)({top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(m.Z.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===o.anchorOrigin.vertical&&"right"===o.anchorOrigin.horizontal&&"circular"===o.overlap&&(0,e.Z)({bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(m.Z.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===o.anchorOrigin.vertical&&"left"===o.anchorOrigin.horizontal&&"circular"===o.overlap&&(0,e.Z)({top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(m.Z.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===o.anchorOrigin.vertical&&"left"===o.anchorOrigin.horizontal&&"circular"===o.overlap&&(0,e.Z)({bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(m.Z.invisible),{transform:"scale(0) translate(-50%, 50%)"}),o.invisible&&{transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.leavingScreen})})})),b=i.forwardRef((function(n,r){var o,e,i,u,b,x,y=(0,p.Z)({props:n,name:"MuiBadge"}),O=y.anchorOrigin,w=void 0===O?{vertical:"top",horizontal:"right"}:O,C=y.className,R=y.component,S=y.components,M=void 0===S?{}:S,N=y.componentsProps,k=void 0===N?{}:N,z=y.children,A=y.overlap,B=void 0===A?"rectangular":A,P=y.color,V=void 0===P?"default":P,W=y.invisible,I=void 0!==W&&W,D=y.max,T=void 0===D?99:D,j=y.badgeContent,L=y.slots,F=y.slotProps,G=y.showZero,H=void 0!==G&&G,_=y.variant,E=void 0===_?"standard":_,q=(0,t.Z)(y,f),J=function(n){var r=n.badgeContent,o=n.invisible,e=void 0!==o&&o,t=n.max,a=void 0===t?99:t,i=n.showZero,c=void 0!==i&&i,l=(0,s.Z)({badgeContent:r,max:a}),d=e;!1!==e||0!==r||c||(d=!0);var u=d?l:n,p=u.badgeContent,v=u.max,m=void 0===v?a:v;return{badgeContent:p,invisible:d,max:m,displayValue:p&&Number(p)>m?"".concat(m,"+"):p}}({max:T,invisible:I,badgeContent:j,showZero:H}),K=J.badgeContent,Q=J.invisible,U=J.max,X=J.displayValue,Y=(0,s.Z)({anchorOrigin:w,color:V,overlap:B,variant:E,badgeContent:j}),$=Q||null==K&&"dot"!==E,nn=$?Y:y,rn=nn.color,on=void 0===rn?V:rn,en=nn.overlap,tn=void 0===en?B:en,an=nn.anchorOrigin,cn=void 0===an?w:an,sn=nn.variant,ln=void 0===sn?E:sn,dn="dot"!==ln?X:void 0,un=(0,a.Z)({},y,{badgeContent:K,invisible:$,max:U,displayValue:dn,showZero:H,anchorOrigin:cn,color:on,overlap:tn,variant:ln}),pn=function(n){var r=n.color,o=n.anchorOrigin,e=n.invisible,t=n.overlap,a=n.variant,i=n.classes,c=void 0===i?{}:i,s={root:["root"],badge:["badge",a,e&&"invisible","anchorOrigin".concat((0,v.Z)(o.vertical)).concat((0,v.Z)(o.horizontal)),"anchorOrigin".concat((0,v.Z)(o.vertical)).concat((0,v.Z)(o.horizontal)).concat((0,v.Z)(t)),"overlap".concat((0,v.Z)(t)),"default"!==r&&"color".concat((0,v.Z)(r))]};return(0,l.Z)(s,m.I,c)}(un),vn=null!=(o=null!=(e=null==L?void 0:L.root)?e:M.Root)?o:h,mn=null!=(i=null!=(u=null==L?void 0:L.badge)?u:M.Badge)?i:Z,gn=null!=(b=null==F?void 0:F.root)?b:k.root,fn=null!=(x=null==F?void 0:F.badge)?x:k.badge,hn=(0,d.y)({elementType:vn,externalSlotProps:gn,externalForwardedProps:q,additionalProps:{ref:r,as:R},ownerState:un,className:(0,c.Z)(null==gn?void 0:gn.className,pn.root,C)}),Zn=(0,d.y)({elementType:mn,externalSlotProps:fn,ownerState:un,className:(0,c.Z)(pn.badge,null==fn?void 0:fn.className)});return(0,g.jsxs)(vn,(0,a.Z)({},hn,{children:[z,(0,g.jsx)(mn,(0,a.Z)({},Zn,{children:dn}))]}))}))},16989:function(n,r,o){o.d(r,{I:function(){return a}});var e=o(62746),t=o(2975);function a(n){return(0,t.Z)("MuiBadge",n)}var i=(0,e.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]);r.Z=i},622:function(n,r,o){o.d(r,{Z:function(){return R}});var e=o(68079),t=o(96234),a=o(56666),i=o(31461),c=o(7896),s=o(30969),l=o(87023),d=o(26540),u=o(24099),p=o(45971),v=o(17363),m=o(65139),g=o(87352),f=o(33359),h=o(11808),Z=o(43565),b=o(74262),x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=function(n){var r=n.theme,o=n.ownerState,e=function(n){return x[n]||n}(o.color),t=(0,Z.DW)(r,"palette.".concat(e),!1)||o.color,a=(0,Z.DW)(r,"palette.".concat(e,"Channel"));return"vars"in r&&a?"rgba(".concat(a," / 0.4)"):(0,b.Fq)(t,.4)},O=o(37574),w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],C=(0,p.ZP)(f.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(n,r){var o=n.ownerState;return[r.root,r["underline".concat((0,u.Z)(o.underline))],"button"===o.component&&r.button]}})((function(n){var r=n.theme,o=n.ownerState;return(0,c.Z)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&(0,c.Z)({textDecoration:"underline"},"inherit"!==o.color&&{textDecorationColor:y({theme:r,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===o.component&&(0,a.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(h.Z.focusVisible),{outline:"auto"}))})),R=s.forwardRef((function(n,r){var o=(0,v.Z)({props:n,name:"MuiLink"}),a=o.className,p=o.color,f=void 0===p?"primary":p,Z=o.component,b=void 0===Z?"a":Z,y=o.onBlur,R=o.onFocus,S=o.TypographyClasses,M=o.underline,N=void 0===M?"always":M,k=o.variant,z=void 0===k?"inherit":k,A=o.sx,B=(0,i.Z)(o,w),P=(0,m.Z)(),V=P.isFocusVisibleRef,W=P.onBlur,I=P.onFocus,D=P.ref,T=s.useState(!1),j=(0,t.Z)(T,2),L=j[0],F=j[1],G=(0,g.Z)(r,D),H=(0,c.Z)({},o,{color:f,component:b,focusVisible:L,underline:N,variant:z}),_=function(n){var r=n.classes,o=n.component,e=n.focusVisible,t=n.underline,a={root:["root","underline".concat((0,u.Z)(t)),"button"===o&&"button",e&&"focusVisible"]};return(0,d.Z)(a,h.w,r)}(H);return(0,O.jsx)(C,(0,c.Z)({color:f,className:(0,l.Z)(_.root,a),classes:S,component:b,onBlur:function(n){W(n),!1===V.current&&F(!1),y&&y(n)},onFocus:function(n){I(n),!0===V.current&&F(!0),R&&R(n)},ref:G,ownerState:H,variant:z,sx:[].concat((0,e.Z)(Object.keys(x).includes(f)?[]:[{color:f}]),(0,e.Z)(Array.isArray(A)?A:[A]))},B))}))},11808:function(n,r,o){o.d(r,{w:function(){return a}});var e=o(62746),t=o(2975);function a(n){return(0,t.Z)("MuiLink",n)}var i=(0,e.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);r.Z=i}}]);
//# sourceMappingURL=5504.789e8167.chunk.js.map