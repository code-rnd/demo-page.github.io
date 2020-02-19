(this["webpackJsonpcra-redux-default-app"]=this["webpackJsonpcra-redux-default-app"]||[]).push([[0],{23:function(e,t,n){e.exports=n(54)},34:function(e,t,n){},35:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),u=n.n(r),i=n(4),o=n(3),l=n(2),s={default:[].concat([{id:0,name:"defaultName",phone:"404"},{id:1,name:"defaultName",phone:"505"}])};var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:"INCREMENT_COUNTER",data:e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:"DECREMENT_COUNTER",data:e}},E={count:0};var v=function(e){return{type:"TOGGLE_IS_FETCHING",data:e}},p={data:{hero:null},isFetching:!1};var f=Object(o.combineReducers)({content:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_TEXT":return Object(l.a)({},e,{},{text:t.data});default:return e}},counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,n=e.count,a=0;switch(t.type){case"INCREMENT_COUNTER":return a=n+(a=t.data),Object(l.a)({},e,{},{count:a});case"DECREMENT_COUNTER":return a=n-(a=t.data),Object(l.a)({},e,{},{count:a});default:return e}},sw:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,n=e.data,a=null,c=null;switch(t.type){case"SET_HERO":return a=t.data,Object(l.a)({},e,{},{data:Object(l.a)({},n,{hero:a})});case"TOGGLE_IS_FETCHING":return c=t.data,Object(l.a)({},e,{},{isFetching:c});default:return e}}}),h=n(20),b=n(21),g=Object(o.createStore)(f,Object(h.composeWithDevTools)(Object(o.applyMiddleware)(b.a))),N=n(5);n(34);var C={incrementCounter:m,decrementCounter:d,incrementCounterAsync:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return function(n){setTimeout((function(){n(m(e))}),1e3*t)}},decrementCounterAsync:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return function(n){setTimeout((function(){n(d(e))}),1e3*t)}}},T=Object(i.b)((function(e){return{count:e.counter.count}}),C)((function(e){var t=e.incrementCounter,n=e.decrementCounter,r=e.incrementCounterAsync,u=e.decrementCounterAsync,i=e.count,o=Object(a.useState)(1),l=Object(N.a)(o,2),s=l[0],m=l[1],d=Object(a.useState)(1),E=Object(N.a)(d,2),v=E[0],p=E[1];return c.a.createElement("div",{className:"counter"},c.a.createElement("div",{className:"display"},i),c.a.createElement("div",{className:"counter__container counter-increment"},c.a.createElement("div",{className:"input-increment"},c.a.createElement("input",{type:"text",value:s,onChange:function(e){m(+e.currentTarget.value)}})),c.a.createElement("div",{className:"btn-increment"},c.a.createElement("input",{type:"button",value:"incr",onClick:function(){t(s)}}),c.a.createElement("input",{type:"button",value:"incr-Async",onClick:function(){r(s)}}))),c.a.createElement("div",{className:"counter__container counter-decrement"},c.a.createElement("div",{className:"input-decrement"},c.a.createElement("input",{type:"text",value:v,onChange:function(e){p(+e.currentTarget.value)}})),c.a.createElement("div",{className:"btn-decrement"},c.a.createElement("input",{type:"button",value:"decr",onClick:function(){n(v)}}),c.a.createElement("input",{type:"button",value:"decr-Async",onClick:function(){u(v)}}))))}));n(35);var y={changeText:function(e){return{type:"CHANGE_TEXT",data:e}}},O=Object(i.b)((function(e){return{currentText:e.content.text}}),y)((function(e){var t=e.changeText,n=e.currentText;return c.a.createElement("div",{className:"default margin-top20px"},c.a.createElement("div",null,c.a.createElement("span",null,n&&" "!==n?n:"\u043d\u0430\u043f\u0435\u0447\u0430\u0442\u0430\u0439")),c.a.createElement("br",null),c.a.createElement("div",null,c.a.createElement("input",{type:"text",placeholder:"text",onChange:function(e){return t(e.currentTarget.value)}})))})),j=n(22),_=n.n(j).a.create({baseURL:"https://swapi.co/api/"}),x=function(e){return _.get("people/".concat(e,"/")).then((function(e){return e.data}))};var w={getHero:function(e){return function(t){t(v(!0)),x(e).then((function(e){t(v(!1)),t({type:"SET_HERO",data:e.name})})).catch((function(e){t(v(!1))}))}}},R=Object(i.b)((function(e){return{hero:e.sw.data.hero,isFetching:e.sw.isFetching}}),w)((function(e){var t=e.getHero,n=e.hero,r=e.isFetching,u=Object(a.useState)(1),i=Object(N.a)(u,2),o=i[0],l=i[1];return c.a.createElement("div",{className:"sw"},r?c.a.createElement("div",{className:"spin"},"\u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e..."):c.a.createElement("div",{className:"sw__display"},c.a.createElement("div",null,"\u0433\u0435\u0440\u043e\u0439: ",n||"\u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")),c.a.createElement("div",{className:"sw__configMenu"},c.a.createElement("div",{className:"configInput"},c.a.createElement("input",{type:"text",value:o,onChange:function(e){l(+e.currentTarget.value)}})),c.a.createElement("div",{className:"configBtns"},c.a.createElement("input",{type:"button",value:"getHero",onClick:function(){t(o)}}))))}));n(53);u.a.render(c.a.createElement(i.a,{store:g},c.a.createElement((function(e){return c.a.createElement("div",{className:"widjet"},c.a.createElement(T,null),c.a.createElement(O,null),c.a.createElement(R,null))}),null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.f1d6f058.chunk.js.map