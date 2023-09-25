"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[8237],{33736:function(e,t,n){n.d(t,{IB:function(){return v},P:function(){return b}});var r,a=n(5482),i=n(87371),o=n(9249),s=n(45754),u=n(13820),c=n(42098),l=n(32723),f=n(34795),h=n(49882).lW;function d(e,t){return e.offset+e.lineBytes*Math.floor(t/e.lineLength)+t%e.lineLength}function p(e,t){return(r=r||(0,f.Z)((0,l.Z)().mark((function e(t,n){var r,a,i,o;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.readFile(n);case 2:if((r=e.sent)&&r.length){e.next=5;break}throw new Error("No data read from FASTA index (FAI) file");case 5:return a=0,o=r.toString("utf8").split(/\r?\n/).filter((function(e){return/\S/.test(e)})).map((function(e){return e.split("\t")})).filter((function(e){return""!==e[0]})).map((function(e){return i&&i.name===e[0]||(i={name:e[0],id:a},a+=1),{id:i.id,name:e[0],length:+e[1],start:0,end:+e[1],offset:+e[2],lineLength:+e[3],lineBytes:+e[4]}})),e.abrupt("return",{name:Object.fromEntries(o.map((function(e){return[e.name,e]}))),id:Object.fromEntries(o.map((function(e){return[e.id,e]})))});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=function(e,t,n,r,s,u,c,b,v){function g(e){var t=e.fasta,n=e.fai,r=e.path,i=e.faiPath,s=e.chunkSizeLimit,u=void 0===s?1e6:s;if((0,o.Z)(this,g),t)this.fasta=t;else{if(!r)throw new Error("Need to pass filehandle for fasta or path to localfile");this.fasta=new a.S9(r)}if(n)this.fai=n;else if(i)this.fai=new a.S9(i);else{if(!r)throw new Error("Need to pass filehandle for  or path to localfile");this.fai=new a.S9("".concat(r,".fai"))}this.chunkSizeLimit=u}return(0,i.Z)(g,[{key:"_getIndexes",value:function(t){return(e=e||(0,f.Z)((0,l.Z)().mark((function e(t){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.indexes||(this.indexes=p(this.fai,t)),e.abrupt("return",this.indexes);case 2:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getSequenceNames",value:function(e){return(t=t||(0,f.Z)((0,l.Z)().mark((function e(t){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Object,e.next=3,this._getIndexes(t);case 3:return e.t1=e.sent.name,e.abrupt("return",e.t0.keys.call(e.t0,e.t1));case 5:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getSequenceSizes",value:function(e){return(n=n||(0,f.Z)((0,l.Z)().mark((function e(t){var n,r,a,i;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,this._getIndexes(t);case 3:for(r=e.sent,a=Object.values(r.id),i=0;i<a.length;i+=1)n[a[i].name]=a[i].length;return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getSequenceSize",value:function(e,t){return(r=r||(0,f.Z)((0,l.Z)().mark((function e(t,n){var r,a;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._getIndexes(n);case 2:return a=e.sent,e.abrupt("return",null===(r=a.name[t])||void 0===r?void 0:r.length);case 4:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"hasReferenceSequence",value:function(e,t){return(s=s||(0,f.Z)((0,l.Z)().mark((function e(t,n){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._getIndexes(n);case 2:return e.t0=t,e.abrupt("return",!!e.sent.name[e.t0]);case 4:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getResiduesById",value:function(e,t,n,r){return(u=u||(0,f.Z)((0,l.Z)().mark((function e(t,n,r,a){var i;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._getIndexes(a);case 2:if(e.t0=t,i=e.sent.id[e.t0]){e.next=6;break}return e.abrupt("return",void 0);case 6:return e.abrupt("return",this._fetchFromIndexEntry(i,n,r,a));case 7:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getResiduesByName",value:function(e,t,n,r){return(c=c||(0,f.Z)((0,l.Z)().mark((function e(t,n,r,a){var i;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._getIndexes(a);case 2:if(e.t0=t,i=e.sent.name[e.t0]){e.next=6;break}return e.abrupt("return",void 0);case 6:return e.abrupt("return",this._fetchFromIndexEntry(i,n,r,a));case 7:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getSequence",value:function(e,t,n,r){return(b=b||(0,f.Z)((0,l.Z)().mark((function e(t,n,r,a){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getResiduesByName(t,n,r,a));case 1:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"_fetchFromIndexEntry",value:function(e){return(v=v||(0,f.Z)((0,l.Z)().mark((function e(t){var n,r,a,i,o,s,u=arguments;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=u.length>3?u[3]:void 0,a=u.length>2?u[2]:void 0,!((n=u.length>1&&void 0!==u[1]?u[1]:0)<0)){e.next=6;break}throw new TypeError("regionStart cannot be less than 0");case 6:if((void 0===a||a>t.length)&&(a=t.length),!(n>=a)){e.next=9;break}return e.abrupt("return","");case 9:if(i=d(t,n),!((o=d(t,a)-i)>this.chunkSizeLimit)){e.next=13;break}throw new Error("data size of ".concat(o.toLocaleString()," bytes exceeded chunk size limit of ").concat(this.chunkSizeLimit.toLocaleString()," bytes"));case 13:return s=h.allocUnsafe(o),e.next=16,this.fasta.read(s,0,o,i,r);case 16:return e.abrupt("return",s.toString("utf8").replace(/\s+/g,""));case 17:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}}]),g}(),v=function(e){(0,s.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r,a=e.fasta,i=e.path,s=e.fai,u=e.faiPath,l=e.gzi,f=e.gziPath,h=e.chunkSizeLimit;return(0,o.Z)(this,n),r=t.call(this,{fasta:a,path:i,fai:s,faiPath:u,chunkSizeLimit:h}),a&&l?r.fasta=new c.BgzfFilehandle({filehandle:a,gziFilehandle:l}):i&&f&&(r.fasta=new c.BgzfFilehandle({path:i,gziPath:f})),r}return(0,i.Z)(n)}(b)},28313:function(e,t,n){var r=n(53100).default,a=n(98870).default,i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(28909),s=i(n(32984)),u=i(n(77088)),c=function(){function e(t){var n=t.fill,a=t.cache;if(r(this,e),"function"!==typeof n)throw new TypeError("must pass a fill function");if("object"!==typeof a)throw new TypeError("must pass a cache object");if("function"!==typeof a.get||"function"!==typeof a.set||"function"!==typeof a.delete)throw new TypeError("cache must implement get(key), set(key, val), and and delete(key)");this.cache=a,this.fillCallback=n}return a(e,[{key:"evict",value:function(e,t){this.cache.get(e)===t&&this.cache.delete(e)}},{key:"fill",value:function(e,t,n,r){var a=this,i=new s.default,o=new u.default;o.addCallback(r);var c={aborter:i,promise:this.fillCallback(t,i.signal,(function(e){o.callback(e)})),settled:!1,statusReporter:o,get aborted(){return this.aborter.signal.aborted}};c.aborter.addSignal(n),c.aborter.signal.addEventListener("abort",(function(){c.settled||a.evict(e,c)})),c.promise.then((function(){c.settled=!0}),(function(){c.settled=!0,a.evict(e,c)})).catch((function(e){throw console.error(e),e})),this.cache.set(e,c)}},{key:"has",value:function(e){return this.cache.has(e)}},{key:"get",value:function(t,n,r,a){if(!r&&n instanceof o.AbortSignal)throw new TypeError("second get argument appears to be an AbortSignal, perhaps you meant to pass `null` for the fill data?");var i=this.cache.get(t);return i?i.aborted&&!i.settled?(this.evict(t,i),this.get(t,n,r,a)):i.settled?i.promise:(i.aborter.addSignal(r),i.statusReporter.addCallback(a),e.checkSinglePromise(i.promise,r)):(this.fill(t,n,r,a),e.checkSinglePromise(this.cache.get(t).promise,r))}},{key:"delete",value:function(e){var t=this.cache.get(e);t&&(t.settled||t.aborter.abort(),this.cache.delete(e))}},{key:"clear",value:function(){for(var e=this.cache.keys(),t=0,n=e.next();!n.done;n=e.next())this.delete(n.value),t+=1;return t}}],[{key:"isAbortException",value:function(e){return"AbortError"===e.name||"ERR_ABORTED"===e.code||"AbortError: aborted"===e.message||"Error: aborted"===e.message}},{key:"checkSinglePromise",value:function(e,t){function n(){if(t&&t.aborted)throw Object.assign(new Error("aborted"),{code:"ERR_ABORTED"})}return e.then((function(e){return n(),e}),(function(e){throw n(),e}))}}]),e}();t.default=c},32984:function(e,t,n){var r=n(98870).default,a=n(53100).default;Object.defineProperty(t,"__esModule",{value:!0});var i=n(28909),o=r((function e(){a(this,e)})),s=function(){function e(){a(this,e),this.signals=new Set,this.abortController=new i.AbortController}return r(e,[{key:"addSignal",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new o;if(this.signal.aborted)throw new Error("cannot add a signal, already aborted!");this.signals.add(t),t.aborted?this.handleAborted(t):"function"===typeof t.addEventListener&&t.addEventListener("abort",(function(){e.handleAborted(t)}))}},{key:"handleAborted",value:function(e){this.signals.delete(e),0===this.signals.size&&this.abortController.abort()}},{key:"signal",get:function(){return this.abortController.signal}},{key:"abort",value:function(){this.abortController.abort()}}]),e}();t.default=s},77088:function(e,t,n){var r=n(53100).default,a=n(98870).default;Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){r(this,e),this.callbacks=new Set}return a(e,[{key:"addCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};this.callbacks.add(e),e(this.currentMessage)}},{key:"callback",value:function(e){this.currentMessage=e,this.callbacks.forEach((function(t){t(e)}))}}]),e}();t.default=i},28909:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.AbortSignal=t.AbortController=void 0;var r=n(82741),a=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("unable to locate global object")},i="undefined"===typeof a().AbortController?r.AbortController:a().AbortController;t.AbortController=i;var o="undefined"===typeof a().AbortController?r.AbortSignal:a().AbortSignal;t.AbortSignal=o},89410:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(28313));t.default=a.default}}]);
//# sourceMappingURL=8237.aff30772.chunk.js.map