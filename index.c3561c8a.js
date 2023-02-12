function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequired7c6=s);var r=s("2shzp");const o="https://api.themoviedb.org/3/",a="a59dfea75e9e40e203f0819879862061";class c{async getMovieByName(){const e=`${o}search/movie?api_key=${a}&query=${this.searchQuary}&page=${this.page}&language=${this.lang}&include_adult=false`;return(await r.default.get(e)).data}async getPopularFilms(){const e=`${o}/trending/movie/day?api_key=${a}&language=${this.lang}&page=${this.page}`;return(await r.default.get(e)).data}async getInfoByMovieId(){const e=`${o}movie/${this.movieId}?api_key=${a}&language=${this.lang}`;return(await r.default.get(e)).data}async getMovieGenres(){const e=`${o}genre/movie/list?api_key=${a}`;return(await r.default.get(e)).data}incrementPage(){this.page+=1}decrementPage(){this.page-=1}resetPage(){this.page=1}get quary(){return this.searchQuary}set quary(e){this.searchQuary=e}constructor(){this.searchQuary="",this.page=1,this.movieId="",this.lang="en-US"}}const l=new c,h="data-genresArr";function u(e){let t=[];return function(){try{if(localStorage.getItem(h)){return JSON.parse(localStorage.getItem(h))}return}catch{return!1}}().map((({id:n,name:i})=>{e.map((e=>{e===n&&t.push(i)}))})),t}var d=s("fb9GJ");var p=e(s("amrNH")).template({1:function(e,t,n,i,s){var r,o,a=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,l="function",h=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"  <li class='card' data-id='"+h(typeof(o=null!=(o=u(n,"id")||(null!=t?u(t,"id"):t))?o:c)===l?o.call(a,{name:"id",hash:{},data:s,loc:{start:{line:2,column:28},end:{line:2,column:34}}}):o)+"'>\n"+(null!=(r=u(n,"if").call(a,null!=t?u(t,"poster_path"):t,{name:"if",hash:{},fn:e.program(2,s,0),inverse:e.program(4,s,0),data:s,loc:{start:{line:3,column:4},end:{line:17,column:11}}}))?r:"")+"    <div class='card__box-info'>\n      <h2 class='card__title'>"+h(typeof(o=null!=(o=u(n,"title")||(null!=t?u(t,"title"):t))?o:c)===l?o.call(a,{name:"title",hash:{},data:s,loc:{start:{line:19,column:30},end:{line:19,column:39}}}):o)+"</h2>\n      <div class='card__data'>\n        "+(null!=(r=u(n,"if").call(a,null!=t?u(t,"genre_ids"):t,{name:"if",hash:{},fn:e.program(6,s,0),inverse:e.program(8,s,0),data:s,loc:{start:{line:21,column:8},end:{line:23,column:80}}}))?r:"")+"\n\n        "+(null!=(r=u(n,"if").call(a,null!=t?u(t,"release_date"):t,{name:"if",hash:{},fn:e.program(10,s,0),inverse:e.program(12,s,0),data:s,loc:{start:{line:25,column:8},end:{line:27,column:86}}}))?r:"")+"\n      </div></div>\n  </li>\n"},2:function(e,t,n,i,s){var r,o=null!=t?t:e.nullContext||{},a=e.hooks.helperMissing,c="function",l=e.escapeExpression,h=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"      <img\n        class='card__img'\n        src='https://image.tmdb.org/t/p/w500"+l(typeof(r=null!=(r=h(n,"poster_path")||(null!=t?h(t,"poster_path"):t))?r:a)===c?r.call(o,{name:"poster_path",hash:{},data:s,loc:{start:{line:6,column:44},end:{line:6,column:59}}}):r)+"'\n        alt='"+l(typeof(r=null!=(r=h(n,"title")||(null!=t?h(t,"title"):t))?r:a)===c?r.call(o,{name:"title",hash:{},data:s,loc:{start:{line:7,column:13},end:{line:7,column:22}}}):r)+"'\n        data-id='"+l(typeof(r=null!=(r=h(n,"id")||(null!=t?h(t,"id"):t))?r:a)===c?r.call(o,{name:"id",hash:{},data:s,loc:{start:{line:8,column:17},end:{line:8,column:23}}}):r)+"'\n      />\n"},4:function(e,t,n,i,s){var r,o=null!=t?t:e.nullContext||{},a=e.hooks.helperMissing,c="function",l=e.escapeExpression,h=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"      <img\n        class='card__img'\n        src='https://media.istockphoto.com/id/911590226/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0-%D1%96%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D1%96%D1%8F-%D1%87%D0%B0%D1%81%D1%83-%D1%84%D1%96%D0%BB%D1%8C%D0%BC%D1%83-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D1%96%D1%8F-%D0%BA%D1%96%D0%BD%D0%BE%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%D1%83-%D0%BD%D0%B0-%D1%87%D0%B5%D1%80%D0%B2%D0%BE%D0%BD%D0%BE%D0%BC%D1%83-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%BE%D0%BC%D1%83-%D1%82%D0%BB%D1%96.jpg?s=612x612&w=0&k=20&c=xj1wHSzUN8OEHhOo8Xa_Z7FlJLxFXPppehw0-6KnmRs='\n        alt='"+l(typeof(r=null!=(r=h(n,"title")||(null!=t?h(t,"title"):t))?r:a)===c?r.call(o,{name:"title",hash:{},data:s,loc:{start:{line:14,column:13},end:{line:14,column:22}}}):r)+"'\n        data-id='"+l(typeof(r=null!=(r=h(n,"id")||(null!=t?h(t,"id"):t))?r:a)===c?r.call(o,{name:"id",hash:{},data:s,loc:{start:{line:15,column:17},end:{line:15,column:23}}}):r)+"'\n      />\n"},6:function(e,t,n,i,s){var r,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"<span\n            class='card__genres'\n          >"+e.escapeExpression("function"==typeof(r=null!=(r=o(n,"genre_ids")||(null!=t?o(t,"genre_ids"):t))?r:e.hooks.helperMissing)?r.call(null!=t?t:e.nullContext||{},{name:"genre_ids",hash:{},data:s,loc:{start:{line:23,column:11},end:{line:23,column:24}}}):r)+"</span>"},8:function(e,t,n,i,s){return"<p class='card__undefined'>N/A</p>"},10:function(e,t,n,i,s){var r,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"<span class='card__year'>\n            |\n            "+e.escapeExpression("function"==typeof(r=null!=(r=o(n,"release_date")||(null!=t?o(t,"release_date"):t))?r:e.hooks.helperMissing)?r.call(null!=t?t:e.nullContext||{},{name:"release_date",hash:{},data:s,loc:{start:{line:27,column:12},end:{line:27,column:28}}}):r)+"</span>"},12:function(e,t,n,i,s){return"<p class='card__undefined'>| N/A</p>"},compiler:[8,">= 4.3.0"],main:function(e,t,n,i,s){var r;return null!=(r=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,s,0),inverse:e.noop,data:s,loc:{start:{line:1,column:0},end:{line:30,column:9}}}))?r:""},useData:!0}),f=s("kyRuT"),_=(f=s("kyRuT"),s("2ezs4"));function m(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function g(e,t){return n=e,(i=m(e,t,"get")).get?i.get.call(n):i.value;var n,i}function v(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function y(e,t,n){v(e,t),t.set(e,n)}function w(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,m(e,t,"set"),n),n}function b(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function I(e,t){v(e,t),t.add(e)}const T=document.createElement("template"),C=String.raw;T.innerHTML=C`
  <style>
    :host {
      all: initial;
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
    }
    :host button {
      position: fixed;
      bottom: 16px;
      right: 16px;
      cursor: pointer;
    }
    :host([hidden]) button {
      opacity: 0;
      visibility: hidden;
    }
  </style>
  <button type="button" part="button"><slot>Scroll to top</slot></button>
`;var k=new WeakMap,E=new WeakSet,S=new WeakSet,N=new WeakMap;class R extends HTMLElement{get visibleAfter(){return this.getAttribute("visible-after")}set visibleAfter(e){this.setAttribute("visible-after",e)}get smoothScrolling(){return this.hasAttribute("smooth-scrolling")}set smoothScrolling(e){e?this.setAttribute("smooth-scrolling",""):this.removeAttribute("smooth-scrolling")}get topOffset(){return Number(this.getAttribute("top-offset"))||0}set topOffset(e){const t=Number(e)||0;this.setAttribute("top-offset",t>0?t:0)}static get observedAttributes(){return["visible-after"]}attributeChangedCallback(e,t,n){"visible-after"===e&&b(this,S,D).call(this,n)}connectedCallback(){b(this,E,P).call(this,"visibleAfter"),b(this,E,P).call(this,"smoothScrolling"),b(this,E,P).call(this,"topOffset"),this.topOffset||(this.topOffset=0),this.visibleAfter||(this.visibleAfter="50vh"),w(this,k,this.shadowRoot.querySelector("button")),b(this,S,D).call(this,this.visibleAfter);try{this.observer=new IntersectionObserver((([e])=>{this.hidden=e.isIntersecting,g(this,k).part.toggle("button--hidden",e.isIntersecting),this.dispatchEvent(new CustomEvent("scroll-top:visibility-change",{bubbles:!0,composed:!0,detail:{visible:!e.isIntersecting}}))})),this.observer.observe(this)}catch(e){console.error(e)}g(this,k).addEventListener("click",g(this,N))}disconnectedCallback(){this.observer&&(this.observer.disconnect(),this.observer=null),g(this,k).removeEventListener("click",g(this,N))}static defineCustomElement(e="scroll-top"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,R)}constructor(){super(),I(this,E),I(this,S),y(this,k,{writable:!0,value:void 0}),y(this,N,{writable:!0,value:e=>{e.preventDefault();const t={top:this.topOffset};this.smoothScrolling&&(t.behavior="smooth"),document.scrollingElement.scrollTo(t)}}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(T.content.cloneNode(!0))}}function P(e){if(Object.prototype.hasOwnProperty.call(this,e)){const t=this[e];delete this[e],this[e]=t}}function D(e){"string"==typeof e&&(this.style.height=e)}d=s("fb9GJ"),f=s("kyRuT");const O=new c,A=document.querySelector(".js-search-form"),L=document.querySelector(".js-error-notify");const M=document.querySelector(".js-search-form"),x=document.querySelector(".js-card-collection"),F=document.querySelector(".js-error-notify"),U=new c;async function q(e){try{if((0,f.spinerOn)(),U.resetPage(),U.quary=M.query.value.trim(),!U.quary)return F.innerHTML="Search result not successful.",setTimeout(j,3e3),void(0,f.spinerOff)();U.page=e;const{page:t,results:n,total_pages:i,total_results:s}=await U.getMovieByName();if(setTimeout(f.spinerOff,500),0===s)return F.innerHTML="Enter the correct movie name and try again.",void setTimeout(j,3e3);(0,_.addLocal)(n),x.innerHTML="",function(e){const t=p(W(e));x.insertAdjacentHTML("beforeend",t)}(n)}catch(e){(0,f.spinerOff)(),console.log(e.message)}}function W(e){const t=e.map((e=>(e.genre_ids=u(e.genre_ids).join(", "),e.release_date=e.release_date.slice(0,4),e)));return(0,_.addLocal)(t),t}function j(){F.innerHTML=""}M.addEventListener("submit",(async function(t){t.preventDefault();try{if((0,f.spinerOn)(),O.resetPage(),O.quary=A.query.value.trim(),!O.quary)return L.innerHTML="Search result not successful.",setTimeout(resetErorrMarkup,3e3),void(0,f.spinerOff)();const{page:t,results:n,total_pages:i,total_results:s}=await O.getMovieByName();if(setTimeout(f.spinerOff,500),0===s)return L.innerHTML="Enter the correct movie name and try again.",void setTimeout(resetErorrMarkup,3e3);const r=document.querySelector("#pagination"),o={totalItems:s,itemsPerPage:20,visiblePages:5,centerAlign:!0},a=new(e(d))(r,o);a.on("beforeMove",(e=>{q(e.page),window.scrollTo({top:0,behavior:"smooth"})})),a.movePageTo(0)}catch(e){(0,f.spinerOff)(),console.log(e.message)}})),R.defineCustomElement(),F.innerHTML="";const B=document.getElementById("film-cards");async function H(e){try{(0,f.spinerOn)();const n=new c;n.page=e;const i=await n.getPopularFilms();setTimeout(f.spinerOff,500),t=i.results,B.innerHTML=p(W(t))}catch(e){console.log(e.message)}var t}document.addEventListener("DOMContentLoaded",async function(){try{const{genres:e}=await l.getMovieGenres();!function(e){try{localStorage.setItem(h,JSON.stringify(e))}catch{return!1}}(e)}catch(e){console.log(e.message)}}()),document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector("#pagination"),n={totalItems:2e4,itemsPerPage:20,visiblePages:5,centerAlign:!0},i=new(e(d))(t,n);i.on("beforeMove",(e=>{H(e.page),window.scrollTo({top:0,behavior:"smooth"})})),i.movePageTo(0)}());
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var z,V,$={},K=$={};function G(){throw new Error("setTimeout has not been defined")}function Q(){throw new Error("clearTimeout has not been defined")}function J(e){if(z===setTimeout)return setTimeout(e,0);if((z===G||!z)&&setTimeout)return z=setTimeout,setTimeout(e,0);try{return z(e,0)}catch(t){try{return z.call(null,e,0)}catch(t){return z.call(this,e,0)}}}!function(){try{z="function"==typeof setTimeout?setTimeout:G}catch(e){z=G}try{V="function"==typeof clearTimeout?clearTimeout:Q}catch(e){V=Q}}();var Y,X=[],Z=!1,ee=-1;function te(){Z&&Y&&(Z=!1,Y.length?X=Y.concat(X):ee=-1,X.length&&ne())}function ne(){if(!Z){var e=J(te);Z=!0;for(var t=X.length;t;){for(Y=X,X=[];++ee<t;)Y&&Y[ee].run();ee=-1,t=X.length}Y=null,Z=!1,function(e){if(V===clearTimeout)return clearTimeout(e);if((V===Q||!V)&&clearTimeout)return V=clearTimeout,clearTimeout(e);try{V(e)}catch(t){try{return V.call(null,e)}catch(t){return V.call(this,e)}}}(e)}}function ie(e,t){this.fun=e,this.array=t}function se(){}K.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];X.push(new ie(e,t)),1!==X.length||Z||J(ne)},ie.prototype.run=function(){this.fun.apply(null,this.array)},K.title="browser",K.browser=!0,K.env={},K.argv=[],K.version="",K.versions={},K.on=se,K.addListener=se,K.once=se,K.off=se,K.removeListener=se,K.removeAllListeners=se,K.emit=se,K.prependListener=se,K.prependOnceListener=se,K.listeners=function(e){return[]},K.binding=function(e){throw new Error("process.binding is not supported")},K.cwd=function(){return"/"},K.chdir=function(e){throw new Error("process.chdir is not supported")},K.umask=function(){return 0};const re={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},oe=function(e,t){if(!e)throw ae(t)},ae=function(e){return new Error("Firebase Database ("+re.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},ce=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},le={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=s>>2,h=(3&s)<<4|o>>4;let u=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(u=64)),i.push(n[l],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ce(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw Error();const c=s<<2|r>>4;if(i.push(c),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},he=function(e){const t=ce(e);return le.encodeByteArray(t,!0)},ue=function(e){return he(e).replace(/\./g,"")},de=function(e){try{return le.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pe(e){return fe(void 0,e)}function fe(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=fe(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _e=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,me=()=>{try{return _e()||(()=>{if(void 0===$||void 0===$.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&de(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},ge=e=>{var t,n;return null===(n=null===(t=me())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ve=e=>{const t=ge(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},ye=()=>{var e;return null===(e=me())||void 0===e?void 0:e.config},we=e=>{var t;return null===(t=me())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class be{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ue(JSON.stringify({alg:"none",type:"JWT"})),ue(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ce(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function ke(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Ee(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Se(){const e=Te();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ne(){return!0===re.NODE_CLIENT||!0===re.NODE_ADMIN}function Re(){try{return"object"==typeof indexedDB}catch(e){return!1}}class Pe extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,De.prototype.create)}}class De{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(Oe,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new Pe(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const Oe=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e){return JSON.parse(e)}function Le(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=Ae(de(r[0])||""),n=Ae(de(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:s}},xe=function(e){const t=Me(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},Fe=function(e){const t=Me(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ue(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function qe(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function We(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function je(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function Be(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(He(n)&&He(r)){if(!Be(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function He(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ze(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Ve(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function $e(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=c^o&(a^c),s=1518500249):(i=o^a^c,s=1859775393):e<60?(i=o&a|c&(o|a),s=2400959708):(i=o^a^c,s=3395469782);const t=(r<<5|r>>>27)+i+l+s+n[e]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<t;)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function Ge(e,t){const n=new Qe(e,t);return n.subscribe.bind(n)}class Qe{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=Je),void 0===i.error&&(i.error=Je),void 0===i.complete&&(i.complete=Je);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function Je(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xe=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,oe(i<e.length,"Surrogate pair missing trail surrogate.");s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},Ze=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function et(e){return e&&e._delegate?e._delegate:e}class tt{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new be;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:nt})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=nt){return this.instances.has(e)}getOptions(e=nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===nt?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e=nt){return this.component?this.component.multipleInstances?e:nt:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class st{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new it(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=[];var ot,at;(at=ot||(ot={}))[at.DEBUG=0]="DEBUG",at[at.VERBOSE=1]="VERBOSE",at[at.INFO=2]="INFO",at[at.WARN=3]="WARN",at[at.ERROR=4]="ERROR",at[at.SILENT=5]="SILENT";const ct={debug:ot.DEBUG,verbose:ot.VERBOSE,info:ot.INFO,warn:ot.WARN,error:ot.ERROR,silent:ot.SILENT},lt=ot.INFO,ht={[ot.DEBUG]:"log",[ot.VERBOSE]:"log",[ot.INFO]:"info",[ot.WARN]:"warn",[ot.ERROR]:"error"},ut=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=ht[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class dt{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ot))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ct[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ot.DEBUG,...e),this._logHandler(this,ot.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ot.VERBOSE,...e),this._logHandler(this,ot.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ot.INFO,...e),this._logHandler(this,ot.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ot.WARN,...e),this._logHandler(this,ot.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ot.ERROR,...e),this._logHandler(this,ot.ERROR,...e)}constructor(e){this.name=e,this._logLevel=lt,this._logHandler=ut,this._userLogHandler=null,rt.push(this)}}const pt=(e,t)=>t.some((t=>e instanceof t));let ft,_t;const mt=new WeakMap,gt=new WeakMap,vt=new WeakMap,yt=new WeakMap,wt=new WeakMap;let bt={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return gt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||vt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ct(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function It(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(_t||(_t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(kt(this),t),Ct(mt.get(this))}:function(...t){return Ct(e.apply(kt(this),t))}:function(t,...n){const i=e.call(kt(this),t,...n);return vt.set(i,t.sort?t.sort():[t]),Ct(i)}}function Tt(e){return"function"==typeof e?It(e):(e instanceof IDBTransaction&&function(e){if(gt.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));gt.set(e,t)}(e),pt(e,ft||(ft=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,bt):e)}function Ct(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(Ct(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&mt.set(t,e)})).catch((()=>{})),wt.set(t,e),t}(e);if(yt.has(e))return yt.get(e);const t=Tt(e);return t!==e&&(yt.set(e,t),wt.set(t,e)),t}const kt=e=>wt.get(e);function Et(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=Ct(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(Ct(o.result),e.oldVersion,e.newVersion,Ct(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const St=["get","getKey","getAll","getAllKeys","count"],Nt=["put","add","delete","clear"],Rt=new Map;function Pt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Rt.get(t))return Rt.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=Nt.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!St.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return Rt.set(t,r),r}bt=(e=>({...e,get:(t,n,i)=>Pt(t,n)||e.get(t,n,i),has:(t,n)=>!!Pt(t,n)||e.has(t,n)}))(bt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dt{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Ot="@firebase/app",At="0.9.3",Lt=new dt("@firebase/app"),Mt="[DEFAULT]",xt={[Ot]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ft=new Map,Ut=new Map;function qt(e,t){try{e.container.addComponent(t)}catch(n){Lt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Wt(e){const t=e.name;if(Ut.has(t))return Lt.debug(`There were multiple attempts to register component ${t}.`),!1;Ut.set(t,e);for(const t of Ft.values())qt(t,e);return!0}function jt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bt=new De("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ht{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new tt("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="9.17.1";function Vt(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:Mt,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw Bt.create("bad-app-name",{appName:String(s)});if(n||(n=ye()),!n)throw Bt.create("no-options");const r=Ft.get(s);if(r){if(Be(n,r.options)&&Be(i,r.config))return r;throw Bt.create("duplicate-app",{appName:s})}const o=new st(s);for(const e of Ut.values())o.addComponent(e);const a=new Ht(n,i,o);return Ft.set(s,a),a}function $t(e=Mt){const t=Ft.get(e);if(!t&&e===Mt)return Vt();if(!t)throw Bt.create("no-app",{appName:e});return t}function Kt(e,t,n){var i;let s=null!==(i=xt[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Lt.warn(e.join(" "))}Wt(new tt(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gt="firebase-heartbeat-database",Qt=1,Jt="firebase-heartbeat-store";let Yt=null;function Xt(){return Yt||(Yt=Et(Gt,Qt,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Jt)}}).catch((e=>{throw Bt.create("idb-open",{originalErrorMessage:e.message})}))),Yt}async function Zt(e,t){try{const n=(await Xt()).transaction(Jt,"readwrite"),i=n.objectStore(Jt);return await i.put(t,en(e)),n.done}catch(e){if(e instanceof Pe)Lt.warn(e.message);else{const t=Bt.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Lt.warn(t.message)}}}function en(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=1024;class nn{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=sn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=sn(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=tn){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),on(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),on(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=ue(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rn(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function sn(){return(new Date).toISOString().substring(0,10)}class rn{async runIndexedDBEnvironmentCheck(){return!!Re()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await Xt()).transaction(Jt).objectStore(Jt).get(en(e))}catch(e){if(e instanceof Pe)Lt.warn(e.message);else{const t=Bt.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Lt.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Zt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Zt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function on(e){return ue(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var an;an="",Wt(new tt("platform-logger",(e=>new Dt(e)),"PRIVATE")),Wt(new tt("heartbeat",(e=>new nn(e)),"PRIVATE")),Kt(Ot,At,an),Kt(Ot,At,"esm2017"),Kt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Kt("firebase","9.17.1","app");const cn="@firebase/database",ln="0.14.3";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class un{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Le(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Ae(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ue(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new un(t)}}catch(e){}return new dn},fn=pn("localStorage"),_n=pn("sessionStorage"),mn=new dt("@firebase/database"),gn=function(){let e=1;return function(){return e++}}(),vn=function(e){const t=Xe(e),n=new Ke;n.update(t);const i=n.digest();return le.encodeByteArray(i)},yn=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=yn.apply(null,i):t+="object"==typeof i?Le(i):i,t+=" "}return t};let wn=null,bn=!0;const In=function(e,t){oe(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(mn.logLevel=ot.VERBOSE,wn=mn.log.bind(mn),t&&_n.set("logging_enabled",!0)):"function"==typeof e?wn=e:(wn=null,_n.remove("logging_enabled"))},Tn=function(...e){if(!0===bn&&(bn=!1,null===wn&&!0===_n.get("logging_enabled")&&In(!0)),wn){const t=yn.apply(null,e);wn(t)}},Cn=function(e){return function(...t){Tn(e,...t)}},kn=function(...e){const t="FIREBASE INTERNAL ERROR: "+yn(...e);mn.error(t)},En=function(...e){const t=`FIREBASE FATAL ERROR: ${yn(...e)}`;throw mn.error(t),new Error(t)},Sn=function(...e){const t="FIREBASE WARNING: "+yn(...e);mn.warn(t)},Nn=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Rn="[MIN_NAME]",Pn="[MAX_NAME]",Dn=function(e,t){if(e===t)return 0;if(e===Rn||t===Pn)return-1;if(t===Rn||e===Pn)return 1;{const n=qn(e),i=qn(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},On=function(e,t){return e===t?0:e<t?-1:1},An=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Le(t))},Ln=function(e){if("object"!=typeof e||null===e)return Le(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Le(t[i]),n+=":",n+=Ln(e[t[i]]);return n+="}",n},Mn=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function xn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Fn=function(e){oe(!Nn(e),"Invalid JSON number");const t=1023;let n,i,s,r,o;0===e?(i=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=r+t,s=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,s=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(s%2?1:0),s=Math.floor(s/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const c=a.join("");let l="";for(o=0;o<64;o+=8){let e=parseInt(c.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()};const Un=new RegExp("^-?(0*)\\d{1,10}$"),qn=function(e){if(Un.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Wn=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw Sn("Exception was thrown by user callback.",t),e}),Math.floor(0))}},jn=function(){return("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Bn=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hn{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Sn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Tn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Sn(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class Vn{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}Vn.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $n="5",Kn=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gn="ac",Qn="websocket",Jn="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yn{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&fn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,i,s=!1,r="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=fn.get("host:"+e)||this._host}}function Xn(e,t,n){let i;if(oe("string"==typeof t,"typeof type must == string"),oe("object"==typeof n,"typeof params must == object"),t===Qn)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Jn)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return xn(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{incrementCounter(e,t=1){Ue(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return pe(this.counters_)}constructor(){this.counters_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei={},ti={};function ni(e){const t=e.toString();return ei[t]||(ei[t]=new Zn),ei[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ii{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Wn((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="start";class ri{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ii(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Ne()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new oi(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===si)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[si]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=$n,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[Gn]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Kn.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ri.forceAllow_=!0}static forceDisallow(){ri.forceDisallow_=!0}static isAvailable(){return!Ne()&&(!!ri.forceAllow_||!(ri.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=he(t),i=Mn(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Ne())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Le(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Cn(e),this.stats_=ni(t),this.urlFn=e=>(this.appCheckToken&&(e[Gn]=this.appCheckToken),Xn(t,Jn,e))}}class oi{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Tn("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){Ne()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Tn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Ne())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=gn(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=oi.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){Tn("frame writing exception"),e.stack&&Tn(e.stack),Tn(e)}}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai=null;"undefined"!=typeof MozWebSocket?ai=MozWebSocket:"undefined"!=typeof WebSocket&&(ai=WebSocket);class ci{static connectionURL_(e,t,n,i,s){const r={};return r.v=$n,!Ne()&&"undefined"!=typeof location&&location.hostname&&Kn.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r[Gn]=i),s&&(r.p=s),Xn(e,Qn,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,fn.set("previous_websocket_failure",!0);try{let e;if(Ne()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${$n}/${hn}/${$.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new ai(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){ci.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==ai&&!ci.forceDisallow_}static previouslyFailed(){return fn.isInMemoryStorage||!0===fn.get("previous_websocket_failure")}markConnectionHealthy(){fn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Ae(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(oe(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Mn(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Cn(this.connId),this.stats_=ni(t),this.connURL=ci.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}}ci.responsesRequiredToBeHealthy=2,ci.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class li{static get ALL_TRANSPORTS(){return[ri,ci]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ci&&ci.isAvailable();let n=t&&!ci.previouslyFailed();if(e.webSocketOnly&&(t||Sn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[ci];else{const e=this.transports_=[];for(const t of li.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);li.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}li.globalTransportInitialized_=!1;class hi{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Bn((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=An("t",e),n=An("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=An("t",e),n=An("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=An("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?kn("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):kn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),$n!==n&&Sn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Bn((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Bn((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(fn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,i,s,r,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Cn("c:"+this.id+":"),this.transportManager_=new li(t),this.log_("Connection created"),this.start_()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){oe(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},oe(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends di{static getInstance(){return new pi}getInitialEvent(e){return oe("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Ce()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=32,_i=768;class mi{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function gi(){return new mi("")}function vi(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function yi(e){return e.pieces_.length-e.pieceNum_}function wi(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new mi(e.pieces_,t)}function bi(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Ii(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Ti(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new mi(t,0)}function Ci(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof mi)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new mi(n,0)}function ki(e){return e.pieceNum_>=e.pieces_.length}function Ei(e,t){const n=vi(e),i=vi(t);if(null===n)return t;if(n===i)return Ei(wi(e),wi(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Si(e,t){const n=Ii(e,0),i=Ii(t,0);for(let e=0;e<n.length&&e<i.length;e++){const t=Dn(n[e],i[e]);if(0!==t)return t}return n.length===i.length?0:n.length<i.length?-1:1}function Ni(e,t){if(yi(e)!==yi(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Ri(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(yi(e)>yi(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Pi{constructor(e,t){this.errorPrefix_=t,this.parts_=Ii(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Ze(this.parts_[e]);Di(this)}}function Di(e){if(e.byteLength_>_i)throw new Error(e.errorPrefix_+"has a key path longer than "+_i+" bytes ("+e.byteLength_+").");if(e.parts_.length>fi)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fi+") or object contains a cycle "+Oi(e))}function Oi(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends di{static getInstance(){return new Ai}getInitialEvent(e){return oe("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=1e3;class Mi extends ui{sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(Le(s)),oe(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new be,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),oe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),oe(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;Mi.warnOnListenWarnings_(r,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Ue(e,"w")){const n=qe(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Sn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||Fe(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=xe(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),oe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Le(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):kn("Unrecognized action received from server: "+Le(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){oe(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Li,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Li,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Li),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Mi.nextConnectionId_++,s=this.lastSessionId;let r=!1,o=null;const a=function(){o?o.close():(r=!0,n())},c=function(e){oe(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:c};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);r?Tn("getToken() completed but was canceled"):(Tn("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=c&&c.token,o=new hi(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Sn(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),r||(this.repoInfo_.nodeAdmin&&Sn(e),a())}}}interrupt(e){Tn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Tn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],We(this.interruptReasons_)&&(this.reconnectDelay_=Li,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Ln(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new mi(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Tn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Tn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Ne()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+hn.replace(/\./g,"-")]=1,Ce()?e["framework.cordova"]=1:Ee()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pi.getInstance().currentlyOnline();return We(this.interruptReasons_)&&e}constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Mi.nextPersistentConnectionId_++,this.log_=Cn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Li,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Ne())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ai.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&pi.getInstance().on("online",this.onOnline_,this)}}Mi.nextPersistentConnectionId_=0,Mi.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xi{static Wrap(e,t){return new xi(e,t)}constructor(e,t){this.name=e,this.node=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new xi(Rn,e),i=new xi(Rn,t);return 0!==this.compare(n,i)}minPost(){return xi.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ui;class qi extends Fi{static get __EMPTY_NODE(){return Ui}static set __EMPTY_NODE(e){Ui=e}compare(e,t){return Dn(e.name,t.name)}isDefinedOn(e){throw ae("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return xi.MIN}maxPost(){return new xi(Pn,Ui)}makePost(e,t){return oe("string"==typeof e,"KeyIndex indexValue must always be a string."),new xi(e,Ui)}toString(){return".key"}}const Wi=new qi;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class Bi{copy(e,t,n,i,s){return new Bi(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Hi.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Hi.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Bi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Bi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:Bi.RED,this.left=null!=i?i:Hi.EMPTY_NODE,this.right=null!=s?s:Hi.EMPTY_NODE}}Bi.RED=!0,Bi.BLACK=!1;class Hi{insert(e,t){return new Hi(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Bi.BLACK,null,null))}remove(e){return new Hi(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Bi.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ji(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ji(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ji(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ji(this.root_,null,this.comparator_,!0,e)}constructor(e,t=Hi.EMPTY_NODE){this.comparator_=e,this.root_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zi(e,t){return Dn(e.name,t.name)}function Vi(e,t){return Dn(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $i;Hi.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new Bi(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Ki=function(e){return"number"==typeof e?"number:"+Fn(e):"string:"+e},Gi=function(e){if(e.isLeafNode()){const t=e.val();oe("string"==typeof t||"number"==typeof t||"object"==typeof t&&Ue(t,".sv"),"Priority must be a string or number.")}else oe(e===$i||e.isEmpty(),"priority of unexpected type.");oe(e===$i||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qi,Ji,Yi;class Xi{static set __childrenNodeConstructor(e){Qi=e}static get __childrenNodeConstructor(){return Qi}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Xi(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Xi.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ki(e)?this:".priority"===vi(e)?this.priorityNode_:Xi.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Xi.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=vi(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(oe(".priority"!==n||1===yi(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Xi.__childrenNodeConstructor.EMPTY_NODE.updateChild(wi(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ki(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Fn(this.value_):this.value_,this.lazyHash_=vn(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Xi.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Xi.__childrenNodeConstructor?-1:(oe(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Xi.VALUE_TYPE_ORDER.indexOf(t),s=Xi.VALUE_TYPE_ORDER.indexOf(n);return oe(i>=0,"Unknown leaf type: "+t),oe(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=Xi.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,oe(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Gi(this.priorityNode_)}}Xi.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Zi=new class extends Fi{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?Dn(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return xi.MIN}maxPost(){return new xi(Pn,new Xi("[PRIORITY-POST]",Yi))}makePost(e,t){const n=Ji(e);return new xi(t,new Xi("[PRIORITY-POST]",n))}toString(){return".priority"}},es=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/es,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}}const ns=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new Bi(a,o.node,Bi.BLACK,null,null);{const c=parseInt(r/2,10)+t,l=s(t,c),h=s(c+1,i);return o=e[c],a=n?n(o):o,new Bi(a,o.node,Bi.BLACK,l,h)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const l=s(r+1,a),h=e[r],u=n?n(h):h;c(new Bi(u,h.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Bi.BLACK):(a(i,Bi.BLACK),a(i,Bi.RED))}return r}(new ts(e.length));return new Hi(i||t,r)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let is;const ss={};class rs{static get Default(){return oe(ss&&Zi,"ChildrenNode.ts has not been loaded"),is=is||new rs({".priority":ss},{".priority":Zi}),is}get(e){const t=qe(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Hi?t:null}hasIndex(e){return Ue(this.indexSet_,e.toString())}addIndex(e,t){oe(e!==Wi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(xi.Wrap);let r,o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?ns(n,e.getCompare()):ss;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const l=Object.assign({},this.indexes_);return l[a]=r,new rs(l,c)}addToIndexes(e,t){const n=je(this.indexes_,((n,i)=>{const s=qe(this.indexSet_,i);if(oe(s,"Missing index implementation for "+i),n===ss){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(xi.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),ns(n,s.getCompare())}return ss}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new xi(e.name,i))),s.insert(e,e.node)}}));return new rs(n,this.indexSet_)}removeFromIndexes(e,t){const n=je(this.indexes_,(n=>{if(n===ss)return n;{const i=t.get(e.name);return i?n.remove(new xi(e.name,i)):n}}));return new rs(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let os;class as{static get EMPTY_NODE(){return os||(os=new as(new Hi(Vi),null,rs.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||os}updatePriority(e){return this.children_.isEmpty()?this:new as(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?os:t}}getChild(e){const t=vi(e);return null===t?this:this.getImmediateChild(t).getChild(wi(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(oe(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new xi(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?os:this.priorityNode_;return new as(i,r,s)}}updateChild(e,t){const n=vi(e);if(null===n)return t;{oe(".priority"!==vi(e)||1===yi(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(wi(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(Zi,((r,o)=>{t[r]=o.val(e),n++,s&&as.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ki(this.getPriority().val())+":"),this.forEachChild(Zi,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":vn(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new xi(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new xi(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new xi(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,xi.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,xi.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===cs?-1:0}withIndex(e){if(e===Wi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new as(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Wi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Zi),n=t.getIterator(Zi);let i=e.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===Wi?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Gi(this.priorityNode_),this.children_.isEmpty()&&oe(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}as.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const cs=new class extends as{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return as.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new Hi(Vi),as.EMPTY_NODE,rs.Default)}};Object.defineProperties(xi,{MIN:{value:new xi(Rn,as.EMPTY_NODE)},MAX:{value:new xi(Pn,cs)}}),qi.__EMPTY_NODE=as.EMPTY_NODE,Xi.__childrenNodeConstructor=as,$i=cs,function(e){Yi=e}(cs);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ls=!0;function hs(e,t=null){if(null===e)return as.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),oe(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Xi(e,hs(t))}if(e instanceof Array||!ls){let n=as.EMPTY_NODE;return xn(e,((t,i)=>{if(Ue(e,t)&&"."!==t.substring(0,1)){const e=hs(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(hs(t))}{const n=[];let i=!1;if(xn(e,((e,t)=>{if("."!==e.substring(0,1)){const s=hs(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new xi(e,s)))}})),0===n.length)return as.EMPTY_NODE;const s=ns(n,zi,(e=>e.name),Vi);if(i){const e=ns(n,Zi.getCompare());return new as(s,hs(t),new rs({".priority":e},{".priority":Zi}))}return new as(s,hs(t),rs.Default)}}!function(e){Ji=e}(hs);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class us extends Fi{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?Dn(e.name,t.name):s}makePost(e,t){const n=hs(e),i=as.EMPTY_NODE.updateChild(this.indexPath_,n);return new xi(t,i)}maxPost(){const e=as.EMPTY_NODE.updateChild(this.indexPath_,cs);return new xi(Pn,e)}toString(){return Ii(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,oe(!ki(e)&&".priority"!==vi(e),"Can't create PathIndex with empty path or .priority key")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new class extends Fi{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Dn(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return xi.MIN}maxPost(){return xi.MAX}makePost(e,t){const n=hs(e);return new xi(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(e){return{type:"value",snapshotNode:e}}function fs(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function _s(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function ms(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gs{hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return oe(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return oe(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rn}hasEnd(){return this.endSet_}getIndexEndValue(){return oe(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return oe(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return oe(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Zi}copy(){const e=new gs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Zi}}function vs(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Zi?n="$priority":e.index_===ds?n="$value":e.index_===Wi?n="$key":(oe(e.index_ instanceof us,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Le(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=Le(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+Le(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=Le(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+Le(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function ys(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Zi&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends ui{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(oe(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=ws.getListenId_(e,n),o={};this.listens_[r]=o;const a=vs(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),qe(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=ws.getListenId_(e,t);delete this.listens_[n]}get(e){const t=vs(e._queryParams),n=e._path.toString(),i=new be;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ze(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=Ae(o.responseText)}catch(e){Sn("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&Sn("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=Cn("p:rest:"),this.listens_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=as.EMPTY_NODE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(){return{value:null,children:new Map}}function Ts(e,t,n){if(ki(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=vi(t);e.children.has(i)||e.children.set(i,Is());Ts(e.children.get(i),t=wi(t),n)}}function Cs(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{Cs(i,new mi(t.toString()+"/"+e),n)}))}class ks{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&xn(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;xn(e,((e,i)=>{i>0&&Ue(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Bn(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ks(e);const n=1e4+2e4*Math.random();Bn(this.reportStats_.bind(this),Math.floor(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ss,Ns;function Rs(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Ns=Ss||(Ss={}))[Ns.OVERWRITE=0]="OVERWRITE",Ns[Ns.MERGE=1]="MERGE",Ns[Ns.ACK_USER_WRITE=2]="ACK_USER_WRITE",Ns[Ns.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Ps{operationForChild(e){if(ki(this.path)){if(null!=this.affectedTree.value)return oe(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new mi(e));return new Ps(gi(),t,this.revert)}}return oe(vi(this.path)===e,"operationForChild called for unrelated child."),new Ps(wi(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Ss.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ds{operationForChild(e){return ki(this.path)?new Ds(this.source,gi(),this.snap.getImmediateChild(e)):new Ds(this.source,wi(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Ss.OVERWRITE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{operationForChild(e){if(ki(this.path)){const t=this.children.subtree(new mi(e));return t.isEmpty()?null:t.value?new Ds(this.source,gi(),t.value):new Os(this.source,gi(),t)}return oe(vi(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Os(this.source,wi(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Ss.MERGE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ki(e))return this.isFullyInitialized()&&!this.filtered_;const t=vi(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(e,t,n,i,s,r){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw ae("Should only compare child_ events.");const i=new xi(t.childName,t.snapshotNode),s=new xi(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function Ms(e,t){return{eventCache:e,serverCache:t}}function xs(e,t,n,i){return Ms(new As(t,n,i),e.serverCache)}function Fs(e,t,n,i){return Ms(e.eventCache,new As(t,n,i))}function Us(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function qs(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws;class js{static fromObject(e){let t=new js(null);return xn(e,((e,n)=>{t=t.set(new mi(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:gi(),value:this.value};if(ki(e))return null;{const n=vi(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(wi(e),t);if(null!=s){return{path:Ci(new mi(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(ki(e))return this;{const t=vi(e),n=this.children.get(t);return null!==n?n.subtree(wi(e)):new js(null)}}set(e,t){if(ki(e))return new js(t,this.children);{const n=vi(e),i=(this.children.get(n)||new js(null)).set(wi(e),t),s=this.children.insert(n,i);return new js(this.value,s)}}remove(e){if(ki(e))return this.children.isEmpty()?new js(null):new js(null,this.children);{const t=vi(e),n=this.children.get(t);if(n){const i=n.remove(wi(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new js(null):new js(this.value,s)}return this}}get(e){if(ki(e))return this.value;{const t=vi(e),n=this.children.get(t);return n?n.get(wi(e)):null}}setTree(e,t){if(ki(e))return t;{const n=vi(e),i=(this.children.get(n)||new js(null)).setTree(wi(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new js(this.value,s)}}fold(e){return this.fold_(gi(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(Ci(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,gi(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(ki(e))return null;{const i=vi(e),s=this.children.get(i);return s?s.findOnPath_(wi(e),Ci(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,gi(),t)}foreachOnPath_(e,t,n){if(ki(e))return this;{this.value&&n(t,this.value);const i=vi(e),s=this.children.get(i);return s?s.foreachOnPath_(wi(e),Ci(t,i),n):new js(null)}}foreach(e){this.foreach_(gi(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Ci(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(Ws||(Ws=new Hi(On)),Ws))()){this.value=e,this.children=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{static empty(){return new Bs(new js(null))}constructor(e){this.writeTree_=e}}function Hs(e,t,n){if(ki(t))return new Bs(new js(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=Ei(s,t);return r=r.updateChild(o,n),new Bs(e.writeTree_.set(s,r))}{const i=new js(n),s=e.writeTree_.setTree(t,i);return new Bs(s)}}}function zs(e,t,n){let i=e;return xn(n,((e,n)=>{i=Hs(i,Ci(t,e),n)})),i}function Vs(e,t){if(ki(t))return Bs.empty();{const n=e.writeTree_.setTree(t,new js(null));return new Bs(n)}}function $s(e,t){return null!=Ks(e,t)}function Ks(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ei(n.path,t)):null}function Gs(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Zi,((e,n)=>{t.push(new xi(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new xi(e,n.value))})),t}function Qs(e,t){if(ki(t))return e;{const n=Ks(e,t);return new Bs(null!=n?new js(n):e.writeTree_.subtree(t))}}function Js(e){return e.writeTree_.isEmpty()}function Ys(e,t){return Xs(gi(),e.writeTree_,t)}function Xs(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?(oe(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=Xs(Ci(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Ci(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(e,t){return dr(t,e)}function er(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));oe(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;for(;s&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&tr(t,i.path)?s=!1:Ri(i.path,t.path)&&(r=!0)),o--}if(s){if(r)return function(e){e.visibleWrites=ir(e.allWrites,nr,gi()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Vs(e.visibleWrites,i.path);else{xn(i.children,(t=>{e.visibleWrites=Vs(e.visibleWrites,Ci(i.path,t))}))}return!0}return!1}function tr(e,t){if(e.snap)return Ri(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ri(Ci(e.path,n),t))return!0;return!1}function nr(e){return e.visible}function ir(e,t,n){let i=Bs.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)Ri(n,e)?(t=Ei(n,e),i=Hs(i,t,r.snap)):Ri(e,n)&&(t=Ei(e,n),i=Hs(i,gi(),r.snap.getChild(t)));else{if(!r.children)throw ae("WriteRecord should have .snap or .children");if(Ri(n,e))t=Ei(n,e),i=zs(i,t,r.children);else if(Ri(e,n))if(t=Ei(e,n),ki(t))i=zs(i,gi(),r.children);else{const e=qe(r.children,vi(t));if(e){const n=e.getChild(wi(t));i=Hs(i,gi(),n)}}}}}return i}function sr(e,t,n,i,s){if(i||s){const r=Qs(e.visibleWrites,t);if(!s&&Js(r))return n;if(s||null!=n||$s(r,gi())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(Ri(e.path,t)||Ri(t,e.path))};return Ys(ir(e.allWrites,r,t),n||as.EMPTY_NODE)}return null}{const i=Ks(e.visibleWrites,t);if(null!=i)return i;{const i=Qs(e.visibleWrites,t);if(Js(i))return n;if(null!=n||$s(i,gi())){return Ys(i,n||as.EMPTY_NODE)}return null}}}function rr(e,t,n,i){return sr(e.writeTree,e.treePath,t,n,i)}function or(e,t){return function(e,t,n){let i=as.EMPTY_NODE;const s=Ks(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(Zi,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=Qs(e.visibleWrites,t);return n.forEachChild(Zi,((e,t)=>{const n=Ys(Qs(s,new mi(e)),t);i=i.updateImmediateChild(e,n)})),Gs(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Gs(Qs(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function ar(e,t,n,i){return function(e,t,n,i,s){oe(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Ci(t,n);if($s(e.visibleWrites,r))return null;{const t=Qs(e.visibleWrites,r);return Js(t)?s.getChild(n):Ys(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function cr(e,t){return function(e,t){return Ks(e.visibleWrites,t)}(e.writeTree,Ci(e.treePath,t))}function lr(e,t,n,i,s,r){return function(e,t,n,i,s,r,o){let a;const c=Qs(e.visibleWrites,t),l=Ks(c,gi());if(null!=l)a=l;else{if(null==n)return[];a=Ys(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();for(;c&&e.length<s;)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,s,r)}function hr(e,t,n){return function(e,t,n,i){const s=Ci(t,n),r=Ks(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return Ys(Qs(e.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function ur(e,t){return dr(Ci(e.treePath,t),e.writeTree)}function dr(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{trackChildChange(e){const t=e.type,n=e.childName;oe("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),oe(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,ms(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,_s(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,fs(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw ae("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,ms(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class _r{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new As(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:qs(this.viewCache_),s=lr(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(e,t,n,i,s){const r=new pr;let o,a;if(n.type===Ss.OVERWRITE){const c=n;c.source.fromUser?o=yr(e,t,c.path,c.snap,i,s,r):(oe(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!ki(c.path),o=vr(e,t,c.path,c.snap,i,s,a,r))}else if(n.type===Ss.MERGE){const c=n;c.source.fromUser?o=function(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,c)=>{const l=Ci(n,i);wr(t,vi(l))&&(a=yr(e,a,l,c,s,r,o))})),i.foreach(((i,c)=>{const l=Ci(n,i);wr(t,vi(l))||(a=yr(e,a,l,c,s,r,o))})),a}(e,t,c.path,c.children,i,s,r):(oe(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=Ir(e,t,c.path,c.children,i,s,a,r))}else if(n.type===Ss.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,s,r){let o;if(null!=cr(i,n))return t;{const a=new _r(i,t,s),c=t.eventCache.getNode();let l;if(ki(n)||".priority"===vi(n)){let n;if(t.serverCache.isFullyInitialized())n=rr(i,qs(t));else{const e=t.serverCache.getNode();oe(e instanceof as,"serverChildren would be complete if leaf node"),n=or(i,e)}l=e.filter.updateFullNode(c,n,r)}else{const s=vi(n);let h=hr(i,s,t.serverCache);null==h&&t.serverCache.isCompleteForChild(s)&&(h=c.getImmediateChild(s)),l=null!=h?e.filter.updateChild(c,s,h,wi(n),a,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(c,s,as.EMPTY_NODE,wi(n),a,r):c,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=rr(i,qs(t)),o.isLeafNode()&&(l=e.filter.updateFullNode(l,o,r)))}return o=t.serverCache.isFullyInitialized()||null!=cr(i,gi()),xs(t,l,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,i,s,r):function(e,t,n,i,s,r,o){if(null!=cr(s,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(ki(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return vr(e,t,n,c.getNode().getChild(n),s,r,a,o);if(ki(n)){let i=new js(null);return c.getNode().forEachChild(Wi,((e,t)=>{i=i.set(new mi(e),t)})),Ir(e,t,n,i,s,r,a,o)}return t}{let l=new js(null);return i.foreach(((e,t)=>{const i=Ci(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))})),Ir(e,t,n,l,s,r,a,o)}}(e,t,a.path,a.affectedTree,i,s,r)}else{if(n.type!==Ss.LISTEN_COMPLETE)throw ae("Unknown operation type: "+n.type);o=function(e,t,n,i,s){const r=t.serverCache,o=Fs(t,r.getNode(),r.isFullyInitialized()||ki(n),r.isFiltered());return gr(e,o,n,i,fr,s)}(e,t,n.path,i,r)}const c=r.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Us(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(ps(Us(t)))}}(t,o,c),{viewCache:o,changes:c}}function gr(e,t,n,i,s,r){const o=t.eventCache;if(null!=cr(i,n))return t;{let a,c;if(ki(n))if(oe(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=qs(t),s=or(i,n instanceof as?n:as.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),s,r)}else{const n=rr(i,qs(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const l=vi(n);if(".priority"===l){oe(1===yi(n),"Can't have a priority with additional path components");const s=o.getNode();c=t.serverCache.getNode();const r=ar(i,n,s,c);a=null!=r?e.filter.updatePriority(s,r):o.getNode()}else{const h=wi(n);let u;if(o.isCompleteForChild(l)){c=t.serverCache.getNode();const e=ar(i,n,o.getNode(),c);u=null!=e?o.getNode().getImmediateChild(l).updateChild(h,e):o.getNode().getImmediateChild(l)}else u=hr(i,l,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),l,u,h,s,r):o.getNode()}}return xs(t,a,o.isFullyInitialized()||ki(n),e.filter.filtersNodes())}}function vr(e,t,n,i,s,r,o,a){const c=t.serverCache;let l;const h=o?e.filter:e.filter.getIndexedFilter();if(ki(n))l=h.updateFullNode(c.getNode(),i,null);else if(h.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=h.updateFullNode(c.getNode(),e,null)}else{const e=vi(n);if(!c.isCompleteForPath(n)&&yi(n)>1)return t;const s=wi(n),r=c.getNode().getImmediateChild(e).updateChild(s,i);l=".priority"===e?h.updatePriority(c.getNode(),r):h.updateChild(c.getNode(),e,r,s,fr,null)}const u=Fs(t,l,c.isFullyInitialized()||ki(n),h.filtersNodes());return gr(e,u,n,s,new _r(s,u,r),a)}function yr(e,t,n,i,s,r,o){const a=t.eventCache;let c,l;const h=new _r(s,t,r);if(ki(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=xs(t,l,!0,e.filter.filtersNodes());else{const s=vi(n);if(".priority"===s)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=xs(t,l,a.isFullyInitialized(),a.isFiltered());else{const r=wi(n),l=a.getNode().getImmediateChild(s);let u;if(ki(r))u=i;else{const e=h.getCompleteChild(s);u=null!=e?".priority"===bi(r)&&e.getChild(Ti(r)).isEmpty()?e:e.updateChild(r,i):as.EMPTY_NODE}if(l.equals(u))c=t;else{c=xs(t,e.filter.updateChild(a.getNode(),s,u,r,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function wr(e,t){return e.eventCache.isCompleteForChild(t)}function br(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Ir(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=ki(n)?i:new js(null).setTree(n,i);const h=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const c=br(0,t.serverCache.getNode().getImmediateChild(n),i);l=vr(e,l,new mi(n),c,s,r,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!c){const c=br(0,t.serverCache.getNode().getImmediateChild(n),i);l=vr(e,l,new mi(n),c,s,r,o,a)}})),l}function Tr(e,t){const n=qs(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ki(t)&&!n.getImmediateChild(vi(t)).isEmpty())?n.getChild(t):null}function Cr(e,t,n,i){t.type===Ss.MERGE&&null!==t.source.queryId&&(oe(qs(e.viewCache_),"We should always have a full cache before handling merges"),oe(Us(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=mr(e.processor_,s,t,n,i);var o,a;return o=e.processor_,a=r.viewCache,oe(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),oe(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),oe(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,kr(e,r.changes,r.viewCache.eventCache.getNode(),null)}function kr(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const s=[],r=[];return t.forEach((t=>{var n;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Ls(e,s,"child_removed",t,i,n),Ls(e,s,"child_added",t,i,n),Ls(e,s,"child_moved",r,i,n),Ls(e,s,"child_changed",t,i,n),Ls(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Er,Sr;function Nr(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return oe(null!=r,"SyncTree gave us an op for an invalid query."),Cr(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(Cr(r,t,n,i));return s}}function Rr(e,t){let n=null;for(const i of e.views.values())n=n||Tr(i,t);return n}class Pr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new js(null),this.pendingWriteTree_={visibleWrites:Bs.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Dr(e,t,n,i,s){return function(e,t,n,i,s){oe(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=Hs(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,s),s?Fr(e,new Ds({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Or(e,t,n,i){!function(e,t,n,i){oe(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=zs(e.visibleWrites,t,n),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i);const s=js.fromObject(n);return Fr(e,new Os({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,s))}function Ar(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(er(e.pendingWriteTree_,t)){let t=new js(null);return null!=i.snap?t=t.set(gi(),!0):xn(i.children,(e=>{t=t.set(new mi(e),!0)})),Fr(e,new Ps(i.path,t,n))}return[]}function Lr(e,t,n){return Fr(e,new Ds({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Mr(e,t,n,i){const s=Wr(e,i);if(null!=s){const i=jr(s),r=i.path,o=i.queryId,a=Ei(r,t);return Br(e,r,new Ds(Rs(o),a,n))}return[]}function xr(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Rr(n,Ei(e,t));if(i)return i}));return sr(i,t,s,n,!0)}function Fr(e,t){return Ur(t,e.syncPointTree_,null,Zs(e.pendingWriteTree_,gi()))}function Ur(e,t,n,i){if(ki(e.path))return qr(e,t,n,i);{const s=t.get(gi());null==n&&null!=s&&(n=Rr(s,gi()));let r=[];const o=vi(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=ur(i,o);r=r.concat(Ur(a,c,e,t))}return s&&(r=r.concat(Nr(s,e,i,n))),r}}function qr(e,t,n,i){const s=t.get(gi());null==n&&null!=s&&(n=Rr(s,gi()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=ur(i,t),c=e.operationForChild(t);c&&(r=r.concat(qr(c,s,o,a)))})),s&&(r=r.concat(Nr(s,e,i,n))),r}function Wr(e,t){return e.tagToQueryMap.get(t)}function jr(e){const t=e.indexOf("$");return oe(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new mi(e.substr(0,t))}}function Br(e,t,n){const i=e.syncPointTree_.get(t);oe(i,"Missing sync point for query tag that we're tracking");return Nr(i,n,Zs(e.pendingWriteTree_,t),null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hr{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Hr(t)}node(){return this.node_}constructor(e){this.node_=e}}class zr{getImmediateChild(e){const t=Ci(this.path_,e);return new zr(this.syncTree_,t)}node(){return xr(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const Vr=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},$r=function(e,t,n){return e&&"object"==typeof e?(oe(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Kr(e[".sv"],t,n):"object"==typeof e[".sv"]?Gr(e[".sv"],t):void oe(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Kr=function(e,t,n){if("timestamp"===e)return n.timestamp;oe(!1,"Unexpected server value: "+e)},Gr=function(e,t,n){e.hasOwnProperty("increment")||oe(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&oe(!1,"Unexpected increment value: "+i);const s=t.node();if(oe(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return"number"!=typeof r?i:r+i},Qr=function(e,t,n,i){return Yr(t,new zr(n,e),i)},Jr=function(e,t,n){return Yr(e,new Hr(t),n)};function Yr(e,t,n){const i=e.getPriority().val(),s=$r(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=$r(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new Xi(r,hs(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new Xi(s))),i.forEachChild(Zi,((e,i)=>{const s=Yr(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Zr(e,t){let n=t instanceof mi?t:new mi(t),i=e,s=vi(n);for(;null!==s;){const e=qe(i.node.children,s)||{children:{},childCount:0};i=new Xr(s,i,e),n=wi(n),s=vi(n)}return i}function eo(e){return e.node.value}function to(e,t){e.node.value=t,oo(e)}function no(e){return e.node.childCount>0}function io(e,t){xn(e.node.children,((n,i)=>{t(new Xr(n,e,i))}))}function so(e,t,n,i){n&&!i&&t(e),io(e,(e=>{so(e,t,!0,i)})),n&&i&&t(e)}function ro(e){return new mi(null===e.parent?e.name:ro(e.parent)+"/"+e.name)}function oo(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===eo(e)&&!no(e)}(n),s=Ue(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,oo(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,oo(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const ao=/[\[\].#$\/\u0000-\u001F\u007F]/,co=/[\[\].#$\u0000-\u001F\u007F]/,lo=10485760,ho=function(e){return"string"==typeof e&&0!==e.length&&!ao.test(e)},uo=function(e){return"string"==typeof e&&0!==e.length&&!co.test(e)},po=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!Nn(e)||e&&"object"==typeof e&&Ue(e,".sv")},fo=function(e,t,n){const i=n instanceof mi?new Pi(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Oi(i));if("function"==typeof t)throw new Error(e+"contains a function "+Oi(i)+" with contents = "+t.toString());if(Nn(t))throw new Error(e+"contains "+t.toString()+" "+Oi(i));if("string"==typeof t&&t.length>3495253.3333333335&&Ze(t)>lo)throw new Error(e+"contains a string greater than "+lo+" utf8 bytes "+Oi(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if(xn(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!ho(t)))throw new Error(e+" contains an invalid key ("+t+") "+Oi(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=Ze(a),Di(o),fo(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=Ze(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&s)throw new Error(e+' contains ".value" child '+Oi(i)+" in addition to actual children.")}},_o=function(e,t,n,i){if(i&&void 0===t)return;const s=Ye(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(s+" must be an object containing the children to replace.");const r=[];xn(t,((e,t)=>{const i=new mi(e);if(fo(s,t,Ci(n,i)),".priority"===bi(i)&&!po(t))throw new Error(s+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(i)})),function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const s=Ii(i);for(let t=0;t<s.length;t++)if(".priority"===s[t]&&t===s.length-1);else if(!ho(s[t]))throw new Error(e+"contains an invalid key ("+s[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(Si);let s=null;for(n=0;n<t.length;n++){if(i=t[n],null!==s&&Ri(s,i))throw new Error(e+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}}(s,r)},mo=function(e,t,n,i){if(!(i&&void 0===n||uo(n)))throw new Error(Ye(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},go=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),mo(e,t,n,i)},vo=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!ho(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),uo(e)}(n))throw new Error(Ye(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yo{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wo(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||Ni(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function bo(e,t,n){wo(e,n),Io(e,(e=>Ri(e,t)||Ri(t,e)))}function Io(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){t(s.path)?(To(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function To(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();wn&&Tn("event: "+n.toString()),Wn(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co="repo_interrupt",ko=25;class Eo{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new yo,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Is(),this.transactionQueueTree_=new Xr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function So(e,t,n){if(e.stats_=ni(e.repoInfo_),e.forceRestClient_||jn())e.server_=new ws(e.repoInfo_,((t,n,i,s)=>{Po(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Do(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Le(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Mi(e.repoInfo_,t,((t,n,i,s)=>{Po(e,t,n,i,s)}),(t=>{Do(e,t)}),(t=>{!function(e,t){xn(t,((t,n)=>{Oo(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return ti[n]||(ti[n]=t()),ti[n]}(e.repoInfo_,(()=>new Es(e.stats_,e.server_))),e.infoData_=new bs,e.infoSyncTree_=new Pr({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Lr(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),Oo(e,"connected",!1),e.serverSyncTree_=new Pr({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);bo(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function No(e){const t=e.infoData_.getNode(new mi(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Ro(e){return Vr({timestamp:No(e)})}function Po(e,t,n,i,s){e.dataUpdateCount++;const r=new mi(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=je(n,(e=>hs(e)));o=function(e,t,n,i){const s=Wr(e,i);if(s){const i=jr(s),r=i.path,o=i.queryId,a=Ei(r,t),c=js.fromObject(n);return Br(e,r,new Os(Rs(o),a,c))}return[]}(e.serverSyncTree_,r,t,s)}else{const t=hs(n);o=Mr(e.serverSyncTree_,r,t,s)}else if(i){const t=je(n,(e=>hs(e)));o=function(e,t,n){const i=js.fromObject(n);return Fr(e,new Os({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=hs(n);o=Lr(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=qo(e,r)),bo(e.eventQueue_,a,o)}function Do(e,t){Oo(e,"connected",t),!1===t&&function(e){Mo(e,"onDisconnectEvents");const t=Ro(e),n=Is();Cs(e.onDisconnect_,gi(),((i,s)=>{const r=Qr(i,s,e.serverSyncTree_,t);Ts(n,i,r)}));let i=[];Cs(n,gi(),((t,n)=>{i=i.concat(Lr(e.serverSyncTree_,t,n));const s=zo(e,t);qo(e,s)})),e.onDisconnect_=Is(),bo(e.eventQueue_,gi(),i)}(e)}function Oo(e,t,n){const i=new mi("/.info/"+t),s=hs(n);e.infoData_.updateSnapshot(i,s);const r=Lr(e.infoSyncTree_,i,s);bo(e.eventQueue_,i,r)}function Ao(e){return e.nextWriteId_++}function Lo(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Co)}function Mo(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Tn(n,...t)}function xo(e,t,n,i){t&&Wn((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let s=e;i&&(s+=": "+i);const r=new Error(s);r.code=e,t(r)}}))}function Fo(e,t,n){return xr(e.serverSyncTree_,t,n)||as.EMPTY_NODE}function Uo(e,t=e.transactionQueueTree_){if(t||Ho(e,t),eo(t)){const n=jo(e,t);oe(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),s=Fo(e,t,i);let r=s;const o=s.hash();for(let e=0;e<n.length;e++){const i=n[e];oe(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const s=Ei(t,i.path);r=r.updateChild(s,i.currentOutputSnapshotRaw)}const a=r.val(!0),c=t;e.server_.put(c.toString(),a,(i=>{Mo(e,"transaction put response",{path:c.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Ar(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Ho(e,Zr(e.transactionQueueTree_,t)),Uo(e,e.transactionQueueTree_),bo(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)Wn(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Sn("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}qo(e,t)}}),o)}(e,ro(t),n)}else no(t)&&io(t,(t=>{Uo(e,t)}))}function qo(e,t){const n=Wo(e,t),i=ro(n);return function(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)),o=r.map((e=>e.currentWriteId));for(let r=0;r<t.length;r++){const c=t[r],l=Ei(n,c.path);let h,u=!1;if(oe(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)u=!0,h=c.abortReason,s=s.concat(Ar(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=ko)u=!0,h="maxretry",s=s.concat(Ar(e.serverSyncTree_,c.currentWriteId,!0));else{const n=Fo(e,c.path,o);c.currentInputSnapshot=n;const i=t[r].update(n.val());if(void 0!==i){fo("transaction failed: Data returned ",i,c.path);let t=hs(i);"object"==typeof i&&null!=i&&Ue(i,".priority")||(t=t.updatePriority(n.getPriority()));const r=c.currentWriteId,a=Ro(e),l=Jr(t,n,a);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=l,c.currentWriteId=Ao(e),o.splice(o.indexOf(r),1),s=s.concat(Dr(e.serverSyncTree_,c.path,l,c.currentWriteId,c.applyLocally)),s=s.concat(Ar(e.serverSyncTree_,r,!0))}else u=!0,h="nodata",s=s.concat(Ar(e.serverSyncTree_,c.currentWriteId,!0))}bo(e.eventQueue_,n,s),s=[],u&&(t[r].status=2,a=t[r].unwatcher,setTimeout(a,Math.floor(0)),t[r].onComplete&&("nodata"===h?i.push((()=>t[r].onComplete(null,!1,t[r].currentInputSnapshot))):i.push((()=>t[r].onComplete(new Error(h),!1,null)))))}var a;Ho(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Wn(i[e]);Uo(e,e.transactionQueueTree_)}(e,jo(e,n),i),i}function Wo(e,t){let n,i=e.transactionQueueTree_;for(n=vi(t);null!==n&&void 0===eo(i);)i=Zr(i,n),n=vi(t=wi(t));return i}function jo(e,t){const n=[];return Bo(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Bo(e,t,n){const i=eo(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);io(t,(t=>{Bo(e,t,n)}))}function Ho(e,t){const n=eo(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,to(t,n.length>0?n:void 0)}io(t,(t=>{Ho(e,t)}))}function zo(e,t){const n=ro(Wo(e,t)),i=Zr(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{Vo(e,t)})),Vo(e,i),so(i,(t=>{Vo(e,t)})),n}function Vo(e,t){const n=eo(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(oe(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):(oe(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Ar(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?to(t,void 0):n.length=r+1,bo(e.eventQueue_,ro(t),s);for(let e=0;e<i.length;e++)Wn(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=function(e,t){const n=Ko(e),i=n.namespace;"firebase.com"===n.domain&&En(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||En("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Sn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Yn(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new mi(n.pathString)}},Ko=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",c=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(s=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Sn(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const p=t.slice(0,l);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}},Go="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qo{get key(){return ki(this._path)?null:bi(this._path)}get ref(){return new Jo(this._repo,this._path)}get _queryIdentifier(){const e=ys(this._queryParams),t=Ln(e);return"{}"===t?"default":t}get _queryObject(){return ys(this._queryParams)}isEqual(e){if(!((e=et(e))instanceof Qo))return!1;const t=this._repo===e._repo,n=Ni(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}}class Jo extends Qo{get parent(){const e=Ti(this._path);return null===e?null:new Jo(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new gs,!1)}}function Yo(e,t){return(e=et(e))._checkNotDeleted("ref"),void 0!==t?Xo(e._root,t):e._root}function Xo(e,t){return null===vi((e=et(e))._path)?go("child","path",t,!1):mo("child","path",t,!1),new Jo(e._repo,Ci(e._path,t))}function Zo(e,t){_o("update",t,e._path,!1);const n=new be;return function(e,t,n,i){Mo(e,"update",{path:t.toString(),value:n});let s=!0;const r=Ro(e),o={};if(xn(n,((n,i)=>{s=!1,o[n]=Qr(Ci(t,n),hs(i),e.serverSyncTree_,r)})),s)Tn("update() called with empty data.  Don't do anything."),xo(0,i,"ok",void 0);else{const s=Ao(e),r=Or(e.serverSyncTree_,t,o,s);wo(e.eventQueue_,r),e.server_.merge(t.toString(),n,((n,r)=>{const o="ok"===n;o||Sn("update at "+t+" failed: "+n);const a=Ar(e.serverSyncTree_,s,!o),c=a.length>0?qo(e,t):t;bo(e.eventQueue_,c,a),xo(0,i,n,r)})),xn(n,(n=>{const i=zo(e,Ci(t,n));qo(e,i)})),bo(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}!function(e){oe(!Er,"__referenceConstructor has already been defined"),Er=e}(Jo),function(e){oe(!Sr,"__referenceConstructor has already been defined"),Sr=e}(Jo);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ea="FIREBASE_DATABASE_EMULATOR_HOST",ta={};let na=!1;function ia(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||En("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Tn("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=$o(r,s),l=c.repoInfo;void 0!==$&&$.env&&(a=$.env[ea]),a?(o=!0,r=`http://${a}?ns=${l.namespace}`,c=$o(r,s),l=c.repoInfo):o=!c.repoInfo.secure;const h=s&&o?new Vn(Vn.OWNER):new zn(e.name,e.options,t);vo("Invalid Firebase Database URL",c),ki(c.path)||En("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(e,t,n,i){let s=ta[t.name];s||(s={},ta[t.name]=s);let r=s[e.toURLString()];r&&En("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new Eo(e,na,n,i),s[e.toURLString()]=r,r}(l,e,h,new Hn(e.name,n));return new sa(u,e)}class sa{get _repo(){return this._instanceStarted||(So(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Jo(this._repo,gi())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=ta[t];n&&n[e.key]===e||En(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Lo(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&En("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}Mi.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Mi.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){hn=zt,Wt(new tt("database",((e,{instanceIdentifier:t})=>ia(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Kt(cn,ln,e),Kt(cn,ln,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();function ra(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n}Object.create;Object.create;function oa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aa=oa,ca=new De("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),la=new dt("@firebase/auth");function ha(e,...t){la.logLevel<=ot.ERROR&&la.error(`Auth (${zt}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(e,...t){throw _a(e,...t)}function da(e,...t){return _a(e,...t)}function pa(e,t,n){const i=Object.assign(Object.assign({},aa()),{[t]:n});return new De("auth","Firebase",i).create(t,{appName:e.name})}function fa(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&ua(e,"argument-error"),pa(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _a(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return ca.create(e,...t)}function ma(e,t,...n){if(!e)throw _a(t,...n)}function ga(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ha(t),new Error(t)}function va(e,t){e||ga(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=new Map;function wa(e){va(e instanceof Function,"Expected a class definition");let t=ya.get(e);return t?(va(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ya.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ba(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ia(){return"http:"===Ta()||"https:"===Ta()}function Ta(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Ia()||ke()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ka{get(){return Ca()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,va(t>e,"Short delay should be less than long delay!"),this.isMobile=Ce()||Ee()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(e,t){va(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ga("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ga("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ga("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Ra=new ka(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Da(e,t,n,i,s={}){return Oa(e,s,(async()=>{let s={},r={};i&&("GET"===t?r=i:s={body:JSON.stringify(i)});const o=ze(Object.assign({key:e.config.apiKey},r)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Sa.fetch()(La(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function Oa(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Na),t);try{const t=new Ma(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw xa(e,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const t=s.ok?r.errorMessage:r.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw xa(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw xa(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw xa(e,"user-disabled",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw pa(e,a,o);ua(e,a)}}catch(t){if(t instanceof Pe)throw t;ua(e,"network-request-failed")}}async function Aa(e,t,n,i,s={}){const r=await Da(e,t,n,i,s);return"mfaPendingCredential"in r&&ua(e,"multi-factor-auth-required",{_serverResponse:r}),r}function La(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?Ea(e.config,s):`${e.config.apiScheme}://${s}`}class Ma{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(da(this.auth,"network-request-failed"))),Ra.get())}))}}function xa(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=da(e,t,i);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fa(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(e){return 1e3*Number(e)}function qa(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return ha("JWT malformed, contained fewer than 3 sections"),null;try{const e=de(n);return e?JSON.parse(e):(ha("Failed to decode base64 JWT payload"),null)}catch(e){return ha("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Wa(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Pe&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class ja{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{_initializeTime(){this.lastSignInTime=Fa(this.lastLoginAt),this.creationTime=Fa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(e){var t;const n=e.auth,i=await e.getIdToken(),s=await Wa(e,async function(e,t){return Da(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));ma(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=ra(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const h=e.isAnonymous,u=!(e.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!h&&u,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ba(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class za{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ma(e.idToken,"internal-error"),ma(void 0!==e.idToken,"internal-error"),ma(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=qa(e);return ma(t,"internal-error"),ma(void 0!==t.exp,"internal-error"),ma(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ma(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Oa(e,{},(async()=>{const n=ze({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,r=La(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Sa.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,r=new za;return n&&(ma("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),i&&(ma("string"==typeof i,"internal-error",{appName:e}),r.accessToken=i),s&&(ma("number"==typeof s,"internal-error",{appName:e}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new za,this.toJSON())}_performRefresh(){return ga("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(e,t){ma("string"==typeof e||void 0===e,"internal-error",{appName:t})}class $a{async getIdToken(e){const t=await Wa(this,this.stsTokenManager.getToken(this.auth,e));return ma(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=et(e),i=await n.getIdToken(t),s=qa(i);ma(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Fa(Ua(s.auth_time)),issuedAtTime:Fa(Ua(s.iat)),expirationTime:Fa(Ua(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=et(e);await Ha(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(ma(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new $a(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ma(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ha(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wa(this,async function(e,t){return Da(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,r,o,a,c,l;const h=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,p=null!==(r=t.photoURL)&&void 0!==r?r:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,_=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,g=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:y,isAnonymous:w,providerData:b,stsTokenManager:I}=t;ma(v&&I,e,"internal-error");const T=za.fromJSON(this.name,I);ma("string"==typeof v,e,"internal-error"),Va(h,e.name),Va(u,e.name),ma("boolean"==typeof y,e,"internal-error"),ma("boolean"==typeof w,e,"internal-error"),Va(d,e.name),Va(p,e.name),Va(f,e.name),Va(_,e.name),Va(m,e.name),Va(g,e.name);const C=new $a({uid:v,auth:e,email:u,emailVerified:y,displayName:h,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:T,createdAt:m,lastLoginAt:g});return b&&Array.isArray(b)&&(C.providerData=b.map((e=>Object.assign({},e)))),_&&(C._redirectEventId=_),C}static async _fromIdTokenResponse(e,t,n=!1){const i=new za;i.updateFromServerResponse(t);const s=new $a({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Ha(s),s}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=ra(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ja(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ba(s.createdAt||void 0,s.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Ka.type="NONE";const Ga=Ka;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(e,t,n){return`firebase:${e}:${t}:${n}`}class Ja{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$a._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ja(wa(Ga),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=i[0]||wa(Ga);const r=Qa(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(r);if(t){const i=$a._fromJSON(e,t);n!==s&&(o=i),s=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(r)}catch(e){}}))),new Ja(s,e,n)):new Ja(s,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Qa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qa("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(tc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Xa(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ic(t))return"Blackberry";if(sc(t))return"Webos";if(Za(t))return"Safari";if((t.includes("chrome/")||ec(t))&&!t.includes("edge/"))return"Chrome";if(nc(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Xa(e=Te()){return/firefox\//i.test(e)}function Za(e=Te()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ec(e=Te()){return/crios\//i.test(e)}function tc(e=Te()){return/iemobile/i.test(e)}function nc(e=Te()){return/android/i.test(e)}function ic(e=Te()){return/blackberry/i.test(e)}function sc(e=Te()){return/webos/i.test(e)}function rc(e=Te()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function oc(){return Se()&&10===document.documentMode}function ac(e=Te()){return rc(e)||nc(e)||sc(e)||ic(e)||/windows phone/i.test(e)||tc(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cc(e,t=[]){let n;switch(e){case"Browser":n=Ya(Te());break;case"Worker":n=`${Ya(Te())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${zt}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wa(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Ja.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ma(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ha(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?et(e):null;return t&&ma(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ma(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(wa(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new De("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wa(e)||this._popupRedirectResolver;ma(t,this,"argument-error"),this.redirectPersistenceManager=await Ja.create(this,[wa(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return ma(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ma(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dc(this),this.idTokenSubscription=new dc(this),this.beforeStateQueue=new lc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ca,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function uc(e){return et(e)}class dc{get next(){return ma(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=Ge((e=>this.observer=e))}}function pc(e,t,n){const i=uc(e);ma(i._canInitEmulator,i,"emulator-config-failed"),ma(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),r=fc(t),{host:o,port:a}=function(e){const t=fc(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const e=s[1];return{host:e,port:_c(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:_c(t)}}}(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function fc(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function _c(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class mc{toJSON(){return ga("not implemented")}_getIdTokenResponse(e){return ga("not implemented")}_linkToIdToken(e,t){return ga("not implemented")}_getReauthenticationResolver(e){return ga("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gc(e,t){return Da(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vc extends mc{static _fromEmailAndPassword(e,t){return new vc(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new vc(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Aa(e,"POST","/v1/accounts:signInWithPassword",Pa(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Aa(e,"POST","/v1/accounts:signInWithEmailLink",Pa(e,t))}(e,{email:this._email,oobCode:this._password});default:ua(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return gc(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Aa(e,"POST","/v1/accounts:signInWithEmailLink",Pa(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:ua(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yc(e,t){return Aa(e,"POST","/v1/accounts:signInWithIdp",Pa(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends mc{static _fromParams(e){const t=new wc(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ua("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=ra(t,["providerId","signInMethod"]);if(!n||!i)return null;const r=new wc(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(e){return yc(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,yc(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,yc(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ze(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ic extends mc{static _fromVerification(e,t){return new Ic({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ic({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Aa(e,"POST","/v1/accounts:signInWithPhoneNumber",Pa(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Aa(e,"POST","/v1/accounts:signInWithPhoneNumber",Pa(e,t));if(n.temporaryProof)throw xa(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Aa(e,"POST","/v1/accounts:signInWithPhoneNumber",Pa(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),bc)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return n||t||i||s?new Ic({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{static parseLink(e){const t=function(e){const t=Ve($e(e)).link,n=t?Ve($e(t)).deep_link_id:null,i=Ve($e(e)).deep_link_id;return(i?Ve($e(i)).link:null)||i||n||t||e}(e);try{return new Tc(t)}catch(e){return null}}constructor(e){var t,n,i,s,r,o;const a=Ve($e(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);ma(c&&l&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=l,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cc{static credential(e,t){return vc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Tc.parseLink(t);return ma(n,"argument-error"),vc._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Cc.PROVIDER_ID}}Cc.PROVIDER_ID="password",Cc.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Cc.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec extends kc{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sc extends Ec{static credential(e){return wc._fromParams({providerId:Sc.PROVIDER_ID,signInMethod:Sc.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sc.credentialFromTaggedObject(e)}static credentialFromError(e){return Sc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Sc.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Sc.FACEBOOK_SIGN_IN_METHOD="facebook.com",Sc.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nc extends Ec{static credential(e,t){return wc._fromParams({providerId:Nc.PROVIDER_ID,signInMethod:Nc.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Nc.credentialFromTaggedObject(e)}static credentialFromError(e){return Nc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Nc.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Nc.GOOGLE_SIGN_IN_METHOD="google.com",Nc.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rc extends Ec{static credential(e){return wc._fromParams({providerId:Rc.PROVIDER_ID,signInMethod:Rc.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rc.credentialFromTaggedObject(e)}static credentialFromError(e){return Rc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Rc.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Rc.GITHUB_SIGN_IN_METHOD="github.com",Rc.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pc extends Ec{static credential(e,t){return wc._fromParams({providerId:Pc.PROVIDER_ID,signInMethod:Pc.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pc.credentialFromTaggedObject(e)}static credentialFromError(e){return Pc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Pc.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}Pc.TWITTER_SIGN_IN_METHOD="twitter.com",Pc.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dc{static async _fromIdTokenResponse(e,t,n,i=!1){const s=await $a._fromIdTokenResponse(e,n,i),r=Oc(n);return new Dc({user:s,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Oc(n);return new Dc({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Oc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ac extends Pe{static _fromErrorAndOperation(e,t,n,i){return new Ac(e,t,n,i)}constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ac.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Lc(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ac._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mc(e,t,n=!1){const i=await Wa(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Dc._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xc(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await Wa(e,Lc(i,s,t,e),n);ma(r.idToken,i,"internal-error");const o=qa(r.idToken);ma(o,i,"internal-error");const{sub:a}=o;return ma(e.uid===a,i,"user-mismatch"),Dc._forOperation(e,s,r)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&ua(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fc(e,t,n=!1){const i="signIn",s=await Lc(e,i,t),r=await Dc._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}async function Uc(e,t){return Fc(uc(e),t)}function qc(e,t,n){return Uc(et(e),Cc.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(e){return et(e).signOut()}new WeakMap;const jc="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{_isAvailable(){try{return this.storage?(this.storage.setItem(jc,"1"),this.storage.removeItem(jc),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc extends Bc{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);oc()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Te();return Za(e)||rc(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ac(),this._shouldAllowMigration=!0}}Hc.type="LOCAL";const zc=Hc;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends Bc{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Vc.type="SESSION";const $c=Vc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kc{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Kc(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gc(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kc.receivers=[];class Qc{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const c=Gc("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yc(){return void 0!==Jc().WorkerGlobalScope&&"function"==typeof Jc().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xc="firebaseLocalStorageDb",Zc=1,el="firebaseLocalStorage",tl="fbase_key";class nl{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function il(e,t){return e.transaction([el],t?"readwrite":"readonly").objectStore(el)}function sl(){const e=indexedDB.open(Xc,Zc);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(el,{keyPath:tl})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(el)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Xc);return new nl(e).toPromise()}(),t(await sl()))}))}))}async function rl(e,t,n){const i=il(e,!0).put({[tl]:t,value:n});return new nl(i).toPromise()}function ol(e,t){const n=il(e,!0).delete(t);return new nl(n).toPromise()}class al{async _openDb(){return this.db||(this.db=await sl()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kc._getInstance(Yc()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Qc(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sl();return await rl(e,jc,"1"),await ol(e,jc),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>rl(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=il(e,!1).get(t),i=await new nl(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>ol(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=il(e,!1).getAll();return new nl(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}al.type="LOCAL";const cl=al;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(e){return new Promise(((t,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var s,r;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=da("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)}))}function hl(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
hl("rcb"),new ka(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ul="recaptcha";async function dl(e,t,n){var i;const s=await n.verify();try{let r;if(ma("string"==typeof s,e,"argument-error"),ma(n.type===ul,e,"argument-error"),r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){ma("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Da(e,"POST","/v2/accounts/mfaEnrollment:start",Pa(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{ma("signin"===t.type,e,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;ma(n,e,"missing-multi-factor-info");const o=await function(e,t){return Da(e,"POST","/v2/accounts/mfaSignIn:start",Pa(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Da(e,"POST","/v1/accounts:sendVerificationCode",Pa(e,t))}(e,{phoneNumber:r.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pl{verifyPhoneNumber(e,t){return dl(this.auth,e,et(t))}static credential(e,t){return Ic._fromVerification(e,t)}static credentialFromResult(e){const t=e;return pl.credentialFromTaggedObject(t)}static credentialFromError(e){return pl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ic._fromTokenResponse(t,n):null}constructor(e){this.providerId=pl.PROVIDER_ID,this.auth=uc(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fl(e,t){return t?wa(t):(ma(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pl.PROVIDER_ID="phone",pl.PHONE_SIGN_IN_METHOD="phone";class _l extends mc{_getIdTokenResponse(e){return yc(e,this._buildIdpRequest())}_linkToIdToken(e,t){return yc(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return yc(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function ml(e){return Fc(e.auth,new _l(e),e.bypassAuthState)}function gl(e){const{auth:t,user:n}=e;return ma(n,t,"internal-error"),xc(n,new _l(e),e.bypassAuthState)}async function vl(e){const{auth:t,user:n}=e;return ma(n,t,"internal-error"),Mc(n,new _l(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ml;case"linkViaPopup":case"linkViaRedirect":return vl;case"reauthViaPopup":case"reauthViaRedirect":return gl;default:ua(this.auth,"internal-error")}}resolve(e){va(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){va(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=new ka(2e3,1e4);async function bl(e,t,n){const i=uc(e);fa(e,t,kc);const s=fl(i,n);return new Il(i,"signInViaPopup",t,s).executeNotNull()}class Il extends yl{async executeNotNull(){const e=await this.execute();return ma(e,this.auth,"internal-error"),e}async onExecution(){va(1===this.filter.length,"Popup operations only handle one event");const e=Gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(da(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(da(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Il.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(da(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,wl.get())};e()}constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Il.currentPopupAction&&Il.currentPopupAction.cancel(),Il.currentPopupAction=this}}Il.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tl="pendingRedirect",Cl=new Map;class kl extends yl{async execute(){let e=Cl.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Nl(t),i=Sl(e);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Cl.set(this.auth._key(),e)}return this.bypassAuthState||Cl.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function El(e,t){Cl.set(e._key(),t)}function Sl(e){return wa(e._redirectPersistence)}function Nl(e){return Qa(Tl,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rl(e,t,n=!1){const i=uc(e),s=fl(i,t),r=new kl(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class Pl{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ol(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ol(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(da(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dl(e))}saveEventToCache(e){this.cachedEventUids.add(Dl(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Dl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ol({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Al=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ll=/^https?/;async function Ml(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Da(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(xl(e))return}catch(e){}ua(e,"unauthorized-domain")}function xl(e){const t=ba(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!Ll.test(n))return!1;if(Al.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=new ka(3e4,6e4);function Ul(){const e=Jc().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let ql=null;function Wl(e){return ql=ql||function(e){return new Promise(((t,n)=>{var i,s,r;function o(){Ul(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ul(),n(da(e,"network-request-failed"))},timeout:Fl.get()})}if(null===(s=null===(i=Jc().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=Jc().gapi)||void 0===r?void 0:r.load)){const t=hl("iframefcb");return Jc()[t]=()=>{gapi.load?o():n(da(e,"network-request-failed"))},ll(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw ql=null,e}))}(e),ql}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new ka(5e3,15e3),Bl="__/auth/iframe",Hl="emulator/auth/iframe",zl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $l(e){const t=e.config;ma(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ea(t,Hl):`https://${e.config.authDomain}/${Bl}`,i={apiKey:t.apiKey,appName:e.name,v:zt},s=Vl.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${ze(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gl=500,Ql=600,Jl="_blank",Yl="http://localhost";class Xl{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Zl(e,t,n,i=Gl,s=Ql){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Kl),{width:i.toString(),height:s.toString(),top:r,left:o}),l=Te().toLowerCase();n&&(a=ec(l)?Jl:n),Xa(l)&&(t=t||Yl,c.scrollbars="yes");const h=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Te()){var t;return rc(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Xl(null);const u=window.open(t||"",a,h);ma(u,e,"popup-blocked");try{u.focus()}catch(e){}return new Xl(u)}const eh="__/auth/handler",th="emulator/auth/handler";function nh(e,t,n,i,s,r){ma(e.config.authDomain,e,"auth-domain-config-required"),ma(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:zt,eventId:s};if(t instanceof kc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",We(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(r||{}))o[e]=t}if(t instanceof Ec){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Ea(e,th):`https://${e.authDomain}/${eh}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${ze(a).slice(1)}`}const ih="webStorageSupport";const sh=class{async _openPopup(e,t,n,i){var s;va(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return Zl(e,nh(e,t,n,ba(),i),Gc())}async _openRedirect(e,t,n,i){var s;return await this._originValidation(e),s=nh(e,t,n,ba(),i),Jc().location.href=s,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(va(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Wl(e),n=Jc().gapi;return ma(n,e,"internal-error"),t.open({where:document.body,url:$l(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zl,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const s=da(e,"network-request-failed"),r=Jc().setTimeout((()=>{i(s)}),jl.get());function o(){Jc().clearTimeout(r),n(t)}t.ping(o).then(o,(()=>{i(s)}))}))))}(e),n=new Pl(e);return t.register("authEvent",(t=>{ma(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ih,{type:ih},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[ih];void 0!==s&&t(!!s),ua(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ml(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ac()||Za()||rc()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$c,this._completeRedirectFn=Rl,this._overrideRedirectResult=El}};var rh="@firebase/auth",oh="0.21.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ah{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ma(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ch=we("authIdTokenMaxAge")||300;let lh=null;const hh=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>ch)return;const s=null==n?void 0:n.token;lh!==s&&(lh=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};var uh;uh="Browser",Wt(new tt("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:r}=n.options;return((e,n)=>{ma(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),ma(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const i={apiKey:s,authDomain:r,clientPlatform:uh,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cc(uh)},o=new hc(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(wa);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Wt(new tt("auth-internal",(e=>(e=>new ah(e))(uc(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(rh,oh,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(uh)),Kt(rh,oh,"esm2017");const dh=Vt({apiKey:"AIzaSyCKGpz6xUMxDT9qCArLFbTqGAr482N7OPM",authDomain:"filmoteka-bd182.firebaseapp.com",databaseURL:"https://filmoteka-bd182-default-rtdb.firebaseio.com",projectId:"filmoteka-bd182",storageBucket:"filmoteka-bd182.appspot.com",messagingSenderId:"406390548914",appId:"1:406390548914:web:612eec5ff8765f1f715cab"}),ph=function(e=$t(),t){const n=jt(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=ve("database");e&&function(e,t,n,i={}){e=et(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&En("Cannot call useEmulator() after instance has already been initialized.");const s=e._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&En('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Vn(Vn.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:Ie(i.mockUserToken,e.app.options.projectId);r=new Vn(t)}!function(e,t,n,i){e.repoInfo_=new Yn(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(s,t,n,r)}(n,...e)}return n}(dh),fh=function(e=$t()){const t=jt(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=jt(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Be(n.getOptions(),null!=t?t:{}))return e;ua(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:sh,persistence:[cl,zc,$c]}),i=we("authTokenSyncURL");if(i){const e=hh(i);!function(e,t,n){et(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){et(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}const s=ge("auth");return s&&pc(n,`http://${s}`),n}();login.addEventListener("click",(e=>{const t=document.getElementById("email").value,n=document.getElementById("password").value;qc(fh,t,n).then((e=>{const t=e.user,n=new Date;Zo(Yo(ph,"users/"+t.uid),{last_login:n}),alert("User loged in!")})).catch((e=>{e.code;const t=e.message;alert(t)}))}));fh.currentUser;var _h,mh,gh;_h=e=>{e&&e.uid},et(fh).onAuthStateChanged(_h,mh,gh),logout.addEventListener("click",(e=>{Wc(fh).then((()=>{alert("user loged out")})).catch((e=>{e.code;const t=e.message;alert(t)}))}));const vh=new Nc(dh);document.querySelector(".google").addEventListener("click",(e=>{bl(fh,vh).then((e=>{Nc.credentialFromResult(e).accessToken;const t=e.user;alert(t.displayName)})).catch((e=>{e.code;const t=e.message;e.email,Nc.credentialFromError(e);alert(t)}))})),s("i8szs"),s("gffsD"),s("2ezs4"),s("37v9V");_=s("2ezs4");var yh=s("gffsD"),wh=s("i8szs");const bh=document.querySelector(".backdrop"),Ih="js-watched-modal",Th="js-queue-modal",Ch="reviewed",kh="in your turn";function Eh(e){const t={btn_watched:document.querySelector(".btn_watched"),btn_queue:document.querySelector(".btn_queue")};yh.toWatched.getWatchedOne(e)&&yh.toWatched.getWatchedOne(e).length>0&&Sh(t.btn_watched),wh.toQueue.getQueueOne(e)&&wh.toQueue.getQueueOne(e).length>0&&Nh(t.btn_queue)}function Sh(e){e.classList.add(Ih),e.textContent=Ch}function Nh(e){e.classList.add(Th),e.textContent=kh}function Rh(e){e.classList.remove(Ih),e.textContent="add to watched"}function Ph(e){e.classList.remove(Th),e.textContent="add to queue"}bh.addEventListener("click",(function(e){const t=+e.target.dataset.id,n={btn_watched:document.querySelector(".btn_watched"),btn_queue:document.querySelector(".btn_queue")};if(e.target.classList.contains("btn_watched"))if(!yh.toWatched.getWatchedOne(t)||yh.toWatched.getWatchedOne(t).length<1){yh.toWatched.setWatchedOne(...(0,_.getLocalOne)(t)),Sh(n.btn_watched);try{void 0!==wh.toQueue.getQueueAll()&&wh.toQueue.getQueueOne(t).length>0&&(wh.toQueue.removeQueueOneEl(t),Ph(n.btn_queue))}finally{return}}else yh.toWatched.removeWatchedOneEl(t),Rh(n.btn_watched);if(e.target.classList.contains("btn_queue"))if(!wh.toQueue.getQueueOne(t)||wh.toQueue.getQueueOne(t).length<1){wh.toQueue.setQueueOne(...(0,_.getLocalOne)(t)),Nh(n.btn_queue);try{void 0!==yh.toWatched.getWatchedAll&&yh.toWatched.getWatchedOne(t).length>0&&(yh.toWatched.removeWatchedOneEl(t),Rh(n.btn_watched))}finally{return}}else wh.toQueue.removeQueueOneEl(t),Ph(n.btn_queue)})),s("lpPzL");var Dh=s("lpPzL"),Oh=(_=s("2ezs4"),s("9x1Bf"));function Ah(){Dh.refs.backdrop.classList.add("is-hidden"),xh()}function Lh(e){e.target.classList.contains("modal")&&Dh.refs.backdrop.classList.add("is-hidden"),xh()}function Mh(e){"Escape"===e.key&&(Dh.refs.backdrop.classList.add("is-hidden"),xh())}function xh(){Dh.refs.backdrop.classList.contains("is-hidden")&&(Dh.refs.modalClose.removeEventListener("click",Ah),Dh.refs.backdrop.removeEventListener("click",Lh),document.removeEventListener("keydown",Mh),Dh.refs.body.classList.remove("disable-scroll"))}document.querySelector(".container").addEventListener("click",(function(e){if(e.preventDefault(),!e.target.classList.contains("card__img"))return;const t=+e.target.dataset.id;Dh.refs.body.classList.add("disable-scroll"),Dh.refs.modalClose.addEventListener("click",Ah),Dh.refs.backdrop.addEventListener("click",Lh),document.addEventListener("keydown",Mh),Dh.refs.backdrop.classList.remove("is-hidden"),Dh.refs.modalMovie.innerHTML=(0,Oh.default)((0,_.getLocalOne)(t)),Eh(t)})),s("kyRuT"),window.addEventListener("keydown",(function e(t){"27"===t.code&&(modal.close(),window.removeEventListener("keydown",e))})),e(s("amrNH")).registerHelper("if_eq",(function(e,t,n){return e==t?n.fn(this):n.inverse(this)}));
//# sourceMappingURL=index.c3561c8a.js.map
