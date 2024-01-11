"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[7647,8111],{77647:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var s=n(59062),a=n(31238),r=n(98111);const o="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;class c extends r.default{async setupPre(e){const t=(0,s.openLocation)(this.getConf("deltaLocation"),this.pluginManager),n=await t.readFile(e);return function(e){let t="",n="",s=0,a=0,r=0,c=0,i=0,l=0,u=[],f=0,d=0,m=!1;const p=[],h=new RegExp(/^>(\S+)\s+(\S+)\s+(\d+)\s+(\d+)/);let g=0,b=0;for(;g<e.length;){const y=e.indexOf("\n",g);if(-1===y)break;const x=e.slice(g,y),w=((null===o||void 0===o?void 0:o.decode(x))||x.toString()).trim();if(g=y+1,b++,w){const e=h.exec(w);if(null!==e){t=e[1],n=e[2],m=!0;continue}if(!m)continue;const o=w.split(" ");if(7===o.length){const e=+o[0],t=+o[1],n=+o[2],m=+o[3];i=e<t&&n<m||e>t&&n>m?1:-1,r=+(e<t?e:t)-1,c=+(t>e?t:e),s=+(n<m?n:m)-1,a=+(m>n?m:n),f=d=0,l=+o[4],u=[]}else if(1===o.length){const e=+o[0];if(0===e){let e=0;const o=[];if(c-r-f!==a-s-d)throw new Error("inconsistent alignment on line ".concat(b));u.push(c-r-f<<4);for(const t of u){const n=t>>4;e+=n,o.push(n+"MID".charAt(15&u[b]))}p.push({qname:n,qstart:s,qend:a,tname:t,tstart:r,tend:c,strand:i,extra:{numMatches:e-l,blockLen:e,mappingQual:0,NM:l,cg:o.join("")}})}else if(e>0){const t=e-1;f+=t+1,d+=t,t>0&&u.push(t<<4),u.length>0&&2===(15&u[u.length-1])?u[u.length-1]+=16:u.push(18)}else{const t=-e-1;f+=t,d+=t+1,t>0&&u.push(t<<4),u.length>0&&1===(15&u[u.length-1])?u[u.length-1]+=16:u.push(17)}}}}return p}(function(e){return 31===e[0]&&139===e[1]&&8===e[2]}(n)?await(0,a.unzip)(n):n)}}},98111:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var s=n(56798),a=n(19881),r=n(59062),o=n(16979),c=n(43800),i=n(31238),l=n(45627),u=n(90872);const{getMismatches:f}=l.MismatchParser;class d extends u.SimpleFeature{get(e){return"mismatches"===e?f(this.get("CIGAR")):super.get(e)}}var m=n(85579);function p(e){const[t,n]=e.reduce(((e,t)=>{let[n,s]=e,[a,r]=t;return[n+a*r,s+r]}),[0,0]);return t/n}function h(e){const[t,,n,s,a,r,,o,c,i,l,u,...f]=e.split("\t");return{tname:r,tstart:+o,tend:+c,qname:t,qstart:+n,qend:+s,strand:"-"===a?-1:1,extra:{numMatches:+i,blockLen:+l,mappingQual:+u,...Object.fromEntries(f.map((e=>{const t=e.indexOf(":");return[e.slice(0,t),e.slice(t+3)]})))}}}function g(e){const t=[];for(let n=e.length-2;n>=0;n-=2){t.push(e[n]);const s=e[n+1];"D"===s?t.push("I"):"I"===s?t.push("D"):t.push(s)}return t}const{parseCigar:b}=l.MismatchParser;class y extends s.BaseFeatureDataAdapter{constructor(){super(...arguments),this.setupP=void 0}async setup(e){return this.setupP||(this.setupP=this.setupPre(e).catch((e=>{throw this.setupP=void 0,e}))),this.setupP}async setupPre(e){const t=this.pluginManager,n=(0,r.openLocation)(this.getConf("pafLocation"),t),s=await n.readFile(e),a=(0,m.lq)(s)?await(0,i.unzip)(s):s;return(0,m.WU)(a,h)}async hasDataForRefName(){return!0}getAssemblyNames(){const e=this.getConf("assemblyNames");if(0===e.length){return[this.getConf("queryAssembly"),this.getConf("targetAssembly")]}return e}async getRefNames(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=null===(e=t.regions)||void 0===e?void 0:e[0].assemblyName,s=await this.setup(t),a=this.getAssemblyNames().indexOf(n);if(-1!==a){const e=new Set;for(const t of s)e.add(0===a?t.qname:t.tname);return[...e]}return console.warn("Unable to do ref renaming on adapter"),[]}getFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,o.ObservableCreate)((async n=>{let s=await this.setup(t);const{config:r}=t;r&&"meanQueryIdentity"===(0,c.readConfObject)(r,"colorBy")&&(s=function(e){const t={};for(const r of e){const e=r.qname+"-"+r.tname;t[e]||(t[e]={quals:[],len:[]}),t[e].quals.push(r.extra.mappingQual),t[e].len.push(r.extra.blockLen||1)}const n=Object.fromEntries(Object.entries(t).map((e=>{let[t,n]=e;return[t,p((0,m.$R)(n.quals,n.len))]})));for(const r of e){const e=r.qname+"-"+r.tname;r.extra.meanScore=n[e]}let s=1e4,a=0;for(const r of e)s=Math.min(r.extra.meanScore||0,s),a=Math.max(r.extra.meanScore||0,a);for(const r of e){const e=r.extra.meanScore||0;r.extra.meanScore=(e-s)/(a-s)}return e}(s));const o=this.getAssemblyNames(),i=o.indexOf(e.assemblyName),{start:l,end:u,refName:f,assemblyName:h}=e;-1===i&&(console.warn("".concat(h," not found in this adapter")),n.complete());for(let e=0;e<s.length;e++){const t=s[e];let r=0,c=0,m="",p="",h=0,y=0;const x=0===i,w=o[+!x];0===i?(r=t.qstart,c=t.qend,m=t.qname,p=t.tname,h=t.tstart,y=t.tend):(r=t.tstart,c=t.tend,m=t.tname,p=t.qname,h=t.qstart,y=t.qend);const{extra:q,strand:v}=t;if(m===f&&(0,a.qY)(l,u,r,c)){const{numMatches:t=0,blockLen:s=1,cg:a,...i}=q;let l=q.cg;q.cg&&(x&&-1===v?l=g(b(q.cg)).join(""):x&&(l=q.cg.replaceAll("D","K").replaceAll("I","D").replaceAll("K","I"))),n.next(new d({uniqueId:e+w,assemblyName:w,start:r,end:c,type:"match",refName:m,strand:v,...i,CIGAR:l,syntenyId:e,identity:t/s,numMatches:t,blockLen:s,mate:{start:h,end:y,refName:p,assemblyName:o[+x]}}))}}n.complete()}))}freeResources(){}}y.capabilities=["getFeatures","getRefNames"]},85579:(e,t,n)=>{n.d(t,{$R:()=>c,SN:()=>r,WU:()=>l,lq:()=>a,pJ:()=>o});var s=n(31238);function a(e){return 31===e[0]&&139===e[1]&&8===e[2]}function r(e){return new Map(e.split(/\n|\r\n|\r/).filter((e=>!!e||e.startsWith("#"))).map((e=>{const[t,n,s,a,r,o]=e.split("\t");return[a,{refName:t,start:+n,end:+s,score:+r,name:a,strand:"-"===o?-1:1}]})))}async function o(e,t){const n=await e.readFile(t);return new TextDecoder("utf8",{fatal:!0}).decode(a(n)?await(0,s.unzip)(n):n)}function c(e,t){return e.map(((e,n)=>[e,t[n]]))}const i="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;function l(e,t){let n=0;const s=[];for(;n<e.length;){const a=e.indexOf("\n",n);if(-1===a)break;const r=e.slice(n,a),o=((null===i||void 0===i?void 0:i.decode(r))||r.toString()).trim();o&&s.push(t(o)),n=a+1}return s}}}]);
//# sourceMappingURL=7647.ff45fb07.chunk.js.map