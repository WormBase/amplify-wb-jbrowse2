"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[2093],{87213:(e,t,r)=>{r.d(t,{UL:()=>x,WK:()=>d,i1:()=>g,u_:()=>f});var n=r(66204),l=r(38684),a=r(80846),i=r(88196),o=r(31211),s=r(17925),c=r(92368),m=r(70333);const h=(0,l.ZL)()((()=>({vtext:{gridColumn:"1/2",gridRow:"1/2",pointerEvents:"none",userSelect:"none"},htext:{gridColumn:"2/2",gridRow:"2/2",pointerEvents:"none",userSelect:"none"}}))),f=(0,a.observer)((function({model:e}){const{viewWidth:t,borderY:r}=e,{classes:l}=h();return n.createElement("svg",{width:t,height:r,className:l.htext},n.createElement(d,{model:e}))})),d=(0,a.observer)((function({model:e}){const{viewWidth:t,borderX:r,borderY:l,hview:a,htextRotation:h,hticks:f}=e,{offsetPx:d,width:x,dynamicBlocks:g,bpPerPx:y}=a,p=g.contentBlocks,u=(0,m.F$)(p,t,d),w=(0,c.Z)(),k={...(0,i.getSnapshot)(a),width:x,staticBlocks:a.staticBlocks},v=f.map((e=>[e,(0,s.R)({refName:e.refName,coord:e.base,self:k})?.offsetPx])).filter((e=>void 0!==e[1])).map((e=>[e[0],e[1]-d]));return n.createElement(n.Fragment,null,p.filter((e=>!u.has(e.key))).map((e=>{const t=e.offsetPx,r=Math.floor(t-a.offsetPx);return n.createElement("text",{transform:`rotate(${h},${r},0)`,key:JSON.stringify(e),x:r,y:1,fill:w.palette.text.primary,fontSize:11,dominantBaseline:"hanging",textAnchor:"end"},e.refName)})),v.map((([e,t])=>n.createElement("line",{key:`line-${JSON.stringify(e)}`,x1:t,x2:t,y1:0,y2:"major"===e.type?6:4,strokeWidth:1,stroke:w.palette.grey[400]}))),v.filter((e=>"major"===e[0].type)).map((([e,t])=>t>10?n.createElement("text",{x:t-7,y:0,transform:`rotate(${h},${t},0)`,key:`text-${JSON.stringify(e)}`,fill:w.palette.text.primary,fontSize:11,dominantBaseline:"middle",textAnchor:"end"},(0,o.getTickDisplayStr)(e.base+1,y)):null)),n.createElement("text",{y:l-12,x:(t-r)/2,fill:w.palette.text.primary,textAnchor:"middle",fontSize:11,dominantBaseline:"hanging"},a.assemblyNames.join(",")))})),x=(0,a.observer)((function({model:e}){const{borderX:t,viewHeight:r}=e,{classes:l}=h();return n.createElement("svg",{className:l.vtext,width:t,height:r},n.createElement(g,{model:e}))})),g=(0,a.observer)((function({model:e}){const{viewHeight:t,borderX:r,borderY:l,vview:a,vtextRotation:h,vticks:f}=e,{offsetPx:d,width:x,dynamicBlocks:g,bpPerPx:y}=a,p=g.contentBlocks,u=(0,m.F$)(p,t,d),w=(0,c.Z)(),k={...(0,i.getSnapshot)(a),width:x,staticBlocks:a.staticBlocks},v=f.map((e=>[e,(0,s.R)({refName:e.refName,coord:e.base,self:k})?.offsetPx])).filter((e=>void 0!==e[1])).map((e=>[e[0],e[1]-d]));return n.createElement(n.Fragment,null,p.filter((e=>!u.has(e.key))).map((e=>{const l=e.offsetPx,a=r,i=Math.floor(t-l+d);return n.createElement("text",{transform:`rotate(${h},${a},${l})`,key:JSON.stringify(e),x:a,y:i,fill:w.palette.text.primary,fontSize:11,textAnchor:"end"},e.refName)})),v.map((([e,l])=>n.createElement("line",{key:`line-${JSON.stringify(e)}`,y1:t-l,y2:t-l,x1:r,x2:r-("major"===e.type?6:4),strokeWidth:1,stroke:w.palette.grey[400]}))),v.filter((e=>"major"===e[0].type)).map((([e,l])=>l>10?n.createElement("text",{y:t-l-3,x:r-7,key:`text-${JSON.stringify(e)}`,textAnchor:"end",fill:w.palette.text.primary,dominantBaseline:"hanging",fontSize:11},(0,o.getTickDisplayStr)(e.base+1,y)):null)),n.createElement("text",{y:(t-l)/2,x:12,fill:w.palette.text.primary,transform:`rotate(-90,12,${(t-l)/2})`,textAnchor:"middle",fontSize:11},a.assemblyNames.join(",")))}))},94891:(e,t,r)=>{r.d(t,{B:()=>i,Z:()=>o});var n=r(66204),l=r(80846),a=r(92368);const i=(0,l.observer)((function({model:e,children:t}){const{viewWidth:r,viewHeight:l,hview:i,vview:o}=e,s=i.dynamicBlocks.contentBlocks,c=o.dynamicBlocks.contentBlocks;if(!s.length||!c.length)return null;const m=i.displayedRegionsTotalPx-i.offsetPx,h=o.displayedRegionsTotalPx-o.offsetPx,f=s[0].offsetPx-i.offsetPx,d=c[0].offsetPx-o.offsetPx,x=(0,a.Z)(),g=x.palette.divider,y=Math.max(f,0),p=Math.max(l-h,0),u=Math.min(m-f,r),w=Math.min(l-d-p,l);let k=1/0,v=1/0;return n.createElement(n.Fragment,null,n.createElement("rect",{x:y,y:p,width:u,height:w,fill:x.palette.background.default}),n.createElement("g",null,s.map((e=>{const t=e.offsetPx-i.offsetPx,r=Math.floor(t)!==Math.floor(k);return r&&(k=t),r?n.createElement("line",{key:JSON.stringify(e),x1:t,y1:0,x2:t,y2:l,stroke:g}):null})),c.map((e=>{const t=l-(e.offsetPx-o.offsetPx),a=Math.floor(t)!==Math.floor(v);return a&&(v=t),a?n.createElement("line",{key:JSON.stringify(e),x1:0,y1:t,x2:r,y2:t,stroke:g}):null})),n.createElement("line",{x1:m,y1:0,x2:m,y2:l,stroke:g}),n.createElement("line",{x1:0,y1:l-h,x2:r,y2:l-h,stroke:g})),t)}));function o({model:e,children:t}){const{viewWidth:r,viewHeight:l}=e;return n.createElement("svg",{width:r,height:l,style:{background:"rgba(0,0,0,0.12)"}},n.createElement(i,{model:e},t))}},91077:(e,t,r)=>{r.d(t,{renderToSvg:()=>d});var n=r(66204),l=r(9721),a=r(99247),i=r(31211),o=r(34599),s=r(43902),c=r(94891),m=r(87213),h=r(92368);function f({width:e,height:t}){const r=(0,h.Z)();return n.createElement("rect",{x:0,y:0,width:e,height:t,fill:(0,i.stripAlpha)(r.palette.background.default)})}async function d(e,t){await(0,a.when)((()=>e.initialized));const{themeName:r="default",Wrapper:h=(({children:e})=>n.createElement(n.Fragment,null,e))}=t,d=(0,i.getSession)(e),x=d.allThemes?.()[r],{width:g,borderX:y,viewWidth:p,viewHeight:u,tracks:w,height:k}=e,v=await Promise.all(w.map((async e=>{const r=e.displays[0];return await(0,a.when)((()=>void 0===r.ready||r.ready)),{track:e,result:await r.renderSvg({...t,theme:x})}}))),E=g+100;return(0,l.uS)(n.createElement(o.Z,{theme:(0,s.createJBrowseTheme)(x)},n.createElement(h,null,n.createElement("svg",{width:g,height:k,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:[0,0,E,k].toString()},n.createElement(f,{width:E,height:k}),n.createElement(m.i1,{model:e}),n.createElement("g",{transform:`translate(${y} 0)`},n.createElement(c.B,{model:e}),n.createElement("defs",null,n.createElement("clipPath",{id:"clip-ruler"},n.createElement("rect",{x:0,y:0,width:p,height:u}))),n.createElement("g",{clipPath:"url(#clip-ruler)"},v.map((({result:e},t)=>n.createElement("g",{key:t},e))))),n.createElement("g",{transform:`translate(${y} ${u})`},n.createElement(m.WK,{model:e}))))))}}}]);
//# sourceMappingURL=2093.44466ebe.chunk.js.map