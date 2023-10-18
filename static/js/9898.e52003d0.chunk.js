"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[9898],{59898:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(96234),i=n(96902),o=n(35478),r=n(4782),s=n(17867),l=n(27664),f=n(33028),c=n(16644),u=n(60131),d=n(61291),v=n(29938);var h=(0,o.ZL)()((function(e){return{tooltip:{position:"absolute",pointerEvents:"none",backgroundColor:(0,c.Fq)(e.palette.grey[700],.9),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(12),lineHeight:"".concat((t=1.4,Math.round(1e5*t)/1e5),"em"),maxWidth:300,wordWrap:"break-word"}};var t})),g=(0,r.observer)((function(e){var t=e.x,n=e.y,o=e.title,r=(0,i.useState)(0),l=(0,a.Z)(r,2),c=l[0],g=l[1],p=(0,i.useState)(null),b=(0,a.Z)(p,2),m=b[0],x=b[1],M=h().classes,C=(0,i.useMemo)((function(){return{getBoundingClientRect:function(){return{top:n,left:t+c/2,bottom:n,right:t,width:0,height:0,x:t,y:n,toJSON:function(){}}}}}),[t,n,c]),w=(0,d.D)(C,m),y=w.styles,k=w.attributes;return o?(0,v.jsx)(u.h,{children:(0,v.jsx)("div",(0,f.Z)((0,f.Z)({ref:function(e){g((null===e||void 0===e?void 0:e.getBoundingClientRect().width)||0),x(e)},className:M.tooltip,style:(0,f.Z)((0,f.Z)({},y.popper),{},{zIndex:1e5})},k.popper),{},{children:(0,v.jsx)(s.SanitizedHTML,{html:o})}))}):null})),p=n(70833),b=(0,r.observer)((function(e){var t=e.model,n=(0,l.getContainingView)(t),o=n.middleComparativeHeight,r=n.width,s=(0,i.useState)(""),f=(0,a.Z)(s,2),c=f[0],u=f[1],d=(0,i.useState)(),h=(0,a.Z)(d,2),b=h[0],m=h[1],x=(0,i.useState)(),M=(0,a.Z)(x,2),C=M[0],w=M[1],y=(0,i.useCallback)((function(e){return t.setMouseoverCanvasRef(e)}),[t,o,r]),k=(0,i.useCallback)((function(e){return t.setMainCanvasRef(e)}),[t,o,r]),P=(0,i.useCallback)((function(e){return t.setClickMapCanvasRef(e)}),[t,o,r]),S=(0,i.useCallback)((function(e){return t.setCigarClickMapCanvasRef(e)}),[t,o,r]);return(0,v.jsxs)("div",{style:{position:"relative"},children:[(0,v.jsx)("canvas",{ref:y,width:r,height:o,style:{width:r,height:o,position:"absolute",pointerEvents:"none"}}),(0,v.jsx)("canvas",{ref:k,onMouseMove:function(e){var n,i=t.clickMapCanvas,o=t.cigarClickMapCanvas;if(i&&o){var r=i.getBoundingClientRect(),s=i.getContext("2d"),f=o.getContext("2d");if(s&&f){var c=e.clientX,d=e.clientY,v=c-r.left,h=d-r.top;m(c),w(d);var g=(0,a.Z)(s.getImageData(v,h,1,1).data,3),b=g[0],x=g[1],M=g[2],C=(0,a.Z)(f.getImageData(v,h,1,1).data,3),y=C[0],k=C[1],P=C[2],S=Math.floor(p.EU/t.numFeats),T=(0,p.zv)(b,x,M,S);if(t.setMouseoverId(null===(n=t.featPositions[T])||void 0===n?void 0:n.f.id()),-1===T)u("");else if(t.featPositions[T]){var j=t.featPositions[T],I=j.f,R=j.cigar,Z=I.toJSON(),E=Z.mate,L=Math.floor(p.EU/R.length),z=(0,p.zv)(y,k,P,L),N=Z.end-Z.start,W=E.end-E.start,D=Z.identity,F=Z.name,B=E.name,H=["Loc1: ".concat((0,l.assembleLocString)(Z)),"Loc2: ".concat((0,l.assembleLocString)(E)),"Inverted: ".concat(-1===Z.strand),"Query len: ".concat(N),"Target len: ".concat(W)];D&&H.push("Identity: ".concat(D)),R[z]&&H.push("CIGAR operator: ".concat(R[z]).concat(R[z+1])),F&&B&&H.push("Name 1: ".concat(F),"Name 2: ".concat(B)),u(H.join("<br/>"))}}}},onMouseLeave:function(){return t.setMouseoverId(void 0)},onClick:function(e){var n=t.clickMapCanvas,i=t.cigarClickMapCanvas;if(n&&i){var o=n.getBoundingClientRect(),r=n.getContext("2d"),s=i.getContext("2d");if(r&&s){var f=e.clientX-o.left,c=e.clientY-o.top,u=(0,a.Z)(r.getImageData(f,c,1,1).data,3),d=u[0],v=u[1],h=u[2],g=Math.floor(p.EU/t.numFeats),b=(0,p.zv)(d,v,h,g),m=t.featPositions[b];if(m){t.setClickId(m.f.id());var x=(0,l.getSession)(t);(0,l.isSessionModelWithWidgets)(x)&&x.showWidget(x.addWidget("SyntenyFeatureWidget","syntenyFeature",{featureData:{feature1:m.f.toJSON(),feature2:m.f.get("mate")}}))}}}},"data-testid":"synteny_canvas",style:{width:r,height:o,position:"absolute"},width:1*r,height:1*o}),(0,v.jsx)("canvas",{ref:P,style:{imageRendering:"pixelated",pointerEvents:"none",visibility:"hidden",position:"absolute"},width:r,height:o}),(0,v.jsx)("canvas",{ref:S,style:{imageRendering:"pixelated",pointerEvents:"none",visibility:"hidden",position:"absolute"},width:r,height:o}),t.mouseoverId&&c&&b&&C?(0,v.jsx)(g,{x:b,y:C,title:c}):null]})})),m=(0,o.ZL)()((function(e){var t=e.palette.action.disabledBackground;return{loading:{paddingLeft:"0.6em",backgroundColor:e.palette.background.default,backgroundImage:"repeating-linear-gradient(45deg, transparent, transparent 5px, ".concat(t," 5px, ").concat(t," 10px)"),textAlign:"center"},blockMessage:{background:"#f1f1f1",padding:10},blockError:{background:"#f1f1f1",padding:10,color:"red"}}}));function x(){var e=(0,i.useState)(!1),t=(0,a.Z)(e,2),n=t[0],o=t[1],r=m().classes;return(0,i.useEffect)((function(){var e=setTimeout((function(){return o(!0)}),300);return function(){return clearTimeout(e)}})),n?(0,v.jsx)("div",{className:r.loading,children:(0,v.jsx)(s.LoadingEllipses,{})}):null}function M(e){var t=e.messageText,n=m().classes;return(0,v.jsx)("div",{className:n.blockMessage,children:t})}function C(e){var t=e.error,n=m().classes;return(0,v.jsx)("div",{className:n.blockError,children:"".concat(t)})}var w=(0,r.observer)((function(e){var t=e.model;return t.error?(0,v.jsx)(C,{error:t.error}):t.message?(0,v.jsx)(M,{messageText:t.message}):t.features?(0,v.jsx)(b,{model:t}):(0,v.jsx)(x,{})}))},70833:function(e,t,n){n.d(t,{EU:function(){return r},z8:function(){return v},Bf:function(){return d},zv:function(){return u}});var a=n(27664);function i(e){var t=e.feature,n=e.ctx,i=e.offsets,r=e.cb,s=e.height,l=e.drawCurves,f=e.oobLimit,c=e.viewWidth,u=e.hideTiny,d=t.p11,v=t.p12,h=t.p21,g=t.p22,p=d.offsetPx-i[0],b=v.offsetPx-i[0],m=h.offsetPx-i[1],x=g.offsetPx-i[1],M=Math.abs(b-p),C=Math.abs(x-m),w=s,y=(w-0)/2,k=Math.min(m,x),P=Math.max(m,x);(0,a.doesIntersect2)(k,P,-f,c+f)&&(M<=1&&C<=1?u||(n.beginPath(),n.moveTo(p,0),l?n.bezierCurveTo(p,y,m,y,m,w):n.lineTo(m,w),n.stroke()):(o(n,p,b,0,x,m,w,y,l),r(n)))}function o(e,t,n,a,i,o,r,s,l){l?function(e,t,n,a,i,o,r,s){var l=Math.abs(t-n),f=Math.abs(t-n);if(l<5&&f<5&&n<t&&Math.abs(t-i)>100){var c=t;t=n,n=c}e.beginPath(),e.moveTo(t,a),e.lineTo(n,a),e.bezierCurveTo(n,s,i,s,i,r),e.lineTo(o,r),e.bezierCurveTo(o,s,t,s,t,a),e.closePath(),e.fill()}(e,t,n,a,i,o,r,s):function(e,t,n,a,i,o,r){e.beginPath(),e.moveTo(t,a),e.lineTo(n,a),e.lineTo(i,r),e.lineTo(o,r),e.closePath(),e.fill()}(e,t,n,a,i,o,r)}var r=16581375;function s(e){var t=Math.floor(e/65025)%255,n=Math.floor(e/255)%255,a=e%255;return"rgb(".concat(t,",").concat(n,",").concat(a,")")}var l={I:"#ff03",N:"#0a03",D:"#00f3",X:"brown",M:"#f003","=":"#f003"},f=3,c=1600;function u(e,t,n,a){return Math.floor((255*e*255+255*t+n-1)/a)}function d(e,t,n){var u,d=(0,a.getContainingView)(e),v=d.drawCurves,h=d.drawCIGAR,g=d.middleComparativeHeight,p=d.width,b=d.views.map((function(e){return e.bpPerPx}));n&&(n.imageSmoothingEnabled=!1),t.beginPath();var m=e.featPositions,x=d.views.map((function(e){return e.offsetPx})),M=Math.floor(r/m.length);t.fillStyle=l.M,t.strokeStyle=l.M;for(var C=0;C<m.length;C++){var w=m[C],y=w.p11,k=w.p12,P=w.p21,S=w.p22,T=y.offsetPx-x[0],j=k.offsetPx-x[0],I=P.offsetPx-x[1],R=S.offsetPx-x[1],Z=Math.abs(j-T),E=Math.abs(R-I),L=g,z=(L-0)/2;Z<=f&&E<=f&&I<p+c&&I>-c&&(t.moveTo(T,0),v?t.bezierCurveTo(T,z,I,z,I,L):t.lineTo(I,L))}t.stroke(),t.fillStyle=l.M,t.strokeStyle=l.M;for(var N=0;N<m.length;N++){var W=m[N],D=W.p11,F=W.p12,B=W.p21,H=W.p22,_=W.f,U=W.cigar,X=D.offsetPx-x[0],A=F.offsetPx-x[0],J=B.offsetPx-x[1],O=H.offsetPx-x[1],V=Math.abs(A-X),G=Math.abs(O-J),Y=Math.min(J,O),q=Math.max(J,O),Q=g,K=(Q-0)/2;if(!(V<=f&&G<=f)&&(0,a.doesIntersect2)(Y,q,-c,d.width+c)){var $=_.get("strand"),ee=-1===$?A:X,te=ee<(-1===$?X:A)?1:-1,ne=(J<O?1:-1)*$,ae=ee,ie=-1===$?O:J;if(null!==U&&void 0!==U&&U.length&&h)for(var oe=!1,re=0,se=0,le=Math.floor(r/U.length),fe=0;fe<U.length;fe+=2){var ce=fe*le+1,ue=+U[fe],de=U[fe+1];oe||(re=ae,se=ie);var ve=ue/b[0],he=ue/b[1];if("M"===de||"="===de||"X"===de?(ae+=ve*te,ie+=he*ne):"D"===de||"N"===de?ae+=ve*te:"I"===de&&(ie+=he*ne),!(Math.max(re,se,ae,ie)<0||Math.min(re,se,ae,ie)>p)){var ge=fe<U.length-2;Math.abs(ae-re)<=1&&Math.abs(ie-se)<=1&&ge?oe=!0:(oe=!1,t.fillStyle=l[oe&&ve>1||he>1?de:"M"],o(t,re,ae,0,ie,se,Q,K,v),n&&(n.fillStyle=s(ce),o(n,re,ae,0,ie,se,Q,K,v)))}}else o(t,X,A,0,O,J,Q,K,v)}}var pe=null===(u=e.clickMapCanvas)||void 0===u?void 0:u.getContext("2d");if(pe){pe.imageSmoothingEnabled=!1,pe.clearRect(0,0,p,g);for(var be=0;be<m.length;be++){var me=m[be],xe=be*M+1;pe.fillStyle=s(xe),i({cb:function(e){return e.fill()},feature:me,ctx:pe,drawCurves:v,offsets:x,oobLimit:c,viewWidth:d.width,hideTiny:!0,height:g})}}}function v(e){var t,n=e.clickId,o=e.mouseoverId,r=(0,a.getContainingView)(e),s=r.drawCurves,l=r.middleComparativeHeight,f=r.width,u=null===(t=e.mouseoverCanvas)||void 0===t?void 0:t.getContext("2d"),d=r.views.map((function(e){return e.offsetPx}));if(u){u.resetTransform(),u.scale(1,1),u.clearRect(0,0,f,l);var v=e.featMap[o||""];v&&(u.fillStyle="rgb(0,0,0,0.1)",i({cb:function(e){return e.fill()},feature:v,ctx:u,oobLimit:c,viewWidth:r.width,drawCurves:s,offsets:d,height:l}));var h=e.featMap[n||""];h&&(u.strokeStyle="rgb(0, 0, 0, 0.9)",i({cb:function(e){return e.stroke()},feature:h,ctx:u,oobLimit:c,viewWidth:r.width,drawCurves:s,offsets:d,height:l}))}}}}]);
//# sourceMappingURL=9898.e52003d0.chunk.js.map