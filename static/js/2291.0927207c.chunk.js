"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2291],{52291:(e,t,o)=>{o.r(t),o.d(t,{ColorPicker:()=>W,ColorPopover:()=>Y,PopoverPicker:()=>X,default:()=>F});var r=o(41867),n=o(622),a=o(64980),c=o(36669),l=o(59231),s=o(49133),u=o(47192),i=o(39092),f=o(90872);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(o=a[r])>=0||(n[o]=e[o]);return n}function g(e){const t=(0,r.useRef)(e),o=(0,r.useRef)((e=>{t.current&&t.current(e)}));return t.current=e,o.current}const p=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return e>o?o:e<t?t:e},v=e=>"touches"in e,m=e=>e&&e.ownerDocument.defaultView||self,b=(e,t,o)=>{const r=e.getBoundingClientRect(),n=v(t)?((e,t)=>{for(let o=0;o<e.length;o++)if(e[o].identifier===t)return e[o];return e[0]})(t.touches,o):t;return{left:p((n.pageX-(r.left+m(e).pageXOffset))/r.width),top:p((n.pageY-(r.top+m(e).pageYOffset))/r.height)}},_=e=>{!v(e)&&e.preventDefault()},x=r.memo((e=>{let{onMove:t,onKey:o}=e,n=d(e,["onMove","onKey"]);const a=(0,r.useRef)(null),c=g(t),l=g(o),s=(0,r.useRef)(null),u=(0,r.useRef)(!1),[i,f,p]=(0,r.useMemo)((()=>{const e=e=>{_(e),(v(e)?e.touches.length>0:e.buttons>0)&&a.current?c(b(a.current,e,s.current)):o(!1)},t=()=>o(!1);function o(o){const r=u.current,n=m(a.current),c=o?n.addEventListener:n.removeEventListener;c(r?"touchmove":"mousemove",e),c(r?"touchend":"mouseup",t)}return[e=>{let{nativeEvent:t}=e;const r=a.current;if(r&&(_(t),!((e,t)=>t&&!v(e))(t,u.current)&&r)){if(v(t)){u.current=!0;const e=t.changedTouches||[];e.length&&(s.current=e[0].identifier)}r.focus(),c(b(r,t,s.current)),o(!0)}},e=>{const t=e.which||e.keyCode;t<37||t>40||(e.preventDefault(),l({left:39===t?.05:37===t?-.05:0,top:40===t?.05:38===t?-.05:0}))},o]}),[l,c]);return(0,r.useEffect)((()=>p),[p]),r.createElement("div",h({},n,{onTouchStart:i,onMouseDown:i,className:"react-colorful__interactive",ref:a,onKeyDown:f,tabIndex:0,role:"slider"}))})),w=e=>e.filter(Boolean).join(" "),C=e=>{let{className:t,color:o,left:n,top:a=.5}=e;const c=w(["react-colorful__pointer",t]);return r.createElement("div",{className:c,style:{top:100*a+"%",left:100*n+"%"}},r.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:o}}))},y=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Math.pow(10,t);return Math.round(o*e)/o},E=(Math.PI,e=>{let{h:t,s:o,v:r,a:n}=e;const a=(200-o)*r/100;return{h:y(t),s:y(a>0&&a<200?o*r/100/(a<=100?a:200-a)*100:0),l:y(a/2),a:y(n,2)}}),k=e=>{const{h:t,s:o,l:r}=E(e);return"hsl(".concat(t,", ").concat(o,"%, ").concat(r,"%)")},N=e=>{const{h:t,s:o,l:r,a:n}=E(e);return"hsla(".concat(t,", ").concat(o,"%, ").concat(r,"%, ").concat(n,")")},j=e=>{let{h:t,s:o,v:r,a:n}=e;t=t/360*6,o/=100,r/=100;const a=Math.floor(t),c=r*(1-o),l=r*(1-(t-a)*o),s=r*(1-(1-t+a)*o),u=a%6;return{r:y(255*[r,l,c,c,s,r][u]),g:y(255*[s,r,r,l,c,c][u]),b:y(255*[c,c,s,r,r,l][u]),a:y(n,2)}},M=e=>{const t=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?O({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:void 0===t[7]?1:Number(t[7])/(t[8]?100:1)}):{h:0,s:0,v:0,a:1}},O=e=>{let{r:t,g:o,b:r,a:n}=e;const a=Math.max(t,o,r),c=a-Math.min(t,o,r),l=c?a===t?(o-r)/c:a===o?2+(r-t)/c:4+(t-o)/c:0;return{h:y(60*(l<0?l+6:l)),s:y(a?c/a*100:0),v:y(a/255*100),a:n}},R=r.memo((e=>{let{className:t,hue:o,onChange:n}=e;const a=w(["react-colorful__hue",t]);return r.createElement("div",{className:a},r.createElement(x,{onMove:e=>{n({h:360*e.left})},onKey:e=>{n({h:p(o+360*e.left,0,360)})},"aria-label":"Hue","aria-valuetext":y(o)},r.createElement(C,{className:"react-colorful__hue-pointer",left:o/360,color:k({h:o,s:100,v:100,a:1})})))})),H=r.memo((e=>{let{hsva:t,onChange:o}=e;const n={backgroundColor:k({h:t.h,s:100,v:100,a:1})};return r.createElement("div",{className:"react-colorful__saturation",style:n},r.createElement(x,{onMove:e=>{o({s:100*e.left,v:100-100*e.top})},onKey:e=>{o({s:p(t.s+100*e.left,0,100),v:p(t.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation ".concat(y(t.s),"%, Brightness ").concat(y(t.v),"%")},r.createElement(C,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:k(t)})))})),P=(e,t)=>{if(e===t)return!0;for(const o in e)if(e[o]!==t[o])return!1;return!0},S=(e,t)=>e.replace(/\s/g,"")===t.replace(/\s/g,"");function z(e,t,o){const n=g(o),[a,c]=(0,r.useState)((()=>e.toHsva(t))),l=(0,r.useRef)({color:t,hsva:a});(0,r.useEffect)((()=>{if(!e.equal(t,l.current.color)){const o=e.toHsva(t);l.current={hsva:o,color:t},c(o)}}),[t,e]),(0,r.useEffect)((()=>{let t;P(a,l.current.hsva)||e.equal(t=e.fromHsva(a),l.current.color)||(l.current={hsva:a,color:t},n(t))}),[a,e,n]);const s=(0,r.useCallback)((e=>{c((t=>Object.assign({},t,e)))}),[]);return[a,s]}const D="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;let K;const L=new Map,T=e=>{D((()=>{const t=e.current?e.current.ownerDocument:document;if(void 0!==t&&!L.has(t)){const e=t.createElement("style");e.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',L.set(t,e);const r=K||o.nc;r&&e.setAttribute("nonce",r),t.head.appendChild(e)}}),[])},Z=e=>{let{className:t,hsva:o,onChange:n}=e;const a={backgroundImage:"linear-gradient(90deg, ".concat(N(Object.assign({},o,{a:0})),", ").concat(N(Object.assign({},o,{a:1})),")")},c=w(["react-colorful__alpha",t]);return r.createElement("div",{className:c},r.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),r.createElement(x,{onMove:e=>{n({a:e.left})},onKey:e=>{n({a:p(o.a+e.left)})},"aria-label":"Alpha","aria-valuetext":"".concat(y(100*o.a),"%")},r.createElement(C,{className:"react-colorful__alpha-pointer",left:o.a,color:N(o)})))},q=e=>{let{className:t,colorModel:o,color:n=o.defaultColor,onChange:a}=e,c=d(e,["className","colorModel","color","onChange"]);const l=(0,r.useRef)(null);T(l);const[s,u]=z(o,n,a),i=w(["react-colorful",t]);return r.createElement("div",h({},c,{ref:l,className:i}),r.createElement(H,{hsva:s,onChange:u}),r.createElement(R,{hue:s.h,onChange:u}),r.createElement(Z,{hsva:s,onChange:u,className:"react-colorful__last-control"}))},B={defaultColor:"rgba(0, 0, 0, 1)",toHsva:M,fromHsva:e=>{const{r:t,g:o,b:r,a:n}=j(e);return"rgba(".concat(t,", ").concat(o,", ").concat(r,", ").concat(n,")")},equal:S},I=e=>r.createElement(q,h({},e,{colorModel:B}));var V=o(80838);const A=(0,u.ZL)()({picker:{position:"relative"},swatches:{display:"flex",padding:12,flexWrap:"wrap"},swatch:{width:24,height:24,margin:4,border:"none",padding:0,cursor:"pointer",outline:"none"}}),X=e=>{let{color:t,onChange:o}=e;const[n,a]=(0,r.useState)(null),{classes:c}=A();return(0,V.jsxs)("div",{className:c.picker,children:[(0,V.jsx)("div",{className:c.swatch,style:{backgroundColor:t},onClick:e=>a(e.currentTarget)}),(0,V.jsx)(Y,{anchorEl:n,onClose:()=>a(null),color:t,onChange:o})]})};function Y(e){let{anchorEl:t,onChange:o,onClose:r,color:n}=e;return(0,V.jsx)(a.ZP,{open:!!t,anchorEl:t,onClose:r,children:(0,V.jsx)(W,{color:n,onChange:o})})}function W(e){let{onChange:t,color:o}=e;const{classes:a}=A(),[u,h]=(0,f.useLocalStorage)("colorPickerPalette","set1"),d=i[u],g=Object.keys(i),[p,v]=(0,r.useState)(o),m=(0,n.V)(o).toRgbString(),b=(0,f.useDebounce)(m,1e3),_=e=>{v(e);try{t((0,n.V)(e).toRgbString())}catch(o){}};return(0,V.jsxs)("div",{style:{display:"flex",padding:10},children:[(0,V.jsx)("div",{style:{width:200,margin:5},children:(0,V.jsx)(I,{color:b,onChange:_})}),(0,V.jsxs)("div",{style:{width:200,margin:5},children:[(0,V.jsx)(c.Z,{value:u,onChange:e=>{const t=e.target.value;h(t)},children:g.map((e=>(0,V.jsx)(l.Z,{value:e,children:e},e)))}),(0,V.jsx)("div",{className:a.swatches,children:d.map(((e,t)=>(0,V.jsx)("button",{className:a.swatch,style:{background:e},onClick:()=>_(e)},"".concat(e,"-").concat(t))))}),(0,V.jsx)(s.Z,{helperText:"Manually set color (hex, rgb, or css color name)",value:p,onChange:e=>_(e.target.value)})]})]})}const F=X}}]);
//# sourceMappingURL=2291.0927207c.chunk.js.map