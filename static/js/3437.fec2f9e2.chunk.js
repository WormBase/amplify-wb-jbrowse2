"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[3437],{3725:function(r,n,o){var t=o(7896),a=o(31461),e=o(41867),i=o(66184),l=o(92705),c=o(75693),s=o(90293),u=o(31498),d=o(80838),v=["className"],g=(0,c.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(r,n){return n.root}})((function(r){return{padding:r.theme.spacing(1,2,2)}})),m=e.forwardRef((function(r,n){var o=(0,s.Z)({props:r,name:"MuiAccordionDetails"}),e=o.className,c=(0,a.Z)(o,v),m=o,p=function(r){var n=r.classes;return(0,l.Z)({root:["root"]},u.s,n)}(m);return(0,d.jsx)(g,(0,t.Z)({className:(0,i.Z)(p.root,e),ref:n,ownerState:m},c))}));n.Z=m},31498:function(r,n,o){o.d(n,{s:function(){return e}});var t=o(70101),a=o(88498);function e(r){return(0,a.Z)("MuiAccordionDetails",r)}var i=(0,t.Z)("MuiAccordionDetails",["root"]);n.Z=i},56868:function(r,n,o){o.d(n,{Z:function(){return b}});var t=o(56666),a=o(31461),e=o(7896),i=o(41867),l=o(66184),c=o(2370),s=o(92705);var u=o(14034),d=o(75693),v=o(90293),g=o(9931),m=o(19114),p=o(80838),f=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],h=(0,d.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:function(r,n){return n.root}})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),Z=(0,d.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:function(r,n){var o=r.ownerState;return[n.badge,n[o.variant],n["anchorOrigin".concat((0,g.Z)(o.anchorOrigin.vertical)).concat((0,g.Z)(o.anchorOrigin.horizontal)).concat((0,g.Z)(o.overlap))],"default"!==o.color&&n["color".concat((0,g.Z)(o.color))],o.invisible&&n.invisible]}})((function(r){var n=r.theme,o=r.ownerState;return(0,e.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:n.typography.fontFamily,fontWeight:n.typography.fontWeightMedium,fontSize:n.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:n.transitions.create("transform",{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.enteringScreen})},"default"!==o.color&&{backgroundColor:(n.vars||n).palette[o.color].main,color:(n.vars||n).palette[o.color].contrastText},"dot"===o.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===o.anchorOrigin.vertical&&"right"===o.anchorOrigin.horizontal&&"rectangular"===o.overlap&&(0,t.Z)({top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(m.Z.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===o.anchorOrigin.vertical&&"right"===o.anchorOrigin.horizontal&&"rectangular"===o.overlap&&(0,t.Z)({bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(m.Z.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===o.anchorOrigin.vertical&&"left"===o.anchorOrigin.horizontal&&"rectangular"===o.overlap&&(0,t.Z)({top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(m.Z.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===o.anchorOrigin.vertical&&"left"===o.anchorOrigin.horizontal&&"rectangular"===o.overlap&&(0,t.Z)({bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(m.Z.invisible),{transform:"scale(0) translate(-50%, 50%)"}),"top"===o.anchorOrigin.vertical&&"right"===o.anchorOrigin.horizontal&&"circular"===o.overlap&&(0,t.Z)({top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(m.Z.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===o.anchorOrigin.vertical&&"right"===o.anchorOrigin.horizontal&&"circular"===o.overlap&&(0,t.Z)({bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(m.Z.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===o.anchorOrigin.vertical&&"left"===o.anchorOrigin.horizontal&&"circular"===o.overlap&&(0,t.Z)({top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(m.Z.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===o.anchorOrigin.vertical&&"left"===o.anchorOrigin.horizontal&&"circular"===o.overlap&&(0,t.Z)({bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(m.Z.invisible),{transform:"scale(0) translate(-50%, 50%)"}),o.invisible&&{transition:n.transitions.create("transform",{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.leavingScreen})})})),b=i.forwardRef((function(r,n){var o,t,i,d,b,O,x=(0,v.Z)({props:r,name:"MuiBadge"}),y=x.anchorOrigin,w=void 0===y?{vertical:"top",horizontal:"right"}:y,C=x.className,R=x.component,S=x.components,z=void 0===S?{}:S,B=x.componentsProps,M=void 0===B?{}:B,k=x.children,N=x.overlap,P=void 0===N?"rectangular":N,D=x.color,T=void 0===D?"default":D,A=x.invisible,L=void 0!==A&&A,W=x.max,F=void 0===W?99:W,V=x.badgeContent,j=x.slots,I=x.slotProps,_=x.showZero,H=void 0!==_&&_,q=x.variant,E=void 0===q?"standard":q,G=(0,a.Z)(x,f),J=function(r){var n=r.badgeContent,o=r.invisible,t=void 0!==o&&o,a=r.max,e=void 0===a?99:a,i=r.showZero,l=void 0!==i&&i,s=(0,c.Z)({badgeContent:n,max:e}),u=t;!1!==t||0!==n||l||(u=!0);var d=u?s:r,v=d.badgeContent,g=d.max,m=void 0===g?e:g;return{badgeContent:v,invisible:u,max:m,displayValue:v&&Number(v)>m?"".concat(m,"+"):v}}({max:F,invisible:L,badgeContent:V,showZero:H}),K=J.badgeContent,Q=J.invisible,U=J.max,X=J.displayValue,Y=(0,c.Z)({anchorOrigin:w,color:T,overlap:P,variant:E,badgeContent:V}),$=Q||null==K&&"dot"!==E,rr=$?Y:x,nr=rr.color,or=void 0===nr?T:nr,tr=rr.overlap,ar=void 0===tr?P:tr,er=rr.anchorOrigin,ir=void 0===er?w:er,lr=rr.variant,cr=void 0===lr?E:lr,sr="dot"!==cr?X:void 0,ur=(0,e.Z)({},x,{badgeContent:K,invisible:$,max:U,displayValue:sr,showZero:H,anchorOrigin:ir,color:or,overlap:ar,variant:cr}),dr=function(r){var n=r.color,o=r.anchorOrigin,t=r.invisible,a=r.overlap,e=r.variant,i=r.classes,l=void 0===i?{}:i,c={root:["root"],badge:["badge",e,t&&"invisible","anchorOrigin".concat((0,g.Z)(o.vertical)).concat((0,g.Z)(o.horizontal)),"anchorOrigin".concat((0,g.Z)(o.vertical)).concat((0,g.Z)(o.horizontal)).concat((0,g.Z)(a)),"overlap".concat((0,g.Z)(a)),"default"!==n&&"color".concat((0,g.Z)(n))]};return(0,s.Z)(c,m.I,l)}(ur),vr=null!=(o=null!=(t=null==j?void 0:j.root)?t:z.Root)?o:h,gr=null!=(i=null!=(d=null==j?void 0:j.badge)?d:z.Badge)?i:Z,mr=null!=(b=null==I?void 0:I.root)?b:M.root,pr=null!=(O=null==I?void 0:I.badge)?O:M.badge,fr=(0,u.y)({elementType:vr,externalSlotProps:mr,externalForwardedProps:G,additionalProps:{ref:n,as:R},ownerState:ur,className:(0,l.Z)(null==mr?void 0:mr.className,dr.root,C)}),hr=(0,u.y)({elementType:gr,externalSlotProps:pr,ownerState:ur,className:(0,l.Z)(dr.badge,null==pr?void 0:pr.className)});return(0,p.jsxs)(vr,(0,e.Z)({},fr,{children:[k,(0,p.jsx)(gr,(0,e.Z)({},hr,{children:sr}))]}))}))},19114:function(r,n,o){o.d(n,{I:function(){return e}});var t=o(70101),a=o(88498);function e(r){return(0,a.Z)("MuiBadge",r)}var i=(0,t.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]);n.Z=i},93989:function(r,n,o){o.d(n,{Z:function(){return R}});var t=o(68079),a=o(96234),e=o(56666),i=o(31461),l=o(7896),c=o(41867),s=o(66184),u=o(92705),d=o(9931),v=o(75693),g=o(90293),m=o(62643),p=o(40234),f=o(51590),h=o(31633),Z=o(60183),b=o(71939),O={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},x=function(r){var n=r.theme,o=r.ownerState,t=function(r){return O[r]||r}(o.color),a=(0,Z.DW)(n,"palette.".concat(t),!1)||o.color,e=(0,Z.DW)(n,"palette.".concat(t,"Channel"));return"vars"in n&&e?"rgba(".concat(e," / 0.4)"):(0,b.Fq)(a,.4)},y=o(80838),w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],C=(0,v.ZP)(f.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(r,n){var o=r.ownerState;return[n.root,n["underline".concat((0,d.Z)(o.underline))],"button"===o.component&&n.button]}})((function(r){var n=r.theme,o=r.ownerState;return(0,l.Z)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&(0,l.Z)({textDecoration:"underline"},"inherit"!==o.color&&{textDecorationColor:x({theme:n,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===o.component&&(0,e.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(h.Z.focusVisible),{outline:"auto"}))})),R=c.forwardRef((function(r,n){var o=(0,g.Z)({props:r,name:"MuiLink"}),e=o.className,v=o.color,f=void 0===v?"primary":v,Z=o.component,b=void 0===Z?"a":Z,x=o.onBlur,R=o.onFocus,S=o.TypographyClasses,z=o.underline,B=void 0===z?"always":z,M=o.variant,k=void 0===M?"inherit":M,N=o.sx,P=(0,i.Z)(o,w),D=(0,m.Z)(),T=D.isFocusVisibleRef,A=D.onBlur,L=D.onFocus,W=D.ref,F=c.useState(!1),V=(0,a.Z)(F,2),j=V[0],I=V[1],_=(0,p.Z)(n,W),H=(0,l.Z)({},o,{color:f,component:b,focusVisible:j,underline:B,variant:k}),q=function(r){var n=r.classes,o=r.component,t=r.focusVisible,a=r.underline,e={root:["root","underline".concat((0,d.Z)(a)),"button"===o&&"button",t&&"focusVisible"]};return(0,u.Z)(e,h.w,n)}(H);return(0,y.jsx)(C,(0,l.Z)({color:f,className:(0,s.Z)(q.root,e),classes:S,component:b,onBlur:function(r){A(r),!1===T.current&&I(!1),x&&x(r)},onFocus:function(r){L(r),!0===T.current&&I(!0),R&&R(r)},ref:_,ownerState:H,variant:k,sx:[].concat((0,t.Z)(Object.keys(O).includes(f)?[]:[{color:f}]),(0,t.Z)(Array.isArray(N)?N:[N]))},P))}))},31633:function(r,n,o){o.d(n,{w:function(){return e}});var t=o(70101),a=o(88498);function e(r){return(0,a.Z)("MuiLink",r)}var i=(0,t.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);n.Z=i}}]);
//# sourceMappingURL=3437.fec2f9e2.chunk.js.map