!function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(t){return n[t]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="../",t(t.s=92)}([function(n){var t=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},function(n,t,e){n.exports=!e(5)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(n,t,e){var r=e(12)("wks"),o=e(10),c=e(0).Symbol,i="function"==typeof c;(n.exports=function(n){return r[n]||(r[n]=i&&c[n]||(i?c:o)("Symbol."+n))}).store=r},function(n,t,e){var r=e(6);n.exports=function(n){if(!r(n))throw TypeError(n+" is not an object!");return n}},function(n,t,e){var r=e(8),o=e(15);n.exports=e(1)?function(n,t,e){return r.f(n,t,o(1,e))}:function(n,t,e){return n[t]=e,n}},function(n){n.exports=function(n){try{return!!n()}catch(n){return!0}}},function(n){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},function(n,t,e){var r=e(0),o=e(4),c=e(11),i=e(10)("src"),u=e(27),a="toString",l=(""+u).split(a);e(9).inspectSource=function(n){return u.call(n)},(n.exports=function(n,t,e,u){var a="function"==typeof e;a&&(c(e,"name")||o(e,"name",t)),n[t]===e||(a&&(c(e,i)||o(e,i,n[t]?""+n[t]:l.join(t+""))),n===r?n[t]=e:u?n[t]?n[t]=e:o(n,t,e):(delete n[t],o(n,t,e)))})(Function.prototype,a,(function(){return"function"==typeof this&&this[i]||u.call(this)}))},function(n,t,e){var r=e(3),o=e(23),c=e(19),i=Object.defineProperty;t.f=e(1)?Object.defineProperty:function(n,t,e){if(r(n),t=c(t,!0),r(e),o)try{return i(n,t,e)}catch(n){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(n[t]=e.value),n}},function(n){var t=n.exports={version:"2.6.11"};"number"==typeof __e&&(__e=t)},function(n){var t=0,e=Math.random();n.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++t+e).toString(36))}},function(n){var t={}.hasOwnProperty;n.exports=function(n,e){return t.call(n,e)}},function(n,t,e){var r=e(9),o=e(0),c="__core-js_shared__",i=o[c]||(o[c]={});(n.exports=function(n,t){return i[n]||(i[n]=void 0===t?{}:t)})("versions",[]).push({version:r.version,mode:e(17)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(n){n.exports=function(n){if(null==n)throw TypeError("Can't call method on  "+n);return n}},function(n){var t=Math.ceil,e=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(0<n?e:t)(n)}},function(n){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},function(n,t,e){"use strict";var r=e(3);n.exports=function(){var n=r(this),t="";return n.global&&(t+="g"),n.ignoreCase&&(t+="i"),n.multiline&&(t+="m"),n.unicode&&(t+="u"),n.sticky&&(t+="y"),t}},function(n){n.exports=!1},function(n){var t={}.toString;n.exports=function(n){return t.call(n).slice(8,-1)}},function(n,t,e){var r=e(6);n.exports=function(n,t){if(!r(n))return n;var e,o;if(t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;if("function"==typeof(e=n.valueOf)&&!r(o=e.call(n)))return o;if(!t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;throw TypeError("Can't convert object to primitive value")}},function(n,t,e){var r=e(13);n.exports=function(n){return Object(r(n))}},function(n,t,e){var r=e(0),o=e(9),c=e(4),i=e(7),u=e(22),a="prototype",l=function(n,t,e){var f,s,p,v,g=n&l.F,d=n&l.G,h=n&l.S,y=n&l.P,x=n&l.B,m=d?r:h?r[t]||(r[t]={}):(r[t]||{})[a],b=d?o:o[t]||(o[t]={}),A=b[a]||(b[a]={});for(f in d&&(e=t),e)p=((s=!g&&m&&void 0!==m[f])?m:e)[f],v=x&&s?u(p,r):y&&"function"==typeof p?u(Function.call,p):p,m&&i(m,f,p,n&l.U),b[f]!=p&&c(b,f,v),y&&A[f]!=p&&(A[f]=p)};r.core=o,l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,n.exports=l},function(n,t,e){var r=e(28);n.exports=function(n,t,e){return r(n),void 0===t?n:1===e?function(e){return n.call(t,e)}:2===e?function(e,r){return n.call(t,e,r)}:3===e?function(e,r,o){return n.call(t,e,r,o)}:function(){return n.apply(t,arguments)}}},function(n,t,e){n.exports=!e(1)&&!e(5)((function(){return 7!=Object.defineProperty(e(24)("div"),"a",{get:function(){return 7}}).a}))},function(n,t,e){var r=e(6),o=e(0).document,c=r(o)&&r(o.createElement);n.exports=function(n){return c?o.createElement(n):{}}},function(n,t,e){var r=e(18),o=e(2)("toStringTag"),c="Arguments"==r(function(){return arguments}());n.exports=function(n){var t,e,i;return void 0===n?"Undefined":null===n?"Null":"string"==typeof(e=function(n,t){try{return n[t]}catch(n){}}(t=Object(n),o))?e:c?r(t):"Object"==(i=r(t))&&"function"==typeof t.callee?"Arguments":i}},function(n,t,e){var r=e(14),o=Math.min;n.exports=function(n){return 0<n?o(r(n),9007199254740991):0}},function(n,t,e){n.exports=e(12)("native-function-to-string",Function.toString)},function(n){n.exports=function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!");return n}},,function(n,t,e){"use strict";e(31);var r=e(3),o=e(16),c=e(1),i="toString",u=/./[i],a=function(n){e(7)(RegExp.prototype,i,n,!0)};e(5)((function(){return"/a/b"!=u.call({source:"a",flags:"b"})}))?a((function(){var n=r(this);return"/".concat(n.source,"/","flags"in n?n.flags:!c&&n instanceof RegExp?o.call(n):void 0)})):u.name!=i&&a((function(){return u.call(this)}))},function(n,t,e){e(1)&&"g"!=/./g.flags&&e(8).f(RegExp.prototype,"flags",{configurable:!0,get:e(16)})},function(n,t,e){"use strict";var r=e(25);({})[e(2)("toStringTag")]="z",e(7)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},function(n,t,e){var r=e(14),o=e(13);n.exports=function(n){return function(t,e){var c,i,u=o(t)+"",a=r(e),l=u.length;return 0>a||a>=l?n?"":void 0:55296>(c=u.charCodeAt(a))||56319<c||a+1===l||56320>(i=u.charCodeAt(a+1))||57343<i?n?u.charAt(a):c:n?u.slice(a,a+2):i-56320+(c-55296<<10)+65536}}},function(n,t,e){"use strict";var r=e(16),o=RegExp.prototype.exec,c=String.prototype.replace,i=o,u="lastIndex",a=function(){var n=/a/,t=/b*/g;return o.call(n,"a"),o.call(t,"a"),0!==n[u]||0!==t[u]}(),l=void 0!==/()??/.exec("")[1];(a||l)&&(i=function(n){var t,e,i,f,s=this;return l&&(e=new RegExp("^"+s.source+"$(?!\\s)",r.call(s))),a&&(t=s[u]),i=o.call(s,n),a&&i&&(s[u]=s.global?i.index+i[0].length:t),l&&i&&1<i.length&&c.call(i[0],e,(function(){for(f=1;f<arguments.length-2;f++)void 0===arguments[f]&&(i[f]=void 0)})),i}),n.exports=i},,,function(n,t,e){"use strict";var r=e(3),o=e(20),c=e(26),i=e(14),u=e(38),a=e(39),l=Math.max,f=Math.min,s=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g,g=function(n){return void 0===n?n:n+""};e(40)("replace",2,(function(n,t,e,d){function h(n,t,r,c,i,u){var a=r+n.length,l=c.length,f=v;return void 0!==i&&(i=o(i),f=p),e.call(u,f,(function(e,o){var u;switch(o.charAt(0)){case"$":return"$";case"&":return n;case"`":return t.slice(0,r);case"'":return t.slice(a);case"<":u=i[o.slice(1,-1)];break;default:var f=+o;if(0==f)return e;if(f>l){var p=s(f/10);return 0===p?e:p<=l?void 0===c[p-1]?o.charAt(1):c[p-1]+o.charAt(1):e}u=c[f-1]}return void 0===u?"":u}))}return[function(r,o){var c=n(this),i=null==r?void 0:r[t];return void 0===i?e.call(c+"",r,o):i.call(r,c,o)},function(n,t){var o=d(e,n,this,t);if(o.done)return o.value;var s=r(n),p=this+"",v="function"==typeof t;v||(t+="");var y=s.global;if(y){var x=s.unicode;s.lastIndex=0}for(var m,b=[];null!==(m=a(s,p))&&(b.push(m),y);){""==m[0]+""&&(s.lastIndex=u(p,c(s.lastIndex),x))}for(var A="",_=0,w=0;w<b.length;w++){for(var C=(m=b[w])[0]+"",S=l(f(i(m.index),p.length),0),j=[],E=1;E<m.length;E++)j.push(g(m[E]));var P=m.groups;if(v){var O=[C].concat(j,S,p);void 0!==P&&O.push(P);var k=t.apply(void 0,O)+""}else k=h(C,p,S,j,P,t);S>=_&&(A+=p.slice(_,S)+k,_=S+C.length)}return A+p.slice(_)}]}))},function(n,t,e){"use strict";var r=e(33)(!0);n.exports=function(n,t,e){return t+(e?r(n,t).length:1)}},function(n,t,e){"use strict";var r=e(25),o=RegExp.prototype.exec;n.exports=function(n,t){var e=n.exec;if("function"==typeof e){var c=e.call(n,t);if("object"!=typeof c)throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(n))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(n,t)}},function(n,t,e){"use strict";e(41);var r=e(7),o=e(4),c=e(5),i=e(13),u=e(2),a=e(34),l=u("species"),f=!c((function(){var n=/./;return n.exec=function(){var n=[];return n.groups={a:"7"},n},"7"!=="".replace(n,"$<a>")})),s=function(){var n=/(?:)/,t=n.exec;n.exec=function(){return t.apply(this,arguments)};var e="ab".split(n);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();n.exports=function(n,t,e){var p=u(n),v=!c((function(){var t={};return t[p]=function(){return 7},7!=""[n](t)})),g=v?!c((function(){var t=!1,e=/a/;return e.exec=function(){return t=!0,null},"split"===n&&(e.constructor={},e.constructor[l]=function(){return e}),e[p](""),!t})):void 0;if(!v||!g||"replace"===n&&!f||"split"===n&&!s){var d=/./[p],h=e(i,p,""[n],(function(n,t,e,r,o){return t.exec===a?v&&!o?{done:!0,value:d.call(t,e,r)}:{done:!0,value:n.call(e,t,r)}:{done:!1}})),y=h[0],x=h[1];r(String.prototype,n,y),o(RegExp.prototype,p,2==t?function(n,t){return x.call(n,this,t)}:function(n){return x.call(n,this)})}}},function(n,t,e){"use strict";var r=e(34);e(21)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(n,t,e){e(93),n.exports=e(94)},function(n,t,e){"use strict";e.r(t);var r=e(30),o=(e.n(r),e(32)),c=(e.n(o),e(37));e.n(c);!function(n,t,e){var r=Math.round;t.behaviors.ginAccent={attach:function(){var n=e.path.currentPath;if(t.behaviors.ginAccent.setFocusColor(),-1!==n.indexOf("user/login")||-1!==n.indexOf("user/password")||-1!==n.indexOf("user/register")||localStorage.getItem("GinAccentColorCustom"))t.behaviors.ginAccent.setAccentColor();else if(t.behaviors.ginAccent.setAccentColor(),"custom"===e.gin.preset_accent_color){var r=e.gin.accent_color;localStorage.setItem("GinAccentColorCustom",r)}else localStorage.setItem("GinAccentColorCustom","")},setAccentColor:function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,c=null==r?e.gin.preset_accent_color:r;"custom"===c?(n("body").attr("data-gin-accent",r),t.behaviors.ginAccent.setCustomAccentColor("custom",o)):n("body").attr("data-gin-accent",c)},setCustomAccentColor:function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,i=null==c?e.gin.accent_color:c;if("custom"===o){n("body").attr("data-gin-accent",o);var u=null==o?e.gin.darkmode:n('input[name="enable_darkmode"]').is(":checked"),a=(e.gin.darkmode_class,u?10:6.5),l=i;if(l){t.behaviors.ginAccent.clearAccentColor();var f=l.replace("#",""),s='<style class="gin-custom-colors">            body:not(.gin-inactive) {\n              --colorGinPrimary: '.concat(l,";\n              --colorGinPrimaryHover: ").concat(t.behaviors.ginAccent.shadeColor(l,-10),";\n              --colorGinPrimaryActive: ").concat(t.behaviors.ginAccent.shadeColor(l,-15),";\n              --colorGinPrimaryLight: ").concat(l).concat(r(3.5*a),";\n              --colorGinPrimaryLightHover: ").concat(l).concat(r(4.5*a),";\n              --colorGinPrimaryLightActive: ").concat(l).concat(r(5.5*a),";\n              --colorGinPrimaryLightShadow: ").concat(l).concat(r(10*a),";\n              --colorGinItemHover: ").concat(l).concat(r(1.5*a),";\n            }\n            .form-element--type-select:hover,\n            .form-element--type-select:active,\n            .form-element--type-select:focus {\n              background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 9'%3E%3Cpath fill='none' stroke-width='1.5' d='M1 1L7 7L13 1' stroke='%23").concat(f,"'/%3E%3C/svg%3E%0A\");\n            }\n            </style>");n("body").append(s)}}},clearAccentColor:function(){n(".gin-custom-colors").remove()},shadeColor:function(n,t){var e=parseInt(n.replace("#",""),16),o=r(2.55*t),c=(e>>16)+o,i=(255&e>>8)+o,u=(255&e)+o;return"#".concat((16777216+65536*(255>c?1>c?0:c:255)+256*(255>i?1>i?0:i:255)+(255>u?1>u?0:u:255)).toString(16).slice(1))},setFocusColor:function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,c=null==r?e.gin.preset_focus_color:r,i=null==o?e.gin.focus_color:o;if(t.behaviors.ginAccent.clearFocusColor(),"gin"!==c){var u;switch(c){default:case"claro":u="#26a769";break;case"green":u="#08a390";break;case"orange":u="#ec7c57";break;case"dark":u="#5c5a67";break;case"accent":u="var(--colorGinPrimary)";break;case"custom":u=i}n("body").css("--colorGinFocus",u)}},clearFocusColor:function(){n("body").css("--colorGinFocus","")}}}(jQuery,Drupal,drupalSettings)},function(){}]);