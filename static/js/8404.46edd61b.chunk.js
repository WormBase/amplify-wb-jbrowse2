"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[8404],{88404:(e,a,n)=>{n.r(a),n.d(a,{default:()=>g});var s=n(41867),l=n(93764),r=n(51590),t=n(47409),i=n(49133),o=n(59231),c=n(96614),u=n(83171),h=n(27768),d=n(23801),j=n(35421),x=n(90872),f=n(80838);function v(){return(0,f.jsxs)("div",{children:[(0,f.jsx)(l.Z,{size:20,style:{marginRight:20}}),(0,f.jsx)(r.Z,{display:"inline",children:"Creating SVG"})]})}function b(e,a){return(0,x.useLocalStorage)("svg-"+e,a)}function g(e){let{model:a,handleClose:n}=e;const l=(0,x.getSession)(a),g="undefined"!==typeof OffscreenCanvas,[m,Z]=(0,s.useState)(g),[y,p]=(0,s.useState)(!1),[C,k]=(0,s.useState)(),[w,S]=b("file","jbrowse.svg"),[z,T]=b("tracklabels","offset"),[L,N]=b("theme",l.themeName||"default");return(0,f.jsxs)(j.Dialog,{open:!0,onClose:n,title:"Export SVG",children:[(0,f.jsxs)(t.Z,{children:[C?(0,f.jsx)(j.ErrorMessage,{error:C}):y?(0,f.jsx)(v,{}):null,(0,f.jsx)(i.Z,{helperText:"filename",value:w,onChange:e=>S(e.target.value)}),(0,f.jsx)("br",{}),(0,f.jsxs)(i.Z,{select:!0,label:"Track label positioning",variant:"outlined",style:{width:150},value:z,onChange:e=>T(e.target.value),children:[(0,f.jsx)(o.Z,{value:"offset",children:"Offset"}),(0,f.jsx)(o.Z,{value:"overlay",children:"Overlay"}),(0,f.jsx)(o.Z,{value:"left",children:"Left"}),(0,f.jsx)(o.Z,{value:"none",children:"None"})]}),(0,f.jsx)("br",{}),l.allThemes?(0,f.jsx)(i.Z,{select:!0,label:"Theme",variant:"outlined",value:L,onChange:e=>N(e.target.value),children:Object.entries(l.allThemes()).map((e=>{let[a,n]=e;return(0,f.jsx)(o.Z,{value:a,children:n.name||"(Unknown name)"},a)}))}):null,g?(0,f.jsx)(c.Z,{control:(0,f.jsx)(u.Z,{checked:m,onChange:()=>Z((e=>!e))}),label:"Rasterize canvas based tracks? File may be much larger if this is turned off"}):(0,f.jsx)(r.Z,{children:"Note: rasterizing layers not yet supported in this browser, so SVG size may be large"})]}),(0,f.jsxs)(h.Z,{children:[(0,f.jsx)(d.Z,{variant:"contained",color:"secondary",onClick:()=>n(),children:"Cancel"}),(0,f.jsx)(d.Z,{variant:"contained",color:"primary",type:"submit",onClick:async()=>{p(!0),k(void 0);try{await a.exportSvg({rasterizeLayers:m,filename:w,trackLabels:z,themeName:L}),n()}catch(e){console.error(e),k(e),p(!1)}},children:"Submit"})]})]})}}}]);
//# sourceMappingURL=8404.46edd61b.chunk.js.map