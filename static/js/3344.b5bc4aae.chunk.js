"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[3344,7776],{37776:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(41361),a=r(32723),i=r(34795),u=r(9249),s=r(87371),c=r(93069),o=r(95058),f=r(45754),h=r(13820),d=r(11343),p=r(82972),l=r(42054),v=r(32145),g=r(93824),m=r(6751),k=r(33028),b=r(68079),y=r(24793),x=function(){function e(t,r,n){(0,u.Z)(this,e),this.record=t,this.adapter=r,this.ref=n}return(0,s.Z)(e,[{key:"_get_name",value:function(){return this.record.get("name")}},{key:"_get_type",value:function(){return"match"}},{key:"_get_score",value:function(){return this.record.get("mq")}},{key:"_get_flags",value:function(){return this.record.flags}},{key:"_get_strand",value:function(){return this.record.isReverseComplemented()?-1:1}},{key:"_get_pair_orientation",value:function(){return this.record.isPaired()?this.record.getPairOrientation():void 0}},{key:"_get_next_ref",value:function(){return this.record.isPaired()?this.adapter.refIdToName(this.record._next_refid()):void 0}},{key:"_get_next_pos",value:function(){return this.record.isPaired()?this.record._next_pos():void 0}},{key:"_get_next_segment_position",value:function(){return this.record.isPaired()?"".concat(this.adapter.refIdToName(this.record._next_refid()),":").concat(this.record._next_pos()+1):void 0}},{key:"_get_seq",value:function(){return this.record.getReadBases()}},{key:"qualRaw",value:function(){return this.record.qualRaw()}},{key:"set",value:function(){}},{key:"tags",value:function(){var t=Object.getOwnPropertyNames(e.prototype);return(0,b.Z)(new Set(t.filter((function(e){return e.startsWith("_get_")&&"_get_mismatches"!==e&&"_get_tags"!==e})).map((function(e){return e.replace("_get_","")})).concat(this.record._tags())))}},{key:"id",value:function(){return"".concat(this.adapter.id,"-").concat(this.record.id())}},{key:"get",value:function(e){var t="_get_".concat(e);return this[t]?this[t]():this.record.get(e)}},{key:"_get_refName",value:function(){return this.adapter.refIdToName(this.record.seq_id())}},{key:"parent",value:function(){}},{key:"children",value:function(){}},{key:"pairedFeature",value:function(){return!1}},{key:"toJSON",value:function(){var e=this;return(0,k.Z)((0,k.Z)({},Object.fromEntries(this.tags().map((function(t){return[t,e.get(t)]})).filter((function(e){return void 0!==e[1]})))),{},{uniqueId:this.id()})}},{key:"_get_mismatches",value:function(){return(0,y.zl)(this.get("CIGAR"),this.get("MD"),this.get("seq"),this.ref,this.qualRaw())}},{key:"_get_clipPos",value:function(){var e=this.get("CIGAR")||"";return(0,y.sB)(e,this.get("strand"))}}]),e}(),_=function(e){(0,f.Z)(r,e);var t=(0,h.Z)(r);function r(){var e;(0,u.Z)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).samHeader=void 0,e.setupP=void 0,e.configureP=void 0,e}return(0,s.Z)(r,[{key:"configurePre",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t,r,n,i,u,s,c,o,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.getConf("bamLocation"),r=this.getConf(["index","location"]),n=this.getConf(["index","indexType"]),i=this.pluginManager,u="CSI"===n,s=new d.$({bamFilehandle:(0,v.openLocation)(t,i),csiFilehandle:u?(0,v.openLocation)(r,i):void 0,baiFilehandle:u?void 0:(0,v.openLocation)(r,i),chunkSizeLimit:1/0,fetchSizeLimit:1/0,yieldThreadTime:1/0}),!(c=this.getConf("sequenceAdapter"))||!this.getSubAdapter){e.next=15;break}return e.next=10,this.getSubAdapter(c);case 10:return o=e.sent,f=o.dataAdapter,e.abrupt("return",{bam:s,sequenceAdapter:f});case 15:return e.abrupt("return",{bam:s});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"configure",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.configureP||(this.configureP=this.configurePre().catch((function(e){throw t.configureP=void 0,e}))),e.abrupt("return",this.configureP);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHeader",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var r,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.configure();case 2:return r=e.sent,n=r.bam,e.abrupt("return",n.getHeaderText(t));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setupPre",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var r,n,u,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(t||{}).statusCallback,n=void 0===r?function(){}:r,e.next=3,this.configure();case 3:return u=e.sent,s=u.bam,e.next=7,(0,l.updateStatus)("Downloading index",n,(0,i.Z)((0,a.Z)().mark((function e(){var r,n,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getHeader(t);case 2:return r=e.sent,n=[],i={},r.filter((function(e){return"SQ"===e.tag})).forEach((function(e,t){e.data.forEach((function(e){if("SN"===e.tag){var r=e.value;i[r]=t,n[t]=r}}))})),e.abrupt("return",{idToName:n,nameToId:i});case 7:case"end":return e.stop()}}),e)}))));case 7:return this.samHeader=e.sent,e.abrupt("return",this.samHeader);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setup",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var r=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setupP||(this.setupP=this.setupPre(t).catch((function(e){throw r.setupP=void 0,e}))),e.abrupt("return",this.setupP);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRefNames",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var r,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setup(t);case 2:return r=e.sent,n=r.idToName,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"seqFetch",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t,r,n){var i,u,s,c,o,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.configure();case 2:if(i=e.sent,u=i.sequenceAdapter,s=u){e.next=7;break}return e.abrupt("return",void 0);case 7:if(t){e.next=9;break}return e.abrupt("return",void 0);case 9:return c=s.getFeatures({refName:t,start:r,end:n,assemblyName:""}),e.next=12,c.pipe((0,m.q)()).toPromise();case 12:if(o=e.sent,f="",o.sort((function(e,t){return e.get("start")-t.get("start")})).forEach((function(e){var t=e.get("start"),a=e.get("end"),i=Math.max(r-t,0),u=Math.min(n-t,a-t)-i,s=e.get("seq")||e.get("residues");f+=s.substr(i,u)})),f.length===n-r){e.next=17;break}throw new Error("sequence fetch failed: fetching ".concat(t,":").concat((r-1).toLocaleString(),"-").concat(n.toLocaleString()," returned ").concat(f.length.toLocaleString()," bases, but should have returned ").concat((n-r).toLocaleString()));case 17:return e.abrupt("return",f);case 18:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e,t){var r=this,u=e.refName,s=e.start,c=e.end,o=e.originalRefName,f=t||{},h=f.signal,d=f.filterBy,p=f.statusCallback,l=void 0===p?function(){}:p;return(0,g.ObservableCreate)(function(){var e=(0,i.Z)((0,a.Z)().mark((function e(i){var f,h,p,v,g,m,k,b,y,_,Z,w,P,S,q,C;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.configure();case 2:return f=e.sent,h=f.bam,e.next=6,r.setup(t);case 6:return l("Downloading alignments"),e.next=9,h.getRecordsForRange(u,s,c,t);case 9:p=e.sent,g=(v=d||{}).flagInclude,m=void 0===g?0:g,k=v.flagExclude,b=void 0===k?0:k,y=v.tagFilter,_=v.readName,Z=(0,n.Z)(p),e.prev=12,Z.s();case 14:if((w=Z.n()).done){e.next=33;break}if(P=w.value,S=void 0,P.get("MD")){e.next=21;break}return e.next=20,r.seqFetch(o||u,P.get("start"),P.get("end"));case 20:S=e.sent;case 21:if(((q=P.flags)&m)===m&&!(q&b)){e.next=24;break}return e.abrupt("continue",31);case 24:if(!y){e.next=28;break}if("*"===(C=P.get(y.tag))?void 0!==C:C===y.value){e.next=28;break}return e.abrupt("continue",31);case 28:if(!_||P.get("name")===_){e.next=30;break}return e.abrupt("continue",31);case 30:i.next(new x(P,r,S));case 31:e.next=14;break;case 33:e.next=38;break;case 35:e.prev=35,e.t0=e.catch(12),Z.e(e.t0);case 38:return e.prev=38,Z.f(),e.finish(38);case 41:l(""),i.complete();case 43:case"end":return e.stop()}}),e,null,[[12,35,38,41]])})));return function(t){return e.apply(this,arguments)}}(),h)}},{key:"estimateRegionsStats",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t,n){var i,u,s,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.configure();case 2:if(i=e.sent,"?"===(u=i.bam).index.filehandle){e.next=12;break}return e.next=7,(0,l.bytesForRegions)(t,u);case 7:return s=e.sent,f=this.getConf("fetchSizeLimit"),e.abrupt("return",{bytes:s,fetchSizeLimit:f});case 12:return e.abrupt("return",(0,c.Z)((0,o.Z)(r.prototype),"estimateRegionsStats",this).call(this,t,n));case 13:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"freeResources",value:function(){}},{key:"refIdToName",value:function(e){var t;return null===(t=this.samHeader)||void 0===t?void 0:t.idToName[e]}}]),r}(p.BaseFeatureDataAdapter)},23344:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(32723),a=r(34795),i=r(9249),u=r(87371),s=r(45754),c=r(13820),o=r(11343),f=function(e){(0,s.Z)(r,e);var t=(0,c.Z)(r);function r(){return(0,i.Z)(this,r),t.apply(this,arguments)}return(0,u.Z)(r,[{key:"configurePre",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a,i,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.getConf("htsgetBase"),r=this.getConf("htsgetTrackId"),a=new o.S5({baseUrl:t,trackId:r}),!(i=this.getConf("sequenceAdapter"))||!this.getSubAdapter){e.next=9;break}return e.next=7,this.getSubAdapter(i);case 7:return u=e.sent,e.abrupt("return",{bam:a,sequenceAdapter:u.dataAdapter});case 9:return e.abrupt("return",{bam:a});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),r}(r(37776).default)}}]);
//# sourceMappingURL=3344.b5bc4aae.chunk.js.map