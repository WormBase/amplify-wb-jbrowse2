"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[8100],{38100:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(88385),s=r(32078),a=r(56798),c=r(59062),o=r(16979),i=r(85291),d=r(45198),u=r(99249),h=r(71396);class l extends a.BaseFeatureDataAdapter{constructor(){super(...arguments),this.cached=void 0}async configurePre(e){const t=this.pluginManager,r=new n.Q({filehandle:(0,c.openLocation)(this.getConf("bigBedLocation"),t)}),a=await r.getHeader(e);return{bigbed:r,header:a,parser:new s.Z({autoSql:a.autoSql})}}async configure(e){return this.cached||(this.cached=this.configurePre(e).catch((e=>{throw this.cached=void 0,e}))),this.cached}async getRefNames(e){const{header:t}=await this.configure(e);return Object.keys(t.refsByName)}async getHeader(e){const{parser:t,header:r}=await this.configure(e),{version:n,fileType:s}=r,{fields:a,...c}=t.autoSql;return{version:n,fileType:s,autoSql:{...c},fields:Object.fromEntries(a.map((e=>{let{name:t,comment:r}=e;return[t,r]})))}}getFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{refName:r,start:n,end:s}=e,{signal:a}=t;return(0,o.ObservableCreate)((async e=>{try{const{parser:c,bigbed:o}=await this.configure(t);(await o.getFeatureStream(r,n,s,{signal:a,basesPerSpan:s-n})).pipe((0,d.J)(),(0,u.U)((e=>{const t=c.parseLine("".concat(r,"\t").concat(e.start,"\t").concat(e.end,"\t").concat(e.rest),{uniqueId:e.uniqueId}),{blockCount:n,blockSizes:s,blockStarts:a,chromStarts:o}=t;if(n){const r=o||a||[],c=s,i=e.start;t.subfeatures=[];for(let s=0;s<n;s+=1){const n=(r[s]||0)+i,a=n+(c[s]||0);t.subfeatures.push({uniqueId:"".concat(e.uniqueId,"-").concat(s),start:n,end:a,type:"block"})}}if(void 0===e.uniqueId)throw new Error("invalid bbi feature");const{chromStart:d,chromEnd:u,chrom:l,...f}=t,p=new i.Z({id:"".concat(this.id,"-").concat(e.uniqueId),data:{...f,start:e.start,end:e.end,refName:r}});return function(e){return e.get("thickStart")&&e.get("blockCount")&&0!==e.get("strand")}(p)?(0,h.d)(p):p}))).subscribe(e)}catch(c){e.error(c)}}),t.signal)}freeResources(){}}},71396:(e,t,r)=>{r.d(t,{P:()=>a,d:()=>s});var n=r(90872);function s(e){const t=e.children(),r=e.get("thickStart"),s=e.get("thickEnd");if(!r&&!s)return e;const a=t?t.filter((e=>"block"===e.get("type"))).sort(((e,t)=>e.get("start")-t.get("start"))):[],c=[];a.forEach((t=>{const n=t.get("start"),a=t.get("end");if(r>=a){const t=e.get("strand")>0?"five":"three";c.push({type:"".concat(t,"_prime_UTR"),start:n,end:a})}else if(r>n&&r<a&&s>=a){const t=e.get("strand")>0?"five":"three";c.push({type:"".concat(t,"_prime_UTR"),start:n,end:r},{type:"CDS",start:r,end:a})}else if(r<=n&&s>=a)c.push({type:"CDS",start:n,end:a});else if(r>n&&r<a&&s<a){const t=e.get("strand")>0?"five":"three",o=e.get("strand")>0?"three":"five";c.push({type:"".concat(t,"_prime_UTR"),start:n,end:r},{type:"CDS",start:r,end:s},{type:"".concat(o,"_prime_UTR"),start:s,end:a})}else if(r<=n&&s>n&&s<a){const t=e.get("strand")>0?"three":"five";c.push({type:"CDS",start:n,end:s},{type:"".concat(t,"_prime_UTR"),start:s,end:a})}else if(s<=n){const t=e.get("strand")>0?"three":"five";c.push({type:"".concat(t,"_prime_UTR"),start:n,end:a})}}));const o=Object.fromEntries(e.tags().map((t=>[t,e.get(t)])));return o.subfeatures=c,o.type="mRNA",o.uniqueId=e.id(),delete o.chromStarts,delete o.chromStart,delete o.chromEnd,delete o.chrom,delete o.blockStarts,delete o.blockSizes,delete o.blockCount,delete o.thickStart,delete o.thickEnd,new n.SimpleFeature({data:o,id:e.id()})}function a(e,t,r,a,c,o,i,d){const u=e.split("\t"),h=u[t],l=+u[r],f=r===a?1:0,p=+u[a]+f,b=d?function(e,t){return Object.fromEntries(t.split("\t").map(((t,r)=>[e[r],t])))}(d,e):o.parseLine(e,{uniqueId:i}),{blockCount:g,blockSizes:m,blockStarts:S,chromStarts:k}=b;if(g){const e=k||S||[],t=m,r=l;b.subfeatures=[];for(let n=0;n<g;n+=1){const s=(e[n]||0)+r,a=s+(t[n]||0);b.subfeatures.push({uniqueId:"".concat(i,"-").concat(n),start:s,end:a,type:"block"})}}c&&(b.score=+b[c]),delete b.chrom,delete b.chromStart,delete b.chromEnd;const y=new n.SimpleFeature({...b,start:l,end:p,refName:h,uniqueId:i});return y.get("thickStart")?s(y):y}}}]);
//# sourceMappingURL=8100.a3d849fd.chunk.js.map