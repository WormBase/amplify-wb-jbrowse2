"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[9723,1954],{91954:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(41361),a=r(32723),u=r(68079),s=r(34795),f=r(9249),c=r(87371),i=r(45754),o=r(13820),l=r(20783),v=r(14956),p=r(26131),h=r(9077),d=function(e){(0,i.Z)(r,e);var t=(0,o.Z)(r);function r(e,n,a){var u;(0,f.Z)(this,r),(u=t.call(this,e,n,a)).features=void 0;var s=(0,h.readConfObject)(e,"features");return u.features=r.makeFeatures(s||[]),u}return(0,c.Z)(r,[{key:"getRefNames",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.Z)(this.features.keys()));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRefNameAliases",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.Z)(this.features.values()).map((function(e){return{refName:e[0].get("refName"),aliases:e[0].get("aliases")}})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,r=e.refName,u=e.start,f=e.end;return(0,p.ObservableCreate)(function(){var e=(0,s.Z)((0,a.Z)().mark((function e(s){var c,i,o,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.features.get(r)||[],i=(0,n.Z)(c);try{for(i.s();!(o=i.n()).done;)(l=o.value).get("end")>u&&l.get("start")<f&&s.next(l)}catch(a){i.e(a)}finally{i.f()}s.complete();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"freeResources",value:function(){}}],[{key:"makeFeatures",value:function(e){var t,r=new Map,a=(0,n.Z)(e);try{for(a.s();!(t=a.n()).done;){var u=t.value;if(u){var s=this.makeFeature(u),f=s.get("refName"),c=r.get(f);c||(c=[],r.set(f,c)),c.push(s)}}}catch(l){a.e(l)}finally{a.f()}var i,o=(0,n.Z)(r.values());try{for(o.s();!(i=o.n()).done;){i.value.sort((function(e,t){return e.get("start")-t.get("start")}))}}catch(l){o.e(l)}finally{o.f()}return r}},{key:"makeFeature",value:function(e){return new v.Z(e)}}]),r}(l.BaseFeatureDataAdapter)},29723:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(32723),a=r(96234),u=r(41361),s=r(34795),f=r(9249),c=r(87371),i=r(45754),o=r(13820),l=r(20783),v=r(9077),p=r(91954),h=function(e){(0,i.Z)(r,e);var t=(0,o.Z)(r);function r(e,n,a){var u;(0,f.Z)(this,r),(u=t.call(this,e,n,a)).features=void 0;var s=(0,v.readConfObject)(e,"features");return u.features=p.default.makeFeatures(s||[]),u}return(0,c.Z)(r,[{key:"getRegions",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t,r,s,f,c,i,o,l,v,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],r=(0,u.Z)(this.features);try{for(r.s();!(s=r.n()).done;){f=(0,a.Z)(s.value,2),c=f[0],i=f[1],o=void 0,l=(0,u.Z)(i);try{for(l.s();!(v=l.n()).done;)p=v.value,o&&o.end>=p.get("start")&&o.start<=p.get("end")?o.end=p.get("end"):(o&&t.push(o),o={refName:c,start:p.get("start"),end:p.get("end")})}catch(n){l.e(n)}finally{l.f()}o&&t.push(o)}}catch(n){r.e(n)}finally{r.f()}return t.sort((function(e,t){return e.refName.localeCompare(t.refName)})),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"freeResources",value:function(){}}]),r}(l.BaseAdapter)}}]);
//# sourceMappingURL=9723.d484ec35.chunk.js.map