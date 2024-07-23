import{$ as k2,B as B1,C as R1,D as L,E as C,G as w2,J as E,K as E1,L as N,N as b,O as S,P as j,Q as U1,R as I1,S as O1,T as Y,U as W1,V as q1,W as G1,_ as X,aa as _1,ca as U,d as y1,da as Q2,ea as j1,fa as Y1,ha as X1,ja as y2,ka as i2,l as B,m as A1,ma as n2,p as P1,q as R,qa as $1,r as T1,s as x2,sa as Q1,t as N2,ua as K1,v as b2,w as D1,wa as J1,x as F1,y as S2}from"./chunk-44OHCROT.js";var Z1=c=>{let{kind:a,etag:r}=c,{totalResults:e,resultsPerPage:s}=c.pageInfo,i={totalResults:e,resultsPerPage:s},n=c.items.map(f=>{let t={default:{url:f.snippet.thumbnails.default.url,width:f.snippet.thumbnails.default.width,height:f.snippet.thumbnails.default.height},medium:{url:f.snippet.thumbnails.medium.url,width:f.snippet.thumbnails.medium.width,height:f.snippet.thumbnails.medium.height},high:{url:f.snippet.thumbnails.high.url,width:f.snippet.thumbnails.high.width,height:f.snippet.thumbnails.high.height},standard:f.snippet.thumbnails.standard?{url:f.snippet.thumbnails.standard.url,width:f.snippet.thumbnails.standard.width,height:f.snippet.thumbnails.standard.height}:void 0,maxres:f.snippet.thumbnails.maxres?{url:f.snippet.thumbnails.maxres.url,width:f.snippet.thumbnails.maxres.width,height:f.snippet.thumbnails.maxres.height}:void 0};return{kind:f.kind,etag:f.etag,id:f.id,snippet:{publishedAt:f.snippet.publishedAt,channelId:f.snippet.channelId,title:f.snippet.title,description:f.snippet.description,thumbnails:t,channelTitle:f.snippet.channelTitle,tags:f.snippet.tags,categoryId:f.snippet.categoryId,liveBroadcastContent:f.snippet.liveBroadcastContent,localized:f.snippet.localized,defaultAudioLanguage:f.snippet.defaultAudioLanguage},statistics:{viewCount:f.statistics.viewCount,likeCount:f.statistics.likeCount,dislikeCount:f.statistics.dislikeCount,favoriteCount:f.statistics.favoriteCount,commentCount:f.statistics.commentCount}}});return{kind:a,etag:r,pageInfo:i,items:n}};var f2=function(c){return c.Blue="#007BFF",c.Green="#28A745",c.Yellow="#FFC107",c.Red="#DC3545",c.Default="#2f80ed",c}(f2||{}),c3=(()=>{let a=class a{constructor(e,s){this.el=e,this.renderer=s}ngOnInit(){let e=new Date(this.appDateBackground),s=this.appDateBackground?this.getBorderColor(e):f2.Default;this.renderer.setStyle(this.el.nativeElement,"backgroundColor",s)}getBorderColor(e){let i=(new Date().getTime()-e.getTime())/(1e3*3600*24);switch(!0){case i<a.DAYS_IN_A_WEEK:return f2.Blue;case i<a.DAYS_IN_A_MONTH:return f2.Green;case i<a.DAYS_IN_SIX_MONTHS:return f2.Yellow;default:return f2.Red}}};a.DAYS_IN_A_WEEK=7,a.DAYS_IN_A_MONTH=30,a.DAYS_IN_SIX_MONTHS=180,a.\u0275fac=function(s){return new(s||a)(C(S2),C(w2))},a.\u0275dir=x2({type:a,selectors:[["","appDateBackground",""]],inputs:{appDateBackground:"appDateBackground"},standalone:!0});let c=a;return c})();function a3(c,a){var r=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),r.push.apply(r,e)}return r}function m(c){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?a3(Object(r),!0).forEach(function(e){u(c,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(r)):a3(Object(r)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(r,e))})}return c}function W2(c){"@babel/helpers - typeof";return W2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},W2(c)}function h4(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function e3(c,a){for(var r=0;r<a.length;r++){var e=a[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function p4(c,a,r){return a&&e3(c.prototype,a),r&&e3(c,r),Object.defineProperty(c,"prototype",{writable:!1}),c}function u(c,a,r){return a in c?Object.defineProperty(c,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):c[a]=r,c}function H1(c,a){return u4(c)||d4(c,a)||S3(c,a)||g4()}function d2(c){return M4(c)||C4(c)||S3(c)||L4()}function M4(c){if(Array.isArray(c))return a1(c)}function u4(c){if(Array.isArray(c))return c}function C4(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function d4(c,a){var r=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(r!=null){var e=[],s=!0,i=!1,n,l;try{for(r=r.call(c);!(s=(n=r.next()).done)&&(e.push(n.value),!(a&&e.length===a));s=!0);}catch(f){i=!0,l=f}finally{try{!s&&r.return!=null&&r.return()}finally{if(i)throw l}}return e}}function S3(c,a){if(c){if(typeof c=="string")return a1(c,a);var r=Object.prototype.toString.call(c).slice(8,-1);if(r==="Object"&&c.constructor&&(r=c.constructor.name),r==="Map"||r==="Set")return Array.from(c);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a1(c,a)}}function a1(c,a){(a==null||a>c.length)&&(a=c.length);for(var r=0,e=new Array(a);r<a;r++)e[r]=c[r];return e}function L4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r3=function(){},z1={},w3={},k3=null,y3={mark:r3,measure:r3};try{typeof window<"u"&&(z1=window),typeof document<"u"&&(w3=document),typeof MutationObserver<"u"&&(k3=MutationObserver),typeof performance<"u"&&(y3=performance)}catch{}var x4=z1.navigator||{},s3=x4.userAgent,i3=s3===void 0?"":s3,Q=z1,p=w3,n3=k3,A2=y3,C0=!!Q.document,G=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",A3=~i3.indexOf("MSIE")||~i3.indexOf("Trident/"),P2,T2,D2,F2,B2,O="___FONT_AWESOME___",e1=16,P3="fa",T3="svg-inline--fa",r2="data-fa-i2svg",r1="data-fa-pseudo-element",N4="data-fa-pseudo-element-pending",v1="data-prefix",V1="data-icon",f3="fontawesome-i2svg",b4="async",S4=["HTML","HEAD","STYLE","SCRIPT"],D3=function(){try{return!0}catch{return!1}}(),h="classic",M="sharp",h1=[h,M];function L2(c){return new Proxy(c,{get:function(r,e){return e in r?r[e]:r[h]}})}var h2=L2((P2={},u(P2,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),u(P2,M,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),P2)),p2=L2((T2={},u(T2,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),u(T2,M,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),T2)),M2=L2((D2={},u(D2,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),u(D2,M,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),D2)),w4=L2((F2={},u(F2,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),u(F2,M,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),F2)),k4=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,F3="fa-layers-text",y4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,A4=L2((B2={},u(B2,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),u(B2,M,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),B2)),B3=[1,2,3,4,5,6,7,8,9,10],P4=B3.concat([11,12,13,14,15,16,17,18,19,20]),T4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],a2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},u2=new Set;Object.keys(p2[h]).map(u2.add.bind(u2));Object.keys(p2[M]).map(u2.add.bind(u2));var D4=[].concat(h1,d2(u2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",a2.GROUP,a2.SWAP_OPACITY,a2.PRIMARY,a2.SECONDARY]).concat(B3.map(function(c){return"".concat(c,"x")})).concat(P4.map(function(c){return"w-".concat(c)})),v2=Q.FontAwesomeConfig||{};function F4(c){var a=p.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function B4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}p&&typeof p.querySelector=="function"&&(l3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],l3.forEach(function(c){var a=H1(c,2),r=a[0],e=a[1],s=B4(F4(r));s!=null&&(v2[e]=s)}));var l3,R3={styleDefault:"solid",familyDefault:"classic",cssPrefix:P3,replacementClass:T3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};v2.familyPrefix&&(v2.cssPrefix=v2.familyPrefix);var m2=m(m({},R3),v2);m2.autoReplaceSvg||(m2.observeMutations=!1);var z={};Object.keys(R3).forEach(function(c){Object.defineProperty(z,c,{enumerable:!0,set:function(r){m2[c]=r,V2.forEach(function(e){return e(z)})},get:function(){return m2[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(a){m2.cssPrefix=a,V2.forEach(function(r){return r(z)})},get:function(){return m2.cssPrefix}});Q.FontAwesomeConfig=z;var V2=[];function R4(c){return V2.push(c),function(){V2.splice(V2.indexOf(c),1)}}var $=e1,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function E4(c){if(!(!c||!G)){var a=p.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var r=p.head.childNodes,e=null,s=r.length-1;s>-1;s--){var i=r[s],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=i)}return p.head.insertBefore(a,e),c}}var U4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function C2(){for(var c=12,a="";c-- >0;)a+=U4[Math.random()*62|0];return a}function H2(c){for(var a=[],r=(c||[]).length>>>0;r--;)a[r]=c[r];return a}function p1(c){return c.classList?H2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function E3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function I4(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,'="').concat(E3(c[r]),'" ')},"").trim()}function _2(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,": ").concat(c[r].trim(),";")},"")}function M1(c){return c.size!==F.size||c.x!==F.x||c.y!==F.y||c.rotate!==F.rotate||c.flipX||c.flipY}function O4(c){var a=c.transform,r=c.containerWidth,e=c.iconWidth,s={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(i," ").concat(n," ").concat(l)},t={transform:"translate(".concat(e/2*-1," -256)")};return{outer:s,inner:f,path:t}}function W4(c){var a=c.transform,r=c.width,e=r===void 0?e1:r,s=c.height,i=s===void 0?e1:s,n=c.startCentered,l=n===void 0?!1:n,f="";return l&&A3?f+="translate(".concat(a.x/$-e/2,"em, ").concat(a.y/$-i/2,"em) "):l?f+="translate(calc(-50% + ".concat(a.x/$,"em), calc(-50% + ").concat(a.y/$,"em)) "):f+="translate(".concat(a.x/$,"em, ").concat(a.y/$,"em) "),f+="scale(".concat(a.size/$*(a.flipX?-1:1),", ").concat(a.size/$*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var q4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function U3(){var c=P3,a=T3,r=z.cssPrefix,e=z.replacementClass,s=q4;if(r!==c||e!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");s=s.replace(i,".".concat(r,"-")).replace(n,"--".concat(r,"-")).replace(l,".".concat(e))}return s}var o3=!1;function K2(){z.autoAddCss&&!o3&&(E4(U3()),o3=!0)}var G4={mixout:function(){return{dom:{css:U3,insertCss:K2}}},hooks:function(){return{beforeDOMElementCreation:function(){K2()},beforeI2svg:function(){K2()}}}},W=Q||{};W[O]||(W[O]={});W[O].styles||(W[O].styles={});W[O].hooks||(W[O].hooks={});W[O].shims||(W[O].shims=[]);var P=W[O],I3=[],_4=function c(){p.removeEventListener("DOMContentLoaded",c),q2=1,I3.map(function(a){return a()})},q2=!1;G&&(q2=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),q2||p.addEventListener("DOMContentLoaded",_4));function j4(c){G&&(q2?setTimeout(c,0):I3.push(c))}function g2(c){var a=c.tag,r=c.attributes,e=r===void 0?{}:r,s=c.children,i=s===void 0?[]:s;return typeof c=="string"?E3(c):"<".concat(a," ").concat(I4(e),">").concat(i.map(g2).join(""),"</").concat(a,">")}function t3(c,a,r){if(c&&c[a]&&c[a][r])return{prefix:a,iconName:r,icon:c[a][r]}}var Y4=function(a,r){return function(e,s,i,n){return a.call(r,e,s,i,n)}},J2=function(a,r,e,s){var i=Object.keys(a),n=i.length,l=s!==void 0?Y4(r,s):r,f,t,o;for(e===void 0?(f=1,o=a[i[0]]):(f=0,o=e);f<n;f++)t=i[f],o=l(o,a[t],t,a);return o};function X4(c){for(var a=[],r=0,e=c.length;r<e;){var s=c.charCodeAt(r++);if(s>=55296&&s<=56319&&r<e){var i=c.charCodeAt(r++);(i&64512)==56320?a.push(((s&1023)<<10)+(i&1023)+65536):(a.push(s),r--)}else a.push(s)}return a}function s1(c){var a=X4(c);return a.length===1?a[0].toString(16):null}function $4(c,a){var r=c.length,e=c.charCodeAt(a),s;return e>=55296&&e<=56319&&r>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(e-55296)*1024+s-56320+65536:e}function m3(c){return Object.keys(c).reduce(function(a,r){var e=c[r],s=!!e.icon;return s?a[e.iconName]=e.icon:a[r]=e,a},{})}function i1(c,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=r.skipHooks,s=e===void 0?!1:e,i=m3(a);typeof P.hooks.addPack=="function"&&!s?P.hooks.addPack(c,m3(a)):P.styles[c]=m(m({},P.styles[c]||{}),i),c==="fas"&&i1("fa",a)}var R2,E2,U2,l2=P.styles,Q4=P.shims,K4=(R2={},u(R2,h,Object.values(M2[h])),u(R2,M,Object.values(M2[M])),R2),u1=null,O3={},W3={},q3={},G3={},_3={},J4=(E2={},u(E2,h,Object.keys(h2[h])),u(E2,M,Object.keys(h2[M])),E2);function Z4(c){return~D4.indexOf(c)}function c6(c,a){var r=a.split("-"),e=r[0],s=r.slice(1).join("-");return e===c&&s!==""&&!Z4(s)?s:null}var j3=function(){var a=function(i){return J2(l2,function(n,l,f){return n[f]=J2(l,i,{}),n},{})};O3=a(function(s,i,n){if(i[3]&&(s[i[3]]=n),i[2]){var l=i[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){s[f.toString(16)]=n})}return s}),W3=a(function(s,i,n){if(s[n]=n,i[2]){var l=i[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){s[f]=n})}return s}),_3=a(function(s,i,n){var l=i[2];return s[n]=n,l.forEach(function(f){s[f]=n}),s});var r="far"in l2||z.autoFetchSvg,e=J2(Q4,function(s,i){var n=i[0],l=i[1],f=i[2];return l==="far"&&!r&&(l="fas"),typeof n=="string"&&(s.names[n]={prefix:l,iconName:f}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:l,iconName:f}),s},{names:{},unicodes:{}});q3=e.names,G3=e.unicodes,u1=j2(z.styleDefault,{family:z.familyDefault})};R4(function(c){u1=j2(c.styleDefault,{family:z.familyDefault})});j3();function C1(c,a){return(O3[c]||{})[a]}function a6(c,a){return(W3[c]||{})[a]}function e2(c,a){return(_3[c]||{})[a]}function Y3(c){return q3[c]||{prefix:null,iconName:null}}function e6(c){var a=G3[c],r=C1("fas",c);return a||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function K(){return u1}var d1=function(){return{prefix:null,iconName:null,rest:[]}};function j2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.family,e=r===void 0?h:r,s=h2[e][c],i=p2[e][c]||p2[e][s],n=c in P.styles?c:null;return i||n||null}var H3=(U2={},u(U2,h,Object.keys(M2[h])),u(U2,M,Object.keys(M2[M])),U2);function Y2(c){var a,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.skipLookups,s=e===void 0?!1:e,i=(a={},u(a,h,"".concat(z.cssPrefix,"-").concat(h)),u(a,M,"".concat(z.cssPrefix,"-").concat(M)),a),n=null,l=h;(c.includes(i[h])||c.some(function(t){return H3[h].includes(t)}))&&(l=h),(c.includes(i[M])||c.some(function(t){return H3[M].includes(t)}))&&(l=M);var f=c.reduce(function(t,o){var H=c6(z.cssPrefix,o);if(l2[o]?(o=K4[l].includes(o)?w4[l][o]:o,n=o,t.prefix=o):J4[l].indexOf(o)>-1?(n=o,t.prefix=j2(o,{family:l})):H?t.iconName=H:o!==z.replacementClass&&o!==i[h]&&o!==i[M]&&t.rest.push(o),!s&&t.prefix&&t.iconName){var v=n==="fa"?Y3(t.iconName):{},V=e2(t.prefix,t.iconName);v.prefix&&(n=null),t.iconName=v.iconName||V||t.iconName,t.prefix=v.prefix||t.prefix,t.prefix==="far"&&!l2.far&&l2.fas&&!z.autoFetchSvg&&(t.prefix="fas")}return t},d1());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===M&&(l2.fass||z.autoFetchSvg)&&(f.prefix="fass",f.iconName=e2(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||n==="fa")&&(f.prefix=K()||"fas"),f}var r6=function(){function c(){h4(this,c),this.definitions={}}return p4(c,[{key:"add",value:function(){for(var r=this,e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];var n=s.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(l){r.definitions[l]=m(m({},r.definitions[l]||{}),n[l]),i1(l,n[l]);var f=M2[h][l];f&&i1(f,n[l]),j3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,e){var s=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(s).map(function(i){var n=s[i],l=n.prefix,f=n.iconName,t=n.icon,o=t[2];r[l]||(r[l]={}),o.length>0&&o.forEach(function(H){typeof H=="string"&&(r[l][H]=t)}),r[l][f]=t}),r}}]),c}(),z3=[],o2={},t2={},s6=Object.keys(t2);function i6(c,a){var r=a.mixoutsTo;return z3=c,o2={},Object.keys(t2).forEach(function(e){s6.indexOf(e)===-1&&delete t2[e]}),z3.forEach(function(e){var s=e.mixout?e.mixout():{};if(Object.keys(s).forEach(function(n){typeof s[n]=="function"&&(r[n]=s[n]),W2(s[n])==="object"&&Object.keys(s[n]).forEach(function(l){r[n]||(r[n]={}),r[n][l]=s[n][l]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(n){o2[n]||(o2[n]=[]),o2[n].push(i[n])})}e.provides&&e.provides(t2)}),r}function n1(c,a){for(var r=arguments.length,e=new Array(r>2?r-2:0),s=2;s<r;s++)e[s-2]=arguments[s];var i=o2[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(e))}),a}function s2(c){for(var a=arguments.length,r=new Array(a>1?a-1:0),e=1;e<a;e++)r[e-1]=arguments[e];var s=o2[c]||[];s.forEach(function(i){i.apply(null,r)})}function q(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return t2[c]?t2[c].apply(null,a):void 0}function f1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,r=c.prefix||K();if(a)return a=e2(r,a)||a,t3(X3.definitions,r,a)||t3(P.styles,r,a)}var X3=new r6,n6=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,s2("noAuto")},f6={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return G?(s2("beforeI2svg",a),q("pseudoElements2svg",a),q("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,j4(function(){o6({autoReplaceSvgRoot:r}),s2("watch",a)})}},l6={icon:function(a){if(a===null)return null;if(W2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:e2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var r=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=j2(a[0]);return{prefix:e,iconName:e2(e,r)||r}}if(typeof a=="string"&&(a.indexOf("".concat(z.cssPrefix,"-"))>-1||a.match(k4))){var s=Y2(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||K(),iconName:e2(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var i=K();return{prefix:i,iconName:e2(i,a)||a}}}},k={noAuto:n6,config:z,dom:f6,parse:l6,library:X3,findIconDefinition:f1,toHtml:g2},o6=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot,e=r===void 0?p:r;(Object.keys(P.styles).length>0||z.autoFetchSvg)&&G&&z.autoReplaceSvg&&k.dom.i2svg({node:e})};function X2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return g2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(G){var e=p.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function t6(c){var a=c.children,r=c.main,e=c.mask,s=c.attributes,i=c.styles,n=c.transform;if(M1(n)&&r.found&&!e.found){var l=r.width,f=r.height,t={x:l/f/2,y:.5};s.style=_2(m(m({},i),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function m6(c){var a=c.prefix,r=c.iconName,e=c.children,s=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(z.cssPrefix,"-").concat(r):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},s),{},{id:n}),children:e}]}]}function L1(c){var a=c.icons,r=a.main,e=a.mask,s=c.prefix,i=c.iconName,n=c.transform,l=c.symbol,f=c.title,t=c.maskId,o=c.titleId,H=c.extra,v=c.watchable,V=v===void 0?!1:v,g=e.found?e:r,y=g.width,A=g.height,T=s==="fak",d=[z.replacementClass,i?"".concat(z.cssPrefix,"-").concat(i):""].filter(function(_){return H.classes.indexOf(_)===-1}).filter(function(_){return _!==""||!!_}).concat(H.classes).join(" "),x={children:[],attributes:m(m({},H.attributes),{},{"data-prefix":s,"data-icon":i,class:d,role:H.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(A)})},D=T&&!~H.classes.indexOf("fa-fw")?{width:"".concat(y/A*16*.0625,"em")}:{};V&&(x.attributes[r2]=""),f&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(o||C2())},children:[f]}),delete x.attributes.title);var w=m(m({},x),{},{prefix:s,iconName:i,main:r,mask:e,maskId:t,transform:n,symbol:l,styles:m(m({},D),H.styles)}),Z=e.found&&r.found?q("generateAbstractMask",w)||{children:[],attributes:{}}:q("generateAbstractIcon",w)||{children:[],attributes:{}},c2=Z.children,$2=Z.attributes;return w.children=c2,w.attributes=$2,l?m6(w):t6(w)}function v3(c){var a=c.content,r=c.width,e=c.height,s=c.transform,i=c.title,n=c.extra,l=c.watchable,f=l===void 0?!1:l,t=m(m(m({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});f&&(t[r2]="");var o=m({},n.styles);M1(s)&&(o.transform=W4({transform:s,startCentered:!0,width:r,height:e}),o["-webkit-transform"]=o.transform);var H=_2(o);H.length>0&&(t.style=H);var v=[];return v.push({tag:"span",attributes:t,children:[a]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function H6(c){var a=c.content,r=c.title,e=c.extra,s=m(m(m({},e.attributes),r?{title:r}:{}),{},{class:e.classes.join(" ")}),i=_2(e.styles);i.length>0&&(s.style=i);var n=[];return n.push({tag:"span",attributes:s,children:[a]}),r&&n.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),n}var Z2=P.styles;function l1(c){var a=c[0],r=c[1],e=c.slice(4),s=H1(e,1),i=s[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(a2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(a2.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(a2.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:r,icon:n}}var z6={found:!1,width:512,height:512};function v6(c,a){!D3&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function o1(c,a){var r=a;return a==="fa"&&z.styleDefault!==null&&(a=K()),new Promise(function(e,s){var i={found:!1,width:512,height:512,icon:q("missingIconAbstract")||{}};if(r==="fa"){var n=Y3(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&Z2[a]&&Z2[a][c]){var l=Z2[a][c];return e(l1(l))}v6(c,a),e(m(m({},z6),{},{icon:z.showMissingIcons&&c?q("missingIconAbstract")||{}:{}}))})}var V3=function(){},t1=z.measurePerformance&&A2&&A2.mark&&A2.measure?A2:{mark:V3,measure:V3},z2='FA "6.5.2"',V6=function(a){return t1.mark("".concat(z2," ").concat(a," begins")),function(){return $3(a)}},$3=function(a){t1.mark("".concat(z2," ").concat(a," ends")),t1.measure("".concat(z2," ").concat(a),"".concat(z2," ").concat(a," begins"),"".concat(z2," ").concat(a," ends"))},g1={begin:V6,end:$3},I2=function(){};function h3(c){var a=c.getAttribute?c.getAttribute(r2):null;return typeof a=="string"}function h6(c){var a=c.getAttribute?c.getAttribute(v1):null,r=c.getAttribute?c.getAttribute(V1):null;return a&&r}function p6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function M6(){if(z.autoReplaceSvg===!0)return O2.replace;var c=O2[z.autoReplaceSvg];return c||O2.replace}function u6(c){return p.createElementNS("http://www.w3.org/2000/svg",c)}function C6(c){return p.createElement(c)}function Q3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.ceFn,e=r===void 0?c.tag==="svg"?u6:C6:r;if(typeof c=="string")return p.createTextNode(c);var s=e(c.tag);Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){s.appendChild(Q3(n,{ceFn:e}))}),s}function d6(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var O2={replace:function(a){var r=a[0];if(r.parentNode)if(a[1].forEach(function(s){r.parentNode.insertBefore(Q3(s),r)}),r.getAttribute(r2)===null&&z.keepOriginalSource){var e=p.createComment(d6(r));r.parentNode.replaceChild(e,r)}else r.remove()},nest:function(a){var r=a[0],e=a[1];if(~p1(r).indexOf(z.replacementClass))return O2.replace(a);var s=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(l,f){return f===z.replacementClass||f.match(s)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",i.toNode.join(" "))}var n=e.map(function(l){return g2(l)}).join(`
`);r.setAttribute(r2,""),r.innerHTML=n}};function p3(c){c()}function K3(c,a){var r=typeof a=="function"?a:I2;if(c.length===0)r();else{var e=p3;z.mutateApproach===b4&&(e=Q.requestAnimationFrame||p3),e(function(){var s=M6(),i=g1.begin("mutate");c.map(s),i(),r()})}}var x1=!1;function J3(){x1=!0}function m1(){x1=!1}var G2=null;function M3(c){if(n3&&z.observeMutations){var a=c.treeCallback,r=a===void 0?I2:a,e=c.nodeCallback,s=e===void 0?I2:e,i=c.pseudoElementsCallback,n=i===void 0?I2:i,l=c.observeMutationsRoot,f=l===void 0?p:l;G2=new n3(function(t){if(!x1){var o=K();H2(t).forEach(function(H){if(H.type==="childList"&&H.addedNodes.length>0&&!h3(H.addedNodes[0])&&(z.searchPseudoElements&&n(H.target),r(H.target)),H.type==="attributes"&&H.target.parentNode&&z.searchPseudoElements&&n(H.target.parentNode),H.type==="attributes"&&h3(H.target)&&~T4.indexOf(H.attributeName))if(H.attributeName==="class"&&h6(H.target)){var v=Y2(p1(H.target)),V=v.prefix,g=v.iconName;H.target.setAttribute(v1,V||o),g&&H.target.setAttribute(V1,g)}else p6(H.target)&&s(H.target)})}}),G&&G2.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function L6(){G2&&G2.disconnect()}function g6(c){var a=c.getAttribute("style"),r=[];return a&&(r=a.split(";").reduce(function(e,s){var i=s.split(":"),n=i[0],l=i.slice(1);return n&&l.length>0&&(e[n]=l.join(":").trim()),e},{})),r}function x6(c){var a=c.getAttribute("data-prefix"),r=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",s=Y2(p1(c));return s.prefix||(s.prefix=K()),a&&r&&(s.prefix=a,s.iconName=r),s.iconName&&s.prefix||(s.prefix&&e.length>0&&(s.iconName=a6(s.prefix,c.innerText)||C1(s.prefix,s1(c.innerText))),!s.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function N6(c){var a=H2(c.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),r=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return z.autoA11y&&(r?a["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(e||C2()):(a["aria-hidden"]="true",a.focusable="false")),a}function b6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function u3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=x6(c),e=r.iconName,s=r.prefix,i=r.rest,n=N6(c),l=n1("parseNodeAttributes",{},c),f=a.styleParser?g6(c):[];return m({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:n}},l)}var S6=P.styles;function Z3(c){var a=z.autoReplaceSvg==="nest"?u3(c,{styleParser:!1}):u3(c);return~a.extra.classes.indexOf(F3)?q("generateLayersText",c,a):q("generateSvgReplacementMutation",c,a)}var J=new Set;h1.map(function(c){J.add("fa-".concat(c))});Object.keys(h2[h]).map(J.add.bind(J));Object.keys(h2[M]).map(J.add.bind(J));J=d2(J);function C3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!G)return Promise.resolve();var r=p.documentElement.classList,e=function(H){return r.add("".concat(f3,"-").concat(H))},s=function(H){return r.remove("".concat(f3,"-").concat(H))},i=z.autoFetchSvg?J:h1.map(function(o){return"fa-".concat(o)}).concat(Object.keys(S6));i.includes("fa")||i.push("fa");var n=[".".concat(F3,":not([").concat(r2,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat(r2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var l=[];try{l=H2(c.querySelectorAll(n))}catch{}if(l.length>0)e("pending"),s("complete");else return Promise.resolve();var f=g1.begin("onTree"),t=l.reduce(function(o,H){try{var v=Z3(H);v&&o.push(v)}catch(V){D3||V.name==="MissingIcon"&&console.error(V)}return o},[]);return new Promise(function(o,H){Promise.all(t).then(function(v){K3(v,function(){e("active"),e("complete"),s("pending"),typeof a=="function"&&a(),f(),o()})}).catch(function(v){f(),H(v)})})}function w6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Z3(c).then(function(r){r&&K3([r],a)})}function k6(c){return function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:f1(a||{}),s=r.mask;return s&&(s=(s||{}).icon?s:f1(s||{})),c(e,m(m({},r),{},{mask:s}))}}var y6=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.transform,s=e===void 0?F:e,i=r.symbol,n=i===void 0?!1:i,l=r.mask,f=l===void 0?null:l,t=r.maskId,o=t===void 0?null:t,H=r.title,v=H===void 0?null:H,V=r.titleId,g=V===void 0?null:V,y=r.classes,A=y===void 0?[]:y,T=r.attributes,d=T===void 0?{}:T,x=r.styles,D=x===void 0?{}:x;if(a){var w=a.prefix,Z=a.iconName,c2=a.icon;return X2(m({type:"icon"},a),function(){return s2("beforeDOMElementCreation",{iconDefinition:a,params:r}),z.autoA11y&&(v?d["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(g||C2()):(d["aria-hidden"]="true",d.focusable="false")),L1({icons:{main:l1(c2),mask:f?l1(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:Z,transform:m(m({},F),s),symbol:n,title:v,maskId:o,titleId:g,extra:{attributes:d,styles:D,classes:A}})})}},A6={mixout:function(){return{icon:k6(y6)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=C3,r.nodeCallback=w6,r}}},provides:function(a){a.i2svg=function(r){var e=r.node,s=e===void 0?p:e,i=r.callback,n=i===void 0?function(){}:i;return C3(s,n)},a.generateSvgReplacementMutation=function(r,e){var s=e.iconName,i=e.title,n=e.titleId,l=e.prefix,f=e.transform,t=e.symbol,o=e.mask,H=e.maskId,v=e.extra;return new Promise(function(V,g){Promise.all([o1(s,l),o.iconName?o1(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var A=H1(y,2),T=A[0],d=A[1];V([r,L1({icons:{main:T,mask:d},prefix:l,iconName:s,transform:f,symbol:t,maskId:H,title:i,titleId:n,extra:v,watchable:!0})])}).catch(g)})},a.generateAbstractIcon=function(r){var e=r.children,s=r.attributes,i=r.main,n=r.transform,l=r.styles,f=_2(l);f.length>0&&(s.style=f);var t;return M1(n)&&(t=q("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),e.push(t||i.icon),{children:e,attributes:s}}}},P6={mixout:function(){return{layer:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.classes,i=s===void 0?[]:s;return X2({type:"layer"},function(){s2("beforeDOMElementCreation",{assembler:r,params:e});var n=[];return r(function(l){Array.isArray(l)?l.map(function(f){n=n.concat(f.abstract)}):n=n.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(d2(i)).join(" ")},children:n}]})}}}},T6={mixout:function(){return{counter:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.title,i=s===void 0?null:s,n=e.classes,l=n===void 0?[]:n,f=e.attributes,t=f===void 0?{}:f,o=e.styles,H=o===void 0?{}:o;return X2({type:"counter",content:r},function(){return s2("beforeDOMElementCreation",{content:r,params:e}),H6({content:r.toString(),title:i,extra:{attributes:t,styles:H,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(d2(l))}})})}}}},D6={mixout:function(){return{text:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,i=s===void 0?F:s,n=e.title,l=n===void 0?null:n,f=e.classes,t=f===void 0?[]:f,o=e.attributes,H=o===void 0?{}:o,v=e.styles,V=v===void 0?{}:v;return X2({type:"text",content:r},function(){return s2("beforeDOMElementCreation",{content:r,params:e}),v3({content:r,transform:m(m({},F),i),title:l,extra:{attributes:H,styles:V,classes:["".concat(z.cssPrefix,"-layers-text")].concat(d2(t))}})})}}},provides:function(a){a.generateLayersText=function(r,e){var s=e.title,i=e.transform,n=e.extra,l=null,f=null;if(A3){var t=parseInt(getComputedStyle(r).fontSize,10),o=r.getBoundingClientRect();l=o.width/t,f=o.height/t}return z.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([r,v3({content:r.innerHTML,width:l,height:f,transform:i,title:s,extra:n,watchable:!0})])}}},F6=new RegExp('"',"ug"),d3=[1105920,1112319];function B6(c){var a=c.replace(F6,""),r=$4(a,0),e=r>=d3[0]&&r<=d3[1],s=a.length===2?a[0]===a[1]:!1;return{value:s1(s?a[0]:a),isSecondary:e||s}}function L3(c,a){var r="".concat(N4).concat(a.replace(":","-"));return new Promise(function(e,s){if(c.getAttribute(r)!==null)return e();var i=H2(c.children),n=i.filter(function(c2){return c2.getAttribute(r1)===a})[0],l=Q.getComputedStyle(c,a),f=l.getPropertyValue("font-family").match(y4),t=l.getPropertyValue("font-weight"),o=l.getPropertyValue("content");if(n&&!f)return c.removeChild(n),e();if(f&&o!=="none"&&o!==""){var H=l.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?M:h,V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?p2[v][f[2].toLowerCase()]:A4[v][t],g=B6(H),y=g.value,A=g.isSecondary,T=f[0].startsWith("FontAwesome"),d=C1(V,y),x=d;if(T){var D=e6(y);D.iconName&&D.prefix&&(d=D.iconName,V=D.prefix)}if(d&&!A&&(!n||n.getAttribute(v1)!==V||n.getAttribute(V1)!==x)){c.setAttribute(r,x),n&&c.removeChild(n);var w=b6(),Z=w.extra;Z.attributes[r1]=a,o1(d,V).then(function(c2){var $2=L1(m(m({},w),{},{icons:{main:c2,mask:d1()},prefix:V,iconName:x,extra:Z,watchable:!0})),_=p.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(_,c.firstChild):c.appendChild(_),_.outerHTML=$2.map(function(V4){return g2(V4)}).join(`
`),c.removeAttribute(r),e()}).catch(s)}else e()}else e()})}function R6(c){return Promise.all([L3(c,"::before"),L3(c,"::after")])}function E6(c){return c.parentNode!==document.head&&!~S4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(r1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function g3(c){if(G)return new Promise(function(a,r){var e=H2(c.querySelectorAll("*")).filter(E6).map(R6),s=g1.begin("searchPseudoElements");J3(),Promise.all(e).then(function(){s(),m1(),a()}).catch(function(){s(),m1(),r()})})}var U6={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=g3,r}}},provides:function(a){a.pseudoElements2svg=function(r){var e=r.node,s=e===void 0?p:e;z.searchPseudoElements&&g3(s)}}},x3=!1,I6={mixout:function(){return{dom:{unwatch:function(){J3(),x3=!0}}}},hooks:function(){return{bootstrap:function(){M3(n1("mutationObserverCallbacks",{}))},noAuto:function(){L6()},watch:function(r){var e=r.observeMutationsRoot;x3?m1():M3(n1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},N3=function(a){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,s){var i=s.toLowerCase().split("-"),n=i[0],l=i.slice(1).join("-");if(n&&l==="h")return e.flipX=!0,e;if(n&&l==="v")return e.flipY=!0,e;if(l=parseFloat(l),isNaN(l))return e;switch(n){case"grow":e.size=e.size+l;break;case"shrink":e.size=e.size-l;break;case"left":e.x=e.x-l;break;case"right":e.x=e.x+l;break;case"up":e.y=e.y-l;break;case"down":e.y=e.y+l;break;case"rotate":e.rotate=e.rotate+l;break}return e},r)},O6={mixout:function(){return{parse:{transform:function(r){return N3(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,e){var s=e.getAttribute("data-fa-transform");return s&&(r.transform=N3(s)),r}}},provides:function(a){a.generateAbstractTransformGrouping=function(r){var e=r.main,s=r.transform,i=r.containerWidth,n=r.iconWidth,l={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(s.x*32,", ").concat(s.y*32,") "),t="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),o="rotate(".concat(s.rotate," 0 0)"),H={transform:"".concat(f," ").concat(t," ").concat(o)},v={transform:"translate(".concat(n/2*-1," -256)")},V={outer:l,inner:H,path:v};return{tag:"g",attributes:m({},V.outer),children:[{tag:"g",attributes:m({},V.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:m(m({},e.icon.attributes),V.path)}]}]}}}},c1={x:0,y:0,width:"100%",height:"100%"};function b3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function W6(c){return c.tag==="g"?c.children:[c]}var q6={hooks:function(){return{parseNodeAttributes:function(r,e){var s=e.getAttribute("data-fa-mask"),i=s?Y2(s.split(" ").map(function(n){return n.trim()})):d1();return i.prefix||(i.prefix=K()),r.mask=i,r.maskId=e.getAttribute("data-fa-mask-id"),r}}},provides:function(a){a.generateAbstractMask=function(r){var e=r.children,s=r.attributes,i=r.main,n=r.mask,l=r.maskId,f=r.transform,t=i.width,o=i.icon,H=n.width,v=n.icon,V=O4({transform:f,containerWidth:H,iconWidth:t}),g={tag:"rect",attributes:m(m({},c1),{},{fill:"white"})},y=o.children?{children:o.children.map(b3)}:{},A={tag:"g",attributes:m({},V.inner),children:[b3(m({tag:o.tag,attributes:m(m({},o.attributes),V.path)},y))]},T={tag:"g",attributes:m({},V.outer),children:[A]},d="mask-".concat(l||C2()),x="clip-".concat(l||C2()),D={tag:"mask",attributes:m(m({},c1),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,T]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:W6(v)},D]};return e.push(w,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(d,")")},c1)}),{children:e,attributes:s}}}},G6={provides:function(a){var r=!1;Q.matchMedia&&(r=Q.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:m(m({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=m(m({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:m(m({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||l.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(l),e.push({tag:"path",attributes:m(m({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:m(m({},n),{},{values:"1;0;0;0;0;1;"})}]}),r||e.push({tag:"path",attributes:m(m({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},_6={hooks:function(){return{parseNodeAttributes:function(r,e){var s=e.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return r.symbol=i,r}}}},j6=[G4,A6,P6,T6,D6,U6,I6,O6,q6,G6,_6];i6(j6,{mixoutsTo:k});var d0=k.noAuto,c4=k.config,L0=k.library,a4=k.dom,e4=k.parse,g0=k.findIconDefinition,x0=k.toHtml,r4=k.icon,N0=k.layer,Y6=k.text,X6=k.counter;var $6=["*"],Q6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},K6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},J6=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(r=>a[r]?r:null).filter(r=>r)},N1=new WeakSet,s4="fa-auto-css";function Z6(c,a){if(!a.autoAddCss||N1.has(c))return;if(c.getElementById(s4)!=null){a.autoAddCss=!1,N1.add(c);return}let r=c.createElement("style");r.setAttribute("type","text/css"),r.setAttribute("id",s4),r.innerHTML=a4.css();let e=c.head.childNodes,s=null;for(let i=e.length-1;i>-1;i--){let n=e[i],l=n.nodeName.toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(s=n)}c.head.insertBefore(r,s),a.autoAddCss=!1,N1.add(c)}var c0=c=>c.prefix!==void 0&&c.iconName!==void 0,a0=(c,a)=>c0(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:a,iconName:c},e0=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(e){c4.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}};a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=B({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),r0=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...e){for(let s of e){s.prefix in this.definitions||(this.definitions[s.prefix]={}),this.definitions[s.prefix][s.iconName]=s;for(let i of s.icon[2])typeof i=="string"&&(this.definitions[s.prefix][i]=s)}}addIconPacks(...e){for(let s of e){let i=Object.keys(s).map(n=>s[n]);this.addIcons(...i)}}getIconDefinition(e,s){return e in this.definitions&&s in this.definitions[e]?this.definitions[e][s]:null}};a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=B({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),s0=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(s){return new(s||a)},a.\u0275dir=x2({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[b2]});let c=a;return c})(),i0=(()=>{let a=class a{constructor(e,s){this.renderer=e,this.elementRef=s}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};a.\u0275fac=function(s){return new(s||a)(C(w2),C(S2))},a.\u0275cmp=R({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[b2,U],ngContentSelectors:$6,decls:1,vars:0,template:function(s,i){s&1&&(W1(),q1(0))},encapsulation:2});let c=a;return c})(),i4=(()=>{let a=class a{constructor(e,s,i,n,l){this.sanitizer=e,this.config=s,this.iconLibrary=i,this.stackItem=n,this.document=P1(X1),l!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){K6();return}if(e){let s=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(s!=null){let i=this.buildParams();Z6(this.document,this.config);let n=r4(s,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(e){let s=a0(e,this.config.defaultPrefix);if("icon"in s)return s;let i=this.iconLibrary.getIconDefinition(s.prefix,s.iconName);return i??(Q6(s),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},s=typeof this.transform=="string"?e4.transform(this.transform):this.transform;return{title:this.title,transform:s,classes:J6(e),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}};a.\u0275fac=function(s){return new(s||a)(C($1),C(e0),C(r0),C(s0,8),C(i0,8))},a.\u0275cmp=R({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(s,i){s&2&&(I1("innerHTML",i.renderedIconHTML,B1),E1("title",i.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[b2,U],decls:0,vars:0,template:function(s,i){},encapsulation:2});let c=a;return c})();var n4=(()=>{let a=class a{};a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=T1({type:a}),a.\u0275inj=A1({});let c=a;return c})();var b1={prefix:"fas",iconName:"comments",icon:[640,512,[128490,61670],"f086","M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"]};var S1={prefix:"fas",iconName:"heart-crack",icon:[512,512,[128148,"heart-broken"],"f7a9","M119.4 44.1c23.3-3.9 46.8-1.9 68.6 5.3l49.8 77.5-75.4 75.4c-1.5 1.5-2.4 3.6-2.3 5.8s1 4.2 2.6 5.7l112 104c2.9 2.7 7.4 2.9 10.5 .3s3.8-7 1.7-10.4l-60.4-98.1 90.7-75.6c2.6-2.1 3.5-5.7 2.4-8.8L296.8 61.8c28.5-16.7 62.4-23.2 95.7-17.6C461.5 55.6 512 115.2 512 185.1v5.8c0 41.5-17.2 81.2-47.6 109.5L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9L47.6 300.4C17.2 272.1 0 232.4 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141z"]};var w1={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]};var k1={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]};function f0(c,a){if(c&1&&(b(0,"div",3),j(1,"fa-icon",4),b(2,"span"),X(3),S()()),c&2){let r=a.$implicit;L(),N("icon",r.icon),L(2),k2(r.value)}}function l0(c,a){if(c&1&&(b(0,"div",1),E(1,f0,4,2,"div",2),S()),c&2){let r=Y();L(),N("ngForOf",r.stats)}}var l4=(()=>{let a=class a{get stats(){return this.videoData?[{icon:k1,value:this.videoData.statistics?.viewCount||0},{icon:w1,value:this.videoData.statistics?.likeCount||0},{icon:S1,value:this.videoData.statistics?.dislikeCount||0},{icon:b1,value:this.videoData.statistics?.commentCount||0}]:[{icon:k1,value:0},{icon:w1,value:0},{icon:S1,value:0},{icon:b1,value:0}]}};a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=R({type:a,selectors:[["app-video-statistics"]],inputs:{videoData:"videoData"},standalone:!0,features:[U],decls:1,vars:1,consts:[["class","search-item-statictics",4,"ngIf"],[1,"search-item-statictics"],["class","stat-item",4,"ngFor","ngForOf"],[1,"stat-item"],[3,"icon"]],template:function(s,i){s&1&&E(0,l0,2,1,"div",0),s&2&&N("ngIf",i.videoData)},dependencies:[n2,y2,i2,n4,i4],styles:[".search-item-statictics[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-size:14px;gap:5px}.search-item-statictics[_ngcontent-%COMP%]:not(:last-child){margin-bottom:21px}.stat-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px}.stat-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px}"]});let c=a;return c})();var o4=(()=>{let a=class a{constructor(){}get currentVideoData(){return this._currentVideoData}set currentVideoData(e){this._currentVideoData=e}clearVideoData(){this._currentVideoData=void 0}};a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=B({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})();function m0(c,a){if(c&1){let r=U1();b(0,"article",2)(1,"div",3)(2,"div",4),j(3,"img",5),S(),j(4,"app-video-statistics",6),b(5,"div",7)(6,"div",8),X(7),S(),b(8,"div",9),X(9),S()(),b(10,"div",10)(11,"app-custom-button",11),O1("buttonClick",function(){D1(r);let s=Y();return F1(s.navigateToDetail())}),X(12,"more... "),S()()()()}if(c&2){let r=Y();L(3),G1("alt"," ",r.videoData.snippet.title," "),N("src",r.getThumbnailUrl(),R1),L(),N("videoData",r.videoData),L(3),k2(r.videoData.snippet.title),L(2),_1("#",r.videoData.snippet.categoryId,"")}}var t4=(()=>{let a=class a{constructor(e,s){this.router=e,this.videoDataService=s}getThumbnailUrl(){return this.videoData?.snippet?.thumbnails?.maxres?this.videoData.snippet.thumbnails.maxres.url:this.videoData?.snippet?.thumbnails?.high?this.videoData.snippet.thumbnails.high.url:this.videoData?.snippet?.thumbnails?.medium?this.videoData.snippet.thumbnails.medium.url:this.videoData?.snippet?.thumbnails?.default?.url||"assets/caption.jpg"}navigateToDetail(){this.videoData&&(this.videoDataService.currentVideoData=this.videoData,this.router.navigate(["/youtube/detailed-information",this.videoData.id]))}};a.\u0275fac=function(s){return new(s||a)(C(K1),C(o4))},a.\u0275cmp=R({type:a,selectors:[["app-search-item"]],inputs:{videoData:"videoData"},standalone:!0,features:[U],decls:2,vars:2,consts:[["class","search-item",4,"ngIf"],[1,"search-item-line",3,"appDateBackground"],[1,"search-item"],[1,"search-item-container"],[1,"search-item-image"],[3,"src","alt"],[3,"videoData"],[1,"search-item-about"],[1,"search-item-title"],[1,"search-item-title-count"],[1,"search-item-more"],["buttonClass","button-search-item-more",3,"buttonClick"]],template:function(s,i){s&1&&(E(0,m0,13,6,"article",0),j(1,"span",1)),s&2&&(N("ngIf",i.videoData),L(),N("appDateBackground",i.videoData==null||i.videoData.snippet==null?null:i.videoData.snippet.publishedAt))},dependencies:[n2,i2,J1,c3,l4],styles:[".search-item[_ngcontent-%COMP%]{padding:20px;border:2px solid #c18183;border-radius:5px;max-width:264px;height:100%;background:linear-gradient(120deg,ivory,gold)}.search-item-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.search-item-image[_ngcontent-%COMP%]:not(:last-child){margin-bottom:21px}.search-item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:224px;height:124px}.search-item-about[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;gap:5px;flex-grow:1;font-size:20px;font-weight:700}.search-item-about[_ngcontent-%COMP%]:not(:last-child){margin-bottom:59px}.search-item-more[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-top:auto}.search-item-line[_ngcontent-%COMP%]{display:block;height:5px;background-color:#2f80ed;margin-top:-5px;border-radius:2px}"]});let c=a;return c})();var m4=(()=>{let a=class a{transform(e,s,i){if(!e||!s)return e;if(!["date","count"].includes(s))return console.error(`Invalid sortField: ${s}`),e;let l=f=>{switch(s){case"date":return f.snippet?.publishedAt?new Date(f.snippet.publishedAt).getTime():0;case"count":return f.statistics?.viewCount?+f.statistics.viewCount:0;default:return 0}};return e.sort((f,t)=>{let o=l(f),H=l(t);return i==="asc"?o-H:H-o})}};a.\u0275fac=function(s){return new(s||a)},a.\u0275pipe=N2({name:"sortVideos",type:a,pure:!1,standalone:!0});let c=a;return c})();var H4=(()=>{let a=class a{transform(e,s){if(!e||!s)return e;let i=s.toLowerCase().split(" ");return e.filter(n=>i.every(l=>n.snippet.title.toLowerCase().includes(l)||n.snippet.description.toLowerCase().includes(l)||n.snippet.tags.some(f=>f.toLowerCase().includes(l))))}};a.\u0275fac=function(s){return new(s||a)},a.\u0275pipe=N2({name:"filterVideos",type:a,pure:!1,standalone:!0});let c=a;return c})();var z4=(()=>{let a=class a{constructor(){this.searchQuery="",this.searchResultsVisible=!1}setSearchQuery(e){this.searchQuery=e,this.searchResultsVisible=!0}getSearchQuery(){return this.searchQuery}clearSearchQuery(){this.searchQuery="",this.searchResultsVisible=!1}getSearchResultsVisibility(){return this.searchResultsVisible}};a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=B({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})();var v4=(()=>{let a=class a{constructor(){this.sortField="date",this.sortOrder="asc",this.searchQueryWords=""}get getSortField(){return this.sortField}set setSortField(e){this.sortField===e?this.sortOrder=this.sortOrder==="asc"?"desc":"asc":(this.sortField=e,this.sortOrder="asc")}get getSortOrder(){return this.sortOrder}set setSortOrder(e){this.sortOrder=e}get getSearchQueryWords(){return this.searchQueryWords}set setSearchQueryWords(e){this.searchQueryWords=e}};a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=B({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})();function v0(c,a){if(c&1&&(b(0,"div"),j(1,"app-search-item",5),S()),c&2){let r=a.$implicit;L(),N("videoData",r)}}function V0(c,a){if(c&1&&(b(0,"div",3),E(1,v0,2,1,"div",4),Q2(2,"sortVideos"),Q2(3,"filterVideos"),S()),c&2){let r=Y(2);L(),N("ngForOf",j1(3,5,Y1(2,1,r.filteredVideos,r.sortField,r.sortOrder),r.searchQueryWords))}}function h0(c,a){c&1&&(b(0,"div"),X(1," No results found. "),S())}function p0(c,a){if(c&1&&(b(0,"div"),E(1,V0,4,8,"div",2)(2,h0,2,0,"div",1),S()),c&2){let r=Y();L(),N("ngIf",r.filteredVideos&&r.filteredVideos.length),L(),N("ngIf",r.filteredVideos&&r.filteredVideos.length===0)}}var s8=(()=>{let a=class a{constructor(e,s,i){this.route=e,this.searchService=s,this.sortService=i,this.filteredVideos=[],this.searchResultsVisible=!1}ngOnInit(){this.route.params.subscribe(e=>{let s=e.query;s?(this.searchService.setSearchQuery(s),this.loadData(s)):this.loadData()})}loadData(e){return y1(this,null,function*(){let s="https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/angular/response.json";try{let i=yield fetch(s);if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);let n=yield i.json();this.videosData=Z1(n),console.log("Data loaded:",this.videosData),this.searchResultsVisible=this.searchService.getSearchResultsVisibility(),console.log("Data loaded and searchResultsVisible set to:",this.searchResultsVisible),this.searchResultsVisible&&this.updateFilteredVideos()}catch(i){console.error("Error loading the videos",i)}})}updateFilteredVideos(){this.videosData&&this.videosData.items?this.filterVideos(this.searchService.getSearchQuery()):console.log("Data not loaded or `items` is undefined")}filterVideos(e){this.filteredVideos=this.videosData.items.filter(s=>s.snippet.title.toLowerCase().includes(e.toLowerCase()))}get sortField(){return this.sortService.getSortField}get sortOrder(){return this.sortService.getSortOrder}get searchQueryWords(){return this.sortService.getSearchQueryWords}};a.\u0275fac=function(s){return new(s||a)(C(Q1),C(z4),C(v4))},a.\u0275cmp=R({type:a,selectors:[["app-search-results"]],standalone:!0,features:[U],decls:2,vars:1,consts:[[1,"main-search-container"],[4,"ngIf"],["class","video-list-container",4,"ngIf"],[1,"video-list-container"],[4,"ngFor","ngForOf"],[3,"videoData"]],template:function(s,i){s&1&&(b(0,"div",0),E(1,p0,3,2,"div",1),S()),s&2&&(L(),N("ngIf",i.searchResultsVisible))},dependencies:[n2,y2,i2,t4,m4,H4],styles:[".video-list-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px}.main-search-container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}"]});let c=a;return c})();export{c3 as a,l4 as b,o4 as c,z4 as d,v4 as e,s8 as f};
