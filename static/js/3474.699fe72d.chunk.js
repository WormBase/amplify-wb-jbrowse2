"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[3474],{91392:(e,t,n)=>{n.d(t,{KM:()=>h,en:()=>f,kb:()=>y,se:()=>p});var l=n(7552),r=n(75785),a=n(68446),o=n(36422),s=n(99546),c=n(95095),i=n(48231),m=n(90257);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)({}).hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},d.apply(null,arguments)}const u=(0,r.n9)()((()=>({vtext:{gridColumn:"1/2",gridRow:"1/2",pointerEvents:"none",userSelect:"none"},htext:{gridColumn:"2/2",gridRow:"2/2",pointerEvents:"none",userSelect:"none"}}))),h=(0,a.observer)((function({model:e}){const{viewWidth:t,borderY:n}=e,{classes:r}=u();return l.createElement("svg",{width:t,height:n,className:r.htext},l.createElement(p,{model:e}))})),p=(0,a.observer)((function({model:e}){const{viewWidth:t,borderX:n,borderY:r,hview:a,htextRotation:u,hticks:h}=e,{offsetPx:p,width:f,dynamicBlocks:y,bpPerPx:E}=a,b=y.contentBlocks,g=(0,m.rQ)(b,t,p),v=(0,i.A)(),k={...(0,o.getSnapshot)(a),width:f,staticBlocks:a.staticBlocks},w=h.map((e=>[e,(0,c.eB)({refName:e.refName,coord:e.base,self:k})?.offsetPx])).filter((e=>void 0!==e[1])).map((e=>[e[0],e[1]-p]));return l.createElement(l.Fragment,null,b.filter((e=>!g.has(e.key))).map((e=>{const t=e.offsetPx,n=Math.floor(t-a.offsetPx);return l.createElement("text",d({transform:`rotate(${u},${n},0)`,key:JSON.stringify(e),x:n,y:1,fontSize:11,dominantBaseline:"hanging",textAnchor:"end"},(0,s.getFillProps)(v.palette.text.primary)),e.refName)})),w.map((([e,t])=>t>0&&t<f?l.createElement("line",d({key:`line-${JSON.stringify(e)}`,x1:t,x2:t,y1:0,y2:"major"===e.type?6:4,strokeWidth:1},(0,s.getFillProps)(v.palette.text.primary))):null)),w.filter((e=>"major"===e[0].type)).map((([e,t])=>t>10&&t<f?l.createElement("text",d({x:t-7,y:0,transform:`rotate(${u},${t},0)`,key:`text-${JSON.stringify(e)}`,fontSize:11,dominantBaseline:"middle",textAnchor:"end"},(0,s.getFillProps)(v.palette.text.primary)),(0,s.getTickDisplayStr)(e.base+1,E)):null)),l.createElement("text",d({y:r-12,x:(t-n)/2,textAnchor:"middle",fontSize:11,dominantBaseline:"hanging"},(0,s.getFillProps)(v.palette.text.primary)),a.assemblyNames.join(",")))})),f=(0,a.observer)((function({model:e}){const{borderX:t,viewHeight:n}=e,{classes:r}=u();return l.createElement("svg",{className:r.vtext,width:t,height:n},l.createElement(y,{model:e}))})),y=(0,a.observer)((function({model:e}){const{viewHeight:t,borderX:n,borderY:r,vview:a,vtextRotation:u,vticks:h}=e,{offsetPx:p,width:f,dynamicBlocks:y,bpPerPx:E}=a,b=y.contentBlocks,g=(0,m.rQ)(b,t,p),v=(0,i.A)(),k={...(0,o.getSnapshot)(a),width:f,staticBlocks:a.staticBlocks},w=h.map((e=>[e,(0,c.eB)({refName:e.refName,coord:e.base,self:k})?.offsetPx])).filter((e=>void 0!==e[1])).map((e=>[e[0],e[1]-p]));return l.createElement(l.Fragment,null,b.filter((e=>!g.has(e.key))).map((e=>{const r=e.offsetPx,a=n,o=Math.floor(t-r+p);return l.createElement("text",d({transform:`rotate(${u},${a},${r})`,key:JSON.stringify(e),x:a,y:o,fontSize:11,textAnchor:"end"},(0,s.getFillProps)(v.palette.text.primary)),e.refName)})),w.map((([e,r])=>r>0?l.createElement("line",d({key:`line-${JSON.stringify(e)}`,y1:t-r,y2:t-r,x1:n,x2:n-("major"===e.type?6:4),strokeWidth:1},(0,s.getStrokeProps)(v.palette.grey[400]))):null)),w.filter((e=>"major"===e[0].type)).map((([e,r])=>r>10&&r<t?l.createElement("text",d({y:t-r-3,x:n-7,key:`text-${JSON.stringify(e)}`,textAnchor:"end",dominantBaseline:"hanging",fontSize:11},(0,s.getFillProps)(v.palette.text.primary)),(0,s.getTickDisplayStr)(e.base+1,E)):null)),l.createElement("text",d({y:(t-r)/2,x:12,transform:`rotate(-90,12,${(t-r)/2})`,textAnchor:"middle",fontSize:11},(0,s.getFillProps)(v.palette.text.primary)),a.assemblyNames.join(",")))}))},63474:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ae});var l=n(7552),r=n(49823),a=n(68446),o=n(42489),s=n(75785),c=n(48171),i=n(22679),m=n(56089),d=n(33371),u=n(33248),h=n(63896),p=n(67314),f=n(943),y=n(36715),E=n(5401),b=n(99546);function g({radioOption:e,assembly1:t,assembly2:n,fileLocation:l,indexFileLocation:r,bed1Location:a,bed2Location:o}){if(".paf"===e)return{type:"PAFAdapter",pafLocation:l,queryAssembly:t,targetAssembly:n};if(".out"===e)return{type:"MashMapAdapter",outLocation:l,queryAssembly:t,targetAssembly:n};if(".delta"===e)return{type:"DeltaAdapter",deltaLocation:l,queryAssembly:t,targetAssembly:n};if(".chain"===e)return{type:"ChainAdapter",chainLocation:l,queryAssembly:t,targetAssembly:n};if(".anchors"===e)return{type:"MCScanAnchorsAdapter",mcscanAnchorsLocation:l,bed1Location:a,bed2Location:o,assemblyNames:[t,n]};if(".anchors.simple"===e)return{type:"MCScanSimpleAnchorsAdapter",mcscanSimpleAnchorsLocation:l,bed1Location:a,bed2Location:o,assemblyNames:[t,n]};if(".pif.gz"===e)return{type:"PairwiseIndexedPAFAdapter",pifGzLocation:l,index:{location:r},assemblyNames:[t,n]};throw new Error(`Unknown to detect type ${e} from filename (select radio button to clarify)`)}const v=(0,a.observer)((function({assembly1:e,assembly2:t,setSessionTrackData:n}){const[a,o]=(0,l.useState)(),[s,c]=(0,l.useState)(),[i,h]=(0,l.useState)(),[E,b]=(0,l.useState)(),[v,k]=(0,l.useState)(""),[w,A]=(0,l.useState)(),x=(S=i)?S.uri||S.localPath||S.name:void 0;var S;const C=v||(x?function(e){const t=e.split(".").pop();return t?`.${t}`:""}(function(e){return e.endsWith(".gz")?e.slice(0,-3):e}(x)):"");return(0,l.useEffect)((()=>{try{if(i){const l=x?x.split("#")[0].split("?")[0].split("/").pop():"MyTrack",r=`${l}-${Date.now()}`;A(void 0),n({trackId:r,name:l,assemblyNames:[t,e],type:"SyntenyTrack",adapter:g({radioOption:C,assembly1:e,assembly2:t,fileLocation:i,indexFileLocation:E,bed1Location:s,bed2Location:a})})}}catch(e){console.error(e),A(e)}}),[x,e,t,s,a,i,E,C,n]),l.createElement(f.A,{style:{padding:12}},w?l.createElement(r.ErrorMessage,{error:w}):null,l.createElement(y.A,{style:{textAlign:"center"}},"Add a .paf, .out (MashMap), .delta (Mummer), .chain, .anchors or .anchors.simple (MCScan) file to view. These file types can also be gzipped. The first assembly should be the query sequence (e.g. left column of the PAF) and the second assembly should be the target sequence (e.g. right column of the PAF)"),l.createElement(m.A,{value:C,onChange:e=>{k(e.target.value)}},l.createElement(p.Ay,{container:!0,justifyContent:"center"},l.createElement(p.Ay,{item:!0},l.createElement(d.A,{value:".paf",control:l.createElement(u.A,null),label:".paf"})),l.createElement(p.Ay,{item:!0},l.createElement(d.A,{value:".out",control:l.createElement(u.A,null),label:".out"})),l.createElement(p.Ay,{item:!0},l.createElement(d.A,{value:".delta",control:l.createElement(u.A,null),label:".delta"})),l.createElement(p.Ay,{item:!0},l.createElement(d.A,{value:".chain",control:l.createElement(u.A,null),label:".chain"})),l.createElement(p.Ay,{item:!0},l.createElement(d.A,{value:".anchors",control:l.createElement(u.A,null),label:".anchors"})),l.createElement(p.Ay,{item:!0},l.createElement(d.A,{value:".anchors.simple",control:l.createElement(u.A,null),label:".anchors.simple"})),l.createElement(p.Ay,{item:!0},l.createElement(d.A,{value:".pif.gz",control:l.createElement(u.A,null),label:".pif.gz"})))),l.createElement(p.Ay,{container:!0,justifyContent:"center"},l.createElement(p.Ay,{item:!0},".anchors"===v||".anchors.simple"===v?l.createElement("div",null,l.createElement("div",{style:{margin:20}},"Open the ",v," and .bed files for both genome assemblies from the MCScan (Python version) pipeline"," ",l.createElement("a",{href:"https://github.com/tanghaibao/jcvi/wiki/MCscan-(Python-version)"},"(more info)")),l.createElement("div",{style:{display:"flex"}},l.createElement("div",null,l.createElement(r.FileSelector,{name:".anchors file",description:"",location:i,setLocation:e=>{h(e)}})),l.createElement("div",null,l.createElement(r.FileSelector,{name:"genome 1 .bed (left column of anchors file)",description:"",location:s,setLocation:e=>{c(e)}})),l.createElement("div",null,l.createElement(r.FileSelector,{name:"genome 2 .bed (right column of anchors file)",description:"",location:a,setLocation:e=>{o(e)}})))):".pif.gz"===v?l.createElement("div",{style:{display:"flex"}},l.createElement("div",null,l.createElement(r.FileSelector,{name:`${v} location`,description:"",location:i,setLocation:e=>{h(e)}})),l.createElement("div",null,l.createElement(r.FileSelector,{name:`${v} index location`,description:"",location:E,setLocation:e=>{b(e)}}))):l.createElement(r.FileSelector,{name:v?`${v} location`:"",description:"",location:i,setLocation:e=>{h(e)}}))))}));var k=n(98360),w=n(29629),A=n(91468),x=n(68584),S=n(90542);const C=(0,a.observer)((({model:e,assembly1:t,assembly2:n,setShowTrackId:a})=>{const o=(0,b.getSession)(e),{tracks:s,sessionTracks:c}=o,i=[...s,...c||[]].filter((e=>function(e,t,n){const l=(0,x.readConfObject)(e,"assemblyNames");return l.includes(t)&&l.includes(n)&&e.type.includes("Synteny")}(e,n,t))),m=i[0]?.trackId||"",[d,u]=(0,l.useState)(m);return(0,l.useEffect)((()=>{u(m)}),[m]),(0,l.useEffect)((()=>{a(d)}),[d,a]),l.createElement(f.A,{style:{padding:12}},l.createElement(y.A,{paragraph:!0},'Select a track from the select box below, the track will be shown when you hit "Launch".'),l.createElement(y.A,{paragraph:!0},"Note: there is a track selector ",l.createElement("i",null,"inside")," the DotplotView, which can turn on one or more SyntenyTracks (more than one can be displayed at once). Look for the track selector icon ",l.createElement(S.xU,null)),i.length?l.createElement(k.A,{value:d,onChange:e=>{u(e.target.value)}},i.map((e=>l.createElement(w.A,{key:e.trackId,value:e.trackId},(0,A.getTrackName)(e,o))))):l.createElement(r.ErrorMessage,{error:`No synteny tracks found for ${t},${n}`}))})),P=(0,s.n9)()((e=>({importFormContainer:{padding:e.spacing(4),margin:"0 auto"},assemblySelector:{width:"75%",margin:"0 auto"}})));function L({setSessionTrackData:e,setShowTrackId:t,sessionTrackData:n,assembly1:r,assembly2:a,model:o}){const[s,h]=(0,l.useState)("tracklist");return(0,l.useEffect)((()=>{"none"===s&&(e(void 0),t(void 0))}),[s,e,t]),l.createElement(l.Fragment,null,l.createElement(c.A,null,l.createElement(i.A,{id:"group-label"},"(Optional) Select or add a synteny track"),l.createElement(m.A,{row:!0,value:s,onChange:e=>{h(e.target.value)},"aria-labelledby":"group-label"},l.createElement(d.A,{value:"none",control:l.createElement(u.A,null),label:"None"}),l.createElement(d.A,{value:"tracklist",control:l.createElement(u.A,null),label:"Existing track"}),l.createElement(d.A,{value:"custom",control:l.createElement(u.A,null),label:"New track"}))),"custom"===s?l.createElement(v,{setSessionTrackData:e,sessionTrackData:n,assembly2:a,assembly1:r}):null,"tracklist"===s?l.createElement(C,{model:o,assembly1:r,assembly2:a,setShowTrackId:t}):null)}const M=(0,a.observer)((({model:e})=>{const{classes:t}=P(),n=(0,b.getSession)(e),{assemblyNames:a}=n,[s,i]=(0,l.useState)(a[0]||""),[m,d]=(0,l.useState)(a[0]||""),[u,g]=(0,l.useState)(),[v,k]=(0,l.useState)(),[w,A]=(0,l.useState)(),x=u||e.error;return l.createElement(h.A,{className:t.importFormContainer},x?l.createElement(r.ErrorMessage,{error:x}):null,l.createElement(p.Ay,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",className:t.assemblySelector},l.createElement(p.Ay,{item:!0},l.createElement(f.A,{style:{padding:12}},l.createElement(y.A,{style:{textAlign:"center"}},"Select assemblies for dotplot view"),l.createElement(p.Ay,{container:!0,spacing:1,justifyContent:"center",alignItems:"center"},l.createElement(p.Ay,{item:!0},l.createElement(r.AssemblySelector,{selected:m,onChange:e=>{d(e)},session:n})),l.createElement(p.Ay,{item:!0},l.createElement(r.AssemblySelector,{selected:s,onChange:e=>{i(e)},session:n})),l.createElement(p.Ay,{item:!0},l.createElement(c.A,null,l.createElement(E.A,{onClick:function(){try{if(!(0,b.isSessionWithAddTracks)(n))return;g(void 0),e.setError(void 0),(0,o.transaction)((()=>{v?(n.addTrackConf(v),e.toggleTrack(v.trackId)):w&&e.showTrack(w),e.setViews([{bpPerPx:.1,offsetPx:0},{bpPerPx:.1,offsetPx:0}]),e.setAssemblyNames(s,m)}))}catch(e){console.error(e),g(e)}},variant:"contained",color:"primary"},"Launch"))))),l.createElement(L,{setShowTrackId:A,assembly2:s,assembly1:m,setSessionTrackData:k,sessionTrackData:v,model:e}))))}));var N=n(9937);const T=(0,l.lazy)((()=>Promise.all([n.e(8565),n.e(7463),n.e(4863)]).then(n.bind(n,75083)))),z=(0,a.observer)((function({model:e}){const t=e.tracks.filter((e=>e.displays[0].warnings?.length)),[n,r]=(0,l.useState)(!1),[a,o]=(0,l.useState)(!1);return t.length&&!a?l.createElement(N.A,{severity:"warning"},"Warnings during render"," ",l.createElement(E.A,{onClick:()=>{r(!0)}},"More info"),n?l.createElement(T,{trackWarnings:t,handleClose:()=>{r(!1)}}):null,l.createElement(E.A,{variant:"contained",onClick:()=>{o(!0)}},"Dismiss")):null}));var B=n(61723),I=n(32813),F=n(6500),O=n(99829),D=n(12756),$=n(87809),R=n(91404);const j=(0,s.n9)()({dpad:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",margin:0,position:"absolute",right:50,zIndex:1e3,top:50},icon:{padding:0,margin:0}}),V=(0,a.observer)((function({model:e}){const{classes:t}=j();return l.createElement(f.A,{className:t.dpad,elevation:6},l.createElement("div",null),l.createElement(B.A,{className:t.icon,onClick:()=>{e.vview.scroll(100)}},l.createElement(F.A,null)),l.createElement("div",null),l.createElement(B.A,{className:t.icon,onClick:()=>{e.hview.scroll(-100)}},l.createElement(O.A,null)),l.createElement("div",null),l.createElement(B.A,{className:t.icon,onClick:()=>{e.hview.scroll(100)}},l.createElement(D.A,null)),l.createElement("div",null),l.createElement(B.A,{className:t.icon,onClick:()=>{e.vview.scroll(-100)}},l.createElement(I.A,null)),l.createElement("div",null),l.createElement(B.A,{className:t.icon,onClick:()=>{e.zoomIn()}},l.createElement($.A,null)),l.createElement("div",null),l.createElement(B.A,{className:t.icon,onClick:()=>{e.zoomOut()}},l.createElement(R.A,null)))}));var H=n(23758),W=n(17307),q=n(2859);function Y(e){return l.createElement(q.A,e,l.createElement("path",{fill:"currentColor",d:"M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z"}))}function J(e){return l.createElement(q.A,e,l.createElement("path",{fill:"currentColor",d:"M10.07,14.27C10.57,14.03 11.16,14.25 11.4,14.75L13.7,19.74L15.5,18.89L13.19,13.91C12.95,13.41 13.17,12.81 13.67,12.58L13.95,12.5L16.25,12.05L8,5.12V15.9L9.82,14.43L10.07,14.27M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19A1,1 0 0,1 6,18V3A1,1 0 0,1 7,2C7.24,2 7.47,2.09 7.64,2.23L7.65,2.22L19.14,11.86C19.57,12.22 19.62,12.85 19.27,13.27C19.12,13.45 18.91,13.57 18.7,13.61L15.54,14.23L17.74,18.96C18,19.46 17.76,20.05 17.26,20.28L13.64,21.97Z"}))}const X=(0,a.observer)((function({model:e}){return l.createElement("div",null,l.createElement(B.A,{onClick:()=>{e.zoomOut()}},l.createElement(R.A,null)),l.createElement(B.A,{onClick:()=>{e.zoomIn()}},l.createElement($.A,null)),l.createElement(B.A,{onClick:()=>e.activateTrackSelector(),title:"Open track selector"},l.createElement(S.xU,null)),l.createElement(H.A,{menuItems:[{onClick:()=>{e.squareView()},label:"Square view - same base pairs per pixel"},{onClick:()=>{e.squareViewProportional()},label:"Rectanglularize view - same total bp"},{onClick:()=>{e.showAllRegions()},label:"Show all regions"},{onClick:()=>{e.setDrawCigar(!e.drawCigar)},type:"checkbox",label:"Draw CIGAR",checked:e.drawCigar},{onClick:()=>{e.setShowPanButtons(!e.showPanButtons)},label:"Show pan buttons",type:"checkbox",checked:e.showPanButtons},{label:"Click and drag mode",subMenu:[{onClick:()=>{e.setCursorMode("move")},label:"Pan by default, select region when ctrl/cmd key is held",icon:Y,type:"radio",checked:"move"===e.cursorMode},{onClick:()=>{e.setCursorMode("crosshair")},label:"Select region by default, pan when ctrl/cmd key is held",icon:J,type:"radio",checked:"crosshair"===e.cursorMode}]},{label:"Wheel scroll mode",subMenu:[{onClick:()=>{e.setWheelMode("pan")},label:"Pans view",type:"radio",checked:"pan"===e.wheelMode},{onClick:()=>{e.setWheelMode("zoom")},label:"Zooms view",type:"radio",checked:"zoom"===e.wheelMode},{onClick:()=>{e.setWheelMode("none")},label:"Disable",type:"radio",checked:"none"===e.wheelMode}]}]},l.createElement(W.A,null)))})),K=(0,s.n9)()({bp:{display:"flex",alignItems:"center",marginLeft:10},spacer:{flexGrow:1},headerBar:{display:"flex",position:"relative"}}),_=(0,a.observer)((function({model:e,selection:t}){const{classes:n}=K(),{hview:r,vview:a,showPanButtons:o}=e;return l.createElement("div",{className:n.headerBar},l.createElement(X,{model:e}),l.createElement(y.A,{className:n.bp,variant:"body2",color:"textSecondary"},"x: ",r.assemblyNames.join(",")," ",(0,b.getBpDisplayStr)(r.currBp),l.createElement("br",null),"y: ",a.assemblyNames.join(",")," ",(0,b.getBpDisplayStr)(a.currBp)),t?l.createElement(y.A,{className:n.bp,variant:"body2",color:"textSecondary"},`width:${(0,b.getBpDisplayStr)(r.bpPerPx*t.width)}`," ",l.createElement("br",null),`height:${(0,b.getBpDisplayStr)(a.bpPerPx*t.height)}`):null,l.createElement("div",{className:n.spacer}),l.createElement(z,{model:e}),o?l.createElement(V,{model:e}):null)}));var Z=n(86495),G=n(91392);const U=(0,l.lazy)((()=>n.e(1304).then(n.bind(n,81304)))),Q=(0,l.lazy)((()=>n.e(1051).then(n.bind(n,21051)))),ee={left:0,top:0,width:0,height:0},te=(0,s.n9)()((e=>({spacer:{gridColumn:"1/2",gridRow:"2/2"},root:{position:"relative",marginBottom:e.spacing(1),overflow:"hidden"},container:{display:"grid",padding:5,position:"relative"},overlay:{pointerEvents:"none",overflow:"hidden",display:"flex",width:"100%",gridRow:"1/2",gridColumn:"2/2",zIndex:100,"& path":{cursor:"crosshair",fill:"none"}},content:{position:"relative",gridColumn:"2/2",gridRow:"1/2"},resizeHandle:{height:4,background:"#ccc",boxSizing:"border-box",borderTop:"1px solid #fafafa"}})));function ne(e,t){return e&&[e[0]-t.left,e[1]-t.top]}const le=(0,a.observer)((({model:e})=>{const{classes:t}=te();return l.createElement("div",{className:t.overlay},e.tracks.map((e=>{const[t]=e.displays,{RenderingComponent:n}=t;return n?l.createElement(n,{key:e.configuration.trackId,model:t}):null})))})),re=(0,a.observer)((function({model:e}){const{classes:t}=te(),[n,a]=(0,l.useState)(),[s,c]=(0,l.useState)(),[i,m]=(0,l.useState)(!1),[d,u]=(0,l.useState)(),h=(0,l.useRef)(null),p=(0,l.useRef)(null),f=(0,l.useRef)(0),y=(0,l.useRef)(0),E=(0,l.useRef)(!1),[b,g]=(0,l.useState)(!1),[v,k]=(0,l.useState)(!1),w=h.current?.getBoundingClientRect()||ee,A=h.current?.getBoundingClientRect()||ee,x=ne(s,w),S=ne(n,w),C=ne(d,w),P=C||S,L=d||n,M=x&&P?P[0]-x[0]:0,N=x&&P?P[1]-x[1]:0,{hview:T,vview:z,wheelMode:B,cursorMode:I}=e,F="move"===I&&!b||"crosshair"===I&&b,O="move"===I&&b||"crosshair"===I&&!b;return(0,l.useEffect)((()=>{function e(e){e.preventDefault(),f.current+=e.deltaX,y.current-=e.deltaY,E.current||(E.current=!0,window.requestAnimationFrame((()=>{(0,o.transaction)((()=>{if("pan"===B)T.scroll(f.current/3),z.scroll(y.current/10);else if("zoom"===B&&Math.abs(y.current)>2*Math.abs(f.current)&&S){const e=y.current<0?1.1:.9;T.zoomTo(T.bpPerPx*e,S[0]),z.zoomTo(z.bpPerPx*e,A.height-S[1])}})),E.current=!1,f.current=0,y.current=0})))}if(h.current){const t=h.current;return t.addEventListener("wheel",e),()=>{t.removeEventListener("wheel",e)}}return()=>{}}),[T,z,B,S,A.height]),(0,l.useEffect)((()=>{function e(e){a([e.clientX,e.clientY]),n&&s&&F&&!d&&(T.scroll(-e.clientX+n[0]),z.scroll(e.clientY-n[1]))}return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}}),[F,n,s,d,T,z]),(0,l.useEffect)((()=>{function e(e){(e.metaKey||e.ctrlKey)&&k(!0)}function t(e){e.metaKey||e.ctrlKey||k(!1)}return window.addEventListener("keydown",e),window.addEventListener("keyup",t),()=>{window.removeEventListener("keydown",e),window.addEventListener("keyup",t)}}),[]),(0,l.useEffect)((()=>{function e(e){Math.abs(M)>3&&Math.abs(N)>3&&O?u([e.clientX,e.clientY]):c(void 0)}return x&&!C?(window.addEventListener("mouseup",e,!0),()=>{window.removeEventListener("mouseup",e,!0)}):()=>{}}),[O,x,C,M,N]),l.createElement("div",null,l.createElement(_,{model:e,selection:O&&x&&P?{width:Math.abs(M),height:Math.abs(N)}:void 0}),l.createElement("div",{ref:p,className:t.root,onMouseLeave:()=>{m(!1)},onMouseEnter:()=>{m(!0)}},l.createElement("div",{className:t.container},l.createElement(G.en,{model:e}),l.createElement(G.KM,{model:e}),l.createElement("div",{ref:h,className:t.content},i&&O?l.createElement(l.Suspense,{fallback:null},l.createElement(Q,{model:e,mouserect:P,mouserectClient:L,xdistance:M})):null,O?l.createElement(l.Suspense,{fallback:null},l.createElement(U,{model:e,mousedown:x,mousedownClient:s,xdistance:M,ydistance:N})):null,l.createElement("div",{style:{cursor:v?"pointer":I},onMouseDown:e=>{if(0===e.button){const{clientX:t,clientY:n}=e;c([t,n]),a([t,n]),g(v)}}},l.createElement(Z.A,{model:e},O&&x&&P?l.createElement("rect",{fill:"rgba(255,0,0,0.3)",x:Math.min(P[0],x[0]),y:Math.min(P[1],x[1]),width:Math.abs(M),height:Math.abs(N)}):null)),l.createElement("div",{className:t.spacer})),l.createElement(le,{model:e}),l.createElement(r.Menu,{open:Boolean(C),onMenuItemClick:(e,t)=>{t(),u(void 0),c(void 0)},onClose:()=>{u(void 0),c(void 0)},anchorReference:"anchorPosition",anchorPosition:d?{top:d[1]+50,left:d[0]+50}:void 0,style:{zIndex:1e4},menuItems:[{label:"Zoom in",onClick:()=>{x&&C&&e.zoomInToMouseCoords(x,C),m(!1)}},{label:"Open linear synteny view",onClick:()=>{x&&C&&e.onDotplotView(x,C),m(!1)}}]})),l.createElement(r.ResizeHandle,{onDrag:t=>e.setHeight(e.height+t),className:t.resizeHandle})))})),ae=(0,a.observer)((function({model:e}){const{initialized:t,loading:n,error:a}=e;return!t&&!n||a?l.createElement(M,{model:e}):n?l.createElement(r.LoadingEllipses,{variant:"h6"}):l.createElement(re,{model:e})}))},86495:(e,t,n)=>{n.d(t,{A:()=>i,z:()=>c});var l=n(7552),r=n(68446),a=n(48231),o=n(99546);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)({}).hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},s.apply(null,arguments)}const c=(0,r.observer)((function({model:e,children:t}){const{viewWidth:n,viewHeight:r,hview:c,vview:i}=e,m=c.dynamicBlocks.contentBlocks,d=i.dynamicBlocks.contentBlocks;if(!m.length||!d.length)return null;const u=c.displayedRegionsTotalPx-c.offsetPx,h=i.displayedRegionsTotalPx-i.offsetPx,p=m[0].offsetPx-c.offsetPx,f=d[0].offsetPx-i.offsetPx,y=(0,a.A)(),E=y.palette.divider,b=Math.max(p,0),g=Math.max(r-h,0),v=Math.min(u-p,n),k=Math.min(r-f-g,r);let w=Number.POSITIVE_INFINITY,A=Number.POSITIVE_INFINITY;return l.createElement(l.Fragment,null,l.createElement("rect",s({x:b,y:g,width:v,height:k},(0,o.getFillProps)(y.palette.background.default))),l.createElement("g",null,m.map((e=>{const t=e.offsetPx-c.offsetPx,n=Math.floor(t)!==Math.floor(w);return n&&(w=t),n?l.createElement("line",s({key:JSON.stringify(e),x1:t,y1:0,x2:t,y2:r},(0,o.getStrokeProps)(E))):null})),d.map((e=>{const t=r-(e.offsetPx-i.offsetPx),a=Math.floor(t)!==Math.floor(A);return a&&(A=t),a?l.createElement("line",s({key:JSON.stringify(e),x1:0,y1:t,x2:n,y2:t},(0,o.getStrokeProps)(E))):null})),l.createElement("line",s({x1:u,y1:0,x2:u,y2:r},(0,o.getStrokeProps)(E))),l.createElement("line",s({x1:0,y1:r-h,x2:n,y2:r-h},(0,o.getStrokeProps)(E)))),t)}));function i({model:e,children:t}){const{viewWidth:n,viewHeight:r}=e;return l.createElement("svg",{width:n,height:r,style:{background:"rgba(0,0,0,0.12)"}},l.createElement(c,{model:e},t))}}}]);
//# sourceMappingURL=3474.699fe72d.chunk.js.map