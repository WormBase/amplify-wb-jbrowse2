"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[506],{19885:function(r,a,t){t.d(a,{Z:function(){return b}});var e=t(96234),o=t(31461),n=t(7896),i=t(96902),l=t(24463),s=t(73674),c=t(2252),u=t(53068),v=t(30992),d=t(29938),f=(0,v.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=t(38988),p=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(r,a){var t=r.ownerState;return[a.root,a[t.variant],t.colorDefault&&a.colorDefault]}})((function(r){var a=r.theme,t=r.ownerState;return(0,n.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(a.vars||a).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,n.Z)({color:(a.vars||a).palette.background.default},a.vars?{backgroundColor:a.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===a.palette.mode?a.palette.grey[400]:a.palette.grey[600]}))})),h=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(r,a){return a.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Z=(0,c.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(r,a){return a.fallback}})({width:"75%",height:"75%"});var b=i.forwardRef((function(r,a){var t=(0,u.Z)({props:r,name:"MuiAvatar"}),c=t.alt,v=t.children,f=t.className,b=t.component,x=void 0===b?"div":b,w=t.imgProps,y=t.sizes,A=t.src,S=t.srcSet,k=t.variant,M=void 0===k?"circular":k,P=(0,o.Z)(t,p),R=null,N=function(r){var a=r.crossOrigin,t=r.referrerPolicy,o=r.src,n=r.srcSet,l=i.useState(!1),s=(0,e.Z)(l,2),c=s[0],u=s[1];return i.useEffect((function(){if(o||n){u(!1);var r=!0,e=new Image;return e.onload=function(){r&&u("loaded")},e.onerror=function(){r&&u("error")},e.crossOrigin=a,e.referrerPolicy=t,e.src=o,n&&(e.srcset=n),function(){r=!1}}}),[a,t,o,n]),c}((0,n.Z)({},w,{src:A,srcSet:S})),j=A||S,z=j&&"error"!==N,C=(0,n.Z)({},t,{colorDefault:!z,component:x,variant:M}),D=function(r){var a=r.classes,t={root:["root",r.variant,r.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.Z)(t,m.$,a)}(C);return R=z?(0,d.jsx)(h,(0,n.Z)({alt:c,src:A,srcSet:S,sizes:y,ownerState:C,className:D.img},w)):null!=v?v:j&&c?c[0]:(0,d.jsx)(Z,{ownerState:C,className:D.fallback}),(0,d.jsx)(g,(0,n.Z)({as:x,ownerState:C,className:(0,l.default)(D.root,f),ref:a},P,{children:R}))}))},38988:function(r,a,t){t.d(a,{$:function(){return n}});var e=t(74732),o=t(61235);function n(r){return(0,o.Z)("MuiAvatar",r)}var i=(0,e.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);a.Z=i},90506:function(r,a,t){t.r(a),t.d(a,{avatarGroupClasses:function(){return g},default:function(){return y},getAvatarGroupUtilityClass:function(){return p}});var e=t(56666),o=t(31461),n=t(7896),i=t(96902),l=(t(93196),t(24463)),s=t(73674),c=t(2252),u=t(53068),v=t(38988),d=t(19885),f=t(74732),m=t(61235);function p(r){return(0,m.Z)("MuiAvatarGroup",r)}var g=(0,f.Z)("MuiAvatarGroup",["root","avatar"]),h=t(29938),Z=["children","className","component","componentsProps","max","slotProps","spacing","total","variant"],b={small:-16,medium:null},x=(0,c.ZP)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:function(r,a){return(0,n.Z)((0,e.Z)({},"& .".concat(g.avatar),a.avatar),a.root)}})((function(r){var a,t=r.theme;return a={},(0,e.Z)(a,"& .".concat(v.Z.root),{border:"2px solid ".concat((t.vars||t).palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}),(0,e.Z)(a,"display","flex"),(0,e.Z)(a,"flexDirection","row-reverse"),a})),w=(0,c.ZP)(d.Z,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:function(r,a){return a.avatar}})((function(r){var a=r.theme;return{border:"2px solid ".concat((a.vars||a).palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}})),y=i.forwardRef((function(r,a){var t,e=(0,u.Z)({props:r,name:"MuiAvatarGroup"}),c=e.children,v=e.className,d=e.component,f=void 0===d?"div":d,m=e.componentsProps,g=void 0===m?{}:m,y=e.max,A=void 0===y?5:y,S=e.slotProps,k=void 0===S?{}:S,M=e.spacing,P=void 0===M?"medium":M,R=e.total,N=e.variant,j=void 0===N?"circular":N,z=(0,o.Z)(e,Z),C=A<2?2:A,D=(0,n.Z)({},e,{max:A,spacing:P,component:f,variant:j}),G=function(r){var a=r.classes;return(0,s.Z)({root:["root"],avatar:["avatar"]},p,a)}(D),L=i.Children.toArray(c).filter((function(r){return i.isValidElement(r)})),F=R||L.length;F===C&&(C+=1),C=Math.min(F+1,C);var I=Math.min(L.length,C-1),_=Math.max(F-C,F-I,0),E=P&&void 0!==b[P]?b[P]:-P,q=null!=(t=k.additionalAvatar)?t:g.additionalAvatar;return(0,h.jsxs)(x,(0,n.Z)({as:f,ownerState:D,className:(0,l.default)(G.root,v),ref:a},z,{children:[_?(0,h.jsxs)(w,(0,n.Z)({ownerState:D,variant:j},q,{className:(0,l.default)(G.avatar,null==q?void 0:q.className),style:(0,n.Z)({marginLeft:E},null==q?void 0:q.style),children:["+",_]})):null,L.slice(0,I).reverse().map((function(r,a){return i.cloneElement(r,{className:(0,l.default)(r.props.className,G.avatar),style:(0,n.Z)({marginLeft:a===I-1?void 0:E},r.props.style),variant:r.props.variant||j})}))]}))}))}}]);
//# sourceMappingURL=506.47a277fa.chunk.js.map