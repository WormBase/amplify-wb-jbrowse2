"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9805],{36539:(e,t,a)=>{var o=a(57739);t.Z=void 0;var i=o(a(53948)),s=a(43188),n=(0,i.default)((0,s.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");t.Z=n},2331:(e,t,a)=>{a.d(t,{Z:()=>v});var o=a(30984),i=a(55559),s=a(66204),n=a(56317),r=a(58029),d=a(61125),l=a(57369),c=a(86636),p=a(17352),u=a(43188);const m=["className","raised"],b=(0,d.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),v=s.forwardRef((function(e,t){const a=(0,l.Z)({props:e,name:"MuiCard"}),{className:s,raised:d=!1}=a,c=(0,i.Z)(a,m),v=(0,o.Z)({},a,{raised:d}),g=(e=>{const{classes:t}=e;return(0,r.Z)({root:["root"]},p.y,t)})(v);return(0,u.jsx)(b,(0,o.Z)({className:(0,n.Z)(g.root,s),elevation:d?8:void 0,ref:t,ownerState:v},c))}))},17352:(e,t,a)=>{a.d(t,{Z:()=>n,y:()=>s});var o=a(58109),i=a(95201);function s(e){return(0,i.Z)("MuiCard",e)}const n=(0,o.Z)("MuiCard",["root"])},69488:(e,t,a)=>{a.d(t,{Z:()=>g});var o=a(55559),i=a(30984),s=a(66204),n=a(56317),r=a(58029),d=a(57369),l=a(61125),c=a(34525),p=a(43188);const u=["children","className","component","image","src","style"],m=(0,l.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e,{isMediaComponent:o,isImageComponent:i}=a;return[t.root,o&&t.media,i&&t.img]}})((({ownerState:e})=>(0,i.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),b=["video","audio","picture","iframe","img"],v=["picture","img"],g=s.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiCardMedia"}),{children:s,className:l,component:g="div",image:Z,src:h,style:f}=a,x=(0,o.Z)(a,u),y=-1!==b.indexOf(g),C=!y&&Z?(0,i.Z)({backgroundImage:`url("${Z}")`},f):f,S=(0,i.Z)({},a,{component:g,isMediaComponent:y,isImageComponent:-1!==v.indexOf(g)}),I=(e=>{const{classes:t,isMediaComponent:a,isImageComponent:o}=e,i={root:["root",a&&"media",o&&"img"]};return(0,r.Z)(i,c.a,t)})(S);return(0,p.jsx)(m,(0,i.Z)({className:(0,n.Z)(I.root,l),as:g,role:!y&&Z?"img":void 0,ref:t,style:C,ownerState:S,src:y?Z||h:void 0},x,{children:s}))}))},34525:(e,t,a)=>{a.d(t,{Z:()=>n,a:()=>s});var o=a(58109),i=a(95201);function s(e){return(0,i.Z)("MuiCardMedia",e)}const n=(0,o.Z)("MuiCardMedia",["root","media","img"])},82051:(e,t,a)=>{a.d(t,{Z:()=>C});var o=a(55559),i=a(30984),s=a(66204),n=a(56317),r=a(46730),d=a(95201),l=a(58029),c=a(77877),p=a(605),u=a(71684),m=a(43188);const b=["className","component","disableGutters","fixed","maxWidth","classes"],v=(0,u.Z)(),g=(0,p.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`maxWidth${(0,r.Z)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),Z=e=>(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:v});var h=a(40118),f=a(61125),x=a(57369);const y=function(e={}){const{createStyledComponent:t=g,useThemeProps:a=Z,componentName:c="MuiContainer"}=e,p=t((({theme:e,ownerState:t})=>(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,a)=>{const o=a,i=e.breakpoints.values[o];return 0!==i&&(t[e.breakpoints.up(o)]={maxWidth:`${i}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,i.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),u=s.forwardRef((function(e,t){const s=a(e),{className:u,component:v="div",disableGutters:g=!1,fixed:Z=!1,maxWidth:h="lg"}=s,f=(0,o.Z)(s,b),x=(0,i.Z)({},s,{component:v,disableGutters:g,fixed:Z,maxWidth:h}),y=((e,t)=>{const{classes:a,fixed:o,disableGutters:i,maxWidth:s}=e,n={root:["root",s&&`maxWidth${(0,r.Z)(String(s))}`,o&&"fixed",i&&"disableGutters"]};return(0,l.Z)(n,(e=>(0,d.Z)(t,e)),a)})(x,c);return(0,m.jsx)(p,(0,i.Z)({as:v,ownerState:x,className:(0,n.Z)(y.root,u),ref:t},f))}));return u}({createStyledComponent:(0,f.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`maxWidth${(0,h.Z)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,x.Z)({props:e,name:"MuiContainer"})}),C=y},74780:(e,t,a)=>{a.d(t,{ZP:()=>w});var o=a(55559),i=a(30984),s=a(66204),n=a(56317),r=a(58029),d=a(54411),l=a(73330),c=a(61125),p=a(57369),u=a(42870),m=a(6842),b=a(5429),v=a(81597),g=a(5524),Z=a(30243),h=a(481),f=a(53292),x=a(43188);const y=["className"],C=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],S=(0,c.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]}})((({theme:e,ownerState:t})=>(0,i.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&(0,i.Z)({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${h.Z.root}`]:{paddingRight:48}},{[`&.${Z.Z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Z.Z.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Z.Z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Z.Z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"flex-start"===t.alignItems&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Z.Z.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48}))),I=(0,c.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),w=s.forwardRef((function(e,t){const a=(0,p.Z)({props:e,name:"MuiListItem"}),{alignItems:l="center",autoFocus:c=!1,button:h=!1,children:w,className:$,component:k,components:M={},componentsProps:G={},ContainerComponent:R="li",ContainerProps:{className:N}={},dense:O=!1,disabled:P=!1,disableGutters:A=!1,disablePadding:F=!1,divider:L=!1,focusVisibleClassName:j,secondaryAction:W,selected:V=!1,slotProps:B={},slots:T={}}=a,q=(0,o.Z)(a.ContainerProps,y),z=(0,o.Z)(a,C),D=s.useContext(g.Z),_=s.useMemo((()=>({dense:O||D.dense||!1,alignItems:l,disableGutters:A})),[l,D.dense,O,A]),X=s.useRef(null);(0,b.Z)((()=>{c&&X.current&&X.current.focus()}),[c]);const Y=s.Children.toArray(w),E=Y.length&&(0,m.Z)(Y[Y.length-1],["ListItemSecondaryAction"]),H=(0,i.Z)({},a,{alignItems:l,autoFocus:c,button:h,dense:_.dense,disabled:P,disableGutters:A,disablePadding:F,divider:L,hasSecondaryAction:E,selected:V}),J=(e=>{const{alignItems:t,button:a,classes:o,dense:i,disabled:s,disableGutters:n,disablePadding:d,divider:l,hasSecondaryAction:c,selected:p}=e,u={root:["root",i&&"dense",!n&&"gutters",!d&&"padding",l&&"divider",s&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",c&&"secondaryAction",p&&"selected"],container:["container"]};return(0,r.Z)(u,Z.o,o)})(H),K=(0,v.Z)(X,t),Q=T.root||M.Root||S,U=B.root||G.root||{},ee=(0,i.Z)({className:(0,n.Z)(J.root,U.className,$),disabled:P},z);let te=k||"li";return h&&(ee.component=k||"div",ee.focusVisibleClassName=(0,n.Z)(Z.Z.focusVisible,j),te=u.Z),E?(te=ee.component||k?te:"div","li"===R&&("li"===te?te="div":"li"===ee.component&&(ee.component="div")),(0,x.jsx)(g.Z.Provider,{value:_,children:(0,x.jsxs)(I,(0,i.Z)({as:R,className:(0,n.Z)(J.container,N),ref:K,ownerState:H},q,{children:[(0,x.jsx)(Q,(0,i.Z)({},U,!(0,d.X)(Q)&&{as:te,ownerState:(0,i.Z)({},H,U.ownerState)},ee,{children:Y})),Y.pop()]}))})):(0,x.jsx)(g.Z.Provider,{value:_,children:(0,x.jsxs)(Q,(0,i.Z)({},U,{as:te,ref:K},!(0,d.X)(Q)&&{ownerState:(0,i.Z)({},H,U.ownerState)},ee,{children:[Y,W&&(0,x.jsx)(f.Z,{children:W})]}))})}))},30243:(e,t,a)=>{a.d(t,{Z:()=>n,o:()=>s});var o=a(58109),i=a(95201);function s(e){return(0,i.Z)("MuiListItem",e)}const n=(0,o.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"])},78821:(e,t,a)=>{a.d(t,{Z:()=>f});var o=a(55559),i=a(30984),s=a(66204),n=a(56317),r=a(58029),d=a(73330),l=a(61125),c=a(57369),p=a(42870),u=a(5429),m=a(81597),b=a(5524),v=a(481),g=a(43188);const Z=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],h=(0,l.ZP)(p.Z,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiListItemButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,i.Z)({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${v.Z.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${v.Z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${v.Z.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${v.Z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${v.Z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},"flex-start"===t.alignItems&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4}))),f=s.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiListItemButton"}),{alignItems:d="center",autoFocus:l=!1,component:p="div",children:f,dense:x=!1,disableGutters:y=!1,divider:C=!1,focusVisibleClassName:S,selected:I=!1,className:w}=a,$=(0,o.Z)(a,Z),k=s.useContext(b.Z),M=s.useMemo((()=>({dense:x||k.dense||!1,alignItems:d,disableGutters:y})),[d,k.dense,x,y]),G=s.useRef(null);(0,u.Z)((()=>{l&&G.current&&G.current.focus()}),[l]);const R=(0,i.Z)({},a,{alignItems:d,dense:M.dense,disableGutters:y,divider:C,selected:I}),N=(e=>{const{alignItems:t,classes:a,dense:o,disabled:s,disableGutters:n,divider:d,selected:l}=e,c={root:["root",o&&"dense",!n&&"gutters",d&&"divider",s&&"disabled","flex-start"===t&&"alignItemsFlexStart",l&&"selected"]},p=(0,r.Z)(c,v.t,a);return(0,i.Z)({},a,p)})(R),O=(0,m.Z)(G,t);return(0,g.jsx)(b.Z.Provider,{value:M,children:(0,g.jsx)(h,(0,i.Z)({ref:O,href:$.href||$.to,component:($.href||$.to)&&"div"===p?"button":p,focusVisibleClassName:(0,n.Z)(N.focusVisible,S),ownerState:R,className:(0,n.Z)(N.root,w)},$,{classes:N,children:f}))})}))},481:(e,t,a)=>{a.d(t,{Z:()=>n,t:()=>s});var o=a(58109),i=a(95201);function s(e){return(0,i.Z)("MuiListItemButton",e)}const n=(0,o.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"])},53292:(e,t,a)=>{a.d(t,{Z:()=>g});var o=a(55559),i=a(30984),s=a(66204),n=a(56317),r=a(58029),d=a(61125),l=a(57369),c=a(5524),p=a(719),u=a(43188);const m=["className"],b=(0,d.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.disableGutters&&t.disableGutters]}})((({ownerState:e})=>(0,i.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0}))),v=s.forwardRef((function(e,t){const a=(0,l.Z)({props:e,name:"MuiListItemSecondaryAction"}),{className:d}=a,v=(0,o.Z)(a,m),g=s.useContext(c.Z),Z=(0,i.Z)({},a,{disableGutters:g.disableGutters}),h=(e=>{const{disableGutters:t,classes:a}=e,o={root:["root",t&&"disableGutters"]};return(0,r.Z)(o,p.A,a)})(Z);return(0,u.jsx)(b,(0,i.Z)({className:(0,n.Z)(h.root,d),ownerState:Z,ref:t},v))}));v.muiName="ListItemSecondaryAction";const g=v},719:(e,t,a)=>{a.d(t,{A:()=>s,Z:()=>n});var o=a(58109),i=a(95201);function s(e){return(0,i.Z)("MuiListItemSecondaryAction",e)}const n=(0,o.Z)("MuiListItemSecondaryAction",["root","disableGutters"])}}]);
//# sourceMappingURL=9805.c20d6c07.chunk.js.map