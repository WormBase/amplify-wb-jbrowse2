(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2968],{8181:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(96234),a=n(33028),s=n(32723),i=n(34795),u=n(9249),c=n(87371),o=n(45754),f=n(13820),d=n(82972),l=n(23995),h=n(32145),p=n(93824),v=n(43430),g=n(7704),b=n(62598),m=n(99836),Z=function(e){(0,o.Z)(n,e);var t=(0,f.Z)(n);function n(e,r,a){var s;(0,u.Z)(this,n),(s=t.call(this,e,r,a)).gff=void 0,s.dontRedispatch=void 0;var i=(0,m.readConfObject)(e,"gffGzLocation"),c=(0,m.readConfObject)(e,["index","indexType"]),o=(0,m.readConfObject)(e,["index","location"]),f=(0,m.readConfObject)(e,"dontRedispatch");return s.dontRedispatch=f||["chromosome","contig","region"],s.gff=new g.pC({filehandle:(0,h.openLocation)(i,s.pluginManager),csiFilehandle:"CSI"===c?(0,h.openLocation)(o,s.pluginManager):void 0,tbiFilehandle:"CSI"!==c?(0,h.openLocation)(o,s.pluginManager):void 0,chunkCacheSize:50*Math.pow(2,20),renameRefSeqs:function(e){return e}}),s}return(0,c.Z)(n,[{key:"getRefNames",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t,n=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},e.abrupt("return",this.gff.getReferenceSequenceNames(t));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHeader",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.gff.getHeader());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,p.ObservableCreate)(function(){var r=(0,i.Z)((0,s.Z)().mark((function r(a){var i;return(0,s.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.gff.getMetadata();case 2:return i=r.sent,r.next=5,t.getFeaturesHelper(e,n,i,a,!0);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),n.signal)}},{key:"getFeaturesHelper",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n,r,i,u,c,o,f,d,h,p=this,v=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v.length>1&&void 0!==v[1]?v[1]:{},r=v.length>2?v[2]:void 0,i=v.length>3?v[3]:void 0,u=v.length>4?v[4]:void 0,c=v.length>5&&void 0!==v[5]?v[5]:t,e.prev=5,o=[],e.next=9,this.gff.getLines(t.refName,t.start,t.end,(function(e,t){o.push(p.parseLine(r.columnNumbers,e,t))}));case 9:if(!u||!o.length){e.next=17;break}if(f=1/0,d=-1/0,o.forEach((function(e){var t=e.fields[2];if(!p.dontRedispatch.includes(t)){var n=e.start-1;n<f&&(f=n),e.end>d&&(d=e.end)}})),!(d>t.end||f<t.start)){e.next=17;break}return e.next=16,this.getFeaturesHelper((0,a.Z)((0,a.Z)({},t),{},{start:f,end:d}),n,r,i,!1,t);case 16:return e.abrupt("return");case 17:h=o.map((function(e){return e.fields[8]&&"."!==e.fields[8]?e.fields[8].includes("_lineHash")||(e.fields[8]+=";_lineHash=".concat(e.lineHash)):e.fields[8]="_lineHash=".concat(e.lineHash),e.fields.join("\t")})).join("\n"),b.Z.parseStringSync(h,{parseFeatures:!0,parseComments:!1,parseDirectives:!1,parseSequences:!1,disableDerivesFromReferences:!0}).forEach((function(e){return p.formatFeatures(e).forEach((function(e){(0,l.qY)(e.get("start"),e.get("end"),c.start,c.end)&&i.next(e)}))})),i.complete(),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(5),i.error(e.t0);case 26:case"end":return e.stop()}}),e,this,[[5,23]])})));return function(t){return e.apply(this,arguments)}}()},{key:"parseLine",value:function(e,t,n){var r=t.split("\t");return{start:+r[e.start-1],end:+r[e.end-1],lineHash:n,fields:r}}},{key:"formatFeatures",value:function(e){var t=this;return e.map((function(e){return new v.Z({data:t.featureData(e),id:"".concat(t.id,"-offset-").concat(e.attributes._lineHash[0])})}))}},{key:"featureData",value:function(e){var t=this,n=(0,a.Z)({},e);n.start-=1,"+"===e.strand?n.strand=1:"-"===e.strand?n.strand=-1:"."===e.strand?n.strand=0:n.strand=void 0,n.phase=Number(e.phase),n.refName=e.seq_id,null===e.score&&delete n.score,null===e.phase&&delete n.score;var s=["start","end","seq_id","score","type","source","phase","strand"],i=e.attributes||{};return Object.keys(i).forEach((function(e){var t=e.toLowerCase();if(s.includes(t)&&(t+="2"),null!==i[e]){var a=i[e];if(Array.isArray(a)&&1===a.length){var u=a;a=(0,r.Z)(u,1)[0]}n[t]=a}})),n.refName=n.seq_id,e.child_features&&e.child_features.length&&(n.subfeatures=e.child_features.map((function(e){return e.map((function(e){return t.featureData(e)}))})).flat()),delete n.child_features,delete n.data,delete n._linehash,delete n.attributes,delete n.seq_id,n}},{key:"freeResources",value:function(){}}]),n}(d.BaseFeatureDataAdapter)},74854:function(){},66602:function(){}}]);
//# sourceMappingURL=2968.b7a52489.chunk.js.map