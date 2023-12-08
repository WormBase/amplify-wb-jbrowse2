"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2286],{62286:(e,t,o)=>{o.r(t),o.d(t,{default:()=>M});var n=o(41867),a=o(47192),s=o(3762),i=o(35421),r=o(90872),l=o(71939),c=o(14564),d=o(71579),f=o(80838);const u=(0,a.ZL)()((e=>{return{tooltip:{position:"absolute",pointerEvents:"none",backgroundColor:(0,l.Fq)(e.palette.grey[700],.9),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(12),lineHeight:"".concat((t=1.4,Math.round(1e5*t)/1e5),"em"),maxWidth:300,wordWrap:"break-word"}};var t})),h=(0,s.observer)((function(e){let{x:t,y:o,title:a}=e;const[s,r]=(0,n.useState)(0),[l,h]=(0,n.useState)(null),{classes:g}=u(),v=(0,n.useMemo)((()=>({getBoundingClientRect:()=>({top:o,left:t+s/2,bottom:o,right:t,width:0,height:0,x:t,y:o,toJSON(){}})})),[t,o,s]),{styles:p,attributes:b}=(0,d.D)(v,l);return a?(0,f.jsx)(c.h,{children:(0,f.jsx)("div",{ref:e=>{r((null===e||void 0===e?void 0:e.getBoundingClientRect().width)||0),h(e)},className:g.tooltip,style:{...p.popper,zIndex:1e5},...b.popper,children:(0,f.jsx)(i.SanitizedHTML,{html:a})})}):null}));var g=o(46997);const v=(0,s.observer)((function(e){let{model:t}=e;const o=(0,r.getContainingView)(t),a=o.middleComparativeHeight,s=o.width,[i,l]=(0,n.useState)(""),[c,d]=(0,n.useState)(),[u,v]=(0,n.useState)(),p=(0,n.useCallback)((e=>t.setMouseoverCanvasRef(e)),[t,a,s]),b=(0,n.useCallback)((e=>t.setMainCanvasRef(e)),[t,a,s]),m=(0,n.useCallback)((e=>t.setClickMapCanvasRef(e)),[t,a,s]),x=(0,n.useCallback)((e=>t.setCigarClickMapCanvasRef(e)),[t,a,s]);return(0,f.jsxs)("div",{style:{position:"relative"},children:[(0,f.jsx)("canvas",{ref:p,width:s,height:a,style:{width:s,height:a,position:"absolute",pointerEvents:"none"}}),(0,f.jsx)("canvas",{ref:b,onMouseMove:e=>{var o;const n=t.clickMapCanvas,a=t.cigarClickMapCanvas;if(!n||!a)return;const s=n.getBoundingClientRect(),i=n.getContext("2d"),c=a.getContext("2d");if(!i||!c)return;const{clientX:f,clientY:u}=e,h=f-s.left,p=u-s.top;d(f),v(u);const[b,m,x]=i.getImageData(h,p,1,1).data,[M,C,w]=c.getImageData(h,p,1,1).data,y=Math.floor(g.EU/t.numFeats),k=(0,g.zv)(b,m,x,y);if(t.setMouseoverId(null===(o=t.featPositions[k])||void 0===o?void 0:o.f.id()),-1===k)l("");else if(t.featPositions[k]){const{f:e,cigar:o}=t.featPositions[k],n=e.toJSON(),a=n.mate,s=Math.floor(g.EU/o.length),i=(0,g.zv)(M,C,w,s),c=n.end-n.start,d=a.end-a.start,f=n.identity,u=n.name,h=a.name,v=["Loc1: ".concat((0,r.assembleLocString)(n)),"Loc2: ".concat((0,r.assembleLocString)(a)),"Inverted: ".concat(-1===n.strand),"Query len: ".concat(c),"Target len: ".concat(d)];f&&v.push("Identity: ".concat(f)),o[i]&&v.push("CIGAR operator: ".concat(o[i]).concat(o[i+1])),u&&h&&v.push("Name 1: ".concat(u),"Name 2: ".concat(h)),l(v.join("<br/>"))}},onMouseLeave:()=>t.setMouseoverId(void 0),onClick:e=>{const o=t.clickMapCanvas,n=t.cigarClickMapCanvas;if(!o||!n)return;const a=o.getBoundingClientRect(),s=o.getContext("2d"),i=n.getContext("2d");if(!s||!i)return;const l=e.clientX-a.left,c=e.clientY-a.top,[d,f,u]=s.getImageData(l,c,1,1).data,h=Math.floor(g.EU/t.numFeats),v=(0,g.zv)(d,f,u,h),p=t.featPositions[v];if(!p)return;t.setClickId(p.f.id());const b=(0,r.getSession)(t);(0,r.isSessionModelWithWidgets)(b)&&b.showWidget(b.addWidget("SyntenyFeatureWidget","syntenyFeature",{featureData:{feature1:p.f.toJSON(),feature2:p.f.get("mate")}}))},"data-testid":"synteny_canvas",style:{width:s,height:a,position:"absolute"},width:1*s,height:1*a}),(0,f.jsx)("canvas",{ref:m,style:{imageRendering:"pixelated",pointerEvents:"none",visibility:"hidden",position:"absolute"},width:s,height:a}),(0,f.jsx)("canvas",{ref:x,style:{imageRendering:"pixelated",pointerEvents:"none",visibility:"hidden",position:"absolute"},width:s,height:a}),t.mouseoverId&&i&&c&&u?(0,f.jsx)(h,{x:c,y:u,title:i}):null]})})),p=(0,a.ZL)()((e=>{const t=e.palette.action.disabledBackground;return{loading:{paddingLeft:"0.6em",backgroundColor:e.palette.background.default,backgroundImage:"repeating-linear-gradient(45deg, transparent, transparent 5px, ".concat(t," 5px, ").concat(t," 10px)"),textAlign:"center"},blockMessage:{background:"#f1f1f1",padding:10},blockError:{background:"#f1f1f1",padding:10,color:"red"}}}));function b(){const[e,t]=(0,n.useState)(!1),{classes:o}=p();return(0,n.useEffect)((()=>{const e=setTimeout((()=>t(!0)),300);return()=>clearTimeout(e)})),e?(0,f.jsx)("div",{className:o.loading,children:(0,f.jsx)(i.LoadingEllipses,{})}):null}function m(e){let{messageText:t}=e;const{classes:o}=p();return(0,f.jsx)("div",{className:o.blockMessage,children:t})}function x(e){let{error:t}=e;const{classes:o}=p();return(0,f.jsx)("div",{className:o.blockError,children:"".concat(t)})}const M=(0,s.observer)((function(e){let{model:t}=e;return t.error?(0,f.jsx)(x,{error:t.error}):t.message?(0,f.jsx)(m,{messageText:t.message}):t.features?(0,f.jsx)(v,{model:t}):(0,f.jsx)(b,{})}))},46997:(e,t,o)=>{o.d(t,{EU:()=>i,z8:()=>h,Bf:()=>u,zv:()=>f});var n=o(90872);function a(e){let{feature:t,ctx:o,offsets:a,cb:i,height:r,drawCurves:l,oobLimit:c,viewWidth:d,hideTiny:f}=e;const{p11:u,p12:h,p21:g,p22:v}=t,p=u.offsetPx-a[0],b=h.offsetPx-a[0],m=g.offsetPx-a[1],x=v.offsetPx-a[1],M=Math.abs(b-p),C=Math.abs(x-m),w=r,y=(w-0)/2,k=Math.min(m,x),P=Math.max(m,x);(0,n.doesIntersect2)(k,P,-c,d+c)&&(M<=1&&C<=1?f||(o.beginPath(),o.moveTo(p,0),l?o.bezierCurveTo(p,y,m,y,m,w):o.lineTo(m,w),o.stroke()):(s(o,p,b,0,x,m,w,y,l),i(o)))}function s(e,t,o,n,a,s,i,r,l){l?function(e,t,o,n,a,s,i,r){const l=Math.abs(t-o),c=Math.abs(t-o);if(l<5&&c<5&&o<t&&Math.abs(t-a)>100){const e=t;t=o,o=e}e.beginPath(),e.moveTo(t,n),e.lineTo(o,n),e.bezierCurveTo(o,r,a,r,a,i),e.lineTo(s,i),e.bezierCurveTo(s,r,t,r,t,n),e.closePath(),e.fill()}(e,t,o,n,a,s,i,r):function(e,t,o,n,a,s,i){e.beginPath(),e.moveTo(t,n),e.lineTo(o,n),e.lineTo(a,i),e.lineTo(s,i),e.closePath(),e.fill()}(e,t,o,n,a,s,i)}const i=16581375;function r(e){const t=Math.floor(e/65025)%255,o=Math.floor(e/255)%255,n=e%255;return"rgb(".concat(t,",").concat(o,",").concat(n,")")}const l={I:"#ff03",N:"#0a03",D:"#00f3",X:"brown",M:"#f003","=":"#f003"},c=3,d=1600;function f(e,t,o,n){return Math.floor((255*e*255+255*t+o-1)/n)}function u(e,t,o){var f;const u=(0,n.getContainingView)(e),h=u.drawCurves,g=u.drawCIGAR,v=u.middleComparativeHeight,p=u.width,b=u.views.map((e=>e.bpPerPx));o&&(o.imageSmoothingEnabled=!1),t.beginPath();const m=e.featPositions,x=u.views.map((e=>e.offsetPx)),M=Math.floor(i/m.length);t.fillStyle=l.M,t.strokeStyle=l.M;for(const{p11:n,p12:a,p21:s,p22:i}of m){const e=n.offsetPx-x[0],o=a.offsetPx-x[0],r=s.offsetPx-x[1],l=i.offsetPx-x[1],f=Math.abs(o-e),u=Math.abs(l-r),g=0,b=v,m=(b-g)/2;f<=c&&u<=c&&r<p+d&&r>-d&&(t.moveTo(e,g),h?t.bezierCurveTo(e,m,r,m,r,b):t.lineTo(r,b))}t.stroke(),t.fillStyle=l.M,t.strokeStyle=l.M;for(const{p11:a,p12:w,p21:y,p22:k,f:P,cigar:S}of m){const e=a.offsetPx-x[0],f=w.offsetPx-x[0],m=y.offsetPx-x[1],M=k.offsetPx-x[1],C=Math.abs(f-e),T=Math.abs(M-m),j=Math.min(m,M),I=Math.max(m,M),R=0,E=v,L=(E-R)/2;if(!(C<=c&&T<=c)&&(0,n.doesIntersect2)(j,I,-d,u.width+d)){const n=P.get("strand"),a=-1===n?f:e,c=a<(-1===n?e:f)?1:-1,d=(m<M?1:-1)*n;let u=a,v=-1===n?M:m;if(null!==S&&void 0!==S&&S.length&&g){let e=!1,n=0,a=0;const f=Math.floor(i/S.length);for(let i=0;i<S.length;i+=2){const g=i*f+1,m=+S[i],x=S[i+1];e||(n=u,a=v);const M=m/b[0],C=m/b[1];if("M"===x||"="===x||"X"===x?(u+=M*c,v+=C*d):"D"===x||"N"===x?u+=M*c:"I"===x&&(v+=C*d),!(Math.max(n,a,u,v)<0||Math.min(n,a,u,v)>p)){const c=i<S.length-2;Math.abs(u-n)<=1&&Math.abs(v-a)<=1&&c?e=!0:(e=!1,t.fillStyle=l[e&&M>1||C>1?x:"M"],s(t,n,u,R,v,a,E,L,h),o&&(o.fillStyle=r(g),s(o,n,u,R,v,a,E,L,h)))}}}else s(t,e,f,R,M,m,E,L,h)}}const C=null===(f=e.clickMapCanvas)||void 0===f?void 0:f.getContext("2d");if(C){C.imageSmoothingEnabled=!1,C.clearRect(0,0,p,v);for(let e=0;e<m.length;e++){const t=m[e],o=e*M+1;C.fillStyle=r(o),a({cb:e=>e.fill(),feature:t,ctx:C,drawCurves:h,offsets:x,oobLimit:d,viewWidth:u.width,hideTiny:!0,height:v})}}}function h(e){var t;const{clickId:o,mouseoverId:s}=e,i=(0,n.getContainingView)(e),r=i.drawCurves,l=i.middleComparativeHeight,c=i.width,f=null===(t=e.mouseoverCanvas)||void 0===t?void 0:t.getContext("2d"),u=i.views.map((e=>e.offsetPx));if(!f)return;f.resetTransform(),f.scale(1,1),f.clearRect(0,0,c,l);const h=e.featMap[s||""];h&&(f.fillStyle="rgb(0,0,0,0.1)",a({cb:e=>e.fill(),feature:h,ctx:f,oobLimit:d,viewWidth:i.width,drawCurves:r,offsets:u,height:l}));const g=e.featMap[o||""];g&&(f.strokeStyle="rgb(0, 0, 0, 0.9)",a({cb:e=>e.stroke(),feature:g,ctx:f,oobLimit:d,viewWidth:i.width,drawCurves:r,offsets:u,height:l}))}}}]);
//# sourceMappingURL=2286.023b1766.chunk.js.map