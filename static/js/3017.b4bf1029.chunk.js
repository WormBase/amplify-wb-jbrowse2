"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[3017],{33017:function(e,n,r){r.r(n),r.d(n,{default:function(){return F}});var t=r(96234),i=r(96902),o=r(36897),s=r(4782),a=r(27664),d=r(20893),l=r(66379),c=r(6880),u=r(35478),g=r(54896),h=r(29938),v=(0,u.ZL)()((function(e){return{paper:{overflowY:"auto",height:"100%",zIndex:e.zIndex.drawer,outline:"none",background:e.palette.background.default},resizeHandle:{width:4,position:"fixed",top:0,zIndex:e.zIndex.drawer+1}}}));var f=(0,s.observer)((function(e){var n=e.children,r=e.session,t=r.drawerPosition,o=r.drawerWidth,s=v().classes,a=(0,i.useRef)(null);return(0,i.useEffect)((function(){function e(e){if(e.target instanceof Element&&null!==a&&void 0!==a&&a.current&&a.current.contains(e.target)){var n,t,i=null===(n=r.visibleWidget)||void 0===n||null===(t=n.view)||void 0===t?void 0:t.id;i&&r.setFocusedViewId(i)}}return document.addEventListener("mousedown",e),document.addEventListener("keydown",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("keydown",e)}}),[a,r]),(0,h.jsxs)(c.Z,{ref:a,className:s.paper,elevation:16,square:!0,children:["right"===t?(0,h.jsx)(g.Z,{onDrag:r.resizeDrawer,className:s.resizeHandle,vertical:!0}):null,n,"left"===t?(0,h.jsx)(g.Z,{onDrag:r.resizeDrawer,className:s.resizeHandle,style:{left:o},vertical:!0}):null]})})),x=r(68079),w=r(19459),m=r(82658),p=r(13655),j=r(33266),Z=r(35388),b=r(15996),k=r(25322),y=r(50543),C=r(5966),W=r(31946),z=r(47057),D=r(21630),E=r(38238),H=(0,u.ZL)()((function(e){return{formControl:{margin:0},spacer:{flexGrow:1},drawerSelect:{margin:0,color:e.palette.secondary.contrastText},dropDownIcon:{color:e.palette.secondary.contrastText},header:{background:e.palette.secondary.main},headerFocused:{background:e.palette.secondary.light},headerUnfocused:{background:e.palette.secondary.dark}}})),I=(0,s.observer)((function(e){var n,r,t=e.session,i=e.setToolbarHeight,o=H().classes,s=t.focusedViewId,a=null===(n=t.visibleWidget)||void 0===n||null===(r=n.view)||void 0===r?void 0:r.id,d=s&&s===a;return(0,h.jsx)(w.Z,{position:"sticky",className:d?"".concat(o.headerFocused):a?"".concat(o.headerUnfocused):o.header,ref:function(e){return i((null===e||void 0===e?void 0:e.getBoundingClientRect().height)||0)},children:(0,h.jsxs)(m.Z,{disableGutters:!0,children:[(0,h.jsx)(T,{session:t}),(0,h.jsx)("div",{className:o.spacer}),(0,h.jsx)(N,{session:t})]})})})),T=(0,s.observer)((function(e){var n=e.session,r=n.visibleWidget,t=n.activeWidgets,i=H().classes,o=(0,a.getEnv)(n).pluginManager;return(0,h.jsx)(p.Z,{className:i.formControl,children:(0,h.jsx)(j.Z,{value:null===r||void 0===r?void 0:r.id,"data-testid":"widget-drawer-selects",className:i.drawerSelect,classes:{icon:i.dropDownIcon},renderValue:function(e){var r=n.activeWidgets.get(e);if(!r)return(0,h.jsx)(Z.Z,{variant:"h6",color:"inherit",children:"Unknown widget"});var t=o.getWidgetType(r.type),i=t.HeadingComponent,s=t.heading;return i?(0,h.jsx)(i,{model:r}):(0,h.jsx)(Z.Z,{variant:"h6",color:"inherit",children:s})},onChange:function(e){var r=n.activeWidgets.get(e.target.value);r?n.showWidget(r):n.notify("Widget not found ".concat(e.target.value),"warning")},children:(0,x.Z)(t.values()).map((function(e){var r=o.getWidgetType(e.type),t=r.HeadingComponent,i=r.heading;return(0,h.jsxs)(b.Z,{"data-testid":"widget-drawer-selects-item-".concat(e.type),value:e.id,children:[t?(0,h.jsx)(t,{model:e}):(0,h.jsx)(Z.Z,{variant:"h6",color:"inherit",children:i}),(0,h.jsx)(k.Z,{"data-testid":"".concat(e.type,"-drawer-delete"),color:"inherit","aria-label":"Delete",onClick:function(){return n.hideWidget(e)},children:(0,h.jsx)(W.Z,{})})]},e.id)}))})})})),N=(0,s.observer)((function(e){var n=e.session,r=(0,i.useState)(null),o=(0,t.Z)(r,2),s=o[0],a=o[1],d=n.drawerPosition,l=n.visibleWidget;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(k.Z,{color:"inherit",onClick:function(e){return a(e.currentTarget)},children:(0,h.jsx)(E.Z,{})}),(0,h.jsx)(y.Z,{title:"Minimize drawer",children:(0,h.jsx)(k.Z,{"data-testid":"drawer-minimize",color:"inherit",onClick:function(){n.notify("Drawer minimized, click button on ".concat(d," side of screen to re-open"),"info"),n.minimizeWidgetDrawer()},children:(0,h.jsx)(D.Z,{})})}),(0,h.jsx)(y.Z,{title:"Close drawer",children:(0,h.jsx)(k.Z,{color:"inherit",onClick:function(){return n.hideWidget(l)},children:(0,h.jsx)(z.Z,{})})}),(0,h.jsx)(C.Z,{anchorEl:s,open:Boolean(s),onClose:function(){return a(null)},children:["left","right"].map((function(e){return(0,h.jsx)(b.Z,{selected:"option"===d,onClick:function(){n.setDrawerPosition(e),a(null)},children:e},e)}))})]})})),F=(0,s.observer)((function(e){var n=e.session,r=n.visibleWidget,s=(0,a.getEnv)(n).pluginManager,c=r?s.evaluateExtensionPoint("Core-replaceWidget",s.getWidgetType(r.type).ReactComponent,{session:n,model:r}):null,u=(0,i.useState)(0),g=(0,t.Z)(u,2),v=g[0],x=g[1];return(0,h.jsxs)(f,{session:n,children:[(0,h.jsx)(I,{session:n,setToolbarHeight:x}),(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)(d.Z,{}),children:(0,h.jsx)(o.SV,{FallbackComponent:function(e){var n=e.error;return(0,h.jsx)(l.Z,{error:n})},children:c?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{model:r,session:n,toolbarHeight:v}),(0,h.jsx)("div",{style:{height:300}})]}):null})})]})}))}}]);
//# sourceMappingURL=3017.b4bf1029.chunk.js.map