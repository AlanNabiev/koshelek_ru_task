(function(t){function e(e){for(var r,a,o=e[0],u=e[1],s=e[2],l=0,b=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(b.length)b.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},c={app:0},i=[];function o(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-e936d3ae":"3b78f219"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-e936d3ae":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-e936d3ae":"5d005457"}[t]+".css",c=u.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var s=i[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return e()}var b=document.getElementsByTagName("style");for(o=0;o<b.length;o++){s=b[o],l=s.getAttribute("data-href");if(l===r||l===c)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||c,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(t);var b=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;b.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",b.name="ChunkLoadError",b.type=r,b.request=a,n[1](b)}c[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/koshelek_ru_task/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var b=0;b<s.length;b++)e(s[b]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0a44":function(t,e,n){},2216:function(t,e,n){},2573:function(t,e,n){},"377e":function(t,e,n){},"46c8":function(t,e,n){"use strict";n("2573")},"4ac1":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=["btcusdt","bnbbtc","ethbtc"]},8853:function(t,e,n){},"8b94":function(t,e,n){"use strict";n("377e")},bf43:function(t,e,n){"use strict";n("0a44")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"nav"},c=Object(r["j"])("Home"),i=Object(r["j"])("Manage");function o(t,e){var n=Object(r["D"])("router-link");return Object(r["w"])(),Object(r["h"])("div",a,[Object(r["k"])(n,{to:"/"},{default:Object(r["J"])((function(){return[c]})),_:1}),Object(r["k"])(n,{to:"/settings"},{default:Object(r["J"])((function(){return[i]})),_:1})])}n("f6d3");var u=n("6b0d"),s=n.n(u);const l={},b=s()(l,[["render",o],["__scopeId","data-v-ca59b526"]]);var d=b,f={class:"app-container"},m=Object(r["l"])({setup:function(t){return function(t,e){var n=Object(r["D"])("router-view");return Object(r["w"])(),Object(r["h"])(r["a"],null,[Object(r["k"])(d),Object(r["i"])("div",f,[Object(r["k"])(n,null,{default:Object(r["J"])((function(t){var e=t.Component;return[(Object(r["w"])(),Object(r["f"])(r["b"],null,[(Object(r["w"])(),Object(r["f"])(Object(r["E"])(e)))],1024))]})),_:1})])],64)}}});n("8b94");const p=m;var v=p,h=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),O=n("2909"),j=n("1da1"),g=(n("96cf"),n("4de4"),n("99af"),n("fb6a"),function(t){return Object(r["z"])("data-v-b4c3f7a2"),t=t(),Object(r["x"])(),t}),w=g((function(){return Object(r["i"])("thead",null,[Object(r["i"])("tr",null,[Object(r["i"])("th",null,"Amount"),Object(r["i"])("th",null,"Price"),Object(r["i"])("th",{class:"mobile__hidden"},"Total")])],-1)})),k={class:"mobile__hidden"},y=Object(r["l"])({props:{title:null,ordersList:null},setup:function(t){return function(e,n){return Object(r["w"])(),Object(r["h"])("table",null,[Object(r["i"])("caption",null,Object(r["G"])(t.title),1),w,Object(r["i"])("tbody",null,[(Object(r["w"])(!0),Object(r["h"])(r["a"],null,Object(r["C"])(t.ordersList,(function(t){return Object(r["w"])(),Object(r["h"])("tr",{key:t._id},[Object(r["i"])("td",null,Object(r["G"])(t.amount),1),Object(r["i"])("td",null,Object(r["G"])(t.price),1),Object(r["i"])("td",k,Object(r["G"])(t.total),1)])})),128))])])}}});n("46c8");const F=s()(y,[["__scopeId","data-v-b4c3f7a2"]]);var S=F,_={class:"loader"};function I(t,e){return Object(r["w"])(),Object(r["h"])("div",_,"Loading...")}n("efdf");const x={},N=s()(x,[["render",I],["__scopeId","data-v-667e3550"]]);var D=N,U=n("d77c"),C=n("4ac1"),P={class:"home"},R={key:1},E={class:"home-header"},L={class:"home-container"},A=Object(r["l"])({setup:function(t){var e=Object(U["a"])(),n=e.binanceSdk,a=e.eventbus,c=Object(r["B"])(!1),i=Object(r["B"])(C["a"][0]),o=Object(r["A"])({bids:[],asks:[],lastUpdateId:0});function u(){return s.apply(this,arguments)}function s(){return s=Object(j["a"])(regeneratorRuntime.mark((function t(){var e,r,a,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c.value=!0,t.next=3,n.value.httpService.getOrders(i.value);case 3:e=t.sent,r=e.asks,a=e.bids,u=e.lastUpdateId,o.asks=r,o.bids=a,o.lastUpdateId=u,c.value=!1;case 11:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function l(){n.value.webSocketService.connect(i.value),n.value.webSocketService.$ws.onmessage=function(t){var e=JSON.parse(t.data),r=e.u,a=e.U,c=e.a,i=e.b;if(a<=o.lastUpdateId+1||r>=o.lastUpdateId+1){var u=c.filter((function(t){return 0!=parseFloat(t[1])})),s=i.filter((function(t){return 0!=parseFloat(t[1])})),l=n.value.utils.transformOrders(u),b=n.value.utils.transformOrders(s);o.asks=[].concat(Object(O["a"])(l),Object(O["a"])(o.asks.slice(0,o.asks.length-l.length))),o.bids=[].concat(Object(O["a"])(b),Object(O["a"])(o.bids.slice(0,o.bids.length-b.length)))}}}function b(){n.value.webSocketService.stop()}return l(),u(),a.value.on("update:Symbol",function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i.value=e,b(),l(),u();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Object(r["s"])((function(){a.value.all.clear()})),function(t,e){return Object(r["w"])(),Object(r["h"])("div",P,[c.value?(Object(r["w"])(),Object(r["f"])(D,{key:0,class:"home-loader"})):(Object(r["w"])(),Object(r["h"])("div",R,[Object(r["i"])("h1",E,Object(r["G"])(i.value),1),Object(r["i"])("div",L,[Object(r["k"])(S,{title:"Bid",ordersList:Object(r["H"])(o).bids},null,8,["ordersList"]),Object(r["k"])(S,{title:"Ask",ordersList:Object(r["H"])(o).asks},null,8,["ordersList"])])]))])}}});n("bf43");const B=s()(A,[["__scopeId","data-v-4e75ffd2"]]);var $=B,T=[{path:"/",name:"Home",component:$},{path:"/settings",name:"Settinhs",component:function(){return n.e("chunk-e936d3ae").then(n.bind(null,"26d3"))}}],M=Object(h["a"])({history:Object(h["b"])("/koshelek_ru_task/"),routes:T}),J=M,G=n("1344"),H={install:function(t){t.config.globalProperties.$eventbus=Object(G["a"])()}},W=n("bc3a"),q=n.n(W),z={app:{api:{BINANCE:"https://api.binance.com/api/v3",WS_BINANCE:"wss://stream.binance.com:9443/ws"}}},K=z.app.api.BINANCE,Q=q.a.create({baseURL:K,headers:{"Content-Type":"application/json"}});function V(t,e){return Q({method:"get",url:t,params:e})}var X="/depth";function Y(t){var e={symbol:t.toUpperCase(),limit:500};return V(X,e)}var Z=z.app.api.WS_BINANCE,tt=function(t){return new WebSocket(Z+t)},et=function(t){var e="/".concat(t.toLowerCase(),"@depth");return tt(e)};n("d81d");function nt(t,e){switch(e){case"btcusdt":return new Intl.NumberFormat("ru-RU",{minimumFractionDigits:6,maximumFractionDigits:6}).format(t);case"bnbbtc":return new Intl.NumberFormat("ru-RU",{minimumFractionDigits:3,maximumFractionDigits:3}).format(t);case"ethbtc":return new Intl.NumberFormat("ru-RU",{minimumFractionDigits:4,maximumFractionDigits:4}).format(t);default:return new Intl.NumberFormat("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:6}).format(t)}}function rt(t,e){switch(e){case"btcusdt":return new Intl.NumberFormat("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:3}).format(t);case"bnbbtc":return new Intl.NumberFormat("ru-RU",{minimumFractionDigits:5,maximumFractionDigits:7}).format(t);case"ethbtc":return new Intl.NumberFormat("ru-RU",{minimumFractionDigits:3,maximumFractionDigits:5}).format(t);default:return new Intl.NumberFormat("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:7}).format(t)}}function at(t){return new Intl.NumberFormat("ru-RU",{minimumFractionDigits:4,maximumFractionDigits:4}).format(t)}function ct(t,e){return t.map((function(t){var n=rt(parseFloat(t[0]),e),r=nt(parseFloat(t[1]),e),a=at(parseFloat(t[0])*parseFloat(t[1])),c=Math.random()*parseFloat(t[0])/Math.random(),i={price:n,amount:r,total:a,_id:c};return i}))}var it={install:function(t){t.config.globalProperties.$binanceSdk={httpService:{},webSocketService:{},utils:{}},t.config.globalProperties.$binanceSdk.httpService.getOrders=Object(j["a"])(regeneratorRuntime.mark((function t(){var e,n,r,a,c,i,o,u=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=u.length>0&&void 0!==u[0]?u[0]:"btcusdt",n={asks:[],bids:[],lastUpdateId:0},t.prev=2,t.next=5,Y(e);case 5:r=t.sent,a=r.data,c=a.asks,i=a.bids,o=a.lastUpdateId,n.asks=ct(c,e),n.bids=ct(i,e),n.lastUpdateId=o,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](2),console.log(t.t0);case 15:return t.abrupt("return",n);case 16:case"end":return t.stop()}}),t,null,[[2,12]])}))),t.config.globalProperties.$binanceSdk.webSocketService={connect:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"btcusdt";this.$ws=et(t)},stop:function(){this.$ws.close(1e3)}},t.config.globalProperties.$binanceSdk.utils.transformOrders=ct}},ot={install:function(t){t.use(H),t.use(it)}},ut=Object(r["e"])(v);ut.use(J),ut.use(ot),ut.mount("#app")},d77c:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("7a23");function a(){var t=Object(r["m"])(),e=null===t||void 0===t?void 0:t.appContext.config.globalProperties,n=null===e||void 0===e?void 0:e.$binanceSdk,a=null===e||void 0===e?void 0:e.$eventbus;return{binanceSdk:Object(r["d"])((function(){return n})),eventbus:Object(r["d"])((function(){return a}))}}},efdf:function(t,e,n){"use strict";n("2216")},f6d3:function(t,e,n){"use strict";n("8853")}});
//# sourceMappingURL=app.62b81b8d.js.map