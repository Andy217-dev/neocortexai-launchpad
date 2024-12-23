"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[464],{5987:function(t){var e={single_source_shortest_paths:function(t,i,s){var n,r,o,l,a,h,u,d={},c={};c[i]=0;var p=e.PriorityQueue.make();for(p.push(i,0);!p.empty();)for(o in r=(n=p.pop()).value,l=n.cost,a=t[r]||{})a.hasOwnProperty(o)&&(h=l+a[o],u=c[o],(void 0===c[o]||u>h)&&(c[o]=h,p.push(o,h),d[o]=r));if(void 0!==s&&void 0===c[s])throw Error(["Could not find a path from ",i," to ",s,"."].join(""));return d},extract_shortest_path_from_predecessor_list:function(t,e){for(var i=[],s=e;s;)i.push(s),t[s],s=t[s];return i.reverse(),i},find_path:function(t,i,s){var n=e.single_source_shortest_paths(t,i,s);return e.extract_shortest_path_from_predecessor_list(n,s)},PriorityQueue:{make:function(t){var i,s=e.PriorityQueue,n={};for(i in t=t||{},s)s.hasOwnProperty(i)&&(n[i]=s[i]);return n.queue=[],n.sorter=t.sorter||s.default_sorter,n},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){this.queue.push({value:t,cost:e}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e},2378:function(t){t.exports=function(t){for(var e=[],i=t.length,s=0;s<i;s++){var n=t.charCodeAt(s);if(n>=55296&&n<=56319&&i>s+1){var r=t.charCodeAt(s+1);r>=56320&&r<=57343&&(n=(n-55296)*1024+r-56320+65536,s+=1)}if(n<128){e.push(n);continue}if(n<2048){e.push(n>>6|192),e.push(63&n|128);continue}if(n<55296||n>=57344&&n<65536){e.push(n>>12|224),e.push(n>>6&63|128),e.push(63&n|128);continue}if(n>=65536&&n<=1114111){e.push(n>>18|240),e.push(n>>12&63|128),e.push(n>>6&63|128),e.push(63&n|128);continue}e.push(239,191,189)}return new Uint8Array(e).buffer}},2362:function(t,e,i){i.d(e,{j:function(){return th}});let s={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},n={ms:t=>1e3*t,s:t=>t/1e3},r=()=>{},o=t=>t;function l(t,e=!0){if(t&&"finished"!==t.playState)try{t.stop?t.stop():(e&&t.commitStyles(),t.cancel())}catch(t){}}let a=t=>t(),h=(t,e,i=s.duration)=>new Proxy({animations:t.map(a).filter(Boolean),duration:i,options:e},d),u=t=>t.animations[0],d={get:(t,e)=>{let i=u(t);switch(e){case"duration":return t.duration;case"currentTime":return n.s((null==i?void 0:i[e])||0);case"playbackRate":case"playState":return null==i?void 0:i[e];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(c)).catch(r)),t.finished;case"stop":return()=>{t.animations.forEach(t=>l(t))};case"forEachNative":return e=>{t.animations.forEach(i=>e(i,t))};default:return void 0===(null==i?void 0:i[e])?void 0:()=>t.animations.forEach(t=>t[e]())}},set:(t,e,i)=>{switch(e){case"currentTime":i=n.ms(i);case"currentTime":case"playbackRate":for(let s=0;s<t.animations.length;s++)t.animations[s][e]=i;return!0}return!1}},c=t=>t.finished,p=t=>"object"==typeof t&&Boolean(t.createAnimation),f=t=>"number"==typeof t,v=t=>Array.isArray(t)&&!f(t[0]),m=(t,e,i)=>-i*t+i*e+t,y=(t,e,i)=>e-t==0?1:(i-t)/(e-t);function _(t,e){let i=t[t.length-1];for(let s=1;s<=e;s++){let n=y(0,e,s);t.push(m(i,1,n))}}let $=(t,e,i)=>{let s=e-t;return((i-t)%s+s)%s+t},g=(t,e,i)=>Math.min(Math.max(i,t),e),A=(t,e,i)=>(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t;function E(t,e,i,s){if(t===e&&i===s)return o;let n=e=>(function(t,e,i,s,n){let r,o;let l=0;do(r=A(o=e+(i-e)/2,s,n)-t)>0?i=o:e=o;while(Math.abs(r)>1e-7&&++l<12);return o})(e,0,1,t,i);return t=>0===t||1===t?t:A(n(t),e,s)}let S=(t,e="end")=>i=>{i="end"===e?Math.min(i,.999):Math.max(i,.001);let s=i*t;return g(0,1,("end"===e?Math.floor(s):Math.ceil(s))/t)},b=t=>"function"==typeof t,w=t=>Array.isArray(t)&&f(t[0]),C={ease:E(.25,.1,.25,1),"ease-in":E(.42,0,1,1),"ease-in-out":E(.42,0,.58,1),"ease-out":E(0,0,.58,1)},T=/\((.*?)\)/;function P(t){if(b(t))return t;if(w(t))return E(...t);if(C[t])return C[t];if(t.startsWith("steps")){let e=T.exec(t);if(e){let t=e[1].split(",");return S(parseFloat(t[0]),t[1].trim())}}return o}class x{constructor(t,e=[0,1],{easing:i,duration:n=s.duration,delay:r=s.delay,endDelay:l=s.endDelay,repeat:a=s.repeat,offset:h,direction:u="normal"}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=o,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((t,e)=>{this.resolve=t,this.reject=e}),p(i=i||s.easing)){let t=i.createAnimation(e);i=t.easing,e=t.keyframes||e,n=t.duration||n}this.repeat=a,this.easing=v(i)?o:P(i),this.updateDuration(n);let d=function(t,e=function(t){let e=[0];return _(e,t-1),e}(t.length),i=o){let s=t.length,n=s-e.length;return n>0&&_(e,n),n=>{var r;let o=0;for(;o<s-2&&!(n<e[o+1]);o++);let l=g(0,1,y(e[o],e[o+1],n)),a=(r=o,v(i)?i[$(0,i.length,r)]:i);return l=a(l),m(t[o],t[o+1],l)}}(e,h,v(i)?i.map(P):o);this.tick=e=>{var i;let s=0;s=void 0!==this.pauseTime?this.pauseTime:(e-this.startTime)*this.rate,this.t=s,s/=1e3,s=Math.max(s-r,0),"finished"===this.playState&&void 0===this.pauseTime&&(s=this.totalDuration);let n=s/this.duration,o=Math.floor(n),a=n%1;!a&&n>=1&&(a=1),1===a&&o--;let h=o%2;("reverse"===u||"alternate"===u&&h||"alternate-reverse"===u&&!h)&&(a=1-a);let c=s>=this.totalDuration?1:Math.min(a,1),p=d(this.easing(c));t(p);let f=void 0===this.pauseTime&&("finished"===this.playState||s>=this.totalDuration+l);f?(this.playState="finished",null===(i=this.resolve)||void 0===i||i.call(this,p)):"idle"!==this.playState&&(this.frameRequestId=requestAnimationFrame(this.tick))},this.play()}play(){let t=performance.now();this.playState="running",void 0!==this.pauseTime?this.startTime=t-this.pauseTime:this.startTime||(this.startTime=t),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var t;this.playState="idle",void 0!==this.frameRequestId&&cancelAnimationFrame(this.frameRequestId),null===(t=this.reject)||void 0===t||t.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(t){this.duration=t,this.totalDuration=t*(this.repeat+1)}get currentTime(){return this.t}set currentTime(t){void 0!==this.pauseTime||0===this.rate?this.pauseTime=t:this.startTime=performance.now()-t/this.rate}get playbackRate(){return this.rate}set playbackRate(t){this.rate=t}}var k=i(4394);class O{setAnimation(t){this.animation=t,null==t||t.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}let U=new WeakMap;function M(t){return U.has(t)||U.set(t,{transforms:[],values:new Map}),U.get(t)}let R=["","X","Y","Z"],N={x:"translateX",y:"translateY",z:"translateZ"},H={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},D={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:H,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:o},skew:H},j=new Map,L=t=>`--motion-${t}`,B=["x","y","z"];["translate","scale","rotate","skew"].forEach(t=>{R.forEach(e=>{B.push(t+e),j.set(L(t+e),D[t])})});let I=(t,e)=>B.indexOf(t)-B.indexOf(e),z=new Set(B),V=t=>z.has(t),q=(t,e)=>{var i;N[e]&&(e=N[e]);let{transforms:s}=M(t);i=e,-1===s.indexOf(i)&&s.push(i),t.style.transform=W(s)},W=t=>t.sort(I).reduce(Y,"").trim(),Y=(t,e)=>`${t} ${e}(var(${L(e)}))`,F=t=>t.startsWith("--"),J=new Set,K=(t,e)=>document.createElement("div").animate(t,e),Z={cssRegisterProperty:()=>"undefined"!=typeof CSS&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{K({opacity:[1]})}catch(t){return!1}return!0},finished:()=>Boolean(K({opacity:[0,1]},{duration:.001}).finished),linearEasing:()=>{try{K({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0}},Q={},X={};for(let t in Z)X[t]=()=>(void 0===Q[t]&&(Q[t]=Z[t]()),Q[t]);let G=(t,e)=>{let i="",s=Math.round(e/.015);for(let e=0;e<s;e++)i+=t(y(0,s-1,e))+", ";return i.substring(0,i.length-2)},tt=(t,e)=>b(t)?X.linearEasing()?`linear(${G(t,e)})`:s.easing:w(t)?te(t):t,te=([t,e,i,s])=>`cubic-bezier(${t}, ${e}, ${i}, ${s})`,ti=t=>Array.isArray(t)?t:[t];function ts(t){return N[t]&&(t=N[t]),V(t)?L(t):t}let tn={get:(t,e)=>{let i=F(e=ts(e))?t.style.getPropertyValue(e):getComputedStyle(t)[e];if(!i&&0!==i){let t=j.get(e);t&&(i=t.initialValue)}return i},set:(t,e,i)=>{F(e=ts(e))?t.style.setProperty(e,i):t.style[e]=i}},tr=t=>"string"==typeof t,to=(t,e)=>t[e]?Object.assign(Object.assign({},t),t[e]):Object.assign({},t),tl=function(t,e,i={}){var a,u,d,c,m;"string"==typeof(a=t)?u?(null!==(d=u[a])&&void 0!==d||(u[a]=document.querySelectorAll(a)),a=u[a]):a=document.querySelectorAll(a):a instanceof Element&&(a=[a]),t=Array.from(a||[]);let y=t.length;(0,k.k)(Boolean(y),"No valid element provided."),(0,k.k)(Boolean(e),"No keyframes defined.");let _=[];for(let a=0;a<y;a++){let h=t[a];for(let t in e){let u=to(i,t);u.delay=(c=u.delay,m=a,b(c)?c(m,y):c);let d=function(t,e,i,a={},h){var u;let d;let c=window.__MOTION_DEV_TOOLS_RECORD,m=!1!==a.record&&c,{duration:y=s.duration,delay:_=s.delay,endDelay:$=s.endDelay,repeat:g=s.repeat,easing:A=s.easing,persist:E=!1,direction:S,offset:w,allowWebkitAcceleration:C=!1}=a,T=M(t),P=V(e),x=X.waapi();P&&q(t,e);let k=ts(e),U=((u=T.values).has(k)||u.set(k,new O),u.get(k)),R=j.get(k);return l(U.animation,!(p(A)&&U.generator)&&!1!==a.record),()=>{let s=()=>{var e,i;return null!==(i=null!==(e=tn.get(t,k))&&void 0!==e?e:null==R?void 0:R.initialValue)&&void 0!==i?i:0},l=function(t,e){for(let i=0;i<t.length;i++)null===t[i]&&(t[i]=i?t[i-1]:e());return t}(ti(i),s),u=function(t,e){var i;let s=(null==e?void 0:e.toDefaultUnit)||o,n=t[t.length-1];if(tr(n)){let t=(null===(i=n.match(/(-?[\d.]+)([a-z%]*)/))||void 0===i?void 0:i[2])||"";t&&(s=e=>e+t)}return s}(l,R);if(p(A)){let t=A.createAnimation(l,"opacity"!==e,s,k,U);A=t.easing,l=t.keyframes||l,y=t.duration||y}if(F(k)&&(X.cssRegisterProperty()?function(t){if(!J.has(t)){J.add(t);try{let{syntax:e,initialValue:i}=j.has(t)?j.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:e,initialValue:i})}catch(t){}}}(k):x=!1),P&&!X.linearEasing()&&(b(A)||v(A)&&A.some(b))&&(x=!1),x){R&&(l=l.map(t=>f(t)?R.toDefaultUnit(t):t)),1===l.length&&(!X.partialKeyframes()||m)&&l.unshift(s());let e={delay:n.ms(_),duration:n.ms(y),endDelay:n.ms($),easing:v(A)?void 0:tt(A,y),direction:S,iterations:g+1,fill:"both"};(d=t.animate({[k]:l,offset:w,easing:v(A)?A.map(t=>tt(t,y)):void 0},e)).finished||(d.finished=new Promise((t,e)=>{d.onfinish=t,d.oncancel=e}));let i=l[l.length-1];d.finished.then(()=>{E||(tn.set(t,k,i),d.cancel())}).catch(r),C||(d.playbackRate=1.000001)}else if(h&&P)1===(l=l.map(t=>"string"==typeof t?parseFloat(t):t)).length&&l.unshift(parseFloat(s())),d=new h(e=>{tn.set(t,k,u?u(e):e)},l,Object.assign(Object.assign({},a),{duration:y,easing:A}));else{let e=l[l.length-1];tn.set(t,k,R&&f(e)?R.toDefaultUnit(e):e)}return m&&c(t,e,l,{duration:y,delay:_,easing:A,repeat:g,offset:w},"motion-one"),U.setAnimation(d),d}}(h,t,e[t],u,x);_.push(d)}}return h(_,i,i.duration)};function ta(t,e={}){return h([()=>{let i=new x(t,[0,1],e);return i.finished.catch(()=>{}),i}],e,e.duration)}function th(t,e,i){let s=b(t)?ta:tl;return s(t,e,i)}},5713:function(t,e,i){i.d(e,{M:function(){return s}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s=t=>e=>"function"==typeof e?(customElements.define(t,e),e):((t,e)=>{let{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e)},9662:function(t,e,i){i.d(e,{C:function(){return r}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}}:{...e,finisher(i){i.createProperty(e.key,t)}},n=(t,e,i)=>{e.constructor.createProperty(i,t)};function r(t){return(e,i)=>void 0!==i?n(t,e,i):s(t,e)}},7935:function(t,e,i){/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s;null!=(null===(s=window.HTMLSlotElement)||void 0===s?void 0:s.prototype.assignedElements)||((t,e)=>t.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE))},43:function(t,e,i){i(7935)},9158:function(t,e,i){i.d(e,{S:function(){return n}});var s=i(9662);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function n(t){return(0,s.C)({...t,state:!0})}},3588:function(t,e,i){var s;i.d(e,{fl:function(){return A},iv:function(){return u}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=window,r=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),l=new WeakMap;class a{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(r&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=l.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&l.set(e,t))}return t}toString(){return this.cssText}}let h=t=>new a("string"==typeof t?t:t+"",void 0,o),u=(t,...e)=>{let i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new a(i,t,o)},d=(t,e)=>{r?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{let i=document.createElement("style"),s=n.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)})},c=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return h(e)})(t):t,p=window,f=p.trustedTypes,v=f?f.emptyScript:"",m=p.reactiveElementPolyfillSupport,y={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},_=(t,e)=>e!==t&&(e==e||t==t),$={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:_},g="finalized";class A extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||$}static finalize(){if(this.hasOwnProperty(g))return!1;this[g]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Ep(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=$){var s;let n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){let r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:y).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;let s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){let t=s.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:y;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||_)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1,i=this._$AL;try{(e=this.shouldUpdate(i))?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}A[g]=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},null==m||m({ReactiveElement:A}),(null!==(s=p.reactiveElementVersions)&&void 0!==s?s:p.reactiveElementVersions=[]).push("1.6.2")},8922:function(t,e,i){i.d(e,{YP:function(){return o.YP},dy:function(){return o.dy},iv:function(){return r.iv},oi:function(){return l}});var s,n,r=i(3588),o=i(3692);class l extends r.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,o.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return o.Jb}}l.finalized=!0,l._$litElement$=!0,null===(s=globalThis.litElementHydrateSupport)||void 0===s||s.call(globalThis,{LitElement:l});let a=globalThis.litElementPolyfillSupport;null==a||a({LitElement:l}),(null!==(n=globalThis.litElementVersions)&&void 0!==n?n:globalThis.litElementVersions=[]).push("3.3.2")},7522:function(t,e,i){i.d(e,{$:function(){return l}});var s,n=i(3692);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6};class o{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let l=(s=class extends o{constructor(t){var e;if(super(t),t.type!==r.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,s;if(void 0===this.it){for(let s in this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)!e[s]||(null===(i=this.nt)||void 0===i?void 0:i.has(s))||this.it.add(s);return this.render(e)}let r=t.element.classList;for(let t in this.it.forEach(t=>{t in e||(r.remove(t),this.it.delete(t))}),e){let i=!!e[t];i===this.it.has(t)||(null===(s=this.nt)||void 0===s?void 0:s.has(t))||(i?(r.add(t),this.it.add(t)):(r.remove(t),this.it.delete(t)))}return n.Jb}},(...t)=>({_$litDirective$:s,values:t}))},577:function(t,e,i){i.d(e,{o:function(){return n}});var s=i(3692);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=t=>null!=t?t:s.Ld},3692:function(t,e,i){var s;i.d(e,{Jb:function(){return T},Ld:function(){return P},YP:function(){return C},dy:function(){return w},sY:function(){return q}});let n=window,r=n.trustedTypes,o=r?r.createPolicy("lit-html",{createHTML:t=>t}):void 0,l="$lit$",a=`lit$${(Math.random()+"").slice(9)}$`,h="?"+a,u=`<${h}>`,d=document,c=()=>d.createComment(""),p=t=>null===t||"object"!=typeof t&&"function"!=typeof t,f=Array.isArray,v=t=>f(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),m="[ 	\n\f\r]",y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,$=/>/g,g=RegExp(`>|${m}(?:([^\\s"'>=/]+)(${m}*=${m}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),A=/'/g,E=/"/g,S=/^(?:script|style|textarea|title)$/i,b=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),w=b(1),C=b(2),T=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),x=new WeakMap,k=d.createTreeWalker(d,129,null,!1);function O(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(e):e}let U=(t,e)=>{let i=t.length-1,s=[],n,r=2===e?"<svg>":"",o=y;for(let e=0;e<i;e++){let i=t[e],h,d,c=-1,p=0;for(;p<i.length&&(o.lastIndex=p,null!==(d=o.exec(i)));)p=o.lastIndex,o===y?"!--"===d[1]?o=_:void 0!==d[1]?o=$:void 0!==d[2]?(S.test(d[2])&&(n=RegExp("</"+d[2],"g")),o=g):void 0!==d[3]&&(o=g):o===g?">"===d[0]?(o=null!=n?n:y,c=-1):void 0===d[1]?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=void 0===d[3]?g:'"'===d[3]?E:A):o===E||o===A?o=g:o===_||o===$?o=y:(o=g,n=void 0);let f=o===g&&t[e+1].startsWith("/>")?" ":"";r+=o===y?i+u:c>=0?(s.push(h),i.slice(0,c)+l+i.slice(c)+a+f):i+a+(-2===c?(s.push(void 0),e):f)}return[O(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class M{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0,u=t.length-1,d=this.parts,[p,f]=U(t,e);if(this.el=M.createElement(p,i),k.currentNode=this.el.content,2===e){let t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=k.nextNode())&&d.length<u;){if(1===s.nodeType){if(s.hasAttributes()){let t=[];for(let e of s.getAttributeNames())if(e.endsWith(l)||e.startsWith(a)){let i=f[o++];if(t.push(e),void 0!==i){let t=s.getAttribute(i.toLowerCase()+l).split(a),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?j:"?"===e[1]?B:"@"===e[1]?I:D})}else d.push({type:6,index:n})}for(let e of t)s.removeAttribute(e)}if(S.test(s.tagName)){let t=s.textContent.split(a),e=t.length-1;if(e>0){s.textContent=r?r.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],c()),k.nextNode(),d.push({type:2,index:++n});s.append(t[e],c())}}}else if(8===s.nodeType){if(s.data===h)d.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(a,t+1));)d.push({type:7,index:n}),t+=a.length-1}}n++}}static createElement(t,e){let i=d.createElement("template");return i.innerHTML=t,i}}function R(t,e,i=t,s){var n,r,o,l;if(e===T)return e;let a=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl,h=p(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===h?a=void 0:(a=new h(t))._$AT(t,i,s),void 0!==s?(null!==(o=(l=i)._$Co)&&void 0!==o?o:l._$Co=[])[s]=a:i._$Cl=a),void 0!==a&&(e=R(t,a._$AS(t,e.values),a,s)),e}class N{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:d).importNode(i,!0);k.currentNode=n;let r=k.nextNode(),o=0,l=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new H(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new z(r,this,t)),this._$AV.push(e),a=s[++l]}o!==(null==a?void 0:a.index)&&(r=k.nextNode(),o++)}return k.currentNode=d,n}v(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class H{constructor(t,e,i,s){var n;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){p(t=R(this,t,e))?t===P||null==t||""===t?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==P&&p(this._$AH)?this._$AA.nextSibling.data=t:this.$(d.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=M.createElement(O(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{let t=new N(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=x.get(t.strings);return void 0===e&&x.set(t.strings,e=new M(t)),e}T(t){f(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let n of t)s===e.length?e.push(i=new H(this.k(c()),this.k(c()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class D{constructor(t,e,i,s,n){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){let n=this.strings,r=!1;if(void 0===n)(r=!p(t=R(this,t,e,0))||t!==this._$AH&&t!==T)&&(this._$AH=t);else{let s,o;let l=t;for(t=n[0],s=0;s<n.length-1;s++)(o=R(this,l[i+s],e,s))===T&&(o=this._$AH[s]),r||(r=!p(o)||o!==this._$AH[s]),o===P?t=P:t!==P&&(t+=(null!=o?o:"")+n[s+1]),this._$AH[s]=o}r&&!s&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class j extends D{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}}let L=r?r.emptyScript:"";class B extends D{constructor(){super(...arguments),this.type=4}j(t){t&&t!==P?this.element.setAttribute(this.name,L):this.element.removeAttribute(this.name)}}class I extends D{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=R(this,t,e,0))&&void 0!==i?i:P)===T)return;let s=this._$AH,n=t===P&&s!==P||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==P&&(s===P||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class z{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}}let V=n.litHtmlPolyfillSupport;null==V||V(M,H),(null!==(s=n.litHtmlVersions)&&void 0!==s?s:n.litHtmlVersions=[]).push("2.8.0");let q=(t,e,i)=>{var s,n;let r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e,o=r._$litPart$;if(void 0===o){let t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new H(e.insertBefore(c(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o}}}]);