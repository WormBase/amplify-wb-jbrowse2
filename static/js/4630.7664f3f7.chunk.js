"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4630],{74630:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var o=n(7552),r=n(87731),a=n(36715),c=n(29499),s=n(58507),i=n(5401),l=n(1631),u=n(31409),w=n.n(u),m=n(92562),h=n(37565);function f({href:e,children:t}){return o.createElement(r.A,{target:"_blank",href:e},t)}async function p(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} fetching ${e}: ${await t.text()}`);return t}const b={};async function d(e){if(null!=b[e])return b[e];const t=new URL(e).search,n=await async function(e){return(await p(e)).text()}(e);let o=new RegExp(/\/\/# sourceMappingURL=(.*)/).exec(n)?.[1]||"";o=new URL(o,e).href+t;const r=new l.SourceMapConsumer(await async function(e){return(await p(e)).json()}(o));return b[e]=r,r}const g=1e4;function E({text:e}){const t=encodeURIComponent("I got this error from JBrowse, here is the stack trace:\n\n```\n"+e+"\n```\n"),n=`https://github.com/GMOD/jbrowse-components/issues/new?labels=bug&title=JBrowse+issue&body=${t}`,r=`mailto:jbrowse2dev@gmail.com?subject=JBrowse%202%20error&body=${t}`;return o.createElement(o.Fragment,null,o.createElement(a.A,null,"Post a new issue at ",o.createElement(f,{href:n},"GitHub")," or send an email to ",o.createElement(f,{href:r},"jbrowse2dev@gmail.com")," "),o.createElement("pre",{style:{background:"lightgrey",border:"1px solid black",overflow:"auto",margin:20,maxHeight:300}},e))}function k({error:e,onClose:t}){const[n,r]=(0,o.useState)(),[a,l]=(0,o.useState)(),[u,f]=(0,o.useState)(!1),p=`${e}`,b=function(e,t){if(e.startsWith("Error:")){const n=`${t}`;return e.slice(n.length)}return e}(`${"object"==typeof e&&null!==e&&"stack"in e?e.stack:""}`,p);(0,o.useEffect)((()=>{(async()=>{try{const e=await async function(e){const t=e.split("\n"),n=[];for(const e of t){const t=new RegExp(/(.*)(http:\/\/.*):(\d+):(\d+)/).exec(e);if(null===t){n.push(e);continue}const o=t[2],r=(await d(o)).originalPositionFor({line:parseInt(t[3]),column:parseInt(t[4])});null!==r.source&&null!==r.line&&null!==r.column?n.push(`${r.source}:${r.line}:${r.column+1}`):n.push(e)}return n.join("\n")}(b);r(e)}catch(e){console.error(e),r(b),l(e)}})()}),[b]);const k=[a?"Error loading source map, showing raw stack trace below:":"",p.length>g?p.slice(0,g)+"...":p,n||"No stack trace available",window.JBrowseSession?`JBrowse ${window.JBrowseSession.version}`:""].join("\n");return o.createElement(m.A,{open:!0,onClose:t,title:"Stack trace",maxWidth:"xl"},o.createElement(c.A,null,void 0===n?o.createElement(h.A,{variant:"h6"}):o.createElement(E,{text:k})),o.createElement(s.A,null,o.createElement(i.A,{variant:"contained",color:"secondary",onClick:()=>{w()(k),f(!0),setTimeout((()=>f(!1)),1e3)}},u?"Copied!":"Copy stack trace to clipboard"),o.createElement(i.A,{variant:"contained",color:"primary",onClick:t},"Close")))}}}]);
//# sourceMappingURL=4630.7664f3f7.chunk.js.map