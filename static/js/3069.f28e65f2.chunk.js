"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[3069],{33069:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n=r(32723),u=r(96234),a=r(34795),i=r(9249),s=r(87371),c=r(45754),o=r(13820),f=r(82972),p=r(32145),l=function(t){(0,c.Z)(r,t);var e=(0,o.Z)(r);function r(){return(0,i.Z)(this,r),e.apply(this,arguments)}return(0,s.Z)(r,[{key:"getRefNameAliases",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var e,r,a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==(e=this.getConf("location")).uri&&"/path/to/my/aliases.txt"!==e.uri){t.next=3;break}return t.abrupt("return",[]);case 3:return t.next=5,(0,p.openLocation)(e,this.pluginManager).readFile("utf8");case 5:return r=t.sent,a=this.getConf("refNameColumn"),t.abrupt("return",r.trim().split(/\n|\r\n|\r/).filter((function(t){return!!t&&!t.startsWith("#")})).map((function(t){var e=t.split("\t"),r=e.splice(a,1);return{refName:(0,u.Z)(r,1)[0],aliases:e.filter((function(t){return!!t.trim()}))}})));case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"freeResources",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),r}(f.BaseAdapter)}}]);
//# sourceMappingURL=3069.f28e65f2.chunk.js.map