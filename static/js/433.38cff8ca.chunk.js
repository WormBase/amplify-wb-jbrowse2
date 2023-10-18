"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[433,2836],{89667:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var r=n(33028),i=n(59740),o=n(96902),a=n(4782),s=n(6880),l=n(12546),c=n(96251),u=n(70899),d=n(68079),f=n(96234),v=n(56666),h=n(35388),p=n(66519),m=n(80367),Z=n(32114),g=n(34721),x=n(41637),j=n(27664),w=n(35352),b=n(29938);function k(e){var t=e.columns,n=e.filter,i=e.setFilter;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Z,{children:"These filters can use a plain text search or regex style query, e.g. in the genotype field, entering 1 will query for all genotypes that include the first alternate allele e.g. 0|1 or 1|1, entering [1-9]\\d* will find any non-zero allele e.g. 0|2 or 2/33"}),t.map((function(e){var t=e.field;return(0,b.jsx)(p.Z,{placeholder:"Filter ".concat(t),value:n[t]||"",onChange:function(e){return i((0,r.Z)((0,r.Z)({},n),{},(0,v.Z)({},t,e.target.value)))}},"filter-".concat(t))}))]})}function y(e){var t,n,i=e.feature,a=e.descriptions,s=void 0===a?{}:a,l=(0,w.x)(),u=l.ref,v=l.scrollLeft,p=(0,o.useState)({}),y=(0,f.Z)(p,2),S=y[0],C=y[1],N=i.samples||{},E=Object.entries(N),L=[],O=Object.keys(S);try{L=E.map((function(e){return(0,r.Z)((0,r.Z)({},Object.fromEntries(Object.entries(e[1]).map((function(e){return[e[0],"".concat(e[1])]})))),{},{sample:e[0],id:e[0]})})).filter((function(e){return!O.length||O.every((function(t){var n=S[t];return!n||e[t].match(new RegExp(n,"i"))}))}))}catch(H){n=H}var F=["sample"].concat((0,d.Z)(Object.keys((null===(t=E[0])||void 0===t?void 0:t[1])||{}))),T=(0,o.useState)(!1),R=(0,f.Z)(T,2),A=R[0],D=R[1],I=(0,o.useState)(F.map((function(e){return(0,j.measureGridWidth)(L.map((function(t){return t[e]})))}))),M=(0,f.Z)(I,2),G=M[0],P=M[1],B=F.map((function(e,t){var n,r;return{field:e,description:null===(n=s.FORMAT)||void 0===n||null===(r=n[e])||void 0===r?void 0:r.Description,width:G[t]}}));return E.length?(0,b.jsxs)(c.BaseCard,(0,r.Z)((0,r.Z)({},e),{},{title:"Samples",children:[n?(0,b.jsx)(h.Z,{color:"error",children:"".concat(n)}):null,(0,b.jsx)(m.Z,{control:(0,b.jsx)(Z.Z,{checked:A,onChange:function(e){return D(e.target.checked)}}),label:(0,b.jsx)(h.Z,{variant:"body2",children:"Show options"})}),A?(0,b.jsx)(k,{setFilter:C,columns:B,filter:S}):null,(0,b.jsxs)("div",{ref:u,children:[(0,b.jsx)(w.Z,{widths:G,setWidths:P,scrollLeft:v}),(0,b.jsx)(g._$,{rows:L,hideFooter:L.length<100,columns:B,disableRowSelectionOnClick:!0,rowHeight:25,columnHeaderHeight:35,disableColumnMenu:!0,slots:{toolbar:A?x.n:null},slotProps:{toolbar:{printOptions:{disableToolbarButton:!0}}}})]})]})):null}var S=n(63348),C=n(43430),N=n(52809),E=n(99688),L=n(44536),O=n(35478),F=n(63680),T=n(17867),R=(0,O.ZL)()({block:{display:"block"}}),A=(0,a.observer)((function(e){var t=e.model,n=e.handleClose,i=e.feature,a=e.viewType,s=R().classes,l=(0,o.useState)(!0),c=(0,f.Z)(l,2),u=c[0],v=c[1],h=(0,o.useState)(!0),p=(0,f.Z)(h,2),g=p[0],x=p[1];return(0,b.jsxs)(T.Dialog,{open:!0,onClose:n,title:"Breakpoint split view options",children:[(0,b.jsxs)(N.Z,{children:[(0,b.jsx)(m.Z,{className:s.block,control:(0,b.jsx)(Z.Z,{checked:u,onChange:function(e){return v(e.target.checked)}}),label:"Copy tracks into the new view"}),(0,b.jsx)(m.Z,{className:s.block,control:(0,b.jsx)(Z.Z,{checked:g,onChange:function(e){return x(e.target.checked)}}),label:"Mirror tracks vertically in vertically stacked view"})]}),(0,b.jsxs)(E.Z,{children:[(0,b.jsx)(L.Z,{onClick:function(){var e=t.view,o=(0,j.getSession)(t);try{var s=function(e){return e.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{id:"".concat(e.trackId,"-").concat(Math.random())})}))},l=a.snapshotFromBreakendFeature(i,e);l.views[0].offsetPx-=e.width/2+100,l.views[1].offsetPx-=e.width/2+100,l.featureData=i;var c=(0,F.getSnapshot)(e.tracks);l.views[0].tracks=s(c),l.views[1].tracks=s(g?(0,d.Z)(c).reverse():c),o.addView("BreakpointSplitView",l)}catch(u){console.error(u),o.notify("".concat(u))}n()},variant:"contained",color:"primary",autoFocus:!0,children:"OK"}),(0,b.jsx)(L.Z,{onClick:function(){return n()},color:"secondary",variant:"contained",children:"Cancel"})]})]})}));function D(e){var t,n=e.model,i=e.locStrings,a=e.feature,s=(0,j.getSession)(n),l=(0,j.getEnv)(s).pluginManager,u=(0,o.useState)(!1),d=(0,f.Z)(u,2),v=d[0],p=d[1];try{t=l.getViewType("BreakpointSplitView")}catch(Z){}var m=new C.Z(a);return(0,b.jsxs)(c.BaseCard,(0,r.Z)((0,r.Z)({},e),{},{title:"Breakends",children:[(0,b.jsx)(h.Z,{children:"Link to linear view of breakend endpoints"}),(0,b.jsx)("ul",{children:i.map((function(e){return(0,b.jsx)("li",{children:(0,b.jsx)(S.Z,{href:"#",onClick:function(t){t.preventDefault();var r=n.view;try{if(!r)throw new Error("No view associated with this feature detail panel anymore");var i;null===(i=r.navToLocString)||void 0===i||i.call(r,e)}catch(Z){console.error(Z),s.notify("".concat(Z))}},children:"LGV - ".concat(e)})},"".concat(JSON.stringify(e)))}))}),t?(0,b.jsxs)("div",{children:[(0,b.jsx)(h.Z,{children:"Launch split views with breakend source and target"}),(0,b.jsx)("ul",{children:i.map((function(e){return(0,b.jsx)("li",{children:(0,b.jsx)(S.Z,{href:"#",onClick:function(e){e.preventDefault(),p(!0)},children:"".concat(a.refName,":").concat(a.start," // ").concat(e," (split view)")})},"".concat(JSON.stringify(e)))}))}),v?(0,b.jsx)(A,{model:n,feature:m,viewType:t,handleClose:function(){p(!1)}}):null]}):null]}))}function I(e){var t=e.rows,n=e.columns,i=(0,w.x)(),a=i.ref,s=i.scrollLeft,l=(0,o.useState)(!1),c=(0,f.Z)(l,2),u=c[0],d=c[1],v=(0,o.useState)(n.map((function(e){return(0,j.measureGridWidth)(t.map((function(t){return t[e.field]})))}))),p=(0,f.Z)(v,2),k=p[0],y=p[1];return t.length?(0,b.jsxs)("div",{ref:a,children:[(0,b.jsx)(m.Z,{control:(0,b.jsx)(Z.Z,{checked:u,onChange:function(e){return d(e.target.checked)}}),label:(0,b.jsx)(h.Z,{variant:"body2",children:"Show options"})}),(0,b.jsxs)("div",{ref:a,children:[(0,b.jsx)(w.Z,{widths:k,setWidths:y,scrollLeft:s}),(0,b.jsx)(g._$,{rowHeight:25,rows:t,columns:n.map((function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{width:k[t]})})),slots:{toolbar:u?x.n:null}})]})]}):null}function M(e){var t=e.data,n=e.fields,i=e.title;return t.length?(0,b.jsx)(c.BaseCard,{title:i,children:(0,b.jsx)(I,{rows:t.map((function(e,t){return(0,r.Z)({id:t},Object.fromEntries(e.split("|").map((function(e,t){return[n[t],e]}))))}))||[],columns:n.map((function(e){return{field:e}}))})}):null}var G=["samples"],P={CHROM:"chromosome: An identifier from the reference genome",POS:"position: The reference position, with the 1st base having position 1",ID:"identifier: Semi-colon separated list of unique identifiers where available",REF:"reference base(s): Each base must be one of A,C,G,T,N (case insensitive).",ALT:"alternate base(s): Comma-separated list of alternate non-reference alleles",QUAL:"quality: Phred-scaled quality score for the assertion made in ALT",FILTER:"filter status: PASS if this position has passed all filters, otherwise a semicolon-separated list of codes for filters that fail"};function B(e){var t,n,r,i,o=e.descriptions,a=e.feature,s=null===o||void 0===o||null===(t=o.INFO)||void 0===t||null===(n=t.ANN)||void 0===n?void 0:n.Description,l=(null===s||void 0===s||null===(r=s.match(/.*Functional annotations:'(.*)'$/))||void 0===r?void 0:r[1].split("|"))||[],c=(null===(i=a.INFO)||void 0===i?void 0:i.ANN)||[];return(0,b.jsx)(M,{fields:l,data:c,title:"Variant ANN field"})}function H(e){var t,n,r,i,o=e.descriptions,a=e.feature,s=null===o||void 0===o||null===(t=o.INFO)||void 0===t||null===(n=t.CSQ)||void 0===n?void 0:n.Description,l=(null===s||void 0===s||null===(r=s.match(/.*Format: (.*)/))||void 0===r?void 0:r[1].split("|"))||[],c=(null===(i=a.INFO)||void 0===i?void 0:i.CSQ)||[];return(0,b.jsx)(M,{fields:l,data:c,title:"Variant CSQ field"})}var V=(0,a.observer)((function(e){var t=e.model,n=t.featureData,o=t.descriptions,a=JSON.parse(JSON.stringify(n)),d=(a.samples,(0,i.Z)(a,G));return(0,b.jsxs)(s.Z,{"data-testid":"variant-side-drawer",children:[(0,b.jsx)(c.FeatureDetails,(0,r.Z)({feature:d,descriptions:(0,r.Z)((0,r.Z)({},P),o)},e)),(0,b.jsx)(l.Z,{}),(0,b.jsx)(H,{feature:d,descriptions:o}),(0,b.jsx)(l.Z,{}),(0,b.jsx)(B,{feature:d,descriptions:o}),(0,b.jsx)(l.Z,{}),"breakend"===a.type?(0,b.jsx)(D,{feature:a,locStrings:a.ALT.map((function(e){var t;return(null===(t=(0,u.I)(e))||void 0===t?void 0:t.MatePosition)||""})),model:t}):null,"translocation"===a.type?(0,b.jsx)(D,{feature:a,model:t,locStrings:["".concat(a.INFO.CHR2[0],":").concat(a.INFO.END)]}):null,(0,b.jsx)(y,(0,r.Z)((0,r.Z)({feature:a},e),{},{descriptions:o}))]})}))},99051:function(e,t,n){n.d(t,{d:function(){return c}});var r=n(96902),i=n(69989),o=n(41561),a=n(62009),s=n(29938);function l(e){return e.substring(2).toLowerCase()}function c(e){var t=e.children,n=e.disableReactTree,c=void 0!==n&&n,u=e.mouseEvent,d=void 0===u?"onClick":u,f=e.onClickAway,v=e.touchEvent,h=void 0===v?"onTouchEnd":v,p=r.useRef(!1),m=r.useRef(null),Z=r.useRef(!1),g=r.useRef(!1);r.useEffect((function(){return setTimeout((function(){Z.current=!0}),0),function(){Z.current=!1}}),[]);var x=(0,i.Z)(t.ref,m),j=(0,o.Z)((function(e){var t=g.current;g.current=!1;var n=(0,a.Z)(m.current);!Z.current||!m.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,n)||(p.current?p.current=!1:(e.composedPath?e.composedPath().indexOf(m.current)>-1:!n.documentElement.contains(e.target)||m.current.contains(e.target))||!c&&t||f(e))})),w=function(e){return function(n){g.current=!0;var r=t.props[e];r&&r(n)}},b={ref:x};return!1!==h&&(b[h]=w(h)),r.useEffect((function(){if(!1!==h){var e=l(h),t=(0,a.Z)(m.current),n=function(){p.current=!0};return t.addEventListener(e,j),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,j),t.removeEventListener("touchmove",n)}}}),[j,h]),!1!==d&&(b[d]=w(d)),r.useEffect((function(){if(!1!==d){var e=l(d),t=(0,a.Z)(m.current);return t.addEventListener(e,j),function(){t.removeEventListener(e,j)}}}),[j,d]),(0,s.jsx)(r.Fragment,{children:r.cloneElement(t,b)})}},82658:function(e,t,n){var r=n(56666),i=n(31461),o=n(7896),a=n(96902),s=n(37032),l=n(73674),c=n(53068),u=n(2252),d=n(24248),f=n(29938),v=["className","component","disableGutters","variant"],h=(0,u.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableGutters&&t.gutters,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({position:"relative",display:"flex",alignItems:"center"},!n.disableGutters&&(0,r.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),"dense"===n.variant&&{minHeight:48})}),(function(e){var t=e.theme;return"regular"===e.ownerState.variant&&t.mixins.toolbar})),p=a.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiToolbar"}),r=n.className,a=n.component,u=void 0===a?"div":a,p=n.disableGutters,m=void 0!==p&&p,Z=n.variant,g=void 0===Z?"regular":Z,x=(0,i.Z)(n,v),j=(0,o.Z)({},n,{component:u,disableGutters:m,variant:g}),w=function(e){var t=e.classes,n={root:["root",!e.disableGutters&&"gutters",e.variant]};return(0,l.Z)(n,d.N,t)}(j);return(0,f.jsx)(h,(0,o.Z)({as:u,className:(0,s.Z)(w.root,r),ref:t,ownerState:j},x))}));t.Z=p},24248:function(e,t,n){n.d(t,{N:function(){return o}});var r=n(74732),i=n(61235);function o(e){return(0,i.Z)("MuiToolbar",e)}var a=(0,r.Z)("MuiToolbar",["root","gutters","regular","dense"]);t.Z=a}}]);
//# sourceMappingURL=433.38cff8ca.chunk.js.map