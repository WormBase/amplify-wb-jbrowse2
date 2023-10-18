"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6617],{56617:function(e,t,n){n.r(t);var r=n(96902),a=n(4782),o=n(63680),i=n(35478),u=n(12905),l=n(29938),s=(0,i.ZL)()((function(e){return{viewDivider:{background:e.palette.secondary.main,height:3},container:{display:"grid"},overlay:{display:"flex",width:"100%",gridArea:"1/1","& path":{cursor:"crosshair",fill:"none"}},content:{gridArea:"1/1"}}})),c=(0,a.observer)((function(e){var t=e.model,n=s().classes,a=t.views,i=(0,o.getEnv)(t).pluginManager,c=(0,r.useRef)(null);return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:n.container,children:[(0,l.jsx)("div",{className:n.content,children:(0,l.jsx)("div",{style:{position:"relative"},children:a.map((function(e,t){var r=i.getViewType(e.type).ReactComponent,o=(0,l.jsx)(r,{model:e},e.id);return t===a.length-1?o:[o,(0,l.jsx)("div",{className:n.viewDivider},"".concat(e.id,"-divider"))]}))})}),(0,l.jsx)("div",{className:n.overlay,children:(0,l.jsx)("svg",{ref:c,style:{width:"100%",zIndex:10,pointerEvents:t.interactToggled?void 0:"none"},children:t.matchedTracks.map((function(e){return(0,l.jsx)(u.Z,{parentRef:c,model:t,trackId:e.configuration.trackId},e.configuration.trackId)}))})})]})})}));t.default=c},12905:function(e,t,n){n.d(t,{Z:function(){return M}});var r=n(33028),a=n(96902),o=n(4782),i=n(96234),u=n(63680),l=n(88636),s=n(27664),c=n(68079),d=n(41361),f=n(70899);function v(e,t){var n=e.get("tags");return n?n[t]:e.get(t)}var g=n(83708),h=n(29938),p=[0,1,2,3],m=p[0],y=p[2],k=(0,o.observer)((function(e){var t=e.model,n=e.trackId,r=e.parentRef,o=e.getTrackYPosOverride,f=t.views,p=t.showIntraviewLinks,k=(0,l.Z)(),w=(0,s.getSession)(t),N=(0,u.getSnapshot)(t),M=w.assemblyManager.get(f[0].assemblyNames[0]);(0,g.Go)(N);var T=t.getTrackFeatures(n),x=(0,a.useMemo)((function(){return function(e){var t,n=(0,d.Z)(e.values());try{for(n.s();!(t=n.n()).done;)if(1&t.value.get("flags"))return!0}catch(r){n.e(r)}finally{n.f()}return!1}(T)}),[T]),O=(0,a.useMemo)((function(){var e=t.getMatchedFeaturesInLayout(n,x?function(e){var t,n=new Map,r=new Set,a=(0,d.Z)(e.values());try{for(a.s();!(t=a.n()).done;){var o=t.value,i=o.get("flags"),u=o.id(),l=4&i,s=2&i;if(!r.has(u)&&!s&&!l){var f=o.get("name"),v=n.get(f);v||(v=[],n.set(f,v)),v.push(o)}r.add(o.id())}}catch(g){a.e(g)}finally{a.f()}return(0,c.Z)(n.values()).filter((function(e){return e.length>1}))}(T):function(e){var t,n=new Map,r=new Set,a=(0,d.Z)(e.values());try{for(a.s();!(t=a.n()).done;){var o=t.value,i=o.id(),u=4&o.get("flags"),l=!!v(o,"SA");if(!r.has(i)&&!u&&l){var s=o.get("name"),f=n.get(s);f||(f=[],n.set(s,f)),f.push(o)}r.add(o.id())}}catch(g){a.e(g)}finally{a.f()}return(0,c.Z)(n.values()).filter((function(e){return e.length>1}))}(T));return x||e.forEach((function(e){e.sort((function(e,t){return e.feature.get("clipPos")-t.feature.get("clipPos")}))})),e}),[T,n,x,t]),S=(0,a.useState)(),b=(0,i.Z)(S,2),j=b[0],Z=b[1],R=0;if(r.current){var C=r.current.getBoundingClientRect();R=C.top}return M?(0,h.jsx)("g",{stroke:k.palette.text.disabled,fill:"none","data-testid":O.length?"".concat(n,"-loaded"):n,children:O.map((function(e){for(var t,r=[],a=function(){var t=e[i],a=t.layout,u=t.feature,l=t.level,s=e[i+1],c=s.layout,d=s.feature,v=s.level;if(!a||!c)return console.warn("received null layout for a overlay feature"),{v:null};if(!p&&l===v)return{v:null};var k=M.getCanonicalRefName(u.get("refName")),N=M.getCanonicalRefName(d.get("refName"));if(!k||!N)throw new Error("unable to find ref for ".concat(k||N));var O=u.get("strand"),S=d.get("strand"),b=a[-1===O?m:y],C=-1===S,I=x?c[C?m:y]:c[C?y:m],L=(0,g.mu)(f[l],k,b),W=(0,g.mu)(f[v],N,I),A=f[l].pxToBp(L).reversed,F=f[v].pxToBp(W).reversed,B=f.map((function(e){return e.getTrack(n)})),J=(0,g.cO)(n,l,f,B,a,o)-R,D=(0,g.cO)(n,v,f,B,c,o)-R,E=["M",L,J,"C",L+200*u.get("strand")*(A?-1:1),J,W-200*d.get("strand")*(F?-1:1)*(x?-1:1),D,W,D].join(" "),P="".concat(u.id(),"-").concat(d.id());r.push((0,h.jsx)("path",{d:E,"data-testid":"r1",strokeWidth:j===P?5:1,onClick:function(){var e,t,n=null===(e=w.addWidget)||void 0===e?void 0:e.call(w,"BreakpointAlignmentsWidget","breakpointAlignments",{featureData:{feature1:(T.get(u.id())||{toJSON:function(){}}).toJSON(),feature2:(T.get(d.id())||{toJSON:function(){}}).toJSON()}});null===(t=w.showWidget)||void 0===t||t.call(w,n)},onMouseOver:function(){return Z(P)},onMouseOut:function(){return Z(void 0)}},P))},i=0;i<e.length-1;i++)if(t=a())return t.v;return r}))}):null})),w=(0,o.observer)((function(e){var t=e.model,n=e.trackId,r=e.parentRef,o=e.getTrackYPosOverride,l=t.views,v=(0,s.getSession)(t),p=v.assemblyManager,m=t.getTrackFeatures(n),y=(0,a.useMemo)((function(){return t.getMatchedFeaturesInLayout(n,function(e){var t,n=new Map,r=new Set,a=(0,d.Z)(e.values());try{var o=function(){var e=t.value;if(!r.has(e.id())&&"breakend"===e.get("type")){var a=e.get("ALT");null===a||void 0===a||a.forEach((function(t){var r="".concat(e.get("refName"),":").concat(e.get("start")+1),a=(0,f.I)(t);if(a){var o=n.get(r);o?o.push(e):n.set(a.MatePosition||"none",[e])}}))}r.add(e.id())};for(a.s();!(t=a.n()).done;)o()}catch(i){a.e(i)}finally{a.f()}return(0,c.Z)(n.values()).filter((function(e){return e.length>1}))}(m))}),[m,n,t]),k=(0,a.useState)(),w=(0,i.Z)(k,2),N=w[0],M=w[1],T=(0,u.getSnapshot)(t);(0,g.Go)(T);var x=p.get(l[0].assemblyNames[0]);if(!x)return null;var O=0;if(r.current){var S=r.current.getBoundingClientRect();O=S.top}return(0,h.jsx)("g",{stroke:"green",strokeWidth:5,fill:"none","data-testid":y.length?"".concat(n,"-loaded"):n,children:y.map((function(e){for(var t,r=[],a=function(){var t=e[i],a=t.layout,u=t.feature,c=t.level,d=e[i+1],p=d.layout,y=d.feature,k=d.level,w=u.id(),T=function(e,t){var n=e.get("ALT");if(n)return new Map(null===n||void 0===n?void 0:n.map((function(e){return(0,f.I)(e)})).filter(s.notEmpty).map((function(e){return[e.MatePosition,e]}))).get("".concat(t.get("refName"),":").concat(t.get("start")+1))}(u,y);if(!a||!p)return{v:null};var S=u.get("refName"),b=y.get("refName"),j=x.getCanonicalRefName(S),Z=x.getCanonicalRefName(b);if(!j||!Z)throw new Error("unable to find ref for ".concat(j||Z));var R=(0,g.mu)(l[c],j,a[0]),C=(0,g.mu)(l[k],Z,p[0]),I=l[c].pxToBp(R).reversed,L=l[k].pxToBp(C).reversed,W=l.map((function(e){return e.getTrack(n)})),A=(0,g.cO)(n,c,l,W,a,o)-O,F=(0,g.cO)(n,k,l,W,p,o)-O;if(T){var B=["M",R-20*("left"===T.Join?-1:1)*(I?-1:1),A,"L",R,A,"L",C,F,"L",C-20*("left"===T.MateDirection?1:-1)*(L?-1:1),F].join(" ");r.push((0,h.jsx)("path",{d:B,strokeWidth:w===N?10:5,onClick:function(){var e,t,n,r=null===(e=v.addWidget)||void 0===e?void 0:e.call(v,"VariantFeatureWidget","variantFeature",{featureData:null===(t=m.get(w))||void 0===t?void 0:t.toJSON()});null===(n=v.showWidget)||void 0===n||n.call(v,r)},onMouseOver:function(){return M(w)},onMouseOut:function(){return M(void 0)}},JSON.stringify(B)))}else console.warn("the relevant ALT allele was not found, cannot render")},i=0;i<e.length-1;i+=1)if(t=a())return t.v;return r}))})})),N=(0,o.observer)((function(e){var t=e.model,n=e.trackId,r=e.parentRef,o=e.getTrackYPosOverride,l=t.views,c=(0,s.getSession)(t),f=c.assemblyManager,v=t.getTrackFeatures(n),p=(0,a.useMemo)((function(){return t.getMatchedFeaturesInLayout(n,function(e){var t,n=[],r=new Set,a=(0,d.Z)(e.values());try{for(a.s();!(t=a.n()).done;){var o=t.value;r.has(o.id())||"<TRA>"!==o.get("ALT")[0]||n.push([o]),r.add(o.id())}}catch(i){a.e(i)}finally{a.f()}return n}(v))}),[v,n,t]),m=(0,a.useState)(),y=(0,i.Z)(m,2),k=y[0],w=y[1],N=(0,u.getSnapshot)(t);if((0,g.Go)(N),!f.get(l[0].assemblyNames[0]))return null;var M=0;if(r.current){var T=r.current.getBoundingClientRect();M=T.top}return l.length<2?null:(0,h.jsx)("g",{fill:"none",stroke:"green",strokeWidth:5,"data-testid":p.length?"".concat(n,"-loaded"):n,children:p.map((function(e){for(var t,r=[],a=function(){var t=e[u],a=t.layout,s=t.feature,d=t.level,f=0===d?1:0,p=s.id();if(!a)return{v:null};var m=s.get("INFO"),y=m.CHR2[0],N=m.END[0],T=m.STRANDS[0].split(""),x=(0,i.Z)(T,2),O=x[0],S=x[1],b=(0,g.mu)(l[f],y,N);if(b){var j=[b,0,b+1,0],Z=(0,g.mu)(l[d],s.get("refName"),a[0]),R=b,C=l[d].pxToBp(Z).reversed,I=l[f].pxToBp(R).reversed,L=l.map((function(e){return e.getTrack(n)})),W=(0,g.cO)(n,d,l,L,a,o)-M,A=(0,g.cO)(n,f,l,L,j,o)-M,F=["M",Z-20*("+"===O?1:-1)*(C?-1:1),W,"L",Z,W,"L",R,A,"L",R-20*("+"===S?1:-1)*(I?-1:1),A].join(" ");r.push((0,h.jsx)("path",{d:F,strokeWidth:p===k?10:5,onClick:function(){var e,t,n=null===(e=c.addWidget)||void 0===e?void 0:e.call(c,"VariantFeatureWidget","variantFeature",{featureData:(v.get(p)||{toJSON:function(){}}).toJSON()});null===(t=c.showWidget)||void 0===t||t.call(c,n)},onMouseOver:function(){return w(p)},onMouseOut:function(){return w(void 0)}},JSON.stringify(F)))}},u=0;u<e.length;u+=1)if(t=a())return t.v;return r}))})})),M=(0,o.observer)((function(e){var t,n,a=e.model,o=e.trackId,i=a.getMatchedTracks(o);return"AlignmentsTrack"===(null===(t=i[0])||void 0===t?void 0:t.type)?(0,h.jsx)(k,(0,r.Z)({},e)):"VariantTrack"===(null===(n=i[0])||void 0===n?void 0:n.type)?a.hasTranslocations(o)?(0,h.jsx)(N,(0,r.Z)({},e)):(0,h.jsx)(w,(0,r.Z)({},e)):null}))}}]);
//# sourceMappingURL=6617.61a5261a.chunk.js.map