"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[3167],{23167:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var n=s(46377),a=s(66885),r=s(99834),i=s(68120),c=s(78054),o=s(72147);class l extends n.BaseFeatureDataAdapter{static capabilities=["getFeatures","getRefNames"];constructor(e,t,s){super(e,t,s);const n=this.getConf("pifGzLocation"),a=this.getConf(["index","indexType"]),c=this.getConf(["index","location"]),o=this.pluginManager;this.pif=new i.wD({filehandle:(0,r.openLocation)(n,o),csiFilehandle:"CSI"===a?(0,r.openLocation)(c,o):void 0,tbiFilehandle:"CSI"!==a?(0,r.openLocation)(c,o):void 0,chunkCacheSize:52428800})}async getHeader(){return this.pif.getHeader()}getAssemblyNames(){const e=this.getConf("assemblyNames");return 0===e.length?[this.getConf("queryAssembly"),this.getConf("targetAssembly")]:e}async hasDataForRefName(){return!0}async getRefNames(e={}){const t=e.regions?.[0]?.assemblyName;if(!t)throw new Error("no assembly name provided");const s=this.getAssemblyNames().indexOf(t),n=await this.pif.getReferenceSequenceNames(e);return 0===s?n.filter((e=>e.startsWith("q"))).map((e=>e.slice(1))):1===s?n.filter((e=>e.startsWith("t"))).map((e=>e.slice(1))):[]}getFeatures(e,t={}){return(0,a.ObservableCreate)((async s=>{const{assemblyName:n}=e,a=this.getAssemblyNames(),r=0===a.indexOf(n),i=r?"q":"t";await this.pif.getLines(i+e.refName,e.start,e.end,{lineCallback:(e,t)=>{const i=(0,c.xI)(e),l=i.qname.slice(1),u=i.qstart,m=i.qend,f=i.tname,d=i.tstart,h=i.tend,{extra:p,strand:g}=i,{numMatches:b=0,blockLen:y=1,cg:w,...x}=p;s.next(new o.A({uniqueId:t+n,assemblyName:n,start:u,end:m,type:"match",refName:l,strand:g,...x,CIGAR:p.cg,syntenyId:t,identity:b/y,numMatches:b,blockLen:y,mate:{start:d,end:h,refName:f,assemblyName:a[+r]}}))},stopToken:t.stopToken}),s.complete()}))}freeResources(){}}},72147:(e,t,s)=>{s.d(t,{A:()=>i});var n=s(99546),a=s(42781);const{getMismatches:r}=a.aF;class i extends n.SimpleFeature{get(e){return"mismatches"===e?r(this.get("CIGAR")):super.get(e)}}},78054:(e,t,s)=>{s.d(t,{PX:()=>c,TA:()=>r,fY:()=>a,gJ:()=>u,qm:()=>l,xI:()=>o,yU:()=>i});var n=s(99546);function a(e){return new Map(e.split(/\n|\r\n|\r/).filter((e=>!!e||e.startsWith("#"))).map((e=>{const[t,s,n,a,r,i]=e.split("\t");return[a,{refName:t,start:+s,end:+n,score:+r,name:a,strand:"-"===i?-1:1}]})))}async function r(e,t){const s=await(0,n.fetchAndMaybeUnzip)(e,t);return new TextDecoder("utf8").decode(s)}function i(e,t){return e.map(((e,s)=>[e,t[s]]))}function c(e,t){let s=0;const n=[],a=new TextDecoder("utf8");for(;s<e.length;){const r=e.indexOf("\n",s);if(-1===r)break;const i=e.subarray(s,r),c=a.decode(i).trim();if(c){const e=t(c);e&&n.push(e)}s=r+1}return n}function o(e){const[t,,s,n,a,r,,i,c,o,l,u,...m]=e.split("\t");return{tname:r,tstart:+i,tend:+c,qname:t,qstart:+s,qend:+n,strand:"-"===a?-1:1,extra:{numMatches:+o,blockLen:+l,mappingQual:+u,...Object.fromEntries(m.map((e=>{const t=e.indexOf(":");return[e.slice(0,t),e.slice(t+3)]})))}}}function l(e){const t=[];for(let s=e.length-2;s>=0;s-=2){t.push(e[s]);const n=e[s+1];"D"===n?t.push("I"):"I"===n?t.push("D"):t.push(n)}return t}function u(e){return e.replaceAll("D","K").replaceAll("I","D").replaceAll("K","I")}}}]);
//# sourceMappingURL=3167.271f6852.chunk.js.map