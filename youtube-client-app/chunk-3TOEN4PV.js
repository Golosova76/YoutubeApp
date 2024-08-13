import{o as C2,p as W2}from"./chunk-DBUPZQWJ.js";import{Aa as y1,Ba as A1,Ca as P1,Ja as T1,Ka as B1,M as Z,N as g1,Na as a2,Q as x1,T as c2,U as N1,V as z2,Xa as F1,Za as D1,_ as v2,_a as R1,ab as E1,ea as V2,ha as b1,ib as U1,ja as h2,ka as S,ma as M2,qa as I2,ra as S1,sa as p2,ua as u2,va as O2,wa as k1,ya as w1}from"./chunk-TJ4IWNL2.js";var Y=function(c){return c.Blue="#007BFF",c.Green="#28A745",c.Yellow="#FFC107",c.Red="#DC3545",c.Default="#2f80ed",c}(Y||{}),G6=(()=>{let a=class a{constructor(r,s){this.el=r,this.renderer=s}ngOnInit(){let r=new Date(this.appDateBackground),s=this.appDateBackground?this.getBorderColor(r):Y.Default;this.renderer.setStyle(this.el.nativeElement,"backgroundColor",s)}getBorderColor(r){let i=(new Date().getTime()-r.getTime())/(1e3*3600*24);switch(!0){case i<a.DAYS_IN_A_WEEK:return Y.Blue;case i<a.DAYS_IN_A_MONTH:return Y.Green;case i<a.DAYS_IN_SIX_MONTHS:return Y.Yellow;default:return Y.Red}}};a.DAYS_IN_A_WEEK=7,a.DAYS_IN_A_MONTH=30,a.DAYS_IN_SIX_MONTHS=180,a.\u0275fac=function(s){return new(s||a)(S(V2),S(M2))},a.\u0275dir=z2({type:a,selectors:[["","appDateBackground",""]],inputs:{appDateBackground:"appDateBackground"},standalone:!0});let c=a;return c})();function I1(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function t(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?I1(Object(e),!0).forEach(function(r){u(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):I1(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function P2(c){"@babel/helpers - typeof";return P2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},P2(c)}function Y3(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function O1(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function X3(c,a,e){return a&&O1(c.prototype,a),e&&O1(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function u(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function i1(c,a){return K3(c)||J3(c,a)||H3(c,a)||c4()}function t2(c){return $3(c)||Q3(c)||H3(c)||Z3()}function $3(c){if(Array.isArray(c))return X2(c)}function K3(c){if(Array.isArray(c))return c}function Q3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function J3(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,i=!1,n,f;try{for(e=e.call(c);!(s=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));s=!0);}catch(l){i=!0,f=l}finally{try{!s&&e.return!=null&&e.return()}finally{if(i)throw f}}return r}}function H3(c,a){if(c){if(typeof c=="string")return X2(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return X2(c,a)}}function X2(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function Z3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var W1=function(){},n1={},z3={},v3=null,V3={mark:W1,measure:W1};try{typeof window<"u"&&(n1=window),typeof document<"u"&&(z3=document),typeof MutationObserver<"u"&&(v3=MutationObserver),typeof performance<"u"&&(V3=performance)}catch{}var a4=n1.navigator||{},q1=a4.userAgent,G1=q1===void 0?"":q1,E=n1,M=z3,j1=v3,d2=V3,_6=!!E.document,F=!!M.documentElement&&!!M.head&&typeof M.addEventListener=="function"&&typeof M.createElement=="function",h3=~G1.indexOf("MSIE")||~G1.indexOf("Trident/"),L2,g2,x2,N2,b2,P="___FONT_AWESOME___",$2=16,M3="fa",p3="svg-inline--fa",j="data-fa-i2svg",K2="data-fa-pseudo-element",e4="data-fa-pseudo-element-pending",f1="data-prefix",l1="data-icon",_1="fontawesome-i2svg",r4="async",s4=["HTML","HEAD","STYLE","SCRIPT"],u3=function(){try{return!0}catch{return!1}}(),h="classic",p="sharp",o1=[h,p];function m2(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[h]}})}var i2=m2((L2={},u(L2,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),u(L2,p,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),L2)),n2=m2((g2={},u(g2,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),u(g2,p,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),g2)),f2=m2((x2={},u(x2,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),u(x2,p,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),x2)),i4=m2((N2={},u(N2,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),u(N2,p,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),N2)),n4=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,C3="fa-layers-text",f4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,l4=m2((b2={},u(b2,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),u(b2,p,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),b2)),d3=[1,2,3,4,5,6,7,8,9,10],o4=d3.concat([11,12,13,14,15,16,17,18,19,20]),t4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},l2=new Set;Object.keys(n2[h]).map(l2.add.bind(l2));Object.keys(n2[p]).map(l2.add.bind(l2));var m4=[].concat(o1,t2(l2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q.GROUP,q.SWAP_OPACITY,q.PRIMARY,q.SECONDARY]).concat(d3.map(function(c){return"".concat(c,"x")})).concat(o4.map(function(c){return"w-".concat(c)})),r2=E.FontAwesomeConfig||{};function H4(c){var a=M.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function z4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}M&&typeof M.querySelector=="function"&&(Y1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],Y1.forEach(function(c){var a=i1(c,2),e=a[0],r=a[1],s=z4(H4(e));s!=null&&(r2[r]=s)}));var Y1,L3={styleDefault:"solid",familyDefault:"classic",cssPrefix:M3,replacementClass:p3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};r2.familyPrefix&&(r2.cssPrefix=r2.familyPrefix);var Q=t(t({},L3),r2);Q.autoReplaceSvg||(Q.observeMutations=!1);var H={};Object.keys(L3).forEach(function(c){Object.defineProperty(H,c,{enumerable:!0,set:function(e){Q[c]=e,s2.forEach(function(r){return r(H)})},get:function(){return Q[c]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(a){Q.cssPrefix=a,s2.forEach(function(e){return e(H)})},get:function(){return Q.cssPrefix}});E.FontAwesomeConfig=H;var s2=[];function v4(c){return s2.push(c),function(){s2.splice(s2.indexOf(c),1)}}var R=$2,A={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function V4(c){if(!(!c||!F)){var a=M.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=M.head.childNodes,r=null,s=e.length-1;s>-1;s--){var i=e[s],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=i)}return M.head.insertBefore(a,r),c}}var h4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function o2(){for(var c=12,a="";c-- >0;)a+=h4[Math.random()*62|0];return a}function J(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function t1(c){return c.classList?J(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function g3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function M4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(g3(c[e]),'" ')},"").trim()}function F2(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function m1(c){return c.size!==A.size||c.x!==A.x||c.y!==A.y||c.rotate!==A.rotate||c.flipX||c.flipY}function p4(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(n," ").concat(f)},m={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:m}}function u4(c){var a=c.transform,e=c.width,r=e===void 0?$2:e,s=c.height,i=s===void 0?$2:s,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&h3?l+="translate(".concat(a.x/R-r/2,"em, ").concat(a.y/R-i/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/R,"em), calc(-50% + ").concat(a.y/R,"em)) "):l+="translate(".concat(a.x/R,"em, ").concat(a.y/R,"em) "),l+="scale(".concat(a.size/R*(a.flipX?-1:1),", ").concat(a.size/R*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var C4=`:root, :host {
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
}`;function x3(){var c=M3,a=p3,e=H.cssPrefix,r=H.replacementClass,s=C4;if(e!==c||r!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");s=s.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(r))}return s}var X1=!1;function G2(){H.autoAddCss&&!X1&&(V4(x3()),X1=!0)}var d4={mixout:function(){return{dom:{css:x3,insertCss:G2}}},hooks:function(){return{beforeDOMElementCreation:function(){G2()},beforeI2svg:function(){G2()}}}},T=E||{};T[P]||(T[P]={});T[P].styles||(T[P].styles={});T[P].hooks||(T[P].hooks={});T[P].shims||(T[P].shims=[]);var k=T[P],N3=[],L4=function c(){M.removeEventListener("DOMContentLoaded",c),T2=1,N3.map(function(a){return a()})},T2=!1;F&&(T2=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),T2||M.addEventListener("DOMContentLoaded",L4));function g4(c){F&&(T2?setTimeout(c,0):N3.push(c))}function H2(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,i=s===void 0?[]:s;return typeof c=="string"?g3(c):"<".concat(a," ").concat(M4(r),">").concat(i.map(H2).join(""),"</").concat(a,">")}function $1(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var x4=function(a,e){return function(r,s,i,n){return a.call(e,r,s,i,n)}},j2=function(a,e,r,s){var i=Object.keys(a),n=i.length,f=s!==void 0?x4(e,s):e,l,m,o;for(r===void 0?(l=1,o=a[i[0]]):(l=0,o=r);l<n;l++)m=i[l],o=f(o,a[m],m,a);return o};function N4(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((s&1023)<<10)+(i&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function Q2(c){var a=N4(c);return a.length===1?a[0].toString(16):null}function b4(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function K1(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function J2(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,i=K1(a);typeof k.hooks.addPack=="function"&&!s?k.hooks.addPack(c,K1(a)):k.styles[c]=t(t({},k.styles[c]||{}),i),c==="fas"&&J2("fa",a)}var S2,k2,w2,X=k.styles,S4=k.shims,k4=(S2={},u(S2,h,Object.values(f2[h])),u(S2,p,Object.values(f2[p])),S2),H1=null,b3={},S3={},k3={},w3={},y3={},w4=(k2={},u(k2,h,Object.keys(i2[h])),u(k2,p,Object.keys(i2[p])),k2);function y4(c){return~m4.indexOf(c)}function A4(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!y4(s)?s:null}var A3=function(){var a=function(i){return j2(X,function(n,f,l){return n[l]=j2(f,i,{}),n},{})};b3=a(function(s,i,n){if(i[3]&&(s[i[3]]=n),i[2]){var f=i[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){s[l.toString(16)]=n})}return s}),S3=a(function(s,i,n){if(s[n]=n,i[2]){var f=i[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){s[l]=n})}return s}),y3=a(function(s,i,n){var f=i[2];return s[n]=n,f.forEach(function(l){s[l]=n}),s});var e="far"in X||H.autoFetchSvg,r=j2(S4,function(s,i){var n=i[0],f=i[1],l=i[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(s.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:f,iconName:l}),s},{names:{},unicodes:{}});k3=r.names,w3=r.unicodes,H1=D2(H.styleDefault,{family:H.familyDefault})};v4(function(c){H1=D2(c.styleDefault,{family:H.familyDefault})});A3();function z1(c,a){return(b3[c]||{})[a]}function P4(c,a){return(S3[c]||{})[a]}function G(c,a){return(y3[c]||{})[a]}function P3(c){return k3[c]||{prefix:null,iconName:null}}function T4(c){var a=w3[c],e=z1("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function U(){return H1}var v1=function(){return{prefix:null,iconName:null,rest:[]}};function D2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?h:e,s=i2[r][c],i=n2[r][c]||n2[r][s],n=c in k.styles?c:null;return i||n||null}var Q1=(w2={},u(w2,h,Object.keys(f2[h])),u(w2,p,Object.keys(f2[p])),w2);function R2(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,i=(a={},u(a,h,"".concat(H.cssPrefix,"-").concat(h)),u(a,p,"".concat(H.cssPrefix,"-").concat(p)),a),n=null,f=h;(c.includes(i[h])||c.some(function(m){return Q1[h].includes(m)}))&&(f=h),(c.includes(i[p])||c.some(function(m){return Q1[p].includes(m)}))&&(f=p);var l=c.reduce(function(m,o){var z=A4(H.cssPrefix,o);if(X[o]?(o=k4[f].includes(o)?i4[f][o]:o,n=o,m.prefix=o):w4[f].indexOf(o)>-1?(n=o,m.prefix=D2(o,{family:f})):z?m.iconName=z:o!==H.replacementClass&&o!==i[h]&&o!==i[p]&&m.rest.push(o),!s&&m.prefix&&m.iconName){var v=n==="fa"?P3(m.iconName):{},V=G(m.prefix,m.iconName);v.prefix&&(n=null),m.iconName=v.iconName||V||m.iconName,m.prefix=v.prefix||m.prefix,m.prefix==="far"&&!X.far&&X.fas&&!H.autoFetchSvg&&(m.prefix="fas")}return m},v1());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===p&&(X.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=G(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=U()||"fas"),l}var B4=function(){function c(){Y3(this,c),this.definitions={}}return X3(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var n=s.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=t(t({},e.definitions[f]||{}),n[f]),J2(f,n[f]);var l=f2[h][f];l&&J2(l,n[f]),A3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var n=s[i],f=n.prefix,l=n.iconName,m=n.icon,o=m[2];e[f]||(e[f]={}),o.length>0&&o.forEach(function(z){typeof z=="string"&&(e[f][z]=m)}),e[f][l]=m}),e}}]),c}(),J1=[],$={},K={},F4=Object.keys(K);function D4(c,a){var e=a.mixoutsTo;return J1=c,$={},Object.keys(K).forEach(function(r){F4.indexOf(r)===-1&&delete K[r]}),J1.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(n){typeof s[n]=="function"&&(e[n]=s[n]),P2(s[n])==="object"&&Object.keys(s[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=s[n][f]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(n){$[n]||($[n]=[]),$[n].push(i[n])})}r.provides&&r.provides(K)}),e}function Z2(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var i=$[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function _(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=$[c]||[];s.forEach(function(i){i.apply(null,e)})}function B(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return K[c]?K[c].apply(null,a):void 0}function c1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||U();if(a)return a=G(e,a)||a,$1(T3.definitions,e,a)||$1(k.styles,e,a)}var T3=new B4,R4=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,_("noAuto")},E4={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(_("beforeI2svg",a),B("pseudoElements2svg",a),B("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,g4(function(){I4({autoReplaceSvgRoot:e}),_("watch",a)})}},U4={icon:function(a){if(a===null)return null;if(P2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:G(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=D2(a[0]);return{prefix:r,iconName:G(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(H.cssPrefix,"-"))>-1||a.match(n4))){var s=R2(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||U(),iconName:G(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var i=U();return{prefix:i,iconName:G(i,a)||a}}}},x={noAuto:R4,config:H,dom:E4,parse:U4,library:T3,findIconDefinition:c1,toHtml:H2},I4=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?M:e;(Object.keys(k.styles).length>0||H.autoFetchSvg)&&F&&H.autoReplaceSvg&&x.dom.i2svg({node:r})};function E2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return H2(r)})}}),Object.defineProperty(c,"node",{get:function(){if(F){var r=M.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function O4(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,i=c.styles,n=c.transform;if(m1(n)&&e.found&&!r.found){var f=e.width,l=e.height,m={x:f/l/2,y:.5};s.style=F2(t(t({},i),{},{"transform-origin":"".concat(m.x+n.x/16,"em ").concat(m.y+n.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function W4(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(H.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:t(t({},s),{},{id:n}),children:r}]}]}function V1(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,i=c.iconName,n=c.transform,f=c.symbol,l=c.title,m=c.maskId,o=c.titleId,z=c.extra,v=c.watchable,V=v===void 0?!1:v,d=r.found?r:e,N=d.width,b=d.height,w=s==="fak",C=[H.replacementClass,i?"".concat(H.cssPrefix,"-").concat(i):""].filter(function(D){return z.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(z.classes).join(" "),L={children:[],attributes:t(t({},z.attributes),{},{"data-prefix":s,"data-icon":i,class:C,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(b)})},y=w&&!~z.classes.indexOf("fa-fw")?{width:"".concat(N/b*16*.0625,"em")}:{};V&&(L.attributes[j]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(o||o2())},children:[l]}),delete L.attributes.title);var g=t(t({},L),{},{prefix:s,iconName:i,main:e,mask:r,maskId:m,transform:n,symbol:f,styles:t(t({},y),z.styles)}),O=r.found&&e.found?B("generateAbstractMask",g)||{children:[],attributes:{}}:B("generateAbstractIcon",g)||{children:[],attributes:{}},W=O.children,U2=O.attributes;return g.children=W,g.attributes=U2,f?W4(g):O4(g)}function Z1(c){var a=c.content,e=c.width,r=c.height,s=c.transform,i=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,m=t(t(t({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});l&&(m[j]="");var o=t({},n.styles);m1(s)&&(o.transform=u4({transform:s,startCentered:!0,width:e,height:r}),o["-webkit-transform"]=o.transform);var z=F2(o);z.length>0&&(m.style=z);var v=[];return v.push({tag:"span",attributes:m,children:[a]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function q4(c){var a=c.content,e=c.title,r=c.extra,s=t(t(t({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),i=F2(r.styles);i.length>0&&(s.style=i);var n=[];return n.push({tag:"span",attributes:s,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var _2=k.styles;function a1(c){var a=c[0],e=c[1],r=c.slice(4),s=i1(r,1),i=s[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(q.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(q.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var G4={found:!1,width:512,height:512};function j4(c,a){!u3&&!H.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function e1(c,a){var e=a;return a==="fa"&&H.styleDefault!==null&&(a=U()),new Promise(function(r,s){var i={found:!1,width:512,height:512,icon:B("missingIconAbstract")||{}};if(e==="fa"){var n=P3(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&_2[a]&&_2[a][c]){var f=_2[a][c];return r(a1(f))}j4(c,a),r(t(t({},G4),{},{icon:H.showMissingIcons&&c?B("missingIconAbstract")||{}:{}}))})}var c3=function(){},r1=H.measurePerformance&&d2&&d2.mark&&d2.measure?d2:{mark:c3,measure:c3},e2='FA "6.5.2"',_4=function(a){return r1.mark("".concat(e2," ").concat(a," begins")),function(){return B3(a)}},B3=function(a){r1.mark("".concat(e2," ").concat(a," ends")),r1.measure("".concat(e2," ").concat(a),"".concat(e2," ").concat(a," begins"),"".concat(e2," ").concat(a," ends"))},h1={begin:_4,end:B3},y2=function(){};function a3(c){var a=c.getAttribute?c.getAttribute(j):null;return typeof a=="string"}function Y4(c){var a=c.getAttribute?c.getAttribute(f1):null,e=c.getAttribute?c.getAttribute(l1):null;return a&&e}function X4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(H.replacementClass)}function $4(){if(H.autoReplaceSvg===!0)return A2.replace;var c=A2[H.autoReplaceSvg];return c||A2.replace}function K4(c){return M.createElementNS("http://www.w3.org/2000/svg",c)}function Q4(c){return M.createElement(c)}function F3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?K4:Q4:e;if(typeof c=="string")return M.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){s.appendChild(F3(n,{ceFn:r}))}),s}function J4(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var A2={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(F3(s),e)}),e.getAttribute(j)===null&&H.keepOriginalSource){var r=M.createComment(J4(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~t1(e).indexOf(H.replacementClass))return A2.replace(a);var s=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(f,l){return l===H.replacementClass||l.match(s)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=r.map(function(f){return H2(f)}).join(`
`);e.setAttribute(j,""),e.innerHTML=n}};function e3(c){c()}function D3(c,a){var e=typeof a=="function"?a:y2;if(c.length===0)e();else{var r=e3;H.mutateApproach===r4&&(r=E.requestAnimationFrame||e3),r(function(){var s=$4(),i=h1.begin("mutate");c.map(s),i(),e()})}}var M1=!1;function R3(){M1=!0}function s1(){M1=!1}var B2=null;function r3(c){if(j1&&H.observeMutations){var a=c.treeCallback,e=a===void 0?y2:a,r=c.nodeCallback,s=r===void 0?y2:r,i=c.pseudoElementsCallback,n=i===void 0?y2:i,f=c.observeMutationsRoot,l=f===void 0?M:f;B2=new j1(function(m){if(!M1){var o=U();J(m).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!a3(z.addedNodes[0])&&(H.searchPseudoElements&&n(z.target),e(z.target)),z.type==="attributes"&&z.target.parentNode&&H.searchPseudoElements&&n(z.target.parentNode),z.type==="attributes"&&a3(z.target)&&~t4.indexOf(z.attributeName))if(z.attributeName==="class"&&Y4(z.target)){var v=R2(t1(z.target)),V=v.prefix,d=v.iconName;z.target.setAttribute(f1,V||o),d&&z.target.setAttribute(l1,d)}else X4(z.target)&&s(z.target)})}}),F&&B2.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Z4(){B2&&B2.disconnect()}function c6(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var i=s.split(":"),n=i[0],f=i.slice(1);return n&&f.length>0&&(r[n]=f.join(":").trim()),r},{})),e}function a6(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=R2(t1(c));return s.prefix||(s.prefix=U()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=P4(s.prefix,c.innerText)||z1(s.prefix,Q2(c.innerText))),!s.iconName&&H.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function e6(c){var a=J(c.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return H.autoA11y&&(e?a["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(r||o2()):(a["aria-hidden"]="true",a.focusable="false")),a}function r6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:A,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function s3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=a6(c),r=e.iconName,s=e.prefix,i=e.rest,n=e6(c),f=Z2("parseNodeAttributes",{},c),l=a.styleParser?c6(c):[];return t({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:A,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:n}},f)}var s6=k.styles;function E3(c){var a=H.autoReplaceSvg==="nest"?s3(c,{styleParser:!1}):s3(c);return~a.extra.classes.indexOf(C3)?B("generateLayersText",c,a):B("generateSvgReplacementMutation",c,a)}var I=new Set;o1.map(function(c){I.add("fa-".concat(c))});Object.keys(i2[h]).map(I.add.bind(I));Object.keys(i2[p]).map(I.add.bind(I));I=t2(I);function i3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();var e=M.documentElement.classList,r=function(z){return e.add("".concat(_1,"-").concat(z))},s=function(z){return e.remove("".concat(_1,"-").concat(z))},i=H.autoFetchSvg?I:o1.map(function(o){return"fa-".concat(o)}).concat(Object.keys(s6));i.includes("fa")||i.push("fa");var n=[".".concat(C3,":not([").concat(j,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat(j,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=J(c.querySelectorAll(n))}catch{}if(f.length>0)r("pending"),s("complete");else return Promise.resolve();var l=h1.begin("onTree"),m=f.reduce(function(o,z){try{var v=E3(z);v&&o.push(v)}catch(V){u3||V.name==="MissingIcon"&&console.error(V)}return o},[]);return new Promise(function(o,z){Promise.all(m).then(function(v){D3(v,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(v){l(),z(v)})})}function i6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;E3(c).then(function(e){e&&D3([e],a)})}function n6(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:c1(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:c1(s||{})),c(r,t(t({},e),{},{mask:s}))}}var f6=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?A:r,i=e.symbol,n=i===void 0?!1:i,f=e.mask,l=f===void 0?null:f,m=e.maskId,o=m===void 0?null:m,z=e.title,v=z===void 0?null:z,V=e.titleId,d=V===void 0?null:V,N=e.classes,b=N===void 0?[]:N,w=e.attributes,C=w===void 0?{}:w,L=e.styles,y=L===void 0?{}:L;if(a){var g=a.prefix,O=a.iconName,W=a.icon;return E2(t({type:"icon"},a),function(){return _("beforeDOMElementCreation",{iconDefinition:a,params:e}),H.autoA11y&&(v?C["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(d||o2()):(C["aria-hidden"]="true",C.focusable="false")),V1({icons:{main:a1(W),mask:l?a1(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:O,transform:t(t({},A),s),symbol:n,title:v,maskId:o,titleId:d,extra:{attributes:C,styles:y,classes:b}})})}},l6={mixout:function(){return{icon:n6(f6)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=i3,e.nodeCallback=i6,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?M:r,i=e.callback,n=i===void 0?function(){}:i;return i3(s,n)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,i=r.title,n=r.titleId,f=r.prefix,l=r.transform,m=r.symbol,o=r.mask,z=r.maskId,v=r.extra;return new Promise(function(V,d){Promise.all([e1(s,f),o.iconName?e1(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var b=i1(N,2),w=b[0],C=b[1];V([e,V1({icons:{main:w,mask:C},prefix:f,iconName:s,transform:l,symbol:m,maskId:z,title:i,titleId:n,extra:v,watchable:!0})])}).catch(d)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,i=e.main,n=e.transform,f=e.styles,l=F2(f);l.length>0&&(s.style=l);var m;return m1(n)&&(m=B("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),r.push(m||i.icon),{children:r,attributes:s}}}},o6={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return E2({type:"layer"},function(){_("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers")].concat(t2(i)).join(" ")},children:n}]})}}}},t6={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,n=r.classes,f=n===void 0?[]:n,l=r.attributes,m=l===void 0?{}:l,o=r.styles,z=o===void 0?{}:o;return E2({type:"counter",content:e},function(){return _("beforeDOMElementCreation",{content:e,params:r}),q4({content:e.toString(),title:i,extra:{attributes:m,styles:z,classes:["".concat(H.cssPrefix,"-layers-counter")].concat(t2(f))}})})}}}},m6={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?A:s,n=r.title,f=n===void 0?null:n,l=r.classes,m=l===void 0?[]:l,o=r.attributes,z=o===void 0?{}:o,v=r.styles,V=v===void 0?{}:v;return E2({type:"text",content:e},function(){return _("beforeDOMElementCreation",{content:e,params:r}),Z1({content:e,transform:t(t({},A),i),title:f,extra:{attributes:z,styles:V,classes:["".concat(H.cssPrefix,"-layers-text")].concat(t2(m))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,i=r.transform,n=r.extra,f=null,l=null;if(h3){var m=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();f=o.width/m,l=o.height/m}return H.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,Z1({content:e.innerHTML,width:f,height:l,transform:i,title:s,extra:n,watchable:!0})])}}},H6=new RegExp('"',"ug"),n3=[1105920,1112319];function z6(c){var a=c.replace(H6,""),e=b4(a,0),r=e>=n3[0]&&e<=n3[1],s=a.length===2?a[0]===a[1]:!1;return{value:Q2(s?a[0]:a),isSecondary:r||s}}function f3(c,a){var e="".concat(e4).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var i=J(c.children),n=i.filter(function(W){return W.getAttribute(K2)===a})[0],f=E.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(f4),m=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),r();if(l&&o!=="none"&&o!==""){var z=f.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?p:h,V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?n2[v][l[2].toLowerCase()]:l4[v][m],d=z6(z),N=d.value,b=d.isSecondary,w=l[0].startsWith("FontAwesome"),C=z1(V,N),L=C;if(w){var y=T4(N);y.iconName&&y.prefix&&(C=y.iconName,V=y.prefix)}if(C&&!b&&(!n||n.getAttribute(f1)!==V||n.getAttribute(l1)!==L)){c.setAttribute(e,L),n&&c.removeChild(n);var g=r6(),O=g.extra;O.attributes[K2]=a,e1(C,V).then(function(W){var U2=V1(t(t({},g),{},{icons:{main:W,mask:v1()},prefix:V,iconName:L,extra:O,watchable:!0})),D=M.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(D,c.firstChild):c.appendChild(D),D.outerHTML=U2.map(function(_3){return H2(_3)}).join(`
`),c.removeAttribute(e),r()}).catch(s)}else r()}else r()})}function v6(c){return Promise.all([f3(c,"::before"),f3(c,"::after")])}function V6(c){return c.parentNode!==document.head&&!~s4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(K2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function l3(c){if(F)return new Promise(function(a,e){var r=J(c.querySelectorAll("*")).filter(V6).map(v6),s=h1.begin("searchPseudoElements");R3(),Promise.all(r).then(function(){s(),s1(),a()}).catch(function(){s(),s1(),e()})})}var h6={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=l3,e}}},provides:function(a){a.pseudoElements2svg=function(e){var r=e.node,s=r===void 0?M:r;H.searchPseudoElements&&l3(s)}}},o3=!1,M6={mixout:function(){return{dom:{unwatch:function(){R3(),o3=!0}}}},hooks:function(){return{bootstrap:function(){r3(Z2("mutationObserverCallbacks",{}))},noAuto:function(){Z4()},watch:function(e){var r=e.observeMutationsRoot;o3?s1():r3(Z2("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},t3=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),n=i[0],f=i.slice(1).join("-");if(n&&f==="h")return r.flipX=!0,r;if(n&&f==="v")return r.flipY=!0,r;if(f=parseFloat(f),isNaN(f))return r;switch(n){case"grow":r.size=r.size+f;break;case"shrink":r.size=r.size-f;break;case"left":r.x=r.x-f;break;case"right":r.x=r.x+f;break;case"up":r.y=r.y-f;break;case"down":r.y=r.y+f;break;case"rotate":r.rotate=r.rotate+f;break}return r},e)},p6={mixout:function(){return{parse:{transform:function(e){return t3(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-transform");return s&&(e.transform=t3(s)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var r=e.main,s=e.transform,i=e.containerWidth,n=e.iconWidth,f={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),m="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),o="rotate(".concat(s.rotate," 0 0)"),z={transform:"".concat(l," ").concat(m," ").concat(o)},v={transform:"translate(".concat(n/2*-1," -256)")},V={outer:f,inner:z,path:v};return{tag:"g",attributes:t({},V.outer),children:[{tag:"g",attributes:t({},V.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:t(t({},r.icon.attributes),V.path)}]}]}}}},Y2={x:0,y:0,width:"100%",height:"100%"};function m3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function u6(c){return c.tag==="g"?c.children:[c]}var C6={hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-mask"),i=s?R2(s.split(" ").map(function(n){return n.trim()})):v1();return i.prefix||(i.prefix=U()),e.mask=i,e.maskId=r.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var r=e.children,s=e.attributes,i=e.main,n=e.mask,f=e.maskId,l=e.transform,m=i.width,o=i.icon,z=n.width,v=n.icon,V=p4({transform:l,containerWidth:z,iconWidth:m}),d={tag:"rect",attributes:t(t({},Y2),{},{fill:"white"})},N=o.children?{children:o.children.map(m3)}:{},b={tag:"g",attributes:t({},V.inner),children:[m3(t({tag:o.tag,attributes:t(t({},o.attributes),V.path)},N))]},w={tag:"g",attributes:t({},V.outer),children:[b]},C="mask-".concat(f||o2()),L="clip-".concat(f||o2()),y={tag:"mask",attributes:t(t({},Y2),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,w]},g={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:u6(v)},y]};return r.push(g,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(C,")")},Y2)}),{children:r,attributes:s}}}},d6={provides:function(a){var e=!1;E.matchMedia&&(e=E.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:t(t({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=t(t({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:t(t({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:t(t({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:t(t({},n),{},{values:"1;0;1;1;0;1;"})}),r.push(f),r.push({tag:"path",attributes:t(t({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:t(t({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||r.push({tag:"path",attributes:t(t({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:t(t({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},L6={hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return e.symbol=i,e}}}},g6=[d4,l6,o6,t6,m6,h6,M6,p6,C6,d6,L6];D4(g6,{mixoutsTo:x});var Y6=x.noAuto,U3=x.config,X6=x.library,I3=x.dom,O3=x.parse,$6=x.findIconDefinition,K6=x.toHtml,W3=x.icon,Q6=x.layer,x6=x.text,N6=x.counter;var b6=["*"],S6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},k6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},w6=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(e=>a[e]?e:null).filter(e=>e)},p1=new WeakSet,q3="fa-auto-css";function y6(c,a){if(!a.autoAddCss||p1.has(c))return;if(c.getElementById(q3)!=null){a.autoAddCss=!1,p1.add(c);return}let e=c.createElement("style");e.setAttribute("type","text/css"),e.setAttribute("id",q3),e.innerHTML=I3.css();let r=c.head.childNodes,s=null;for(let i=r.length-1;i>-1;i--){let n=r[i],f=n.nodeName.toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(s=n)}c.head.insertBefore(e,s),a.autoAddCss=!1,p1.add(c)}var A6=c=>c.prefix!==void 0&&c.iconName!==void 0,P6=(c,a)=>A6(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:a,iconName:c},T6=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(r){U3.autoAddCss=r,this._autoAddCss=r}get autoAddCss(){return this._autoAddCss}};a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=Z({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),B6=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...r){for(let s of r){s.prefix in this.definitions||(this.definitions[s.prefix]={}),this.definitions[s.prefix][s.iconName]=s;for(let i of s.icon[2])typeof i=="string"&&(this.definitions[s.prefix][i]=s)}}addIconPacks(...r){for(let s of r){let i=Object.keys(s).map(n=>s[n]);this.addIcons(...i)}}getIconDefinition(r,s){return r in this.definitions&&s in this.definitions[r]?this.definitions[r][s]:null}};a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=Z({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),F6=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(r){if("size"in r)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(s){return new(s||a)},a.\u0275dir=z2({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[v2]});let c=a;return c})(),D6=(()=>{let a=class a{constructor(r,s){this.renderer=r,this.elementRef=s}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(r){"size"in r&&(r.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${r.size.currentValue}`),r.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${r.size.previousValue}`))}};a.\u0275fac=function(s){return new(s||a)(S(M2),S(V2))},a.\u0275cmp=c2({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[v2,a2],ngContentSelectors:b6,decls:1,vars:0,template:function(s,i){s&1&&(A1(),P1(0))},encapsulation:2});let c=a;return c})(),G3=(()=>{let a=class a{constructor(r,s,i,n,f){this.sanitizer=r,this.config=s,this.iconLibrary=i,this.stackItem=n,this.document=x1(F1),f!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(r){if(this.icon==null&&this.config.fallbackIcon==null){k6();return}if(r){let s=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(s!=null){let i=this.buildParams();y6(this.document,this.config);let n=W3(s,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(r){let s=P6(r,this.config.defaultPrefix);if("icon"in s)return s;let i=this.iconLibrary.getIconDefinition(s.prefix,s.iconName);return i??(S6(s),null)}buildParams(){let r={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},s=typeof this.transform=="string"?O3.transform(this.transform):this.transform;return{title:this.title,transform:s,classes:w6(r),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}};a.\u0275fac=function(s){return new(s||a)(S(U1),S(T6),S(B6),S(F6,8),S(D6,8))},a.\u0275cmp=c2({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(s,i){s&2&&(w1("innerHTML",i.renderedIconHTML,b1),S1("title",i.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[v2,a2],decls:0,vars:0,template:function(s,i){},encapsulation:2});let c=a;return c})();var j3=(()=>{let a=class a{};a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=N1({type:a}),a.\u0275inj=g1({});let c=a;return c})();var z0={prefix:"fas",iconName:"backward",icon:[512,512,[9194],"f04a","M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"]};var u1={prefix:"fas",iconName:"comments",icon:[640,512,[128490,61670],"f086","M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"]};var C1={prefix:"fas",iconName:"heart-crack",icon:[512,512,[128148,"heart-broken"],"f7a9","M119.4 44.1c23.3-3.9 46.8-1.9 68.6 5.3l49.8 77.5-75.4 75.4c-1.5 1.5-2.4 3.6-2.3 5.8s1 4.2 2.6 5.7l112 104c2.9 2.7 7.4 2.9 10.5 .3s3.8-7 1.7-10.4l-60.4-98.1 90.7-75.6c2.6-2.1 3.5-5.7 2.4-8.8L296.8 61.8c28.5-16.7 62.4-23.2 95.7-17.6C461.5 55.6 512 115.2 512 185.1v5.8c0 41.5-17.2 81.2-47.6 109.5L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9L47.6 300.4C17.2 272.1 0 232.4 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141z"]};var d1={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]};var L1={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]};function E6(c,a){if(c&1&&(u2(0,"div",3),k1(1,"fa-icon",4),u2(2,"span"),T1(3),O2()()),c&2){let e=a.$implicit;h2(),p2("icon",e.icon),h2(2),B1(e.value)}}function U6(c,a){if(c&1&&(u2(0,"div",1),I2(1,E6,4,2,"div",2),O2()),c&2){let e=y1();h2(),p2("ngForOf",e.stats)}}var u0=(()=>{let a=class a{get stats(){return this.videoData?[{icon:L1,value:this.videoData.statistics?.viewCount||0},{icon:d1,value:this.videoData.statistics?.likeCount||0},{icon:C1,value:this.videoData.statistics?.dislikeCount||0},{icon:u1,value:this.videoData.statistics?.commentCount||0}]:[{icon:L1,value:0},{icon:d1,value:0},{icon:C1,value:0},{icon:u1,value:0}]}};a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=c2({type:a,selectors:[["app-video-statistics"]],inputs:{videoData:"videoData"},standalone:!0,features:[a2],decls:1,vars:1,consts:[["class","search-item-statictics",4,"ngIf"],[1,"search-item-statictics"],["class","stat-item",4,"ngFor","ngForOf"],[1,"stat-item"],[3,"icon"]],template:function(s,i){s&1&&I2(0,U6,2,1,"div",0),s&2&&p2("ngIf",i.videoData)},dependencies:[E1,D1,R1,j3,G3],styles:[".search-item-statictics[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-size:14px;gap:5px}.search-item-statictics[_ngcontent-%COMP%]:not(:last-child){margin-bottom:21px}.stat-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px}.stat-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px}"]});let c=a;return c})();var I6=W2("videos"),O6=W2("favoriteVideos"),W6=C2(O6,c=>c.favoriteIds),q6=C2(I6,c=>c.videoEntities),L0=C2(W6,q6,(c,a)=>c.map(e=>a[e]));var x0=(()=>{let a=class a{set currentVideoData(r){localStorage.setItem("currentVideo",JSON.stringify(r))}get currentVideoData(){let r=localStorage.getItem("currentVideo");return r?JSON.parse(r):void 0}clearVideoData(){localStorage.removeItem("currentVideo")}};a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=Z({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})();export{G6 as a,G3 as b,j3 as c,z0 as d,u0 as e,W6 as f,L0 as g,x0 as h};
