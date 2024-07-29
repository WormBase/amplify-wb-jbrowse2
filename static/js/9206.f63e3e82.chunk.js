"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9206,9870],{43334:(e,t,s)=>{s.d(t,{A:()=>a});class a extends Map{constructor(e={}){if(super(),!(e.maxSize&&e.maxSize>0))throw new TypeError("`maxSize` must be a number greater than 0");if("number"==typeof e.maxAge&&0===e.maxAge)throw new TypeError("`maxAge` must be a number greater than 0");this.maxSize=e.maxSize,this.maxAge=e.maxAge||Number.POSITIVE_INFINITY,this.onEviction=e.onEviction,this.cache=new Map,this.oldCache=new Map,this._size=0}_emitEvictions(e){if("function"==typeof this.onEviction)for(const[t,s]of e)this.onEviction(t,s.value)}_deleteIfExpired(e,t){return"number"==typeof t.expiry&&t.expiry<=Date.now()&&("function"==typeof this.onEviction&&this.onEviction(e,t.value),this.delete(e))}_getOrDeleteIfExpired(e,t){if(!1===this._deleteIfExpired(e,t))return t.value}_getItemValue(e,t){return t.expiry?this._getOrDeleteIfExpired(e,t):t.value}_peek(e,t){const s=t.get(e);return this._getItemValue(e,s)}_set(e,t){this.cache.set(e,t),this._size++,this._size>=this.maxSize&&(this._size=0,this._emitEvictions(this.oldCache),this.oldCache=this.cache,this.cache=new Map)}_moveToRecent(e,t){this.oldCache.delete(e),this._set(e,t)}*_entriesAscending(){for(const e of this.oldCache){const[t,s]=e;this.cache.has(t)||!1===this._deleteIfExpired(t,s)&&(yield e)}for(const e of this.cache){const[t,s]=e;!1===this._deleteIfExpired(t,s)&&(yield e)}}get(e){if(this.cache.has(e)){const t=this.cache.get(e);return this._getItemValue(e,t)}if(this.oldCache.has(e)){const t=this.oldCache.get(e);if(!1===this._deleteIfExpired(e,t))return this._moveToRecent(e,t),t.value}}set(e,t,{maxAge:s=this.maxAge}={}){const a="number"==typeof s&&s!==Number.POSITIVE_INFINITY?Date.now()+s:void 0;this.cache.has(e)?this.cache.set(e,{value:t,expiry:a}):this._set(e,{value:t,expiry:a})}has(e){return this.cache.has(e)?!this._deleteIfExpired(e,this.cache.get(e)):!!this.oldCache.has(e)&&!this._deleteIfExpired(e,this.oldCache.get(e))}peek(e){return this.cache.has(e)?this._peek(e,this.cache):this.oldCache.has(e)?this._peek(e,this.oldCache):void 0}delete(e){const t=this.cache.delete(e);return t&&this._size--,this.oldCache.delete(e)||t}clear(){this.cache.clear(),this.oldCache.clear(),this._size=0}resize(e){if(!(e&&e>0))throw new TypeError("`maxSize` must be a number greater than 0");const t=[...this._entriesAscending()],s=t.length-e;s<0?(this.cache=new Map(t),this.oldCache=new Map,this._size=t.length):(s>0&&this._emitEvictions(t.slice(0,s)),this.oldCache=new Map(t.slice(s)),this.cache=new Map,this._size=0),this.maxSize=e}*keys(){for(const[e]of this)yield e}*values(){for(const[,e]of this)yield e}*[Symbol.iterator](){for(const e of this.cache){const[t,s]=e;!1===this._deleteIfExpired(t,s)&&(yield[t,s.value])}for(const e of this.oldCache){const[t,s]=e;this.cache.has(t)||!1===this._deleteIfExpired(t,s)&&(yield[t,s.value])}}*entriesDescending(){let e=[...this.cache];for(let t=e.length-1;t>=0;--t){const s=e[t],[a,i]=s;!1===this._deleteIfExpired(a,i)&&(yield[a,i.value])}e=[...this.oldCache];for(let t=e.length-1;t>=0;--t){const s=e[t],[a,i]=s;this.cache.has(a)||!1===this._deleteIfExpired(a,i)&&(yield[a,i.value])}}*entriesAscending(){for(const[e,t]of this._entriesAscending())yield[e,t.value]}get size(){if(!this._size)return this.oldCache.size;let e=0;for(const t of this.oldCache.keys())this.cache.has(t)||e++;return Math.min(this._size+e,this.maxSize)}entries(){return this.entriesAscending()}forEach(e,t=this){for(const[s,a]of this.entriesAscending())e.call(t,a,s,this)}get[Symbol.toStringTag](){return JSON.stringify([...this.entriesAscending()])}}},79206:(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var a=s(71616),i=s(99834),n=s(69870);class r extends n.default{async setupPre(){const e=this.getConf("fastaLocation"),t=this.getConf("faiLocation"),s=this.getConf("gziLocation"),n={fasta:(0,i.openLocation)(e,this.pluginManager),fai:(0,i.openLocation)(t,this.pluginManager),gzi:(0,i.openLocation)(s,this.pluginManager)};return{fasta:new a.tP(n)}}}},69870:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var a=s(71616),i=s(46377),n=s(99834),r=s(66885),o=s(99546),h=s(47046),c=s(43334);class l extends i.BaseSequenceAdapter{seqCache=new h.A({cache:new c.A({maxSize:200}),fill:async(e,t)=>{const{refName:s,start:a,end:i,fasta:n}=e;return n.getSequence(s,a,i,{...e,signal:t})}});async getRefNames(e){const{fasta:t}=await this.setup();return t.getSequenceNames(e)}async getRegions(e){const{fasta:t}=await this.setup(),s=await t.getSequenceSizes(e);return Object.keys(s).map((e=>({refName:e,start:0,end:s[e]})))}async setupPre(){const e=this.getConf("fastaLocation"),t=this.getConf("faiLocation");return{fasta:new a.BL({fasta:(0,n.openLocation)(e,this.pluginManager),fai:(0,n.openLocation)(t,this.pluginManager)})}}async getHeader(){const e=this.getConf("metadataLocation");return""===e.uri||"/path/to/fa.metadata.yaml"===e.uri?null:(0,n.openLocation)(e,this.pluginManager).readFile("utf8")}async setup(){return this.setupP||(this.setupP=this.setupPre().catch((e=>{throw this.setupP=void 0,e}))),this.setupP}getFeatures(e,t){const{refName:s,start:a,end:i}=e;return(0,r.ObservableCreate)((async e=>{const{fasta:n}=await this.setup(),r=await n.getSequenceSize(s,t),h=void 0!==r?Math.min(r,i):i,c=[],l=128e3,d=a-a%l,f=i+(l-i%l);for(let e=d;e<f;e+=l){const a={refName:s,start:e,end:e+l};c.push(this.seqCache.get(JSON.stringify(a),{...a,fasta:n},t?.signal))}const u=(await Promise.all(c)).join("").slice(a-d).slice(0,i-a);u&&e.next(new o.SimpleFeature({id:`${s} ${a}-${h}`,data:{refName:s,start:a,end:h,seq:u}})),e.complete()}))}freeResources(){}}},47046:(e,t,s)=>{s.d(t,{A:()=>r});class a{}class i{constructor(){this.signals=new Set,this.abortController=new AbortController}addSignal(e=new a){if(this.signal.aborted)throw new Error("cannot add a signal, already aborted!");this.signals.add(e),e.aborted?this.handleAborted(e):"function"==typeof e.addEventListener&&e.addEventListener("abort",(()=>{this.handleAborted(e)}))}handleAborted(e){this.signals.delete(e),0===this.signals.size&&this.abortController.abort()}get signal(){return this.abortController.signal}abort(){this.abortController.abort()}}class n{constructor(){this.callbacks=new Set}addCallback(e=()=>{}){this.callbacks.add(e),e(this.currentMessage)}callback(e){this.currentMessage=e;for(const t of this.callbacks)t(e)}}class r{constructor({fill:e,cache:t}){if("function"!=typeof e)throw new TypeError("must pass a fill function");if("object"!=typeof t)throw new TypeError("must pass a cache object");if("function"!=typeof t.get||"function"!=typeof t.set||"function"!=typeof t.delete)throw new TypeError("cache must implement get(key), set(key, val), and and delete(key)");this.cache=t,this.fillCallback=e}static isAbortException(e){return"AbortError"===e.name||"ERR_ABORTED"===e.code||"AbortError: aborted"===e.message||"Error: aborted"===e.message}evict(e,t){this.cache.get(e)===t&&this.cache.delete(e)}fill(e,t,s,a){const r=new i,o=new n;o.addCallback(a);const h={aborter:r,promise:this.fillCallback(t,r.signal,(e=>{o.callback(e)})),settled:!1,statusReporter:o,get aborted(){return this.aborter.signal.aborted}};h.aborter.addSignal(s),h.aborter.signal.addEventListener("abort",(()=>{h.settled||this.evict(e,h)})),h.promise.then((()=>{h.settled=!0}),(()=>{h.settled=!0,this.evict(e,h)})).catch((e=>{throw console.error(e),e})),this.cache.set(e,h)}static checkSinglePromise(e,t){function s(){if(null==t?void 0:t.aborted)throw Object.assign(new Error("aborted"),{code:"ERR_ABORTED"})}return e.then((e=>(s(),e)),(e=>{throw s(),e}))}has(e){return this.cache.has(e)}get(e,t,s,a){if(!s&&t instanceof AbortSignal)throw new TypeError("second get argument appears to be an AbortSignal, perhaps you meant to pass `null` for the fill data?");const i=this.cache.get(e);return i?i.aborted&&!i.settled?(this.evict(e,i),this.get(e,t,s,a)):i.settled?i.promise:(i.aborter.addSignal(s),i.statusReporter.addCallback(a),r.checkSinglePromise(i.promise,s)):(this.fill(e,t,s,a),r.checkSinglePromise(this.cache.get(e).promise,s))}delete(e){const t=this.cache.get(e);t&&(t.settled||t.aborter.abort(),this.cache.delete(e))}clear(){const e=this.cache.keys();let t=0;for(let s=e.next();!s.done;s=e.next())this.delete(s.value),t+=1;return t}}},71616:(e,t,s)=>{s.d(t,{tP:()=>h,BL:()=>o});var a=s(45834),i=s(7706),n=s(35451);function r(e,t){return e.offset+e.lineBytes*Math.floor(t/e.lineLength)+t%e.lineLength}class o{constructor({fasta:e,fai:t,path:s,faiPath:i}){if(e)this.fasta=e;else{if(!s)throw new Error("Need to pass filehandle for fasta or path to localfile");this.fasta=new a.EY(s)}if(t)this.fai=t;else if(i)this.fai=new a.EY(i);else{if(!s)throw new Error("Need to pass filehandle for  or path to localfile");this.fai=new a.EY(`${s}.fai`)}}async _getIndexes(e){return this.indexes||(this.indexes=async function(e,t){const s=await e.readFile(t);if(!(null==s?void 0:s.length))throw new Error("No data read from FASTA index (FAI) file");let a,i=0;const n=s.toString("utf8").split(/\r?\n/).filter((e=>/\S/.test(e))).map((e=>e.split("\t"))).filter((e=>""!==e[0])).map((e=>(a&&a.name===e[0]||(a={name:e[0],id:i},i+=1),{id:a.id,name:e[0],length:+e[1],start:0,end:+e[1],offset:+e[2],lineLength:+e[3],lineBytes:+e[4]})));return{name:Object.fromEntries(n.map((e=>[e.name,e]))),id:Object.fromEntries(n.map((e=>[e.id,e])))}}(this.fai,e)),this.indexes}async getSequenceNames(e){return Object.keys((await this._getIndexes(e)).name)}async getSequenceSizes(e){const t={},s=await this._getIndexes(e);for(const e of Object.values(s.id))t[e.name]=e.length;return t}async getSequenceSize(e,t){var s;return null===(s=(await this._getIndexes(t)).name[e])||void 0===s?void 0:s.length}async hasReferenceSequence(e,t){return!!(await this._getIndexes(t)).name[e]}async getResiduesById(e,t,s,a){const i=(await this._getIndexes(a)).id[e];if(i)return this._fetchFromIndexEntry(i,t,s,a)}async getResiduesByName(e,t,s,a){const i=(await this._getIndexes(a)).name[e];if(i)return this._fetchFromIndexEntry(i,t,s,a)}async getSequence(e,t,s,a){return this.getResiduesByName(e,t,s,a)}async _fetchFromIndexEntry(e,t=0,s,a){let i=s;if(t<0)throw new TypeError("regionStart cannot be less than 0");if((void 0===i||i>e.length)&&(i=e.length),t>=i)return"";const o=r(e,t),h=r(e,i)-o,c=n.Buffer.allocUnsafe(h);return await this.fasta.read(c,0,h,o,a),c.toString("utf8").replace(/\s+/g,"")}}class h extends o{constructor({fasta:e,path:t,fai:s,faiPath:a,gzi:n,gziPath:r}){super({fasta:e,path:t,fai:s,faiPath:a}),e&&n?this.fasta=new i.sG({filehandle:e,gziFilehandle:n}):t&&r&&(this.fasta=new i.sG({path:t,gziPath:r}))}}}}]);
//# sourceMappingURL=9206.f63e3e82.chunk.js.map