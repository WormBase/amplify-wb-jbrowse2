"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2515],{92515:function(e,t,o){o.r(t),o.d(t,{default:function(){return V}});var r=o(96902),n=o(4782),i=o(46186),s=o(97531),a=o(91188),l=o(68079),c=o(51632),d=o(88636),m=o(29938),u=(0,a.ZL)()({rulerLabel:{fontSize:"0.8rem",fontWeight:500,lineHeight:1.6,letterSpacing:"0.0075em"}});function x(e,t,o,r){if(e.flipped){var n=[r,o];o=n[0],r=n[1]}var i=e.bpToXY(o,t),s=e.bpToXY(r,t),a=Math.abs(r-o)/e.bpPerRadian>Math.PI?"1":"0";return["M"].concat((0,l.Z)(i),["A",t,t,"0",a,"1"],(0,l.Z)(s)).join(" ")}var h=(0,n.observer)((function(e){var t=e.model,o=e.slice,r=(0,d.Z)(),n=t.radiusPx+1,i=o.endRadians,a=o.startRadians,c=o.region,u=(0,s.polarToCartesian)(n,a),x=(0,s.polarToCartesian)(n,i),h=(i-a)*n,f=i-a>Math.PI?"1":"0",p=(i+a)/2,v="[".concat(Number(c.regions.length).toLocaleString(),"]");return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(g,{text:v,view:t,maxWidthPx:h,radians:p,radiusPx:n,title:"".concat(Number(c.regions.length).toLocaleString()," more regions"),color:r.palette.text.primary}),(0,m.jsx)("path",{d:["M"].concat((0,l.Z)(u),["A",n,n,"0",f,"1"],(0,l.Z)(x)).join(" "),stroke:r.palette.text.secondary,strokeWidth:2,strokeDasharray:"2,2",fill:"none"})]})})),g=(0,n.observer)((function(e){var t=e.view,o=e.text,r=e.maxWidthPx,n=e.radians,i=e.radiusPx,a=e.title,l=e.color,c=u().classes,d=(0,s.polarToCartesian)(i+5,n);return o?6.5*o.length<r?(0,m.jsxs)("text",{x:0,y:0,className:c.rulerLabel,textAnchor:"middle",dominantBaseline:"baseline",transform:"translate(".concat(d,") rotate(").concat((0,s.radToDeg)(n)+90,")"),style:{fill:l},children:[o,(0,m.jsx)("title",{children:a||o})]}):r>4?(0,s.radToDeg)(n+t.offsetRadians-Math.PI/2)>=180?(0,m.jsxs)("text",{x:0,y:0,className:c.rulerLabel,textAnchor:"start",dominantBaseline:"middle",transform:"translate(".concat(d,") rotate(").concat((0,s.radToDeg)(n),")"),style:{fill:l},children:[o,(0,m.jsx)("title",{children:a||o})]}):(0,m.jsxs)("text",{x:0,y:0,className:c.rulerLabel,textAnchor:"end",dominantBaseline:"middle",transform:"translate(".concat(d,") rotate(").concat((0,s.radToDeg)(n)+180,")"),style:{fill:l},children:[o,(0,m.jsx)("title",{children:a||o})]}):null:null})),f=(0,n.observer)((function(e){var t,o=e.model,r=e.slice,n=(0,d.Z)(),i=o.radiusPx,a=r.region,l=r.endRadians,u=r.startRadians,h=(l+u)/2,f=(l-u)*i,p=(0,s.getSession)(o).assemblyManager.get(r.region.assemblyName);if(p&&(t=p.getRefNameColor(a.refName)),t)try{t=(0,c.makeContrasting)(t,n.palette.background.paper)}catch(v){t=n.palette.text.primary}else t=n.palette.text.primary;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(g,{text:a.refName,view:o,maxWidthPx:f,radians:h,radiusPx:i,color:t}),(0,m.jsx)("path",{d:x(r,i+1,a.start,a.end),stroke:t,strokeWidth:2,fill:"none",children:(0,m.jsx)("title",{children:a.refName})})]})})),p=(0,n.observer)((function(e){var t=e.model,o=e.slice;return o.region.elided?(0,m.jsx)(h,{model:t,slice:o},(0,s.assembleLocString)(o.region.regions[0])):(0,m.jsx)(f,{model:t,slice:o},(0,s.assembleLocString)(o.region))})),v=o(25322),j=o(30156),b=o(96050),k=o(84533),Z=o(56638),w=o(22514),y=o(61210),z=o(23642),C=(0,a.ZL)()({iconButton:{padding:"4px",margin:"0 2px 0 2px"},controls:{overflow:"hidden",whiteSpace:"nowrap",position:"absolute",boxSizing:"border-box",borderRight:"1px solid #a2a2a2",borderBottom:"1px solid #a2a2a2",left:0,top:0}}),N=(0,n.observer)((function(e){var t=e.model,o=C().classes;return(0,m.jsxs)("div",{className:o.controls,children:[(0,m.jsx)(v.Z,{onClick:t.zoomOutButton,className:o.iconButton,title:t.lockedFitToWindow?"unlock to zoom out":"zoom out",disabled:t.atMaxBpPerPx||t.lockedFitToWindow,children:(0,m.jsx)(j.Z,{})}),(0,m.jsx)(v.Z,{onClick:t.zoomInButton,className:o.iconButton,title:"zoom in",disabled:t.atMinBpPerPx,children:(0,m.jsx)(b.Z,{})}),(0,m.jsx)(v.Z,{onClick:t.rotateCounterClockwiseButton,className:o.iconButton,title:"rotate counter-clockwise",children:(0,m.jsx)(k.Z,{})}),(0,m.jsx)(v.Z,{onClick:t.rotateClockwiseButton,className:o.iconButton,title:"rotate clockwise",children:(0,m.jsx)(Z.Z,{})}),(0,m.jsx)(v.Z,{onClick:t.toggleFitToWindowLock,className:o.iconButton,title:t.lockedFitToWindow?"locked model to window size":"unlocked model to zoom further",disabled:t.tooSmallToLock,children:t.lockedFitToWindow?(0,m.jsx)(y.Z,{}):(0,m.jsx)(w.Z,{})}),t.hideTrackSelectorButton?null:(0,m.jsx)(v.Z,{onClick:t.activateTrackSelector,title:"Open track selector","data-testid":"circular_track_select",children:(0,m.jsx)(z.GD,{})})]})})),L=o(96234),P=o(34592),S=o(54417),M=o(44536),R=(0,a.ZL)()((function(e){return{importFormContainer:{padding:e.spacing(6)}}})),B=(0,n.observer)((function(e){var t=e.model,o=R().classes,n=(0,s.getSession)(t),a=t.error,l=n.assemblyNames,c=n.assemblyManager,d=(0,r.useState)(l[0]),u=(0,L.Z)(d,2),x=u[0],h=u[1],g=c.get(x),f=l.length?null===g||void 0===g?void 0:g.error:"No configured assemblies",p=(null===g||void 0===g?void 0:g.regions)||[],v=f||a;return(0,m.jsxs)(P.Z,{className:o.importFormContainer,children:[v?(0,m.jsx)(S.ZP,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",children:(0,m.jsx)(S.ZP,{item:!0,children:(0,m.jsx)(i.ErrorMessage,{error:v})})}):null,(0,m.jsxs)(S.ZP,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",children:[(0,m.jsx)(S.ZP,{item:!0,children:(0,m.jsx)(i.AssemblySelector,{onChange:function(e){t.setError(void 0),h(e)},session:n,selected:x})}),(0,m.jsx)(S.ZP,{item:!0,children:(0,m.jsx)(M.Z,{disabled:!(null!==p&&void 0!==p&&p.length),onClick:function(){t.setError(void 0),t.setDisplayedRegions(p)},variant:"contained",color:"primary",children:p.length||v?"Open":"Loading..."})})]})]})})),T=(0,a.ZL)()((function(e){return{root:{position:"relative",marginBottom:e.spacing(1),overflow:"hidden"},scroller:{overflow:"auto"},sliceRoot:{background:"none",boxSizing:"content-box",display:"block"}}})),W=(0,n.observer)((function(e){var t=e.model;return(0,m.jsxs)(m.Fragment,{children:[t.staticSlices.map((function(e){return(0,m.jsx)(p,{model:t,slice:e},(0,s.assembleLocString)(e.region.elided?e.region.regions[0]:e.region))})),t.tracks.map((function(e){var o=e.displays[0];return(0,m.jsx)(o.RenderingComponent,{display:o,view:t},o.id)}))]})})),F=(0,n.observer)((function(e){var t=e.model,o=!!t.displayedRegions.length&&!!t.figureWidth&&!!t.figureHeight&&t.initialized,r=!o&&!t.disableImportForm,n=o&&!r;return(0,m.jsx)(m.Fragment,{children:r||t.error?(0,m.jsx)(B,{model:t}):n?(0,m.jsx)(H,{model:t}):null})})),H=(0,n.observer)((function(e){var t=e.model,o=t.width,r=t.height,n=t.id,s=t.offsetRadians,a=t.centerXY,l=t.figureWidth,c=t.figureHeight,d=t.hideVerticalResizeHandle,u=T().classes;return(0,m.jsxs)("div",{className:u.root,style:{width:o,height:r},"data-testid":n,children:[(0,m.jsx)("div",{className:u.scroller,style:{width:o,height:r},children:(0,m.jsx)("div",{style:{transform:["rotate(".concat(s,"rad)")].join(" "),transition:"transform 0.5s",transformOrigin:a.map((function(e){return"".concat(e,"px")})).join(" ")},children:(0,m.jsx)("svg",{style:{position:"absolute",left:0,top:0},className:u.sliceRoot,width:l+"px",height:c+"px",version:"1.1",children:(0,m.jsx)("g",{transform:"translate(".concat(a,")"),children:(0,m.jsx)(W,{model:t})})})})}),(0,m.jsx)(N,{model:t}),d?null:(0,m.jsx)(i.ResizeHandle,{onDrag:t.resizeHeight,style:{height:3,position:"absolute",bottom:0,left:0,background:"#ccc",boxSizing:"border-box",borderTop:"1px solid #fafafa"}})]})})),V=F},61210:function(e,t,o){var r=o(71600);t.Z=void 0;var n=r(o(7152)),i=o(29938),s=(0,n.default)((0,i.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");t.Z=s},22514:function(e,t,o){var r=o(71600);t.Z=void 0;var n=r(o(7152)),i=o(29938),s=(0,n.default)((0,i.jsx)("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"}),"LockOpen");t.Z=s},84533:function(e,t,o){var r=o(71600);t.Z=void 0;var n=r(o(7152)),i=o(29938),s=(0,n.default)((0,i.jsx)("path",{d:"M7.11 8.53 5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"}),"RotateLeft");t.Z=s},56638:function(e,t,o){var r=o(71600);t.Z=void 0;var n=r(o(7152)),i=o(29938),s=(0,n.default)((0,i.jsx)("path",{d:"M15.55 5.55 11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42 1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"}),"RotateRight");t.Z=s}}]);
//# sourceMappingURL=2515.34928720.chunk.js.map