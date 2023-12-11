"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[8130],{28130:(e,n,t)=>{t.r(n),t.d(n,{default:()=>H});var r=t(41867),o=t(51590),a=t(23801),s=t(49133),i=t(78693),l=t(68367),c=t(81108),d=t(89170),u=t(47192),m=t(3762),g=t(31625),h=t(35421),p=t(90872),x=t(95460),v=t(64688),j=t(1259),Z=t(33065),f=t(77573),b=t(72280),y=t(22177),w=t(90947),k=t(55022),C=t(80838);const S=(0,r.lazy)((()=>t.e(4711).then(t.bind(t,14711)))),M=(0,u.ZL)()((()=>({lockedPluginTooltip:{marginRight:"0.5rem"}})));function F(){const{classes:e}=M();return(0,C.jsx)(f.Z,{className:e.lockedPluginTooltip,title:"This plugin was installed by an administrator, you cannot remove it.",children:(0,C.jsx)(w.Z,{})})}const P=(0,m.observer)((function(e){var n;let{plugin:t,model:a}=e;const[s,i]=(0,r.useState)(),{pluginManager:c}=(0,p.getEnv)(a),d=(0,p.getSession)(a),{jbrowse:u,adminMode:m}=d,g=!!(0,k.uF)(d)&&(null===(n=d.sessionPlugins)||void 0===n?void 0:n.some((e=>c.pluginMetadata[t.name].url===e.url)));return(0,C.jsxs)(C.Fragment,{children:[s?(0,C.jsx)(r.Suspense,{fallback:(0,C.jsx)(r.Fragment,{}),children:(0,C.jsx)(S,{plugin:s,onClose:e=>{if(e){const e=c.pluginMetadata[t.name];m?u.removePlugin(e):(0,k.uF)(d)&&d.removeSessionPlugin(e)}i(void 0)}})}):null,(0,C.jsxs)(b.ZP,{children:[m||g?(0,C.jsx)(l.Z,{"data-testid":"removePlugin-".concat(t.name),onClick:()=>i(t.name),children:(0,C.jsx)(y.Z,{})}):(0,C.jsx)(F,{}),(0,C.jsx)(o.Z,{children:t.name})]},t.name)]})})),L=(0,m.observer)((function(e){let{pluginManager:n,model:t}=e;const{plugins:r}=n,{filterText:a}=t,s=r.filter((e=>{var t;return!(null!==(t=n.pluginMetadata[e.name])&&void 0!==t&&t.isCore)}));return(0,C.jsx)(Z.Z,{children:s.length>0?s.filter((e=>e.name.toLowerCase().includes(a.toLowerCase()))).map((e=>(0,C.jsx)(P,{plugin:e,model:t},e.name))):(0,C.jsx)(o.Z,{children:"No plugins currently installed"})})}));var z=t(6743),T=t(45673),N=t(93989),I=t(61633),A=t(61446),D=t(36686),E=t(49553);const R=(0,u.ZL)()({card:{margin:"0.5em"},icon:{marginLeft:"0.5em",marginRight:"0.5em"},bold:{fontWeight:600},dataField:{display:"flex",alignItems:"center"}}),V=(0,m.observer)((function(e){let{plugin:n,model:t,adminMode:s}=e;const{classes:i}=R(),l=(0,p.getSession)(t),{pluginManager:c}=(0,p.getEnv)(t),{runtimePluginDefinitions:d}=c,u=d.some((e=>e.url===n.url)),[m,h]=(0,r.useState)(!1),x=u||m,v=(0,g.getParent)(t,3),{jbrowse:j}=v;return(0,C.jsxs)(z.Z,{variant:"outlined",className:i.card,children:[(0,C.jsxs)(T.Z,{children:[(0,C.jsx)(o.Z,{variant:"h5",children:(0,C.jsx)(N.Z,{href:"".concat(n.location,"#readme"),target:"_blank",rel:"noopener",children:n.name})}),(0,C.jsxs)("div",{className:i.dataField,children:[(0,C.jsx)(A.Z,{style:{marginRight:"0.5em"}}),(0,C.jsx)(o.Z,{children:n.authors.join(", ")})]}),(0,C.jsx)(o.Z,{className:i.bold,children:"Description:"}),(0,C.jsx)(o.Z,{children:n.description})]}),(0,C.jsx)(I.Z,{children:(0,C.jsx)(a.Z,{variant:"contained",disabled:x,startIcon:u?(0,C.jsx)(E.Z,{}):(0,C.jsx)(D.Z,{}),onClick:()=>{s?j.addPlugin({name:n.name,url:n.url}):(0,k.uF)(l)&&l.addSessionPlugin(n),h(!0)},children:u?"Installed":"Install"})})]},n.name)}));const B=(0,r.lazy)((()=>t.e(9322).then(t.bind(t,89322)))),W=(0,u.ZL)()((e=>({expandIcon:{color:e.palette.tertiary.contrastText},adminBadge:{borderRadius:3,backgroundColor:e.palette.quaternary.main,padding:"1em",display:"flex",alignContent:"center"},customPluginButton:{margin:"1em auto",display:"flex"}}))),H=(0,m.observer)((function(e){let{model:n}=e;const{classes:t}=W(),{plugins:u,error:m}=function(){const[e,n]=(0,r.useState)(),[t,o]=(0,r.useState)();return(0,r.useEffect)((()=>{(async()=>{try{const e=await fetch("https://jbrowse.org/plugin-store/plugins.json");if(!e.ok){const n=await e.text();throw new Error("HTTP ".concat(e.status," fetching plugins: ").concat(n))}const t=await e.json();n(t.plugins)}catch(e){console.error(e),o(e)}})()}),[]),{plugins:e,error:t}}(),[Z,f]=(0,r.useState)(!1),{adminMode:b}=(0,p.getSession)(n),{pluginManager:y}=(0,g.getEnv)(n);return(0,C.jsxs)("div",{children:[b&&(0,C.jsxs)(C.Fragment,{children:[!p.isElectron&&(0,C.jsxs)("div",{className:t.adminBadge,children:[(0,C.jsx)(j.Z,{style:{marginRight:"0.3em"}}),(0,C.jsxs)(o.Z,{children:["You are using the ",(0,C.jsx)("code",{children:"admin-server"}),". Any changes you make will be saved to your configuration file. You also have the ability to add custom plugins that are not in the store."]})]}),(0,C.jsx)(a.Z,{className:t.customPluginButton,variant:"contained",onClick:()=>f(!0),children:"Add custom plugin"}),Z?(0,C.jsx)(r.Suspense,{fallback:(0,C.jsx)(r.Fragment,{}),children:(0,C.jsx)(B,{onClose:()=>f(!1),model:n})}):null]}),(0,C.jsx)(s.Z,{label:"Filter plugins",value:n.filterText,onChange:e=>n.setFilterText(e.target.value),fullWidth:!0,InputProps:{endAdornment:(0,C.jsx)(i.Z,{position:"end",children:(0,C.jsx)(l.Z,{onClick:()=>n.clearFilterText(),children:(0,C.jsx)(v.Z,{})})})}}),(0,C.jsxs)(c.Z,{defaultExpanded:!0,children:[(0,C.jsx)(d.Z,{expandIcon:(0,C.jsx)(x.Z,{className:t.expandIcon}),children:(0,C.jsx)(o.Z,{variant:"h5",children:"Installed plugins"})}),(0,C.jsx)("div",{style:{margin:"1em"},children:(0,C.jsx)(L,{pluginManager:y,model:n})})]}),(0,C.jsxs)(c.Z,{defaultExpanded:!0,children:[(0,C.jsx)(d.Z,{expandIcon:(0,C.jsx)(x.Z,{className:t.expandIcon}),children:(0,C.jsx)(o.Z,{variant:"h5",children:"Available plugins"})}),m?(0,C.jsx)(o.Z,{color:"error",children:"".concat(m)}):u?u.filter((e=>!(p.isElectron&&e.cjsUrl)&&e.name.toLowerCase().includes(n.filterText.toLowerCase()))).map((e=>(0,C.jsx)(V,{plugin:e,model:n,adminMode:!!b},e.name))):(0,C.jsx)(h.LoadingEllipses,{})]})]})}))},49553:(e,n,t)=>{var r=t(71600);n.Z=void 0;var o=r(t(80337)),a=t(80838),s=(0,o.default)((0,a.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");n.Z=s},1259:(e,n,t)=>{var r=t(71600);n.Z=void 0;var o=r(t(80337)),a=t(80838),s=(0,o.default)((0,a.jsx)("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined");n.Z=s},90947:(e,n,t)=>{var r=t(71600);n.Z=void 0;var o=r(t(80337)),a=t(80838),s=(0,o.default)((0,a.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");n.Z=s},61446:(e,n,t)=>{var r=t(71600);n.Z=void 0;var o=r(t(80337)),a=t(80838),s=(0,o.default)((0,a.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");n.Z=s},93989:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(31461),o=t(7896),a=t(41867),s=t(66184),i=t(92705),l=t(9931),c=t(75693),d=t(90293),u=t(62643),m=t(40234),g=t(51590),h=t(31633),p=t(60183),x=t(71939);const v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=e=>{let{theme:n,ownerState:t}=e;const r=(e=>v[e]||e)(t.color),o=(0,p.DW)(n,"palette.".concat(r),!1)||t.color,a=(0,p.DW)(n,"palette.".concat(r,"Channel"));return"vars"in n&&a?"rgba(".concat(a," / 0.4)"):(0,x.Fq)(o,.4)};var Z=t(80838);const f=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],b=(0,c.ZP)(g.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n["underline".concat((0,l.Z)(t.underline))],"button"===t.component&&n.button]}})((e=>{let{theme:n,ownerState:t}=e;return(0,o.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:j({theme:n,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(h.Z.focusVisible)]:{outline:"auto"}})})),y=a.forwardRef((function(e,n){const t=(0,d.Z)({props:e,name:"MuiLink"}),{className:c,color:g="primary",component:p="a",onBlur:x,onFocus:j,TypographyClasses:y,underline:w="always",variant:k="inherit",sx:C}=t,S=(0,r.Z)(t,f),{isFocusVisibleRef:M,onBlur:F,onFocus:P,ref:L}=(0,u.Z)(),[z,T]=a.useState(!1),N=(0,m.Z)(n,L),I=(0,o.Z)({},t,{color:g,component:p,focusVisible:z,underline:w,variant:k}),A=(e=>{const{classes:n,component:t,focusVisible:r,underline:o}=e,a={root:["root","underline".concat((0,l.Z)(o)),"button"===t&&"button",r&&"focusVisible"]};return(0,i.Z)(a,h.w,n)})(I);return(0,Z.jsx)(b,(0,o.Z)({color:g,className:(0,s.Z)(A.root,c),classes:y,component:p,onBlur:e=>{F(e),!1===M.current&&T(!1),x&&x(e)},onFocus:e=>{P(e),!0===M.current&&T(!0),j&&j(e)},ref:N,ownerState:I,variant:k,sx:[...Object.keys(v).includes(g)?[]:[{color:g}],...Array.isArray(C)?C:[C]]},S))}))},31633:(e,n,t)=>{t.d(n,{Z:()=>s,w:()=>a});var r=t(70101),o=t(88498);function a(e){return(0,o.Z)("MuiLink",e)}const s=(0,r.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"])}}]);
//# sourceMappingURL=8130.f24bb207.chunk.js.map