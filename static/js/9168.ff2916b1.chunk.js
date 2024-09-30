"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9168],{29168:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var a=r(7552),n=r(63011),o=r(41578),i=r(36715),s=r(1773),l=r(25355),c=r(75785),d=r(68446),u=r(6212);const m=(0,d.observer)((function({job:e}){return a.createElement(s.A,{variant:"outlined"},a.createElement(l.A,null,a.createElement(i.A,{variant:"body1"},a.createElement("strong",null,"Name: "),e.name),e.statusMessage?a.createElement(i.A,{variant:"body1"},a.createElement("strong",null,"Message: "),e.statusMessage):null))}));var b=r(82857),p=r(84421),f=r(71379),A=r(5401);const v=(0,d.observer)((function({job:e}){const[t,r]=(0,a.useState)(!1);return a.createElement(s.A,{variant:"outlined"},a.createElement(l.A,null,a.createElement(i.A,{variant:"body1"},a.createElement("strong",null,"Name: "),e.name),a.createElement(i.A,{variant:"body1"},a.createElement("strong",null,"Message: "),e.statusMessage||"No message provided"),a.createElement(b.A,{sx:{display:"flex",alignItems:"center",marginTop:10,marginBottom:10,marginLeft:10}},0===e.progressPct||100===e.progressPct?a.createElement(b.A,{sx:{width:"100%"}},a.createElement(p.A,{variant:"indeterminate"})):a.createElement(a.Fragment,null,a.createElement(b.A,{sx:{width:"100%"}},a.createElement(p.A,{variant:"determinate",value:e.progressPct})),a.createElement(b.A,{sx:{m:1}},a.createElement(i.A,null,`${Math.round(e.progressPct||0)}%`))))),e.cancelCallback?a.createElement(f.A,null,a.createElement(A.A,{variant:"contained",color:"inherit",disabled:t||0===e.progressPct,onClick:()=>{e.setStatusMessage("Aborted via cancel button"),e.cancelCallback&&e.cancelCallback(),r(!0)}},"Cancel")):null)})),g=(0,c.n9)()((e=>({root:{margin:e.spacing(1)},expandIcon:{color:e.palette.tertiary.contrastText}}))),h=(0,d.observer)((function({model:e}){const{classes:t}=g(),{jobs:r,finished:c,queued:d,aborted:b}=e;return a.createElement("div",{className:t.root},a.createElement(n.A,{defaultExpanded:!0},a.createElement(o.A,{expandIcon:a.createElement(u.A,{className:t.expandIcon})},a.createElement(i.A,{variant:"h5"},"Running jobs")),r.length?r.map(((e,t)=>a.createElement(v,{job:e,key:`${JSON.stringify(e)}-${t}`}))):a.createElement(s.A,{variant:"outlined"},a.createElement(l.A,null,a.createElement(i.A,{variant:"body1"},"No running jobs")))),a.createElement(n.A,{defaultExpanded:!0},a.createElement(o.A,{expandIcon:a.createElement(u.A,{className:t.expandIcon})},a.createElement(i.A,{variant:"h5"},"Queued jobs")),d.length?d.map(((e,t)=>a.createElement(m,{job:e,key:`${JSON.stringify(e)}-${t}`}))):a.createElement(s.A,{variant:"outlined"},a.createElement(l.A,null,a.createElement(i.A,{variant:"body1"},"No queued jobs")))),a.createElement(n.A,{defaultExpanded:!0},a.createElement(o.A,{expandIcon:a.createElement(u.A,{className:t.expandIcon})},a.createElement(i.A,{variant:"h5"},"Completed jobs")),c.length?c.map(((e,t)=>a.createElement(m,{key:`${JSON.stringify(e)}-${t}`,job:e}))):a.createElement(s.A,{variant:"outlined"},a.createElement(l.A,null,a.createElement(i.A,{variant:"body1"},"No completed jobs")))),a.createElement(n.A,{defaultExpanded:!0},a.createElement(o.A,{expandIcon:a.createElement(u.A,{className:t.expandIcon})},a.createElement(i.A,{variant:"h5"},"Aborted jobs")),b.length?b.map(((e,t)=>a.createElement(m,{key:`${JSON.stringify(e)}-${t}`,job:e}))):a.createElement(s.A,{variant:"outlined"},a.createElement(l.A,null,a.createElement(i.A,{variant:"body1"},"No aborted jobs")))))}))},6212:(e,t,r)=>{var a=r(92120);t.A=void 0;var n=a(r(33380)),o=r(69500);t.A=(0,n.default)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},41578:(e,t,r)=>{r.d(t,{A:()=>x});var a=r(6614),n=r(83673),o=r(7552),i=r(93878),s=r(70799),l=r(51148),c=r(4785),d=r(83159),u=r(51132),m=r(33761),b=r(85693);function p(e){return(0,b.Ay)("MuiAccordionSummary",e)}const f=(0,m.A)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);var A=r(69500);const v=["children","className","expandIcon","focusVisibleClassName","onClick"],g=(0,l.Ay)(d.A,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],t),[`&.${f.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${f.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${f.disabled})`]:{cursor:"pointer"},variants:[{props:e=>!e.disableGutters,style:{[`&.${f.expanded}`]:{minHeight:64}}}]}})),h=(0,l.Ay)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})((({theme:e})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:e=>!e.disableGutters,style:{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${f.expanded}`]:{margin:"20px 0"}}}]}))),y=(0,l.Ay)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})((({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${f.expanded}`]:{transform:"rotate(180deg)"}}))),x=o.forwardRef((function(e,t){const r=(0,c.b)({props:e,name:"MuiAccordionSummary"}),{children:l,className:d,expandIcon:m,focusVisibleClassName:b,onClick:f}=r,x=(0,n.A)(r,v),{disabled:E=!1,disableGutters:C,expanded:w,toggle:S}=o.useContext(u.A),N=(0,a.A)({},r,{expanded:w,disabled:E,disableGutters:C}),M=(e=>{const{classes:t,expanded:r,disabled:a,disableGutters:n}=e,o={root:["root",r&&"expanded",a&&"disabled",!n&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!n&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]};return(0,s.A)(o,p,t)})(N);return(0,A.jsxs)(g,(0,a.A)({focusRipple:!1,disableRipple:!0,disabled:E,component:"div","aria-expanded":w,className:(0,i.A)(M.root,d),focusVisibleClassName:(0,i.A)(M.focusVisible,b),onClick:e=>{S&&S(e),f&&f(e)},ref:t,ownerState:N},x,{children:[(0,A.jsx)(h,{className:M.content,ownerState:N,children:l}),m&&(0,A.jsx)(y,{className:M.expandIconWrapper,ownerState:N,children:m})]}))}))},1773:(e,t,r)=>{r.d(t,{A:()=>f});var a=r(6614),n=r(83673),o=r(7552),i=r(93878),s=r(70799),l=r(51148),c=r(4785),d=r(943),u=r(50885),m=r(69500);const b=["className","raised"],p=(0,l.Ay)(d.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),f=o.forwardRef((function(e,t){const r=(0,c.b)({props:e,name:"MuiCard"}),{className:o,raised:l=!1}=r,d=(0,n.A)(r,b),f=(0,a.A)({},r,{raised:l}),A=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},u.T,t)})(f);return(0,m.jsx)(p,(0,a.A)({className:(0,i.A)(A.root,o),elevation:l?8:void 0,ref:t,ownerState:f},d))}))},50885:(e,t,r)=>{r.d(t,{A:()=>i,T:()=>o});var a=r(33761),n=r(85693);function o(e){return(0,n.Ay)("MuiCard",e)}const i=(0,a.A)("MuiCard",["root"])},71379:(e,t,r)=>{r.d(t,{A:()=>p});var a=r(83673),n=r(6614),o=r(7552),i=r(93878),s=r(70799),l=r(51148),c=r(4785),d=r(93863),u=r(69500);const m=["disableSpacing","className"],b=(0,l.Ay)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disableSpacing&&t.spacing]}})((({ownerState:e})=>(0,n.A)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}}))),p=o.forwardRef((function(e,t){const r=(0,c.b)({props:e,name:"MuiCardActions"}),{disableSpacing:o=!1,className:l}=r,p=(0,a.A)(r,m),f=(0,n.A)({},r,{disableSpacing:o}),A=(e=>{const{classes:t,disableSpacing:r}=e,a={root:["root",!r&&"spacing"]};return(0,s.A)(a,d.E,t)})(f);return(0,u.jsx)(b,(0,n.A)({className:(0,i.A)(A.root,l),ownerState:f,ref:t},p))}))},93863:(e,t,r)=>{r.d(t,{A:()=>i,E:()=>o});var a=r(33761),n=r(85693);function o(e){return(0,n.Ay)("MuiCardActions",e)}const i=(0,a.A)("MuiCardActions",["root","spacing"])},25355:(e,t,r)=>{r.d(t,{A:()=>p});var a=r(6614),n=r(83673),o=r(7552),i=r(93878),s=r(70799),l=r(51148),c=r(4785),d=r(61823),u=r(69500);const m=["className","component"],b=(0,l.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),p=o.forwardRef((function(e,t){const r=(0,c.b)({props:e,name:"MuiCardContent"}),{className:o,component:l="div"}=r,p=(0,n.A)(r,m),f=(0,a.A)({},r,{component:l}),A=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},d.h,t)})(f);return(0,u.jsx)(b,(0,a.A)({as:l,className:(0,i.A)(A.root,o),ownerState:f,ref:t},p))}))},61823:(e,t,r)=>{r.d(t,{A:()=>i,h:()=>o});var a=r(33761),n=r(85693);function o(e){return(0,n.Ay)("MuiCardContent",e)}const i=(0,a.A)("MuiCardContent",["root"])},84421:(e,t,r)=>{r.d(t,{A:()=>R});var a=r(83673),n=r(6614),o=r(7552),i=r(93878),s=r(70799),l=r(64761),c=r(22991),d=r(23456),u=r(15622),m=r(51148),b=r(4785),p=r(50077),f=r(69500);const A=["className","color","value","valueBuffer","variant"];let v,g,h,y,x,E,C=e=>e;const w=(0,l.i7)(v||(v=C`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),S=(0,l.i7)(g||(g=C`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),N=(0,l.i7)(h||(h=C`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),M=(e,t)=>"inherit"===t?"currentColor":e.vars?e.vars.palette.LinearProgress[`${t}Bg`]:"light"===e.palette.mode?(0,c.a)(e.palette[t].main,.62):(0,c.e$)(e.palette[t].main,.5),$=(0,m.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`color${(0,u.A)(r.color)}`],t[r.variant]]}})((({ownerState:e,theme:t})=>(0,n.A)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:M(t,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"}))),k=(0,m.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.dashed,t[`dashedColor${(0,u.A)(r.color)}`]]}})((({ownerState:e,theme:t})=>{const r=M(t,e.color);return(0,n.A)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.AH)(y||(y=C`
    animation: ${0} 3s infinite linear;
  `),N)),j=(0,m.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.bar,t[`barColor${(0,u.A)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&t.bar1Indeterminate,"determinate"===r.variant&&t.bar1Determinate,"buffer"===r.variant&&t.bar1Buffer]}})((({ownerState:e,theme:t})=>(0,n.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":(t.vars||t).palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,l.AH)(x||(x=C`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),w))),I=(0,m.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.bar,t[`barColor${(0,u.A)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&t.bar2Indeterminate,"buffer"===r.variant&&t.bar2Buffer]}})((({ownerState:e,theme:t})=>(0,n.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":(t.vars||t).palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:M(t,e.color),transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,l.AH)(E||(E=C`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),S))),R=o.forwardRef((function(e,t){const r=(0,b.b)({props:e,name:"MuiLinearProgress"}),{className:o,color:l="primary",value:c,valueBuffer:m,variant:v="indeterminate"}=r,g=(0,a.A)(r,A),h=(0,n.A)({},r,{color:l,variant:v}),y=(e=>{const{classes:t,variant:r,color:a}=e,n={root:["root",`color${(0,u.A)(a)}`,r],dashed:["dashed",`dashedColor${(0,u.A)(a)}`],bar1:["bar",`barColor${(0,u.A)(a)}`,("indeterminate"===r||"query"===r)&&"bar1Indeterminate","determinate"===r&&"bar1Determinate","buffer"===r&&"bar1Buffer"],bar2:["bar","buffer"!==r&&`barColor${(0,u.A)(a)}`,"buffer"===r&&`color${(0,u.A)(a)}`,("indeterminate"===r||"query"===r)&&"bar2Indeterminate","buffer"===r&&"bar2Buffer"]};return(0,s.A)(n,p.l,t)})(h),x=(0,d.I)(),E={},C={bar1:{},bar2:{}};if(("determinate"===v||"buffer"===v)&&void 0!==c){E["aria-valuenow"]=Math.round(c),E["aria-valuemin"]=0,E["aria-valuemax"]=100;let e=c-100;x&&(e=-e),C.bar1.transform=`translateX(${e}%)`}if("buffer"===v&&void 0!==m){let e=(m||0)-100;x&&(e=-e),C.bar2.transform=`translateX(${e}%)`}return(0,f.jsxs)($,(0,n.A)({className:(0,i.A)(y.root,o),ownerState:h,role:"progressbar"},E,{ref:t},g,{children:["buffer"===v?(0,f.jsx)(k,{className:y.dashed,ownerState:h}):null,(0,f.jsx)(j,{className:y.bar1,ownerState:h,style:C.bar1}),"determinate"===v?null:(0,f.jsx)(I,{className:y.bar2,ownerState:h,style:C.bar2})]}))}))},50077:(e,t,r)=>{r.d(t,{A:()=>i,l:()=>o});var a=r(33761),n=r(85693);function o(e){return(0,n.Ay)("MuiLinearProgress",e)}const i=(0,a.A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"])}}]);
//# sourceMappingURL=9168.ff2916b1.chunk.js.map