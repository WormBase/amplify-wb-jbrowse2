"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[2080],{62080:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(66204),l=n(80846),i=n(29520),o=n(80013),s=n(46338),r=n(62301),d=n(7146),c=n(43902);const w=(0,l.observer)((function({model:e,handleClose:t}){const[n,l]=(0,a.useState)(`${e.windowSizeSetting}`),[w,m]=(0,a.useState)(`${e.windowDeltaSetting}`);return a.createElement(c.Dialog,{open:!0,onClose:t,title:"Edit GC content params"},a.createElement(i.Z,null,a.createElement(o.Z,null,"GC content is calculated in a particular sliding window of size N, and then the sliding window moves (steps) some number of bases M forward. Note that small step sizes can result in high CPU over large areas, and it is not recommended to make the step size larger than the window size as then the sliding window will miss contents."),w>n?a.createElement(c.ErrorMessage,{error:"It is not recommended to make the step size larger than the window size"}):null,a.createElement(s.Z,{label:"Size of sliding window (bp)",value:`${n}`,onChange:e=>l(e.target.value)}),a.createElement(s.Z,{label:"Step size of sliding window (bp)",value:`${w}`,onChange:e=>m(e.target.value)}),a.createElement(r.Z,null,a.createElement(d.Z,{variant:"contained",onClick:()=>{e.setGCContentParams({windowSize:+n,windowDelta:+w}),t()}},"Submit"),a.createElement(d.Z,{variant:"contained",color:"secondary",onClick:()=>t()},"Cancel"))))}))}}]);
//# sourceMappingURL=2080.0369f961.chunk.js.map