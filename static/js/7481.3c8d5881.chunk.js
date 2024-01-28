"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7481],{37481:(e,t,a)=>{a.r(t),a.d(t,{default:()=>H});var o=a(66204),n=a(80846),r=a(29520),l=a(62301),i=a(7146),s=a(43902),c=a(97916),d=a(93781),m=a(86636),p=a(98462),u=a(22499),Z=a(46194),v=a(60469),g=a(76744),y=a(49140),b=a(36349),h=a(14016),f=a(15971);const E=(0,n.observer)((function({rootModel:e,setIsAssemblyBeingEdited:t,setAssemblyBeingEdited:a}){const{assemblies:n}=e.jbrowse;return o.createElement(d.Z,{component:m.Z},o.createElement(p.Z,null,o.createElement(u.Z,null,o.createElement(Z.Z,null,o.createElement(v.Z,null,"Name"),o.createElement(v.Z,null,"Display name"),o.createElement(v.Z,null,"Aliases"),o.createElement(v.Z,null,"Actions"))),o.createElement(g.Z,null,n.map((n=>{const r=(0,b.readConfObject)(n,"name"),l=(0,b.readConfObject)(n,"displayName"),i=(0,b.readConfObject)(n,"aliases");return o.createElement(Z.Z,{key:r},o.createElement(v.Z,null,r),o.createElement(v.Z,null,l),o.createElement(v.Z,null,i?i.toString():""),o.createElement(v.Z,null,o.createElement(y.Z,{"data-testid":`${r}-edit`,onClick:()=>{t(!0),a(n)}},o.createElement(h.Z,{color:"primary"})),o.createElement(y.Z,{"data-testid":`${r}-delete`,onClick:()=>function(t){e.jbrowse.removeAssemblyConf(t)}(r)},o.createElement(f.Z,{color:"error"}))))})))))}));var w=a(46338),C=a(78781),x=a(93840);const S=(0,n.observer)((function({adapterSelection:e,setAdapterSelection:t,adapterTypes:a}){return o.createElement(w.Z,{value:e,label:"Type",select:!0,helperText:"Type of adapter to use",fullWidth:!0,onChange:e=>t(e.target.value)},a.map((e=>o.createElement(C.Z,{key:e,value:e},e))))})),T=(0,n.observer)((({adapterSelection:e,fastaLocation:t,setFastaLocation:a,faiLocation:n,setFaiLocation:r,gziLocation:l,setGziLocation:i,twoBitLocation:c,setTwoBitLocation:d,chromSizesLocation:m,setChromSizesLocation:p})=>"IndexedFastaAdapter"===e||"BgzipFastaAdapter"===e?o.createElement(x.ZP,{container:!0,spacing:2},o.createElement(x.ZP,{item:!0},o.createElement(s.FileSelector,{name:"fastaLocation",location:t,setLocation:e=>a(e)})),o.createElement(x.ZP,{item:!0},o.createElement(s.FileSelector,{name:"faiLocation",location:n,setLocation:e=>r(e)})),"BgzipFastaAdapter"===e?o.createElement(x.ZP,{item:!0},o.createElement(s.FileSelector,{name:"gziLocation",location:l,setLocation:e=>i(e)})):null):"TwoBitAdapter"===e?o.createElement(x.ZP,{container:!0,spacing:2},o.createElement(x.ZP,{item:!0},o.createElement(s.FileSelector,{name:"twoBitLocation",location:c,setLocation:e=>d(e)})),o.createElement(x.ZP,{item:!0},o.createElement(s.FileSelector,{name:"chromSizesLocation (optional, can be added to speed up loading 2bit files with many contigs)",location:m,setLocation:e=>p(e)}))):null)),k={uri:""},L=(0,n.observer)((function({rootModel:e,setFormOpen:t}){const a=["IndexedFastaAdapter","BgzipFastaAdapter","TwoBitAdapter"],[n,r]=(0,o.useState)(""),[l,s]=(0,o.useState)(""),[d,p]=(0,o.useState)(a[0]),[u,Z]=(0,o.useState)(k),[v,g]=(0,o.useState)(k),[y,b]=(0,o.useState)(k),[h,f]=(0,o.useState)(k),[E,C]=(0,o.useState)(k);return o.createElement("div",null,o.createElement(m.Z,null,o.createElement(w.Z,{id:"assembly-name",inputProps:{"data-testid":"assembly-name"},label:"Assembly name",helperText:"The assembly name e.g. hg38",variant:"outlined",value:n,onChange:e=>r(e.target.value)}),o.createElement(w.Z,{id:"assembly-name",inputProps:{"data-testid":"assembly-display-name"},label:"Assembly display name",helperText:'A human readable display name for the assembly e.g. "Homo sapiens (hg38)"',variant:"outlined",value:l,onChange:e=>s(e.target.value)}),o.createElement(S,{adapterSelection:d,setAdapterSelection:p,adapterTypes:a}),o.createElement(T,{adapterSelection:d,fastaLocation:u,setFastaLocation:Z,faiLocation:v,setFaiLocation:g,gziLocation:y,setGziLocation:b,twoBitLocation:h,setTwoBitLocation:f,chromSizesLocation:E,setChromSizesLocation:C})),o.createElement(i.Z,{variant:"contained",color:"secondary",startIcon:o.createElement(c.Z,null),onClick:function(){if(""===n)e.session.notify("Can't create an assembly without a name");else{let a;t(!1),"IndexedFastaAdapter"===d?a={name:n,displayName:l,sequence:{adapter:{type:"IndexedFastaAdapter",fastaLocation:u,faiLocation:v}}}:"BgzipFastaAdapter"===d?a={name:n,displayName:l,sequence:{adapter:{type:"BgzipFastaAdapter",fastaLocation:u,faiLocation:v,gziLocation:y}}}:"TwoBitAdapter"===d&&(a={name:n,displayName:l,sequence:{adapter:{type:"TwoBitAdapter",twoBitLocation:h,chromSizesLocation:E}}}),e.jbrowse.addAssemblyConf(a),e.session.notify(`Successfully added ${n} assembly to JBrowse 2`,"success")}}},"Create new assembly"))}));var z=a(43710);const A=(0,a(38684).ZL)()({container:{overflow:"auto",maxHeight:600}}),M=(0,n.observer)((function({assembly:e}){const{classes:t}=A();return o.createElement("div",{className:t.container},e?o.createElement(z.wP,{model:{target:e}}):o.createElement("div",null,"No assembly"))})),H=(0,n.observer)((function({rootModel:e,onClose:t}){const[a,n]=(0,o.useState)(!1),[d,m]=(0,o.useState)(!1),[p,u]=(0,o.useState)(),Z=!a&&!d;return o.createElement(s.Dialog,{open:!0,onClose:()=>t(!1),title:"Assembly manager"},o.createElement(r.Z,null,Z?o.createElement(E,{rootModel:e,setIsAssemblyBeingEdited:m,setAssemblyBeingEdited:u}):null,d?o.createElement(M,{assembly:p}):null,a?o.createElement(L,{rootModel:e,setFormOpen:n}):null),o.createElement(l.Z,null,a?o.createElement(i.Z,{variant:"contained",onClick:()=>n(!1)},"Back"):null,d?o.createElement(i.Z,{variant:"contained",onClick:()=>m(!1)},"Back"):null,Z?o.createElement(o.Fragment,null,o.createElement(i.Z,{color:"secondary",variant:"contained",onClick:()=>t(!1)},"Close"),o.createElement(i.Z,{variant:"contained",startIcon:o.createElement(c.Z,null),onClick:()=>n(!0)},"Add new assembly")):null))}))},14016:(e,t,a)=>{var o=a(57739);t.Z=void 0;var n=o(a(53948)),r=a(43188);t.Z=(0,n.default)((0,r.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Create")},15971:(e,t,a)=>{var o=a(57739);t.Z=void 0;var n=o(a(53948)),r=a(43188);t.Z=(0,n.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},98462:(e,t,a)=>{a.d(t,{Z:()=>g});var o=a(55559),n=a(30984),r=a(66204),l=a(56317),i=a(58029),s=a(85163),c=a(57369),d=a(61125),m=a(62695),p=a(43188);const u=["className","component","padding","size","stickyHeader"],Z=(0,d.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,n.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,n.Z)({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"}))),v="table",g=r.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiTable"}),{className:d,component:g=v,padding:y="normal",size:b="medium",stickyHeader:h=!1}=a,f=(0,o.Z)(a,u),E=(0,n.Z)({},a,{component:g,padding:y,size:b,stickyHeader:h}),w=(e=>{const{classes:t,stickyHeader:a}=e,o={root:["root",a&&"stickyHeader"]};return(0,i.Z)(o,m.K,t)})(E),C=r.useMemo((()=>({padding:y,size:b,stickyHeader:h})),[y,b,h]);return(0,p.jsx)(s.Z.Provider,{value:C,children:(0,p.jsx)(Z,(0,n.Z)({as:g,role:g===v?null:"table",ref:t,className:(0,l.Z)(w.root,d),ownerState:E},f))})}))},85163:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a(66204).createContext()},65238:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a(66204).createContext()},62695:(e,t,a)=>{a.d(t,{K:()=>r,Z:()=>l});var o=a(58109),n=a(95201);function r(e){return(0,n.ZP)("MuiTable",e)}const l=(0,o.Z)("MuiTable",["root","stickyHeader"])},76744:(e,t,a)=>{a.d(t,{Z:()=>y});var o=a(30984),n=a(55559),r=a(66204),l=a(56317),i=a(58029),s=a(65238),c=a(57369),d=a(61125),m=a(51927),p=a(43188);const u=["className","component"],Z=(0,d.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),v={variant:"body"},g="tbody",y=r.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiTableBody"}),{className:r,component:d=g}=a,y=(0,n.Z)(a,u),b=(0,o.Z)({},a,{component:d}),h=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},m.j,t)})(b);return(0,p.jsx)(s.Z.Provider,{value:v,children:(0,p.jsx)(Z,(0,o.Z)({className:(0,l.Z)(h.root,r),as:d,ref:t,role:d===g?null:"rowgroup",ownerState:b},y))})}))},51927:(e,t,a)=>{a.d(t,{Z:()=>l,j:()=>r});var o=a(58109),n=a(95201);function r(e){return(0,n.ZP)("MuiTableBody",e)}const l=(0,o.Z)("MuiTableBody",["root"])},60469:(e,t,a)=>{a.d(t,{Z:()=>b});var o=a(55559),n=a(30984),r=a(66204),l=a(56317),i=a(58029),s=a(73330),c=a(40118),d=a(85163),m=a(65238),p=a(57369),u=a(61125),Z=a(60614),v=a(43188);const g=["align","className","component","padding","scope","size","sortDirection","variant"],y=(0,u.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${(0,c.Z)(a.size)}`],"normal"!==a.padding&&t[`padding${(0,c.Z)(a.padding)}`],"inherit"!==a.align&&t[`align${(0,c.Z)(a.align)}`],a.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,n.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid\n    ${"light"===e.palette.mode?(0,s.$n)((0,s.Fq)(e.palette.divider,1),.88):(0,s._j)((0,s.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===t.variant&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:(e.vars||e).palette.text.primary},"footer"===t.variant&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",[`&.${Z.Z.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default}))),b=r.forwardRef((function(e,t){const a=(0,p.Z)({props:e,name:"MuiTableCell"}),{align:s="inherit",className:u,component:b,padding:h,scope:f,size:E,sortDirection:w,variant:C}=a,x=(0,o.Z)(a,g),S=r.useContext(d.Z),T=r.useContext(m.Z),k=T&&"head"===T.variant;let L;L=b||(k?"th":"td");let z=f;"td"===L?z=void 0:!z&&k&&(z="col");const A=C||T&&T.variant,M=(0,n.Z)({},a,{align:s,component:L,padding:h||(S&&S.padding?S.padding:"normal"),size:E||(S&&S.size?S.size:"medium"),sortDirection:w,stickyHeader:"head"===A&&S&&S.stickyHeader,variant:A}),H=(e=>{const{classes:t,variant:a,align:o,padding:n,size:r,stickyHeader:l}=e,s={root:["root",a,l&&"stickyHeader","inherit"!==o&&`align${(0,c.Z)(o)}`,"normal"!==n&&`padding${(0,c.Z)(n)}`,`size${(0,c.Z)(r)}`]};return(0,i.Z)(s,Z.U,t)})(M);let B=null;return w&&(B="asc"===w?"ascending":"descending"),(0,v.jsx)(y,(0,n.Z)({as:L,ref:t,className:(0,l.Z)(H.root,u),"aria-sort":B,scope:z,ownerState:M},x))}))},60614:(e,t,a)=>{a.d(t,{U:()=>r,Z:()=>l});var o=a(58109),n=a(95201);function r(e){return(0,n.ZP)("MuiTableCell",e)}const l=(0,o.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"])},93781:(e,t,a)=>{a.d(t,{Z:()=>Z});var o=a(30984),n=a(55559),r=a(66204),l=a(56317),i=a(58029),s=a(57369),c=a(61125),d=a(63408),m=a(43188);const p=["className","component"],u=(0,c.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),Z=r.forwardRef((function(e,t){const a=(0,s.Z)({props:e,name:"MuiTableContainer"}),{className:r,component:c="div"}=a,Z=(0,n.Z)(a,p),v=(0,o.Z)({},a,{component:c}),g=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},d.n,t)})(v);return(0,m.jsx)(u,(0,o.Z)({ref:t,as:c,className:(0,l.Z)(g.root,r),ownerState:v},Z))}))},63408:(e,t,a)=>{a.d(t,{Z:()=>l,n:()=>r});var o=a(58109),n=a(95201);function r(e){return(0,n.ZP)("MuiTableContainer",e)}const l=(0,o.Z)("MuiTableContainer",["root"])},22499:(e,t,a)=>{a.d(t,{Z:()=>y});var o=a(30984),n=a(55559),r=a(66204),l=a(56317),i=a(58029),s=a(65238),c=a(57369),d=a(61125),m=a(45458),p=a(43188);const u=["className","component"],Z=(0,d.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),v={variant:"head"},g="thead",y=r.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiTableHead"}),{className:r,component:d=g}=a,y=(0,n.Z)(a,u),b=(0,o.Z)({},a,{component:d}),h=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},m.s,t)})(b);return(0,p.jsx)(s.Z.Provider,{value:v,children:(0,p.jsx)(Z,(0,o.Z)({as:d,className:(0,l.Z)(h.root,r),ref:t,role:d===g?null:"rowgroup",ownerState:b},y))})}))},45458:(e,t,a)=>{a.d(t,{Z:()=>l,s:()=>r});var o=a(58109),n=a(95201);function r(e){return(0,n.ZP)("MuiTableHead",e)}const l=(0,o.Z)("MuiTableHead",["root"])},46194:(e,t,a)=>{a.d(t,{Z:()=>y});var o=a(30984),n=a(55559),r=a(66204),l=a(56317),i=a(58029),s=a(73330),c=a(65238),d=a(57369),m=a(61125),p=a(35467),u=a(43188);const Z=["className","component","hover","selected"],v=(0,m.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${p.Z.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${p.Z.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}}))),g="tr",y=r.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiTableRow"}),{className:s,component:m=g,hover:y=!1,selected:b=!1}=a,h=(0,n.Z)(a,Z),f=r.useContext(c.Z),E=(0,o.Z)({},a,{component:m,hover:y,selected:b,head:f&&"head"===f.variant,footer:f&&"footer"===f.variant}),w=(e=>{const{classes:t,selected:a,hover:o,head:n,footer:r}=e,l={root:["root",a&&"selected",o&&"hover",n&&"head",r&&"footer"]};return(0,i.Z)(l,p.G,t)})(E);return(0,u.jsx)(v,(0,o.Z)({as:m,ref:t,className:(0,l.Z)(w.root,s),role:m===g?null:"row",ownerState:E},h))}))},35467:(e,t,a)=>{a.d(t,{G:()=>r,Z:()=>l});var o=a(58109),n=a(95201);function r(e){return(0,n.ZP)("MuiTableRow",e)}const l=(0,o.Z)("MuiTableRow",["root","selected","hover","head","footer"])}}]);
//# sourceMappingURL=7481.3c8d5881.chunk.js.map