"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[1408],{63754:(e,t,l)=>{l.d(t,{Z:()=>i});var a=l(66204),n=l(38684),s=l(72291);const o=(0,n.ZL)()((e=>({resizeBar:{background:e.palette.action.disabledBackground,height:12,position:"relative",overflow:"hidden"},tick:{position:"absolute",height:"100%",pointerEvents:"none",background:e.palette.action.disabled,width:1},hiddenTick:{position:"absolute",height:"100%",width:5}})));function r({left:e,scrollLeft:t,idx:l,onDrag:n,onMouseDown:r}){const{classes:i}=o(),c=(0,a.useCallback)(((e,t)=>n(e,t,l)),[l,n]);return a.createElement(a.Fragment,null,a.createElement(s.Z,{onDrag:c,onMouseDown:r,vertical:!0,className:i.hiddenTick,style:{left:e-t-2.5}}),a.createElement("div",{style:{left:e-t},className:i.tick}))}function i({widths:e,setWidths:t,checkbox:l,scrollLeft:n=0}){const{classes:s}=o(),i=[],[c,d]=(0,a.useState)();let m=l?52:0;for(let t=0;t<e.length;t++){const l=e[t];i[t]=l+m,m+=l}return a.createElement("div",{className:s.resizeBar},i.map(((l,s)=>a.createElement(r,{key:s,onMouseDown:()=>{d([...e])},left:s===i.length-1?l-3:l,onDrag:(l,a,n)=>{const s=[...e];s[n]=Math.max(c[n]-a,50),t(s)},idx:s,scrollLeft:n}))))}},77540:(e,t,l)=>{l.d(t,{x:()=>n});var a=l(66204);function n(){const e=(0,a.useRef)(null),[t,l]=(0,a.useState)(0);return(0,a.useEffect)((()=>{const t=setInterval((()=>{const t=e.current?.querySelector(".MuiDataGrid-virtualScroller");t&&l(t.scrollLeft)}),100);return()=>{clearInterval(t)}}),[]),{ref:e,scrollLeft:t}}},11408:(e,t,l)=>{l.r(t),l.d(t,{default:()=>G});var a=l(66204),n=l(80846),s=l(38684),o=l(31211),r=l(32831),i=l(69522),c=l(66159),d=l(23155),m=l(42470),u=l(77540),b=l(63754),h=l(47500),f=l(3212);const k=(0,a.lazy)((()=>l.e(9659).then(l.bind(l,49659)))),g=(0,s.ZL)()((()=>({link:{cursor:"pointer"},cell:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}))),w=(0,n.observer)((function({model:e}){const{classes:t,cx:l}=g(),{ref:n,scrollLeft:s}=(0,u.x)(),{bookmarks:r,bookmarksWithValidAssemblies:i,selectedAssemblies:w,selectedBookmarks:p}=e,y=(0,o.getSession)(e),v=new Set(w),E=r.filter((e=>v.has(e.assemblyName))).map(((e,t)=>{const{assemblyName:l,...a}=e;return{...e,id:t,assemblyName:l,locString:(0,o.assembleLocString)(a),correspondingObj:e}})),[S,C]=(0,a.useState)([50,Math.max((0,o.measureText)("Bookmark link",12)+30,(0,o.measureGridWidth)(E.map((e=>e.locString)))),Math.max((0,o.measureText)("Label",12)+30,(0,o.measureGridWidth)(E.map((e=>e.label)))),Math.max((0,o.measureText)("Assembly",12)+30,(0,o.measureGridWidth)(E.map((e=>e.assemblyName)))),100]);return a.createElement("div",{ref:n},a.createElement(b.Z,{widths:S,setWidths:C,scrollLeft:s}),a.createElement(d._$,{autoHeight:!0,density:"compact",rows:E,columns:[{...m.n,width:S[0]},{field:"locString",headerName:"Bookmark link",width:S[1],renderCell:({value:n,row:s})=>a.createElement(c.Z,{className:l(t.link,t.cell),href:"#",onClick:async t=>{t.preventDefault();const{views:l}=y;await(0,f.D6)(n,s.assemblyName,l,e)}},n)},{field:"label",headerName:"Label",width:S[2],editable:!0},{field:"assemblyName",headerName:"Assembly",width:S[3]},{field:"highlight",headerName:"Highlight",width:S[4],renderCell:({value:t,row:l})=>a.createElement(h.default,{color:t||"black",onChange:t=>{e.updateBookmarkHighlight(l,t)}})}],onCellDoubleClick:({row:t})=>{(0,o.getSession)(e).queueDialog((l=>[k,{onClose:l,model:e,dialogRow:t}]))},processRowUpdate:t=>{const l=E[t.id];return e.updateBookmarkLabel(l,t.label),t},onProcessRowUpdateError:e=>y.notify(e.message,"error"),checkboxSelection:!0,onRowSelectionModelChange:t=>{i.length>0&&e.setSelectedBookmarks(t.map((e=>({...E[e]}))))},rowSelectionModel:p.map((e=>e.id)),disableRowSelectionOnClick:!0}))}));var p=l(94926),y=l(60962),v=l(32339),E=l(91906),S=l(78781),C=l(70539),Z=l(36199);const x=(0,n.observer)((function({model:e}){const{validAssemblies:t,selectedAssemblies:l}=e,n=0===t.size,s="Select assemblies",o="select-assemblies-label",r=new Set(l),i=[...t].every((e=>r.has(e)));return a.createElement(p.Z,{disabled:n,fullWidth:!0},a.createElement(y.Z,{id:o},s),a.createElement(v.Z,{labelId:o,multiple:!0,value:l,onChange:t=>e.setSelectedAssemblies([...t.target.value]),input:a.createElement(E.Z,{label:s}),renderValue:e=>e.join(", ")},a.createElement(S.Z,{onClickCapture:t=>{i?e.setSelectedAssemblies([]):e.setSelectedAssemblies(void 0),t.preventDefault()}},a.createElement(C.Z,{checked:i,indeterminate:!i&&l.length>0}),a.createElement(Z.Z,{primary:"Select all"})),[...t].map((e=>a.createElement(S.Z,{key:e,value:e},a.createElement(C.Z,{checked:l.includes(e)}),a.createElement(Z.Z,{primary:e}))))))}));var D=l(9051),N=l(8459),A=l(49084),L=l(1700),_=l(32462),B=l(26523),$=l(15971);const z=(0,a.lazy)((()=>l.e(884).then(l.bind(l,70884)))),M=(0,a.lazy)((()=>Promise.all([l.e(1617),l.e(2488)]).then(l.bind(l,52488)))),T=(0,a.lazy)((()=>l.e(3290).then(l.bind(l,3290)))),q=(0,a.lazy)((()=>l.e(1697).then(l.bind(l,31697)))),W=(0,a.lazy)((()=>l.e(4459).then(l.bind(l,34459)))),V=(0,a.lazy)((()=>l.e(7639).then(l.bind(l,67639)))),j=(0,s.ZL)()({flex:{display:"flex"}}),G=(0,n.observer)((function({model:e}){const{classes:t}=j();return e?a.createElement("div",null,a.createElement(r.Z,{severity:"info"},"Click and type within the ",a.createElement("strong",null,"label")," field to annotate your bookmark. Double click the ",a.createElement("strong",null,"label")," field to do so within a dialog."),a.createElement("div",{className:t.flex},a.createElement(i.Z,{"data-testid":"grid_bookmark_menu",menuItems:[{label:"Export",icon:N.Z,onClick:()=>{(0,o.getSession)(e).queueDialog((t=>[z,{onClose:t,model:e}]))}},{label:"Import",icon:A.Z,onClick:()=>{(0,o.getSession)(e).queueDialog((t=>[M,{model:e,onClose:t}]))}},{label:"Delete",icon:$.Z,onClick:()=>{(0,o.getSession)(e).queueDialog((t=>[V,{model:e,onClose:t}]))}},{label:"Share",icon:B.Z,onClick:()=>{(0,o.getSession)(e).queueDialog((t=>[T,{model:e,onClose:t}]))}},{label:"Edit colors",icon:_.Z,onClick:()=>{(0,o.getSession)(e).queueDialog((t=>[W,{model:e,onClose:t}]))}},{label:"Settings",icon:L.Z,onClick:()=>{(0,o.getSession)(e).queueDialog((t=>[q,{model:e,onClose:t}]))}}]},a.createElement(D.Z,null)),a.createElement(x,{model:e})),a.createElement(w,{model:e})):null}))},3212:(e,t,l)=>{l.d(t,{C3:()=>o,D6:()=>s,JY:()=>i,cD:()=>r});var a=l(78937),n=l(31211);async function s(e,t,l,a){const s=(0,n.getSession)(a);try{let n=l.find((e=>e.id===s.focusedViewId));if(n?.assemblyNames[0]!==t&&(n=l.find((e=>"LinearGenomeView"===e.type&&e.assemblyNames[0]===t))),!n){const e=`${a.id}_${t}`;n=s.addView("LinearGenomeView",{id:e})}await n.navToLocString(e,t)}catch(e){console.error(e),s.notify(`${e}`,"error")}}function o(e,t){const{selectedBookmarks:l,bookmarksWithValidAssemblies:s}=t,o=0===l.length?s:l;if("BED"===e){const e="",t={};o.forEach((e=>{const{label:l}=e,a=""===l?".":l,n=`${e.refName}\t${e.start}\t${e.end}\t${a}\n`;t[e.assemblyName]?t[e.assemblyName].push(n):t[e.assemblyName]=[n]}));for(const l in t){const n=t[l].reduce(((e,t)=>e+t),e),s=new Blob([n||""],{type:"text/x-bed;charset=utf-8"}),o=`jbrowse_bookmarks_${l}.bed`;(0,a.saveAs)(s,o)}}else{const e="chrom\tstart\tend\tlabel\tassembly_name\tcoord_range\n",t=o.map((e=>{const{label:t}=e,l=""===t?".":t,a=(0,n.assembleLocString)(e);return`${e.refName}\t${e.start+1}\t${e.end}\t${l}\t${e.assemblyName}\t${a}\n`})).reduce(((e,t)=>e+t),e),l=new Blob([t||""],{type:"text/tab-separated-values;charset=utf-8"}),s="jbrowse_bookmarks.tsv";(0,a.saveAs)(l,s)}}async function r(e){const t=function(e){let t=0;switch(e.length%4){case 3:t=1;break;case 2:t=2;break;case 0:t=0;break;default:throw new Error("base64 not a valid length")}return e+"=".repeat(t)}(e.replaceAll("-","+").replaceAll("_","/")),{toByteArray:a}=await Promise.resolve().then(l.t.bind(l,17086,19)),{inflate:n}=await l.e(6553).then(l.t.bind(l,96553,23)),s=n(a(t));return(new TextDecoder).decode(s)}async function i(e){const t=(new TextEncoder).encode(e),{deflate:a}=await l.e(6553).then(l.t.bind(l,96553,23)),{fromByteArray:n}=await Promise.resolve().then(l.t.bind(l,17086,19)),s=n(a(t)),o=s.indexOf("=");return o>0?s.slice(0,o).replaceAll("+","-").replaceAll("/","_"):s.replaceAll("+","-").replaceAll("/","_")}}}]);
//# sourceMappingURL=1408.a2567108.chunk.js.map