"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5873],{85873:(e,t,n)=>{n.d(t,{drawFeats:()=>f});var o=n(31211),r=n(41535),s=n(74979),a=n(76149);function i(e){return 2*Math.random()*e-e}function l(e,t,n,o){e.strokeStyle=o,e.beginPath(),e.moveTo(t,0),e.lineTo(t,n),e.stroke()}function f(e,t,n,f){const{chainData:c,colorBy:d,drawInter:g,drawLongRange:h,lineWidthSetting:u,jitterVal:b}=e;if(!c)return;const m=(0,o.getContainingView)(e),{assemblyManager:k}=(0,o.getSession)(e),{chains:S,stats:y}=c,P=(0,a.F)(c),p=k.get(m.assemblyNames[0]),v=d?.type||"insertSizeAndOrientation";if(p){t.lineWidth=u;for(const e of S)if(1===e.length&&h){const t=e[0];if(!P||8&t.flags){const e=[t,...(0,s.featurizeSA)(t.SA,t.id,t.strand,t.name)].sort(((e,t)=>e.clipPos-t.clipPos));for(let t=0;t<e.length-1;t++)w(e[t],e[t+1],p,!0)}else w(t,{refName:t.next_ref||"",start:t.next_pos||0,end:t.next_pos||0,strand:t.strand},p,!0)}else{const t=P?e.filter((e=>!(2048&e.flags||8&e.flags))):e.sort(((e,t)=>e.clipPos-t.clipPos)).filter((e=>!(256&e.flags)));for(let e=0;e<t.length-1;e++)w(t[e],t[e+1],p,!1)}}function w(e,n,o,s){const a=e.strand,c=n.strand,d=-1===c,h=-1===a?e.start:e.end,u=P?d?n.start:n.end:d?n.end:n.start,k=o.getCanonicalRefName(e.refName)||e.refName,S=o.getCanonicalRefName(n.refName)||n.refName,p=m.bpToPx({refName:k,coord:h})?.offsetPx,w=m.bpToPx({refName:S,coord:u})?.offsetPx;if(void 0!==p&&void 0!==w){const o=(w-p)/2,d=Math.abs(o),g=p-m.offsetPx,h=w-m.offsetPx,u=d>1e4;s&&u?(t.moveTo(g,0),t.beginPath()):(t.beginPath(),t.moveTo(g,0)),s&&u?t.strokeStyle="red":P?"insertSizeAndOrientation"===v?t.strokeStyle=(0,r.k5)(e,n,y)[0]:"orientation"===v?t.strokeStyle=(0,r.uE)(e)[0]:"insertSize"===v?t.strokeStyle=(0,r.Wh)(e,n,y)?.[0]||"grey":"gradient"===v&&(t.strokeStyle=`hsl(${10*Math.log10(d)},50%,50%)`):"orientation"===v||"insertSizeAndOrientation"===v?t.strokeStyle=-1===a&&1===c?"navy":1===a&&-1===c?"green":"grey":"gradient"===v&&(t.strokeStyle=`hsl(${10*Math.log10(d)},50%,50%)`);const k=g+2*o,S=Math.min(f+i(b),d);s?d>1e5?(l(t,g+i(b),f,"red"),l(t,h+i(b),f,"red")):u?(t.arc(g+o+i(b),0,d,0,Math.PI),t.stroke()):(t.bezierCurveTo(g+i(b),S,k,S,k+i(b),0),t.stroke()):(t.bezierCurveTo(g+i(b),S,k,S,k+i(b),0),t.stroke())}else p&&g&&l(t,p-m.offsetPx,f,"purple")}}},76149:(e,t,n)=>{function o(e){for(const t of e.chains.values())if(1&t[0].flags)return!0;return!1}n.d(t,{F:()=>o})}}]);
//# sourceMappingURL=5873.ad7d3c55.chunk.js.map