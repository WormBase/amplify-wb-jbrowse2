(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8259],{38259:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>R});var s=t(7552),r=t(68446),n=t(943),i=t(58181),o=t(55851),l=t(75785),c=t(45331),u=t(70087),d=t(66765),m=t(81453),p=t(93091),h=t.n(p),$=t(39312),v=t(99546);const g=(0,r.observer)((function({session:e,sessionSnapshot:a,onClick:t,secondaryAction:r}){const{views:n=[]}=a||{},i=(0,v.sum)(n.map((e=>e.tracks?.length??0))),o=n.length;return s.createElement(c.Ay,{secondaryAction:r},s.createElement(u.A,{onClick:t},s.createElement(d.A,null,s.createElement($.A,null)),s.createElement(m.A,{primary:a.name,secondary:e.name===a.name?"Currently open":`${o} ${h()("view",o)}; ${i} open ${h()("track",i)}`})))})),f=(0,l.n9)()((e=>({root:{margin:e.spacing(1)}}))),b=(0,r.observer)((function({session:e}){const{classes:a}=f(),t=JSON.parse(localStorage.getItem(e.previousAutosaveId)||"{}").session;return t?s.createElement(n.A,{className:a.root},s.createElement(i.A,{subheader:s.createElement(o.A,null,"Previous autosaved entry")},s.createElement(g,{session:e,sessionSnapshot:t,onClick:()=>e.loadAutosaveSession()}))):null}));var y=t(61723),w=t(36715),A=t(78126),x=t(29499),C=t(99123),k=t(58507),E=t(5401),S=t(49823);function O({open:e,sessionNameToDelete:a,handleClose:t}){return s.createElement(S.Dialog,{open:e,title:`Delete session "${a}"?`},s.createElement(x.A,null,s.createElement(C.A,null,"This action cannot be undone")),s.createElement(k.A,null,s.createElement(E.A,{onClick:()=>t(),color:"primary"},"Cancel"),s.createElement(E.A,{onClick:()=>t(!0),color:"primary",autoFocus:!0},"Delete")))}const z=(0,l.n9)()((e=>({root:{margin:e.spacing(1)},message:{padding:e.spacing(3)}}))),I=(0,r.observer)((function({session:e}){const{classes:a}=z(),[t,r]=(0,s.useState)(),l=void 0!==t?e.savedSessions[t].name:"";return s.createElement(n.A,{className:a.root},s.createElement(i.A,{subheader:s.createElement(o.A,null,"Saved sessions")},e.savedSessions.length?e.savedSessions.map(((a,t)=>s.createElement(g,{onClick:()=>e.activateSession(a.name),sessionSnapshot:a,session:e,key:a.name,secondaryAction:s.createElement(y.A,{edge:"end",disabled:e.name===a.name,onClick:()=>r(t)},s.createElement(A.A,null))}))):s.createElement(w.A,{className:a.message},"No saved sessions found")),l?s.createElement(s.Suspense,{fallback:null},s.createElement(O,{open:!0,sessionNameToDelete:l,handleClose:function(a=!1){a&&void 0!==t&&e.removeSavedSession(e.savedSessions[t]),r(void 0)}})):null)})),R=(0,r.observer)((function({session:e}){return s.createElement(s.Fragment,null,s.createElement(b,{session:e}),s.createElement(I,{session:e}))}))},78126:(e,a,t)=>{"use strict";var s=t(92120);a.A=void 0;var r=s(t(33380)),n=t(69500);a.A=(0,r.default)((0,n.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},39312:(e,a,t)=>{"use strict";var s=t(92120);a.A=void 0;var r=s(t(33380)),n=t(69500);a.A=(0,r.default)((0,n.jsx)("path",{d:"M3 14h4v-4H3zm0 5h4v-4H3zM3 9h4V5H3zm5 5h13v-4H8zm0 5h13v-4H8zM8 5v4h13V5z"}),"ViewList")},70087:(e,a,t)=>{"use strict";t.d(a,{A:()=>y});var s=t(83673),r=t(6614),n=t(7552),i=t(93878),o=t(70799),l=t(22991),c=t(51148),u=t(55270),d=t(4785),m=t(83159),p=t(82910),h=t(51584),$=t(57406),v=t(2451),g=t(69500);const f=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],b=(0,c.Ay)(m.A,{shouldForwardProp:e=>(0,u.A)(e)||"classes"===e,name:"MuiListItemButton",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,t.dense&&a.dense,"flex-start"===t.alignItems&&a.alignItemsFlexStart,t.divider&&a.divider,!t.disableGutters&&a.gutters]}})((({theme:e,ownerState:a})=>(0,r.A)({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${v.A.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.X4)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${v.A.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,l.X4)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${v.A.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.X4)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.X4)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${v.A.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${v.A.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},a.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},"flex-start"===a.alignItems&&{alignItems:"flex-start"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.dense&&{paddingTop:4,paddingBottom:4}))),y=n.forwardRef((function(e,a){const t=(0,d.b)({props:e,name:"MuiListItemButton"}),{alignItems:l="center",autoFocus:c=!1,component:u="div",children:m,dense:y=!1,disableGutters:w=!1,divider:A=!1,focusVisibleClassName:x,selected:C=!1,className:k}=t,E=(0,s.A)(t,f),S=n.useContext($.A),O=n.useMemo((()=>({dense:y||S.dense||!1,alignItems:l,disableGutters:w})),[l,S.dense,y,w]),z=n.useRef(null);(0,p.A)((()=>{c&&z.current&&z.current.focus()}),[c]);const I=(0,r.A)({},t,{alignItems:l,dense:O.dense,disableGutters:w,divider:A,selected:C}),R=(e=>{const{alignItems:a,classes:t,dense:s,disabled:n,disableGutters:i,divider:l,selected:c}=e,u={root:["root",s&&"dense",!i&&"gutters",l&&"divider",n&&"disabled","flex-start"===a&&"alignItemsFlexStart",c&&"selected"]},d=(0,o.A)(u,v.Y,t);return(0,r.A)({},t,d)})(I),L=(0,h.A)(z,a);return(0,g.jsx)($.A.Provider,{value:O,children:(0,g.jsx)(b,(0,r.A)({ref:L,href:E.href||E.to,component:(E.href||E.to)&&"div"===u?"button":u,focusVisibleClassName:(0,i.A)(R.focusVisible,x),ownerState:I,className:(0,i.A)(R.root,k)},E,{classes:R,children:m}))})}))},93091:function(e){e.exports=function(){var e=[],a=[],t={},s={},r={};function n(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function i(e,a){return e===a?a:e===e.toLowerCase()?a.toLowerCase():e===e.toUpperCase()?a.toUpperCase():e[0]===e[0].toUpperCase()?a.charAt(0).toUpperCase()+a.substr(1).toLowerCase():a.toLowerCase()}function o(e,a){return e.replace(a[0],(function(t,s){var r,n,o=(r=a[1],n=arguments,r.replace(/\$(\d{1,2})/g,(function(e,a){return n[a]||""})));return i(""===t?e[s-1]:t,o)}))}function l(e,a,s){if(!e.length||t.hasOwnProperty(e))return a;for(var r=s.length;r--;){var n=s[r];if(n[0].test(a))return o(a,n)}return a}function c(e,a,t){return function(s){var r=s.toLowerCase();return a.hasOwnProperty(r)?i(s,r):e.hasOwnProperty(r)?i(s,e[r]):l(r,s,t)}}function u(e,a,t,s){return function(s){var r=s.toLowerCase();return!!a.hasOwnProperty(r)||!e.hasOwnProperty(r)&&l(r,r,t)===r}}function d(e,a,t){return(t?a+" ":"")+(1===a?d.singular(e):d.plural(e))}return d.plural=c(r,s,e),d.isPlural=u(r,s,e),d.singular=c(s,r,a),d.isSingular=u(s,r,a),d.addPluralRule=function(a,t){e.push([n(a),t])},d.addSingularRule=function(e,t){a.push([n(e),t])},d.addUncountableRule=function(e){"string"!=typeof e?(d.addPluralRule(e,"$0"),d.addSingularRule(e,"$0")):t[e.toLowerCase()]=!0},d.addIrregularRule=function(e,a){a=a.toLowerCase(),e=e.toLowerCase(),r[e]=a,s[a]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return d.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return d.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return d.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(d.addUncountableRule),d}()}}]);
//# sourceMappingURL=8259.06c2b445.chunk.js.map