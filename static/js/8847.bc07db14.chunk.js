"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8847],{48847:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var a=s(72600),r=s(9762),n=s(95454),o=s(31211),i=s(40011);const c=class extends a.BaseFeatureDataAdapter{gcMode="content";static capabilities=["hasLocalStats"];async configure(){const e=await(this.getSubAdapter?.(this.getConf("sequenceAdapter")));if(!e)throw new Error("Error getting subadapter");return e.dataAdapter}async getRefNames(){return(await this.configure()).getRefNames()}getFeatures(e,t){return(0,n.ObservableCreate)((async s=>{const a=await this.configure(),n=this.getConf("windowSize"),c=this.getConf("windowDelta"),u=1===n?1:n/2,g=1===n;let{start:d,end:l}=e;if(d=Math.max(0,d-u),l+=u,l<0||d>l)return void s.complete();const h=a.getFeatures({...e,start:d,end:l},t),w=await(0,r.z)(h.pipe((0,i.q)())),f=w[0]?.get("seq")||"";for(let e=u;e<f.length-u;e+=c){const t=g?f[e]:f.slice(e-u,e+u);let a=0,r=0,n=0;for(const e of t)"c"===e||"C"===e?a++:"g"!==e&&"G"!==e||r++,"N"!==e&&n++;const i=d;let l;"content"===this.gcMode?l=(r+a)/(n||1):"skew"===this.gcMode&&(l=(r-a)/(r+a||1)),s.next(new o.SimpleFeature({uniqueId:`${this.id}_${i+e}`,start:i+e,end:i+e+c,score:l}))}s.complete()}))}freeResources(){}}}}]);
//# sourceMappingURL=8847.bc07db14.chunk.js.map