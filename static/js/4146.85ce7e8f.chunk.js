"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4146],{24146:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(56798),i=n(59062),r=n(16979),c=n(40441),s=n(98303),o=n(59131);const u=class extends a.BaseFeatureDataAdapter{constructor(){super(...arguments),this.configured=void 0}async configurePre(){const e=this.pluginManager,t=this.getConf("vcfGzLocation"),n=this.getConf(["index","location"]),a=this.getConf(["index","indexType"]),r=(0,i.openLocation)(t,e),o="CSI"===a,u=new c.pC({filehandle:r,csiFilehandle:o?(0,i.openLocation)(n,e):void 0,tbiFilehandle:o?void 0:(0,i.openLocation)(n,e),chunkCacheSize:52428800,chunkSizeLimit:1e9}),d=await u.getHeader();return{vcf:u,parser:new s.Z({header:d})}}async configure(){return this.configured||(this.configured=this.configurePre().catch((e=>{throw this.configured=void 0,e}))),this.configured}async getRefNames(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{vcf:t}=await this.configure();return t.getReferenceSequenceNames(e)}async getHeader(){const{vcf:e}=await this.configure();return e.getHeader()}async getMetadata(){const{parser:e}=await this.configure();return e.getMetadata()}getFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,r.ObservableCreate)((async n=>{const{refName:a,start:i,end:r}=e,{vcf:c,parser:s}=await this.configure();await c.getLines(a,i,r,{lineCallback:(e,t)=>{n.next(new o.Z({variant:s.parseLine(e),parser:s,id:"".concat(this.id,"-vcf-").concat(t)}))},...t}),n.complete()}),t.signal)}freeResources(){}}}}]);
//# sourceMappingURL=4146.85ce7e8f.chunk.js.map