"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[9101],{9101:function(e,r,t){t.r(r),t.d(r,{ColorPicker:function(){return G},ColorPopover:function(){return F},PopoverPicker:function(){return W},default:function(){return J}});var n=t(96234),o=t(30969),a=t(8218),c=t.n(a),l=t(86317),u=t(89003),i=t(28712),s=t(35436),f=t(57896),h=t(94069),d=t(81073);function v(){return(v=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function g(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r.indexOf(t=a[n])>=0||(o[t]=e[t]);return o}function p(e){var r=(0,o.useRef)(e),t=(0,o.useRef)((function(e){r.current&&r.current(e)}));return r.current=e,t.current}var m=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return e>t?t:e<r?r:e},b=function(e){return"touches"in e},_=function(e){return e&&e.ownerDocument.defaultView||self},x=function(e,r,t){var n=e.getBoundingClientRect(),o=b(r)?function(e,r){for(var t=0;t<e.length;t++)if(e[t].identifier===r)return e[t];return e[0]}(r.touches,t):r;return{left:m((o.pageX-(n.left+_(e).pageXOffset))/n.width),top:m((o.pageY-(n.top+_(e).pageYOffset))/n.height)}},w=function(e){!b(e)&&e.preventDefault()},C=o.memo((function(e){var r=e.onMove,t=e.onKey,a=g(e,["onMove","onKey"]),c=(0,o.useRef)(null),l=p(r),u=p(t),i=(0,o.useRef)(null),s=(0,o.useRef)(!1),f=(0,o.useMemo)((function(){var e=function(e){w(e),(b(e)?e.touches.length>0:e.buttons>0)&&c.current?l(x(c.current,e,i.current)):t(!1)},r=function(){return t(!1)};function t(t){var n=s.current,o=_(c.current),a=t?o.addEventListener:o.removeEventListener;a(n?"touchmove":"mousemove",e),a(n?"touchend":"mouseup",r)}return[function(e){var r=e.nativeEvent,n=c.current;if(n&&(w(r),!function(e,r){return r&&!b(e)}(r,s.current)&&n)){if(b(r)){s.current=!0;var o=r.changedTouches||[];o.length&&(i.current=o[0].identifier)}n.focus(),l(x(n,r,i.current)),t(!0)}},function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),u({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},t]}),[u,l]),h=(0,n.Z)(f,3),d=h[0],m=h[1],C=h[2];return(0,o.useEffect)((function(){return C}),[C]),o.createElement("div",v({},a,{onTouchStart:d,onMouseDown:d,className:"react-colorful__interactive",ref:c,onKeyDown:m,tabIndex:0,role:"slider"}))})),y=function(e){return e.filter(Boolean).join(" ")},E=function(e){var r=e.className,t=e.color,n=e.left,a=e.top,c=void 0===a?.5:a,l=y(["react-colorful__pointer",r]);return o.createElement("div",{className:l,style:{top:100*c+"%",left:100*n+"%"}},o.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},k=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Math.pow(10,r);return Math.round(t*e)/t},N=(Math.PI,function(e){var r=e.h,t=e.s,n=e.v,o=e.a,a=(200-t)*n/100;return{h:k(r),s:k(a>0&&a<200?t*n/100/(a<=100?a:200-a)*100:0),l:k(a/2),a:k(o,2)}}),j=function(e){var r=N(e),t=r.h,n=r.s,o=r.l;return"hsl(".concat(t,", ").concat(n,"%, ").concat(o,"%)")},M=function(e){var r=N(e),t=r.h,n=r.s,o=r.l,a=r.a;return"hsla(".concat(t,", ").concat(n,"%, ").concat(o,"%, ").concat(a,")")},O=function(e){var r=e.h,t=e.s,n=e.v,o=e.a;r=r/360*6,t/=100,n/=100;var a=Math.floor(r),c=n*(1-t),l=n*(1-(r-a)*t),u=n*(1-(1-r+a)*t),i=a%6;return{r:k(255*[n,l,c,c,u,n][i]),g:k(255*[u,n,n,l,c,c][i]),b:k(255*[c,c,u,n,n,l][i]),a:k(o,2)}},Z=function(e){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?H({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:void 0===r[7]?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},H=function(e){var r=e.r,t=e.g,n=e.b,o=e.a,a=Math.max(r,t,n),c=a-Math.min(r,t,n),l=c?a===r?(t-n)/c:a===t?2+(n-r)/c:4+(r-t)/c:0;return{h:k(60*(l<0?l+6:l)),s:k(a?c/a*100:0),v:k(a/255*100),a:o}},P=o.memo((function(e){var r=e.className,t=e.hue,n=e.onChange,a=y(["react-colorful__hue",r]);return o.createElement("div",{className:a},o.createElement(C,{onMove:function(e){n({h:360*e.left})},onKey:function(e){n({h:m(t+360*e.left,0,360)})},"aria-label":"Hue","aria-valuetext":k(t)},o.createElement(E,{className:"react-colorful__hue-pointer",left:t/360,color:j({h:t,s:100,v:100,a:1})})))})),R=o.memo((function(e){var r=e.hsva,t=e.onChange,n={backgroundColor:j({h:r.h,s:100,v:100,a:1})};return o.createElement("div",{className:"react-colorful__saturation",style:n},o.createElement(C,{onMove:function(e){t({s:100*e.left,v:100-100*e.top})},onKey:function(e){t({s:m(r.s+100*e.left,0,100),v:m(r.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation ".concat(k(r.s),"%, Brightness ").concat(k(r.v),"%")},o.createElement(E,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:j(r)})))})),S=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},z=function(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")};function D(e,r,t){var a=p(t),c=(0,o.useState)((function(){return e.toHsva(r)})),l=(0,n.Z)(c,2),u=l[0],i=l[1],s=(0,o.useRef)({color:r,hsva:u});(0,o.useEffect)((function(){if(!e.equal(r,s.current.color)){var t=e.toHsva(r);s.current={hsva:t,color:r},i(t)}}),[r,e]),(0,o.useEffect)((function(){var r;S(u,s.current.hsva)||e.equal(r=e.fromHsva(u),s.current.color)||(s.current={hsva:u,color:r},a(r))}),[u,e,a]);var f=(0,o.useCallback)((function(e){i((function(r){return Object.assign({},r,e)}))}),[]);return[u,f]}var K,L="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,T=new Map,q=function(e){L((function(){var r=e.current?e.current.ownerDocument:document;if(void 0!==r&&!T.has(r)){var n=r.createElement("style");n.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',T.set(r,n);var o=K||t.nc;o&&n.setAttribute("nonce",o),r.head.appendChild(n)}}),[])},B=function(e){var r=e.className,t=e.hsva,n=e.onChange,a={backgroundImage:"linear-gradient(90deg, ".concat(M(Object.assign({},t,{a:0})),", ").concat(M(Object.assign({},t,{a:1})),")")},c=y(["react-colorful__alpha",r]);return o.createElement("div",{className:c},o.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),o.createElement(C,{onMove:function(e){n({a:e.left})},onKey:function(e){n({a:m(t.a+e.left)})},"aria-label":"Alpha","aria-valuetext":"".concat(k(100*t.a),"%")},o.createElement(E,{className:"react-colorful__alpha-pointer",left:t.a,color:M(t)})))},I=function(e){var r=e.className,t=e.colorModel,a=e.color,c=void 0===a?t.defaultColor:a,l=e.onChange,u=g(e,["className","colorModel","color","onChange"]),i=(0,o.useRef)(null);q(i);var s=D(t,c,l),f=(0,n.Z)(s,2),h=f[0],d=f[1],p=y(["react-colorful",r]);return o.createElement("div",v({},u,{ref:i,className:p}),o.createElement(R,{hsva:h,onChange:d}),o.createElement(P,{hue:h.h,onChange:d}),o.createElement(B,{hsva:h,onChange:d,className:"react-colorful__last-control"}))},A={defaultColor:"rgba(0, 0, 0, 1)",toHsva:Z,fromHsva:function(e){var r=O(e),t=r.r,n=r.g,o=r.b,a=r.a;return"rgba(".concat(t,", ").concat(n,", ").concat(o,", ").concat(a,")")},equal:z},X=function(e){return o.createElement(I,v({},e,{colorModel:A}))},Y=t(37574),V=(0,f.ZL)()({picker:{position:"relative"},swatches:{display:"flex",padding:12,flexWrap:"wrap"},swatch:{width:24,height:24,margin:4,border:"none",padding:0,cursor:"pointer",outline:"none"}}),W=function(e){var r=e.color,t=e.onChange,a=(0,o.useState)(null),c=(0,n.Z)(a,2),l=c[0],u=c[1],i=V().classes;return(0,Y.jsxs)("div",{className:i.picker,children:[(0,Y.jsx)("div",{className:i.swatch,style:{backgroundColor:r},onClick:function(e){return u(e.currentTarget)}}),(0,Y.jsx)(F,{anchorEl:l,onClose:function(){return u(null)},color:r,onChange:t})]})};function F(e){var r=e.anchorEl,t=e.onChange,n=e.onClose,o=e.color;return(0,Y.jsx)(l.ZP,{open:!!r,anchorEl:r,onClose:n,children:(0,Y.jsx)(G,{color:o,onChange:t})})}function G(e){var r=e.onChange,t=e.color,a=V().classes,l=(0,d.useLocalStorage)("colorPickerPalette","set1"),f=(0,n.Z)(l,2),v=f[0],g=f[1],p=h[v],m=Object.keys(h),b=(0,o.useState)(t),_=(0,n.Z)(b,2),x=_[0],w=_[1],C=c()(t).rgb().toString(),y=function(e){w(e);try{r(c()(e).rgb().toString())}catch(t){}};return(0,Y.jsxs)("div",{style:{display:"flex",padding:10},children:[(0,Y.jsx)("div",{style:{width:200,margin:5},children:(0,Y.jsx)(X,{color:C,onChange:y})}),(0,Y.jsxs)("div",{style:{width:200,margin:5},children:[(0,Y.jsx)(u.Z,{value:v,onChange:function(e){var r=e.target.value;g(r)},children:m.map((function(e){return(0,Y.jsx)(i.Z,{value:e,children:e},e)}))}),(0,Y.jsx)("div",{className:a.swatches,children:p.map((function(e,r){return(0,Y.jsx)("button",{className:a.swatch,style:{background:e},onClick:function(){return y(e)}},e+"-"+r)}))}),(0,Y.jsx)(s.Z,{helperText:"Manually set color (hex, rgb, or css color name)",value:x,onChange:function(e){return y(e.target.value)}})]})]})}var J=W}}]);
//# sourceMappingURL=9101.b31c9992.chunk.js.map