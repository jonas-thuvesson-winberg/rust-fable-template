!function(n){function t(t){for(var e,u,f=t[0],c=t[1],l=t[2],s=0,h=[];s<f.length;s++)u=f[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&h.push(o[u][0]),o[u]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(n[e]=c[e]);for(a&&a(t);h.length;)h.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var n,t=0;t<i.length;t++){for(var r=i[t],e=!0,f=1;f<r.length;f++){var c=r[f];0!==o[c]&&(e=!1)}e&&(i.splice(t--,1),n=u(u.s=r[0]))}return n}var e={},o={0:0},i=[];function u(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=n,u.c=e,u.d=function(n,t,r){u.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},u.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,t){if(1&t&&(n=u(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)u.d(r,e,function(t){return n[t]}.bind(null,e));return r},u.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(t,"a",t),t},u.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},u.p="";var f=window.webpackJsonp=window.webpackJsonp||[],c=f.push.bind(f);f.push=t,f=f.slice();for(var l=0;l<f.length;l++)t(f[l]);var a=c;i.push([3,1]),r()}({3:function(n,t,r){n.exports=r(8)},8:function(n,t,r){"use strict";r.r(t);var e=r(2),o=r(0),i=r.n(o);function u(n){return function(n){if(Array.isArray(n))return c(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||f(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(n,t){if(n){if("string"==typeof n)return c(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(n,t):void 0}}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function l(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function a(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function s(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function h(n,t,r){return t&&s(n.prototype,t),r&&s(n,r),n}function v(n){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function y(n){return Array.isArray(n)||ArrayBuffer.isView(n)}function d(n){return"function"==typeof n.GetHashCode}function p(n){return null!=n&&"function"==typeof n.Dispose}function g(n){p(n)&&n.Dispose()}function m(n,t){var r,e;return(null===(r=Object.getPrototypeOf(n))||void 0===r?void 0:r.constructor)===(null===(e=Object.getPrototypeOf(t))||void 0===e?void 0:e.constructor)}var w=function(){function n(t){a(this,n),this.iter=t}return h(n,[{key:"System.Collections.Generic.IEnumerator`1.get_Current",value:function(){return this.current}},{key:"System.Collections.IEnumerator.get_Current",value:function(){return this.current}},{key:"System.Collections.IEnumerator.MoveNext",value:function(){var n=this.iter.next();return this.current=n.value,!n.done}},{key:"System.Collections.IEnumerator.Reset",value:function(){throw new Error("JS iterators cannot be reset")}},{key:"Dispose",value:function(){}}]),n}();function b(n){return"function"==typeof n.GetEnumerator?n.GetEnumerator():new w(n[Symbol.iterator]())}function E(n){var t;return l(t={},Symbol.iterator,(function(){return this})),l(t,"next",(function(){var t=n["System.Collections.IEnumerator.MoveNext"]();return{done:!t,value:t?n["System.Collections.IEnumerator.get_Current"]():void 0}})),t}function S(n){var t=n;return"number"==typeof t.offset?t.offset:1===n.kind?0:-6e4*n.getTimezoneOffset()}var O=function(){function n(){a(this,n)}return h(n,null,[{key:"id",value:function(t){return n.idMap.has(t)||n.idMap.set(t,++n.count),n.idMap.get(t)}}]),n}();function j(n){for(var t=0,r=5381,e=n.length;t<e;)r=33*r^n.charCodeAt(t++);return r}function C(n){return 2654435761*n|0}function x(n){return 0===n.length?0:n.reduce((function(n,t){return(n<<5)+n^t}))}function I(n){var t;if(null==n)return 0;switch(v(n)){case"boolean":return n?1:0;case"number":return C(n);case"string":return j(n);default:return d(n)?n.GetHashCode():y(n)?function(n){for(var t=n.length,r=new Array(t),e=0;e<t;e++)r[e]=I(n[e]);return x(r)}(n):n instanceof Date?function(n){return n.getTime()}(n):(null===(t=Object.getPrototypeOf(n))||void 0===t?void 0:t.constructor)===Object?x(Object.values(n).map((function(n){return I(n)}))):C(O.id(n))}}function k(n,t,r){if(null==n)return null==t;if(null==t)return!1;if(n.length!==t.length)return!1;for(var e=0;e<n.length;e++)if(!r(n[e],t[e]))return!1;return!0}function A(n,t){return k(n,t,P)}function P(n,t){var r;return n===t||(null==n?null==t:null!=t&&("object"===v(n)&&(function(n){return"function"==typeof n.Equals}(n)?n.Equals(t):y(n)?y(t)&&A(n,t):n instanceof Date?t instanceof Date&&0===M(n,t):(null===(r=Object.getPrototypeOf(n))||void 0===r?void 0:r.constructor)===Object&&function(n,t){var r=Object.keys(n),e=Object.keys(t);if(r.length!==e.length)return!1;r.sort(),e.sort();for(var o=0;o<r.length;o++)if(r[o]!==e[o]||!P(n[r[o]],t[e[o]]))return!1;return!0}(n,t))))}function M(n,t){var r,e;return"offset"in n&&"offset"in t?(r=n.getTime(),e=t.getTime()):(r=n.getTime()+S(n),e=t.getTime()+S(t)),r===e?0:r<e?-1:1}function _(n,t){return function(n,t,r){if(null==n)return null==t?0:1;if(null==t)return-1;if(n.length!==t.length)return n.length<t.length?-1:1;for(var e=0,o=0;e<n.length;e++)if(0!==(o=r(n[e],t[e])))return o;return 0}(n,t,T)}function T(n,t){var r;return n===t?0:null==n?null==t?0:-1:null==t?1:"object"!==v(n)?n<t?-1:1:function(n){return"function"==typeof n.CompareTo}(n)?n.CompareTo(t):y(n)?y(t)?_(n,t):-1:n instanceof Date?t instanceof Date?M(n,t):-1:(null===(r=Object.getPrototypeOf(n))||void 0===r?void 0:r.constructor)===Object?function(n,t){var r=Object.keys(n),e=Object.keys(t);if(r.length!==e.length)return r.length<e.length?-1:1;r.sort(),e.sort();for(var o=0,i=0;o<r.length;o++){var u=r[o];if(u!==e[o])return u<e[o]?-1:1;if(0!==(i=T(n[u],t[u])))return i}return 0}(n,t):-1}O.idMap=new WeakMap,O.count=0;var D=Symbol("curried");function N(n,t){if(null==t||t.length>1)return t;var r=function(){for(var r=t,e=0;e<n;e++)r=r(e<0||arguments.length<=e?void 0:arguments[e]);return r};return r[D]=t,r}function R(n,t,r){return function(e){return 1===t?r.apply(void 0,u(n.concat([e]))):R(n.concat([e]),t-1,r)}}function q(n,t){return null==t||1===t.length?t:D in t?t[D]:R([],n,t)}function L(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function G(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function H(n,t,r){return t&&G(n.prototype,t),r&&G(n,r),n}function U(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var r=[],e=!0,o=!1,i=void 0;try{for(var u,f=n[Symbol.iterator]();!(e=(u=f.next()).done)&&(r.push(u.value),!t||r.length!==t);e=!0);}catch(n){o=!0,i=n}finally{try{e||null==f.return||f.return()}finally{if(o)throw i}}return r}(n,t)||$(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(n){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function $(n,t){if(n){if("string"==typeof n)return B(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(n,t):void 0}}function B(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function F(n){var t,r=0,e="[",o=function(n,t){var r;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(r=$(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var e=0,o=function(){};return{s:o,n:function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,f=!1;return{s:function(){r=n[Symbol.iterator]()},n:function(){var n=r.next();return u=n.done,n},e:function(n){f=!0,i=n},f:function(){try{u||null==r.return||r.return()}finally{if(f)throw i}}}}(n);try{for(o.s();!(t=o.n()).done;){var i=t.value;if(0===r)e+=z(i);else{if(100===r){e+="; ...";break}e+="; "+z(i)}r++}}catch(n){o.e(n)}finally{o.f()}return e+"]"}function z(n){var t,r,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(null!=n&&"object"===J(n)){if("function"==typeof n.toString)return n.toString();if(Symbol.iterator in n)return F(n);var o=null===(t=Object.getPrototypeOf(n))||void 0===t?void 0:t.constructor;return o===Object&&e<10?"{ "+Object.entries(n).map((function(n){var t=U(n,2);return t[0]+" = "+z(t[1],e+1)})).join("\n  ")+" }":null!==(r=null==o?void 0:o.name)&&void 0!==r?r:""}return String(n)}function W(n){for(var t={},r=Object.keys(n),e=0;e<r.length;e++)t[r[e]]=n[r[e]];return t}function V(n){return"{ "+Object.entries(n).map((function(n){var t=U(n,2);return t[0]+" = "+z(t[1])})).join("\n  ")+" }"}function K(n){return x(Object.values(n).map((function(n){return I(n)})))}function Q(n,t){if(n===t)return!0;if(m(n,t)){for(var r=Object.keys(n),e=0;e<r.length;e++)if(!P(n[r[e]],t[r[e]]))return!1;return!0}return!1}function X(n,t){if(n===t)return 0;if(m(n,t)){for(var r=Object.keys(n),e=0;e<r.length;e++){var o=T(n[r[e]],t[r[e]]);if(0!==o)return o}return 0}return-1}var Y=function(){function n(){L(this,n)}return H(n,[{key:"toJSON",value:function(){return W(this)}},{key:"toString",value:function(){return V(this)}},{key:"GetHashCode",value:function(){return K(this)}},{key:"Equals",value:function(n){return Q(this,n)}},{key:"CompareTo",value:function(n){return X(this,n)}}]),n}();var Z=Symbol("numeric");var nn,tn,rn,en=(rn=function(){var n=this;return{multiply:function(t){return n.mul(t)},toPrecision:function(t){return n.toPrecision(t)},toExponential:function(t){return n.toExponential(t)},toFixed:function(t){return n.toFixed(t)},toHex:function(){return(Number(n)>>>0).toString(16)}}},(tn=Z)in(nn={GetHashCode:function(){return x([this.s,this.e].concat(this.c))},Equals:function(n){return!this.cmp(n)},CompareTo:function(n){return this.cmp(n)}})?Object.defineProperty(nn,tn,{value:rn,enumerable:!0,configurable:!0,writable:!0}):nn[tn]=rn,nn),on="[big.js] ",un=on+"Invalid ",fn=un+"decimal places",cn=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function ln(n,t){var r,e,o;if(!cn.test(t))throw Error(un+"number");for(n.s="-"==t.charAt(0)?(t=t.slice(1),-1):1,(r=t.indexOf("."))>-1&&(t=t.replace(".","")),(e=t.search(/e/i))>0?(r<0&&(r=e),r+=+t.slice(e+1),t=t.substring(0,e)):r<0&&(r=t.length),o=t.length,e=0;e<r&&e<o&&"0"==t.charAt(e);)++e;if(e==o)n.c=[n.e=0];else for(n.e=r-e-1,n.c=[],r=0;e<o;)n.c[r++]=+t.charAt(e++);return n=an(n,hn.DP+1,hn.RM)}function an(n,t,r,e){var o=n.c;if(void 0===r&&(r=hn.RM),0!==r&&1!==r&&2!==r&&3!==r)throw Error("[big.js] Invalid rounding mode");if(t<1)e=3===r&&(e||!!o[0])||0===t&&(1===r&&o[0]>=5||2===r&&(o[0]>5||5===o[0]&&(e||void 0!==o[1]))),o.length=1,e?(n.e=n.e-t+1,o[0]=1):o[0]=n.e=0;else if(t<o.length){var i=o.findIndex((function(n,r){return r>=t&&n>0}))<0;if(e=1===r&&o[t]>=5||2===r&&(o[t]>5||5===o[t]&&(e||void 0!==o[t+1]||1&o[t-1]))||3===r&&(e||!i),o.length=t--,e)for(;++o[t]>9;)o[t]=0,t--||(++n.e,o.unshift(1));for(t=o.length;!o[--t];)o.pop()}return n}function sn(n,t,r){var e=n.e,o=n.c.join(""),i=o.length;if(t)o=o.charAt(0)+(i>1?"."+o.slice(1):"")+(e<0?"e":"e+")+e;else if(e<0){for(;++e;)o="0"+o;o="0."+o}else if(e>0)if(++e>i)for(e-=i;e--;)o+="0";else e<i&&(o=o.slice(0,e)+"."+o.slice(e));else i>1&&(o=o.charAt(0)+"."+o.slice(1));return n.s<0&&r?"-"+o:o}en.abs=function(){var n=new this.constructor(this);return n.s=1,n},en.cmp=function(n){var t,r=this.constructor,e=new r(this),o=(n=new r(n),e.c),i=n.c,u=e.s,f=n.s,c=e.e,l=n.e;if(!o[0]||!i[0])return o[0]?u:i[0]?-f:0;if(u!=f)return u;if(t=u<0,c!=l)return c>l^t?1:-1;for(f=Math.max(o.length,i.length),u=0;u<f;u++)if((c=u<o.length?o[u]:0)!=(l=u<i.length?i[u]:0))return c>l^t?1:-1;return 0},en.div=function(n){var t=this.constructor,r=new t(this),e=(n=new t(n),r.c),o=n.c,i=r.s==n.s?1:-1,u=t.DP;if(u!==~~u||u<0||u>1e6)throw Error(fn);if(!o[0])throw Error("[big.js] Division by zero");if(!e[0])return n.s=i,n.c=[n.e=0],n;var f,c,l,a,s,h=o.slice(),v=f=o.length,y=e.length,d=e.slice(0,f),p=d.length,g=n,m=g.c=[],w=0,b=u+(g.e=r.e-n.e)+1;for(g.s=i,i=b<0?0:b,h.unshift(0);p++<f;)d.push(0);do{for(l=0;l<10;l++){if(f!=(p=d.length))a=f>p?1:-1;else for(s=-1,a=0;++s<f;)if(o[s]!=d[s]){a=o[s]>d[s]?1:-1;break}if(!(a<0))break;for(c=p==f?o:h;p;){if(d[--p]<c[p]){for(s=p;s&&!d[--s];)d[s]=9;--d[s],d[p]+=10}d[p]-=c[p]}for(;!d[0];)d.shift()}m[w++]=a?l:++l,d[0]&&a?d[p]=e[v]||0:d=[e[v]]}while((v++<y||void 0!==d[0])&&i--);return m[0]||1==w||(m.shift(),g.e--,b--),w>b&&an(g,b,t.RM,void 0!==d[0]),g},en.eq=function(n){return 0===this.cmp(n)},en.gt=function(n){return this.cmp(n)>0},en.gte=function(n){return this.cmp(n)>-1},en.lt=function(n){return this.cmp(n)<0},en.lte=function(n){return this.cmp(n)<1},en.minus=en.sub=function(n){var t,r,e,o,i=this.constructor,u=new i(this),f=(n=new i(n),u.s),c=n.s;if(f!=c)return n.s=-c,u.plus(n);var l=u.c.slice(),a=u.e,s=n.c,h=n.e;if(!l[0]||!s[0])return s[0]?n.s=-c:l[0]?n=new i(u):n.s=1,n;if(f=a-h){for((o=f<0)?(f=-f,e=l):(h=a,e=s),e.reverse(),c=f;c--;)e.push(0);e.reverse()}else for(r=((o=l.length<s.length)?l:s).length,f=c=0;c<r;c++)if(l[c]!=s[c]){o=l[c]<s[c];break}if(o&&(e=l,l=s,s=e,n.s=-n.s),(c=(r=s.length)-(t=l.length))>0)for(;c--;)l[t++]=0;for(c=t;r>f;){if(l[--r]<s[r]){for(t=r;t&&!l[--t];)l[t]=9;--l[t],l[r]+=10}l[r]-=s[r]}for(;0===l[--c];)l.pop();for(;0===l[0];)l.shift(),--h;return l[0]||(n.s=1,l=[h=0]),n.c=l,n.e=h,n},en.mod=function(n){var t,r=this.constructor,e=new r(this),o=(n=new r(n),e.s),i=n.s;if(!n.c[0])throw Error("[big.js] Division by zero");return e.s=n.s=1,t=1==n.cmp(e),e.s=o,n.s=i,t?new r(e):(o=r.DP,i=r.RM,r.DP=r.RM=0,e=e.div(n),r.DP=o,r.RM=i,this.minus(e.times(n)))},en.plus=en.add=function(n){var t,r,e,o=this.constructor,i=new o(this);n=new o(n);if(i.s!=n.s)return n.s=-n.s,i.minus(n);var u=i.e,f=i.c,c=n.e,l=n.c;if(!f[0]||!l[0])return l[0]||(f[0]?n=new o(i):n.s=i.s),n;if(f=f.slice(),t=u-c){for(t>0?(c=u,e=l):(t=-t,e=f),e.reverse();t--;)e.push(0);e.reverse()}for(f.length-l.length<0&&(e=l,l=f,f=e),t=l.length,r=0;t;f[t]%=10)r=(f[--t]=f[t]+l[t]+r)/10|0;for(r&&(f.unshift(r),++c),t=f.length;0===f[--t];)f.pop();return n.c=f,n.e=c,n},en.pow=function(n){var t=this.constructor,r=new t(this),e=new t("1"),o=new t("1"),i=n<0;if(n!==~~n||n<-1e6||n>1e6)throw Error(un+"exponent");for(i&&(n=-n);1&n&&(e=e.times(r)),n>>=1;)r=r.times(r);return i?o.div(e):e},en.prec=function(n,t){if(n!==~~n||n<1||n>1e6)throw Error(un+"precision");return an(new this.constructor(this),n,t)},en.round=function(n,t){if(void 0===n)n=0;else if(n!==~~n||n<-1e6||n>1e6)throw Error(fn);return an(new this.constructor(this),n+this.e+1,t)},en.sqrt=function(){var n,t,r,e=this.constructor,o=new e(this),i=o.s,u=o.e,f=new e("0.5");if(!o.c[0])return new e(o);if(i<0)throw Error(on+"No square root");0===(i=Math.sqrt(o+""))||i===1/0?((t=o.c.join("")).length+u&1||(t+="0"),u=((u+1)/2|0)-(u<0||1&u),n=new e(((i=Math.sqrt(t))==1/0?"5e":(i=i.toExponential()).slice(0,i.indexOf("e")+1))+u)):n=new e(i+""),u=n.e+(e.DP+=4);do{r=n,n=f.times(r.plus(o.div(r)))}while(r.c.slice(0,u).join("")!==n.c.slice(0,u).join(""));return an(n,(e.DP-=4)+n.e+1,e.RM)},en.times=en.mul=function(n){var t,r=this.constructor,e=new r(this),o=(n=new r(n),e.c),i=n.c,u=o.length,f=i.length,c=e.e,l=n.e;if(n.s=e.s==n.s?1:-1,!o[0]||!i[0])return n.c=[n.e=0],n;for(n.e=c+l,u<f&&(t=o,o=i,i=t,l=u,u=f,f=l),t=new Array(l=u+f);l--;)t[l]=0;for(c=f;c--;){for(f=0,l=u+c;l>c;)f=t[l]+i[c]*o[l-c-1]+f,t[l--]=f%10,f=f/10|0;t[l]=f}for(f?++n.e:t.shift(),c=t.length;!t[--c];)t.pop();return n.c=t,n},en.toExponential=function(n,t){var r=this,e=r.c[0];if(void 0!==n){if(n!==~~n||n<0||n>1e6)throw Error(fn);for(r=an(new r.constructor(r),++n,t);r.c.length<n;)r.c.push(0)}return sn(r,!0,!!e)},en.toFixed=function(n,t){var r=this,e=r.c[0];if(void 0!==n){if(n!==~~n||n<0||n>1e6)throw Error(fn);for(n=n+(r=an(new r.constructor(r),n+r.e+1,t)).e+1;r.c.length<n;)r.c.push(0)}return sn(r,!1,!!e)},en.toJSON=en.toString=function(){var n=this,t=n.constructor;return sn(n,n.e<=t.NE||n.e>=t.PE,!!n.c[0])},en.toNumber=function(){var n=Number(sn(this,!0,!0));if(!0===this.constructor.strict&&!this.eq(n.toString()))throw Error(on+"Imprecise conversion");return n},en.toPrecision=function(n,t){var r=this,e=r.constructor,o=r.c[0];if(void 0!==n){if(n!==~~n||n<1||n>1e6)throw Error(un+"precision");for(r=an(new e(r),n,t);r.c.length<n;)r.c.push(0)}return sn(r,n<=r.e||r.e<=e.NE||r.e>=e.PE,!!o)},en.valueOf=function(){var n=this,t=n.constructor;if(!0===t.strict)throw Error(on+"valueOf disallowed");return sn(n,n.e<=t.NE||n.e>=t.PE,!0)};var hn=function n(){function t(r){var e=this;if(!(e instanceof t))return void 0===r?n():new t(r);if(r instanceof t)e.s=r.s,e.e=r.e,e.c=r.c.slice(),function(n){if(n.c.length>1&&!n.c[0]){var t=n.c.findIndex((function(n){return n}));n.c=n.c.slice(t),n.e=n.e-t}}(e);else{if("string"!=typeof r){if(!0===t.strict)throw TypeError(un+"number");r=0===r&&1/r<0?"-0":String(r)}ln(e,r)}e.constructor=t}return t.prototype=en,t.DP=28,t.RM=1,t.NE=-29,t.PE=29,t.strict=!1,t}(),vn=hn;new vn(0),new vn(1),new vn(-1),new vn("79228162514264337593543950335"),new vn("-79228162514264337593543950335");var yn;!function(n){n[n.AllowHexSpecifier=512]="AllowHexSpecifier"}(yn||(yn={}));var dn=null;try{dn=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(n){}function pn(n,t,r){this.low=0|n,this.high=0|t,this.unsigned=!!r}function gn(n){return!0===(n&&n.__isLong__)}pn.prototype.GetHashCode=function(){var n=this.unsigned?1:0;return n=((n=(n<<5)+n^this.high)<<5)+n^this.low},pn.prototype.Equals=function(n){return Bn(this,n)},pn.prototype.CompareTo=function(n){return Vn(this,n)},pn.prototype.toString=function(n){return Hn(this,n)},pn.prototype.toJSON=function(){return Hn(this)},pn.prototype[Z]=function(){var n=this;return{multiply:function(t){return Yn(n,t)},toPrecision:function(t){return String(n)+(0).toPrecision(t).substr(1)},toExponential:function(t){return String(n)+(0).toExponential(t).substr(1)},toFixed:function(t){return String(n)+(0).toFixed(t).substr(1)},toHex:function(){return Hn(n.unsigned?n:it(ot(n),!0),16)}}},pn.prototype.__isLong__,Object.defineProperty(pn.prototype,"__isLong__",{value:!0});var mn={},wn={};function bn(n,t){var r,e,o;return t?(o=0<=(n>>>=0)&&n<256)&&(e=wn[n])?e:(r=Sn(n,(0|n)<0?-1:0,!0),o&&(wn[n]=r),r):(o=-128<=(n|=0)&&n<128)&&(e=mn[n])?e:(r=Sn(n,n<0?-1:0,!1),o&&(mn[n]=r),r)}function En(n,t){if(isNaN(n))return t?Mn:Pn;if(t){if(n<0)return Mn;if(n>=In)return Rn}else{if(n<=-kn)return qn;if(n+1>=kn)return Nn}return n<0?Kn(En(-n,t)):Sn(n%xn|0,n/xn|0,t)}function Sn(n,t,r){return new pn(n,t,r)}var On=Math.pow;function jn(n,t,r){if(0===n.length)throw Error("empty string");if("NaN"===n||"Infinity"===n||"+Infinity"===n||"-Infinity"===n)return Pn;if("number"==typeof t?(r=t,t=!1):t=!!t,(r=r||10)<2||36<r)throw RangeError("radix");var e=n.indexOf("-");if(e>0)throw Error("interior hyphen");if(0===e)return Kn(jn(n.substring(1),t,r));for(var o=En(On(r,8)),i=Pn,u=0;u<n.length;u+=8){var f=Math.min(8,n.length-u),c=parseInt(n.substring(u,u+f),r);if(f<8)i=Qn(Yn(i,En(On(r,f))),En(c));else i=Qn(i=Yn(i,o),En(c))}return i.unsigned=t,i}function Cn(n,t){return"number"==typeof n?En(n,t):"string"==typeof n?jn(n,t):Sn(n.low,n.high,"boolean"==typeof t?t:n.unsigned)}var xn=4294967296,In=xn*xn,kn=In/2,An=bn(1<<24),Pn=bn(0),Mn=bn(0,!0),_n=bn(1),Tn=bn(1,!0),Dn=bn(-1),Nn=Sn(-1,2147483647,!1),Rn=Sn(-1,-1,!0),qn=Sn(0,-2147483648,!1);function Ln(n){return n.unsigned?n.low>>>0:n.low}function Gn(n){return n.unsigned?(n.high>>>0)*xn+(n.low>>>0):n.high*xn+(n.low>>>0)}function Hn(n,t){if((t=t||10)<2||36<t)throw RangeError("radix");if(Un(n))return"0";if(Jn(n)){if(Bn(n,qn)){var r=En(t),e=Zn(n,r),o=Xn(Yn(e,r),n);return Hn(e,t)+Ln(o).toString(t)}return"-"+Hn(Kn(n),t)}for(var i=En(On(t,6),n.unsigned),u=n,f="";;){var c=Zn(u,i),l=(Ln(Xn(u,Yn(c,i)))>>>0).toString(t);if(Un(u=c))return l+f;for(;l.length<6;)l="0"+l;f=""+l+f}}function Un(n){return 0===n.high&&0===n.low}function Jn(n){return!n.unsigned&&n.high<0}function $n(n){return 1==(1&n.low)}function Bn(n,t){return gn(t)||(t=Cn(t)),(n.unsigned===t.unsigned||n.high>>>31!=1||t.high>>>31!=1)&&(n.high===t.high&&n.low===t.low)}function Fn(n,t){return Vn(n,t)<0}function zn(n,t){return Vn(n,t)>0}function Wn(n,t){return Vn(n,t)>=0}function Vn(n,t){if(gn(t)||(t=Cn(t)),Bn(n,t))return 0;var r=Jn(n),e=Jn(t);return r&&!e?-1:!r&&e?1:n.unsigned?t.high>>>0>n.high>>>0||t.high===n.high&&t.low>>>0>n.low>>>0?-1:1:Jn(Xn(n,t))?-1:1}function Kn(n){return!n.unsigned&&Bn(n,qn)?qn:Qn(nt(n),_n)}function Qn(n,t){gn(t)||(t=Cn(t));var r=n.high>>>16,e=65535&n.high,o=n.low>>>16,i=65535&n.low,u=t.high>>>16,f=65535&t.high,c=t.low>>>16,l=0,a=0,s=0,h=0;return s+=(h+=i+(65535&t.low))>>>16,a+=(s+=o+c)>>>16,l+=(a+=e+f)>>>16,l+=r+u,Sn((s&=65535)<<16|(h&=65535),(l&=65535)<<16|(a&=65535),n.unsigned)}function Xn(n,t){return gn(t)||(t=Cn(t)),Qn(n,Kn(t))}function Yn(n,t){if(Un(n))return n.unsigned?Mn:Pn;if(gn(t)||(t=Cn(t)),dn)return Sn(dn.mul(n.low,n.high,t.low,t.high),dn.get_high(),n.unsigned);if(Un(t))return n.unsigned?Mn:Pn;if(Bn(n,qn))return $n(t)?qn:Pn;if(Bn(t,qn))return $n(n)?qn:Pn;if(Jn(n))return Jn(t)?Yn(Kn(n),Kn(t)):Kn(Yn(Kn(n),t));if(Jn(t))return Kn(Yn(n,Kn(t)));if(Fn(n,An)&&Fn(t,An))return En(Gn(n)*Gn(t),n.unsigned);var r=n.high>>>16,e=65535&n.high,o=n.low>>>16,i=65535&n.low,u=t.high>>>16,f=65535&t.high,c=t.low>>>16,l=65535&t.low,a=0,s=0,h=0,v=0;return h+=(v+=i*l)>>>16,s+=(h+=o*l)>>>16,h&=65535,s+=(h+=i*c)>>>16,a+=(s+=e*l)>>>16,s&=65535,a+=(s+=o*c)>>>16,s&=65535,a+=(s+=i*f)>>>16,a+=r*l+e*c+o*f+i*u,Sn((h&=65535)<<16|(v&=65535),(a&=65535)<<16|(s&=65535),n.unsigned)}function Zn(n,t){if(gn(t)||(t=Cn(t)),Un(t))throw Error("division by zero");var r,e,o;if(dn)return n.unsigned||-2147483648!==n.high||-1!==t.low||-1!==t.high?Sn((n.unsigned?dn.div_u:dn.div_s)(n.low,n.high,t.low,t.high),dn.get_high(),n.unsigned):n;if(Un(n))return n.unsigned?Mn:Pn;if(n.unsigned){if(t.unsigned||(t=function(n){return n.unsigned?n:Sn(n.low,n.high,!0)}(t)),zn(t,n))return Mn;if(zn(t,et(n,1)))return Tn;o=Mn}else{if(Bn(n,qn))return Bn(t,_n)||Bn(t,Dn)?qn:Bn(t,qn)?_n:Bn(r=tt(Zn(rt(n,1),t),1),Pn)?Jn(t)?_n:Dn:o=Qn(r,Zn(e=Xn(n,Yn(t,r)),t));if(Bn(t,qn))return n.unsigned?Mn:Pn;if(Jn(n))return Jn(t)?Zn(Kn(n),Kn(t)):Kn(Zn(Kn(n),t));if(Jn(t))return Kn(Zn(n,Kn(t)));o=Pn}for(e=n;Wn(e,t);){r=Math.max(1,Math.floor(Gn(e)/Gn(t)));for(var i=Math.ceil(Math.log(r)/Math.LN2),u=i<=48?1:On(2,i-48),f=En(r),c=Yn(f,t);Jn(c)||zn(c,e);)c=Yn(f=En(r-=u,n.unsigned),t);Un(f)&&(f=_n),o=Qn(o,f),e=Xn(e,c)}return o}function nt(n){return Sn(~n.low,~n.high,n.unsigned)}function tt(n,t){return gn(t)&&(t=Ln(t)),0==(t&=63)?n:t<32?Sn(n.low<<t,n.high<<t|n.low>>>32-t,n.unsigned):Sn(0,n.low<<t-32,n.unsigned)}function rt(n,t){return gn(t)&&(t=Ln(t)),0==(t&=63)?n:t<32?Sn(n.low>>>t|n.high<<32-t,n.high>>t,n.unsigned):Sn(n.high>>t-32,n.high>=0?0:-1,n.unsigned)}function et(n,t){if(gn(t)&&(t=Ln(t)),0===(t&=63))return n;var r=n.high;return t<32?Sn(n.low>>>t|r<<32-t,r>>>t,n.unsigned):Sn(32===t?r:r>>>t-32,0,n.unsigned)}function ot(n,t){return t?function(n){var t=n.high,r=n.low;return[255&r,r>>>8&255,r>>>16&255,r>>>24,255&t,t>>>8&255,t>>>16&255,t>>>24]}(n):function(n){var t=n.high,r=n.low;return[t>>>24,t>>>16&255,t>>>8&255,255&t,r>>>24,r>>>16&255,r>>>8&255,255&r]}(n)}function it(n,t,r){return r?function(n,t){return new pn(n[0]|n[1]<<8|n[2]<<16|n[3]<<24,n[4]|n[5]<<8|n[6]<<16|n[7]<<24,t)}(n,t):function(n,t){return new pn(n[4]<<24|n[5]<<16|n[6]<<8|n[7],n[0]<<24|n[1]<<16|n[2]<<8|n[3],t)}(n,t)}function ut(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var r=[],e=!0,o=!1,i=void 0;try{for(var u,f=n[Symbol.iterator]();!(e=(u=f.next()).done)&&(r.push(u.value),!t||r.length!==t);e=!0);}catch(n){o=!0,i=n}finally{try{e||null==f.return||f.return()}finally{if(o)throw i}}return r}(n,t)||ct(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ft(n){return function(n){if(Array.isArray(n))return lt(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||ct(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ct(n,t){if(n){if("string"==typeof n)return lt(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?lt(n,t):void 0}}function lt(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function at(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function st(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var ht=function(){function n(t,r,e,o,i,u,f){st(this,n),this.fullname=t,this.generics=r,this.construct=e,this.parent=o,this.fields=i,this.cases=u,this.enumCases=f}var t,r,e;return t=n,(r=[{key:"toString",value:function(){return function n(t){var r=pt(t);return null!=r?n(r)+"[]":null==t.generics||0===t.generics.length?t.fullname:t.fullname+"["+t.generics.map((function(t){return n(t)})).join(",")+"]"}(this)}},{key:"GetHashCode",value:function(){return yt(this)}},{key:"Equals",value:function(n){return dt(this,n)}}])&&at(t.prototype,r),e&&at(t,e),n}();function vt(n){return null!=n.generics?n.generics:[]}function yt(n){var t=j(n.fullname),r=vt(n).map(yt);return x([t].concat(ft(r)))}function dt(n,t){return""===n.fullname?""===t.fullname&&k(gt(n),gt(t),(function(n,t){var r=ut(n,2),e=r[0],o=r[1],i=ut(t,2),u=i[0],f=i[1];return e===u&&dt(o,f)})):n.fullname===t.fullname&&k(vt(n),vt(t),dt)}new ht("System.Object"),new ht("Microsoft.FSharp.Core.Unit"),new ht("System.Char"),new ht("System.String"),new ht("System.Boolean"),new ht("System.SByte"),new ht("System.Byte"),new ht("System.Int16"),new ht("System.UInt16"),new ht("System.Int32"),new ht("System.UInt32"),new ht("System.Single"),new ht("System.Double"),new ht("System.Decimal");function pt(n){var t;return"[]"===n.fullname&&1===(null===(t=n.generics)||void 0===t?void 0:t.length)?n.generics[0]:void 0}function gt(n){if(null!=n.fields)return n.fields();throw new Error("".concat(n.fullname," is not an F# record type"))}function mt(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}var wt=function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.value=t}var t,r,e;return t=n,(r=[{key:"toJSON",value:function(){return this.value}},{key:"toString",value:function(){return String(this.value)}},{key:"GetHashCode",value:function(){return I(this.value)}},{key:"Equals",value:function(t){return null!=t&&P(this.value,t instanceof n?t.value:t)}},{key:"CompareTo",value:function(t){return null==t?1:T(this.value,t instanceof n?t.value:t)}}])&&mt(t.prototype,r),e&&mt(t,e),n}();function bt(n){return null==n||n instanceof wt?new wt(n):n}function Et(n){if(null==n)throw new Error("Option has no value");return n instanceof wt?n.value:n}function St(n){return null==n?[]:[Et(n)]}function Ot(n,t){return null!=n?Et(n):t}function jt(n,t){return null!=t?bt(n(Et(t))):void 0}function Ct(n){return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function xt(n){return"string"!=typeof n||/^\s*$/.test(n)}function It(n,t){return Array.isArray(t)?t.join(n):Array.from(t).join(n)}function kt(n,t,r,e){if(e="number"==typeof e?e:0,(r="number"==typeof r?r:void 0)&&r<0)throw new Error("Count cannot be less than zero");if(0===r)return[];var o=1==(1&e),i=2==(2&e);t=(t=(t=t||[]).filter((function(n){return n})).map(Ct)).length>0?t:["\\s"];var u=[],f=new RegExp(t.join("|"),"g"),c=!0,l=0;do{var a=f.exec(n);if(null===a){var s=i?n.substring(l).trim():n.substring(l);(!o||s.length>0)&&u.push(s),c=!1}else{var h=i?n.substring(l,a.index).trim():n.substring(l,a.index);(!o||h.length>0)&&(null!=r&&u.length+1===r?(u.push(i?n.substring(l).trim():n.substring(l)),c=!1):u.push(h)),l=f.lastIndex}}while(c);return u}function At(n,t,r){if(t+(r||0)>n.length)throw new Error("Invalid startIndex and/or length");return null!=r?n.substr(t,r):n.substr(t)}var Pt,Mt;function _t(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}_t(Pt={},"System.Collections.IEqualityComparer.Equals541DA560",(function(n,t){return P(n,t)})),_t(Pt,"System.Collections.IEqualityComparer.GetHashCode4E60E31B",(function(n){return I(n)})),_t(Mt={},"System.Collections.IEqualityComparer.Equals541DA560",(function(n,t){return P(n,t)})),_t(Mt,"System.Collections.IEqualityComparer.GetHashCode4E60E31B",(function(n){return I(n)}));function Tt(n,t,r){if(null==t)return null==r;if(null==r)return!1;var e=0,o=!0,i=0|t.length,u=0|r.length;if(i>u)return!1;if(i<u)return!1;for(;e<i&&o;)o=n(t[e],r[e]),e=e+1|0;return o}function Dt(n){return(Dt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function Nt(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function Rt(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function qt(n,t,r){return t&&Rt(n.prototype,t),r&&Rt(n,r),n}function Lt(n,t){return(Lt=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function Gt(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,e=Ut(n);if(t){var o=Ut(this).constructor;r=Reflect.construct(e,arguments,o)}else r=e.apply(this,arguments);return Ht(this,r)}}function Ht(n,t){return!t||"object"!==Dt(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function Ut(n){return(Ut=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var Jt=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&Lt(n,t)}(r,n);var t=Gt(r);function r(n,e){var o;return Nt(this,r),(o=t.call(this)).head=n,o.tail=e,o}return qt(r,[{key:"toString",value:function(){return"["+It("; ",this)+"]"}},{key:"Equals",value:function(n){if(this===n)return!0;return function(n,t){n:for(;;){var r=n,e=t,o=[r.tail,e.tail];if(null!=o[0]){if(null!=o[1]){var i=o[0],u=o[1];if(P(r.head,e.head)){n=i,t=u;continue n}return!1}return!1}return null==o[1]}}(this,n)}},{key:"GetHashCode",value:function(){return 0|function(n,t,r){for(;;){var e=n,o=t,i=r,u=i.tail;if(null==u)return 0|o;var f=u;if(e>18)return 0|o;n=e+1,t=(o<<1)+I(i.head)+631*e,r=f}}(0,0,this)}},{key:"toJSON",value:function(n){return Array.from(this)}},{key:"CompareTo",value:function(n){return 0|function(n,t){n:for(;;){var r=n,e=t,o=[r.tail,e.tail];if(null!=o[0]){if(null!=o[1]){var i=o[0],u=o[1],f=0|T(r.head,e.head);if(0===f){n=i,t=u;continue n}return 0|f}return 1}return null!=o[1]?-1:0}}(this,n)}},{key:"GetEnumerator",value:function(){return function(n){return new $t(n)}(this)}},{key:Symbol.iterator,value:function(){return E(this.GetEnumerator())}},{key:"System.Collections.IEnumerable.GetEnumerator",value:function(){return b(this)}}]),r}(Y);var $t=function(){function n(t){Nt(this,n),this.xs=t,this.it=this.xs,this.current=null}return qt(n,[{key:"System.Collections.Generic.IEnumerator`1.get_Current",value:function(){return this.current}},{key:"System.Collections.IEnumerator.get_Current",value:function(){return this.current}},{key:"System.Collections.IEnumerator.MoveNext",value:function(){var n=this.it.tail;if(null!=n){var t=n;return this.current=this.it.head,this.it=t,!0}return!1}},{key:"System.Collections.IEnumerator.Reset",value:function(){this.it=this.xs,this.current=null}},{key:"Dispose",value:function(){}}]),n}();function Bt(){return new Jt(null,void 0)}function Ft(n,t){return new Jt(n,t)}function zt(n){return null==n.tail}function Wt(n){if(null!=n.tail)return n.head;throw new Error("Collection was empty.\\nParameter name: list")}function Vt(n){var t=n.tail;if(null!=t)return t;throw new Error("Collection was empty.\\nParameter name: list")}function Kt(){return Bt()}function Qt(n){return Ft(n,Bt())}function Xt(n){return function(n,t){for(var r=t,e=n.length-1;e>=0;e--)r=Ft(n[e],r);return r}(n,Bt())}function Yt(n,t){null==t&&function(n){throw new Error(n)}(n)}function Zt(n){return Yt("source",n),b(n)}function nr(n,t,r){var e=Zt(r);try{for(var o=t;e["System.Collections.IEnumerator.MoveNext"]();)o=n(o,e["System.Collections.Generic.IEnumerator`1.get_Current"]());return o}finally{g(e)}}function tr(n,t){nr((function(t,r){n(r)}),void 0,t)}var rr=i.a;var er=function(n){Object(o.useEffect)((function(){var t=n();return function(){t.Dispose()}}))},or=function(n){Object(o.useLayoutEffect)((function(){var t=n();return function(){t.Dispose()}}))};function ir(n,t,r,e){var o=rr.memo(n,N(2,Ot(q(2,r),null)));return tr((function(t){n.displayName=t}),St(t)),function(n){var t=ur(e,n);return rr.createElement(o,t)}}function ur(n,t){if(null==n)return t;var r=n;return t.key=r(t),t}function fr(n){return{Dispose:function(){n()}}}function cr(n){er(n)}function lr(n){return rr.useRef(n)}function ar(n,t){var r=Ot(t,[]);return rr.useMemo(n,r)}function sr(n){var t,r,e,o=lr(n),i=(t=function(n){return o.current(n)},r=Ot([],[]),rr.useCallback(t,r));return e=function(){o.current=n},or((function(n){return e(),fr((function(){}))})),i}o.useState;o.useState;var hr=function(){try{if("undefined"!=typeof window&&"function"==typeof window.addEventListener){window.addEventListener("testPassiveEventSupport",(function(n){}),{passive:!0}),window.removeEventListener("testPassiveEventSupport",(function(n){}))}}catch(n){}return!1}();function vr(n){return jt((function(n){return n.passive&&!hr?{capture:n.capture,once:n.once,passive:!1}:n}),n)}function yr(n){return t=function(n){return n.capture?{capture:!0}:void 0},null!=(r=n)?t(Et(r)):void 0;var t,r}function dr(n,t){return 0===t.indexOf(n)?t:void 0}function pr(n,t){return function(n,t){var r=n.lastIndexOf(t);return r>=0&&r===n.length-t.length}(t,n)?t:void 0}function gr(n,t){return function(n,t){for(var r,e,o=Bt(),i=o,u=t;!zt(u);){for(var f=n(Wt(u));!zt(f);)r=i,e=new Jt(Wt(f),void 0),r.tail=e,i=e,f=Vt(f);u=Vt(u)}var c=i,l=Bt();return c.tail=l,Vt(o)}((function(n){if(xt(n))return Kt();var t=function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];return 0===r.length?n.trimEnd():n.replace(new RegExp("["+Ct(r.join(""))+"]+$"),"")}(n,"#");if("?"===t)return Kt();if(null!=dr("?",t))return Qt(t);var r=t.split("?");if(Tt((function(n,t){return n===t}),r,null)||1!==r.length){if(Tt((function(n,t){return n===t}),r,null)||2!==r.length)return Kt();if(""===r[1]){var e=r[0];return Qt(decodeURIComponent(e))}var o=r[0],i=r[1];return Xt([decodeURIComponent(o),"?"+i])}var u=r[0];return Qt(decodeURIComponent(u))}),Xt(kt(null!=dr("#",n)?At(n,1,n.length-1):1===t&&(null!=pr("#",n)||null!=pr("#/",n))?"":n,["/"],null,0)))}var mr,wr;ir((function(n){var t=sr((function(t){var r=Ot(n.onUrlChanged,(function(n){}));!function(n,t,r){t(gr(2===n?window.location.pathname+window.location.search:window.location.hash,n))}(Ot(n.hashMode,1),r)}));if(window.navigator.userAgent.indexOf("Trident")>=0||window.navigator.userAgent.indexOf("MSIE")>=0){var r=function(n){t(n)},e=ar((function(){return vr(void 0)}),[void 0]),o=ar((function(){return yr(void 0)}),[void 0]),i=ar((function(){return function(n){r(n)}}),[r]);cr(sr((function(){if(null==e)window.addEventListener("hashchange",i);else{var n=e;window.addEventListener("hashchange",i,n)}return fr((function(){if(null==o)window.removeEventListener("hashchange",i);else{var n=o;window.removeEventListener("hashchange",i,n)}}))})))}else{var u=t,f=ar((function(){return vr(void 0)}),[void 0]),c=ar((function(){return yr(void 0)}),[void 0]),l=ar((function(){return function(n){u(n)}}),[u]);cr(sr((function(){if(null==f)window.addEventListener("popstate",l);else{var n=f;window.addEventListener("popstate",l,n)}return fr((function(){if(null==c)window.removeEventListener("popstate",l);else{var n=c;window.removeEventListener("popstate",l,n)}}))})))}var a="CUSTOM_NAVIGATION_EVENT",s=t,h=ar((function(){return vr(void 0)}),[void 0]),v=ar((function(){return yr(void 0)}),[void 0]),y=ar((function(){return function(n){s(n)}}),[s]);cr(sr((function(){if(null==h)window.addEventListener(a,y);else{var n=h;window.addEventListener(a,y,n)}return fr((function(){if(null==v)window.removeEventListener(a,y);else{var n=v;window.removeEventListener(a,y,n)}}))})));var d=n.application;return null==d?null:d}),void 0,wr,mr);function br(){return Object(o.createElement)("h1",{children:["Hello World"]})}Object(e.render)(Object(o.createElement)(br,null),document.getElementById("feliz-app"))}});
//# sourceMappingURL=app.e430db18f44b1fc10d95.js.map