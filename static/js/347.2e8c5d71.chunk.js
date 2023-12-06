"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[347,4334],{63754:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(66204),a=r(38684),o=r(72291);const l=(0,a.ZL)()((e=>({resizeBar:{background:e.palette.action.disabledBackground,height:12,position:"relative",overflow:"hidden"},tick:{position:"absolute",height:"100%",pointerEvents:"none",background:e.palette.action.disabled,width:1},hiddenTick:{position:"absolute",height:"100%",width:5}})));function i({left:e,scrollLeft:t,idx:r,onDrag:a,onMouseDown:i}){const{classes:s}=l(),c=(0,n.useCallback)(((e,t)=>a(e,t,r)),[r,a]);return n.createElement(n.Fragment,null,n.createElement(o.Z,{onDrag:c,onMouseDown:i,vertical:!0,className:s.hiddenTick,style:{left:e-t-2.5}}),n.createElement("div",{style:{left:e-t},className:s.tick}))}function s({widths:e,setWidths:t,checkbox:r,scrollLeft:a=0}){const{classes:o}=l(),s=[],[c,d]=(0,n.useState)();let m=r?52:0;for(let t=0;t<e.length;t++){const r=e[t];s[t]=r+m,m+=r}return n.createElement("div",{className:o.resizeBar},s.map(((r,o)=>n.createElement(i,{key:o,onMouseDown:()=>{d([...e])},left:o===s.length-1?r-3:r,onDrag:(r,n,a)=>{const o=[...e];o[a]=Math.max(c[a]-n,50),t(o)},idx:o,scrollLeft:a}))))}},77540:(e,t,r)=>{r.d(t,{x:()=>a});var n=r(66204);function a(){const e=(0,n.useRef)(null),[t,r]=(0,n.useState)(0);return(0,n.useEffect)((()=>{const t=setInterval((()=>{const t=e.current?.querySelector(".MuiDataGrid-virtualScroller");t&&r(t.scrollLeft)}),100);return()=>{clearInterval(t)}}),[]),{ref:e,scrollLeft:t}}},8420:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var n=r(66204),a=r(80846),o=r(32831),l=r(38684),i=r(66159),s=r(23155),c=r(42470),d=r(31211),m=r(3212),u=r(77540),h=r(63754);const v=(0,n.lazy)((()=>r.e(6710).then(r.bind(r,96710)))),g=(0,l.ZL)()((()=>({link:{cursor:"pointer"},cell:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}))),p=(0,a.observer)((function({model:e}){const{classes:t,cx:r}=g(),[a,o]=(0,n.useState)(),{ref:l,scrollLeft:p}=(0,u.x)(),{bookmarks:b,bookmarksWithValidAssemblies:f,selectedAssemblies:Z,selectedBookmarks:k}=e,y=(0,d.getSession)(e),w=new Set(Z),x=b.filter((e=>w.has(e.assemblyName))).map(((e,t)=>{const{assemblyName:r,...n}=e;return{...e,id:t,assemblyName:r,locString:(0,d.assembleLocString)(n),correspondingObj:e}})),[E,S]=(0,n.useState)([50,Math.max((0,d.measureText)("Bookmark link",12)+30,(0,d.measureGridWidth)(x.map((e=>e.locString)))),Math.max((0,d.measureText)("Label",12)+30,(0,d.measureGridWidth)(x.map((e=>e.label)))),Math.max((0,d.measureText)("Assembly",12)+30,(0,d.measureGridWidth)(x.map((e=>e.assemblyName))))]);return n.createElement(n.Fragment,null,n.createElement("div",{ref:l},n.createElement(h.Z,{widths:E,setWidths:S,scrollLeft:p}),n.createElement(s._$,{autoHeight:!0,density:"compact",rows:x,columns:[{...c.n,width:E[0]},{field:"locString",headerName:"Bookmark link",width:E[1],renderCell:({value:a,row:o})=>n.createElement(i.Z,{className:r(t.link,t.cell),href:"#",onClick:async t=>{t.preventDefault();const{views:r}=y;await(0,m.D6)(a,o.assemblyName,r,e)}},a)},{field:"label",headerName:"Label",width:E[2],editable:!0},{field:"assemblyName",headerName:"Assembly",width:E[3]}],onCellDoubleClick:({row:e})=>o(e),processRowUpdate:t=>{const r=x[t.id];return e.updateBookmarkLabel(r,t.label),t},onProcessRowUpdateError:e=>y.notify(e.message,"error"),checkboxSelection:!0,onRowSelectionModelChange:t=>{f.length>0&&e.setSelectedBookmarks(t.map((e=>({...x[e]}))))},rowSelectionModel:k.map((e=>e.id)),disableRowSelectionOnClick:!0})),a?n.createElement(n.Suspense,{fallback:n.createElement(n.Fragment,null)},n.createElement(v,{onClose:()=>o(void 0),model:e,dialogRow:a})):null)}));var b=r(7146),f=r(15971);const Z=(0,n.lazy)((()=>r.e(4282).then(r.bind(r,24282)))),k=function({model:e}){const[t,r]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement(b.Z,{startIcon:n.createElement(f.Z,null),"aria-label":"clear bookmarks",onClick:()=>r(!0)},"Delete"),t?n.createElement(n.Suspense,{fallback:n.createElement(n.Fragment,null)},n.createElement(Z,{model:e,onClose:()=>r(!1)})):null)};var y=r(8459);const w=(0,n.lazy)((()=>r.e(3206).then(r.bind(r,83206)))),x=(0,a.observer)((function({model:e}){const[t,r]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement(b.Z,{startIcon:n.createElement(y.Z,null),onClick:()=>r(!0),"data-testid":"export_button"},"Export"),t?n.createElement(n.Suspense,{fallback:n.createElement(n.Fragment,null)},n.createElement(w,{onClose:()=>r(!1),model:e})):null)}));var E=r(49084);const S=(0,n.lazy)((()=>Promise.all([r.e(1617),r.e(6259)]).then(r.bind(r,36259)))),C=(0,a.observer)((function({model:e}){const[t,r]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement(b.Z,{startIcon:n.createElement(E.Z,null),onClick:()=>r(!0)},"Import"),t?n.createElement(n.Suspense,{fallback:n.createElement(n.Fragment,null)},n.createElement(S,{onClose:()=>r(!1),model:e})):null)}));var O=r(94926),$=r(60962),R=r(32339),N=r(91906),M=r(78781),L=r(70539),D=r(36199);const z=(0,a.observer)((function({model:e}){const{validAssemblies:t,selectedAssemblies:r}=e,a=0===t.size,o="Select assemblies",l="select-assemblies-label",i=new Set(r),s=[...t].every((e=>i.has(e)));return n.createElement(O.Z,{disabled:a,fullWidth:!0},n.createElement($.Z,{id:l},o),n.createElement(R.Z,{labelId:l,multiple:!0,value:r,onChange:t=>e.setSelectedAssemblies([...t.target.value]),input:n.createElement(N.Z,{label:o}),renderValue:e=>e.join(", ")},n.createElement(M.Z,{onClickCapture:t=>{s?e.setSelectedAssemblies([]):e.setSelectedAssemblies(void 0),t.preventDefault()}},n.createElement(L.Z,{checked:s,indeterminate:!s&&r.length>0}),n.createElement(D.Z,{primary:"Select all"})),[...t].map((e=>n.createElement(M.Z,{key:e,value:e},n.createElement(L.Z,{checked:r.includes(e)}),n.createElement(D.Z,{primary:e}))))))}));var B=r(19609);const P=(0,n.lazy)((()=>r.e(7022).then(r.bind(r,87022)))),T=function({model:e}){const[t,r]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement(b.Z,{startIcon:n.createElement(B.pt,null),onClick:()=>r(!0)},"Share"),t?n.createElement(n.Suspense,{fallback:n.createElement(n.Fragment,null)},n.createElement(P,{onClose:()=>r(!1),model:e})):null)},A=(0,l.ZL)()({card:{marginTop:5}}),F=(0,a.observer)((function({model:e}){const{classes:t}=A();return e?n.createElement("div",{className:t.card},n.createElement("div",null,n.createElement(x,{model:e}),n.createElement(C,{model:e}),n.createElement(T,{model:e}),n.createElement(k,{model:e})),n.createElement(o.Z,{severity:"info"},"Click and type within the ",n.createElement("strong",null,"label")," field to annotate your bookmark. Double click the ",n.createElement("strong",null,"label")," field to do so within a dialog."),n.createElement(z,{model:e}),n.createElement(p,{model:e})):null}))},3212:(e,t,r)=>{r.d(t,{C3:()=>l,D6:()=>o,JY:()=>s,cD:()=>i});var n=r(78937),a=r(31211);async function o(e,t,r,n){const o=(0,a.getSession)(n);try{let a=r.find((e=>e.id===o.focusedViewId));if(a?.assemblyNames[0]!==t&&(a=r.find((e=>"LinearGenomeView"===e.type&&e.assemblyNames[0]===t))),!a){const e=`${n.id}_${t}`;a=o.addView("LinearGenomeView",{id:e})}await a.navToLocString(e,t)}catch(e){console.error(e),o.notify(`${e}`,"error")}}function l(e,t){const{selectedBookmarks:r,bookmarksWithValidAssemblies:o}=t,l=0===r.length?o:r;if("BED"===e){const e="",t={};l.forEach((e=>{const{label:r}=e,n=""===r?".":r,a=`${e.refName}\t${e.start}\t${e.end}\t${n}\n`;t[e.assemblyName]?t[e.assemblyName].push(a):t[e.assemblyName]=[a]}));for(const r in t){const a=t[r].reduce(((e,t)=>e+t),e),o=new Blob([a||""],{type:"text/x-bed;charset=utf-8"}),l=`jbrowse_bookmarks_${r}.bed`;(0,n.saveAs)(o,l)}}else{const e="chrom\tstart\tend\tlabel\tassembly_name\tcoord_range\n",t=l.map((e=>{const{label:t}=e,r=""===t?".":t,n=(0,a.assembleLocString)(e);return`${e.refName}\t${e.start+1}\t${e.end}\t${r}\t${e.assemblyName}\t${n}\n`})).reduce(((e,t)=>e+t),e),r=new Blob([t||""],{type:"text/tab-separated-values;charset=utf-8"}),o="jbrowse_bookmarks.tsv";(0,n.saveAs)(r,o)}}async function i(e){const t=function(e){let t=0;switch(e.length%4){case 3:t=1;break;case 2:t=2;break;case 0:t=0;break;default:throw new Error("base64 not a valid length")}return e+"=".repeat(t)}(e.replaceAll("-","+").replaceAll("_","/")),{toByteArray:n}=await Promise.resolve().then(r.t.bind(r,17086,19)),{inflate:a}=await r.e(6553).then(r.t.bind(r,96553,23)),o=a(n(t));return(new TextDecoder).decode(o)}async function s(e){const t=(new TextEncoder).encode(e),{deflate:n}=await r.e(6553).then(r.t.bind(r,96553,23)),{fromByteArray:a}=await Promise.resolve().then(r.t.bind(r,17086,19)),o=a(n(t)),l=o.indexOf("=");return l>0?o.slice(0,l).replaceAll("+","-").replaceAll("/","_"):o.replaceAll("+","-").replaceAll("/","_")}},6816:(e,t,r)=>{r.d(t,{d:()=>c});var n=r(66204),a=r(52682),o=r(76734),l=r(26074),i=r(43188);function s(e){return e.substring(2).toLowerCase()}function c(e){const{children:t,disableReactTree:r=!1,mouseEvent:c="onClick",onClickAway:d,touchEvent:m="onTouchEnd"}=e,u=n.useRef(!1),h=n.useRef(null),v=n.useRef(!1),g=n.useRef(!1);n.useEffect((()=>(setTimeout((()=>{v.current=!0}),0),()=>{v.current=!1})),[]);const p=(0,a.Z)(t.ref,h),b=(0,o.Z)((e=>{const t=g.current;g.current=!1;const n=(0,l.Z)(h.current);if(!v.current||!h.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,n))return;if(u.current)return void(u.current=!1);let a;a=e.composedPath?e.composedPath().indexOf(h.current)>-1:!n.documentElement.contains(e.target)||h.current.contains(e.target),a||!r&&t||d(e)})),f=e=>r=>{g.current=!0;const n=t.props[e];n&&n(r)},Z={ref:p};return!1!==m&&(Z[m]=f(m)),n.useEffect((()=>{if(!1!==m){const e=s(m),t=(0,l.Z)(h.current),r=()=>{u.current=!0};return t.addEventListener(e,b),t.addEventListener("touchmove",r),()=>{t.removeEventListener(e,b),t.removeEventListener("touchmove",r)}}}),[b,m]),!1!==c&&(Z[c]=f(c)),n.useEffect((()=>{if(!1!==c){const e=s(c),t=(0,l.Z)(h.current);return t.addEventListener(e,b),()=>{t.removeEventListener(e,b)}}}),[b,c]),(0,i.jsx)(n.Fragment,{children:n.cloneElement(t,Z)})}},15971:(e,t,r)=>{var n=r(57739);t.Z=void 0;var a=n(r(53948)),o=r(43188),l=(0,a.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=l},8459:(e,t,r)=>{var n=r(57739);t.Z=void 0;var a=n(r(53948)),o=r(43188),l=(0,a.default)((0,o.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"GetApp");t.Z=l},49084:(e,t,r)=>{var n=r(57739);t.Z=void 0;var a=n(r(53948)),o=r(43188),l=(0,a.default)((0,o.jsx)("path",{d:"M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"}),"Publish");t.Z=l},38465:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(55559),a=r(30984),o=r(66204),l=r(56317),i=r(56325),s=r(58029),c=r(42142),d=r(61125),m=r(57369),u=r(40118),h=r(81469),v=r(43188);const g=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],p=(0,d.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(e,t)=>t.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),b=(0,d.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.badge,t[r.variant],t[`anchorOrigin${(0,u.Z)(r.anchorOrigin.vertical)}${(0,u.Z)(r.anchorOrigin.horizontal)}${(0,u.Z)(r.overlap)}`],"default"!==r.color&&t[`color${(0,u.Z)(r.color)}`],r.invisible&&t.invisible]}})((({theme:e,ownerState:t})=>(0,a.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen})},"default"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].main,color:(e.vars||e).palette[t.color].contrastText},"dot"===t.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${h.Z.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},t.invisible&&{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})}))),f=o.forwardRef((function(e,t){var r,o,d,f,Z,k;const y=(0,m.Z)({props:e,name:"MuiBadge"}),{anchorOrigin:w={vertical:"top",horizontal:"right"},className:x,component:E,components:S={},componentsProps:C={},children:O,overlap:$="rectangular",color:R="default",invisible:N=!1,max:M=99,badgeContent:L,slots:D,slotProps:z,showZero:B=!1,variant:P="standard"}=y,T=(0,n.Z)(y,g),{badgeContent:A,invisible:F,max:V,displayValue:W}=function(e){const{badgeContent:t,invisible:r=!1,max:n=99,showZero:a=!1}=e,o=(0,i.Z)({badgeContent:t,max:n});let l=r;!1!==r||0!==t||a||(l=!0);const{badgeContent:s,max:c=n}=l?o:e;return{badgeContent:s,invisible:l,max:c,displayValue:s&&Number(s)>c?`${c}+`:s}}({max:M,invisible:N,badgeContent:L,showZero:B}),j=(0,i.Z)({anchorOrigin:w,color:R,overlap:$,variant:P,badgeContent:L}),I=F||null==A&&"dot"!==P,{color:_=R,overlap:G=$,anchorOrigin:H=w,variant:q=P}=I?j:y,U="dot"!==q?W:void 0,X=(0,a.Z)({},y,{badgeContent:A,invisible:I,max:V,displayValue:U,showZero:B,anchorOrigin:H,color:_,overlap:G,variant:q}),Y=(e=>{const{color:t,anchorOrigin:r,invisible:n,overlap:a,variant:o,classes:l={}}=e,i={root:["root"],badge:["badge",o,n&&"invisible",`anchorOrigin${(0,u.Z)(r.vertical)}${(0,u.Z)(r.horizontal)}`,`anchorOrigin${(0,u.Z)(r.vertical)}${(0,u.Z)(r.horizontal)}${(0,u.Z)(a)}`,`overlap${(0,u.Z)(a)}`,"default"!==t&&`color${(0,u.Z)(t)}`]};return(0,s.Z)(i,h.I,l)})(X),J=null!=(r=null!=(o=null==D?void 0:D.root)?o:S.Root)?r:p,K=null!=(d=null!=(f=null==D?void 0:D.badge)?f:S.Badge)?d:b,Q=null!=(Z=null==z?void 0:z.root)?Z:C.root,ee=null!=(k=null==z?void 0:z.badge)?k:C.badge,te=(0,c.y)({elementType:J,externalSlotProps:Q,externalForwardedProps:T,additionalProps:{ref:t,as:E},ownerState:X,className:(0,l.Z)(null==Q?void 0:Q.className,Y.root,x)}),re=(0,c.y)({elementType:K,externalSlotProps:ee,ownerState:X,className:(0,l.Z)(Y.badge,null==ee?void 0:ee.className)});return(0,v.jsxs)(J,(0,a.Z)({},te,{children:[O,(0,v.jsx)(K,(0,a.Z)({},re,{children:U}))]}))}))},81469:(e,t,r)=>{r.d(t,{I:()=>o,Z:()=>l});var n=r(58109),a=r(95201);function o(e){return(0,a.Z)("MuiBadge",e)}const l=(0,n.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])},10126:(e,t,r)=>{r.d(t,{Z:()=>S});var n=r(55559),a=r(30984),o=r(66204),l=r(56317),i=r(58029),s=r(71580),c=r(40118),d=r(57369),m=r(61125),u=r(22489),h=r(43188);const v=["className","color","disableShrink","size","style","thickness","value","variant"];let g,p,b,f,Z=e=>e;const k=(0,s.F4)(g||(g=Z`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),y=(0,s.F4)(p||(p=Z`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),w=(0,m.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,a.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,s.iv)(b||(b=Z`
      animation: ${0} 1.4s linear infinite;
    `),k))),x=(0,m.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),E=(0,m.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,c.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,a.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,s.iv)(f||(f=Z`
      animation: ${0} 1.4s ease-in-out infinite;
    `),y))),S=o.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:o,color:s="primary",disableShrink:m=!1,size:g=40,style:p,thickness:b=3.6,value:f=0,variant:Z="indeterminate"}=r,k=(0,n.Z)(r,v),y=(0,a.Z)({},r,{color:s,disableShrink:m,size:g,thickness:b,value:f,variant:Z}),S=(e=>{const{classes:t,variant:r,color:n,disableShrink:a}=e,o={root:["root",r,`color${(0,c.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(r)}`,a&&"circleDisableShrink"]};return(0,i.Z)(o,u.C,t)})(y),C={},O={},$={};if("determinate"===Z){const e=2*Math.PI*((44-b)/2);C.strokeDasharray=e.toFixed(3),$["aria-valuenow"]=Math.round(f),C.strokeDashoffset=`${((100-f)/100*e).toFixed(3)}px`,O.transform="rotate(-90deg)"}return(0,h.jsx)(w,(0,a.Z)({className:(0,l.Z)(S.root,o),style:(0,a.Z)({width:g,height:g},O,p),ownerState:y,ref:t,role:"progressbar"},$,k,{children:(0,h.jsx)(x,{className:S.svg,ownerState:y,viewBox:"22 22 44 44",children:(0,h.jsx)(E,{className:S.circle,style:C,ownerState:y,cx:44,cy:44,r:(44-b)/2,fill:"none",strokeWidth:b})})}))}))},22489:(e,t,r)=>{r.d(t,{C:()=>o,Z:()=>l});var n=r(58109),a=r(95201);function o(e){return(0,a.Z)("MuiCircularProgress",e)}const l=(0,n.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},66159:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(55559),a=r(30984),o=r(66204),l=r(56317),i=r(58029),s=r(40118),c=r(61125),d=r(57369),m=r(71948),u=r(81597),h=r(80013),v=r(29110),g=r(4860),p=r(73330);const b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},f=({theme:e,ownerState:t})=>{const r=(e=>b[e]||e)(t.color),n=(0,g.DW)(e,`palette.${r}`,!1)||t.color,a=(0,g.DW)(e,`palette.${r}Channel`);return"vars"in e&&a?`rgba(${a} / 0.4)`:(0,p.Fq)(n,.4)};var Z=r(43188);const k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],y=(0,c.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`underline${(0,s.Z)(r.underline)}`],"button"===r.component&&t.button]}})((({theme:e,ownerState:t})=>(0,a.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,a.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:f({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${v.Z.focusVisible}`]:{outline:"auto"}}))),w=o.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiLink"}),{className:c,color:h="primary",component:g="a",onBlur:p,onFocus:f,TypographyClasses:w,underline:x="always",variant:E="inherit",sx:S}=r,C=(0,n.Z)(r,k),{isFocusVisibleRef:O,onBlur:$,onFocus:R,ref:N}=(0,m.Z)(),[M,L]=o.useState(!1),D=(0,u.Z)(t,N),z=(0,a.Z)({},r,{color:h,component:g,focusVisible:M,underline:x,variant:E}),B=(e=>{const{classes:t,component:r,focusVisible:n,underline:a}=e,o={root:["root",`underline${(0,s.Z)(a)}`,"button"===r&&"button",n&&"focusVisible"]};return(0,i.Z)(o,v.w,t)})(z);return(0,Z.jsx)(y,(0,a.Z)({color:h,className:(0,l.Z)(B.root,c),classes:w,component:g,onBlur:e=>{$(e),!1===O.current&&L(!1),p&&p(e)},onFocus:e=>{R(e),!0===O.current&&L(!0),f&&f(e)},ref:D,ownerState:z,variant:E,sx:[...Object.keys(b).includes(h)?[]:[{color:h}],...Array.isArray(S)?S:[S]]},C))}))},29110:(e,t,r)=>{r.d(t,{Z:()=>l,w:()=>o});var n=r(58109),a=r(95201);function o(e){return(0,a.Z)("MuiLink",e)}const l=(0,n.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"])},96987:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(55559),a=r(30984),o=r(66204),l=r(56317),i=r(58029),s=r(57369),c=r(61125),d=r(41666),m=r(43188);const u=["className","component","disableGutters","variant"],h=(0,c.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disableGutters&&t.gutters,t[r.variant]]}})((({theme:e,ownerState:t})=>(0,a.Z)({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}},"dense"===t.variant&&{minHeight:48})),(({theme:e,ownerState:t})=>"regular"===t.variant&&e.mixins.toolbar)),v=o.forwardRef((function(e,t){const r=(0,s.Z)({props:e,name:"MuiToolbar"}),{className:o,component:c="div",disableGutters:v=!1,variant:g="regular"}=r,p=(0,n.Z)(r,u),b=(0,a.Z)({},r,{component:c,disableGutters:v,variant:g}),f=(e=>{const{classes:t,disableGutters:r,variant:n}=e,a={root:["root",!r&&"gutters",n]};return(0,i.Z)(a,d.N,t)})(b);return(0,m.jsx)(h,(0,a.Z)({as:c,className:(0,l.Z)(f.root,o),ref:t,ownerState:b},p))}))},41666:(e,t,r)=>{r.d(t,{N:()=>o,Z:()=>l});var n=r(58109),a=r(95201);function o(e){return(0,a.Z)("MuiToolbar",e)}const l=(0,n.Z)("MuiToolbar",["root","gutters","regular","dense"])}}]);
//# sourceMappingURL=347.2e8c5d71.chunk.js.map