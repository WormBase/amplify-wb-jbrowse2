"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9870],{43334:(e,t,s)=>{s.d(t,{A:()=>i});class i extends Map{constructor(e={}){if(super(),!(e.maxSize&&e.maxSize>0))throw new TypeError("`maxSize` must be a number greater than 0");if("number"==typeof e.maxAge&&0===e.maxAge)throw new TypeError("`maxAge` must be a number greater than 0");this.maxSize=e.maxSize,this.maxAge=e.maxAge||Number.POSITIVE_INFINITY,this.onEviction=e.onEviction,this.cache=new Map,this.oldCache=new Map,this._size=0}_emitEvictions(e){if("function"==typeof this.onEviction)for(const[t,s]of e)this.onEviction(t,s.value)}_deleteIfExpired(e,t){return"number"==typeof t.expiry&&t.expiry<=Date.now()&&("function"==typeof this.onEviction&&this.onEviction(e,t.value),this.delete(e))}_getOrDeleteIfExpired(e,t){if(!1===this._deleteIfExpired(e,t))return t.value}_getItemValue(e,t){return t.expiry?this._getOrDeleteIfExpired(e,t):t.value}_peek(e,t){const s=t.get(e);return this._getItemValue(e,s)}_set(e,t){this.cache.set(e,t),this._size++,this._size>=this.maxSize&&(this._size=0,this._emitEvictions(this.oldCache),this.oldCache=this.cache,this.cache=new Map)}_moveToRecent(e,t){this.oldCache.delete(e),this._set(e,t)}*_entriesAscending(){for(const e of this.oldCache){const[t,s]=e;this.cache.has(t)||!1===this._deleteIfExpired(t,s)&&(yield e)}for(const e of this.cache){const[t,s]=e;!1===this._deleteIfExpired(t,s)&&(yield e)}}get(e){if(this.cache.has(e)){const t=this.cache.get(e);return this._getItemValue(e,t)}if(this.oldCache.has(e)){const t=this.oldCache.get(e);if(!1===this._deleteIfExpired(e,t))return this._moveToRecent(e,t),t.value}}set(e,t,{maxAge:s=this.maxAge}={}){const i="number"==typeof s&&s!==Number.POSITIVE_INFINITY?Date.now()+s:void 0;this.cache.has(e)?this.cache.set(e,{value:t,expiry:i}):this._set(e,{value:t,expiry:i})}has(e){return this.cache.has(e)?!this._deleteIfExpired(e,this.cache.get(e)):!!this.oldCache.has(e)&&!this._deleteIfExpired(e,this.oldCache.get(e))}peek(e){return this.cache.has(e)?this._peek(e,this.cache):this.oldCache.has(e)?this._peek(e,this.oldCache):void 0}delete(e){const t=this.cache.delete(e);return t&&this._size--,this.oldCache.delete(e)||t}clear(){this.cache.clear(),this.oldCache.clear(),this._size=0}resize(e){if(!(e&&e>0))throw new TypeError("`maxSize` must be a number greater than 0");const t=[...this._entriesAscending()],s=t.length-e;s<0?(this.cache=new Map(t),this.oldCache=new Map,this._size=t.length):(s>0&&this._emitEvictions(t.slice(0,s)),this.oldCache=new Map(t.slice(s)),this.cache=new Map,this._size=0),this.maxSize=e}*keys(){for(const[e]of this)yield e}*values(){for(const[,e]of this)yield e}*[Symbol.iterator](){for(const e of this.cache){const[t,s]=e;!1===this._deleteIfExpired(t,s)&&(yield[t,s.value])}for(const e of this.oldCache){const[t,s]=e;this.cache.has(t)||!1===this._deleteIfExpired(t,s)&&(yield[t,s.value])}}*entriesDescending(){let e=[...this.cache];for(let t=e.length-1;t>=0;--t){const s=e[t],[i,a]=s;!1===this._deleteIfExpired(i,a)&&(yield[i,a.value])}e=[...this.oldCache];for(let t=e.length-1;t>=0;--t){const s=e[t],[i,a]=s;this.cache.has(i)||!1===this._deleteIfExpired(i,a)&&(yield[i,a.value])}}*entriesAscending(){for(const[e,t]of this._entriesAscending())yield[e,t.value]}get size(){if(!this._size)return this.oldCache.size;let e=0;for(const t of this.oldCache.keys())this.cache.has(t)||e++;return Math.min(this._size+e,this.maxSize)}entries(){return this.entriesAscending()}forEach(e,t=this){for(const[s,i]of this.entriesAscending())e.call(t,i,s,this)}get[Symbol.toStringTag](){return JSON.stringify([...this.entriesAscending()])}}},69870:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var i=s(71616),a=s(46377),n=s(99834),r=s(66885),o=s(99546),h=s(5742),c=s.n(h),l=s(43334);class d extends a.BaseSequenceAdapter{seqCache=new(c())({cache:new l.A({maxSize:200}),fill:async(e,t)=>{const{refName:s,start:i,end:a,fasta:n}=e;return n.getSequence(s,i,a,{...e,signal:t})}});async getRefNames(e){const{fasta:t}=await this.setup();return t.getSequenceNames(e)}async getRegions(e){const{fasta:t}=await this.setup(),s=await t.getSequenceSizes(e);return Object.keys(s).map((e=>({refName:e,start:0,end:s[e]})))}async setupPre(){const e=this.getConf("fastaLocation"),t=this.getConf("faiLocation");return{fasta:new i.BL({fasta:(0,n.openLocation)(e,this.pluginManager),fai:(0,n.openLocation)(t,this.pluginManager)})}}async getHeader(){const e=this.getConf("metadataLocation");return""===e.uri||"/path/to/fa.metadata.yaml"===e.uri?null:(0,n.openLocation)(e,this.pluginManager).readFile("utf8")}async setup(){return this.setupP||(this.setupP=this.setupPre().catch((e=>{throw this.setupP=void 0,e}))),this.setupP}getFeatures(e,t){const{refName:s,start:i,end:a}=e;return(0,r.ObservableCreate)((async e=>{const{fasta:n}=await this.setup(),r=await n.getSequenceSize(s,t),h=void 0!==r?Math.min(r,a):a,c=[],l=128e3,d=i-i%l,f=a+(l-a%l);for(let e=d;e<f;e+=l){const i={refName:s,start:e,end:e+l};c.push(this.seqCache.get(JSON.stringify(i),{...i,fasta:n},t?.signal))}const u=(await Promise.all(c)).join("").slice(i-d).slice(0,a-i);u&&e.next(new o.SimpleFeature({id:`${s} ${i}-${h}`,data:{refName:s,start:i,end:h,seq:u}})),e.complete()}))}freeResources(){}}},71616:(e,t,s)=>{s.d(t,{tP:()=>h,BL:()=>o});var i=s(45834),a=s(7706),n=s(35451).Buffer;function r(e,t){return e.offset+e.lineBytes*Math.floor(t/e.lineLength)+t%e.lineLength}class o{constructor({fasta:e,fai:t,path:s,faiPath:a}){if(e)this.fasta=e;else{if(!s)throw new Error("Need to pass filehandle for fasta or path to localfile");this.fasta=new i.EY(s)}if(t)this.fai=t;else if(a)this.fai=new i.EY(a);else{if(!s)throw new Error("Need to pass filehandle for  or path to localfile");this.fai=new i.EY(`${s}.fai`)}}async _getIndexes(e){return this.indexes||(this.indexes=async function(e,t){const s=await e.readFile(t);if(!s||!s.length)throw new Error("No data read from FASTA index (FAI) file");let i,a=0;const n=s.toString("utf8").split(/\r?\n/).filter((e=>/\S/.test(e))).map((e=>e.split("\t"))).filter((e=>""!==e[0])).map((e=>(i&&i.name===e[0]||(i={name:e[0],id:a},a+=1),{id:i.id,name:e[0],length:+e[1],start:0,end:+e[1],offset:+e[2],lineLength:+e[3],lineBytes:+e[4]})));return{name:Object.fromEntries(n.map((e=>[e.name,e]))),id:Object.fromEntries(n.map((e=>[e.id,e])))}}(this.fai,e)),this.indexes}async getSequenceNames(e){return Object.keys((await this._getIndexes(e)).name)}async getSequenceSizes(e){const t={},s=await this._getIndexes(e),i=Object.values(s.id);for(let e=0;e<i.length;e+=1)t[i[e].name]=i[e].length;return t}async getSequenceSize(e,t){var s;return null===(s=(await this._getIndexes(t)).name[e])||void 0===s?void 0:s.length}async hasReferenceSequence(e,t){return!!(await this._getIndexes(t)).name[e]}async getResiduesById(e,t,s,i){const a=(await this._getIndexes(i)).id[e];if(a)return this._fetchFromIndexEntry(a,t,s,i)}async getResiduesByName(e,t,s,i){const a=(await this._getIndexes(i)).name[e];if(a)return this._fetchFromIndexEntry(a,t,s,i)}async getSequence(e,t,s,i){return this.getResiduesByName(e,t,s,i)}async _fetchFromIndexEntry(e,t=0,s,i){let a=s;if(t<0)throw new TypeError("regionStart cannot be less than 0");if((void 0===a||a>e.length)&&(a=e.length),t>=a)return"";const o=r(e,t),h=r(e,a)-o,c=n.allocUnsafe(h);return await this.fasta.read(c,0,h,o,i),c.toString("utf8").replace(/\s+/g,"")}}class h extends o{constructor({fasta:e,path:t,fai:s,faiPath:i,gzi:n,gziPath:r}){super({fasta:e,path:t,fai:s,faiPath:i}),e&&n?this.fasta=new a.sG({filehandle:e,gziFilehandle:n}):t&&r&&(this.fasta=new a.sG({path:t,gziPath:r}))}}},12401:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(53472),n=i(s(58607)),r=i(s(56086));class o{constructor({fill:e,cache:t}){if("function"!=typeof e)throw new TypeError("must pass a fill function");if("object"!=typeof t)throw new TypeError("must pass a cache object");if("function"!=typeof t.get||"function"!=typeof t.set||"function"!=typeof t.delete)throw new TypeError("cache must implement get(key), set(key, val), and and delete(key)");this.cache=t,this.fillCallback=e}static isAbortException(e){return"AbortError"===e.name||"ERR_ABORTED"===e.code||"AbortError: aborted"===e.message||"Error: aborted"===e.message}evict(e,t){this.cache.get(e)===t&&this.cache.delete(e)}fill(e,t,s,i){const a=new n.default,o=new r.default;o.addCallback(i);const h={aborter:a,promise:this.fillCallback(t,a.signal,(e=>{o.callback(e)})),settled:!1,statusReporter:o,get aborted(){return this.aborter.signal.aborted}};h.aborter.addSignal(s),h.aborter.signal.addEventListener("abort",(()=>{h.settled||this.evict(e,h)})),h.promise.then((()=>{h.settled=!0}),(()=>{h.settled=!0,this.evict(e,h)})).catch((e=>{throw console.error(e),e})),this.cache.set(e,h)}static checkSinglePromise(e,t){function s(){if(t&&t.aborted)throw Object.assign(new Error("aborted"),{code:"ERR_ABORTED"})}return e.then((e=>(s(),e)),(e=>{throw s(),e}))}has(e){return this.cache.has(e)}get(e,t,s,i){if(!s&&t instanceof a.AbortSignal)throw new TypeError("second get argument appears to be an AbortSignal, perhaps you meant to pass `null` for the fill data?");const n=this.cache.get(e);return n?n.aborted&&!n.settled?(this.evict(e,n),this.get(e,t,s,i)):n.settled?n.promise:(n.aborter.addSignal(s),n.statusReporter.addCallback(i),o.checkSinglePromise(n.promise,s)):(this.fill(e,t,s,i),o.checkSinglePromise(this.cache.get(e).promise,s))}delete(e){const t=this.cache.get(e);t&&(t.settled||t.aborter.abort(),this.cache.delete(e))}clear(){const e=this.cache.keys();let t=0;for(let s=e.next();!s.done;s=e.next())this.delete(s.value),t+=1;return t}}t.default=o},58607:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=s(53472);class a{}t.default=class{constructor(){this.signals=new Set,this.abortController=new i.AbortController}addSignal(e=new a){if(this.signal.aborted)throw new Error("cannot add a signal, already aborted!");this.signals.add(e),e.aborted?this.handleAborted(e):"function"==typeof e.addEventListener&&e.addEventListener("abort",(()=>{this.handleAborted(e)}))}handleAborted(e){this.signals.delete(e),0===this.signals.size&&this.abortController.abort()}get signal(){return this.abortController.signal}abort(){this.abortController.abort()}}},56086:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(){this.callbacks=new Set}addCallback(e=(()=>{})){this.callbacks.add(e),e(this.currentMessage)}callback(e){this.currentMessage=e,this.callbacks.forEach((t=>{t(e)}))}}},53472:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AbortSignal=t.AbortController=void 0;const i=s(16006);var a=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==s.g)return s.g;throw new Error("unable to locate global object")};let n=void 0===a().AbortController?i.AbortController:a().AbortController;t.AbortController=n;let r=void 0===a().AbortController?i.AbortSignal:a().AbortSignal;t.AbortSignal=r},5742:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=i(s(12401));t.default=a.default}}]);
//# sourceMappingURL=9870.fb239e55.chunk.js.map