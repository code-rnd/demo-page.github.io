(this["webpackJsonpcra-redux-default-app"]=this["webpackJsonpcra-redux-default-app"]||[]).push([[0],{14:function(e,t,a){e.exports=a(29)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(8),r=a.n(s),u=a(2),l=a(6),i=a(5),d=a(1),o={tasks:[].concat([{text:"\u0421\u044a\u0435\u0437\u0434\u0438\u0442\u044c \u0432 \u0430\u0432\u0442\u043e\u0441\u0430\u043b\u043e\u043d",status:!0},{text:"\u041f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u043f\u043b\u044f\u0436\u043d\u044b\u0435 \u0448\u043b\u0435\u043f\u0430\u043d\u0446\u044b",status:!1}]),selectedTasks:[],currentTask:null};var k=Object(l.b)({content:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0,a=Object(d.a)(e.tasks),n=Object(d.a)(e.selectedTasks),c=null,s=null;switch(t.type){case"ADD_TASK":return s=t.data,Object(i.a)({},e,{},{tasks:[].concat(Object(d.a)(e.tasks),[{text:s}])});case"REMOVE_TASK":return c=t.data,a.splice(c,1),n=Object(d.a)(e.selectedTasks.filter((function(e){return e!==c}))),Object(i.a)({},e,{},{tasks:Object(d.a)(a),selectedTasks:Object(d.a)(n)});case"SELECT_TASK":return a[c=t.data].status=!0,Object(i.a)({},e,{},{selectedTasks:[].concat(Object(d.a)(n),[c]),tasks:Object(d.a)(a)});case"UNSELECT_TASK":return a[c=t.data].status=!1,n=Object(d.a)(e.selectedTasks.filter((function(e){return e!==c}))),Object(i.a)({},e,{},{selectedTasks:Object(d.a)(n),tasks:Object(d.a)(a)});case"UPDATE_TASK":return c=t.data.id,s=t.data.text,a[c].text=s,Object(i.a)({},e,{},{tasks:Object(d.a)(a)});case"CURRENT_EDIT_TASK":return c=t.data,Object(i.a)({},e,{},{currentTask:c});default:return e}}}),T=Object(l.c)(k,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),E=(a(24),a(7));a(25);var m=Object(u.b)((function(e){return{currentTask:e.content.currentTask}}),{})((function(e){var t=e.tasks,a=e.handleClick,s=e.currentTask,r=Object(n.useState)(""),u=Object(E.a)(r,2),l=u[0],i=u[1];return Object(n.useEffect)((function(){i("")}),[t]),c.a.createElement("div",{className:"".concat(null!==s&&"disabled")},c.a.createElement("div",{className:"menu margin-top10"},c.a.createElement("input",{type:"text",value:l,onChange:function(e){i(e.currentTarget.value)},placeholder:"new task...",disabled:null!==s}),c.a.createElement("input",{type:"button",value:"Add Task",onClick:function(){a(l)},disabled:null!==s||!l})))}));a(26);var b={removeTask:function(e){return{type:"REMOVE_TASK",data:e}},selectTask:function(e){return{type:"SELECT_TASK",data:e}},unselectTask:function(e){return{type:"UNSELECT_TASK",data:e}},updateTask:function(e){return{type:"UPDATE_TASK",data:e}},currentEditTask:function(e){return{type:"CURRENT_EDIT_TASK",data:e}}},f=Object(u.b)((function(e){return{currentTask:e.content.currentTask}}),b)((function(e){var t=e.id,a=e.text,s=e.status,r=e.removeTask,u=e.selectTask,l=e.unselectTask,i=e.updateTask,d=e.currentEditTask,o=e.currentTask,k=Object(n.useState)(!1),T=Object(E.a)(k,2),m=T[0],b=T[1],f=Object(n.useState)(a),p=Object(E.a)(f,2),v=p[0],O=p[1];return c.a.createElement("div",{className:"task margin-top10"},m?c.a.createElement("div",{className:"edit"},c.a.createElement("input",{type:"text",value:v,onChange:function(e){O(e.currentTarget.value)}}),c.a.createElement("div",{className:"button-menu"},c.a.createElement("input",{type:"button",value:"save",onClick:function(){b(!m),i({id:t,text:v}),d(null)},disabled:!v}),c.a.createElement("input",{type:"button",value:"cancel",onClick:function(){b(!m),O(a),d(null)}}),c.a.createElement("input",{type:"button",value:"remove",onClick:function(){b(!m),r(t),d(null)}}))):function(){var e=function(){return null!==o&&o!==t};return c.a.createElement("div",{className:"view ".concat(e()&&"disabled")},c.a.createElement("label",null,c.a.createElement("div",{className:"text_and_input-menu"},c.a.createElement("input",{type:"checkbox",defaultChecked:s,onChange:function(e){e.currentTarget.checked?u(t):l(t)},disabled:e()}),c.a.createElement("div",{className:"task-text ".concat(s&&"text-strike")},a)),c.a.createElement("div",{className:"button-menu"},c.a.createElement("input",{type:"button",value:"edit",onClick:function(){b(!m),d(t)},disabled:e()}))))}())}));function p(e){var t=e.tasks;return c.a.createElement("div",{className:"tasks"},t.map((function(e,t){var a=e.text,n=e.status;return c.a.createElement(f,{text:a,status:n,key:t,id:t})})))}a(27);var v=Object(u.b)((function(e){return{tasks:e.content.tasks,selectedTasks:e.content.selectedTasks,currentTask:e.content.currentTask}}),{})((function(e){var t=e.tasks,a=e.selectedTasks,n=e.currentTask;return c.a.createElement("div",{className:"display margin-top10"},null!==n?"Edit status":"Work status",c.a.createElement("div",null,"Tasks: ".concat(t.length)),c.a.createElement("div",null,"Tasks complete: ".concat(a.length)))}));a(28);var O={addTask:function(e){return{type:"ADD_TASK",data:e}}},j=Object(u.b)((function(e){return{state:e,tasks:e.content.tasks}}),O)((function(e){var t=e.tasks,a=e.addTask;return c.a.createElement("div",{className:"widjet"},c.a.createElement(v,null),c.a.createElement(m,{handleClick:a,tasks:t}),c.a.createElement(p,{tasks:t}))}));r.a.render(c.a.createElement(u.a,{store:T},c.a.createElement(j,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b276ead1.chunk.js.map