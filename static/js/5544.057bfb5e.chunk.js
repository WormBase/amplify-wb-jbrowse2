"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[5544],{45544:(e,s,r)=>{r.r(s),r.d(s,{default:()=>y});var t=r(41867),o=r(31625),a=r(3762),n=r(35421),c=r(49133),l=r(47409),i=r(75258),h=r(68367),d=r(51590),u=r(27768),w=r(23801),p=r(62877),j=r.n(p),x=r(93438),f=r(51862),S=r(24728),C=r(3359),b=r(71883),g=r(53064),k=r(80838);const m=(0,t.lazy)((()=>r.e(6090).then(r.bind(r,96090))));function Z(e){let{url:s}=e;return(0,k.jsx)(c.Z,{label:"URL",value:s,InputProps:{readOnly:!0},variant:"filled",fullWidth:!0,onClick:e=>{e.target.select()}})}const y=(0,a.observer)((function(e){let{handleClose:s,session:r}=e;const[a,c]=(0,t.useState)(""),[p,y]=(0,t.useState)(""),[v,L]=(0,t.useState)(""),[R,U]=(0,t.useState)(""),[I,P]=(0,t.useState)(!0),[V,B]=(0,t.useState)(),[D,J]=(0,t.useState)(!1),[,_]=(0,x.useQueryParam)("password",x.StringParam),[,z]=(0,x.useQueryParam)("session",x.StringParam),M=r.shareURL,E=localStorage.getItem("jbrowse-shareURL")||"short",F=(0,o.getSnapshot)(r);return(0,t.useEffect)((()=>{let e=!1;return(async()=>{try{if("short"===E){P(!0);const s=new URL(window.location.href),r=await(0,g.p)(F,M,s.href);if(!e){const e=new URLSearchParams(s.search);e.set("session","share-".concat(r.json.sessionId)),e.set("password",r.password),s.search=e.toString(),L(s.href),c("share-".concat(r.json.sessionId)),y(r.password)}}else{const s=await(0,b.JY)(JSON.stringify((0,o.getSnapshot)(r))),t=new URL(window.location.href),a=new URLSearchParams(t.search);a.set("session","encoded-".concat(s)),c("encoded-".concat(s)),t.search=a.toString(),e||U(t.toString())}}catch(s){B(s)}finally{P(!1)}})(),()=>{e=!0}}),[E,r,M,F]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(n.Dialog,{maxWidth:"xl",open:!0,onClose:s,title:"JBrowse Shareable Link",children:[(0,k.jsxs)(l.Z,{children:[(0,k.jsxs)(i.Z,{children:["Copy the URL below to share your current JBrowse session.",(0,k.jsx)(h.Z,{onClick:()=>J(!0),children:(0,k.jsx)(f.Z,{})})]}),"short"===E?V?(0,k.jsx)(n.ErrorMessage,{error:V}):I?(0,k.jsx)(d.Z,{children:"Generating short URL..."}):(0,k.jsx)(Z,{url:v}):(0,k.jsx)(Z,{url:R})]}),(0,k.jsxs)(u.Z,{children:[(0,k.jsx)(w.Z,{startIcon:(0,k.jsx)(C.Z,{}),disabled:"short"===E&&I,onClick:e=>{e.preventDefault(),_(p,"replaceIn"),z(a,"replaceIn"),alert("Now press Ctrl+D (PC) or Cmd+D (Mac)")},children:"Create browser Bookmark"}),(0,k.jsx)(w.Z,{onClick:()=>{j()(v||R),r.notify("Copied to clipboard","success")},startIcon:(0,k.jsx)(S.pt,{}),disabled:"short"===E&&I,children:"Copy to Clipboard"}),(0,k.jsx)(w.Z,{onClick:s,autoFocus:!0,children:"Close"})]})]}),(0,k.jsx)(m,{open:D,onClose:()=>J(!1),currentSetting:E})]})}))},3359:(e,s,r)=>{var t=r(71600);s.Z=void 0;var o=t(r(80337)),a=r(80838),n=(0,o.default)((0,a.jsx)("path",{d:"M21 7h-2v2h-2V7h-2V5h2V3h2v2h2v2zm-2 14-7-3-7 3V5c0-1.1.9-2 2-2h7c-.63.84-1 1.87-1 3 0 2.76 2.24 5 5 5 .34 0 .68-.03 1-.1V21z"}),"BookmarkAdd");s.Z=n}}]);
//# sourceMappingURL=5544.057bfb5e.chunk.js.map