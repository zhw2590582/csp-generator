/*!
 * csp.js v1.0.0
 * Github: https://github.com/zhw2590582/csp-generator#readme
 * (c) 2017-2019 Harvey Zack
 * Released under the MIT License.
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).CSP=t()}(this,function(){"use strict";var n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var e=function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e};return function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";n(this,t),this.csp=this.parse(e)}return e(t,[{key:"parse",value:function(e){return(0<arguments.length&&void 0!==e?e:"").split(";").reduce(function(e,t){var n=t.split(" ").filter(function(e){return e.trim()}),i=n[0],r=n.slice(1);return e[i]=r,e},{})}},{key:"generate",value:function(){var n=this;return Object.keys(this.csp).reduce(function(e,t){return"".concat(e," ").concat(t," ").concat(n.csp[t].join(" "),";")},"").trim()}},{key:"append",value:function(e,t){return this.csp[e]?this.csp[e].push(t):this.csp[e]=[t],this.csp[e]}},{key:"delete",value:function(e,t){if(t){var n=(this.csp[e]||[]).indexOf(t);-1<n&&this.csp[e].splice(n,1)}else delete this.csp[e]}},{key:"get",value:function(e){return this.csp[e]}}]),t}()});
