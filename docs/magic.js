"use strict";function b(a,b){if(null==a)return{};var d,e,f=c(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(e=0;e<g.length;e++)d=g[e],!(0<=b.indexOf(d))&&Object.prototype.propertyIsEnumerable.call(a,d)&&(f[d]=a[d])}return f}function c(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function d(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function f(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?d(Object(b),!0).forEach(function(c){i(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):d(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function i(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function j(a,b){return o(a)||n(a,b)||l(a,b)||k()}function k(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(a,b){if(a){if("string"==typeof a)return m(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?m(a,b):void 0}}function m(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function n(a,b){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function o(a){if(Array.isArray(a))return a}function q(a){"@babel/helpers - typeof";return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},q(a)}var r=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2)]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=v(a.children[h]),c,d));return a.node=f},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,q=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,q))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==q[A]&&o(c,A,n[A],q[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(u[x]);)s(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(u[z]);)s(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(u[x]=v(u[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(s(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,u[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===q(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||!c.lazy||t(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){o(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),o)),d&&!c&&g(p,c=!0)),b},o=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?o(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?o(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](o,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=s(e.parentNode,e,h,h=u(d(b)),l)};o(a.init)}}}(),s=r.h,e=r.app,h=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===q(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return s(a,{},b);return s(a,b,d)}},t=h("a"),a=h("br"),u=h("circle"),v=h("div"),w=h("footer"),x=h("g"),g=h("h1"),y=h("h2"),z=h("h3"),A=h("h4"),B=h("h5"),C=h("header"),D=h("iframe"),E=h("img"),F=h("input"),G=h("li"),H=h("link"),I=h("main"),J=h("meta"),K=h("nav"),L=h("p"),p=h("path"),M=h("script"),N=h("section"),O=h("span"),P=h("svg"),Q=h("title"),R=h("ul"),S=h("view"),T={description:"THESYSTEM - August \u2013 Oktober 2020 - Yppenplatz 5, 1160 Wien",image:"https://thesystem.at/thesystem_preview_image.jpg",nospy:{show:!1},pageClass:"light",pages:{"/404/":{description:"404 - not found.",title:"404 - not found"}},root:"/",title:"THESYSTEM",url:"/"},U={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},V=function(a){var b,c=a.blog,d=a.link,e=a.month,g=a.url,h=a.year,i=Object.entries(c[h][e]),k=[e];return d?b="".concat(d).concat(e,"/"):k.push(" - ",h),[z(b?ba({to:b},k):k),i.map(function(c){var d=j(c,2),e=d[0],g=d[1];return g.map(function(c){return W(f(f(f({},a),c.state),{},{name:c.name,link:b,day:e}))})})]},W=function(a){return v([A([a.day,"-",a.month,"-",a.year," - ",ba({to:a.name},a.title)]),L(a.description)])},X=function(a){var b,c=a.link,d=a.year,e=a.blog,g=a.url;return c?b="".concat(c).concat(d,"/"):g.endsWith("".concat(d,"/"))&&(b=g),v([y(c?ba({to:b},d):d),Object.entries(e[d]).map(function(c){var d=j(c,2),e=d[0],g=d[1];return V(f(f({},a),{},{month:e,days:g,link:b}))})])},Y=function(a){return v({class:"ExhibitionWrapper"},[v({class:"Dots"},[ia(),ka(a.img)]),v({class:"sections"},[y(a.title),ja(a.presents),N({class:"description"},a.description)])])},Z=function(a,b){return w({class:"Footer"},[z("Commissioned by:"),ba({title:"commissioned by k\xF6r",to:"https://koer.or.at"},[aa({class:"koer",alt:"k\xF6r",src:"https://thesystem.at/social/koer.jpg",width:"255",height:"100"}),aa({class:"koer",alt:"wien kultur",src:"https://thesystem.at/social/wien-kultur.jpg",width:"242",height:"100"})]),z("Support:"),ba({to:"https://usus.wien"},aa({title:"yppshop provided by usus.wien",src:"https://thesystem.at/social/usus.png",width:"80",height:"35"})),ba({to:"https://magic.github.io"},aa({title:"made with a few bits of magic",src:"https://thesystem.at/social/magic.png",width:"40",height:"35"})),b])},$=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],d=a.logo,e=a.menu,f=a.logotext,g=b(a,["logo","menu","logotext"]);return d||e||f?C({class:"Header"},[(d||f)&&ca({root:g.root,theme:g.theme,img:d,text:f}),e&&da({state:g,items:e}),c]):void 0},aa=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="",a.loading=a.loading||"lazy")),E(a)},ba=function(a){var c=a.to,d=a.action,e=void 0===d?pa.go:d,f=b(a,["to","action"]),g=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],h=f.href,i=f.text,j=f.nofollow,k=f.noreferrer,l=b(f,["href","text","nofollow","noreferrer"]);c=c||h||"",l.href=c;var m="/"===c[0]||"#"===c[0];return m?l.onclick=[e,oa.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),t(l,[i,g])},ca=function(a){var c=a.img,d=a.text,e=b(a,["img","text"]);return ba({to:e.root,class:"Logo"},[c&&aa(c),d&&O(d)])},da=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a["class"],c=void 0===b?"Menu":b,d=a.collapse,e=a.items,g=a.state,h=g.url,i=g.hash,j=g.root;return i&&!h.endsWith(i)&&(h+="#".concat(i)),K({className:c},R(e.map(function(a){return ea(f(f({},a),{},{url:h,root:j,collapse:void 0===d||d}))})))},ea=function(a){var c=a.text,d=a.items,e=void 0===d?[]:d,g=a.url,h=a.root,i=a.parentTo,j=void 0===i?void 0:i,k=a.collapse,l=b(a,["text","items","url","root","parentTo","collapse"]),m={class:{}},n=l.to;h&&n.startsWith("/")&&(n=n.substr(1));var o=l.to[0];j&&("-"===o||"#"===o)&&(n=j+n);var p=n.startsWith(h);h&&("/"===o||"-"===o||"#"===o)&&!p&&(n=h+n),l.to=n.replace(/\/\//g,"/"),l.to===g&&(m["class"].active=!0);var q=[],r=g.startsWith(l.to)||!k;return r&&e.length&&(q=R(e.map(function(a){return ea(f({parentTo:l.to,url:g,root:h,collapse:k},a))}))),G(m,[l.to?fa(l,c):O(l,c),q])},fa=function(a,b){return ba(a,b)},ga=function(a){var b=a.nospy,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=c.title,h=void 0===g?"Privacy Notice":g,i=c.content,j=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,k=c.buttonText,l=void 0===k?"Awesome!":k;return f?v({class:"NoSpy"},[v({class:"Container"},[h&&z(h),j&&L(j),F({onclick:pa.nospy.toggle,value:l,type:"button"})])]):v({class:"NoSpy"},P({class:"icon",onclick:pa.nospy.toggle,width:"25",height:"25",viewBox:"0 0 512 512"},[x([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),u({cx:"192",cy:"128",r:"32"}),u({cx:"128",cy:"256",r:"32"}),u({cx:"288",cy:"384",r:"32"}),u({cx:"272",cy:"272",r:"16"}),u({cx:"400",cy:"336",r:"16"}),u({cx:"176",cy:"368",r:"16"})])]))},ha=function(a,b){var c=a.page,d=a.state,e={id:"Magic",class:d.pageClass};return I(e,v({class:{Wrapper:!0}},[$(d),v({class:"Page",id:"page"},c(d)),Z(d),b]))},ia=function(){return v({class:"Polkadot"})},ja=function(a){a.artists&&!Array.isArray(a.artists)&&(a.artists=[a.artists]);var b=a.artists,c=void 0===b?[]:b,d=a.collective,e=a.date,f=a.type;return N({class:"presents"},[0<c.length&&z(c.map(function(b){return b.to?ba(b):b})),d&&A(d.to?ba(d):d),f&&L(f),e&&Array.isArray(e)?e.map(function(a){return L(a)}):L(e)])},ka=function(a){return aa(f({class:"PreviewImage"},a))},la=function(b){var c=b.subTitle;return g({class:"Slogan"},[L(["THE",a(),"SYSTEM"]),L(c)])},ma=function(){return v({class:"VideoContainer"},[na({src:"OviYhQ_Lo2Y"})])},na=function(a,c){"object"!==q(a)&&(a={src:a}),a.src||"string"!=typeof c||(a.src=c);var d=a,e=d.src,g=d.width,h=d.height,i=d["class"],j=void 0===i?"VideoEmbed":i,k=d.style,l=d.host,m=b(d,["src","width","height","class","style","host"]);if(e){j.includes("VideoEmbed")||(j="VideoEmbed ".concat(j)),parseInt(e)===parseInt(e)?e="https://player.vimeo.com/video/".concat(e):!e.startsWith("http")&&(e="https://www.youtube-nocookie.com/embed/".concat(e)),h&&(k=k||{},k.height=h),g&&(k=k||{},k.width=g);var n={class:j};return k&&(n.style=k),v(n,D(f(f({frameborder:0,allow:"encrypted-media",allowfullscreen:""},m),{},{src:e})))}},oa={preventDefault:function preventDefault(a){return a.preventDefault(),a}},pa={go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=j(d,2),g=e[0],h=e[1],i=void 0===h?"":h;if(g===a.url&&i===a.hash)return i&&(window.location.hash=i),a;var k=window,l=k.scrollY,m=a.pages&&a.pages[g]&&a.pages[g].title;if(m&&(document.title=a.title=m),g===a.url)window.location.hash=i;else if(!i){var n=document.getElementsByTagName("html"),o=j(n,1),p=o[0],q=p.style.scrollBehavior;p.style.scrollBehavior="auto",window.scrollTo({top:0,behavior:"smooth"}),p.style.scrollBehavior=q}return window.history.pushState({url:g,hash:i,scrollY:l},a.title,c),f(f({},a),{},{url:g,hash:i,prev:a.url})},nospy:{toggle:function toggle(a){return a.nospy.show=!a.nospy.show,f({},a)}},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var g=0;return b.state&&(d=b.state.url,e=b.state.hash,g=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:g,behavior:"smooth"}),f(f({},a),{},{url:d,hash:e})}},qa={"/":function _(b){return[v({class:"PageHeader"},[ma(b),la({subTitle:"Yppenplatz 5"})]),v({class:"month-title"},"September 2020"),Y({title:"Systeme & Menschen",img:{src:"/thesystem-stizz-systemeundmenschen.jpg",height:1200,width:900},presents:{artists:{text:"Stefan St\xFCrzer",to:"https://absturz.info"},collective:"Villa Schapira",date:["Exhibition","1.09. \u2013 7.09.","Opening","1.09. 19:30"]},description:["Wir leben in einer Zeit in der Menschen"," viel zu oft f\xFCr die Erhaltung von Systemen arbeiten."," Systeme die von Menschen erfunden wurden!"," Systeme sollten eigentlich f\xFCr die Menschen existieren und nicht umgekehrt."," Eine philosophische Auseinandersetzung."]}),Y({title:"\"Work\"",img:{src:"/thesystem-zirkusmops-work.jpg",height:1200,width:1028},presents:{artists:[[L(ba({text:"Marco Otoya",to:"https://culturaespiral.com/marco-otoya/"}))],[L(ba({text:"Adam\xA0Lebesm\xFChlbacher",to:"http://www.mysoundofmusic.at/"}))],[L(ba({text:"Sebastian Schmid",to:"https://zirkusabnormal.at/"}))]],collective:"Villa Schapira",date:["Opening Performance","3.09 19:00","Rauminstallation","3.09 \u2013 7.09"]},description:["Die Routine, die sich wiederholt, die Monotonie, die im Leben und in der Arbeit ","Automatismus generiert, die aber notwendig in unserem Leben ist. Wie kann uns die ","Angst vor einem Risiko und vor einer \xC4nderung paralysieren? Kann die Routine uns in ","ein M\xF6belst\xFCck verwandeln? Ist die Routine etwas positives oder nicht, oder aber ","k\xF6nnten wir die Routine \xE4ndern oder transformieren? Oder besser nicht?",a(),a(),L("Musik: Nyman: Double Concerto For Saxophone & Cello - Mvt.5"),L("John Harle, Julian Lloyd Webber, Michael Nyman: Philharmonia Orchestra")]}),Y({title:"Max Mustermann",img:{src:"/thesystem-noemikiss-maxmustermann.jpg",height:1200,width:842},presents:{artists:{text:"Noemi Kiss",to:"http://www.noemikiss.at/"},collective:"Villa Schapira",date:["Exhibition","09.09. \u2013 13.09.","Opening","09.09. 19:30"]},description:["\"Ez a vil\xE1g olyan vil\xE1g, sokat ig\xE9r, keveset \xE1d\u2026\u201C"," (\"Was f\xFCr eine Welt ist diese Welt, die viel verspricht und wenig h\xE4lt\u2026\u201C)"," Erf\xFCllen, sich bew\xE4hren, durchhalten aber auch sich durchsetzen, n\xFCtzlich, t\xFCchtig, brauchbar, f\xE4hig und bef\xE4higt sein:"," Das ist unsere t\xE4gliche Besch\xE4ftigung. Immer bestehen und nicht versagen zu d\xFCrfen macht m\xFCde."," Im Zwang uns den \xE4u\xDFeren Erwartungen anzupassen hoffen wir darauf, dass es uns besser geht. Wir wollen uns  besser f\xFChlen."," Die Vielfalt um uns herum ist vielversprechend und suggeriert die M\xF6glichkeit der freien Wahl. Doch gibt es \xFCberhaupt diese freie Wahl?"," Die Spezialisten der Macht weisen uns mit ihren Empfehlungen im Labyrinth der \"freien Wahl\" eine einzige Variante als Richtung vor."," Aus deren Angaben und Anleitungen entstehen dann die Richtlinien, Vorschriften, Instruktionen und Verordnungen."]}),Y({title:["fluesterkonus",a(),"inter.aktion"],img:{src:"/thesystem-mariakoller-fluesterkonus.jpg",height:1200,width:800},presents:{artists:"chora malik",collective:{text:"Setzkasten Wien",to:"https://setzkastenwien.at/"},date:["Performance","19.09. 19:00"]},description:["reflexionen isolierter stimmen einer schoenen neuen welt",a()," ganz nah"]}),Y({title:["WILLKOMMEN IN DER",a(),"METZGEREI MOPS!"],img:{src:"/thesystem-zirkusmops-familiemops.jpg",height:640,width:718},presents:{artists:"Familie Mops",collective:{text:"Zirkus Mops",to:"http://www.mysoundofmusic.at/"},date:["Exhibition","22.09. \u2013 26.09.","Opening","22.09. 19:00"]},description:["Unser Traditionshaus produziert feinste Fleisch und Wurstwaren nach eigenen Familienrezepten."," Wir verarbeiten ausschlie\xDFlich Fleisch von seltenen Wildtierarten."," Ob saftiger Beinschinken, gut durchzogenes T-Bone Steak oder feinsten Filetspitz \u2013"," genie\xDFen Sie exklusive Gaumenfreuden bis zum letzten Bissen."," Eine besondere Spezialit\xE4t des Hauses ist unsere ber\xFChmte Lemurenwurst,"," die schon Erzherzog Franz Joseph Karl I. Kaiser von \xD6sterreich zu sch\xE4tzen wusste."," Nur f\xFCr kurze Zeit am Yppenplatz 5."]}),v({class:"month-title"},"Past Events"),Y({title:"System, Struktur & DeFragmentierung",img:{src:"/thesystem-sandkasten-syndikat.jpg",height:1380,width:1080},presents:{artists:[L("System // "),L("Markus Liszt"),L("Struktur // "),L(ba({text:"Miss Bubblebliss aka Stephanie Krawinkler",to:"http://missbubblebliss.at"})),L("DeFragmentierung\xA0// "),L(ba({text:"elet aka. Je.Jesch",to:"https://elet.cc/"}))],collective:{text:"Sandkasten Syndikat",to:"https://www.facebook.com/sandkastensyndikat/"},date:["Exhibition","26.08. \u2013 30.08.","Performances","Opening","26.08. 20:15 \u2013 22:00","Closing","30.08. 20:15 \u2013 22:00"]},description:[L(["Konstruktion, Scan, Reflektion, Verortung und Zerlegung"," von K\xF6rpern und Objekten im Raum"," an analogen und digitalen Schnittstellen."]),L("Zahlenrhythmik mit Seife gespiegelt und in Licht zerlegt.\xA0")]}),Y({title:"The Wound",img:{src:"/thesystem-selinanowak-thewound.jpg",height:1200,width:1600},presents:{artists:"Selina Nowak",collective:{text:"Zirkus Mops",to:"http://www.mysoundofmusic.at/"},type:"Installation",date:["Exhibition","19.08. \u2013 23.08.","Opening","19.08. 19:00"]},description:[L("A wormhole into the future"),L("An echo in the empty space"),L("A shrine to meditate over what's left"),L("After the anthropocene")]}),Y({title:"HeartBreakHotel",img:{src:"/thesystem-dagmarrohm-heartbreakhotel.jpg",height:1020,width:1013},presents:{artists:{text:"Dagmar Rohm",to:"http://www.dagmarrohm.at/"},collective:"Dachsbau",date:["Exhibition","14.08. \u2013 17.08.","Opening","14.08. 18:00"]},description:["Series framing my work for de-colonialism. ","Colour is no available fund for distinguishing anything. ","What is prefered tells a story about the individual person and nothing else. ","Looking after historical perspectives is looking for unfairness. ","This work examines the beginning of Rock\u2018n Roll, which came out of the rhythm of Black music. ","It\u2018s Elvis, who won a \u201Egame\u201C, because he had the right colour of skin. ","The hidden winner could have been the black people, who still are persecuted by lot\u2018s of whites"," thinking, they\u2018ve got to fight a war, full of hostility."]}),Y({title:"The. System: garden",img:{src:"/thesystem-warblaydr-garden.png",height:1362,width:1200},presents:{artists:[L(ba({text:"WARBLAYDR",to:"https://soundcloud.com/ibisum/tracks"})),L(O(" & ")),L(ba({text:"meks",to:"https://soundcloud.com/user-945933947"}))],collective:"Villa Schapira",type:"Live performance",date:"11.08. 18:00 \u2013 20:30"},description:["cultivating heritage computing for the kids of the future.",ba({text:"live recordings on soundcloud",to:"https://soundcloud.com/ibisum/tracks"})]}),Y({title:"No hair\u2026",img:{src:"/thesystem-litto-thebody.jpg",height:900,width:1200},presents:{artists:[L(ba({text:"Ms. Litto",to:"https://litto.work"})),L("presents"),L(ba({to:"https://www.instagram.com/hr.litto/",text:"Hr. Litto"}))],collective:"Villa Schapira",date:"11.08. 21:00 \u2013 22:00"},description:["An AI, sourced from a drawing, tells us what it learned"," about material properties of the human body."]}),v({class:"manifest"},[y("Manifest"),z(["We are independent artists collectively using technology to transform our world. ","Our system is transformation between universes, physical and virtual. ","We don't need space, time is irrelevant, objects stay as useful as the user. "]),B("Involved collectives: Dachsbau, Sandkasten Syndikat, Setzkasten Wien, Zirkus Mops, Villa Schapira "),B([L(["Concept: ",ba({text:"Litto / Daniela Weiss",to:"https://litto.work"})]),L(["Development: ",ba({text:"Jascha Ehrenreich",to:"https://jaeh.at"})]),L(["Text: ",ba({text:"WARBLAYDR",to:"https://soundcloud.com/ibisum"})])])])]},"/404/":function _(){return v("404 - not found.")}};e({init:f(f({},T),{},{url:window.location.pathname,hash:window.location.hash.substr(1)}),subscriptions:function subscriptions(){return[[U.listenPopState,pa.pop]]},view:function(a){var b=qa[a.url]?a.url:"/404/",c=qa[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.url=b,ha({page:c,state:a},ga(a))},node:document.getElementById("Magic")});