"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2508],{92508:function(e,t,n){n.r(t),n.d(t,{drawFeats:function(){return c}});var r=n(68079),a=n(41361),o=n(81073),i=n(58203),s=n(46079),f=n(71124);function l(e){return 2*Math.random()*e-e}function d(e,t,n,r){e.strokeStyle=r,e.beginPath(),e.moveTo(t,0),e.lineTo(t,n),e.stroke()}function c(e,t,n,c){var u=e.chainData,v=e.colorBy,g=e.drawInter,h=e.drawLongRange,y=e.lineWidthSetting,m=e.jitterVal;if(u){var k=(0,o.getContainingView)(e),b=(0,o.getSession)(e).assemblyManager,S=u.chains,P=u.stats,p=(0,f.F)(u),w=b.get(k.assemblyNames[0]),x=(null===v||void 0===v?void 0:v.type)||"insertSizeAndOrientation";if(w){t.lineWidth=y;var N,T=(0,a.Z)(S);try{for(T.s();!(N=T.n()).done;){var z=N.value;if(1===z.length&&h){var C=z[0];if(!p||8&C.flags)for(var M=[C].concat((0,r.Z)((0,s.featurizeSA)(C.SA,C.id,C.strand,C.name))).sort((function(e,t){return e.clipPos-t.clipPos})),_=0;_<M.length-1;_++){F(M[_],M[_+1],w,!0)}else F(C,{refName:C.next_ref||"",start:C.next_pos||0,end:C.next_pos||0,strand:C.strand},w,!0)}else for(var A=p?z.filter((function(e){return!(2048&e.flags)&&!(8&e.flags)})):z.sort((function(e,t){return e.clipPos-t.clipPos})).filter((function(e){return!(256&e.flags)})),j=0;j<A.length-1;j++)F(A[j],A[j+1],w,!1)}}catch(O){T.e(O)}finally{T.f()}}}function F(e,n,r,a){var o,s,f=e.strand,u=n.strand,v=-1===u,h=-1===f?e.start:e.end,y=p?v?n.start:n.end:v?n.end:n.start,b=r.getCanonicalRefName(e.refName)||e.refName,S=r.getCanonicalRefName(n.refName)||n.refName,w=null===(o=k.bpToPx({refName:b,coord:h}))||void 0===o?void 0:o.offsetPx,N=null===(s=k.bpToPx({refName:S,coord:y}))||void 0===s?void 0:s.offsetPx;if(void 0!==w&&void 0!==N){var T=(N-w)/2,z=Math.abs(T),C=w-k.offsetPx,M=N-k.offsetPx,_=z>1e4;if(a&&_?(t.moveTo(C,0),t.beginPath()):(t.beginPath(),t.moveTo(C,0)),a&&_)t.strokeStyle="red";else if(p)if("insertSizeAndOrientation"===x)t.strokeStyle=(0,i.k5)(e,n,P)[0];else if("orientation"===x)t.strokeStyle=(0,i.uE)(e)[0];else if("insertSize"===x){var A;t.strokeStyle=(null===(A=(0,i.Wh)(e,n,P))||void 0===A?void 0:A[0])||"grey"}else"gradient"===x&&(t.strokeStyle="hsl(".concat(10*Math.log10(z),",50%,50%)"));else"orientation"===x||"insertSizeAndOrientation"===x?t.strokeStyle=-1===f&&1===u?"navy":1===f&&-1===u?"green":"grey":"gradient"===x&&(t.strokeStyle="hsl(".concat(10*Math.log10(z),",50%,50%)"));var j=C+2*T,F=Math.min(c+l(m),z);a?z>1e5?(d(t,C+l(m),c,"red"),d(t,M+l(m),c,"red")):_?(t.arc(C+T+l(m),0,z,0,Math.PI),t.stroke()):(t.bezierCurveTo(C+l(m),F,j,F,j+l(m),0),t.stroke()):(t.bezierCurveTo(C+l(m),F,j,F,j+l(m),0),t.stroke())}else w&&g&&d(t,w-k.offsetPx,c,"purple")}}},71124:function(e,t,n){n.d(t,{F:function(){return a}});var r=n(41361);function a(e){var t,n=(0,r.Z)(e.chains.values());try{for(n.s();!(t=n.n()).done;){if(1&t.value[0].flags)return!0}}catch(a){n.e(a)}finally{n.f()}return!1}}}]);
//# sourceMappingURL=2508.43e35924.chunk.js.map