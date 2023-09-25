"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[7245],{57245:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var s=n(32723),r=n(34795),a=n(96234),o=n(30969),i=n(87535),c=n(33275),l=n(97517),u=n(49884),d=n(33248),h=n(1059),m=n(3994),f=n(46672),b=n(72097),y=n(53276),p=n(90550),x=n(81073),j=n(59767),Z=n(22523),v=n.n(Z),g=n(33359),k=n(37574);function S(e){var t=e.radioOption,n=e.assembly1,s=e.assembly2,r=e.fileLocation,a=e.bed1Location,o=e.bed2Location;if(".paf"===t)return{type:"PAFAdapter",pafLocation:r,queryAssembly:n,targetAssembly:s};if(".out"===t)return{type:"MashMapAdapter",outLocation:r,queryAssembly:n,targetAssembly:s};if(".delta"===t)return{type:"DeltaAdapter",deltaLocation:r,queryAssembly:n,targetAssembly:s};if(".chain"===t)return{type:"ChainAdapter",chainLocation:r,queryAssembly:n,targetAssembly:s};if(".anchors"===t)return{type:"MCScanAnchorsAdapter",mcscanAnchorsLocation:r,bed1Location:a,bed2Location:o,assemblyNames:[n,s]};if(".anchors.simple"===t)return{type:"MCScanSimpleAnchorsAdapter",mcscanSimpleAnchorsLocation:r,bed1Location:a,bed2Location:o,assemblyNames:[n,s]};throw new Error("Unknown type")}var w=(0,p.observer)((function(e){var t,n=e.assembly1,s=e.assembly2,r=e.setSessionTrackData,i=(0,o.useState)(),c=(0,a.Z)(i,2),h=c[0],b=c[1],y=(0,o.useState)(),p=(0,a.Z)(y,2),x=p[0],Z=p[1],w=(0,o.useState)(),A=(0,a.Z)(w,2),P=A[0],L=A[1],C=(0,o.useState)(""),T=(0,a.Z)(C,2),M=T[0],E=T[1],F=(0,o.useState)(),I=(0,a.Z)(F,2),N=I[0],D=I[1],q=(t=P)?t.uri||t.localPath||t.name:void 0,O=M||(q?v().extname(function(e){return e.endsWith(".gz")?e.slice(0,-3):e}(q)):"");return(0,o.useEffect)((function(){try{if(P){var e=q?v().basename(q):"MyTrack",t="".concat(e,"-").concat(Date.now());D(void 0),r({trackId:t,name:e,assemblyNames:[s,n],type:"SyntenyTrack",adapter:S({radioOption:O,assembly1:n,assembly2:s,fileLocation:P,bed1Location:x,bed2Location:h})})}}catch(a){console.error(a),D(a)}}),[q,n,s,x,h,P,O,r]),(0,k.jsxs)(f.Z,{style:{padding:12},children:[N?(0,k.jsx)(j.ErrorMessage,{error:N}):null,(0,k.jsx)(g.Z,{style:{textAlign:"center"},children:"Add a .paf, .out (MashMap), .delta (Mummer), .chain, .anchors or .anchors.simple (MCScan) file to view in the dotplot. These file types can also be gzipped. The first assembly should be the query sequence (e.g. left column of the PAF) and the second assembly should be the target sequence (e.g. right column of the PAF)"}),(0,k.jsx)(l.Z,{value:O,onChange:function(e){return E(e.target.value)},children:(0,k.jsxs)(m.ZP,{container:!0,justifyContent:"center",children:[(0,k.jsx)(m.ZP,{item:!0,children:(0,k.jsx)(u.Z,{value:".paf",control:(0,k.jsx)(d.Z,{}),label:".paf"})}),(0,k.jsx)(m.ZP,{item:!0,children:(0,k.jsx)(u.Z,{value:".out",control:(0,k.jsx)(d.Z,{}),label:".out"})}),(0,k.jsx)(m.ZP,{item:!0,children:(0,k.jsx)(u.Z,{value:".delta",control:(0,k.jsx)(d.Z,{}),label:".delta"})}),(0,k.jsx)(m.ZP,{item:!0,children:(0,k.jsx)(u.Z,{value:".chain",control:(0,k.jsx)(d.Z,{}),label:".chain"})}),(0,k.jsx)(m.ZP,{item:!0,children:(0,k.jsx)(u.Z,{value:".anchors",control:(0,k.jsx)(d.Z,{}),label:".anchors"})}),(0,k.jsx)(m.ZP,{item:!0,children:(0,k.jsx)(u.Z,{value:".anchors.simple",control:(0,k.jsx)(d.Z,{}),label:".anchors.simple"})})]})}),(0,k.jsx)(m.ZP,{container:!0,justifyContent:"center",children:(0,k.jsx)(m.ZP,{item:!0,children:".anchors"===M||".anchors.simple"===M?(0,k.jsxs)("div",{children:[(0,k.jsxs)("div",{style:{margin:20},children:["Open the ",M," and .bed files for both genome assemblies from the MCScan (Python version) pipeline"," ",(0,k.jsx)("a",{href:"https://github.com/tanghaibao/jcvi/wiki/MCscan-(Python-version)",children:"(more info)"})]}),(0,k.jsxs)("div",{style:{display:"flex"},children:[(0,k.jsx)("div",{children:(0,k.jsx)(j.FileSelector,{name:".anchors file",description:"",location:P,setLocation:function(e){return L(e)}})}),(0,k.jsx)("div",{children:(0,k.jsx)(j.FileSelector,{name:"genome 1 .bed (left column of anchors file)",description:"",location:x,setLocation:function(e){return Z(e)}})}),(0,k.jsx)("div",{children:(0,k.jsx)(j.FileSelector,{name:"genome 2 .bed (right column of anchors file)",description:"",location:h,setLocation:function(e){return b(e)}})})]})]}):(0,k.jsx)(j.FileSelector,{name:M?M+" location":"",description:"",location:P,setLocation:function(e){return L(e)}})})})]})})),A=n(68079),P=n(70983),L=n(2689),C=n(97891),T=n(9077);var M=(0,p.observer)((function(e){var t,n=e.model,s=e.assembly1,r=e.assembly2,i=e.setShowTrackId,c=(0,x.getSession)(n),l=c.tracks,u=void 0===l?[]:l,d=c.sessionTracks,h=void 0===d?[]:d,m=[].concat((0,A.Z)(u),(0,A.Z)(h)).filter((function(e){return function(e,t,n){var s=(0,T.readConfObject)(e,"assemblyNames");return s.includes(t)&&s.includes(n)&&e.type.includes("Synteny")}(e,r,s)})),b=(null===(t=m[0])||void 0===t?void 0:t.trackId)||"",y=(0,o.useState)(b),p=(0,a.Z)(y,2),Z=p[0],v=p[1];return(0,o.useEffect)((function(){v(b)}),[b]),(0,o.useEffect)((function(){i(Z)}),[Z,i]),(0,k.jsxs)(f.Z,{style:{padding:12},children:[(0,k.jsx)(g.Z,{paragraph:!0,children:'Select a track from the select box below, the track will be shown when you hit "Launch".'}),m.length?(0,k.jsx)(P.Z,{value:Z,onChange:function(e){return v(e.target.value)},children:m.map((function(e){return(0,k.jsx)(L.Z,{value:e.trackId,children:(0,C.getTrackName)(e,c)},e.trackId)}))}):(0,k.jsx)(j.ErrorMessage,{error:"No synteny tracks found for ".concat(s,",").concat(r)})]})})),E=(0,y.ZL)()((function(e){return{importFormContainer:{padding:e.spacing(4),margin:"0 auto"},assemblySelector:{width:"75%",margin:"0 auto"}}}));function F(e){var t=e.setSessionTrackData,n=e.setShowTrackId,s=e.sessionTrackData,r=e.assembly1,h=e.assembly2,m=e.model,f=(0,o.useState)("none"),b=(0,a.Z)(f,2),y=b[0],p=b[1];return(0,o.useEffect)((function(){"none"===y&&(t(void 0),n(void 0))}),[y,t,n]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(i.Z,{children:[(0,k.jsx)(c.Z,{id:"group-label",children:"(Optional) Select or add a synteny track"}),(0,k.jsxs)(l.Z,{row:!0,value:y,onChange:function(e){return p(e.target.value)},"aria-labelledby":"group-label",children:[(0,k.jsx)(u.Z,{value:"none",control:(0,k.jsx)(d.Z,{}),label:"None"}),(0,k.jsx)(u.Z,{value:"tracklist",control:(0,k.jsx)(d.Z,{}),label:"Existing track"}),(0,k.jsx)(u.Z,{value:"custom",control:(0,k.jsx)(d.Z,{}),label:"New track"})]})]}),"custom"===y?(0,k.jsx)(w,{setSessionTrackData:t,sessionTrackData:s,assembly2:h,assembly1:r}):null,"tracklist"===y?(0,k.jsx)(M,{model:m,assembly1:r,assembly2:h,setShowTrackId:n}):null]})}var I=(0,p.observer)((function(e){var t=e.model,n=E().classes,c=(0,x.getSession)(t),l=c.assemblyNames,u=(0,o.useState)(l[0]||""),d=(0,a.Z)(u,2),y=d[0],p=d[1],Z=(0,o.useState)(l[0]||""),v=(0,a.Z)(Z,2),g=v[0],S=v[1],w=(0,o.useState)(),A=(0,a.Z)(w,2),P=A[0],L=A[1],C=(0,o.useState)(),T=(0,a.Z)(C,2),M=T[0],I=T[1],N=(0,o.useState)(),D=(0,a.Z)(N,2),q=D[0],O=D[1];function _(){return _=(0,r.Z)((0,s.Z)().mark((function e(){var n,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(0,x.isSessionWithAddTracks)(c)){e.next=3;break}return e.abrupt("return");case 3:return L(void 0),n=c.assemblyManager,a=[g,y],e.t0=t,e.next=9,Promise.all(a.map(function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.waitForAssembly(t);case 2:if(r=e.sent){e.next=5;break}throw new Error("Assembly ".concat(t," failed to load"));case 5:return e.abrupt("return",{type:"LinearGenomeView",bpPerPx:1,offsetPx:0,hideHeader:!0,displayedRegions:r.regions});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 9:e.t1=e.sent,e.t0.setViews.call(e.t0,e.t1),t.views.forEach((function(e){return e.setWidth(t.width)})),M?(c.addTrackConf(M),t.toggleTrack(M.trackId)):q&&t.showTrack(q),e.next=19;break;case 15:e.prev=15,e.t2=e.catch(0),console.error(e.t2),L(e.t2);case 19:case"end":return e.stop()}}),e,null,[[0,15]])}))),_.apply(this,arguments)}var W=P;return(0,k.jsxs)(h.Z,{className:n.importFormContainer,children:[W?(0,k.jsx)(j.ErrorMessage,{error:W}):null,(0,k.jsx)(m.ZP,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",className:n.assemblySelector,children:(0,k.jsxs)(m.ZP,{item:!0,children:[(0,k.jsxs)(f.Z,{style:{padding:12},children:[(0,k.jsx)("p",{style:{textAlign:"center"},children:"Select assemblies for linear synteny view"}),(0,k.jsxs)(m.ZP,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",children:[(0,k.jsx)(m.ZP,{item:!0,children:(0,k.jsx)(j.AssemblySelector,{selected:g,onChange:function(e){return S(e)},session:c})}),(0,k.jsx)(m.ZP,{item:!0,children:(0,k.jsx)(j.AssemblySelector,{selected:y,onChange:function(e){return p(e)},session:c})}),(0,k.jsx)(m.ZP,{item:!0,children:(0,k.jsx)(i.Z,{children:(0,k.jsx)(b.Z,{onClick:function(){return _.apply(this,arguments)},variant:"contained",color:"primary",children:"Launch"})})})]})]}),(0,k.jsx)(F,{setShowTrackId:O,assembly2:y,assembly1:g,setSessionTrackData:I,sessionTrackData:M,model:t})]})})]})})),N=I}}]);
//# sourceMappingURL=7245.d92965a3.chunk.js.map