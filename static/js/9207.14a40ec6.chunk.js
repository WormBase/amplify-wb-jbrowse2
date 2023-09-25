"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[9207],{29207:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var r=t(33028),o=t(96234),s=t(30969),a=t(87535),c=t(70983),i=t(2689),u=t(72097),l=t(6779),p=t(33359),d=t(94551),f=t(53276),m=t(34760),x=t.n(m),Z=t(81073),h=t(59767),b=t(14079),v=t(32723),g=t(34795),j=t(9077),w=5e5;var C=t(37574),k=(0,s.lazy)((function(){return t.e(3468).then(t.bind(t,83468))})),y=(0,s.lazy)((function(){return t.e(6118).then(t.bind(t,46118))})),S=(0,f.ZL)()((function(e){return{button:{margin:e.spacing(1)},formControl:{margin:0},container2:{marginTop:e.spacing(1)}}}));function B(e){var n,t,d=e.model,f=e.feature,m=S().classes,b=f,k=(0,s.useRef)(null),B=(0,Z.useLocalStorage)("intronBp",10),q=(0,o.Z)(B,2),_=q[0],D=q[1],L=(0,Z.useLocalStorage)("upDownBp",500),G=(0,o.Z)(L,2),M=G[0],T=G[1],F=(0,s.useState)(!1),z=(0,o.Z)(F,2),E=z[0],H=z[1],I=(0,s.useState)(!1),A=(0,o.Z)(I,2),R=A[0],U=A[1],O=(0,s.useState)(!1),P=(0,o.Z)(O,2),J=P[0],K=P[1],Q=null===(n=b.subfeatures)||void 0===n?void 0:n.some((function(e){return"CDS"===e.type})),V=null===(t=b.subfeatures)||void 0===t?void 0:t.some((function(e){return"exon"===e.type})),W=V||Q,X=function(e,n,t,r){var a=(0,s.useState)(),c=(0,o.Z)(a,2),i=c[0],u=c[1],l=(0,s.useState)(),p=(0,o.Z)(l,2),d=p[0],f=p[1];return(0,s.useEffect)((function(){var s,a=!1;if(!e)return function(){};var c=(0,Z.getSession)(e),i=c.assemblyManager,l=c.rpcManager,p=(null===(s=e.view)||void 0===s?void 0:s.assemblyNames)||[],d=(0,o.Z)(p,1)[0];function m(e,n,t){return x.apply(this,arguments)}function x(){return(x=(0,g.Z)((0,v.Z)().mark((function e(n,t,r){var s,a,c,u,p,f;return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.waitForAssembly(d);case 2:if(s=e.sent){e.next=5;break}throw new Error("assembly not found");case 5:return a="getSequence",e.next=8,l.call(a,"CoreGetFeatures",{adapterConfig:(0,j.getConf)(s,["sequence","adapter"]),sessionId:a,regions:[{start:n,end:t,refName:s.getCanonicalRefName(r),assemblyName:d}]});case 8:return c=e.sent,u=c,p=(0,o.Z)(u,1),f=p[0],e.abrupt("return",(null===f||void 0===f?void 0:f.get("seq"))||"");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,g.Z)((0,v.Z)().mark((function e(){var o,s,c,i,l,p,d,x,Z;return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,f(void 0),s=(o=n).start,c=o.end,i=o.refName,r||!(c-s>w)){e.next=7;break}u({error:"Genomic sequence larger than ".concat(w,'bp, use "force load" button to display')}),e.next=19;break;case 7:return l=s-t,p=c+t,e.next=11,m(s,c,i);case 11:return d=e.sent,e.next=14,m(Math.max(0,l),s,i);case 14:return x=e.sent,e.next=17,m(c,p,i);case 17:Z=e.sent,a||u({seq:d,upstream:x,downstream:Z});case 19:e.next=25;break;case 21:e.prev=21,e.t0=e.catch(0),console.error(e.t0),f(e.t0);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})))(),function(){a=!0}}),[n,e,t,r]),{sequence:i,error:d}}(d,f,M,J),Y=X.sequence,$=X.error,ee=(0,s.useState)(Q?"cds":V?"cdna":"genomic"),ne=(0,o.Z)(ee,2),te=ne[0],re=ne[1],oe=(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},Q?{cds:"CDS"}:{}),Q?{protein:"Protein"}:{}),W?{cdna:"cDNA"}:{}),W?{gene:"Genomic w/ full introns"}:{}),W?{gene_updownstream:"Genomic w/ full introns +/- ".concat(M,"bp up+down stream")}:{}),W?{gene_collapsed_intron:"Genomic w/ ".concat(_,"bp intron")}:{}),W?{gene_updownstream_collapsed_intron:"Genomic w/ ".concat(_,"bp intron +/- ").concat(M,"bp up+down stream ")}:{}),W?{}:{genomic:"Genomic"}),W?{}:{genomic_sequence_updownstream:"Genomic +/- ".concat(M,"bp up+down stream")});return(0,C.jsxs)("div",{className:m.container2,children:[(0,C.jsx)(a.Z,{className:m.formControl,children:(0,C.jsx)(c.Z,{value:te,onChange:function(e){return re(e.target.value)},children:Object.entries(oe).map((function(e){var n=(0,o.Z)(e,2),t=n[0],r=n[1];return(0,C.jsx)(i.Z,{value:t,children:r},t)}))})}),(0,C.jsx)(a.Z,{className:m.formControl,children:(0,C.jsx)(u.Z,{className:m.button,variant:"contained",onClick:function(){var e=k.current;e&&(x()(e.textContent||"",{format:"text/plain"}),H(!0),setTimeout((function(){return H(!1)}),1e3))},children:E?"Copied to clipboard!":"Copy plaintext"})}),(0,C.jsx)(a.Z,{className:m.formControl,children:(0,C.jsx)(l.Z,{title:"The 'Copy HTML' function retains the colors from the sequence panel but cannot be pasted into some programs like notepad that only expect plain text",children:(0,C.jsx)(u.Z,{className:m.button,variant:"contained",onClick:function(){var e=k.current;e&&(x()(e.innerHTML,{format:"text/html"}),U(!0),setTimeout((function(){return U(!1)}),1e3))},children:R?"Copied to clipboard!":"Copy HTML"})})}),(0,C.jsx)(N,{upDownBp:M,intronBp:_,setIntronBp:D,setUpDownBp:T}),(0,C.jsx)("br",{}),"gene"===b.type?(0,C.jsx)(p.Z,{children:"Note: inspect subfeature sequences for protein/CDS computations"}):null,$?(0,C.jsx)(p.Z,{color:"error",children:"".concat($)}):Y?Y?"error"in Y?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(p.Z,{color:"error",children:Y.error}),(0,C.jsx)(u.Z,{variant:"contained",color:"inherit",onClick:function(){return K(!0)},children:"Force load"})]}):(0,C.jsx)(s.Suspense,{fallback:(0,C.jsx)(h.LoadingEllipses,{}),children:(0,C.jsx)(y,{ref:k,feature:b,mode:te,sequence:Y,intronBp:_})}):(0,C.jsx)(p.Z,{children:"No sequence found"}):(0,C.jsx)(h.LoadingEllipses,{})]})}function N(e){var n=e.intronBp,t=e.upDownBp,r=e.setIntronBp,c=e.setUpDownBp,i=S().classes,u=(0,s.useState)(!1),l=(0,o.Z)(u,2),p=l[0],f=l[1];return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(a.Z,{className:i.formControl,children:(0,C.jsx)(d.Z,{onClick:function(){return f(!0)},children:(0,C.jsx)(b.Z,{})})}),p?(0,C.jsx)(s.Suspense,{fallback:(0,C.jsx)("div",{}),children:(0,C.jsx)(k,{handleClose:function(e){if(e){var n=e.upDownBp,t=e.intronBp;r(t),c(n)}f(!1)},upDownBp:t,intronBp:n})}):null]})}},14079:function(e,n,t){var r=t(71600);n.Z=void 0;var o=r(t(48035)),s=t(37574),a=(0,o.default)((0,s.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");n.Z=a}}]);
//# sourceMappingURL=9207.14a40ec6.chunk.js.map