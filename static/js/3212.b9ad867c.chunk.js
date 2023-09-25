"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[3212],{43212:function(e,t,n){n.r(t),n.d(t,{default:function(){return b},openFilehandleWrapper:function(){return w}});var r=n(59740),a=n(45754),u=n(13820),s=n(32723),c=n(34795),i=n(9249),o=n(87371),f=n(20783),p=n(26131),h=n(33528),l=n(33980),v=n(49882).lW,d=["chromosomes"],Z=function(){function e(t){(0,i.Z)(this,e),this.filehandle=t}return(0,o.Z)(e,[{key:"read",value:function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t,n){var r,a,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.filehandle.read(v.allocUnsafe(n),0,n,t);case 2:return r=e.sent,a=r.buffer,u=r.bytesRead,e.abrupt("return",a.buffer.slice(a.byteOffset,a.byteOffset+u));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}();function w(e,t){return new Z((0,h.openLocation)(e,t))}var b=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e,r,a){var u;(0,i.Z)(this,n),(u=t.call(this,e,r,a)).hic=void 0;var s=u.getConf("hicLocation");return u.hic=new l.Z({file:w(s,u.pluginManager)}),u}return(0,o.Z)(n,[{key:"setup",value:function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t){var n,r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(t||{}).statusCallback,(r=void 0===n?function(){}:n)("Downloading .hic header"),e.next=4,this.hic.getMetaData();case 4:return a=e.sent,r(""),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getHeader",value:function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t){var n,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setup(t);case 2:return n=e.sent,n.chromosomes,a=(0,r.Z)(n,d),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRefNames",value:function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setup(t);case 2:return n=e.sent,e.abrupt("return",n.chromosomes.map((function(e){return e.name})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getResolution",value:function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t,n){var r,a,u,c,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setup(n);case 2:for(r=e.sent,a=r.resolutions,u=a.at(-1),c=a.length-1;c>=0;c-=1)(i=a[c])<=2*t&&(u=i);return e.abrupt("return",u);case 7:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,p.ObservableCreate)(function(){var r=(0,c.Z)((0,s.Z)().mark((function r(a){var u,c,i,o,f,p,h,l,v;return(0,s.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u=e.refName,c=e.start,i=e.end,o=n.resolution,f=n.bpPerPx,p=void 0===f?1:f,h=n.statusCallback,l=void 0===h?function(){}:h,r.next=4,t.getResolution(p/(o||1e3),n);case 4:return v=r.sent,l("Downloading .hic data"),r.next=8,t.hic.getContactRecords("KR",{start:c,chr:u,end:i},{start:c,chr:u,end:i},"BP",v);case 8:r.sent.forEach((function(e){a.next(e)})),l(""),a.complete();case 12:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),n.signal)}},{key:"getMultiRegionFeatureDensityStats",value:function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{featureDensity:0});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"freeResources",value:function(){}}]),n}(f.BaseFeatureDataAdapter)}}]);
//# sourceMappingURL=3212.b9ad867c.chunk.js.map