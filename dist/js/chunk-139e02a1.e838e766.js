(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-139e02a1"],{"0ccf":function(e,t,n){},"14db":function(e,t,n){},"26d3":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),l=n("d77c"),i=["tabindex"],u={key:0,class:"select-options"},o=["onClick"],a=Object(c["l"])({props:{label:null,modelValue:null,options:null,tabindex:{default:1},placeholder:null},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,l=e,a=Object(c["B"])(null),r=Object(c["B"])(!1);function s(e){a.value=e,r.value=!1,n("update:modelValue",e)}return Object(c["u"])((function(){return!l.modelValue&&s(l.options[0])})),function(t,n){return Object(c["w"])(),Object(c["h"])("div",{class:"select",tabindex:e.tabindex,onBlur:n[2]||(n[2]=function(e){return r.value=!1})},[Object(c["i"])("label",{onClick:n[0]||(n[0]=function(e){return r.value=!0}),class:"select-label"},Object(c["G"])(e.label),1),Object(c["i"])("div",{class:Object(c["q"])(["select-btn",r.value?"select-btn__active":"select-btn__disabled"]),onClick:n[1]||(n[1]=function(e){return r.value=!r.value})},[Object(c["j"])(Object(c["G"])(a.value)+" ",1),Object(c["i"])("span",{class:Object(c["q"])(["chevron",{chevron__active:r.value}])},null,2)],2),Object(c["k"])(c["c"],{name:"popup",mode:"out-in"},{default:Object(c["J"])((function(){return[r.value?(Object(c["w"])(),Object(c["h"])("div",u,[(Object(c["w"])(!0),Object(c["h"])(c["a"],null,Object(c["C"])(e.options,(function(e){return Object(c["w"])(),Object(c["h"])("div",{key:e,onClick:function(t){return s(e)},class:"options-item"},Object(c["G"])(e),9,o)})),128))])):Object(c["g"])("",!0)]})),_:1})],40,i)}}}),r=(n("a54a"),n("6b0d")),s=n.n(r);const b=s()(a,[["__scopeId","data-v-42f68365"]]);var d=b,j={key:0,class:"orders-container"},O=Object(c["i"])("h1",{class:"orders-header"},"Hot",-1),f={class:"orders-list"},p=Object(c["i"])("hr",{class:"order-line"},null,-1),v=Object(c["j"])(" New Bid: "),h={class:"order-info"},k=Object(c["i"])("hr",{class:"order-line"},null,-1),w=Object(c["j"])(" New Ask: "),m={class:"order-info"},_=Object(c["i"])("hr",{class:"order-line"},null,-1),g=Object(c["l"])({props:{orders:null},setup:function(e){return function(t,n){return e.orders.length?(Object(c["w"])(),Object(c["h"])("div",j,[O,Object(c["i"])("ul",f,[(Object(c["w"])(!0),Object(c["h"])(c["a"],null,Object(c["C"])(e.orders,(function(e){return Object(c["w"])(),Object(c["h"])("li",{key:e.ask._id+e.bid._id},[p,Object(c["i"])("p",null,[v,Object(c["i"])("span",h,Object(c["G"])(e.bid.price),1)]),k,Object(c["i"])("p",null,[w,Object(c["i"])("span",m,Object(c["G"])(e.ask.price),1)]),_])})),128))])])):Object(c["g"])("",!0)}}});n("e2ac");const y=g;var B=y,G=n("4ac1"),V=function(e){return Object(c["z"])("data-v-0891f503"),e=e(),Object(c["x"])(),e},C={class:"settings"},x={class:"settings-main"},J=Object(c["j"])("Go to order book"),A=V((function(){return Object(c["i"])("div",{class:"settings-info"},' Select a pair from the pop-up in the list. After your selection, the data will be automatically updated. There will be unsubscriptions from the previous pair and subscriptions to the current one. Then you can return to the main tab by navigating in the header or by clicking on the "Go to order book" button ',-1)})),I=Object(c["l"])({setup:function(e){var t=Object(l["a"])(),n=t.eventbus,i=Object(c["B"])(""),u=Object(c["B"])([]);return Object(c["I"])(i,(function(e){n.value.emit("update:Symbol",e),u.value=[]})),n.value.on("update:Diff",(function(e){var t=e.newBid,n=e.newAsk,c={bid:t,ask:n};u.value.unshift(c)})),function(e,t){var n=Object(c["D"])("router-link");return Object(c["w"])(),Object(c["h"])("div",null,[Object(c["i"])("div",C,[Object(c["i"])("div",x,[Object(c["k"])(d,{label:"Select pair",modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.value=e}),options:Object(c["H"])(G["a"])},null,8,["modelValue","options"]),Object(c["k"])(n,{to:"/",class:"settings-button"},{default:Object(c["J"])((function(){return[J]})),_:1}),Object(c["k"])(B,{orders:u.value},null,8,["orders"])]),A])])}}});n("6f59");const S=s()(I,[["__scopeId","data-v-0891f503"]]);t["default"]=S},"31e9":function(e,t,n){},"6f59":function(e,t,n){"use strict";n("31e9")},a54a:function(e,t,n){"use strict";n("14db")},e2ac:function(e,t,n){"use strict";n("0ccf")}}]);
//# sourceMappingURL=chunk-139e02a1.e838e766.js.map