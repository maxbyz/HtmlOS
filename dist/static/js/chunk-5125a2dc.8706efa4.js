(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5125a2dc"],{"0016":function(t,e,n){"use strict";var r=n("f3f3");function i(t){if(Array.isArray(t))return t}n("4cc1"),n("511b"),n("ceda"),n("f8d5"),n("34f5"),n("42c7");function o(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done);r=!0)if(n.push(s.value),e&&n.length===e)break}catch(c){i=!0,o=c}finally{try{r||null==a["return"]||a["return"]()}finally{if(i)throw o}}return n}}var s=n("dde1");function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){return i(t)||o(t,e)||Object(s["a"])(t,e)||a()}n("b0c0"),n("2ca0"),n("ac1f"),n("1276"),n("d81d"),n("99af");var u=n("2b0e"),l=n("6642"),f=n("e2fa"),d=n("87e8"),p=n("dde5");e["a"]=u["a"].extend({name:"QIcon",mixins:[d["a"],l["a"],f["a"]],props:{tag:{default:"i"},name:String,color:String,left:Boolean,right:Boolean},computed:{classes:function(){return"q-icon notranslate"+(!0===this.left?" on-left":"")+(!0===this.right?" on-right":"")+(void 0!==this.color?" text-".concat(this.color):"")},type:function(){var t,e=this,n=this.name;if(!n)return{none:!0,cls:this.classes};if(void 0!==this.$q.iconMapFn){var r=this.$q.iconMapFn(n);if(void 0!==r){if(void 0===r.icon)return{cls:r.cls+" "+this.classes,content:void 0!==r.content?r.content:" "};n=r.icon}}if(!0===n.startsWith("M")){var i=n.split("|"),o=c(i,2),s=o[0],a=o[1];return{svg:!0,cls:this.classes,nodes:s.split("&&").map((function(t){var n=t.split("@@"),r=c(n,3),i=r[0],o=r[1],s=r[2];return e.$createElement("path",{attrs:{d:i,transform:s},style:o})})),viewBox:void 0!==a?a:"0 0 24 24"}}if(!0===n.startsWith("img:"))return{img:!0,cls:this.classes,src:n.substring(4)};if(!0===n.startsWith("svguse:")){var u=n.split("|"),l=c(u,2),f=l[0],d=l[1];return{svguse:!0,cls:this.classes,src:f.substring(7),viewBox:void 0!==d?d:"0 0 24 24"}}var p=" ";return/^[l|f]a[s|r|l|b|d]{0,1} /.test(n)||!0===n.startsWith("icon-")?t=n:!0===n.startsWith("bt-")?t="bt ".concat(n):!0===n.startsWith("eva-")?t="eva ".concat(n):!0===/^ion-(md|ios|logo)/.test(n)?t="ionicons ".concat(n):!0===n.startsWith("ion-")?t="ionicons ion-".concat(!0===this.$q.platform.is.ios?"ios":"md").concat(n.substr(3)):!0===n.startsWith("mdi-")?t="mdi ".concat(n):!0===n.startsWith("iconfont ")?t="".concat(n):!0===n.startsWith("ti-")?t="themify-icon ".concat(n):!0===n.startsWith("bi-")?t="bootstrap-icons ".concat(n):(t="material-icons",!0===n.startsWith("o_")?(n=n.substring(2),t+="-outlined"):!0===n.startsWith("r_")?(n=n.substring(2),t+="-round"):!0===n.startsWith("s_")&&(n=n.substring(2),t+="-sharp"),p=n),{cls:t+" "+this.classes,content:p}}},render:function(t){var e={class:this.type.cls,style:this.sizeStyle,on:Object(r["a"])({},this.qListeners),attrs:{"aria-hidden":"true",role:"presentation"}};return!0===this.type.none?t(this.tag,e,Object(p["c"])(this,"default")):!0===this.type.img?(e.attrs.src=this.type.src,t("img",e)):!0===this.type.svg?(e.attrs.focusable="false",e.attrs.viewBox=this.type.viewBox,t("svg",e,Object(p["a"])(this.type.nodes,this,"default"))):!0===this.type.svguse?(e.attrs.focusable="false",e.attrs.viewBox=this.type.viewBox,t("svg",e,[t("use",{attrs:{"xlink:href":this.type.src}}),Object(p["a"])(this.type.nodes,this,"default")])):t(this.tag,e,Object(p["a"])([this.type.content],this,"default"))}})},1003:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}t.exports=r,t.exports["default"]=t.exports,t.exports.__esModule=!0},2266:function(t,e,n){var r=n("825a"),i=n("e95a"),o=n("50c4"),s=n("0366"),a=n("35a1"),c=n("2a62"),u=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var l,f,d,p,v,h,g,y=n&&n.that,b=!(!n||!n.AS_ENTRIES),m=!(!n||!n.IS_ITERATOR),x=!(!n||!n.INTERRUPTED),w=s(e,y,1+b+x),S=function(t){return l&&c(l),new u(!0,t)},E=function(t){return b?(r(t),x?w(t[0],t[1],S):w(t[0],t[1])):x?w(t,S):w(t)};if(m)l=t;else{if(f=a(t),"function"!=typeof f)throw TypeError("Target is not iterable");if(i(f)){for(d=0,p=o(t.length);p>d;d++)if(v=E(t[d]),v&&v instanceof u)return v;return new u(!1)}l=f.call(t)}h=l.next;while(!(g=h.call(l)).done){try{v=E(g.value)}catch(k){throw c(l),k}if("object"==typeof v&&v&&v instanceof u)return v}return new u(!1)}},"2a62":function(t,e,n){var r=n("825a");t.exports=function(t){var e=t["return"];if(void 0!==e)return r(e.call(t)).value}},"30ca":function(t,e,n){"use strict";var r=n("7a12").default,i=n("5757").default,o=n("1003").default,s=n("df34").default;n("4d63"),n("ac1f"),n("25f0"),n("498a"),n("1276"),n("5319"),n("b0c0"),n("d3b7"),n("ddb0"),n("6062"),n("3ca3"),n("99af"),n("c7cd");var a=n("fecc").default,c=/<!--(((?!-->)[\s\S\r\n])*)-->/,u=/^\s?#{1,6}\s+(.*)/,l=/!\[(.*?)\]\((.*?)\)/,f=/\[([^\]]*)\]\(\s*(((?!http:\/\/)(?!https:\/\/)[^)\s]*)*)\s*\)/,d=function(t){var e=new RegExp(u,"m");return e.test(t)?RegExp.$1.trim():void 0},p=function(t){if(!t)return{};var e=t.split("\n")[0].split(" ")[0].split(":"),n=e[0].trim(),r=t.substr(n.length+1).trim();return{key:n,value:r}},v=function(t){if(t){var e=new RegExp(c,"gm"),n=new RegExp(l,"gm");if(t=t.replace(e,""),n.test(t)){var r=RegExp.$1,i=RegExp.$2;return{alt:r.trim(),url:i.trim()}}}},h=function(t){var e=new RegExp(c,"gm"),n=t["more"];return n&&(n=n.replace(e,"")),delete t["more"],n},g=function t(e){s(this,t);var n=new RegExp(c,"gm"),r={};while(n.test(e)){var i=RegExp.lastMatch,o=n.lastIndex,a=p(RegExp.$1.trim());switch(a.key){case"more":a.value=e.substr(0,o);break;case"iframe":e=e.substr(0,o-i.length)+a.value+e.substr(o);break;default:break}r[a.key]=a.value}for(var u in this.content=e,this.title=d(e),this.cover=v(e),this.excerpt=h(r),r){var l=r[u];void 0!==l&&null!==l&&""!==l.trim()&&(this[u]=l)}},y=function(){function t(e){var n,r;if(s(this,t),e&&(this.file=e.file,this.path=e.file.substr(0,e.file.lastIndexOf("/")),this.name=e.file.substr(e.file.lastIndexOf("/")+1),this.size=e.size,this.title=e.title,this.created=new Date(e.created),this.updated=new Date(e.updated),this.cover=e.cover,this.excerpt=e.excerpt,this.categories=null===(n=e.categories)||void 0===n?void 0:n.split(","),this.tags=new Set(null===(r=e.tags)||void 0===r?void 0:r.split(",").concat(this.path.split("/"))).values(),!v(this.excerpt)&&this.cover)){var i,o,a="!["+(null===(i=this.cover)||void 0===i?void 0:i.alt)+"]("+(null===(o=this.cover)||void 0===o?void 0:o.url)+")\n";this.excerpt=a+this.excerpt}}return o(t,[{key:"fetchContent",value:function(t,e){var n=this;fetch(this.file).then((function(t){return t.text()})).then((function(e){if(t){var r=new g(e);t(e,n.fixed(r.content))}})).catch((function(t){return e(t)}))}},{key:"fixed",value:function(t){if(!t)return"";var e=new RegExp(c,"gm");if(t=t.replace(e,""),this.title===d(t)){var n=new RegExp(u,"m");t=t.replace(n,"")}var r=(this.path+"/").replace(/\/\//gim,"/"),i=new RegExp(f,"gim");return t.replace(i,"[$1]("+r+"$2)")}}]),t}(),b=function(){function t(){s(this,t)}return o(t,null,[{key:"load",value:function(){var t=[];if(a.blogs){var e;a.blogs.sort((function(t,e){return new Date(e.created).getTime()-new Date(t.created).getTime()}));var n,i=r(null!==(e=a.blogs)&&void 0!==e?e:[]);try{for(i.s();!(n=i.n()).done;){var o=n.value;t.push(new y(o))}}catch(s){i.e(s)}finally{i.f()}}return t}},{key:"findByName",value:function(e){var n,i=r(t.blogs);try{for(i.s();!(n=i.n()).done;){var o=n.value;if(o.name===e)return o}}catch(s){i.e(s)}finally{i.f()}}}]),t}();i(b,"blogs",b.load()),t.exports={Markdown:g,Blog:y,BlogManager:b}},5757:function(t,e){function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}t.exports=n,t.exports["default"]=t.exports,t.exports.__esModule=!0},6062:function(t,e,n){"use strict";var r=n("6d61"),i=n("6566");t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,e,n){"use strict";var r=n("9bf2").f,i=n("7c73"),o=n("e2cc"),s=n("0366"),a=n("19aa"),c=n("2266"),u=n("7dd0"),l=n("2626"),f=n("83ab"),d=n("f183").fastKey,p=n("69f3"),v=p.set,h=p.getterFor;t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,r){a(t,l,e),v(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),f||(t.size=0),void 0!=r&&c(r,t[u],{that:t,AS_ENTRIES:n})})),p=h(e),g=function(t,e,n){var r,i,o=p(t),s=y(t,e);return s?s.value=n:(o.last=s={index:i=d(e,!0),key:e,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=s),r&&(r.next=s),f?o.size++:t.size++,"F"!==i&&(o.index[i]=s)),t},y=function(t,e){var n,r=p(t),i=d(e);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==e)return n};return o(l.prototype,{clear:function(){var t=this,e=p(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,f?e.size=0:t.size=0},delete:function(t){var e=this,n=p(e),r=y(e,t);if(r){var i=r.next,o=r.previous;delete n.index[r.index],r.removed=!0,o&&(o.next=i),i&&(i.previous=o),n.first==r&&(n.first=i),n.last==r&&(n.last=o),f?n.size--:e.size--}return!!r},forEach:function(t){var e,n=p(this),r=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),o(l.prototype,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),f&&r(l.prototype,"size",{get:function(){return p(this).size}}),l},setStrong:function(t,e,n){var r=e+" Iterator",i=h(e),o=h(r);u(t,e,(function(t,e){v(this,{type:r,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},6642:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return i}));var r={xs:18,sm:24,md:32,lg:38,xl:46};function i(t){return{props:{size:String},computed:{sizeStyle:function(){if(void 0!==this.size)return{fontSize:this.size in t?"".concat(t[this.size],"px"):this.size}}}}}e["a"]=i(r)},"6abd":function(t,e,n){n("e855"),n("ceda"),n("e9d0"),n("dbcf"),n("34f5");var r=n("e6f9");function i(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}t.exports=i,t.exports["default"]=t.exports,t.exports.__esModule=!0},"6d61":function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("94ca"),s=n("6eeb"),a=n("f183"),c=n("2266"),u=n("19aa"),l=n("861d"),f=n("d039"),d=n("1c7e"),p=n("d44e"),v=n("7156");t.exports=function(t,e,n){var h=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),y=h?"set":"add",b=i[t],m=b&&b.prototype,x=b,w={},S=function(t){var e=m[t];s(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})},E=o(t,"function"!=typeof b||!(g||m.forEach&&!f((function(){(new b).entries().next()}))));if(E)x=n.getConstructor(e,t,h,y),a.REQUIRED=!0;else if(o(t,!0)){var k=new x,_=k[y](g?{}:-0,1)!=k,T=f((function(){k.has(1)})),O=d((function(t){new b(t)})),j=!g&&f((function(){var t=new b,e=5;while(e--)t[y](e,e);return!t.has(-0)}));O||(x=e((function(e,n){u(e,x,t);var r=v(new b,e,x);return void 0!=n&&c(n,r[y],{that:r,AS_ENTRIES:h}),r})),x.prototype=m,m.constructor=x),(T||j)&&(S("delete"),S("has"),h&&S("get")),(j||_)&&S(y),g&&m.clear&&delete m.clear}return w[t]=x,r({global:!0,forced:x!=b},w),p(x,t),g||n.setStrong(x,t,h),x}},"714f":function(t,e,n){"use strict";n("99af"),n("a434"),n("159b"),n("caad");var r=n("f303"),i=n("d882"),o=n("d728"),s=n("0967"),a=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,r=!1;return function(){return!1===r&&(r=!0,setTimeout((function(){r=!1}),n),e=t.apply(this,arguments)),e}},c=n("81e7");function u(t,e,n,o){!0===n.modifiers.stop&&Object(i["i"])(t);var s=n.modifiers.color,a=n.modifiers.center;a=!0===a||!0===o;var c=document.createElement("span"),u=document.createElement("span"),l=Object(i["g"])(t),f=e.getBoundingClientRect(),d=f.left,p=f.top,v=f.width,h=f.height,g=Math.sqrt(v*v+h*h),y=g/2,b="".concat((v-g)/2,"px"),m=a?b:"".concat(l.left-d-y,"px"),x="".concat((h-g)/2,"px"),w=a?x:"".concat(l.top-p-y,"px");u.className="q-ripple__inner",Object(r["b"])(u,{height:"".concat(g,"px"),width:"".concat(g,"px"),transform:"translate3d(".concat(m,",").concat(w,",0) scale3d(.2,.2,1)"),opacity:0}),c.className="q-ripple".concat(s?" text-"+s:""),c.setAttribute("dir","ltr"),c.appendChild(u),e.appendChild(c);var S=function(){c.remove(),clearTimeout(E)};n.abort.push(S);var E=setTimeout((function(){u.classList.add("q-ripple__inner--enter"),u.style.transform="translate3d(".concat(b,",").concat(x,",0) scale3d(1,1,1)"),u.style.opacity=.2,E=setTimeout((function(){u.classList.remove("q-ripple__inner--enter"),u.classList.add("q-ripple__inner--leave"),u.style.opacity=0,E=setTimeout((function(){c.remove(),n.abort.splice(n.abort.indexOf(S),1)}),275)}),250)}),50)}function l(t,e){var n=e.modifiers,r=e.value,i=e.arg,o=Object.assign({},c["a"].config.ripple,n,r);t.modifiers={early:!0===o.early,stop:!0===o.stop,center:!0===o.center,color:o.color||i,keyCodes:[].concat(o.keyCodes||13)}}function f(t){var e=t.__qripple;void 0!==e&&(e.abort.forEach((function(t){t()})),Object(i["b"])(e,"main"),delete t._qripple)}e["a"]={name:"ripple",inserted:function(t,e){void 0!==t.__qripple&&(f(t),t.__qripple_destroyed=!0);var n={enabled:!1!==e.value,modifiers:{},abort:[],start:function(e){!0===n.enabled&&!0!==e.qSkipRipple&&(!0!==s["a"].is.ie||e.clientX>=0)&&(!0===n.modifiers.early?!0===["mousedown","touchstart"].includes(e.type):"click"===e.type)&&u(e,t,n,!0===e.qKeyEvent)},keystart:a((function(e){!0===n.enabled&&!0!==e.qSkipRipple&&!0===Object(o["a"])(e,n.modifiers.keyCodes)&&e.type==="key".concat(!0===n.modifiers.early?"down":"up")&&u(e,t,n,!0)}),300)};l(n,e),t.__qripple=n,Object(i["a"])(n,"main",[[t,"mousedown","start","passive"],[t,"touchstart","start","passive"],[t,"click","start","passive"],[t,"keydown","keystart","passive"],[t,"keyup","keystart","passive"]])},update:function(t,e){var n=t.__qripple;void 0!==n&&e.oldValue!==e.value&&(n.enabled=!1!==e.value,!0===n.enabled&&Object(e.value)===e.value&&l(n,e))},unbind:function(t){void 0===t.__qripple_destroyed?f(t):delete t.__qripple_destroyed}}},"7a12":function(t,e,n){n("4cc1"),n("511b"),n("ceda"),n("f8d5"),n("34f5"),n("42c7");var r=n("6abd");function i(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=r(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,s=t},f:function(){try{a||null==n["return"]||n["return"]()}finally{if(c)throw s}}}}t.exports=i,t.exports["default"]=t.exports,t.exports.__esModule=!0},"857a":function(t,e,n){var r=n("1d80"),i=/"/g;t.exports=function(t,e,n,o){var s=String(r(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(o).replace(i,"&quot;")+'"'),a+">"+s+"</"+e+">"}},"87e8":function(t,e,n){"use strict";var r=n("0cd3");e["a"]=Object(r["b"])("$listeners","qListeners")},"93dc":function(t,e){t.exports=function(t,e,n){var r;if("function"===typeof t.exports?(r=t.exports.extendOptions,r[e]=t.exports.options[e]):r=t.options,void 0===r[e])r[e]=n;else{var i=r[e];for(var o in n)void 0===i[o]&&(i[o]=n[o])}}},af03:function(t,e,n){var r=n("d039");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b7fa:function(t,e,n){"use strict";e["a"]={props:{dark:{type:Boolean,default:null}},computed:{isDark:function(){return null===this.dark?this.$q.dark.isActive:this.dark}}}},c7cd:function(t,e,n){"use strict";var r=n("23e7"),i=n("857a"),o=n("af03");r({target:"String",proto:!0,forced:o("fixed")},{fixed:function(){return i(this,"tt","","")}})},dde5:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}));n("fb6a"),n("99af");function r(t,e,n){return void 0!==t.$scopedSlots[e]?t.$scopedSlots[e]():n}function i(t,e,n){return void 0!==t.$scopedSlots[e]?t.$scopedSlots[e]().slice():n}function o(t,e,n){return void 0!==e.$scopedSlots[n]?t.concat(e.$scopedSlots[n]()):t}function s(t,e,n){if(void 0===e.$scopedSlots[n])return t;var r=e.$scopedSlots[n]();return void 0!==t?t.concat(r):r}},df34:function(t,e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}t.exports=n,t.exports["default"]=t.exports,t.exports.__esModule=!0},e2fa:function(t,e,n){"use strict";e["a"]={props:{tag:{type:String,default:"div"}}}},e6f9:function(t,e){function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}t.exports=n,t.exports["default"]=t.exports,t.exports.__esModule=!0},f303:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return s}));n("159b"),n("b64b");function r(t){return t===window?window.innerHeight:t.getBoundingClientRect().height}function i(t,e){var n=t.style;Object.keys(e).forEach((function(t){n[t]=e[t]}))}function o(t,e){if(void 0===t||!0===t.contains(e))return!0;for(var n=t.nextElementSibling;null!==n;n=n.nextElementSibling)if(n.contains(e))return!0;return!1}function s(t,e){return!0===t?e===document.documentElement||null===e?document.body:e:document.body}},fecc:function(t,e,n){"use strict";var r=n("7a12").default;n("ac1f"),n("5319"),n("4d63"),n("25f0");var i=JSON.parse('{"blogs":[{"title":"High Performance TiDB","created":"2020-08-11 13:29","updated":"2021-04-13T16:49:37.638Z","size":8495,"file":"/blog/database/tidb/2020.08.11-TiDB.md","cover":{"alt":"architecture","url":"2020.08.11-TiDB-architecture.jpg"},"excerpt":"\\n\\n\\n\\n# High Performance TiDB\\n\\n\\n> [TiDB](https://docs.pingcap.com/zh/tidb/stable) 是 PingCAP 公司自主设计、研发的开源分布式关系型数据库，是一款同时支持在线事务处理与在线分析处理 (Hybrid Transactional and Analytical Processing, HTAP）的融合型分布式数据库产品，具备水平扩容或者缩容、金融级高可用、实时 HTAP、云原生的分布式数据库、兼容 MySQL 5.7 协议和 MySQL 生态等重要特性。目标是为用户提供一站式 OLTP (Online Transactional Processing)、OLAP (Online Analytical Processing)、HTAP 解决方案。TiDB 适合高可用、强一致要求较高、数据规模较大等各种应用场景。\\n\\n","tags":"pingcap"},{"title":"HTTPS 之 ACME","created":"2020-04-08 12:00:00","updated":"2021-04-13T16:56:36.962Z","size":1493,"file":"/blog/devops/2020.08.12-acme.md","cover":{"alt":"","url":"2020.08.12-acme-https.jpg"},"excerpt":"\\n\\n\\n\\n\\n\\n# HTTPS 之 ACME\\n\\n![](2020.08.12-acme-https.jpg)\\n\\n> acme.sh 是一个 ACME(自动化证书管理环境) 脚本，可以从 letsencrypt 生成免费的证书\\n\\n","tags":"https, ssl, acme, let\'s encrypt"},{"title":"Rust 之 JNI","created":"2020-04-08","updated":"2021-04-14T06:16:42.283Z","size":6308,"file":"/blog/lang/rust/2020.08.12-jni.md","cover":{"alt":"","url":"2020.08.12-jni-struct.drawio.svg"},"excerpt":"\\n\\n\\n\\n# Rust 之 JNI\\n\\n\\n![](2020.08.12-jni-struct.drawio.svg)\\n\\n> 本文介绍了如何用 Rust 实现一个 JNI 动态库 </br>\\n> 本文采用动态注册方式 </br>\\n\\n","categories":"rust","tags":"jni"}]}');Object.defineProperty(Array.prototype,"contains",{value:function(t){var e,n=r(this);try{for(n.s();!(e=n.n()).done;){var i=e.value;if(t===i)return!0}}catch(o){n.e(o)}finally{n.f()}return!1}}),Object.prototype.hasOwnProperty.call(Date.prototype,"format")||Object.defineProperty(Date.prototype,"format",{value:function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours()%12===0?12:this.getHours()%12,"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t}}),e.default=i}}]);