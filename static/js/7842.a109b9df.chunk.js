"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7842],{57842:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var r=s(46377),a=s(99834);const n=class extends r.BaseAdapter{async setupPre(){const e=this.pluginManager,t=(0,a.openLocation)(this.getConf("chromSizesLocation"),e),s=await t.readFile("utf8");return Object.fromEntries(s.split(/\n|\r\n|\r/).map((e=>e.trim())).filter((e=>!!e)).map((e=>{const[t,s]=e.split("\t");return[t,+s]})))}async setup(){return this.setupP||(this.setupP=this.setupPre().catch((e=>{throw this.setupP=void 0,e}))),this.setupP}async getRegions(){const e=await this.setup();return Object.keys(e).map((t=>({refName:t,start:0,end:e[t]})))}getHeader(){return{}}freeResources(){}}}}]);
//# sourceMappingURL=7842.a109b9df.chunk.js.map