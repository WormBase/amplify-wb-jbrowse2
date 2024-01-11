"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[482],{37926:(e,n,t)=>{t.r(n),t.d(n,{default:()=>se});var o=t(41867),l=t(3762),s=t(57972),i=t(49595),c=t(89301),a=t(59231),r=t(47192),d=t(90872),h=t(36686),g=t(80838);const u=(0,r.ZL)()((e=>({fab:{position:"absolute",bottom:e.spacing(6),right:e.spacing(6)}}))),m=(0,l.observer)((function(e){let{model:n}=e;const{classes:t}=u(),l=(0,d.getSession)(n),[s,r]=(0,o.useState)(null);function m(){r(null)}const x=(0,d.isSessionModelWithConnections)(l),f=(0,d.isSessionWithAddTracks)(l);return(0,g.jsx)(g.Fragment,{children:f||x?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.Z,{color:"secondary",className:t.fab,onClick:e=>r(e.currentTarget),children:(0,g.jsx)(h.Z,{})}),(0,g.jsxs)(c.Z,{anchorEl:s,open:Boolean(s),onClose:()=>r(null),children:[x?(0,g.jsx)(a.Z,{onClick:()=>{m(),(0,d.isSessionModelWithWidgets)(l)&&l.showWidget(l.addWidget("AddConnectionWidget","addConnectionWidget"))},children:"Add connection"}):null,f?(0,g.jsx)(a.Z,{onClick:()=>{m(),(0,d.isSessionModelWithWidgets)(l)&&l.showWidget(l.addWidget("AddTrackWidget","addTrackWidget",{view:n.view.id}))},children:"Add track"}):null]})]}):null})}));var x=t(11204),f=t(51590),k=t(68367),v=t(56762),C=t(41064),p=t(83329),j=t(42980);function b(e){return((null===e||void 0===e?void 0:e.children.map((e=>e.children.length?b(e):e.conf)))||[]).flat(1/0)}function S(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map;e.id&&e.children.length&&n.set(e.id,e);for(const t of e.children)S(t,n);return n}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.endsWith("(Unsupported)")||e.endsWith("(Unknown)")}const Z=(0,r.ZL)()((e=>({contrastColor:{color:e.palette.tertiary.contrastText},accordionText:{margin:"auto 0",width:"100%"}})));function T(e){let{isOpen:n,setOpen:t,data:l}=e;const{classes:s}=Z(),[i,c]=(0,o.useState)(null),{name:a,model:r,id:d,tree:h,toggleCollapse:u}=l;return(0,g.jsxs)("div",{className:s.accordionText,onClick:()=>{i||(u(d),t(!n))},children:[(0,g.jsxs)(f.Z,{children:[n?(0,g.jsx)(C.Z,{}):(0,g.jsx)(p.Z,{}),a,(0,g.jsx)(k.Z,{onClick:e=>{c(e.currentTarget),e.stopPropagation()},className:s.contrastColor,children:(0,g.jsx)(j.Z,{})})]}),i?(0,g.jsx)(v.Z,{anchorEl:i,menuItems:[{label:"Add to selection",onClick:()=>{const e=S(h).get(d);r.addToSelection(b(e))}},{label:"Remove from selection",onClick:()=>{const e=S(h).get(d);r.removeFromSelection(b(e))}},{label:"Show all tracks",onClick:()=>{for(const n of(null===(e=S(h).get(d))||void 0===e?void 0:e.children)||[]){var e;n.children.length||r.view.showTrack(n.id)}}},{label:"Hide all tracks",onClick:()=>{for(const n of(null===(e=S(h).get(d))||void 0===e?void 0:e.children)||[]){var e;n.children.length||r.view.hideTrack(n.id)}}}],onMenuItemClick:(e,n)=>{n(),c(null)},open:Boolean(i),onClose:()=>c(null)}):null]})}var W=t(77573),w=t(96614),L=t(83171),M=t(83734),A=t(43800),N=t(69282);const F=(0,r.ZL)()((e=>({compactCheckbox:{padding:0},checkboxLabel:{marginRight:0,"&:hover":{backgroundColor:e.palette.action.selected}}})));function I(e){let{data:n}=e;const{classes:t}=F(),{checked:o,conf:l,model:s,drawerPosition:i,id:c,name:a,onChange:r,selected:d}=n,h=l&&(0,A.readConfObject)(l,["description"])||"";return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(W.Z,{title:h+(d?" (in selection)":""),placement:"left"===i?"right":"left",children:(0,g.jsx)(w.Z,{className:t.checkboxLabel,control:(0,g.jsx)(L.Z,{className:t.compactCheckbox,checked:o,onChange:()=>r(c),disabled:y(a),inputProps:{"data-testid":"htsTrackEntry-".concat(c)}}),label:(0,g.jsx)("div",{"data-testid":"htsTrackLabel-".concat(c),style:{background:d?"#cccc":void 0},children:(0,g.jsx)(M.Z,{html:a})})})}),(0,g.jsx)(B,{model:s,selected:d,id:c,conf:l})]})}function B(e){var n,t;let{id:o,model:l,selected:s,conf:i}=e;return(0,g.jsx)(N.Z,{style:{padding:0},"data-testid":"htsTrackEntryMenu-".concat(o),menuItems:[...(null===(n=(t=(0,d.getSession)(l)).getTrackActionMenuItems)||void 0===n?void 0:n.call(t,i))||[],{label:"Add to selection",onClick:()=>l.addToSelection([i])},...s?[{label:"Remove from selection",onClick:()=>l.removeFromSelection([i])}]:[]],children:(0,g.jsx)(j.Z,{})})}const O=(0,r.ZL)()((e=>({accordionBase:{display:"flex"},accordionCard:{padding:3,cursor:"pointer",display:"flex"},nestingLevelMarker:{position:"absolute",borderLeft:"1.5px solid #555"},accordionColor:{background:e.palette.tertiary.main,color:e.palette.tertiary.contrastText,width:"100%",display:"flex",paddingLeft:5}})));function E(e){let{data:n,isOpen:t,style:o,setOpen:l}=e;const{isLeaf:s,nestingLevel:i}=n,{classes:c}=O(),a=10*i+(s?10:0);return(0,g.jsxs)("div",{style:o,className:s?void 0:c.accordionBase,children:[new Array(i).fill(0).map(((e,n)=>(0,g.jsx)("div",{style:{left:10*n+4,height:null===o||void 0===o?void 0:o.height},className:c.nestingLevelMarker},"mark-".concat(n)))),(0,g.jsx)("div",{className:s?void 0:c.accordionCard,style:{marginLeft:a,whiteSpace:"nowrap",width:"100%"},children:(0,g.jsx)("div",{className:s?void 0:c.accordionColor,children:s?(0,g.jsx)(I,{data:n}):(0,g.jsx)(T,{isOpen:t,data:n,setOpen:l})})})]})}function H(e,n,t,o){const l=!!e.conf;return{data:{defaultHeight:l?22:40,isLeaf:l,isOpenByDefault:!0,nestingLevel:n,selected:!!o[e.id],...e,...t},nestingLevel:n,node:e}}const P=(0,l.observer)((function(e){let{height:n,tree:t,model:l}=e;const{filterText:s,selection:i,view:c}=l,a=(0,o.useRef)(null),r=(0,d.getSession)(l),{drawerPosition:h}=r,u=(0,o.useMemo)((()=>Object.fromEntries(i.map((e=>[e.trackId,e])))),[i]),m=(0,o.useMemo)((()=>({onChange:e=>c.toggleTrack(e),toggleCollapse:e=>l.toggleCategory(e),tree:t,model:l,drawerPosition:h})),[c,l,h,t]),f=(0,o.useCallback)((function*(){for(const e of t.children)yield H(e,0,m,u);for(;;){const e=yield;for(const n of e.node.children)yield H(n,e.nestingLevel+1,m,u)}}),[t,m,u]);return(0,o.useEffect)((()=>{a.current.recomputeTree({refreshNodes:!0,useDefaultHeight:!0})}),[t,s]),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(x.qF,{ref:a,treeWalker:f,height:n,children:E})})}));var D=t(49133),R=t(78693),_=t(23801),z=t(64688),U=t(3086);const q=(0,o.lazy)((()=>Promise.all([t.e(2280),t.e(6652)]).then(t.bind(t,6652)))),G=(0,o.lazy)((()=>t.e(700).then(t.bind(t,80700)))),J=(0,o.lazy)((()=>t.e(7696).then(t.bind(t,87696)))),K=(0,o.lazy)((()=>t.e(4599).then(t.bind(t,84599)))),Q=(0,l.observer)((function(e){let{model:n}=e;const t=(0,d.getSession)(n),[l,s]=(0,o.useState)(),[i,c]=(0,o.useState)(),[a,r]=(0,o.useState)(!1),[h,u]=(0,o.useState)(!1);function m(e,n){var o;const l=(0,A.readConfObject)(e,"name"),i=null===(o=t.prepareToBreakConnection)||void 0===o?void 0:o.call(t,e);if(i){const[n,t]=i;Object.keys(t).length>0?s({connectionConf:e,safelyBreakConnection:n,dereferenceTypeCount:t,name:l}):n()}n&&c({name:l,connectionConf:e})}return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(N.Z,{menuItems:[...(0,d.isSessionWithAddTracks)(t)?[{label:"Add track...",onClick:()=>{(0,d.isSessionModelWithWidgets)(t)&&t.showWidget(t.addWidget("AddTrackWidget","addTrackWidget",{view:n.view.id}))}}]:[],...(0,d.isSessionModelWithConnections)(t)?[{label:"Turn on/off connections...",onClick:()=>r(!0)}]:[],...(0,d.isSessionModelWithConnectionEditing)(t)?[{label:"Add connection...",onClick:()=>{(0,d.isSessionModelWithWidgets)(t)&&t.showWidget(t.addWidget("AddConnectionWidget","addConnectionWidget"))}},{label:"Delete connections...",onClick:()=>u(!0)}]:[],{type:"divider"},{label:"Sort tracks by name",type:"checkbox",checked:n.activeSortTrackNames,onClick:()=>n.setSortTrackNames(!n.activeSortTrackNames)},{label:"Sort categories by name",type:"checkbox",checked:n.activeSortCategories,onClick:()=>n.setSortCategories(!n.activeSortCategories)},{type:"divider"},...n.hasAnySubcategories?[{label:"Collapse subcategories",onClick:()=>n.collapseSubCategories()}]:[],{label:"Collapse top-level categories",onClick:()=>n.collapseTopLevelCategories()},{label:"Expand all categories",onClick:()=>n.expandAllCategories()}],children:(0,g.jsx)(U.Z,{})}),(0,g.jsxs)(o.Suspense,{fallback:(0,g.jsx)(o.Fragment,{}),children:[l?(0,g.jsx)(q,{modalInfo:l,onClose:()=>s(void 0)}):null,i?(0,g.jsx)(G,{handleClose:()=>c(void 0),deleteDialogDetails:i,session:t}):null,h?(0,g.jsx)(J,{handleClose:()=>u(!1),breakConnection:m,session:t}):null,a?(0,g.jsx)(K,{handleClose:()=>r(!1),session:t,breakConnection:m}):null]})]})}));var V=t(74912);const X=(0,o.lazy)((()=>Promise.all([t.e(3650),t.e(7102),t.e(5354),t.e(2004)]).then(t.bind(t,65509)))),Y=(0,r.ZL)()((e=>({searchBox:{margin:e.spacing(2)},menuIcon:{marginRight:e.spacing(1),marginBottom:0}}))),$=(0,l.observer)((function(e){let{model:n}=e;const{filterText:t}=n,{classes:o}=Y();return(0,g.jsx)(D.Z,{className:o.searchBox,label:"Filter tracks",value:t,onChange:e=>n.setFilterText(e.target.value),fullWidth:!0,InputProps:{endAdornment:(0,g.jsx)(R.Z,{position:"end",children:(0,g.jsx)(k.Z,{onClick:()=>n.clearFilterText(),children:(0,g.jsx)(z.Z,{})})})}})})),ee=(0,l.observer)((function(e){let{model:n,setHeaderHeight:t}=e;const{classes:l}=Y(),[s,i]=(0,o.useState)(!1);return(0,g.jsxs)("div",{ref:e=>t((null===e||void 0===e?void 0:e.getBoundingClientRect().height)||0),"data-testid":"hierarchical_track_selector",children:[(0,g.jsxs)("div",{style:{display:"flex"},children:[(0,g.jsx)(Q,{model:n}),(0,g.jsx)(V.Z,{model:n}),(0,g.jsx)($,{model:n}),(0,g.jsx)(_.Z,{className:l.menuIcon,onClick:()=>i(!0),children:"Open faceted selector"})]}),(0,g.jsx)(o.Suspense,{fallback:(0,g.jsx)("div",{}),children:s?(0,g.jsx)(X,{handleClose:()=>i(!1),model:n}):null})]})})),ne=e=>{let{tree:n,model:t,offset:o}=e;return"undefined"===typeof jest?(0,g.jsx)(s.ZP,{disableWidth:!0,children:e=>(0,g.jsx)(P,{height:(e.height||o)-o,model:t,tree:n})}):(0,g.jsx)(P,{height:9e3,model:t,tree:n})},te=e=>{let{overrideDimensions:n,children:t}=e;return n?(0,g.jsx)("div",{style:{...n},children:t}):(0,g.jsx)(g.Fragment,{children:t})},oe=(0,l.observer)((function(e){let{model:n,toolbarHeight:t,overrideDimensions:o}=e;return(0,g.jsxs)(te,{overrideDimensions:o,children:[(0,g.jsx)(le,{model:n,toolbarHeight:t}),(0,g.jsx)(m,{model:n})]})})),le=(0,l.observer)((function(e){let{model:n,toolbarHeight:t=0}=e;const[l,s]=(0,o.useState)(0);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(ee,{model:n,setHeaderHeight:s}),(0,g.jsx)(ne,{tree:n.hierarchy,model:n,offset:t+l})]})})),se=oe},74912:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(41867),l=t(68367),s=t(56868),i=t(47192),c=t(3762),a=t(56762),r=t(90872),d=t(48002),h=t(80838);const g=(0,i.ZL)()((e=>({searchBox:{margin:e.spacing(2)},menuIcon:{marginRight:e.spacing(1),marginBottom:0}}))),u=(0,c.observer)((function(e){let{model:n}=e;const{classes:t}=g(),{selection:i}=n,{pluginManager:c}=(0,r.getEnv)(n),u=(0,r.getSession)(n),[m,x]=(0,o.useState)(),f=c.evaluateExtensionPoint("TrackSelector-multiTrackMenuItems",[],{session:u});return(0,h.jsxs)(h.Fragment,{children:[i.length?(0,h.jsx)(l.Z,{className:t.menuIcon,onClick:e=>x(e.currentTarget),children:(0,h.jsx)(s.Z,{badgeContent:i.length,color:"primary",children:(0,h.jsx)(d.Z,{})})}):null,(0,h.jsx)(a.Z,{anchorEl:m,open:Boolean(m),onMenuItemClick:(e,n)=>{n(),x(void 0)},onClose:()=>x(void 0),menuItems:[{label:"Clear",onClick:()=>n.clearSelection()},...f.map((e=>({...e,..."onClick"in e?{onClick:()=>e.onClick(n)}:{}})))]})]})}))}}]);
//# sourceMappingURL=482.7c2e5756.chunk.js.map