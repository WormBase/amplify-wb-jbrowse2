"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[1173],{1173:function(e,n,o){o.r(n),o.d(n,{default:function(){return m}});var t=o(96234),r=o(96902),a=o(17867),s=o(52809),c=o(92735),i=o(25322),l=o(13655),u=o(99782),d=o(80367),h=o(12221),f=o(80726),v=o(29938);function Z(e){var n=e.onClose,o=e.open;return(0,v.jsx)(a.Dialog,{onClose:function(){return n()},open:o,title:"Info about session URLs",children:(0,v.jsxs)(s.Z,{children:[(0,v.jsx)(c.Z,{children:"Because everything about the JBrowse session is encoded in the URL (e.g. state of the tracks, views, features selected, etc.) the sessions can get very long. Therefore, we created a URL shortener, both as a convenience and because long URLs can break some programs. Note that both the long and short URLs encode the same data, but due to long URLs causing problems with some programs, we recommend sharing short URLs."}),(0,v.jsx)(c.Z,{children:'We generate the short URLs in a secure manner which involves encrypting the session on the client side with a random password string and uploading them to a central database. Then the random password is added to the URL but is not uploaded to the central database, making these short URLs effectively "end-to-end encrypted"'}),(0,v.jsx)(c.Z,{children:"Only users with a share link can read the session."})]})})}var p="jbrowse-shareURL";function m(e){var n=e.onClose,o=e.open,m=e.currentSetting,g=(0,r.useState)(m),b=(0,t.Z)(g,2),j=b[0],x=b[1],C=(0,r.useState)(!1),w=(0,t.Z)(C,2),k=w[0],R=w[1];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a.Dialog,{onClose:function(){localStorage.setItem(p,j),n(j)},open:o,title:"Configure session sharing",children:(0,v.jsxs)(s.Z,{children:[(0,v.jsxs)(c.Z,{children:["Select between generating long or short URLs for the session sharing",(0,v.jsx)(i.Z,{onClick:function(){return R(!0)},children:(0,v.jsx)(f.Z,{})})]}),(0,v.jsx)(l.Z,{component:"fieldset",children:(0,v.jsxs)(u.Z,{value:j,onChange:function(e){return x(e.target.value)},children:[(0,v.jsx)(d.Z,{value:"short",control:(0,v.jsx)(h.Z,{}),label:"Short URL"}),(0,v.jsx)(d.Z,{value:"long",control:(0,v.jsx)(h.Z,{}),label:"Long URL"})]})})]})}),(0,v.jsx)(Z,{open:k,onClose:function(){return R(!1)}})]})}},80726:function(e,n,o){var t=o(71600);n.Z=void 0;var r=t(o(7152)),a=o(29938),s=(0,r.default)((0,a.jsx)("path",{d:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"}),"HelpOutline");n.Z=s},12221:function(e,n,o){o.d(n,{Z:function(){return L}});var t=o(56666),r=o(31461),a=o(7896),s=o(96902),c=o(24463),i=o(73674),l=o(16644),u=o(95790),d=o(53068),h=o(30992),f=o(29938),v=(0,h.Z)((0,f.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),Z=(0,h.Z)((0,f.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),p=o(2252),m=(0,p.ZP)("span")({position:"relative",display:"flex"}),g=(0,p.ZP)(v)({transform:"scale(1)"}),b=(0,p.ZP)(Z)((function(e){var n=e.theme,o=e.ownerState;return(0,a.Z)({left:0,position:"absolute",transform:"scale(0)",transition:n.transitions.create("transform",{easing:n.transitions.easing.easeIn,duration:n.transitions.duration.shortest})},o.checked&&{transform:"scale(1)",transition:n.transitions.create("transform",{easing:n.transitions.easing.easeOut,duration:n.transitions.duration.shortest})})}));var j=function(e){var n=e.checked,o=void 0!==n&&n,t=e.classes,r=void 0===t?{}:t,s=e.fontSize,c=(0,a.Z)({},e,{checked:o});return(0,f.jsxs)(m,{className:r.root,ownerState:c,children:[(0,f.jsx)(g,{fontSize:s,className:r.background,ownerState:c}),(0,f.jsx)(b,{fontSize:s,className:r.dot,ownerState:c})]})},x=o(70378),C=o(69491),w=o(63838),k=o(17318),R=["checked","checkedIcon","color","icon","name","onChange","size","className"],S=(0,p.ZP)(u.Z,{shouldForwardProp:function(e){return(0,p.FO)(e)||"classes"===e},name:"MuiRadio",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,n["color".concat((0,x.Z)(o.color))]]}})((function(e){var n=e.theme,o=e.ownerState;return(0,a.Z)({color:(n.vars||n).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat("default"===o.color?n.vars.palette.action.activeChannel:n.vars.palette[o.color].mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,l.Fq)("default"===o.color?n.palette.action.active:n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(0,t.Z)({},"&.".concat(k.Z.checked),{color:(n.vars||n).palette[o.color].main}),(0,t.Z)({},"&.".concat(k.Z.disabled),{color:(n.vars||n).palette.action.disabled}))}));var y=(0,f.jsx)(j,{checked:!0}),z=(0,f.jsx)(j,{}),L=s.forwardRef((function(e,n){var o,t,l,u,h=(0,d.Z)({props:e,name:"MuiRadio"}),v=h.checked,Z=h.checkedIcon,p=void 0===Z?y:Z,m=h.color,g=void 0===m?"primary":m,b=h.icon,j=void 0===b?z:b,L=h.name,U=h.onChange,M=h.size,I=void 0===M?"medium":M,N=h.className,P=(0,r.Z)(h,R),O=(0,a.Z)({},h,{color:g,size:I}),B=function(e){var n=e.classes,o=e.color,t={root:["root","color".concat((0,x.Z)(o))]};return(0,a.Z)({},n,(0,i.Z)(t,k.l,n))}(O),F=(0,w.Z)(),_=v,q=(0,C.Z)(U,F&&F.onChange),D=L;return F&&("undefined"===typeof _&&(l=F.value,_="object"===typeof(u=h.value)&&null!==u?l===u:String(l)===String(u)),"undefined"===typeof D&&(D=F.name)),(0,f.jsx)(S,(0,a.Z)({type:"radio",icon:s.cloneElement(j,{fontSize:null!=(o=z.props.fontSize)?o:I}),checkedIcon:s.cloneElement(p,{fontSize:null!=(t=y.props.fontSize)?t:I}),ownerState:O,classes:B,name:D,checked:_,onChange:q,ref:n,className:(0,c.default)(B.root,N)},P))}))},17318:function(e,n,o){o.d(n,{l:function(){return a}});var t=o(74732),r=o(61235);function a(e){return(0,r.Z)("MuiRadio",e)}var s=(0,t.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]);n.Z=s},99782:function(e,n,o){var t=o(96234),r=o(7896),a=o(31461),s=o(96902),c=o(52),i=o(22756),l=o(48962),u=o(39809),d=o(14989),h=o(29938),f=["actions","children","defaultValue","name","onChange","value"],v=s.forwardRef((function(e,n){var o=e.actions,v=e.children,Z=e.defaultValue,p=e.name,m=e.onChange,g=e.value,b=(0,a.Z)(e,f),j=s.useRef(null),x=(0,l.Z)({controlled:g,default:Z,name:"RadioGroup"}),C=(0,t.Z)(x,2),w=C[0],k=C[1];s.useImperativeHandle(o,(function(){return{focus:function(){var e=j.current.querySelector("input:not(:disabled):checked");e||(e=j.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var R=(0,i.Z)(n,j),S=(0,d.Z)(p),y=s.useMemo((function(){return{name:S,onChange:function(e){k(e.target.value),m&&m(e,e.target.value)},value:w}}),[S,m,k,w]);return(0,h.jsx)(u.Z.Provider,{value:y,children:(0,h.jsx)(c.Z,(0,r.Z)({role:"radiogroup",ref:R},b,{children:v}))})}));n.Z=v},39809:function(e,n,o){var t=o(96902).createContext(void 0);n.Z=t},63838:function(e,n,o){o.d(n,{Z:function(){return a}});var t=o(96902),r=o(39809);function a(){return t.useContext(r.Z)}}}]);
//# sourceMappingURL=1173.5f3fce25.chunk.js.map