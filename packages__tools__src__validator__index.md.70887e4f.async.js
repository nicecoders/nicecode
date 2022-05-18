(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{"6eSL":function(e,t,l){"use strict";l.r(t);var n=l("q1tI"),a=l.n(n),r=l("dEAq"),c=l("M/Q6"),u=l("H1Ra"),m=l("dMo/"),d=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"\u5e38\u89c1\u6b63\u5219validator"},a.a.createElement(r["AnchorLink"],{to:"#\u5e38\u89c1\u6b63\u5219validator","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5e38\u89c1\u6b63\u5219\uff1avalidator"),a.a.createElement(c["a"],{type:"info"},a.a.createElement("strong",null,"\u5e38\u89c1\u6b63\u5219")),a.a.createElement("h3",{id:"\u4e3e\u4e2a-"},a.a.createElement(r["AnchorLink"],{to:"#\u4e3e\u4e2a-","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4e3e\u4e2a \ud83c\udf30"),a.a.createElement(u["a"],{code:"import { validator } from '@nicecode/tools';\n\nlet specStrReg = validator('specStr');",lang:"js"}),a.a.createElement("h2",{id:"api"},a.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"API"),a.a.createElement(m["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u65b9\u6cd5"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u5b57\u7b26\u4e32\u6821\u9a8c"),a.a.createElement("td",null,"RegExp"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"phone"),a.a.createElement("td",null,"\u7535\u8bdd\u53f7\u7801"),a.a.createElement("td",null,"RegExp"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"mobile"),a.a.createElement("td",null,"\u624b\u673a\u53f7\u7801"),a.a.createElement("td",null,"RegExp"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"url"),a.a.createElement("td",null,"\u94fe\u63a5"),a.a.createElement("td",null,"RegExp"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"password"),a.a.createElement("td",null,"\u5bc6\u7801\uff08\u6570\u5b57\u3001\u5b57\u6bcd\u3001\u7b26\u53f7\u4e24\u79cd\u53ca\u4ee5\u4e0a\uff09"),a.a.createElement("td",null,"RegExp"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"idCard"),a.a.createElement("td",null,"\u8eab\u4efd\u8bc1\u53f7"),a.a.createElement("td",null,"RegExp"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"mac"),a.a.createElement("td",null,"mac \u5730\u5740"),a.a.createElement("td",null,"RegExp"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"noChars"),a.a.createElement("td",null,"\u5b57\u7b26\u4e32"),a.a.createElement("td",null,"RegExp"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"postCode"),a.a.createElement("td",null,"\u90ae\u653f\u7f16\u7801"),a.a.createElement("td",null,"RegExp"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"zh"),a.a.createElement("td",null,"\u4e2d\u6587"),a.a.createElement("td",null,"RegExp"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"ip"),a.a.createElement("td",null,"ip \u5730\u5740"),a.a.createElement("td",null,"RegExp"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"specStr"),a.a.createElement("td",null,"\u7279\u6b8a\u5b57\u7b26\u6821\u9a8c"),a.a.createElement("td",null,"RegExp"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"ipv4"),a.a.createElement("td",null,"ipv4 \u7f51\u7edc\u6821\u9a8c"),a.a.createElement("td",null,"RegExp"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"int"),a.a.createElement("td",null,"\u6574\u6570\u6821\u9a8c"),a.a.createElement("td",null,"RegExp"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"float"),a.a.createElement("td",null,"\u5c0f\u6570\u6821\u9a8c"),a.a.createElement("td",null,"RegExp"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"wechat"),a.a.createElement("td",null,"\u5fae\u4fe1\u53f7\u6821\u9a8c"),a.a.createElement("td",null,"RegExp"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"carNum"),a.a.createElement("td",null,"\u8f66\u724c\u53f7\u6821\u9a8c"),a.a.createElement("td",null,"RegExp"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"alphabet"),a.a.createElement("td",null,"\u5b57\u6bcd\u6821\u9a8c"),a.a.createElement("td",null,"RegExp"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"fileName"),a.a.createElement("td",null,"\u6587\u4ef6\u540d\u6821\u9a8c"),a.a.createElement("td",null,"function(type) => void"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"color16"),a.a.createElement("td",null,"16 \u8fdb\u5236\u989c\u8272\u7b26"),a.a.createElement("td",null,"RegExp"),a.a.createElement("td",null,"-"))))))}));t["default"]=e=>{var t=a.a.useContext(r["context"]),l=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(d,{demos:l})}},"M/Q6":function(e,t,l){"use strict";var n=l("q1tI"),a=l.n(n);l("x8cr");function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},r.apply(this,arguments)}t["a"]=function(e){return a.a.createElement("div",r({className:"__dumi-default-alert"},e))}},WpQk:function(e,t,l){},"dMo/":function(e,t,l){"use strict";var n=l("q1tI"),a=l.n(n),r=l("hKI/"),c=l.n(r);l("WpQk");function u(e,t){return i(e)||o(e,t)||d(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return E(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?E(e,t):void 0}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function o(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,r=[],c=!0,u=!1;try{for(l=l.call(e);!(c=(n=l.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(m){u=!0,a=m}finally{try{c||null==l["return"]||l["return"]()}finally{if(u)throw a}}return r}}function i(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(n["useRef"])(),r=Object(n["useState"])(!1),m=u(r,2),d=m[0],E=m[1],o=Object(n["useState"])(!1),i=u(o,2),s=i[0],p=i[1];return Object(n["useEffect"])((function(){var e=l.current,t=c()((function(){E(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":d||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s},x8cr:function(e,t,l){}}]);