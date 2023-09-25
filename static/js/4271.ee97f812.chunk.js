"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4271],{94271:function(e,r,n){n.r(r);var t=n(32723),s=n(34795),a=n(96234),o=n(30969),c=n(90550),i=n(40909),u=n(59071),l=n(76149),p=n(72807),h=n(33359),d=n(87006),f=n(96074),x=n(72097),w=n(53276),k=n(34760),m=n.n(k),b=n(81073),Z=n(59767),v=n(22417),y=n(54299),g=n(37574),j=(0,w.ZL)()((function(){return{flexItem:{margin:5}}})),S=(0,c.observer)((function(e){var r=e.onClose,n=e.model,c=j().classes,w=(0,o.useState)(""),k=(0,a.Z)(w,2),S=k[0],C=k[1],U=(0,o.useState)(),R=(0,a.Z)(U,2),I=R[0],L=R[1],O=(0,o.useState)(!0),P=(0,a.Z)(O,2),E=P[0],_=P[1],A=(0,b.getSession)(n),B=n.selectedBookmarks,D=0===B.length,F=0===B.length?n.allBookmarksModel:n.sharedBookmarksModel;return(0,o.useEffect)((function(){var e=!1;return(0,s.Z)((0,t.Z)().mark((function r(){var n,s,a,o;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,_(!0),n=(0,i.getSnapshot)(F),s=new URL(window.location.href),r.next=6,(0,y.p)(n,A.shareURL,s.href);case 6:a=r.sent,e||((o=new URLSearchParams(s.search)).set("bookmarks","share-".concat(a.json.sessionId)),o.set("password",a.password),s.search=o.toString(),C(s.href),_(!1)),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(0),L(r.t0),A.notify("".concat(r.t0),"error");case 14:return r.prev=14,_(!1),r.finish(14);case 17:case"end":return r.stop()}}),r,null,[[0,10,14,17]])})))(),function(){e=!0}}),[F,A]),(0,g.jsxs)(Z.Dialog,{open:!0,onClose:r,title:"Share bookmarks",children:[(0,g.jsxs)(u.Z,{style:{display:"flex",flexFlow:"column",gap:"5px"},children:[(0,g.jsx)(l.Z,{severity:"info",children:D?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("span",{children:"All bookmarks will be shared."}),(0,g.jsx)("br",{}),(0,g.jsx)("span",{children:"Use the checkboxes to select individual bookmarks to share."})]}):"Only selected bookmarks will be shared."}),(0,g.jsx)(p.Z,{children:"Copy the URL below to share your bookmarks."}),I?(0,g.jsx)(Z.ErrorMessage,{error:I}):E?(0,g.jsx)(h.Z,{children:"Generating short URL..."}):(0,g.jsx)(d.Z,{label:"URL",value:S,InputProps:{readOnly:!0},variant:"filled",fullWidth:!0,onClick:function(e){e.target.select()}})]}),(0,g.jsx)(f.Z,{children:(0,g.jsx)(x.Z,{className:c.flexItem,"data-testid":"dialogShare",variant:"contained",color:"primary",startIcon:(0,g.jsx)(v.pt,{}),onClick:(0,s.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m()(S),A.notify("Copied to clipboard","success"),r();case 3:case"end":return e.stop()}}),e)}))),children:"Copy share link"})})]})}));r.default=S},54299:function(e,r,n){n.d(r,{h:function(){return x},p:function(){return f}});var t,s,a,o,c=n(32723),i=n(34795),u=n(68079),l=n(38935);var p=function(e,r){return(t=t||(0,i.Z)((0,c.Z)().mark((function e(r,t){var s;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(7923),n.e(6277)]).then(n.t.bind(n,46277,23));case 2:return s=e.sent,e.abrupt("return",s.encrypt(r,t).toString());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},h=function(e,r){return(s=s||(0,i.Z)((0,c.Z)().mark((function e(r,t){var s,a,o;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(7923),n.e(6277)]).then(n.t.bind(n,46277,23));case 2:return s=e.sent,e.next=5,n.e(3136).then(n.t.bind(n,33136,23));case 5:return a=e.sent,o=s.decrypt(r,t),e.abrupt("return",o.toString(a));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)};function d(e){try{return JSON.parse(e).message}catch(r){return e}}function f(e,r,n){return(a=a||(0,i.Z)((0,c.Z)().mark((function e(r,n,t){var s,a,o,i,h,f,x;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.JY)(JSON.stringify(r));case 2:return s=e.sent,c=5,a=window.btoa((0,u.Z)(window.crypto.getRandomValues(new Uint8Array(2*c))).map((function(e){return String.fromCharCode(e)})).join("")).replaceAll(/[+/]/g,"").slice(0,c),e.next=6,p(s,a);case 6:return o=e.sent,(i=new FormData).append("session",o),i.append("dateShared","".concat(Date.now())),i.append("referer",t),e.next=13,fetch("".concat(n,"share"),{method:"POST",mode:"cors",body:i});case 13:if((h=e.sent).ok){e.next=19;break}return e.next=17,h.text();case 17:throw f=e.sent,new Error(d(f));case 19:return e.next=21,h.json();case 21:return x=e.sent,e.abrupt("return",{json:x,encryptedSession:o,password:a});case 23:case"end":return e.stop()}var c}),e)})))).apply(this,arguments)}function x(e,r,n,t){return(o=o||(0,i.Z)((0,c.Z)().mark((function e(r,n,t,s){var a,o,i,u,l;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.split("share-")[1],o="".concat(r,"?sessionId=").concat(encodeURIComponent(a)),e.next=4,fetch(o,{signal:s});case 4:if((i=e.sent).ok){e.next=10;break}return e.next=8,i.text();case 8:throw u=e.sent,new Error(d(u));case 10:return e.next=12,i.json();case 12:return l=e.sent,e.abrupt("return",h(l.session,t));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=4271.ee97f812.chunk.js.map