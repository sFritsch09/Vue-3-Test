(function(e){function t(t){for(var o,c,u=t[0],i=t[1],s=t[2],l=0,h=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&h.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(h.length)h.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},c={app:0},r={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-12be4a4f":"3bfea100","chunk-21ae571c":"3d538fa6","chunk-36de9728":"0929219c","chunk-728903e7":"0cef84ac","chunk-ad38d890":"f8a88a6f"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-21ae571c":1,"chunk-36de9728":1,"chunk-728903e7":1,"chunk-ad38d890":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-12be4a4f":"31d6cfe0","chunk-21ae571c":"e6b5966d","chunk-36de9728":"214cc349","chunk-728903e7":"e3c585ee","chunk-ad38d890":"a6956f4d"}[e]+".css",r=i.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===r))return t()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){s=h[u],l=s.getAttribute("data-href");if(l===o||l===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete c[e],d.parentNode.removeChild(d),n(a)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){c[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var h=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",h.name="ChunkLoadError",h.type=o,h.request=c,n[1](h)}r[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Vue-3-Test/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var h=0;h<s.length;h++)t(s[h]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2424:function(e,t,n){"use strict";n("d1f8")},"35a2":function(e,t,n){"use strict";n("8c42")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c={class:"nav-wrapper"},r={id:"nav"},a=Object(o["h"])("Home"),u=Object(o["h"])(" | "),i=Object(o["h"])("Pokemon"),s=Object(o["h"])(" | "),l=Object(o["h"])("Composition App"),h=Object(o["h"])(" | "),d=Object(o["h"])("Microblog"),f=Object(o["h"])(" | "),m=Object(o["h"])("PhotoApp"),p={class:"nav-switch"};function b(e,t,n,b,j,O){var g=Object(o["B"])("router-link"),v=Object(o["B"])("dark-mode-switch"),k=Object(o["B"])("router-view");return Object(o["t"])(),Object(o["e"])(o["a"],null,[Object(o["f"])("div",c,[Object(o["f"])("div",r,[Object(o["i"])(g,{to:"/"},{default:Object(o["G"])((function(){return[a]})),_:1}),u,Object(o["i"])(g,{to:"/pokemon"},{default:Object(o["G"])((function(){return[i]})),_:1}),s,Object(o["i"])(g,{to:"/composition"},{default:Object(o["G"])((function(){return[l]})),_:1}),h,Object(o["i"])(g,{to:"/microblog"},{default:Object(o["G"])((function(){return[d]})),_:1}),f,Object(o["i"])(g,{to:"/photoapp"},{default:Object(o["G"])((function(){return[m]})),_:1}),Object(o["f"])("div",p,[Object(o["i"])(v,{size:"3em"})])])]),Object(o["i"])(k)],64)}var j=function(e){return Object(o["w"])("data-v-3282ba9a"),e=e(),Object(o["u"])(),e},O=j((function(){return Object(o["f"])("span",null,"🌙",-1)})),g=j((function(){return Object(o["f"])("span",null,"☀️",-1)}));function v(e,t,n,c,r,a){var u=this;return Object(o["t"])(),Object(o["e"])(o["a"],null,[Object(o["f"])("input",{onChange:t[0]||(t[0]=function(e){return u.$store.dispatch("darkMode/toggleTheme")}),id:"checkbox",type:"checkbox",class:"switch-checkbox"},null,32),Object(o["f"])("label",{for:"checkbox",class:"switch-label",style:Object(o["p"])(a.cssVars)},[O,g,Object(o["f"])("div",{class:Object(o["o"])(["switch-toggle",{"switch-toggle-checked":"dark-theme"===this.$store.state.darkMode.userTheme}])},null,2)],4)],64)}var k={props:{size:{type:String,default:"4em"}},computed:{cssVars:function(){return{"--size":this.size}}}},w=(n("cc8f"),n("6b0d")),y=n.n(w);const P=y()(k,[["render",v],["__scopeId","data-v-3282ba9a"]]);var T=P,_={components:{DarkModeSwitch:T},mounted:function(){this.$store.dispatch("darkMode/getTheme")}};n("2424");const x=y()(_,[["render",b]]);var S=x,A=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),C=function(e){return Object(o["w"])("data-v-3cccb974"),e=e(),Object(o["u"])(),e},M={class:"container-center"},E={class:"card-wrapper"},I={class:"flex-wrapper"},L=C((function(){return Object(o["f"])("p",null,"Wer sitzt dort so spät, bei Nacht und Wind?",-1)})),z=C((function(){return Object(o["f"])("p",null,"Entwickler Clemens, mit einem Pint.",-1)})),B=C((function(){return Object(o["f"])("p",null,"Man hört ihn seufzen, ziemlich hart -",-1)})),N=C((function(){return Object(o["f"])("p",null,"Sonntag ist's, die Deadline naht",-1)}));function D(e,t,n,c,r,a){var u=Object(o["B"])("dark-mode-switch");return Object(o["t"])(),Object(o["e"])("div",M,[Object(o["f"])("div",E,[Object(o["f"])("div",I,[Object(o["i"])(u)]),L,z,B,N])])}var G={name:"Home",components:{DarkModeSwitch:T}};n("35a2");const H=y()(G,[["render",D],["__scopeId","data-v-3cccb974"]]);var R=H,V=[{path:"/",name:"Home",component:R},{path:"/pokemon",name:"Pokemon",component:function(){return n.e("chunk-21ae571c").then(n.bind(null,"a82c"))}},{path:"/composition",name:"Composition",component:function(){return n.e("chunk-12be4a4f").then(n.bind(null,"c536"))}},{path:"/microblog",name:"Microblog",component:function(){return n.e("chunk-728903e7").then(n.bind(null,"38ba"))}},{path:"/photoapp",name:"PhotoApp",component:function(){return n.e("chunk-36de9728").then(n.bind(null,"88b2"))},children:[{path:"/photoapp/albums/:id",name:"Photos",component:function(){return n.e("chunk-ad38d890").then(n.bind(null,"dbad"))}}]}],$=Object(A["a"])({history:Object(A["b"])("/Vue-3-Test/"),routes:V}),q=$,F=n("5502"),J=n("1da1"),W=(n("96cf"),n("bc3a")),K=n.n(W),U={namespaced:!0,state:function(){return{all:[]}},mutations:{setAlbums:function(e,t){e.all=t}},actions:{fetchAlbums:function(e){return Object(J["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,K.a.get("https://jsonplaceholder.typicode.com/albums");case 2:n=t.sent,e.commit("setAlbums",n.data);case 4:case"end":return t.stop()}}),t)})))()}}},Q={namespaced:!0,state:function(){return{currentAlbumPhotos:[],loading:!1,photoCache:{}}},mutations:{setPhotos:function(e,t){var n=t.photos,o=t.albumId;e.currentAlbumPhotos=n,e.photoCache[o]=n},setLoading:function(e,t){e.loading=t}},actions:{fetchPhotosForAlbum:function(e,t){return Object(J["a"])(regeneratorRuntime.mark((function n(){var o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o=t.id,!e.state.photoCache[o]){n.next=4;break}return e.commit("setPhotos",{photos:e.state.photoCache[o],albumId:o}),n.abrupt("return");case 4:return e.commit("setLoading",!0),n.next=7,K.a.get("https://jsonplaceholder.typicode.com/photos?albumId=".concat(o));case 7:c=n.sent,e.commit("setPhotos",{photos:c.data,albumdId:o}),e.commit("setLoading",!1);case 10:case"end":return n.stop()}}),n)})))()}}},X={namespaced:!0,state:function(){return{userTheme:"light-theme"}},mutations:{setTheme:function(e,t){localStorage.setItem("user-theme",t),e.userTheme=t,document.documentElement.className=t}},actions:{getMediaPreference:function(){var e=window.matchMedia("(prefers-color-scheme: dark)").matches;return e?"dark-theme":"light-theme"},toggleTheme:function(e){var t=localStorage.getItem("user-theme");"light-theme"===t?e.commit("setTheme","dark-theme"):e.commit("setTheme","light-theme")},getTheme:function(e){var t=localStorage.getItem("user-theme");e.commit("setTheme",t)}}},Y=Object(F["a"])({modules:{albums:U,photos:Q,darkMode:X}}),Z=Y;Object(o["c"])(S).use(Z).use(q).mount("#app")},"6e67":function(e,t,n){},"8c42":function(e,t,n){},cc8f:function(e,t,n){"use strict";n("6e67")},d1f8:function(e,t,n){}});
//# sourceMappingURL=app.9805c829.js.map