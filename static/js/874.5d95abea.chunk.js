"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[874],{30874:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(33028),a=n(96234),u=n(32723),s=n(34795),c=n(9249),o=n(87371),i=n(45754),f=n(13820),p=n(20783),l=n(33528),d=n(81073),h=n(26131),v=n(74059),m=function(e,t,n,p,m){(0,i.Z)(w,e);var Z=(0,f.Z)(w);function w(){var e;(0,c.Z)(this,w);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=Z.call.apply(Z,[this].concat(n))).setupP=void 0,e}return(0,o.Z)(w,[{key:"setup",value:function(e){return(t=t||(0,s.Z)((0,u.Z)().mark((function e(t){var n=this;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setupP||(this.setupP=this.setupPre(t).catch((function(e){throw n.setupP=void 0,e}))),e.abrupt("return",this.setupP);case 2:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"setupPre",value:function(e){return(n=n||(0,s.Z)((0,u.Z)().mark((function e(t){var n,r,s,c,o,i,f,p,d,h,m,Z,w;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.getConf("assemblyNames"),r=this.pluginManager,s=(0,l.openLocation)(this.getConf("bed1Location"),r),c=(0,l.openLocation)(this.getConf("bed2Location"),r),o=(0,l.openLocation)(this.getConf("mcscanAnchorsLocation"),r),e.next=7,Promise.all([s,c,o].map((function(e){return(0,v.pJ)(e,t)})));case 7:return i=e.sent,f=(0,a.Z)(i,3),p=f[0],d=f[1],h=f[2],m=(0,v.SN)(p),Z=(0,v.SN)(d),w=h.split(/\n|\r\n|\r/).filter((function(e){return!!e&&"###"!==e})).map((function(e,t){var n=e.split("\t"),r=(0,a.Z)(n,3),u=r[0],s=r[1],c=r[2],o=m.get(u),i=Z.get(s);if(!o||!i)throw new Error("feature not found, ".concat(u," ").concat(s," ").concat(o," ").concat(i));return[o,i,+c,t]})),e.abrupt("return",{assemblyNames:n,feats:w});case 16:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"hasDataForRefName",value:function(){return(p=p||(0,s.Z)((0,u.Z)().mark((function e(){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},{key:"getRefNames",value:function(){return(m=m||(0,s.Z)((0,u.Z)().mark((function e(){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[]);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},{key:"getFeatures",value:function(e){var t,n=this,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,h.ObservableCreate)((function(o){return(t=t||(0,s.Z)((0,u.Z)().mark((function t(s){var o,i,f,p,l;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.setup(c);case 2:o=t.sent,i=o.assemblyNames,f=o.feats,-1!==(p=i.indexOf(e.assemblyName))&&(l=0===p,f.forEach((function(t){var n=(0,a.Z)(t,4),u=n[0],c=n[1],o=n[2],f=n[3],h=l?[u,c]:[c,u],v=(0,a.Z)(h,2),m=v[0],Z=v[1];m.refName===e.refName&&(0,d.doesIntersect2)(e.start,e.end,m.start,m.end)&&s.next(new d.SimpleFeature((0,r.Z)((0,r.Z)({},m),{},{uniqueId:"".concat(p,"-").concat(f),syntenyId:f,strand:m.strand*Z.strand,assemblyName:i[+!l],score:o,mate:(0,r.Z)((0,r.Z)({},Z),{},{assemblyName:i[+l]})})))}))),s.complete();case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}))}},{key:"freeResources",value:function(){}}]),w}(p.BaseFeatureDataAdapter);m.capabilities=["getFeatures","getRefNames"]},74059:function(e,t,n){n.d(t,{$R:function(){return p},SN:function(){return i},WU:function(){return d},lq:function(){return o},pJ:function(){return f}});var r,a=n(32723),u=n(34795),s=n(96234),c=n(42098);function o(e){return 31===e[0]&&139===e[1]&&8===e[2]}function i(e){return new Map(e.split(/\n|\r\n|\r/).filter((function(e){return!!e||e.startsWith("#")})).map((function(e){var t=e.split("\t"),n=(0,s.Z)(t,6),r=n[0],a=n[1],u=n[2],c=n[3];return[c,{refName:r,start:+a,end:+u,score:+n[4],name:c,strand:"-"===n[5]?-1:1}]})))}function f(e,t){return(r=r||(0,u.Z)((0,a.Z)().mark((function e(t,n){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.readFile(n);case 2:if(r=e.sent,e.t0=new TextDecoder("utf8",{fatal:!0}),!o(r)){e.next=10;break}return e.next=7,(0,c.unzip)(r);case 7:e.t1=e.sent,e.next=11;break;case 10:e.t1=r;case 11:return e.t2=e.t1,e.abrupt("return",e.t0.decode.call(e.t0,e.t2));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t){return e.map((function(e,n){return[e,t[n]]}))}var l="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;function d(e,t){for(var n=0,r=[];n<e.length;){var a=e.indexOf("\n",n);if(-1===a)break;var u=e.slice(n,a),s=((null===l||void 0===l?void 0:l.decode(u))||u.toString()).trim();s&&r.push(t(s)),n=a+1}return r}}}]);
//# sourceMappingURL=874.5d95abea.chunk.js.map