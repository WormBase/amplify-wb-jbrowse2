"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6809],{56809:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(41361),a=r(32723),u=r(34795),s=r(9249),i=r(87371),c=r(45754),o=r(13820),l=r(40730),f=r(2646),h=r(32145),d=r(93824),p=r(95950),v=r(68538),m=r(16959);function g(e){return 31===e[0]&&139===e[1]&&8===e[2]}var b=function(e){(0,c.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];return(e=t.call.apply(t,[this].concat(a))).bedFeatures=void 0,e.intervalTrees={},e}return(0,i.Z)(r,[{key:"loadDataP",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t,r,n,u,s,i,c,o,f,d,p,v,b,k,y,Z,w,x,S,C,T,_=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=_.length>0&&void 0!==_[0]?_[0]:{},r=this.pluginManager,n=this.getConf("bedLocation"),e.next=5,(0,h.openLocation)(n,r).readFile(t);case 5:if(!g(u=e.sent)){e.next=12;break}return e.next=9,(0,m.unzip)(u);case 9:e.t0=e.sent,e.next=13;break;case 12:e.t0=u;case 13:if(!((s=e.t0).length>536870888)){e.next=16;break}throw new Error("Data exceeds maximum string length (512MB)");case 16:for(i=new TextDecoder("utf8",{fatal:!0}).decode(s),c=i.split(/\n|\r\n|\r/).filter((function(e){return!!e})),o=[],f=0;f<c.length&&c[f].startsWith("#");f++)o.push(c[f]);for(d=o.join("\n"),p={};f<c.length;f++)v=c[f],b=v.indexOf("\t"),k=v.slice(0,b),p[k]||(p[k]=[]),p[k].push(v);return y=this.getConf("autoSql"),Z=new l.Z({autoSql:y}),w=this.getConf("columnNames"),x=this.getConf("scoreColumn"),S=this.getConf("colRef"),C=this.getConf("colStart"),T=this.getConf("colEnd"),e.abrupt("return",{header:d,features:p,parser:Z,columnNames:w,scoreColumn:x,colRef:S,colStart:C,colEnd:T});case 32:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadData",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t,r=this,n=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},this.bedFeatures||(this.bedFeatures=this.loadDataP(t).catch((function(e){throw r.bedFeatures=void 0,e}))),e.abrupt("return",this.bedFeatures);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRefNames",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t,r,n,u=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},e.next=3,this.loadData(t);case 3:return r=e.sent,n=r.features,e.abrupt("return",Object.keys(n));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHeader",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t,r,n,u=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},e.next=3,this.loadData(t);case 3:return r=e.sent,n=r.header,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getNames",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t,r,n,u,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadData();case 2:if(t=e.sent,r=t.header,!(n=t.columnNames).length){e.next=7;break}return e.abrupt("return",n);case 7:return u=r.split(/\n|\r\n|\r/).filter((function(e){return!!e})),s=u[u.length-1],e.abrupt("return",null!==s&&void 0!==s&&s.includes("\t")?s.slice(1).split("\t").map((function(e){return e.trim()})):void 0);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadFeatureIntervalTreeHelper",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var r,u,s,i,c,o,l,f,h,d,m,g,b,k,y=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadData();case 2:if(r=e.sent,u=r.colRef,s=r.colStart,i=r.colEnd,c=r.features,o=r.parser,l=r.scoreColumn,f=c[t]){e.next=12;break}return e.abrupt("return",void 0);case 12:return e.next=14,this.getNames();case 14:h=e.sent,d=new v.ZP,m=f.map((function(e,r){var n="".concat(y.id,"-").concat(t,"-").concat(r);return(0,p.P)(e,u,s,i,l,o,n,h)})),g=(0,n.Z)(m);try{for(g.s();!(b=g.n()).done;)k=b.value,d.insert([k.get("start"),k.get("end")],k)}catch(a){g.e(a)}finally{g.f()}return e.abrupt("return",d);case 20:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"loadFeatureIntervalTree",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var r=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.intervalTrees[t]||(this.intervalTrees[t]=this.loadFeatureIntervalTreeHelper(t).catch((function(e){throw r.intervalTrees[t]=void 0,e}))),e.abrupt("return",this.intervalTrees[t]);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,d.ObservableCreate)(function(){var r=(0,u.Z)((0,a.Z)().mark((function r(n){var u,s,i,c;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u=e.start,s=e.end,i=e.refName,r.next=3,t.loadFeatureIntervalTree(i);case 3:null===(c=r.sent)||void 0===c||c.search([u,s]).forEach((function(e){return n.next(e)})),n.complete();case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),r.signal)}},{key:"freeResources",value:function(){}}]),r}(f.BaseFeatureDataAdapter);b.capabilities=["getFeatures","getRefNames"]},95950:function(e,t,r){r.d(t,{P:function(){return s},d:function(){return u}});var n=r(33028),a=r(95802);function u(e){var t=e.children(),r=e.get("thickStart"),n=e.get("thickEnd");if(!r&&!n)return e;var u=t?t.filter((function(e){return"block"===e.get("type")})).sort((function(e,t){return e.get("start")-t.get("start")})):[],s=[];u.forEach((function(t){var a=t.get("start"),u=t.get("end");if(r>=u){var i=e.get("strand")>0?"five":"three";s.push({type:"".concat(i,"_prime_UTR"),start:a,end:u})}else if(r>a&&r<u&&n>=u){var c=e.get("strand")>0?"five":"three";s.push({type:"".concat(c,"_prime_UTR"),start:a,end:r},{type:"CDS",start:r,end:u})}else if(r<=a&&n>=u)s.push({type:"CDS",start:a,end:u});else if(r>a&&r<u&&n<u){var o=e.get("strand")>0?"five":"three",l=e.get("strand")>0?"three":"five";s.push({type:"".concat(o,"_prime_UTR"),start:a,end:r},{type:"CDS",start:r,end:n},{type:"".concat(l,"_prime_UTR"),start:n,end:u})}else if(r<=a&&n>a&&n<u){var f=e.get("strand")>0?"three":"five";s.push({type:"CDS",start:a,end:n},{type:"".concat(f,"_prime_UTR"),start:n,end:u})}else if(n<=a){var h=e.get("strand")>0?"three":"five";s.push({type:"".concat(h,"_prime_UTR"),start:a,end:u})}}));var i=Object.fromEntries(e.tags().map((function(t){return[t,e.get(t)]})));return i.subfeatures=s,i.type="mRNA",i.uniqueId=e.id(),delete i.chromStarts,delete i.chromStart,delete i.chromEnd,delete i.chrom,delete i.blockStarts,delete i.blockSizes,delete i.blockCount,delete i.thickStart,delete i.thickEnd,new a.SimpleFeature({data:i,id:e.id()})}function s(e,t,r,s,i,c,o,l){var f=e.split("\t"),h=f[t],d=+f[r],p=r===s?1:0,v=+f[s]+p,m=l?function(e,t){return Object.fromEntries(t.split("\t").map((function(t,r){return[e[r],t]})))}(l,e):c.parseLine(e,{uniqueId:o}),g=m.blockCount,b=m.blockSizes,k=m.blockStarts,y=m.chromStarts;if(g){var Z=y||k||[],w=b,x=d;m.subfeatures=[];for(var S=0;S<g;S+=1){var C=(Z[S]||0)+x,T=C+(w[S]||0);m.subfeatures.push({uniqueId:"".concat(o,"-").concat(S),start:C,end:T,type:"block"})}}i&&(m.score=+m[i]),delete m.chrom,delete m.chromStart,delete m.chromEnd;var _=new a.SimpleFeature((0,n.Z)((0,n.Z)({},m),{},{start:d,end:v,refName:h,uniqueId:o}));return _.get("thickStart")?u(_):_}}}]);
//# sourceMappingURL=6809.ee4821b0.chunk.js.map