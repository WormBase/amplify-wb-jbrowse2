"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[7538],{37538:function(e,n,t){t.r(n),t.d(n,{default:function(){return se}});var o=t(96234),i=t(33028),r=t(96902),c=t(4782),l=t(48971),a=t(88539),s=t(5966),d=t(15996),u=t(35478),h=t(27664),f=t(51467),g=t(29938),v=(0,u.ZL)()((function(e){return{fab:{position:"absolute",bottom:e.spacing(6),right:e.spacing(6)}}})),m=(0,c.observer)((function(e){var n=e.model,t=v().classes,i=(0,h.getSession)(n),c=(0,r.useState)(null),l=(0,o.Z)(c,2),u=l[0],m=l[1];function x(){m(null)}var k=(0,h.isSessionModelWithConnections)(i),C=(0,h.isSessionWithAddTracks)(i);return(0,g.jsx)(g.Fragment,{children:C||k?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a.Z,{color:"secondary",className:t.fab,onClick:function(e){return m(e.currentTarget)},children:(0,g.jsx)(f.Z,{})}),(0,g.jsxs)(s.Z,{anchorEl:u,open:Boolean(u),onClose:function(){return m(null)},children:[k?(0,g.jsx)(d.Z,{onClick:function(){x(),(0,h.isSessionModelWithWidgets)(i)&&i.showWidget(i.addWidget("AddConnectionWidget","addConnectionWidget"))},children:"Add connection"}):null,C?(0,g.jsx)(d.Z,{onClick:function(){x(),(0,h.isSessionModelWithWidgets)(i)&&i.showWidget(i.addWidget("AddTrackWidget","addTrackWidget",{view:n.view.id}))},children:"Add track"}):null]})]}):null})})),x=t(32723),k=t(19869),C=t(41361),p=t(35388),b=t(25322),j=t(41590),Z=t(74859),S=t(90001),y=t(90386);function T(e){return((null===e||void 0===e?void 0:e.children.map((function(e){return e.children.length?T(e):e.conf})))||[]).flat(1/0)}function W(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map;e.id&&e.children.length&&n.set(e.id,e);for(var t=0;t<e.children.length;t++){W(e.children[t],n)}return n}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.endsWith("(Unsupported)")||e.endsWith("(Unknown)")}var L=(0,u.ZL)()((function(e){return{contrastColor:{color:e.palette.tertiary.contrastText},accordionText:{margin:"auto 0",width:"100%"}}}));function M(e){var n=e.isOpen,t=e.setOpen,i=e.data,c=L().classes,l=(0,r.useState)(null),a=(0,o.Z)(l,2),s=a[0],d=a[1],u=i.name,h=i.model,f=i.id,v=i.tree,m=i.toggleCollapse;return(0,g.jsxs)("div",{className:c.accordionText,onClick:function(){s||(m(f),t(!n))},children:[(0,g.jsxs)(p.Z,{children:[n?(0,g.jsx)(Z.Z,{}):(0,g.jsx)(S.Z,{}),u,(0,g.jsx)(b.Z,{onClick:function(e){d(e.currentTarget),e.stopPropagation()},className:c.contrastColor,children:(0,g.jsx)(y.Z,{})})]}),s?(0,g.jsx)(j.Z,{anchorEl:s,menuItems:[{label:"Add to selection",onClick:function(){var e=W(v).get(f);h.addToSelection(T(e))}},{label:"Remove from selection",onClick:function(){var e=W(v).get(f);h.removeFromSelection(T(e))}},{label:"Show all tracks",onClick:function(){var e,n,t=(0,C.Z)((null===(e=W(v).get(f))||void 0===e?void 0:e.children)||[]);try{for(t.s();!(n=t.n()).done;){var o=n.value;o.children.length||h.view.showTrack(o.id)}}catch(i){t.e(i)}finally{t.f()}}},{label:"Hide all tracks",onClick:function(){var e,n,t=(0,C.Z)((null===(e=W(v).get(f))||void 0===e?void 0:e.children)||[]);try{for(t.s();!(n=t.n()).done;){var o=n.value;o.children.length||h.view.hideTrack(o.id)}}catch(i){t.e(i)}finally{t.f()}}}],onMenuItemClick:function(e,n){n(),d(null)},open:Boolean(s),onClose:function(){return d(null)}}):null]})}var A=t(68079),I=t(50543),N=t(80367),B=t(32114),F=t(99836),E=t(17867),O=(0,u.ZL)()((function(e){return{compactCheckbox:{padding:0},checkboxLabel:{marginRight:0,"&:hover":{backgroundColor:e.palette.action.selected}}}}));function H(e){var n,t,i=e.data,c=O().classes,l=i.checked,a=i.conf,s=i.model,d=i.drawerPosition,u=i.id,f=i.name,v=i.onChange,m=i.selected,x=(0,r.useState)(),k=(0,o.Z)(x,2),C=k[0],p=k[1],Z=a&&(0,F.readConfObject)(a,["description"])||"";return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(I.Z,{title:Z+(m?" (in selection)":""),placement:"left"===d?"right":"left",children:(0,g.jsx)(N.Z,{className:c.checkboxLabel,control:(0,g.jsx)(B.Z,{className:c.compactCheckbox,checked:l,onChange:function(){return v(u)},disabled:w(f),inputProps:{"data-testid":"htsTrackEntry-".concat(u)}}),label:(0,g.jsx)("div",{"data-testid":"htsTrackLabel-".concat(u),style:{background:m?"#cccc":void 0},children:(0,g.jsx)(E.SanitizedHTML,{html:f})})})}),(0,g.jsx)(b.Z,{onClick:function(e){return p({target:e.currentTarget,id:u,conf:a})},style:{padding:0},"data-testid":"htsTrackEntryMenu-".concat(u),children:(0,g.jsx)(y.Z,{})}),C?(0,g.jsx)(j.Z,{anchorEl:null===C||void 0===C?void 0:C.target,menuItems:[].concat((0,A.Z)((null===(n=(t=(0,h.getSession)(s)).getTrackActionMenuItems)||void 0===n?void 0:n.call(t,C.conf))||[]),[{label:"Add to selection",onClick:function(){return s.addToSelection([C.conf])}}],(0,A.Z)(m?[{label:"Remove from selection",onClick:function(){return s.removeFromSelection([C.conf])}}]:[])),onMenuItemClick:function(e,n){n(),p(void 0)},open:Boolean(C),onClose:function(){return p(void 0)}}):null]})}var P=(0,u.ZL)()((function(e){return{accordionBase:{display:"flex"},accordionCard:{padding:3,cursor:"pointer",display:"flex"},nestingLevelMarker:{position:"absolute",borderLeft:"1.5px solid #555"},accordionColor:{background:e.palette.tertiary.main,color:e.palette.tertiary.contrastText,width:"100%",display:"flex",paddingLeft:5}}}));function D(e){var n=e.data,t=e.isOpen,o=e.style,i=e.setOpen,r=n.isLeaf,c=n.nestingLevel,l=P().classes,a=10*c+(r?10:0);return(0,g.jsxs)("div",{style:o,className:r?void 0:l.accordionBase,children:[new Array(c).fill(0).map((function(e,n){return(0,g.jsx)("div",{style:{left:10*n+4,height:null===o||void 0===o?void 0:o.height},className:l.nestingLevelMarker},"mark-".concat(n))})),(0,g.jsx)("div",{className:r?void 0:l.accordionCard,style:{marginLeft:a,whiteSpace:"nowrap",width:"100%"},children:(0,g.jsx)("div",{className:r?void 0:l.accordionColor,children:r?(0,g.jsx)(H,{data:n}):(0,g.jsx)(M,{isOpen:t,data:n,setOpen:i})})})]})}function R(e,n,t,o){var r=!!e.conf,c=!!o[e.id];return{data:(0,i.Z)((0,i.Z)({defaultHeight:r?22:40,isLeaf:r,isOpenByDefault:!0,nestingLevel:n,selected:c},e),t),nestingLevel:n,node:e}}var z=(0,c.observer)((function(e){var n=e.height,t=e.tree,o=e.model,i=o.filterText,c=o.selection,l=o.view,a=(0,r.useRef)(null),s=(0,h.getSession)(o).drawerPosition,d=(0,r.useMemo)((function(){return Object.fromEntries(c.map((function(e){return[e.trackId,e]})))}),[c]),u=(0,r.useMemo)((function(){return{onChange:function(e){return l.toggleTrack(e)},toggleCollapse:function(e){return o.toggleCategory(e)},tree:t,model:o,drawerPosition:s}}),[l,o,s,t]),f=(0,r.useCallback)((0,x.Z)().mark((function e(){var n,o,i,r,c;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<t.children.length)){e.next=8;break}return o=t.children[n],e.next=5,R(o,0,u,d);case 5:n++,e.next=1;break;case 8:return void(e.next=11);case 11:i=e.sent,r=0;case 13:if(!(r<i.node.children.length)){e.next=20;break}return c=i.node.children[r],e.next=17,R(c,i.nestingLevel+1,u,d);case 17:r++,e.next=13;break;case 20:e.next=8;break;case 22:case"end":return e.stop()}}),e)})),[t,u,d]);return(0,r.useEffect)((function(){a.current.recomputeTree({refreshNodes:!0,useDefaultHeight:!0})}),[t,i]),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(k.qF,{ref:a,treeWalker:f,height:n,children:D})})})),_=t(66519),U=t(5738),q=t(44536),G=t(30570),J=t(62561),K=t(4645),Q=(0,r.lazy)((function(){return Promise.all([t.e(8581),t.e(2501)]).then(t.bind(t,52501))})),V=(0,r.lazy)((function(){return t.e(7406).then(t.bind(t,87406))})),X=(0,r.lazy)((function(){return t.e(6417).then(t.bind(t,56417))})),Y=(0,r.lazy)((function(){return t.e(870).then(t.bind(t,30870))})),$=(0,c.observer)((function(e){var n=e.model,t=(0,h.getSession)(n),i=(0,r.useState)(),c=(0,o.Z)(i,2),l=c[0],a=c[1],s=(0,r.useState)(),d=(0,o.Z)(s,2),u=d[0],f=d[1],v=(0,r.useState)(!1),m=(0,o.Z)(v,2),x=m[0],k=m[1],C=(0,r.useState)(!1),p=(0,o.Z)(C,2),b=p[0],j=p[1];function Z(e,n){var i=(0,F.readConfObject)(e,"name"),r=t.prepareToBreakConnection(e);if(r){var c=(0,o.Z)(r,2),l=c[0],s=c[1];Object.keys(s).length>0?a({connectionConf:e,safelyBreakConnection:l,dereferenceTypeCount:s,name:i}):l()}n&&f({name:i,connectionConf:e})}return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(J.Z,{menuItems:[].concat((0,A.Z)((0,h.isSessionWithAddTracks)(t)?[{label:"Add track...",onClick:function(){(0,h.isSessionModelWithWidgets)(t)&&t.showWidget(t.addWidget("AddTrackWidget","addTrackWidget",{view:n.view.id}))}}]:[]),(0,A.Z)((0,h.isSessionModelWithConnections)(t)?[{label:"Turn on/off connections...",onClick:function(){return k(!0)}}]:[]),(0,A.Z)((0,h.isSessionModelWithConnectionEditing)(t)?[{label:"Add connection...",onClick:function(){(0,h.isSessionModelWithWidgets)(t)&&t.showWidget(t.addWidget("AddConnectionWidget","addConnectionWidget"))}},{label:"Delete connections...",onClick:function(){return j(!0)}}]:[]),[{type:"divider"},{label:"Sort tracks by name",type:"checkbox",checked:n.activeSortTrackNames,onClick:function(){return n.setSortTrackNames(!n.activeSortTrackNames)}},{label:"Sort categories by name",type:"checkbox",checked:n.activeSortCategories,onClick:function(){return n.setSortCategories(!n.activeSortCategories)}},{type:"divider"}],(0,A.Z)(n.hasAnySubcategories?[{label:"Collapse subcategories",onClick:function(){return n.collapseSubCategories()}}]:[]),[{label:"Collapse top-level categories",onClick:function(){return n.collapseTopLevelCategories()}},{label:"Expand all categories",onClick:function(){return n.expandAllCategories()}}]),children:(0,g.jsx)(K.Z,{})}),(0,g.jsxs)(r.Suspense,{fallback:(0,g.jsx)(r.Fragment,{}),children:[l?(0,g.jsx)(Q,{modalInfo:l,onClose:function(){return a(void 0)}}):null,u?(0,g.jsx)(V,{handleClose:function(){return f(void 0)},deleteDialogDetails:u,session:t}):null,b?(0,g.jsx)(X,{handleClose:function(){return j(!1)},breakConnection:Z,session:t}):null,x?(0,g.jsx)(Y,{handleClose:function(){return k(!1)},session:t,breakConnection:Z}):null]})]})})),ee=t(35920),ne=(0,r.lazy)((function(){return Promise.all([t.e(534),t.e(4721),t.e(1637),t.e(317)]).then(t.bind(t,71960))})),te=(0,u.ZL)()((function(e){return{searchBox:{margin:e.spacing(2)},menuIcon:{marginRight:e.spacing(1),marginBottom:0}}})),oe=(0,c.observer)((function(e){var n=e.model,t=n.filterText,o=te().classes;return(0,g.jsx)(_.Z,{className:o.searchBox,label:"Filter tracks",value:t,onChange:function(e){return n.setFilterText(e.target.value)},fullWidth:!0,InputProps:{endAdornment:(0,g.jsx)(U.Z,{position:"end",children:(0,g.jsx)(b.Z,{onClick:function(){return n.clearFilterText()},children:(0,g.jsx)(G.Z,{})})})}})}));var ie=(0,c.observer)((function(e){var n=e.model,t=e.setHeaderHeight,i=te().classes,c=(0,r.useState)(!1),l=(0,o.Z)(c,2),a=l[0],s=l[1];return(0,g.jsxs)("div",{ref:function(e){return t((null===e||void 0===e?void 0:e.getBoundingClientRect().height)||0)},"data-testid":"hierarchical_track_selector",children:[(0,g.jsxs)("div",{style:{display:"flex"},children:[(0,g.jsx)($,{model:n}),(0,g.jsx)(ee.Z,{model:n}),(0,g.jsx)(oe,{model:n}),(0,g.jsx)(q.Z,{className:i.menuIcon,onClick:function(){return s(!0)},children:"Open faceted selector"})]}),(0,g.jsx)(r.Suspense,{fallback:(0,g.jsx)("div",{}),children:a?(0,g.jsx)(ne,{handleClose:function(){return s(!1)},model:n}):null})]})})),re=function(e){var n=e.tree,t=e.model,o=e.offset;return"undefined"===typeof jest?(0,g.jsx)(l.ZP,{disableWidth:!0,children:function(e){return(0,g.jsx)(z,{height:(e.height||o)-o,model:t,tree:n})}}):(0,g.jsx)(z,{height:9e3,model:t,tree:n})},ce=function(e){var n=e.overrideDimensions,t=e.children;return n?(0,g.jsx)("div",{style:(0,i.Z)({},n),children:t}):(0,g.jsx)(g.Fragment,{children:t})},le=(0,c.observer)((function(e){var n=e.model,t=e.toolbarHeight,o=e.overrideDimensions;return(0,g.jsxs)(ce,{overrideDimensions:o,children:[(0,g.jsx)(ae,{model:n,toolbarHeight:t}),(0,g.jsx)(m,{model:n})]})})),ae=(0,c.observer)((function(e){var n=e.model,t=e.toolbarHeight,i=void 0===t?0:t,c=(0,r.useState)(0),l=(0,o.Z)(c,2),a=l[0],s=l[1];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(ie,{model:n,setHeaderHeight:s}),(0,g.jsx)(re,{tree:n.hierarchy,model:n,offset:i+a})]})})),se=le},35920:function(e,n,t){var o=t(33028),i=t(68079),r=t(96234),c=t(96902),l=t(25322),a=t(98453),s=t(35478),d=t(4782),u=t(41590),h=t(27664),f=t(87771),g=t(29938),v=(0,s.ZL)()((function(e){return{searchBox:{margin:e.spacing(2)},menuIcon:{marginRight:e.spacing(1),marginBottom:0}}}));n.Z=(0,d.observer)((function(e){var n=e.model,t=v().classes,s=n.selection,d=(0,h.getEnv)(n).pluginManager,m=(0,h.getSession)(n),x=(0,c.useState)(),k=(0,r.Z)(x,2),C=k[0],p=k[1],b=d.evaluateExtensionPoint("TrackSelector-multiTrackMenuItems",[],{session:m});return(0,g.jsxs)(g.Fragment,{children:[s.length?(0,g.jsx)(l.Z,{className:t.menuIcon,onClick:function(e){return p(e.currentTarget)},children:(0,g.jsx)(a.Z,{badgeContent:s.length,color:"primary",children:(0,g.jsx)(f.Z,{})})}):null,(0,g.jsx)(u.Z,{anchorEl:C,open:Boolean(C),onMenuItemClick:function(e,n){n(),p(void 0)},onClose:function(){return p(void 0)},menuItems:[{label:"Clear",onClick:function(){return n.clearSelection()}}].concat((0,i.Z)(b.map((function(e){return(0,o.Z)((0,o.Z)({},e),"onClick"in e?{onClick:function(){return e.onClick(n)}}:{})}))))})]})}))}}]);
//# sourceMappingURL=7538.5eca70c7.chunk.js.map