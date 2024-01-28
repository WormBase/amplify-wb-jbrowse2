"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8600],{48600:(e,t,o)=>{o.r(t),o.d(t,{default:()=>V,getTabsUtilityClass:()=>R,tabsClasses:()=>k});var r=o(55559),l=o(30984),n=o(66204),i=(o(5356),o(56317)),s=o(58029),a=o(57307),c=o(61125),d=o(57369),u=o(92368),b=o(78101);let f;function h(){if(f)return f;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),f="reverse",e.scrollLeft>0?f="default":(e.scrollLeft=1,0===e.scrollLeft&&(f="negative")),document.body.removeChild(e),f}function v(e,t){const o=e.scrollLeft;if("rtl"!==t)return o;switch(h()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}}function p(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var m=o(5429),S=o(19514),w=o(43188);const g=["onChange"],Z={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var x=o(98167),y=o(95987),B=o(42870),C=o(58109),M=o(95201);function E(e){return(0,M.ZP)("MuiTabScrollButton",e)}const I=(0,C.Z)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),P=["className","slots","slotProps","direction","orientation","disabled"],T=(0,c.ZP)(B.Z,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.orientation&&t[o.orientation]]}})((({ownerState:e})=>(0,l.Z)({width:40,flexShrink:0,opacity:.8,[`&.${I.disabled}`]:{opacity:0}},"vertical"===e.orientation&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}}))),L=n.forwardRef((function(e,t){var o,n;const c=(0,d.Z)({props:e,name:"MuiTabScrollButton"}),{className:b,slots:f={},slotProps:h={},direction:v}=c,p=(0,r.Z)(c,P),m="rtl"===(0,u.Z)().direction,S=(0,l.Z)({isRtl:m},c),g=(e=>{const{classes:t,orientation:o,disabled:r}=e,l={root:["root",o,r&&"disabled"]};return(0,s.Z)(l,E,t)})(S),Z=null!=(o=f.StartScrollButtonIcon)?o:x.Z,B=null!=(n=f.EndScrollButtonIcon)?n:y.Z,C=(0,a.y)({elementType:Z,externalSlotProps:h.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S}),M=(0,a.y)({elementType:B,externalSlotProps:h.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S});return(0,w.jsx)(T,(0,l.Z)({component:"div",className:(0,i.Z)(g.root,b),ref:t,role:null,ownerState:S,tabIndex:null},p,{children:"left"===v?(0,w.jsx)(Z,(0,l.Z)({},C)):(0,w.jsx)(B,(0,l.Z)({},M))}))}));var N=o(42853);function R(e){return(0,M.ZP)("MuiTabs",e)}const k=(0,C.Z)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]);var z=o(60617);const W=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],A=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,j=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,X=(e,t,o)=>{let r=!1,l=o(e,t);for(;l;){if(l===e.firstChild){if(r)return;r=!0}const t=l.disabled||"true"===l.getAttribute("aria-disabled");if(l.hasAttribute("tabindex")&&!t)return void l.focus();l=o(e,l)}},H=(0,c.ZP)("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${k.scrollButtons}`]:t.scrollButtons},{[`& .${k.scrollButtons}`]:o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,o.vertical&&t.vertical]}})((({ownerState:e,theme:t})=>(0,l.Z)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${k.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}}))),F=(0,c.ZP)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})((({ownerState:e})=>(0,l.Z)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"}))),Y=(0,c.ZP)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})((({ownerState:e})=>(0,l.Z)({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"}))),D=(0,c.ZP)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})((({ownerState:e,theme:t})=>(0,l.Z)({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},"primary"===e.indicatorColor&&{backgroundColor:(t.vars||t).palette.primary.main},"secondary"===e.indicatorColor&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0}))),O=(0,c.ZP)((function(e){const{onChange:t}=e,o=(0,r.Z)(e,g),i=n.useRef(),s=n.useRef(null),a=()=>{i.current=s.current.offsetHeight-s.current.clientHeight};return(0,m.Z)((()=>{const e=(0,b.Z)((()=>{const e=i.current;a(),e!==i.current&&t(i.current)})),o=(0,S.Z)(s.current);return o.addEventListener("resize",e),()=>{e.clear(),o.removeEventListener("resize",e)}}),[t]),n.useEffect((()=>{a(),t(i.current)}),[t]),(0,w.jsx)("div",(0,l.Z)({style:Z,ref:s},o))}))({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),$={},V=n.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiTabs"}),c=(0,u.Z)(),f="rtl"===c.direction,{"aria-label":m,"aria-labelledby":g,action:Z,centered:x=!1,children:y,className:B,component:C="div",allowScrollButtonsMobile:M=!1,indicatorColor:E="primary",onChange:I,orientation:P="horizontal",ScrollButtonComponent:T=L,scrollButtons:k="auto",selectionFollowsFocus:V,slots:_={},slotProps:q={},TabIndicatorProps:K={},TabScrollButtonProps:U={},textColor:G="primary",value:J,variant:Q="standard",visibleScrollbar:ee=!1}=o,te=(0,r.Z)(o,W),oe="scrollable"===Q,re="vertical"===P,le=re?"scrollTop":"scrollLeft",ne=re?"top":"left",ie=re?"bottom":"right",se=re?"clientHeight":"clientWidth",ae=re?"height":"width",ce=(0,l.Z)({},o,{component:C,allowScrollButtonsMobile:M,indicatorColor:E,orientation:P,vertical:re,scrollButtons:k,textColor:G,variant:Q,visibleScrollbar:ee,fixed:!oe,hideScrollbar:oe&&!ee,scrollableX:oe&&!re,scrollableY:oe&&re,centered:x&&!oe,scrollButtonsHideMobile:!M}),de=(e=>{const{vertical:t,fixed:o,hideScrollbar:r,scrollableX:l,scrollableY:n,centered:i,scrollButtonsHideMobile:a,classes:c}=e,d={root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",r&&"hideScrollbar",l&&"scrollableX",n&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",i&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",a&&"scrollButtonsHideMobile"],scrollableX:[l&&"scrollableX"],hideScrollbar:[r&&"hideScrollbar"]};return(0,s.Z)(d,R,c)})(ce),ue=(0,a.y)({elementType:_.StartScrollButtonIcon,externalSlotProps:q.startScrollButtonIcon,ownerState:ce}),be=(0,a.y)({elementType:_.EndScrollButtonIcon,externalSlotProps:q.endScrollButtonIcon,ownerState:ce}),[fe,he]=n.useState(!1),[ve,pe]=n.useState($),[me,Se]=n.useState(!1),[we,ge]=n.useState(!1),[Ze,xe]=n.useState(!1),[ye,Be]=n.useState({overflow:"hidden",scrollbarWidth:0}),Ce=new Map,Me=n.useRef(null),Ee=n.useRef(null),Ie=()=>{const e=Me.current;let t,o;if(e){const o=e.getBoundingClientRect();t={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollLeftNormalized:v(e,c.direction),scrollWidth:e.scrollWidth,top:o.top,bottom:o.bottom,left:o.left,right:o.right}}if(e&&!1!==J){const e=Ee.current.children;if(e.length>0){const t=e[Ce.get(J)];o=t?t.getBoundingClientRect():null}}return{tabsMeta:t,tabMeta:o}},Pe=(0,N.Z)((()=>{const{tabsMeta:e,tabMeta:t}=Ie();let o,r=0;if(re)o="top",t&&e&&(r=t.top-e.top+e.scrollTop);else if(o=f?"right":"left",t&&e){const l=f?e.scrollLeftNormalized+e.clientWidth-e.scrollWidth:e.scrollLeft;r=(f?-1:1)*(t[o]-e[o]+l)}const l={[o]:r,[ae]:t?t[ae]:0};if(isNaN(ve[o])||isNaN(ve[ae]))pe(l);else{const e=Math.abs(ve[o]-l[o]),t=Math.abs(ve[ae]-l[ae]);(e>=1||t>=1)&&pe(l)}})),Te=(e,{animation:t=!0}={})=>{t?function(e,t,o,r={},l=(()=>{})){const{ease:n=p,duration:i=300}=r;let s=null;const a=t[e];let c=!1;const d=r=>{if(c)return void l(new Error("Animation cancelled"));null===s&&(s=r);const u=Math.min(1,(r-s)/i);t[e]=n(u)*(o-a)+a,u>=1?requestAnimationFrame((()=>{l(null)})):requestAnimationFrame(d)};a===o?l(new Error("Element already at target position")):requestAnimationFrame(d)}(le,Me.current,e,{duration:c.transitions.duration.standard}):Me.current[le]=e},Le=e=>{let t=Me.current[le];re?t+=e:(t+=e*(f?-1:1),t*=f&&"reverse"===h()?-1:1),Te(t)},Ne=()=>{const e=Me.current[se];let t=0;const o=Array.from(Ee.current.children);for(let r=0;r<o.length;r+=1){const l=o[r];if(t+l[se]>e){0===r&&(t=e);break}t+=l[se]}return t},Re=()=>{Le(-1*Ne())},ke=()=>{Le(Ne())},ze=n.useCallback((e=>{Be({overflow:null,scrollbarWidth:e})}),[]),We=(0,N.Z)((e=>{const{tabsMeta:t,tabMeta:o}=Ie();if(o&&t)if(o[ne]<t[ne]){const r=t[le]+(o[ne]-t[ne]);Te(r,{animation:e})}else if(o[ie]>t[ie]){const r=t[le]+(o[ie]-t[ie]);Te(r,{animation:e})}})),Ae=(0,N.Z)((()=>{oe&&!1!==k&&xe(!Ze)}));n.useEffect((()=>{const e=(0,b.Z)((()=>{Me.current&&Pe()}));let t;const o=(0,S.Z)(Me.current);let r;return o.addEventListener("resize",e),"undefined"!=typeof ResizeObserver&&(t=new ResizeObserver(e),Array.from(Ee.current.children).forEach((e=>{t.observe(e)}))),"undefined"!=typeof MutationObserver&&(r=new MutationObserver((o=>{o.forEach((e=>{e.removedNodes.forEach((e=>{var o;null==(o=t)||o.unobserve(e)})),e.addedNodes.forEach((e=>{var o;null==(o=t)||o.observe(e)}))})),e(),Ae()})),r.observe(Ee.current,{childList:!0})),()=>{var l,n;e.clear(),o.removeEventListener("resize",e),null==(l=r)||l.disconnect(),null==(n=t)||n.disconnect()}}),[Pe,Ae]),n.useEffect((()=>{const e=Array.from(Ee.current.children),t=e.length;if("undefined"!=typeof IntersectionObserver&&t>0&&oe&&!1!==k){const o=e[0],r=e[t-1],l={root:Me.current,threshold:.99},n=new IntersectionObserver((e=>{Se(!e[0].isIntersecting)}),l);n.observe(o);const i=new IntersectionObserver((e=>{ge(!e[0].isIntersecting)}),l);return i.observe(r),()=>{n.disconnect(),i.disconnect()}}}),[oe,k,Ze,null==y?void 0:y.length]),n.useEffect((()=>{he(!0)}),[]),n.useEffect((()=>{Pe()})),n.useEffect((()=>{We($!==ve)}),[We,ve]),n.useImperativeHandle(Z,(()=>({updateIndicator:Pe,updateScrollButtons:Ae})),[Pe,Ae]);const je=(0,w.jsx)(D,(0,l.Z)({},K,{className:(0,i.Z)(de.indicator,K.className),ownerState:ce,style:(0,l.Z)({},ve,K.style)}));let Xe=0;const He=n.Children.map(y,(e=>{if(!n.isValidElement(e))return null;const t=void 0===e.props.value?Xe:e.props.value;Ce.set(t,Xe);const o=t===J;return Xe+=1,n.cloneElement(e,(0,l.Z)({fullWidth:"fullWidth"===Q,indicator:o&&!fe&&je,selected:o,selectionFollowsFocus:V,onChange:I,textColor:G,value:t},1!==Xe||!1!==J||e.props.tabIndex?{}:{tabIndex:0}))})),Fe=(()=>{const e={};e.scrollbarSizeListener=oe?(0,w.jsx)(O,{onChange:ze,className:(0,i.Z)(de.scrollableX,de.hideScrollbar)}):null;const t=oe&&("auto"===k&&(me||we)||!0===k);return e.scrollButtonStart=t?(0,w.jsx)(T,(0,l.Z)({slots:{StartScrollButtonIcon:_.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:ue},orientation:P,direction:f?"right":"left",onClick:Re,disabled:!me},U,{className:(0,i.Z)(de.scrollButtons,U.className)})):null,e.scrollButtonEnd=t?(0,w.jsx)(T,(0,l.Z)({slots:{EndScrollButtonIcon:_.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:be},orientation:P,direction:f?"left":"right",onClick:ke,disabled:!we},U,{className:(0,i.Z)(de.scrollButtons,U.className)})):null,e})();return(0,w.jsxs)(H,(0,l.Z)({className:(0,i.Z)(de.root,B),ownerState:ce,ref:t,as:C},te,{children:[Fe.scrollButtonStart,Fe.scrollbarSizeListener,(0,w.jsxs)(F,{className:de.scroller,ownerState:ce,style:{overflow:ye.overflow,[re?"margin"+(f?"Left":"Right"):"marginBottom"]:ee?void 0:-ye.scrollbarWidth},ref:Me,children:[(0,w.jsx)(Y,{"aria-label":m,"aria-labelledby":g,"aria-orientation":"vertical"===P?"vertical":null,className:de.flexContainer,ownerState:ce,onKeyDown:e=>{const t=Ee.current,o=(0,z.Z)(t).activeElement;if("tab"!==o.getAttribute("role"))return;let r="horizontal"===P?"ArrowLeft":"ArrowUp",l="horizontal"===P?"ArrowRight":"ArrowDown";switch("horizontal"===P&&f&&(r="ArrowRight",l="ArrowLeft"),e.key){case r:e.preventDefault(),X(t,o,j);break;case l:e.preventDefault(),X(t,o,A);break;case"Home":e.preventDefault(),X(t,null,A);break;case"End":e.preventDefault(),X(t,null,j)}},ref:Ee,role:"tablist",children:He}),fe&&je]}),Fe.scrollButtonEnd]}))}))},98167:(e,t,o)=>{o.d(t,{Z:()=>n}),o(66204);var r=o(50968),l=o(43188);const n=(0,r.Z)((0,l.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},95987:(e,t,o)=>{o.d(t,{Z:()=>n}),o(66204);var r=o(50968),l=o(43188);const n=(0,r.Z)((0,l.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")}}]);
//# sourceMappingURL=8600.46ed96b0.chunk.js.map