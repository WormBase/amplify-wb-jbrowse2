(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[34],{59894:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var n=r(96234),a=r(33028),s=r(32723),u=r(41361),i=r(34795),c=r(9249),o=r(87371),f=r(45754),l=r(13820),h=r(20783),d=r(33528),p=r(26131),v=r(16362),g=r(14956),w=r(42098),Z=r(64526);function b(e){return 31===e[0]&&139===e[1]&&8===e[2]}var k=function(e){(0,f.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;(0,c.Z)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).gffFeatures=void 0,e}return(0,o.Z)(r,[{key:"loadDataP",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t,r,n,a,i,c,o,f,l,h,p,k,y,m,x=this;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.pluginManager,e.next=3,(0,d.openLocation)(this.getConf("gffLocation"),t).readFile();case 3:if(!b(r=e.sent)){e.next=10;break}return e.next=7,(0,w.unzip)(r);case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=r;case 11:if(!((n=e.t0).length>536870888)){e.next=14;break}throw new Error("Data exceeds maximum string length (512MB)");case 14:for(a=new TextDecoder("utf8",{fatal:!0}).decode(n),i=a.split(/\n|\r\n|\r/),c=[],o=0;o<i.length&&i[o].startsWith("#");o++)c.push(i[o]);f=c.join("\n"),l=Z.Z.parseStringSync(a,{parseFeatures:!0,parseComments:!1,parseDirectives:!1,parseSequences:!1,disableDerivesFromReferences:!0}),h={},p=(0,u.Z)(l.flat().map((function(e,t){return new g.Z({data:x.featureData(e),id:"".concat(x.id,"-offset-").concat(t)})})));try{for(p.s();!(k=p.n()).done;)y=k.value,m=y.get("refName"),h[m]||(h[m]=new v.ZP),h[m].insert([y.get("start"),y.get("end")],y)}catch(s){p.e(s)}finally{p.f()}return e.abrupt("return",{header:f,intervalTree:h});case 24:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadData",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t=this;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.gffFeatures||(this.gffFeatures=this.loadDataP().catch((function(e){throw t.gffFeatures=void 0,e}))),e.abrupt("return",this.gffFeatures);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRefNames",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t,r,n=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.length>0&&void 0!==n[0]?n[0]:{},e.next=3,this.loadData();case 3:return t=e.sent,r=t.intervalTree,e.abrupt("return",Object.keys(r));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHeader",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadData();case 2:return t=e.sent,r=t.header,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,p.ObservableCreate)(function(){var r=(0,i.Z)((0,s.Z)().mark((function r(n){var a,u,i,c,o,f;return(0,s.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,u=e.start,i=e.end,c=e.refName,r.next=4,t.loadData();case 4:o=r.sent,f=o.intervalTree,null===(a=f[c])||void 0===a||a.search([u,i]).forEach((function(e){return n.next(e)})),n.complete(),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),n.error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(e){return r.apply(this,arguments)}}(),r.signal)}},{key:"featureData",value:function(e){var t=this,r=(0,a.Z)({},e);r.start-=1,"+"===e.strand?r.strand=1:"-"===e.strand?r.strand=-1:"."===e.strand?r.strand=0:r.strand=void 0,r.phase=Number(e.phase),r.refName=e.seq_id,null===e.score&&delete r.score,null===e.phase&&delete r.score;for(var s=new Set(["start","end","seq_id","score","type","source","phase","strand"]),u=e.attributes||{},i=0,c=Object.keys(u);i<c.length;i++){var o=c[i],f=o.toLowerCase();if(s.has(f)&&(f+="2"),null!==u[o]){var l=u[o];if(Array.isArray(l)&&1===l.length){var h=l;l=(0,n.Z)(h,1)[0]}r[f]=l}}return r.refName=r.seq_id,e.child_features&&e.child_features.length>0&&(r.subfeatures=e.child_features.flatMap((function(e){return e.map((function(e){return t.featureData(e)}))}))),delete r.child_features,delete r.data,delete r.attributes,delete r.seq_id,r}},{key:"freeResources",value:function(){}}]),r}(h.BaseFeatureDataAdapter)},74854:function(){},66602:function(){}}]);
//# sourceMappingURL=34.9a9ae2a7.chunk.js.map