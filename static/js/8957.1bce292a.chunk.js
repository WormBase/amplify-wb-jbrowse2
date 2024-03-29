"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8957],{78957:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(7552),r=a(68446),l=a(1343),o=a(29499),i=a(36715),s=a(87731),c=a(943),u=a(58507),d=a(5401),m=a(48735);const p=(0,a(75785).n9)()((e=>({paper:{padding:e.spacing(2),margin:e.spacing(2)},field:{margin:e.spacing(2)}}))),g=["read paired","read mapped in proper pair","read unmapped","mate unmapped","read reverse strand","mate reverse strand","first in pair","second in pair","not primary alignment","read fails platform/vendor quality checks","read is PCR or optical duplicate","supplementary alignment"];function h(e){const{flag:t=0,setFlag:a}=e;return n.createElement(n.Fragment,null,n.createElement(l.A,{type:"number",value:t,onChange:e=>a(+e.target.value)}),g.map(((e,r)=>{const l=t&1<<r,o=`${e}_${l}`;return n.createElement("div",{key:o},n.createElement("input",{type:"checkbox",checked:Boolean(l),onChange:e=>{e.target.checked?a(t|1<<r):a(t&~(1<<r))}}),n.createElement("label",{htmlFor:o},e))})))}const v=(0,r.observer)((function(e){const{model:t,handleClose:a}=e,{classes:r}=p(),{filterBy:g}=t,[v,A]=(0,n.useState)(g.flagInclude),[f,y]=(0,n.useState)(g.flagExclude),[b,E]=(0,n.useState)(g.tagFilter?.tag||""),[x,k]=(0,n.useState)(g.tagFilter?.value||""),[C,F]=(0,n.useState)(g.readName||""),S=b.match(/^[A-Za-z][A-Za-z0-9]$/),w="https://broadinstitute.github.io/picard/explain-flags.html";return n.createElement(m.Dialog,{open:!0,onClose:a,title:"Filter options"},n.createElement(o.A,null,n.createElement(i.A,null,"Set filter bitmask options. Refer to ",n.createElement(s.A,{href:w},w)," ","for details"),n.createElement(c.A,{className:r.paper,variant:"outlined"},n.createElement("div",{style:{display:"flex"}},n.createElement("div",null,n.createElement(i.A,null,"Read must have ALL these flags"),n.createElement(h,{flag:v,setFlag:A})),n.createElement("div",null,n.createElement(i.A,null,"Read must have NONE of these flags"),n.createElement(h,{flag:f,setFlag:y})))),n.createElement(c.A,{className:r.paper,variant:"outlined"},n.createElement(i.A,null,"Filter by tag name and value. Use * in the value field to get all reads containing any value for that tag. Example: filter tag name SA with value * to get all split/supplementary reads. Other examples include HP for haplotype, or RG for read group"),n.createElement(l.A,{className:r.field,value:b,onChange:e=>E(e.target.value),placeholder:"Enter tag name",inputProps:{maxLength:2},error:2===b.length&&!S,helperText:2!==b.length||S?"":"Not a valid tag"}),n.createElement(l.A,{className:r.field,value:x,onChange:e=>k(e.target.value),placeholder:"Enter tag value"})),n.createElement(c.A,{className:r.paper,variant:"outlined"},n.createElement(i.A,null,"Filter by read name"),n.createElement(l.A,{className:r.field,value:C,onChange:e=>F(e.target.value),placeholder:"Enter read name"})),n.createElement(u.A,null,n.createElement(d.A,{variant:"contained",color:"primary",autoFocus:!0,type:"submit",onClick:()=>{t.setFilterBy({flagInclude:v,flagExclude:f,readName:C,tagFilter:""!==b?{tag:b,value:x}:void 0}),a()}},"Submit"),n.createElement(d.A,{variant:"contained",color:"secondary",onClick:()=>a()},"Cancel"))))}))},87731:(e,t,a)=>{a.d(t,{A:()=>x});var n=a(83673),r=a(6614),l=a(7552),o=a(93878),i=a(60827),s=a(15622),c=a(51148),u=a(31049),d=a(9527),m=a(51584),p=a(36715),g=a(58161),h=a(20605),v=a(22991);const A={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},f=({theme:e,ownerState:t})=>{const a=(e=>A[e]||e)(t.color),n=(0,h.Yn)(e,`palette.${a}`,!1)||t.color,r=(0,h.Yn)(e,`palette.${a}Channel`);return"vars"in e&&r?`rgba(${r} / 0.4)`:(0,v.X4)(n,.4)};var y=a(69500);const b=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],E=(0,c.Ay)(p.A,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`underline${(0,s.A)(a.underline)}`],"button"===a.component&&t.button]}})((({theme:e,ownerState:t})=>(0,r.A)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,r.A)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:f({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${g.A.focusVisible}`]:{outline:"auto"}}))),x=l.forwardRef((function(e,t){const a=(0,u.A)({props:e,name:"MuiLink"}),{className:c,color:p="primary",component:h="a",onBlur:v,onFocus:f,TypographyClasses:x,underline:k="always",variant:C="inherit",sx:F}=a,S=(0,n.A)(a,b),{isFocusVisibleRef:w,onBlur:N,onFocus:R,ref:$}=(0,d.A)(),[B,D]=l.useState(!1),L=(0,m.A)(t,$),T=(0,r.A)({},a,{color:p,component:h,focusVisible:B,underline:k,variant:C}),V=(e=>{const{classes:t,component:a,focusVisible:n,underline:r}=e,l={root:["root",`underline${(0,s.A)(r)}`,"button"===a&&"button",n&&"focusVisible"]};return(0,i.A)(l,g.t,t)})(T);return(0,y.jsx)(E,(0,r.A)({color:p,className:(0,o.A)(V.root,c),classes:x,component:h,onBlur:e=>{N(e),!1===w.current&&D(!1),v&&v(e)},onFocus:e=>{R(e),!0===w.current&&D(!0),f&&f(e)},ref:L,ownerState:T,variant:C,sx:[...Object.keys(A).includes(p)?[]:[{color:p}],...Array.isArray(F)?F:[F]]},S))}))},58161:(e,t,a)=>{a.d(t,{A:()=>o,t:()=>l});var n=a(55549),r=a(9577);function l(e){return(0,r.Ay)("MuiLink",e)}const o=(0,n.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"])}}]);
//# sourceMappingURL=8957.1bce292a.chunk.js.map