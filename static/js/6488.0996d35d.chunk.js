"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6488],{46488:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ze}});var r=t(96234),a=t(68079),o=t(33028),s=t(96902),l=t(99836),i=t(50952),c=t(75695),u=t(35388),d=t(53244),p=t(52),x=t(35478),h=t(4782),v=t(63680),m=t(58666),j=t(59959),f=t(27664),Z=t(17867),g=t(89640),b=t(66519),C=t(66026),y=t(15996),N=t(6880),k=t(25322),T=t(77668),S=t(36276),w=t(38613),L=t(78581),M=t(5738),A=t(44536),I=t(82793),F=t(31946),E=t(29938),P=(0,h.observer)((function(e){var n=e.slot,t=(0,s.useState)(""),a=(0,r.Z)(t,2),o=a[0],l=a[1],i=(0,s.useState)(!1),c=(0,r.Z)(i,2),u=c[0],d=c[1];return(0,E.jsxs)(E.Fragment,{children:[n.name?(0,E.jsx)(S.Z,{children:n.name}):null,(0,E.jsxs)(w.Z,{disablePadding:!0,children:[n.value.map((function(e,t){return(0,E.jsx)(L.ZP,{disableGutters:!0,children:(0,E.jsx)(b.Z,{value:e,onChange:function(e){return n.setAtIndex(t,e.target.value)},InputProps:{endAdornment:(0,E.jsx)(M.Z,{position:"end",children:(0,E.jsx)(k.Z,{onClick:function(){return n.removeAtIndex(t)},children:(0,E.jsx)(F.Z,{})})})}})},t)})),u?(0,E.jsx)(L.ZP,{disableGutters:!0,children:(0,E.jsx)(b.Z,{value:o,placeholder:"add new",onChange:function(e){return l(e.target.value)},InputProps:{endAdornment:(0,E.jsx)(M.Z,{position:"end",children:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(A.Z,{color:"primary",variant:"contained",style:{margin:2},"data-testid":"stringArrayAdd-".concat(n.name),onClick:function(){d(!1),n.add(o),l("")},children:"OK"}),(0,E.jsx)(A.Z,{color:"primary",variant:"contained",style:{margin:2},onClick:function(){d(!1),l("")},children:"Cancel"})]})})}})}):null,(0,E.jsx)(A.Z,{color:"primary",variant:"contained",style:{margin:4},disabled:u,onClick:function(){return d(!0)},children:"Add item"})]}),(0,E.jsx)(I.Z,{children:n.description})]})})),W=t(50543),H=t(56921),O=t(57900),V='Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace',D=(0,x.ZL)()((function(e){return{callbackEditor:{marginTop:"16px",borderBottom:"1px solid ".concat(e.palette.divider),width:"100%",fontFamily:V},textAreaFont:{fontFamily:V},callbackContainer:{width:"100%",overflowX:"auto"},error:{color:"red",fontSize:"0.8em"}}}));var _=(0,h.observer)((function(e){var n=e.slot,t=D().classes,a=(0,s.useState)(n.value),o=(0,r.Z)(a,2),l=o[0],i=o[1],c=(0,s.useState)(),u=(0,r.Z)(c,2),d=u[0],p=u[1],x=(0,f.useDebounce)(l,400);return(0,s.useEffect)((function(){try{var e,t=x.startsWith("jexl:")?x:"jexl:".concat(x);if("jexl:"===t)throw new Error("Empty jexl expression is not valid");(0,H.P)(t,null===(e=(0,v.getEnv)(n).pluginManager)||void 0===e?void 0:e.jexl),n.set(t),p(void 0)}catch(r){console.error({e:r}),p(r)}}),[x,n]),(0,E.jsxs)(E.Fragment,{children:[d?(0,E.jsx)("p",{className:t.error,children:"".concat(d)}):null,(0,E.jsxs)("div",{className:t.callbackContainer,children:[(0,E.jsx)(b.Z,{multiline:!0,className:t.callbackEditor,value:l.startsWith("jexl:")?l.split("jexl:")[1]:l,onChange:function(e){return i(e.target.value)},style:{background:d?"#fdd":void 0},InputProps:{classes:{input:t.textAreaFont}}}),(0,E.jsx)("p",{children:n.description}),(0,E.jsx)(W.Z,{title:(0,E.jsxs)("div",{children:["Callbacks are written in Jexl format. Click to learn more.",(0,E.jsx)("br",{})," Names of available context items: ",n.contextVariable]}),arrow:!0,children:(0,E.jsx)(k.Z,{color:"primary",onClick:function(){var e=window.open("https://github.com/TomFrost/Jexl","_blank","noopener,noreferrer");e&&(e.opener=null)},children:(0,E.jsx)(O.Z,{})})})]})]})})),z=(0,s.lazy)((function(){return t.e(5335).then(t.bind(t,85335))})),K=function(e){var n=e.value,t=void 0===n?"#000":n,a=e.label,l=void 0===a?"":a,i=e.TextFieldProps,c=void 0===i?{}:i,u=e.onChange,d=(0,s.useState)(!1),p=(0,r.Z)(d,2),x=p[0],h=p[1];return(0,E.jsxs)("div",{style:{display:"flex"},children:[(0,E.jsx)(b.Z,(0,o.Z)({value:t,label:l,onClick:function(){return h(!x)},onChange:function(e){return u(e.target.value)}},c)),(0,E.jsx)("div",{style:{marginTop:10},children:(0,E.jsx)(s.Suspense,{fallback:(0,E.jsx)("div",{}),children:(0,E.jsx)(z,{color:t,onChange:function(e){return u(e)}})})})]})};var B=(0,h.observer)((function(e){var n=e.slot;return(0,E.jsx)(K,{label:n.name,value:n.value,onChange:function(e){return n.set(e)},TextFieldProps:{helperText:n.description,fullWidth:!0}})})),U=t(49968),G=t(61809),J=t(55192),X=t(31091),R=t(51467),q=(0,x.ZL)()((function(e){return{card:{marginTop:e.spacing(1)}}})),Q=(0,h.observer)((function(e){var n=e.slot,t=q().classes,o=(0,s.useState)(""),l=(0,r.Z)(o,2),i=l[0],c=l[1];return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(S.Z,{children:n.name}),(0,a.Z)(n.value).map((function(e){var a=(0,r.Z)(e,2),o=a[0],s=a[1];return(0,E.jsxs)(G.Z,{raised:!0,className:t.card,children:[(0,E.jsx)(J.Z,{title:o,action:(0,E.jsx)(k.Z,{onClick:function(){return n.remove(o)},children:(0,E.jsx)(F.Z,{})})}),(0,E.jsx)(X.Z,{children:(0,E.jsx)(P,{slot:{name:n.name,value:s,description:"Values associated with entry ".concat(o),setAtIndex:function(e,t){return n.setAtKeyIndex(o,e,t)},removeAtIndex:function(e){return n.removeAtKeyIndex(o,e)},add:function(e){return n.addToKey(o,e)}}})})]},o)})),(0,E.jsx)(G.Z,{raised:!0,className:t.card,children:(0,E.jsx)(J.Z,{disableTypography:!0,title:(0,E.jsx)(b.Z,{fullWidth:!0,value:i,placeholder:"add new",onChange:function(e){return c(e.target.value)},InputProps:{endAdornment:(0,E.jsx)(M.Z,{position:"end",children:(0,E.jsx)(k.Z,{disabled:""===i,onClick:function(){n.add(i,[]),c("")},children:(0,E.jsx)(R.Z,{})})})}})})}),(0,E.jsx)(I.Z,{children:n.description})]})}));function Y(e){var n=e.helperText;return(0,E.jsx)(b.Z,(0,o.Z)((0,o.Z)({},e),{},{helperText:(0,E.jsx)(Z.SanitizedHTML,{html:n||""}),FormHelperTextProps:{component:"div"},fullWidth:!0}))}var $=(0,h.observer)((function(e){var n=e.slot,t=(0,s.useState)(n.value),a=(0,r.Z)(t,2),o=a[0],l=a[1];return(0,s.useEffect)((function(){var e,t=Number.parseFloat(o);Number.isNaN(t)?null===(e=n.reset)||void 0===e||e.call(n):n.set(t)}),[n,o]),(0,E.jsx)(Y,{label:n.name,helperText:n.description,value:o,type:"number",onChange:function(e){return l(e.target.value)}})})),ee=(0,x.ZL)()((function(e){return{card:{marginTop:e.spacing(1)}}})),ne=(0,h.observer)((function(e){var n=e.slot,t=ee().classes,o=(0,s.useState)(""),l=(0,r.Z)(o,2),i=l[0],c=l[1];return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(S.Z,{children:n.name}),(0,a.Z)(n.value).map((function(e){var a=(0,r.Z)(e,2),o=a[0],s=a[1];return(0,E.jsxs)(G.Z,{raised:!0,className:t.card,children:[(0,E.jsx)(J.Z,{title:o,action:(0,E.jsx)(k.Z,{onClick:function(){return n.remove(o)},children:(0,E.jsx)(F.Z,{})})}),(0,E.jsx)(X.Z,{children:(0,E.jsx)($,{slot:{value:s,set:function(e){return n.add(o,e)}}})})]},o)})),(0,E.jsx)(G.Z,{raised:!0,className:t.card,children:(0,E.jsx)(J.Z,{disableTypography:!0,title:(0,E.jsx)(b.Z,{fullWidth:!0,value:i,placeholder:"add new",onChange:function(e){return c(e.target.value)},InputProps:{endAdornment:(0,E.jsx)(M.Z,{position:"end",children:(0,E.jsx)(k.Z,{disabled:""===i,onClick:function(){n.add(i,0),c("")},children:(0,E.jsx)(R.Z,{})})})}})})}),(0,E.jsx)(I.Z,{children:n.description})]})})),te=t(13655),re=t(80367),ae=t(32114),oe=(0,h.observer)((function(e){var n=e.slot;return(0,E.jsxs)(te.Z,{children:[(0,E.jsx)(re.Z,{label:n.name,control:(0,E.jsx)(ae.Z,{checked:n.value,onChange:function(e){return n.set(e.target.checked)}})}),(0,E.jsx)(I.Z,{children:n.description})]})})),se=(0,h.observer)((function(e){var n=e.slot;return(0,E.jsx)(Y,{label:n.name,helperText:n.description,value:n.value,onChange:function(e){return n.set(e.target.value)}})})),le=(0,h.observer)((function(e){var n=e.slot;return(0,E.jsx)(b.Z,{label:n.name,helperText:n.description,multiline:!0,value:n.value,onChange:function(e){return n.set(e.target.value)}})})),ie=function(){return(0,E.jsx)(C.Z,{children:(0,E.jsx)("path",{d:"M20.41,3C21.8,5.71 22.35,8.84 22,12C21.8,15.16 20.7,18.29 18.83,21L17.3,20C18.91,17.57 19.85,14.8 20,12C20.34,9.2 19.89,6.43 18.7,4L20.41,3M5.17,3L6.7,4C5.09,6.43 4.15,9.2 4,12C3.66,14.8 4.12,17.57 5.3,20L3.61,21C2.21,18.29 1.65,15.17 2,12C2.2,8.84 3.3,5.71 5.17,3M12.08,10.68L14.4,7.45H16.93L13.15,12.45L15.35,17.37H13.09L11.71,14L9.28,17.33H6.76L10.66,12.21L8.53,7.45H10.8L12.08,10.68Z"})})},ce=(0,h.observer)((function(e){var n=e.slot,t=(0,s.useState)(n.value),a=(0,r.Z)(t,2),o=a[0],l=a[1];return(0,s.useEffect)((function(){var e=Number.parseInt(o,10);Number.isNaN(e)||n.set(e)}),[n,o]),(0,E.jsx)(Y,{label:n.name,helperText:n.description,value:o,type:"number",onChange:function(e){return l(e.target.value)}})})),ue=(0,h.observer)((function(e){var n=e.slot,t=e.slotSchema,r=(0,v.getPropertyMembers)((0,g.getSubType)(t)),a=(0,g.getUnionSubTypes)((0,g.getUnionSubTypes)((0,g.getSubType)(r.properties.value))[1]).map((function(e){return e.value}));return(0,E.jsx)(Y,{value:n.value,label:n.name,select:!0,helperText:n.description,onChange:function(e){return n.set(e.target.value)},children:a.map((function(e){return(0,E.jsx)(y.Z,{value:e,children:e},e)}))})})),de=(0,h.observer)((function(e){var n,t=e.slot;return(0,E.jsx)(Z.FileSelector,{location:t.value,setLocation:function(e){return t.set(e)},name:t.name,description:t.description,rootModel:null===(n=(0,f.getEnv)(t).pluginManager)||void 0===n?void 0:n.rootModel})})),pe={string:se,text:le,fileLocation:de,stringArray:P,stringArrayMap:Q,numberMap:ne,number:$,integer:ce,color:B,stringEnum:ue,boolean:oe,frozen:U.Z,configRelationships:U.Z},xe=(0,x.ZL)()((function(e){return{paper:{display:"flex",marginBottom:e.spacing(2),position:"relative"},paperContent:{width:"100%"},slotModeSwitch:{width:24,background:e.palette.secondary.light,display:"flex",justifyContent:"center",alignItems:"center"}}})),he=(0,h.observer)((function(e){var n=e.slot,t=e.slotSchema,r=xe().classes,a=n.type,o=n.isCallback?_:pe[a];return o||(console.warn("no slot editor defined for ".concat(a,", editing as string")),o=se),a in pe||console.warn("SlotEditor needs to implement ".concat(a)),(0,E.jsxs)(N.Z,{className:r.paper,children:[(0,E.jsx)("div",{className:r.paperContent,children:(0,E.jsx)(o,{slot:n,slotSchema:t})}),(0,E.jsx)("div",{className:r.slotModeSwitch,children:n.contextVariable.length?(0,E.jsx)(k.Z,{onClick:function(){return n.isCallback?n.convertToValue():n.convertToCallback()},title:"convert to ".concat(n.isCallback?"regular value":"callback"),children:n.isCallback?(0,E.jsx)(ie,{}):(0,E.jsx)(T.Z,{})}):null})]})})),ve=(0,h.observer)((function(e){var n=e.typeNameChoices,t=e.slot,r=e.slotName,a=e.onChange,o=xe().classes;return(0,E.jsx)(N.Z,{className:o.paper,children:(0,E.jsx)("div",{className:o.paperContent,children:(0,E.jsx)(b.Z,{value:t.type,label:"Type",select:!0,helperText:"Type of ".concat(r," to use"),fullWidth:!0,onChange:a,children:n.map((function(e){return(0,E.jsx)(y.Z,{value:e,children:e},e)}))})})})})),me=(0,x.ZL)()((function(e){var n;return{expandIcon:{color:(null===(n=e.palette.tertiary)||void 0===n?void 0:n.contrastText)||"#fff"},root:{padding:e.spacing(1,3,1,1)},expansionPanelDetails:{display:"block",padding:e.spacing(1)},accordion:{border:"1px solid ".concat(e.palette.text.primary)},noOverflow:{width:"100%",overflowX:"auto"}}})),je=(0,h.observer)((function(e){var n,t=me().classes,r=e.slotName,x=e.slotSchema,h=e.schema,v=e.slot,f=void 0===v?h[r]:v,Z=e.path,g=void 0===Z?[]:Z;if((0,l.isConfigurationSchemaType)(x)){if(f.length)return f.map((function(n,t){var a="".concat((0,m.singular)(r)," ").concat(t+1);return(0,s.createElement)(je,(0,o.Z)((0,o.Z)({},e),{},{key:a,slot:n,slotName:a}))}));var b=(0,l.getTypeNamesFromExplicitlyTypedUnion)(x);return b.length&&(n=(0,E.jsx)(ve,{typeNameChoices:b,slotName:r,slot:f,onChange:function(e){e.target.value!==f.type&&h.setSubschema(r,{type:e.target.value})}})),(0,E.jsxs)(i.Z,{defaultExpanded:!0,className:t.accordion,children:[(0,E.jsx)(c.Z,{expandIcon:(0,E.jsx)(j.Z,{className:t.expandIcon}),children:(0,E.jsx)(u.Z,{children:[].concat((0,a.Z)(g),[r]).join("\u2794")})}),(0,E.jsxs)(d.Z,{className:t.expansionPanelDetails,children:[n,(0,E.jsx)(p.Z,{className:t.noOverflow,children:(0,E.jsx)(fe,{schema:f,path:[].concat((0,a.Z)(g),[r])})})]})]})}return(0,l.isConfigurationSlotType)(x)?(0,E.jsx)(he,{slot:f,slotSchema:x},r):null})),fe=(0,h.observer)((function(e){var n=e.schema,t=e.path,a=void 0===t?[]:t,o=(0,v.getMembers)(n).properties;return(0,E.jsx)(E.Fragment,{children:Object.entries(o).map((function(e){var t=(0,r.Z)(e,2),o=t[0],s=t[1];return(0,E.jsx)(je,{slotName:o,slotSchema:s,path:a,schema:n},o)}))})})),Ze=(0,h.observer)((function(e){var n=e.model,t=me().classes,r=n.target,a=r&&(0,l.readConfObject)(r,"trackId"),o=r&&(0,l.readConfObject)(r,"name");return(0,E.jsxs)(i.Z,{defaultExpanded:!0,className:t.accordion,children:[(0,E.jsx)(c.Z,{expandIcon:(0,E.jsx)(j.Z,{className:t.expandIcon}),children:(0,E.jsx)(u.Z,{children:null!==o&&void 0!==o?o:"Configuration"})}),(0,E.jsx)(d.Z,{className:t.expansionPanelDetails,"data-testid":"configEditor",children:r?(0,E.jsx)(fe,{schema:r}):"no target set"})]},a)}))}}]);
//# sourceMappingURL=6488.0996d35d.chunk.js.map