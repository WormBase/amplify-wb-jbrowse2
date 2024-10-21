"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9182],{11493:(e,o,a)=>{var t=a(92120);o.A=void 0;var r=t(a(33380)),n=a(69500);o.A=(0,r.default)((0,n.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check")},18619:(e,o,a)=>{var t=a(92120);o.A=void 0;var r=t(a(33380)),n=a(69500);o.A=(0,r.default)((0,n.jsx)("path",{d:"M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"}),"FilterList")},24455:(e,o,a)=>{var t=a(92120);o.A=void 0;var r=t(a(33380)),n=a(69500);o.A=(0,r.default)((0,n.jsx)("path",{d:"M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5m3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"}),"PermDataSetting")},33248:(e,o,a)=>{a.d(o,{A:()=>M});var t=a(83673),r=a(6614),n=a(7552),s=a(93878),c=a(70799),i=a(22991),l=a(15110),d=a(4785),u=a(74893),A=a(69500);const v=(0,u.A)((0,A.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),h=(0,u.A)((0,A.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var m=a(51148),p=a(55270);const f=(0,m.Ay)("span",{shouldForwardProp:p.A})({position:"relative",display:"flex"}),g=(0,m.Ay)(v)({transform:"scale(1)"}),b=(0,m.Ay)(h)((({theme:e,ownerState:o})=>(0,r.A)({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},o.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}))),S=function(e){const{checked:o=!1,classes:a={},fontSize:t}=e,n=(0,r.A)({},e,{checked:o});return(0,A.jsxs)(f,{className:a.root,ownerState:n,children:[(0,A.jsx)(g,{fontSize:t,className:a.background,ownerState:n}),(0,A.jsx)(b,{fontSize:t,className:a.dot,ownerState:n})]})};var w=a(15622),k=a(4402),C=a(39006),z=a(38127);const x=["checked","checkedIcon","color","icon","name","onChange","size","className"],y=(0,m.Ay)(l.A,{shouldForwardProp:e=>(0,p.A)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,"medium"!==a.size&&o[`size${(0,w.A)(a.size)}`],o[`color${(0,w.A)(a.color)}`]]}})((({theme:e,ownerState:o})=>(0,r.A)({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===o.color?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,i.X4)("default"===o.color?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&{[`&.${z.A.checked}`]:{color:(e.vars||e).palette[o.color].main}},{[`&.${z.A.disabled}`]:{color:(e.vars||e).palette.action.disabled}}))),R=(0,A.jsx)(S,{checked:!0}),j=(0,A.jsx)(S,{}),M=n.forwardRef((function(e,o){var a,i;const l=(0,d.b)({props:e,name:"MuiRadio"}),{checked:u,checkedIcon:v=R,color:h="primary",icon:m=j,name:p,onChange:f,size:g="medium",className:b}=l,S=(0,t.A)(l,x),M=(0,r.A)({},l,{color:h,size:g}),N=(e=>{const{classes:o,color:a,size:t}=e,n={root:["root",`color${(0,w.A)(a)}`,"medium"!==t&&`size${(0,w.A)(t)}`]};return(0,r.A)({},o,(0,c.A)(n,z.q,o))})(M),G=(0,C.A)();let $=u;const I=(0,k.A)(f,G&&G.onChange);let T=p;var L,P;return G&&(void 0===$&&(L=G.value,$="object"==typeof(P=l.value)&&null!==P?L===P:String(L)===String(P)),void 0===T&&(T=G.name)),(0,A.jsx)(y,(0,r.A)({type:"radio",icon:n.cloneElement(m,{fontSize:null!=(a=j.props.fontSize)?a:g}),checkedIcon:n.cloneElement(v,{fontSize:null!=(i=R.props.fontSize)?i:g}),ownerState:M,classes:N,name:T,checked:$,onChange:I,ref:o,className:(0,s.A)(N.root,b)},S))}))},38127:(e,o,a)=>{a.d(o,{A:()=>s,q:()=>n});var t=a(33761),r=a(85693);function n(e){return(0,r.Ay)("MuiRadio",e)}const s=(0,t.A)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"])},56089:(e,o,a)=>{a.d(o,{A:()=>p});var t=a(6614),r=a(83673),n=a(7552),s=a(93878),c=a(70799),i=a(83867),l=a(87625),d=a(51584),u=a(77259),A=a(76258),v=a(89456),h=a(69500);const m=["actions","children","className","defaultValue","name","onChange","value"],p=n.forwardRef((function(e,o){const{actions:a,children:p,className:f,defaultValue:g,name:b,onChange:S,value:w}=e,k=(0,r.A)(e,m),C=n.useRef(null),z=(e=>{const{classes:o,row:a,error:t}=e,r={root:["root",a&&"row",t&&"error"]};return(0,c.A)(r,l.B,o)})(e),[x,y]=(0,u.A)({controlled:w,default:g,name:"RadioGroup"});n.useImperativeHandle(a,(()=>({focus:()=>{let e=C.current.querySelector("input:not(:disabled):checked");e||(e=C.current.querySelector("input:not(:disabled)")),e&&e.focus()}})),[]);const R=(0,d.A)(o,C),j=(0,v.A)(b),M=n.useMemo((()=>({name:j,onChange(e){y(e.target.value),S&&S(e,e.target.value)},value:x})),[j,S,y,x]);return(0,h.jsx)(A.A.Provider,{value:M,children:(0,h.jsx)(i.A,(0,t.A)({role:"radiogroup",ref:R,className:(0,s.A)(z.root,f)},k,{children:p}))})}))},76258:(e,o,a)=>{a.d(o,{A:()=>t});const t=a(7552).createContext(void 0)},87625:(e,o,a)=>{a.d(o,{A:()=>s,B:()=>n});var t=a(33761),r=a(85693);function n(e){return(0,r.Ay)("MuiRadioGroup",e)}const s=(0,t.A)("MuiRadioGroup",["root","row","error"])},39006:(e,o,a)=>{a.d(o,{A:()=>n});var t=a(7552),r=a(76258);function n(){return t.useContext(r.A)}},17515:(e,o,a)=>{a.d(o,{A:()=>h});var t=a(83673),r=a(6614),n=a(7552),s=a(93878),c=a(70799),i=a(4785),l=a(51148),d=a(89663),u=a(69500);const A=["className","component","disableGutters","variant"],v=(0,l.Ay)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.root,!a.disableGutters&&o.gutters,o[a.variant]]}})((({theme:e,ownerState:o})=>(0,r.A)({position:"relative",display:"flex",alignItems:"center"},!o.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}},"dense"===o.variant&&{minHeight:48})),(({theme:e,ownerState:o})=>"regular"===o.variant&&e.mixins.toolbar)),h=n.forwardRef((function(e,o){const a=(0,i.b)({props:e,name:"MuiToolbar"}),{className:n,component:l="div",disableGutters:h=!1,variant:m="regular"}=a,p=(0,t.A)(a,A),f=(0,r.A)({},a,{component:l,disableGutters:h,variant:m}),g=(e=>{const{classes:o,disableGutters:a,variant:t}=e,r={root:["root",!a&&"gutters",t]};return(0,c.A)(r,d.U,o)})(f);return(0,u.jsx)(v,(0,r.A)({as:l,className:(0,s.A)(g.root,n),ref:o,ownerState:f},p))}))},89663:(e,o,a)=>{a.d(o,{A:()=>s,U:()=>n});var t=a(33761),r=a(85693);function n(e){return(0,r.Ay)("MuiToolbar",e)}const s=(0,t.A)("MuiToolbar",["root","gutters","regular","dense"])},86743:(e,o,a)=>{a.d(o,{A:()=>t});const t={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"}}}]);
//# sourceMappingURL=9182.dffaca4b.chunk.js.map