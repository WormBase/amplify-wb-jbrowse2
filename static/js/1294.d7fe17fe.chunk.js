"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[1294],{61294:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var r=t(33028),i=t(59740),a=t(96902),o=t(4782),s=t(6880),l=t(12546),c=t(42526),u=t(70899),d=t(56666),f=t(68079),h=t(96234),p=t(35388),v=t(80367),m=t(32114),j=t(66519),w=t(4514),x=t(29938);function Z(e){var n=e.feature,t=e.descriptions,i=(0,a.useState)({}),o=(0,h.Z)(i,2),s=o[0],l=o[1],u=(0,a.useState)(!1),Z=(0,h.Z)(u,2),g=Z[0],b=Z[1],k=n.samples,y=void 0===k?{}:k,S=Object.entries(y);if(!S.length)return null;var C,N=["sample"].concat((0,f.Z)(Object.keys(S[0][1]))).map((function(e){var n,r;return{field:e,description:null===(n=t.FORMAT)||void 0===n||null===(r=n[e])||void 0===r?void 0:r.Description}})),O=[],F=Object.keys(s);try{O=S.map((function(e){return(0,r.Z)((0,r.Z)({},Object.fromEntries(Object.entries(e[1]).map((function(e){return[e[0],String(e[1])]})))),{},{sample:e[0],id:e[0]})})).filter((function(e){return!F.length||F.every((function(n){var t=e[n],r=s[n];return!r||t.match(new RegExp(r,"i"))}))}))}catch(T){C=T}return(0,x.jsxs)(c.BaseCard,(0,r.Z)((0,r.Z)({},e),{},{title:"Samples",children:[C?(0,x.jsx)(p.Z,{color:"error",children:"".concat(C)}):null,(0,x.jsx)(v.Z,{control:(0,x.jsx)(m.Z,{checked:g,onChange:function(){return b((function(e){return!e}))}}),label:"Show sample filters"}),g?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p.Z,{children:"These filters can use a plain text search or regex style query, e.g. in the genotype field, entering 1 will query for all genotypes that include the first alternate allele e.g. 0|1 or 1|1, entering [1-9]\\d* will find any non-zero allele e.g. 0|2 or 2/33"}),N.map((function(e){var n=e.field;return(0,x.jsx)(j.Z,{placeholder:"Filter ".concat(n),value:s[n]||"",onChange:function(e){return l((0,r.Z)((0,r.Z)({},s),{},(0,d.Z)({},n,e.target.value)))}},"filter-".concat(n))}))]}):null,(0,x.jsx)("div",{style:{height:600,width:"100%",overflow:"auto"},children:(0,x.jsx)(w._,{rows:O,columns:N,disableSelectionOnClick:!0,rowHeight:25,disableColumnMenu:!0})})]}))}function g(e){var n=e.rows,t=e.columns,r=n.length<100;return n.length?(0,x.jsx)("div",{style:{height:25*Math.min(n.length,100)+80+(r?0:50),width:"100%"},children:(0,x.jsx)(w._,{rowHeight:25,rows:n,columns:t})}):null}function b(e){var n,t,i,a,o=e.feature,s=e.descriptions,l=(null===s||void 0===s||null===(n=s.INFO)||void 0===n||null===(t=n.CSQ)||void 0===t||null===(i=t.Description)||void 0===i||null===(a=i.match(/.*Format: (.*)/))||void 0===a?void 0:a[1].split("|"))||[],u=o.INFO.CSQ||[],d=u.map((function(e,n){return(0,r.Z)({id:n},Object.fromEntries(e.split("|").map((function(e,n){return[l[n],e]}))))}))||[],f=l.map((function(e){return{field:e}}));return u.length?(0,x.jsx)(c.BaseCard,{title:"CSQ table",children:(0,x.jsx)(g,{rows:d,columns:f})}):null}function k(e){var n,t,i,a,o=e.feature,s=e.descriptions,l=(null===s||void 0===s||null===(n=s.INFO)||void 0===n||null===(t=n.ANN)||void 0===t||null===(i=t.Description)||void 0===i||null===(a=i.match(/.*Functional annotations:'(.*)'$/))||void 0===a?void 0:a[1].split("|"))||[],u=o.INFO.ANN||[],d=u.map((function(e,n){return(0,r.Z)({id:n},Object.fromEntries(e.split("|").map((function(e,n){return[l[n],e]}))))}))||[],f=l.map((function(e){return{field:e}}));return u.length?(0,x.jsx)(c.BaseCard,{title:"ANN table",children:(0,x.jsx)(g,{rows:d,columns:f})}):null}var y=t(63348),S=t(43430),C=t(42054),N=t(52809),O=t(99688),F=t(44536),T=t(91188),A=t(63680),D=t(2769),E=(0,T.ZL)()({block:{display:"block"}});var I=(0,o.observer)((function(e){var n=e.model,t=e.handleClose,i=e.feature,o=e.viewType,s=E().classes,l=(0,a.useState)(!0),c=(0,h.Z)(l,2),u=c[0],d=c[1],f=(0,a.useState)(!0),p=(0,h.Z)(f,2),j=p[0],w=p[1];return(0,x.jsxs)(D.Dialog,{open:!0,onClose:t,title:"Breakpoint split view options",children:[(0,x.jsxs)(N.Z,{children:[(0,x.jsx)(v.Z,{className:s.block,control:(0,x.jsx)(m.Z,{checked:u,onChange:function(){return d((function(e){return!e}))}}),label:"Copy tracks into the new view"}),(0,x.jsx)(v.Z,{className:s.block,control:(0,x.jsx)(m.Z,{checked:j,onChange:function(){return w((function(e){return!e}))}}),label:"Mirror tracks vertically in vertically stacked view"})]}),(0,x.jsxs)(O.Z,{children:[(0,x.jsx)(F.Z,{onClick:function(){var e=n.view,a=(0,C.getSession)(n);try{var s=function(e){return e.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{id:e.trackId+"-"+Math.random()})}))},l=o.snapshotFromBreakendFeature(i,e);l.views[0].offsetPx-=e.width/2+100,l.views[1].offsetPx-=e.width/2+100,l.featureData=i;var c=(0,A.getSnapshot)(e.tracks);l.views[0].tracks=s(c),l.views[1].tracks=s(j?c.slice().reverse():c),a.addView("BreakpointSplitView",l)}catch(u){console.error(u),a.notify("".concat(u))}t()},variant:"contained",color:"primary",autoFocus:!0,children:"OK"}),(0,x.jsx)(F.Z,{onClick:function(){return t()},color:"secondary",variant:"contained",children:"Cancel"})]})]})}));function L(e){var n,t=e.model,i=e.locStrings,o=e.feature,s=(0,C.getSession)(t),l=(0,C.getEnv)(s).pluginManager,u=(0,a.useState)(!1),d=(0,h.Z)(u,2),f=d[0],v=d[1];try{n=l.getViewType("BreakpointSplitView")}catch(j){}var m=new S.Z(o);return(0,x.jsxs)(c.BaseCard,(0,r.Z)((0,r.Z)({},e),{},{title:"Breakends",children:[(0,x.jsx)(p.Z,{children:"Link to linear view of breakend endpoints"}),(0,x.jsx)("ul",{children:i.map((function(e){return(0,x.jsx)("li",{children:(0,x.jsx)(y.Z,{href:"#",onClick:function(n){n.preventDefault();var r=t.view;try{if(!r)throw new Error("No view associated with this feature detail panel anymore");var i;null===(i=r.navToLocString)||void 0===i||i.call(r,e)}catch(j){console.error(j),s.notify("".concat(j))}},children:"LGV - ".concat(e)})},"".concat(JSON.stringify(e)))}))}),n?(0,x.jsxs)("div",{children:[(0,x.jsx)(p.Z,{children:"Launch split views with breakend source and target"}),(0,x.jsx)("ul",{children:i.map((function(e){return(0,x.jsx)("li",{children:(0,x.jsx)(y.Z,{href:"#",onClick:function(e){e.preventDefault(),v(!0)},children:"".concat(o.refName,":").concat(o.start," // ").concat(e," (split view)")})},"".concat(JSON.stringify(e)))}))}),f?(0,x.jsx)(I,{model:t,feature:m,viewType:n,handleClose:function(){v(!1)}}):null]}):null]}))}var B=["samples"];var M=(0,o.observer)((function(e){var n=e.model,t=n.featureData,a=n.descriptions,o=JSON.parse(JSON.stringify(t)),d=(o.samples,(0,i.Z)(o,B));return(0,x.jsxs)(s.Z,{"data-testid":"variant-side-drawer",children:[(0,x.jsx)(c.FeatureDetails,(0,r.Z)({feature:d,descriptions:(0,r.Z)((0,r.Z)({},{CHROM:"chromosome: An identifier from the reference genome",POS:"position: The reference position, with the 1st base having position 1",ID:"identifier: Semi-colon separated list of unique identifiers where available",REF:"reference base(s): Each base must be one of A,C,G,T,N (case insensitive).",ALT:"alternate base(s): Comma-separated list of alternate non-reference alleles",QUAL:"quality: Phred-scaled quality score for the assertion made in ALT",FILTER:"filter status: PASS if this position has passed all filters, otherwise a semicolon-separated list of codes for filters that fail"}),a)},e)),(0,x.jsx)(l.Z,{}),(0,x.jsx)(b,{feature:d,descriptions:a}),(0,x.jsx)(l.Z,{}),(0,x.jsx)(k,{feature:d,descriptions:a}),(0,x.jsx)(l.Z,{}),"breakend"===o.type?(0,x.jsx)(L,{feature:o,locStrings:o.ALT.map((function(e){var n;return(null===(n=(0,u.I)(e))||void 0===n?void 0:n.MatePosition)||""})),model:n}):null,"translocation"===o.type?(0,x.jsx)(L,{feature:o,model:n,locStrings:["".concat(o.INFO.CHR2[0],":").concat(o.INFO.END)]}):null,(0,x.jsx)(Z,(0,r.Z)((0,r.Z)({feature:o},e),{},{descriptions:a}))]})}))}}]);
//# sourceMappingURL=1294.d7fe17fe.chunk.js.map