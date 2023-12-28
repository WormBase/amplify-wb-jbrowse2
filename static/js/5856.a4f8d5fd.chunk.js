"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5856],{63315:(e,t,o)=>{o.d(t,{Z:()=>b});var n=o(55559),a=o(30984),r=o(66204),i=o(56317),l=o(58029),s=o(74837),c=o(74918),d=o(57369),p=o(61125),v=o(9328),m=o(43188);const u=["active","children","className","component","completed","disabled","expanded","index","last"],Z=(0,p.ZP)("div",{name:"MuiStep",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.orientation],o.alternativeLabel&&t.alternativeLabel,o.completed&&t.completed]}})((({ownerState:e})=>(0,a.Z)({},"horizontal"===e.orientation&&{paddingLeft:8,paddingRight:8},e.alternativeLabel&&{flex:1,position:"relative"}))),b=r.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiStep"}),{active:p,children:b,className:x,component:S="div",completed:h,disabled:f,expanded:L=!1,index:C,last:w}=o,g=(0,n.Z)(o,u),{activeStep:M,connector:y,alternativeLabel:N,orientation:R,nonLinear:j}=r.useContext(s.Z);let[P=!1,z=!1,$=!1]=[p,h,f];M===C?P=void 0===p||p:!j&&M>C?z=void 0===h||h:!j&&M<C&&($=void 0===f||f);const I=r.useMemo((()=>({index:C,last:w,expanded:L,icon:C+1,active:P,completed:z,disabled:$})),[C,w,L,P,z,$]),T=(0,a.Z)({},o,{active:P,orientation:R,alternativeLabel:N,completed:z,disabled:$,expanded:L,component:S}),k=(e=>{const{classes:t,orientation:o,alternativeLabel:n,completed:a}=e,r={root:["root",o,n&&"alternativeLabel",a&&"completed"]};return(0,l.Z)(r,v.$,t)})(T),A=(0,m.jsxs)(Z,(0,a.Z)({as:S,className:(0,i.Z)(k.root,x),ref:t,ownerState:T},g,{children:[y&&N&&0!==C?y:null,b]}));return(0,m.jsx)(c.Z.Provider,{value:I,children:y&&!N&&0!==C?(0,m.jsxs)(r.Fragment,{children:[y,A]}):A})}))},74918:(e,t,o)=>{o.d(t,{Z:()=>i,s:()=>r});var n=o(66204);const a=n.createContext({});function r(){return n.useContext(a)}const i=a},9328:(e,t,o)=>{o.d(t,{$:()=>r,Z:()=>i});var n=o(58109),a=o(95201);function r(e){return(0,a.Z)("MuiStep",e)}const i=(0,n.Z)("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"])},80021:(e,t,o)=>{o.d(t,{Z:()=>S});var n=o(55559),a=o(30984),r=o(66204),i=o(56317),l=o(58029),s=o(40118),c=o(61125),d=o(57369),p=o(74837),v=o(74918),m=o(26468),u=o(43188);const Z=["className"],b=(0,c.ZP)("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.orientation],o.alternativeLabel&&t.alternativeLabel,o.completed&&t.completed]}})((({ownerState:e})=>(0,a.Z)({flex:"1 1 auto"},"vertical"===e.orientation&&{marginLeft:12},e.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"}))),x=(0,c.ZP)("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.line,t[`line${(0,s.Z)(o.orientation)}`]]}})((({ownerState:e,theme:t})=>{const o="light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600];return(0,a.Z)({display:"block",borderColor:t.vars?t.vars.palette.StepConnector.border:o},"horizontal"===e.orientation&&{borderTopStyle:"solid",borderTopWidth:1},"vertical"===e.orientation&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})})),S=r.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiStepConnector"}),{className:c}=o,S=(0,n.Z)(o,Z),{alternativeLabel:h,orientation:f="horizontal"}=r.useContext(p.Z),{active:L,disabled:C,completed:w}=r.useContext(v.Z),g=(0,a.Z)({},o,{alternativeLabel:h,orientation:f,active:L,completed:w,disabled:C}),M=(e=>{const{classes:t,orientation:o,alternativeLabel:n,active:a,completed:r,disabled:i}=e,c={root:["root",o,n&&"alternativeLabel",a&&"active",r&&"completed",i&&"disabled"],line:["line",`line${(0,s.Z)(o)}`]};return(0,l.Z)(c,m.M,t)})(g);return(0,u.jsx)(b,(0,a.Z)({className:(0,i.Z)(M.root,c),ref:t,ownerState:g},S,{children:(0,u.jsx)(x,{className:M.line,ownerState:g})}))}))},26468:(e,t,o)=>{o.d(t,{M:()=>r,Z:()=>i});var n=o(58109),a=o(95201);function r(e){return(0,a.Z)("MuiStepConnector",e)}const i=(0,n.Z)("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"])},64864:(e,t,o)=>{o.d(t,{Z:()=>f});var n=o(55559),a=o(30984),r=o(66204),i=o(56317),l=o(58029),s=o(61125),c=o(57369),d=o(92704),p=o(74837),v=o(74918),m=o(58109),u=o(95201);function Z(e){return(0,u.Z)("MuiStepContent",e)}(0,m.Z)("MuiStepContent",["root","last","transition"]);var b=o(43188);const x=["children","className","TransitionComponent","transitionDuration","TransitionProps"],S=(0,s.ZP)("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.last&&t.last]}})((({ownerState:e,theme:t})=>(0,a.Z)({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:t.vars?`1px solid ${t.vars.palette.StepContent.border}`:`1px solid ${"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}`},e.last&&{borderLeft:"none"}))),h=(0,s.ZP)(d.Z,{name:"MuiStepContent",slot:"Transition",overridesResolver:(e,t)=>t.transition})({}),f=r.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiStepContent"}),{children:s,className:m,TransitionComponent:u=d.Z,transitionDuration:f="auto",TransitionProps:L}=o,C=(0,n.Z)(o,x),{orientation:w}=r.useContext(p.Z),{active:g,last:M,expanded:y}=r.useContext(v.Z),N=(0,a.Z)({},o,{last:M}),R=(e=>{const{classes:t,last:o}=e,n={root:["root",o&&"last"],transition:["transition"]};return(0,l.Z)(n,Z,t)})(N);let j=f;return"auto"!==f||u.muiSupportAuto||(j=void 0),(0,b.jsx)(S,(0,a.Z)({className:(0,i.Z)(R.root,m),ref:t,ownerState:N},C,{children:(0,b.jsx)(h,(0,a.Z)({as:u,in:g||y,className:R.transition,ownerState:N,timeout:j,unmountOnExit:!0},L,{children:s}))}))}))},82902:(e,t,o)=>{o.d(t,{Z:()=>f});var n=o(30984),a=o(55559),r=o(66204),i=o(56317),l=o(58029),s=o(61125),c=o(57369),d=o(50968),p=o(43188);const v=(0,d.Z)((0,p.jsx)("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),m=(0,d.Z)((0,p.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");var u,Z=o(81650),b=o(12362);const x=["active","className","completed","error","icon"],S=(0,s.ZP)(Z.Z,{name:"MuiStepIcon",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),color:(e.vars||e).palette.text.disabled,[`&.${b.Z.completed}`]:{color:(e.vars||e).palette.primary.main},[`&.${b.Z.active}`]:{color:(e.vars||e).palette.primary.main},[`&.${b.Z.error}`]:{color:(e.vars||e).palette.error.main}}))),h=(0,s.ZP)("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(e,t)=>t.text})((({theme:e})=>({fill:(e.vars||e).palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily}))),f=r.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiStepIcon"}),{active:r=!1,className:s,completed:d=!1,error:Z=!1,icon:f}=o,L=(0,a.Z)(o,x),C=(0,n.Z)({},o,{active:r,completed:d,error:Z}),w=(e=>{const{classes:t,active:o,completed:n,error:a}=e,r={root:["root",o&&"active",n&&"completed",a&&"error"],text:["text"]};return(0,l.Z)(r,b.M,t)})(C);if("number"==typeof f||"string"==typeof f){const e=(0,i.Z)(s,w.root);return Z?(0,p.jsx)(S,(0,n.Z)({as:m,className:e,ref:t,ownerState:C},L)):d?(0,p.jsx)(S,(0,n.Z)({as:v,className:e,ref:t,ownerState:C},L)):(0,p.jsxs)(S,(0,n.Z)({className:e,ref:t,ownerState:C},L,{children:[u||(u=(0,p.jsx)("circle",{cx:"12",cy:"12",r:"12"})),(0,p.jsx)(h,{className:w.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:C,children:f})]}))}return f}))},12362:(e,t,o)=>{o.d(t,{M:()=>r,Z:()=>i});var n=o(58109),a=o(95201);function r(e){return(0,a.Z)("MuiStepIcon",e)}const i=(0,n.Z)("MuiStepIcon",["root","active","completed","error","text"])},65404:(e,t,o)=>{o.d(t,{Z:()=>L});var n=o(55559),a=o(30984),r=o(66204),i=o(56317),l=o(58029),s=o(61125),c=o(57369),d=o(82902),p=o(74837),v=o(74918),m=o(85339),u=o(43188);const Z=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],b=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.orientation]]}})((({ownerState:e})=>(0,a.Z)({display:"flex",alignItems:"center",[`&.${m.Z.alternativeLabel}`]:{flexDirection:"column"},[`&.${m.Z.disabled}`]:{cursor:"default"}},"vertical"===e.orientation&&{textAlign:"left",padding:"8px 0"}))),x=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(e,t)=>t.label})((({theme:e})=>(0,a.Z)({},e.typography.body2,{display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),[`&.${m.Z.active}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${m.Z.completed}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${m.Z.alternativeLabel}`]:{marginTop:16},[`&.${m.Z.error}`]:{color:(e.vars||e).palette.error.main}}))),S=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(e,t)=>t.iconContainer})((()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${m.Z.alternativeLabel}`]:{paddingRight:0}}))),h=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(e,t)=>t.labelContainer})((({theme:e})=>({width:"100%",color:(e.vars||e).palette.text.secondary,[`&.${m.Z.alternativeLabel}`]:{textAlign:"center"}}))),f=r.forwardRef((function(e,t){var o;const s=(0,c.Z)({props:e,name:"MuiStepLabel"}),{children:f,className:L,componentsProps:C={},error:w=!1,icon:g,optional:M,slotProps:y={},StepIconComponent:N,StepIconProps:R}=s,j=(0,n.Z)(s,Z),{alternativeLabel:P,orientation:z}=r.useContext(p.Z),{active:$,disabled:I,completed:T,icon:k}=r.useContext(v.Z),A=g||k;let D=N;A&&!D&&(D=d.Z);const W=(0,a.Z)({},s,{active:$,alternativeLabel:P,completed:T,disabled:I,error:w,orientation:z}),H=(e=>{const{classes:t,orientation:o,active:n,completed:a,error:r,disabled:i,alternativeLabel:s}=e,c={root:["root",o,r&&"error",i&&"disabled",s&&"alternativeLabel"],label:["label",n&&"active",a&&"completed",r&&"error",i&&"disabled",s&&"alternativeLabel"],iconContainer:["iconContainer",n&&"active",a&&"completed",r&&"error",i&&"disabled",s&&"alternativeLabel"],labelContainer:["labelContainer",s&&"alternativeLabel"]};return(0,l.Z)(c,m.H,t)})(W),_=null!=(o=y.label)?o:C.label;return(0,u.jsxs)(b,(0,a.Z)({className:(0,i.Z)(H.root,L),ref:t,ownerState:W},j,{children:[A||D?(0,u.jsx)(S,{className:H.iconContainer,ownerState:W,children:(0,u.jsx)(D,(0,a.Z)({completed:T,active:$,error:w,icon:A},R))}):null,(0,u.jsxs)(h,{className:H.labelContainer,ownerState:W,children:[f?(0,u.jsx)(x,(0,a.Z)({ownerState:W},_,{className:(0,i.Z)(H.label,null==_?void 0:_.className),children:f})):null,M]})]}))}));f.muiName="StepLabel";const L=f},85339:(e,t,o)=>{o.d(t,{H:()=>r,Z:()=>i});var n=o(58109),a=o(95201);function r(e){return(0,a.Z)("MuiStepLabel",e)}const i=(0,n.Z)("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"])},59602:(e,t,o)=>{o.d(t,{Z:()=>x});var n=o(55559),a=o(30984),r=o(66204),i=o(56317),l=o(58029),s=o(57369),c=o(61125),d=o(40991),p=o(80021),v=o(74837),m=o(43188);const u=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],Z=(0,c.ZP)("div",{name:"MuiStepper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.orientation],o.alternativeLabel&&t.alternativeLabel]}})((({ownerState:e})=>(0,a.Z)({display:"flex"},"horizontal"===e.orientation&&{flexDirection:"row",alignItems:"center"},"vertical"===e.orientation&&{flexDirection:"column"},e.alternativeLabel&&{alignItems:"flex-start"}))),b=(0,m.jsx)(p.Z,{}),x=r.forwardRef((function(e,t){const o=(0,s.Z)({props:e,name:"MuiStepper"}),{activeStep:c=0,alternativeLabel:p=!1,children:x,className:S,component:h="div",connector:f=b,nonLinear:L=!1,orientation:C="horizontal"}=o,w=(0,n.Z)(o,u),g=(0,a.Z)({},o,{alternativeLabel:p,orientation:C,component:h}),M=(e=>{const{orientation:t,alternativeLabel:o,classes:n}=e,a={root:["root",t,o&&"alternativeLabel"]};return(0,l.Z)(a,d.c,n)})(g),y=r.Children.toArray(x).filter(Boolean),N=y.map(((e,t)=>r.cloneElement(e,(0,a.Z)({index:t,last:t+1===y.length},e.props)))),R=r.useMemo((()=>({activeStep:c,alternativeLabel:p,connector:f,nonLinear:L,orientation:C})),[c,p,f,L,C]);return(0,m.jsx)(v.Z.Provider,{value:R,children:(0,m.jsx)(Z,(0,a.Z)({as:h,ownerState:g,className:(0,i.Z)(M.root,S),ref:t},w,{children:N}))})}))},74837:(e,t,o)=>{o.d(t,{Z:()=>i,s:()=>r});var n=o(66204);const a=n.createContext({});function r(){return n.useContext(a)}const i=a},40991:(e,t,o)=>{o.d(t,{Z:()=>i,c:()=>r});var n=o(58109),a=o(95201);function r(e){return(0,a.Z)("MuiStepper",e)}const i=(0,n.Z)("MuiStepper",["root","horizontal","vertical","alternativeLabel"])}}]);
//# sourceMappingURL=5856.a4f8d5fd.chunk.js.map