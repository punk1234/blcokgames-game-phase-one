import{r as C}from"./vendor.c51f11b9.js";import{a as c,j as m,F as T}from"./main.1d508b0f.js";import{q as J,p as G,B as E,aL as ee,ag as te,R as B,g as I,aM as ne,aN as oe,aO as ie,aP as re}from"./Main.5c9650dc.js";import{a9 as ae,X as j}from"./App.60c17eec.js";import{S as se}from"./index.ad7db8ea.js";import{g as de}from"./FaucetHintButton.56c1274d.js";import"./chunk-MTWSNRX5.47c61f42.js";import"./index.714057ab.js";var le={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"}}]},name:"dollar-circle",theme:"outlined"},ce=le,z=function(e,n){return C.exports.createElement(J,G(G({},e),{},{ref:n,icon:ce}))};z.displayName="DollarCircleOutlined";var ue=C.exports.forwardRef(z);/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var b=function(){return b=Object.assign||function(e){for(var n,o=1,r=arguments.length;o<r;o++){n=arguments[o];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},b.apply(this,arguments)};function he(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]]);return n}function D(t,e,n,o){return new(n||(n=Promise))(function(r,i){function a(s){try{u(o.next(s))}catch(f){i(f)}}function d(s){try{u(o.throw(s))}catch(f){i(f)}}function u(s){s.done?r(s.value):new n(function(f){f(s.value)}).then(a,d)}u((o=o.apply(t,e||[])).next())})}function P(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,a;return a={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function d(s){return function(f){return u([s,f])}}function u(s){if(o)throw new TypeError("Generator is already executing.");for(;n;)try{if(o=1,r&&(i=s[0]&2?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[s[0]&2,i.value]),s[0]){case 0:case 1:i=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,r=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){n.label=s[1];break}if(s[0]===6&&n.label<i[1]){n.label=i[1],i=s;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(s);break}i[2]&&n.ops.pop(),n.trys.pop();continue}s=e.call(t,n)}catch(f){s=[6,f],r=0}finally{o=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}function fe(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var o=Array(t),r=0,e=0;e<n;e++)for(var i=arguments[e],a=0,d=i.length;a<d;a++,r++)o[r]=i[a];return o}var pe=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function me(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function ge(t,e){return e={exports:{}},t(e,e.exports),e.exports}var ve=ge(function(t,e){(function(n,o){o(e)})(pe,function(n){function o(l){if(Array.isArray(l)){for(var h=0,k=Array(l.length);h<l.length;h++)k[h]=l[h];return k}return Array.from(l)}Object.defineProperty(n,"__esModule",{value:!0});var r=!1;if(typeof window!="undefined"){var i={get passive(){r=!0}};window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}var a=typeof window!="undefined"&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),d=[],u=!1,s=-1,f=void 0,_=void 0,W=function(l){return d.some(function(h){return!(!h.options.allowTouchMove||!h.options.allowTouchMove(l))})},y=function(l){var h=l||window.event;return!!W(h.target)||1<h.touches.length||(h.preventDefault&&h.preventDefault(),!1)},M=function(){setTimeout(function(){_!==void 0&&(document.body.style.paddingRight=_,_=void 0),f!==void 0&&(document.body.style.overflow=f,f=void 0)})};n.disableBodyScroll=function(l,h){if(a){if(!l)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(l&&!d.some(function(v){return v.targetElement===l})){var k={targetElement:l,options:h||{}};d=[].concat(o(d),[k]),l.ontouchstart=function(v){v.targetTouches.length===1&&(s=v.targetTouches[0].clientY)},l.ontouchmove=function(v){var w,x,A,O;v.targetTouches.length===1&&(x=l,O=(w=v).targetTouches[0].clientY-s,!W(w.target)&&(x&&x.scrollTop===0&&0<O||(A=x)&&A.scrollHeight-A.scrollTop<=A.clientHeight&&O<0?y(w):w.stopPropagation()))},u||(document.addEventListener("touchmove",y,r?{passive:!1}:void 0),u=!0)}}else{R=h,setTimeout(function(){if(_===void 0){var v=!!R&&R.reserveScrollBarGap===!0,w=window.innerWidth-document.documentElement.clientWidth;v&&0<w&&(_=document.body.style.paddingRight,document.body.style.paddingRight=w+"px")}f===void 0&&(f=document.body.style.overflow,document.body.style.overflow="hidden")});var $={targetElement:l,options:h||{}};d=[].concat(o(d),[$])}var R},n.clearAllBodyScrollLocks=function(){a?(d.forEach(function(l){l.targetElement.ontouchstart=null,l.targetElement.ontouchmove=null}),u&&(document.removeEventListener("touchmove",y,r?{passive:!1}:void 0),u=!1),d=[],s=-1):(M(),d=[])},n.enableBodyScroll=function(l){if(a){if(!l)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");l.ontouchstart=null,l.ontouchmove=null,d=d.filter(function(h){return h.targetElement!==l}),u&&d.length===0&&(document.removeEventListener("touchmove",y,r?{passive:!1}:void 0),u=!1)}else(d=d.filter(function(h){return h.targetElement!==l})).length||M()}})}),V=me(ve),Q="https://buy.ramp.network/",U;(function(t){t.VERBOSE="VERBOSE",t.DEBUG="DEBUG",t.INFO="INFO",t.WARNING="WARNING",t.ERROR="ERROR",t.CRITICAL="CRITICAL"})(U||(U={}));var p;(function(t){t.WIDGET_CLOSE="WIDGET_CLOSE",t.WIDGET_CONFIG_DONE="WIDGET_CONFIG_DONE",t.WIDGET_CONFIG_FAILED="WIDGET_CONFIG_FAILED",t.PURCHASE_CREATED="PURCHASE_CREATED",t.PURCHASE_SUCCESSFUL="PURCHASE_SUCCESSFUL",t.PURCHASE_FAILED="PURCHASE_FAILED"})(p||(p={}));var g;(function(t){t.WIDGET_CLOSE_REQUEST="WIDGET_CLOSE_REQUEST",t.WIDGET_CLOSE_REQUEST_CANCELLED="WIDGET_CLOSE_REQUEST_CANCELLED",t.WIDGET_CLOSE_REQUEST_CONFIRMED="WIDGET_CLOSE_REQUEST_CONFIRMED"})(g||(g={}));function we(){try{return String(crypto.getRandomValues(new Uint32Array(1))[0])}catch{return String(Math.floor(Math.random()*1e7))}}var S=895,L=590,N=320,F=667;function be(t){var e=[],n=b({},t);return["desktop","mobile","hosted-desktop","hosted-mobile","hosted-auto","auto","embedded-desktop","embedded-mobile"].includes(t.variant)||(n.variant="desktop",e.push({fieldName:"variant",description:"Invalid value for `variant` config field ",exampleValue:"'desktop'",severity:U.WARNING})),(t.variant==="embedded-desktop"||t.variant==="embedded-mobile")&&Ce(t.containerNode,t.variant),["embedded-desktop","embedded-mobile"].includes(n.variant)||delete n.containerNode,Ee(e),n}function Ee(t){!t.length||(console.group("Config errors"),t.forEach(function(e){console.group(e.fieldName),console.log(e.description),console.log("Example expected value: "+e.exampleValue),console.log("Severity: "+e.severity),console.groupEnd()}),console.groupEnd())}function _e(){var t=Array.from(Object.values(p)),e=Array.from(Object.values(g));return fe(t,e).reduce(function(n,o){return n[o]=[],n},{})}function q(t,e,n){return n===void 0&&(n=!1),t[e].filter(function(o){return o.internal===n}).length}function X(t){var e,n="(min-width: 920px) and (min-height: 630px)",o=(e=t.variant)===null||e===void 0?void 0:e.toLocaleLowerCase();if(o==="mobile"||o==="desktop"||o==="hosted-mobile"||o==="hosted-desktop"||o==="embedded-desktop"||o==="embedded-mobile")return o;var r=window.matchMedia(n).matches;return o==="hosted-auto"?r?"hosted-desktop":"hosted-mobile":r?"desktop":"mobile"}function ye(t){return typeof t.blur=="function"}function Ce(t,e){if(!document.body)throw new Error("Couldn't find <body> element.");if(!(t instanceof HTMLElement))throw new Error("Container node has to be a proper HTML element.");if(!document.body.contains(t))throw new Error("Container node must be attached to the document.");var n=t.getBoundingClientRect(),o=n.width,r=n.height;if(e==="embedded-desktop"){if(o+1<S)throw new Error("Container node must be at least "+S+"px wide.");if(r+1<L)throw new Error("Container node must be at least "+L+"px tall.")}else if(e==="embedded-mobile"){if(o+1<N)throw new Error("Container node must be at least "+N+"px wide.");if(r+1<F)throw new Error("Container node must be at least "+F+"px tall.")}}function Se(t,e){var n=Le(t instanceof URL?t.href:t),o=e.startsWith("/")?e.substr(1):e;return new URL(n+"/"+o)}function Le(t){return t.endsWith("/")?t.slice(0,-1):t}function ke(t,e,n){return D(this,void 0,void 0,function(){var o,r;return P(this,function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),[4,fetch(Se(t,"/host-api/purchase/"+e+"?secret="+n).href,{headers:{"Content-Type":"application/json"}})];case 1:if(o=i.sent(),!o.ok)throw new Error("Request for purchase #"+e+" failed");return[4,o.json()];case 2:return r=i.sent(),[2,r];case 3:return i.sent(),[2,null];case 4:return[2]}})})}function xe(t){return D(this,void 0,void 0,function(){return P(this,function(e){return[2,new Promise(function(n){return setTimeout(n,t)})]})})}function H(t){var e=new URL(t.url||Q),n=window.location.origin;t.containerNode,t.url;var o=he(t,["containerNode","url"]),r=b(b({},o),{hostUrl:n});return Object.entries(r).forEach(function(i){var a=i[0],d=i[1];d&&e.searchParams.append(a,d)}),e.toString()}function Ae(t,e){var n=document.createElement("div");n.classList.add("background-hider"),e&&(n.style.maxWidth=e+"px"),t.appendChild(n)}function Ie(t,e,n){var o=document.querySelector("body"),r=document.createElement("div");r.style.width="100%",r.style.height="100%";var i=r.attachShadow({mode:"open"});i.appendChild(K(n.variant));var a=Z(t,n.variant),d=Te(a,e);return d.appendChild(a),i.appendChild(d),{body:o,iframe:a,overlay:d,shadow:i,shadowHost:r}}function Re(t,e,n){var o=document.querySelector("body"),r=document.createElement("div");r.style.width="100%",r.style.height="100%";var i=r.attachShadow({mode:"open"}),a=document.createElement("div");a.classList.add("embedded-container"),i.appendChild(a);var d=document.createElement("div");d.classList.add("loader-container"),d.innerHTML=`
    <svg width="92" height="60" viewBox="0 0 51 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="loader">
      <path d="M16.2232 18.8309L22.282 24.912C22.7953 25.4272 22.7948 26.2647 22.281 26.7792L17.651 31.4158C16.8619 32.1947 15.5719 32.1947 14.7828 31.4158L0.591812 17.4093C-0.197271 16.6305 -0.197271 15.3571 0.591812 14.5783L14.7828 0.584122C15.5719 -0.194707 16.8619 -0.194707 17.651 0.584122L22.281 5.22078C22.7948 5.73535 22.7953 6.57281 22.282 7.08795L16.2232 13.1691C14.645 14.7267 14.645 17.2733 16.2232 18.8309Z" fill="#21BF73"></path>
      <path d="M34.4433 18.8309L28.3845 24.912C27.8712 25.4272 27.8717 26.2647 28.3855 26.7792L33.0155 31.4158C33.8046 32.1947 35.0946 32.1947 35.8837 31.4158L50.0747 17.4093C50.8638 16.6305 50.8638 15.3571 50.0747 14.5783L35.8837 0.584122C35.0946 -0.194707 33.8046 -0.194707 33.0155 0.584122L28.3855 5.22078C27.8717 5.73535 27.8712 6.57281 28.3845 7.08795L34.4433 13.1691C36.0215 14.7267 36.0215 17.2733 34.4433 18.8309Z" fill="#0A6E5C"></path>
      <path d="M17.8128 17.157C17.1737 16.518 17.1737 15.482 17.8128 14.843L24.1765 8.47926C24.8155 7.84025 25.8515 7.84025 26.4905 8.47926L32.8542 14.843C33.4932 15.482 33.4932 16.518 32.8542 17.157L26.4905 23.5207C25.8515 24.1598 24.8155 24.1598 24.1765 23.5207L17.8128 17.157Z" fill="#21BF73"></path>
    </svg>`,a.appendChild(d),i.appendChild(K(n.variant));var u=Z(t,n.variant,n.containerNode);return a.appendChild(u),{body:o,iframe:u,overlay:null,shadow:i,shadowHost:r}}function Oe(){if(!document.querySelector("[data-ramp-font]")){var t=document.createElement("link");t.setAttribute("href","https://fonts.googleapis.com/css?family=Poppins:200,400,500,600,700&display=swap&subset=latin-ext"),t.setAttribute("rel","stylesheet"),t.setAttribute("data-ramp-font",""),document.head.appendChild(t)}}function Z(t,e,n){var o=document.createElement("iframe");return o.setAttribute("src",t),n?(o.setAttribute("width",e==="desktop"||e==="embedded-desktop"?S.toString():n.getBoundingClientRect().width.toString()),o.setAttribute("height",e==="desktop"||e==="embedded-desktop"?L.toString():n.getBoundingClientRect().height.toString())):(o.setAttribute("width",e==="desktop"||e==="embedded-desktop"?S.toString():window.innerWidth.toString()),o.setAttribute("height",e==="desktop"||e==="embedded-desktop"?L.toString():window.innerHeight.toString())),o.classList.add("iframe"),o}function Te(t,e){var n=document.createElement("div");n.classList.add("overlay");var o=document.createElement("div");return o.classList.add("loader-container"),o.innerHTML=`
    <svg width="92" height="60" viewBox="0 0 51 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="loader">
      <path d="M16.2232 18.8309L22.282 24.912C22.7953 25.4272 22.7948 26.2647 22.281 26.7792L17.651 31.4158C16.8619 32.1947 15.5719 32.1947 14.7828 31.4158L0.591812 17.4093C-0.197271 16.6305 -0.197271 15.3571 0.591812 14.5783L14.7828 0.584122C15.5719 -0.194707 16.8619 -0.194707 17.651 0.584122L22.281 5.22078C22.7948 5.73535 22.7953 6.57281 22.282 7.08795L16.2232 13.1691C14.645 14.7267 14.645 17.2733 16.2232 18.8309Z" fill="#21BF73"></path>
      <path d="M34.4433 18.8309L28.3845 24.912C27.8712 25.4272 27.8717 26.2647 28.3855 26.7792L33.0155 31.4158C33.8046 32.1947 35.0946 32.1947 35.8837 31.4158L50.0747 17.4093C50.8638 16.6305 50.8638 15.3571 50.0747 14.5783L35.8837 0.584122C35.0946 -0.194707 33.8046 -0.194707 33.0155 0.584122L28.3855 5.22078C27.8717 5.73535 27.8712 6.57281 28.3845 7.08795L34.4433 13.1691C36.0215 14.7267 36.0215 17.2733 34.4433 18.8309Z" fill="#0A6E5C"></path>
      <path d="M17.8128 17.157C17.1737 16.518 17.1737 15.482 17.8128 14.843L24.1765 8.47926C24.8155 7.84025 25.8515 7.84025 26.4905 8.47926L32.8542 14.843C33.4932 15.482 33.4932 16.518 32.8542 17.157L26.4905 23.5207C25.8515 24.1598 24.8155 24.1598 24.1765 23.5207L17.8128 17.157Z" fill="#21BF73"></path>
    </svg>`,n.appendChild(o),n.addEventListener("click",function(r){r.target!==t&&!n.querySelectorAll(".close-modal").length&&e({type:g.WIDGET_CLOSE_REQUEST,payload:null,internal:!0})}),n}function De(t,e){return new URL(t).toString()===new URL(e).toString()}function Pe(t){return t.querySelectorAll(".close-modal").length!==0}function Ue(t){var e=document.createElement("div");e.classList.add("close-modal");var n=document.createElement("div");n.classList.add("close-modal__text"),n.textContent="Are you sure you want to exit Ramp and abandon the transaction?";var o=document.createElement("div");o.classList.add("close-modal__button-container");var r=document.createElement("button");r.setAttribute("type","button"),r.classList.add("close-modal__button"),r.classList.add("close-modal__button--cancel"),r.textContent="Cancel",r.addEventListener("click",function(a){a.stopPropagation(),t({type:g.WIDGET_CLOSE_REQUEST_CANCELLED,payload:null,internal:!0})});var i=document.createElement("button");return i.setAttribute("type","button"),i.classList.add("close-modal__button"),i.classList.add("close-modal__button--exit"),i.textContent="Exit",i.addEventListener("click",function(a){a.stopPropagation(),t({type:g.WIDGET_CLOSE_REQUEST_CONFIRMED,payload:null,internal:!0})}),o.appendChild(r),o.appendChild(i),e.appendChild(n),e.appendChild(o),e}function K(t){var e=document.createElement("style"),n=t==="mobile"||t==="hosted-mobile"||t==="embedded-mobile",o=t==="embedded-mobile"||t==="embedded-desktop";return e.textContent=`

    .background-hider {
      content: '';
      height: 30vh;
      width: 100vw;
      position: fixed;
      bottom: 0;
      transform: translateY(50%);
      background-color: #f5f8fb;
      z-index: 999;
    }

    .overlay {
      position: fixed;
      z-index: 1000;
      width: 100vw;
      height: `+(n?"100%;":"100vh;")+`
      top: 0;
      left: 0;
      overflow: hidden;
      background-color: rgba(166, 174, 185, 0.7);
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      `+(n?"align-items: flex-start;":"align-items: center;")+`
    }

    .embedded-container {
      z-index: 1000;
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      `+(n?"align-items: flex-start;":"align-items: center;")+`
      min-width: `+(n?N:S)+`px;
      min-height: `+(n?F:L)+`px;
    }

    .loader-container {
      align-self: center;
    }

    .loader {
      transform-origin: center;
      animation: logoAnimation 4s linear infinite;
      width: 100px;
      height: auto;
      align-self: center;
    }

    .loader path:nth-child(3) {
      transform-origin: center;
      position: relative;
    }

    .loader path:nth-child(1) {
      transform-origin: center;
      position: relative;
      animation: box1Animation 4s linear infinite;
      transform: scale(0.4) translateX(6px);
    }

    .loader path:nth-child(2) {
      transform-origin: center;
      position: relative;
      animation: box4Animation 4s linear infinite;
      transform: scale(0.4) translateX(-6px);
    }

    @keyframes logoAnimation {
      10% {
        transform: rotate(180deg);
      }
      30%{
        transform: rotate(360deg);
      }
      70% {
        transform: rotate(360deg);
      }
      90% {
        transform: rotate(520deg);
      }
      100% {
        transform: rotate(720deg);
      }
    }

    @keyframes box1Animation {
      0%, 10% {
        transform: scale(0.4) translateX(6px);
      }
      30%, 70% {
        transform: scale(1) translateX(0);
      }
      90% {
        transform: scale(0.4) translateX(6px);
      }
    }


    @keyframes box4Animation {
      0%, 10% {
        transform: scale(0.4) translateX(-6px);
      }
      30%, 70% {
        transform: scale(1) translateX(0);
      }
      90% {
        transform: scale(0.4) translateX(-6px);
      }
    }

    .iframe {
      border: none;
      user-select: none;
      visibility: hidden;
      position: absolute;
    }

    .iframe.visible {
      visibility: visible;
      `+(!o&&n?`
        width: 100vw;
        height: 100%;
      `:"")+`
    }

    .close-modal {
      font-family: 'Poppins', sans-serif;
      width: 678px;
      height: 276px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 9999;
      box-shadow: 0px 54px 200px rgba(36, 37, 57, 0.2);
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;
      padding: 35px;
      border-radius: 8px;
      background: #fff;

      box-sizing: border-box;
    }

    .close-modal * {
      box-sizing: border-box;
    }

    .close-modal__text {
      margin: 40px auto 30px;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
      text-align: center;

      color: #242539;
    }

    .close-modal__button-container {
      width: 318px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
    }

    .close-modal__button {
      background: #fff;
      border: 2px solid #EDEEF3;
      border-radius: 74px;
      width: 152px;
      height: 56px;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #2B2D56;
      text-transform: uppercase;
    }

    .close-modal__button--exit {
      background: #DD3E56;
      box-shadow: 0px 8px 34px rgba(221, 62, 86, 0.4);
      color: #fff;
      border-color: transparent;
    }
  `,e}var Ne=function(){function t(e){this._listeners=_e(),this._isVisible=!1,this._isPollingForSwapStatus=!1,this._purchasePollingCredentials=null,Oe(),this.unsubscribe=this.unsubscribe.bind(this),this.on=this.on.bind(this),this.show=this.show.bind(this),this._handleEscapeClick=this._handleEscapeClick.bind(this),this._dispatchEvent=this._dispatchEvent.bind(this),this._subscribeToWidgetEvents=this._subscribeToWidgetEvents.bind(this),this._on=this._on.bind(this),this._processPurchasePollingLoop=this._processPurchasePollingLoop.bind(this),this._registerSdkEventHandlers=this._registerSdkEventHandlers.bind(this),this._runPostSubscribeHooks=this._runPostSubscribeHooks.bind(this),this._subscribeToWidgetEvents=this._subscribeToWidgetEvents.bind(this),this._rawNormalizedConfig=be(b({variant:"desktop"},e));var n=X(this._rawNormalizedConfig);this._config=b(b({},this._rawNormalizedConfig),{variant:n,widgetInstanceId:we()})}return t.prototype.show=function(){if(this._isVisible)throw new Error("Widget is already visible - you can only call this once per instance");return document.activeElement&&ye(document.activeElement)&&document.activeElement.blur(),this._registerSdkEventHandlers(),window.addEventListener("message",this._subscribeToWidgetEvents),this._isConfiguredAsHosted()?this._showUsingHostedMode():this._isConfiguredAsEmbedded()?this._showUsingEmbeddedMode():this._isConfiguredWithOverlay()&&this._showUsingOverlayMode(),window.addEventListener("keydown",this._handleEscapeClick,!0),this},t.prototype.on=function(e,n){return this._on(e,n,!1),this},t.prototype.unsubscribe=function(e,n){var o=this;if(e==="*"){var r=Object.entries(this._listeners);r.forEach(function(i){var a=i[0],d=i[1],u=d.filter(function(s){return s.callback!==n});o._listeners[a]=u})}else this._listeners[e]=this._listeners[e].filter(function(i){return i.callback!==n});return this},t.prototype._on=function(e,n,o){if(e!=="*"&&!this._listeners[e]&&console.warn("Unknown / unsupported event name - '"+e+"'. This listener will have no effect."),e==="*"){var r=Object.values(this._listeners);r.forEach(function(i){return i.push({callback:n,internal:o})})}else this._listeners[e].push({callback:n,internal:o});this._runPostSubscribeHooks(e,o)},t.prototype.close=function(){return this._dispatchEvent({type:p.WIDGET_CLOSE,payload:null,widgetInstanceId:this._config.widgetInstanceId}),this},t.prototype._subscribeToWidgetEvents=function(e){if(!!e.data&&!!De(e.origin,this._config.url||Q)){var n=e.data;!n.widgetInstanceId||n.widgetInstanceId!==this._config.widgetInstanceId||this._dispatchEvent(n)}},t.prototype._registerSdkEventHandlers=function(){var e=this;this._on(p.WIDGET_CLOSE,function(o){var r,i;if(e._isConfiguredAsHosted())try{(r=e.widgetWindow)===null||r===void 0||r.close()}catch{throw new Error("Could not close the widget window")}else(i=e.domNodes)===null||i===void 0||i.shadowHost.remove(),V.clearAllBodyScrollLocks();e._teardownEventSubscriptions()},!0);var n=function(){var o,r;if(!e._isConfiguredAsHosted()){(o=e.domNodes)===null||o===void 0||o.iframe.classList.add("visible");var i=(r=e.domNodes)===null||r===void 0?void 0:r.shadow.querySelector(".loader-container");i&&i.remove()}};this._on(p.WIDGET_CONFIG_DONE,n,!0),this._on(p.WIDGET_CONFIG_FAILED,n,!0),this._on(g.WIDGET_CLOSE_REQUEST,function(o){e._isConfiguredAsHosted()||e._isConfiguredAsEmbedded()||e._config.variant==="mobile"||Pe(e.domNodes.overlay)||e.domNodes.overlay.appendChild(Ue(e._dispatchEvent))},!0),this._on(g.WIDGET_CLOSE_REQUEST_CONFIRMED,function(o){e._dispatchEvent({type:p.WIDGET_CLOSE,payload:null,widgetInstanceId:e._config.widgetInstanceId})},!0),this._on(g.WIDGET_CLOSE_REQUEST_CANCELLED,function(o){if(!(e._isConfiguredAsHosted()||e._isConfiguredAsEmbedded())){var r=e.domNodes.overlay.querySelector(".close-modal");r&&r.remove()}},!0),this._on(p.PURCHASE_CREATED,function(o){e._purchasePollingCredentials={apiUrl:o.payload.apiUrl,purchaseExternalId:o.payload.purchase.id,token:o.payload.purchaseViewToken},e._processPurchasePollingLoop(e._purchasePollingCredentials)},!0)},t.prototype._dispatchEvent=function(e){var n=e.type;this._listeners[n].forEach(function(o){return o.callback(e)})},t.prototype._handleEscapeClick=function(e){var n=27;(e.key==="Escape"||e.key==="Esc"||e.keyCode===n)&&this._dispatchEvent({type:g.WIDGET_CLOSE_REQUEST,payload:null,internal:!0})},t.prototype._teardownEventSubscriptions=function(){window.removeEventListener("keydown",this._handleEscapeClick,!0),window.removeEventListener("message",this._subscribeToWidgetEvents)},t.prototype._processPurchasePollingLoop=function(e){var n=e.apiUrl,o=e.purchaseExternalId,r=e.token;return D(this,void 0,void 0,function(){var i;return P(this,function(a){switch(a.label){case 0:this._isPollingForSwapStatus=!0,a.label=1;case 1:return q(this._listeners,p.PURCHASE_SUCCESSFUL)>0||q(this._listeners,p.PURCHASE_FAILED)>0?[4,xe(1e3)]:[3,4];case 2:return a.sent(),[4,ke(n,o,r)];case 3:return i=a.sent(),i?i.actions.find(function(d){return d.newStatus==="RELEASED"})?(this._dispatchEvent({type:p.PURCHASE_SUCCESSFUL,payload:{purchase:i},widgetInstanceId:this._config.widgetInstanceId}),[2]):i.actions.find(function(d){return d.newStatus==="ERROR"})?(this._dispatchEvent({type:p.PURCHASE_FAILED,payload:null,widgetInstanceId:this._config.widgetInstanceId}),[2]):[3,1]:[3,1];case 4:return this._isPollingForSwapStatus=!1,[2]}})})},t.prototype._runPostSubscribeHooks=function(e,n){(e==="*"||e===p.PURCHASE_SUCCESSFUL||p.PURCHASE_FAILED)&&this._purchasePollingCredentials&&!this._isPollingForSwapStatus&&this._processPurchasePollingLoop(this._purchasePollingCredentials)},t.prototype._showUsingEmbeddedMode=function(){var e,n,o=H(this._config);if(this.domNodes=Re(o,this._dispatchEvent,this._config),!((e=this.domNodes)===null||e===void 0?void 0:e.body))throw new Error("Couldn't find <body> element.");(n=this._config.containerNode)===null||n===void 0||n.appendChild(this.domNodes.shadowHost),this._isVisible=!0},t.prototype._showUsingOverlayMode=function(){var e,n=H(this._config);if(this.domNodes=Ie(n,this._dispatchEvent,this._config),!((e=this.domNodes)===null||e===void 0?void 0:e.body))throw new Error("Couldn't find <body> element.");this.domNodes.body.appendChild(this.domNodes.shadowHost),this._isVisible=!0,V.disableBodyScroll(this.domNodes.iframe);var o=X(this._config);o!=="desktop"&&o!=="embedded-desktop"&&Ae(this.domNodes.shadow)},t.prototype._showUsingHostedMode=function(){var e,n=H(this._config);this.widgetWindow=(e=window.open(n),e!=null?e:void 0)},t.prototype._isConfiguredWithOverlay=function(){return["desktop","mobile"].includes(this._config.variant)},t.prototype._isConfiguredAsHosted=function(){return["hosted-desktop","hosted-mobile"].includes(this._config.variant)},t.prototype._isConfiguredAsEmbedded=function(){return["embedded-desktop","embedded-mobile"].includes(this._rawNormalizedConfig.variant)},t}();const Fe=t=>{const[e,n]=C.exports.useState("down"),o="default",r=[];for(const i in t.networks)t.networks[i].chainId!==31337&&t.networks[i].chainId!==1&&r.push(c("p",{children:c(E,{style:{color:t.networks[i].color},type:o,size:"large",shape:"round",onClick:()=>{window.open(t.networks[i].faucet)},children:t.networks[i].name})},t.networks[i].chainId));return m("div",{children:[m(E,{size:"large",shape:"round",onClick:()=>{n("up")},children:[c(ue,{style:{color:"#52c41a"}})," ",typeof t.price=="undefined"?0:t.price.toFixed(2)]}),m(ee,{title:"Buy ETH",visible:e==="up",onCancel:()=>{n("down")},footer:[c(E,{onClick:()=>{n("down")},children:"cancel"},"back")],children:[c("p",{children:m(E,{type:o,size:"large",shape:"round",onClick:()=>{window.open("https://pay.sendwyre.com/purchase?destCurrency=ETH&sourceAmount=25&dest="+t.address)},children:[c("span",{style:{paddingRight:15},role:"img",children:c("span",{role:"img","aria-label":"flag-us",children:"\u{1F1FA}\u{1F1F8}"})}),"Wyre"]})}),m("p",{children:[" ",m(E,{type:o,size:"large",shape:"round",onClick:()=>{new Ne({hostAppName:"scaffold-eth",hostLogoUrl:"https://scaffoldeth.io/scaffold-eth.png",swapAmount:"100000000000000000",swapAsset:"ETH",userAddress:t.address}).on("*",i=>console.log(i)).show()},children:[c("span",{style:{paddingRight:15},role:"img",children:c("span",{role:"img","aria-label":"flag-gb",children:"\u{1F1EC}\u{1F1E7}"})}),"Ramp"]})]}),c("p",{children:m(E,{type:o,size:"large",shape:"round",onClick:()=>{window.open("https://www.coinbase.com/buy-ethereum")},children:[c("span",{style:{paddingRight:15},role:"img","aria-label":"bank",children:"\u{1F3E6}"}),"Coinbase"]})}),c(te,{}),c("h2",{children:"Testnet ETH"}),r]})]})};var Y;const He=(Y=window.localStorage.getItem("theme"))!=null?Y:"light",We=()=>{const[t,e]=C.exports.useState(He==="dark"),{switcher:n,currentTheme:o,status:r,themes:i}=ae(),a=j();C.exports.useEffect(()=>{var u;window.localStorage.setItem("theme",o!=null?o:""),(o=="light"||o=="dark")&&((u=a==null?void 0:a.setModalTheme)==null||u.call(a,o))},[o]);const d=u=>{var s;e(u),n({theme:u?i.dark:i.light}),(s=a==null?void 0:a.setModalTheme)==null||s.call(a,t?"dark":"light")};return r==="loading"||r==="idle"?c(T,{}):m("div",{className:"main fade-in",style:{position:"fixed",right:10,bottom:10},children:[c("span",{style:{padding:8},children:o==="light"?"\u2600\uFE0F":"\u{1F31C}"}),c(se,{checked:t,onChange:d})]})},Xe=t=>{var i,a,d;const e=j();let n=de(t.scaffoldAppProviders,e);const o=m("div",{style:{position:"fixed",textAlign:"left",left:0,bottom:20,padding:10},children:[m(B,{align:"middle",gutter:[4,4],children:[c(I,{span:8,children:c(Fe,{price:t.price,address:(i=e==null?void 0:e.account)!=null?i:"",networks:ne})}),c(I,{span:8,style:{textAlign:"center",opacity:.8},children:c(oe,{chainId:t.scaffoldAppProviders.targetNetwork.chainId,currentNetwork:ie(e.chainId),provider:e.ethersProvider,speed:"average"})}),c(I,{span:8,style:{textAlign:"center",opacity:1},children:m(E,{onClick:()=>{window.open("https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA")},size:"large",shape:"round",children:[c("span",{style:{marginRight:8},role:"img","aria-label":"support",children:"\u{1F4AC}"}),"Support"]})})]}),c(B,{align:"middle",gutter:[4,4],children:c(I,{span:24,children:n&&((a=t.scaffoldAppProviders)==null?void 0:a.mainnetProvider)&&((d=t.scaffoldAppProviders)==null?void 0:d.localProvider)?c(re,{localProvider:t.scaffoldAppProviders.localProvider,price:t.price,mainnetProvider:t.scaffoldAppProviders.mainnetProvider}):c(T,{})})})]});return m(T,{children:[o,c(We,{})]})};export{Xe as MainPageFooter};
