"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2796,9202],{63409:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(68079),r=n(32723),i=n(96234),s=n(41361),c=n(9249),u=n(87371),h=n(45754),o=n(13820),f=function(e,t,n){(0,h.Z)(p,e);var f=(0,o.Z)(p);function p(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if((0,c.Z)(this,p),e=f.call(this),!(t.maxSize&&t.maxSize>0))throw new TypeError("`maxSize` must be a number greater than 0");if("number"===typeof t.maxAge&&0===t.maxAge)throw new TypeError("`maxAge` must be a number greater than 0");return e.maxSize=t.maxSize,e.maxAge=t.maxAge||Number.POSITIVE_INFINITY,e.onEviction=t.onEviction,e.cache=new Map,e.oldCache=new Map,e._size=0,e}return(0,u.Z)(p,[{key:"_emitEvictions",value:function(e){if("function"===typeof this.onEviction){var t,n=(0,s.Z)(e);try{for(n.s();!(t=n.n()).done;){var a=(0,i.Z)(t.value,2),r=a[0],c=a[1];this.onEviction(r,c.value)}}catch(u){n.e(u)}finally{n.f()}}}},{key:"_deleteIfExpired",value:function(e,t){return"number"===typeof t.expiry&&t.expiry<=Date.now()&&("function"===typeof this.onEviction&&this.onEviction(e,t.value),this.delete(e))}},{key:"_getOrDeleteIfExpired",value:function(e,t){if(!1===this._deleteIfExpired(e,t))return t.value}},{key:"_getItemValue",value:function(e,t){return t.expiry?this._getOrDeleteIfExpired(e,t):t.value}},{key:"_peek",value:function(e,t){var n=t.get(e);return this._getItemValue(e,n)}},{key:"_set",value:function(e,t){this.cache.set(e,t),this._size++,this._size>=this.maxSize&&(this._size=0,this._emitEvictions(this.oldCache),this.oldCache=this.cache,this.cache=new Map)}},{key:"_moveToRecent",value:function(e,t){this.oldCache.delete(e),this._set(e,t)}},{key:"_entriesAscending",value:(0,r.Z)().mark((function e(){var t,n,a,c,u,h,o,f,p,l,v,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(0,s.Z)(this.oldCache),e.prev=1,t.s();case 3:if((n=t.n()).done){e.next=13;break}if(a=n.value,c=(0,i.Z)(a,2),u=c[0],h=c[1],this.cache.has(u)){e.next=11;break}if(!1!==this._deleteIfExpired(u,h)){e.next=11;break}return e.next=11,a;case 11:e.next=3;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),t.e(e.t0);case 18:return e.prev=18,t.f(),e.finish(18);case 21:o=(0,s.Z)(this.cache),e.prev=22,o.s();case 24:if((f=o.n()).done){e.next=33;break}if(p=f.value,l=(0,i.Z)(p,2),v=l[0],d=l[1],!1!==this._deleteIfExpired(v,d)){e.next=31;break}return e.next=31,p;case 31:e.next=24;break;case 33:e.next=38;break;case 35:e.prev=35,e.t1=e.catch(22),o.e(e.t1);case 38:return e.prev=38,o.f(),e.finish(38);case 41:case"end":return e.stop()}}),e,this,[[1,15,18,21],[22,35,38,41]])}))},{key:"get",value:function(e){if(this.cache.has(e)){var t=this.cache.get(e);return this._getItemValue(e,t)}if(this.oldCache.has(e)){var n=this.oldCache.get(e);if(!1===this._deleteIfExpired(e,n))return this._moveToRecent(e,n),n.value}}},{key:"set",value:function(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).maxAge,a=void 0===n?this.maxAge:n,r="number"===typeof a&&a!==Number.POSITIVE_INFINITY?Date.now()+a:void 0;this.cache.has(e)?this.cache.set(e,{value:t,expiry:r}):this._set(e,{value:t,expiry:r})}},{key:"has",value:function(e){return this.cache.has(e)?!this._deleteIfExpired(e,this.cache.get(e)):!!this.oldCache.has(e)&&!this._deleteIfExpired(e,this.oldCache.get(e))}},{key:"peek",value:function(e){return this.cache.has(e)?this._peek(e,this.cache):this.oldCache.has(e)?this._peek(e,this.oldCache):void 0}},{key:"delete",value:function(e){var t=this.cache.delete(e);return t&&this._size--,this.oldCache.delete(e)||t}},{key:"clear",value:function(){this.cache.clear(),this.oldCache.clear(),this._size=0}},{key:"resize",value:function(e){if(!(e&&e>0))throw new TypeError("`maxSize` must be a number greater than 0");var t=(0,a.Z)(this._entriesAscending()),n=t.length-e;n<0?(this.cache=new Map(t),this.oldCache=new Map,this._size=t.length):(n>0&&this._emitEvictions(t.slice(0,n)),this.oldCache=new Map(t.slice(n)),this.cache=new Map,this._size=0),this.maxSize=e}},{key:"keys",value:(0,r.Z)().mark((function e(){var t,n,a,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(0,s.Z)(this),e.prev=1,t.s();case 3:if((n=t.n()).done){e.next=9;break}return a=(0,i.Z)(n.value,1),c=a[0],e.next=7,c;case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.e(e.t0);case 14:return e.prev=14,t.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[1,11,14,17]])}))},{key:"values",value:(0,r.Z)().mark((function e(){var t,n,a,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(0,s.Z)(this),e.prev=1,t.s();case 3:if((n=t.n()).done){e.next=9;break}return a=(0,i.Z)(n.value,2),c=a[1],e.next=7,c;case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.e(e.t0);case 14:return e.prev=14,t.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[1,11,14,17]])}))},{key:t,value:(0,r.Z)().mark((function(){var e,t,n,a,c,u,h,o,f,p,l,v;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e=(0,s.Z)(this.cache),r.prev=1,e.s();case 3:if((t=e.n()).done){r.next=12;break}if(n=t.value,a=(0,i.Z)(n,2),c=a[0],u=a[1],!1!==this._deleteIfExpired(c,u)){r.next=10;break}return r.next=10,[c,u.value];case 10:r.next=3;break;case 12:r.next=17;break;case 14:r.prev=14,r.t0=r.catch(1),e.e(r.t0);case 17:return r.prev=17,e.f(),r.finish(17);case 20:h=(0,s.Z)(this.oldCache),r.prev=21,h.s();case 23:if((o=h.n()).done){r.next=33;break}if(f=o.value,p=(0,i.Z)(f,2),l=p[0],v=p[1],this.cache.has(l)){r.next=31;break}if(!1!==this._deleteIfExpired(l,v)){r.next=31;break}return r.next=31,[l,v.value];case 31:r.next=23;break;case 33:r.next=38;break;case 35:r.prev=35,r.t1=r.catch(21),h.e(r.t1);case 38:return r.prev=38,h.f(),r.finish(38);case 41:case"end":return r.stop()}}),u,this,[[1,14,17,20],[21,35,38,41]])}))},{key:"entriesDescending",value:(0,r.Z)().mark((function e(){var t,n,s,c,u,h,o,f,p,l,v;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(0,a.Z)(this.cache),n=t.length-1;case 2:if(!(n>=0)){e.next=12;break}if(s=t[n],c=(0,i.Z)(s,2),u=c[0],h=c[1],!1!==this._deleteIfExpired(u,h)){e.next=9;break}return e.next=9,[u,h.value];case 9:--n,e.next=2;break;case 12:t=(0,a.Z)(this.oldCache),o=t.length-1;case 14:if(!(o>=0)){e.next=25;break}if(f=t[o],p=(0,i.Z)(f,2),l=p[0],v=p[1],this.cache.has(l)){e.next=22;break}if(!1!==this._deleteIfExpired(l,v)){e.next=22;break}return e.next=22,[l,v.value];case 22:--o,e.next=14;break;case 25:case"end":return e.stop()}}),e,this)}))},{key:"entriesAscending",value:(0,r.Z)().mark((function e(){var t,n,a,c,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(0,s.Z)(this._entriesAscending()),e.prev=1,t.s();case 3:if((n=t.n()).done){e.next=9;break}return a=(0,i.Z)(n.value,2),c=a[0],u=a[1],e.next=7,[c,u.value];case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.e(e.t0);case 14:return e.prev=14,t.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[1,11,14,17]])}))},{key:"size",get:function(){if(!this._size)return this.oldCache.size;var e,t=0,n=(0,s.Z)(this.oldCache.keys());try{for(n.s();!(e=n.n()).done;){var a=e.value;this.cache.has(a)||t++}}catch(r){n.e(r)}finally{n.f()}return Math.min(this._size+t,this.maxSize)}},{key:"entries",value:function(){return this.entriesAscending()}},{key:"forEach",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,a=(0,s.Z)(this.entriesAscending());try{for(a.s();!(t=a.n()).done;){var r=(0,i.Z)(t.value,2),c=r[0],u=r[1];e.call(n,u,c,this)}}catch(h){a.e(h)}finally{a.f()}}},{key:n,get:function(){return JSON.stringify((0,a.Z)(this.entriesAscending()))}}]),p}((0,n(30364).Z)(Map),Symbol.iterator,Symbol.toStringTag)},2796:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(32723),r=n(34795),i=n(9249),s=n(87371),c=n(45754),u=n(13820),h=n(33736),o=n(33528),f=function(e){(0,c.Z)(n,e);var t=(0,u.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"setupPre",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t,n,r,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getConf("fastaLocation"),n=this.getConf("faiLocation"),r=this.getConf("gziLocation"),i={fasta:(0,o.openLocation)(t,this.pluginManager),fai:(0,o.openLocation)(n,this.pluginManager),gzi:(0,o.openLocation)(r,this.pluginManager)},e.abrupt("return",{fasta:new h.IB(i)});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(n(29202).default)},29202:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(32723),r=n(33028),i=n(34795),s=n(9249),c=n(87371),u=n(45754),h=n(13820),o=n(33736),f=n(20783),p=n(33528),l=n(26131),v=n(81073),d=n(89410),x=n.n(d),k=n(63409),Z=function(e){(0,u.Z)(n,e);var t=(0,h.Z)(n);function n(){var e;(0,s.Z)(this,n);for(var c=arguments.length,u=new Array(c),h=0;h<c;h++)u[h]=arguments[h];return(e=t.call.apply(t,[this].concat(u))).setupP=void 0,e.seqCache=new(x())({cache:new k.Z({maxSize:200}),fill:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t,n){var i,s,c,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.refName,s=t.start,c=t.end,u=t.fasta,e.abrupt("return",u.getSequence(i,s,c,(0,r.Z)((0,r.Z)({},t),{},{signal:n})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}),e}return(0,c.Z)(n,[{key:"getRefNames",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setup();case 2:return n=e.sent,r=n.fasta,e.abrupt("return",r.getSequenceNames(t));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRegions",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n,r,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setup();case 2:return n=e.sent,r=n.fasta,e.next=6,r.getSequenceSizes(t);case 6:return i=e.sent,e.abrupt("return",Object.keys(i).map((function(e){return{refName:e,start:0,end:i[e]}})));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setupPre",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getConf("fastaLocation"),n=this.getConf("faiLocation"),e.abrupt("return",{fasta:new o.P({fasta:(0,p.openLocation)(t,this.pluginManager),fai:(0,p.openLocation)(n,this.pluginManager)})});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHeader",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getConf("metadataLocation"),e.abrupt("return",""===t.uri||"/path/to/fa.metadata.yaml"===t.uri?null:(0,p.openLocation)(t,this.pluginManager).readFile("utf8"));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setup",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setupP||(this.setupP=this.setupPre().catch((function(e){throw t.setupP=void 0,e}))),e.abrupt("return",this.setupP);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e,t){var n=this,s=e.refName,c=e.start,u=e.end;return(0,l.ObservableCreate)(function(){var e=(0,i.Z)((0,a.Z)().mark((function e(i){var h,o,f,p,l,d,x,k,Z,g,y;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setup();case 2:return h=e.sent,o=h.fasta,e.next=6,o.getSequenceSize(s,t);case 6:for(f=e.sent,p=void 0!==f?Math.min(f,u):u,l=[],k=u+((d=128e3)-u%d),Z=x=c-c%d;Z<k;Z+=d)g={refName:s,start:Z,end:Z+d},l.push(n.seqCache.get(JSON.stringify(g),(0,r.Z)((0,r.Z)({},g),{},{fasta:o}),null===t||void 0===t?void 0:t.signal));return e.next=15,Promise.all(l);case 15:(y=e.sent.join("").slice(c-x).slice(0,u-c))&&i.next(new v.SimpleFeature({id:"".concat(s," ").concat(c,"-").concat(p),data:{refName:s,start:c,end:p,seq:y}})),i.complete();case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"freeResources",value:function(){}}]),n}(f.BaseSequenceAdapter)}}]);
//# sourceMappingURL=2796.7275c43f.chunk.js.map