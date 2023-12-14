"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8142],{48142:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(66204),n=a(10126),r=a(80013),o=a(29520),s=a(46338),c=a(78781),i=a(39780),m=a(70539),u=a(62301),v=a(7146),E=a(35421),b=a(90872);function h(){return l.createElement("div",null,l.createElement(n.Z,{size:20,style:{marginRight:20}}),l.createElement(r.Z,{display:"inline"},"Creating SVG"))}function f(e,t){return(0,b.useLocalStorage)("svg-"+e,t)}function g({model:e,handleClose:t}){const a=(0,b.getSession)(e),n="undefined"!=typeof OffscreenCanvas,[g,d]=(0,l.useState)(n),[y,Z]=(0,l.useState)(!1),[p,k]=(0,l.useState)(),[C,w]=f("file","jbrowse.svg"),[S,T]=f("tracklabels","offset"),[z,j]=f("theme",a.themeName||"default");return l.createElement(E.Dialog,{open:!0,onClose:t,title:"Export SVG"},l.createElement(o.Z,null,p?l.createElement(E.ErrorMessage,{error:p}):y?l.createElement(h,null):null,l.createElement(s.Z,{helperText:"filename",value:C,onChange:e=>w(e.target.value)}),l.createElement("br",null),l.createElement(s.Z,{select:!0,label:"Track label positioning",variant:"outlined",style:{width:150},value:S,onChange:e=>T(e.target.value)},l.createElement(c.Z,{value:"offset"},"Offset"),l.createElement(c.Z,{value:"overlay"},"Overlay"),l.createElement(c.Z,{value:"left"},"Left"),l.createElement(c.Z,{value:"none"},"None")),l.createElement("br",null),a.allThemes?l.createElement(s.Z,{select:!0,label:"Theme",variant:"outlined",value:z,onChange:e=>j(e.target.value)},Object.entries(a.allThemes()).map((([e,t])=>l.createElement(c.Z,{key:e,value:e},t.name||"(Unknown name)")))):null,n?l.createElement(i.Z,{control:l.createElement(m.Z,{checked:g,onChange:()=>d((e=>!e))}),label:"Rasterize canvas based tracks? File may be much larger if this is turned off"}):l.createElement(r.Z,null,"Note: rasterizing layers not yet supported in this browser, so SVG size may be large")),l.createElement(u.Z,null,l.createElement(v.Z,{variant:"contained",color:"secondary",onClick:()=>t()},"Cancel"),l.createElement(v.Z,{variant:"contained",color:"primary",type:"submit",onClick:async()=>{Z(!0),k(void 0);try{await e.exportSvg({rasterizeLayers:g,filename:C,trackLabels:S,themeName:z}),t()}catch(e){console.error(e),k(e),Z(!1)}}},"Submit")))}}}]);
//# sourceMappingURL=8142.36b15872.chunk.js.map