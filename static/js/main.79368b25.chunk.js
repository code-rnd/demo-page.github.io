(this["webpackJsonptable-app"]=this["webpackJsonptable-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(33)},,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),u=n.n(c),o=n(1),l=n(5),i=n(12),s="CHANGE_SEARCH",d="CHANGE_SORT",m="CHANGE_ACTIVE_INPUT",p="CHANGE_CLEAR",h=function(e){return{type:s,data:e}};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={content:[].concat([{id:1,name:"\u0412\u0430\u0441\u044f",date:"15.06.2018",count:11},{id:2,name:"\u041f\u0435\u0442\u044f",date:"23.11.2018",count:23},{id:3,name:"\u0418\u0432\u0430\u043d",date:"12 \u043c\u0430\u0440\u0442\u0430 2017",count:3},{id:4,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",date:"20/12/2010",count:1},{id:5,name:"\u0415\u0432\u0433\u0435\u043d\u0438\u0439",date:"12.09.2018",count:112},{id:6,name:"\u041c\u0430\u0440\u0438\u044f",date:"1.08.2016",count:122},{id:7,name:"\u0410\u043d\u0430\u0441\u0442\u0430\u0441\u0438\u044f",date:"20.11.2018",count:34},{id:0,name:"\u0421\u0442\u0435\u043f\u0430\u043d",date:"12.11.2019",count:99},{id:8,name:"\u0421\u0442\u0435\u043f\u0430\u043d",date:"12.11.2019",count:10}]),sort:{value:"default",inputName:""},search:{filter:"",inputName:""},activeInput:null};var b=Object(l.b)({content:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return v({},e,{},{search:t.data});case d:var n=t.data;return v({},e,{},{sort:{value:n.flag,inputName:n.placeholder}});case m:return v({},e,{},{activeInput:t.data});case p:return v({},e,{},{sort:{value:t.data,inputName:t.data},activeInput:t.data,search:{filter:t.data,inputName:t.data}});default:return e}}}),O=Object(l.c)(b,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),g=(n(25),n(14));n(26);var j=Object(o.b)((function(e){return{activeInput:e.content.activeInput}}),(function(e){return{handleChangeSearch:function(t,n){return e(h(t))},handleChangeActiveInput:function(t){return e(function(e){return{type:m,data:e}}(t))}}}))((function(e){var t=e.placeholder,n=e.handleChangeSearch,c=e.id,u=e.activeInput,o=e.handleChangeActiveInput,l=u===c,i=Object(a.useState)(""),s=Object(g.a)(i,2),d=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement("input",{className:"input-text ".concat(l?"input-active":""),type:"text",placeholder:t,value:l?d:"","data-name":t,id:c,onChange:function(e){m(e.currentTarget.value),n({filter:e.currentTarget.value,inputName:e.currentTarget.dataset.name}),l?console.log("\u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0430"):o(c)}}))}));function y(e){var t=e.value,n=e.handleChangeSort,a=e.flag,c=e.id,u=e.placeholder;return r.a.createElement("div",null,r.a.createElement("input",{className:"inputBtnComp",type:"button",value:t,"data-placeholder":u,"data-id":c,onClick:function(){n({flag:a,placeholder:u})}}))}var N=[{flag:"up",icon:"up"},{flag:"down",icon:"down"},{flag:"default",icon:"default"}];n(27);var w=Object(o.b)((function(e){return{}}),(function(e){return{handleChangeSort:function(t){return e(function(e){return{type:d,data:e}}(t))}}}))((function(e){var t=e.handleChangeSort,n=e.placeholder;return r.a.createElement("div",{className:"sortMenuComp"},N.map((function(e,a){return r.a.createElement(y,{value:e.icon,flag:e.flag,handleChangeSort:t,placeholder:n,key:a,id:a})})))}));n(28);function C(e){var t=e.placeholder,n=e.id;return r.a.createElement("div",null,r.a.createElement(j,{placeholder:t,id:n}),r.a.createElement(w,{placeholder:t}))}function I(e){var t=e.data;return r.a.createElement("thead",null,r.a.createElement("tr",null,Object.keys(t).map((function(e,t){return r.a.createElement("th",{className:"col",key:t},e,r.a.createElement(C,{placeholder:e,id:t}))}))))}var S=function(e,t,n){return t&&""!==n?e.filter((function(e){return e[t].toString().toLowerCase().indexOf(n.toString().toLowerCase())>=0})):e},_=n(3);n(29);function k(e){var t=e.value;return r.a.createElement("td",{className:"cellBody"},t)}n(30);function D(e){var t=e.content,n=e.id;return r.a.createElement("tr",{className:"".concat(n%2?"":"rowComp-white"),key:n},Object.keys(t).map((function(e,n){return r.a.createElement(k,{value:t[e],key:n})})))}var T=n(13),A=function e(t,n,a){var r=this;return Object(T.a)(this,e),this.switchMethod=function(){return"id"===r.nameInput||"count"===r.nameInput?r.sortNumber(r.state,r.nameInput):"name"===r.nameInput?r.sortString(r.state,r.nameInput):"data"===r.nameInput?r.sortDate(r.state,r.nameInput):r.state},this.sortNumber=function(e,t){return Object(_.a)(e).sort((function(e,n){return e[t]-n[t]}))},this.sortDate=function(e,t){return Object(_.a)(e).sort((function(e,n){return new Date(e[t])-new Date(n[t])}))},this.sortString=function(e,t){return Object(_.a)(e).sort((function(e,n){var a=e[t].toLowerCase(),r=n[t].toLowerCase();return a<r?-1:a>r?1:0}))},this.state=Object(_.a)(t),this.nameInput=n,this.sort=a,console.log(this.sort,">>> ",this.nameInput),"up"===this.sort?this.switchMethod():"down"===this.sort?this.switchMethod().reverse():this.state};function L(e){var t=e.data,n=e.sort,a=e.nameInput,c=e.value,u=new A(t,a,n,c);return r.a.createElement("tbody",null,Object(_.a)(u).length?Object(_.a)(u).map((function(e,t){return r.a.createElement(D,{content:e,id:t,key:t})})):r.a.createElement(D,{content:["\u043d\u0435\u0442 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439"]}))}var P=Object(o.b)((function(e){return{activeInput:e.content.activeInput,sort:e.content.sort,search:e.content.search}}),(function(e){return{}}))((function(e){var t=e.dataLength,n=e.sort,a=e.search,c=n.value,u=n.inputName,o=a.filter;return r.a.createElement("div",null,r.a.createElement("h3",null,"\u0418\u0441\u043a\u043e\u043c\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430: ",o||"\u0438\u0441\u043a\u043e\u043c\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u043d\u0435 \u0437\u0430\u0434\u0430\u043d\u0430"),r.a.createElement("hr",null),r.a.createElement("h3",null,"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043f\u043e\u043b\u044e: ",a.inputName?a.inputName:"\u043f\u043e\u043b\u0435 \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"),r.a.createElement("h3",null,"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \u043f\u043e\u043b\u044e: ",u||"\u043f\u043e\u043b\u0435 \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"),r.a.createElement("h3",null,"\u041d\u0430\u043f\u0440\u0430\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438: ",""===c?"\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0435 \u0437\u0430\u0434\u0430\u043d\u043e":c),r.a.createElement("hr",null),r.a.createElement("h3",null,"\u041a\u043e\u043b-\u0432\u043e \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439: ",t||"0"))}));var H=Object(o.b)((function(e){return{}}),(function(e){return{handleClear:function(t){return e(function(e){return{type:p,data:e}}(t))}}}))((function(e){var t=e.handleClear;return r.a.createElement("div",null,r.a.createElement("input",{type:"button",value:"\u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u043f\u043e\u0438\u0441\u043a\u0430 \u0438 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438",onClick:function(){return t("")}}))}));n(31);var R=Object(o.b)((function(e){return{state:e}}),(function(e){return{handleChange:function(t){return e(h(t))}}}))((function(e){var t=e.state,n=t.content.search?t.content.search.inputName:"",a=t.content.search?t.content.search.filter:"",c=S(t.content.content,n,a),u=t.content.sort.inputName,o=(t.content.sort.value,t.content.sort.value);return r.a.createElement("div",{className:"tableWidget"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(P,{dataLength:c.length}),r.a.createElement(H,null)),r.a.createElement("table",null,r.a.createElement(I,{data:t.content.content[0]}),r.a.createElement(L,{data:c,sort:o,nameInput:u,value:a}))))}));n(32);u.a.render(r.a.createElement(o.a,{store:O},r.a.createElement(R,null)),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.79368b25.chunk.js.map