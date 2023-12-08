"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[9572,8111],{89572:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var s=n(59062),a=n(31238),r=n(98111);const o="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;function c(e,t,n,s,a,r,o,c,i){return{qname:e,qstart:t,qend:n,tname:a,tstart:r,tend:o,strand:"-"===s?-1:1,extra:{numMatches:i,blockLen:Math.max(n-t,o-r),mappingQual:0,cg:c}}}class i extends r.default{async setupPre(e){const t=(0,s.openLocation)(this.getConf("chainLocation"),this.pluginManager),n=await t.readFile(e);return function(e){let t="",n=0,s=0,a="",r="",i="",u=0,l=0,m=0,d="";const f=[];let p=0;for(;p<e.length;){const h=e.indexOf("\n",p);if(-1===h)break;const g=e.slice(p,h);p=h+1;const b=((null===o||void 0===o?void 0:o.decode(g))||g.toString()).trim().replaceAll(" ","\t").split("\t");if("chain"===b[0]){if(d&&f.push(c(a,u,l,i,t,n,s,d,m)),t=b[2],n=+b[5],s=+b[6],a=b[7],r=b[8],i=b[9],u=+b[10],l=+b[11],"-"===i){const e=u;u=+r-l,l=+r-e}m=0,d=""}else{const e=+b[0]||0,t=b.length>1?+b[1]:0,n=b.length>2?+b[2]:0;0!==e&&(m+=+e,d+=e+"M"),0!==n&&(d+=n+"I"),0!==t&&(d+=t+"D")}}return d&&c(a,u,l,i,t,n,s,d,m),f}(function(e){return 31===e[0]&&139===e[1]&&8===e[2]}(n)?await(0,a.unzip)(n):n)}}},98111:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var s=n(56798),a=n(19881),r=n(59062),o=n(16979),c=n(43800),i=n(31238),u=n(45627),l=n(90872);const{getMismatches:m}=u.MismatchParser;class d extends l.SimpleFeature{get(e){return"mismatches"===e?m(this.get("CIGAR")):super.get(e)}}var f=n(85579);function p(e){const[t,n]=e.reduce(((e,t)=>{let[n,s]=e,[a,r]=t;return[n+a*r,s+r]}),[0,0]);return t/n}function h(e){const[t,,n,s,a,r,,o,c,i,u,l,...m]=e.split("\t");return{tname:r,tstart:+o,tend:+c,qname:t,qstart:+n,qend:+s,strand:"-"===a?-1:1,extra:{numMatches:+i,blockLen:+u,mappingQual:+l,...Object.fromEntries(m.map((e=>{const t=e.indexOf(":");return[e.slice(0,t),e.slice(t+3)]})))}}}function g(e){const t=[];for(let n=e.length-2;n>=0;n-=2){t.push(e[n]);const s=e[n+1];"D"===s?t.push("I"):"I"===s?t.push("D"):t.push(s)}return t}const{parseCigar:b}=u.MismatchParser;class y extends s.BaseFeatureDataAdapter{constructor(){super(...arguments),this.setupP=void 0}async setup(e){return this.setupP||(this.setupP=this.setupPre(e).catch((e=>{throw this.setupP=void 0,e}))),this.setupP}async setupPre(e){const t=this.pluginManager,n=(0,r.openLocation)(this.getConf("pafLocation"),t),s=await n.readFile(e),a=(0,f.lq)(s)?await(0,i.unzip)(s):s;return(0,f.WU)(a,h)}async hasDataForRefName(){return!0}getAssemblyNames(){const e=this.getConf("assemblyNames");if(0===e.length){return[this.getConf("queryAssembly"),this.getConf("targetAssembly")]}return e}async getRefNames(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=null===(e=t.regions)||void 0===e?void 0:e[0].assemblyName,s=await this.setup(t),a=this.getAssemblyNames().indexOf(n);if(-1!==a){const e=new Set;for(const t of s)e.add(0===a?t.qname:t.tname);return[...e]}return console.warn("Unable to do ref renaming on adapter"),[]}getFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,o.ObservableCreate)((async n=>{let s=await this.setup(t);const{config:r}=t;r&&"meanQueryIdentity"===(0,c.readConfObject)(r,"colorBy")&&(s=function(e){const t={};for(const r of e){const e=r.qname+"-"+r.tname;t[e]||(t[e]={quals:[],len:[]}),t[e].quals.push(r.extra.mappingQual),t[e].len.push(r.extra.blockLen||1)}const n=Object.fromEntries(Object.entries(t).map((e=>{let[t,n]=e;return[t,p((0,f.$R)(n.quals,n.len))]})));for(const r of e){const e=r.qname+"-"+r.tname;r.extra.meanScore=n[e]}let s=1e4,a=0;for(const r of e)s=Math.min(r.extra.meanScore||0,s),a=Math.max(r.extra.meanScore||0,a);for(const r of e){const e=r.extra.meanScore||0;r.extra.meanScore=(e-s)/(a-s)}return e}(s));const o=this.getAssemblyNames(),i=o.indexOf(e.assemblyName),{start:u,end:l,refName:m,assemblyName:h}=e;-1===i&&(console.warn("".concat(h," not found in this adapter")),n.complete());for(let e=0;e<s.length;e++){const t=s[e];let r=0,c=0,f="",p="",h=0,y=0;const x=0===i,q=o[+!x];0===i?(r=t.qstart,c=t.qend,f=t.qname,p=t.tname,h=t.tstart,y=t.tend):(r=t.tstart,c=t.tend,f=t.tname,p=t.qname,h=t.qstart,y=t.qend);const{extra:w,strand:v}=t;if(f===m&&(0,a.qY)(u,l,r,c)){const{numMatches:t=0,blockLen:s=1,cg:a,...i}=w;let u=w.cg;w.cg&&(x&&-1===v?u=g(b(w.cg)).join(""):x&&(u=w.cg.replaceAll("D","K").replaceAll("I","D").replaceAll("K","I"))),n.next(new d({uniqueId:e+q,assemblyName:q,start:r,end:c,type:"match",refName:f,strand:v,...i,CIGAR:u,syntenyId:e,identity:t/s,numMatches:t,blockLen:s,mate:{start:h,end:y,refName:p,assemblyName:o[+x]}}))}}n.complete()}))}freeResources(){}}y.capabilities=["getFeatures","getRefNames"]},85579:(e,t,n)=>{n.d(t,{$R:()=>c,SN:()=>r,WU:()=>u,lq:()=>a,pJ:()=>o});var s=n(31238);function a(e){return 31===e[0]&&139===e[1]&&8===e[2]}function r(e){return new Map(e.split(/\n|\r\n|\r/).filter((e=>!!e||e.startsWith("#"))).map((e=>{const[t,n,s,a,r,o]=e.split("\t");return[a,{refName:t,start:+n,end:+s,score:+r,name:a,strand:"-"===o?-1:1}]})))}async function o(e,t){const n=await e.readFile(t);return new TextDecoder("utf8",{fatal:!0}).decode(a(n)?await(0,s.unzip)(n):n)}function c(e,t){return e.map(((e,n)=>[e,t[n]]))}const i="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;function u(e,t){let n=0;const s=[];for(;n<e.length;){const a=e.indexOf("\n",n);if(-1===a)break;const r=e.slice(n,a),o=((null===i||void 0===i?void 0:i.decode(r))||r.toString()).trim();o&&s.push(t(o)),n=a+1}return s}}}]);
//# sourceMappingURL=9572.fabecb95.chunk.js.map