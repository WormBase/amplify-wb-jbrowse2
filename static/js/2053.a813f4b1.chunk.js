"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[2053,1631],{42053:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(56798),a=n(59062),s=n(90872),i=n(16979),o=n(85291),l=n(85579);class h extends r.BaseFeatureDataAdapter{static capabilities=["getFeatures","getRefNames"];async setup(e){return this.setupP||(this.setupP=this.setupPre(e).catch((e=>{throw this.setupP=void 0,e}))),this.setupP}async setupPre(e){const t=this.getConf("assemblyNames"),n=this.pluginManager,r=(0,a.openLocation)(this.getConf("bed1Location"),n),s=(0,a.openLocation)(this.getConf("bed2Location"),n),i=(0,a.openLocation)(this.getConf("mcscanSimpleAnchorsLocation"),n),[o,h,c]=await Promise.all([r,s,i].map((t=>(0,l.pJ)(t,e)))),f=(0,l.SN)(o),d=(0,l.SN)(h);return{assemblyNames:t,feats:c.split(/\n|\r\n|\r/).filter((e=>!!e&&"###"!==e)).map(((e,t)=>{const[n,r,a,s,i,o]=e.split("\t"),l=f.get(n),h=f.get(r),c=d.get(a),u=d.get(s);if(!(l&&h&&c&&u))throw new Error(`feature not found, ${n} ${r} ${a} ${s} ${l} ${h} ${c} ${u}`);return[l,h,c,u,+i,"-"===o?-1:1,t]}))}}async hasDataForRefName(){return!0}async getRefNames(){return[]}getFeatures(e,t={}){return(0,i.ObservableCreate)((async n=>{const{assemblyNames:r,feats:a}=await this.setup(t),i=r.indexOf(e.assemblyName);if(-1!==i){const t=0===i;a.forEach((a=>{const[i,l,h,c,f,d,u]=a;let w={refName:i.refName,start:Math.min(i.start,l.start),end:Math.max(i.end,l.end)},g={refName:h.refName,start:Math.min(h.start,c.start),end:Math.max(h.end,c.end)};t||([g,w]=[w,g]),w.refName===e.refName&&(0,s.doesIntersect2)(w.start,w.end,e.start,e.end)&&n.next(new o.Z({...w,uniqueId:`${u}`,syntenyId:u,assemblyName:r[+!t],score:f,strand:d,mate:{...g,assemblyName:r[+t]}}))}))}n.complete()}))}freeResources(){}}},85579:(e,t,n)=>{n.d(t,{$R:()=>o,SN:()=>s,WU:()=>h,lq:()=>a,pJ:()=>i});var r=n(71631);function a(e){return 31===e[0]&&139===e[1]&&8===e[2]}function s(e){return new Map(e.split(/\n|\r\n|\r/).filter((e=>!!e||e.startsWith("#"))).map((e=>{const[t,n,r,a,s,i]=e.split("\t");return[a,{refName:t,start:+n,end:+r,score:+s,name:a,strand:"-"===i?-1:1}]})))}async function i(e,t){const n=await e.readFile(t);return new TextDecoder("utf8",{fatal:!0}).decode(a(n)?await(0,r.unzip)(n):n)}function o(e,t){return e.map(((e,n)=>[e,t[n]]))}const l="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function h(e,t){let n=0;const r=[];for(;n<e.length;){const a=e.indexOf("\n",n);if(-1===a)break;const s=e.slice(n,a),i=(l?.decode(s)||s.toString()).trim();i&&r.push(t(i)),n=a+1}return r}},71631:(e,t,n)=>{n.d(t,{q5:()=>f,unzip:()=>i,y$:()=>o});var r=n(18390),a=n(90510),s=n(96553);async function i(e){try{let t,n=0,a=0;const i=[];let o,l=0;do{const r=e.subarray(n);if(o=new s.Inflate,({strm:t}=o),o.push(r,s.Z_SYNC_FLUSH),o.err)throw new Error(o.msg);n+=t.next_in,i[a]=o.result,l+=i[a].length,a+=1}while(t.avail_in);const h=new Uint8Array(l);for(let e=0,t=0;e<i.length;e++)h.set(i[e],t),t+=i[e].length;return r.Buffer.from(h)}catch(e){if(`${e}`.match(/incorrect header check/))throw new Error("problem decompressing block: incorrect gzip header check");throw e}}async function o(e,t){try{let n;const{minv:a,maxv:i}=t;let o=a.blockPosition,l=a.dataPosition;const h=[],c=[],f=[];let d=0,u=0;do{const t=e.subarray(o-a.blockPosition),r=new s.Inflate;if(({strm:n}=r),r.push(t,s.Z_SYNC_FLUSH),r.err)throw new Error(r.msg);const w=r.result;h.push(w);let g=w.length;c.push(o),f.push(l),1===h.length&&a.dataPosition&&(h[0]=h[0].subarray(a.dataPosition),g=h[0].length);const p=o;if(o+=n.next_in,l+=g,p>=i.blockPosition){h[u]=h[u].subarray(0,i.blockPosition===a.blockPosition?i.dataPosition-a.dataPosition+1:i.dataPosition+1),c.push(o),f.push(l),d+=h[u].length;break}d+=h[u].length,u++}while(n.avail_in);const w=new Uint8Array(d);for(let e=0,t=0;e<h.length;e++)w.set(h[e],t),t+=h[e].length;return{buffer:r.Buffer.from(w),cpositions:c,dpositions:f}}catch(e){if(`${e}`.match(/incorrect header check/))throw new Error("problem decompressing block: incorrect gzip header check");throw e}}var l=n(84574),h=n.n(l);class c{constructor({filehandle:e,path:t}){if(e)this.filehandle=e;else{if(!t)throw new TypeError("either filehandle or path must be defined");this.filehandle=new a.S9(t)}}_readLongWithOverflow(e,t=0,n=!0){const r=h().fromBytesLE(e.slice(t,t+8),n);if(r.greaterThan(Number.MAX_SAFE_INTEGER)||r.lessThan(Number.MIN_SAFE_INTEGER))throw new TypeError("integer overflow");return r.toNumber()}_getIndex(){return this.index||(this.index=this._readIndex()),this.index}async _readIndex(){let e=r.Buffer.allocUnsafe(8);await this.filehandle.read(e,0,8,0);const t=this._readLongWithOverflow(e,0,!0);if(!t)return[[0,0]];const n=new Array(t+1);n[0]=[0,0];const a=16*t;if(a>Number.MAX_SAFE_INTEGER)throw new TypeError("integer overflow");e=r.Buffer.allocUnsafe(a),await this.filehandle.read(e,0,a,8);for(let r=0;r<t;r+=1){const t=this._readLongWithOverflow(e,16*r),a=this._readLongWithOverflow(e,16*r+8);n[r+1]=[t,a]}return n}async getLastBlock(){const e=await this._getIndex();if(e.length)return e[e.length-1]}async getRelevantBlocksForRead(e,t){const n=t+e;if(0===e)return[];const r=await this._getIndex(),a=[],s=(e,n)=>{const r=e[1],a=n?n[1]:1/0;return r<=t&&a>t?0:r<t?-1:1};let i=0,o=r.length-1,l=Math.floor(r.length/2),h=s(r[l],r[l+1]);for(;0!==h;)h>0?o=l-1:h<0&&(i=l+1),l=Math.ceil((o-i)/2)+i,h=s(r[l],r[l+1]);a.push(r[l]);let c=l+1;for(;c<r.length&&(a.push(r[c]),!(r[c][1]>=n));c+=1);return a[a.length-1][1]<n&&a.push([]),a}}class f{constructor({filehandle:e,path:t,gziFilehandle:n,gziPath:r}){if(e)this.filehandle=e;else{if(!t)throw new TypeError("either filehandle or path must be defined");this.filehandle=new a.S9(t)}if(!n&&!r&&!t)throw new TypeError("either gziFilehandle or gziPath must be defined");this.gzi=new c({filehandle:n,path:n||r||!t?`${t}.gzi`:r})}async stat(){const e=await this.filehandle.stat();return Object.assign(e,{size:await this.getUncompressedFileSize(),blocks:void 0,blksize:void 0})}async getUncompressedFileSize(){const[,e]=await this.gzi.getLastBlock(),{size:t}=await this.filehandle.stat(),n=r.Buffer.allocUnsafe(4),{bytesRead:a}=await this.filehandle.read(n,0,4,t-28-4);if(4!==a)throw new Error("read error");return e+n.readUInt32LE(0)}async _readAndUncompressBlock(e,[t],[n]){let r=n;r||(r=(await this.filehandle.stat()).size);const a=r-t;return await this.filehandle.read(e,0,a,t),await i(e.slice(0,a))}async read(e,t,n,a){const s=await this.gzi.getRelevantBlocksForRead(n,a),i=r.Buffer.allocUnsafe(65536);let o=t,l=0;for(let t=0;t<s.length-1;t+=1){const r=await this._readAndUncompressBlock(i,s[t],s[t+1]),[,h]=s[t],c=h>=a?0:a-h,f=Math.min(a+n,h+r.length)-h;c>=0&&c<r.length&&(r.copy(e,o,c,f),o+=f-c,l+=f-c)}return{bytesRead:l,buffer:e}}}}}]);
//# sourceMappingURL=2053.a813f4b1.chunk.js.map