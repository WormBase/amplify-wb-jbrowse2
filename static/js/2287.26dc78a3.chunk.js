"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2287],{2287:function(e,n,r){r.r(n);var t=r(96234),i=r(96902),c=r(52809),a=r(35388),o=r(66519),l=r(99688),u=r(44536),s=r(43971),k=r(99836),f=r(29938);n.default=function(e){var n=e.tracks,r=e.onClose,h=(0,i.useState)("MultiWiggle ".concat(Date.now())),d=(0,t.Z)(h,2),j=d[0],x=d[1],m=n.every((function(e){return"QuantitativeTrack"===e.type}));return(0,f.jsxs)(s.Z,{open:!0,onClose:function(){return r(!1)},title:"Confirm multi-wiggle track create",children:[(0,f.jsxs)(c.Z,{children:[(0,f.jsxs)(a.Z,{children:[m?null:"Not every track looks like a QuantitativeTrack. This could have unexpected behavior, confirm if it looks ok.","Listing:"]}),(0,f.jsx)("ul",{children:n.map((function(e){return(0,f.jsxs)("li",{children:[(0,k.readConfObject)(e,"name")," - ",e.type]},e.trackId)}))}),(0,f.jsx)(o.Z,{value:j,onChange:function(e){return x(e.target.value)},helperText:"Track name"}),(0,f.jsx)(a.Z,{children:"Confirm creation of track?"})]}),(0,f.jsxs)(l.Z,{children:[(0,f.jsx)(u.Z,{onClick:function(){return r(!1)},color:"primary",children:"Cancel"}),(0,f.jsx)(u.Z,{onClick:function(){return r(!0,{name:j})},color:"primary",variant:"contained",autoFocus:!0,children:"Submit"})]})]})}}}]);
//# sourceMappingURL=2287.26dc78a3.chunk.js.map