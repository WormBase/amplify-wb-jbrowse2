"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[9697],{42726:function(e,t,r){r.d(t,{EU:function(){return s},z8:function(){return v},Bf:function(){return d},zv:function(){return h}});var n=r(41361),a=r(81073);function i(e){var t=e.feature,r=e.ctx,n=e.offsets,i=e.cb,s=e.height,f=e.drawCurves,c=e.oobLimit,l=e.viewWidth,u=e.hideTiny,h=t.p11,d=t.p12,v=t.p21,p=t.p22,x=h.offsetPx-n[0],m=d.offsetPx-n[0],g=v.offsetPx-n[1],w=p.offsetPx-n[1],b=Math.abs(m-x),y=Math.abs(w-g),M=s,k=(M-0)/2,P=Math.min(g,w),S=Math.max(g,w);(0,a.doesIntersect2)(P,S,-c,l+c)&&(b<=1&&y<=1?u||(r.beginPath(),r.moveTo(x,0),f?r.bezierCurveTo(x,k,g,k,g,M):r.lineTo(g,M),r.stroke()):(o(r,x,m,0,w,g,M,k,f),i(r)))}function o(e,t,r,n,a,i,o,s,f){f?function(e,t,r,n,a,i,o,s){var f=Math.abs(t-r),c=Math.abs(t-r);if(f<5&&c<5&&r<t&&Math.abs(t-a)>100){var l=t;t=r,r=l}e.beginPath(),e.moveTo(t,n),e.lineTo(r,n),e.bezierCurveTo(r,s,a,s,a,o),e.lineTo(i,o),e.bezierCurveTo(i,s,t,s,t,n),e.closePath(),e.fill()}(e,t,r,n,a,i,o,s):function(e,t,r,n,a,i,o){e.beginPath(),e.moveTo(t,n),e.lineTo(r,n),e.lineTo(a,o),e.lineTo(i,o),e.closePath(),e.fill()}(e,t,r,n,a,i,o)}var s=16581375;function f(e){var t=Math.floor(e/65025)%255,r=Math.floor(e/255)%255,n=e%255;return"rgb(".concat(t,",").concat(r,",").concat(n,")")}var c={I:"#ff03",N:"#0a03",D:"#00f3",X:"brown",M:"#f003","=":"#f003"},l=3,u=1600;function h(e,t,r,n){return Math.floor((255*e*255+255*t+r-1)/n)}function d(e,t,r){var h,d=(0,a.getContainingView)(e),v=d.drawCurves,p=d.drawCIGAR,x=d.middleComparativeHeight,m=d.width,g=d.views.map((function(e){return e.bpPerPx}));r&&(r.imageSmoothingEnabled=!1),t.beginPath();var w=e.featPositions,b=d.views.map((function(e){return e.offsetPx})),y=Math.floor(s/w.length);t.fillStyle=c.M,t.strokeStyle=c.M;var M,k=(0,n.Z)(w);try{for(k.s();!(M=k.n()).done;){var P=M.value,S=P.p11,j=P.p12,T=P.p21,C=P.p22,Z=S.offsetPx-b[0],z=j.offsetPx-b[0],L=T.offsetPx-b[1],H=C.offsetPx-b[1],R=Math.abs(z-Z),I=Math.abs(H-L),N=x,B=(N-0)/2;R<=l&&I<=l&&L<m+u&&L>-u&&(t.moveTo(Z,0),v?t.bezierCurveTo(Z,B,L,B,L,N):t.lineTo(L,N))}}catch(ke){k.e(ke)}finally{k.f()}t.stroke(),t.fillStyle=c.M,t.strokeStyle=c.M;var W,D=(0,n.Z)(w);try{for(D.s();!(W=D.n()).done;){var E=W.value,G=E.p11,_=E.p12,A=E.p21,U=E.p22,V=E.f,X=E.cigar,J=G.offsetPx-b[0],O=_.offsetPx-b[0],F=A.offsetPx-b[1],Y=U.offsetPx-b[1],q=Math.abs(O-J),K=Math.abs(Y-F),Q=Math.min(F,Y),$=Math.max(F,Y),ee=x,te=(ee-0)/2;if(!(q<=l&&K<=l)&&(0,a.doesIntersect2)(Q,$,-u,d.width+u)){var re=V.get("strand"),ne=-1===re?O:J,ae=ne<(-1===re?J:O)?1:-1,ie=(F<Y?1:-1)*re,oe=ne,se=-1===re?Y:F;if(null!==X&&void 0!==X&&X.length&&p)for(var fe=!1,ce=0,le=0,ue=Math.floor(s/X.length),he=0;he<X.length;he+=2){var de=he*ue+1,ve=+X[he],pe=X[he+1];fe||(ce=oe,le=se);var xe=ve/g[0],me=ve/g[1];if("M"===pe||"="===pe||"X"===pe?(oe+=xe*ae,se+=me*ie):"D"===pe||"N"===pe?oe+=xe*ae:"I"===pe&&(se+=me*ie),!(Math.max(ce,le,oe,se)<0||Math.min(ce,le,oe,se)>m)){var ge=he<X.length-2;Math.abs(oe-ce)<=1&&Math.abs(se-le)<=1&&ge?fe=!0:(fe=!1,t.fillStyle=c[fe&&xe>1||me>1?pe:"M"],o(t,ce,oe,0,se,le,ee,te,v),r&&(r.fillStyle=f(de),o(r,ce,oe,0,se,le,ee,te,v)))}}else o(t,J,O,0,Y,F,ee,te,v)}}}catch(ke){D.e(ke)}finally{D.f()}var we=null===(h=e.clickMapCanvas)||void 0===h?void 0:h.getContext("2d");if(we){we.imageSmoothingEnabled=!1,we.clearRect(0,0,m,x);for(var be=0;be<w.length;be++){var ye=w[be],Me=be*y+1;we.fillStyle=f(Me),i({cb:function(e){return e.fill()},feature:ye,ctx:we,drawCurves:v,offsets:b,oobLimit:u,viewWidth:d.width,hideTiny:!0,height:x})}}}function v(e){var t,r=e.clickId,n=e.mouseoverId,o=(0,a.getContainingView)(e),s=o.drawCurves,f=o.middleComparativeHeight,c=o.width,l=null===(t=e.mouseoverCanvas)||void 0===t?void 0:t.getContext("2d"),h=o.views.map((function(e){return e.offsetPx}));if(l){l.resetTransform(),l.scale(1,1),l.clearRect(0,0,c,f);var d=e.featMap[n||""];d&&(l.fillStyle="rgb(0,0,0,0.1)",i({cb:function(e){return e.fill()},feature:d,ctx:l,oobLimit:u,viewWidth:o.width,drawCurves:s,offsets:h,height:f}));var v=e.featMap[r||""];v&&(l.strokeStyle="rgb(0, 0, 0, 0.9)",i({cb:function(e){return e.stroke()},feature:v,ctx:l,oobLimit:u,viewWidth:o.width,drawCurves:s,offsets:h,height:f}))}}},79697:function(e,t,r){r.r(t),r.d(t,{renderToSvg:function(){return g}});var n=r(32723),a=r(33028),i=r(34795),o=(r(30969),r(75844)),s=r(2082),f=r(90689),c=r(81073),l=r(97891),u=r(59767),h=r(57211),d=r(94702),v=r(37574);function p(e){var t=e.width,r=e.height,n=e.shift,a=(0,d.Z)();return(0,v.jsx)("rect",{width:t+2*n,height:r,fill:(0,c.stripAlpha)(a.palette.background.default)})}var x,m=r(42726);function g(e,t){return(x=x||(0,i.Z)((0,n.Z)().mark((function e(t,r){var d,x,g,w,b,y,M,k,P,S,j,T,C,Z,z,L,H,R,I,N,B,W,D,E,G,_,A,U,V,X,J,O,F;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.when)((function(){return t.initialized}));case 2:return w=r.textHeight,b=void 0===w?18:w,y=r.headerHeight,M=void 0===y?30:y,k=r.rulerHeight,P=void 0===k?30:k,S=r.fontSize,j=void 0===S?13:S,T=r.trackLabels,C=void 0===T?"offset":T,Z=r.Wrapper,z=void 0===Z?function(e){var t=e.children;return(0,v.jsx)(v.Fragment,{children:t})}:Z,L=r.themeName,H=void 0===L?"default":L,R=(0,c.getSession)(t),I=null===(d=R.allThemes)||void 0===d?void 0:d.call(R)[H],N=t.width,B=t.views,W=t.middleComparativeHeight,D=t.tracks,E=50,G=M+P,_=B.map((function(e){return(0,h.hY)(e.tracks,b,C)+G})),A=(0,c.sum)(_)+W+100,e.next=12,Promise.all(B.map((function(e){return(x=x||(0,i.Z)((0,n.Z)().mark((function e(t){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,Promise.all(t.tracks.map((function(e){return(o=o||(0,i.Z)((0,n.Z)().mark((function e(t){var i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.displays[0],e.next=3,(0,f.when)((function(){return void 0===i.ready||i.ready}));case 3:return e.t0=t,e.next=6,i.renderSvg((0,a.Z)((0,a.Z)({},r),{},{theme:I}));case 6:return e.t1=e.sent,e.abrupt("return",{track:e.t0,result:e.t1});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)})));case 3:return e.t1=e.sent,e.abrupt("return",{view:e.t0,data:e.t1});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)})));case 12:return U=e.sent,e.next=15,Promise.all(D.map((function(e){return(g=g||(0,i.Z)((0,n.Z)().mark((function e(t){var i,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.displays[0],e.next=3,(0,f.when)((function(){return void 0===i.ready||i.ready}));case 3:return e.next=5,(0,c.renderToAbstractCanvas)(N,W,{exportSVG:r},(function(e){return(0,m.Bf)(i,e)}));case 5:if(!("imageData"in(o=e.sent))){e.next=10;break}throw new Error("found a canvas in svg export, probably a bug");case 10:if(!("canvasRecordedData"in o)){e.next=17;break}return e.next=13,(0,c.getSerializedSvg)((0,a.Z)((0,a.Z)({},o),{},{width:N,height:W}));case 13:return e.t0=e.sent,e.abrupt("return",{html:e.t0});case 17:return e.abrupt("return",o);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)})));case 15:return V=e.sent,X=(0,c.max)(B.flatMap((function(e){return e.tracks.map((function(e){return(0,c.measureText)((0,l.getTrackName)(e.configuration,R),j)}))})),0)+40,O=N+(J="left"===C?X:0),F=(0,u.createJBrowseTheme)(I),e.abrupt("return",(0,s.uS)((0,v.jsx)(o.Z,{theme:(0,u.createJBrowseTheme)(I),children:(0,v.jsx)(z,{children:(0,v.jsxs)("svg",{width:N,height:A,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:[0,0,O+2*E,A].toString(),children:[(0,v.jsx)(p,{width:O,height:A,shift:E}),(0,v.jsxs)("g",{transform:"translate(".concat(E," ").concat(j,")"),children:[(0,v.jsxs)("g",{transform:"translate(".concat(J,")"),children:[(0,v.jsx)("text",{x:0,fontSize:j,fill:F.palette.text.primary,children:B[0].assemblyNames.join(", ")}),(0,v.jsx)(h.Uc,{model:U[0].view,fontSize:j})]}),(0,v.jsx)(h.Ge,{textHeight:b,trackLabels:C,fontSize:j,model:U[0].view,displayResults:U[0].data,offset:G,trackLabelOffset:J})]}),(0,v.jsx)("defs",{children:(0,v.jsx)("clipPath",{id:"synclip",children:(0,v.jsx)("rect",{x:0,y:0,width:N,height:W})})}),(0,v.jsx)("g",{transform:"translate(".concat(E+J," ").concat(j+_[0],")"),clipPath:"url(#synclip)",children:V.map((function(e,t){return(0,v.jsx)(c.ReactRendering,{rendering:e},t)}))}),(0,v.jsxs)("g",{transform:"translate(".concat(E," ").concat(j+_[0]+W,")"),children:[(0,v.jsxs)("g",{transform:"translate(".concat(J,")"),children:[(0,v.jsx)("text",{x:0,fontSize:j,fill:F.palette.text.primary,children:B[1].assemblyNames.join(", ")}),(0,v.jsx)(h.Uc,{model:U[1].view,fontSize:j})]}),(0,v.jsx)(h.Ge,{textHeight:b,trackLabels:C,fontSize:j,model:U[1].view,displayResults:U[1].data,offset:G,trackLabelOffset:J})]})]})})})));case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=9697.cf774e99.chunk.js.map