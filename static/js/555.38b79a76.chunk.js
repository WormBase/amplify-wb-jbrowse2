"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[555],{70555:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(66204),n=a(10126),r=a(80013),o=a(29520),s=a(46338),c=a(78781),i=a(39780),m=a(70539),u=a(62301),v=a(7146),E=a(35421),b=a(90872);function f(){return l.createElement("div",null,l.createElement(n.Z,{size:20,style:{marginRight:20}}),l.createElement(r.Z,{display:"inline"},"Creating SVG"))}function h(e,t){return(0,b.useLocalStorage)("svg-"+e,t)}function g({model:e,handleClose:t}){const a=(0,b.getSession)(e),n="undefined"!=typeof OffscreenCanvas,[g,d]=(0,l.useState)(n),[y,Z]=(0,l.useState)(!1),[p,k]=h("file","jbrowse.svg"),[C,w]=h("tracklabels","offset"),[S,T]=h("theme",a.themeName||"default"),[z,j]=(0,l.useState)();return l.createElement(E.Dialog,{open:!0,onClose:t,title:"Export SVG"},l.createElement(o.Z,null,z?l.createElement(E.ErrorMessage,{error:z}):y?l.createElement(f,null):null,l.createElement(s.Z,{helperText:"filename",value:p,onChange:e=>k(e.target.value)}),l.createElement("br",null),l.createElement(s.Z,{select:!0,label:"Track label positioning",variant:"outlined",value:C,style:{width:150},onChange:e=>w(e.target.value)},l.createElement(c.Z,{value:"offset"},"Offset"),l.createElement(c.Z,{value:"overlay"},"Overlay"),l.createElement(c.Z,{value:"left"},"Left"),l.createElement(c.Z,{value:"none"},"None")),l.createElement("br",null),a.allThemes?l.createElement(s.Z,{select:!0,label:"Theme",variant:"outlined",value:S,onChange:e=>T(e.target.value)},Object.entries(a.allThemes()).map((([e,t])=>l.createElement(c.Z,{key:e,value:e},t.name||"(Unknown name)")))):null,n?l.createElement(i.Z,{control:l.createElement(m.Z,{checked:g,onChange:()=>d((e=>!e))}),label:"Rasterize canvas based tracks? File may be much larger if this is turned off"}):l.createElement(r.Z,null,"Note: rasterizing layers not yet supported in this browser, so SVG size may be large")),l.createElement(u.Z,null,l.createElement(v.Z,{variant:"contained",color:"secondary",onClick:()=>t()},"Cancel"),l.createElement(v.Z,{variant:"contained",color:"primary",type:"submit",onClick:async()=>{Z(!0),j(void 0);try{await e.exportSvg({rasterizeLayers:g,filename:p,themeName:S,trackLabels:C}),t()}catch(e){console.error(e),j(e)}finally{Z(!1)}}},"Submit")))}}}]);
//# sourceMappingURL=555.38b79a76.chunk.js.map