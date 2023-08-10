"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6443],{26443:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(41361),a=r(33028),i=r(32723),u=r(34795),o=r(9249),c=r(87371),s=r(45754),f=r(13820),l=r(52142),d=r(2646),h=r(27664),g=r(32145),p=r(93824),v=r(66043),m=r(56218),y=r(68079);var k=function(){function e(t,r){(0,o.Z)(this,e),this.record=t,this._store=r}return(0,c.Z)(e,[{key:"_get_name",value:function(){return this.record.readName}},{key:"_get_start",value:function(){return this.record.alignmentStart-1}},{key:"_get_end",value:function(){var e;return this.record.alignmentStart+(null!==(e=this.record.lengthOnRef)&&void 0!==e?e:1)-1}},{key:"_get_cram_read_features",value:function(){return this.record.readFeatures}},{key:"_get_type",value:function(){return"match"}},{key:"_get_score",value:function(){return this.record.mappingQuality}},{key:"_get_flags",value:function(){return this.record.flags}},{key:"_get_strand",value:function(){return this.record.isReverseComplemented()?-1:1}},{key:"_read_group_id",value:function(){var e;return null===(e=this._store.samHeader.readGroups)||void 0===e?void 0:e[this.record.readGroupId]}},{key:"_get_qual",value:function(){return(this.record.qualityScores||[]).join(" ")}},{key:"qualRaw",value:function(){return this.record.qualityScores}},{key:"_get_refName",value:function(){return this._store.refIdToName(this.record.sequenceId)}},{key:"_get_is_paired",value:function(){return!!this.record.mate}},{key:"_get_pair_orientation",value:function(){return this.record.isPaired()?this.record.getPairOrientation():void 0}},{key:"_get_template_length",value:function(){return this.record.templateLength||this.record.templateSize}},{key:"_get_next_ref",value:function(){return this.record.mate?this._store.refIdToName(this.record.mate.sequenceId):void 0}},{key:"_get_next_segment_position",value:function(){return this.record.mate?"".concat(this._store.refIdToName(this.record.mate.sequenceId),":").concat(this.record.mate.alignmentStart):void 0}},{key:"_get_next_pos",value:function(){var e;return null===(e=this.record.mate)||void 0===e?void 0:e.alignmentStart}},{key:"_get_tags",value:function(){var e=this._read_group_id(),t=this.record.tags;return void 0!==e?(0,a.Z)((0,a.Z)({},t),{},{RG:e}):t}},{key:"_get_seq",value:function(){return this.record.getReadBases()}},{key:"_get_CIGAR",value:function(){return function(e,t,r,n){var a="",i="",u="M",o=0;if(!n)return"";var c=n.seq,s=n.start,f=t,l=0,d=0;if(void 0!==e)for(var h=0;h<e.length;h++){var g=e[h],p=g.code,v=g.refPos,m=g.sub,k=g.data;if(l=v-f,a+=c.slice(f-s,v-s),f=v,d>0&&l&&(i+="".concat(d,"I"),d=0),o&&"M"!==u&&(i+="".concat(o).concat(u),o=0),l&&(u="M",o+=l),"b"===p){var _=k.split(","),b=String.fromCharCode.apply(String,(0,y.Z)(_));a+=b,f+=b.length,o+=b.length}else"B"===p||"X"===p?(a+=m,f++,o++):"D"===p||"N"===p?(f+=k,o&&(i+="".concat(o).concat(u)),i+=k+p,o=0):"I"===p||"S"===p?(a+=k,o&&(i+="".concat(o).concat(u)),i+=k.length+p,o=0):"i"===p?(o&&(i+="".concat(o).concat(u)),d++,a+=k,o=0):"P"===p?(o&&(i+="".concat(o).concat(u)),i+="".concat(k,"P")):"H"===p&&(o&&(i+="".concat(o).concat(u)),i+="".concat(k,"H"),o=0)}else l=r-a.length;return a.length!==r&&(l=r-a.length,a+=c.slice(f-s,f-s+l),o&&"M"!==u&&(i+="".concat(o).concat(u),o=0),u="M",o+=l),l&&d>0&&(i+="".concat(d,"I")),o&&(i+="".concat(o).concat(u)),i}(this.record.readFeatures,this.record.alignmentStart,this.record.readLength,this.record._refRegion)}},{key:"tags",value:function(){return Object.getOwnPropertyNames(e.prototype).filter((function(e){return e.startsWith("_get_")&&"_get_mismatches"!==e&&"_get_cram_read_features"!==e})).map((function(e){return e.replace("_get_","")}))}},{key:"id",value:function(){return"".concat(this._store.id,"-").concat(this.record.uniqueId)}},{key:"get",value:function(e){var t="_get_".concat(e);if(this[t])return this[t]()}},{key:"parent",value:function(){}},{key:"children",value:function(){}},{key:"set",value:function(){}},{key:"pairedFeature",value:function(){return!1}},{key:"_get_clipPos",value:function(){var e=this.get("mismatches");if(e.length){var t=-1===this.get("strand")?e[e.length-1]:e[0],r=t.type,n=t.cliplen;if("softclip"===r||"hardclip"===r)return n}return 0}},{key:"toJSON",value:function(){var e=this;return(0,a.Z)((0,a.Z)({},Object.fromEntries(this.tags().map((function(t){return[t,e.get(t)]})).filter((function(e){return void 0!==e[1]})))),{},{uniqueId:this.id()})}},{key:"_get_mismatches",value:function(){var e=this.record.readFeatures,t=this.qualRaw();return function(e,t,r){if(!e)return[];for(var n=new Array(e.length),a=0,i=0,u=0,o=0,c=t,s=0;s<e.length;s++){var f=e[s],l=f.code,d=f.pos,h=f.data,g=f.sub,p=f.ref;if(o=u-c,c=u,o&&i>0&&(n[a++]={start:u,type:"insertion",base:"".concat(i),length:0},i=0),u=f.refPos-1-t,"X"===l)n[a++]={start:u,length:1,base:g,qual:null===r||void 0===r?void 0:r[d-1],altbase:null===p||void 0===p?void 0:p.toUpperCase(),type:"mismatch"};else if("I"===l)n[a++]={start:u,type:"insertion",base:"".concat(h.length),length:0};else if("N"===l)n[a++]={type:"skip",length:h,start:u,base:"N"};else if("S"===l){var v=h.length;n[a++]={start:u,type:"softclip",base:"S".concat(v),cliplen:v,length:1}}else if("P"===l);else if("H"===l){var m=h;n[a++]={start:u,type:"hardclip",base:"H".concat(m),cliplen:m,length:1}}else"D"===l?n[a++]={type:"deletion",length:h,start:u,base:"*"}:"b"===l||"q"===l||"B"===l||"i"===l&&i++}return o&&i>0&&(n[a++]={start:u,type:"insertion",base:"".concat(i),length:0},i=0),n.slice(0,a)}(e,this.get("start"),t)}}]),e}(),_=function(e){(0,s.Z)(r,e);var t=(0,f.Z)(r);function r(){var e;(0,o.Z)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).samHeader={},e.setupP=void 0,e.configureP=void 0,e.seqIdToRefName=void 0,e.seqIdToOriginalRefName=[],e}return(0,c.Z)(r,[{key:"configurePre",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(){var t,r,n,a,u,o,c=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.getConf("cramLocation"),r=this.getConf("craiLocation"),t){e.next=4;break}throw new Error("missing cramLocation argument");case 4:if(r){e.next=6;break}throw new Error("missing craiLocation argument");case 6:if(n=this.pluginManager,a=new l.ED({cramFilehandle:(0,g.openLocation)(t,n),index:new l.lr({filehandle:(0,g.openLocation)(r,n)}),seqFetch:function(){return c.seqFetch.apply(c,arguments)},checkSequenceMD5:!1,fetchSizeLimit:2e8}),this.getSubAdapter){e.next=10;break}throw new Error("Error getting subadapter");case 10:return u=this.getConf("sequenceAdapter"),e.next=13,this.getSubAdapter(u);case 13:return o=e.sent,e.abrupt("return",{cram:a,sequenceAdapter:o.dataAdapter});case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"configure",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(){var t=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.configureP||(this.configureP=this.configurePre().catch((function(e){throw t.configureP=void 0,e}))),e.abrupt("return",this.configureP);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHeader",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(t){var r,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.configure();case 2:return r=e.sent,n=r.cram,e.abrupt("return",n.cram.getHeaderText());case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"seqFetch",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(t,r,n){var a,u,o,c,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r-=1,e.next=3,this.configure();case 3:if(a=e.sent,u=a.sequenceAdapter,o=this.refIdToOriginalName(t)||this.refIdToName(t)){e.next=8;break}throw new Error("unknown");case 8:return e.next=10,(0,m.z)(u.getFeatures({refName:o,start:r,end:n,assemblyName:""}).pipe((0,v.q)()));case 10:if(c=e.sent,(s=c.sort((function(e,t){return e.get("start")-t.get("start")})).map((function(e){var t=e.get("start"),a=e.get("end"),i=Math.max(r-t,0),u=Math.min(n-t,a-t)-i;return(e.get("seq")||e.get("residues")).slice(i,i+u)})).join("")).length===n-r){e.next=14;break}throw new Error("sequence fetch failed: fetching ".concat(o,":").concat((r-1).toLocaleString(),"-").concat(n.toLocaleString()," returned ").concat(s.length.toLocaleString()," bases, but should have returned ").concat((n-r).toLocaleString()));case 14:return e.abrupt("return",s);case 15:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"setupPre",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(t){var r,n,u,o,c,s,f,l,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(t||{}).statusCallback,n=void 0===r?function(){}:r,e.next=3,this.configure();case 3:return u=e.sent,n("Downloading index"),o=u.cram,e.next=8,o.cram.getSamHeader();case 8:return c=e.sent,s=[],f={},c.filter((function(e){return"SQ"===e.tag})).forEach((function(e,t){e.data.forEach((function(e){if("SN"===e.tag){var r=e.value;f[r]=t,s[t]=r}}))})),l=c.filter((function(e){return"RG"===e.tag})).map((function(e){var t;return null===(t=e.data.find((function(e){return"ID"===e.tag})))||void 0===t?void 0:t.value})),d={idToName:s,nameToId:f,readGroups:l},n(""),this.samHeader=d,e.abrupt("return",(0,a.Z)({samHeader:d},u));case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setup",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(t){var r=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setupP||(this.setupP=this.setupPre(t).catch((function(e){throw r.setupP=void 0,e}))),e.abrupt("return",this.setupP);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRefNames",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(t){var r,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setup(t);case 2:if(r=e.sent,(n=r.samHeader).idToName){e.next=6;break}throw new Error("CRAM file has no header lines");case 6:return e.abrupt("return",n.idToName);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refNameToId",value:function(e){return this.samHeader.nameToId?this.samHeader.nameToId[e]:this.seqIdToRefName?this.seqIdToRefName.indexOf(e):void 0}},{key:"refIdToName",value:function(e){var t,r;return(null===(t=this.samHeader.idToName)||void 0===t?void 0:t[e])||(null===(r=this.seqIdToRefName)||void 0===r?void 0:r[e])}},{key:"refIdToOriginalName",value:function(e){return this.seqIdToOriginalRefName[e]}},{key:"getFeatures",value:function(e,t){var r=this,a=t||{},o=a.signal,c=a.filterBy,s=a.statusCallback,f=void 0===s?function(){}:s,l=e.refName,d=e.start,g=e.end,v=e.originalRefName;return(0,p.ObservableCreate)(function(){var e=(0,u.Z)((0,i.Z)().mark((function e(a){var u,s,p,m,y,k,_,b,w,x,Z,N,I,q,R,S,T;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.setup(t);case 2:if(u=e.sent,s=u.cram,void 0!==(p=r.refNameToId(l))){e.next=9;break}return console.warn("Unknown refName",l),a.complete(),e.abrupt("return");case 9:return v&&(r.seqIdToOriginalRefName[p]=v),f("Downloading alignments"),e.next=13,s.getRecordsForRange(p,d,g);case 13:m=e.sent,(0,h.checkAbortSignal)(o),k=(y=c||{}).flagInclude,_=void 0===k?0:k,b=y.flagExclude,w=void 0===b?0:b,x=y.tagFilter,Z=y.readName,N=(0,n.Z)(m),e.prev=17,N.s();case 19:if((I=N.n()).done){e.next=33;break}if(q=I.value,((R=q.flags)&_)===_||R&w){e.next=24;break}return e.abrupt("continue",31);case 24:if(!x){e.next=28;break}if("*"===(T="RG"===x.tag?null===(S=r.samHeader.readGroups)||void 0===S?void 0:S[q.readGroupId]:q.tags[x.tag])?void 0!==T:"".concat(T)===x.value){e.next=28;break}return e.abrupt("continue",31);case 28:if(!Z||q.readName===Z){e.next=30;break}return e.abrupt("continue",31);case 30:a.next(r.cramRecordToFeature(q));case 31:e.next=19;break;case 33:e.next=38;break;case 35:e.prev=35,e.t0=e.catch(17),N.e(e.t0);case 38:return e.prev=38,N.f(),e.finish(38);case 41:f(""),a.complete();case 43:case"end":return e.stop()}}),e,null,[[17,35,38,41]])})));return function(t){return e.apply(this,arguments)}}(),o)}},{key:"freeResources",value:function(){}},{key:"cramRecordToFeature",value:function(e){return new k(e,this)}},{key:"getMultiRegionFeatureDensityStats",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(t,r){var n,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.bytesForRegions(t,r);case 2:return n=e.sent,a=this.getConf("fetchSizeLimit"),e.abrupt("return",{bytes:n,fetchSizeLimit:a});case 5:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"bytesForRegions",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(t,r){var n,a,u,o=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.configure();case 2:return n=e.sent,a=n.cram,e.next=6,Promise.all(t.map((function(e){var t=e.refName,r=e.start,n=e.end,i=o.refNameToId(t);return void 0!==i?a.index.getEntriesForRange(i,r,n):[{sliceBytes:0}]})));case 6:return u=e.sent,e.abrupt("return",u.flat().reduce((function(e,t){return e+t.sliceBytes}),0));case 8:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),r}(d.BaseFeatureDataAdapter)}}]);
//# sourceMappingURL=6443.d76dab17.chunk.js.map