"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[7028],{97028:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var r=n(32723),a=n(96234),s=n(34795),i=n(9249),u=n(87371),c=n(45754),o=n(13820),f=n(20783),h=n(33528),l=n(26131),p=n(14956),d=n(62821),v=n.n(d),k=n(5482),g=n(76254),w=n(49882).lW,m=440477507;function b(e,t){var n=e.prototype[t],r="_memo_".concat(t);e.prototype[t]=function(){return r in this||(this[r]=n.call(this)),this[r]}}for(var x=["T","C","A","G"],y=[],Z=0;Z<256;Z++)y.push(x[Z>>6&3]+x[Z>>4&3]+x[Z>>2&3]+x[3&Z]);var S=y.map((function(e){return e.toLowerCase()})),B=function(e,t,n,a,c,o,f,h,l,p,d,b){function x(e){var t=e.filehandle,n=e.path;if((0,i.Z)(this,x),t)this.filehandle=t;else{if(!n)throw new Error("must supply path or filehandle");this.filehandle=new k.S9(n)}this.isBigEndian=void 0}return(0,u.Z)(x,[{key:"_getParser",value:function(t){return(e=e||(0,s.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._getParsers();case 2:if(e.t0=t,n=e.sent[e.t0]){e.next=6;break}throw new Error("parser ".concat(t," not found"));case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"_detectEndianness",value:function(){return(t=t||(0,s.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.filehandle.read(w.allocUnsafe(8),0,8,0);case 2:if(t=e.sent,(n=t.buffer).readInt32LE(0)!==m){e.next=9;break}this.isBigEndian=!1,this.version=n.readInt32LE(4),e.next=15;break;case 9:if(n.readInt32BE(0)!==m){e.next=14;break}this.isBigEndian=!0,this.version=n.readInt32BE(4),e.next=15;break;case 14:throw new Error("not a 2bit file");case 15:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"_getParsers",value:function(){return(n=n||(0,s.Z)((0,r.Z)().mark((function e(){var t,n,a,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._detectEndianness();case 2:return t=this.isBigEndian?"big":"little",n=this.isBigEndian?"be":"le",a=(new g._).endianess(t).uint8("nameLength").string("name",{length:"nameLength"}),a=1===this.version?a.buffer("offsetBytes",{length:8}):a.uint32("offset"),s=(new g._).endianess(t).int32("magic",{assert:function(e){return 440477507===e}}).int32("version",{assert:function(e){return 0===e||1===e}}).uint32("sequenceCount",{assert:function(e){return e>=0}}).uint32("reserved"),e.abrupt("return",{header:s,index:(new g._).endianess(t).uint32("sequenceCount").uint32("reserved").array("index",{length:"sequenceCount",type:a}),record1:(new g._).endianess(t).uint32("dnaSize").uint32("nBlockCount"),record2:(new g._).endianess(t).uint32("nBlockCount").array("nBlockStarts",{length:"nBlockCount",type:"uint32".concat(n)}).array("nBlockSizes",{length:"nBlockCount",type:"uint32".concat(n)}).uint32("maskBlockCount"),record3:(new g._).endianess(t).uint32("maskBlockCount").array("maskBlockStarts",{length:"maskBlockCount",type:"uint32".concat(n)}).array("maskBlockSizes",{length:"maskBlockCount",type:"uint32".concat(n)}).int32("reserved")});case 8:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getHeader",value:function(){return(a=a||(0,s.Z)((0,r.Z)().mark((function e(){var t,n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._detectEndianness();case 2:return e.next=4,this.filehandle.read(w.allocUnsafe(16),0,16,0);case 4:return t=e.sent,n=t.buffer,e.next=8,this._getParser("header");case 8:return a=e.sent,e.abrupt("return",a.parse(n).result);case 10:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getIndex",value:function(){return(c=c||(0,s.Z)((0,r.Z)().mark((function e(){var t,n,a,s,i,u,c,o=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getHeader();case 2:return t=e.sent,n=8+t.sequenceCount*(257+(1===this.version?8:4)),e.next=6,this.filehandle.read(w.allocUnsafe(n),0,n,8);case 6:return a=e.sent,s=a.buffer,e.next=10,this._getParser("index");case 10:return i=e.sent,u=i.parse(s).result.index,c={},1===this.version?u.forEach((function(e){var t=e.name,n=e.offsetBytes,r=v().fromBytes(n,!0,!o.isBigEndian);if(r.greaterThan(Number.MAX_SAFE_INTEGER))throw new Error("integer overflow. File offset greater than 2^53-1 encountered. This library can only handle offsets up to 2^53-1.");c[t]=r.toNumber()})):u.forEach((function(e){var t=e.name,n=e.offset;c[t]=n})),e.abrupt("return",c);case 15:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getSequenceNames",value:function(){return(o=o||(0,s.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getIndex();case 2:return t=e.sent,e.abrupt("return",Object.keys(t));case 4:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getSequenceSizes",value:function(){return(f=f||(0,s.Z)((0,r.Z)().mark((function e(){var t,n,a,s,i,u,c=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getIndex();case 2:return t=e.sent,n=Object.keys(t),a=Object.values(t).map((function(e){return c._getSequenceSize(e)})),e.next=7,Promise.all(a);case 7:for(s=e.sent,i={},u=0;u<n.length;u+=1)i[n[u]]=s[u];return e.abrupt("return",i);case 11:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getSequenceSize",value:function(e){return(h=h||(0,s.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getIndex();case 2:if(n=e.sent,a=n[t]){e.next=6;break}return e.abrupt("return",void 0);case 6:return e.abrupt("return",this._getSequenceSize(a));case 7:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"_getSequenceSize",value:function(e){return(l=l||(0,s.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(void 0===t||t<0)){e.next=2;break}throw new Error("invalid offset");case 2:return e.next=4,this._parseItem(t,8,"record1");case 4:return n=e.sent,e.abrupt("return",n.dnaSize);case 6:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"_getSequenceRecord",value:function(e){return(p=p||(0,s.Z)((0,r.Z)().mark((function e(t){var n,a,s,i,u,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(void 0===t||t<0)){e.next=2;break}throw new Error("invalid offset");case 2:return e.next=4,this._parseItem(t,8,"record1");case 4:return n=e.sent,a=8*n.nBlockCount+8,e.next=8,this._parseItem(t+4,a,"record2");case 8:return s=e.sent,i=8*s.maskBlockCount+8,e.next=12,this._parseItem(t+4+a-4,i,"record3");case 12:return u=e.sent,c={dnaSize:n.dnaSize,nBlocks:{starts:s.nBlockStarts,sizes:s.nBlockSizes},maskBlocks:{starts:u.maskBlockStarts,sizes:u.maskBlockSizes},dnaPosition:t+4+a-4+i},e.abrupt("return",c);case 15:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"_parseItem",value:function(e,t,n){return(d=d||(0,s.Z)((0,r.Z)().mark((function e(t,n,a){var s,i,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.filehandle.read(w.allocUnsafe(n),0,n,t);case 2:return s=e.sent,i=s.buffer,e.next=6,this._getParser(a);case 6:return u=e.sent,e.abrupt("return",u.parse(i).result);case 8:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getSequence",value:function(e){return(b=b||(0,s.Z)((0,r.Z)().mark((function e(t){var n,a,s,i,u,c,o,f,h,l,p,d,v,k,g,m,b,x,Z=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Z.length>1&&void 0!==Z[1]?Z[1]:0,a=Z.length>2?Z[2]:void 0,e.next=4,this.getIndex();case 4:if(s=e.sent,i=s[t]){e.next=8;break}return e.abrupt("return",void 0);case 8:return e.next=10,this._getSequenceRecord(i);case 10:if(u=e.sent,!(n<0)){e.next=13;break}throw new TypeError("regionStart cannot be less than 0");case 13:return(void 0===a||a>u.dnaSize)&&(a=u.dnaSize),c=this._getOverlappingBlocks(n,a,u.nBlocks.starts,u.nBlocks.sizes),o=this._getOverlappingBlocks(n,a,u.maskBlocks.starts,u.maskBlocks.sizes),f=w.allocUnsafe(Math.ceil((a-n)/4)+1),h=Math.floor(n/4),e.next=20,this.filehandle.read(f,0,f.length,u.dnaPosition+h);case 20:for(l=e.sent,p=l.buffer,d="",v=n;v<a;v+=1){for(;o.length&&o[0].end<=v;)o.shift();if(k=o[0]&&o[0].start<=v&&o[0].end>v,c[0]&&v>=c[0].start&&v<c[0].end){for(g=c.shift();v<g.end&&v<a;v+=1)d+=k?"n":"N";v-=1}else m=Math.floor(v/4)-h,b=v%4,x=p[m],d+=k?S[x][b]:y[x][b]}return e.abrupt("return",d);case 25:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"_getOverlappingBlocks",value:function(e,t,n,r){for(var a,s,i=0;i<n.length;i+=1){var u=n[i];if(e>=u+r[i]||t<=u){if(void 0!==a){s=i;break}}else void 0===a&&(a=i)}if(void 0===a)return[];void 0===s&&(s=n.length);for(var c=new Array(s-a),o=a;o<s;o+=1)c[o-a]={start:n[o],end:n[o]+r[o],size:r[o]};return c}}]),x}();b(B,"_getParsers"),b(B,"getIndex"),b(B,"getHeader");var _=n(9077),z=function(e,t,n,f){(0,c.Z)(v,e);var d=(0,o.Z)(v);function v(e,t,n){var r;(0,i.Z)(this,v),(r=d.call(this,e,t,n)).twobit=void 0,r.chromSizesData=void 0;var a=r.pluginManager;return r.chromSizesData=r.initChromSizes(),r.twobit=new B({filehandle:(0,h.openLocation)(r.getConf("twoBitLocation"),a)}),r}return(0,u.Z)(v,[{key:"initChromSizes",value:function(){return(t=t||(0,s.Z)((0,r.Z)().mark((function e(){var t,n,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("/path/to/default.chrom.sizes"===(t=(0,_.readConfObject)(this.config,"chromSizesLocation")).uri||""===t.uri){e.next=7;break}return n=(0,h.openLocation)(t,this.pluginManager),e.next=5,n.readFile("utf8");case 5:return s=e.sent,e.abrupt("return",Object.fromEntries(null===s||void 0===s?void 0:s.split(/\n|\r\n|\r/).filter((function(e){return!!e.trim()})).map((function(e){var t=e.split("\t"),n=(0,a.Z)(t,2);return[n[0],+n[1]]}))));case 7:return e.abrupt("return",void 0);case 8:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getRefNames",value:function(){return(n=n||(0,s.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.chromSizesData;case 2:if(!(t=e.sent)){e.next=5;break}return e.abrupt("return",Object.keys(t));case 5:return e.abrupt("return",this.twobit.getSequenceNames());case 6:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getRegions",value:function(){return(f=f||(0,s.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.chromSizesData;case 2:if(!(t=e.sent)){e.next=5;break}return e.abrupt("return",Object.keys(t).map((function(e){return{refName:e,start:0,end:t[e]}})));case 5:return e.next=7,this.twobit.getSequenceSizes();case 7:return n=e.sent,e.abrupt("return",Object.keys(n).map((function(e){return{refName:e,start:0,end:n[e]}})));case 9:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getFeatures",value:function(e){var t,n=this,a=e.refName,i=e.start,u=e.end;return(0,l.ObservableCreate)((function(e){return(t=t||(0,s.Z)((0,r.Z)().mark((function e(t){var s,c,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.twobit.getSequenceSize(a);case 2:return s=e.sent,c=void 0!==s?Math.min(s,u):u,e.next=6,n.twobit.getSequence(a,i,c);case 6:(o=e.sent)&&t.next(new p.Z({id:"".concat(a," ").concat(i,"-").concat(c),data:{refName:a,start:i,end:c,seq:o}})),t.complete();case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}))}},{key:"freeResources",value:function(){}}]),v}(f.BaseSequenceAdapter)}}]);
//# sourceMappingURL=7028.fa7c2231.chunk.js.map