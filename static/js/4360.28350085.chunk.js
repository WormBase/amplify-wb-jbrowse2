"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4360],{74360:function(e,n,r){r.r(n),r.d(n,{default:function(){return k}});var t=r(56666),o=r(31461),i=r(7896),c=r(96902),a=r(1617),u=r(73572),s=r(72021),l=r(86244),d=r(2252),f=r(53068),p=r(29938),v=["component","direction","spacing","divider","children"];function b(e,n){var r=c.Children.toArray(e).filter(Boolean);return r.reduce((function(e,t,o){return e.push(t),o<r.length-1&&e.push(c.cloneElement(n,{key:"separator-".concat(o)})),e}),[])}var h=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return[n.root]}})((function(e){var n=e.ownerState,r=e.theme,o=(0,i.Z)({display:"flex",flexDirection:"column"},(0,a.k9)({theme:r},(0,a.P$)({values:n.direction,breakpoints:r.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var c=(0,u.hB)(r),s=Object.keys(r.breakpoints.values).reduce((function(e,r){return("object"===typeof n.spacing&&null!=n.spacing[r]||"object"===typeof n.direction&&null!=n.direction[r])&&(e[r]=!0),e}),{}),d=(0,a.P$)({values:n.direction,base:s}),f=(0,a.P$)({values:n.spacing,base:s});"object"===typeof d&&Object.keys(d).forEach((function(e,n,r){if(!d[e]){var t=n>0?d[r[n-1]]:"column";d[e]=t}}));o=(0,l.Z)(o,(0,a.k9)({theme:r},f,(function(e,r){return{"& > :not(style) + :not(style)":(0,t.Z)({margin:0},"margin".concat((o=r?d[r]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),(0,u.NA)(c,e))};var o})))}return o=(0,a.dt)(r.breakpoints,o)})),m=c.forwardRef((function(e,n){var r=(0,f.Z)({props:e,name:"MuiStack"}),t=(0,s.Z)(r),c=t.component,a=void 0===c?"div":c,u=t.direction,l=void 0===u?"column":u,d=t.spacing,m=void 0===d?0:d,k=t.divider,g=t.children,w=(0,o.Z)(t,v),y={direction:l,spacing:m};return(0,p.jsx)(h,(0,i.Z)({as:a,ownerState:y,ref:n},w,{children:k?b(g,k):g}))})),k=m}}]);
//# sourceMappingURL=4360.28350085.chunk.js.map