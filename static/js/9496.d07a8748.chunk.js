"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[9496],{93384:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(68079),s=t(96234),a=t(30969),o=t(53276),l=t(26737),i=t(37574),c=(0,o.ZL)()((function(e){return{resizeBar:{background:e.palette.action.disabledBackground,height:12,position:"relative",overflow:"hidden"},tick:{position:"absolute",height:"100%",pointerEvents:"none",background:e.palette.action.disabled,width:1},hiddenTick:{position:"absolute",height:"100%",width:5}}}));function u(e){var n=e.left,t=e.scrollLeft,r=e.idx,s=e.onDrag,o=e.onMouseDown,u=c().classes,d=(0,a.useCallback)((function(e,n){return s(e,n,r)}),[r,s]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z,{onDrag:d,onMouseDown:o,vertical:!0,className:u.hiddenTick,style:{left:n-t-2.5}}),(0,i.jsx)("div",{style:{left:n-t},className:u.tick})]})}function d(e){for(var n=e.widths,t=e.setWidths,o=e.checkbox,l=e.scrollLeft,d=void 0===l?0:l,f=c().classes,m=[],h=(0,a.useState)(),b=(0,s.Z)(h,2),x=b[0],p=b[1],v=o?52:0,k=0;k<n.length;k++){var j=n[k];m[k]=j+v,v+=j}return(0,i.jsx)("div",{className:f.resizeBar,children:m.map((function(e,s){return(0,i.jsx)(u,{onMouseDown:function(){p((0,r.Z)(n))},left:s===m.length-1?e-3:e,onDrag:function(e,s,a){var o=(0,r.Z)(n);o[a]=Math.max(x[a]-s,50),t(o)},idx:s,scrollLeft:d},s)}))})}},34298:function(e,n,t){t.d(n,{x:function(){return a}});var r=t(96234),s=t(30969);function a(){var e=(0,s.useRef)(null),n=(0,s.useState)(0),t=(0,r.Z)(n,2),a=t[0],o=t[1];return(0,s.useEffect)((function(){var n=setInterval((function(){var n,t=null===(n=e.current)||void 0===n?void 0:n.querySelector(".MuiDataGrid-virtualScroller");t&&o(t.scrollLeft)}),100);return function(){clearInterval(n)}}),[]),{ref:e,scrollLeft:a}}},69496:function(e,n,t){t.r(n),t.d(n,{default:function(){return J}});var r=t(30969),s=t(90550),a=t(76149),o=t(53276),l=t(32723),i=t(34795),c=t(33028),u=t(59740),d=t(96234),f=t(622),m=t(59563),h=t(46188),b=t(81073),x=t(38935),p=t(34298),v=t(93384),k=t(37574),j=["assemblyName"],w=(0,r.lazy)((function(){return t.e(9969).then(t.bind(t,79969))})),Z=(0,o.ZL)()((function(){return{link:{cursor:"pointer"},cell:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}})),g=(0,s.observer)((function(e){var n=e.model,t=Z(),s=t.classes,a=t.cx,o=(0,r.useState)(),g=(0,d.Z)(o,2),y=g[0],S=g[1],C=(0,p.x)(),N=C.ref,A=C.scrollLeft,L=n.bookmarks,D=n.bookmarksWithValidAssemblies,_=n.selectedAssemblies,B=n.selectedBookmarks,F=(0,b.getSession)(n),M=new Set(_),I=L.filter((function(e){return M.has(e.assemblyName)})).map((function(e,n){var t=e.assemblyName,r=(0,u.Z)(e,j);return(0,c.Z)((0,c.Z)({},e),{},{id:n,assemblyName:t,locString:(0,b.assembleLocString)(r),correspondingObj:e})})),T=(0,r.useState)([40,Math.max((0,b.measureText)("Bookmark link"),(0,b.measureGridWidth)(I.map((function(e){return e.locString})))),Math.max((0,b.measureText)("Label"),(0,b.measureGridWidth)(I.map((function(e){return e.label})))),Math.max((0,b.measureText)("Assembly"),(0,b.measureGridWidth)(I.map((function(e){return e.assemblyName}))))]),z=(0,d.Z)(T,2),E=z[0],W=z[1];return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("div",{ref:N,children:[(0,k.jsx)(v.Z,{widths:E,setWidths:W,scrollLeft:A}),(0,k.jsx)(m._$,{autoHeight:!0,density:"compact",rows:I,columns:[(0,c.Z)((0,c.Z)({},h.n),{},{width:E[0]}),{field:"locString",headerName:"Bookmark link",width:E[1],renderCell:function(e){var t=e.value,r=e.row;return(0,k.jsx)(f.Z,{className:a(s.link,s.cell),href:"#",onClick:function(){var e=(0,i.Z)((0,l.Z)().mark((function e(s){var a;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),a=F.views,e.next=4,(0,x.D6)(t,r.assemblyName,a,n);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:t})}},{field:"label",headerName:"Label",width:E[2],editable:!0},{field:"assemblyName",headerName:"Assembly",width:E[3]}],onCellDoubleClick:function(e){var n=e.row;return S(n)},processRowUpdate:function(e){var t=I[e.id];return n.updateBookmarkLabel(t,e.label),e},onProcessRowUpdateError:function(e){return F.notify(e.message,"error")},checkboxSelection:!0,onRowSelectionModelChange:function(e){D.length>0&&n.setSelectedBookmarks(e.map((function(e){return(0,c.Z)({},I[e])})))},rowSelectionModel:B.map((function(e){return e.id})),disableRowSelectionOnClick:!0})]}),y?(0,k.jsx)(r.Suspense,{fallback:(0,k.jsx)(r.Fragment,{}),children:(0,k.jsx)(w,{onClose:function(){return S(void 0)},model:n,dialogRow:y})}):null]})})),y=g,S=t(72097),C=t(10814),N=(0,r.lazy)((function(){return t.e(2047).then(t.bind(t,82047))}));var A=function(e){var n=e.model,t=(0,r.useState)(!1),s=(0,d.Z)(t,2),a=s[0],o=s[1];return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(S.Z,{startIcon:(0,k.jsx)(C.Z,{}),"aria-label":"clear bookmarks",onClick:function(){return o(!0)},children:"Delete"}),a?(0,k.jsx)(r.Suspense,{fallback:(0,k.jsx)(r.Fragment,{}),children:(0,k.jsx)(N,{model:n,onClose:function(){return o(!1)}})}):null]})},L=t(89364),D=(0,r.lazy)((function(){return t.e(8856).then(t.bind(t,68856))})),_=(0,s.observer)((function(e){var n=e.model,t=(0,r.useState)(!1),s=(0,d.Z)(t,2),a=s[0],o=s[1];return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(S.Z,{startIcon:(0,k.jsx)(L.Z,{}),onClick:function(){return o(!0)},"data-testid":"export_button",children:"Export"}),a?(0,k.jsx)(r.Suspense,{fallback:(0,k.jsx)(r.Fragment,{}),children:(0,k.jsx)(D,{onClose:function(){return o(!1)},model:n})}):null]})})),B=t(32207),F=(0,r.lazy)((function(){return t.e(2419).then(t.bind(t,12419))})),M=(0,s.observer)((function(e){var n=e.model,t=(0,r.useState)(!1),s=(0,d.Z)(t,2),a=s[0],o=s[1];return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(S.Z,{startIcon:(0,k.jsx)(B.Z,{}),onClick:function(){return o(!0)},children:"Import"}),a?(0,k.jsx)(r.Suspense,{fallback:(0,k.jsx)(r.Fragment,{}),children:(0,k.jsx)(F,{onClose:function(){return o(!1)},model:n})}):null]})})),I=t(68079),T=t(87535),z=t(16631),E=t(70983),W=t(33656),V=t(2689),G=t(88876),R=t(86008),O=(0,s.observer)((function(e){var n=e.model,t=n.validAssemblies,r=n.selectedAssemblies,s=0===t.size,a="Select assemblies",o="select-assemblies-label",l=new Set(r),i=(0,I.Z)(t).every((function(e){return l.has(e)}));return(0,k.jsxs)(T.Z,{disabled:s,fullWidth:!0,children:[(0,k.jsx)(z.Z,{id:o,children:a}),(0,k.jsxs)(E.Z,{labelId:o,multiple:!0,value:r,onChange:function(e){return n.setSelectedAssemblies((0,I.Z)(e.target.value))},input:(0,k.jsx)(W.Z,{label:a}),renderValue:function(e){return e.join(", ")},children:[(0,k.jsxs)(V.Z,{onClickCapture:function(e){i?n.setSelectedAssemblies([]):n.setSelectedAssemblies(void 0),e.preventDefault()},children:[(0,k.jsx)(G.Z,{checked:i,indeterminate:!i&&r.length>0}),(0,k.jsx)(R.Z,{primary:"Select all"})]}),(0,I.Z)(t).map((function(e){return(0,k.jsxs)(V.Z,{value:e,children:[(0,k.jsx)(G.Z,{checked:r.includes(e)}),(0,k.jsx)(R.Z,{primary:e})]},e)}))]})]})})),P=t(22417),U=(0,r.lazy)((function(){return t.e(4271).then(t.bind(t,94271))}));var q=function(e){var n=e.model,t=(0,r.useState)(!1),s=(0,d.Z)(t,2),a=s[0],o=s[1];return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(S.Z,{startIcon:(0,k.jsx)(P.pt,{}),onClick:function(){return o(!0)},children:"Share"}),a?(0,k.jsx)(r.Suspense,{fallback:(0,k.jsx)(r.Fragment,{}),children:(0,k.jsx)(U,{onClose:function(){return o(!1)},model:n})}):null]})},H=(0,o.ZL)()({card:{marginTop:5}}),J=(0,s.observer)((function(e){var n=e.model,t=H().classes;return n?(0,k.jsxs)("div",{className:t.card,children:[(0,k.jsxs)("div",{children:[(0,k.jsx)(_,{model:n}),(0,k.jsx)(M,{model:n}),(0,k.jsx)(q,{model:n}),(0,k.jsx)(A,{model:n})]}),(0,k.jsxs)(a.Z,{severity:"info",children:["Click and type within the ",(0,k.jsx)("strong",{children:"label"})," field to annotate your bookmark. Double click the ",(0,k.jsx)("strong",{children:"label"})," field to do so within a dialog."]}),(0,k.jsx)(O,{model:n}),(0,k.jsx)(y,{model:n})]}):null}))},38935:function(e,n,t){t.d(n,{C3:function(){return c},D6:function(){return l},JY:function(){return m},cD:function(){return d}});var r=t(32723),s=t(34795),a=t(21918),o=t(81073);function l(e,n,t,r){return i.apply(this,arguments)}function i(){return(i=(0,s.Z)((0,r.Z)().mark((function e(n,t,s,a){var l,i,c,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=(0,o.getSession)(a),e.prev=1,c=s.find((function(e){return e.id===l.focusedViewId})),(null===(i=c)||void 0===i?void 0:i.assemblyNames[0])!==t&&(c=s.find((function(e){return"LinearGenomeView"===e.type&&e.assemblyNames[0]===t}))),c||(u="".concat(a.id,"_").concat(t),c=l.addView("LinearGenomeView",{id:u})),e.next=7,c.navToLocString(n,t);case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),l.notify("".concat(e.t0),"error");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function c(e,n){var t=n.selectedBookmarks,r=n.bookmarksWithValidAssemblies,s=0===t.length?r:t;if("BED"===e){var l={};for(var i in s.forEach((function(e){var n=e.label,t=""===n?".":n,r="".concat(e.refName,"\t").concat(e.start,"\t").concat(e.end,"\t").concat(t,"\n");l[e.assemblyName]?l[e.assemblyName].push(r):l[e.assemblyName]=[r]})),l){var c=l[i].reduce((function(e,n){return e+n}),""),u=new Blob([c||""],{type:"text/x-bed;charset=utf-8"}),d="jbrowse_bookmarks_".concat(i,".bed");(0,a.saveAs)(u,d)}}else{var f=s.map((function(e){var n=e.label,t=""===n?".":n,r=(0,o.assembleLocString)(e);return"".concat(e.refName,"\t").concat(e.start+1,"\t").concat(e.end,"\t").concat(t,"\t").concat(e.assemblyName,"\t").concat(r,"\n")})).reduce((function(e,n){return e+n}),"chrom\tstart\tend\tlabel\tassembly_name\tcoord_range\n"),m=new Blob([f||""],{type:"text/tab-separated-values;charset=utf-8"});(0,a.saveAs)(m,"jbrowse_bookmarks.tsv")}}function u(e){var n=0;switch(e.length%4){case 3:n=1;break;case 2:n=2;break;case 0:n=0;break;default:throw new Error("base64 not a valid length")}return e+"=".repeat(n)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,s.Z)((0,r.Z)().mark((function e(n){var s,a,o,l,i,c,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=u(n.replaceAll("-","+").replaceAll("_","/")),e.next=3,Promise.resolve().then(t.t.bind(t,63019,19));case 3:return a=e.sent,o=a.toByteArray,e.next=7,t.e(6700).then(t.t.bind(t,26700,23));case 7:return l=e.sent,i=l.inflate,c=o(s),d=i(c),e.abrupt("return",(new TextDecoder).decode(d));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return(h=(0,s.Z)((0,r.Z)().mark((function e(n){var s,a,o,l,i,c,u,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=(new TextEncoder).encode(n),e.next=3,t.e(6700).then(t.t.bind(t,26700,23));case 3:return a=e.sent,o=a.deflate,e.next=7,Promise.resolve().then(t.t.bind(t,63019,19));case 7:return l=e.sent,i=l.fromByteArray,c=o(s),u=i(c),d=u.indexOf("="),e.abrupt("return",d>0?u.slice(0,d).replaceAll("+","-").replaceAll("/","_"):u.replaceAll("+","-").replaceAll("/","_"));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=9496.d07a8748.chunk.js.map