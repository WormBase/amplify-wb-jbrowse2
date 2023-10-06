"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[5720],{5720:function(e,t,a){a.r(t),a.d(t,{convertTrackConfig:function(){return u},createRefSeqsAdapter:function(){return l}});var r=a(32723),i=a(34795),o=a(33028),n=a(33528),c=a(81073),p=a(97891);function u(e,t,a){var r,i={trackId:(0,c.objectHash)(e),name:e.key||e.label},n=e.metadata&&(e.metadata.description||e.metadata.Description);n&&(i.description=n);var u=e.category||(null===(r=e.metadata)||void 0===r?void 0:r.category);i.category=u?u.split(/\s*\/\s*/):[];var l=e.storeClass;if(!e.urlTemplate){if(!l||!l.endsWith("FromConfig")){var d=e.key||e.label;return console.warn('Could not import JBrowse1 track "'.concat(d,'" because it does not have a "urlTemplate" or is not a "FromConfig" track')),(0,p.generateUnsupportedTrackConf)(i.name,d,i.category)}return function(e,t){var a=e.features||[],r=a.map((function(e){var t=JSON.parse(JSON.stringify(e));return t.refName=e.seq_id,t.uniqueId="".concat(e.seq_id,":").concat(e.start,"-").concat(e.end,":").concat(e.name||""),t}));return t.adapter={type:"FromConfigAdapter",features:r},t.type="FeatureTrack",t}(e,i)}var s=function(e){return new URL(e,"".concat(t,"/")).href.replaceAll(/%7B/gi,"{").replaceAll(/%7D/gi,"}")},y=s(e.urlTemplate);if(l){if("JBrowse/Store/SeqFeature/BAM"===l){var T={type:"BamAdapter",bamLocation:{uri:y,locationType:"UriLocation"}};return e.baiUrlTemplate?T.index={location:{uri:s(e.baiUrlTemplate),locationType:"UriLocation"}}:e.csiUrlTemplate?T.index={location:{uri:s(e.csiUrlTemplate),locationType:"UriLocation"},indexType:"CSI"}:T.index={location:{uri:"".concat(y,".bai"),locationType:"UriLocation"}},(0,o.Z)((0,o.Z)({},i),{},{type:"AlignmentsTrack",adapter:T})}if("JBrowse/Store/SeqFeature/CRAM"===l){var f={type:"CramAdapter",cramLocation:{uri:y,locationType:"UriLocation"},sequenceAdapter:a};return f.craiLocation=e.craiUrlTemplate?{uri:s(e.craiUrlTemplate),locationType:"UriLocation"}:{uri:"".concat(y,".crai"),locationType:"UriLocation"},(0,o.Z)((0,o.Z)({},i),{},{type:"AlignmentsTrack",adapter:f})}if("JBrowse/Store/SeqFeature/NCList"===l)return(0,o.Z)((0,o.Z)({},i),{},{type:"FeatureTrack",adapter:{type:"NCListAdapter",rootUrlTemplate:{uri:y,locationType:"UriLocation"}}});if("JBrowse/Store/SeqFeature/BigWig"===l||"JBrowse/Store/BigWig"===l)return e.type&&e.type.endsWith("XYPlot")?i.defaultRendering="xyplot":e.type&&e.type.endsWith("Density")&&(i.defaultRendering="density"),(0,o.Z)((0,o.Z)({},i),{},{type:"QuantitativeTrack",adapter:{type:"BigWigAdapter",bigWigLocation:{uri:y,locationType:"UriLocation"}}});if("JBrowse/Store/SeqFeature/VCFTabix"===l){var U={type:"VcfTabixAdapter",vcfGzLocation:{uri:y,locationType:"UriLocation"}};return e.tbiUrlTemplate?U.index={location:{uri:s(e.tbiUrlTemplate),locationType:"UriLocation"}}:e.csiUrlTemplate?U.index={location:{uri:s(e.csiUrlTemplate),locationType:"UriLocation"},indexType:"CSI"}:U.index={location:{uri:"".concat(y,".tbi"),locationType:"UriLocation"}},(0,o.Z)((0,o.Z)({},i),{},{type:"VariantTrack",adapter:U})}if("JBrowse/Store/SeqFeature/VCFTribble"===l)return(0,p.generateUnsupportedTrackConf)(i.name,"VCFTribble (".concat(y,")"),i.category);if("JBrowse/Store/SeqFeature/GFF3"===l)return(0,o.Z)((0,o.Z)({},i),{},{type:"FeatureTrack",adapter:{type:"Gff3Adapter",gffLocation:{uri:y,locationType:"UriLocation"}}});if("JBrowse/Store/SeqFeature/BigBed"===l)return(0,o.Z)((0,o.Z)({},i),{},{type:"FeatureTrack",adapter:{type:"BigBedAdapter",bigBedLocation:{uri:y,locationType:"UriLocation"}}});if("JBrowse/Store/SeqFeature/GFF3Tabix"===l){var m={type:"Gff3TabixAdapter",gffGzLocation:{uri:y,locationType:"UriLocation"}};return e.tbiUrlTemplate?m.index={location:{uri:s(e.tbiUrlTemplate),locationType:"UriLocation"}}:e.csiUrlTemplate?m.index={location:{uri:s(e.csiUrlTemplate),locationType:"UriLocation"},indexType:"CSI"}:m.index={location:{uri:"".concat(y,".tbi"),locationType:"UriLocation"}},(0,o.Z)((0,o.Z)({},i),{},{type:"FeatureTrack",adapter:m})}if("JBrowse/Store/SeqFeature/BED"===l)return(0,p.generateUnsupportedTrackConf)(i.name,"BED (".concat(y,")"),i.category);if("JBrowse/Store/SeqFeature/BEDTabix"===l){var L={type:"BedTabixAdapter",bedGzLocation:{uri:y,locationType:"UriLocation"}};return e.tbiUrlTemplate?L.index={location:{uri:s(e.tbiUrlTemplate),locationType:"UriLocation"}}:e.csiUrlTemplate?L.index={location:{uri:s(e.csiUrlTemplate),locationType:"UriLocation"},indexType:"CSI"}:L.index={location:{uri:"".concat(y,".tbi"),locationType:"UriLocation"}},(0,o.Z)((0,o.Z)({},i),{},{type:"FeatureTrack",adapter:L})}if("JBrowse/Store/SeqFeature/GTF"===l)return(0,o.Z)((0,o.Z)({},i),{},{type:"FeatureTrack",adapter:{type:"GtfAdapter",gtfLocation:{uri:y,locationType:"UriLocation"}}});if("JBrowse/Store/SeqFeature/StaticChunked"===l||"JBrowse/Store/Sequence/StaticChunked"===l)return(0,p.generateUnsupportedTrackConf)(i.name,"StaticChunked (".concat(y,")"),i.category);if("JBrowse/Store/SeqFeature/UnindexedFasta"===l)return(0,p.generateUnsupportedTrackConf)(i.name,"UnindexedFasta (".concat(y,")"),i.category);if("JBrowse/Store/SeqFeature/IndexedFasta"===l){var S={type:"IndexedFastaAdapter",fastaLocation:{uri:y,locationType:"UriLocation"}};return S.faiLocation=e.faiUrlTemplate?{uri:s(e.faiUrlTemplate),locationType:"UriLocation"}:{uri:"".concat(y,".fai"),locationType:"UriLocation"},(0,o.Z)((0,o.Z)({},i),{},{type:"SequenceTrack",adapter:S})}if("JBrowse/Store/SeqFeature/BgzipIndexedFasta"===l){var g={type:"BgzipFastaAdapter",fastaLocation:{uri:y,locationType:"UriLocation"}};return g.faiLocation=e.faiUrlTemplate?{uri:s(e.faiUrlTemplate),locationType:"UriLocation"}:{uri:"".concat(y,".fai"),locationType:"UriLocation"},g.gziLocation=e.gziUrlTemplate?{uri:s(e.gziUrlTemplate),locationType:"UriLocation"}:{uri:"".concat(y,".gzi"),locationType:"UriLocation"},(0,o.Z)((0,o.Z)({},i),{},{type:"ReferenceSequenceTrack",adapter:g})}if("JBrowse/Store/SeqFeature/TwoBit"===l)return(0,o.Z)((0,o.Z)({},i),{},{type:"ReferenceSequenceTrack",adapter:{type:"TwoBitAdapter",twoBitLocation:{uri:y,locationType:"UriLocation"}}})}if(i.adapter=(0,p.guessAdapter)({uri:y,locationType:"UriLocation"},void 0,y),!i.adapter)throw new Error("Could not determine adapter");return i.adapter.type===p.UNSUPPORTED?(0,p.generateUnsupportedTrackConf)(i.name,y,i.category):i.adapter.type===p.UNKNOWN?(0,p.generateUnknownTrackConf)(i.name,y,i.category):(i.type=(0,p.guessTrackType)(i.adapter.type),"QuantitativeTrack"===i.type&&(e.type&&e.type.endsWith("XYPlot")?i.defaultRendering="xyplot":e.type&&e.type.endsWith("Density")&&(i.defaultRendering="density")),i)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,i.Z)((0,r.Z)().mark((function e(t){var a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"===typeof t&&(t={url:t}),!t.url){e.next=15;break}if(!t.url.match(/.fai$/)){e.next=4;break}return e.abrupt("return",{type:"IndexedFastaAdapter",fastaLocation:{uri:t.url.slice(0,-4),locationType:"UriLocation"},faiLocation:{uri:t.url,locationType:"UriLocation"}});case 4:if(!t.url.match(/.2bit$/)){e.next=6;break}return e.abrupt("return",{type:"TwoBitAdapter",twoBitLocation:{uri:t.url,locationType:"UriLocation"}});case 6:if(!t.url.match(/.fa$/)){e.next=8;break}throw new Error("Unindexed FASTA adapter not available");case 8:if(!t.url.match(/.sizes/)){e.next=10;break}throw new Error("chromosome SIZES adapter not available");case 10:return e.next=12,(0,n.openLocation)({uri:t.url,locationType:"UriLocation"}).readFile("utf8");case 12:return a=e.sent,i=JSON.parse(a),e.abrupt("return",s(i));case 15:if(!("data"in t)){e.next=17;break}return e.abrupt("return",s(t.data||[]));case 17:throw new Error("Could not determine adapter for JBrowse1 refSeqs: ".concat(t.url||JSON.stringify(t)));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(e){return{type:"FromConfigAdapter",features:e.map((function(e){return{refName:e.name,uniqueId:e.name,start:e.start,end:e.end}}))}}}}]);
//# sourceMappingURL=5720.18479983.chunk.js.map