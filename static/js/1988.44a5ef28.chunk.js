"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[1988],{31988:function(e,t,r){r.r(t),r.d(t,{default:function(){return b},featureData:function(){return g}});var n=r(68079),a=r(32723),u=r(34795),s=r(9249),i=r(87371),c=r(45754),o=r(13820),f=r(33028),l=r(82972),p=r(32145),h=r(93824),d=r(97531),v=r(68538),m=r(16959);function Z(e){return 31===e[0]&&139===e[1]&&8===e[2]}function g(e,t,r,n){var a=e.split("\t"),u=a[r?3:0],s=+a[r?4:1],i=+a[r?5:2],c=+a[r?0:3],o=+a[r?1:4],l=+a[r?2:5],p=a[6],h=+a[7],v=w(a[8]),m=w(a[9]),Z=a.slice(9),g=n?Object.fromEntries(n.slice(9).map((function(e,t){return[e,Z[t]]}))):Z;return new d.SimpleFeature((0,f.Z)((0,f.Z)({start:s,end:i,refName:u,strand:v,name:p},g),{},{score:h,uniqueId:t,mate:{refName:c,start:o,end:l,strand:m}}))}function w(e){return"+"===e?1:"-"===e?-1:"."===e?0:void 0}var b=function(e){(0,c.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];return(e=t.call.apply(t,[this].concat(a))).bedpeFeatures=void 0,e.intervalTrees={},e}return(0,i.Z)(r,[{key:"loadDataP",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t,r,n,u,s,i,c,o,f,l,h,d,v,g,w,b,k,x=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x.length>0&&void 0!==x[0]?x[0]:{},r=this.pluginManager,n=this.getConf("bedpeLocation"),e.next=5,(0,p.openLocation)(n,r).readFile(t);case 5:if(!Z(u=e.sent)){e.next=12;break}return e.next=9,(0,m.unzip)(u);case 9:e.t0=e.sent,e.next=13;break;case 12:e.t0=u;case 13:if(!((s=e.t0).length>536870888)){e.next=16;break}throw new Error("Data exceeds maximum string length (512MB)");case 16:for(i=new TextDecoder("utf8",{fatal:!0}).decode(s),c=i.split(/\n|\r\n|\r/).filter((function(e){return!!e})),o=[],f=0;f<c.length&&c[f].startsWith("#");f++)o.push(c[f]);for(l=o.join("\n"),h={},d={};f<c.length;f++)v=c[f],g=v.split("\t"),w=g[0],b=g[3],h[w]||(h[w]=[]),d[b]||(d[b]=[]),h[w].push(v),d[b].push(v);return k=this.getConf("columnNames"),e.abrupt("return",{header:l,feats1:h,feats2:d,columnNames:k});case 27:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadData",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t,r=this,n=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},this.bedpeFeatures||(this.bedpeFeatures=this.loadDataP(t).catch((function(e){throw r.bedpeFeatures=void 0,e}))),e.abrupt("return",this.bedpeFeatures);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRefNames",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t,r,u,s,i=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:{},e.next=3,this.loadData(t);case 3:return r=e.sent,u=r.feats1,s=r.feats2,e.abrupt("return",(0,n.Z)(new Set([].concat((0,n.Z)(Object.keys(u)),(0,n.Z)(Object.keys(s))))));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHeader",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t,r,n,u=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:{},e.next=3,this.loadData(t);case 3:return r=e.sent,n=r.header,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getNames",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t,r,n,u,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadData();case 2:if(t=e.sent,r=t.header,!(n=t.columnNames).length){e.next=7;break}return e.abrupt("return",n);case 7:return u=r.split(/\n|\r\n|\r/).filter((function(e){return!!e})),s=u[u.length-1],e.abrupt("return",null!==s&&void 0!==s&&s.includes("\t")?s.slice(1).split("\t").map((function(e){return e.trim()})):void 0);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadFeatureTreeP",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var r,n,u,s,i,c,o,f,l,p,h,d,m,Z=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadData();case 2:return r=e.sent,n=r.feats1,u=r.feats2,s=n[t],i=u[t],e.next=9,this.getNames();case 9:for(c=e.sent,o=new v.ZP,f=null===s||void 0===s?void 0:s.map((function(e,r){return g(e,"".concat(Z.id,"-").concat(t,"-").concat(r),!1,c)})),l=null===i||void 0===i?void 0:i.map((function(e,r){return g(e,"".concat(Z.id,"-").concat(t,"-").concat(r),!0,c)})),p=0;p<f.length;p++)h=f[p],o.insert([h.get("start"),h.get("end")],h);for(d=0;d<l.length;d++)m=l[d],o.insert([m.get("start"),m.get("end")],m);return e.abrupt("return",o);case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"loadFeatureTree",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var r=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.intervalTrees[t]||(this.intervalTrees[t]=this.loadFeatureTreeP(t).catch((function(e){throw r.intervalTrees[t]=void 0,e}))),e.abrupt("return",this.intervalTrees[t]);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,h.ObservableCreate)(function(){var r=(0,u.Z)((0,a.Z)().mark((function r(n){var u,s,i,c;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u=e.start,s=e.end,i=e.refName,r.next=3,t.loadFeatureTree(i);case 3:null===(c=r.sent)||void 0===c||c.search([u,s]).forEach((function(e){return n.next(e)})),n.complete();case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),r.signal)}},{key:"freeResources",value:function(){}}]),r}(l.BaseFeatureDataAdapter);b.capabilities=["getFeatures","getRefNames"]}}]);
//# sourceMappingURL=1988.44a5ef28.chunk.js.map