"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2004,8177],{90375:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(68079),i=t(96234),o=t(41867),a=t(47192),c=t(54560),u=t(80838),s=(0,a.ZL)()((function(e){return{resizeBar:{background:e.palette.action.disabledBackground,height:12,position:"relative",overflow:"hidden"},tick:{position:"absolute",height:"100%",pointerEvents:"none",background:e.palette.action.disabled,width:1},hiddenTick:{position:"absolute",height:"100%",width:5}}}));function l(e){var n=e.left,t=e.scrollLeft,r=e.idx,i=e.onDrag,a=e.onMouseDown,l=s().classes,f=(0,o.useCallback)((function(e,n){return i(e,n,r)}),[r,i]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.Z,{onDrag:f,onMouseDown:a,vertical:!0,className:l.hiddenTick,style:{left:n-t-2.5}}),(0,u.jsx)("div",{style:{left:n-t},className:l.tick})]})}function f(e){for(var n=e.widths,t=e.setWidths,a=e.checkbox,c=e.scrollLeft,f=void 0===c?0:c,d=s().classes,h=[],v=(0,o.useState)(),m=(0,i.Z)(v,2),p=m[0],g=m[1],Z=a?52:0,x=0;x<n.length;x++){var w=n[x];h[x]=w+Z,Z+=w}return(0,u.jsx)("div",{className:d.resizeBar,children:h.map((function(e,i){return(0,u.jsx)(l,{onMouseDown:function(){g((0,r.Z)(n))},left:i===h.length-1?e-3:e,onDrag:function(e,i,o){var a=(0,r.Z)(n);a[o]=Math.max(p[o]-i,50),t(a)},idx:i,scrollLeft:f},i)}))})}},13577:function(e,n,t){t.d(n,{x:function(){return o}});var r=t(96234),i=t(41867);function o(){var e=(0,i.useRef)(null),n=(0,i.useState)(0),t=(0,r.Z)(n,2),o=t[0],a=t[1];return(0,i.useEffect)((function(){var n=setInterval((function(){var n,t=null===(n=e.current)||void 0===n?void 0:n.querySelector(".MuiDataGrid-virtualScroller");t&&a(t.scrollLeft)}),100);return function(){clearInterval(n)}}),[]),{ref:e,scrollLeft:o}}},65509:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var r=t(33028),i=t(41867),o=t(47409),a=t(35421),c=t(3762),u=t(68079),s=t(56666),l=t(96234),f=t(68367),d=t(85815),h=t(31625),v=t(58753),m=t(71512),p=t(99512),g=t(83734),Z=t(56762),x=t(90375),w=t(90872),j=t(43800),b=t(13577),k=t(47192),S=t(42980),C=t(31061),y=t(45294),M=t(49133),E=t(78693),L=t(64688),T=t(30340),O=t(74912),R=t(80838);function W(e){var n=e.setFilterText,t=e.setUseShoppingCart,r=e.setShowSparse,o=e.setShowFilters,c=e.setShowOptions,u=e.showOptions,s=e.showSparse,d=e.showFilters,h=e.useShoppingCart,v=e.filterText,m=e.model,p=(0,i.useState)(null),g=(0,l.Z)(p,2),Z=g[0],x=g[1];return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(y.ZP,{container:!0,spacing:4,alignItems:"center",children:[(0,R.jsx)(y.ZP,{item:!0,children:(0,R.jsx)(M.Z,{label:"Search...",value:v,onChange:function(e){return n(e.target.value)},InputProps:{endAdornment:(0,R.jsx)(E.Z,{position:"end",children:(0,R.jsx)(f.Z,{onClick:function(){return n("")},children:(0,R.jsx)(L.Z,{})})})}})}),(0,R.jsx)(y.ZP,{item:!0,children:(0,R.jsx)(f.Z,{onClick:function(e){return x(e.currentTarget)},children:(0,R.jsx)(T.Z,{})})}),(0,R.jsx)(y.ZP,{item:!0,children:(0,R.jsx)(O.Z,{model:m})})]}),(0,R.jsx)(a.Menu,{anchorEl:Z,open:!!Z,onClose:function(){return x(null)},onMenuItemClick:function(e,n){n(),x(null)},menuItems:[{label:"Add tracks to selection instead of turning them on/off",onClick:function(){return t(!h)},type:"checkbox",checked:h},{label:"Show sparse metadata columns",onClick:function(){return r(!s)},checked:s,type:"checkbox"},{label:"Show facet filters",onClick:function(){return o(!d)},checked:d,type:"checkbox"},{label:"Show extra table options",onClick:function(){return c(!u)},checked:u,type:"checkbox"}]})]})}var N=t(41361),H=t(77573),I=t(90552),F=t(51590),G=t(36669),D=t(18087),P=t(36686),z=(0,k.ZL)()((function(e){return{facet:{margin:0,marginLeft:e.spacing(2)},select:{marginBottom:e.spacing(2)}}}));function B(e){var n=e.onClick;return(0,R.jsx)(H.Z,{title:"Clear selection on this facet filter",children:(0,R.jsx)(f.Z,{onClick:function(){return n()},size:"small",children:(0,R.jsx)(L.Z,{})})})}function _(e){var n=e.visible,t=e.onClick;return(0,R.jsx)(H.Z,{title:"Minimize/expand this facet filter",children:(0,R.jsx)(f.Z,{onClick:function(){return t()},size:"small",children:n?(0,R.jsx)(D.Z,{}):(0,R.jsx)(P.Z,{})})})}function A(e){var n=e.column,t=e.vals,r=e.width,o=e.dispatch,a=e.filters,c=z().classes,s=(0,i.useState)(!0),f=(0,l.Z)(s,2),d=f[0],h=f[1];return(0,R.jsxs)(I.Z,{className:c.facet,style:{width:r},children:[(0,R.jsxs)("div",{style:{display:"flex"},children:[(0,R.jsx)(F.Z,{children:n.field}),(0,R.jsx)(B,{onClick:function(){return o({key:n.field,val:[]})}}),(0,R.jsx)(_,{visible:d,onClick:function(){return h(!d)}})]}),d?(0,R.jsx)(G.Z,{multiple:!0,native:!0,className:c.select,value:a[n.field],onChange:function(e){o({key:n.field,val:(0,u.Z)(e.target.options).filter((function(e){return e.selected})).map((function(e){return e.value}))})},children:t.sort((function(e,n){return e[0].localeCompare(n[0])})).map((function(e){var n=(0,l.Z)(e,2),t=n[0],r=n[1];return(0,R.jsxs)("option",{value:t,children:[(0,w.coarseStripHTML)(t)," (",r,")"]},t)}))}):null]},n.field)}function X(e){for(var n=e.rows,t=e.columns,r=e.dispatch,i=e.filters,o=e.width,a=t.slice(1),c=new Map(a.map((function(e){return[e.field,new Map]}))),s=Object.keys(i),l=a.map((function(e){return e.field})),f=new Set,d=0,h=s;d<h.length;d++){var v,m=h[d];null!==(v=i[m])&&void 0!==v&&v.length&&f.add(m)}var p,g=(0,N.Z)(l);try{for(g.s();!(p=g.n()).done;){var Z=p.value;f.add(Z)}}catch(k){g.e(k)}finally{g.f()}var x,w=n,j=(0,N.Z)(f);try{var b=function(){var e,n,t=x.value,r=c.get(t),o=(0,N.Z)(w);try{for(o.s();!(n=o.n()).done;){var a=n.value,u="".concat(a[t]||""),s=r.get(u);u&&(void 0===s?r.set(u,1):r.set(u,s+1))}}catch(k){o.e(k)}finally{o.f()}var l=null!==(e=i[t])&&void 0!==e&&e.length?new Set(i[t]):void 0;w=w.filter((function(e){return void 0===l||l.has(e[t])}))};for(j.s();!(x=j.n()).done;)b()}catch(k){j.e(k)}finally{j.f()}return(0,R.jsx)("div",{children:a.map((function(e){return(0,R.jsx)(A,{vals:(0,u.Z)(c.get(e.field)),column:e,width:o,dispatch:r,filters:i},e.field)}))})}var U=["category","adapter","description"],V=(0,k.ZL)()({cell:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}),Y=.75,q=(0,c.observer)((function(e){var n,t,o=e.model,c=V().classes,k=o.view,y=o.selection,M=(0,w.getEnv)(o).pluginManager,E=(0,b.x)(),L=E.ref,T=E.scrollLeft,O=(0,i.useState)(""),N=(0,l.Z)(O,2),H=N[0],I=N[1],F=(0,w.useLocalStorage)("facet-showTableOptions",!1),G=(0,l.Z)(F,2),D=G[0],P=G[1],z=(0,i.useState)(),B=(0,l.Z)(z,2),_=B[0],A=B[1],q=(0,i.useState)(!1),$=(0,l.Z)(q,2),J=$[0],K=$[1],Q=(0,w.useLocalStorage)("facet-showSparse",!1),ee=(0,l.Z)(Q,2),ne=ee[0],te=ee[1],re=(0,w.useLocalStorage)("facet-showFilters",!0),ie=(0,l.Z)(re,2),oe=ie[0],ae=ie[1],ce=(0,w.useLocalStorage)("facet-panelWidth",400),ue=(0,l.Z)(ce,2),se=ue[0],le=ue[1],fe=(0,w.getSession)(o),de=(0,w.useDebounce)(H,400),he=k.tracks,ve=(0,i.useReducer)((function(e,n){return(0,r.Z)((0,r.Z)({},e),{},(0,s.Z)({},n.key,n.val))}),{}),me=(0,l.Z)(ve,2),pe=me[0],ge=me[1],Ze=(0,i.useMemo)((function(){return o.trackConfigurations.filter((function(e){return(0,C.wB)(de,e,fe)})).map((function(e){var n,t,i=(0,j.readConfObject)(e,"metadata");return(0,r.Z)({id:e.trackId,conf:e,name:(0,p.getTrackName)(e,fe),category:null===(n=(0,j.readConfObject)(e,"category"))||void 0===n?void 0:n.join(", "),adapter:null===(t=(0,j.readConfObject)(e,"adapter"))||void 0===t?void 0:t.type,description:(0,j.readConfObject)(e,"description"),metadata:i},i)}))}),[o,de,fe]),xe=(0,i.useMemo)((function(){return U.filter((function(e){return!!ne||Ze.map((function(n){return n[e]})).filter((function(e){return!!e})).length>5}))}),[ne,Ze]),we=(0,i.useMemo)((function(){return(0,u.Z)(new Set(Ze.flatMap((function(e){return n=e.metadata,Object.entries(n).map((function(e){var n=(0,l.Z)(e,2),t=n[0];return"string"===typeof n[1]?t:""})).filter((function(e){return!!e}));var n})))).filter((function(e){return!!ne||Ze.map((function(n){return n.metadata[e]})).filter((function(e){return!!e})).length>5}))}),[ne,Ze]),je=(0,i.useMemo)((function(){return["name"].concat((0,u.Z)(xe),(0,u.Z)(we))}),[xe,we]),be=(0,i.useState)((0,r.Z)((0,r.Z)({name:(0,w.measureGridWidth)(Ze.map((function(e){return e.name})),{maxWidth:500,stripHTML:!0})+15},Object.fromEntries(xe.map((function(e){return[e,(0,w.measureGridWidth)(Ze.map((function(n){return n[e]})),{maxWidth:400,stripHTML:!0})]})))),Object.fromEntries(we.map((function(e){return[e,(0,w.measureGridWidth)(Ze.map((function(n){return n.metadata[e]})),{maxWidth:400,stripHTML:!0})]}))))),ke=(0,l.Z)(be,2),Se=ke[0],Ce=ke[1],ye=(0,i.useState)(Object.fromEntries(je.map((function(e){return[e,!0]})))),Me=(0,l.Z)(ye,2),Ee=Me[0],Le=Me[1];(0,i.useEffect)((function(){Le((function(e){return(0,r.Z)((0,r.Z)({},Object.fromEntries(je.map((function(e){return[e,!0]})))),e)}))}),[je]),(0,i.useEffect)((function(){Ce((function(e){return(0,r.Z)((0,r.Z)({name:e.name},Object.fromEntries(xe.filter((function(e){return Ee[e]})).map((function(e){return[e,(0,w.measureGridWidth)(Ze.map((function(n){return n[e]})),{stripHTML:!0,maxWidth:400})]})))),Object.fromEntries(we.filter((function(e){return Ee[e]})).map((function(e){return[e,(0,w.measureGridWidth)(Ze.map((function(n){return n.metadata[e]})),{stripHTML:!0,maxWidth:400})]}))))}))}),[we,Ee,xe,ne,Ze]);var Te=(0,w.useDebounce)(Se,200),Oe=[{field:"name",hideable:!1,renderCell:function(e){var n=e.value,t=e.id,r=e.row;return(0,R.jsxs)("div",{className:c.cell,children:[(0,R.jsx)(g.Z,{html:n}),(0,R.jsx)(f.Z,{onClick:function(e){return A({target:e.currentTarget,id:t,conf:r.conf})},children:(0,R.jsx)(S.Z,{})})]})},width:null!==(n=Te.name)&&void 0!==n?n:100}].concat((0,u.Z)(xe.map((function(e){var n;return{field:e,width:null!==(n=Te[e])&&void 0!==n?n:100,renderCell:function(e){var n=e.value;return(0,R.jsx)("div",{className:c.cell,children:n?(0,R.jsx)(g.Z,{html:n}):""})}}}))),(0,u.Z)(we.map((function(e){var n;return{field:e,width:null!==(n=Te[e])&&void 0!==n?n:100,renderCell:function(e){var n=e.value;return(0,R.jsx)("div",{className:c.cell,children:n?(0,R.jsx)(g.Z,{html:n}):""})}}})))),Re=new Set(he.map((function(e){return e.configuration.trackId}))),We=Object.entries(pe).filter((function(e){return e[1].length>0})).map((function(e){var n=(0,l.Z)(e,2),t=n[0],r=n[1];return[t,new Set(r)]})),Ne=Ze.filter((function(e){return We.every((function(n){var t=(0,l.Z)(n,2),r=t[0];return t[1].has(e[r])}))}));return(0,R.jsxs)(R.Fragment,{children:[_?(0,R.jsx)(Z.Z,{anchorEl:null===_||void 0===_?void 0:_.target,menuItems:(null===(t=fe.getTrackActionMenuItems)||void 0===t?void 0:t.call(fe,_.conf))||[],onMenuItemClick:function(e,n){n(),A(void 0)},open:!!_,onClose:function(){return A(void 0)}}):null,(0,R.jsx)(W,{setShowSparse:te,setShowFilters:ae,setShowOptions:P,setFilterText:I,setUseShoppingCart:K,showFilters:oe,showSparse:ne,showOptions:D,filterText:H,useShoppingCart:J,model:o}),(0,R.jsxs)("div",{ref:L,style:{display:"flex",overflow:"hidden",height:window.innerHeight*Y,width:window.innerWidth*Y},children:[(0,R.jsxs)("div",{style:{height:window.innerHeight*Y,width:window.innerWidth*Y-(oe?se:0)},children:[(0,R.jsx)(x.Z,{checkbox:!0,widths:Object.values(Se).map((function(e){return null!==e&&void 0!==e?e:100})),setWidths:function(e){return Ce(Object.fromEntries(Object.entries(Se).map((function(n,t){return[n[0],e[t]]}))))},scrollLeft:T}),(0,R.jsx)(v._$,{rows:Ne,columnVisibilityModel:Ee,onColumnVisibilityModelChange:function(e){return Le(e)},columnHeaderHeight:35,checkboxSelection:!0,disableRowSelectionOnClick:!0,keepNonExistentRowsSelected:!0,onRowSelectionModelChange:function(e){if(J){var n=(0,h.getRoot)(o),t=M.pluggableConfigSchemaType("track"),r=e.map((function(e){return(0,h.resolveIdentifier)(t,n,e)}));o.setSelection(r)}else{var i=Re,a=new Set(e);(0,d.transaction)((function(){(0,u.Z)(i).filter((function(e){return!a.has(e)})).map((function(e){return k.hideTrack(e)})),(0,u.Z)(a).filter((function(e){return!i.has(e)})).map((function(e){return k.showTrack(e)}))}))}},rowSelectionModel:J?y.map((function(e){return e.trackId})):(0,u.Z)(Re),slots:{toolbar:D?m.n:null},slotProps:{toolbar:{printOptions:{disableToolbarButton:!0}}},columns:Oe,rowHeight:25})]}),oe?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(a.ResizeHandle,{vertical:!0,onDrag:function(e){return le(se-e)},style:{marginLeft:5,background:"grey",width:5}}),(0,R.jsx)("div",{style:{width:se,overflowY:"auto",overflowX:"hidden"},children:(0,R.jsx)(X,{width:se-10,rows:Ze,columns:Oe,dispatch:ge,filters:pe})})]}):null]})]})})),$=(0,c.observer)((function(e){var n=e.handleClose;return(0,R.jsx)(a.Dialog,{open:!0,onClose:n,maxWidth:"xl",title:"Faceted track selector",children:(0,R.jsx)(o.Z,{children:(0,R.jsx)(q,(0,r.Z)({},e))})})}))},20875:function(e,n,t){t.d(n,{d:function(){return s}});var r=t(41867),i=t(32407),o=t(95809),a=t(89293),c=t(80838);function u(e){return e.substring(2).toLowerCase()}function s(e){var n=e.children,t=e.disableReactTree,s=void 0!==t&&t,l=e.mouseEvent,f=void 0===l?"onClick":l,d=e.onClickAway,h=e.touchEvent,v=void 0===h?"onTouchEnd":h,m=r.useRef(!1),p=r.useRef(null),g=r.useRef(!1),Z=r.useRef(!1);r.useEffect((function(){return setTimeout((function(){g.current=!0}),0),function(){g.current=!1}}),[]);var x=(0,i.Z)(n.ref,p),w=(0,o.Z)((function(e){var n=Z.current;Z.current=!1;var t=(0,a.Z)(p.current);!g.current||!p.current||"clientX"in e&&function(e,n){return n.documentElement.clientWidth<e.clientX||n.documentElement.clientHeight<e.clientY}(e,t)||(m.current?m.current=!1:(e.composedPath?e.composedPath().indexOf(p.current)>-1:!t.documentElement.contains(e.target)||p.current.contains(e.target))||!s&&n||d(e))})),j=function(e){return function(t){Z.current=!0;var r=n.props[e];r&&r(t)}},b={ref:x};return!1!==v&&(b[v]=j(v)),r.useEffect((function(){if(!1!==v){var e=u(v),n=(0,a.Z)(p.current),t=function(){m.current=!0};return n.addEventListener(e,w),n.addEventListener("touchmove",t),function(){n.removeEventListener(e,w),n.removeEventListener("touchmove",t)}}}),[w,v]),!1!==f&&(b[f]=j(f)),r.useEffect((function(){if(!1!==f){var e=u(f),n=(0,a.Z)(p.current);return n.addEventListener(e,w),function(){n.removeEventListener(e,w)}}}),[w,f]),(0,c.jsx)(r.Fragment,{children:r.cloneElement(n,b)})}},69625:function(e,n,t){var r=t(56666),i=t(31461),o=t(7896),a=t(41867),c=t(66184),u=t(92705),s=t(90293),l=t(75693),f=t(59968),d=t(80838),h=["className","component","disableGutters","variant"],v=(0,l.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,!t.disableGutters&&n.gutters,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&(0,r.Z)({paddingLeft:n.spacing(2),paddingRight:n.spacing(2)},n.breakpoints.up("sm"),{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}),"dense"===t.variant&&{minHeight:48})}),(function(e){var n=e.theme;return"regular"===e.ownerState.variant&&n.mixins.toolbar})),m=a.forwardRef((function(e,n){var t=(0,s.Z)({props:e,name:"MuiToolbar"}),r=t.className,a=t.component,l=void 0===a?"div":a,m=t.disableGutters,p=void 0!==m&&m,g=t.variant,Z=void 0===g?"regular":g,x=(0,i.Z)(t,h),w=(0,o.Z)({},t,{component:l,disableGutters:p,variant:Z}),j=function(e){var n=e.classes,t={root:["root",!e.disableGutters&&"gutters",e.variant]};return(0,u.Z)(t,f.N,n)}(w);return(0,d.jsx)(v,(0,o.Z)({as:l,className:(0,c.Z)(j.root,r),ref:n,ownerState:w},x))}));n.Z=m},59968:function(e,n,t){t.d(n,{N:function(){return o}});var r=t(70101),i=t(88498);function o(e){return(0,i.Z)("MuiToolbar",e)}var a=(0,r.Z)("MuiToolbar",["root","gutters","regular","dense"]);n.Z=a}}]);
//# sourceMappingURL=2004.3401ec4d.chunk.js.map