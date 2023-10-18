"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[979],{10979:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var s=t(32723),r=t(34795),a=t(96234),o=t(96902),i=t(13655),c=t(2868),l=t(99782),u=t(80367),d=t(12221),h=t(80691),m=t(54417),f=t(6880),b=t(44536),y=t(35478),p=t(4782),x=t(27664),j=t(17867),Z=t(88315),v=t.n(Z),g=t(35388),k=t(29938);function S(e){var n=e.radioOption,t=e.assembly1,s=e.assembly2,r=e.fileLocation,a=e.bed1Location,o=e.bed2Location;if(".paf"===n)return{type:"PAFAdapter",pafLocation:r,queryAssembly:t,targetAssembly:s};if(".out"===n)return{type:"MashMapAdapter",outLocation:r,queryAssembly:t,targetAssembly:s};if(".delta"===n)return{type:"DeltaAdapter",deltaLocation:r,queryAssembly:t,targetAssembly:s};if(".chain"===n)return{type:"ChainAdapter",chainLocation:r,queryAssembly:t,targetAssembly:s};if(".anchors"===n)return{type:"MCScanAnchorsAdapter",mcscanAnchorsLocation:r,bed1Location:a,bed2Location:o,assemblyNames:[t,s]};if(".anchors.simple"===n)return{type:"MCScanSimpleAnchorsAdapter",mcscanSimpleAnchorsLocation:r,bed1Location:a,bed2Location:o,assemblyNames:[t,s]};throw new Error("Unknown type")}var w=(0,p.observer)((function(e){e.sessionTrackData;var n=e.assembly1,t=e.assembly2,s=e.setSessionTrackData,r=(0,o.useState)(),i=(0,a.Z)(r,2),c=i[0],h=i[1],b=(0,o.useState)(),y=(0,a.Z)(b,2),p=y[0],x=y[1],Z=(0,o.useState)(),w=(0,a.Z)(Z,2),A=w[0],P=w[1],L=(0,o.useState)(""),C=(0,a.Z)(L,2),T=C[0],M=C[1],E=(0,o.useState)(),F=(0,a.Z)(E,2),I=F[0],N=F[1],D=function(e){return e?e.uri||e.localPath||e.name:void 0}(A),q=T||(D?v().extname(function(e){return e.endsWith(".gz")?e.slice(0,-3):e}(D)):"");return(0,o.useEffect)((function(){try{if(A){var e=D?v().basename(D):"MyTrack",r="".concat(e,"-").concat(Date.now());N(void 0),s({trackId:r,name:e,assemblyNames:[t,n],type:"SyntenyTrack",adapter:S({radioOption:q,assembly1:n,assembly2:t,fileLocation:A,bed1Location:p,bed2Location:c})})}}catch(a){console.error(a),N(a)}}),[D,n,t,p,c,A,q,s]),(0,k.jsxs)(f.Z,{style:{padding:12},children:[I?(0,k.jsx)(j.ErrorMessage,{error:I}):null,(0,k.jsx)(g.Z,{style:{textAlign:"center"},children:"Add a .paf, .out (MashMap), .delta (Mummer), .chain, .anchors or .anchors.simple (MCScan) file to view in the dotplot. These file types can also be gzipped. The first assembly should be the query sequence (e.g. left column of the PAF) and the second assembly should be the target sequence (e.g. right column of the PAF)"}),(0,k.jsx)(l.Z,{value:q,onChange:function(e){return M(e.target.value)},children:(0,k.jsxs)(m.ZP,{container:!0,justifyContent:"center",children:[(0,k.jsx)(m.ZP,{item:!0,children:(0,k.jsx)(u.Z,{value:".paf",control:(0,k.jsx)(d.Z,{}),label:".paf"})}),(0,k.jsx)(m.ZP,{item:!0,children:(0,k.jsx)(u.Z,{value:".out",control:(0,k.jsx)(d.Z,{}),label:".out"})}),(0,k.jsx)(m.ZP,{item:!0,children:(0,k.jsx)(u.Z,{value:".delta",control:(0,k.jsx)(d.Z,{}),label:".delta"})}),(0,k.jsx)(m.ZP,{item:!0,children:(0,k.jsx)(u.Z,{value:".chain",control:(0,k.jsx)(d.Z,{}),label:".chain"})}),(0,k.jsx)(m.ZP,{item:!0,children:(0,k.jsx)(u.Z,{value:".anchors",control:(0,k.jsx)(d.Z,{}),label:".anchors"})}),(0,k.jsx)(m.ZP,{item:!0,children:(0,k.jsx)(u.Z,{value:".anchors.simple",control:(0,k.jsx)(d.Z,{}),label:".anchors.simple"})})]})}),(0,k.jsx)(m.ZP,{container:!0,justifyContent:"center",children:(0,k.jsx)(m.ZP,{item:!0,children:".anchors"===T||".anchors.simple"===T?(0,k.jsxs)("div",{children:[(0,k.jsxs)("div",{style:{margin:20},children:["Open the ",T," and .bed files for both genome assemblies from the MCScan (Python version) pipeline"," ",(0,k.jsx)("a",{href:"https://github.com/tanghaibao/jcvi/wiki/MCscan-(Python-version)",children:"(more info)"})]}),(0,k.jsxs)("div",{style:{display:"flex"},children:[(0,k.jsx)("div",{children:(0,k.jsx)(j.FileSelector,{name:".anchors file",description:"",location:A,setLocation:function(e){return P(e)}})}),(0,k.jsx)("div",{children:(0,k.jsx)(j.FileSelector,{name:"genome 1 .bed (left column of anchors file)",description:"",location:p,setLocation:function(e){return x(e)}})}),(0,k.jsx)("div",{children:(0,k.jsx)(j.FileSelector,{name:"genome 2 .bed (right column of anchors file)",description:"",location:c,setLocation:function(e){return h(e)}})})]})]}):(0,k.jsx)(j.FileSelector,{name:T?T+" location":"",description:"",location:A,setLocation:function(e){return P(e)}})})})]})})),A=t(68079),P=t(33266),L=t(15996),C=t(16151),T=t(99836);var M=(0,p.observer)((function(e){var n,t=e.model,s=e.assembly1,r=e.assembly2,i=e.setShowTrackId,c=(0,x.getSession)(t),l=c.tracks,u=void 0===l?[]:l,d=c.sessionTracks,h=void 0===d?[]:d,m=[].concat((0,A.Z)(u),(0,A.Z)(h)).filter((function(e){return function(e,n,t){var s=(0,T.readConfObject)(e,"assemblyNames");return s.includes(n)&&s.includes(t)&&e.type.includes("Synteny")}(e,r,s)})),b=(null===(n=m[0])||void 0===n?void 0:n.trackId)||"",y=(0,o.useState)(b),p=(0,a.Z)(y,2),Z=p[0],v=p[1];return(0,o.useEffect)((function(){v(b)}),[b]),(0,o.useEffect)((function(){i(Z)}),[Z,i]),(0,k.jsxs)(f.Z,{style:{padding:12},children:[(0,k.jsx)(g.Z,{paragraph:!0,children:'Select a track from the select box below, the track will be shown when you hit "Launch".'}),m.length?(0,k.jsx)(P.Z,{value:Z,onChange:function(e){return v(e.target.value)},children:m.map((function(e){return(0,k.jsx)(L.Z,{value:e.trackId,children:(0,C.getTrackName)(e,c)},e.trackId)}))}):(0,k.jsx)(j.ErrorMessage,{error:"No synteny tracks found for ".concat(s,",").concat(r)})]})})),E=(0,y.ZL)()((function(e){return{importFormContainer:{padding:e.spacing(4),margin:"0 auto"},assemblySelector:{width:"75%",margin:"0 auto"}}}));function F(e){var n=e.setSessionTrackData,t=e.setShowTrackId,s=e.sessionTrackData,r=e.assembly1,h=e.assembly2,m=e.model,f=(0,o.useState)("none"),b=(0,a.Z)(f,2),y=b[0],p=b[1];return(0,o.useEffect)((function(){"none"===y&&(n(void 0),t(void 0))}),[y,n,t]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(i.Z,{children:[(0,k.jsx)(c.Z,{id:"group-label",children:"(Optional) Select or add a synteny track"}),(0,k.jsxs)(l.Z,{row:!0,value:y,onChange:function(e){return p(e.target.value)},"aria-labelledby":"group-label",children:[(0,k.jsx)(u.Z,{value:"none",control:(0,k.jsx)(d.Z,{}),label:"None"}),(0,k.jsx)(u.Z,{value:"tracklist",control:(0,k.jsx)(d.Z,{}),label:"Existing track"}),(0,k.jsx)(u.Z,{value:"custom",control:(0,k.jsx)(d.Z,{}),label:"New track"})]})]}),"custom"===y?(0,k.jsx)(w,{setSessionTrackData:n,sessionTrackData:s,assembly2:h,assembly1:r}):null,"tracklist"===y?(0,k.jsx)(M,{model:m,assembly1:r,assembly2:h,setShowTrackId:t}):null]})}var I=(0,p.observer)((function(e){var n=e.model,t=E().classes,c=(0,x.getSession)(n),l=c.assemblyNames,u=(0,o.useState)(l[0]||""),d=(0,a.Z)(u,2),y=d[0],p=d[1],Z=(0,o.useState)(l[0]||""),v=(0,a.Z)(Z,2),g=v[0],S=v[1],w=(0,o.useState)(),A=(0,a.Z)(w,2),P=A[0],L=A[1],C=(0,o.useState)(),T=(0,a.Z)(C,2),M=T[0],I=T[1],N=(0,o.useState)(),D=(0,a.Z)(N,2),q=D[0],O=D[1];function _(){return _=(0,r.Z)((0,s.Z)().mark((function e(){var t,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(0,x.isSessionWithAddTracks)(c)){e.next=3;break}return e.abrupt("return");case 3:return L(void 0),t=c.assemblyManager,a=[g,y],e.t0=n,e.next=9,Promise.all(a.map(function(){var e=(0,r.Z)((0,s.Z)().mark((function e(n){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.waitForAssembly(n);case 2:if(r=e.sent){e.next=5;break}throw new Error("Assembly ".concat(n," failed to load"));case 5:return e.abrupt("return",{type:"LinearGenomeView",bpPerPx:1,offsetPx:0,hideHeader:!0,displayedRegions:r.regions});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 9:e.t1=e.sent,e.t0.setViews.call(e.t0,e.t1),n.views.forEach((function(e){return e.setWidth(n.width)})),M?(c.addTrackConf(M),n.toggleTrack(M.trackId)):q&&n.showTrack(q),e.next=19;break;case 15:e.prev=15,e.t2=e.catch(0),console.error(e.t2),L(e.t2);case 19:case"end":return e.stop()}}),e,null,[[0,15]])}))),_.apply(this,arguments)}var W=P;return(0,k.jsxs)(h.Z,{className:t.importFormContainer,children:[W?(0,k.jsx)(j.ErrorMessage,{error:W}):null,(0,k.jsx)(m.ZP,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",className:t.assemblySelector,children:(0,k.jsxs)(m.ZP,{item:!0,children:[(0,k.jsxs)(f.Z,{style:{padding:12},children:[(0,k.jsx)("p",{style:{textAlign:"center"},children:"Select assemblies for linear synteny view"}),(0,k.jsxs)(m.ZP,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",children:[(0,k.jsx)(m.ZP,{item:!0,children:(0,k.jsx)(j.AssemblySelector,{selected:g,onChange:function(e){return S(e)},session:c})}),(0,k.jsx)(m.ZP,{item:!0,children:(0,k.jsx)(j.AssemblySelector,{selected:y,onChange:function(e){return p(e)},session:c})}),(0,k.jsx)(m.ZP,{item:!0,children:(0,k.jsx)(i.Z,{children:(0,k.jsx)(b.Z,{onClick:function(){return _.apply(this,arguments)},variant:"contained",color:"primary",children:"Launch"})})})]})]}),(0,k.jsx)(F,{setShowTrackId:O,assembly2:y,assembly1:g,setSessionTrackData:I,sessionTrackData:M,model:n})]})})]})}))}}]);
//# sourceMappingURL=979.a72f1091.chunk.js.map