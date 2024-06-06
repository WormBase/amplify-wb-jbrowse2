"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[2820,5904],{12820:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var s=n(99834),a=n(7706),r=n(35904);const o="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;class c extends r.default{async setupPre(e){const t=(0,s.openLocation)(this.getConf("deltaLocation"),this.pluginManager),n=await t.readFile(e);return function(e){let t="",n="",s=0,a=0,r=0,c=0,i=0,u=0,l=[],f=0,m=0,d=!1;const h=[],p=new RegExp(/^>(\S+)\s+(\S+)\s+(\d+)\s+(\d+)/);let g=0,b=0;for(;g<e.length;){const x=e.indexOf("\n",g);if(-1===x)break;const y=e.slice(g,x),w=(o?.decode(y)||y.toString()).trim();if(g=x+1,b++,w){const e=p.exec(w);if(null!==e){t=e[1],n=e[2],d=!0;continue}if(!d)continue;const o=w.split(" ");if(7===o.length){const e=+o[0],t=+o[1],n=+o[2],d=+o[3];i=e<t&&n<d||e>t&&n>d?1:-1,r=+(e<t?e:t)-1,c=+(t>e?t:e),s=+(n<d?n:d)-1,a=+(d>n?d:n),f=m=0,u=+o[4],l=[]}else if(1===o.length){const e=+o[0];if(0===e){let e=0;const o=[];if(c-r-f!=a-s-m)throw new Error(`inconsistent alignment on line ${b}`);l.push(c-r-f<<4);for(const t of l){const n=t>>4;e+=n,o.push(n+"MID".charAt(15&l[b]))}h.push({qname:n,qstart:s,qend:a,tname:t,tstart:r,tend:c,strand:i,extra:{numMatches:e-u,blockLen:e,mappingQual:0,NM:u,cg:o.join("")}})}else if(e>0){const t=e-1;f+=t+1,m+=t,t>0&&l.push(t<<4),l.length>0&&2==(15&l[l.length-1])?l[l.length-1]+=16:l.push(18)}else{const t=-e-1;f+=t,m+=t+1,t>0&&l.push(t<<4),l.length>0&&1==(15&l[l.length-1])?l[l.length-1]+=16:l.push(17)}}}}return h}(31===(r=n)[0]&&139===r[1]&&8===r[2]?await(0,a.unzip)(n):n);var r}}},35904:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var s=n(46377),a=n(32595),r=n(99834),o=n(66885),c=n(68584),i=n(7706),u=n(63352),l=n(72147),f=n(78054);function m(e){const[t,n]=e.reduce((([e,t],[n,s])=>[e+n*s,t+s]),[0,0]);return t/n}const{parseCigar:d}=u.MismatchParser;class h extends s.BaseFeatureDataAdapter{static capabilities=["getFeatures","getRefNames"];async setup(e){return this.setupP||(this.setupP=this.setupPre(e).catch((e=>{throw this.setupP=void 0,e}))),this.setupP}async setupPre(e){const t=this.pluginManager,n=(0,r.openLocation)(this.getConf("pafLocation"),t),s=await n.readFile(e),a=(0,f.bf)(s)?await(0,i.unzip)(s):s;return(0,f.PX)(a,f.xI)}async hasDataForRefName(){return!0}getAssemblyNames(){const e=this.getConf("assemblyNames");return 0===e.length?[this.getConf("queryAssembly"),this.getConf("targetAssembly")]:e}async getRefNames(e={}){const t=e.regions?.[0].assemblyName,n=await this.setup(e),s=this.getAssemblyNames().indexOf(t);if(-1!==s){const e=new Set;for(const t of n)e.add(0===s?t.qname:t.tname);return[...e]}return console.warn("Unable to do ref renaming on adapter"),[]}getFeatures(e,t={}){return(0,o.ObservableCreate)((async n=>{let s=await this.setup(t);const{config:r}=t;r&&"meanQueryIdentity"===(0,c.readConfObject)(r,"colorBy")&&(s=function(e){const t={};for(const n of e){const e=n.qname+"-"+n.tname;t[e]||(t[e]={quals:[],len:[]}),t[e].quals.push(n.extra.mappingQual),t[e].len.push(n.extra.blockLen||1)}const n=Object.fromEntries(Object.entries(t).map((([e,t])=>[e,m((0,f.yU)(t.quals,t.len))])));for(const t of e){const e=t.qname+"-"+t.tname;t.extra.meanScore=n[e]}let s=1e4,a=0;for(const t of e)s=Math.min(t.extra.meanScore||0,s),a=Math.max(t.extra.meanScore||0,a);for(const t of e){const e=t.extra.meanScore||0;t.extra.meanScore=(e-s)/(a-s)}return e}(s));const o=this.getAssemblyNames(),{start:i,end:u,refName:h,assemblyName:p}=e,g=o.indexOf(p),b=0===g;-1===g&&(console.warn(`${p} not found in this adapter`),n.complete());for(let e=0;e<s.length;e++){const t=s[e];let r=0,c=0,m="",g="",x=0,y=0;b?(r=t.qstart,c=t.qend,m=t.qname,g=t.tname,x=t.tstart,y=t.tend):(r=t.tstart,c=t.tend,m=t.tname,g=t.qname,x=t.qstart,y=t.qend);const{extra:w,strand:q}=t;if(m===h&&(0,a.R6)(i,u,r,c)){const{numMatches:t=0,blockLen:s=1,cg:a,...i}=w;let u=w.cg;w.cg&&(b&&-1===q?u=(0,f.qm)(d(w.cg)).join(""):b&&(u=(0,f.gJ)(w.cg))),n.next(new l.A({uniqueId:e+p,assemblyName:p,start:r,end:c,type:"match",refName:m,strand:q,...i,CIGAR:u,syntenyId:e,identity:t/s,numMatches:t,blockLen:s,mate:{start:x,end:y,refName:g,assemblyName:o[+b]}}))}}n.complete()}))}freeResources(){}}},72147:(e,t,n)=>{n.d(t,{A:()=>o});var s=n(99546),a=n(63352);const{getMismatches:r}=a.MismatchParser;class o extends s.SimpleFeature{get(e){return"mismatches"===e?r(this.get("CIGAR")):super.get(e)}}},78054:(e,t,n)=>{n.d(t,{PX:()=>u,TA:()=>o,bf:()=>a,fY:()=>r,gJ:()=>m,qm:()=>f,xI:()=>l,yU:()=>c});var s=n(7706);function a(e){return 31===e[0]&&139===e[1]&&8===e[2]}function r(e){return new Map(e.split(/\n|\r\n|\r/).filter((e=>!!e||e.startsWith("#"))).map((e=>{const[t,n,s,a,r,o]=e.split("\t");return[a,{refName:t,start:+n,end:+s,score:+r,name:a,strand:"-"===o?-1:1}]})))}async function o(e,t){const n=await e.readFile(t);return new TextDecoder("utf8",{fatal:!0}).decode(a(n)?await(0,s.unzip)(n):n)}function c(e,t){return e.map(((e,n)=>[e,t[n]]))}const i="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function u(e,t){let n=0;const s=[];for(;n<e.length;){const a=e.indexOf("\n",n);if(-1===a)break;const r=e.slice(n,a),o=(i?.decode(r)||r.toString()).trim();o&&s.push(t(o)),n=a+1}return s}function l(e){const[t,,n,s,a,r,,o,c,i,u,l,...f]=e.split("\t");return{tname:r,tstart:+o,tend:+c,qname:t,qstart:+n,qend:+s,strand:"-"===a?-1:1,extra:{numMatches:+i,blockLen:+u,mappingQual:+l,...Object.fromEntries(f.map((e=>{const t=e.indexOf(":");return[e.slice(0,t),e.slice(t+3)]})))}}}function f(e){const t=[];for(let n=e.length-2;n>=0;n-=2){t.push(e[n]);const s=e[n+1];"D"===s?t.push("I"):"I"===s?t.push("D"):t.push(s)}return t}function m(e){return e.replaceAll("D","K").replaceAll("I","D").replaceAll("K","I")}}}]);
//# sourceMappingURL=2820.a3faecf3.chunk.js.map