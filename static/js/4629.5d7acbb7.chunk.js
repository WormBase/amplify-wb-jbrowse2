"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4629],{74629:function(e,t,n){n.r(t);var r=n(32723),a=n(34795),s=n(96234),i=n(30969),o=n(53276),c=n(90550),u=n(81073),l=n(1059),d=n(3994),x=n(87535),m=n(94308),h=n(72097),p=n(59767),f=n(88581),b=n(57129),v=n(73922),g=n(37574),Z=(0,o.ZL)()((function(e){return{importFormContainer:{padding:e.spacing(2)},button:{margin:e.spacing(2)},container:{padding:e.spacing(4)}}})),k=(0,c.observer)((function(e){var t,n,o,c,k=e.model,S=Z().classes,w=(0,u.getSession)(k),y=w.assemblyNames,j=w.assemblyManager,W=w.textSearchManager,C=k.rankSearchResults,N=k.error,R=(0,i.useState)(y[0]),L=(0,s.Z)(R,2),G=L[0],M=L[1],T=(0,i.useState)(),P=(0,s.Z)(T,2),E=P[0],I=P[1],_=k.searchScope(G),q=j.get(G),A=y.length?null===q||void 0===q?void 0:q.error:"No configured assemblies",F=A||N,z=(0,i.useState)(""),D=(0,s.Z)(z,2),O=D[0],K=D[1],B=null===q||void 0===q?void 0:q.regions,H=!!B,J=B?null===(t=B[0])||void 0===t?void 0:t.refName:"";function Q(e){return(n=n||(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.getLocation(),a=t.getTrackId(),!n){e.next=6;break}return e.next=5,k.navToLocString(n,G);case 5:a&&k.showTrack(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){return(o=o||(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,i,o,c,u,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(null===E||void 0===E?void 0:E.getDisplayString())!==t||!E.hasLocation()){e.next=6;break}return e.next=4,Q(E);case 4:e.next=31;break;case 6:if(null===E||void 0===E||null===(n=E.results)||void 0===n||!n.length){e.next=10;break}k.setSearchResults(E.results,E.getLabel(),G),e.next=31;break;case 10:if(a=(0,v.pG)(t,":"),i=(0,s.Z)(a,2),o=i[0],c=i[1],!((u=(null===q||void 0===q?void 0:q.allRefNamesWithLowerCase)||[]).includes(t)||u.includes(o)&&!Number.isNaN(Number.parseInt(c,10)))){e.next=17;break}return e.next=15,k.navToLocString(t,G);case 15:e.next=31;break;case 17:return e.next=19,(0,v.kx)({queryString:t,searchType:"exact",searchScope:_,rankSearchResults:C,textSearchManager:W,assembly:q});case 19:if(!((l=e.sent).length>1)){e.next=24;break}k.setSearchResults(l,t.toLowerCase(),G),e.next=31;break;case 24:if(1!==l.length){e.next=29;break}return e.next=27,Q(l[0]);case 27:e.next=31;break;case 29:return e.next=31,k.navToLocString(t,G);case 31:e.next=37;break;case 33:e.prev=33,e.t0=e.catch(0),console.error(e.t0),w.notify("".concat(e.t0),"warning");case 37:case"end":return e.stop()}}),e,null,[[0,33]])})))).apply(this,arguments)}return(0,i.useEffect)((function(){K(J)}),[J,G]),(0,g.jsxs)("div",{className:S.container,children:[F?(0,g.jsx)(p.ErrorMessage,{error:F}):null,(0,g.jsx)(l.Z,{className:S.importFormContainer,children:(0,g.jsx)("form",{onSubmit:function(e){return(c=c||(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),k.setError(void 0),!O){e.next=5;break}return e.next=5,U(O);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},children:(0,g.jsxs)(d.ZP,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",children:[(0,g.jsx)(d.ZP,{item:!0,children:(0,g.jsx)(x.Z,{children:(0,g.jsx)(p.AssemblySelector,{onChange:function(e){return M(e)},localStorageKey:"lgv",session:w,selected:G})})}),(0,g.jsx)(d.ZP,{item:!0,children:G?A?(0,g.jsx)(f.Z,{style:{color:"red"}}):H?(0,g.jsx)(x.Z,{children:(0,g.jsx)(b.Z,{fetchResults:function(e){return(0,v.kx)({queryString:e,assembly:q,textSearchManager:W,rankSearchResults:C,searchScope:_})},model:k,assemblyName:G,value:O,minWidth:270,onChange:function(e){return K(e)},onSelect:function(e){return I(e)},TextFieldProps:{variant:"outlined",helperText:"Enter sequence name, feature name, or location"}})}):(0,g.jsx)(m.Z,{size:20,disableShrink:!0}):null}),(0,g.jsxs)(d.ZP,{item:!0,children:[(0,g.jsx)(x.Z,{children:(0,g.jsx)(h.Z,{type:"submit",disabled:!O,className:S.button,variant:"contained",color:"primary",children:"Open"})}),(0,g.jsx)(x.Z,{children:(0,g.jsx)(h.Z,{disabled:!O,className:S.button,onClick:function(){k.setError(void 0),k.showAllRegionsInAssembly(G)},variant:"contained",color:"secondary",children:"Show all regions in assembly"})})]})]})})})]})}));t.default=k},1059:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(56666),a=n(31461),s=n(7896),i=n(30969),o=n(87023),c=n(89150),u=n(2975),l=n(26540),d=n(7541),x=n(19210),m=n(56871),h=n(37574),p=["className","component","disableGutters","fixed","maxWidth","classes"],f=(0,m.Z)(),b=(0,x.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,c.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),v=function(e){return(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:f})};var g=n(24099),Z=n(45971),k=n(17363),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?b:t,d=e.useThemeProps,x=void 0===d?v:d,m=e.componentName,f=void 0===m?"MuiContainer":m,g=n((function(e){var t=e.theme,n=e.ownerState;return(0,s.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,r.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var r=n,a=t.breakpoints.values[r];return 0!==a&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(a).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,s.Z)({},"xs"===n.maxWidth&&(0,r.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,r.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),Z=i.forwardRef((function(e,t){var n=x(e),r=n.className,i=n.component,d=void 0===i?"div":i,m=n.disableGutters,b=void 0!==m&&m,v=n.fixed,Z=void 0!==v&&v,k=n.maxWidth,S=void 0===k?"lg":k,w=(0,a.Z)(n,p),y=(0,s.Z)({},n,{component:d,disableGutters:b,fixed:Z,maxWidth:S}),j=function(e,t){var n=e.classes,r=e.fixed,a=e.disableGutters,s=e.maxWidth,i={root:["root",s&&"maxWidth".concat((0,c.Z)(String(s))),r&&"fixed",a&&"disableGutters"]};return(0,l.Z)(i,(function(e){return(0,u.Z)(t,e)}),n)}(y,f);return(0,h.jsx)(g,(0,s.Z)({as:d,ownerState:y,className:(0,o.Z)(j.root,r),ref:t},w))}));return Z}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,g.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,k.Z)({props:e,name:"MuiContainer"})}}),w=S}}]);
//# sourceMappingURL=4629.5d7acbb7.chunk.js.map