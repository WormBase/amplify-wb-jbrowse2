(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[1622],{45046:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(32723),a=n(34795),u=n(9249),i=n(87371),s=n(45754),c=n(13820),o=n(69621),f=n(50933),l=n(20783),h=n(26131),v=n(81073),p=n(5482),b={refName:"seq_id"},d={seq_id:"refName"},g=function(){function e(t,n,r){(0,u.Z)(this,e),this.ncFeature=t,this.parentHandle=void 0,this.uniqueId=void 0,this.uniqueId=r||t.id(),this.parentHandle=n}return(0,i.Z)(e,[{key:"set",value:function(){throw new Error("not implemented")}},{key:"jb2TagToJb1Tag",value:function(e){return(b[e]||e).toLowerCase()}},{key:"jb1TagToJb2Tag",value:function(e){var t=e.toLowerCase();return d[t]||t}},{key:"get",value:function(t){var n=this,r=this.ncFeature.get(this.jb2TagToJb1Tag(t));return r&&"subfeatures"===t?r.map((function(t){return new e(t,n)})):r}},{key:"tags",value:function(){var e=this;return this.ncFeature.tags().map((function(t){return e.jb1TagToJb2Tag(t)}))}},{key:"id",value:function(){return this.uniqueId}},{key:"parent",value:function(){return this.parentHandle}},{key:"children",value:function(){return this.get("subfeatures")}},{key:"toJSON",value:function(){var t=this,n={uniqueId:this.id()};return this.ncFeature.tags().forEach((function(r){var a=t.jb1TagToJb2Tag(r),u=t.ncFeature.get(r);"subfeatures"===a?n.subfeatures=(u||[]).map((function(n){return new e(n,t).toJSON()})):n[a]=u})),n}}]),e}(),k=function(e,t,n){(0,s.Z)(b,e);var l=(0,c.Z)(b);function b(e,t,n){var r;(0,u.Z)(this,b),(r=l.call(this,e,t,n)).nclist=void 0,r.configRefNames=void 0;var a=r.getConf("refNames"),i=r.getConf("rootUrlTemplate");return r.configRefNames=a,r.nclist=new f.Z({baseUrl:"",urlTemplate:i.uri,readFile:function(e){return new p.kC(String(i.baseUri?new URL(e,i.baseUri).toString():e)).readFile()}}),r}return(0,i.Z)(b,[{key:"getFeatures",value:function(e){var t,n=this,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,h.ObservableCreate)((function(i){return(t=t||(0,a.Z)((0,r.Z)().mark((function t(a){var i,s,c,f,l,h,p;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=u.signal,s=!1,c=!1,t.prev=3,l=(0,o.Z)(n.nclist.getFeatures(e,u));case 5:return t.next=7,l.next();case 7:if(!(s=!(h=t.sent).done)){t.next=14;break}p=h.value,(0,v.checkAbortSignal)(i),a.next(n.wrapFeature(p));case 11:s=!1,t.next=5;break;case 14:t.next=20;break;case 16:t.prev=16,t.t0=t.catch(3),c=!0,f=t.t0;case 20:if(t.prev=20,t.prev=21,!s||null==l.return){t.next=25;break}return t.next=25,l.return();case 25:if(t.prev=25,!c){t.next=28;break}throw f;case 28:return t.finish(25);case 29:return t.finish(20);case 30:a.complete();case 31:case"end":return t.stop()}}),t,null,[[3,16,20,30],[21,,25,29]])})))).apply(this,arguments)}))}},{key:"wrapFeature",value:function(e){return new g(e,void 0,"".concat(this.id,"-").concat(e.id()))}},{key:"hasDataForRefName",value:function(e){return(t=t||(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.nclist.getDataRoot(t);case 2:return a=e.sent,e.abrupt("return",!(null===a||void 0===a||null===(n=a.stats)||void 0===n||!n.featureCount));case 4:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getRefNames",value:function(){return(n=n||(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.configRefNames||[]);case 1:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"freeResources",value:function(){}}]),b}(l.BaseFeatureDataAdapter)},53260:function(){}}]);
//# sourceMappingURL=1622.52d01833.chunk.js.map