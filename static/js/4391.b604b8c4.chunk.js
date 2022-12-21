"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4391],{4391:function(e,n,t){t.r(n);var a=t(96234),r=t(96902),o=t(4782),i=t(66519),l=t(52809),s=t(35388),c=t(63348),u=t(6880),d=t(99688),p=t(44536),v=t(2769),m=t(91188),f=t(29938),h=(0,m.ZL)()((function(e){return{paper:{padding:e.spacing(2),margin:e.spacing(2)},field:{margin:e.spacing(2)}}})),g=["read paired","read mapped in proper pair","read unmapped","mate unmapped","read reverse strand","mate reverse strand","first in pair","second in pair","not primary alignment","read fails platform/vendor quality checks","read is PCR or optical duplicate","supplementary alignment"];function x(e){var n=e.flag,t=void 0===n?0:n,a=e.setFlag;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i.Z,{type:"number",value:t,onChange:function(e){return a(+e.target.value)}}),g.map((function(e,n){var r=t&1<<n,o="".concat(e,"_").concat(r);return(0,f.jsxs)("div",{children:[(0,f.jsx)("input",{type:"checkbox",checked:Boolean(r),onChange:function(e){e.target.checked?a(t|1<<n):a(t&~(1<<n))}}),(0,f.jsx)("label",{htmlFor:o,children:e})]},o)}))]})}n.default=(0,o.observer)((function(e){var n,t,o=e.model,m=e.handleClose,g=h().classes,Z=o.filterBy,b=(0,r.useState)(null===Z||void 0===Z?void 0:Z.flagInclude),y=(0,a.Z)(b,2),j=y[0],C=y[1],k=(0,r.useState)(null===Z||void 0===Z?void 0:Z.flagExclude),F=(0,a.Z)(k,2),w=F[0],S=F[1],N=(0,r.useState)((null===Z||void 0===Z||null===(n=Z.tagFilter)||void 0===n?void 0:n.tag)||""),A=(0,a.Z)(N,2),R=A[0],D=A[1],L=(0,r.useState)((null===Z||void 0===Z||null===(t=Z.tagFilter)||void 0===t?void 0:t.value)||""),B=(0,a.Z)(L,2),E=B[0],P=B[1],V=(0,r.useState)((null===Z||void 0===Z?void 0:Z.readName)||""),M=(0,a.Z)(V,2),_=M[0],z=M[1],T=R.match(/^[A-Za-z][A-Za-z0-9]$/),W="https://broadinstitute.github.io/picard/explain-flags.html";return(0,f.jsx)(v.Dialog,{open:!0,onClose:m,title:"Filter options",children:(0,f.jsxs)(l.Z,{children:[(0,f.jsxs)(s.Z,{children:["Set filter bitmask options. Refer to ",(0,f.jsx)(c.Z,{href:W,children:W})," ","for details"]}),(0,f.jsx)(u.Z,{className:g.paper,variant:"outlined",children:(0,f.jsxs)("div",{style:{display:"flex"},children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(s.Z,{children:"Read must have ALL these flags"}),(0,f.jsx)(x,{flag:j,setFlag:C})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)(s.Z,{children:"Read must have NONE of these flags"}),(0,f.jsx)(x,{flag:w,setFlag:S})]})]})}),(0,f.jsxs)(u.Z,{className:g.paper,variant:"outlined",children:[(0,f.jsx)(s.Z,{children:"Filter by tag name and value. Use * in the value field to get all reads containing any value for that tag. Example: filter tag name SA with value * to get all split/supplementary reads. Other examples include HP for haplotype, or RG for read group"}),(0,f.jsx)(i.Z,{className:g.field,value:R,onChange:function(e){return D(e.target.value)},placeholder:"Enter tag name",inputProps:{maxLength:2,"data-testid":"color-tag-name-input"},error:2===R.length&&!T,helperText:2!==R.length||T?"":"Not a valid tag","data-testid":"color-tag-name"}),(0,f.jsx)(i.Z,{className:g.field,value:E,onChange:function(e){return P(e.target.value)},placeholder:"Enter tag value",inputProps:{"data-testid":"color-tag-name-input"},"data-testid":"color-tag-value"})]}),(0,f.jsxs)(u.Z,{className:g.paper,variant:"outlined",children:[(0,f.jsx)(s.Z,{children:"Filter by read name"}),(0,f.jsx)(i.Z,{className:g.field,value:_,onChange:function(e){return z(e.target.value)},placeholder:"Enter read name",inputProps:{"data-testid":"color-tag-readname-input"},"data-testid":"color-tag-readname"})]}),(0,f.jsxs)(d.Z,{children:[(0,f.jsx)(p.Z,{variant:"contained",color:"primary",autoFocus:!0,type:"submit",onClick:function(){o.setFilterBy({flagInclude:j,flagExclude:w,readName:_,tagFilter:""!==R?{tag:R,value:E}:void 0}),m()},children:"Submit"}),(0,f.jsx)(p.Z,{variant:"contained",color:"secondary",onClick:function(){return m()},children:"Cancel"})]})]})})}))},63348:function(e,n,t){t.d(n,{Z:function(){return F}});var a=t(68079),r=t(96234),o=t(56666),i=t(31461),l=t(7896),s=t(96902),c=t(24463),u=t(73674),d=t(70378),p=t(2252),v=t(53068),m=t(89779),f=t(22756),h=t(35388),g=t(974),x=t(72762),Z=t(16644),b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=function(e){var n=e.theme,t=e.ownerState,a=function(e){return b[e]||e}(t.color),r=(0,x.DW)(n,"palette.".concat(a),!1)||t.color,o=(0,x.DW)(n,"palette.".concat(a,"Channel"));return"vars"in n&&o?"rgba(".concat(o," / 0.4)"):(0,Z.Fq)(r,.4)},j=t(29938),C=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k=(0,p.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["underline".concat((0,d.Z)(t.underline))],"button"===t.component&&n.button]}})((function(e){var n=e.theme,t=e.ownerState;return(0,l.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,l.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:y({theme:n,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&(0,o.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(g.Z.focusVisible),{outline:"auto"}))})),F=s.forwardRef((function(e,n){var t=(0,v.Z)({props:e,name:"MuiLink"}),o=t.className,p=t.color,h=void 0===p?"primary":p,x=t.component,Z=void 0===x?"a":x,y=t.onBlur,F=t.onFocus,w=t.TypographyClasses,S=t.underline,N=void 0===S?"always":S,A=t.variant,R=void 0===A?"inherit":A,D=t.sx,L=(0,i.Z)(t,C),B=(0,m.Z)(),E=B.isFocusVisibleRef,P=B.onBlur,V=B.onFocus,M=B.ref,_=s.useState(!1),z=(0,r.Z)(_,2),T=z[0],W=z[1],H=(0,f.Z)(n,M),O=(0,l.Z)({},t,{color:h,component:Z,focusVisible:T,underline:N,variant:R}),q=function(e){var n=e.classes,t=e.component,a=e.focusVisible,r=e.underline,o={root:["root","underline".concat((0,d.Z)(r)),"button"===t&&"button",a&&"focusVisible"]};return(0,u.Z)(o,g.w,n)}(O);return(0,j.jsx)(k,(0,l.Z)({color:h,className:(0,c.default)(q.root,o),classes:w,component:Z,onBlur:function(e){P(e),!1===E.current&&W(!1),y&&y(e)},onFocus:function(e){V(e),!0===E.current&&W(!0),F&&F(e)},ref:H,ownerState:O,variant:R,sx:[].concat((0,a.Z)(Object.keys(b).includes(h)?[]:[{color:h}]),(0,a.Z)(Array.isArray(D)?D:[D]))},L))}))},974:function(e,n,t){t.d(n,{w:function(){return o}});var a=t(74732),r=t(61235);function o(e){return(0,r.Z)("MuiLink",e)}var i=(0,a.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);n.Z=i}}]);
//# sourceMappingURL=4391.b604b8c4.chunk.js.map