"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[8746,8337],{72e3:function(e,t,n){n.r(t);var r=n(33028),a=n(96234),o=n(96902),i=n(21051),s=n.n(i),c=n(6880),u=n(4782),d=n(42526),l=n(29938);function f(e){var t=e.value,n=(0,o.useState)(!1),r=(0,a.Z)(n,2),i=r[0],c=r[1],u=(0,o.useState)(!1),d=(0,a.Z)(u,2),f=d[0],p=d[1],m=String(t);return m.length>100?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{type:"button",onClick:function(){s()(m),p(!0),setTimeout((function(){p(!1)}),700)},children:f?"Copied to clipboard":"Copy"}),(0,l.jsx)("button",{type:"button",onClick:function(){return c((function(e){return!e}))},children:i?"Show less":"Show more"}),(0,l.jsx)("div",{children:i?m:"".concat(m.slice(0,100),"...")})]}):(0,l.jsx)("div",{children:m})}function p(e){return(0,l.jsx)(d.BaseAttributes,(0,r.Z)((0,r.Z)({},e),{},{formatter:function(e){return(0,l.jsx)(f,{value:e})}}))}var m=(0,u.observer)((function(e){var t=e.model,n=JSON.parse(JSON.stringify(t.featureData)),r=n.feature1,a=n.feature2;return(0,l.jsxs)(c.Z,{"data-testid":"alignment-side-drawer",children:[(0,l.jsx)(d.BaseCoreDetails,{title:"Feature 1",feature:r}),(0,l.jsx)(d.BaseCoreDetails,{title:"Feature 2",feature:a}),(0,l.jsx)(p,{feature:r}),(0,l.jsx)(p,{feature:a})]})}));t.default=m},59959:function(e,t,n){var r=n(71600);t.Z=void 0;var a=r(n(7152)),o=n(29938),i=(0,a.default)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=i},25471:function(e,t,n){var r=n(71600);t.Z=void 0;var a=r(n(7152)),o=n(29938),i=(0,a.default)((0,o.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");t.Z=i},53244:function(e,t,n){var r=n(7896),a=n(31461),o=n(96902),i=n(24463),s=n(73674),c=n(2252),u=n(53068),d=n(85642),l=n(29938),f=["className"],p=(0,c.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),m=o.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiAccordionDetails"}),o=n.className,c=(0,a.Z)(n,f),m=n,v=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},d.s,t)}(m);return(0,l.jsx)(p,(0,r.Z)({className:(0,i.default)(v.root,o),ref:t,ownerState:m},c))}));t.Z=m},85642:function(e,t,n){n.d(t,{s:function(){return o}});var r=n(74732),a=n(61235);function o(e){return(0,a.Z)("MuiAccordionDetails",e)}var i=(0,r.Z)("MuiAccordionDetails",["root"]);t.Z=i},75695:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(56666),a=n(31461),o=n(7896),i=n(96902),s=n(24463),c=n(73674),u=n(2252),d=n(53068),l=n(83413),f=n(81871),p=n(74732),m=n(61235);function v(e){return(0,m.Z)("MuiAccordionSummary",e)}var x=(0,p.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),Z=n(29938),b=["children","className","expandIcon","focusVisibleClassName","onClick"],h=(0,u.ZP)(l.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,n=e.theme,a=e.ownerState,i={duration:n.transitions.duration.shortest};return(0,o.Z)((t={display:"flex",minHeight:48,padding:n.spacing(0,2),transition:n.transitions.create(["min-height","background-color"],i)},(0,r.Z)(t,"&.".concat(x.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,r.Z)(t,"&.".concat(x.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),(0,r.Z)(t,"&:hover:not(.".concat(x.disabled,")"),{cursor:"pointer"}),t),!a.disableGutters&&(0,r.Z)({},"&.".concat(x.expanded),{minHeight:64}))})),g=(0,u.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,t){return t.content}})((function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!n.disableGutters&&(0,r.Z)({transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest})},"&.".concat(x.expanded),{margin:"20px 0"}))})),j=(0,u.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,t){return t.expandIconWrapper}})((function(e){var t=e.theme;return(0,r.Z)({display:"flex",color:(t.vars||t).palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},"&.".concat(x.expanded),{transform:"rotate(180deg)"})})),S=i.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiAccordionSummary"}),r=n.children,u=n.className,l=n.expandIcon,p=n.focusVisibleClassName,m=n.onClick,x=(0,a.Z)(n,b),S=i.useContext(f.Z),w=S.disabled,C=void 0!==w&&w,y=S.disableGutters,M=S.expanded,N=S.toggle,k=(0,o.Z)({},n,{expanded:M,disabled:C,disableGutters:y}),A=function(e){var t=e.classes,n=e.expanded,r=e.disabled,a=e.disableGutters,o={root:["root",n&&"expanded",r&&"disabled",!a&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!a&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]};return(0,c.Z)(o,v,t)}(k);return(0,Z.jsxs)(h,(0,o.Z)({focusRipple:!1,disableRipple:!0,disabled:C,component:"div","aria-expanded":M,className:(0,s.default)(A.root,u),focusVisibleClassName:(0,s.default)(A.focusVisible,p),onClick:function(e){N&&N(e),m&&m(e)},ref:t,ownerState:k},x,{children:[(0,Z.jsx)(g,{className:A.content,ownerState:k,children:r}),l&&(0,Z.jsx)(j,{className:A.expandIconWrapper,ownerState:k,children:l})]}))}))}}]);
//# sourceMappingURL=8746.7eb9bec7.chunk.js.map