"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[3653],{53653:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(32723),a=r(34795),u=r(9249),i=r(87371),s=r(45754),c=r(13820),o=r(61462),d=r(20783),l=r(33528),f=r(26131),p=r(78022),h=r(59917),v=function(e){(0,s.Z)(r,e);var t=(0,c.Z)(r);function r(e,n,a){var i;(0,u.Z)(this,r),(i=t.call(this,e,n,a)).parser=void 0,i.bed=void 0,i.columnNames=void 0,i.scoreColumn=void 0;var s=i.getConf("bedGzLocation"),c=i.getConf(["index","indexType"]),d=i.getConf(["index","location"]),f=i.getConf("autoSql"),h=i.pluginManager;return i.bed=new p.pC({filehandle:(0,l.openLocation)(s,h),csiFilehandle:"CSI"===c?(0,l.openLocation)(d,h):void 0,tbiFilehandle:"CSI"!==c?(0,l.openLocation)(d,h):void 0,chunkCacheSize:50*Math.pow(2,20)}),i.columnNames=i.getConf("columnNames"),i.scoreColumn=i.getConf("scoreColumn"),i.parser=new o.Z({autoSql:f}),i}return(0,i.Z)(r,[{key:"getRefNames",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},e.abrupt("return",this.bed.getReferenceSequenceNames(t));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHeader",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.bed.getHeader());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getNames",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.columnNames.length){e.next=2;break}return e.abrupt("return",this.columnNames);case 2:return e.next=4,this.bed.getHeader();case 4:return t=e.sent,r=t.split(/\n|\r\n|\r/).filter((function(e){return!!e})),a=r.at(-1),e.abrupt("return",null!==a&&void 0!==a&&a.includes("\t")?a.slice(1).split("\t").map((function(e){return e.trim()})):void 0);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,f.ObservableCreate)(function(){var u=(0,a.Z)((0,n.Z)().mark((function a(u){var i,s,c,o,d,l;return(0,n.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.bed.getMetadata();case 2:return i=n.sent,s=i.columnNumbers,c=s.ref-1,o=s.start-1,d=s.end-1,n.next=9,t.getNames();case 9:return l=n.sent,n.next=12,t.bed.getLines(e.refName,e.start,e.end,{lineCallback:function(e,r){u.next((0,h.P)(e,c,o,d,t.scoreColumn,t.parser,"".concat(t.id,"-").concat(r),l))},signal:r.signal});case 12:u.complete();case 13:case"end":return n.stop()}}),a)})));return function(e){return u.apply(this,arguments)}}(),r.signal)}},{key:"freeResources",value:function(){}}]),r}(d.BaseFeatureDataAdapter);v.capabilities=["getFeatures","getRefNames"]},59917:function(e,t,r){r.d(t,{P:function(){return i},d:function(){return u}});var n=r(33028),a=r(81073);function u(e){var t=e.children(),r=e.get("thickStart"),n=e.get("thickEnd");if(!r&&!n)return e;var u=t?t.filter((function(e){return"block"===e.get("type")})).sort((function(e,t){return e.get("start")-t.get("start")})):[],i=[];u.forEach((function(t){var a=t.get("start"),u=t.get("end");if(r>=u){var s=e.get("strand")>0?"five":"three";i.push({type:"".concat(s,"_prime_UTR"),start:a,end:u})}else if(r>a&&r<u&&n>=u){var c=e.get("strand")>0?"five":"three";i.push({type:"".concat(c,"_prime_UTR"),start:a,end:r},{type:"CDS",start:r,end:u})}else if(r<=a&&n>=u)i.push({type:"CDS",start:a,end:u});else if(r>a&&r<u&&n<u){var o=e.get("strand")>0?"five":"three",d=e.get("strand")>0?"three":"five";i.push({type:"".concat(o,"_prime_UTR"),start:a,end:r},{type:"CDS",start:r,end:n},{type:"".concat(d,"_prime_UTR"),start:n,end:u})}else if(r<=a&&n>a&&n<u){var l=e.get("strand")>0?"three":"five";i.push({type:"CDS",start:a,end:n},{type:"".concat(l,"_prime_UTR"),start:n,end:u})}else if(n<=a){var f=e.get("strand")>0?"three":"five";i.push({type:"".concat(f,"_prime_UTR"),start:a,end:u})}}));var s=Object.fromEntries(e.tags().map((function(t){return[t,e.get(t)]})));return s.subfeatures=i,s.type="mRNA",s.uniqueId=e.id(),delete s.chromStarts,delete s.chromStart,delete s.chromEnd,delete s.chrom,delete s.blockStarts,delete s.blockSizes,delete s.blockCount,delete s.thickStart,delete s.thickEnd,new a.SimpleFeature({data:s,id:e.id()})}function i(e,t,r,i,s,c,o,d){var l=e.split("\t"),f=l[t],p=+l[r],h=r===i?1:0,v=+l[i]+h,m=d?function(e,t){return Object.fromEntries(t.split("\t").map((function(t,r){return[e[r],t]})))}(d,e):c.parseLine(e,{uniqueId:o}),g=m.blockCount,b=m.blockSizes,k=m.blockStarts,C=m.chromStarts;if(g){var y=C||k||[],S=b,w=p;m.subfeatures=[];for(var Z=0;Z<g;Z+=1){var _=(y[Z]||0)+w,N=_+(S[Z]||0);m.subfeatures.push({uniqueId:"".concat(o,"-").concat(Z),start:_,end:N,type:"block"})}}s&&(m.score=+m[s]),delete m.chrom,delete m.chromStart,delete m.chromEnd;var x=new a.SimpleFeature((0,n.Z)((0,n.Z)({},m),{},{start:p,end:v,refName:f,uniqueId:o}));return x.get("thickStart")?u(x):x}}}]);
//# sourceMappingURL=3653.6aa3741d.chunk.js.map