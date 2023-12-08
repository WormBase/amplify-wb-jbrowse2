"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2078],{28776:e=>{function t(e,n,r,o){this.message=e,this.expected=n,this.found=r,this.location=o,this.name="SyntaxError","function"===typeof Error.captureStackTrace&&Error.captureStackTrace(this,t)}!function(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}(t,Error),t.buildMessage=function(e,t){var n={literal:function(e){return'"'+o(e.text)+'"'},class:function(e){var t,n="";for(t=0;t<e.parts.length;t++)n+=e.parts[t]instanceof Array?i(e.parts[t][0])+"-"+i(e.parts[t][1]):i(e.parts[t]);return"["+(e.inverted?"^":"")+n+"]"},any:function(e){return"any character"},end:function(e){return"end of input"},other:function(e){return e.description}};function r(e){return e.charCodeAt(0).toString(16).toUpperCase()}function o(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}function i(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}return"Expected "+function(e){var t,r,o,i=new Array(e.length);for(t=0;t<e.length;t++)i[t]=(o=e[t],n[o.type](o));if(i.sort(),i.length>0){for(t=1,r=1;t<i.length;t++)i[t-1]!==i[t]&&(i[r]=i[t],r++);i.length=r}switch(i.length){case 1:return i[0];case 2:return i[0]+" or "+i[1];default:return i.slice(0,-1).join(", ")+", or "+i[i.length-1]}}(e)+" but "+function(e){return e?'"'+o(e)+'"':"end of input"}(t)+" found."},e.exports={SyntaxError:t,parse:function(e,n){n=void 0!==n?n:{};var r,o={},i={declaration:We},a=We,s="(",c=_e("(",!1),u=")",h=_e(")",!1),l=function(e,t,n,r){return{type:e,name:t,comment:n,fields:r}},m="simple",f=_e("simple",!1),d="object",p=_e("object",!1),g="table",b=_e("table",!1),S="auto",y=_e("auto",!1),k="primary",E=_e("primary",!1),C="index",v=_e("index",!1),A="unique",w=_e("unique",!1),q=function(e,t){return t},x=function(e,t){return e.name&&t.unshift(e),t},N="#",F=_e("#",!1),z=";",R=_e(";",!1),B=function(e,t,n){return{type:e,name:t,comment:n}},D="[",I=_e("[",!1),T="]",G=_e("]",!1),P=function(e,t,n,r){return{type:e,size:t,name:n,comment:r}},M=function(e,t,n,r){return{type:e,vals:t,name:n,comment:r}},_=",",j=_e(",",!1),U=function(e,t){return t.unshift(e),t},O="int",Z=_e("int",!1),L="uint",V=_e("uint",!1),W="short",Y=_e("short",!1),$="ushort",H=_e("ushort",!1),J="byte",K=_e("byte",!1),Q="ubyte",X=_e("ubyte",!1),ee="float",te=_e("float",!1),ne="char",re=_e("char",!1),oe="string",ie=_e("string",!1),ae="lstring",se=_e("lstring",!1),ce="enum",ue=_e("enum",!1),he="double",le=_e("double",!1),me="bigint",fe=_e("bigint",!1),de="set",pe=_e("set",!1),ge=function(e,t){return e+" "+t},be=/^[a-zA-Z_]/,Se=je([["a","z"],["A","Z"],"_"],!1,!1),ye=/^[a-zA-Z0-9_]/,ke=je([["a","z"],["A","Z"],["0","9"],"_"],!1,!1),Ee=function(e){return Me()},Ce=(_e('"',!1),je(['"'],!0,!1),/^[^\n\r]/),ve=je(["\n","\r"],!0,!1),Ae=function(e){return e.join("").replace(/^"/,"").replace(/"$/,"")},we=Ue("integer"),qe=/^[0-9]/,xe=je([["0","9"]],!1,!1),Ne=function(){return parseInt(Me(),10)},Fe=Ue("whitespace"),ze=/^[ \t\n\r]/,Re=je([" ","\t","\n","\r"],!1,!1),Be=0,De=0,Ie=[{line:1,column:1}],Te=0,Ge=[],Pe=0;if("startRule"in n){if(!(n.startRule in i))throw new Error("Can't start parsing from rule \""+n.startRule+'".');a=i[n.startRule]}function Me(){return e.substring(De,Be)}function _e(e,t){return{type:"literal",text:e,ignoreCase:t}}function je(e,t,n){return{type:"class",parts:e,inverted:t,ignoreCase:n}}function Ue(e){return{type:"other",description:e}}function Oe(t){var n,r=Ie[t];if(r)return r;for(n=t-1;!Ie[n];)n--;for(r={line:(r=Ie[n]).line,column:r.column};n<t;)10===e.charCodeAt(n)?(r.line++,r.column=1):r.column++,n++;return Ie[t]=r,r}function Ze(e,t){var n=Oe(e),r=Oe(t);return{start:{offset:e,line:n.line,column:n.column},end:{offset:t,line:r.line,column:r.column}}}function Le(e){Be<Te||(Be>Te&&(Te=Be,Ge=[]),Ge.push(e))}function Ve(e,n,r){return new t(t.buildMessage(e,n),e,n,r)}function We(){var t,n,r,i,a,m,f;return t=Be,nt()!==o&&(n=Ye())!==o&&nt()!==o&&(r=$e())!==o&&nt()!==o&&(i=Je())!==o&&nt()!==o?(40===e.charCodeAt(Be)?(a=s,Be++):(a=o,0===Pe&&Le(c)),a!==o&&nt()!==o?(m=function(){var e,t,n,r,i;if(e=Be,t=Qe(),t!==o)if(nt()!==o){for(n=[],r=Be,nt()!==o&&(i=Qe())!==o?(De=r,r=q(t,i)):(Be=r,r=o);r!==o;)n.push(r),r=Be,nt()!==o&&(i=Qe())!==o?(De=r,r=q(t,i)):(Be=r,r=o);n!==o&&(r=nt())!==o?(De=e,e=t=x(t,n)):(Be=e,e=o)}else Be=e,e=o;else Be=e,e=o;return e}(),m!==o&&nt()!==o?(41===e.charCodeAt(Be)?(f=u,Be++):(f=o,0===Pe&&Le(h)),f!==o&&nt()!==o?(De=t,t=l(n,r,i,m)):(Be=t,t=o)):(Be=t,t=o)):(Be=t,t=o)):(Be=t,t=o),t}function Ye(){var t;return e.substr(Be,6)===m?(t=m,Be+=6):(t=o,0===Pe&&Le(f)),t===o&&(e.substr(Be,6)===d?(t=d,Be+=6):(t=o,0===Pe&&Le(p)),t===o&&(e.substr(Be,5)===g?(t=g,Be+=5):(t=o,0===Pe&&Le(b)))),t}function $e(){var t,n,r,i;return(t=et())===o&&(t=Be,(n=et())!==o&&(r=He())!==o?t=n=[n,r]:(Be=t,t=o),t===o&&(t=Be,(n=et())!==o?(e.substr(Be,4)===S?(r=S,Be+=4):(r=o,0===Pe&&Le(y)),r!==o?t=n=[n,r]:(Be=t,t=o)):(Be=t,t=o),t===o&&(t=Be,(n=et())!==o&&(r=He())!==o?(e.substr(Be,4)===S?(i=S,Be+=4):(i=o,0===Pe&&Le(y)),i!==o?t=n=[n,r,i]:(Be=t,t=o)):(Be=t,t=o)))),t}function He(){var t;return e.substr(Be,7)===k?(t=k,Be+=7):(t=o,0===Pe&&Le(E)),t===o&&(e.substr(Be,5)===C?(t=C,Be+=5):(t=o,0===Pe&&Le(v)),t===o&&(e.substr(Be,6)===A?(t=A,Be+=6):(t=o,0===Pe&&Le(w)))),t}function Je(){var e;return(e=tt())===o&&(e=nt()),e}function Ke(){var t,n,r,i,a;return t=Be,(n=nt())!==o?(r=function(){var t;return 35===e.charCodeAt(Be)?(t=N,Be++):(t=o,0===Pe&&Le(F)),t}(),r!==o&&(i=tt())!==o&&(a=nt())!==o?t=n=[n,r,i,a]:(Be=t,t=o)):(Be=t,t=o),t}function Qe(){var t,n,r,i,a,l,m,f;return t=Be,(n=Xe())!==o&&nt()!==o&&(r=et())!==o&&nt()!==o?(59===e.charCodeAt(Be)?(i=z,Be++):(i=o,0===Pe&&Le(R)),i!==o&&nt()!==o&&(a=Je())!==o?(De=t,t=n=B(n,r,a)):(Be=t,t=o)):(Be=t,t=o),t===o&&(t=Be,(n=Xe())!==o&&nt()!==o?(91===e.charCodeAt(Be)?(r=D,Be++):(r=o,0===Pe&&Le(I)),r!==o&&nt()!==o?(i=function(){var t;t=function(){var t,n,r,i;if(Pe++,t=Be,n=nt(),n!==o){if(r=[],qe.test(e.charAt(Be))?(i=e.charAt(Be),Be++):(i=o,0===Pe&&Le(xe)),i!==o)for(;i!==o;)r.push(i),qe.test(e.charAt(Be))?(i=e.charAt(Be),Be++):(i=o,0===Pe&&Le(xe));else r=o;r!==o?(De=t,t=n=Ne()):(Be=t,t=o)}else Be=t,t=o;Pe--,t===o&&(n=o,0===Pe&&Le(we));return t}(),t===o&&(t=et());return t}(),i!==o&&nt()!==o?(93===e.charCodeAt(Be)?(a=T,Be++):(a=o,0===Pe&&Le(G)),a!==o&&nt()!==o&&(l=et())!==o&&nt()!==o?(59===e.charCodeAt(Be)?(m=z,Be++):(m=o,0===Pe&&Le(R)),m!==o&&nt()!==o&&(f=Je())!==o?(De=t,t=n=P(n,i,l,f)):(Be=t,t=o)):(Be=t,t=o)):(Be=t,t=o)):(Be=t,t=o)):(Be=t,t=o),t===o&&(t=Be,(n=Xe())!==o&&nt()!==o?(40===e.charCodeAt(Be)?(r=s,Be++):(r=o,0===Pe&&Le(c)),r!==o&&nt()!==o?(i=function(){var t,n,r,i,a,s;if(t=Be,n=et(),n!==o){for(r=[],i=Be,44===e.charCodeAt(Be)?(a=_,Be++):(a=o,0===Pe&&Le(j)),a!==o&&nt()!==o&&(s=et())!==o?(De=i,i=a=q(n,s)):(Be=i,i=o);i!==o;)r.push(i),i=Be,44===e.charCodeAt(Be)?(a=_,Be++):(a=o,0===Pe&&Le(j)),a!==o&&nt()!==o&&(s=et())!==o?(De=i,i=a=q(n,s)):(Be=i,i=o);r!==o?(De=t,t=n=U(n,r)):(Be=t,t=o)}else Be=t,t=o;return t}(),i!==o&&nt()!==o?(41===e.charCodeAt(Be)?(a=u,Be++):(a=o,0===Pe&&Le(h)),a!==o&&nt()!==o&&(l=et())!==o&&nt()!==o?(59===e.charCodeAt(Be)?(m=z,Be++):(m=o,0===Pe&&Le(R)),m!==o&&nt()!==o&&(f=Je())!==o?(De=t,t=n=M(n,i,l,f)):(Be=t,t=o)):(Be=t,t=o)):(Be=t,t=o)):(Be=t,t=o)):(Be=t,t=o),t===o&&(t=Ke()))),t}function Xe(){var t,n,r;return e.substr(Be,3)===O?(t=O,Be+=3):(t=o,0===Pe&&Le(Z)),t===o&&(e.substr(Be,4)===L?(t=L,Be+=4):(t=o,0===Pe&&Le(V)),t===o&&(e.substr(Be,5)===W?(t=W,Be+=5):(t=o,0===Pe&&Le(Y)),t===o&&(e.substr(Be,6)===$?(t=$,Be+=6):(t=o,0===Pe&&Le(H)),t===o&&(e.substr(Be,4)===J?(t=J,Be+=4):(t=o,0===Pe&&Le(K)),t===o&&(e.substr(Be,5)===Q?(t=Q,Be+=5):(t=o,0===Pe&&Le(X)),t===o&&(e.substr(Be,5)===ee?(t=ee,Be+=5):(t=o,0===Pe&&Le(te)),t===o&&(e.substr(Be,4)===ne?(t=ne,Be+=4):(t=o,0===Pe&&Le(re)),t===o&&(e.substr(Be,6)===oe?(t=oe,Be+=6):(t=o,0===Pe&&Le(ie)),t===o&&(e.substr(Be,7)===ae?(t=ae,Be+=7):(t=o,0===Pe&&Le(se)),t===o&&(e.substr(Be,4)===ce?(t=ce,Be+=4):(t=o,0===Pe&&Le(ue)),t===o&&(e.substr(Be,6)===he?(t=he,Be+=6):(t=o,0===Pe&&Le(le)),t===o&&(e.substr(Be,6)===me?(t=me,Be+=6):(t=o,0===Pe&&Le(fe)),t===o&&(e.substr(Be,3)===de?(t=de,Be+=3):(t=o,0===Pe&&Le(pe)),t===o&&(t=Be,(n=Ye())!==o&&nt()!==o&&(r=$e())!==o?(De=t,t=n=ge(n,r)):(Be=t,t=o))))))))))))))),t}function et(){var t,n,r,i,a;if(t=Be,n=Be,be.test(e.charAt(Be))?(r=e.charAt(Be),Be++):(r=o,0===Pe&&Le(Se)),r!==o){for(i=[],ye.test(e.charAt(Be))?(a=e.charAt(Be),Be++):(a=o,0===Pe&&Le(ke));a!==o;)i.push(a),ye.test(e.charAt(Be))?(a=e.charAt(Be),Be++):(a=o,0===Pe&&Le(ke));i!==o?n=r=[r,i]:(Be=n,n=o)}else Be=n,n=o;return n!==o&&(De=t,n=Ee(n)),t=n}function tt(){var t,n,r;for(t=Be,n=[],Ce.test(e.charAt(Be))?(r=e.charAt(Be),Be++):(r=o,0===Pe&&Le(ve));r!==o;)n.push(r),Ce.test(e.charAt(Be))?(r=e.charAt(Be),Be++):(r=o,0===Pe&&Le(ve));return n!==o&&(De=t,n=Ae(n)),t=n}function nt(){var t,n;for(Pe++,t=[],ze.test(e.charAt(Be))?(n=e.charAt(Be),Be++):(n=o,0===Pe&&Le(Re));n!==o;)t.push(n),ze.test(e.charAt(Be))?(n=e.charAt(Be),Be++):(n=o,0===Pe&&Le(Re));return Pe--,t===o&&(n=o,0===Pe&&Le(Fe)),t}if((r=a())!==o&&Be===e.length)return r;throw r!==o&&Be<e.length&&Le({type:"end"}),Ve(Ge,Te<e.length?e.charAt(Te):null,Te<e.length?Ze(Te,Te+1):Ze(Te,Te))}}},32078:(e,t,n)=>{n.d(t,{Z:()=>y});var r={};n.r(r),n.d(r,{bigChain:()=>a,bigGenePred:()=>s,bigInteract:()=>c,bigLink:()=>u,bigMaf:()=>h,bigNarrowPeak:()=>l,bigPsl:()=>m,defaultBedSchema:()=>f,mafFrames:()=>d,mafSummary:()=>p});var o=n(28776),i=n.n(o);const a='table bigChain\n"bigChain pairwise alignment"\n    (\n    string chrom;       "Reference sequence chromosome or scaffold"\n    uint   chromStart;  "Start position in chromosome"\n    uint   chromEnd;    "End position in chromosome"\n    string name;        "Name or ID of item, ideally both human readable and unique"\n    uint score;         "Score (0-1000)"\n    char[1] strand;     "+ or - for strand"\n    uint tSize;         "size of target sequence"\n    string qName;       "name of query sequence"\n    uint qSize;         "size of query sequence"\n    uint qStart;        "start of alignment on query sequence"\n    uint qEnd;          "end of alignment on query sequence"\n    uint chainScore;    "score from chain"\n    )',s='table bigGenePred\n"bigGenePred gene models"\n   (\n   string chrom;       "Reference sequence chromosome or scaffold"\n   uint   chromStart;  "Start position in chromosome"\n   uint   chromEnd;    "End position in chromosome"\n   string name;        "Name or ID of item, ideally both human readable and unique"\n   uint score;         "Score (0-1000)"\n   char[1] strand;     "+ or - for strand"\n   uint thickStart;    "Start of where display should be thick (start codon)"\n   uint thickEnd;      "End of where display should be thick (stop codon)"\n   uint reserved;       "RGB value (use R,G,B string in input file)"\n   int blockCount;     "Number of blocks"\n   int[blockCount] blockSizes; "Comma separated list of block sizes"\n   int[blockCount] chromStarts; "Start positions relative to chromStart"\n   string name2;       "Alternative/human readable name"\n   string cdsStartStat; "Status of CDS start annotation (none, unknown, incomplete, or complete)"\n   string cdsEndStat;   "Status of CDS end annotation (none, unknown, incomplete, or complete)"\n   int[blockCount] exonFrames; "Exon frame {0,1,2}, or -1 if no frame for exon"\n   string type;        "Transcript type"\n   string geneName;    "Primary identifier for gene"\n   string geneName2;   "Alternative/human readable gene name"\n   string geneType;    "Gene type"\n   )',c='table interact\n"interaction between two regions"\n    (\n    string chrom;        "Chromosome (or contig, scaffold, etc.). For interchromosomal, use 2 records"\n    uint chromStart;     "Start position of lower region. For interchromosomal, set to chromStart of this region"\n    uint chromEnd;       "End position of upper region. For interchromosomal, set to chromEnd of this region"\n    string name;         "Name of item, for display.  Usually \'sourceName/targetName/exp\' or empty"\n    uint score;          "Score (0-1000)"\n    double value;        "Strength of interaction or other data value. Typically basis for score"\n    string exp;          "Experiment name (metadata for filtering). Use . if not applicable"\n    string color;        "Item color.  Specified as r,g,b or hexadecimal #RRGGBB or html color name, as in //www.w3.org/TR/css3-color/#html4. Use 0 and spectrum setting to shade by score"\n    string sourceChrom;  "Chromosome of source region (directional) or lower region. For non-directional interchromosomal, chrom of this region."\n    uint sourceStart;    "Start position in chromosome of source/lower/this region"\n    uint sourceEnd;      "End position in chromosome of source/lower/this region"\n    string sourceName;   "Identifier of source/lower/this region"\n    string sourceStrand; "Orientation of source/lower/this region: + or -.  Use . if not applicable"\n    string targetChrom;  "Chromosome of target region (directional) or upper region. For non-directional interchromosomal, chrom of other region"\n    uint targetStart;    "Start position in chromosome of target/upper/this region"\n    uint targetEnd;      "End position in chromosome of target/upper/this region"\n    string targetName;   "Identifier of target/upper/this region"\n    string targetStrand; "Orientation of target/upper/this region: + or -.  Use . if not applicable"\n\n    )',u='table bigLink\n"bigLink pairwise alignment"\n    (\n    string chrom;       "Reference sequence chromosome or scaffold"\n    uint   chromStart;  "Start position in chromosome"\n    uint   chromEnd;    "End position in chromosome"\n    string name;        "Name or ID of item, ideally both human readable and unique"\n    uint qStart;        "start of alignment on query sequence"\n    )',h='table bedMaf\n"Bed3 with MAF block"\n    (\n    string chrom;      "Reference sequence chromosome or scaffold"\n    uint   chromStart; "Start position in chromosome"\n    uint   chromEnd;   "End position in chromosome"\n    lstring mafBlock;   "MAF block"\n    )',l='table bigNarrowPeak\n"BED6+4 Peaks of signal enrichment based on pooled, normalized (interpreted) data."\n(\n    string chrom;        "Reference sequence chromosome or scaffold"\n    uint   chromStart;   "Start position in chromosome"\n    uint   chromEnd;     "End position in chromosome"\n    string name;\t "Name given to a region (preferably unique). Use . if no name is assigned"\n    uint   score;        "Indicates how dark the peak will be displayed in the browser (0-1000) "\n    char[1]  strand;     "+ or - or . for unknown"\n    float  signalValue;  "Measurement of average enrichment for the region"\n    float  pValue;       "Statistical significance of signal value (-log10). Set to -1 if not used."\n    float  qValue;       "Statistical significance with multiple-test correction applied (FDR -log10). Set to -1 if not used."\n    int   peak;         "Point-source called for this peak; 0-based offset from chromStart. Set to -1 if no point-source called."\n)',m='table bigPsl\n"bigPsl pairwise alignment"\n    (\n    string chrom;       "Reference sequence chromosome or scaffold"\n    uint   chromStart;  "Start position in chromosome"\n    uint   chromEnd;    "End position in chromosome"\n    string name;        "Name or ID of item, ideally both human readable and unique"\n    uint score;         "Score (0-1000)"\n    char[1] strand;     "+ or - indicates whether the query aligns to the + or - strand on the reference"\n    uint thickStart;    "Start of where display should be thick (start codon)"\n    uint thickEnd;      "End of where display should be thick (stop codon)"\n    uint reserved;       "RGB value (use R,G,B string in input file)"\n    int blockCount;     "Number of blocks"\n    int[blockCount] blockSizes; "Comma separated list of block sizes"\n    int[blockCount] chromStarts; "Start positions relative to chromStart"\n\n    uint    oChromStart;"Start position in other chromosome"\n    uint    oChromEnd;  "End position in other chromosome"\n    char[1] oStrand;    "+ or -, - means that psl was reversed into BED-compatible coordinates"\n    uint    oChromSize; "Size of other chromosome."\n    int[blockCount] oChromStarts; "Start positions relative to oChromStart or from oChromStart+oChromSize depending on strand"\n\n    lstring  oSequence;  "Sequence on other chrom (or empty)"\n    string   oCDS;       "CDS in NCBI format"\n\n    uint    chromSize;"Size of target chromosome"\n\n    uint match;        "Number of bases matched."\n    uint misMatch; " Number of bases that don\'t match "\n    uint repMatch; " Number of bases that match but are part of repeats "\n    uint nCount;   " Number of \'N\' bases "\n    uint seqType;    "0=empty, 1=nucleotide, 2=amino_acid"\n    )',f='table defaultBedSchema\n"BED12"\n    (\n    string chrom;      "The name of the chromosome (e.g. chr3, chrY, chr2_random) or scaffold (e.g. scaffold10671)."\n    uint   chromStart; "The starting position of the feature in the chromosome or scaffold. The first base in a chromosome is numbered 0."\n    uint   chromEnd;   "The ending position of the feature in the chromosome or scaffold. The chromEnd base is not included in the display of the feature. For example, the first 100 bases of a chromosome are defined as chromStart=0, chromEnd=100, and span the bases numbered 0-99."\n    string   name;   "Defines the name of the BED line."\n    float   score;   "Feature score, doesn\'t care about the 0-1000 limit as in bed"\n    char   strand;   "Defines the strand. Either \'.\' (=no strand) or \'+\' or \'-\'"\n    uint thickStart; "The starting position at which the feature is drawn thickly (for example, the start codon in gene displays). When there is no thick part, thickStart and thickEnd are usually set to the chromStart position."\n    uint thickEnd; "The ending position at which the feature is drawn thickly (for example the stop codon in gene displays)."\n    string itemRgb; "An RGB value of the form R,G,B (e.g. 255,0,0). "\n    uint blockCount; " The number of blocks (exons) in the BED line."\n    uint[blockCount] blockSizes; " A comma-separated list of the block sizes. The number of items in this list should correspond to blockCount."\n    uint[blockCount] blockStarts; "A comma-separated list of block starts. All of the blockStart positions should be calculated relative to chromStart. The number of items in this list should correspond to blockCount."\n    )',d='table mafFrames\n"codon frame assignment for MAF components"\n    (\n    string chrom;      "Reference sequence chromosome or scaffold"\n    uint   chromStart; "Start range in chromosome"\n    uint   chromEnd;   "End range in chromosome"\n    string src;        "Name of sequence source in MAF"\n    ubyte frame;       "frame (0,1,2) for first base(+) or last bast(-)"\n    char[1] strand;    "+ or -"\n    string name;       "Name of gene used to define frame"\n    int    prevFramePos;  "target position of the previous base (in transcription direction) that continues this frame, or -1 if none, or frame not contiguous"\n    int    nextFramePos;  "target position of the next base (in transcription direction) that continues this frame, or -1 if none, or frame not contiguous"\n    ubyte  isExonStart;  "does this start the CDS portion of an exon?"\n    ubyte  isExonEnd;    "does this end the CDS portion of an exon?"\n    )',p='table mafSummary\n"Positions and scores for alignment blocks"\n    (\n    string chrom;      "Reference sequence chromosome or scaffold"\n    uint   chromStart; "Start position in chromosome"\n    uint   chromEnd;   "End position in chromosome"\n    string src;        "Sequence name or database of alignment"\n    float  score;      "Floating point score."\n    char[1] leftStatus;  "Gap/break annotation for preceding block"\n    char[1] rightStatus; "Gap/break annotation for following block"\n    )',g=Object.fromEntries(Object.entries(r).map((e=>{let[t,n]=e;return[t,(0,o.parse)(n.trim())]})));function b(e){const t=["uint","int","float","long"];return{...e,fields:e.fields.map((e=>({...e,isArray:e.size&&"char"!==e.type,arrayIsNumeric:e.size&&t.includes(e.type),isNumeric:!e.size&&t.includes(e.type)})))}}const S={".":0,"-":-1,"+":1};const y=class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.autoSql)this.autoSql=b(i().parse(e.autoSql));else if(e.type){if(!g[e.type])throw new Error("Type not found");this.autoSql=b(g[e.type])}else this.autoSql=b(g.defaultBedSchema),this.attemptDefaultBed=!0}parseLine(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{autoSql:n}=this,{uniqueId:r}=t,o=Array.isArray(e)?e:e.split("\t");let i={};if(!this.attemptDefaultBed||this.attemptDefaultBed&&function(e){var t;return e.length>=12&&!Number.isNaN(parseInt(e[9],10))&&(null===(t=e[10])||void 0===t?void 0:t.split(",").filter((e=>!!e)).length)===parseInt(e[9],10)}(o))for(let a=0;a<n.fields.length;a++){const e=n.fields[a];let t=o[a];const{isNumeric:r,isArray:s,arrayIsNumeric:c,name:u}=e;if(null===t||void 0===t)break;if("."!==t){if(r){const e=Number(t);t=Number.isNaN(e)?t:e}else s&&(t=t.split(","),""===t[t.length-1]&&t.pop(),c&&(t=t.map((e=>Number(e)))));i[u]=t}}else{const e=["chrom","chromStart","chromEnd","name"];i=Object.fromEntries(o.map(((t,n)=>[e[n]||"field"+n,t]))),i.chromStart=+i.chromStart,i.chromEnd=+i.chromEnd,Number.isNaN(Number.parseFloat(i.field4))||(i.score=+i.field4,delete i.field4),"+"!==i.field5&&"-"!==i.field5||(i.strand=i.field5,delete i.field5)}return r&&(i.uniqueId=r),i.strand=S[i.strand]||0,i.chrom=decodeURIComponent(i.chrom),i}}}}]);
//# sourceMappingURL=2078.31dcc1b6.chunk.js.map