(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[1243],{56936:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>R});var n={};r.r(n),r.d(n,{escape:()=>d,escapeColumn:()=>p,formatAttributes:()=>v,formatComment:()=>w,formatDirective:()=>k,formatFeature:()=>y,formatItem:()=>T,formatSequence:()=>x,parseAttributes:()=>m,parseDirective:()=>_,parseFeature:()=>b,unescape:()=>f});var s=r(56798),i=r(59062),a=r(16979),o=r(65904),c=r(90872),u=r(31238);const l=["seq_name","source","featureType","start","end","score","strand","frame","attributes"];function f(e){return null===e?null:String(e).replace(/%([0-9A-Fa-f]{2})/g,((e,t)=>String.fromCharCode(parseInt(t,16))))}function h(e,t){return String(t).replace(e,(e=>{let t=e.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0".concat(t)),"%".concat(t)}))}function d(e){return h(/[\n;\r\t=%&,\x00-\x1f\x7f-\xff]/g,e)}function p(e){return h(/[\n\r\t%\x00-\x1f\x7f-\xff]/g,e)}function m(e){if(!e||!e.length||"."===e)return{};const t={};return e.replace(/\r?\n$/,"").slice(0,-1).split(";").forEach((e=>{if(!e)return;const r=e.trim().split(" ");if(!r[1]||!r[1].length)return;r[0]=r[0].trim();let n=t[r[0].trim()];n||(n=[],t[r[0]]=n),n.push(...r[1].split(",").map((e=>e.trim())).map(f))})),t}function b(e){const t=e.split("\t").map((e=>"."===e?null:e));t[0]=f(t[0]),t[1]=f(t[1]),t[2]=f(t[2]),t[8]=m(t[8]);const r={};for(let n=0;n<l.length;n+=1)r[l[n]]="."===t[n]?null:t[n];return null!==r.start&&(r.start=parseInt(r.start,10)),null!==r.end&&(r.end=parseInt(r.end,10)),null!==r.score&&(r.score=parseFloat(r.score,10)),null!=r.strand&&(r.strand=r.strand),r}function _(e){const t=/^\s*##\s*(\S+)\s*(.*)/.exec(e);if(!t)return null;const r=t[1];let n=t[2];const s={directive:r};if(n.length&&(n=n.replace(/\r?\n$/,""),s.value=n),"sequence-region"===r){const[e,t,r]=n.split(/\s+/,3);s.seq_id=e,s.start=t&&t.replace(/\D/g,""),s.end=r&&r.replace(/\D/g,"")}else if("genome-build"===r){const[e,t]=n.split(/\s+/,2);s.source=e,s.buildname=t}return s}function v(e){const t=[];return Object.keys(e).forEach((r=>{const n=e[r];let s;s=n.hasOwnProperty("toString")?d(n.toString()):Array.isArray(n.values)?n.values.map(d).join(","):Array.isArray(n)?n.map(d).join(","):d(n),t.push("".concat(d(r)," ").concat(s))})),t.length?t.join("; ").concat(";"):"."}const g=["-",".","+"];function C(e,t){const r=null===e.attributes||void 0===e.attributes?".":v(e.attributes),n=[];for(let i=0;i<8;i+=1){const t=e[l[i]];n[i]=6===i?null===t||void 0===t?".":g[t+1]||t:null===t||void 0===t?".":p(String(t))}n[8]=r;const s="".concat(n.join("\t"),"\n");return t[s]?"":(t[s]=!0,s)}function S(e,t){if(Array.isArray(e))return e.map((e=>S(e,t))).join("");const r=[C(e,t)];return["child_features","derived_features"].forEach((n=>{e[n]&&r.push(...e[n].map((e=>S(e,t))))})),r.join("")}function y(e){return S(e,{})}function k(e){let t="##".concat(e.directive);return e.value&&(t+=" ".concat(e.value)),t+="\n",t}function w(e){return"# ".concat(e.comment,"\n")}function x(e){return">".concat(e.id).concat(e.description?" ".concat(e.description):"","\n").concat(e.sequence,"\n")}function T(e){function t(e){return e[0]||e.attributes?y(e):e.directive?k(e):e.sequence?x(e):e.comment?w(e):"# (invalid item found during format)\n"}return Array.isArray(e)?e.map((e=>t(e))):t(e)}const L={Parent:"child_features",Derives_from:"derived_features"};class F{constructor(e){const t=()=>{};Object.assign(this,{featureCallback:e.featureCallback||t,endCallback:e.endCallback||t,commentCallback:e.commentCallback||t,errorCallback:e.errorCallback||t,directiveCallback:e.directiveCallback||t,sequenceCallback:e.sequenceCallback||t,bufferSize:void 0===e.bufferSize?1e3:e.bufferSize,_underConstructionTopLevel:[],_underConstructionById:{},_completedReferences:{},_underConstructionOrphans:{},eof:!1,lineNumber:0})}addLine(e){if(this.eof)return;if(this.lineNumber+=1,/^\s*[^#\s>]/.test(e))return void this._bufferLine(e);const t=/^\s*(#+)(.*)/.exec(e);if(t){let[,r,n]=t;if(3===r.length)this._emitAllUnderConstructionFeatures();else if(2===r.length){const t=_(e);this._emitItem(t)}else n=n.replace(/\s*/,""),this._emitItem({comment:n})}else if(!/^\s*$/.test(e)){const t=e.replace(/\r?\n?$/g,"");throw new Error("GTF parse error.  Cannot parse '".concat(t,"'."))}}_emitItem(e){e[0]?this.featureCallback(e):e.directive?this.directiveCallback(e):e.comment&&this.commentCallback(e)}finish(){this._emitAllUnderConstructionFeatures(),this.endCallback()}_enforceBufferSizeLimit(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const t=e=>{if(e&&e[0]&&e[0].attributes&&e[0].attributes.ID&&e[0].attributes.ID[0]){e[0].attributes.ID.forEach((e=>{delete this._underConstructionById[e],delete this._completedReferences[e]})),e.forEach((e=>{e.child_features&&e.child_features.forEach((e=>t(e))),e.derived_features&&e.derived_features.forEach((e=>t(e)))}))}};for(;this._underConstructionTopLevel.length+e>this.bufferSize;){const e=this._underConstructionTopLevel.shift();this._emitItem(e),t(e)}}_emitAllUnderConstructionFeatures(){if(this._underConstructionTopLevel.forEach(this._emitItem.bind(this)),this._underConstructionTopLevel=[],this._underConstructionById={},this._completedReferences={},Object.values(this._underConstructionOrphans).filter((e=>Object.keys(e).length)).length)throw new Error("some features reference other features that do not exist in the file (or in the same '###' scope). ".concat(JSON.stringify(this._underConstructionOrphans)))}_bufferLine(e){const t=b(e);t.child_features=[],t.derived_features=[];const r=this.lineNumber,n="transcript"===t.featureType,s=n?t.attributes.transcript_id||[]:[r],i=n?[]:t.attributes.transcript_id||[],a=t.attributes.Derives_from||[];if(!s.length&&!i.length&&!a.length)return void this._emitItem([t]);let o;i.forEach((e=>{this._underConstructionById[e]||this._bufferLine(function(e){const t=JSON.parse(JSON.stringify(e));return t.featureType="transcript",y(t)}(t))})),s.forEach((e=>{const r=this._underConstructionById[e];r?(r.push(t),o=r):(o=[t],this._enforceBufferSizeLimit(1),i.length||a.length||this._underConstructionTopLevel.push(o),this._underConstructionById[e]=o,this._resolveReferencesTo(o,e))})),this._resolveReferencesFrom(o||[t],{Parent:i,Derives_from:a},s)}_resolveReferencesTo(e,t){const r=this._underConstructionOrphans[t];r&&Object.keys(r).forEach((t=>{const n=L[t]||t.toLowerCase();e.forEach((e=>{e[n].push(...r[t]),delete r[t]}))}))}_parseError(e){this.eof=!0,this.errorCallback("".concat(this.lineNumber,": ").concat(e))}_resolveReferencesFrom(e,t,r){Object.entries(t).forEach((t=>{let n,[s,i]=t;i.forEach((t=>{const i=this._underConstructionById[t];var a,o;i?(o=e,(a=i)[0].start=Math.min(a[0].start,o[0].start),a[0].end=Math.max(a[0].end,o[0].end),n||(n=L[s]||s.toLowerCase()),r.filter((e=>function(e,t,r){let n=e[t];n||(n={},e[t]=n);const s=n[r]||!1;return n[r]=!0,s}(this._completedReferences,e,"".concat(s,",").concat(t)))).length||i.forEach((t=>{t[n].push(e)}))):(this._underConstructionOrphans[t]||(this._underConstructionOrphans[t]={}),this._underConstructionOrphans[t][s]||(this._underConstructionOrphans[t][s]=[]),this._underConstructionOrphans[t][s].push(e))}))}))}}var D=r(15174),E=r(6495),O=r(3995);const j=null;function A(e){O&&O.nextTick?O.nextTick(e):e()}function I(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=Object.assign({parseFeatures:!0,parseDirectives:!1,parseSequences:!0,parseComments:!1},t,e);return e.parseAll&&(r.parseFeatures=!0,r.parseDirectives=!0,r.parseComments=!0,r.parseSequences=!0),r}class q extends D.Transform{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=I(e);super({objectMode:!0}),this.encoding=e.encoding||"utf8",this.decoder=new E.s,this.textBuffer="";const r=this.push.bind(this);this.parser=new F({featureCallback:t.parseFeatures?r:null,directiveCallback:t.parseDirectives?r:null,commentCallback:t.parseComments?r:null,sequenceCallback:t.parseSequences?r:null,errorCallback:e=>this.emit("error",e),bufferSize:t.bufferSize})}_addLine(e){const t=e.toString("utf8");t&&this.parser.addLine(t)}_nextText(e){const t=(this.textBuffer+e).split(/\r?\n/);this.textBuffer=t.pop(),this.maxLineLength&&this.textBuffer.length>this.maxLineLength?this.emit("error",new Error("maximum line size exceeded")):t.forEach((e=>this._addLine(e)))}_transform(e,t,r){this._nextText(this.decoder.write(e)),A(r)}_flush(e){this.decoder.end&&this._nextText(this.decoder.end()),null!=this.textBuffer&&this._addLine(this.textBuffer),this.parser.finish(),A(e)}}function B(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=Object.assign({bufferSize:1e3},e);return new q(t)}class M extends D.Transform{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(Object.assign(e,{objectMode:!0})),this.linesSinceLastSyncMark=0,this.minLinesBetweenSyncMarks=e.minSyncLines||100,this.insertVersionDirective=e.insertVersionDirective||!1,this.haveWeEmittedData=!1,this.fastaMode=!1}_transform(e,t,r){let n;if(!this.haveWeEmittedData&&this.insertVersionDirective&&"gtf"!==(e[0]||e).directive&&this.push("##gtf\n"),e.sequence&&!this.fastaMode&&(this.push("##FASTA\n"),this.fastaMode=!0),n=Array.isArray(e)?e.map(T).join(""):T(e),this.push(n),this.linesSinceLastSyncMark>=this.minLinesBetweenSyncMarks)this.push("###\n"),this.linesSinceLastSyncMark=0;else{let e=0;for(let t=0;t<n.length;t+=1)"\n"===n[t]&&(e+=1);this.linesSinceLastSyncMark+=e}this.haveWeEmittedData=!0,A(r)}}const z={parseStream:B,parseFile:function(e,t){return j.createReadStream(e).pipe(B(t))},parseStringSync:function(e){if(!e)return[];const t=I(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),r=[],n=r.push.bind(r),s=new F({featureCallback:t.parseFeatures?n:null,directiveCallback:t.parseDirectives?n:null,commentCallback:t.parseComments?n:null,sequenceCallback:t.parseSequences?n:null,bufferSize:1/0,errorCallback:e=>{throw e}});return e.split(/\r?\n/).forEach(s.addLine.bind(s)),s.finish(),r},formatSync:function(e){const t=[],r=[];e.forEach((e=>{e.sequence?r.push(e):t.push(e)}));let n=t.map(T).join("");return r.length&&(n+="##FASTA\n",n+=r.map(x).join("")),n},formatStream:function(e){return new M(e)},formatFile:function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n=Object.assign({insertVersionDirective:!1},r);return new Promise(((r,s)=>{e.pipe(new M(n)).on("end",(()=>r(t))).on("error",s).pipe(j.createWriteStream(t,{encoding:n.encoding||"utf8"}))}))},util:n};function N(e){const t={...e};t.start-=1,t.strand={"+":1,"-":-1,".":0,"?":void 0}[e.strand],t.phase=Number(e.frame),t.refName=e.seq_name,null===e.score&&delete t.score,null===e.frame&&delete t.score;const r=new Set(["start","end","seq_name","score","featureType","source","frame","strand"]);for(const n of Object.keys(e.attributes)){let s=n.toLowerCase();if(r.has(s)&&(s+="2"),null!==e.attributes[n]){let r=e.attributes[n];Array.isArray(r)&&1===r.length&&(r="".concat(r[0]).replaceAll(/^"|"$/g,"")),t[s]=r}}return t.refName=t.seq_name,t.type=t.featureType,e.child_features&&e.child_features.length>0&&(t.subfeatures=e.child_features.flatMap((e=>e.map((e=>N(e)))))),delete t.child_features,delete t.data,delete t.derived_features,delete t._linehash,delete t.attributes,delete t.seq_name,delete t.featureType,delete t.frame,t.transcript_id&&(t.name=t.transcript_id),t}const R=class extends s.BaseFeatureDataAdapter{constructor(){super(...arguments),this.gtfFeatures=void 0,this.intervalTrees={}}async loadDataP(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=this.getConf("gtfLocation"),r=await(0,i.openLocation)(t,this.pluginManager).readFile(e),n=function(e){return 31===e[0]&&139===e[1]&&8===e[2]}(r)?await(0,u.unzip)(r):r;if(n.length>536870888)throw new Error("Data exceeds maximum string length (512MB)");const s=new TextDecoder("utf8",{fatal:!0}).decode(n).split(/\n|\r\n|\r/).filter((e=>!!e&&!e.startsWith("#"))),a={};for(const i of s){if(i.startsWith("#"))continue;const e=i.indexOf("\t"),t=i.slice(0,e);a[t]||(a[t]=[]),a[t].push(i)}return{feats:a}}async loadData(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.gtfFeatures||(this.gtfFeatures=this.loadDataP(e).catch((e=>{throw this.gtfFeatures=void 0,e}))),this.gtfFeatures}async getRefNames(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{feats:t}=await this.loadData(e);return Object.keys(t)}async loadFeatureIntervalTreeHelper(e){const{feats:t}=await this.loadData(),r=t[e];if(!r)return;const n=z.parseStringSync(r.join("\n"),{parseFeatures:!0,parseComments:!1,parseDirectives:!1,parseSequences:!1}),s=new o.ZP,i=n.flat().map(((t,r)=>new c.SimpleFeature({data:N(t),id:"".concat(this.id,"-").concat(e,"-").concat(r)})));for(const a of i)s.insert([a.get("start"),a.get("end")],a);return s}async loadFeatureIntervalTree(e){return this.intervalTrees[e]||(this.intervalTrees[e]=this.loadFeatureIntervalTreeHelper(e).catch((t=>{throw this.intervalTrees[e]=void 0,t}))),this.intervalTrees[e]}getFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,a.ObservableCreate)((async t=>{try{const{start:r,end:n,refName:s}=e,i=await this.loadFeatureIntervalTree(s);null===i||void 0===i||i.search([r,n]).forEach((e=>t.next(e))),t.complete()}catch(r){t.error(r)}}),t.signal)}freeResources(){}}},74854:()=>{},66602:()=>{}}]);
//# sourceMappingURL=1243.79b0cef7.chunk.js.map