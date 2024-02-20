"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5122],{36539:(e,t,a)=>{var o=a(57739);t.Z=void 0;var i=o(a(53948)),r=a(43188);t.Z=(0,i.default)((0,r.jsx)("path",{d:"M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"}),"Warning")},2331:(e,t,a)=>{a.d(t,{Z:()=>b});var o=a(30984),i=a(55559),r=a(66204),s=a(56317),n=a(58029),d=a(61125),l=a(57369),c=a(86636),m=a(17352),p=a(43188);const u=["className","raised"],v=(0,d.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),b=r.forwardRef((function(e,t){const a=(0,l.Z)({props:e,name:"MuiCard"}),{className:r,raised:d=!1}=a,c=(0,i.Z)(a,u),b=(0,o.Z)({},a,{raised:d}),g=(e=>{const{classes:t}=e;return(0,n.Z)({root:["root"]},m.y,t)})(b);return(0,p.jsx)(v,(0,o.Z)({className:(0,s.Z)(g.root,r),elevation:d?8:void 0,ref:t,ownerState:b},c))}))},17352:(e,t,a)=>{a.d(t,{Z:()=>s,y:()=>r});var o=a(58109),i=a(95201);function r(e){return(0,i.ZP)("MuiCard",e)}const s=(0,o.Z)("MuiCard",["root"])},69488:(e,t,a)=>{a.d(t,{Z:()=>g});var o=a(55559),i=a(30984),r=a(66204),s=a(56317),n=a(58029),d=a(57369),l=a(61125),c=a(34525),m=a(43188);const p=["children","className","component","image","src","style"],u=(0,l.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e,{isMediaComponent:o,isImageComponent:i}=a;return[t.root,o&&t.media,i&&t.img]}})((({ownerState:e})=>(0,i.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),v=["video","audio","picture","iframe","img"],b=["picture","img"],g=r.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiCardMedia"}),{children:r,className:l,component:g="div",image:h,src:Z,style:f}=a,x=(0,o.Z)(a,p),C=-1!==v.indexOf(g),y=!C&&h?(0,i.Z)({backgroundImage:`url("${h}")`},f):f,k=(0,i.Z)({},a,{component:g,isMediaComponent:C,isImageComponent:-1!==b.indexOf(g)}),w=(e=>{const{classes:t,isMediaComponent:a,isImageComponent:o}=e,i={root:["root",a&&"media",o&&"img"]};return(0,n.Z)(i,c.a,t)})(k);return(0,m.jsx)(u,(0,i.Z)({className:(0,s.Z)(w.root,l),as:g,role:!C&&h?"img":void 0,ref:t,style:y,ownerState:k,src:C?h||Z:void 0},x,{children:r}))}))},34525:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>r});var o=a(58109),i=a(95201);function r(e){return(0,i.ZP)("MuiCardMedia",e)}const s=(0,o.Z)("MuiCardMedia",["root","media","img"])},82051:(e,t,a)=>{a.d(t,{Z:()=>y});var o=a(55559),i=a(30984),r=a(66204),s=a(56317),n=a(46730),d=a(95201),l=a(58029),c=a(77877),m=a(605),p=a(71684),u=a(43188);const v=["className","component","disableGutters","fixed","maxWidth","classes"],b=(0,p.Z)(),g=(0,m.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`maxWidth${(0,n.Z)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),h=e=>(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:b});var Z=a(40118),f=a(61125),x=a(57369);const C=function(e={}){const{createStyledComponent:t=g,useThemeProps:a=h,componentName:c="MuiContainer"}=e,m=t((({theme:e,ownerState:t})=>(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,a)=>{const o=a,i=e.breakpoints.values[o];return 0!==i&&(t[e.breakpoints.up(o)]={maxWidth:`${i}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,i.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),p=r.forwardRef((function(e,t){const r=a(e),{className:p,component:b="div",disableGutters:g=!1,fixed:h=!1,maxWidth:Z="lg"}=r,f=(0,o.Z)(r,v),x=(0,i.Z)({},r,{component:b,disableGutters:g,fixed:h,maxWidth:Z}),C=((e,t)=>{const{classes:a,fixed:o,disableGutters:i,maxWidth:r}=e,s={root:["root",r&&`maxWidth${(0,n.Z)(String(r))}`,o&&"fixed",i&&"disableGutters"]};return(0,l.Z)(s,(e=>(0,d.ZP)(t,e)),a)})(x,c);return(0,u.jsx)(m,(0,i.Z)({as:b,ownerState:x,className:(0,s.Z)(C.root,p),ref:t},f))}));return p}({createStyledComponent:(0,f.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`maxWidth${(0,Z.Z)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,x.Z)({props:e,name:"MuiContainer"})}),y=C},78821:(e,t,a)=>{a.d(t,{Z:()=>f});var o=a(55559),i=a(30984),r=a(66204),s=a(56317),n=a(58029),d=a(73330),l=a(61125),c=a(57369),m=a(42870),p=a(5429),u=a(81597),v=a(5524),b=a(481),g=a(43188);const h=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],Z=(0,l.ZP)(m.Z,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiListItemButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,i.Z)({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.Z.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${b.Z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${b.Z.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${b.Z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${b.Z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},"flex-start"===t.alignItems&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4}))),f=r.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiListItemButton"}),{alignItems:d="center",autoFocus:l=!1,component:m="div",children:f,dense:x=!1,disableGutters:C=!1,divider:y=!1,focusVisibleClassName:k,selected:w=!1,className:M}=a,$=(0,o.Z)(a,h),S=r.useContext(v.Z),R=r.useMemo((()=>({dense:x||S.dense||!1,alignItems:d,disableGutters:C})),[d,S.dense,x,C]),W=r.useRef(null);(0,p.Z)((()=>{l&&W.current&&W.current.focus()}),[l]);const G=(0,i.Z)({},a,{alignItems:d,dense:R.dense,disableGutters:C,divider:y,selected:w}),I=(e=>{const{alignItems:t,classes:a,dense:o,disabled:r,disableGutters:s,divider:d,selected:l}=e,c={root:["root",o&&"dense",!s&&"gutters",d&&"divider",r&&"disabled","flex-start"===t&&"alignItemsFlexStart",l&&"selected"]},m=(0,n.Z)(c,b.t,a);return(0,i.Z)({},a,m)})(G),O=(0,u.Z)(W,t);return(0,g.jsx)(v.Z.Provider,{value:R,children:(0,g.jsx)(Z,(0,i.Z)({ref:O,href:$.href||$.to,component:($.href||$.to)&&"div"===m?"button":m,focusVisibleClassName:(0,s.Z)(I.focusVisible,k),ownerState:G,className:(0,s.Z)(I.root,M)},$,{classes:I,children:f}))})}))}}]);
//# sourceMappingURL=5122.7df44ede.chunk.js.map