"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[3212],{43212:function(e,t,n){n.r(t),n.d(t,{default:function(){return b},openFilehandleWrapper:function(){return w}});var r=n(59740),a=n(45754),u=n(13820),s=n(32723),c=n(34795),i=n(9249),o=n(87371),f=n(20783),p=n(26131),h=n(33528),l=n(33980),v=n(49882).lW,d=["chromosomes"],Z=function(e){function t(e){(0,i.Z)(this,t),this.filehandle=e}return(0,o.Z)(t,[{key:"read",value:function(t,n){return(e=e||(0,c.Z)((0,s.Z)().mark((function e(t,n){var r,a,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.filehandle.read(v.allocUnsafe(n),0,n,t);case 2:return r=e.sent,a=r.buffer,u=r.bytesRead,e.abrupt("return",a.buffer.slice(a.byteOffset,a.byteOffset+u));case 6:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}}]),t}();function w(e,t){return new Z((0,h.openLocation)(e,t))}var b=function(e,t,n,f,h,v){(0,a.Z)(b,e);var Z=(0,u.Z)(b);function b(e,t,n){var r;(0,i.Z)(this,b),(r=Z.call(this,e,t,n)).hic=void 0;var a=r.getConf("hicLocation");return r.hic=new l.Z({file:w(a,r.pluginManager)}),r}return(0,o.Z)(b,[{key:"setup",value:function(e){return(t=t||(0,c.Z)((0,s.Z)().mark((function e(t){var n,r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(t||{}).statusCallback,(r=void 0===n?function(){}:n)("Downloading .hic header"),e.next=4,this.hic.getMetaData();case 4:return a=e.sent,r(""),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getHeader",value:function(e){return(n=n||(0,c.Z)((0,s.Z)().mark((function e(t){var n,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setup(t);case 2:return n=e.sent,n.chromosomes,a=(0,r.Z)(n,d),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getRefNames",value:function(e){return(f=f||(0,c.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setup(t);case 2:return n=e.sent,e.abrupt("return",n.chromosomes.map((function(e){return e.name})));case 4:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getResolution",value:function(e,t){return(h=h||(0,c.Z)((0,s.Z)().mark((function e(t,n){var r,a,u,c,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setup(n);case 2:for(r=e.sent,a=r.resolutions,u=a.at(-1),c=a.length-1;c>=0;c-=1)(i=a[c])<=2*t&&(u=i);return e.abrupt("return",u);case 7:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"getFeatures",value:function(e){var t,n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,p.ObservableCreate)((function(a){return(t=t||(0,c.Z)((0,s.Z)().mark((function t(a){var u,c,i,o,f,p,h,l,v;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=e.refName,c=e.start,i=e.end,o=r.resolution,f=r.bpPerPx,p=void 0===f?1:f,h=r.statusCallback,l=void 0===h?function(){}:h,t.next=4,n.getResolution(p/(o||1e3),r);case 4:return v=t.sent,l("Downloading .hic data"),t.next=8,n.hic.getContactRecords("KR",{start:c,chr:u,end:i},{start:c,chr:u,end:i},"BP",v);case 8:t.sent.forEach((function(e){a.next(e)})),l(""),a.complete();case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}),r.signal)}},{key:"getMultiRegionFeatureDensityStats",value:function(e){return(v=v||(0,c.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{featureDensity:0});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},{key:"freeResources",value:function(){}}]),b}(f.BaseFeatureDataAdapter)}}]);
//# sourceMappingURL=3212.607f34eb.chunk.js.map