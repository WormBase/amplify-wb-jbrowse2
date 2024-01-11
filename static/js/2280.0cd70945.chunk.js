"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2280],{72280:(e,t,a)=>{a.d(t,{ZP:()=>A});var o=a(31461),n=a(7896),s=a(41867),i=a(66184),r=a(92705),c=a(90011),d=a(71939),l=a(75693),u=a(90293),p=a(15543),m=a(43448),b=a(63185),g=a(40234),v=a(91259),Z=a(84132),y=a(17613),h=a(82637),f=a(80838);const C=["className"],x=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],I=(0,l.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]}})((e=>{let{theme:t,ownerState:a}=e;return(0,n.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!a.disablePadding&&(0,n.Z)({paddingTop:8,paddingBottom:8},a.dense&&{paddingTop:4,paddingBottom:4},!a.disableGutters&&{paddingLeft:16,paddingRight:16},!!a.secondaryAction&&{paddingRight:48}),!!a.secondaryAction&&{["& > .".concat(y.Z.root)]:{paddingRight:48}},{["&.".concat(Z.Z.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(Z.Z.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,d.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),["&.".concat(Z.Z.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,d.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},["&.".concat(Z.Z.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity}},"flex-start"===a.alignItems&&{alignItems:"flex-start"},a.divider&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"},a.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(Z.Z.selected,":hover")]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,d.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,d.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}}},a.hasSecondaryAction&&{paddingRight:48})})),S=(0,l.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),A=s.forwardRef((function(e,t){const a=(0,u.Z)({props:e,name:"MuiListItem"}),{alignItems:d="center",autoFocus:l=!1,button:y=!1,children:A,className:w,component:P,components:G={},componentsProps:L={},ContainerComponent:N="li",ContainerProps:{className:k}={},dense:O=!1,disabled:R=!1,disableGutters:M=!1,disablePadding:F=!1,divider:j=!1,focusVisibleClassName:V,secondaryAction:B,selected:q=!1,slotProps:_={},slots:D={}}=a,T=(0,o.Z)(a.ContainerProps,C),X=(0,o.Z)(a,x),z=s.useContext(v.Z),Y=s.useMemo((()=>({dense:O||z.dense||!1,alignItems:d,disableGutters:M})),[d,z.dense,O,M]),E=s.useRef(null);(0,b.Z)((()=>{l&&E.current&&E.current.focus()}),[l]);const H=s.Children.toArray(A),J=H.length&&(0,m.Z)(H[H.length-1],["ListItemSecondaryAction"]),K=(0,n.Z)({},a,{alignItems:d,autoFocus:l,button:y,dense:Y.dense,disabled:R,disableGutters:M,disablePadding:F,divider:j,hasSecondaryAction:J,selected:q}),Q=(e=>{const{alignItems:t,button:a,classes:o,dense:n,disabled:s,disableGutters:i,disablePadding:c,divider:d,hasSecondaryAction:l,selected:u}=e,p={root:["root",n&&"dense",!i&&"gutters",!c&&"padding",d&&"divider",s&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",l&&"secondaryAction",u&&"selected"],container:["container"]};return(0,r.Z)(p,Z.o,o)})(K),U=(0,g.Z)(E,t),W=D.root||G.Root||I,$=_.root||L.root||{},ee=(0,n.Z)({className:(0,i.Z)(Q.root,$.className,w),disabled:R},X);let te=P||"li";return y&&(ee.component=P||"div",ee.focusVisibleClassName=(0,i.Z)(Z.Z.focusVisible,V),te=p.Z),J?(te=ee.component||P?te:"div","li"===N&&("li"===te?te="div":"li"===ee.component&&(ee.component="div")),(0,f.jsx)(v.Z.Provider,{value:Y,children:(0,f.jsxs)(S,(0,n.Z)({as:N,className:(0,i.Z)(Q.container,k),ref:U,ownerState:K},T,{children:[(0,f.jsx)(W,(0,n.Z)({},$,!(0,c.X)(W)&&{as:te,ownerState:(0,n.Z)({},K,$.ownerState)},ee,{children:H})),H.pop()]}))})):(0,f.jsx)(v.Z.Provider,{value:Y,children:(0,f.jsxs)(W,(0,n.Z)({},$,{as:te,ref:U},!(0,c.X)(W)&&{ownerState:(0,n.Z)({},K,$.ownerState)},ee,{children:[H,B&&(0,f.jsx)(h.Z,{children:B})]}))})}))},84132:(e,t,a)=>{a.d(t,{Z:()=>i,o:()=>s});var o=a(70101),n=a(88498);function s(e){return(0,n.Z)("MuiListItem",e)}const i=(0,o.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"])},17613:(e,t,a)=>{a.d(t,{Z:()=>i,t:()=>s});var o=a(70101),n=a(88498);function s(e){return(0,n.Z)("MuiListItemButton",e)}const i=(0,o.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"])},82637:(e,t,a)=>{a.d(t,{Z:()=>v});var o=a(31461),n=a(7896),s=a(41867),i=a(66184),r=a(92705),c=a(75693),d=a(90293),l=a(91259),u=a(55609),p=a(80838);const m=["className"],b=(0,c.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.disableGutters&&t.disableGutters]}})((e=>{let{ownerState:t}=e;return(0,n.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),g=s.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiListItemSecondaryAction"}),{className:c}=a,g=(0,o.Z)(a,m),v=s.useContext(l.Z),Z=(0,n.Z)({},a,{disableGutters:v.disableGutters}),y=(e=>{const{disableGutters:t,classes:a}=e,o={root:["root",t&&"disableGutters"]};return(0,r.Z)(o,u.A,a)})(Z);return(0,p.jsx)(b,(0,n.Z)({className:(0,i.Z)(y.root,c),ownerState:Z,ref:t},g))}));g.muiName="ListItemSecondaryAction";const v=g},55609:(e,t,a)=>{a.d(t,{A:()=>s,Z:()=>i});var o=a(70101),n=a(88498);function s(e){return(0,n.Z)("MuiListItemSecondaryAction",e)}const i=(0,o.Z)("MuiListItemSecondaryAction",["root","disableGutters"])}}]);
//# sourceMappingURL=2280.0cd70945.chunk.js.map