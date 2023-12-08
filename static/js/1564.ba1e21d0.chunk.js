"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[1564,3285],{23285:(e,t,n)=>{n.r(t),n.d(t,{bufferToString:()=>r,parseCsvBuffer:()=>l,parseTsvBuffer:()=>u});var a=n(90872);function r(e){return new TextDecoder("utf8",{fatal:!0}).decode(e)}async function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(await n.e(6226).then(n.t.bind(n,16226,23)).then((e=>e.default)))({noheader:!0,output:"csv",...t}).fromString(r(e))}function o(e,t,n){var r;const s=e.rows[0].cells[t].text||"";let o,c="Text";try{o=(0,a.parseLocString)(s,n)}catch(l){}return null!==(r=o)&&void 0!==r&&r.refName&&"number"===typeof o.start?c="LocString":/^\d+(\.\d+)?$/.test(s)&&(c="Number"),c}function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{hasColumnNameLine:n=!1,columnNameLineNumber:r=1,isValidRefName:s=(()=>!1),selectedAssemblyName:c}=t;let l=0;const u={isLoaded:!0,rows:e.map(((e,t)=>{const a=t+(n?0:1);return e.length>l&&(l=e.length),{id:String(a),cells:e.map(((e,t)=>({columnNumber:t,text:e})))}}))},d={};if(n&&void 0!==r){const[e]=u.rows.splice(r-1,1);e&&e.cells.forEach(((e,t)=>{d[t]=e.text||""}))}const i=[],m=[];for(let f=0;f<l;f+=1){m.push(f);const e=o(u,f,s);if("LocString"===e)for(const t of u.rows){const e=t.cells[f];e.extendedData=(0,a.parseLocString)(e.text,s)}i[f]={name:d[f],dataType:{type:e}}}return{rowSet:u,columnDisplayOrder:m,hasColumnNames:!!n,columns:i,assemblyName:c}}async function l(e,t){return c(await s(e),t)}async function u(e,t){return c(await s(e,{delimiter:"\t"}),t)}},51564:(e,t,n)=>{n.r(t),n.d(t,{parseVcfBuffer:()=>c,splitVcfFileHeaderAndBody:()=>l});var a=n(98303),r=n(43405),s=n(23285);const o=[{name:"CHROM",type:"Text"},{name:"POS",type:"Number"},{name:"ID",type:"Text"},{name:"REF",type:"Text"},{name:"ALT",type:"Text"},{name:"QUAL",type:"Number"},{name:"FILTER",type:"Text"},{name:"INFO",type:"Text"},{name:"FORMAT",type:"Text"}];function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{selectedAssemblyName:n}=t;let{header:c,body:u}=l((0,s.bufferToString)(e));const d=[],i=new a.Z({header:c});c="",u.split(/\n|\r\n|\r/).forEach(((e,t)=>{/\S/.test(e)&&d.push(function(e,t,n){const a=e.parseLine(t),s=new r.B({variant:a,parser:e,id:"vcf-".concat(n)}),o=t.split("\t").map((e=>"."===e?"":e));return 8===o.length&&o.push(""),{id:String(n+1),extendedData:{vcfFeature:s.toJSON()},cells:o.map(((e,t)=>({columnNumber:t,text:e})))}}(i,e,t))})),u="";const m={isLoaded:!0,rows:d},f=[],p=[];for(let a=0;a<o.length;a+=1)f.push(a),p[a]={name:o[a].name,dataType:{type:o[a].type}};for(let a=0;a<i.samples.length;a+=1){const e=o.length+a;f.push(e),p[e]={name:i.samples[a],dataType:{type:"Text"}}}return f.push(f.length),p.unshift({name:"Location",dataType:{type:"LocString"},isDerived:!0,derivationFunctionText:"jexl:{text:row.extendedData.vcfFeature.refName+':'\n\n    +row.extendedData.vcfFeature.start+'..'+row.extendedData.vcfFeature.end, extendedData:\n\n    {refName:row.extendedData.vcfFeature.refName,start:row.extendedData.vcfFeature.start,end:row.extendedData.vcfFeature.end}}"}),{rowSet:m,columnDisplayOrder:f,hasColumnNames:!0,columns:p,assemblyName:n}}function l(e){let t,n=0;for(;n<e.length;n+=1){const a=e[n];if("\n"===t&&"#"!==a)break;t=a}return{header:e.slice(0,Math.max(0,n)),body:e.slice(n)}}}}]);
//# sourceMappingURL=1564.ba1e21d0.chunk.js.map