(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2799],{10814:function(e,a,r){"use strict";var t=r(71600);a.Z=void 0;var o=t(r(48035)),i=r(37574),s=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");a.Z=s},50501:function(e,a,r){"use strict";var t=r(7896),o=r(31461),i=r(30969),s=r(87023),n=r(26540),l=r(45971),u=r(17363),c=r(34096),d=r(37574),h=["className"],m=(0,l.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,a){return a.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),p=i.forwardRef((function(e,a){var r=(0,u.Z)({props:e,name:"MuiAccordionDetails"}),i=r.className,l=(0,o.Z)(r,h),p=r,f=function(e){var a=e.classes;return(0,n.Z)({root:["root"]},c.s,a)}(p);return(0,d.jsx)(m,(0,t.Z)({className:(0,s.Z)(f.root,i),ref:a,ownerState:p},l))}));a.Z=p},34096:function(e,a,r){"use strict";r.d(a,{s:function(){return i}});var t=r(62746),o=r(2975);function i(e){return(0,o.Z)("MuiAccordionDetails",e)}var s=(0,t.Z)("MuiAccordionDetails",["root"]);a.Z=s},37626:function(e,a,r){"use strict";var t=r(56666),o=r(31461),i=r(7896),s=r(30969),n=r(87023),l=r(26540),u=r(33359),c=r(17363),d=r(45971),h=r(54127),m=r(37574),p=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],f=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,a){var r;return(0,i.Z)((r={},(0,t.Z)(r,"& .".concat(h.Z.title),a.title),(0,t.Z)(r,"& .".concat(h.Z.subheader),a.subheader),r),a.root)}})({display:"flex",alignItems:"center",padding:16}),$=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,a){return a.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,a){return a.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,a){return a.content}})({flex:"1 1 auto"}),y=s.forwardRef((function(e,a){var r=(0,c.Z)({props:e,name:"MuiCardHeader"}),t=r.action,s=r.avatar,d=r.className,y=r.component,b=void 0===y?"div":y,w=r.disableTypography,x=void 0!==w&&w,Z=r.subheader,C=r.subheaderTypographyProps,R=r.title,k=r.titleTypographyProps,P=(0,o.Z)(r,p),j=(0,i.Z)({},r,{component:b,disableTypography:x}),M=function(e){var a=e.classes;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h.J,a)}(j),z=R;null==z||z.type===u.Z||x||(z=(0,m.jsx)(u.Z,(0,i.Z)({variant:s?"body2":"h5",className:M.title,component:"span",display:"block"},k,{children:z})));var N=Z;return null==N||N.type===u.Z||x||(N=(0,m.jsx)(u.Z,(0,i.Z)({variant:s?"body2":"body1",className:M.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:N}))),(0,m.jsxs)(f,(0,i.Z)({className:(0,n.Z)(M.root,d),as:b,ref:a,ownerState:j},P,{children:[s&&(0,m.jsx)($,{className:M.avatar,ownerState:j,children:s}),(0,m.jsxs)(g,{className:M.content,ownerState:j,children:[z,N]}),t&&(0,m.jsx)(v,{className:M.action,ownerState:j,children:t})]}))}));a.Z=y},54127:function(e,a,r){"use strict";r.d(a,{J:function(){return i}});var t=r(62746),o=r(2975);function i(e){return(0,o.Z)("MuiCardHeader",e)}var s=(0,t.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);a.Z=s},74125:function(e){e.exports=function(){var e=[],a=[],r={},t={},o={};function i(e){return"string"===typeof e?new RegExp("^"+e+"$","i"):e}function s(e,a){return e===a?a:e===e.toLowerCase()?a.toLowerCase():e===e.toUpperCase()?a.toUpperCase():e[0]===e[0].toUpperCase()?a.charAt(0).toUpperCase()+a.substr(1).toLowerCase():a.toLowerCase()}function n(e,a){return e.replace(/\$(\d{1,2})/g,(function(e,r){return a[r]||""}))}function l(e,a){return e.replace(a[0],(function(r,t){var o=n(a[1],arguments);return s(""===r?e[t-1]:r,o)}))}function u(e,a,t){if(!e.length||r.hasOwnProperty(e))return a;for(var o=t.length;o--;){var i=t[o];if(i[0].test(a))return l(a,i)}return a}function c(e,a,r){return function(t){var o=t.toLowerCase();return a.hasOwnProperty(o)?s(t,o):e.hasOwnProperty(o)?s(t,e[o]):u(o,t,r)}}function d(e,a,r,t){return function(t){var o=t.toLowerCase();return!!a.hasOwnProperty(o)||!e.hasOwnProperty(o)&&u(o,o,r)===o}}function h(e,a,r){return(r?a+" ":"")+(1===a?h.singular(e):h.plural(e))}return h.plural=c(o,t,e),h.isPlural=d(o,t,e),h.singular=c(t,o,a),h.isSingular=d(t,o,a),h.addPluralRule=function(a,r){e.push([i(a),r])},h.addSingularRule=function(e,r){a.push([i(e),r])},h.addUncountableRule=function(e){"string"!==typeof e?(h.addPluralRule(e,"$0"),h.addSingularRule(e,"$0")):r[e.toLowerCase()]=!0},h.addIrregularRule=function(e,a){a=a.toLowerCase(),e=e.toLowerCase(),o[e]=a,t[a]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return h.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return h.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return h.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[e\xe9]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(h.addUncountableRule),h}()}}]);
//# sourceMappingURL=2799.b89b337f.chunk.js.map