/*! For license information please see main.5c0ace05d5a94b34cea5.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,r(i.key),i)}}function r(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(r)?r:String(r)}var n=function(){function t(e,n){var i,o,a,c=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,a=function(){if(c.$filmInput.value){var t={name:c.$filmInput.value,viewed:!1};c.addFilmCb(t),c.$filmInput.value=""}},(o=r(o="addFilm"))in i?Object.defineProperty(i,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[o]=a,this.$formContainer=e,this.$filmInput=this.$formContainer.querySelector(".js-film-input"),this.$addBtn=this.$formContainer.querySelector(".js-add-film-btn"),this.addFilmCb=n,this.addListeners()}var n,i;return n=t,(i=[{key:"addListeners",value:function(){var t=this;this.$addBtn.addEventListener("click",this.addFilm),this.$filmInput.addEventListener("keydown",(function(e){13===e.keyCode&&(t.addFilm(),t.$filmInput.blur())}))}}])&&e(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,a(n.key),n)}}function a(t){var e=function(t,e){if("object"!=i(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==i(e)?e:String(e)}var c=function(){function t(e,r,n){var i,o,c,u=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,c=function(t){t.target!==u.$deleteBtn?(t.preventDefault(),u.markFilm(),u.correctFilmCb({id:t.target.closest(".list__item").dataset.id,viewed:u.isFilmChecked})):u.deleteFilm()},(o=a(o="filmElementClickHandler"))in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,this.$filmElement=this.createFilmElement(e),this.$filmCheckbox=this.$filmElement.querySelector(".js-film-checkbox"),this.$deleteBtn=this.$filmElement.querySelector(".js-delete-film-btn"),this.$filmTitle=this.$filmElement.querySelector(".js-film-title"),this.deleteFilmCb=r,this.correctFilmCb=n,this.filmId=e.id,this.isFilmChecked=e.viewed,this.$filmElement.addEventListener("click",this.filmElementClickHandler)}var e,r;return e=t,(r=[{key:"markFilm",value:function(){this.isFilmChecked?(this.$filmElement.classList.remove("list__item-viewed"),this.$filmTitle.title="Пометить как просмотренный"):(this.$filmElement.classList.add("list__item-viewed"),this.$filmTitle.title="Посмотреть заново"),this.isFilmChecked=!this.isFilmChecked}},{key:"deleteFilm",value:function(){this.deleteFilmCb(this.filmId)}},{key:"createFilmElement",value:function(t){var e=t.id,r=t.name,n=t.viewed,i='\n          <div class="list__item '.concat(n?"list__item-viewed":"",'" data-id="').concat(e,'">\n              <div class="item__film-title">\n                  <input class="js-film-checkbox item__checkbox" type="checkbox" id="film-').concat(e,'" />\n                  <label class="js-film-title item__title" for="film-').concat(e,'" title="Пометить как просмотренный">').concat(r,'</label>\n              </div>\n              <button class="js-delete-film-btn item__delete-btn" title="Удалить фильм">\n                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">\n                      <path\n                          opacity="0.3"\n                          d="M22.3575 3.74463L14.6021 11.5L22.3575 19.2554C22.7689 19.6667 23 20.2247 23 20.8064C23 21.3882 22.7689 21.9462 22.3575 22.3575C21.9462 22.7689 21.3882 23 20.8064 23C20.2247 23 19.6667 22.7689 19.2554 22.3575L11.5 14.6022L3.74463 22.3575C3.33326 22.7689 2.77532 23 2.19355 23C1.61179 23 1.05385 22.7689 0.642476 22.3575C0.231106 21.9462 7.3961e-07 21.3882 7.3961e-07 20.8064C7.3961e-07 20.2247 0.231106 19.6667 0.642476 19.2554L8.39785 11.5L0.642476 3.74463C0.231106 3.33326 0 2.77532 0 2.19355C0 1.61179 0.231106 1.05385 0.642476 0.642477C1.05385 0.231106 1.61178 7.3961e-07 2.19355 7.3961e-07C2.77532 7.3961e-07 3.33326 0.231106 3.74463 0.642477L11.5 8.39785L19.2554 0.642477C19.6667 0.231106 20.2247 0 20.8064 0C21.3882 0 21.9462 0.231106 22.3575 0.642477C22.7689 1.05385 23 1.61178 23 2.19355C23 2.77532 22.7689 3.33326 22.3575 3.74463Z"\n                          fill="#F3F6F9"\n                      />\n                  </svg>\n              </button>\n          </div>\n          ');return(new DOMParser).parseFromString(i,"text/html").body.firstElementChild}},{key:"element",get:function(){return this.$filmElement}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,s(n.key),n)}}function s(t){var e=function(t,e){if("object"!=u(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==u(e)?e:String(e)}var f=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$filmListContainer=e,this.deleteFilmCb=r,this.correctFilmCb=n}var e,r;return e=t,(r=[{key:"renderList",value:function(t){var e=this;this.$filmListContainer.innerHTML="",t.forEach((function(t){e.$filmListContainer.append(new c(t,e.deleteFilmCb,e.correctFilmCb).element)})),t.length||(this.$filmListContainer.innerHTML='<h2 class="empty-list-title">Здесь пока пусто ))</h2>')}}])&&l(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function p(){p=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),c=new T(n||[]);return i(a,"_invoke",{value:C(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var y="suspendedStart",m="suspendedYield",v="executing",d="completed",b={};function w(){}function g(){}function L(){}var x={};l(x,a,(function(){return this}));var E=Object.getPrototypeOf,S=E&&E(E($([])));S&&S!==r&&n.call(S,a)&&(x=S);var k=L.prototype=w.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function F(t,e){function r(i,o,a,c){var u=f(t[i],t,o);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==h(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,i){r(t,n,e,i)}))}return o=o?o.then(i,i):i()}})}function C(e,r,n){var i=y;return function(o,a){if(i===v)throw new Error("Generator is already running");if(i===d){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===b)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===y)throw i=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=v;var l=f(e,r,n);if("normal"===l.type){if(i=n.done?d:m,l.arg===b)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=d,n.method="throw",n.arg=l.arg)}}}function O(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var o=f(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,b;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function $(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(h(e)+" is not iterable")}return g.prototype=L,i(k,"constructor",{value:L,configurable:!0}),i(L,"constructor",{value:g,configurable:!0}),g.displayName=l(L,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,l(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},j(F.prototype),l(F.prototype,c,(function(){return this})),e.AsyncIterator=F,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new F(s(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(k),l(k,u,"Generator"),l(k,a,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=$,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return c.type="throw",c.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;P(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),b}},e}function y(t,e,r,n,i,o,a){try{var c=t[o](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,i)}function m(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){y(o,n,i,a,c,"next",t)}function c(t){y(o,n,i,a,c,"throw",t)}a(void 0)}))}}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,d(n.key),n)}}function d(t){var e=function(t,e){if("object"!=h(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==h(e)?e:String(e)}var b=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.url="https://movie-list-app-3a1e8-default-rtdb.firebaseio.com/films.json"}var e,r,n,i,o,a;return e=t,r=[{key:"getFilms",value:(a=m(p().mark((function t(){var e,r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(this.url);case 3:if(!(e=t.sent).ok){t.next=11;break}return t.next=7,e.json();case 7:return r=t.sent,t.abrupt("return",r);case 11:throw new Error("Что-то пошло не так: ".concat(e.statusText));case 12:t.next=17;break;case 14:throw t.prev=14,t.t0=t.catch(0),new Error("Что-то пошло не так: ".concat(t.t0));case 17:case"end":return t.stop()}}),t,this,[[0,14]])}))),function(){return a.apply(this,arguments)})},{key:"addNewFilm",value:(o=m(p().mark((function t(e){var r,n,i;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=new Request(this.url,{method:"post",body:JSON.stringify(e)}),t.next=4,fetch(r);case 4:if(!(n=t.sent).ok){t.next=9;break}return t.abrupt("return",!0);case 9:return t.next=11,n.text();case 11:throw i=t.sent,new Error("Что-то пошло не так: ".concat(i));case 13:t.next=18;break;case 15:throw t.prev=15,t.t0=t.catch(0),new Error("Что-то пошло не так: ".concat(t.t0));case 18:case"end":return t.stop()}}),t,this,[[0,15]])}))),function(t){return o.apply(this,arguments)})},{key:"deleteFilm",value:(i=m(p().mark((function t(e){var r,n;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="".concat(this.url,"/").concat(e),n=new Request(r,{method:"delete"}),t.next=5,fetch(n);case 5:t.sent,t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(0),new Error("Что-то пошло не так: ".concat(t.t0));case 11:case"end":return t.stop()}}),t,this,[[0,8]])}))),function(t){return i.apply(this,arguments)})},{key:"correctFilmData",value:(n=m(p().mark((function t(e,r){var n;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=new Request("".concat(this.url,"/").concat(e),{method:"patch",body:JSON.stringify({viewed:r}),headers:{"Content-Type":"application.json"}}),t.next=4,fetch(n);case 4:t.next=9;break;case 6:throw t.prev=6,t.t0=t.catch(0),new Error("Что-то пошло не так: ".concat(t.t0));case 9:case"end":return t.stop()}}),t,this,[[0,6]])}))),function(t,e){return n.apply(this,arguments)})}],r&&v(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,L(n.key),n)}}function L(t){var e=function(t,e){if("object"!=w(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==w(e)?e:String(e)}var x=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.filmList=[]}var e,r;return e=t,(r=[{key:"mapFilmList",value:function(t){this.filmList=Object.keys(t).map((function(e){var r=t[e];return{id:e,name:r.name,viewed:r.viewed}}))}},{key:"films",get:function(){return this.filmList}}])&&g(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function S(){S=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),c=new T(n||[]);return i(a,"_invoke",{value:C(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="suspendedYield",y="executing",m="completed",v={};function d(){}function b(){}function w(){}var g={};l(g,a,(function(){return this}));var L=Object.getPrototypeOf,x=L&&L(L($([])));x&&x!==r&&n.call(x,a)&&(g=x);var k=w.prototype=d.prototype=Object.create(g);function j(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function F(t,e){function r(i,o,a,c){var u=f(t[i],t,o);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==E(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,i){r(t,n,e,i)}))}return o=o?o.then(i,i):i()}})}function C(e,r,n){var i=h;return function(o,a){if(i===y)throw new Error("Generator is already running");if(i===m){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=y;var l=f(e,r,n);if("normal"===l.type){if(i=n.done?m:p,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=m,n.method="throw",n.arg=l.arg)}}}function O(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=f(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function $(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(E(e)+" is not iterable")}return b.prototype=w,i(k,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:b,configurable:!0}),b.displayName=l(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},j(F.prototype),l(F.prototype,c,(function(){return this})),e.AsyncIterator=F,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new F(s(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(k),l(k,u,"Generator"),l(k,a,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=$,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return c.type="throw",c.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;P(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function k(t,e,r,n,i,o,a){try{var c=t[o](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,i)}function j(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){k(o,n,i,a,c,"next",t)}function c(t){k(o,n,i,a,c,"throw",t)}a(void 0)}))}}function F(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,O(n.key),n)}}function C(t,e,r){return(e=O(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function O(t){var e=function(t,e){if("object"!=E(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==E(e)?e:String(e)}var _=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),C(this,"deleteFilm",function(){var t=j(S().mark((function t(r){return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.api.deleteFilm(r);case 2:e.renderFilmList();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),C(this,"addFilm",function(){var t=j(S().mark((function t(r){return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.api.addNewFilm(r);case 2:e.renderFilmList();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),C(this,"correctFilmStatus",(function(t){var r=t.id,n=t.viewed;console.log("Correct film: ",r,", Viewed: ",n),e.api.correctFilmData(r,n)})),this.init()}var e,r,i;return e=t,r=[{key:"init",value:function(){this.form=new n(document.querySelector(".js-film-form"),this.addFilm),this.list=new f(document.querySelector(".js-film-list"),this.deleteFilm,this.correctFilmStatus),this.api=new b,this.model=new x,this.renderFilmList()}},{key:"renderFilmList",value:(i=j(S().mark((function t(){var e;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.api.getFilms();case 2:e=t.sent,this.model.mapFilmList(e),this.list.renderList(this.model.films);case 5:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})}],r&&F(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();document.addEventListener("DOMContentLoaded",(function(){new _}))})();