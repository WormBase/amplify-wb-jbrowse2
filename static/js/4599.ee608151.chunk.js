"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4599],{84599:function(n,e,o){o.r(e);o(41867);var c=o(96614),i=o(83171),r=o(51590),s=o(47409),t=o(27768),a=o(23801),l=o(35421),u=o(47192),f=o(3762),d=o(43800),h=o(80838);var b=(0,u.ZL)()((function(n){return{connectionContainer:{width:500,margin:n.spacing(4)}}})),j=(0,f.observer)((function(n){var e,o=n.conf,r=n.session,s=n.breakConnection,t=r.connectionInstances,a=void 0===t?[]:t,l=(0,d.readConfObject)(o,"name"),u=(0,d.readConfObject)(o,"assemblyNames"),f=a.find((function(n){return l===n.name}));return(0,h.jsx)(c.Z,{control:(0,h.jsx)(i.Z,{checked:!!f,onChange:function(){var n;f?s(o):null===(n=r.makeConnection)||void 0===n||n.call(r,o)},color:"primary"}),label:[l,u.length?"(".concat((e=u.join(","),e.length>20?"".concat(e.slice(0,20),"..."):e),")"):""].filter((function(n){return!!n})).join(" ")},o.connectionId)})),C=(0,f.observer)((function(n){var e=n.session,o=n.breakConnection,c=b().classes;return(0,h.jsx)("div",{className:c.connectionContainer,children:e.connections.length?e.connections.map((function(n,c){return(0,h.jsx)("div",{children:(0,h.jsx)(j,{conf:n,session:e,breakConnection:o})},n.name+"_"+c)})):(0,h.jsx)(r.Z,{children:"No connections found"})})})),v=(0,f.observer)((function(n){var e=n.session,o=n.handleClose,c=n.breakConnection;return(0,h.jsxs)(l.Dialog,{open:!0,onClose:o,maxWidth:"lg",title:"Turn on/off connections",children:[(0,h.jsxs)(s.Z,{children:[(0,h.jsx)(r.Z,{children:"Use the checkbox to turn on/off connections"}),(0,h.jsx)(C,{session:e,breakConnection:c})]}),(0,h.jsx)(t.Z,{children:(0,h.jsx)(a.Z,{onClick:function(){return o()},variant:"contained",color:"primary",children:"Close"})})]})}));e.default=v}}]);
//# sourceMappingURL=4599.ee608151.chunk.js.map