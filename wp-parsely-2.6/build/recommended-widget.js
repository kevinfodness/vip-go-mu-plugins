!function(){"use strict";var e={};function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},e.d=function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var r=window.wp.domReady,n=e.n(r);function i(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}var a=function e(t,r){function n(e,n,a){if("undefined"!=typeof document){"number"==typeof(a=i({},r,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var d in a)a[d]&&(o+="; "+d,!0!==a[d]&&(o+="="+a[d].split(";")[0]));return document.cookie=e+"="+t.write(n,e)+o}}return Object.create({set:n,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],n={},i=0;i<r.length;i++){var a=r[i].split("="),o=a.slice(1).join("=");try{var d=decodeURIComponent(a[0]);if(n[d]=t.read(o,d),e===d)break}catch(e){}}return e?n[e]:n}},remove:function(e,t){n(e,"",i({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,i({},this.attributes,t))},withConverter:function(t){return e(i({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),o=a;function d(e,r){var n,i=r.displayAuthor,a=r.displayDirection,d=r.apiUrl,c=r.imgDisplay,l=r.permalink,u=r.personalized,s=r.widgetId,p=d,m=u?null===(n=function(){var e=o.get("_parsely_visitor");if(e){var t=unescape(e);try{return JSON.parse(t)}catch(e){return}}}())||void 0===n?void 0:n.id:void 0;p+=m?"&uuid=".concat(encodeURIComponent(m)):"&url=".concat(encodeURIComponent(l)),"none"!==c&&e.classList.add("display-thumbnail"),a&&e.classList.add("list-"+a);var f=document.createElement("ul");f.className="parsely-recommended-widget",e.appendChild(f),fetch(p).then((function(e){return e.json()})).then((function(r){for(var n=0,a=Object.entries(r.data);n<a.length;n++){var o=(C=a[n],A=2,function(e){if(Array.isArray(e))return e}(C)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a=[],_n=!0,o=!1;try{for(r=r.call(e);!(_n=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);_n=!0);}catch(e){o=!0,i=e}finally{try{_n||null==r.return||r.return()}finally{if(o)throw i}}return a}}(C,A)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(C,A)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=o[0],l=o[1],u=document.createElement("li");u.className="parsely-recommended-widget-entry",u.setAttribute("id","parsely-recommended-widget-item"+d);var p=document.createElement("div");p.className="parsely-text-wrapper";var m=document.createElement("img");"parsely_thumb"===c?m.setAttribute("src",l.thumb_url_medium):"original"===c&&m.setAttribute("src",l.image_url),u.appendChild(m);var y="?itm_campaign=".concat(s),g="&itm_content=widget_item-"+d,v=l.url+y+"&itmMedium=site_widget&itmSource=parsely_recommended_widget"+g,h=document.createElement("div");h.className="parsely-recommended-widget-title";var b=document.createElement("a");if(b.setAttribute("href",v),b.textContent=l.title,h.appendChild(b),p.appendChild(h),i){var w=document.createElement("div");w.className="parsely-recommended-widget-author",w.textContent=l.author,p.appendChild(w)}u.appendChild(p),f.appendChild(u)}var C,A;e.appendChild(f),e.parentElement.classList.remove("parsely-recommended-widget-hidden")}))}n()((function(){document.querySelectorAll(".parsely-recommended-widget").forEach((function(e){d(e,{displayAuthor:"true"===e.getAttribute("data-parsely-widget-display-author"),displayDirection:e.getAttribute("data-parsely-widget-display-direction"),apiUrl:e.getAttribute("data-parsely-widget-api-url"),imgDisplay:e.getAttribute("data-parsely-widget-img-display"),permalink:e.getAttribute("data-parsely-widget-permalink"),personalized:"true"===e.getAttribute("data-parsely-widget-personalized"),widgetId:e.getAttribute("data-parsely-widget-id")})}))}))}();