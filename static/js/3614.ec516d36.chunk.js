"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[3614],{13614:(e,t,n)=>{n.r(t),n.d(t,{default:()=>he});var a=n(7552),l=n(68584),r=n(63011),o=n(41578),c=n(36715),s=n(63165),i=n(83867),m=n(75785),u=n(68446),d=n(36422),p=n(93091),E=n(6212),v=n(99546),g=n(48735),b=n(23550),h=n(1343),A=n(2859),f=n(29629),y=n(943),C=n(61723),x=n(45280),k=n(17125),N=n(58181),T=n(45331),w=n(93117),S=n(5401),j=n(25467),M=n(78126);const I=(0,u.observer)((function({slot:e}){const[t,n]=(0,a.useState)(""),[l,r]=(0,a.useState)(!1);return a.createElement(a.Fragment,null,e.name?a.createElement(k.A,null,e.name):null,a.createElement(N.A,{disablePadding:!0},e.value.map(((t,n)=>a.createElement(T.Ay,{key:n,disableGutters:!0},a.createElement(h.A,{value:t,onChange:t=>e.setAtIndex(n,t.target.value),InputProps:{endAdornment:a.createElement(w.A,{position:"end"},a.createElement(C.A,{onClick:()=>e.removeAtIndex(n)},a.createElement(M.A,null)))}})))),l?a.createElement(T.Ay,{disableGutters:!0},a.createElement(h.A,{value:t,placeholder:"add new",onChange:e=>n(e.target.value),InputProps:{endAdornment:a.createElement(w.A,{position:"end"},a.createElement(a.Fragment,null,a.createElement(S.A,{color:"primary",variant:"contained",style:{margin:2},"data-testid":`stringArrayAdd-${e.name}`,onClick:()=>{r(!1),e.add(t),n("")}},"OK"),a.createElement(S.A,{color:"primary",variant:"contained",style:{margin:2},onClick:()=>{r(!1),n("")}},"Cancel")))}})):null,a.createElement(S.A,{color:"primary",variant:"contained",style:{margin:4},disabled:l,onClick:()=>r(!0)},"Add item")),a.createElement(j.A,null,e.description))}));var L=n(89003),O=n(43283),F=n(7334);const P='Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace',$=(0,m.n9)()((e=>({callbackEditor:{marginTop:"16px",borderBottom:`1px solid ${e.palette.divider}`,width:"100%",fontFamily:P},textAreaFont:{fontFamily:P},callbackContainer:{width:"100%",overflowX:"auto"},error:{color:"red",fontSize:"0.8em"}}))),W=(0,u.observer)((function({slot:e}){const{classes:t}=$(),[n,l]=(0,a.useState)(e.value),[r,o]=(0,a.useState)(),c=(0,v.useDebounce)(n,400);return(0,a.useEffect)((()=>{try{const t=c.startsWith("jexl:")?c:`jexl:${c}`;if("jexl:"===t)throw new Error("Empty jexl expression is not valid");(0,O.A)(t,(0,d.getEnv)(e).pluginManager?.jexl),e.set(t),o(void 0)}catch(e){console.error({e}),o(e)}}),[c,e]),a.createElement(a.Fragment,null,r?a.createElement("p",{className:t.error},`${r}`):null,a.createElement("div",{className:t.callbackContainer},a.createElement(h.A,{multiline:!0,className:t.callbackEditor,value:n.startsWith("jexl:")?n.split("jexl:")[1]:n,onChange:e=>l(e.target.value),style:{background:r?"#fdd":void 0},InputProps:{classes:{input:t.textAreaFont}}}),a.createElement("p",null,e.description),a.createElement(L.A,{title:a.createElement("div",null,"Callbacks are written in Jexl format. Click to learn more.",a.createElement("br",null)," Names of available context items: ",e.contextVariable),arrow:!0},a.createElement(C.A,{color:"primary",onClick:()=>{const e=window.open("https://github.com/TomFrost/Jexl","_blank","noopener,noreferrer");e&&(e.opener=null)}},a.createElement(F.A,null)))))}));function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},H.apply(this,arguments)}const V=(0,a.lazy)((()=>n.e(6395).then(n.bind(n,66395)))),D=e=>{const{value:t="#000",label:n="",TextFieldProps:l={},onChange:r}=e,[o,c]=(0,a.useState)(!1);return a.createElement("div",{style:{display:"flex"}},a.createElement(h.A,H({value:t,label:n,onClick:()=>c(!o),onChange:e=>r(e.target.value)},l)),a.createElement("div",{style:{marginTop:10}},a.createElement(a.Suspense,{fallback:null},a.createElement(V,{color:t,onChange:e=>r(e)}))))},_=(0,u.observer)((function(e){const{slot:t}=e;return a.createElement(D,{label:t.name,value:t.value,onChange:e=>t.set(e),TextFieldProps:{helperText:t.description,fullWidth:!0}})}));var z=n(64248),K=n(1773),B=n(26875),U=n(25355),G=n(57610);const J=(0,m.n9)()((e=>({card:{marginTop:e.spacing(1)}}))),X=(0,u.observer)((function({slot:e}){const{classes:t}=J(),[n,l]=(0,a.useState)("");return a.createElement(a.Fragment,null,a.createElement(k.A,null,e.name),[...e.value].map((([n,l])=>a.createElement(K.A,{raised:!0,key:n,className:t.card},a.createElement(B.A,{title:n,action:a.createElement(C.A,{onClick:()=>e.remove(n)},a.createElement(M.A,null))}),a.createElement(U.A,null,a.createElement(I,{slot:{name:e.name,value:l,description:`Values associated with entry ${n}`,setAtIndex:(t,a)=>e.setAtKeyIndex(n,t,a),removeAtIndex:t=>e.removeAtKeyIndex(n,t),add:t=>e.addToKey(n,t)}}))))),a.createElement(K.A,{raised:!0,className:t.card},a.createElement(B.A,{disableTypography:!0,title:a.createElement(h.A,{fullWidth:!0,value:n,placeholder:"add new",onChange:e=>l(e.target.value),InputProps:{endAdornment:a.createElement(w.A,{position:"end"},a.createElement(C.A,{disabled:""===n,onClick:()=>{e.add(n,[]),l("")}},a.createElement(G.A,null)))}})})),a.createElement(j.A,null,e.description))}));function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},R.apply(this,arguments)}function Z(e){const{helperText:t}=e;return a.createElement(h.A,R({},e,{helperText:a.createElement(g.SanitizedHTML,{html:t||""}),FormHelperTextProps:{component:"div"},fullWidth:!0}))}const q=(0,u.observer)((function({slot:e}){const[t,n]=(0,a.useState)(e.value);return(0,a.useEffect)((()=>{const n=Number.parseFloat(t);Number.isNaN(n)?e.reset?.():e.set(n)}),[e,t]),a.createElement(Z,{label:e.name,helperText:e.description,value:t,type:"number",onChange:e=>n(e.target.value)})})),Q=(0,m.n9)()((e=>({card:{marginTop:e.spacing(1)}}))),Y=(0,u.observer)((function({slot:e}){const{classes:t}=Q(),[n,l]=(0,a.useState)("");return a.createElement(a.Fragment,null,a.createElement(k.A,null,e.name),[...e.value].map((([n,l])=>a.createElement(K.A,{raised:!0,key:n,className:t.card},a.createElement(B.A,{title:n,action:a.createElement(C.A,{onClick:()=>e.remove(n)},a.createElement(M.A,null))}),a.createElement(U.A,null,a.createElement(q,{slot:{value:l,set:t=>e.add(n,t)}}))))),a.createElement(K.A,{raised:!0,className:t.card},a.createElement(B.A,{disableTypography:!0,title:a.createElement(h.A,{fullWidth:!0,value:n,placeholder:"add new",onChange:e=>l(e.target.value),InputProps:{endAdornment:a.createElement(w.A,{position:"end"},a.createElement(C.A,{disabled:""===n,onClick:()=>{e.add(n,0),l("")}},a.createElement(G.A,null)))}})})),a.createElement(j.A,null,e.description))}));var ee=n(48171),te=n(33371),ne=n(32808);const ae=(0,u.observer)((function({slot:e}){return a.createElement(ee.A,null,a.createElement(te.A,{label:e.name,control:a.createElement(ne.A,{checked:e.value,onChange:t=>e.set(t.target.checked)})}),a.createElement(j.A,null,e.description))})),le=(0,m.n9)()((e=>({paper:{display:"flex",marginBottom:e.spacing(2),position:"relative"},paperContent:{width:"100%"},slotModeSwitch:{width:24,background:e.palette.secondary.light,display:"flex",justifyContent:"center",alignItems:"center"}}))),re=(0,u.observer)((function({slot:e}){return a.createElement(Z,{label:e.name,helperText:e.description,value:e.value,onChange:t=>e.set(t.target.value)})})),oe=(0,u.observer)((function({slot:e}){return a.createElement(h.A,{label:e.name,helperText:e.description,multiline:!0,value:e.value,onChange:t=>e.set(t.target.value)})})),ce=()=>a.createElement(A.A,null,a.createElement("path",{d:"M20.41,3C21.8,5.71 22.35,8.84 22,12C21.8,15.16 20.7,18.29 18.83,21L17.3,20C18.91,17.57 19.85,14.8 20,12C20.34,9.2 19.89,6.43 18.7,4L20.41,3M5.17,3L6.7,4C5.09,6.43 4.15,9.2 4,12C3.66,14.8 4.12,17.57 5.3,20L3.61,21C2.21,18.29 1.65,15.17 2,12C2.2,8.84 3.3,5.71 5.17,3M12.08,10.68L14.4,7.45H16.93L13.15,12.45L15.35,17.37H13.09L11.71,14L9.28,17.33H6.76L10.66,12.21L8.53,7.45H10.8L12.08,10.68Z"})),se=(0,u.observer)((function({slot:e}){const[t,n]=(0,a.useState)(e.value);return(0,a.useEffect)((()=>{const n=Number.parseInt(t,10);Number.isNaN(n)||e.set(n)}),[e,t]),a.createElement(Z,{label:e.name,helperText:e.description,value:t,type:"number",onChange:e=>n(e.target.value)})})),ie=(0,u.observer)((function({slot:e,slotSchema:t}){const n=(0,d.getPropertyMembers)((0,b.getSubType)(t)),l=(0,b.getUnionSubTypes)((0,b.getUnionSubTypes)((0,b.getSubType)(n.properties.value))[1]).map((e=>e.value));return a.createElement(Z,{value:e.value,label:e.name,select:!0,helperText:e.description,onChange:t=>e.set(t.target.value)},l.map((e=>a.createElement(f.A,{key:e,value:e},e))))})),me=(0,u.observer)((function({slot:e}){return a.createElement(g.FileSelector,{location:e.value,setLocation:t=>e.set(t),name:e.name,description:e.description,rootModel:(0,v.getEnv)(e).pluginManager?.rootModel})})),ue={string:re,text:oe,fileLocation:me,stringArray:I,stringArrayMap:X,numberMap:Y,number:q,integer:se,color:_,stringEnum:ie,boolean:ae,frozen:z.A,configRelationships:z.A},de=(0,u.observer)((function({slot:e,slotSchema:t}){const{classes:n}=le(),{type:l}=e;let r=e.isCallback?W:ue[l];return r||(console.warn(`no slot editor defined for ${l}, editing as string`),r=re),l in ue||console.warn(`SlotEditor needs to implement ${l}`),a.createElement(y.A,{className:n.paper},a.createElement("div",{className:n.paperContent},a.createElement(r,{slot:e,slotSchema:t})),a.createElement("div",{className:n.slotModeSwitch},e.contextVariable.length?a.createElement(C.A,{onClick:()=>e.isCallback?e.convertToValue():e.convertToCallback(),title:"convert to "+(e.isCallback?"regular value":"callback")},e.isCallback?a.createElement(ce,null):a.createElement(x.A,null)):null))})),pe=(0,u.observer)((function({typeNameChoices:e,slot:t,slotName:n,onChange:l}){const{classes:r}=le();return a.createElement(y.A,{className:r.paper},a.createElement("div",{className:r.paperContent},a.createElement(h.A,{value:t.type,label:"Type",select:!0,helperText:`Type of ${n} to use`,fullWidth:!0,onChange:l},e.map((e=>a.createElement(f.A,{key:e,value:e},e))))))}));function Ee(){return Ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ee.apply(this,arguments)}const ve=(0,m.n9)()((e=>({expandIcon:{color:e.palette.tertiary?.contrastText||"#fff"},root:{padding:e.spacing(1,3,1,1)},expansionPanelDetails:{display:"block",padding:e.spacing(1)},accordion:{border:`1px solid ${e.palette.text.primary}`},noOverflow:{width:"100%",overflowX:"auto"}}))),ge=(0,u.observer)((function(e){const{classes:t}=ve(),{slotName:n,slotSchema:m,schema:u,slot:d=u[n],path:v=[]}=e;let g;if((0,l.isConfigurationSchemaType)(m)){if(d.length)return d.map(((t,l)=>{const r=`${(0,p.singular)(n)} ${l+1}`;return a.createElement(ge,Ee({},e,{key:r,slot:t,slotName:r}))}));const b=(0,l.getTypeNamesFromExplicitlyTypedUnion)(m);return b.length&&(g=a.createElement(pe,{typeNameChoices:b,slotName:n,slot:d,onChange:e=>{e.target.value!==d.type&&u.setSubschema(n,{type:e.target.value})}})),a.createElement(r.A,{defaultExpanded:!0,className:t.accordion},a.createElement(o.A,{expandIcon:a.createElement(E.A,{className:t.expandIcon})},a.createElement(c.A,null,[...v,n].join("➔"))),a.createElement(s.A,{className:t.expansionPanelDetails},g,a.createElement(i.A,{className:t.noOverflow},a.createElement(be,{schema:d,path:[...v,n]}))))}return(0,l.isConfigurationSlotType)(m)?a.createElement(de,{key:n,slot:d,slotSchema:m}):null})),be=(0,u.observer)((function({schema:e,path:t=[]}){const n=(0,d.getMembers)(e).properties;return a.createElement(a.Fragment,null,Object.entries(n).map((([n,l])=>a.createElement(ge,{key:n,slotName:n,slotSchema:l,path:t,schema:e}))))})),he=(0,u.observer)((function({model:e}){const{classes:t}=ve(),{target:n}=e,i=n&&(0,l.readConfObject)(n,"trackId"),m=n&&(0,l.readConfObject)(n,"name");return a.createElement(r.A,{key:i,defaultExpanded:!0,className:t.accordion},a.createElement(o.A,{expandIcon:a.createElement(E.A,{className:t.expandIcon})},a.createElement(c.A,null,m??"Configuration")),a.createElement(s.A,{className:t.expansionPanelDetails,"data-testid":"configEditor"},n?a.createElement(be,{schema:n}):"no target set"))}))}}]);
//# sourceMappingURL=3614.ec516d36.chunk.js.map