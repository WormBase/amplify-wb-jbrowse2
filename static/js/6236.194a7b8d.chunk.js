(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6236],{78409:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var a=r(11987),s=r(56798),n=r(90872),i=r(59062),o=r(16979),c=r(26138),d=r(24201);class u{constructor(e,t){this.record=e,this._store=t}_get_name(){return this.record.readName}_get_start(){return this.record.alignmentStart-1}_get_end(){var e;return this.record.alignmentStart+(null!==(e=this.record.lengthOnRef)&&void 0!==e?e:1)-1}_get_cram_read_features(){return this.record.readFeatures}_get_type(){return"match"}_get_score(){return this.record.mappingQuality}_get_flags(){return this.record.flags}_get_strand(){return this.record.isReverseComplemented()?-1:1}_read_group_id(){var e;return null===(e=this._store.samHeader.readGroups)||void 0===e?void 0:e[this.record.readGroupId]}_get_qual(){return(this.record.qualityScores||[]).join(" ")}qualRaw(){return this.record.qualityScores}_get_refName(){return this._store.refIdToName(this.record.sequenceId)}_get_is_paired(){return!!this.record.mate}_get_pair_orientation(){return this.record.isPaired()?this.record.getPairOrientation():void 0}_get_template_length(){return this.record.templateLength||this.record.templateSize}_get_next_ref(){return this.record.mate?this._store.refIdToName(this.record.mate.sequenceId):void 0}_get_next_segment_position(){return this.record.mate?"".concat(this._store.refIdToName(this.record.mate.sequenceId),":").concat(this.record.mate.alignmentStart):void 0}_get_next_pos(){var e;return null===(e=this.record.mate)||void 0===e?void 0:e.alignmentStart}_get_tags(){const e=this._read_group_id(),{tags:t}=this.record;return void 0!==e?{...t,RG:e}:t}_get_seq(){return this.record.getReadBases()}_get_CIGAR(){return function(e,t,r,a){let s="",n="",i="M",o=0;if(!a)return"";const c=a.seq,d=a.start;let u=t,h=0,g=0;if(void 0!==e)for(const{code:l,refPos:f,sub:m,data:p}of e)if(h=f-u,s+=c.slice(u-d,f-d),u=f,g>0&&h&&(n+="".concat(g,"I"),g=0),o&&"M"!==i&&(n+="".concat(o).concat(i),o=0),h&&(i="M",o+=h),"b"===l){const e=p.split(","),t=String.fromCharCode(...e);s+=t,u+=t.length,o+=t.length}else"B"===l||"X"===l?(s+=m,u++,o++):"D"===l||"N"===l?(u+=p,o&&(n+="".concat(o).concat(i)),n+=p+l,o=0):"I"===l||"S"===l?(s+=p,o&&(n+="".concat(o).concat(i)),n+=p.length+l,o=0):"i"===l?(o&&(n+="".concat(o).concat(i)),g++,s+=p,o=0):"P"===l?(o&&(n+="".concat(o).concat(i)),n+="".concat(p,"P")):"H"===l&&(o&&(n+="".concat(o).concat(i)),n+="".concat(p,"H"),o=0);else h=r-s.length;return s.length!==r&&(h=r-s.length,s+=c.slice(u-d,u-d+h),o&&"M"!==i&&(n+="".concat(o).concat(i),o=0),i="M",o+=h),h&&g>0&&(n+="".concat(g,"I")),o&&(n+="".concat(o).concat(i)),n}(this.record.readFeatures,this.record.alignmentStart,this.record.readLength,this.record._refRegion)}tags(){return Object.getOwnPropertyNames(u.prototype).filter((e=>e.startsWith("_get_")&&"_get_mismatches"!==e&&"_get_cram_read_features"!==e)).map((e=>e.replace("_get_","")))}id(){return"".concat(this._store.id,"-").concat(this.record.uniqueId)}get(e){const t="_get_".concat(e);if(this[t])return this[t]()}parent(){}children(){}set(){}pairedFeature(){return!1}_get_clipPos(){const e=this.get("mismatches");if(e.length){const t=-1===this.get("strand")?e.at(-1):e[0],{type:r,cliplen:a}=t;if("softclip"===r||"hardclip"===r)return a}return 0}toJSON(){return{...Object.fromEntries(this.tags().map((e=>[e,this.get(e)])).filter((e=>void 0!==e[1]))),uniqueId:this.id()}}_get_mismatches(){const e=this.record.readFeatures,t=this.qualRaw();return function(e,t,r){if(!e)return[];const a=new Array(e.length);let s=0,n=0,i=0,o=0,c=t;for(const{refPos:d,code:u,pos:h,data:g,sub:l,ref:f}of e)if(o=i-c,c=i,o&&n>0&&(a[s++]={start:i,type:"insertion",base:"".concat(n),length:0},n=0),i=d-1-t,"X"===u)a[s++]={start:i,length:1,base:l,qual:null===r||void 0===r?void 0:r[h-1],altbase:null===f||void 0===f?void 0:f.toUpperCase(),type:"mismatch"};else if("I"===u)a[s++]={start:i,type:"insertion",base:"".concat(g.length),length:0};else if("N"===u)a[s++]={type:"skip",length:g,start:i,base:"N"};else if("S"===u){const e=g.length;a[s++]={start:i,type:"softclip",base:"S".concat(e),cliplen:e,length:1}}else if("P"===u);else if("H"===u){const e=g;a[s++]={start:i,type:"hardclip",base:"H".concat(e),cliplen:e,length:1}}else"D"===u?a[s++]={type:"deletion",length:g,start:i,base:"*"}:"b"===u||"q"===u||"B"===u||"i"===u&&n++;return o&&n>0&&(a[s++]={start:i,type:"insertion",base:"".concat(n),length:0},n=0),a.slice(0,s)}(e,this.get("start"),t)}}class h extends s.BaseFeatureDataAdapter{constructor(){super(...arguments),this.samHeader={},this.setupP=void 0,this.configureP=void 0,this.seqIdToRefName=void 0,this.seqIdToOriginalRefName=[]}async configurePre(){var e=this;const t=this.getConf("cramLocation"),r=this.getConf("craiLocation");if(!t)throw new Error("missing cramLocation argument");if(!r)throw new Error("missing craiLocation argument");const s=this.pluginManager,n=new a.ED({cramFilehandle:(0,i.openLocation)(t,s),index:new a.lr({filehandle:(0,i.openLocation)(r,s)}),seqFetch:function(){return e.seqFetch(...arguments)},checkSequenceMD5:!1,fetchSizeLimit:2e8});if(!this.getSubAdapter)throw new Error("Error getting subadapter");const o=this.getConf("sequenceAdapter");return{cram:n,sequenceAdapter:(await this.getSubAdapter(o)).dataAdapter}}async configure(){return this.configureP||(this.configureP=this.configurePre().catch((e=>{throw this.configureP=void 0,e}))),this.configureP}async getHeader(e){const{cram:t}=await this.configure();return t.cram.getHeaderText()}async seqFetch(e,t,r){t-=1;const{sequenceAdapter:a}=await this.configure(),s=this.refIdToOriginalName(e)||this.refIdToName(e);if(!s)throw new Error("unknown");const n=(await(0,d.z)(a.getFeatures({refName:s,start:t,end:r,assemblyName:""}).pipe((0,c.q)()))).sort(((e,t)=>e.get("start")-t.get("start"))).map((e=>{const a=e.get("start"),s=e.get("end"),n=Math.max(t-a,0),i=Math.min(r-a,s-a)-n;return(e.get("seq")||e.get("residues")).slice(n,n+i)})).join("");if(n.length!==r-t)throw new Error("sequence fetch failed: fetching ".concat(s,":").concat((t-1).toLocaleString(),"-").concat(r.toLocaleString()," returned ").concat(n.length.toLocaleString()," bases, but should have returned ").concat((r-t).toLocaleString()));return n}async setupPre(e){const{statusCallback:t=(()=>{})}=e||{};return(0,n.updateStatus)("Downloading index",t,(async()=>{const e=await this.configure(),{cram:t}=e,r=await t.cram.getSamHeader(),a=[],s={};r.filter((e=>"SQ"===e.tag)).forEach(((e,t)=>{e.data.forEach((e=>{if("SN"===e.tag){const r=e.value;s[r]=t,a[t]=r}}))}));const n=r.filter((e=>"RG"===e.tag)).map((e=>{var t;return null===(t=e.data.find((e=>"ID"===e.tag)))||void 0===t?void 0:t.value})),i={idToName:a,nameToId:s,readGroups:n};return this.samHeader=i,{samHeader:i,...e}}))}async setup(e){return this.setupP||(this.setupP=this.setupPre(e).catch((e=>{throw this.setupP=void 0,e}))),this.setupP}async getRefNames(e){const{samHeader:t}=await this.setup(e);if(!t.idToName)throw new Error("CRAM file has no header lines");return t.idToName}refNameToId(e){return this.samHeader.nameToId?this.samHeader.nameToId[e]:this.seqIdToRefName?this.seqIdToRefName.indexOf(e):void 0}refIdToName(e){var t,r;return(null===(t=this.samHeader.idToName)||void 0===t?void 0:t[e])||(null===(r=this.seqIdToRefName)||void 0===r?void 0:r[e])}refIdToOriginalName(e){return this.seqIdToOriginalRefName[e]}getFeatures(e,t){const{signal:r,filterBy:a,statusCallback:s=(()=>{})}=t||{},{refName:i,start:c,end:d,originalRefName:u}=e;return(0,o.ObservableCreate)((async e=>{const{cram:o}=await this.setup(t),h=this.refNameToId(i);if(void 0===h)return console.warn("Unknown refName",i),void e.complete();u&&(this.seqIdToOriginalRefName[h]=u);const g=await(0,n.updateStatus)("Downloading alignments",s,(()=>o.getRecordsForRange(h,c,d)));(0,n.checkAbortSignal)(r),await(0,n.updateStatus)("Processing alignments",s,(()=>{const{flagInclude:t=0,flagExclude:r=0,tagFilter:s,readName:n}=a||{};for(const a of g){const o=a.flags;if((o&t)===t||o&r){if(s){var i;const e="RG"===s.tag?null===(i=this.samHeader.readGroups)||void 0===i?void 0:i[a.readGroupId]:a.tags[s.tag];if(!("*"===e?void 0!==e:"".concat(e)===s.value))continue}n&&a.readName!==n||e.next(this.cramRecordToFeature(a))}}e.complete()}))}),r)}freeResources(){}cramRecordToFeature(e){return new u(e,this)}async getMultiRegionFeatureDensityStats(e,t){return{bytes:await this.bytesForRegions(e,t),fetchSizeLimit:this.getConf("fetchSizeLimit")}}async bytesForRegions(e,t){const{cram:r}=await this.configure();return(await Promise.all(e.map((e=>{const{refName:t,start:a,end:s}=e,n=this.refNameToId(t);return void 0!==n?r.index.getEntriesForRange(n,a,s):[{sliceBytes:0}]})))).flat().reduce(((e,t)=>e+t.sliceBytes),0)}}},53260:()=>{}}]);
//# sourceMappingURL=6236.194a7b8d.chunk.js.map