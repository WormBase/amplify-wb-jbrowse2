"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[146,6167],{16167:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u,makeFeatures:()=>f});var r=s(72600),a=s(28777),n=s(95454),o=s(36349);function f(e){const t=new Map;for(const s of e)if(s){const e=new a.Z(s),r=e.get("refName");let n=t.get(r);n||(n=[],t.set(r,n)),n.push(e)}for(const e of t.values())e.sort(((e,t)=>e.get("start")-t.get("start")));return t}class u extends r.BaseFeatureDataAdapter{constructor(e,t,s){super(e,t,s);const r=(0,o.readConfObject)(e,"features");this.features=f(r||[])}async getRefNames(){return[...this.features.keys()]}async getRefNameAliases(){return[...this.features.values()].map((e=>({refName:e[0].get("refName"),aliases:e[0].get("aliases")})))}getFeatures(e){const{refName:t,start:s,end:r}=e;return(0,n.ObservableCreate)((async e=>{const a=this.features.get(t)||[];for(const t of a)t.get("end")>s&&t.get("start")<r&&e.next(t);e.complete()}))}freeResources(){}}},90146:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var r=s(72600),a=s(36349),n=s(16167);class o extends r.BaseAdapter{constructor(e,t,s){super(e,t,s);const r=(0,a.readConfObject)(e,"features");this.features=(0,n.makeFeatures)(r||[])}async getRegions(){const e=[];for(const[t,s]of this.features){let r;for(const a of s)r&&r.end>=a.get("start")&&r.start<=a.get("end")?r.end=a.get("end"):(r&&e.push(r),r={refName:t,start:a.get("start"),end:a.get("end")});r&&e.push(r)}return e.sort(((e,t)=>e.refName.localeCompare(t.refName))),e}freeResources(){}}}}]);
//# sourceMappingURL=146.fd38afc2.chunk.js.map