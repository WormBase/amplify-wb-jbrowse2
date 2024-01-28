"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9785],{89785:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var a=r(66204),s=r(88196),n=r(80846),o=r(43902),l=r(46338),c=r(29520),i=r(27513),u=r(49140),h=r(80013),d=r(62301),m=r(7146),w=r(43306),p=r.n(w),E=r(6214),S=r(1700),b=r(19609),C=r(36358),f=r(8204),g=r(82831);const k=(0,a.lazy)((()=>r.e(2137).then(r.bind(r,62137))));function Z({url:e}){return a.createElement(l.Z,{label:"URL",value:e,InputProps:{readOnly:!0},variant:"filled",fullWidth:!0,onClick:e=>{e.target.select()}})}const y=(0,n.observer)((function({handleClose:e,session:t}){const[r,n]=(0,a.useState)(""),[l,w]=(0,a.useState)(""),[y,v]=(0,a.useState)(""),[L,R]=(0,a.useState)(""),[U,I]=(0,a.useState)(!0),[P,j]=(0,a.useState)(),[B,D]=(0,a.useState)(!1),[,J]=(0,E.useQueryParam)("password",E.StringParam),[,V]=(0,E.useQueryParam)("session",E.StringParam),$=t.shareURL,_=localStorage.getItem("jbrowse-shareURL")||"short",x=(0,s.getSnapshot)(t);return(0,a.useEffect)((()=>{let e=!1;return(async()=>{try{if("short"===_){I(!0);const t=new URL(window.location.href),r=await(0,g.p)(x,$,t.href);if(!e){const e=new URLSearchParams(t.search);e.set("session",`share-${r.json.sessionId}`),e.set("password",r.password),t.search=e.toString(),v(t.href),n(`share-${r.json.sessionId}`),w(r.password)}}else{const r=await(0,f.JY)(JSON.stringify((0,s.getSnapshot)(t))),a=new URL(window.location.href),o=new URLSearchParams(a.search);o.set("session",`encoded-${r}`),n(`encoded-${r}`),a.search=o.toString(),e||R(a.toString())}}catch(e){j(e)}finally{I(!1)}})(),()=>{e=!0}}),[_,t,$,x]),a.createElement(a.Fragment,null,a.createElement(o.Dialog,{maxWidth:"xl",open:!0,onClose:e,title:"JBrowse Shareable Link"},a.createElement(c.Z,null,a.createElement(i.Z,null,"Copy the URL below to share your current JBrowse session.",a.createElement(u.Z,{onClick:()=>D(!0)},a.createElement(S.Z,null))),"short"===_?P?a.createElement(o.ErrorMessage,{error:P}):U?a.createElement(h.Z,null,"Generating short URL..."):a.createElement(Z,{url:y}):a.createElement(Z,{url:L})),a.createElement(d.Z,null,a.createElement(m.Z,{startIcon:a.createElement(C.Z,null),disabled:"short"===_&&U,onClick:e=>{e.preventDefault(),J(l,"replaceIn"),V(r,"replaceIn"),alert("Now press Ctrl+D (PC) or Cmd+D (Mac)")}},"Create browser Bookmark"),a.createElement(m.Z,{onClick:()=>{p()(y||L),t.notify("Copied to clipboard","success")},startIcon:a.createElement(b.pt,null),disabled:"short"===_&&U},"Copy to Clipboard"),a.createElement(m.Z,{onClick:e,autoFocus:!0},"Close"))),a.createElement(k,{open:B,onClose:()=>D(!1),currentSetting:_}))}))},36358:(e,t,r)=>{var a=r(57739);t.Z=void 0;var s=a(r(53948)),n=r(43188);t.Z=(0,s.default)((0,n.jsx)("path",{d:"M21 7h-2v2h-2V7h-2V5h2V3h2v2h2zm-2 14-7-3-7 3V5c0-1.1.9-2 2-2h7c-.63.84-1 1.87-1 3 0 2.76 2.24 5 5 5 .34 0 .68-.03 1-.1z"}),"BookmarkAdd")}}]);
//# sourceMappingURL=9785.fdf4be8b.chunk.js.map