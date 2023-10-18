"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2942],{64078:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(30969),i=t(53276),a=t(38184),o=t.n(a),s=t(622),u=t(59767),c=t(37574),l=(0,i.ZL)()((function(e){return{fieldValue:{wordBreak:"break-word",maxHeight:300,fontSize:12,padding:e.spacing(.5),overflow:"auto"}}}));function d(e){var n=e.value,t=l().classes,i="".concat(n).match(/^https?:\/\//);return(0,c.jsx)("div",{className:t.fieldValue,children:r.isValidElement(n)?n:i?(0,c.jsx)(s.Z,{href:"".concat(n),children:"".concat(n)}):(0,c.jsx)(u.SanitizedHTML,{html:o()(n)?JSON.stringify(n):String(n)})})}},10319:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(68079),i=(t(30969),t(6779)),a=t(53276),o=t(37574),s=(0,a.ZL)()((function(e){return{fieldDescription:{"&:hover":{background:"dark"===e.palette.mode?"#e65100":"yellow"}},fieldName:{wordBreak:"break-all",minWidth:90,borderBottom:"1px solid #0003",fontSize:12,background:e.palette.action.disabledBackground,marginRight:e.spacing(1),padding:e.spacing(.5)}}}));function u(e){var n=e.description,t=e.name,a=e.width,u=e.prefix,c=void 0===u?[]:u,l=s(),d=l.classes,f=l.cx,x=[].concat((0,r.Z)(c),[t]).join(".");return n?(0,o.jsx)(i.Z,{title:n,placement:"left",children:(0,o.jsx)("div",{className:f(d.fieldDescription,d.fieldName),children:x})}):(0,o.jsx)("div",{className:d.fieldName,style:{width:a},children:x})}},89891:function(e,n,t){t.d(n,{Z:function(){return u}});t(30969);var r=t(53276),i=t(10319),a=t(64078),o=t(37574),s=(0,r.ZL)()({field:{display:"flex",flexWrap:"wrap"}});function u(e){var n=e.name,t=e.value,r=e.description,u=e.prefix,c=e.width,l=s().classes;return null!==t&&void 0!==t?(0,o.jsxs)("div",{className:l.field,children:[(0,o.jsx)(i.Z,{prefix:u,description:r,name:n,width:c}),(0,o.jsx)(a.Z,{value:t})]}):null}},63977:function(e,n,t){t.d(n,{Z:function(){return o}});t(30969);var r=t(81073),i=t(59767),a=t(37574);function o(e){var n=e.value,t=(0,r.getUriLink)(n);return(0,a.jsx)(i.SanitizedHTML,{html:'<a href="'.concat(t,'">').concat(t,"</a>")})}},52942:function(e,n,t){t.r(n),t.d(n,{Attributes:function(){return ee},BaseAttributes:function(){return se},BaseCard:function(){return re},BaseCoreDetails:function(){return oe},FeatureDetails:function(){return ue},default:function(){return ce}});var r=t(33028),i=t(96234),a=t(30969),o=t(73915),s=t(59313),u=t(80928),c=t(33359),l=t(50501),d=t(75295),f=t(53276),x=t(90550),v=t(23038),p=t(81073),m=t(59767),h=t(72097),Z=t(87535),j=t(94551),g=t(21165),b=t(37574),w=(0,a.lazy)((function(){return t.e(893).then(t.bind(t,893))})),S=(0,a.lazy)((function(){return t.e(9207).then(t.bind(t,29207))})),y=(0,f.ZL)()((function(e){return{formControl:{margin:0},container:{marginTop:e.spacing(4),marginBottom:e.spacing(4)}}}));function k(e){var n=e.model,t=e.feature,r=y().classes,o=(0,a.useState)(!1),s=(0,i.Z)(o,2),u=s[0],c=s[1],l=(0,a.useState)(!1),d=(0,i.Z)(l,2),f=d[0],x=d[1];return n?(0,b.jsxs)("div",{className:r.container,children:[(0,b.jsx)(h.Z,{variant:"contained",onClick:function(){return c(!u)},children:u?"Hide feature sequence":"Show feature sequence"}),(0,b.jsx)(Z.Z,{className:r.formControl,children:(0,b.jsx)(j.Z,{onClick:function(){return x(!0)},children:(0,b.jsx)(g.Z,{})})}),u?(0,b.jsx)(a.Suspense,{fallback:(0,b.jsx)(m.LoadingEllipses,{}),children:(0,b.jsx)(S,{model:n,feature:t},t.uniqueId)}):null,f?(0,b.jsx)(a.Suspense,{fallback:(0,b.jsx)("div",{}),children:(0,b.jsx)(w,{handleClose:function(){return x(!1)}})}):null]}):null}var L=t(89891),N=t(59740),_=t(68079),C=t(38184),D=t.n(C),O=t(33853);function E(e,n,t){return[(0,O.Cn)("".concat(e)||"".concat(n)),"".concat(t)].filter((function(e){return!!e})).join(" - ")}var F=t(41361),T=t(35269),B=t(88399),I=t(49884),M=t(88876),z=t(93384),U=t(10319),q=t(63977),H=t(34298),P=["id"],R=(0,f.ZL)()((function(e){return{margin:{margin:e.spacing(1),width:"100%"}}}));function W(e){var n,t,o=e.value,s=e.prefix,u=e.name,l=R().classes,d=(0,H.x)(),f=d.ref,x=d.scrollLeft,v=(0,a.useState)(!1),m=(0,i.Z)(v,2),h=m[0],Z=m[1],j=Object.keys(o[0]).sort(),g=new Set(j),w=Object.entries(o).map((function(e){var n=(0,i.Z)(e,2),t=n[0],a=n[1],o=a.id,s=(0,N.Z)(a,P);return(0,r.Z)({id:t,identifier:o},s)})),S=(0,F.Z)(o);try{for(S.s();!(n=S.n()).done;)for(var y=n.value,k=0,L=Object.keys(y);k<L.length;k++){var C=L[k];g.add(C)}}catch(A){S.e(A)}finally{S.f()}g.has("id")?(g.delete("id"),t=["identifier"].concat((0,_.Z)(g))):t=(0,_.Z)(g);var D=(0,a.useState)(t.map((function(e){return(0,p.measureGridWidth)(w.map((function(n){return n[e]})))}))),O=(0,i.Z)(D,2),E=O[0],W=O[1];return g.size<j.length+5?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(U.Z,{prefix:s,name:u}),(0,b.jsx)(I.Z,{control:(0,b.jsx)(M.Z,{checked:h,onChange:function(e){return Z(e.target.checked)}}),label:(0,b.jsx)(c.Z,{variant:"body2",children:"Show options"})}),(0,b.jsxs)("div",{className:l.margin,ref:f,children:[(0,b.jsx)(z.Z,{widths:E,setWidths:W,scrollLeft:x}),(0,b.jsx)(T._$,{disableRowSelectionOnClick:!0,rows:w,rowCount:25,rowHeight:25,columnHeaderHeight:35,hideFooter:w.length<25,slots:{toolbar:h?B.n:null},slotProps:{toolbar:{printOptions:{disableToolbarButton:!0}}},columns:t.map((function(e,n){return{field:e,renderCell:function(e){var n=e.value;return(0,p.isUriLocation)(n)?(0,b.jsx)(q.Z,{value:n}):(0,b.jsx)(b.Fragment,{children:(0,p.getStr)(n)})},width:E[n]}}))})]})]}):null}var A=t(64078),J=(0,f.ZL)()((function(e){return{field:{display:"flex",flexWrap:"wrap"},fieldSubvalue:{wordBreak:"break-word",maxHeight:300,padding:e.spacing(.5),border:"1px solid ".concat(e.palette.action.selected),boxSizing:"border-box",overflow:"auto"}}}));function V(e){var n=e.name,t=e.value,r=e.description,i=e.prefix,a=void 0===i?[]:i,o=J().classes;return 1===t.length?D()(t[0])?(0,b.jsx)(ee,{attributes:t[0],prefix:[].concat((0,_.Z)(a),[n])}):(0,b.jsxs)("div",{className:o.field,children:[(0,b.jsx)(U.Z,{prefix:a,description:r,name:n}),(0,b.jsx)(A.Z,{value:t[0]})]}):t.every((function(e){return D()(e)}))?(0,b.jsx)(b.Fragment,{children:t.map((function(e,t){return(0,b.jsx)(ee,{attributes:e,prefix:[].concat((0,_.Z)(a),[n+"-"+t])},JSON.stringify(e)+"-"+t)}))}):(0,b.jsxs)("div",{className:o.field,children:[(0,b.jsx)(U.Z,{prefix:a,description:r,name:n}),t.map((function(e,n){return(0,b.jsx)("div",{className:o.fieldSubvalue,children:(0,b.jsx)(A.Z,{value:e})},JSON.stringify(e)+"-"+n)}))]})}var G=(0,f.ZL)()({field:{display:"flex",flexWrap:"wrap"}});function K(e){var n,t=e.value,r=e.prefix,i=e.name,a=G().classes,o=t.uri,s=t.baseUri,u=void 0===s?"":s;try{n=new URL(o,u).href}catch(c){n=o}return(0,b.jsxs)("div",{className:a.field,children:[(0,b.jsx)(U.Z,{prefix:r,name:i}),(0,b.jsx)(A.Z,{value:n})]})}var $=["__jbrowsefmt"],Q=["omitSingleLevel"],X=170,Y=["__jbrowsefmt","length","position","subfeatures","uniqueId","exonFrames","parentId","thickStart","thickEnd"];function ee(e){var n=e.attributes,t=e.omit,o=void 0===t?[]:t,s=e.omitSingleLevel,u=void 0===s?[]:s,c=e.descriptions,l=e.formatter,d=void 0===l?function(e){return e}:l,f=e.hideUris,x=e.prefix,v=void 0===x?[]:x,m=new Set([].concat((0,_.Z)(o),Y,(0,_.Z)(u))),h=n.__jbrowsefmt,Z=(0,N.Z)(n,$),j=(0,r.Z)((0,r.Z)({},Z),h),g=function(e,n){return Math.ceil((0,p.max)(e.map((function(e){return(0,p.measureText)([].concat((0,_.Z)(n),[e[0]]).join("."),12)}))))+10}(Object.entries(j).filter((function(e){var n=(0,i.Z)(e,2),t=n[0];return void 0!==n[1]&&!m.has(t)})),v);return(0,b.jsx)(b.Fragment,{children:Object.entries(j).filter((function(e){var n=(0,i.Z)(e,2),t=n[0];return void 0!==n[1]&&!m.has(t)})).map((function(n){var t=(0,i.Z)(n,2),o=t[0],s=t[1],u=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.forEach((function(e){D()(t)&&(t=t[e])})),"string"===typeof t?t:D()(t)&&"string"===typeof(null===(n=t)||void 0===n?void 0:n.Description)?t.Description:void 0}([].concat((0,_.Z)(v),[o]),c);if(Array.isArray(s))return s.length>1&&s.every((function(e){return D()(e)}))?(0,b.jsx)(W,{name:o,prefix:v,value:s},o):(0,b.jsx)(V,{name:o,value:s,description:u,prefix:v},o);if(D()(s)){e.omitSingleLevel;var l=(0,N.Z)(e,Q);return(0,p.isUriLocation)(s)?f?null:(0,b.jsx)(K,{name:o,prefix:v,value:s},o):(0,a.createElement)(ee,(0,r.Z)((0,r.Z)({},l),{},{key:o,attributes:s,descriptions:c,prefix:[].concat((0,_.Z)(v),[o])}))}return(0,b.jsx)(L.Z,{name:o,value:d(s,o),description:u,prefix:v,width:Math.min(g,X)},o)}))})}var ne=["name","start","end","strand","refName","description","type"],te=(0,f.ZL)()((function(e){var n;return{expansionPanelDetails:{display:"block",padding:e.spacing(1)},expandIcon:{color:(null===(n=e.palette.tertiary)||void 0===n?void 0:n.contrastText)||"#fff"}}}));function re(e){var n=e.children,t=e.title,r=e.defaultExpanded,o=void 0===r||r,d=te().classes,f=(0,a.useState)(o),x=(0,i.Z)(f,2),p=x[0],m=x[1];return(0,b.jsxs)(s.Z,{expanded:p,onChange:function(){return m((function(e){return!e}))},TransitionProps:{unmountOnExit:!0,timeout:150},children:[(0,b.jsx)(u.Z,{expandIcon:(0,b.jsx)(v.Z,{className:d.expandIcon}),children:(0,b.jsxs)(c.Z,{variant:"button",children:[" ",t]})}),(0,b.jsx)(l.Z,{className:d.expansionPanelDetails,children:n})]})}function ie(e){var n=e.feature,t=n.strand,r={"-1":"-",0:"",1:"+"},i=r[t]?"(".concat(r[t],")"):"",a=(0,p.assembleLocString)(n);return(0,b.jsx)(b.Fragment,{children:"".concat(a," ").concat(i)})}function ae(e){var n,t=e.feature,a=(0,r.Z)((0,r.Z)({},t),t.__jbrowsefmt),o=a.start,s=a.end,u=(0,r.Z)((0,r.Z)({},a),{},{length:(n=s-o,n.toLocaleString("en-US"))});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(L.Z,{name:"Position",value:(0,b.jsx)(ie,(0,r.Z)((0,r.Z)({},e),{},{feature:a}))}),Object.entries({description:"Description",name:"Name",length:"Length",type:"Type"}).map((function(e){var n=(0,i.Z)(e,2),t=n[0];return[n[1],u[t]]})).filter((function(e){return null!=(0,i.Z)(e,2)[1]})).map((function(e){var n=(0,i.Z)(e,2),t=n[0],r=n[1];return(0,b.jsx)(L.Z,{name:t,value:r},t)}))]})}var oe=function(e){return(0,b.jsx)(re,(0,r.Z)((0,r.Z)({},e),{},{title:"Primary data",children:(0,b.jsx)(ae,(0,r.Z)({},e))}))},se=function(e){var n=e.feature;return(0,b.jsx)(re,(0,r.Z)((0,r.Z)({},e),{},{title:"Attributes",children:(0,b.jsx)(ee,(0,r.Z)((0,r.Z)({},e),{},{attributes:n}))}))};function ue(e){var n=e.omit,t=void 0===n?[]:n,i=e.model,a=e.feature,s=e.depth,u=void 0===s?0:s,l=a.mate,f=a.name,x=void 0===f?"":f,v=a.id,h=void 0===v?"":v,Z=a.type,j=void 0===Z?"":Z,g=a.subfeatures,w=a.uniqueId,S=(0,p.getEnv)(i).pluginManager,y=(0,p.getSession)(i),L=S.evaluateExtensionPoint("Core-extraFeaturePanel",null,{session:y,feature:a,model:i});return(0,b.jsxs)(re,{title:E(x,h,j),children:[(0,b.jsx)(c.Z,{children:"Core details"}),(0,b.jsx)(ae,(0,r.Z)({},e)),l?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d.Z,{}),(0,b.jsx)(c.Z,{children:"Mate details"}),(0,b.jsx)(ae,(0,r.Z)((0,r.Z)({},e),{},{feature:(0,r.Z)((0,r.Z)({},l),{},{uniqueId:w+"-mate"})}))]}):null,(0,b.jsx)(d.Z,{}),(0,b.jsx)(c.Z,{children:"Attributes"}),(0,b.jsx)(ee,(0,r.Z)((0,r.Z)({attributes:a},e),{},{omit:t,omitSingleLevel:ne})),(0,b.jsx)(o.SV,{FallbackComponent:function(e){return(0,b.jsx)(m.ErrorMessage,{error:e.error})},children:(0,b.jsx)(k,(0,r.Z)({},e))}),L?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d.Z,{}),(0,b.jsx)(re,{title:L.name,children:(0,b.jsx)(L.Component,(0,r.Z)({},e))})]}):null,null!==g&&void 0!==g&&g.length?(0,b.jsx)(re,{title:"Subfeatures",defaultExpanded:u<1,children:g.map((function(e,n){return(0,b.jsx)(ue,{feature:(0,r.Z)((0,r.Z)({},e),{},{uniqueId:"".concat(w,"_").concat(n)}),model:i,depth:u+1},JSON.stringify(e))}))}):null]})}var ce=(0,x.observer)((function(e){var n=e.model,t=n.error,r=n.featureData;if(t)return(0,b.jsx)(m.ErrorMessage,{error:t});if(!r)return null;var i,a=JSON.parse(JSON.stringify(r,(function(e,n){return void 0===n?null:n})));return i=a,0===Object.keys(i).length?null:(0,b.jsx)(ue,{model:n,feature:a})}))},33853:function(e,n,t){t.d(n,{Cn:function(){return d},D8:function(){return s},Wx:function(){return u},ZK:function(){return c},mw:function(){return l},zo:function(){return a}});var r=t(68079),i=t(33028);function a(e,n){return e.map((function(e){return n.slice(e.start,e.end)})).join("")}function o(e){return"".concat(e.start,"-").concat(e.end)}function s(e){return e.filter((function(e,n,t){return!n||o(e)!==o(t[n-1])}))}function u(e,n){return e.map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{start:n-e.end,end:n-e.start})})).sort((function(e,n){return e.start-n.start}))}function c(e,n){if(!e.length)return[];var t=e.at(0),a=e.at(-1),o=n.findIndex((function(e){return e.end>=t.start&&e.start<=t.start})),s=n.findIndex((function(e){return e.end>=a.end&&e.start<=a.end})),u=n[s],c=n[o],l=[].concat((0,r.Z)(n.slice(0,o)),[{start:c.start,end:t.start}]).map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{type:"five_prime_UTR"})})),d=[{start:a.end,end:u.end}].concat((0,r.Z)(n.slice(s+1))).map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{type:"three_prime_UTR"})}));return[].concat((0,r.Z)(l),(0,r.Z)(d))}function l(e,n){if(!e.length)return[];var t=e.at(0),a=e.at(-1),o=[{start:n.start,end:t.start}].map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{type:"five_prime_UTR"})})),s=[{start:a.end,end:n.end}].map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{type:"three_prime_UTR"})}));return[].concat((0,r.Z)(o),(0,r.Z)(s))}function d(e){return e.length>20?"".concat(e.slice(0,20),"..."):e}},93384:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(68079),i=t(96234),a=t(30969),o=t(53276),s=t(26737),u=t(37574),c=(0,o.ZL)()((function(e){return{resizeBar:{background:e.palette.action.disabledBackground,height:12,position:"relative",overflow:"hidden"},tick:{position:"absolute",height:"100%",pointerEvents:"none",background:e.palette.action.disabled,width:1},hiddenTick:{position:"absolute",height:"100%",width:5}}}));function l(e){var n=e.left,t=e.scrollLeft,r=e.idx,i=e.onDrag,o=e.onMouseDown,l=c().classes,d=(0,a.useCallback)((function(e,n){return i(e,n,r)}),[r,i]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.Z,{onDrag:d,onMouseDown:o,vertical:!0,className:l.hiddenTick,style:{left:n-t-2.5}}),(0,u.jsx)("div",{style:{left:n-t},className:l.tick})]})}function d(e){for(var n=e.widths,t=e.setWidths,o=e.checkbox,s=e.scrollLeft,d=void 0===s?0:s,f=c().classes,x=[],v=(0,a.useState)(),p=(0,i.Z)(v,2),m=p[0],h=p[1],Z=o?52:0,j=0;j<n.length;j++){var g=n[j];x[j]=g+Z,Z+=g}return(0,u.jsx)("div",{className:f.resizeBar,children:x.map((function(e,i){return(0,u.jsx)(l,{onMouseDown:function(){h((0,r.Z)(n))},left:i===x.length-1?e-3:e,onDrag:function(e,i,a){var o=(0,r.Z)(n);o[a]=Math.max(m[a]-i,50),t(o)},idx:i,scrollLeft:d},i)}))})}},34298:function(e,n,t){t.d(n,{x:function(){return a}});var r=t(96234),i=t(30969);function a(){var e=(0,i.useRef)(null),n=(0,i.useState)(0),t=(0,r.Z)(n,2),a=t[0],o=t[1];return(0,i.useEffect)((function(){var n=setInterval((function(){var n,t=null===(n=e.current)||void 0===n?void 0:n.querySelector(".MuiDataGrid-virtualScroller");t&&o(t.scrollLeft)}),100);return function(){clearInterval(n)}}),[]),{ref:e,scrollLeft:a}}}}]);
//# sourceMappingURL=2942.d39d60ad.chunk.js.map