(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5441],{27409:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>f});var a=s(46377),r=s(32595),n=s(99834),i=s(66885),d=s(99546),o=s(68120),l=s(92202),c=s(68584);class f extends a.BaseFeatureDataAdapter{constructor(e,t,s){super(e,t,s);const a=this.pluginManager,r=(0,c.readConfObject)(e,"gffGzLocation"),i=(0,c.readConfObject)(e,["index","indexType"]),d=(0,c.readConfObject)(e,["index","location"]),l=(0,c.readConfObject)(e,"dontRedispatch");this.dontRedispatch=l||["chromosome","contig","region"];const f=(0,n.openLocation)(d,a);this.gff=new o.wD({filehandle:(0,n.openLocation)(r,a),csiFilehandle:"CSI"===i?f:void 0,tbiFilehandle:"CSI"!==i?f:void 0,chunkCacheSize:52428800,renameRefSeqs:e=>e})}async getRefNames(e={}){return this.gff.getReferenceSequenceNames(e)}async getHeader(){return this.gff.getHeader()}getFeatures(e,t={}){return(0,i.ObservableCreate)((async s=>{const a=await this.gff.getMetadata();await this.getFeaturesHelper(e,t,a,s,!0)}),t.signal)}async getFeaturesHelper(e,t={},s,a,n,i=e){try{const d=[];if(await this.gff.getLines(e.refName,e.start,e.end,((e,t)=>{d.push(this.parseLine(s.columnNumbers,e,t))})),n&&d.length){let r=1/0,n=-1/0;if(d.forEach((e=>{const t=e.fields[2];if(!this.dontRedispatch.includes(t)){const t=e.start-1;t<r&&(r=t),e.end>n&&(n=e.end)}})),n>e.end||r<e.start)return void await this.getFeaturesHelper({...e,start:r,end:n},t,s,a,!1,e)}const o=d.map((e=>(e.fields[8]&&"."!==e.fields[8]?e.fields[8].includes("_lineHash")||(e.fields[8]+=`;_lineHash=${e.lineHash}`):e.fields[8]=`_lineHash=${e.lineHash}`,e.fields.join("\t")))).join("\n");l.A.parseStringSync(o,{parseFeatures:!0,parseComments:!1,parseDirectives:!1,parseSequences:!1,disableDerivesFromReferences:!0}).forEach((e=>this.formatFeatures(e).forEach((e=>{(0,r.R6)(e.get("start"),e.get("end"),i.start,i.end)&&"region"!==e.get("type")&&a.next(e)})))),a.complete()}catch(e){a.error(e)}}parseLine(e,t,s){const a=t.split("\t");return{start:+a[e.start-1],end:+a[e.end-1],lineHash:s,fields:a}}formatFeatures(e){return e.map((e=>new d.SimpleFeature({data:this.featureData(e),id:`${this.id}-offset-${e.attributes._lineHash[0]}`})))}featureData(e){const t={...e};t.start-=1,"+"===e.strand?t.strand=1:"-"===e.strand?t.strand=-1:"."===e.strand?t.strand=0:t.strand=void 0,t.phase=Number(e.phase),t.refName=e.seq_id,null===e.score&&delete t.score,null===e.phase&&delete t.score;const s=new Set(["start","end","seq_id","score","type","source","phase","strand"]),a=e.attributes||{};for(const e of Object.keys(a)){let r=e.toLowerCase();if(s.has(r)&&(r+="2"),null!==a[e]){let s=a[e];Array.isArray(s)&&1===s.length&&([s]=s),t[r]=s}}return t.refName=t.seq_id,e.child_features&&e.child_features.length>0&&(t.subfeatures=e.child_features.flatMap((e=>e.map((e=>this.featureData(e)))))),delete t.child_features,delete t.data,delete t._linehash,delete t.attributes,delete t.seq_id,t}freeResources(){}}},85392:()=>{},43951:()=>{}}]);
//# sourceMappingURL=5441.ff0dfcf9.chunk.js.map