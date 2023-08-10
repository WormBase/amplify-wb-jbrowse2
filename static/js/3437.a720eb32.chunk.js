"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[3437],{13437:function(e,t,n){n.r(t),n.d(t,{default:function(){return ie}});var r=n(33028),a=n(96234),o=n(96902),s=n(4782),i=n(13655),c=n(33266),l=n(15996),d=n(82793),u=n(95802),p=n(32723),f=n(34795),m=n(35388),h=n(66431),v=n(32143),x=n(15817),g=n(8317),Z=n(44536),b=n(49408),k=n(91188),y=n(63680),j=n(99836),w=n(63348),N=n(66519),C=n(80367),S=n(32114),T=n(16151),D=n(90659),A=n(68079),M=n(6880),I=n(36276),P=n(61809),E=n(31091),O=n(38613),R=n(78581),B=n(5738),L=n(25322),F=n(31946),W=n(51467),J=n(29938),U=(0,k.ZL)()((function(e){return{paper:{display:"flex",flexDirection:"column",padding:e.spacing(1)},card:{marginTop:e.spacing(1)}}})),_=(0,s.observer)((function(e){var t=e.model,n=U().classes,r=(0,o.useState)(""),s=(0,a.Z)(r,2),i=s[0],c=s[1],l=(0,o.useState)(""),d=(0,a.Z)(l,2),u=d[0],p=d[1],f=(0,o.useState)(["Name","ID"]),m=(0,a.Z)(f,2),h=m[0],v=m[1],x=(0,o.useState)(["CDS","exon"]),g=(0,a.Z)(x,2),Z=g[0],b=g[1],k=[{label:"Indexing attributes",values:h},{label:"Feature types to exclude",values:Z}];return(0,o.useEffect)((function(){t.setTextIndexingConf({attributes:h,exclude:Z})}),[t,h,Z]),(0,J.jsxs)(M.Z,{className:n.paper,children:[(0,J.jsx)(I.Z,{children:"Indexing configuration"}),k.map((function(e,t){return(0,J.jsx)(P.Z,{raised:!0,className:n.card,children:(0,J.jsxs)(E.Z,{children:[(0,J.jsx)(I.Z,{children:e.label}),(0,J.jsxs)(O.Z,{disablePadding:!0,children:[e.values.map((function(n,r){return(0,J.jsx)(R.ZP,{disableGutters:!0,children:(0,J.jsx)(N.Z,{value:n,InputProps:{endAdornment:(0,J.jsx)(B.Z,{position:"end",children:(0,J.jsx)(L.Z,{onClick:function(){var n=e.values.filter((function(e,t){return t!==r}));0===t?v(n):b(n)},children:(0,J.jsx)(F.Z,{})})})}})},r)})),(0,J.jsx)(R.ZP,{disableGutters:!0,children:(0,J.jsx)(N.Z,{value:0===t?i:u,placeholder:"add new",onChange:function(e){0===t?c(e.target.value):p(e.target.value)},InputProps:{endAdornment:(0,J.jsx)(B.Z,{position:"end",children:(0,J.jsx)(L.Z,{onClick:function(){0===t?(v([].concat((0,A.Z)(h),[i])),c("")):(b([].concat((0,A.Z)(Z),[u])),p(""))},disabled:0===t?""===i:""===u,"data-testid":"stringArrayAdd-Feat",children:(0,J.jsx)(W.Z,{})})})}})})]})]})},e.label)}))]})})),G=(0,k.ZL)()((function(e){return{spacing:{marginBottom:e.spacing(3)}}})),q=(0,s.observer)((function(e){var t=e.model,n=G().classes,r=(0,u.getEnv)(t).pluginManager,a=t.trackType,o=r.getTrackElements();return(0,J.jsx)(N.Z,{className:n.spacing,value:a,variant:"outlined",label:"Track type",helperText:"Select track type",select:!0,fullWidth:!0,onChange:function(e){return t.setTrackType(e.target.value)},SelectProps:{SelectDisplayProps:{"data-testid":"trackTypeSelect"}},children:o.map((function(e){var t=e.name,n=e.displayName;return(0,J.jsx)(l.Z,{value:t,children:n},t)}))})})),V=n(71610),H=(0,k.ZL)()((function(e){return{spacing:{marginBottom:e.spacing(3)}}}));function z(e){var t={};return e.forEach((function(e){var n,r=(null===(n=e.adapterMetadata)||void 0===n?void 0:n.category)||"Default";t[r]||(t[r]=[]),t[r].push(e)})),t}var K=(0,s.observer)((function(e){var t=e.model,n=H().classes,r=t.trackAdapter,o=(0,u.getEnv)(t).pluginManager;return(0,J.jsx)(N.Z,{className:n.spacing,value:"UNKNOWN"!==(null===r||void 0===r?void 0:r.type)?null===r||void 0===r?void 0:r.type:"",label:"Adapter type",variant:"outlined",helperText:"Select an adapter type",select:!0,fullWidth:!0,onChange:function(e){return t.setAdapterHint(e.target.value)},SelectProps:{SelectDisplayProps:{"data-testid":"adapterTypeSelect"}},children:Object.entries(z(o.getAdapterElements().filter((function(e){var t;return!(null!==(t=e.adapterMetadata)&&void 0!==t&&t.hiddenFromGUI)})))).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return[(0,J.jsx)(V.Z,{children:n}),r.map((function(e){return(0,J.jsx)(l.Z,{value:e.name,children:e.displayName},e.name)}))]}))})})),Y=(0,k.ZL)()((function(e){return{spacing:{marginBottom:e.spacing(3)}}}));function Q(e){var t=e.trackAdapter,n=e.trackType,r=Y().classes,a=t.type,o=t.subadapter;return"SNPCoverageAdapter"===a?(0,J.jsxs)(m.Z,{className:r.spacing,children:["Selected ",(0,J.jsx)("code",{children:n}),". Using adapter ",(0,J.jsx)("code",{children:a})," with subadapter ",(0,J.jsx)("code",{children:null===o||void 0===o?void 0:o.type}),". Please enter a track name and, if necessary, update the track type."]}):(0,J.jsxs)(m.Z,{className:r.spacing,children:["Using adapter ",(0,J.jsx)("code",{children:a})," and guessing track type"," ",(0,J.jsx)("code",{children:n}),". Please enter a track name and, if necessary, update the track type."]})}function X(e){var t=e.model,n=Y().classes;return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(m.Z,{className:n.spacing,children:["JBrowse was not able to guess the adapter type for this data, but it may be in the list below. If not, you can"," ",(0,J.jsx)(w.Z,{href:"https://github.com/GMOD/jbrowse-components/releases",target:"_blank",rel:"noopener noreferrer",children:"check for new releases"})," ","of JBrowse to see if they support this data type or"," ",(0,J.jsx)(w.Z,{href:"https://github.com/GMOD/jbrowse-components/issues/new",target:"_blank",rel:"noopener noreferrer",children:"file an issue"})," ","and add a feature request for this data type."]}),(0,J.jsx)(K,{model:t})]})}var $=(0,s.observer)((function(e){var t=e.model,n=Y().classes,r=(0,o.useState)(!0),s=(0,a.Z)(r,2),c=s[0],l=s[1],d=(0,u.getSession)(t),p=t.trackName,f=t.trackAdapter,h=t.trackType,v=t.warningMessage,x=t.adapterHint;if((0,o.useEffect)((function(){""===x&&f&&t.setAdapterHint(f.type)}),[x,f,null===f||void 0===f?void 0:f.type,t]),t.unsupported)return(0,J.jsxs)(m.Z,{className:n.spacing,children:["This version of JBrowse cannot display data of this type. It is possible, however, that there is a newer version that can display them. You can"," ",(0,J.jsx)(w.Z,{href:"https://github.com/GMOD/jbrowse-components/releases",target:"_blank",rel:"noopener noreferrer",children:"check for new releases"})," ","of JBrowse or"," ",(0,J.jsx)(w.Z,{href:"https://github.com/GMOD/jbrowse-components/issues/new",target:"_blank",rel:"noopener noreferrer",children:"file an issue"})," ","and add a feature request for this data type."]});if((null===f||void 0===f?void 0:f.type)===T.UNKNOWN)return(0,J.jsx)(X,{model:t});if(null===f||void 0===f||!f.type)return(0,J.jsx)(m.Z,{children:"Could not recognize this data type."});var g=(0,u.supportedIndexingAdapters)(null===f||void 0===f?void 0:f.type);return(0,J.jsxs)("div",{children:[f?(0,J.jsx)(Q,{trackAdapter:f,trackType:h}):null,v?(0,J.jsx)(m.Z,{style:{color:"orange"},children:v}):null,(0,J.jsx)(N.Z,{className:n.spacing,label:"trackName",helperText:"A name for this track",fullWidth:!0,value:p,onChange:function(e){return t.setTrackName(e.target.value)},inputProps:{"data-testid":"trackNameInput"}}),(0,J.jsx)(K,{model:t}),(0,J.jsx)(q,{model:t}),(0,J.jsx)(D.AssemblySelector,{session:d,helperText:"Select assembly to add track to",selected:t.assembly,onChange:function(e){return t.setAssembly(e)},TextFieldProps:{fullWidth:!0,SelectProps:{SelectDisplayProps:{"data-testid":"assemblyNameSelect"}}}}),u.isElectron&&g&&(0,J.jsx)(i.Z,{children:(0,J.jsx)(C.Z,{label:"Index track for text searching?",control:(0,J.jsx)(S.Z,{checked:c,onChange:function(e){l(e.target.checked),t.setTextIndexTrack(e.target.checked)}})})}),u.isElectron&&c&&g?(0,J.jsx)(_,{model:t}):null]})})),ee=(0,k.ZL)()((function(e){return{paper:{padding:e.spacing(2)},spacer:{height:e.spacing(8)}}}));var te=(0,s.observer)((function(e){var t=e.model,n=ee().classes,r=(0,y.getRoot)(t);return(0,J.jsxs)(M.Z,{className:n.paper,children:[(0,J.jsx)(D.FileSelector,{name:"Main file",description:"",location:t.trackData,setLocation:t.setTrackData,setName:t.setTrackName,rootModel:r}),(0,J.jsx)("div",{className:n.spacer}),(0,J.jsx)(D.FileSelector,{name:"Index file",description:"(Optional) The URL of the index file is automatically inferred from the URL of the main file if it is not supplied.",location:t.indexTrackData,setLocation:t.setIndexTrackData,setName:t.setTrackName,rootModel:r})]})})),ne=(0,k.ZL)()((function(e){return{root:{marginTop:e.spacing(1)},stepper:{backgroundColor:e.palette.background.default},button:{marginRight:e.spacing(1)},actionsContainer:{marginTop:e.spacing(10),marginBottom:e.spacing(2)},alertContainer:{padding:"".concat(e.spacing(2),"px 0px ").concat(e.spacing(2),"px 0px")}}})),re=["Enter track data","Confirm track type"];var ae=(0,s.observer)((function(e){var t=e.model,n=(0,o.useState)(0),s=(0,a.Z)(n,2),i=s[0],c=s[1],l=ne().classes,d=(0,y.getRoot)(t).jobsManager,k=(0,u.getSession)(t),w=t.assembly,N=t.trackAdapter,C=t.trackData,S=t.trackName,T=t.trackType,D=t.textIndexTrack,A=t.textIndexingConf,M=(0,o.useState)(),I=(0,a.Z)(M,2),P=I[0],E=I[1];function O(e){switch(e){case 0:return(0,J.jsx)(te,{model:t});case 1:return(0,J.jsx)($,{model:t});default:return(0,J.jsx)(m.Z,{children:"Unknown step"})}}function R(){return B.apply(this,arguments)}function B(){return(B=(0,f.Z)((0,p.Z)().mark((function e(){var n,a,o,s,l;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i===re.length-1){e.next=3;break}return c(i+1),e.abrupt("return");case 3:n=["".concat(S.toLowerCase().replace(/ /g,"_"),"-").concat(Date.now()),"".concat(k.adminMode?"":"-sessionTrack")].join(""),(a=k.assemblyManager.get(w))&&N&&"UNKNOWN"!==N.type?(k.addTrackConf({trackId:n,type:T,name:S,assemblyNames:[w],adapter:(0,r.Z)((0,r.Z)({},N),{},{sequenceAdapter:(0,j.getConf)(a,["sequence","adapter"])})}),t.view?(t.view.showTrack(n),u.isElectron&&D&&(0,u.supportedIndexingAdapters)(N.type)&&(o=A||{attributes:["Name","ID"],exclude:["CDS","exon"]},s=S+"-index",l={indexingParams:(0,r.Z)((0,r.Z)({},o),{},{assemblies:[w],tracks:[n],indexType:"perTrack",name:s,timestamp:(new Date).toISOString()}),name:s,cancelCallback:function(){return d.abortJob()}},d.queueJob(l))):k.notify("Open a new view, or use the track selector in an existing view, to view this track","info"),t.clearData(),k.hideWidget(t)):E("Failed to add track.\nThe configuration of this file is not currently supported.");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){E(void 0),c(i-1)}function F(){switch(i){case 0:return!C;case 1:return!(S&&T&&null!==N&&void 0!==N&&N.type&&w);default:return!0}}return(0,J.jsx)("div",{className:l.root,children:(0,J.jsx)(h.Z,{className:l.stepper,activeStep:i,orientation:"vertical",children:re.map((function(e,t){return(0,J.jsxs)(v.Z,{children:[(0,J.jsx)(x.Z,{children:e}),(0,J.jsxs)(g.Z,{children:[O(t),(0,J.jsxs)("div",{className:l.actionsContainer,children:[(0,J.jsx)(Z.Z,{disabled:0===i,onClick:L,className:l.button,children:"Back"}),(0,J.jsx)(Z.Z,{disabled:F(),variant:"contained",color:"primary",onClick:R,className:l.button,"data-testid":"addTrackNextButton",children:i===re.length-1?"Add":"Next"})]}),P?(0,J.jsx)("div",{className:l.alertContainer,children:(0,J.jsx)(b.Z,{severity:"error",children:P})}):null]})]},e)}))})})})),oe=(0,k.ZL)()({textbox:{width:"100%"},submit:{marginTop:25,marginBottom:100,display:"block"}});var se=(0,s.observer)((function(e){var t=e.model,n=oe().classes,r=(0,o.useState)(""),s=(0,a.Z)(r,2),i=s[0],c=s[1],l=(0,o.useState)(),d=(0,a.Z)(l,2),p=d[0],f=d[1];return(0,J.jsxs)("div",{children:[p?(0,J.jsx)(D.ErrorMessage,{error:p}):null,(0,J.jsx)(N.Z,{multiline:!0,rows:10,value:i,onChange:function(e){return c(e.target.value)},placeholder:"Paste track config or array of track configs in JSON format",variant:"outlined",className:n.textbox}),(0,J.jsx)(Z.Z,{variant:"contained",className:n.submit,onClick:function(){try{f(void 0);var e=(0,u.getSession)(t),n=JSON.parse(i),r=Array.isArray(n)?n:[n];r.forEach((function(t){return e.addTrackConf(t)})),r.forEach((function(e){return e.trackId})),t.clearData(),e.hideWidget(t)}catch(a){f(a)}},children:"Submit"})]})}));var ie=(0,s.observer)((function(e){var t=e.model,n=(0,o.useState)("Default add track workflow"),s=(0,a.Z)(n,2),p=s[0],f=s[1],m=(0,u.getEnv)(t).pluginManager.getAddTrackWorkflowElements(),h=(0,r.Z)({"Default add track workflow":ae,"Add track JSON":se},Object.fromEntries(m.map((function(e){return[e.name,e.ReactComponent]})))),v=h[p]?p:"Default add track workflow",x=h[v];return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(i.Z,{children:[(0,J.jsx)(c.Z,{value:v,onChange:function(e){return f(e.target.value)},children:Object.keys(h).map((function(e){return(0,J.jsx)(l.Z,{value:e,children:e},e)}))}),(0,J.jsx)(d.Z,{children:"Type of add track workflow"})]}),(0,J.jsx)("br",{}),(0,J.jsx)(x,{model:t})]})}))},61809:function(e,t,n){var r=n(7896),a=n(31461),o=n(96902),s=n(24463),i=n(73674),c=n(2252),l=n(53068),d=n(6880),u=n(1162),p=n(29938),f=["className","raised"],m=(0,c.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),h=o.forwardRef((function(e,t){var n=(0,l.Z)({props:e,name:"MuiCard"}),o=n.className,c=n.raised,d=void 0!==c&&c,h=(0,a.Z)(n,f),v=(0,r.Z)({},n,{raised:d}),x=function(e){var t=e.classes;return(0,i.Z)({root:["root"]},u.y,t)}(v);return(0,p.jsx)(m,(0,r.Z)({className:(0,s.default)(x.root,o),elevation:d?8:void 0,ref:t,ownerState:v},h))}));t.Z=h},1162:function(e,t,n){n.d(t,{y:function(){return o}});var r=n(74732),a=n(61235);function o(e){return(0,a.Z)("MuiCard",e)}var s=(0,r.Z)("MuiCard",["root"]);t.Z=s},31091:function(e,t,n){var r=n(7896),a=n(31461),o=n(96902),s=n(24463),i=n(73674),c=n(2252),l=n(53068),d=n(83387),u=n(29938),p=["className","component"],f=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),m=o.forwardRef((function(e,t){var n=(0,l.Z)({props:e,name:"MuiCardContent"}),o=n.className,c=n.component,m=void 0===c?"div":c,h=(0,a.Z)(n,p),v=(0,r.Z)({},n,{component:m}),x=function(e){var t=e.classes;return(0,i.Z)({root:["root"]},d.N,t)}(v);return(0,u.jsx)(f,(0,r.Z)({as:m,className:(0,s.default)(x.root,o),ownerState:v,ref:t},h))}));t.Z=m},83387:function(e,t,n){n.d(t,{N:function(){return o}});var r=n(74732),a=n(61235);function o(e){return(0,a.Z)("MuiCardContent",e)}var s=(0,r.Z)("MuiCardContent",["root"]);t.Z=s},63348:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(68079),a=n(96234),o=n(56666),s=n(31461),i=n(7896),c=n(96902),l=n(24463),d=n(73674),u=n(70378),p=n(2252),f=n(53068),m=n(89779),h=n(22756),v=n(35388),x=n(974),g=n(72762),Z=n(16644),b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},k=function(e){var t=e.theme,n=e.ownerState,r=function(e){return b[e]||e}(n.color),a=(0,g.DW)(t,"palette.".concat(r),!1)||n.color,o=(0,g.DW)(t,"palette.".concat(r,"Channel"));return"vars"in t&&o?"rgba(".concat(o," / 0.4)"):(0,Z.Fq)(a,.4)},y=n(29938),j=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],w=(0,p.ZP)(v.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat((0,u.Z)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,i.Z)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:k({theme:t,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&(0,o.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(x.Z.focusVisible),{outline:"auto"}))})),N=c.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiLink"}),o=n.className,p=n.color,v=void 0===p?"primary":p,g=n.component,Z=void 0===g?"a":g,k=n.onBlur,N=n.onFocus,C=n.TypographyClasses,S=n.underline,T=void 0===S?"always":S,D=n.variant,A=void 0===D?"inherit":D,M=n.sx,I=(0,s.Z)(n,j),P=(0,m.Z)(),E=P.isFocusVisibleRef,O=P.onBlur,R=P.onFocus,B=P.ref,L=c.useState(!1),F=(0,a.Z)(L,2),W=F[0],J=F[1],U=(0,h.Z)(t,B),_=(0,i.Z)({},n,{color:v,component:Z,focusVisible:W,underline:T,variant:A}),G=function(e){var t=e.classes,n=e.component,r=e.focusVisible,a=e.underline,o={root:["root","underline".concat((0,u.Z)(a)),"button"===n&&"button",r&&"focusVisible"]};return(0,d.Z)(o,x.w,t)}(_);return(0,y.jsx)(w,(0,i.Z)({color:v,className:(0,l.default)(G.root,o),classes:C,component:Z,onBlur:function(e){O(e),!1===E.current&&J(!1),k&&k(e)},onFocus:function(e){R(e),!0===E.current&&J(!0),N&&N(e)},ref:U,ownerState:_,variant:A,sx:[].concat((0,r.Z)(Object.keys(b).includes(v)?[]:[{color:v}]),(0,r.Z)(Array.isArray(M)?M:[M]))},I))}))},974:function(e,t,n){n.d(t,{w:function(){return o}});var r=n(74732),a=n(61235);function o(e){return(0,a.Z)("MuiLink",e)}var s=(0,r.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);t.Z=s}}]);
//# sourceMappingURL=3437.a720eb32.chunk.js.map