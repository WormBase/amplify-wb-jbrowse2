"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[9121],{89121:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(41361),a=n(33028),s=n(32723),u=n(34795),c=n(9249),i=n(87371),o=n(45754),f=n(13820),l=n(2646),p=n(93824),d=n(95802),h=n(66043),v=n(56218),g=function(e){(0,o.Z)(n,e);var t=(0,f.Z)(n);function n(){return(0,c.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"configure",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){var t,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=this.getSubAdapter)||void 0===t?void 0:t.call(this,this.getConf("sequenceAdapter"));case 2:if(n=e.sent){e.next=5;break}throw new Error("Error getting subadapter");case 5:return e.abrupt("return",n.dataAdapter);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRefNames",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.configure();case 2:return t=e.sent,e.abrupt("return",t.getRefNames());case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e,t){var n=this;return(0,p.ObservableCreate)(function(){var c=(0,u.Z)((0,s.Z)().mark((function u(c){var i,o,f,l,p,g,m,w,Z,b,x,k,y,C,A,F,N,q,I,R,_,E;return(0,s.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.configure();case 2:if(o=s.sent,1e3,f=e.start,l=e.end,f=Math.max(0,f-1e3),!((l+=1e3)<0||f>l)){s.next=10;break}return c.complete(),s.abrupt("return");case 10:return p=o.getFeatures((0,a.Z)((0,a.Z)({},e),{},{start:f,end:l}),t),s.next=13,(0,v.z)(p.pipe((0,h.q)()));case 13:if(g=s.sent,m=(null===(i=g[0])||void 0===i?void 0:i.get("seq"))||"",w=n.getConf("search"),Z=n.getConf("searchForward"),b=n.getConf("searchReverse"),x=n.getConf("caseInsensitive"),k=new RegExp(w,"g"+(x?"i":"")),w){if(Z){y=m.matchAll(k),C=(0,r.Z)(y);try{for(C.s();!(A=C.n()).done;)F=A.value,N=f+(F.index||0),(0,d.doesIntersect2)(N,N+w.length,e.start,e.end)&&c.next(new d.SimpleFeature({uniqueId:"".concat(n.id,"-match-").concat(N,"-p"),refName:e.refName,start:N,end:N+F[0].length,name:F[0],strand:1}))}catch(u){C.e(u)}finally{C.f()}}if(b){q=(0,d.revcom)(m).matchAll(k),I=(0,r.Z)(q);try{for(I.s();!(R=I.n()).done;)_=R.value,E=l-(_.index||0),(0,d.doesIntersect2)(E,E+w.length,e.start,e.end)&&c.next(new d.SimpleFeature({uniqueId:"".concat(n.id,"-match-").concat(E,"-n"),refName:e.refName,start:E-_[0].length,name:_[0],end:E,strand:-1}))}catch(u){I.e(u)}finally{I.f()}}}c.complete();case 22:case"end":return s.stop()}}),u)})));return function(e){return c.apply(this,arguments)}}())}},{key:"freeResources",value:function(){}}]),n}(l.BaseFeatureDataAdapter)}}]);
//# sourceMappingURL=9121.ae0f3850.chunk.js.map