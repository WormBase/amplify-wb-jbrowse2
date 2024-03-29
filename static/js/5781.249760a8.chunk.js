"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5781],{55781:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var a=n(7552),o=n(48171),r=n(98360),l=n(29629),c=n(5401),s=n(89003),i=n(36715),u=n(61723),m=n(75785),p=n(31409),d=n.n(p),f=n(99546),b=n(48735),g=n(27820),w=n(68584);const E=5e5,C=(0,a.lazy)((()=>n.e(8811).then(n.bind(n,68811)))),h=(0,a.lazy)((()=>n.e(9339).then(n.bind(n,19339)))),A=(0,m.n9)()((e=>({button:{margin:e.spacing(1)},formControl:{margin:0},container2:{marginTop:e.spacing(1)}})));function y({model:e,feature:t}){const{classes:n}=A(),u=t,m=(0,a.useRef)(null),[p,g]=(0,f.useLocalStorage)("intronBp",10),[C,y]=(0,f.useLocalStorage)("upDownBp",500),[B,N]=(0,a.useState)(!1),[v,k]=(0,a.useState)(!1),[q,_]=(0,a.useState)(!1),D=u.subfeatures?.some((e=>"CDS"===e.type)),x=u.subfeatures?.some((e=>"exon"===e.type)),T=x||D,{sequence:G,error:L}=function(e,t,n,o){const[r,l]=(0,a.useState)(),[c,s]=(0,a.useState)();return(0,a.useEffect)((()=>{let a=!1;if(!e)return()=>{};const{assemblyManager:r,rpcManager:c}=(0,f.getSession)(e),[i]=e.view?.assemblyNames||[];async function u(e,t,n){const a=await r.waitForAssembly(i);if(!a)throw new Error("assembly not found");const o="getSequence",l=await c.call(o,"CoreGetFeatures",{adapterConfig:(0,w.getConf)(a,["sequence","adapter"]),sessionId:o,regions:[{start:e,end:t,refName:a.getCanonicalRefName(n),assemblyName:i}]}),[s]=l;return s?.get("seq")||""}return(async()=>{try{s(void 0);const{start:e,end:r,refName:c}=t;if(!o&&r-e>E)l({error:`Genomic sequence larger than ${E}bp, use "force load" button to display`});else{const t=e-n,o=r+n,s=await u(e,r,c),i=await u(Math.max(0,t),e,c),m=await u(r,o,c);a||l({seq:s,upstream:i,downstream:m})}}catch(e){console.error(e),s(e)}})(),()=>{a=!0}}),[t,e,n,o]),{sequence:r,error:c}}(e,t,C,q),[M,$]=(0,a.useState)(D?"cds":x?"cdna":"genomic"),F={...D?{cds:"CDS"}:{},...D?{protein:"Protein"}:{},...T?{cdna:"cDNA"}:{},...T?{gene:"Genomic w/ full introns"}:{},...T?{gene_updownstream:`Genomic w/ full introns +/- ${C}bp up+down stream`}:{},...T?{gene_collapsed_intron:`Genomic w/ ${p}bp intron`}:{},...T?{gene_updownstream_collapsed_intron:`Genomic w/ ${p}bp intron +/- ${C}bp up+down stream `}:{},...T?{}:{genomic:"Genomic"},...T?{}:{genomic_sequence_updownstream:`Genomic +/- ${C}bp up+down stream`}};return a.createElement("div",{className:n.container2},a.createElement(o.A,{className:n.formControl},a.createElement(r.A,{value:M,onChange:e=>$(e.target.value)},Object.entries(F).map((([e,t])=>a.createElement(l.A,{key:e,value:e},t))))),a.createElement(o.A,{className:n.formControl},a.createElement(c.A,{className:n.button,variant:"contained",onClick:()=>{const e=m.current;e&&(d()(e.textContent||"",{format:"text/plain"}),N(!0),setTimeout((()=>N(!1)),1e3))}},B?"Copied to clipboard!":"Copy plaintext")),a.createElement(o.A,{className:n.formControl},a.createElement(s.A,{title:"The 'Copy HTML' function retains the colors from the sequence panel but cannot be pasted into some programs like notepad that only expect plain text"},a.createElement(c.A,{className:n.button,variant:"contained",onClick:()=>{const e=m.current;e&&(d()(e.innerHTML,{format:"text/html"}),k(!0),setTimeout((()=>k(!1)),1e3))}},v?"Copied to clipboard!":"Copy HTML"))),a.createElement(S,{upDownBp:C,intronBp:p,setIntronBp:g,setUpDownBp:y}),a.createElement("br",null),"gene"===u.type?a.createElement(i.A,null,"Note: inspect subfeature sequences for protein/CDS computations"):null,L?a.createElement(i.A,{color:"error"},`${L}`):G?G?"error"in G?a.createElement(a.Fragment,null,a.createElement(i.A,{color:"error"},G.error),a.createElement(c.A,{variant:"contained",color:"inherit",onClick:()=>_(!0)},"Force load")):a.createElement(a.Suspense,{fallback:a.createElement(b.LoadingEllipses,null)},a.createElement(h,{ref:m,feature:u,mode:M,sequence:G,intronBp:p})):a.createElement(i.A,null,"No sequence found"):a.createElement(b.LoadingEllipses,null))}function S({intronBp:e,upDownBp:t,setIntronBp:n,setUpDownBp:r}){const{classes:l}=A(),[c,s]=(0,a.useState)(!1);return a.createElement(a.Fragment,null,a.createElement(o.A,{className:l.formControl},a.createElement(u.A,{onClick:()=>s(!0)},a.createElement(g.A,null))),c?a.createElement(a.Suspense,{fallback:null},a.createElement(C,{handleClose:e=>{if(e){const{upDownBp:t,intronBp:a}=e;n(a),r(t)}s(!1)},upDownBp:t,intronBp:e})):null)}},27820:(e,t,n)=>{var a=n(92120);t.A=void 0;var o=a(n(33380)),r=n(69500);t.A=(0,o.default)((0,r.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings")}}]);
//# sourceMappingURL=5781.249760a8.chunk.js.map