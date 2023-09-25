"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[7167],{17167:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(59740),a=r(68079),u=r(32723),s=r(33028),i=r(34795),c=r(9249),o=r(87371),p=r(45754),f=r(13820),l=r(20783),d=r(26131),h=r(81073),v=r(16095),Z=r(13224),g=["dataAdapter","source","name"];function m(e){var t=e.slice(e.lastIndexOf("/")+1);return t.slice(0,t.lastIndexOf("."))}var b=function(e,t,r,l,b,w){(0,p.Z)(k,e);var x=(0,f.Z)(k);function k(){return(0,c.Z)(this,k),x.apply(this,arguments)}return(0,o.Z)(k,[{key:"getAdapters",value:function(){return(t=t||(0,i.Z)((0,u.Z)().mark((function e(){var t,r,n,a,c;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.getSubAdapter){e.next=3;break}throw new Error("no getSubAdapter available");case 3:return a=this.getConf("subadapters"),null!==(t=a)&&void 0!==t&&t.length||(c=this.getConf("bigWigs"),a=c.map((function(e){return{type:"BigWigAdapter",source:m(e),bigWigLocation:{uri:e}}}))),e.abrupt("return",Promise.all(a.map((function(e){return(r=r||(0,i.Z)((0,u.Z)().mark((function e(t){var r;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t);case 2:return r=e.sent.dataAdapter,e.abrupt("return",(0,s.Z)((0,s.Z)({source:t.name||r.id},t),{},{dataAdapter:r}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}))));case 6:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getRefNames",value:function(e){return(r=r||(0,i.Z)((0,u.Z)().mark((function e(t){var r,n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAdapters();case 2:return r=e.sent,e.next=5,Promise.all(r.map((function(e){return e.dataAdapter.getRefNames(t)})));case 5:return n=e.sent,e.abrupt("return",(0,a.Z)(new Set(n.flat())));case 7:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getGlobalStats",value:function(e){return(l=l||(0,i.Z)((0,u.Z)().mark((function e(t){var r,n,a,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAdapters();case 2:return r=e.sent,e.next=5,Promise.all(r.map((function(e){var r,n;return null===(r=(n=e.dataAdapter).getGlobalStats)||void 0===r?void 0:r.call(n,t)})));case 5:return n=e.sent.filter((function(e){return!!e})),a=(0,h.min)(n.map((function(e){return e.scoreMin}))),s=(0,h.max)(n.map((function(e){return e.scoreMax}))),e.abrupt("return",{scoreMin:a,scoreMax:s});case 9:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getFeatures",value:function(e){var t,r=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,d.ObservableCreate)((function(c){return(t=t||(0,i.Z)((0,u.Z)().mark((function t(i){var c;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.getAdapters();case 2:c=t.sent,v.T.apply(void 0,(0,a.Z)(c.map((function(t){return t.dataAdapter.getFeatures(e,n).pipe((0,Z.U)((function(e){return e.get("source")?e:new h.SimpleFeature((0,s.Z)((0,s.Z)({},e.toJSON()),{},{uniqueId:"".concat(t.source,"-").concat(e.id()),source:t.source}))})))})))).subscribe(i);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}),n.signal)}},{key:"getMultiRegionFeatureDensityStats",value:function(e){return(b=b||(0,i.Z)((0,u.Z)().mark((function e(t){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{featureDensity:0});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},{key:"getSources",value:function(){return(w=w||(0,i.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAdapters();case 2:return t=e.sent,e.abrupt("return",t.map((function(e){e.dataAdapter;var t=e.source,r=e.name,a=(0,n.Z)(e,g);return(0,s.Z)({name:t,__name:r},a)})));case 4:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"freeResources",value:function(){}}]),k}(l.BaseFeatureDataAdapter);b.capabilities=["hasResolution","hasLocalStats","hasGlobalStats"]}}]);
//# sourceMappingURL=7167.b3effc6c.chunk.js.map