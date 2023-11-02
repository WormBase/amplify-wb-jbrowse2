"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[8156],{38156:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var a=n(32723),r=n(34795),o=n(96234),s=n(41867),i=n(90552),c=n(98484),l=n(21126),u=n(96614),d=n(23738),m=n(47500),h=n(45294),f=n(7229),p=n(23801),v=n(47192),Z=n(3762),x=n(90872),b=n(35421),y=n(51590);var g=n(80838);function j(e){var t=e.radioOption,n=e.assembly1,a=e.assembly2,r=e.fileLocation,o=e.bed1Location,s=e.bed2Location;if(".paf"===t)return{type:"PAFAdapter",pafLocation:r,queryAssembly:n,targetAssembly:a};if(".out"===t)return{type:"MashMapAdapter",outLocation:r,queryAssembly:n,targetAssembly:a};if(".delta"===t)return{type:"DeltaAdapter",deltaLocation:r,queryAssembly:n,targetAssembly:a};if(".chain"===t)return{type:"ChainAdapter",chainLocation:r,queryAssembly:n,targetAssembly:a};if(".anchors"===t)return{type:"MCScanAnchorsAdapter",mcscanAnchorsLocation:r,bed1Location:o,bed2Location:s,assemblyNames:[n,a]};if(".anchors.simple"===t)return{type:"MCScanSimpleAnchorsAdapter",mcscanSimpleAnchorsLocation:r,bed1Location:o,bed2Location:s,assemblyNames:[n,a]};throw new Error("Unknown to detect type ".concat(t," from filename (select radio button to clarify)"))}var k=(0,Z.observer)((function(e){var t,n=e.assembly1,a=e.assembly2,r=e.setSessionTrackData,i=(0,s.useState)(),c=(0,o.Z)(i,2),m=c[0],p=c[1],v=(0,s.useState)(),Z=(0,o.Z)(v,2),x=Z[0],k=Z[1],S=(0,s.useState)(),w=(0,o.Z)(S,2),C=w[0],P=w[1],A=(0,s.useState)(""),M=(0,o.Z)(A,2),L=M[0],T=M[1],R=(0,s.useState)(),z=(0,o.Z)(R,2),N=z[0],W=z[1],I=(t=C)?t.uri||t.localPath||t.name:void 0,F=L||(I?function(e){var t=e.split(".").pop();return t?".".concat(t):""}(function(e){return e.endsWith(".gz")?e.slice(0,-3):e}(I)):"");return(0,s.useEffect)((function(){try{if(C){var e=I?I.split("#")[0].split("?")[0].split("/").pop():"MyTrack",t="".concat(e,"-").concat(Date.now());W(void 0),r({trackId:t,name:e,assemblyNames:[a,n],type:"SyntenyTrack",adapter:j({radioOption:F,assembly1:n,assembly2:a,fileLocation:C,bed1Location:x,bed2Location:m})})}}catch(o){console.error(o),W(o)}}),[I,n,a,x,m,C,F,r]),(0,g.jsxs)(f.Z,{style:{padding:12},children:[N?(0,g.jsx)(b.ErrorMessage,{error:N}):null,(0,g.jsx)(y.Z,{style:{textAlign:"center"},children:"Add a .paf, .out (MashMap), .delta (Mummer), .chain, .anchors or .anchors.simple (MCScan) file to view in the dotplot. These file types can also be gzipped. The first assembly should be the query sequence (e.g. left column of the PAF) and the second assembly should be the target sequence (e.g. right column of the PAF)"}),(0,g.jsx)(l.Z,{value:F,onChange:function(e){return T(e.target.value)},children:(0,g.jsxs)(h.ZP,{container:!0,justifyContent:"center",children:[(0,g.jsx)(h.ZP,{item:!0,children:(0,g.jsx)(u.Z,{value:".paf",control:(0,g.jsx)(d.Z,{}),label:".paf"})}),(0,g.jsx)(h.ZP,{item:!0,children:(0,g.jsx)(u.Z,{value:".out",control:(0,g.jsx)(d.Z,{}),label:".out"})}),(0,g.jsx)(h.ZP,{item:!0,children:(0,g.jsx)(u.Z,{value:".delta",control:(0,g.jsx)(d.Z,{}),label:".delta"})}),(0,g.jsx)(h.ZP,{item:!0,children:(0,g.jsx)(u.Z,{value:".chain",control:(0,g.jsx)(d.Z,{}),label:".chain"})}),(0,g.jsx)(h.ZP,{item:!0,children:(0,g.jsx)(u.Z,{value:".anchors",control:(0,g.jsx)(d.Z,{}),label:".anchors"})}),(0,g.jsx)(h.ZP,{item:!0,children:(0,g.jsx)(u.Z,{value:".anchors.simple",control:(0,g.jsx)(d.Z,{}),label:".anchors.simple"})})]})}),(0,g.jsx)(h.ZP,{container:!0,justifyContent:"center",children:(0,g.jsx)(h.ZP,{item:!0,children:".anchors"===L||".anchors.simple"===L?(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{style:{margin:20},children:["Open the ",L," and .bed files for both genome assemblies from the MCScan (Python version) pipeline"," ",(0,g.jsx)("a",{href:"https://github.com/tanghaibao/jcvi/wiki/MCscan-(Python-version)",children:"(more info)"})]}),(0,g.jsxs)("div",{style:{display:"flex"},children:[(0,g.jsx)("div",{children:(0,g.jsx)(b.FileSelector,{name:".anchors file",description:"",location:C,setLocation:function(e){return P(e)}})}),(0,g.jsx)("div",{children:(0,g.jsx)(b.FileSelector,{name:"genome 1 .bed (left column of anchors file)",description:"",location:x,setLocation:function(e){return k(e)}})}),(0,g.jsx)("div",{children:(0,g.jsx)(b.FileSelector,{name:"genome 2 .bed (right column of anchors file)",description:"",location:m,setLocation:function(e){return p(e)}})})]})]}):(0,g.jsx)(b.FileSelector,{name:L?L+" location":"",description:"",location:C,setLocation:function(e){return P(e)}})})})]})})),S=n(68079),w=n(36669),C=n(59231),P=n(99512),A=n(43800);var M=(0,Z.observer)((function(e){var t,n=e.model,a=e.assembly1,r=e.assembly2,i=e.setShowTrackId,c=(0,x.getSession)(n),l=c.tracks,u=void 0===l?[]:l,d=c.sessionTracks,m=void 0===d?[]:d,h=[].concat((0,S.Z)(u),(0,S.Z)(m)).filter((function(e){return function(e,t,n){var a=(0,A.readConfObject)(e,"assemblyNames");return a.includes(t)&&a.includes(n)&&e.type.includes("Synteny")}(e,r,a)})),p=(null===(t=h[0])||void 0===t?void 0:t.trackId)||"",v=(0,s.useState)(p),Z=(0,o.Z)(v,2),j=Z[0],k=Z[1];return(0,s.useEffect)((function(){k(p)}),[p]),(0,s.useEffect)((function(){i(j)}),[j,i]),(0,g.jsxs)(f.Z,{style:{padding:12},children:[(0,g.jsx)(y.Z,{paragraph:!0,children:'Select a track from the select box below, the track will be shown when you hit "Launch".'}),h.length?(0,g.jsx)(w.Z,{value:j,onChange:function(e){return k(e.target.value)},children:h.map((function(e){return(0,g.jsx)(C.Z,{value:e.trackId,children:(0,P.getTrackName)(e,c)},e.trackId)}))}):(0,g.jsx)(b.ErrorMessage,{error:"No synteny tracks found for ".concat(a,",").concat(r)})]})})),L=(0,v.ZL)()((function(e){return{importFormContainer:{padding:e.spacing(4),margin:"0 auto"},assemblySelector:{width:"75%",margin:"0 auto"}}}));function T(e){var t=e.setSessionTrackData,n=e.setShowTrackId,a=e.sessionTrackData,r=e.assembly1,m=e.assembly2,h=e.model,f=(0,s.useState)("none"),p=(0,o.Z)(f,2),v=p[0],Z=p[1];return(0,s.useEffect)((function(){"none"===v&&(t(void 0),n(void 0))}),[v,t,n]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(i.Z,{children:[(0,g.jsx)(c.Z,{id:"group-label",children:"(Optional) Select or add a synteny track"}),(0,g.jsxs)(l.Z,{row:!0,value:v,onChange:function(e){return Z(e.target.value)},"aria-labelledby":"group-label",children:[(0,g.jsx)(u.Z,{value:"none",control:(0,g.jsx)(d.Z,{}),label:"None"}),(0,g.jsx)(u.Z,{value:"tracklist",control:(0,g.jsx)(d.Z,{}),label:"Existing track"}),(0,g.jsx)(u.Z,{value:"custom",control:(0,g.jsx)(d.Z,{}),label:"New track"})]})]}),"custom"===v?(0,g.jsx)(k,{setSessionTrackData:t,sessionTrackData:a,assembly2:m,assembly1:r}):null,"tracklist"===v?(0,g.jsx)(M,{model:h,assembly1:r,assembly2:m,setShowTrackId:n}):null]})}var R=(0,Z.observer)((function(e){var t=e.model,n=L().classes,c=(0,x.getSession)(t),l=c.assemblyNames,u=(0,s.useState)(l[0]||""),d=(0,o.Z)(u,2),v=d[0],Z=d[1],y=(0,s.useState)(l[0]||""),j=(0,o.Z)(y,2),k=j[0],S=j[1],w=(0,s.useState)(),C=(0,o.Z)(w,2),P=C[0],A=C[1],M=(0,s.useState)(),R=(0,o.Z)(M,2),z=R[0],N=R[1],W=(0,s.useState)(),I=(0,o.Z)(W,2),F=I[0],E=I[1];function G(){return G=(0,r.Z)((0,a.Z)().mark((function e(){var n,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(0,x.isSessionWithAddTracks)(c)){e.next=3;break}return e.abrupt("return");case 3:return A(void 0),n=c.assemblyManager,o=[k,v],e.t0=t,e.next=9,Promise.all(o.map(function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.waitForAssembly(t);case 2:if(r=e.sent){e.next=5;break}throw new Error("Assembly ".concat(t," failed to load"));case 5:return e.abrupt("return",{type:"LinearGenomeView",bpPerPx:1,offsetPx:0,hideHeader:!0,displayedRegions:r.regions});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 9:e.t1=e.sent,e.t0.setViews.call(e.t0,e.t1),t.views.forEach((function(e){return e.setWidth(t.width)})),z?(c.addTrackConf(z),t.toggleTrack(z.trackId)):F&&t.showTrack(F),e.next=19;break;case 15:e.prev=15,e.t2=e.catch(0),console.error(e.t2),A(e.t2);case 19:case"end":return e.stop()}}),e,null,[[0,15]])}))),G.apply(this,arguments)}var q=P;return(0,g.jsxs)(m.Z,{className:n.importFormContainer,children:[q?(0,g.jsx)(b.ErrorMessage,{error:q}):null,(0,g.jsx)(h.ZP,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",className:n.assemblySelector,children:(0,g.jsxs)(h.ZP,{item:!0,children:[(0,g.jsxs)(f.Z,{style:{padding:12},children:[(0,g.jsx)("p",{style:{textAlign:"center"},children:"Select assemblies for linear synteny view"}),(0,g.jsxs)(h.ZP,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",children:[(0,g.jsx)(h.ZP,{item:!0,children:(0,g.jsx)(b.AssemblySelector,{selected:k,onChange:function(e){return S(e)},session:c})}),(0,g.jsx)(h.ZP,{item:!0,children:(0,g.jsx)(b.AssemblySelector,{selected:v,onChange:function(e){return Z(e)},session:c})}),(0,g.jsx)(h.ZP,{item:!0,children:(0,g.jsx)(i.Z,{children:(0,g.jsx)(p.Z,{onClick:function(){return G.apply(this,arguments)},variant:"contained",color:"primary",children:"Launch"})})})]})]}),(0,g.jsx)(T,{setShowTrackId:E,assembly2:v,assembly1:k,setSessionTrackData:N,sessionTrackData:z,model:t})]})})]})})),z=R},47500:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(56666),r=n(31461),o=n(7896),s=n(41867),i=n(66184),c=n(19092),l=n(88498),u=n(92705),d=n(8380),m=n(35283),h=n(15453),f=n(80838),p=["className","component","disableGutters","fixed","maxWidth","classes"],v=(0,h.Z)(),Z=(0,m.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,c.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),x=function(e){return(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:v})};var b=n(9931),y=n(75693),g=n(90293),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?Z:t,d=e.useThemeProps,m=void 0===d?x:d,h=e.componentName,v=void 0===h?"MuiContainer":h,b=n((function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,a.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var a=n,r=t.breakpoints.values[a];return 0!==r&&(e[t.breakpoints.up(a)]={maxWidth:"".concat(r).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({},"xs"===n.maxWidth&&(0,a.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,a.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),y=s.forwardRef((function(e,t){var n=m(e),a=n.className,s=n.component,d=void 0===s?"div":s,h=n.disableGutters,Z=void 0!==h&&h,x=n.fixed,y=void 0!==x&&x,g=n.maxWidth,j=void 0===g?"lg":g,k=(0,r.Z)(n,p),S=(0,o.Z)({},n,{component:d,disableGutters:Z,fixed:y,maxWidth:j}),w=function(e,t){var n=e.classes,a=e.fixed,r=e.disableGutters,o=e.maxWidth,s={root:["root",o&&"maxWidth".concat((0,c.Z)(String(o))),a&&"fixed",r&&"disableGutters"]};return(0,u.Z)(s,(function(e){return(0,l.Z)(t,e)}),n)}(S,v);return(0,f.jsx)(b,(0,o.Z)({as:d,ownerState:S,className:(0,i.Z)(w.root,a),ref:t},k))}));return y}({createStyledComponent:(0,y.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,b.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,g.Z)({props:e,name:"MuiContainer"})}}),k=j},23738:function(e,t,n){n.d(t,{Z:function(){return M}});var a=n(56666),r=n(31461),o=n(7896),s=n(41867),i=n(66184),c=n(92705),l=n(71939),u=n(9886),d=n(90293),m=n(17886),h=n(80838),f=(0,m.Z)((0,h.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),p=(0,m.Z)((0,h.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),v=n(75693),Z=(0,v.ZP)("span")({position:"relative",display:"flex"}),x=(0,v.ZP)(f)({transform:"scale(1)"}),b=(0,v.ZP)(p)((function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({left:0,position:"absolute",transform:"scale(0)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeIn,duration:t.transitions.duration.shortest})},n.checked&&{transform:"scale(1)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.shortest})})}));var y=function(e){var t=e.checked,n=void 0!==t&&t,a=e.classes,r=void 0===a?{}:a,s=e.fontSize,i=(0,o.Z)({},e,{checked:n});return(0,h.jsxs)(Z,{className:r.root,ownerState:i,children:[(0,h.jsx)(x,{fontSize:s,className:r.background,ownerState:i}),(0,h.jsx)(b,{fontSize:s,className:r.dot,ownerState:i})]})},g=n(9931),j=n(46275),k=n(20326),S=n(33812),w=["checked","checkedIcon","color","icon","name","onChange","size","className"],C=(0,v.ZP)(u.Z,{shouldForwardProp:function(e){return(0,v.FO)(e)||"classes"===e},name:"MuiRadio",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"medium"!==n.size&&t["size".concat((0,g.Z)(n.size))],t["color".concat((0,g.Z)(n.color))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({color:(t.vars||t).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===n.color?t.vars.palette.action.activeChannel:t.vars.palette[n.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,l.Fq)("default"===n.color?t.palette.action.active:t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(0,a.Z)({},"&.".concat(S.Z.checked),{color:(t.vars||t).palette[n.color].main}),(0,a.Z)({},"&.".concat(S.Z.disabled),{color:(t.vars||t).palette.action.disabled}))}));var P=(0,h.jsx)(y,{checked:!0}),A=(0,h.jsx)(y,{}),M=s.forwardRef((function(e,t){var n,a,l,u,m=(0,d.Z)({props:e,name:"MuiRadio"}),f=m.checked,p=m.checkedIcon,v=void 0===p?P:p,Z=m.color,x=void 0===Z?"primary":Z,b=m.icon,y=void 0===b?A:b,M=m.name,L=m.onChange,T=m.size,R=void 0===T?"medium":T,z=m.className,N=(0,r.Z)(m,w),W=(0,o.Z)({},m,{color:x,size:R}),I=function(e){var t=e.classes,n=e.color,a=e.size,r={root:["root","color".concat((0,g.Z)(n)),"medium"!==a&&"size".concat((0,g.Z)(a))]};return(0,o.Z)({},t,(0,c.Z)(r,S.l,t))}(W),F=(0,k.Z)(),E=f,G=(0,j.Z)(L,F&&F.onChange),q=M;return F&&("undefined"===typeof E&&(l=F.value,E="object"===typeof(u=m.value)&&null!==u?l===u:String(l)===String(u)),"undefined"===typeof q&&(q=F.name)),(0,h.jsx)(C,(0,o.Z)({type:"radio",icon:s.cloneElement(y,{fontSize:null!=(n=A.props.fontSize)?n:R}),checkedIcon:s.cloneElement(v,{fontSize:null!=(a=P.props.fontSize)?a:R}),ownerState:W,classes:I,name:q,checked:E,onChange:G,ref:t,className:(0,i.Z)(I.root,z)},N))}))},33812:function(e,t,n){n.d(t,{l:function(){return o}});var a=n(70101),r=n(88498);function o(e){return(0,r.Z)("MuiRadio",e)}var s=(0,a.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]);t.Z=s},21126:function(e,t,n){var a=n(96234),r=n(7896),o=n(31461),s=n(41867),i=n(45489),c=n(40234),l=n(61291),u=n(27088),d=n(56619),m=n(80838),h=["actions","children","defaultValue","name","onChange","value"],f=s.forwardRef((function(e,t){var n=e.actions,f=e.children,p=e.defaultValue,v=e.name,Z=e.onChange,x=e.value,b=(0,o.Z)(e,h),y=s.useRef(null),g=(0,l.Z)({controlled:x,default:p,name:"RadioGroup"}),j=(0,a.Z)(g,2),k=j[0],S=j[1];s.useImperativeHandle(n,(function(){return{focus:function(){var e=y.current.querySelector("input:not(:disabled):checked");e||(e=y.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var w=(0,c.Z)(t,y),C=(0,d.Z)(v),P=s.useMemo((function(){return{name:C,onChange:function(e){S(e.target.value),Z&&Z(e,e.target.value)},value:k}}),[C,Z,S,k]);return(0,m.jsx)(u.Z.Provider,{value:P,children:(0,m.jsx)(i.Z,(0,r.Z)({role:"radiogroup",ref:w},b,{children:f}))})}));t.Z=f},27088:function(e,t,n){var a=n(41867).createContext(void 0);t.Z=a},20326:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(41867),r=n(27088);function o(){return a.useContext(r.Z)}}}]);
//# sourceMappingURL=8156.95091dce.chunk.js.map