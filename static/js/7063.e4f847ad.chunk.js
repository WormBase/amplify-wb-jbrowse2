"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7063],{17063:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var l=a(66204),n=a(29520),r=a(80013),c=a(46338),o=a(62301),i=a(7146),u=a(5404),m=a(43800);const k=({tracks:e,onClose:t})=>{const[a,k]=(0,l.useState)(`MultiWiggle ${Date.now()}`),s=e.every((e=>"QuantitativeTrack"===e.type));return l.createElement(u.Z,{open:!0,onClose:()=>t(!1),title:"Confirm multi-wiggle track create"},l.createElement(n.Z,null,l.createElement(r.Z,null,s?null:"Not every track looks like a QuantitativeTrack. This could have unexpected behavior, confirm if it looks ok.","Listing:"),l.createElement("ul",null,e.map((e=>l.createElement("li",{key:e.trackId},(0,m.readConfObject)(e,"name")," - ",e.type)))),l.createElement(c.Z,{value:a,onChange:e=>k(e.target.value),helperText:"Track name"}),l.createElement(r.Z,null,"Confirm creation of track?")),l.createElement(o.Z,null,l.createElement(i.Z,{onClick:()=>t(!1),color:"primary"},"Cancel"),l.createElement(i.Z,{onClick:()=>t(!0,{name:a}),color:"primary",variant:"contained",autoFocus:!0},"Submit")))}}}]);
//# sourceMappingURL=7063.e4f847ad.chunk.js.map