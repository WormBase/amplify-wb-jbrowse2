"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6393],{71127:function(e,n,t){t.d(n,{d:function(){return s}});var r=t(30969),u=t(14006),c=t(34604),o=t(4422),i=t(37574);function f(e){return e.substring(2).toLowerCase()}function s(e){var n=e.children,t=e.disableReactTree,s=void 0!==t&&t,a=e.mouseEvent,d=void 0===a?"onClick":a,v=e.onClickAway,l=e.touchEvent,m=void 0===l?"onTouchEnd":l,E=r.useRef(!1),h=r.useRef(null),b=r.useRef(!1),w=r.useRef(!1);r.useEffect((function(){return setTimeout((function(){b.current=!0}),0),function(){b.current=!1}}),[]);var p=(0,u.Z)(n.ref,h),L=(0,c.Z)((function(e){var n=w.current;w.current=!1;var t=(0,o.Z)(h.current);!b.current||!h.current||"clientX"in e&&function(e,n){return n.documentElement.clientWidth<e.clientX||n.documentElement.clientHeight<e.clientY}(e,t)||(E.current?E.current=!1:(e.composedPath?e.composedPath().indexOf(h.current)>-1:!t.documentElement.contains(e.target)||h.current.contains(e.target))||!s&&n||v(e))})),k=function(e){return function(t){w.current=!0;var r=n.props[e];r&&r(t)}},g={ref:p};return!1!==m&&(g[m]=k(m)),r.useEffect((function(){if(!1!==m){var e=f(m),n=(0,o.Z)(h.current),t=function(){E.current=!0};return n.addEventListener(e,L),n.addEventListener("touchmove",t),function(){n.removeEventListener(e,L),n.removeEventListener("touchmove",t)}}}),[L,m]),!1!==d&&(g[d]=k(d)),r.useEffect((function(){if(!1!==d){var e=f(d),n=(0,o.Z)(h.current);return n.addEventListener(e,L),function(){n.removeEventListener(e,L)}}}),[L,d]),(0,i.jsx)(r.Fragment,{children:r.cloneElement(n,g)})}},46393:function(e,n,t){t.r(n),t.d(n,{default:function(){return r.d}});var r=t(71127)}}]);
//# sourceMappingURL=6393.30cec0c7.chunk.js.map