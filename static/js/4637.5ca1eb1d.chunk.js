"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4637],{94637:function(n,e,r){r.r(e);r(30969);var o=r(90550),t=r(40909),i=r(81073),a=r(33359),c=r(622),s=r(53276),l=r(37574),u=(0,s.ZL)()((function(n){return{root:{margin:n.spacing(2),paddingTop:n.spacing(2)},subtitle:{margin:n.spacing(1)},pluginList:{margin:n.spacing(1),marginTop:n.spacing(5)}}})),d=(0,o.observer)((function(n){var e=n.model,r=u().classes,o=(0,i.getSession)(e).version,s=(0,t.getEnv)(e).pluginManager,d=s.plugins,p=new Set(d.filter((function(n){var e;return null===(e=s.pluginMetadata[n.name])||void 0===e?void 0:e.isCore})).map((function(n){return n.name})));return(0,l.jsxs)("div",{className:r.root,children:[(0,l.jsx)(a.Z,{variant:"h4",align:"center",children:"JBrowse 2"}),(0,l.jsx)(a.Z,{variant:"h6",align:"center",className:r.subtitle,children:o}),(0,l.jsxs)(a.Z,{align:"center",children:["JBrowse is a"," ",(0,l.jsx)(c.Z,{href:"http://gmod.org/",target:"_blank",rel:"noopener noreferrer",children:"GMOD"})," ","project"]}),(0,l.jsx)("br",{}),(0,l.jsx)(a.Z,{align:"center",children:"\xa9 2019-2022 The Evolutionary Software Foundation"}),(0,l.jsxs)("div",{className:r.pluginList,children:[(0,l.jsx)(a.Z,{children:"External plugins loaded"}),(0,l.jsx)("ul",{children:d.filter((function(n){return!p.has(n.name)})).map((function(n){var e=n.url,r=n.name,o=n.version,t=void 0===o?"":o,i="".concat(r," ").concat(t||"");return(0,l.jsx)("li",{children:n.url?(0,l.jsx)(c.Z,{target:"_blank",rel:"noopener noreferrer",href:e,children:i}):(0,l.jsx)(a.Z,{children:i})},n.name)}))}),(0,l.jsx)(a.Z,{children:"Core plugins loaded"}),(0,l.jsx)("ul",{children:d.filter((function(n){return p.has(n.name)})).map((function(n){return(0,l.jsx)("li",{children:(0,l.jsxs)(a.Z,{children:[n.name," ",n.version||""]})},n.name)}))})]})]})}));e.default=d},622:function(n,e,r){r.d(e,{Z:function(){return S}});var o=r(68079),t=r(96234),i=r(56666),a=r(31461),c=r(7896),s=r(30969),l=r(87023),u=r(26540),d=r(24099),p=r(45971),m=r(17363),f=r(65139),v=r(87352),h=r(33359),g=r(11808),Z=r(43565),b=r(74262),x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=function(n){var e=n.theme,r=n.ownerState,o=function(n){return x[n]||n}(r.color),t=(0,Z.DW)(e,"palette.".concat(o),!1)||r.color,i=(0,Z.DW)(e,"palette.".concat(o,"Channel"));return"vars"in e&&i?"rgba(".concat(i," / 0.4)"):(0,b.Fq)(t,.4)},w=r(37574),y=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k=(0,p.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState;return[e.root,e["underline".concat((0,d.Z)(r.underline))],"button"===r.component&&e.button]}})((function(n){var e=n.theme,r=n.ownerState;return(0,c.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,c.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:j({theme:e,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,i.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(g.Z.focusVisible),{outline:"auto"}))})),S=s.forwardRef((function(n,e){var r=(0,m.Z)({props:n,name:"MuiLink"}),i=r.className,p=r.color,h=void 0===p?"primary":p,Z=r.component,b=void 0===Z?"a":Z,j=r.onBlur,S=r.onFocus,C=r.TypographyClasses,D=r.underline,M=void 0===D?"always":D,F=r.variant,L=void 0===F?"inherit":F,N=r.sx,A=(0,a.Z)(r,y),B=(0,f.Z)(),T=B.isFocusVisibleRef,V=B.onBlur,_=B.onFocus,R=B.ref,W=s.useState(!1),E=(0,t.Z)(W,2),z=E[0],H=E[1],J=(0,v.Z)(e,R),O=(0,c.Z)({},r,{color:h,component:b,focusVisible:z,underline:M,variant:L}),P=function(n){var e=n.classes,r=n.component,o=n.focusVisible,t=n.underline,i={root:["root","underline".concat((0,d.Z)(t)),"button"===r&&"button",o&&"focusVisible"]};return(0,u.Z)(i,g.w,e)}(O);return(0,w.jsx)(k,(0,c.Z)({color:h,className:(0,l.Z)(P.root,i),classes:C,component:b,onBlur:function(n){V(n),!1===T.current&&H(!1),j&&j(n)},onFocus:function(n){_(n),!0===T.current&&H(!0),S&&S(n)},ref:J,ownerState:O,variant:L,sx:[].concat((0,o.Z)(Object.keys(x).includes(h)?[]:[{color:h}]),(0,o.Z)(Array.isArray(N)?N:[N]))},A))}))},11808:function(n,e,r){r.d(e,{w:function(){return i}});var o=r(62746),t=r(2975);function i(n){return(0,t.Z)("MuiLink",n)}var a=(0,o.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);e.Z=a}}]);
//# sourceMappingURL=4637.5ca1eb1d.chunk.js.map