(this["webpackJsonptable-app"]=this["webpackJsonptable-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(36)},,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),i=a.n(r),o=a(3),l=a(8),u=a(2),m=a(1),s="ADD_ITEM",d="UPDATE_ITEM",b="REMOVE_ITEM",f="SEARCH_ITEM",v=function(e){return{type:s,data:e}},p=function(e){return{type:b,data:e}},O=function(e,t){if(!e||!t)return[];var a=Object(u.a)(e)[Object(u.a)(e).length-1].id+1,n=Object(u.a)(e);return n.push(Object(m.a)({},t,{id:a})),n},E=function(e,t){if(!e||!t)return[];var a=Object(u.a)(e);return Object(u.a)(e).map((function(e,n){e.id===t.id&&(a[n]=t)})),a},j=function(e,t){if(!e||!t)return[];var a=Object(u.a)(e);return Object(u.a)(e).map((function(e,n){e.id===t.id&&a.splice(n,1)})),a},g={data:{characteristic:Object(m.a)({},{id:"id",name:"\u041c\u0430\u0440\u043a\u0430",model:"\u041c\u043e\u0434\u0435\u043b\u044c",bodyType:"\u0422\u0438\u043f \u043a\u0443\u0437\u043e\u0432\u0430",transmission:"\u0422\u0438\u043f \u0442\u0440\u0430\u043d\u0441\u0438\u043c\u0438\u0441\u0441\u0438\u0438",engine:"\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043b\u044c",mileage:"\u041f\u0440\u043e\u0431\u0435\u0433",color:"\u0426\u0432\u0435\u0442"}),cars:[].concat([{id:0,name:"VW",model:"passat",bodyType:"sedan",transmission:"mechanical",engine:"BSE 1.6",mileage:17e4,color:"black"},{id:1,name:"VW",model:"polo",bodyType:"universal",transmission:"robot",engine:"AER 1.8T",mileage:90321,color:"white"},{id:3,name:"Skoda",model:"octavia",bodyType:"sedan",transmission:"automatic",engine:"BSE 1.6T",mileage:110400,color:"black"},{id:4,name:"Volvo",model:"s40",bodyType:"sedan",transmission:"mechanical",engine:"2.3T",mileage:235400,color:"blue"},{id:5,name:"Mazda",model:"6",bodyType:"sedan",transmission:"mechanical",engine:"2.5T",mileage:210453,color:"black"},{id:6,name:"Nissan",model:"Qashqai",bodyType:"crossover",transmission:"mechanical",engine:"1.8",mileage:3289,color:"white"},{id:7,name:"Kia",model:"cerato",bodyType:"hatchback",transmission:"automatic",engine:"1.4",mileage:145331,color:"white"},{id:8,name:"Toyota",model:"corola",bodyType:"sedan",transmission:"automatic",engine:"1.6",mileage:147070,color:"blue"},{id:9,name:"Lada",model:"priora",bodyType:"sedan",transmission:"mechanical",engine:"1.4",mileage:95664,color:"black"},{id:10,name:"Range Rover",model:"Sport",bodyType:"crossover",transmission:"robot",engine:"2.5",mileage:121067,color:"black"}])},searchString:""};var y=Object(l.b)({content:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a=Object(m.a)({},e.data),n=Object(u.a)(a.cars),c={},r=[],i="";switch(t.type){case s:return c=t.data,r=O(n,c),Object(m.a)({},e,{},{data:Object(m.a)({},a,{cars:Object(u.a)(r)})});case d:return c=t.data,r=E(n,c),Object(m.a)({},e,{},{data:Object(m.a)({},a,{cars:Object(u.a)(r)})});case b:return c=t.data,r=j(n,c),Object(m.a)({},e,{},{data:Object(m.a)({},a,{cars:Object(u.a)(r)})});case f:return i=t.data,Object(m.a)({},e,{},{searchString:i});default:return e}}}),h=Object(l.c)(y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),k=a(4),T=a(6);a(25);function I(e){var t=e.keyObj,a=e.valueObj,r=e.keyItem,i=e.getValueHook,o=Object(n.useState)(a),l=Object(k.a)(o,2),u=l[0],m=l[1],s=Object(n.useState)(""),d=Object(k.a)(s,2),b=d[0],f=d[1];return a?c.a.createElement("div",{className:"modalWindow-textField margin-top15"},t,c.a.createElement("input",{type:"text",value:u,onChange:function(e){var t;t=e.currentTarget.value,m(t),i(r,t)},disabled:"id"===t})):c.a.createElement("div",{className:"modalWindow-textField margin-top15"},t,c.a.createElement("input",{type:"text",value:b,onChange:function(e){var t;t=e.currentTarget.value,f(t),i(r,t)},disabled:"id"===t}))}var S=function(e){var t={};return Object.keys(e).map((function(e){return t=Object(m.a)({},t,Object(T.a)({},e,""))})),t},w=(a(26),function(e){var t=0;return Object.keys(e).map((function(a){""!==e[a]&&(t+=1)})),!t});function N(e){var t=e.car,a=e.characteristic,r=e.updateItem,i=e.removeItem,o=e.addItem,l=e.closed,u=Object(n.useState)(t),s=Object(k.a)(u,2),d=s[0],b=s[1],f=Object(n.useState)(S(a)),v=Object(k.a)(f,2),p=v[0],O=v[1];return c.a.createElement("div",{className:"modalWindow-background"},t&&a?function(){var e=function(e,t){b(Object(m.a)({},d,{},Object(T.a)({},e,t)))};return c.a.createElement("div",{className:"modalWindow"},Object.keys(a).map((function(n,r){return c.a.createElement(I,{keyObj:a[n],valueObj:t[n],key:r,keyItem:n,getValueHook:e})})),c.a.createElement("div",{className:"modalWindow-configButtons margin-top15"},c.a.createElement("input",{type:"button",value:"save",onClick:function(){r(Object(m.a)({},t,{},d)),l(!1)}}),c.a.createElement("input",{type:"button",value:"remove",onClick:function(){i(t),l(!1)}}),c.a.createElement("input",{type:"button",value:"cancel",onClick:function(){l(!1)}})))}():function(){var e=function(e,t){O(Object(m.a)({},p,{},Object(T.a)({},e,t)))};return c.a.createElement("div",{className:"modalWindow"},Object.keys(a).map((function(t,n){return c.a.createElement(I,{keyObj:a[t],getValueHook:e,keyItem:t,key:n})})),c.a.createElement("div",{className:"modalWindow-configButtons margin-top15"},c.a.createElement("input",{type:"button",value:"save",onClick:function(){o(p),l(!1)},disabled:w(p)}),c.a.createElement("input",{type:"button",value:"cancel",onClick:function(){l(!1)}})))}())}var C={updateItem:function(e){return{type:d,data:e}},removeItem:p,addItem:v},_=Object(o.b)((function(e){return{}}),C)(N);a(27);var V={removeItem:p},W=Object(o.b)((function(e){return{characteristic:e.content.data.characteristic}}),V)((function(e){var t=e.car,a=e.characteristic,r=e.removeItem,i=Object(n.useState)(!1),o=Object(k.a)(i,2),l=o[0],u=o[1];return c.a.createElement("div",{className:"menuConfig"},c.a.createElement("input",{type:"button",value:"edit",className:"menuConfig-button",onClick:function(){u(!l)}}),l?c.a.createElement(_,{car:t,characteristic:a,remove:r,closed:u}):"")}));a(28);function B(e){var t=e.value,a=e.car;return c.a.createElement("td",{className:"cell"},t,a?c.a.createElement(W,{car:a}):"")}a(29);function D(e){var t=e.characteristic;return c.a.createElement("thead",null,c.a.createElement("tr",null,t&&Object.keys(t).map((function(e,a){return c.a.createElement(B,{value:t[e],key:a})}))))}a(30);var R={addItem:v,searchItem:function(e){return{type:f,data:e}}},x=Object(o.b)((function(e){return{characteristic:e.content.data.characteristic}}),R)((function(e){var t=e.characteristic,a=e.addItem,r=e.searchItem,i=Object(n.useState)(!1),o=Object(k.a)(i,2),l=o[0],u=o[1],m=Object(n.useState)(""),s=Object(k.a)(m,2),d=s[0],b=s[1];return c.a.createElement("div",{className:"groupButtonConfig"},c.a.createElement("div",{className:"groupButtonConfig-configInputs"},c.a.createElement("input",{type:"text",value:d,placeholder:"global search...",onChange:function(e){var t;t=e.currentTarget.value,b(t),r(t)}}),c.a.createElement("input",{type:"button",value:"add item",onClick:function(){u(!l)}})),l?c.a.createElement(N,{characteristic:t,addItem:a,closed:u}):"")}));a(31);function M(e){var t=e.car;return c.a.createElement("tr",{className:"row"},t&&Object.keys(t).map((function(e,a){return c.a.createElement(B,{value:t[e],key:a})})),c.a.createElement(B,{car:t}))}var L=function(e,t){var a=!1,n=[];return e.map((function(e){Object.keys(e).map((function(n){e[n].toString().toLowerCase()===t.toLowerCase()&&(a=!0)})),a&&(n=[].concat(Object(u.a)(n),[e]),a=!1)})),n.length>0?n:e};a(32);var A=Object(o.b)((function(e){return{searchString:e.content.searchString}}),{})((function(e){var t=e.cars,a=e.searchString;return c.a.createElement("tbody",null,t&&t.length?L(t,a).map((function(e,t){return c.a.createElement(M,{car:e,key:t})})):c.a.createElement(M,null))}));a(33);var H=Object(o.b)((function(e){return{cars:e.content.data.cars,characteristic:e.content.data.characteristic}}),(function(e){return{}}))((function(e){var t=e.characteristic,a=e.cars;return c.a.createElement("div",{className:"table"},c.a.createElement(x,null),c.a.createElement("table",{className:"margin-top15"},c.a.createElement(D,{characteristic:t}),c.a.createElement(A,{cars:a})))}));a(34);a(35);i.a.render(c.a.createElement(o.a,{store:h},c.a.createElement((function(e){return c.a.createElement("div",{className:"widjet"},c.a.createElement(H,null))}),null)),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.4955e20b.chunk.js.map