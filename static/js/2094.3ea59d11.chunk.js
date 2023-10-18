"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2094],{22094:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(41361),a=r(33028),u=r(32723),s=r(34795),i=r(9249),c=r(87371),o=r(45754),p=r(13820),f=r(76237),l=r(20783),h=r(33528),v=r(81073),d=r(26131),b=r(66518),w=function(e,t,r,l,w,Z,g){(0,o.Z)(y,e);var k=(0,p.Z)(y);function y(){var e;(0,i.Z)(this,y);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=k.call.apply(k,[this].concat(r))).setupP=void 0,e}return(0,c.Z)(y,[{key:"setupPre",value:function(e){return(t=t||(0,s.Z)((0,u.Z)().mark((function e(t){var r,n,a,s,i;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(t||{}).statusCallback,n=void 0===r?function(){}:r,a=this.pluginManager,s=new f.B({filehandle:(0,h.openLocation)(this.getConf("bigWigLocation"),a)}),e.next=5,(0,v.updateStatus)("Downloading bigwig header",n,(function(){return s.getHeader(t)}));case 5:return i=e.sent,e.abrupt("return",{bigwig:s,header:i});case 7:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"setup",value:function(e){return(r=r||(0,s.Z)((0,u.Z)().mark((function e(t){var r=this;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setupP||(this.setupP=this.setupPre(t).catch((function(e){throw r.setupP=void 0,e}))),e.abrupt("return",this.setupP);case 2:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getRefNames",value:function(e){return(l=l||(0,s.Z)((0,u.Z)().mark((function e(t){var r,n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setup(t);case 2:return r=e.sent,n=r.header,e.abrupt("return",Object.keys(n.refsByName));case 5:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"refIdToName",value:function(e){return(w=w||(0,s.Z)((0,u.Z)().mark((function e(t){var r,n,a;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setup();case 2:return n=e.sent,a=n.header,e.abrupt("return",null===(r=a.refsByNumber[t])||void 0===r?void 0:r.name);case 5:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getGlobalStats",value:function(e){return(Z=Z||(0,s.Z)((0,u.Z)().mark((function e(t){var r,n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setup(t);case 2:return r=e.sent,n=r.header,e.abrupt("return",(0,b.I9)(n.totalSummary));case 5:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getFeatures",value:function(e){var t,r=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=e.refName,o=e.start,p=e.end,f=i.bpPerPx,l=void 0===f?0:f,h=i.signal,v=i.resolution,b=void 0===v?1:v,w=i.statusCallback,Z=void 0===w?function(){}:w;return(0,d.ObservableCreate)((function(f){return(t=t||(0,s.Z)((0,u.Z)().mark((function t(s){var f,h,v,d,w,g,k;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Z("Downloading bigwig data"),f=r.getConf("source"),t.next=4,r.setup(i);case 4:return h=t.sent,v=h.bigwig,t.next=8,v.getFeatures(c,o,p,(0,a.Z)((0,a.Z)({},i),{},{basesPerSpan:l/b}));case 8:d=t.sent,w=(0,n.Z)(d),t.prev=10,k=(0,u.Z)().mark((function t(){var r,n;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=g.value,f&&(r.source=f),n="".concat(f,":").concat(e.refName,":").concat(r.start,"-").concat(r.end),r.refName=c,r.uniqueId=n,s.next({get:function(e){return r[e]},id:function(){return n},toJSON:function(){return r}});case 6:case"end":return t.stop()}}),t)})),w.s();case 13:if((g=w.n()).done){t.next=17;break}return t.delegateYield(k(),"t0",15);case 15:t.next=13;break;case 17:t.next=22;break;case 19:t.prev=19,t.t1=t.catch(10),w.e(t.t1);case 22:return t.prev=22,w.f(),t.finish(22);case 25:s.complete();case 26:case"end":return t.stop()}}),t,null,[[10,19,22,25]])})))).apply(this,arguments)}),h)}},{key:"getMultiRegionFeatureDensityStats",value:function(e){return(g=g||(0,s.Z)((0,u.Z)().mark((function e(t){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{featureDensity:0});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},{key:"freeResources",value:function(){}}]),y}(l.BaseFeatureDataAdapter);w.capabilities=["hasResolution","hasLocalStats","hasGlobalStats"]}}]);
//# sourceMappingURL=2094.3ea59d11.chunk.js.map